import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "VAPT",
  description:
    "Vulnerability assessment and penetration testing across web, mobile, network and infrastructure — with detailed remediation guidance.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Cybersecurity"
      title="Vulnerability Assessment & Penetration Testing."
      intro="Manual and automated security testing across web, mobile, network and cloud — followed by remediation guidance and re-verification."
      mode="service"
      sections={[
        {
          heading: "Web Application Testing",
          items: [
            "OWASP Top 10 vulnerability assessment",
            "SQL injection and command injection",
            "Cross-site scripting (XSS)",
            "Authentication and session bypass",
            "Business logic and authorisation flaws",
          ],
        },
        {
          heading: "Network Security Testing",
          items: [
            "External network penetration testing",
            "Internal network and Active Directory testing",
            "Firewall and segmentation review",
            "Wireless network assessment",
            "Configuration and patching review",
          ],
        },
        {
          heading: "Infrastructure & Cloud",
          items: [
            "Server and operating system hardening review",
            "Database security testing",
            "AWS, Azure and GCP configuration testing",
            "Container and Kubernetes security",
            "Mobile and API penetration testing",
          ],
        },
      ]}
      asides={[
        {
          title: "Methodology",
          body: "Scoping → reconnaissance → exploitation → reporting → remediation verification. PTES and OWASP-aligned.",
        },
        {
          title: "Deliverables",
          body: "Executive summary, technical findings with CVSS scoring, proof-of-concept and remediation guidance.",
        },
      ]}
      ctaDesc="Need a credible penetration test for a customer, partner or regulator? Start with a scoping conversation."
    />
  );
}
