import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Managed Security Services (vCISO)",
  description:
    "Fractional CISO advisory — strategy, board reporting, vendor risk and compliance leadership.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Cybersecurity"
      title="Virtual CISO advisory."
      intro="Senior security leadership on a fractional basis — strategy, board reporting, vendor and regulatory programmes."
      mode="service"
      sections={[
        {
          heading: "Security Strategy",
          items: [
            "Security programme design and execution",
            "Maturity baselining and improvement plans",
            "Budget and roadmap ownership",
            "Architecture review and approval",
            "Build-vs-buy decisions",
          ],
        },
        {
          heading: "Governance & Compliance",
          items: [
            "Board and audit-committee reporting",
            "Policy framework ownership",
            "Regulator engagement (RBI, SEBI, IRDAI)",
            "Standards alignment (ISO 27001, SOC 2, NIST)",
            "Customer security questionnaire support",
          ],
        },
        {
          heading: "Risk Management",
          items: [
            "Enterprise risk register ownership",
            "Vendor risk programme",
            "Cyber-insurance review and support",
            "Crisis communication planning",
            "Tabletop exercises and IR readiness",
          ],
        },
      ]}
      asides={[
        {
          title: "Engagement format",
          body: "Quarterly retainer — typical commitment is 8–16 hours per month with on-call escalation.",
        },
        {
          title: "Best fit",
          body: "Mid-market firms, regulated startups, and enterprises between full-time CISOs.",
        },
      ]}
      ctaDesc="Need a CISO without the full-time cost? Tell us about your environment and we'll propose a fit."
    />
  );
}
