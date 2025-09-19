import React from 'react'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import CTAWhatsApp from './components/CTAWhatsApp.jsx'
import MobileDock from './components/MobileDock.jsx'
import Hub from './scenes/Hub.jsx'
import Escuelas from './scenes/Escuelas.jsx'
import Agro from './scenes/Agro.jsx'
import Solares from './scenes/Solares.jsx'
import Casas from './scenes/Casas.jsx'

export default function App(){
  const scrollRef = React.useRef(null)
  const [active, setActive] = React.useState('hub')

  // ScrollSpy using IntersectionObserver
  React.useEffect(()=>{
    const sections = ['hub','escuelas','agro','solares','casas'].map(id => document.getElementById(id))
    const obs = new IntersectionObserver((entries)=>{
      const visible = entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { root: scrollRef.current, threshold: 0.6 })
    sections.forEach(sec => sec && obs.observe(sec))
    return ()=>obs.disconnect()
  }, [])

  // Wheel: translate vertical wheel to horizontal scroll
  React.useEffect(()=>{
    const el = scrollRef.current
    if(!el) return
    const onWheel = (e)=>{
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY
        e.preventDefault()
      }
    }
    el.addEventListener('wheel', onWheel, { passive:false })
    return ()=> el.removeEventListener('wheel', onWheel)
  }, [])

  // Keyboard navigation
  React.useEffect(()=>{
    const ids = ['hub','escuelas','agro','solares','casas']
    const onKey = (e)=>{
      const idx = ids.indexOf(active)
      if (e.key === 'ArrowRight') {
        const next = ids[Math.min(ids.length-1, idx+1)]
        document.getElementById(next)?.scrollIntoView({ behavior: 'smooth', inline:'start' })
      } else if (e.key === 'ArrowLeft') {
        const prev = ids[Math.max(0, idx-1)]
        document.getElementById(prev)?.scrollIntoView({ behavior: 'smooth', inline:'start' })
      } else if (e.key === 'Home') {
        document.getElementById('hub')?.scrollIntoView({ behavior: 'smooth', inline:'start' })
      } else if (e.key === 'End') {
        document.getElementById('casas')?.scrollIntoView({ behavior: 'smooth', inline:'start' })
      }
    }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  }, [active])

  const jumpTo = (id)=>{
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth', inline:'start' })
  }

  return (
    <>
      <Navbar />
      <Sidebar activeId={active} onJump={jumpTo} />
      <CTAWhatsApp />
      <MobileDock activeId={active} onJump={jumpTo} />
      <main ref={scrollRef} className="horizontal-scroll">
        <Hub />
        <Escuelas />
        <Agro />
        <Solares />
        <Casas />
      </main>
    </>
  )
}
