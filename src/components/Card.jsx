import React from 'react'

export default function Card({ title, children }){
  return (
    <div className="rounded-2xl border border-secondary/50 bg-[rgba(28,34,64,0.35)] p-5 hover:shadow-glow transition">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="text-text-soft">{children}</div>
    </div>
  )
}
