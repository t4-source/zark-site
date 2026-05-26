import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Public Sector & Government Audits",
  description:
    "Public-sector and government audit practice — power, energy, healthcare and infrastructure undertakings. Informational page only.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Practice area"
      title="Public Sector & Government Audits."
      intro="Statutory, special-purpose and inspection audit engagements across public-sector undertakings and government departments — with particular depth in power, healthcare and infrastructure."
      mode="practice"
      sections={[
        {
          heading: "Power & energy",
          items: [
            "UPPCL, UPPTCL, UPRNN",
            "UP Rajya Vidyut Utpadan Nigam Ltd.",
            "Vidyut Vitran Nigam Ltd. (all regions)",
            "Power generation and distribution audits",
          ],
        },
        {
          heading: "Healthcare & supply chains",
          items: [
            "U.P. Medical Supply Corporation Ltd.",
            "National Health Mission (NHM)",
            "Healthcare infrastructure audits",
            "Medical supply chain verification",
          ],
        },
        {
          heading: "Infrastructure & development",
          items: [
            "GNIDA, LIDA",
            "U.P. Development Systems Corporation Ltd.",
            "U.P. Awas Evam Vikas Parishad",
            "Infrastructure project audits",
          ],
        },
      ]}
      asides={[
        {
          title: "Engagement depth",
          body: "Over three decades of continuous engagement with public-sector undertakings across multiple states.",
        },
        {
          title: "Regulatory frame",
          body: "C&AG of India guidelines, applicable accounting standards and sectoral regulatory requirements.",
        },
      ]}
    />
  );
}
