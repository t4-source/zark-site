import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Security Audit & Compliance",
  description:
    "ISO 27001, SOC 2, RBI and DPDPA-aligned security audits across people, process and technology controls.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Cybersecurity"
      title="Security Audit & Compliance."
      intro="Independent security audits and regulatory compliance reviews — delivered with the documentation discipline of a CA practice."
      mode="service"
      sections={[
        {
          heading: "Compliance Frameworks",
          items: [
            "ISO/IEC 27001 readiness and certification support",
            "SOC 2 Type I and Type II",
            "PCI DSS",
            "HIPAA where applicable",
            "DPDPA 2023 alignment",
          ],
        },
        {
          heading: "Security Audits",
          items: [
            "Application and infrastructure controls",
            "Access management and privilege review",
            "Change management and SDLC",
            "Incident response readiness",
            "Vendor and third-party review",
          ],
        },
        {
          heading: "Regulatory Compliance",
          items: [
            "RBI cybersecurity framework for banks and NBFCs",
            "SEBI system audit (SAR)",
            "CERT-In reporting requirements",
            "IRDAI and IRDA cyber requirements",
            "Sector-specific data protection obligations",
          ],
        },
      ]}
      asides={[
        {
          title: "Methodology",
          body: "Documented working papers, evidence-led findings, prioritised remediation and partner-level sign-off.",
        },
        {
          title: "Outputs",
          body: "Findings report, remediation roadmap, board-ready summary and verification testing.",
        },
      ]}
      ctaDesc="Need to demonstrate compliance to a regulator, partner or board? Start with a scoping call."
    />
  );
}
