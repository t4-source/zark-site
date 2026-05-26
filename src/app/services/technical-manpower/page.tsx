import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Technical Manpower",
  description:
    "Embedded cybersecurity and IT engineers on time-bound or rolling engagements.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Cybersecurity"
      title="Technical Manpower."
      intro="Embedded engineers and specialists who plug into your team — vetted, billable and supervised at partner level."
      mode="service"
      sections={[
        {
          heading: "Cybersecurity Specialists",
          items: [
            "Security analysts (L1–L3)",
            "Penetration testers and red-teamers",
            "Cloud security engineers",
            "GRC and compliance analysts",
            "Incident responders",
          ],
        },
        {
          heading: "IT Infrastructure Experts",
          items: [
            "Network and firewall engineers",
            "System administrators (Windows/Linux)",
            "Database administrators",
            "DevOps and SRE engineers",
            "Identity and access engineers",
          ],
        },
        {
          heading: "Specialised Roles",
          items: [
            "Data engineers and analysts",
            "Application security engineers",
            "Compliance auditors",
            "Project managers (PMP/Prince2)",
            "Business analysts",
          ],
        },
      ]}
      asides={[
        {
          title: "Engagement format",
          body: "Hourly, monthly retainer, or fixed-term contracts. Replace, scale up or down with reasonable notice.",
        },
        {
          title: "Quality",
          body: "Every resource is interviewed by us first and supervised on assignment by a senior partner.",
        },
      ]}
      ctaDesc="Need to fill a hard-to-hire role quickly? Tell us what you need."
    />
  );
}
