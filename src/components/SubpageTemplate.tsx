import Link from "next/link";
import Reveal from "@/components/Reveal";

type Section = {
  heading: string;
  items: string[];
};

type Aside = {
  title: string;
  body: string;
};

type SubpageProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  sections: Section[];
  asides?: Aside[];
  /**
   * 'practice' — ICAI-restricted, no CTA, append informational disclaimer.
   * 'service'  — cybersecurity/DPDPA, allows a CTA block at the bottom.
   */
  mode: "practice" | "service";
  ctaTitle?: string;
  ctaDesc?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function SubpageTemplate({
  eyebrow,
  title,
  intro,
  sections,
  asides,
  mode,
  ctaTitle = "Engage the firm",
  ctaDesc = "Start with a scoping conversation. We'll map the engagement to your needs and quote against defined deliverables.",
  ctaHref = "/contact",
  ctaLabel = "Get in touch",
}: SubpageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="dot-grid absolute inset-0 -z-10" />
        <div className="mesh-aurora absolute inset-0 -z-10 opacity-40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-28 lg:pb-16">
          <Reveal>
            <div className="eyebrow">{eyebrow}</div>
            <h1 className="display mt-4 text-4xl sm:text-5xl lg:text-[60px] text-[color:var(--ink-900)] max-w-4xl leading-[1.05]">
              {title}
            </h1>
            {intro ? (
              <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-[color:var(--ink-500)]">
                {intro}
              </p>
            ) : null}
          </Reveal>
        </div>
      </section>

      {/* Body: sections left, asides right */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            {sections.map((s, idx) => (
              <Reveal key={s.heading} delay={idx * 0.06}>
                <div className="rounded-2xl border border-[color:var(--border)] bg-white p-7 lg:p-8">
                  <h2 className="display text-xl sm:text-2xl text-[color:var(--ink-900)]">
                    {s.heading}
                  </h2>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-[14.5px] text-[color:var(--ink-700)]">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1 w-1 rounded-full bg-[color:var(--accent-600)] shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-5">
            {asides && asides.length > 0 ? (
              asides.map((a, idx) => (
                <Reveal key={a.title} delay={idx * 0.06}>
                  <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6">
                    <div className="display text-lg text-[color:var(--ink-900)]">
                      {a.title}
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--ink-500)]">
                      {a.body}
                    </p>
                  </div>
                </Reveal>
              ))
            ) : null}

            {mode === "practice" ? (
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-dashed border-[color:var(--border-strong)] bg-[color:var(--bg-muted)] p-6 text-[13px] leading-relaxed text-[color:var(--ink-500)]">
                  <div className="eyebrow text-[10px]">ICAI compliance</div>
                  <p className="mt-2">
                    This page is provided for general understanding of the
                    firm&rsquo;s areas of work. It does not constitute
                    solicitation or an offer of professional services.
                  </p>
                </div>
              </Reveal>
            ) : null}
          </div>
        </div>
      </section>

      {/* CTA — service mode only */}
      {mode === "service" ? (
        <section className="pb-24 lg:pb-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-10 lg:p-12 text-center">
                <div className="eyebrow">{ctaTitle}</div>
                <h2 className="display mt-3 text-2xl sm:text-3xl text-[color:var(--ink-900)] max-w-2xl mx-auto">
                  {ctaDesc}
                </h2>
                <div className="mt-7 inline-flex">
                  <Link
                    href={ctaHref}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ink-900)] px-6 py-3 text-sm font-medium text-white hover:bg-[color:var(--accent-700)] transition-colors"
                  >
                    {ctaLabel}
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}
    </>
  );
}
