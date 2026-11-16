'use client'

import { useRef } from 'react'
import { useReveal } from './useReveal'

// Kép + szöveg szekció a Mooira couture stílusában (desktop: kép az egyik oldalon, szöveg a másikon; mobil: kép felül).
// reverse = kép jobbra. Szöveg + kép kódban (site.js), CMS-ből nem szerkeszthető.
// Mobil kép-beállítás (pozíció, zoom, magasság) a globals.css-ben, a szekció id-jára (#ruhavalasztas, #ruhaproba).
export default function ImageTextSection({ id, label, title, body, image, cta, reverse = false }) {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="section" id={id} ref={ref}>
      <div className="container">
        <div className={`about-grid${reverse ? ' about-grid--reverse' : ''}`}>
          <div className="about-photos reveal">
            {image && <img className="about-photo-main" src={image.src} alt={image.alt} />}
          </div>
          <div className="about-text reveal">
            {label && <p className="about-label section-label">{label}</p>}
            <h2 className="about-name couture-title">{title}</h2>
            {body.map((p, i) => <p key={i}>{p}</p>)}
            {/* Opcionális CTA gomb (pl. → #kapcsolat űrlap) */}
            {cta && <a href={cta.href} className="about-cta">{cta.label}</a>}
          </div>
        </div>
      </div>
    </section>
  )
}
