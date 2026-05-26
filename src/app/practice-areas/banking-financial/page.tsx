import SubpageTemplate from "@/components/SubpageTemplate";

export const metadata = {
  title: "Banking & Financial Institutions",
  description:
    "Banking and financial institution audit practice area — statutory branch, concurrent, revenue and inspection audit engagements. Informational page only.",
  icons: { icon: "/zark.png" },
};

export default function Page() {
  return (
    <SubpageTemplate
      eyebrow="Practice area"
      title="Banking & Financial Institutions."
      intro="Audit engagements across public-sector banks, cooperative banks and financial institutions — covering statutory branch, concurrent, revenue and inspection mandates."
      mode="practice"
      sections={[
        {
          heading: "Statutory branch audits",
          items: [
            "State Bank of India",
            "Bank of Baroda",
            "Central Bank of India",
            "Punjab National Bank",
            "UCO Bank, Indian Bank",
            "Avadh Gramin Bank",
            "Aryavart Gramin Bank",
          ],
        },
        {
          heading: "Concurrent audits",
          items: [
            "Dena Bank, Punjab & Sind Bank",
            "Allahabad Bank, IDBI Bank",
            "Baroda UP Gramin Bank",
            "Baroda Rajasthan Kshetriya Gramin Bank",
            "Aryavart Bank",
            "Progressive Urban Cooperative Bank",
          ],
        },
        {
          heading: "Revenue & inspection audits",
          items: [
            "Bank of India",
            "Allahabad Bank",
            "Central Bank of India",
            "Punjab National Bank",
            "Punjab & Sind Bank",
          ],
        },
      ]}
      asides={[
        {
          title: "Engagement history",
          body: "The firm has continuously engaged with public-sector banks across India since incorporation in 1997.",
        },
        {
          title: "Regulatory frame",
          body: "RBI guidelines on bank audits, statutory bank audit panels and applicable accounting standards.",
        },
      ]}
    />
  );
}
