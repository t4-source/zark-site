import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Risk & Advisory Services",
  description:
    "Risk and advisory practice — internal controls, MIS systems and specialised consultancy. Informational page only.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Practice area"
      title="Risk & Advisory Services."
      intro="Internal financial controls, enterprise risk reviews and MIS systems engagements — aligned with sectoral regulators and industry standards."
      mode="practice"
      sections={[
        {
          heading: "Internal controls & risk management",
          items: [
            "Internal control system design",
            "Risk assessment and mitigation",
            "Compliance framework development",
            "Control testing and evaluation",
            "Fraud prevention review",
          ],
        },
        {
          heading: "MIS & reporting systems",
          items: [
            "Management information systems design",
            "Financial reporting frameworks",
            "Performance monitoring systems",
            "Dashboard and analytics setup",
            "Real-time reporting review",
          ],
        },
        {
          heading: "Specialised consultancy",
          items: [
            "Accounting system implementation review",
            "Costing system design",
            "Financial restructuring review",
            "Corporatisation projects",
            "Material accounting systems",
          ],
        },
      ]}
      asides={[
        {
          title: "Engagement format",
          body: "Scoped advisory engagements, typically delivered alongside the firm's audit work where appropriate.",
        },
        {
          title: "Sectors",
          body: "Cross-industry — public-sector, banking, manufacturing, services and not-for-profit.",
        },
      ]}
    />
  );
}
