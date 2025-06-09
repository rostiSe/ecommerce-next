import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // wenn deine Bilder von localhost oder externer Quelle kommen
    domains: ['localhost', 'cdn.dummyjson.com'],
    // oder: gezielte Patterns
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
