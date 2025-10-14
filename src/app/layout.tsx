import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DisclaimerModal from "@/components/DisclaimerModal";
import { NotificationProvider } from "@/components/Notification";
import MobileNavigation from "@/components/MobileNavigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Z A R K & CO | Chartered Accountants",
  description:
    "Z A R K & CO is a Chartered Accountancy firm offering audit, assurance, taxation, consulting and cybersecurity services.",
  metadataBase: new URL("https://www.example.com"),
  icons: { 
    icon: [
      { url: "/CA_India_Logo.png", sizes: "32x32", type: "image/png" },
      { url: "/CA_India_Logo.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/CA_India_Logo.png",
    apple: "/CA_India_Logo.png"
  },
  openGraph: {
    title: "Z A R K & CO | Chartered Accountants",
    description: "Z A R K & CO is a Chartered Accountancy firm offering audit, assurance, taxation, consulting and cybersecurity services.",
    images: ["/CA_India_Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NotificationProvider>
      <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-dvh flex flex-col bg-white text-slate-800">
          <header className="border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/CA_India_Logo.png" alt="Z A R K & CO" width={60} height={60} className="rounded" />
                <span className="font-semibold text-slate-900 text-xl">Z A R K & CO</span>
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <Link href="/" className="hover:text-blue-700">Home</Link>
                <Link href="/who-we-are" className="hover:text-blue-700">Who we are</Link>
                <Link href="/practice-areas" className="hover:text-blue-700">Practice areas</Link>
                <Link href="/cybersecurity" className="hover:text-blue-700">Cybersecurity Services</Link>
                <Link href="/blogs" className="hover:text-blue-700">Blogs</Link>
                <Link href="/careers" className="hover:text-blue-700">Career</Link>
                <Link href="/contact" className="hover:text-blue-700">Contact</Link>
              </nav>

              {/* Mobile Navigation */}
              <MobileNavigation />
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
              {/* Footer Content */}
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                {/* Company Info */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-4">
                    <Image src="/CA_India_Logo.png" alt="Z A R K & CO" width={48} height={48} className="rounded" />
                    <span className="font-semibold text-slate-900 text-lg">Z A R K & CO</span>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Chartered Accountancy firm with over 30 years of experience in audit, assurance, taxation, consulting and cybersecurity services.
                  </p>
                  <div className="text-slate-500 text-sm mb-4">
                    <p>YEAR OF ESTABLISHMENT: 04-04-1997</p>
                    <p>Email: raghav@kraca.in</p>
                    <p>Phone: +91-9936104447</p>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/who-we-are" className="text-slate-600 hover:text-blue-600">Who we are</Link></li>
                    <li><Link href="/practice-areas" className="text-slate-600 hover:text-blue-600">Practice areas</Link></li>
                    <li><Link href="/cybersecurity" className="text-slate-600 hover:text-blue-600">Cybersecurity</Link></li>
                    <li><Link href="/blogs" className="text-slate-600 hover:text-blue-600">Blogs</Link></li>
                    <li><Link href="/careers" className="text-slate-600 hover:text-blue-600">Careers</Link></li>
                    <li><Link href="/contact" className="text-slate-600 hover:text-blue-600">Contact</Link></li>
                  </ul>
                </div>

                {/* Social & Contact */}
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Connect With Us</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://www.linkedin.com/company/kraca/posts/?feedView=all" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>Follow us on LinkedIn</span>
                    </a>
                    <div className="text-slate-500 text-sm">
                      <p>Head Office:</p>
                      <p>105, Chintels House, 16 Station Road</p>
                      <p>Lucknow - 226001, UP, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Organizational Memberships */}
              <div className="border-t border-slate-200 pt-8 mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">Organizational Memberships</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center">
                    <div className="mb-4">
                      <Image
                        src="/cii.png"
                        alt="Confederation of Indian Industry"
                        width={150}
                        height={80}
                        className="mx-auto object-contain"
                      />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">Confederation of Indian Industry</h4>
                    <p className="text-slate-600 text-xs">Member of CII - India&apos;s premier business association</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mb-4">
                      <Image
                        src="/young-indians.png"
                        alt="Young Indians"
                        width={150}
                        height={80}
                        className="mx-auto object-contain"
                      />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">Young Indians</h4>
                    <p className="text-slate-600 text-xs">Member of Young Indians - CII&apos;s youth wing</p>
                  </div>
                </div>
              </div>

              {/* ICAI Disclaimer */}
              <div className="border-t border-slate-200 pt-8">
                <div className="text-xs leading-relaxed text-slate-600">
                  <p className="mb-2">
                    The rules of Institute of Chartered Accountants of India prohibit Chartered Accountants firm from advertising and soliciting work in the public domain. This website is solely meant for the purpose of information and not for the purpose of advertising. ZARK & CO does not intend to solicit clients through this website. We do not take the responsibility of any action taken by any person based on the information posted here.
                  </p>
                  <p className="mb-4">
                    By proceeding beyond this point the visitor acknowledges that the information provided on the website does not (a) amount to solicitation and advertising; and (b) is meant only for their understanding about our activities and who we are.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="text-slate-500">© {new Date().getFullYear()} Z A R K & CO. All rights reserved.</div>
                    <div className="flex gap-4 text-xs">
                      <Link href="/privacy" className="text-slate-500 hover:text-slate-700">Privacy Policy</Link>
                      <Link href="/terms" className="text-slate-500 hover:text-slate-700">Terms of Service</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* LocalBusiness Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'ZARK & CO',
              url: 'https://www.example.com',
              email: 'raghav@kraca.in',
              telephone: '+91-9936104447',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '105, Chintels House, 16 Station Road',
                addressLocality: 'Lucknow',
                postalCode: '226001',
                addressCountry: 'IN',
                addressRegion: 'UP',
              },
              sameAs: [],
            }),
          }}
        />

        {/* First-visit ICAI compliance modal */}
        <DisclaimerModal />
        </body>
      </html>
    </NotificationProvider>
  );
}
