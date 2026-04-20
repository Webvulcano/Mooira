import { useRef } from 'react'
import { useReveal } from './useReveal'

const items = [
  { name: 'Celine',  img: 'http://mooira.hu/wp-content/uploads/2015/01/foto-059.jpg' },
  { name: 'Mirella', img: 'http://mooira.hu/wp-content/uploads/2016/10/kicsibb.jpg' },
  { name: 'Odette',  img: 'http://mooira.hu/wp-content/uploads/2015/01/foto-311.jpg' },
  { name: 'Vivien',  img: 'http://mooira.hu/wp-content/uploads/2015/01/foto-071.jpg' },
]

export default function Collection() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="section" id="kollekcio" ref={ref}>
      <div className="container">
        <div className="collection-top reveal">
          <div>
            <span className="eyebrow">Kollekció</span>
            <h2 className="section-h2">Kollekció <em>2025</em></h2>
          </div>
          <a href="#kapcsolat" className="link-arrow">Teljes kollekcióhoz →</a>
        </div>
        <div className="collection-grid">
          {items.map(item => (
            <div className="collection-item reveal" key={item.name}>
              <div className="collection-item-img">
                <img src={item.img} alt={`${item.name} esküvői ruha`} />
              </div>
              <div className="collection-item-meta">
                <span className="collection-name">{item.name}</span>
                <span className="collection-price">34–42 · 360 000 Ft-tól</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
