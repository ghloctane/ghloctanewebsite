/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,

  // TypeScript: build fails on type errors (fix types to keep build green)
  typescript: {
    ignoreBuildErrors: false,
  },

  // Compression & Performance (gzip via compress; cache via headers below)
  compress: true,
  poweredByHeader: false,

  // Image optimization: WebP/AVIF, long cache (quality set per Image via quality={85})
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
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

  // Headers for caching
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.(webp|jpg|jpeg|png|svg|ico|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
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

    // Three.js: Next 16 + experimental.optimizePackageImports handles three;
    // no babel-loader rule (avoids missing babel deps and build failures).

    return config;
  },

  // Output configuration
  // Removed 'standalone' output - Vercel handles Next.js builds automatically
  // If deploying elsewhere (not Vercel), you can uncomment the line below:
  // output: 'standalone',

  // Experimental features
  experimental: {
    optimizePackageImports: ['swiper', 'react-icons', 'three'],
    // Disable client-side router cache so pages always show fresh content
    staleTimes: {
      dynamic: 0,
      static: 30,
    },
  },

  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default withBundleAnalyzer(nextConfig);
