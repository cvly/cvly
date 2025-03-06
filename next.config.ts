/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['cvly.me'],
  },
  // Removing previous output and distDir configurations as we'll use Cloudflare's approach
}

module.exports = nextConfig
