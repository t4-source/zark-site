import ContactDialog from "@/components/ContactDialog";
import JobApplicationDialog from "@/components/JobApplicationDialog";

export const metadata = {
  title: "Careers | K RAGHAV & ASSOCIATES",
  description: "Join K RAGHAV & ASSOCIATES across audit, consulting, and cybersecurity.",
  icons: { icon: "/CA_India_Logo.png" },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Join Our Team</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Build your career with K RAGHAV & ASSOCIATES. We offer opportunities in audit, consulting, cybersecurity, and more.
        </p>
      </div>

      {/* Why Join Us */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Professional Growth</h3>
          <p className="text-slate-700">Continuous learning and development opportunities</p>
        </div>

        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Diverse Opportunities</h3>
          <p className="text-slate-700">Work across multiple industries and sectors</p>
        </div>

        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Team Environment</h3>
          <p className="text-slate-700">Collaborative and supportive work culture</p>
        </div>
      </div>

      {/* Open Positions */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Open Positions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Chartered Accountant</h3>
            <p className="text-slate-600 mb-4">Full-time • Lucknow, UP</p>
            <p className="text-slate-700 mb-4">Join our audit team and work on diverse client engagements across public and private sectors.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Audit</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Tax</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Compliance</span>
            </div>
            <JobApplicationDialog 
              position="Chartered Accountant" 
              location="Lucknow, UP" 
              type="Full-time" 
            />
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Cybersecurity Analyst</h3>
            <p className="text-slate-600 mb-4">Full-time • Remote</p>
            <p className="text-slate-700 mb-4">Work on security assessments, VAPT, and cybersecurity consulting projects.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">VAPT</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">SOC</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Compliance</span>
            </div>
            <JobApplicationDialog 
              position="Cybersecurity Analyst" 
              location="Remote" 
              type="Full-time" 
            />
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Article Assistant</h3>
            <p className="text-slate-600 mb-4">Training • Multiple Locations</p>
            <p className="text-slate-700 mb-4">Start your CA journey with hands-on experience in audit, tax, and consulting.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Training</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Mentorship</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Growth</span>
            </div>
            <JobApplicationDialog 
              position="Article Assistant" 
              location="Multiple Locations" 
              type="Training" 
            />
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Business Analyst</h3>
            <p className="text-slate-600 mb-4">Full-time • Lucknow, UP</p>
            <p className="text-slate-700 mb-4">Analyze business processes and help clients improve their operations and compliance.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Analysis</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Consulting</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Strategy</span>
            </div>
            <JobApplicationDialog 
              position="Business Analyst" 
              location="Lucknow, UP" 
              type="Full-time" 
            />
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-slate-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Work With Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
            <div className="text-slate-600">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">87+</div>
            <div className="text-slate-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-slate-600">Office Locations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-slate-600">Client Projects</div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Join Us?</h2>
        <p className="text-slate-600 mb-6">Send us your resume and let&apos;s discuss opportunities.</p>
        <ContactDialog />
      </div>
    </div>
  );
}