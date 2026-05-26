import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Stock & Physical Verification",
  description:
    "Stock and physical verification practice — fixed asset tagging, inventory verification and reconciliation. Informational page only.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Practice area"
      title="Stock & Physical Verification."
      intro="Fixed-asset tagging, inventory verification and reconciliation engagements — at scale, across energy, FMCG, manufacturing and hospitality sectors."
      mode="practice"
      sections={[
        {
          heading: "Oil & gas / energy",
          items: [
            "Green Gas Ltd.",
            "Indus Towers Ltd.",
            "Bharti Infratel Ltd.",
            "Energy sector asset verification",
          ],
        },
        {
          heading: "FMCG & retail",
          items: [
            "Coca-Cola India",
            "Pidilite Industries",
            "Cadila Pharma",
            "MARS",
            "Madura Fashion & Lifestyle",
          ],
        },
        {
          heading: "Industrial & manufacturing",
          items: [
            "JSW Steel Ltd.",
            "Zuari Agro Chemicals Ltd.",
            "LG India Pvt. Ltd.",
            "Manufacturing asset verification",
          ],
        },
        {
          heading: "Hospitality & real estate",
          items: [
            "OYO Rooms",
            "Forte Furniture Pvt. Ltd.",
            "Hospitality asset management",
            "Real estate inventory verification",
          ],
        },
      ]}
      asides={[
        {
          title: "Engagement format",
          body: "Time-bound assignments with documented procedures, sample sizes and reconciliation reports.",
        },
        {
          title: "Coverage",
          body: "Pan-India coverage through the firm's four offices and a roster of trained field associates.",
        },
      ]}
    />
  );
}
