import { useRef } from 'react'
import { useReveal } from './useReveal'

const steps = [
  { num: '01', title: 'Konzultáció', text: 'Megismerjük egymást és az elképzeléseidet. Megbeszéljük a stílusod, az esküvőd hangulatát és a ruha minden részletét.' },
  { num: '02', title: 'Tervezés',    text: 'Kidolgozzuk az álmodott ruhád minden részletét. Anyagválasztás, szabásvonal, díszítések — minden az ízlésed szerint.' },
  { num: '03', title: 'Próbák',      text: 'Csiszoljuk a ruhát, amíg tökéletes nem lesz. Általában 2–3 próba szükséges a hibátlan illesztéshez.' },
  { num: '04', title: 'Átadás',      text: 'A kész ruha átadása — és te készen állsz rá, hogy felejthetetlen legyél a nagy napon.' },
]

export default function Process() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="section section--dark" id="folyamat" ref={ref}>
      <div className="container">
        <p className="header-style reveal">Négy lépésben,<br />három hónap alatt.</p>
        <div className="process-grid">
          {steps.map(step => (
            <div className="process-step reveal" key={step.num}>
              <span className="about-label">{step.num}</span>
              <h3 className="header-style">{step.title}</h3>
              <p className="p-style">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
