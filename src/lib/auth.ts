import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import type { NextResponse } from "next/server";
import { getUserById, type UserRecord } from "./users";

export const COOKIE_NAME = "zark-session";

function secret() {
  return process.env.JWT_SECRET || "dev-secret-change-me";
}

export interface Session {
  uid: string;
  role: "admin" | "employee";
  name: string;
  email: string;
}

export function signSession(user: UserRecord): string {
  return jwt.sign(
    { uid: user.id, role: user.role, name: user.name, email: user.email },
    secret(),
    { expiresIn: "12h" },
  );
}

function verify(token: string | undefined): Session | null {
  if (!token) return null;
  try {
    const payload = jwt.verify(token, secret()) as Session;
    if (!payload?.uid) return null;
    return payload;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<Session | null> {
  const jar = await cookies();
  const token =
    jar.get(COOKIE_NAME)?.value || jar.get("admin-token")?.value;
  return verify(token);
}

export async function getCurrentUser(): Promise<UserRecord | null> {
  const s = await getSession();
  if (!s) return null;
  return getUserById(s.uid);
}

const COOKIE_BASE = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
};

export function setSessionCookie(
  res: NextResponse,
  token: string,
): void {
  const opts = {
    ...COOKIE_BASE,
    secure: process.env.NODE_ENV === "production",
    maxAge: 12 * 60 * 60,
  };
  res.cookies.set(COOKIE_NAME, token, opts);
  res.cookies.set("admin-token", token, opts);
}

export function clearSessionCookie(res: NextResponse): void {
  const opts = { ...COOKIE_BASE, maxAge: 0 };
  res.cookies.set(COOKIE_NAME, "", opts);
  res.cookies.set("admin-token", "", opts);
}
