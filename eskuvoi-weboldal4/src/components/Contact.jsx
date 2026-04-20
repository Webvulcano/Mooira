import { useState, useRef } from 'react'
import { useReveal } from './useReveal'
import { DatePicker } from './untitled-ui/date-picker'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const formRef = useRef(null)
  const ref = useRef(null)
  useReveal(ref)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setSelectedDate(null)
      formRef.current?.reset()
    }, 6000)
  }

  return (
    <section className="cta-section" id="kapcsolat" ref={ref}>
      <div className="cta-inner reveal">
        <span className="eyebrow">Foglalj időpontot</span>
        <h2>Foglalj egy<br /><em>konzultációt.</em></h2>
        <p>Az első konzultáció ingyenes és kötelezettségmentes. Töltsd ki az űrlapot, és hamarosan felveszem veled a kapcsolatot.</p>

        {submitted ? (
          <div className="cta-form-success">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.4" />
              <path d="M12 20.5l5.5 5.5 10.5-11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>Köszönöm az üzenetet!<br />1–2 munkanapon belül felveszem veled a kapcsolatot.</p>
          </div>
        ) : (
          <form className="cta-form" onSubmit={handleSubmit} ref={formRef}>
            <input type="text" name="nev" placeholder="Név" autoComplete="name" required />
            <input type="email" name="email" placeholder="Email cím" autoComplete="email" required />

            <div className="cta-form-date-wrap">
              <span className="cta-form-date-label">Esküvő tervezett időpontja</span>
              <DatePicker
                value={selectedDate}
                onChange={setSelectedDate}
              />
            </div>

            <textarea
              name="ruha_igeny"
              placeholder="Esküvői ruha igény – meséld el elképzeléseidet, milyen stílusban képzeled a ruhádat…"
            ></textarea>
            <button type="submit">Küldöm az üzenetet</button>
          </form>
        )}

        <div className="cta-contacts">
          <a href="mailto:info@mooira.hu" data-copy-email="info@mooira.hu">
            info@mooira.hu
            <span className="copy-icon">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><path d="M3 11H2.5A1.5 1.5 0 0 1 1 9.5v-7A1.5 1.5 0 0 1 2.5 1h7A1.5 1.5 0 0 1 11 2.5V3" stroke="currentColor" strokeWidth="1.4" /></svg>
            </span>
          </a>
          <a href="tel:+36705135869">+36 70 513 5869</a>
        </div>
      </div>
    </section>
  )
}
