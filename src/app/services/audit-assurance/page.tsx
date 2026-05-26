import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Audit & Assurance",
  description:
    "Audit and assurance practice area at Z A R K & Co LLP — informational page only, not an offer of professional services.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Practice area"
      title="Audit & Assurance."
      intro="The firm conducts statutory, internal, concurrent, stock and special-purpose audits across public-sector undertakings, banking institutions and private enterprise."
      mode="practice"
      sections={[
        {
          heading: "Scope of work",
          items: [
            "Statutory audits for public-sector undertakings",
            "Banking & financial institution audits",
            "Information systems audits",
            "Stock & physical verification",
            "Internal audit & risk assessment",
            "Concurrent and revenue audits",
          ],
        },
      ]}
      asides={[
        {
          title: "Established 1997",
          body: "The firm has practised in this area since incorporation in 1997.",
        },
        {
          title: "Sectors covered",
          body: "Public-sector undertakings, banking and financial institutions, and private enterprise.",
        },
        {
          title: "Team composition",
          body: "Chartered Accountants, Cost Accountants and Company Secretaries across four offices.",
        },
      ]}
    />
  );
}
