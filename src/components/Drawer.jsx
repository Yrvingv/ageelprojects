import React from 'react'
import downloads from '../data/downloads.json'

export default function Drawer({ open, onClose }){
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* Panel */}
      <div className={`absolute right-0 top-0 h-full w-full sm:w-[520px] bg-[#0F1220] border-l border-secondary/40 p-6 overflow-y-auto transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Descargas — Planos / Catálogos (PDF)</h2>
          <button onClick={onClose} className="text-neutral hover:text-white" aria-label="Cerrar">✕</button>
        </div>
        <div className="grid gap-4">
          {downloads.map((item, idx) => {
            const disponible = !!item.file
            return (
              <div key={idx} className="rounded-xl border border-secondary/60 p-4 bg-[rgba(28,34,64,0.4)]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-neutral text-sm mt-1">{item.description}</div>
                    <div className="text-neutral text-xs mt-2">PDF · {item.size} · Actualizado: {item.updatedAt}</div>
                  </div>
                  <span className="px-2 py-1 text-xs rounded bg-primary/20 border border-primary/50">PDF</span>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <a
                    className={`px-3 py-2 rounded ${disponible ? 'btn-primary' : 'bg-secondary text-neutral cursor-not-allowed'}`}
                    href={disponible ? item.file : undefined}
                    target={disponible ? "_blank" : undefined}
                    rel={disponible ? "noopener noreferrer" : undefined}
                    aria-disabled={!disponible}
                  >Ver</a>
                  <a
                    className={`px-3 py-2 rounded ${disponible ? 'btn-primary' : 'bg-secondary text-neutral cursor-not-allowed'}`}
                    href={disponible ? item.file : undefined}
                    download={disponible ? "" : undefined}
                    aria-disabled={!disponible}
                  >{disponible ? 'Descargar' : 'Próximamente'}</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
