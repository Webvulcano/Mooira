'use client'

import { useRef } from 'react'
import { useReveal } from './useReveal'
import RichText from './cms/RichText'
import { cmsAttr } from '@/lib/cms-attr'

export default function About({ label, name, body, cta, image }) {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="section section--pale" id="bemutatkozas" ref={ref}>
      <div className="container">
        <div className="about-grid about-grid--reverse">
          <div className="about-photos reveal" {...cmsAttr('home.about.image')}>
            {image && <img className="about-photo-main" src={image.src} alt={image.alt} />}
          </div>
          <div className="about-text reveal">
            <p className="about-label" {...cmsAttr('home.about.label')}>{label}</p>
            <h2 className="about-name" {...cmsAttr('home.about.name')}>{name}</h2>
            {/*<p className="about-subtitle">a Mooira Couture alapítója és kreatív alkotója</p>*/}
            <RichText value={body} {...cmsAttr('home.about.body')} />
            <a href="#kollekcio" className="about-cta" {...cmsAttr('home.about.cta')}>{cta}</a>
            {/*<div className="about-stats">
              <div>
                <span className="stat-num">10+</span>
                <span className="stat-label">Év tapasztalat</span>
              </div>
              <div>
                <span className="stat-num">200+</span>
                <span className="stat-label">Elkészült ruha</span>
              </div>
              <div>
                <span className="stat-num">100%</span>
                <span className="stat-label">Elégedett menyasszony</span>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}
