/** Static Open Graph cards in `public/media/`. */
export const DEFAULT_OG_CARD_PATH = "/media/home-feature.webp";

const HUB_OG_CARD_PATHS: Record<string, string> = {
  "/our-authors":
    "/media/doctor conducting a telehealth consultation.webp",
  "/contact-us":
    "/media/contributors-collaborating.webp",
  "/blog":
    "/media/laptop-paper.webp",
  "/about-us":
    "/media/doctor conducting a telehealth consultation.webp",
  "/doctors":
    "/media/doctor conducting.webp",
};

function normalizePagePath(pagePath: string) {
  if (!pagePath || pagePath === "/") return "/";
  return pagePath.replace(/\/$/, "");
}

/** Hub and listing pages: dedicated card, or home feature as default. */
export function getHubOgImagePath(pagePath = "") {
  const normalized = normalizePagePath(pagePath);
  if (normalized === "/") return DEFAULT_OG_CARD_PATH;
  return HUB_OG_CARD_PATHS[normalized] ?? DEFAULT_OG_CARD_PATH;
}
