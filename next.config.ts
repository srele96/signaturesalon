import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Apparently, we need this with SSG and static site serving
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
