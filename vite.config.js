import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration Vite pour ServiceOps
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Configuration du serveur de développement
  server: {
    port: 3000,
    host: true,
    open: true,
    strictPort: false,
    cors: true
  },
  
  // Options de build
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  
  // Optimisations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react']
  },
  
  // Configuration pour le preview
  preview: {
    port: 3001,
    host: true,
    open: true
  }
});