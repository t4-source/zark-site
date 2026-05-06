export const metadata = {
  title: "Tax & Compliance Services | K RAGHAV & ASSOCIATES",
  description: "Expert tax planning and compliance services for businesses and individuals.",
  icons: { icon: "/CA_India_Logo.png" },
};

import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Tax & Compliance Services</h1>
      
      {/* Hero Image */}
      <div className="mb-12">
        <Image
          src="/tax-calculator.jpg"
          alt="Tax & Compliance Services"
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-xl shadow-lg"
        />
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Practice Areas</h2>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Corporate Tax Planning & Compliance</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>GST Registration & Returns Filing</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Income Tax Returns & Assessments</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Tax Advisory & Consultancy</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Regulatory Compliance & Filings</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Why Choose Us</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">Expert Knowledge</h3>
              <p className="text-slate-700">Deep understanding of Indian tax laws and regulations.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">Timely Compliance</h3>
              <p className="text-slate-700">Ensuring all deadlines are met with accuracy and precision.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">Cost Effective</h3>
              <p className="text-slate-700">Optimizing tax strategies to minimize your tax burden legally.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 transition-colors">
          Get in Touch
        </a>
      </div>
    </div>
  );
}

