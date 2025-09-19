import React from 'react'

const items = [
  { id: 'escuelas', label: 'Escuelas' },
  { id: 'agro', label: 'Agro' },
  { id: 'solares', label: 'Solares' },
  { id: 'casas', label: 'Casas' },
]

export default function MobileDock({ activeId, onJump }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[rgba(15,18,32,0.85)] backdrop-blur border-t border-secondary/40 sm:hidden safe-bottom">
      <div className="grid grid-cols-4">
        {items.map((it) => {
          const isActive = activeId === it.id
          return (
            <button
              key={it.id}
              onClick={() => onJump(it.id)}
              aria-current={isActive ? 'true' : 'false'}
              className={`py-3 text-sm ${
                isActive ? 'text-white border-t-2 border-primary' : 'text-neutral'
              }`}
              style={{ minHeight: 44 }}
            >
              {it.label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
