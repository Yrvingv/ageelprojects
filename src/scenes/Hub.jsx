import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import metrics from '../data/metrics.json'
import site from '../data/site.json'
import Metric from '../components/Metric.jsx'

export default function Hub(){
  const prefersReduced = useReducedMotion()

  return (
    <section id="hub" className="scene relative" aria-label="Hub">
      {/* Background video with poster fallback */}
      <div className="absolute inset-0 -z-10">
        <video
          className="hidden sm:block w-full h-full object-cover opacity-30"
          src="/videos/hero-bg.webm"
          poster="/images/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          style={prefersReduced ? { display:'none' } : {}}
          onError={(e)=>{ e.currentTarget.style.display='none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1220]/40 to-[#0B0E13]"></div>
              {/* ✅ Mobile compartido para TODAS las escenas */}
        <video
          className="block sm:hidden w-full h-full object-cover opacity-35"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/posters/bg-mobile.webp"
        >
          <source src={`${import.meta.env.BASE_URL}videos/bg-mobile.webm`} type="video/webm" />
          <source src={`${import.meta.env.BASE_URL}videos/bg-mobile.mp4`} type="video/mp4" />
        </video>
      </div>

      <div className="relative min-h-screen md:pl-[12rem] lg:pl-[19rem] pt-20 h-full w-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8, ease:'easeOut' }}
          className="fluid-title font-extrabold"
        >
          Agilidad: Ingeniería y Construcción
        </motion.h1>
        <motion.p
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:0.2, duration:0.8, ease:'easeOut' }}
          className="text-lg md:text-xl text-text-soft mt-3"
        >
          Escuelas, agro, energía solar y viviendas con costos y plazos medibles.
        </motion.p>

        <div className="grid grid-cols-3 gap-6 mt-10 max-w-2xl w-full">
          {metrics.map((m, i) => (
            <Metric key={i} label={m.label} value={m.value} suffix={m.suffix} />
          ))}
        </div>

        {/* Radial menu (simplified) */}
        <div className="mt-12 flex gap-4 flex-wrap items-center justify-center">
          {[
            { id:'escuelas', label:'Escuelas' },
            { id:'agro', label:'Agro' },
            { id:'solares', label:'Solares' },
            { id:'casas', label:'Casas' },
          ].map(item => (
            <a key={item.id} href={`#${item.id}`} className="btn-primary">{item.label}</a>
          ))}
        </div>
      </div>

      <span className="visually-hidden" aria-live="polite">Sección Hub</span>
    </section>
  )
}
