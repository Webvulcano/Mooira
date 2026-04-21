import { useRef, useState } from 'react'
import { useReveal } from './useReveal'
import { DatePicker } from './untitled-ui/date-picker'

export default function BookConsultation() {
  const ref = useRef(null)
  useReveal(ref)

  const [form, setForm] = useState({ name: '', email: '', vision: '' })
  const [date, setDate] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section section--pale book" id="foglalas" ref={ref}>
      <div className="book__inner">
        <div className="reveal">
          <span className="eyebrow">Meghívó</span>
          <h2 className="book__headline">
            Találkozzunk egy <em>csésze tea</em> mellett.
          </h2>
          <p className="book__intro">
            Foglalj időpontot egy kötetlen, hatvan perces konzultációra.
            Bemutatom a kollekciót, te pedig mesélsz nekem az álmaidról —
            hogy az a ruha, amiben végigsétálsz a szőnyegen, tényleg a tiéd legyen.
          </p>
          <span className="book__divider" aria-hidden="true" />
        </div>

        {!submitted ? (
          <form className="book__form reveal" onSubmit={handleSubmit} noValidate>
            <label className="book__field">
              <span className="book__label">Név</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="book__input"
                autoComplete="name"
              />
            </label>

            <label className="book__field">
              <span className="book__label">Email cím</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="book__input"
                autoComplete="email"
              />
            </label>

            <div className="book__field">
              <span className="book__label">Esküvő tervezett időpontja</span>
              <div className="book__datepicker">
                <DatePicker value={date} onChange={setDate} />
              </div>
            </div>

            <label className="book__field">
              <span className="book__label">Ruha elképzelés</span>
              <textarea
                name="vision"
                rows={5}
                value={form.vision}
                onChange={handleChange}
                className="book__textarea"
                placeholder="Mesélj nekem a stílusodról, a helyszínről, az érzésről…"
              />
            </label>

            <button type="submit" className="book__submit">
              Időpontfoglalás <span aria-hidden="true">→</span>
            </button>
          </form>
        ) : (
          <div className="book__success reveal in" role="status">
            <p><em>Köszönöm.</em> Hamarosan keresni foglak.</p>
          </div>
        )}
      </div>
    </section>
  )
}
