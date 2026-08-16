import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbo: {},
  },
  serverExternalPackages: ['@react-pdf/renderer'],
};

export default nextConfig;
