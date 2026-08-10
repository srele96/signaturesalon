import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  // Required to create /sr/index.html pages instead of /sr.html
  // for clean route navigation
  trailingSlash: true,
  // Apparently, we need this with SSG and static site serving
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
