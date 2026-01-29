"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeSuccessIdx, setActiveSuccessIdx] = useState(0);
  const [activePracticeIdx, setActivePracticeIdx] = useState(0);
  const [activeImpactIdx, setActiveImpactIdx] = useState(0);
  const testimonials = [
    {
      name: "Rajesh Kumar",
      quote: "K RAGHAV & ASSOCIATES has been instrumental in streamlining our financial processes. Their expertise in audit and compliance has given us complete peace of mind."
    },
    {
      name: "Priya Sharma", 
      quote: "The cybersecurity consulting provided by K RAGHAV & ASSOCIATES helped us secure our digital infrastructure. Their team's knowledge and professionalism are unmatched."
    },
    {
      name: "Amit Patel",
      quote: "Their tax planning strategies have saved us significant amounts while ensuring full compliance. K RAGHAV & ASSOCIATES' expertise is truly valuable."
    },
    {
      name: "Dr. Sunita Verma",
      quote: "The comprehensive audit services provided by K RAGHAV & ASSOCIATES have helped us maintain the highest standards of financial transparency and governance."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const ticker = setInterval(() => {
      setActiveSuccessIdx((prev) => (prev + 1) % 4);
    }, 1700);
    return () => clearInterval(ticker);
  }, []);

  useEffect(() => {
    const ticker = setInterval(() => {
      setActivePracticeIdx((prev) => (prev + 1) % 3);
    }, 1900);
    return () => clearInterval(ticker);
  }, []);

  useEffect(() => {
    const ticker = setInterval(() => {
      setActiveImpactIdx((prev) => (prev + 1) % 3);
    }, 1800);
    return () => clearInterval(ticker);
  }, []);

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
            alt="K RAGHAV & ASSOCIATES Background"
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
                K RAGHAV & ASSOCIATES
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
            {[
              { title: "Why Us", iconBg: "bg-blue-100", iconColor: "text-blue-600", path: "M13 10V3L4 14h7v7l9-11h-7z", glow: "bg-blue-500/35", desc: "We offer support services that can free up management to concentrate on important aspects of their business." },
              { title: "Proven Experience", iconBg: "bg-green-100", iconColor: "text-green-600", path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", glow: "bg-green-500/35", desc: "We have proven experience of managing end to end finance and accounts processes from initial invoicing till payment." },
              { title: "Business Intelligence", iconBg: "bg-purple-100", iconColor: "text-purple-600", path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", glow: "bg-purple-500/35", desc: "We turn numbers into actionable business intelligence - building a better picture offering better finance." },
              { title: "Future Planning", iconBg: "bg-orange-100", iconColor: "text-orange-600", path: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", glow: "bg-orange-500/35", desc: "We explore ideas and help you plan for a more profitable future wherever you are in your business lifecycle." }
            ].map((item, idx) => {
              const isActive = activeSuccessIdx === idx;
              return (
                <motion.div
                  key={item.title}
                  className="text-center"
                  animate={isActive ? { scale: 1.03 } : { scale: 1 }}
                  transition={{ scale: { type: "spring", stiffness: 260, damping: 22 } }}
                >
                  <div className={`relative w-16 h-16 ${item.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <motion.div
                      aria-hidden
                      className={`absolute -inset-4 ${item.glow} rounded-full blur-2xl`}
                      animate={isActive ? { opacity: [0.7, 0.25, 0.7], scale: [1, 1.12, 1] } : { opacity: 0.12, scale: 1 }}
                      transition={isActive ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
                    />
                    <motion.svg
                      className={`w-8 h-8 ${item.iconColor}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={isActive ? { y: [0, -3, 0] } : { y: 0 }}
                      transition={isActive ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.path} />
                    </motion.svg>
              </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
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
            {[
              { title: "Audit & Assurance", desc: "Comprehensive audit services for public and private sector organizations.", href: "/services/audit-assurance", path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Tax & Compliance", desc: "Expert tax planning and compliance services for businesses.", href: "/services/tax-compliance", path: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" },
              { title: "Cybersecurity Services", desc: "Advanced cybersecurity solutions including VAPT, SOC, and cloud security.", href: "/cybersecurity", path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }
            ].map((item, idx) => {
              const isActive = activePracticeIdx === idx;
              return (
                <motion.div
                  key={item.title}
                  className="group bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow"
                  animate={isActive ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ scale: { type: "spring", stiffness: 260, damping: 22 } }}
                >
                  <div className="relative w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <motion.div
                      aria-hidden
                      className="absolute -inset-3 bg-blue-500/35 rounded-full blur-2xl"
                      animate={isActive ? { opacity: [0.7, 0.25, 0.7], scale: [1, 1.12, 1] } : { opacity: 0.12, scale: 1 }}
                      transition={isActive ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
                    />
                    <motion.svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={isActive ? { y: [0, -3, 0] } : { y: 0 }}
                      transition={isActive ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.path} />
                    </motion.svg>
              </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-4">{item.desc}</p>
                  <a href={item.href} className="text-blue-600 font-medium hover:text-blue-700">Learn more →</a>
                </motion.div>
              );
            })}
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
              {[
                { title: "Public Sector", iconBg: "bg-blue-100", iconColor: "text-blue-600", path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", glow: "bg-blue-500/35", desc: "Government organizations and PSUs" },
                { title: "Banking & Finance", iconBg: "bg-green-100", iconColor: "text-green-600", path: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", glow: "bg-green-500/35", desc: "Financial institutions and banks" },
                { title: "Private Sector", iconBg: "bg-purple-100", iconColor: "text-purple-600", path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", glow: "bg-purple-500/35", desc: "Corporates and private enterprises" }
              ].map((item, idx) => {
                const isActive = activeImpactIdx === idx;
                return (
                  <motion.div key={item.title} className="text-center" animate={isActive ? { scale: 1.03 } : { scale: 1 }} transition={{ scale: { type: "spring", stiffness: 260, damping: 22 } }}>
                    <div className={`relative w-20 h-20 ${item.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <motion.div aria-hidden className={`absolute -inset-5 ${item.glow} rounded-full blur-2xl`} animate={isActive ? { opacity: [0.7, 0.25, 0.7], scale: [1, 1.1, 1] } : { opacity: 0.12, scale: 1 }} transition={isActive ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }} />
                      <motion.svg className={`w-10 h-10 ${item.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" animate={isActive ? { y: [0, -3, 0] } : { y: 0 }} transition={isActive ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.path} />
                      </motion.svg>
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </motion.div>
                );
              })}
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
            {[
              { label: "Years Experience", value: 30, suffix: "+" },
              { label: "Partners", value: 10, suffix: "" },
              { label: "Team Members", value: 87, suffix: "+" },
              { label: "Office Locations", value: 4, suffix: "" }
            ].map((item) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ translateY: -4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
              <div className="text-4xl font-bold text-blue-600">
                  <CountUp end={item.value} duration={1.0} suffix={item.suffix} enableScrollSpy scrollSpyOnce />
              </div>
                <div className="text-slate-600">{item.label}</div>
              </motion.div>
            ))}
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
                  title="K RAGHAV & ASSOCIATES Head Office Location"
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
                  title="K RAGHAV & ASSOCIATES Jamshedpur Office Location"
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
                  title="K RAGHAV & ASSOCIATES Varanasi Office Location"
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
                  title="K RAGHAV & ASSOCIATES Ghaziabad Office Location"
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
