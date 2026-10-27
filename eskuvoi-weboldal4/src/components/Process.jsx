'use client'

import { useRef } from 'react'
import { useReveal } from './useReveal'
import { cmsAttr } from '@/lib/cms-attr'

export default function Process({ title, steps }) {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="section section--dark" id="folyamat" ref={ref}>
      <div className="container">
        <p className="header-style reveal" {...cmsAttr('home.process.title')}>{title}</p>
        <div className="process-grid">
          {steps.map((step, i) => (
            <div className="process-step reveal" key={i}>
              <span className="about-label" {...cmsAttr('home.process.steps', i, 'num')}>{step.num}</span>
              <h3 className="header-style" {...cmsAttr('home.process.steps', i, 'title')}>{step.title}</h3>
              <p className="p-style" {...cmsAttr('home.process.steps', i, 'text')}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
