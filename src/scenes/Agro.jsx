import React from 'react'
import { motion } from 'framer-motion'
import services from '../data/services.json'
import Drawer from '../components/Drawer.jsx'

// Base para funcionar en GitHub Pages (subcarpeta)
const BASE = import.meta.env.BASE_URL || '/'

// Videos + póster desde /public
const VIDEO_WEBM = `${BASE}videos/agro-bg.webm`
const VIDEO_MP4  = `${BASE}videos/agro-bg.mp4`
const POSTER     = `${BASE}images/agro/hero-poster.png`

export default function Agro(){
  const svc = services.find(s=>s.slug==='agro-infra')
  const [open, setOpen] = React.useState(false)

  React.useEffect(()=>{
    // Deep-link: #agro?dl=1
    const hash = window.location.hash || ''
    if (hash.startsWith('#agro') && hash.includes('dl=1')) {
      setOpen(true)
    }
  }, [])

  return (
    <section id="agro" className="scene relative" aria-label="Infraestructura Agropecuaria">
      <div className="absolute inset-0 -z-10">
        {/* Desktop: video desde /public/videos/agro-bg.* */}
        <video
          className="hidden sm:block w-full h-full object-cover opacity-30"
          autoPlay muted loop playsInline preload="none"
          poster={POSTER}
          onError={(e)=>{ e.currentTarget.style.display='none' }}
        >
          <source src={VIDEO_WEBM} type="video/webm" />
          <source src={VIDEO_MP4}  type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E13] to-transparent"></div>

        {/* ✅ Mobile compartido para TODAS las escenas */}
        <video
          className="block sm:hidden w-full h-full object-cover opacity-35"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={`${BASE}posters/bg-mobile.webp`}
        >
          <source src={`${BASE}videos/bg-mobile.webm`} type="video/webm" />
          <source src={`${BASE}videos/bg-mobile.mp4`}  type="video/mp4" />
        </video>
      </div>

      {/* 👇 padding-left en desktop para no chocar con la Sidebar */}
      <div className="h-full w-full flex flex-col items-start justify-center px-6 sm:px-8 md:pr-16 md:pl-[12rem] lg:pl-[13rem] xl:pl-[15rem]">
        <motion.h2
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}
          className="text-3xl md:text-5xl font-extrabold max-w-2xl"
        >
          Infraestructura Agropecuaria
        </motion.h2>

        <motion.p
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}}
          className="text-text-soft mt-4 max-w-2xl"
        >
          Proyectos listos para construir: planos, metrado y presupuesto.
        </motion.p>

        <motion.ul
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2,duration:0.6}}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 text-text-soft"
        >
          {(svc?.bullets ?? []).map((b,i)=>(
            <li key={i} className="rounded-xl border border-secondary/50 p-3 bg-[rgba(28,34,64,0.35)]">{b}</li>
          ))}
        </motion.ul>

        <motion.div
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.35,duration:0.6}}
          className="mt-8 flex gap-3"
        >
          <button onClick={()=>setOpen(true)} className="btn-primary">Ver planos listos para construir</button>
          <a href="#agro" className="btn-primary">Solicitar catálogo</a>
        </motion.div>
      </div>

      <Drawer open={open} onClose={()=>setOpen(false)} />
      <span className="visualmente-oculto visually-hidden" aria-live="polite">Sección Agro</span>
    </section>
  )
}
