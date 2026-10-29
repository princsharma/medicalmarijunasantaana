/**
 * Paths that should return HTTP 410 Gone instead of 404 or a redirect.
 * Add retired URLs here when content is permanently removed.
 */
export const gonePaths = ["/gone"] as const;

const gonePathSet = new Set<string>(gonePaths);

export function isGonePath(pathname: string) {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return gonePathSet.has(normalized);
}
