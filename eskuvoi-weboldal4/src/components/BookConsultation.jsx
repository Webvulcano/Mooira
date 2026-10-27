'use client'

import { useRef, useState, useCallback, useSyncExternalStore, memo } from 'react'
import { useReveal } from './useReveal'
import { DatePicker } from './untitled-ui/date-picker'
import { trackEvent } from '@/lib/analytics'
import { CONTACT_EMAIL, CONTACT_MAILTO, FACEBOOK_URL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL } from '@/lib/site'

const MemoDatePicker = memo(DatePicker)

const FORM_ID = process.env.NEXT_PUBLIC_SIMPLYFORMS_FORM_ID

// szerveren mindig false → nincs hydration-eltérés; böngészőben dev módban az URL-ből olvas
const noopSubscribe = () => () => {}
const getDevThanks = () => process.env.NODE_ENV === 'development' && new URLSearchParams(window.location.search).has('koszonjuk')

export default function BookConsultation() {
  const ref = useRef(null)
  useReveal(ref)

  const [form, setForm] = useState({ name: '', email: '', city: '', vision: '' })
  const [date, setDate] = useState(null)
  // csak fejlesztéskor: ?koszonjuk az URL-ben → rögtön a köszönő üzenet látszik (élesben nem működik)
  const [sent, setSubmitted] = useState(false)
  const devThanks = useSyncExternalStore(noopSubscribe, getDevThanks, () => false)
  const submitted = sent || devThanks
  const [status, setStatus] = useState(null) // null | 'sending' | 'error'

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (e.target.tagName === 'TEXTAREA') {
      e.target.style.height = 'auto'
      e.target.style.height = e.target.scrollHeight + 'px'
    }
  }, [])

  // SimplyForms - a form ID publikus, API key nem kell (NEXT_PUBLIC_SIMPLYFORMS_FORM_ID env var)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const body = new FormData()
    body.append('subject', `ŰRLAPKITÖLTÉS - érdeklődik: ${form.name}`)
    body.append('Név', form.name)
    body.append('Email', form.email)
    if (form.city) body.append('Település', form.city)
    // a DatePicker CalendarDate-et ad (nem JS Date) → kézzel formázzuk: 2027. 06. 12.
    if (date) body.append('Esküvő dátuma', `${date.year}. ${String(date.month).padStart(2, '0')}. ${String(date.day).padStart(2, '0')}.`)
    if (form.vision) body.append('Ruha elképzelés', form.vision)
    // "_" előtag: nem jelenik meg a levélben, csak Reply-To lesz → a válasz a kitöltőhöz megy
    body.append('_replyto', form.email)

    try {
      const res = await fetch(`https://api.simplyforms.app/v1/forms/${FORM_ID}`, { method: 'POST', body })
      if (!res.ok) throw new Error(await res.text())
      setSubmitted(true)
      trackEvent('Űrlapküldés', { oldal: window.location.pathname })
    } catch (err) {
      console.error('[BookConsultation] SimplyForms hiba:', err)
      setStatus('error')
    }
  }

  return (
    <section className="section book book--dark" id="kapcsolat" ref={ref}>
      <div className="book__inner">
        <h2 className="header-style reveal">
          Lépjünk kapcsolatba
        </h2>

        <div className="book__grid">
          <div className="book__side reveal">
            <div className="book__contact-block">
              <span className="about-label">Email</span>
              <a href={CONTACT_MAILTO} className="p-style book__side-value">{CONTACT_EMAIL}</a>
            </div>
            <div className="book__contact-block">
              <span className="about-label">Telefon</span>
              <a href={PHONE_TEL} className="p-style book__side-value">{PHONE_DISPLAY}</a>
            </div>
            <div className="book__contact-block">
              <span className="about-label">Kövess minket</span>
              <div className="book__socials">
                <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></svg>
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>
                </a>
              </div>
            </div>
          </div>

          {!FORM_ID ? (
            <div className="book__success reveal in" role="status">
              <p className="p-style">Az űrlap karbantartás alatt — addig írj az <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a> címre, vagy hívj.</p>
            </div>
          ) : !submitted ? (
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

              <button type="submit" className="about-cta book__submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Küldés…' : 'Küldés'} <span aria-hidden="true">→</span>
              </button>
              {status === 'error' && (
                <p className="p-style" role="status">Hiba történt — addig írj az <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a> címre.</p>
              )}
            </form>
          ) : (
            <div className="book__success book__success--sent reveal in" role="status">
              <p className="book__success-title">Örülök, hogy írtál!</p>
              <p className="p-style">
                Elolvasom az elképzelésed, és 1–2 napon belül személyesen keresni foglak,
                hogy megbeszéljük a részleteket.
              </p>
              <p className="book__success-sign">— Eszter</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
