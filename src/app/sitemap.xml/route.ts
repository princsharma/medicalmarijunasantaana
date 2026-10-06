import { headers } from "next/headers";
import {
  buildSitemapXml,
  getSitemapEntries,
  resolveSitemapBaseUrl,
} from "@/lib/sitemap";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const headerStore = await headers();
  const baseUrl = resolveSitemapBaseUrl(request, (name) => headerStore.get(name));
  const entries = getSitemapEntries(baseUrl);
  const xml = buildSitemapXml(entries);

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
