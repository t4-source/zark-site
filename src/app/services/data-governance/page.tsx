import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Data Governance",
  description:
    "Data classification, retention policy design and DPDPA-aligned governance frameworks.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Cybersecurity"
      title="Data Governance."
      intro="End-to-end data governance — classification, retention, privacy and DPDPA-aligned controls."
      mode="service"
      sections={[
        {
          heading: "Data Classification",
          items: [
            "Inventory and discovery across systems",
            "Sensitivity classification (public / internal / confidential / restricted)",
            "Personal data and SPDI tagging",
            "Data flow mapping and ROPA",
            "Owner and steward assignment",
          ],
        },
        {
          heading: "Privacy Compliance",
          items: [
            "DPDPA 2023 readiness and implementation",
            "Consent management framework",
            "Subject-rights workflows (access, erasure)",
            "Cross-border transfer assessment",
            "Privacy-by-design reviews",
          ],
        },
        {
          heading: "Data Lifecycle Management",
          items: [
            "Retention policy design",
            "Defensible deletion and archival",
            "Data minimisation programmes",
            "Backup and recovery alignment",
            "Audit and reporting controls",
          ],
        },
      ]}
      asides={[
        {
          title: "Engagement format",
          body: "Discovery → policy design → implementation → operational handover, with optional ongoing DPO support.",
        },
        {
          title: "Best fit",
          body: "Schools, banks, NBFCs, healthcare providers, and any data fiduciary under DPDPA 2023.",
        },
      ]}
      ctaDesc="Need DPDPA-aligned data governance? Start with a one-week discovery engagement."
    />
  );
}
