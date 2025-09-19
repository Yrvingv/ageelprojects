import React from 'react'
import site from '../data/site.json'

const items = [
  { id: 'escuelas', label: 'Escuelas' },
  { id: 'agro', label: 'Agro' },
  { id: 'solares', label: 'Solares' },
  { id: 'casas', label: 'Casas' },
]

export default function Sidebar({ activeId, onJump }) {
  return (
    <aside
      className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex w-44 flex-col"
      aria-label="Navegación de escenas"
    >
      {/* Lista de escenas */}
      <nav className="flex flex-col gap-3">
        {items.map((it) => {
          const isActive = activeId === it.id
          return (
            <button
              key={it.id}
              aria-current={isActive ? 'true' : 'false'}
              onClick={() => onJump?.(it.id)}
              className={`w-full px-3 py-2 rounded-xl border transition backdrop-blur
                ${isActive
                  ? 'bg-white/10 text-white border-white/20 shadow-[0_0_0_1.5px_rgba(109,106,254,0.35)]'
                  : 'bg-[rgba(15,18,32,0.6)] border-white/10 text-neutral hover:bg-white/10 hover:text-white'
                }`}
            >
              {it.label}
            </button>
          )
        })}
      </nav>

      {/* Separador + CTA al fondo */}
      <div className="mt-4 pt-4 border-t border-white/10" />

      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full justify-center"
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
      >
        Agendar Reunión
      </a>
    </aside>
  )
}
