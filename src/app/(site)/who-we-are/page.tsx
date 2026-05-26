import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About the firm",
  description:
    "Z A R K & Co LLP is a Chartered Accountancy LLP established in 1997, with practice areas across audit, assurance, taxation, governance and cybersecurity.",
  icons: { icon: "/zark.png" },
};

const partners = [
  { name: "VINAY KRISHNA", credential: "FCA", membershipNo: "070102", image: null },
  { name: "MOHAMED ZOHAIR HUSAIN", credential: "FCA", membershipNo: "071126", image: null },
  { name: "KHANDELWAL PREM SHANKAR", credential: "FCA", membershipNo: "073702", image: null },
  { name: "KANAN KUSUM TIWARI", credential: "FCA", membershipNo: "081473", image: null },
  { name: "RAGHAV KRISHNA", credential: "FCA", membershipNo: "416687", image: "/raghav.jpeg" },
  { name: "ASHISH KUMAR AGARWAL", credential: "FCA", membershipNo: "418864", image: null },
  { name: "RASHI GARG", credential: "FCA", membershipNo: "422471", image: "/rashi.jpeg" },
  { name: "RISHI ARORA", credential: "FCA", membershipNo: "423272", image: "/rishi.png" },
  { name: "AJAI KUSHWAHA", credential: "ACA", membershipNo: "433357", image: null },
  { name: "AMIT KUMAR GUPTA", credential: "FCA", membershipNo: "543161", image: null },
];

const TEAM_COMPOSITION = [
  { label: "Full-time CA employees", value: "04" },
  { label: "Full-time ICWA employees", value: "02" },
  { label: "Company Secretaries", value: "02" },
  { label: "Ex-banker employees", value: "01" },
  { label: "Article assistants", value: "53" },
  { label: "Semi-qualified staff", value: "12" },
  { label: "Other professional staff", value: "15" },
];

const EXPERTISE = [
  "Public Sector & Government Organisations",
  "Banking & Financial Institutions",
  "Information Systems Audits",
  "Stock & Physical Verification",
  "Private Sector Engagements",
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
            <div className="eyebrow">About the firm</div>
            <h1 className="display mt-4 text-4xl sm:text-5xl lg:text-[64px] text-[color:var(--ink-900)] max-w-4xl">
              A Chartered Accountancy LLP, three decades in practice.
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[color:var(--ink-500)]">
              Z A R K &amp; Co LLP has delivered audit, assurance and
              consulting services across public-sector undertakings, banking
              &amp; financial institutions, and private enterprise since 1997.
              Today the firm operates from four offices with a multidisciplinary
              team of chartered professionals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Two-column: practice context + team composition */}
      <section className="py-20 lg:py-24 bg-[color:var(--bg-elevated)] border-y border-[color:var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            <div className="eyebrow">The practice</div>
            <h2 className="display mt-3 text-3xl sm:text-4xl text-[color:var(--ink-900)]">
              Audit discipline, applied broadly.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[color:var(--ink-500)]">
              The firm&rsquo;s practice spans the conventional disciplines of a
              CA LLP — statutory and internal audit, assurance, direct and
              indirect taxation, risk and governance — alongside specialised
              cybersecurity and data-protection engagements that sit outside the
              ICAI advertising scope.
            </p>

            <div className="mt-8 rounded-2xl border border-[color:var(--border)] bg-white p-6">
              <div className="eyebrow">Key areas of experience</div>
              <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-[14.5px] text-[color:var(--ink-700)]">
                {EXPERTISE.map((e) => (
                  <li key={e} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1 w-1 rounded-full bg-[color:var(--accent-600)] shrink-0" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <div className="eyebrow">Team composition</div>
            <h2 className="display mt-3 text-3xl sm:text-4xl text-[color:var(--ink-900)]">
              87+ professionals across four offices.
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)]">
              {TEAM_COMPOSITION.map((t) => (
                <div key={t.label} className="bg-white p-5">
                  <div className="text-2xl tabular font-semibold text-[color:var(--ink-900)]">
                    {t.value}
                  </div>
                  <div className="mt-1 text-[12.5px] text-[color:var(--ink-500)]">
                    {t.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-14">
            <div className="eyebrow">Partners</div>
            <h2 className="display mt-3 text-3xl sm:text-4xl lg:text-[44px] text-[color:var(--ink-900)]">
              Ten partners. One standard.
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[color:var(--ink-500)]">
              Every engagement is supervised at partner level. Members of the
              firm are listed below with ICAI membership numbers.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {partners.map((p, idx) => (
              <Reveal key={p.membershipNo} delay={(idx % 4) * 0.06}>
                <div className="card group h-full p-6 text-center">
                  <div className="mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full border border-[color:var(--border)] bg-[color:var(--bg-muted)]">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <svg className="h-12 w-12 text-[color:var(--ink-300)]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="display text-[16px] text-[color:var(--ink-900)] leading-snug">
                    {p.name}
                  </div>
                  <div className="mt-2 text-[12.5px] text-[color:var(--ink-500)] tabular">
                    {p.credential} &middot; M.No. {p.membershipNo}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-20 lg:py-24 bg-[color:var(--bg-elevated)] border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <div className="eyebrow">Memberships</div>
            <h2 className="display mt-3 text-3xl sm:text-4xl text-[color:var(--ink-900)]">
              Organisational memberships.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                src: "/cii.png",
                name: "Confederation of Indian Industry",
                line: "India's premier business association",
              },
              {
                src: "/young-indians.png",
                name: "Young Indians",
                line: "Youth wing of the CII",
              },
            ].map((m, idx) => (
              <Reveal key={m.name} delay={idx * 0.08}>
                <div className="card flex items-center gap-6 p-7">
                  <div className="shrink-0 rounded-xl border border-[color:var(--border)] bg-white p-3">
                    <Image
                      src={m.src}
                      alt={m.name}
                      width={120}
                      height={64}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <div className="display text-lg text-[color:var(--ink-900)]">
                      {m.name}
                    </div>
                    <div className="mt-1 text-[13.5px] text-[color:var(--ink-500)]">
                      {m.line}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
