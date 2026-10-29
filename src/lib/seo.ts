import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { getCanonicalOrigin, getCanonicalUrl } from "@/lib/url-normalization";

/** Site origin for metadata (use localhost in local `.env` for OG debuggers). */
export function getMetadataBaseUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return new URL(fromEnv.endsWith("/") ? fromEnv : `${fromEnv}/`);
  }
  if (process.env.NODE_ENV === "development") {
    return new URL("https://medicalmarijunasantaana.vercel.app/");
  }
  return new URL(getCanonicalOrigin() + "/");
}

/** Absolute URL for OG/Twitter images (API routes, static files, etc.). */
export function getAbsoluteOgImageUrl(imagePath: string) {
  const normalized = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  return new URL(normalized, getMetadataBaseUrl()).toString();
}

/** Path to the segment's generated `opengraph-image` (1200×630). */
export function getRouteOgImagePath(pagePath: string) {
  if (pagePath === "/" || pagePath === "") return "/opengraph-image";
  return `${pagePath.replace(/\/$/, "")}/opengraph-image`;
}

type PageSeoInput = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  /** Set to `false` to omit images and use route `opengraph-image` metadata. */
  ogImage?: string | false;
  /** Use for homepage-style titles that should not append the site name template */
  absoluteTitle?: boolean;
  openGraphType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  imageAlt?: string;
  /** Omit fixed 1200×630 when using portrait/static assets (e.g. doctor photos). */
  ogImageDimensions?: "auto";
};

export function buildMetadata({
  title,
  description,
  path = "",
  noIndex = false,
  ogImage,
  absoluteTitle = false,
  openGraphType = "website",
  publishedTime,
  modifiedTime,
  authors,
  imageAlt,
  ogImageDimensions,
}: PageSeoInput): Metadata {
  const url = getCanonicalUrl(path);
  const imagePath =
    ogImage === false ? undefined : (ogImage ?? siteConfig.ogImage);
  const image = imagePath ? getAbsoluteOgImageUrl(imagePath) : undefined;
  const resolvedImageAlt =
    imageAlt ?? (absoluteTitle ? title : `${title} | ${siteConfig.name}`);
  const imageMeta = image
    ? [
        ogImageDimensions === "auto"
          ? { url: image, alt: resolvedImageAlt }
          : { url: image, width: 1200, height: 630, alt: resolvedImageAlt },
      ]
    : undefined;

  const openGraphBase = {
    locale: "en_US" as const,
    url,
    siteName: siteConfig.name,
    title,
    description,
    ...(imageMeta ? { images: imageMeta } : {}),
  };

  const openGraph: Metadata["openGraph"] =
    openGraphType === "article"
      ? {
          type: "article",
          ...openGraphBase,
          publishedTime,
          modifiedTime,
          authors,
        }
      : {
          type: "website",
          ...openGraphBase,
        };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    metadataBase: getMetadataBaseUrl(),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image
        ? { images: [{ url: image, alt: resolvedImageAlt }] }
        : {}),
    },
  };
}
