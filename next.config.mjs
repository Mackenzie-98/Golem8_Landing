/** @type {import('next').NextConfig} */
const repo = 'agencia-latam-landing';                    // 👈 nombre del repositorio
const isGhPages = process.env.GITHUB_ACTIONS === 'true'; // se define true en CI

const nextConfig = {
  output: 'export',
  basePath: isGhPages ? `/${repo}` : '',
  assetPrefix: isGhPages ? `/${repo}/` : '',
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
  // Configuración para variables de entorno
  env: {
    NEXT_PUBLIC_BASE_PATH: isGhPages ? `/${repo}` : '',
  },
}

export default nextConfig
