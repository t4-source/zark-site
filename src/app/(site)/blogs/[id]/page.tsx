import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlog, listBlogs } from "@/lib/blogs";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getBlog(id);
  if (!post || post.status !== "published") {
    notFound();
  }

  const all = await listBlogs({ status: "published" });
  const related = all.filter((b) => b.id !== post.id).slice(0, 3);

  const dateLong = new Date(
    post.publishedAt || post.createdAt,
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* Article hero */}
      <section className="relative overflow-hidden">
        <div className="dot-grid absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--accent-700)] hover:gap-2 transition-all"
          >
            <span aria-hidden>←</span> Back to Insights
          </Link>

          <header className="mt-8">
            <div className="eyebrow">Insights</div>
            <h1 className="display mt-4 text-3xl sm:text-4xl lg:text-5xl text-[color:var(--ink-900)] leading-[1.1]">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-3 text-[13px] text-[color:var(--ink-500)]">
              <span>{dateLong}</span>
              <span>·</span>
              <span>{post.authorName}</span>
            </div>
          </header>
        </div>
      </section>

      {/* Featured image */}
      {post.featuredImage && (
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-[color:var(--bg-muted)]">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="prose prose-slate max-w-none text-[17px] leading-[1.75] text-[color:var(--ink-700)] whitespace-pre-wrap">
          {post.content}
        </div>

        {post.images && post.images.length > 0 && (
          <div className="mt-14 grid grid-cols-2 gap-4">
            {post.images.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[color:var(--bg-muted)]"
              >
                <Image
                  src={src}
                  alt={`Figure ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <div className="hairline mt-16" />
        <div className="mt-8 flex items-center justify-between text-[13px] text-[color:var(--ink-500)]">
          <div>
            Published {dateLong} · {post.authorName}
          </div>
          <Link
            href="/blogs"
            className="font-medium text-[color:var(--accent-700)] hover:underline"
          >
            All insights →
          </Link>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 lg:py-24 bg-[color:var(--bg-elevated)] border-t border-[color:var(--border)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="eyebrow">Continue reading</div>
              <h2 className="display mt-3 text-2xl sm:text-3xl text-[color:var(--ink-900)]">
                More from the practice.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/blogs/${p.id}`}
                  className="group flex flex-col h-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white hover:border-[color:var(--accent-200)] hover:-translate-y-1 hover:shadow-[0_14px_36px_-14px_rgba(11,37,69,0.22)] transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--bg-muted)]">
                    {p.featuredImage ? (
                      <Image
                        src={p.featuredImage}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[color:var(--ink-300)] text-sm">
                        Z A R K &amp; Co LLP
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-[12px] text-[color:var(--ink-400)]">
                      {new Date(
                        p.publishedAt || p.createdAt,
                      ).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                    <h3 className="display mt-3 text-lg text-[color:var(--ink-900)] line-clamp-2 group-hover:text-[color:var(--accent-700)] transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] text-[color:var(--ink-500)] line-clamp-2 flex-1">
                      {p.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
