import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Production optimizations
    minify: 'esbuild', // Use esbuild (faster, already included)
    // Note: esbuild doesn't support drop_console, but we can use a plugin if needed
    rollupOptions: {
      output: {
        // Aggressive code splitting - animation libraries NOT in main bundle
        manualChunks: (id) => {
          // React core in separate chunk
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom')) {
            return 'react-vendor';
          }
          // Swiper in separate chunk
          if (id.includes('node_modules/swiper')) {
            return 'swiper-vendor';
          }
          // Animation libraries in separate chunk (lazy loaded)
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/gsap')) {
            return 'animation-vendor';
          }
          // Other large dependencies
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Source maps for production (optional, can disable for smaller builds)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'swiper'],
  },
})
