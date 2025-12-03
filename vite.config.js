import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// Configuration Vite pour Workora - ULTRA OPTIMISÉE
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Base path conditionnel :
  // - En développement (dev server) : '/' (Vite sur localhost:3000)
  // - En production (build) : 
  //   - Si VITE_BASE_PATH est défini via variable d'environnement, utiliser cette valeur (pour OVH)
  //   - Sinon '/ServiceOps/public/' (Apache/XAMPP local)
  const envBasePath = process.env.VITE_BASE_PATH;
  const base = command === 'build' 
    ? (envBasePath !== undefined ? envBasePath : '/ServiceOps/public/')
    : '/';
  
  return {
  base,
  
  plugins: [
    react(),
    // PWA Plugin
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["workora_logo.svg", "robots.txt"],
      manifest: {
        name: "Workora - Digitalisation interventions terrain",
        short_name: "Workora",
        description: "Solution complète de digitalisation pour techniciens. Bons de travail numériques, signatures électroniques, envoi automatique.",
        theme_color: "#2563eb",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/workora_logo.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable"
          },
          {
            src: "/workora_logo.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable"
          }
        ],
        shortcuts: [
          {
            name: "Contact",
            short_name: "Contact",
            description: "Nous contacter",
            url: "/contact",
            icons: [{ src: "/workora_logo.svg", sizes: "any", type: "image/svg+xml" }]
          }
        ]
      },
      workbox: {
        // Stratégie de cache
        globPatterns: ["**/*.{js,css,html,png,svg,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 année
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 année
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 jours
              }
            }
          }
        ],
        // Nettoyage du cache lors de mise à jour
        cleanupOutdatedCaches: true,
        // Ignorer les fichiers inutiles
        globIgnores: ['**/*.map', '**/manifest.webmanifest']
      },
      // Dev options
      devOptions: {
        enabled: false, // Désactivé en dev
        type: "module"
      }
    })
  ],

  // Configuration du serveur de développement
  server: {
    port: 3000,
    host: true,
    open: true,
    strictPort: false,
    cors: true,
    // Proxy pour rediriger les requêtes PHP vers Apache
    proxy: {
      '/send-email.php': {
        target: 'http://localhost/ServiceOps/public',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path, // Garder le chemin tel quel
      }
    }
  },

  // Options de build - ULTRA OPTIMISÉES
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    
    // Minification avancée avec Terser
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"],
        dead_code: true, // Supprime le code mort
        passes: 2, // Double passage pour optimisation maximale
      },
      format: {
        comments: false, // Supprime tous les commentaires
      },
    },
    
    // Code-splitting intelligent
    rollupOptions: {
      output: {
        // Chunks intelligents pour cache optimal
        manualChunks: (id) => {
          // Vendors séparés par catégorie
          if (id.includes('node_modules')) {
            // Core React
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-core';
            }
            // React Router
            if (id.includes('react-router')) {
              return 'react-router';
            }
            // Animations (Framer Motion)
            if (id.includes('framer-motion')) {
              return 'animations';
            }
            // Icônes Lucide
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            // Autres vendors
            return 'vendor';
          }
        },
        
        // Optimisation des noms de fichiers
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          const ext = name.split('.').pop();
          if (ext === 'css') return 'assets/css/[name]-[hash].[ext]';
          if (ext === 'png' || ext === 'jpg' || ext === 'jpeg' || ext === 'svg' || ext === 'gif') {
            return 'assets/images/[name]-[hash].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        },
      },
    },
    
    chunkSizeWarningLimit: 1000,
    
    // Optimisations supplémentaires
    cssCodeSplit: true, // Code-splitting pour CSS
    reportCompressedSize: false, // Gain de performance build
  },

  // Optimisations développement
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "lucide-react",
      "framer-motion",
    ],
    // Exclure ce qui n'a pas besoin de pre-bundling
    exclude: [],
  },

  // Configuration pour le preview
  preview: {
    port: 3001,
    host: true,
    open: true,
  },
  };
});
