import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/site";

// Sends visitors without a language prefix to /en or /es based on their browser language.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasPrefix = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasPrefix) return;

  const accept = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const locale = accept.startsWith("es") ? "es" : defaultLocale;

  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals and files with an extension (sitemap.xml, robots.txt, images).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
