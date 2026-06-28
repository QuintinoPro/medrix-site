import type { NextConfig } from 'next'

// Served from the apex custom domain (agenciamedrix.com.br) at the root,
// so no basePath. The github.io/medrix-site URL auto-redirects to the domain.
const basePath = ''

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
