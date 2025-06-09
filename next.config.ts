import type { NextConfig } from "next";
import config from "./lib/config";

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
       {
        protocol: 'https',             // or 'http' if your API uses http
        hostname: new URL(config.mockWatchesApi).hostname,
        port: '',                      
        pathname: '/**',               // or narrower e.g. '/uploads/**'
      },
    ],
  },
};

export default nextConfig;
