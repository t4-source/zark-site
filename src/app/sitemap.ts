import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.example.com/", lastModified: new Date() },
    { url: "https://www.example.com/who-we-are", lastModified: new Date() },
    { url: "https://www.example.com/practice-areas", lastModified: new Date() },
    { url: "https://www.example.com/cybersecurity", lastModified: new Date() },
    { url: "https://www.example.com/blogs", lastModified: new Date() },
    { url: "https://www.example.com/careers", lastModified: new Date() },
    { url: "https://www.example.com/contact", lastModified: new Date() },
    { url: "https://www.example.com/offices", lastModified: new Date() },
    { url: "https://www.example.com/members", lastModified: new Date() },
  ];
}


