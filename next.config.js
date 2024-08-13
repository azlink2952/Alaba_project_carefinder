/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self';",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Link',
            value: '</manifest.json>; rel="manifest"',
          },
        ],
      },
    ];
  },
  
  webpack: (config, { isServer }) => {
    return config;
  },
};

module.exports = nextConfig;
