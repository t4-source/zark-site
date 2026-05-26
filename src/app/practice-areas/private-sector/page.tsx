import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Private Sector Audits & Compliance",
  description:
    "Private-sector audit and compliance engagements — informational page describing the firm's engagement history.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Practice area"
      title="Private Sector Audits & Compliance."
      intro="Statutory, internal and special-purpose audit engagements for private enterprise — across FMCG, manufacturing, infrastructure and educational institutions."
      mode="practice"
      sections={[
        {
          heading: "FMCG & retail",
          items: [
            "Coca-Cola India",
            "Pidilite Industries",
            "Cadila Pharma",
            "MARS",
            "Madura Fashion & Lifestyle (Aditya Birla Group)",
          ],
        },
        {
          heading: "Industrial & manufacturing",
          items: [
            "JSW Steel Ltd.",
            "Zuari Agro Chemicals Ltd.",
            "LG India Pvt. Ltd.",
            "Industrial manufacturing audits",
            "Supply chain verification",
          ],
        },
        {
          heading: "Infrastructure & real estate",
          items: [
            "Indus Towers Ltd.",
            "Bharti Infratel Ltd.",
            "OYO Rooms",
            "Forte Furniture Pvt. Ltd.",
            "Real estate project audits",
          ],
        },
        {
          heading: "Other private organisations",
          items: [
            "M.B. Club Ltd., Lucknow",
            "Lucknow Golf Club",
            "The Study Hall Foundation",
            "Army Wives Welfare Association",
          ],
        },
      ]}
      asides={[
        {
          title: "Engagement format",
          body: "Statutory and internal audit engagements, scoped per the requirements of the enterprise.",
        },
        {
          title: "Sectors covered",
          body: "FMCG, retail, manufacturing, infrastructure, hospitality and not-for-profit organisations.",
        },
      ]}
    />
  );
}
