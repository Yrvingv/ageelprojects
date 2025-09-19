# Ageel Projects Construcciones

Micrositio escénico **horizontal** (no pila vertical) construido con **React + Vite + Tailwind + Framer Motion**. Todos los **assets locales** viven en `src/assets/**` (imágenes, videos, PDFs).

## Requisitos
- Node **>= 18**

## Instalación
```bash
npm install
npm run dev
```

## Edición de contenidos (no técnicos)
- Cambiar **texto/WhatsApp/métricas** en `src/data/site.json`.
- Editar **servicios** (bullets, rutas y videos de fondo) en `src/data/services.json`.
- Ajustar **métricas** en `src/data/metrics.json`.
- Gestionar **descargas** en `src/data/downloads.json` (colocar archivos en `src/assets/pdfs/`). Si `file` está vacío, se mostrará **“Próximamente”**.
- Colores/tokens en `tailwind.config.js` y `src/styles/tailwind.css`.

## Estructura
```
src/
  assets/{images,videos,icons,pdfs}/
  components/{Navbar,Sidebar,CTAWhatsApp,Card,Metric,Drawer}
  scenes/{Hub,Escuelas,Agro,Solares,Casas}
  data/{site.json,services.json,metrics.json,downloads.json,cases.json}
  styles/{tailwind.css}
  App.jsx, main.jsx, index.html
```

## Accesibilidad y navegación
- Teclado **←/→**, **Home/End** para moverse entre escenas.
- `prefers-reduced-motion` desactiva animaciones intensas.
- **scrollSpy** activo en la barra lateral.

## Notas de videos de fondo
- Archivos recomendados: `*.webm` (≤ 1.5MB) con `poster` en `src/assets/images/hero-poster.jpg`.
- Si el video falla o hay `reduced-motion`, se usa el `poster`.

## Licencia
Uso interno para Ageel Projects Construcciones.
