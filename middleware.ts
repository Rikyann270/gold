import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COMING_SOON_ACTIVE, PREVIEW_SECRET } from "./lib/launchConfig";

export function middleware(request: NextRequest) {
  // If Coming Soon is disabled (e.g. after client payment), pass all requests through
  if (!COMING_SOON_ACTIVE) {
    return NextResponse.next();
  }

  const { pathname, searchParams } = request.nextUrl;

  // Always allow Next internals, APIs, and static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    /\.(?:svg|png|jpg|jpeg|gif|webp|mp4|css|js|ico|woff|woff2|ttf)$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Developer bypass via URL query param: ?preview=aurum2026 or ?pass=aurum2026
  const previewParam = searchParams.get("preview") || searchParams.get("pass");
  if (previewParam === PREVIEW_SECRET) {
    const cleanUrl = new URL(pathname, request.url);
    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set("ab_preview_access", PREVIEW_SECRET, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: "lax",
    });
    return response;
  }

  // Check if developer has previously unlocked access with the cookie
  const authCookie = request.cookies.get("ab_preview_access")?.value;
  if (authCookie === PREVIEW_SECRET) {
    return NextResponse.next();
  }

  // Allow direct access to the coming-soon page route
  if (pathname === "/coming-soon") {
    return NextResponse.next();
  }

  // Server-side rewrite all other pages to /coming-soon
  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = "/coming-soon";
  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
