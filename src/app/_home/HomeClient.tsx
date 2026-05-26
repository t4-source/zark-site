"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import CountUp from "react-countup";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import type { Blog } from "@/lib/blogs";

const PRACTICE_AREAS = [
  {
    id: "01",
    title: "Audit & Assurance",
    desc: "Statutory, internal, concurrent, stock and special-purpose audits across public-sector undertakings and private enterprise.",
  },
  {
    id: "02",
    title: "Direct & Indirect Taxation",
    desc: "Compliance, representation and advisory across corporate tax, GST and transfer pricing matters.",
  },
  {
    id: "03",
    title: "Risk & Governance",
    desc: "Internal financial controls, enterprise risk and corporate governance reviews aligned with sectoral regulators.",
  },
  {
    id: "04",
    title: "Public-Sector & Banking",
    desc: "Long-standing engagements with PSUs, public-sector banks and government undertakings on assurance mandates.",
  },
  {
    id: "05",
    title: "Project Financing",
    desc: "Financial structuring, funding documentation and investment review across infrastructure and enterprise projects.",
  },
  {
    id: "06",
    title: "Stock & Physical Verification",
    desc: "Fixed-asset tagging, inventory verification and reconciliation engagements at scale.",
  },
];

const PROCESS_STEPS: {
  id: string;
  title: string;
  desc: string;
  artefacts: string[];
}[] = [
  {
    id: "01",
    title: "Engage",
    desc: "Initial scoping conversation, a clear engagement letter and a defined point of contact within the firm.",
    artefacts: [
      "Scoping call with the engagement partner",
      "Defined deliverables, timeline and fee structure",
      "Signed engagement letter & confidentiality terms",
      "Single point of contact within the firm",
    ],
  },
  {
    id: "02",
    title: "Diagnose",
    desc: "Document review, walkthroughs and data-driven assessment to establish a factual baseline before any opinion is formed.",
    artefacts: [
      "Document request list and secure data exchange",
      "Process walkthroughs with key stakeholders",
      "Sampling plan and analytical procedures",
      "Baseline working papers and risk map",
    ],
  },
  {
    id: "03",
    title: "Execute",
    desc: "Field work and analysis carried out by chartered professionals with sectoral experience, supervised at partner level.",
    artefacts: [
      "Field work led by qualified associates",
      "Continuous partner-level review and sign-off",
      "Issue log with management responses",
      "Evidence repository indexed to working papers",
    ],
  },
  {
    id: "04",
    title: "Report",
    desc: "Considered written report, working-paper trail and an in-person debrief covering observations, risk and remediation.",
    artefacts: [
      "Written report with management summary",
      "Detailed findings, observations and recommendations",
      "Working-paper trail handed over for archival",
      "In-person debrief with management and audit committee",
    ],
  },
];

const SECTORS = [
  "Public-sector undertakings",
  "Scheduled commercial banks",
  "Cooperative banks",
  "NBFCs",
  "Power & energy",
  "Healthcare",
  "Infrastructure",
  "Listed corporates",
  "Family-owned enterprises",
  "Educational institutions",
  "Government departments",
  "Statutory authorities",
];

const OFFICES = [
  {
    title: "Head Office — Lucknow",
    short: "Lucknow",
    addr: "105, Chintels House, 16 Station Road, Lucknow — 226001",
    map: "Chintels+House+16+Station+Road+Lucknow+226001",
  },
  {
    title: "Jamshedpur, Jharkhand",
    short: "Jamshedpur",
    addr: "16/3, New Housing Colony, Adityapur, Jamshedpur — 831013",
    map: "Adityapur+Jamshedpur+Jharkhand+831013",
  },
  {
    title: "Varanasi, Uttar Pradesh",
    short: "Varanasi",
    addr: "3/1380, Rampur Ward, Ramnagar, Varanasi — 221008",
    map: "Ramnagar+Varanasi+221008",
  },
  {
    title: "Ghaziabad, Uttar Pradesh",
    short: "Ghaziabad",
    addr: "A 801, Exotica East Square, Ahinsa Khand 2, Indirapuram, Ghaziabad — 201014",
    map: "Ahinsa+Khand+2+Indirapuram+Ghaziabad+201014",
  },
];

