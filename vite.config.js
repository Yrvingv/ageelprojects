import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Esta config garantiza que Vite exponga en la red y use la carpeta actual como root
export default defineConfig({
  plugins: [react()],
  root: '.',               // asegura que use este directorio (donde está index.html)
  server: {
    host: true,            // equivale a 0.0.0.0 (LAN)
    port: 5173,
    strictPort: true,
    open: false,
    base: '/ageelprojects/',
  },
})
