import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: '0.0.0.0', // 👈 This is crucial
    port: 5173,       // Optional, but sets it explicitly
  },
  plugins: [
    react(),
    tailwindcss({
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {
          colors: {
            primary: '#6366F1',
            secondary: '#1E293B',
            accent: '#34D399',
            neutral: '#0F172A',
            light: '#F8FAFC',
            midgray: '#94A3B8',
          },
        },
      },
    }),
  ],
})