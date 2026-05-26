import Link from "next/link";
import Image from "next/image";

const QUICK_LINKS = [
  { href: "/who-we-are", label: "About the firm" },
  { href: "/practice-areas", label: "Practice areas" },
  { href: "/cybersecurity", label: "Cybersecurity" },
  { href: "/dpdpa", label: "DPDPA compliance" },
  { href: "/blogs", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const OFFICES = [
  { name: "Lucknow", line: "105, Chintels House, 16 Station Road — 226001" },
  { name: "Jamshedpur", line: "16/3 New Housing Colony, Adityapur — 831013" },
  { name: "Varanasi", line: "3/1380 Rampur Ward, Ramnagar — 221008" },
  { name: "Ghaziabad", line: "A 801 Exotica East Square, Indirapuram — 201014" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[color:var(--border)] bg-[color:var(--bg-elevated)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Top: brand + nav + offices */}
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/logo.png"
              alt="Z A R K & Co LLP"
              width={304}
              height={61}
              className="h-12 w-auto object-contain"
            />
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[color:var(--ink-500)]">
              A Chartered Accountancy LLP engaged in audit, assurance, taxation,
              governance and cybersecurity. Established 1997, operating across
              India.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-[color:var(--ink-500)]">
              <a
                href="mailto:raghav@kraca.in"
                className="rounded-full border border-[color:var(--border)] px-3 py-1.5 hover:border-[color:var(--accent-200)] hover:text-[color:var(--accent-700)] transition-colors"
              >
                raghav@kraca.in
              </a>
              <a
                href="tel:+919936104447"
                className="rounded-full border border-[color:var(--border)] px-3 py-1.5 hover:border-[color:var(--accent-200)] hover:text-[color:var(--accent-700)] transition-colors"
              >
                +91 99361 04447
              </a>
              <a
                href="https://www.linkedin.com/company/kraca/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] px-3 py-1.5 hover:border-[color:var(--accent-200)] hover:text-[color:var(--accent-700)] transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07s.92-2.06 2.06-2.06c1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.07-2.06 2.07zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow">Navigate</div>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[color:var(--ink-700)] hover:text-[color:var(--accent-700)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="eyebrow">Offices</div>
            <ul className="mt-4 space-y-3 text-[13.5px] text-[color:var(--ink-500)]">
              {OFFICES.map((o) => (
                <li key={o.name}>
                  <div className="font-medium text-[color:var(--ink-700)]">
                    {o.name}
                  </div>
                  <div>{o.line}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline my-12" />

        {/* Memberships */}
        <div className="grid gap-8 sm:grid-cols-2 items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/cii.png"
              alt="Confederation of Indian Industry"
              width={80}
              height={48}
              className="h-12 w-auto object-contain"
            />
            <div className="text-[13px] text-[color:var(--ink-500)]">
              <div className="font-medium text-[color:var(--ink-700)]">
                Member, Confederation of Indian Industry
              </div>
              India&rsquo;s premier business association
            </div>
          </div>
          <div className="flex items-center gap-4 sm:justify-end">
            <Image
              src="/young-indians.png"
              alt="Young Indians"
              width={80}
              height={48}
              className="h-12 w-auto object-contain"
            />
            <div className="text-[13px] text-[color:var(--ink-500)]">
              <div className="font-medium text-[color:var(--ink-700)]">
                Member, Young Indians (CII)
              </div>
              Youth wing of the Confederation
            </div>
          </div>
        </div>

        <div className="hairline my-12" />

        {/* ICAI compliance block — REQUIRED, do not remove */}
        <div className="rounded-2xl bg-[color:var(--bg-muted)] p-6 text-[12.5px] leading-relaxed text-[color:var(--ink-500)]">
          <p className="mb-2">
            The rules of the Institute of Chartered Accountants of India
            prohibit Chartered Accountants firms from advertising and soliciting
            work in the public domain. This website is meant solely for the
            purpose of information and not for the purpose of advertising. Z A
            R K &amp; Co LLP does not intend to solicit clients through this
            website. We do not take responsibility for any action taken by any
            person based on the information posted here.
          </p>
          <p>
            By proceeding beyond this point the visitor acknowledges that the
            information provided on this website does not (a) amount to
            solicitation and advertising; and (b) is meant only for their
            understanding of our activities and who we are.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[12.5px] text-[color:var(--ink-400)]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-5 gap-y-1">
            <div>
              &copy; {new Date().getFullYear()} Z A R K &amp; Co LLP. All
              rights reserved.
            </div>
            {/* TODO(firm): replace the placeholder with the firm's ICAI FRN */}
            <div className="tabular text-[color:var(--ink-500)]">
              ICAI FRN: {process.env.NEXT_PUBLIC_ICAI_FRN || "—"}
            </div>
          </div>
          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="hover:text-[color:var(--ink-700)] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[color:var(--ink-700)] transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
