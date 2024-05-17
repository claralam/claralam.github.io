/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.lamclara.com'
      }
    ]
  }
}

module.exports = nextConfig
