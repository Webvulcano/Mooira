'use client'

import { useState, useRef } from 'react'
import { useReveal } from './useReveal'
import { cmsAttr } from '@/lib/cms-attr'

// Kézzel lapozható vélemények (Eszter kérése, 2026-11): nyilak, swipe, pöttyök.
// Nincs automatikus váltás — a látogató a saját tempójában olvas.
export default function Testimonials({ title, slides }) {
  const [current, setCurrent] = useState(0)
  const touchX = useRef(null)
  const ref = useRef(null)
  useReveal(ref)

  const count = slides.length
  const goTo = (idx) => setCurrent((idx + count) % count)
  const step = (dir) => setCurrent((c) => (c + dir + count) % count)

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1)
  }

  return (
    <section id="velemenyek" ref={ref}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="reveal">
          <h2 className="header-style" {...cmsAttr('home.testimonials.title')}>{title}</h2>
        </div>
        <div className="testi-wrap reveal">
          <div className="testi-carousel" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} aria-live="polite">
            <div className="testi-track" style={{ transform: `translateX(-${current * 100}%)` }}>
              {slides.map((slide, i) => (
                <div className="testi-slide" key={i} aria-hidden={i !== current}>
                  <span className="about-name testi-mark">&quot;</span>
                  <blockquote className="p-style">{slide.quote}</blockquote>
                  <div className="testi-divider"></div>
                  <cite className="about-label">{slide.cite}</cite>
                </div>
              ))}
            </div>
          </div>
          {count > 1 && (
            <>
              <button type="button" className="testi-arrow testi-arrow--prev" onClick={() => step(-1)} aria-label="Előző vélemény">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 5 8 12 15 19" /></svg>
              </button>
              <button type="button" className="testi-arrow testi-arrow--next" onClick={() => step(1)} aria-label="Következő vélemény">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 5 16 12 9 19" /></svg>
              </button>
            </>
          )}
        </div>
        <div className="testi-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`testi-dot${current === i ? ' active' : ''}`}
              aria-label={`Vélemény ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
