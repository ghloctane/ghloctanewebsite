/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'player.vimeo.com',
      },
    ],
  },

  // Turbopack configuration (Next.js 16 default)
  turbopack: {},
  
  // Webpack configuration for Three.js and other libraries (fallback)
  webpack: (config, { isServer }) => {
    // Handle Three.js for client-side only
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }

    return config;
  },

  // Output configuration
  // Removed 'standalone' output - Vercel handles Next.js builds automatically
  // If deploying elsewhere (not Vercel), you can uncomment the line below:
  // output: 'standalone',
  
  // Experimental features
  experimental: {
    optimizePackageImports: ['swiper', 'react-icons'],
  },
};

export default nextConfig;
