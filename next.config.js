/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://stacodatasolutions.com'
  }
}

module.exports = nextConfig
