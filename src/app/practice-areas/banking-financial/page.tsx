export const metadata = {
  title: "Banking & Financial Institutions Audits | K RAGHAV & ASSOCIATES",
  description: "Comprehensive audit services for banking and financial institutions including statutory, concurrent, and revenue audits.",
};

import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Banking & Financial Institutions Audits</h1>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Statutory Branch Audits</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• State Bank of India</li>
                <li>• Bank of Baroda</li>
                <li>• Central Bank of India</li>
                <li>• Punjab National Bank</li>
                <li>• UCO Bank, Indian Bank</li>
                <li>• Avadh Gramin Bank</li>
                <li>• Aryavart Gramin Bank</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Concurrent Audits</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Dena Bank, Punjab & Sind Bank</li>
                <li>• Allahabad Bank, IDBI Bank</li>
                <li>• Baroda UP Gramin Bank</li>
                <li>• Baroda Rajasthan Kshetriya Gramin Bank</li>
                <li>• Aryavart Bank</li>
                <li>• Progressive Urban Cooperative Bank</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Revenue & Inspection Audits</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Bank of India</li>
                <li>• Allahabad Bank</li>
                <li>• Central Bank of India</li>
                <li>• Punjab National Bank</li>
                <li>• Punjab & Sind Bank</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          {/* Service GIF */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/banking.gif"
              alt="Banking & Financial Institutions Audits"
              width={250}
              height={150}
              className="rounded-xl shadow-lg object-cover"
              unoptimized
              loading="lazy"
            />
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Banking Audits</h3>
              <p className="text-slate-600 text-sm">Comprehensive financial institution audit services</p>
            </div>
          </div>

          <div className="bg-slate-100 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Banking Expertise</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Extensive experience with major banks</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Specialized banking audit team</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Deep understanding of banking regulations</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Comprehensive audit coverage</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Request Information</h3>
            <form action="/api/contact" method="post" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-1">Bank/Financial Institution</label>
                <input type="text" id="organization" name="organization" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your banking audit requirements..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
