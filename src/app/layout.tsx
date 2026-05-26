import type { Metadata } from "next";
import DisclaimerModal from "@/components/DisclaimerModal";
import { NotificationProvider } from "@/components/Notification";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomChatbot from "@/components/CustomChatbot";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Z A R K & Co LLP",
    template: "%s · Z A R K & Co LLP",
  },
  description:
    "Z A R K & Co LLP is a Chartered Accountancy LLP with practice areas across audit, assurance, taxation and governance, and specialised cybersecurity & DPDPA services.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://kraca.in",
  ),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/zark.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon.svg",
    apple: "/zark.png",
  },
  openGraph: {
    title: "Z A R K & Co LLP — Chartered Accountants",
    description:
      "Chartered Accountancy firm. Audit, assurance, taxation, governance, cybersecurity and DPDPA compliance.",
    images: ["/zark.png"],
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
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} antialiased`}
        >
          <div className="min-h-dvh flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>

          {/* LocalBusiness Schema.org */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Z A R K & Co LLP",
                url:
                  process.env.NEXT_PUBLIC_SITE_URL || "https://kraca.in",
                email: "raghav@kraca.in",
                telephone: "+91-9936104447",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "105, Chintels House, 16 Station Road",
                  addressLocality: "Lucknow",
                  postalCode: "226001",
                  addressCountry: "IN",
                  addressRegion: "UP",
                },
                sameAs: [
                  "https://www.linkedin.com/company/kraca/",
                ],
              }),
            }}
          />

          <DisclaimerModal />
          <CustomChatbot />
        </body>
      </html>
    </NotificationProvider>
  );
}
