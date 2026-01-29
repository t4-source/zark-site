"use client";

import { useEffect, useState, use as usePromise } from 'react';
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

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = usePromise(params);
  const [post, setPost] = useState<Blog | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('admin-blogs');
      if (!saved) {
        setNotFound(true);
        return;
      }
      const all: Blog[] = JSON.parse(saved);
      const found = all.find((b) => b.id === id && b.status === 'published');
      if (found) setPost(found);
      else setNotFound(true);
    } catch {
      setNotFound(true);
    }
  }, [id]);

  if (notFound) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 text-center text-slate-600">
        <p>Post not found.</p>
        <div className="mt-4">
          <Link href="/blogs" className="text-blue-600 hover:text-blue-700">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  if (!post) return null;

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <Link href="/blogs" className="text-blue-600 hover:text-blue-700">← Back to Blog</Link>
      </div>

      <h1 className="text-3xl font-bold text-slate-900 mb-3">{post.title}</h1>
      <div className="text-slate-500 text-sm mb-6">
        {new Date(post.publishedAt).toLocaleDateString()} · {post.author}
      </div>

      {post.featuredImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.featuredImage} alt={post.title} className="w-full h-64 object-cover rounded mb-8" />
      )}

      <div className="prose prose-slate max-w-none whitespace-pre-wrap">
        {post.content}
      </div>

      {post.images && post.images.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-3">
          {post.images.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt={`Image ${i + 1}`} className="w-full h-40 object-cover rounded border" />
          ))}
        </div>
      )}
    </article>
  );
}


