import Link from "next/link";
import Image from "next/image";
import { listBlogs } from "@/lib/blogs";
import Reveal from "@/components/Reveal";

export const revalidate = 30;

export const metadata = {
  title: "Insights",
  description:
    "Perspectives, regulatory updates and field notes from Z A R K & Co LLP on audit, taxation, governance and cybersecurity.",
};

export default async function BlogsIndex() {
  const blogs = await listBlogs({ status: "published" });
  const [lead, ...rest] = blogs;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="dot-grid absolute inset-0 -z-10" />
        <div className="mesh-aurora absolute inset-0 -z-10 opacity-40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-28 lg:pb-16">
          <Reveal>
            <div className="eyebrow">Insights</div>
            <h1 className="display mt-4 text-4xl sm:text-5xl lg:text-[64px] text-[color:var(--ink-900)] max-w-3xl">
              Notes from the practice.
            </h1>
            <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-[color:var(--ink-500)]">
              Perspectives, regulatory updates and field notes from our partners
              and associates.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {blogs.length === 0 ? (
            <Reveal className="rounded-3xl border border-dashed border-[color:var(--border-strong)] bg-white p-16 text-center">
              <div className="display text-xl text-[color:var(--ink-700)]">
                No posts yet
              </div>
              <p className="mt-3 text-[14px] text-[color:var(--ink-500)]">
                The firm&rsquo;s editors are preparing the first set of pieces.
              </p>
            </Reveal>
          ) : (
            <>
              {/* Lead article */}
              {lead && (
                <Reveal className="mb-12">
                  <Link
                    href={`/blogs/${lead.id}`}
                    className="group block overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white hover:border-[color:var(--accent-200)] hover:shadow-[0_18px_44px_-18px_rgba(11,37,69,0.22)] transition-all duration-300"
                  >
                    <div className="grid lg:grid-cols-12">
                      <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[color:var(--bg-muted)]">
                        {lead.featuredImage ? (
                          <Image
                            src={lead.featuredImage}
                            alt={lead.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-[color:var(--ink-300)] text-sm">
                            Z A R K &amp; Co LLP
                          </div>
                        )}
                      </div>
                      <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center">
                        <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--accent-700)] font-medium">
                          Featured
                        </div>
                        <h2 className="display mt-4 text-2xl lg:text-3xl text-[color:var(--ink-900)] group-hover:text-[color:var(--accent-700)] transition-colors line-clamp-3">
                          {lead.title}
                        </h2>
                        <p className="mt-4 text-[14.5px] leading-relaxed text-[color:var(--ink-500)] line-clamp-3">
                          {lead.excerpt}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-[12.5px] text-[color:var(--ink-400)]">
                          <span>
                            {new Date(
                              lead.publishedAt || lead.createdAt,
                            ).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                          <span>·</span>
                          <span>{lead.authorName}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              )}

              {/* Rest of the grid */}
              {rest.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post, idx) => (
                    <Reveal key={post.id} delay={(idx % 3) * 0.06}>
                      <Link
                        href={`/blogs/${post.id}`}
                        className="group flex flex-col h-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white hover:border-[color:var(--accent-200)] hover:-translate-y-1 hover:shadow-[0_14px_36px_-14px_rgba(11,37,69,0.22)] transition-all duration-300"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--bg-muted)]">
                          {post.featuredImage ? (
                            <Image
                              src={post.featuredImage}
                              alt={post.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-[color:var(--ink-300)] text-sm">
                              Z A R K &amp; Co LLP
                            </div>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <div className="flex items-center gap-2 text-[12px] text-[color:var(--ink-400)]">
                            <span>
                              {new Date(
                                post.publishedAt || post.createdAt,
                              ).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                            <span>·</span>
                            <span>{post.authorName}</span>
                          </div>
                          <h3 className="display mt-3 text-xl text-[color:var(--ink-900)] line-clamp-2 group-hover:text-[color:var(--accent-700)] transition-colors">
                            {post.title}
                          </h3>
                          <p className="mt-3 text-[14px] text-[color:var(--ink-500)] line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>
                          <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--accent-700)]">
                            Read article
                            <span
                              aria-hidden
                              className="transition-transform group-hover:translate-x-0.5"
                            >
                              →
                            </span>
                          </div>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
