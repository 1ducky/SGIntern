import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        pathname: '/**', // opsional, gunakan untuk menentukan path yang diizinkan
      },
    ],
  },
};

export default nextConfig;
