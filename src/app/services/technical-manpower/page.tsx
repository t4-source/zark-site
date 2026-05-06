export const metadata = {
  title: "Technical Manpower Services | K RAGHAV & ASSOCIATES",
  description: "Expert technical manpower services for cybersecurity, IT infrastructure, and specialized technical roles.",
};

import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Technical Manpower Services</h1>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Cybersecurity Specialists</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Security Analysts</li>
                <li>• Penetration Testers</li>
                <li>• Security Architects</li>
                <li>• Incident Response Specialists</li>
                <li>• Compliance Auditors</li>
                <li>• Security Consultants</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">IT Infrastructure Experts</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Network Engineers</li>
                <li>• Cloud Architects</li>
                <li>• System Administrators</li>
                <li>• Database Administrators</li>
                <li>• DevOps Engineers</li>
                <li>• IT Project Managers</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Specialized Roles</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Risk Assessment Specialists</li>
                <li>• Compliance Officers</li>
                <li>• Technical Writers</li>
                <li>• Training Specialists</li>
                <li>• Quality Assurance Engineers</li>
                <li>• Business Analysts</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          {/* Service GIF */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/manpower.gif"
              alt="Technical Manpower Services"
              width={250}
              height={150}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg p-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Technical Manpower</h3>
              <p className="text-slate-600 text-sm">Expert cybersecurity professionals</p>
            </div>
          </div>

          <div className="bg-slate-100 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Technical Expertise</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Certified professionals</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Industry experience</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Flexible engagement models</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Scalable solutions</span>
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
                <textarea id="message" name="message" rows={4} required className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your technical manpower requirements..."></textarea>
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
