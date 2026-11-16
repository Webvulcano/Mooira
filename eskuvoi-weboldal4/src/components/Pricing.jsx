'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useReveal } from './useReveal'
import { cmsAttr } from '@/lib/cms-attr'

// Mobilon: képes, egymásba csúsztatott cikcakk (kép a képernyő széléig kifut, mellette a szöveg).
// Desktopon (egyelőre): a régi kártyák, kép nélkül — a .pricing-img ott rejtett.
export default function Pricing({ title, cards, images = [] }) {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="section section--pale" id="arak" ref={ref}>
      <div className="container">
        <div>
          <h2 className="header-style" {...cmsAttr('home.pricing.title')}>
            {title.map((line, i) => <span key={i}>{i > 0 && <br />}{line}</span>)}
          </h2>
          {/*<p className="p-style">
            Az árak bruttó árak és az anyagköltséget is tartalmazzák.
          </p>*/}
        </div>
        <div className="pricing-grid" {...cmsAttr('home.pricing.images')}>
          {cards.map((card, i) => (
            <div className={`pricing-card${card.highlight?.trim() ? ' highlight' : ''}${images[i] ? ' has-img' : ''}`} key={i}>
              {images[i] && (
                <div className="pricing-img">
                  <img src={images[i].src} width={images[i].width} height={images[i].height} alt={images[i].alt || card.title} loading="lazy" decoding="async" />
                </div>
              )}
              <div className="pricing-body">
                {/* mobilon 90°-kal elforgatva (alulról felfelé olvasva) */}
                <div className="pricing-head">
                  <span className="pricing-type" {...cmsAttr('home.pricing.cards', i, 'type')}>{card.type}</span>
                  <h3 className="pricing-title" {...cmsAttr('home.pricing.cards', i, 'title')}>{card.title}</h3>
                </div>
                <p className="pricing-desc" {...cmsAttr('home.pricing.cards', i, 'desc')}>{card.desc}</p>
                {/* /arak aloldal még nincs — elkészültéig 404 */}
                <Link href="/arak" className="link-arrow pricing-more">Bővebben →</Link>
                {/* az ár (szám + „-tól” megjegyzés) nem jelenik meg (Lehel, 2026-11-13) — az adminban megmarad, rejtve
                <span className="pricing-price" {...cmsAttr('home.pricing.cards', i, 'price')}>{card.price}</span>
                <span className="pricing-note" {...cmsAttr('home.pricing.cards', i, 'note')}>{card.note}</span>
                */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
