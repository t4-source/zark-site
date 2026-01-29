import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    qualities: [25, 50, 75, 100],
    // Keep unoptimized to avoid external image optimization setup on Netlify
    unoptimized: true,
  },
};

export default nextConfig;