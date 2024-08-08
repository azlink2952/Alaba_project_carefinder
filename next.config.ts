import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['example.com'],
  },
};

export default nextConfig;
