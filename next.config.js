/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://stacodatasolutions.com'
  }
}

module.exports = nextConfig
