"use client";

import { useCallback, useEffect, useState } from "react";

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  status: "draft" | "published";
  featuredImage?: string;
  images?: string[];
  authorId: string;
  authorName: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: "admin" | "employee";
}

interface FormState {
  title: string;
  excerpt: string;
  content: string;
  status: "draft" | "published";
  featuredImage: string;
  images: string[];
}

const EMPTY_FORM: FormState = {
  title: "",
  excerpt: "",
  content: "",
  status: "draft",
  featuredImage: "",
  images: [],
};

export default function BlogManagement() {
  const [me, setMe] = useState<SessionUser | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Blog | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [meRes, blogsRes] = await Promise.all([
        fetch("/api/admin/verify", { credentials: "include" }),
        fetch("/api/blogs?status=all", { credentials: "include" }),
      ]);
      if (meRes.ok) {
        const meJson = await meRes.json();
        setMe(meJson.user);
      }
      if (blogsRes.ok) {
        const data = await blogsRes.json();
        setBlogs(data.blogs || []);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setEditing(null);
    setShowForm(false);
    setError(null);
  };

  const openCreate = () => {
    setForm(EMPTY_FORM);
    setEditing(null);
    setShowForm(true);
  };

  const openEdit = (b: Blog) => {
    setEditing(b);
    setForm({
      title: b.title,
      excerpt: b.excerpt,
      content: b.content,
      status: b.status,
      featuredImage: b.featuredImage || "",
      images: b.images || [],
    });
    setShowForm(true);
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/uploads", {
        method: "POST",
        body: fd,
        credentials: "include",
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Upload failed");
        return null;
      }
      const data = await res.json();
      return data.url as string;
    } finally {
      setUploading(false);
    }
  };

  const handleFeaturedUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await uploadImage(file);
    if (url) setForm((f) => ({ ...f, featuredImage: url }));
    e.target.value = "";
  };

  const handleGalleryUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const urls: string[] = [];
    for (const file of files) {
      const url = await uploadImage(file);
      if (url) urls.push(url);
    }
    setForm((f) => ({ ...f, images: [...f.images, ...urls] }));
    e.target.value = "";
  };

  const removeGalleryImage = (idx: number) =>
    setForm((f) => ({ ...f, images: f.images.filter((_, i) => i !== idx) }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.title.trim() || !form.content.trim()) {
      setError("Title and content are required");
      return;
    }
    setSaving(true);
    try {
      const payload = {
        title: form.title,
        excerpt: form.excerpt,
        content: form.content,
        status: form.status,
        featuredImage: form.featuredImage || undefined,
        images: form.images,
      };
      const res = await fetch(
        editing ? `/api/blogs/${editing.id}` : "/api/blogs",
        {
          method: editing ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(payload),
        },
      );
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Save failed");
      }
      await load();
      resetForm();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (b: Blog) => {
    if (!confirm(`Delete "${b.title}"? This cannot be undone.`)) return;
    const res = await fetch(`/api/blogs/${b.id}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (res.ok) await load();
  };

  const visibleBlogs = me?.role === "admin"
    ? blogs
    : blogs.filter((b) => b.authorId === me?.id);

  if (loading) {
    return (
      <div className="text-slate-500 py-10 text-center">Loading…</div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Blog Management
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {me?.role === "admin"
              ? "You can view and edit every post."
              : "You can view and edit posts you authored."}
          </p>
        </div>
        <button
          onClick={openCreate}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 shadow-sm"
        >
          <span aria-hidden>＋</span> New Post
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Author</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Updated</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {visibleBlogs.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-slate-500">
                  No posts yet.
                </td>
              </tr>
            ) : (
              visibleBlogs.map((b) => (
                <tr key={b.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    {b.title}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{b.authorName}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${
                        b.status === "published"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-500">
                    {new Date(b.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right space-x-3">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => openEdit(b)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-rose-600 hover:text-rose-800"
                      onClick={() => handleDelete(b)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-900/40 p-4 pt-12">
          <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <h3 className="text-lg font-semibold text-slate-900">
                {editing ? "Edit post" : "New post"}
              </h3>
              <button
                onClick={resetForm}
                className="text-slate-500 hover:text-slate-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 p-6">
              {error && (
                <div className="rounded-md bg-rose-50 px-3 py-2 text-sm text-rose-700">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Short summary
                </label>
                <input
                  type="text"
                  value={form.excerpt}
                  onChange={(e) =>
                    setForm({ ...form, excerpt: e.target.value })
                  }
                  placeholder="1–2 sentence preview (auto-generated from content if empty)"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Content
                </label>
                <textarea
                  rows={10}
                  value={form.content}
                  onChange={(e) =>
                    setForm({ ...form, content: e.target.value })
                  }
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write the article. Plain text or markdown-style line breaks are preserved."
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Featured image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFeaturedUpload}
                    className="block w-full text-sm text-slate-600"
                  />
                  {form.featuredImage && (
                    <div className="mt-2 relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={form.featuredImage}
                        alt=""
                        className="h-28 w-full object-cover rounded-lg border border-slate-200"
                      />
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, featuredImage: "" })}
                        className="absolute top-2 right-2 rounded-full bg-white/90 px-2 py-0.5 text-xs text-slate-700 shadow"
                      >
                        remove
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Status
                  </label>
                  <select
                    value={form.status}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        status: e.target.value as "draft" | "published",
                      })
                    }
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="draft">Draft (not visible publicly)</option>
                    <option value="published">Published (live)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Gallery images
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleGalleryUpload}
                  className="block w-full text-sm text-slate-600"
                />
                {form.images.length > 0 && (
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {form.images.map((src, i) => (
                      <div key={i} className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt=""
                          className="h-20 w-full object-cover rounded border border-slate-200"
                        />
                        <button
                          type="button"
                          onClick={() => removeGalleryImage(i)}
                          className="absolute -top-2 -right-2 rounded-full bg-rose-500 text-white w-5 h-5 text-xs"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving || uploading}
                  className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60"
                >
                  {saving
                    ? "Saving…"
                    : editing
                      ? "Update post"
                      : "Create post"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
