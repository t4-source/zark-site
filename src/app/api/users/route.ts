export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { createUser, listUsers } from "@/lib/users";

export async function GET() {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return NextResponse.json({ users: await listUsers() });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  try {
    const body = await req.json();
    const user = await createUser({
      email: String(body.email || ""),
      name: String(body.name || ""),
      password: String(body.password || ""),
      role: body.role === "admin" ? "admin" : "employee",
      createdBy: session.uid,
    });
    return NextResponse.json({ user }, { status: 201 });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Bad request";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
