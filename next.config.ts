import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'glaucodeveloper.com',
      },
    ],
  },
};

export default nextConfig;
