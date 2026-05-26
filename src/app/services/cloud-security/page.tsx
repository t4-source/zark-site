import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Cloud Security",
  description:
    "CSPM, identity and configuration hardening across AWS, Azure and GCP environments.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Cybersecurity"
      title="Cloud Security."
      intro="Configuration hardening, identity-and-access design and workload protection across major cloud platforms."
      mode="service"
      sections={[
        {
          heading: "Cloud Architecture Security",
          items: [
            "AWS, Azure and GCP review",
            "Landing-zone and account-structure design",
            "Network segmentation and zero-trust topology",
            "Encryption and key-management review",
            "Secure CI/CD pipeline patterns",
          ],
        },
        {
          heading: "Data Protection",
          items: [
            "Data classification and discovery",
            "Encryption at rest and in transit",
            "Backup and recovery design",
            "DLP and exfiltration controls",
            "Cross-region and cross-cloud governance",
          ],
        },
        {
          heading: "Access Control",
          items: [
            "IAM least-privilege design",
            "SSO and federated identity",
            "Privileged access management",
            "Just-in-time and break-glass workflows",
            "Audit logging and review",
          ],
        },
      ]}
      asides={[
        {
          title: "Platforms",
          body: "AWS, Microsoft Azure, Google Cloud Platform, Oracle Cloud and on-prem private cloud.",
        },
        {
          title: "Engagement format",
          body: "One-time assessment, remediation programme, or ongoing CSPM operations.",
        },
      ]}
      ctaDesc="Need a cloud security baseline assessed? Start with a one-week scoping engagement."
    />
  );
}
