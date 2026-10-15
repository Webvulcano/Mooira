import { useRef } from 'react'
import { useReveal } from './useReveal'

export default function Couture() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="section" id="mooira-couture" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-photos reveal">
            <img
              className="about-photo-main"
              src="/mooira-couture.jpg"
              alt="Menyasszony mooira esküvői ruhában"
            />
          </div>
          <div className="about-text reveal">
            <p className="about-label">MOOIRA COUTURE</p>
            <h2 className="about-name">
              Ruha, ami<br />Rólad szól.
            </h2>
            <p>A Mooira esküvői ruhák a menyasszonyról szólnak. Vagyis Rólad.</p>
            <p>Arról a különleges érzésről, amikor igazán gyönyörűnek és felszabadultnak érzed magad. Egy ruha, ami könnyed, komfortos, kiemeli a szépséged, nőiességed, és teret ad annak, hogy a nagy napon szabadon átadhasd magad a házasságkötés meghitt pillanatainak.</p>
            <p>A Mooira kifinomult, kissé romantikus stílusa személyre szabott tervezéssel találkozik, így minden ruha természetes harmóniába kerül azzal a nővel, aki viseli.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