const STATS = [
  { label: "Years of practice", value: 30, suffix: "+" },
  { label: "Partners", value: 10, suffix: "" },
  { label: "Team strength", value: 87, suffix: "+" },
  { label: "Office locations", value: 4, suffix: "" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function HomeClient({ blogs }: { blogs: Blog[] }) {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <HowWeWork />
      <PartnerNote />
      <SpecialisedServices />
      <SectorsMarquee />
      <FirmStats />
      <InsightsTeaser blogs={blogs} />
      <OfficesPicker />
    </>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  const { scrollY } = useScroll();
  const yMesh = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative overflow-hidden">
      <motion.div
        style={{ y: yMesh, opacity }}
        className="absolute inset-0 -z-10"
      >
        <div className="mesh-aurora" />
      </motion.div>
      <div className="dot-grid absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/70 backdrop-blur px-3.5 py-1.5 text-[12px] tracking-wide text-[color:var(--ink-700)]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent-500)] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent-600)]" />
          </span>
          Established 1997 · Chartered Accountants
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
          className="display mt-6 text-[44px] sm:text-6xl lg:text-[88px] text-[color:var(--ink-900)] max-w-5xl"
        >
          Audit, assurance &amp;{" "}
          <em className="text-[color:var(--accent-700)]">trusted advisory</em>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.18 }}
          className="mt-6 max-w-2xl text-[17px] lg:text-lg leading-relaxed text-[color:var(--ink-500)]"
        >
          Z A R K &amp; Co LLP is a Chartered Accountancy LLP with practice
          areas across audit, assurance, taxation and governance — and
          specialised cybersecurity &amp; DPDPA implementation services. Based
          in Lucknow with offices across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.26 }}
          className="mt-9 flex flex-col sm:flex-row gap-3"
        >
          <Link
            href="/practice-areas"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ink-900)] px-6 py-3 text-sm font-medium text-white hover:bg-[color:var(--accent-700)] transition-colors"
          >
            View practice areas
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
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium text-[color:var(--ink-900)] hover:border-[color:var(--accent-700)] hover:text-[color:var(--accent-700)] transition-colors"
          >
            Get in touch
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.36 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)]"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-white/85 backdrop-blur p-5 sm:p-6"
            >
              <div className="text-[28px] sm:text-[34px] font-semibold tabular text-[color:var(--ink-900)]">
                <CountUp
                  end={s.value}
                  duration={1.2}
                  suffix={s.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="mt-1 text-[11.5px] uppercase tracking-[0.16em] text-[color:var(--ink-400)]">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- PRACTICE AREAS ---------------- */

function PracticeAreas() {
  const [active, setActive] = useState(0);
  const item = PRACTICE_AREAS[active];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <div className="eyebrow">Practice areas</div>
          <h2 className="display mt-3 text-3xl sm:text-4xl lg:text-[44px] text-[color:var(--ink-900)]">
            The disciplines the firm engages in.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-[color:var(--ink-500)]">
            The information here is provided for general understanding of the
            firm&rsquo;s areas of work. It does not constitute solicitation or
            an offer of professional services.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <ul className="divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
              {PRACTICE_AREAS.map((p, idx) => {
                const isActive = idx === active;
                return (
                  <li key={p.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(idx)}
                      onFocus={() => setActive(idx)}
                      onClick={() => setActive(idx)}
                      className="group relative w-full text-left py-6 flex items-baseline gap-6"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="practice-marker"
                          className="absolute -left-4 top-0 bottom-0 w-[3px] rounded-full bg-[color:var(--accent-700)]"
                          transition={{ duration: 0.4, ease: EASE }}
                        />
                      )}
                      <span className="text-[12px] tabular text-[color:var(--ink-400)] w-8 shrink-0">
                        {p.id}
                      </span>
                      <span
                        className={`flex-1 display text-[22px] sm:text-[26px] tracking-tight transition-colors ${
                          isActive
                            ? "text-[color:var(--ink-900)]"
                            : "text-[color:var(--ink-400)] group-hover:text-[color:var(--ink-700)]"
                        }`}
                      >
                        {p.title}
                      </span>
                      <motion.svg
                        animate={{
                          opacity: isActive ? 1 : 0,
                          x: isActive ? 0 : -8,
                        }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="w-5 h-5 text-[color:var(--accent-700)]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </motion.svg>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-8 lg:p-10"
            >
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[color:var(--accent-100)] blur-3xl opacity-70" />
              <div className="relative">
                <div className="text-[12px] tabular text-[color:var(--accent-700)] font-medium">
                  {item.id} / Practice area
                </div>
                <h3 className="display mt-3 text-2xl lg:text-3xl text-[color:var(--ink-900)]">
                  {item.title}
                </h3>
                <p className="mt-5 text-[15.5px] leading-relaxed text-[color:var(--ink-500)]">
                  {item.desc}
                </p>
                <div className="hairline my-7" />
                <div className="flex items-center justify-between text-[13px] text-[color:var(--ink-400)]">
                  <span>For information only · ICAI compliant</span>
                  <span className="tabular">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(PRACTICE_AREAS.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW WE WORK (scroll-sticky narrative) ---------------- */

function HowWeWork() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Start when section top hits 70% of viewport, end when bottom hits 30%
    offset: ["start 0.7", "end 0.3"],
  });

  // Smoothed progress for the timeline bar
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.2,
  });
  const lineScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  // Derive active step from progress
  const [active, setActive] = useState(0);
  useMotionValueEvent(smoothProgress, "change", (v) => {
    const idx = Math.min(
      PROCESS_STEPS.length - 1,
      Math.max(0, Math.floor(v * PROCESS_STEPS.length)),
    );
    if (idx !== active) setActive(idx);
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[color:var(--bg-elevated)] border-y border-[color:var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Sticky left column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <div className="eyebrow">How we work</div>
                <h2 className="display mt-3 text-3xl sm:text-4xl lg:text-[44px] text-[color:var(--ink-900)] leading-[1.05]">
                  A measured process,{" "}
                  <em className="text-[color:var(--accent-700)]">
                    partner-led
                  </em>
                  .
                </h2>
                <p className="mt-5 text-[15.5px] leading-relaxed text-[color:var(--ink-500)]">
                  Every engagement follows the same disciplined sequence —
                  scoped clearly, executed by chartered professionals,
                  supervised at partner level and documented in full.
                </p>
              </Reveal>

              {/* Vertical timeline */}
              <div className="mt-10 relative pl-8">
                {/* Background line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[color:var(--border-strong)]/60" />
                {/* Animated progress line */}
                <motion.div
                  style={{ scaleY: reduce ? 1 : lineScaleY }}
                  className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--accent-600)] to-[color:var(--tint-cyan-600)] origin-top"
                />

                <ul className="space-y-5">
                  {PROCESS_STEPS.map((step, idx) => {
                    const isActive = idx <= active;
                    const isCurrent = idx === active;
                    return (
                      <li key={step.id} className="relative flex items-center gap-4">
                        {/* Dot */}
                        <motion.div
                          animate={{
                            backgroundColor: isActive
                              ? "rgb(11 37 69)"
                              : "rgb(255 255 255)",
                            borderColor: isActive
                              ? "rgb(11 37 69)"
                              : "rgb(203 213 225)",
                            scale: isCurrent ? 1.15 : 1,
                          }}
                          transition={{ duration: 0.35, ease: EASE }}
                          className="absolute -left-8 z-10 h-[14px] w-[14px] rounded-full border-2"
                        />
                        {/* Pulse ring on current */}
                        {isCurrent && !reduce ? (
                          <motion.span
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 2.2, opacity: 0 }}
                            transition={{
                              duration: 1.6,
                              ease: "easeOut",
                              repeat: Infinity,
                            }}
                            className="absolute -left-8 h-[14px] w-[14px] rounded-full bg-[color:var(--accent-600)]"
                          />
                        ) : null}
                        <motion.div
                          animate={{
                            color: isCurrent
                              ? "rgb(11 37 69)"
                              : isActive
                                ? "rgb(30 41 59)"
                                : "rgb(148 163 184)",
                          }}
                          transition={{ duration: 0.3 }}
                          className="flex items-baseline gap-3"
                        >
                          <span className="text-[11px] tabular tracking-[0.18em] font-semibold uppercase opacity-70">
                            {step.id}
                          </span>
                          <span className="display text-[18px]">
                            {step.title}
                          </span>
                        </motion.div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Right column — scrolling step cards */}
          <div className="lg:col-span-7 space-y-10 lg:space-y-16">
            {PROCESS_STEPS.map((step, idx) => (
              <StepCard key={step.id} step={step} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
}) {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.85", "end 0.4"],
  });
  // Subtle parallax on the numeral watermark
  const numeralY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const numeralOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.08, 0.04]);

  return (
    <motion.div
      ref={cardRef}
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-8 lg:p-10"
    >
      {/* Giant numeral watermark with scroll parallax */}
      <motion.div
        style={{ y: reduce ? 0 : numeralY, opacity: reduce ? 0.06 : numeralOpacity }}
        aria-hidden
        className="pointer-events-none absolute -top-6 -right-4 select-none text-[200px] lg:text-[280px] tabular font-semibold leading-none text-[color:var(--ink-900)]"
      >
        {step.id}
      </motion.div>

      {/* Accent corner glow */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-48 w-48 rounded-full bg-[color:var(--accent-100)] opacity-50 blur-3xl" />

      <div className="relative">
        <div className="text-[11px] tabular tracking-[0.18em] text-[color:var(--accent-700)] font-semibold uppercase">
          Step {step.id} of {String(PROCESS_STEPS.length).padStart(2, "0")}
        </div>
        <h3 className="display mt-3 text-3xl lg:text-4xl text-[color:var(--ink-900)]">
          {step.title}
        </h3>
        <p className="mt-4 text-[16px] leading-relaxed text-[color:var(--ink-500)] max-w-xl">
          {step.desc}
        </p>

        <div className="hairline my-7" />

        <div className="text-[11px] tabular tracking-[0.16em] text-[color:var(--ink-400)] font-semibold uppercase mb-4">
          What you receive
        </div>
        <ul className="space-y-3">
          {step.artefacts.map((a, i) => (
            <motion.li
              key={a}
              initial={reduce ? false : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.4,
                ease: EASE,
                delay: 0.15 + i * 0.06,
              }}
              className="flex items-start gap-3 text-[14.5px] text-[color:var(--ink-700)]"
            >
              <span className="mt-1.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-50)]">
                <svg
                  className="h-2.5 w-2.5 text-[color:var(--accent-700)]"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 6l3 3 5-6" />
                </svg>
              </span>
              <span>{a}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {/* index reserved for future stagger */}
      <span hidden>{index}</span>
    </motion.div>
  );
}

/* ---------------- PARTNER NOTE ---------------- */

function PartnerNote() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-muted)]">
                <Image
                  src="/raghav.jpeg"
                  alt="Raghav Krishna, FCA — Principal Partner"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
                  <div className="text-white/80 text-[11px] uppercase tracking-[0.18em]">
                    Principal partner
                  </div>
                  <div className="mt-1 text-white text-lg font-medium">
                    Raghav Krishna, FCA
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="eyebrow">From the principal partner</div>
              <blockquote className="display mt-5 text-[28px] sm:text-[34px] lg:text-[40px] text-[color:var(--ink-900)] leading-[1.15]">
                &ldquo;Our work begins and ends with one question — does the
                opinion we sign reflect a complete and honest reading of the
                facts? Three decades on, that&rsquo;s still the only standard
                that matters.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-[color:var(--border-strong)]" />
                <div className="text-[13px] text-[color:var(--ink-500)]">
                  Raghav Krishna · M.No. 416687
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------- SPECIALISED SERVICES (cyber + DPDPA) -------- */

function SpecialisedServices() {
  const services = [
    {
      tag: "Cybersecurity",
      title: "Defensive security, by chartered professionals.",
      desc: "VAPT, managed SOC, cloud security, vCISO advisory and security audits — delivered with the same audit discipline that defines the firm.",
      href: "/cybersecurity",
      cta: "Explore cybersecurity",
    },
    {
      tag: "DPDPA 2023",
      title: "Data-protection compliance, end to end.",
      desc: "Readiness assessment, gap analysis and implementation programmes for schools, enterprises and public-sector data fiduciaries under India's DPDPA.",
      href: "/dpdpa",
      cta: "Explore DPDPA",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[color:var(--bg-elevated)] border-y border-[color:var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-14">
          <div className="eyebrow">Specialised services</div>
          <h2 className="display mt-3 text-3xl sm:text-4xl lg:text-[44px] text-[color:var(--ink-900)]">
            Cybersecurity &amp; data-protection, by chartered professionals.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-[color:var(--ink-500)]">
            Defined commercial engagements delivered with the same audit
            discipline that defines the firm — from VAPT and managed SOC to
            DPDPA implementation programmes.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, idx) => (
            <Reveal key={s.tag} delay={idx * 0.08}>
              <Link
                href={s.href}
                className="card group relative block h-full overflow-hidden p-8 lg:p-10"
              >
                <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[color:var(--accent-100)] opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent-50)] px-3 py-1 text-[11.5px] font-medium uppercase tracking-[0.14em] text-[color:var(--accent-700)]">
                    {s.tag}
                  </div>
                  <h3 className="display mt-5 text-2xl lg:text-[28px] text-[color:var(--ink-900)]">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--ink-500)]">
                    {s.desc}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-[color:var(--accent-700)]">
                    {s.cta}
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTORS (static grid) ---------------- */

function SectorsMarquee() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <div className="eyebrow">Sectors engaged</div>
          <h2 className="display mt-3 text-3xl sm:text-4xl lg:text-[44px] text-[color:var(--ink-900)]">
            Where the firm has worked.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-[color:var(--ink-500)]">
            Three decades of engagements across public-sector, banking and
            private enterprise — a partial view of the sectors represented in
            the firm&rsquo;s work.
          </p>
        </Reveal>

        <Reveal className="mt-12" delay={0.08}>
          <div className="flex flex-wrap gap-2.5">
            {SECTORS.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-[13.5px] text-[color:var(--ink-700)] hover:border-[color:var(--accent-200)] hover:text-[color:var(--accent-700)] transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-500)]" />
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FIRM AT A GLANCE ---------------- */

function FirmStats() {
  return (
    <section className="relative py-24 lg:py-32 bg-[color:var(--bg-elevated)] border-y border-[color:var(--border)] overflow-hidden">
      <div className="mesh-aurora absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <div className="eyebrow">Firm at a glance</div>
          <h2 className="display mt-3 text-3xl sm:text-4xl lg:text-[44px] text-[color:var(--ink-900)]">
            Established 1997. Operating across India.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, idx) => (
            <Reveal key={s.label} delay={idx * 0.08}>
              <div className="rounded-2xl border border-[color:var(--border)] bg-white p-7 hover:border-[color:var(--accent-200)] transition-colors">
                <div className="text-5xl lg:text-6xl font-semibold tabular text-[color:var(--ink-900)] leading-none">
                  <CountUp
                    end={s.value}
                    duration={1.2}
                    suffix={s.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <div className="mt-4 text-[12px] uppercase tracking-[0.16em] text-[color:var(--ink-400)]">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INSIGHTS TEASER ---------------- */

function InsightsTeaser({ blogs }: { blogs: Blog[] }) {
  const featured = blogs.slice(0, 3);
  if (featured.length === 0) return null;

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="eyebrow">Insights</div>
            <h2 className="display mt-3 text-3xl sm:text-4xl lg:text-[44px] text-[color:var(--ink-900)]">
              Notes from the practice.
            </h2>
          </div>
          <Link
            href="/blogs"
            className="hidden sm:inline-flex items-center gap-2 text-[14px] font-medium text-[color:var(--accent-700)] hover:gap-3 transition-all"
          >
            All insights
            <svg
              className="w-4 h-4"
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
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((post, idx) => (
            <Reveal key={post.id} delay={idx * 0.06}>
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
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="sm:hidden mt-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[color:var(--accent-700)]"
          >
            All insights →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- OFFICES (interactive picker) ---------------- */

function OfficesPicker() {
  const [active, setActive] = useState(0);
  const office = OFFICES[active];

  return (
    <section className="py-24 lg:py-32 bg-[color:var(--bg-elevated)] border-t border-[color:var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <div className="eyebrow">Office locations</div>
          <h2 className="display mt-3 text-3xl sm:text-4xl lg:text-[44px] text-[color:var(--ink-900)]">
            Four offices, one practice.
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <ul className="space-y-2">
              {OFFICES.map((o, idx) => {
                const isActive = idx === active;
                return (
                  <li key={o.short}>
                    <button
                      type="button"
                      onClick={() => setActive(idx)}
                      className={`group relative w-full text-left rounded-2xl border p-5 transition-all ${
                        isActive
                          ? "border-[color:var(--accent-200)] bg-white shadow-[0_10px_30px_-16px_rgba(11,37,69,0.25)]"
                          : "border-[color:var(--border)] bg-white/60 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="display text-[18px] text-[color:var(--ink-900)]">
                          {o.short}
                        </div>
                        <motion.svg
                          animate={{
                            x: isActive ? 0 : -6,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, ease: EASE }}
                          className="w-4 h-4 text-[color:var(--accent-700)]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </motion.svg>
                      </div>
                      <div className="mt-1 text-[12.5px] text-[color:var(--ink-500)] line-clamp-1">
                        {o.addr}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              key={office.short}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white"
            >
              <div className="p-6 sm:p-8">
                <div className="eyebrow">Selected office</div>
                <div className="display mt-2 text-xl sm:text-2xl text-[color:var(--ink-900)]">
                  {office.title}
                </div>
                <div className="mt-2 text-[14.5px] text-[color:var(--ink-500)]">
                  {office.addr}
                </div>
              </div>
              <div className="h-80 sm:h-[420px] border-t border-[color:var(--border)]">
                <iframe
                  className="w-full h-full"
                  src={`https://www.google.com/maps?q=${office.map}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${office.title} location`}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
