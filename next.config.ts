import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // cacheComponents:true,
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.clerk.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'ufnqref5sv.ufs.sh',
          pathname: '/**',
        },
      ],
    },
};

export default nextConfig;
