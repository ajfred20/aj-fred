import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  typescript: {
    // !! WARN !!
    // Ignoring TypeScript errors during build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
