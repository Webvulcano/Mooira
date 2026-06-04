import { useState, useEffect, useRef } from 'react'

const pairs = [
  { id: 1, label: 'Cormorant + DM Sans',     serif: "'Cormorant Garamond',Georgia,serif", sans: "'DM Sans',system-ui,sans-serif",  gf: 'Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400' },
  { id: 2, label: 'Marcellus + Crimson Pro',  serif: "'Marcellus',Georgia,serif",          sans: "'Crimson Pro',Georgia,serif",      gf: 'Marcellus&family=Crimson+Pro:ital,wght@0,300;0,400;1,300;1,400' },
  { id: 3, label: 'Jost* + Mulish',           serif: "'Jost',sans-serif",                  sans: "'Mulish',sans-serif",              gf: 'Jost:wght@300;400&family=Mulish:wght@300;400', note: '*Mr Eaves → Jost (GF)' },
  { id: 4, label: 'Cormorant Upright + Lato', serif: "'Cormorant Upright',Georgia,serif",  sans: "'Lato',sans-serif",               gf: 'Cormorant+Upright:wght@300;400&family=Lato:wght@300;400' },
  { id: 5, label: 'Poppins + Lora',           serif: "'Poppins',sans-serif",               sans: "'Lora',Georgia,serif",            gf: 'Poppins:wght@300;400&family=Lora:ital,wght@0,400;1,400' },
  { id: 6, label: 'Questrial + EB Garamond',  serif: "'Questrial',sans-serif",             sans: "'EB Garamond',Georgia,serif",     gf: 'Questrial&family=EB+Garamond:ital,wght@0,400;1,400' },
  { id: 7, label: 'Cardo + Nunito',           serif: "'Cardo',Georgia,serif",              sans: "'Nunito',sans-serif",             gf: 'Cardo:ital,wght@0,400;1,400&family=Nunito:wght@300;400' },
]

const loaded = new Set()

function loadFont(gf) {
  if (loaded.has(gf)) return
  loaded.add(gf)
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/css2?family=' + gf + '&display=swap'
  document.head.appendChild(link)
}

export default function FontTweaks() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(2)
  const panelRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  const applyFont = (p) => {
    loadFont(p.gf)
    document.documentElement.style.setProperty('--serif', p.serif)
    document.documentElement.style.setProperty('--sans', p.sans)
    setActive(p.id)
  }

  return (
    <div className="fp" id="fontPanel" ref={panelRef}>
      {open && (
        <div className="fp-body open">
          <div className="fp-title">Betűtípus kombó</div>
          {pairs.map(p => (
            <button
              key={p.id}
              className={`fp-btn${active === p.id ? ' active' : ''}`}
              onClick={() => applyFont(p)}
            >
              <span className="fp-name">
                {p.label}
                {p.note && <span> {p.note}</span>}
              </span>
              <span className="fp-preview" style={{ fontFamily: p.serif }}>
                Esküvői <em>ruhák</em>
              </span>
            </button>
          ))}
        </div>
      )}
      <button className="fp-toggle" title="Betűtípus váltó" onClick={() => setOpen(o => !o)}>Aa</button>
    </div>
  )
}
