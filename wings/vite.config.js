import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'WINGS',
        short_name: 'WINGS',
        description: 'Calisthenics skill tracking and workout logging',
        theme_color: '#1b1b1b',
        background_color: '#1b1b1b',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'wingslogo192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'wingslogo512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'wingslogo512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})