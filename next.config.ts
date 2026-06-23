import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Move allowedDevOrigins here (at the root level):
  allowedDevOrigins: ['192.168.1.3', 'localhost:3000'],
  
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;