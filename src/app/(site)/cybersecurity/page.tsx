export const metadata = {
  title: "Cybersecurity Services | K RAGHAV & ASSOCIATES",
  description:
    "Cyber Security Consulting, Security Audit & Compliance, VAPT, Managed SOC, Cloud Security, Managed Security Services (vCISO), Trainings, Data Governance.",
  icons: { icon: "/CA_India_Logo.png" },
};

const services = [
  {
    title: "Cyber Security Consulting",
    description: "Strategic security planning and implementation",
    link: "/services/cyber-consulting"
  },
  {
    title: "Security Audit & Compliance",
    description: "Comprehensive security audits and compliance assessments",
    link: "/services/security-audit-compliance"
  },
  {
    title: "Vulnerability Assessment & Penetration Testing",
    description: "VAPT services to identify and remediate security vulnerabilities",
    link: "/services/vapt"
  },
  {
    title: "Security Operations",
    description: "24/7 monitoring, incident response, threat management",
    link: "/services/security-operations"
  },
  {
    title: "Technical Manpower",
    description: "Expert cybersecurity professionals and specialists",
    link: "/services/technical-manpower"
  },
  {
    title: "Managed SOC",
    description: "24/7 Security Operations Center services",
    link: "/services/managed-soc"
  },
  {
    title: "Cloud Security",
    description: "Comprehensive cloud security solutions",
    link: "/services/cloud-security"
  },
  {
    title: "Managed Security Services (vCISO)",
    description: "Virtual Chief Information Security Officer services",
    link: "/services/vciso"
  },
  {
    title: "Security Trainings",
    description: "Comprehensive cybersecurity training programs",
    link: "/services/trainings"
  },
  {
    title: "Data Governance",
    description: "Data protection and governance frameworks",
    link: "/services/data-governance"
  }
];

import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Cybersecurity Services</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Comprehensive cybersecurity solutions to protect, detect, and respond to threats while maintaining compliance.
        </p>
        
        {/* Hero Image */}
        <div className="mb-8">
          <Image
            src="/cybersecurity-audit.jpg"
            alt="Cybersecurity Services"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-xl shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          // Map services to appropriate GIFs
          const getGifForService = (title: string) => {
            if (title.includes("Cyber Security Consulting")) return "/consulting.gif";
            if (title.includes("Security Audit")) return "/audit.gif";
            if (title.includes("Vulnerability Assessment")) return "/vapt.gif";
            if (title.includes("Security Operations")) return "/operations.gif";
            if (title.includes("Technical Manpower")) return "/manpower.gif";
            if (title.includes("Managed SOC")) return "/monitoring.gif";
            if (title.includes("Cloud Security")) return "/cloudsecurity.gif";
            if (title.includes("vCISO")) return "/professional.gif";
            if (title.includes("Security Trainings")) return "/training.gif";
            if (title.includes("Data Governance")) return "/goverance.gif";
            return "/consulting.gif"; // default fallback
          };

          return (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow group">
              <div className="mb-4">
                {/* Service GIF */}
                <div className="mb-4 flex justify-center">
                  <Image
                    src={getGifForService(service.title)}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                    unoptimized
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
              </div>
              
              <a 
                href={service.link}
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group-hover:translate-x-1 transition-transform"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-slate-100 rounded-xl p-8 text-center text-slate-800">
        <h2 className="text-2xl font-bold mb-4">Secure Your Organization</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Our cybersecurity experts can help you build a robust security posture and maintain compliance with industry standards.
        </p>
        <a 
          href="/contact"
          className="inline-flex items-center justify-center bg-slate-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
        >
          Get Security Assessment
        </a>
      </div>
    </div>
  );
}


