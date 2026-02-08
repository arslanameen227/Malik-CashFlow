import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  distDir: '.next',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
