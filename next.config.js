/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://stacodatasolutions.com'
  }
}

module.exports = nextConfig
