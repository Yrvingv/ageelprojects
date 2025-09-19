// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ageelprojects/', // 👈 imprescindible para GitHub Pages del repo Yrvingv/ageelprojects
})
