"use client";

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

type Blog = {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  status: 'draft' | 'published';
  featuredImage?: string;
  images?: string[];
};

export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('admin-blogs');
      if (saved) setBlogs(JSON.parse(saved));
    } catch {}
  }, []);

  const published = useMemo(
    () =>
      blogs
        .filter((b) => b.status === 'published')
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
    [blogs]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Our Blog</h1>
        <p className="text-slate-600">Latest insights from our team</p>
      </div>

      {published.length === 0 ? (
        <div className="text-center text-slate-500">No posts yet.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {published.map((post) => (
            <article key={post.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-slate-100 h-48 flex items-center justify-center">
                {post.featuredImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover" />
                ) : (
                  <span className="text-slate-500">No Image</span>
                )}
              </div>
              <div className="p-6">
                <div className="text-slate-500 text-sm mb-2">
                  {new Date(post.publishedAt).toLocaleDateString()} · {post.author}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.content}</p>
                <Link href={`/blogs/${post.id}`} className="text-blue-600 text-sm font-medium hover:text-blue-700">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}