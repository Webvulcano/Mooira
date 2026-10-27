'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useReveal } from './useReveal'

const items = [
  { img: '/kollekcio/1.jpg' },
  { img: '/kollekcio/2.jpg' },
  { img: '/kollekcio/5.jpg' },
  { img: '/kollekcio/4.jpg' },
]

export default function Collection() {
  const ref = useRef(null)
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const dragState = useRef({ active: false, startX: 0, startScroll: 0, moved: false })
  useReveal(ref)

  const updateArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  useEffect(() => {
    updateArrows()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [updateArrows])

  const stepSize = () => {
    const el = trackRef.current
    if (!el) return 0
    const first = el.querySelector('.collection-item')
    if (!first) return el.clientWidth
    const style = getComputedStyle(el)
    const gap = parseFloat(style.columnGap || style.gap || '0') || 0
    return first.getBoundingClientRect().width + gap
  }

  const scrollByStep = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * stepSize(), behavior: 'smooth' })
  }

  const onMouseDown = (e) => {
    const el = trackRef.current
    if (!el) return
    dragState.current = { active: true, startX: e.pageX - el.offsetLeft, startScroll: el.scrollLeft, moved: false }
  }
  const onMouseLeave = () => {
    dragState.current.active = false
  }
  const onMouseUp = () => {
    dragState.current.active = false
  }
  const onMouseMove = (e) => {
    const s = dragState.current
    if (!s.active) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const dx = x - s.startX
    if (Math.abs(dx) > 4) s.moved = true
    trackRef.current.scrollLeft = s.startScroll - dx * 1.5
  }
  const onClickCapture = (e) => {
    if (dragState.current.moved) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <section className="section" id="kollekcio" ref={ref}>
      <div className="container">
        <div className="reveal">
          <div>
            <h2 className="header-style">Jelenlegi kollekció</h2>
          </div>
          {/*<a href="#kapcsolat" className="link-arrow">Teljes kollekcióhoz →</a>*/}
        </div>
      </div>

      <div className="collection-carousel reveal">
        <button
          type="button"
          className="collection-arrow collection-arrow-prev"
          onClick={() => scrollByStep(-1)}
          aria-label="Előző"
          disabled={!canPrev}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 6 9 12 15 18" /></svg>
        </button>

        <div
          className="collection-track"
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onClickCapture={onClickCapture}
        >
          {items.map(item => (
            <div className="collection-item" key={item.img}>
              <div className="collection-item-img">
                <img src={item.img} alt="Esküvői ruha" draggable={false} />
              </div>
            </div>
          ))}
          <div className="collection-item">
            <div className="collection-item-img">
              <Link href="/kollekcio" className="collection-cta" draggable={false}>
                Tovább a kollekcióhoz
                <span>Összes ruha →</span>
              </Link>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="collection-arrow collection-arrow-next"
          onClick={() => scrollByStep(1)}
          aria-label="Következő"
          disabled={!canNext}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
        </button>
      </div>
    </section>
  )
}
