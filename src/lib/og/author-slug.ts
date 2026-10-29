import type { Contributor } from "@/data/contributors";
import { contributorDisplayName } from "@/data/contributors";
import { DEFAULT_OG_CARD_PATH } from "@/lib/og/og-cards";

export function getAuthorSlugOgAlt(contributor: Contributor) {
  return `${contributorDisplayName(contributor)} — Medical Marijuana Card Santa Ana`;
}

/** Same file as the author profile hero (`public/authors/...`). */
export function getAuthorSlugOgImagePath(contributor: Contributor) {
  return contributor.photo ?? DEFAULT_OG_CARD_PATH;
}
