import React from 'react'

const NAV_ITEMS = [
  { id: 'escuelas', label: 'Escuelas' },
  { id: 'agro',     label: 'Agro' },
  { id: 'solares',  label: 'Solares' },
  { id: 'casas',    label: 'Casas' },
]

// PDF público servido por Vite desde /public/pdfs
const PDF = {
  href: `${import.meta.env.BASE_URL}pdfs/Manual_Practico_de_Construccion_Arquitec.pdf`,
  label: 'Ref. cálculos',
  id: 'refs',
  title: 'Referencias para Cálculos — Manual práctico de construcción',
}

export default function MobileDock({ activeId, onJump }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[rgba(15,18,32,0.85)] backdrop-blur border-t border-secondary/40 sm:hidden safe-bottom">
      {/* 4 escenas + 1 botón PDF */}
      <div className="grid grid-cols-5">
        {NAV_ITEMS.map((it) => {
          const isActive = activeId === it.id
          return (
            <button
              key={it.id}
              onClick={() => onJump?.(it.id)}
              aria-current={isActive ? 'true' : 'false'}
              className={`py-2.5 text-[12px] leading-tight px-1 ${
                isActive ? 'text-white border-t-2 border-primary' : 'text-neutral'
              }`}
              style={{ minHeight: 44 }}
              title={it.label}
            >
              <span className="block truncate">{it.label}</span>
            </button>
          )
        })}

        {/* Botón PDF (anchor para permitir abrir/descargar en mobile) */}
        <a
          key={PDF.id}
          href={PDF.href}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 text-[12px] leading-tight px-1 text-neutral text-center hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          style={{ minHeight: 44 }}
          title={PDF.title}
          aria-label={PDF.title}
        >
          <span className="block truncate">📘 {PDF.label}</span>
        </a>
      </div>
    </nav>
  )
}
