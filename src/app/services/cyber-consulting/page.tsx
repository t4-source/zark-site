import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Cybersecurity Consulting",
  description:
    "Strategic cybersecurity consulting — programme design, governance and roadmap execution.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Cybersecurity"
      title="Cybersecurity Consulting."
      intro="Strategic security planning and programme execution for enterprises building or maturing a security function."
      mode="service"
      sections={[
        {
          heading: "Strategic Security Planning",
          items: [
            "Security strategy aligned to business goals",
            "Maturity assessment and gap analysis",
            "Multi-year security roadmap",
            "Budget planning and prioritisation",
            "Board-level reporting structures",
          ],
        },
        {
          heading: "Security Governance",
          items: [
            "Policy and standards framework",
            "Risk-management methodology",
            "Compliance programme design",
            "Vendor and third-party risk programmes",
            "Security awareness and culture",
          ],
        },
        {
          heading: "Technology Security",
          items: [
            "Reference architecture review",
            "Cloud and infrastructure hardening",
            "Application security programme",
            "Identity and access architecture",
            "Detection and response design",
          ],
        },
      ]}
      asides={[
        {
          title: "Engagement format",
          body: "Defined scoping → assessment → roadmap → governance setup. Time-bound, with documented deliverables.",
        },
        {
          title: "Sectors",
          body: "Banking & financial services, enterprise, public sector, education and healthcare.",
        },
      ]}
      ctaDesc="Tell us where you are in your security journey — we'll map a path forward."
    />
  );
}
