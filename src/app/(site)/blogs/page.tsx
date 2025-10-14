export const metadata = {
  title: "Blog | Z A R K & CO",
  description: "Insights and updates from Z A R K & CO.",
  icons: { icon: "/CA_India_Logo.png" },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Our Blog</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Stay updated with the latest insights on audit, compliance, cybersecurity, and industry trends.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Article</h2>
        <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Featured</span>
                <span className="text-slate-600 text-sm">December 2024</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                The Future of Cybersecurity in Financial Services
              </h3>
              <p className="text-slate-700 mb-6">
                Explore how emerging technologies and regulatory changes are shaping the cybersecurity landscape in the financial sector. Learn about best practices and compliance requirements.
              </p>
              <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="bg-slate-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-slate-500">Featured Image</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Categories */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Audit & Compliance</h3>
            <p className="text-slate-600 text-sm">Latest updates on audit standards and compliance requirements</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Cybersecurity</h3>
            <p className="text-slate-600 text-sm">Insights on cybersecurity trends and best practices</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Industry Insights</h3>
            <p className="text-slate-600 text-sm">Analysis of industry trends and market developments</p>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Recent Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-slate-200 h-48 flex items-center justify-center">
              <span className="text-slate-500">Blog Image</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Audit</span>
                <span className="text-slate-500 text-sm">Nov 2024</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Understanding New Audit Standards</h3>
              <p className="text-slate-600 text-sm mb-4">A comprehensive guide to the latest audit standards and their implications for businesses.</p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700">Read More →</a>
            </div>
          </article>

          <article className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-slate-200 h-48 flex items-center justify-center">
              <span className="text-slate-500">Blog Image</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Cybersecurity</span>
                <span className="text-slate-500 text-sm">Oct 2024</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Cybersecurity Best Practices for SMEs</h3>
              <p className="text-slate-600 text-sm mb-4">Essential cybersecurity measures that small and medium enterprises should implement.</p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700">Read More →</a>
            </div>
          </article>

          <article className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-slate-200 h-48 flex items-center justify-center">
              <span className="text-slate-500">Blog Image</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Industry</span>
                <span className="text-slate-500 text-sm">Sep 2024</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Digital Transformation in Finance</h3>
              <p className="text-slate-600 text-sm mb-4">How digital transformation is reshaping the financial services industry.</p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700">Read More →</a>
            </div>
          </article>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-slate-100 rounded-xl p-6 sm:p-8 text-center text-slate-800">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6 text-slate-600">Subscribe to our newsletter for the latest insights and updates.</p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-2 rounded-md text-slate-900 placeholder-slate-500 bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50 min-w-0"
          />
          <button className="bg-slate-700 text-white px-6 py-2 rounded-md font-medium hover:bg-slate-800 whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}