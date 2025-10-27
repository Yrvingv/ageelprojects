import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function PdfViewer({ open, onClose, src, title = 'Referencias para Cálculos' }) {
  // Cerrar con ESC
  React.useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose?.()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Evitar cerrar al hacer click dentro del contenedor
  const stop = (e) => e.stopPropagation()

  const pdfSrc = `${src}#view=FitH&toolbar=1&navpanes=0&scrollbar=1`

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Dialog */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
            onClick={onClose}
            role="dialog" aria-modal="true" aria-label={title}
          >
            <div
              className="w-[min(1200px,95vw)] h-[85vh] rounded-2xl overflow-hidden bg-background ring-1 ring-secondary/40 shadow-2xl"
              onClick={stop}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-3 px-4 py-3 bg-surface/80 border-b border-secondary/40">
                <h3 className="text-text font-semibold truncate">{title}</h3>
                <div className="flex items-center gap-2">
                  <a
                    href={src}
                    target="_blank" rel="noopener noreferrer"
                    className="hidden sm:inline-flex btn-primary"
                    title="Abrir en una pestaña nueva"
                  >
                    Abrir en pestaña
                  </a>
                  <a
                    href={src}
                    download
                    className="btn-primary"
                    title="Descargar PDF"
                  >
                    Descargar
                  </a>
                  <button
                    onClick={onClose}
                    className="ml-1 rounded-lg px-3 py-2 bg-secondary/50 text-text hover:bg-secondary/60"
                    aria-label="Cerrar visor"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Contenido (iframe) */}
              <div className="w-full h-[calc(85vh-56px)] bg-background">
                <iframe
                  title={title}
                  src={pdfSrc}
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
