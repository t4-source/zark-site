import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Managed SOC",
  description:
    "Fully managed Security Operations Centre with detection, triage and escalation handled in-house.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Cybersecurity"
      title="Managed SOC."
      intro="A fully managed Security Operations Centre — 24×7 monitoring, triage and escalation, with documented response procedures."
      mode="service"
      sections={[
        {
          heading: "24×7 Security Monitoring",
          items: [
            "Around-the-clock log monitoring",
            "Multi-source SIEM correlation",
            "Cloud and SaaS coverage",
            "Endpoint and identity signals",
            "Behavioural and anomaly detection",
          ],
        },
        {
          heading: "Incident Response",
          items: [
            "Tier-1 triage within defined SLAs",
            "Tier-2 deeper investigation and containment",
            "Tier-3 escalation to senior analysts",
            "Documented runbooks per incident class",
            "Post-incident review and tuning",
          ],
        },
        {
          heading: "Reporting & Governance",
          items: [
            "Monthly executive reports",
            "Weekly operational dashboards",
            "KPI and MTTR tracking",
            "Threat-intel briefings",
            "Quarterly governance reviews",
          ],
        },
      ]}
      asides={[
        {
          title: "Onboarding",
          body: "Typical onboarding is 2–4 weeks: source integration, use-case tuning, runbook handover.",
        },
        {
          title: "SLAs",
          body: "Defined SLAs for triage, containment and escalation — measured and reported monthly.",
        },
      ]}
      ctaDesc="Considering managed SOC? Tell us about your environment and we'll quote against defined scope."
    />
  );
}
