'use client'

import { useRef } from 'react'
import { useReveal } from './useReveal'
import { cmsAttr } from '@/lib/cms-attr'

export default function Pricing({ title, cards }) {
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
        <div className="pricing-grid">
          {cards.map((card, i) => (
            <div className={`pricing-card${card.highlight?.trim() ? ' highlight' : ''}`} key={i}>
              <span className="pricing-type" {...cmsAttr('home.pricing.cards', i, 'type')}>{card.type}</span>
              <h3 className="pricing-title" {...cmsAttr('home.pricing.cards', i, 'title')}>{card.title}</h3>
              <p className="pricing-desc" {...cmsAttr('home.pricing.cards', i, 'desc')}>{card.desc}</p>
              <span className="pricing-price" {...cmsAttr('home.pricing.cards', i, 'price')}>{card.price}</span>
              <span className="pricing-note" {...cmsAttr('home.pricing.cards', i, 'note')}>{card.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
