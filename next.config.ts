import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // GitHub Pages 배포 설정
  output: 'export',
  basePath: '/my-profile-site',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
