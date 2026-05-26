import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice areas",
  description:
    "Practice areas of Z A R K & Co LLP — audit, assurance, taxation, governance, banking and project financing. Informational page only.",
  icons: { icon: "/zark.png" },
};

export default function PracticeAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
