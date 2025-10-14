import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    qualities: [25, 50, 75, 100],
    unoptimized: true,
  },
};

export default nextConfig;