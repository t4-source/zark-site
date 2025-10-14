export const metadata = {
  title: "Audit & Assurance Services | Z A R K & CO",
  description: "Comprehensive audit and assurance services for public and private sector organizations.",
  icons: { icon: "/CA_India_Logo.png" },
};

import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Audit & Assurance Services</h1>
      
      {/* Hero Image */}
      <div className="mb-12">
        <Image
          src="/audit-inspector-documents.jpg"
          alt="Audit & Assurance Services"
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
              <span>Statutory Audits for Public Sector Undertakings</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Banking & Financial Institution Audits</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Information System Audits</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Stock & Physical Verification</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Internal Audit & Risk Assessment</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Why Choose Us</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">30+ Years Experience</h3>
              <p className="text-slate-700">Three decades of expertise across diverse industries and sectors.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">Comprehensive Coverage</h3>
              <p className="text-slate-700">From PSUs to private enterprises, we cover all sectors.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">Expert Team</h3>
              <p className="text-slate-700">87+ qualified professionals including CAs, ICWAs, and Company Secretaries.</p>
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

