export const metadata = {
  title: "Cyber Security Consulting | K RAGHAV & ASSOCIATES",
  description: "Comprehensive cybersecurity consulting services to help organizations protect, detect, and respond to cyber threats.",
};

import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Cyber Security Consulting</h1>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-slate-900">Strategic Security Planning</h2>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li>• Cybersecurity strategy development</li>
                <li>• Risk assessment and management</li>
                <li>• Security architecture design</li>
                <li>• Compliance roadmap planning</li>
                <li>• Incident response planning</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-slate-900">Security Governance</h2>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li>• Security policy development</li>
                <li>• Governance framework design</li>
                <li>• Security awareness programs</li>
                <li>• Executive security briefings</li>
                <li>• Board-level security reporting</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-slate-900">Technology Security</h2>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li>• Cloud security architecture</li>
                <li>• Network security design</li>
                <li>• Application security consulting</li>
                <li>• Identity and access management</li>
                <li>• Data protection strategies</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          {/* Service GIF */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/consulting.gif"
              alt="Cyber Security Consulting"
              width={250}
              height={150}
              className="rounded-xl shadow-lg object-cover"
              unoptimized
              loading="lazy"
            />
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Cybersecurity Consulting</h3>
              <p className="text-slate-600 text-sm">Strategic security planning and implementation</p>
            </div>
          </div>

          <div className="bg-slate-100 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Approach</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Expert cybersecurity professionals</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Industry-specific expertise</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Proven methodologies</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Comprehensive security solutions</span>
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
                <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-1">Organization</label>
                <input type="text" id="organization" name="organization" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your cybersecurity consulting requirements..."></textarea>
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
