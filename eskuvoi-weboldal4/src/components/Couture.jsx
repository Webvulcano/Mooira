'use client'

import { useRef } from 'react'
import { useReveal } from './useReveal'
import RichText from './cms/RichText'
import { cmsAttr } from '@/lib/cms-attr'

export default function Couture({ label, title, body, image }) {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="section" id="mooira-couture" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-photos reveal" {...cmsAttr('home.couture.image')}>
            {image && <img className="about-photo-main" src={image.src} alt={image.alt} />}
          </div>
          <div className="about-text reveal">
            <p className="about-label" {...cmsAttr('home.couture.label')}>{label}</p>
            <h2 className="about-name couture-title" {...cmsAttr('home.couture.title')}>
              {title.map((line, i) => <span key={i}>{i > 0 && <br />}{line}</span>)}
            </h2>
            <RichText value={body} {...cmsAttr('home.couture.body')} />
          </div>
        </div>
      </div>
    </section>
  )
}
