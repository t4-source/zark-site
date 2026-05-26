export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { signSession, setSessionCookie } from "@/lib/auth";
import { verifyPassword, getUserByEmail } from "@/lib/users";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Accept either `email` or legacy `username` field.
    const rawId = String(body?.email || body?.username || "").trim();
    const password = String(body?.password || "");

    if (!rawId || !password) {
      return NextResponse.json(
        { error: "Missing credentials" },
        { status: 400 },
      );
    }

    let email = rawId.toLowerCase();
    // If the user typed a bare username like "admin", try mapping to seed admin email.
    if (!email.includes("@")) {
      const adminEmail = (
        process.env.ADMIN_EMAIL || "admin@zarkandco.in"
      ).toLowerCase();
      if (
        email === "admin" ||
        email === (process.env.ADMIN_USERNAME || "").toLowerCase()
      ) {
        email = adminEmail;
      } else {
        return NextResponse.json(
          { error: "Invalid credentials" },
          { status: 401 },
        );
      }
    }

    const user = await verifyPassword(email, password);
    if (!user) {
      // Touch the user file to seed admin if needed, then re-error.
      await getUserByEmail(email);
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    const token = signSession(user);
    const res = NextResponse.json({
      ok: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
    setSessionCookie(res, token);
    return res;
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
