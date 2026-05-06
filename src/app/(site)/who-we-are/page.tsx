import MembersStats from "./members-stats";
import Image from "next/image";

export const metadata = {
  title: "Who we are | K RAGHAV & ASSOCIATES",
  description:
    "About K RAGHAV & ASSOCIATES: a Chartered Accountancy firm with 30+ years of experience in audit, assurance, consulting, and cybersecurity.",
  icons: { icon: "/CA_India_Logo.png" },
};

const partners = [
  { name: "VINAY KRISHNA", credential: "FCA", membershipNo: "070102", image: null },
  { name: "MOHAMED ZOHAIR HUSAIN", credential: "FCA", membershipNo: "071126", image: null },
  { name: "KHANDELWAL PREM SHANKAR", credential: "FCA", membershipNo: "073702", image: null },
  { name: "KANAN KUSUM TIWARI", credential: "FCA", membershipNo: "081473", image: null },
  { name: "RAGHAV KRISHNA", credential: "FCA", membershipNo: "416687", image: "/raghav.jpeg" },
  { name: "ASHISH KUMAR AGARWAL", credential: "FCA", membershipNo: "418864", image: null },
  { name: "RASHI GARG", credential: "FCA", membershipNo: "422471", image: "/rashi.jpeg" },
  { name: "RISHI ARORA", credential: "FCA", membershipNo: "423272", image: "/rishi.png" },
  { name: "AJAI KUSHWAHA", credential: "ACA", membershipNo: "433357", image: null },
  { name: "AMIT KUMAR GUPTA", credential: "FCA", membershipNo: "543161", image: null },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Who we are</h1>
      
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">About K RAGHAV & ASSOCIATES</h2>
          <div className="text-slate-700 space-y-4">
            <p>
              With over 30 years of professional expertise, our firm has delivered comprehensive audit, assurance, and consulting services across Public Sector Undertakings, Banking & Financial Institutions, Risk & Assurance domains, and Private Enterprises. Our strong presence in diverse industries enables us to provide holistic solutions with a blend of technical knowledge and practical insights.
            </p>
            <h3 className="text-slate-900 font-medium mt-6">Key Areas of Experience</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Public Sector & Government Organizations</li>
              <li>Banking & Financial Institutions</li>
              <li>Information System Audits</li>
              <li>Stock & Physical Verification Audits</li>
              <li>Private Sector Engagements</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Our Team</h2>
          <MembersStats />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-8">Our Partners</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {partners.map((p) => (
            <div key={p.membershipNo} className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                {p.image ? (
                  <div className="mb-4">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={120}
                      height={120}
                      className="mx-auto rounded-full object-cover border-4 border-slate-100"
                    />
                  </div>
                ) : (
                  <div className="mb-4">
                    <div className="w-30 h-30 mx-auto rounded-full bg-slate-100 flex items-center justify-center">
                      <svg className="w-16 h-16 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
                <h3 className="font-semibold text-slate-900 text-center mb-2">{p.name}</h3>
                <p className="text-sm text-slate-600 text-center mb-1">{p.credential} • M.No. {p.membershipNo}</p>
                <p className="text-sm text-slate-700 text-center">Expertise: Audit, Assurance, Consulting</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Organizational Memberships */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Organizational Memberships</h2>
        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/cii.png"
                  alt="Confederation of Indian Industry"
                  width={200}
                  height={100}
                  className="mx-auto object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Confederation of Indian Industry</h3>
              <p className="text-slate-600 text-sm">Member of CII - India&apos;s premier business association</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/young-indians.png"
                  alt="Young Indians"
                  width={200}
                  height={100}
                  className="mx-auto object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Young Indians</h3>
              <p className="text-slate-600 text-sm">Member of Young Indians - CII&apos;s youth wing</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-slate-600 text-sm">
              Our organizational memberships reflect our commitment to professional excellence and industry best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}