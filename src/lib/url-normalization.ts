import { siteConfig } from "@/data/site";

/** Canonical site origin without trailing slash, e.g. https://example.com */
export function getCanonicalOrigin() {
  return siteConfig.url.replace(/\/$/, "");
}

/** Build an absolute canonical URL for a path segment ("" or "/about-us"). */
export function getCanonicalUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : path ? `/${path}` : "";
  if (normalizedPath === "" || normalizedPath === "/") {
    return `${getCanonicalOrigin()}/`;
  }
  return `${getCanonicalOrigin()}${normalizedPath.replace(/\/+$/, "")}`;
}

/**
 * Normalize a pathname for SEO: lowercase, collapse slashes, remove trailing slash.
 * Returns null when no change is needed.
 */
export function normalizePathname(pathname: string): string | null {
  let normalized = pathname;

  const lower = normalized.toLowerCase();
  if (lower !== normalized) {
    normalized = lower;
  }

  if (normalized.includes("//")) {
    normalized = normalized.replace(/\/{2,}/g, "/");
  }

  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }

  return normalized === pathname ? null : normalized;
}

/** Whether the request host should redirect to the canonical production host. */
export function getCanonicalHostRedirect(host: string): string | null {
  if (process.env.NODE_ENV !== "production") return null;

  const canonicalHost = new URL(siteConfig.url).host;
  const bareHost = host.split(":")[0]?.toLowerCase() ?? "";

  if (!bareHost || bareHost === canonicalHost) return null;

  if (bareHost === `www.${canonicalHost}`) {
    return canonicalHost;
  }

  return null;
}
