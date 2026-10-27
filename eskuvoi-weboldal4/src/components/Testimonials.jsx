import { useState, useEffect, useRef } from 'react'
import { useReveal } from './useReveal'

const slides = [
  { quote: 'A ruha egyszerűen varázslatos volt. Imádtam minden benne töltött percet. Igazi hercegnőnek éreztem magam benne. A násznép is áradozott róla, milyen szép. Csodát alkottál. Nagyon köszönöm neked!', cite: 'Fanni' },
  { quote: 'Szeretném még egyszer megköszönni, hogy elkészítetted az menyasszonyi ruhámat. Mindenki szerint csodaszép volt, és én is nagyon jól éreztem magam benne a nagy napunkon. ', cite: 'Noémi' },
  { quote: 'Tényleg nem lehetek elég hálás, hogy egy ilyen lényeges résszel hozzájárultál az esküvőnkhöz, és nagyon köszönöm a rám szánt időt és kedvességet az első találkozástól kezdve.', cite: 'Dóra' },
  { quote: 'Hálásan köszönöm a gyönyörű menyasszonyi ruhámat! ❤️❤️ Fantasztikus és gyönyörű volt,  imádtam és mindenki más is odáig volt érte.', cite: 'Dalma' },
  { quote: 'Egyszerűen meseszépnek éreztem magam és mindenki agyon dicsérte, hogy na ez igazán én vagyok ez a ruha, és én is ezt gondolom.', cite: 'Dóra' },
  { quote: 'Nagyon köszönöm mégegyszer a csodálatos ruhát 🥰 Gyönyörűnek éreztem magam benn egész nap. Szuperül bírta a terepet és a rengeteg táncot is.😁', cite: 'Adri' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const pausedRef = useRef(false)
  const ref = useRef(null)
  useReveal(ref)

  const goTo = (idx) => {
    setCurrent((idx + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent(c => (c + 1) % slides.length)
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="velemenyek" ref={ref}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="reveal">
          {/*<p className="about-label">Vélemények</p>*/}
          <h2 className="header-style">Vélemények</h2>

          {/*<h2 className="header-style">Az ő szavaikkal.</h2>} */}
        </div>
        <div
          className="testi-carousel reveal"
          onMouseEnter={() => { pausedRef.current = true }}
          onMouseLeave={() => { pausedRef.current = false }}
        >
          <div className="testi-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {slides.map((slide, i) => (
              <div className="testi-slide" key={i}>
                <span className="about-name testi-mark">"</span>
                <blockquote className="p-style">{slide.quote}</blockquote>
                <div className="testi-divider"></div>
                <cite className="about-label">{slide.cite}</cite>
              </div>
            ))}
          </div>
        </div>
        <div className="testi-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`testi-dot${current === i ? ' active' : ''}`}
              aria-label={`Vélemény ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
