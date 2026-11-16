import Link from 'next/link'
import { cmsAttr } from '@/lib/cms-attr'

// „Válaszd a számodra megfelelő megoldást” — B VARIÁNS (2026-11-16, Lehel kérésére, összehasonlításra).
// Mobilon: a 3 kép teljes képernyő-szélességben, egymás alatt; a képen a nagybetűs felirat + „Bővebben →”.
// Desktopon a 3 kép egymás mellett (2026-11-16). Ugyanazokból az adatokból dolgozik, mint a Pricing.jsx.
export default function PricingFull({ title, cards, images = [] }) {
  return (
    <section className="section section--pale pricing-full" id="arak-b">
      <div className="container">
        <h2 className="header-style">
          {title.map((line, i) => <span key={i}>{i > 0 && <br />}{line}</span>)}
        </h2>
        <div className="pf-list">
          {/* az egész blokk (kép + felirat + Bővebben) egy link → /arak (az aloldal még nincs — elkészültéig 404) */}
          {cards.map((card, i) => images[i] && (
            <Link href="/arak" className="pf-item" key={i}>
              <img
                src={images[i].src}
                width={images[i].width}
                height={images[i].height}
                alt={images[i].alt || card.title}
                loading="lazy"
                decoding="async"
              />
              <div className="pf-overlay">
                <span className="pf-label" {...cmsAttr('home.pricing.cards', i, 'type')}>{card.type}</span>
                {/* csak látvány — a kattintást a körülötte lévő link kezeli (link a linkben nem lehet) */}
                <span className="link-arrow pf-more">Bővebben →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
