import type { Metadata } from "next";
import { getHubOgImagePath } from "@/lib/og/og-cards";
import { buildMetadata } from "@/lib/seo";

/** Hub/listing pages: OG/Twitter use static cards from `public/media/`. */
export async function buildHubMetadata(
  input: Parameters<typeof buildMetadata>[0],
): Promise<Metadata> {
  return buildMetadata({
    ...input,
    ogImage: getHubOgImagePath(input.path ?? ""),
    ogImageDimensions: "auto",
  });
}
