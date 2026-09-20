import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  async redirects() {
    return [
      {
        source: '/tamweel-mobile',
        destination: 'http://localhost:3002',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
