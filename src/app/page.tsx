"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Rajesh Kumar",
      quote: "Z A R K & CO has been instrumental in streamlining our financial processes. Their expertise in audit and compliance has given us complete peace of mind."
    },
    {
      name: "Priya Sharma", 
      quote: "The cybersecurity consulting provided by Z A R K & CO helped us secure our digital infrastructure. Their team's knowledge and professionalism are unmatched."
    },
    {
      name: "Amit Patel",
      quote: "Their tax planning strategies have saved us significant amounts while ensuring full compliance. Z A R K & CO's expertise is truly valuable."
    },
    {
      name: "Dr. Sunita Verma",
      quote: "The comprehensive audit services provided by Z A R K & CO have helped us maintain the highest standards of financial transparency and governance."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const showTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/audit-inspector-documents.jpg"
            alt="Z A R K & CO Background"
            fill
            className="object-cover scale-100"
            priority
            quality={75}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Z A R K & CO
              </h1>
              <p className="mt-6 text-xl text-blue-100">
                Chartered Accountants with three decades of expertise in audit, assurance, consulting, and cybersecurity across public and private sectors.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/practice-areas" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-blue-600 font-medium hover:bg-blue-50 transition-colors">
                  Practice Areas
                </a>
                <a href="/contact" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-white font-medium hover:bg-white/10 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Your Success, Our Commitment Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Your Success, Our Commitment</h2>
            <p className="text-xl text-slate-600 mb-8">Expert Accounting That Works for you</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Why Us</h3>
              <p className="text-slate-600">We offer support services that can free up management to concentrate on important aspects of their business.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Proven Experience</h3>
              <p className="text-slate-600">We have proven experience of managing end to end finance and accounts processes from initial invoicing till payment.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Business Intelligence</h3>
              <p className="text-slate-600">We turn numbers into actionable business intelligence - building a better picture offering better finance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Future Planning</h3>
              <p className="text-slate-600">We explore ideas and help you plan for a more profitable future wherever you are in your business lifecycle.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Practice Areas Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Practice Areas</h2>
            <p className="mt-4 text-lg text-slate-600">Comprehensive solutions for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Audit & Assurance</h3>
              <p className="text-slate-600 mb-4">Comprehensive audit services for public and private sector organizations.</p>
              <a href="/services/audit-assurance" className="text-blue-600 font-medium hover:text-blue-700">Learn more →</a>
            </div>

            <div className="group bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Tax & Compliance</h3>
              <p className="text-slate-600 mb-4">Expert tax planning and compliance services for businesses.</p>
              <a href="/services/tax-compliance" className="text-blue-600 font-medium hover:text-blue-700">Learn more →</a>
            </div>

            <div className="group bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Cybersecurity Services</h3>
              <p className="text-slate-600 mb-4">Advanced cybersecurity solutions including VAPT, SOC, and cloud security.</p>
              <a href="/cybersecurity" className="text-blue-600 font-medium hover:text-blue-700">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Services Showcase */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Financial Excellence</h2>
            <p className="mt-4 text-lg text-slate-600">Trusted by organizations across diverse sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Financial Analysis Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <Image
                  src="/person-finance-graphs.jpg"
                  alt="Financial Reporting and Analysis"
                  width={200}
                  height={120}
                  className="w-full h-24 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Financial Reporting</h3>
              <p className="text-slate-600 text-sm">Comprehensive financial statements and analysis</p>
            </div>

            {/* Audit Services Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <Image
                  src="/company-audit.jpg"
                  alt="Audit Services"
                  width={200}
                  height={120}
                  className="w-full h-24 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Audit Services</h3>
              <p className="text-slate-600 text-sm">Thorough audit and assurance services</p>
            </div>

            {/* Tax Services Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <Image
                  src="/tax-planning-calculator.jpeg"
                  alt="Tax Planning and Compliance"
                  width={200}
                  height={120}
                  className="w-full h-24 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Tax Planning</h3>
              <p className="text-slate-600 text-sm">Strategic tax planning and compliance</p>
            </div>

            {/* Consulting Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <Image
                  src="/finance-graphs-office.jpg"
                  alt="Business Consulting"
                  width={200}
                  height={120}
                  className="w-full h-24 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Business Consulting</h3>
              <p className="text-slate-600 text-sm">Strategic business advisory services</p>
            </div>
          </div>

          {/* Financial Charts Visualization */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">Our Impact Across Sectors</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Public Sector</h4>
                <p className="text-slate-600 text-sm">Government organizations and PSUs</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Banking & Finance</h4>
                <p className="text-slate-600 text-sm">Financial institutions and banks</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Private Sector</h4>
                <p className="text-slate-600 text-sm">Corporates and private enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">30+ Years of Excellence</h2>
            <p className="mt-4 text-lg text-slate-600">Trusted by organizations across India</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">30+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">10</div>
              <div className="text-slate-600">Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">87+</div>
              <div className="text-slate-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">4</div>
              <div className="text-slate-600">Office Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Offices</h2>
            <p className="mt-4 text-lg text-slate-600">Visit us at any of our locations across India</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Head Office - Lucknow</h3>
              <p className="text-slate-700 mb-6">105, Chintels House, 16 Station Road, Lucknow - 226001</p>
              <div className="h-64 rounded-lg overflow-hidden border border-slate-200">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.google.com/maps?q=Chintels+House+16+Station+Road+Lucknow+226001&output=embed" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Z A R K & CO Head Office Location"
                />
              </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Jamshedpur, Jharkhand</h3>
              <p className="text-slate-700 mb-6">16/3, New Housing Colony, Adityapur, Jamshedpur, Jharkhand - 831013</p>
              <div className="h-64 rounded-lg overflow-hidden border border-slate-200">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.google.com/maps?q=Adityapur+Jamshedpur+Jharkhand+831013&output=embed" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Z A R K & CO Jamshedpur Office Location"
                />
              </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Varanasi, Uttar Pradesh</h3>
              <p className="text-slate-700 mb-6">3/1380, Rampur Ward, Ramnagar, Varanasi - 221008</p>
              <div className="h-64 rounded-lg overflow-hidden border border-slate-200">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.google.com/maps?q=Ramnagar+Varanasi+221008&output=embed" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Z A R K & CO Varanasi Office Location"
                />
              </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Ghaziabad, Uttar Pradesh</h3>
              <p className="text-slate-700 mb-6">A 801, Exotica East Square, Ahinsa Khand 2, Indirapuram, Ghaziabad - 201014</p>
              <div className="h-64 rounded-lg overflow-hidden border border-slate-200">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.google.com/maps?q=Ahinsa+Khand+2+Indirapuram+Ghaziabad+201014&output=embed" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Z A R K & CO Ghaziabad Office Location"
                />
              </div>
            </div>
          </div>
    </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-slate-600">Trusted by organizations across diverse sectors</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 text-center">
                      <div className="mb-6">
                        <svg className="w-12 h-12 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                      </div>
                      <p className="text-lg text-slate-700 mb-6 italic">{testimonial.quote}</p>
                      <div className="text-sm">
                        <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                  onClick={() => showTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
