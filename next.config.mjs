/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Allow Cloudflare tunnel connections (disabled for static export)
  // allowedDevOrigins: [
  //   'vanilla-premises-brunette-catering.trycloudflare.com',
  //   // Add other cloudflare domains as needed
  //   /.*\.trycloudflare\.com$/,
  // ],
}

export default nextConfig
