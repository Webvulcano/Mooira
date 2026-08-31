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
          <h2 className="header-style">Válaszd a számodra<br />megfelelő megoldást.</h2>
          <p className="p-style">
            Az árak bruttó árak és az anyagköltséget is tartalmazzák.
          </p>
        </div>
        <div className="pricing-grid">
          {cards.map(card => (
            <div className={`pricing-card${card.highlight ? ' highlight' : ''}`} key={card.type}>
              <span className="pricing-type">{card.type}</span>
              <h3 className="pricing-title">{card.title}</h3>
              <p className="pricing-desc">{card.desc}</p>
              <span className="pricing-price">{card.price}</span>
              <span className="pricing-note">{card.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
