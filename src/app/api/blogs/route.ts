export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { createBlog, listBlogs } from "@/lib/blogs";

export async function GET(req: NextRequest) {
  const session = await getSession();
  const url = new URL(req.url);
  const requestedStatus = url.searchParams.get("status") as
    | "published"
    | "draft"
    | "all"
    | null;

  if (!session) {
    return NextResponse.json({
      blogs: await listBlogs({ status: "published" }),
    });
  }

  if (requestedStatus === "all") {
    return NextResponse.json({ blogs: await listBlogs() });
  }
  if (requestedStatus === "draft") {
    return NextResponse.json({ blogs: await listBlogs({ status: "draft" }) });
  }
  return NextResponse.json({
    blogs: await listBlogs({ status: "published" }),
  });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await req.json();
    if (!body?.title || !body?.content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 },
      );
    }
    const blog = await createBlog(
      {
        title: String(body.title),
        excerpt: body.excerpt ? String(body.excerpt) : undefined,
        content: String(body.content),
        status: body.status === "published" ? "published" : "draft",
        featuredImage: body.featuredImage
          ? String(body.featuredImage)
          : undefined,
        images: Array.isArray(body.images)
          ? body.images.map(String)
          : undefined,
      },
      { id: session.uid, name: session.name },
    );
    return NextResponse.json({ blog }, { status: 201 });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Bad request";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
