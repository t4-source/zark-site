import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Security Trainings",
  description:
    "Role-based security awareness, secure coding and incident-response training programmes.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Cybersecurity"
      title="Security trainings."
      intro="Awareness, technical and role-specific training programmes — designed and delivered by practitioners."
      mode="service"
      sections={[
        {
          heading: "Awareness Training",
          items: [
            "Security awareness for all staff",
            "Phishing simulations and reporting drills",
            "Data handling and DPDPA basics",
            "Remote-work and BYOD hygiene",
            "Executive briefings on emerging threats",
          ],
        },
        {
          heading: "Technical Training",
          items: [
            "Secure coding for developers",
            "DevSecOps and CI/CD security",
            "Cloud security on AWS, Azure and GCP",
            "Incident response and forensics",
            "Penetration testing fundamentals",
          ],
        },
        {
          heading: "Certification Preparation",
          items: [
            "CISSP, CISM and CISA",
            "Cloud certifications (AWS, Azure)",
            "OSCP and offensive certifications",
            "ISO 27001 lead auditor",
            "DPDPA-specific programmes",
          ],
        },
      ]}
      asides={[
        {
          title: "Delivery",
          body: "On-site, virtual instructor-led, or hybrid. Custom curricula on request.",
        },
        {
          title: "Outcomes",
          body: "Attendance tracking, assessment scores and post-training competency reports.",
        },
      ]}
      ctaDesc="Need to upskill a team or run an awareness campaign? Tell us the audience and outcome."
    />
  );
}
