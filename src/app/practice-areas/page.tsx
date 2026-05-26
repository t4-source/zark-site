import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroFlow from "./_components/HeroFlow";
import type { ReactNode } from "react";

export const metadata = {
  title: "Practice areas",
  description:
    "Practice areas of Z A R K & Co LLP across audit, assurance, taxation, governance and risk. Informational page — does not constitute solicitation.",
  icons: { icon: "/zark.png" },
};

const SVG_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "w-7 h-7",
};

const AREAS: {
  id: string;
  title: string;
  summary: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    id: "01",
    title: "Public Sector & Government Audits",
    summary:
      "Statutory and special-purpose audits across power & energy, healthcare and infrastructure undertakings.",
    href: "/practice-areas/public-sector-audits",
    icon: (
      <svg {...SVG_PROPS}>
        <path d="M3 21h18M5 21V10M19 21V10M9 21V13h6v8" />
        <path d="M2 10l10-6 10 6" />
        <path d="M8 7v3M12 7v3M16 7v3" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Banking & Financial Institutions",
    summary:
      "Statutory branch, concurrent, revenue and inspection audit engagements across public-sector and cooperative banks.",
    href: "/practice-areas/banking-financial",
    icon: (
      <svg {...SVG_PROPS}>
        <path d="M3 10h18M5 10v9M9 10v9M15 10v9M19 10v9M3 20h18" />
        <path d="M3 10l9-5 9 5" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Project Financing",
    summary:
      "Financial structuring, funding documentation and investment review across infrastructure and enterprise projects.",
    href: "/practice-areas/project-financing",
    icon: (
      <svg {...SVG_PROPS}>
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 3 3 5-6" />
        <path d="M19 8h-3M19 8v3" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Stock & Physical Verification",
    summary:
      "Fixed-asset tagging, inventory verification and reconciliation engagements at scale.",
    href: "/practice-areas/stock-verification",
    icon: (
      <svg {...SVG_PROPS}>
        <path d="M21 8L12 3 3 8l9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8M3 12l9 5 9-5" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Private Sector Audits & Compliance",
    summary:
      "Statutory, internal and special-purpose audit work for listed corporates, family-owned enterprises and partnerships.",
    href: "/practice-areas/private-sector",
    icon: (
      <svg {...SVG_PROPS}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Risk & Advisory Services",
    summary:
      "Internal financial controls, enterprise risk reviews and MIS systems aligned with sectoral regulators.",
    href: "/practice-areas/risk-advisory",
    icon: (
      <svg {...SVG_PROPS}>
        <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />
        <path d="M9 13l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="dot-grid absolute inset-0 -z-10" />
        <div className="mesh-aurora absolute inset-0 -z-10 opacity-40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-28 lg:pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-7">
              <div className="eyebrow">Practice areas</div>
              <h1 className="display mt-4 text-4xl sm:text-5xl lg:text-[64px] text-[color:var(--ink-900)] max-w-4xl">
                The disciplines the firm engages in.
              </h1>
              <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-[color:var(--ink-500)]">
                This page is provided for general understanding of the
                firm&rsquo;s areas of work. It does not constitute solicitation
                or an offer of professional services.
              </p>
            </Reveal>

            <Reveal
              className="hidden lg:flex lg:col-span-5 items-center justify-center"
              delay={0.12}
            >
              <HeroFlow />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-5">
            {AREAS.map((a, idx) => (
              <Reveal key={a.id} delay={(idx % 2) * 0.06}>
                <Link
                  href={a.href}
                  className="card group block h-full p-7 lg:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--accent-50)] text-[color:var(--accent-700)] transition-colors group-hover:bg-[color:var(--accent-100)]">
                      {a.icon}
                    </div>
                    <div className="text-[12px] tabular text-[color:var(--ink-400)] font-medium">
                      {a.id} / Practice area
                    </div>
                  </div>
                  <h2 className="display mt-6 text-[22px] sm:text-[26px] text-[color:var(--ink-900)] leading-tight">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[color:var(--ink-500)]">
                    {a.summary}
                  </p>
                  <div className="hairline mt-7" />
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-[12.5px] text-[color:var(--ink-400)]">
                      For information only · ICAI compliant
                    </div>
                    <svg
                      className="w-4 h-4 text-[color:var(--ink-300)] group-hover:text-[color:var(--accent-700)] group-hover:translate-x-1 transition-all"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
