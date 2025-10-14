export const metadata = {
  title: "Vulnerability Assessment & Penetration Testing | Z A R K & CO",
  description: "Comprehensive VAPT services to identify and remediate security vulnerabilities in your systems and applications.",
  icons: { icon: "/CA_India_Logo.png" },
};

import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Vulnerability Assessment & Penetration Testing</h1>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Web Application Testing</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• OWASP Top 10 vulnerability assessment</li>
                <li>• SQL injection testing</li>
                <li>• Cross-site scripting (XSS) testing</li>
                <li>• Authentication bypass testing</li>
                <li>• Business logic testing</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Network Security Testing</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Network vulnerability scanning</li>
                <li>• Firewall configuration testing</li>
                <li>• Wireless network security assessment</li>
                <li>• Network segmentation testing</li>
                <li>• Intrusion detection system testing</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Infrastructure Testing</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Server security assessment</li>
                <li>• Database security testing</li>
                <li>• Cloud infrastructure testing</li>
                <li>• Mobile application testing</li>
                <li>• IoT device security assessment</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          {/* Service GIF */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/vapt.gif"
              alt="VAPT Services"
              width={250}
              height={150}
              className="rounded-xl shadow-lg object-cover"
              unoptimized
              loading="lazy"
            />
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-lg p-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">VAPT Services</h3>
              <p className="text-slate-600 text-sm">Vulnerability Assessment & Penetration Testing</p>
            </div>
          </div>

          <div className="bg-slate-100 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Our VAPT Methodology</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Comprehensive vulnerability scanning</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Manual penetration testing</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Detailed remediation guidance</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Follow-up verification testing</span>
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
                <textarea id="message" name="message" rows={4} required className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your VAPT requirements..."></textarea>
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
