import { useRef } from 'react'
import { useReveal } from './useReveal'

const cards = [
  {
    type: 'Egyedi tervezés',
    title: 'Teljesen egyedi ruha',
    desc: 'Az elképzelésedből kiindulva megtervezzük és elkészítjük a méretedre az esküvői ruhád. Minden részlet személyre szabott.',
    price: '390 000 Ft',
    note: '-tól · anyaggal együtt',
    highlight: false,
  },
  {
    type: 'Kollekcióból',
    title: 'Kollekcióból, a méretedre',
    desc: 'Válassz menyasszonyi ruhát a kollekciónkból, és elkészítjük az egyedi méretedre — 34–42-es mérettartományban.',
    price: '360 000 Ft',
    note: '-tól · anyaggal együtt',
    highlight: true,
  },
  {
    type: 'Bérlés',
    title: 'Esküvői ruha bérlése',
    desc: 'Bérelj esküvői ruhát a kollekciónkból! Bemutatódarabok 36–38-as méretben, személyes próbával, konzultációval.',
    price: '280 000 Ft',
    note: '-tól',
    highlight: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="section section--pale" id="arak" ref={ref}>
      <div className="container">
        <div>
          {/*<span className="eyebrow">Árak</span>*/}
          <h2 className="section-h2">Válaszd a <em>számodra</em><br />megfelelő megoldást.</h2>
          <p style={{ marginTop: '14px', fontSize: '0.88rem' }}>
            Az árak bruttó árak és az anyagköltséget is tartalmazzák.
          </p>
        </div>
        <div className="pricing-grid">
          {cards.map(card => (
            <div className={`pricing-card${card.highlight ? ' highlight' : ''}`} key={card.type}>
              <span className="pricing-type">{card.type}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <span className="pricing-price">{card.price}</span>
              <span className="pricing-note">{card.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
