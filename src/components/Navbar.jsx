import React from 'react'
import site from '../data/site.json'
import PdfViewer from './PdfViewer.jsx' // visor

export default function Navbar() {
  const [openPdf, setOpenPdf] = React.useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[rgba(15,18,32,0.6)] backdrop-blur border-b border-secondary/40">
        <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#hub" className="flex items-center gap-3 focus:outline-none">
            {/* Mueve ageel-logo.svg a public/icons/ */}
            <img
              src={`${import.meta.env.BASE_URL}icons/ageel-logo.svg`}
              alt="Ageel Projects"
              className="h-12 w-auto object-contain"
            />
            <span className="hidden sm:inline font-semibold tracking-wide text-text-soft hover:text-white transition-colors">
              {site.brand}
            </span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpenPdf(true)}
              className="hidden md:inline-flex btn-primary ml-3"
              title="Abrir referencias para cálculos"
            >
              REFERENCIAS PARA CÁLCULOS
            </button>

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

      {/* Visor fuera del header: overlay fijo y accesible */}
      <PdfViewer
        open={openPdf}
        onClose={() => setOpenPdf(false)}
        src={`${import.meta.env.BASE_URL}pdfs/Manual_Practico_de_Construccion_Arquitec.pdf`}
        title="Referencias para Cálculos — Manual práctico de construcción"
      />
    </>
  )
}
