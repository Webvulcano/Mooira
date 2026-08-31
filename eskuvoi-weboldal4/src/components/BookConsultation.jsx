import { useRef, useState, useCallback, memo } from 'react'
import { useReveal } from './useReveal'
import { DatePicker } from './untitled-ui/date-picker'

const MemoDatePicker = memo(DatePicker)

export default function BookConsultation() {
  const ref = useRef(null)
  useReveal(ref)

  const [form, setForm] = useState({ name: '', email: '', city: '', vision: '' })
  const [date, setDate] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (e.target.tagName === 'TEXTAREA') {
      e.target.style.height = 'auto'
      e.target.style.height = e.target.scrollHeight + 'px'
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section book book--dark" id="kapcsolat" ref={ref}>
      <div className="book__inner">
        <h2 className="header-style reveal">
          Lépjünk kapcsolatba
        </h2>

        <div className="book__grid">
          <div className="book__side reveal">
            <p className="p-style">
              Foglalj időpontot egy kötetlen, hatvan perces konzultációra.
              Bemutatom a kollekciót, te pedig mesélsz nekem az álmaidról —
              hogy az a ruha, amiben végigsétálsz a szőnyegen, tényleg a tiéd legyen.
            </p>
            <div className="book__contact-block">
              <span className="about-label">Email</span>
              <a href="mailto:info@mooira.hu" className="p-style book__side-value">info@mooira.hu</a>
            </div>
            <div className="book__contact-block">
              <span className="about-label">Telefon</span>
              <a href="tel:+36705135869" className="p-style book__side-value">+36 70/513-5869</a>
            </div>
            <div className="book__contact-block">
              <span className="about-label">Kövess minket</span>
              <div className="book__socials">
                <a href="https://www.facebook.com/mooiramenyasszonyiruha" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></svg>
                </a>
                <a href="https://www.instagram.com/mooira_couture/" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>
                </a>
              </div>
            </div>
          </div>

          {!submitted ? (
            <form className="book__form reveal" onSubmit={handleSubmit} noValidate>
              <div className="book__row-3">
                <label className="book__field">
                  <span className="about-label">Név</span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="book__input"
                    autoComplete="name"
                    placeholder="A teljes neved"
                  />
                </label>

                <label className="book__field">
                  <span className="about-label">Email cím</span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="book__input"
                    autoComplete="email"
                    placeholder="pelda@email.hu"
                  />
                </label>

                <label className="book__field">
                  <span className="about-label">Település</span>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="book__input"
                    autoComplete="address-level2"
                    placeholder="Győr"
                  />
                </label>

                <div className="book__field">
                  <span className="about-label">Esküvő tervezett időpontja</span>
                  <div className="book__datepicker">
                    <MemoDatePicker value={date} onChange={setDate} />
                  </div>
                </div>
              </div>

              <label className="book__field book__field--full">
                <span className="about-label">Ruha elképzelés</span>
                <textarea
                  name="vision"
                  rows={1}
                  value={form.vision}
                  onChange={handleChange}
                  className="book__textarea"
                  placeholder="Mesélj nekem a stílusodról..."
                />
              </label>

              <button type="submit" className="about-cta book__submit">
                Küldés <span aria-hidden="true">→</span>
              </button>
            </form>
          ) : (
            <div className="book__success reveal in" role="status">
              <p className="p-style"><em>Köszönöm.</em> Hamarosan keresni foglak.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
