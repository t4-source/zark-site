import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Project Financing",
  description:
    "Project financing practice area — financial structuring, funding documentation and investment review. Informational page only.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Practice area"
      title="Project Financing."
      intro="Financial structuring, funding documentation and investment review across infrastructure and enterprise projects."
      mode="practice"
      sections={[
        {
          heading: "Financial structuring",
          items: [
            "Debt and equity structuring",
            "Capital structure review",
            "Risk allocation and mitigation",
            "Financial modelling and projections",
            "Covenant structuring and monitoring",
          ],
        },
        {
          heading: "Funding documentation",
          items: [
            "Bank loan documentation",
            "Bond issuance advisory",
            "Private equity arrangement review",
            "Government funding programme documentation",
            "International funding source review",
          ],
        },
        {
          heading: "Investment analysis",
          items: [
            "Feasibility studies and analysis",
            "ROI and NPV review",
            "Sensitivity analysis and stress testing",
            "Market research and due diligence",
            "Investment review reports",
          ],
        },
      ]}
      asides={[
        {
          title: "Sectors",
          body: "Infrastructure, manufacturing, energy, real estate and enterprise project financing.",
        },
        {
          title: "Engagement format",
          body: "Discovery → analysis → documentation → ongoing covenant monitoring.",
        },
      ]}
    />
  );
}
