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
        // test
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'api.dicebear.com',
          pathname: '/**',
        },
      ],
    },
};

export default nextConfig;
