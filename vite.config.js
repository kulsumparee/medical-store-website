import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows Vite to bind to the local network IP
    port: 3000, // or any port you prefer

  }
})

// vite.config.js

 