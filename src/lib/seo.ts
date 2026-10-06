import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { getCanonicalUrl } from "@/lib/url-normalization";

type PageSeoInput = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  ogImage?: string;
  /** Use for homepage-style titles that should not append the site name template */
  absoluteTitle?: boolean;
  openGraphType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
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
}: PageSeoInput): Metadata {
  const url = getCanonicalUrl(path);
  const image = ogImage ?? siteConfig.ogImage;
  const imageAlt = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  const openGraph: Metadata["openGraph"] =
    openGraphType === "article"
      ? {
          type: "article",
          locale: "en_US",
          url,
          siteName: siteConfig.name,
          title,
          description,
          images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
          publishedTime,
          modifiedTime,
          authors,
        }
      : {
          type: "website",
          locale: "en_US",
          url,
          siteName: siteConfig.name,
          title,
          description,
          images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
        };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
  };
}
