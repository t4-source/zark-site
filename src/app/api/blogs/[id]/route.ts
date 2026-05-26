export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getBlog, removeBlog, updateBlog } from "@/lib/blogs";

export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  const { id } = await ctx.params;
  const blog = await getBlog(id);
  if (!blog) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  const session = await getSession();
  if (blog.status !== "published" && !session) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ blog });
}

export async function PUT(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  const { id } = await ctx.params;
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const existing = await getBlog(id);
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  if (session.role !== "admin" && existing.authorId !== session.uid) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const body = await req.json();
  const blog = await updateBlog(id, {
    title: body.title,
    excerpt: body.excerpt,
    content: body.content,
    status: body.status,
    featuredImage: body.featuredImage,
    images: Array.isArray(body.images) ? body.images : undefined,
  });
  return NextResponse.json({ blog });
}

export async function DELETE(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  const { id } = await ctx.params;
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const existing = await getBlog(id);
  if (!existing) {
    return NextResponse.json({ ok: true });
  }
  if (session.role !== "admin" && existing.authorId !== session.uid) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  await removeBlog(id);
  return NextResponse.json({ ok: true });
}
