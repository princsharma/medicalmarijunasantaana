/** Static Open Graph cards in `public/og-images/`. */
export const DEFAULT_OG_CARD_PATH = "/og-images/home-feature.webp";

const HUB_OG_CARD_PATHS: Record<string, string> = {
  "/our-authors":
    "/og-images/doctor conducting a telehealth consultation.webp",
  "/contact-us":
    "/og-images/contributors collaborating and sharing ideas around a table.webp",
  "/blog":
    "/og-images/laptop with an open notebook and pencil on a desk.webp",
  "/about-us":
    "/og-images/hand holding a pen over an open notebook.webp",
  "/doctors":
    "/og-images/professional talking on mobile phone beside a laptop.webp",
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
