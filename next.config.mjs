/** @type {import('next').NextConfig} */
const repo = 'agencia-latam-landing'       // ⚠️  usa el nombre EXACTO del repositorio
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },

  // ➜ rutas correctas en producción (GitHub Pages)
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',

  // ignora eslint / TS en CI si lo necesitas
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

export default nextConfig
