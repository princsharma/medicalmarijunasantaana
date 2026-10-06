import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { doctors } from "@/data/doctors";
import { siteConfig } from "@/data/site";
import { getCanonicalOrigin } from "@/lib/url-normalization";

const STATIC_PAGES = [
  "",
  "/about-us",
  "/contact-us",
  "/doctors",
  "/blog",
  "/faq",
  "/reviews",
  "/terms-of-use",
  "/privacy-policy",
  "/refund-policy",
  "/shipment-policy-and-disclaimer",
] as const;

type HeaderGetter = (name: string) => string | null;

function getRequestUrl(request: Request, getHeader: HeaderGetter): URL {
  if (request.url.startsWith("http://") || request.url.startsWith("https://")) {
    return new URL(request.url);
  }

  const host =
    getHeader("x-forwarded-host")?.split(",")[0]?.trim() ?? getHeader("host");

  if (!host) {
    if (process.env.NODE_ENV === "development") {
      return new URL(request.url, "http://localhost:3000");
    }
    return new URL(request.url, siteConfig.url);
  }

  const forwardedProto = getHeader("x-forwarded-proto")?.split(",")[0]?.trim();
  const isLocal =
    host.includes("localhost") || host.startsWith("127.0.0.1") || host.endsWith(".local");
  const protocol = forwardedProto ?? (isLocal ? "http" : "https");

  return new URL(request.url, `${protocol}://${host}`);
}

/**
 * Production sitemaps always use the canonical domain from site config.
 * In development, use the request origin so localhost links stay local.
 */
export function resolveSitemapBaseUrl(
  request: Request,
  getHeader: HeaderGetter = (name) => request.headers.get(name),
): string {
  if (process.env.NODE_ENV === "production") {
    return getCanonicalOrigin();
  }
  return getRequestUrl(request, getHeader).origin;
}

export function getSitemapEntries(baseUrl: string): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const origin = baseUrl.replace(/\/$/, "");

  return [
    ...STATIC_PAGES.map((path) => ({
      url: `${origin}${path}`,
      lastModified,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/contact-us" ? 0.8 : 0.6,
    })),
    ...doctors.map((doctor) => ({
      url: `${origin}/doctors/${doctor.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${origin}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatLastMod(date?: string | Date): string {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toISOString();
}

export function buildSitemapXml(entries: MetadataRoute.Sitemap): string {
  const urls = entries
    .map((entry) => {
      const parts = [`    <loc>${escapeXml(entry.url)}</loc>`];

      if (entry.lastModified) {
        parts.push(`    <lastmod>${formatLastMod(entry.lastModified)}</lastmod>`);
      }
      if (entry.changeFrequency) {
        parts.push(`    <changefreq>${entry.changeFrequency}</changefreq>`);
      }
      if (entry.priority !== undefined) {
        parts.push(`    <priority>${entry.priority}</priority>`);
      }

      return `  <url>\n${parts.join("\n")}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
