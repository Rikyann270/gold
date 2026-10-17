import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true, message: "Site re-locked" });
  response.cookies.delete("ab_preview_access");
  return response;
}
