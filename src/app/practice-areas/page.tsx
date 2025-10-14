export const metadata = {
  title: "Practice areas | Z A R K & CO",
  description: "Audit, assurance, taxation, advisory, and risk services by Z A R K & CO.",
  icons: { icon: "/CA_India_Logo.png" },
};

import Image from "next/image";

// Function to get the appropriate GIF for each practice area
const getGifForPracticeArea = (title: string) => {
  const gifMap: { [key: string]: string } = {
    "Public Sector & Government Audits": "/audit.gif",
    "Banking & Financial Institutions": "/banking.gif", 
    "Project Financing": "/project.gif",
    "Stock & Physical Verification": "/stock.gif",
    "Private Sector Audits & Compliance": "/privatesector.gif",
    "Risk & Advisory Services": "/risk.gif"
  };
  
  return gifMap[title] || "/audit.gif";
};

const practiceAreas = [
  {
    title: "Public Sector & Government Audits",
    description: "Power & Energy, Healthcare, Infrastructure",
    link: "/practice-areas/public-sector-audits"
  },
  {
    title: "Banking & Financial Institutions",
    description: "Statutory, Concurrent, Revenue Audits",
    link: "/practice-areas/banking-financial"
  },
  {
    title: "Project Financing",
    description: "Financial structuring, funding solutions, investment analysis",
    link: "/practice-areas/project-financing"
  },
  {
    title: "Stock & Physical Verification",
    description: "Fixed Asset Tagging & Verification",
    link: "/practice-areas/stock-verification"
  },
  {
    title: "Private Sector Audits & Compliance",
    description: "Comprehensive audit services for private enterprises",
    link: "/practice-areas/private-sector"
  },
  {
    title: "Risk & Advisory Services",
    description: "Internal Controls, MIS systems",
    link: "/practice-areas/risk-advisory"
  }
];

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Our Practice Areas</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Comprehensive audit, assurance, and consulting services across diverse sectors and industries.
        </p>
      </div>

      {/* Practice Areas Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {practiceAreas.map((area, index) => (
          <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow group">
            <div className="mb-4">
              {/* Practice Area GIF */}
              <div className="mb-4 flex justify-center">
                <Image
                  src={getGifForPracticeArea(area.title)}
                  alt={area.title}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                  unoptimized
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {area.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4">{area.description}</p>
            </div>
            
            <a 
              href={area.link}
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group-hover:translate-x-1 transition-transform"
            >
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Need Custom Solutions?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Our team can provide tailored audit and consulting services to meet your specific business requirements.
        </p>
        <a 
          href="/contact"
          className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}