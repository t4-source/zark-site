import { getJSON, listJSON, setJSON, deleteJSON } from "./store";

const NS = "blogs";

export type BlogStatus = "draft" | "published";

export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  status: BlogStatus;
  featuredImage?: string;
  images?: string[];
  authorId: string;
  authorName: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface BlogInput {
  title: string;
  excerpt?: string;
  content: string;
  status?: BlogStatus;
  featuredImage?: string;
  images?: string[];
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function newId() {
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

export async function listBlogs(opts?: {
  status?: BlogStatus;
}): Promise<Blog[]> {
  const all = await listJSON<Blog>(NS);
  const filtered = opts?.status
    ? all.filter((b) => b.status === opts.status)
    : all;
  return filtered.sort((a, b) => {
    const ta = new Date(a.publishedAt || a.createdAt).getTime();
    const tb = new Date(b.publishedAt || b.createdAt).getTime();
    return tb - ta;
  });
}

export async function getBlog(id: string): Promise<Blog | null> {
  return getJSON<Blog>(NS, id);
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const all = await listJSON<Blog>(NS);
  return all.find((b) => b.slug === slug) || null;
}

export async function createBlog(
  input: BlogInput,
  author: { id: string; name: string },
): Promise<Blog> {
  const now = new Date().toISOString();
  const id = newId();
  const status = input.status || "draft";
  const blog: Blog = {
    id,
    slug: `${slugify(input.title) || "post"}-${id.slice(-4)}`,
    title: input.title.trim(),
    excerpt: (input.excerpt || input.content.slice(0, 240)).trim(),
    content: input.content,
    status,
    featuredImage: input.featuredImage,
    images: input.images || [],
    authorId: author.id,
    authorName: author.name,
    createdAt: now,
    updatedAt: now,
    publishedAt: status === "published" ? now : undefined,
  };
  await setJSON<Blog>(NS, id, blog);
  return blog;
}

export async function updateBlog(
  id: string,
  patch: Partial<BlogInput>,
): Promise<Blog | null> {
  const blog = await getJSON<Blog>(NS, id);
  if (!blog) return null;
  const next: Blog = {
    ...blog,
    title: patch.title?.trim() ?? blog.title,
    excerpt: patch.excerpt?.trim() ?? blog.excerpt,
    content: patch.content ?? blog.content,
    status: patch.status ?? blog.status,
    featuredImage:
      patch.featuredImage !== undefined
        ? patch.featuredImage
        : blog.featuredImage,
    images: patch.images ?? blog.images,
    updatedAt: new Date().toISOString(),
  };
  if (
    next.status === "published" &&
    (!blog.publishedAt || blog.status !== "published")
  ) {
    next.publishedAt = new Date().toISOString();
  }
  await setJSON<Blog>(NS, id, next);
  return next;
}

export async function removeBlog(id: string): Promise<void> {
  await deleteJSON(NS, id);
}
