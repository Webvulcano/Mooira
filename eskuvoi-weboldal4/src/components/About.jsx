'use client'

import { useRef } from 'react'
import { useReveal } from './useReveal'

export default function About() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="section section--pale" id="bemutatkozas" ref={ref}>
      <div className="container">
        <div className="about-grid about-grid--reverse">
          <div className="about-photos reveal">
            <img
              className="about-photo-main"
              src="/eszter.jpg"
              alt="Tóth Eszter, mooira tervező"
            />
          </div>
          <div className="about-text reveal">
            <p className="about-label">ISMERD MEG A TERVEZŐT</p>
            <h2 className="about-name">Tóth Eszter</h2>
            {/*<p className="about-subtitle">a Mooira Couture alapítója és kreatív alkotója</p>*/}
            <p>Eszternek az álma valósult meg, amikor divattervezői tanulmányait követően 2014-ben megalapította a Mooira-t és esküvői ruhákat kezdett készíteni.</p>
            <p>Eszter elhivatottsága és az esküvői ruhák iránti szenvedélye minden egyes kreációját átszövi. A tervező személyesen foglalkozik a menyasszonyokkal a ruhapróbákon és saját kezűleg készíti el az általa és menyasszonyai által megálmodott ruhákat, biztosítva ezzel a maximális odafigyelést és minőséget.</p>
            <a href="#kollekcio" className="about-cta">Kollekciók</a>
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
