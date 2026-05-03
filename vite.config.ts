import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/ - Triggering new build for Pages fix
export default defineConfig({
  plugins: [react()],
  base: '/skillverse-/',
})
