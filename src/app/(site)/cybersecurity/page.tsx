import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroAnimation from "./_components/HeroAnimation";
import type { ReactNode } from "react";

export const metadata = {
  title: "Cybersecurity services",
  description:
    "Cybersecurity consulting, security audit & compliance, VAPT, managed SOC, cloud security, vCISO advisory and security trainings — by chartered professionals.",
  icons: { icon: "/zark.png" },
};

const SVG_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "w-6 h-6",
};

const SERVICES: {
  title: string;
  desc: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    title: "Cybersecurity Consulting",
    desc: "Strategic security planning, programme design and roadmap execution for enterprises building a security function.",
    href: "/services/cyber-consulting",
    icon: (
      <svg {...SVG_PROPS}>
        <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Security Audit & Compliance",
    desc: "ISO 27001, SOC 2, RBI and DPDPA-aligned audits across people, process and technology controls.",
    href: "/services/security-audit-compliance",
    icon: (
      <svg {...SVG_PROPS}>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 3h6v3H9zM8.5 13l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Vulnerability Assessment & Penetration Testing",
    desc: "Network, web, mobile and API penetration testing with detailed remediation guidance.",
    href: "/services/vapt",
    icon: (
      <svg {...SVG_PROPS}>
        <circle cx="10.5" cy="10.5" r="6" />
        <path d="M21 21l-5.5-5.5M10.5 7.5v6M7.5 10.5h6" />
      </svg>
    ),
  },
  {
    title: "Security Operations",
    desc: "24×7 monitoring, incident response, threat-management engagements scaled to the client.",
    href: "/services/security-operations",
    icon: (
      <svg {...SVG_PROPS}>
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v3M12 19v3" />
      </svg>
    ),
  },
  {
    title: "Technical Manpower",
    desc: "Embedded cybersecurity engineers and specialists on time-bound or rolling engagements.",
    href: "/services/technical-manpower",
    icon: (
      <svg {...SVG_PROPS}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 21v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M21 20v-1a3 3 0 00-3-3" />
      </svg>
    ),
  },
  {
    title: "Managed SOC",
    desc: "Fully managed Security Operations Centre with detection, triage and escalation handled in-house.",
    href: "/services/managed-soc",
    icon: (
      <svg {...SVG_PROPS}>
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <circle cx="7" cy="7" r="0.6" fill="currentColor" />
        <circle cx="7" cy="17" r="0.6" fill="currentColor" />
        <path d="M11 7h7M11 17h7" />
      </svg>
    ),
  },
  {
    title: "Cloud Security",
    desc: "CSPM, identity and configuration hardening across AWS, Azure and GCP environments.",
    href: "/services/cloud-security",
    icon: (
      <svg {...SVG_PROPS}>
        <path d="M7 18a4 4 0 010-8 5 5 0 019.7-1A4 4 0 0117 18z" />
        <rect x="10" y="13" width="4" height="4" rx="0.5" />
        <path d="M11 13v-1.5a1 1 0 012 0V13" />
      </svg>
    ),
  },
  {
    title: "Virtual CISO Advisory",
    desc: "Fractional CISO advisory — strategy, board reporting, vendor risk and compliance leadership.",
    href: "/services/vciso",
    icon: (
      <svg {...SVG_PROPS}>
        <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />
        <path d="M12 7l1.4 2.9 3.1.4-2.3 2.2.6 3.1L12 14.2 9.2 15.6l.6-3.1-2.3-2.2 3.1-.4z" />
      </svg>
    ),
  },
  {
    title: "Security Trainings",
    desc: "Role-based security awareness, secure coding and incident-response training programmes.",
    href: "/services/trainings",
    icon: (
      <svg {...SVG_PROPS}>
        <path d="M2 9l10-5 10 5-10 5-10-5z" />
        <path d="M6 11v5a6 6 0 0012 0v-5M22 9v6" />
      </svg>
    ),
  },
  {
    title: "Data Governance",
    desc: "Data classification, retention policy design and DPDPA-aligned governance frameworks.",
    href: "/services/data-governance",
    icon: (
      <svg {...SVG_PROPS}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
  },
];

const PILLARS = [
  {
    title: "Audit discipline",
    desc: "Every engagement carries the documentation, working-paper trail and partner sign-off you'd expect of a CA audit.",
    icon: (
      <svg {...SVG_PROPS}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M9 13l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Regulator-aligned",
    desc: "Reports map cleanly to RBI, SEBI, DPDPA, ISO 27001 and CERT-In requirements where applicable.",
    icon: (
      <svg {...SVG_PROPS}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    title: "Sector experience",
    desc: "Public-sector, banking, NBFCs and enterprise — the same sectoral depth that defines the firm's CA practice.",
    icon: (
      <svg {...SVG_PROPS}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
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
        <div className="mesh-aurora absolute inset-0 -z-10 opacity-50" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 lg:pt-28 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/70 backdrop-blur px-3.5 py-1.5 text-[12px] tracking-wide text-[color:var(--ink-700)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--tint-cyan-600)]" />
                Specialised service · outside ICAI advertising scope
              </div>
              <h1 className="display mt-6 text-4xl sm:text-5xl lg:text-[72px] text-[color:var(--ink-900)] max-w-3xl">
                Cybersecurity, by{" "}
                <em className="text-[color:var(--accent-700)]">
                  chartered professionals
                </em>
                .
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[color:var(--ink-500)]">
                Defined service lines across consulting, audit, testing,
                operations and governance — delivered with the same documented
                discipline that defines the firm&rsquo;s CA practice.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ink-900)] px-6 py-3 text-sm font-medium text-white hover:bg-[color:var(--accent-700)] transition-colors"
                >
                  Get a security assessment
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
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium text-[color:var(--ink-900)] hover:border-[color:var(--accent-700)] hover:text-[color:var(--accent-700)] transition-colors"
                >
                  Explore services
                </Link>
              </div>
            </Reveal>

            <Reveal
              className="hidden lg:flex lg:col-span-5 items-center justify-center"
              delay={0.12}
            >
              <HeroAnimation />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 lg:py-24 bg-[color:var(--bg-elevated)] border-y border-[color:var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <div className="eyebrow">Why this firm</div>
            <h2 className="display mt-3 text-3xl sm:text-4xl text-[color:var(--ink-900)]">
              Security work, with the rigour of an audit.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {PILLARS.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 0.08}>
                <div className="card h-full p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--accent-50)] text-[color:var(--accent-700)]">
                    {p.icon}
                  </div>
                  <div className="display mt-5 text-xl text-[color:var(--ink-900)]">
                    {p.title}
                  </div>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[color:var(--ink-500)]">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-14">
            <div className="eyebrow">Service lines</div>
            <h2 className="display mt-3 text-3xl sm:text-4xl lg:text-[44px] text-[color:var(--ink-900)]">
              Defined commercial engagements.
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[color:var(--ink-500)]">
              Each engagement is scoped, priced and delivered against
              documented objectives — no open-ended retainers.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, idx) => (
              <Reveal key={s.title} delay={(idx % 3) * 0.06}>
                <Link href={s.href} className="card group block h-full p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--accent-50)] text-[color:var(--accent-700)] transition-colors group-hover:bg-[color:var(--accent-100)]">
                      {s.icon}
                    </div>
                    <svg
                      className="w-4 h-4 text-[color:var(--ink-300)] group-hover:text-[color:var(--accent-700)] group-hover:translate-x-1 transition-all mt-3"
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
                  <h3 className="display mt-6 text-lg text-[color:var(--ink-900)] leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-500)]">
                    {s.desc}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-[color:var(--bg-elevated)] border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="eyebrow">Engage the firm</div>
            <h2 className="display mt-3 text-3xl sm:text-4xl lg:text-[44px] text-[color:var(--ink-900)]">
              Ready to harden your posture?
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[color:var(--ink-500)] max-w-2xl mx-auto">
              Start with a scoping conversation. We&rsquo;ll map the engagement
              to your risk profile, regulatory exposure and timelines — and
              quote against defined deliverables.
            </p>
            <div className="mt-8 inline-flex gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ink-900)] px-6 py-3 text-sm font-medium text-white hover:bg-[color:var(--accent-700)] transition-colors"
              >
                Get in touch
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
