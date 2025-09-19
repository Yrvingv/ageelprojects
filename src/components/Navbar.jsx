import React from 'react'
import site from '../data/site.json'


export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[rgba(15,18,32,0.6)] backdrop-blur border-b border-secondary/40">
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#hub" className="flex items-center gap-3 focus:outline-none">
          <img src={`${import.meta.env.BASE_URL}ageel-logo.svg`} alt="Ageel Projects" className="h-12 w-auto object-contain" />
          <span className="hidden sm:inline font-semibold tracking-wide text-text-soft hover:text-white transition-colors">
            {site.brand}
          </span>
        </a>

        <div className="flex items-center gap-3">
          <a
            className="btn-primary"
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacto por WhatsApp"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  )
}
