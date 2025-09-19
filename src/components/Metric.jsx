import React from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

export default function Metric({ label, value, suffix }){
  const prefersReduced = useReducedMotion()
  const ref = React.useRef(null)
  const inView = useInView(ref, { margin: '-10% 0px -10% 0px', once: true })
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!inView) return
    if (prefersReduced) { setCount(value); return }
    let start = 0
    const duration = 2000
    const t0 = performance.now()
    const step = (t) => {
      const p = Math.min(1, (t - t0) / duration)
      setCount(Math.floor(start + (value - start) * p))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value, prefersReduced])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-extrabold">{count}{suffix}</div>
      <div className="text-neutral mt-1">{label}</div>
    </div>
  )
}
