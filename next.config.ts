import type { NextConfig } from 'next'

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
const basePath = isGitHubActions ? '/medrix-site' : ''

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
