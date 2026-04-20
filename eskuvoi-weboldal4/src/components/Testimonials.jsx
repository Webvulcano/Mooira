import { useState, useEffect, useRef } from 'react'
import { useReveal } from './useReveal'

const slides = [
  { quote: 'Mindenki azt mondta, milyen gyönyörű vagyok benne! Pontosan olyan ruhát kaptam, amilyenben mindig szerettem volna megjelenni az esküvőmön.', cite: 'Marcsi · Győr' },
  { quote: 'A próbákon minden alkalommal figyelmes és türelmes volt. A ruha tökéletesen illeszkedett, és annyira kényelmes volt viselni egész nap.', cite: 'Kata · Budapest' },
  { quote: 'Anyagában és kivitelezésében is tökéletes volt. Minden barátnőmnek ajánlom Esztert, ha egyedi, elegáns ruhát szeretne az esküvőjére.', cite: 'Léna · Győr' },
  { quote: 'Álomruha – ez az egyetlen szó, ami leírja. Az egész folyamat stresszmentes volt, Eszter minden apró részletre odafigyelt.', cite: 'Réka · Sopron' },
  { quote: 'Nem hittem volna, hogy egy ruha ennyire önbizalmat adhat. A vendégek folyamatosan kérdeztek, hogy hol találtam ilyen különleges kreációt.', cite: 'Zsófi · Pécs' },
]

export default function Testimonials() {
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
  }, [])

  return (
    <section id="velemenyek" ref={ref}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="reveal">
          <span className="eyebrow">Vélemények</span>
          <h2 className="section-h2">Az ő <em>szavaikkal.</em></h2>
        </div>
        <div
          className="testi-carousel reveal"
          onMouseEnter={() => { pausedRef.current = true }}
          onMouseLeave={() => { pausedRef.current = false }}
        >
          <div className="testi-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {slides.map((slide, i) => (
              <div className="testi-slide" key={i}>
                <span className="testi-mark">"</span>
                <blockquote>{slide.quote}</blockquote>
                <div className="testi-divider"></div>
                <cite>{slide.cite}</cite>
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
