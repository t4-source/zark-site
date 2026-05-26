export const BRAND = {
  name: "Z A R K & Co LLP",
  shortName: "ZARK & Co",
  tagline: "Chartered Accountants",
  description:
    "Z A R K & Co LLP is a Chartered Accountancy firm offering audit, assurance, taxation, consulting and cybersecurity services.",
  email: process.env.NEXT_PUBLIC_BRAND_EMAIL || "contact@zarkandco.in",
  phone: process.env.NEXT_PUBLIC_BRAND_PHONE || "+91-9936104447",
  address: {
    line1: "105, Chintels House, 16 Station Road",
    city: "Lucknow",
    pin: "226001",
    state: "UP",
    country: "IN",
  },
  yearOfEstablishment: "04-04-1997",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/",
  logo: "/zark.png",
};
