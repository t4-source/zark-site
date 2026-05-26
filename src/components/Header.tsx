"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import MobileNavigation from "@/components/MobileNavigation";

const NAV_LINKS = [
  { href: "/who-we-are", label: "Firm" },
  { href: "/practice-areas", label: "Practice areas" },
  { href: "/cybersecurity", label: "Cybersecurity" },
  { href: "/dpdpa", label: "DPDPA" },
  { href: "/blogs", label: "Insights" },
  { href: "/careers", label: "Careers" },
];

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 12;
    if (next !== scrolled) setScrolled(next);
  });

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(248,250,252,0.75)" : "rgba(248,250,252,1)",
        borderBottomColor: scrolled ? "rgba(226,232,240,0.85)" : "rgba(226,232,240,0)",
        boxShadow: scrolled
          ? "0 10px 30px -16px rgba(15,23,42,0.12)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
      }}
      className="sticky top-0 z-50 border-b"
    >
      <motion.div
        animate={{ height: scrolled ? 60 : 80 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6"
      >
        <Link href="/" className="flex items-center shrink-0 group">
          <motion.div
            animate={{ scale: scrolled ? 0.86 : 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left center" }}
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Z A R K & Co LLP"
              width={304}
              height={61}
              className="h-11 sm:h-12 w-auto object-contain"
              priority
            />
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5 text-[14px]">
          {NAV_LINKS.map((l) => {
            const isActive =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                data-active={isActive}
                className="nav-link relative px-3 py-2 rounded-md text-[color:var(--ink-700)] hover:text-[color:var(--accent-700)] transition-colors"
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-3 group/cta relative inline-flex items-center gap-1.5 rounded-full bg-[color:var(--ink-900)] px-4 py-2 text-[13px] font-medium text-white hover:bg-[color:var(--accent-700)] transition-colors"
          >
            <span>Contact</span>
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5"
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
        </nav>

        <MobileNavigation />
      </motion.div>
    </motion.header>
  );
}
