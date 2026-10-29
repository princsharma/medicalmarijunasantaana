/** Static Open Graph cards in `public/OG_Images/`. */
export const DEFAULT_OG_CARD_PATH = "/OG_Images/home feature.webp";

const HUB_OG_CARD_PATHS: Record<string, string> = {
  "/our-authors":
    "/OG_Images/doctor conducting a telehealth consultation.webp",
  "/contact-us":
    "/OG_Images/contributors collaborating and sharing ideas around a table.webp",
  "/blog":
    "/OG_Images/laptop with an open notebook and pencil on a desk.webp",
  "/about-us": "/OG_Images/doctor conducting a telehealth consultation.webp",
  "/doctors":
    "/OG_Images/professional talking on mobile phone beside a laptop.webp",
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
