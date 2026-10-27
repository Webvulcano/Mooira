import { useRef } from 'react'
import { useReveal } from './useReveal'

const steps = [
  { num: '01', title: 'Időpontfoglalás', text: 'Vedd fel velünk a kapcsolatot e-mailben vagy telefonon, és egyeztessünk egy számodra megfelelő időpontot! Ha egyedi menyasszonyi ruhát szeretnél, érdemes már az esküvőd előtt 9–12 hónappal felvenned velünk a kapcsolatot, hogy legyen elegendő időnk együtt megálmodni és megalkotni a számodra tökéletes ruhát. Ha ennél kevesebb idő áll rendelkezésedre, akkor se habozz írni nekünk! Keress bátran, és ha lehetőségeink engedik, örömmel segítünk megvalósítani az elképzeléseidet.' },
  { num: '02', title: 'Konzultáció',    text: 'Egy személyes találkozás, ahol megismerjük az elképzeléseidet, bemutatódarabokat próbálhatsz fel, és közösen elindulunk a tökéletes fazon és a hozzád illő anyagok kiválasztása felé.' },
  { num: '03', title: 'Próbák',      text: 'Az álomruhád megszületéséhez általában 3–4 személyes próbára van szükség, hogy minden részlet tökéletesen illeszkedjen hozzád.' },
]

export default function Process() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="section section--dark" id="folyamat" ref={ref}>
      <div className="container">
        <p className="header-style reveal">Esküvői ruha készítés menete</p>
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
