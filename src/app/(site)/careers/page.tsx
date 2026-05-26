import ContactDialog from "@/components/ContactDialog";
import JobApplicationDialog from "@/components/JobApplicationDialog";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Careers",
  description:
    "Join Z A R K & Co LLP — opportunities across audit, consulting, taxation and cybersecurity.",
  icons: { icon: "/zark.png" },
};

const PILLARS = [
  {
    title: "Partner-led mentorship",
    desc: "Every team member works under direct partner supervision — not pooled across faceless engagements.",
  },
  {
    title: "Cross-sector exposure",
    desc: "Move between public-sector, banking and private-enterprise engagements rather than specialising too early.",
  },
  {
    title: "Real responsibility",
    desc: "From article assistants to senior associates, the firm trusts people with real engagement ownership early.",
  },
];

const POSITIONS = [
  {
    title: "Chartered Accountant",
    meta: "Full-time · Lucknow",
    desc: "Join our audit team and work on diverse client engagements across public and private sectors.",
    tags: ["Audit", "Tax", "Compliance"],
    position: "Chartered Accountant",
    location: "Lucknow, UP",
    type: "Full-time",
  },
  {
    title: "Cybersecurity Analyst",
    meta: "Full-time · Remote",
    desc: "Work on security assessments, VAPT and cybersecurity consulting engagements for enterprise clients.",
    tags: ["VAPT", "SOC", "Compliance"],
    position: "Cybersecurity Analyst",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Article Assistant",
    meta: "Articleship · Multiple locations",
    desc: "Start your CA journey with hands-on experience across audit, taxation and consulting engagements.",
    tags: ["Training", "Mentorship", "Growth"],
    position: "Article Assistant",
    location: "Multiple Locations",
    type: "Training",
  },
  {
    title: "Business Analyst",
    meta: "Full-time · Lucknow",
    desc: "Analyse business processes and help clients improve their operations and compliance posture.",
    tags: ["Analysis", "Consulting", "Strategy"],
    position: "Business Analyst",
    location: "Lucknow, UP",
    type: "Full-time",
  },
];

const STATS = [
  { value: "30+", label: "Years of practice" },
  { value: "87+", label: "Team members" },
  { value: "4", label: "Office locations" },
  { value: "10", label: "Partners" },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="dot-grid absolute inset-0 -z-10" />
        <div className="mesh-aurora absolute inset-0 -z-10 opacity-40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 lg:pt-28 lg:pb-24">
          <Reveal>
            <div className="eyebrow">Careers</div>
            <h1 className="display mt-4 text-4xl sm:text-5xl lg:text-[64px] text-[color:var(--ink-900)] max-w-4xl">
              Build a practice, not just a career.
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[color:var(--ink-500)]">
              Opportunities for chartered accountants, articles, cybersecurity
              specialists and business professionals across our four offices.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why work here */}
      <section className="py-20 lg:py-24 bg-[color:var(--bg-elevated)] border-y border-[color:var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <div className="eyebrow">Why this firm</div>
            <h2 className="display mt-3 text-3xl sm:text-4xl text-[color:var(--ink-900)]">
              What working here looks like.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {PILLARS.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 0.08}>
                <div className="card h-full p-7">
                  <div className="display text-xl text-[color:var(--ink-900)]">
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

      {/* Open positions */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-14">
            <div className="eyebrow">Open roles</div>
            <h2 className="display mt-3 text-3xl sm:text-4xl lg:text-[44px] text-[color:var(--ink-900)]">
              Currently hiring.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {POSITIONS.map((job, idx) => (
              <Reveal key={job.title} delay={(idx % 2) * 0.08}>
                <div className="card h-full p-7 lg:p-8 flex flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[12px] tabular text-[color:var(--accent-700)] font-medium uppercase tracking-wider">
                        {job.type}
                      </div>
                      <h3 className="display mt-2 text-2xl text-[color:var(--ink-900)]">
                        {job.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-2 text-[13.5px] text-[color:var(--ink-500)]">
                    {job.meta}
                  </p>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-[color:var(--ink-700)] flex-1">
                    {job.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[color:var(--border)] bg-[color:var(--bg-muted)] px-3 py-1 text-[11.5px] text-[color:var(--ink-700)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <JobApplicationDialog
                      position={job.position}
                      location={job.location}
                      type={job.type}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-24 bg-[color:var(--bg-elevated)] border-y border-[color:var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <div className="eyebrow">Firm at a glance</div>
            <h2 className="display mt-3 text-3xl sm:text-4xl text-[color:var(--ink-900)]">
              Why people stay.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)]">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white p-7">
                <div className="display text-4xl lg:text-5xl text-[color:var(--ink-900)] tabular">
                  {s.value}
                </div>
                <div className="mt-3 text-[12px] uppercase tracking-[0.16em] text-[color:var(--ink-400)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="eyebrow">Don&rsquo;t see your role?</div>
            <h2 className="display mt-3 text-3xl sm:text-4xl text-[color:var(--ink-900)]">
              Send your resume anyway.
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[color:var(--ink-500)] max-w-xl mx-auto">
              We hire continuously across audit, tax, consulting and
              cybersecurity. Tell us about yourself and we&rsquo;ll be in touch
              when something fits.
            </p>
            <div className="mt-8 inline-flex">
              <ContactDialog />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
