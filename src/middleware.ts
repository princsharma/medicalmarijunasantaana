import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCanonicalHostRedirect, normalizePathname } from "@/lib/url-normalization";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get("host") ?? "";

  const canonicalHost = getCanonicalHostRedirect(host);
  const normalizedPath = normalizePathname(pathname);

  if (canonicalHost || normalizedPath) {
    const url = request.nextUrl.clone();

    if (canonicalHost) {
      url.host = canonicalHost;
      url.protocol = "https:";
    }

    if (normalizedPath) {
      url.pathname = normalizedPath;
    }

    url.search = search;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run on all routes except static assets, Next internals, and common files.
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xsl|xml|txt|woff2?)$).*)",
  ],
};
