import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Direct & Indirect Taxation",
  description:
    "Direct and indirect taxation practice area at Z A R K & Co LLP — informational page only, not an offer of professional services.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Practice area"
      title="Direct & Indirect Taxation."
      intro="Compliance, representation and advisory work spanning corporate tax, GST and transfer pricing matters."
      mode="practice"
      sections={[
        {
          heading: "Scope of work",
          items: [
            "Corporate tax — compliance and representation",
            "Goods and Services Tax — registration, returns and assessments",
            "Income tax — returns, scrutiny and appellate matters",
            "Tax advisory — on regulatory developments and notifications",
            "Transfer pricing — documentation and compliance",
          ],
        },
      ]}
      asides={[
        {
          title: "Regulatory areas",
          body: "Income Tax Act 1961, Goods and Services Tax Acts, allied rules, notifications and circulars.",
        },
        {
          title: "Engagements",
          body: "Compliance support, representation before tax authorities and advisory on transactional matters.",
        },
        {
          title: "Sectors engaged",
          body: "Public-sector undertakings, banking and financial institutions and private enterprise.",
        },
      ]}
    />
  );
}
