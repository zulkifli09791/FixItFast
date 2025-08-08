import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable TypeScript strict mode
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Configure webpack to handle TypeScript source maps properly
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Ensure source maps are properly configured in development
      config.devtool = 'eval-source-map'
    }
    
    // Handle TypeScript files
    config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx', '.json']
    
    return config
  },
  
  // Configure headers to prevent 404s for source files
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
  
  // Ensure proper handling of API routes
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ]
  },
}

export default nextConfig
