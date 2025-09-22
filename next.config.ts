import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable static optimization for PDF.js compatibility
  trailingSlash: false,
  compress: true,
};

export default nextConfig;
