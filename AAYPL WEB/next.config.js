/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["your-image-domain.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;