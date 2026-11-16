'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useReveal } from './useReveal'
import { COUTURE_INTRO } from '@/content/site'

// „Kollekció | készítés | bérlés" — az „Ismerd meg a tervezőt" (About) helyén (2026-11-16).
// Szöveg + kép egyelőre kódban (COUTURE_INTRO), CMS-ből nem szerkeszthető.
// id="bemutatkozas" marad, hogy a kép kivágása/padding (globals.css) ugyanaz legyen.
export default function CoutureIntro() {
  const { image } = COUTURE_INTRO
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="section section--pale" id="bemutatkozas" ref={ref}>
      <div className="container">
        <div className="about-grid about-grid--reverse">
          <div className="about-photos reveal">
            {image && <img className="about-photo-main" src={image.src} alt={image.alt} />}
          </div>
          <div className="about-text reveal">
            <p className="about-label section-label">{COUTURE_INTRO.label}</p>
            <h2 className="about-name">{COUTURE_INTRO.title}</h2>
            {COUTURE_INTRO.body.map((p, i) => <p key={i}>{p}</p>)}
            {/* Bővebben → Rólunk oldal (Lehel, 2026-11-16) */}
            <Link href="/rolunk" className="link-arrow couture-more">Bővebben →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
