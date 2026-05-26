"use client";

import { useState } from "react";
import { useNotification } from "@/components/Notification";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const CONTACT_METHODS = [
  {
    label: "Email",
    value: "raghav@kraca.in",
    href: "mailto:raghav@kraca.in",
    icon: (
      <path d="M3 7l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    label: "Phone",
    value: "+91 99361 04447",
    href: "tel:+919936104447",
    icon: (
      <path d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.8a2 2 0 01-.45 1.95L8.09 10.91a16 16 0 005 5l1.65-1.38a2 2 0 011.95-.45l2.8.7A2 2 0 0121 16.72V19a2 2 0 01-2 2A18 18 0 013 5z" />
    ),
  },
  {
    label: "LinkedIn",
    value: "Follow the firm",
    href: "https://www.linkedin.com/company/kraca/",
    icon: (
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
    ),
  },
];

const OFFICES = [
  {
    city: "Lucknow",
    role: "Head office",
    addr: "105, Chintels House, 16 Station Road, Lucknow — 226001",
  },
  {
    city: "Jamshedpur",
    role: "Jharkhand",
    addr: "16/3 New Housing Colony, Adityapur — 831013",
  },
  {
    city: "Varanasi",
    role: "Uttar Pradesh",
    addr: "3/1380 Rampur Ward, Ramnagar — 221008",
  },
  {
    city: "Ghaziabad",
    role: "Uttar Pradesh",
    addr: "A 801 Exotica East Square, Indirapuram — 201014",
  },
];

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showNotification } = useNotification();
  const reduce = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        showNotification(
          "Thank you for your message. We will get back to you soon.",
          "success",
        );
        (e.target as HTMLFormElement).reset();
      } else {
        showNotification(
          "There was an error sending your message. Please try again.",
          "error",
        );
      }
    } catch {
      showNotification(
        "There was an error sending your message. Please try again.",
        "error",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="dot-grid absolute inset-0 -z-10" />
        <div className="mesh-aurora absolute inset-0 -z-10 opacity-40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-28 lg:pb-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="eyebrow">Contact</div>
            <h1 className="display mt-4 text-4xl sm:text-5xl lg:text-[64px] text-[color:var(--ink-900)] max-w-3xl">
              Start a conversation with the firm.
            </h1>
            <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-[color:var(--ink-500)]">
              For enquiries about specialised services or general
              correspondence, reach us via the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact methods strip */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)]">
            {CONTACT_METHODS.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.label === "LinkedIn" ? "_blank" : undefined}
                rel={m.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="group bg-white p-6 transition-colors hover:bg-[color:var(--bg-muted)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--accent-50)] text-[color:var(--accent-700)]">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {m.icon}
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--ink-400)]">
                      {m.label}
                    </div>
                    <div className="display text-[15px] text-[color:var(--ink-900)] group-hover:text-[color:var(--accent-700)] transition-colors">
                      {m.value}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + offices */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 lg:p-10">
              <div className="eyebrow">Write to the firm</div>
              <h2 className="display mt-3 text-2xl sm:text-3xl text-[color:var(--ink-900)]">
                Tell us what you&rsquo;re working on.
              </h2>
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Organisation (optional)" name="organization" />
                <div>
                  <label className="block text-[12.5px] font-medium text-[color:var(--ink-700)] mb-1.5 uppercase tracking-[0.12em]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3 text-[14.5px] text-[color:var(--ink-900)] placeholder:text-[color:var(--ink-300)] focus:border-[color:var(--accent-600)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-100)] transition"
                    placeholder="A few lines about your project or enquiry."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ink-900)] px-6 py-3 text-sm font-medium text-white hover:bg-[color:var(--accent-700)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="opacity-25"
                        />
                        <path
                          fill="currentColor"
                          className="opacity-75"
                          d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
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
                    </>
                  )}
                </button>
                <p className="text-[12px] text-[color:var(--ink-400)]">
                  Sending this form does not create a professional engagement.
                  We will respond to general enquiries within two business
                  days.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Offices list */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.08 }}
            className="lg:col-span-5"
          >
            <div className="eyebrow">Offices</div>
            <h2 className="display mt-3 text-2xl sm:text-3xl text-[color:var(--ink-900)]">
              Where to find us.
            </h2>
            <ul className="mt-7 space-y-3">
              {OFFICES.map((o) => (
                <li key={o.city}>
                  <div className="rounded-2xl border border-[color:var(--border)] bg-white p-5 hover:border-[color:var(--accent-200)] transition-colors">
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="display text-lg text-[color:var(--ink-900)]">
                        {o.city}
                      </div>
                      <div className="text-[11.5px] uppercase tracking-[0.14em] text-[color:var(--ink-400)]">
                        {o.role}
                      </div>
                    </div>
                    <div className="mt-2 text-[13.5px] text-[color:var(--ink-500)]">
                      {o.addr}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[12.5px] font-medium text-[color:var(--ink-700)] mb-1.5 uppercase tracking-[0.12em]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3 text-[14.5px] text-[color:var(--ink-900)] placeholder:text-[color:var(--ink-300)] focus:border-[color:var(--accent-600)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-100)] transition"
      />
    </div>
  );
}
