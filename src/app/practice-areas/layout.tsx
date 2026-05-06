import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas | K RAGHAV & ASSOCIATES",
  description: "Comprehensive audit, assurance, and consulting services across diverse sectors and industries.",
  icons: { icon: "/CA_India_Logo.png" },
};

export default function PracticeAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
