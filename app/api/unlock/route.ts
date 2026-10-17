import { NextResponse } from "next/server";
import { PREVIEW_SECRET } from "@/lib/launchConfig";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    if (password === PREVIEW_SECRET) {
      const response = NextResponse.json({ success: true });
      response.cookies.set("ab_preview_access", PREVIEW_SECRET, {
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
        sameSite: "lax",
      });
      return response;
    }

    return NextResponse.json(
      { success: false, error: "Incorrect passcode." },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
