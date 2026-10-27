'use client'

import { useState, useEffect, useRef } from 'react'
import { useReveal } from './useReveal'
import { cmsAttr } from '@/lib/cms-attr'

export default function Testimonials({ title, slides }) {
  const [current, setCurrent] = useState(0)
  const pausedRef = useRef(false)
  const ref = useRef(null)
  useReveal(ref)

  const goTo = (idx) => {
    setCurrent((idx + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent(c => (c + 1) % slides.length)
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section id="velemenyek" ref={ref}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="reveal">
          {/*<p className="about-label">Vélemények</p>*/}
          <h2 className="header-style" {...cmsAttr('home.testimonials.title')}>{title}</h2>

          {/*<h2 className="header-style">Az ő szavaikkal.</h2>} */}
        </div>
        <div
          className="testi-carousel reveal"
          onMouseEnter={() => { pausedRef.current = true }}
          onMouseLeave={() => { pausedRef.current = false }}
        >
          <div className="testi-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {slides.map((slide, i) => (
              <div className="testi-slide" key={i}>
                <span className="about-name testi-mark">&quot;</span>
                <blockquote className="p-style">{slide.quote}</blockquote>
                <div className="testi-divider"></div>
                <cite className="about-label">{slide.cite}</cite>
              </div>
            ))}
          </div>
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
