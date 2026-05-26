import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Security Operations",
  description:
    "24×7 security monitoring, incident response and threat-management engagements scaled to the client.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Cybersecurity"
      title="Security Operations."
      intro="Detection, monitoring and incident response services — delivered as a managed engagement or as embedded talent."
      mode="service"
      sections={[
        {
          heading: "24×7 Security Monitoring",
          items: [
            "SIEM operations and tuning",
            "Endpoint detection and response (EDR)",
            "Network traffic analysis",
            "Cloud workload monitoring",
            "Alert triage and false-positive reduction",
          ],
        },
        {
          heading: "Incident Response",
          items: [
            "Incident response retainers",
            "Forensic investigation and root-cause analysis",
            "Containment and recovery support",
            "Post-incident review and remediation",
            "Tabletop exercises and runbook design",
          ],
        },
        {
          heading: "Threat Intelligence",
          items: [
            "Strategic and tactical threat intel feeds",
            "Threat hunting against your environment",
            "Brand and dark-web monitoring",
            "Indicator-of-compromise enrichment",
            "Threat-model alignment",
          ],
        },
      ]}
      asides={[
        {
          title: "Engagement models",
          body: "Fully managed, co-managed with your team, or staff-augmentation for short-term coverage.",
        },
        {
          title: "Tooling",
          body: "Works with your existing SIEM, EDR and ticketing stack — we don't lock you into one vendor.",
        },
      ]}
      ctaDesc="Looking for monitoring coverage or an incident response retainer? Let's scope it."
    />
  );
}
