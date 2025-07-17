/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Allow Cloudflare tunnel connections
  allowedDevOrigins: [
    'vanilla-premises-brunette-catering.trycloudflare.com',
    // Add other cloudflare domains as needed
    /.*\.trycloudflare\.com$/,
  ],
}

export default nextConfig
