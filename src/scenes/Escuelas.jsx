import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import services from '../data/services.json'

// Base para funcionar en GitHub Pages (subcarpeta)
const BASE = import.meta.env.BASE_URL || '/'

// Videos + póster desde /public
const VIDEO_WEBM = `${BASE}videos/escuelas-bg.webm`
const VIDEO_MP4  = `${BASE}videos/escuelas-bg.mp4`
const POSTER     = `${BASE}images/escuelas/hero-poster.png`

// Galería desde /public/gallery/escuelas (01.webp … 23.webp)
const GALLERY_COUNT = 22
const GALLERY_EXT = 'webp'
const gallery = Array.from({ length: GALLERY_COUNT }, (_, i) =>
  `${BASE}gallery/escuelas/${String(i + 1).padStart(2, '0')}.${GALLERY_EXT}`
)

export default function Escuelas(){
  const svc = services.find(s => s.slug === 'escuelas-om')

  const [lightbox, setLightbox] = useState(null) // índice o null
  const openAt = (i) => setLightbox(i)
  const close  = () => setLightbox(null)
  const prev   = (e) => { e?.stopPropagation?.(); setLightbox(i => (i > 0 ? i - 1 : gallery.length - 1)) }
  const next   = (e) => { e?.stopPropagation?.(); setLightbox(i => (i < gallery.length - 1 ? i + 1 : 0)) }

  // Navegación con teclado en el lightbox
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section id="escuelas" className="scene relative scroll-mt-28 md:scroll-mt-32" aria-label="Escuelas O&M">
      {/* ===== BG video (Desktop + Mobile) ===== */}
      <div className="absolute inset-0 -z-10">
        {/* Desktop */}
        <video
          className="hidden sm:block w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={POSTER}
          onError={(e)=>{ e.currentTarget.style.display='none' }}
        >
          <source src={VIDEO_WEBM} type="video/webm" />
          <source src={VIDEO_MP4}  type="video/mp4" />
        </video>

        {/* Mobile (mismo video) */}
        <video
          className="block sm:hidden w-full h-full object-cover opacity-35"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={POSTER}
        >
          <source src={VIDEO_WEBM} type="video/webm" />
          <source src={VIDEO_MP4}  type="video/mp4" />
        </video>

        {/* Overlay/gradiente encima del video */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1220] to-transparent" />
      </div>

      {/* ===== Contenido + Galería (derecha) ===== */}
      <div className="h-full w-full px-6 sm:px-8 md:pr-16 md:pl-[12rem] lg:pl-[13rem] xl:pl-[15rem] pt-28 md:pt-32 pb-12">
        <div className="grid gap-8 items-start md:grid-cols-2">
          
          {/* Columna izquierda: texto */}
          <div className="flex flex-col">
            {/* Capa A: Promesa */}
            <motion.h2
              initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}
              className="text-3xl md:text-5xl font-extrabold max-w-2xl"
            >
              Ampliaciones y Mantenimiento Escolar
            </motion.h2>

            {/* Capa B: Qué incluye */}
            <motion.ul
              initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.15,duration:0.6}}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 text-text-soft"
            >
              {(svc?.bullets ?? []).map((b,i)=>(
                <li key={i} className="rounded-xl border border-secondary/50 p-3 bg-[rgba(28,34,64,0.35)]">{b}</li>
              ))}
            </motion.ul>

            {/* Capa C: Prueba/Confianza (placeholder) */}
            <motion.div
              initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.3,duration:0.6}}
              className="mt-6 text-neutral"
            >
              Antes / Después · Métricas de seguridad y tiempo de respuesta
            </motion.div>

            {/* Capa D: CTA */}
            <motion.div
              initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.45,duration:0.6}}
              className="mt-8"
            >
              <a href="#escuelas" className="btn-primary">Auditar mi escuela</a>
            </motion.div>
          </div>

          {/* Columna derecha: galería compacta (misma receta que Casas) */}
          {!!gallery.length && (
            <motion.div
              initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}
              className="
                w-full max-w-md ml-auto
                md:max-h-[calc(100vh-11rem)] md:overflow-hidden
                lg:max-h-[calc(100vh-11rem)]
              "
            >
              <h3 className="text-xl font-semibold text-white mb-2">Galería de obras</h3>

              <div className="grid grid-cols-2 gap-2">
                {gallery.slice(0, 6).map((src, i) => (
                  <button
                    key={src}
                    onClick={() => openAt(i)}
                    className="group relative h-[6.5rem] md:h-[7rem] lg:h-[8rem] overflow-hidden rounded-xl border border-white/15"
                    aria-label={`Abrir foto ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e)=>{ e.currentTarget.style.display='none' }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>

              {gallery.length > 6 && (
                <button
                  onClick={() => openAt(6)}
                  className="mt-2 text-xs text-white/90 underline underline-offset-4 hover:text-white"
                >
                  Ver todas
                </button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button onClick={prev} className="absolute left-0 top-0 h-full w-1/5" aria-label="Anterior" />
          <button onClick={next} className="absolute right-0 top-0 h-full w-1/5" aria-label="Siguiente" />

          <img
            src={gallery[lightbox]}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl rounded-xl"
            onError={(e)=>{ e.currentTarget.style.display='none' }}
          />

          <button
            onClick={close}
            className="absolute top-4 right-4 rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20"
          >
            Cerrar
          </button>
        </div>
      )}

      <span className="visually-hidden" aria-live="polite">Sección Escuelas</span>
    </section>
  )
}
