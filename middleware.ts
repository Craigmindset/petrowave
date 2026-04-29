import { NextRequest, NextResponse } from "next/server";

function hasSupabaseAuthCookie(request: NextRequest): boolean {
  // Supabase stores session state in cookies named like sb-<project-ref>-auth-token.
  return request.cookies
    .getAll()
    .some(
      (cookie) =>
        cookie.name.startsWith("sb-") && cookie.name.includes("-auth-token"),
    );
}

export function middleware(request: NextRequest) {
  if (!hasSupabaseAuthCookie(request)) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
