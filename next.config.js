/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
  reactStrictMode: true,
  
  // 1. Grade F Fix: Compresses payloads via GZIP 
  compress: true, 
  
  // Disable powered-by header for minor security & payload reduction
  poweredByHeader: false,

  // 2. Image Optimization Engine
  images: {
    formats: ['image/avif', 'image/webp'], // Prioritizes highly-compressed AVIF format first
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 3. Caching Domain level for Next/Image proxy
    remotePatterns: [
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'player.vimeo.com' },
    ],
  },

  // 4. Grade D Fix: Cache-Control & Expires Headers targeting Static Assets (cookie-free behavior setup)
  async headers() {
    return [
      {
        source: '/assets/:all*(svg|jpg|png|webp|avif|ico|mp4|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // 5. HTTP > HTTPS Domain Chain Fix (If not strictly managed via Vercel Dashboard Domain UI)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ghloctane.com',
          },
        ],
        destination: 'https://www.ghloctane.com/:path*',
        permanent: true,
      },
    ];
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  turbopack: {},

  webpack: (config, { isServer }) => {
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

  experimental: {
    optimizePackageImports: ['swiper', 'react-icons', 'three'],
    staleTimes: {
      dynamic: 0,
      static: 30, // Route cache settings
    },
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default withBundleAnalyzer(nextConfig);
