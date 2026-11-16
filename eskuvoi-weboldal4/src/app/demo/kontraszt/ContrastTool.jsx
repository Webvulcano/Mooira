'use client'

import { useState } from 'react'
import BookConsultation from '@/components/BookConsultation'

// --- WCAG kontraszt számítás ---
function parseHex(input) {
  let h = String(input).trim().replace(/^#/, '')
  if (/^[0-9a-f]{3}$/i.test(h)) h = h.split('').map((c) => c + c).join('')
  if (!/^[0-9a-f]{6}$/i.test(h)) return null
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16))
}
const toHex = (rgb) => '#' + rgb.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('').toUpperCase()
function luminance([r, g, b]) {
  const f = (v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
}
function ratio(a, b) {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (l1 + 0.05) / (l2 + 0.05)
}
const WHITE = [255, 255, 255]
// 6 árnyalat: 3 világosabb (fehér felé), 3 sötétebb (fekete felé)
const SHADE_STEPS = [0.45, 0.3, 0.15, -0.15, -0.3, -0.45]
function shade(rgb, t) {
  const target = t > 0 ? 255 : 0
  const k = Math.abs(t)
  return rgb.map((v) => Math.round(v + (target - v) * k))
}

function Badge({ ok, children }) {
  return (
    <span style={{
      display: 'inline-block', padding: '3px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600,
      background: ok ? '#E3F4E8' : '#FBE4E4', color: ok ? '#1E6B3A' : '#9B1C1C',
    }}>{ok ? '✓' : '✗'} {children}</span>
  )
}

export default function ContrastTool() {
  // base = amit beírtál (ebből jönnek az árnyalatok), hex = ami épp az űrlapon van
  const [base, setBase] = useState('#DDB8AE')
  const [hex, setHex] = useState('#DDB8AE')
  const setTyped = (v) => { setHex(v); setBase(v) }

  const bg = parseHex(hex)
  const valid = !!bg
  const bgSafe = bg || [221, 184, 174]
  const baseRgb = parseHex(base) || bgSafe
  const r = ratio(bgSafe, WHITE)
  const bgHex = toHex(bgSafe)
  const shades = SHADE_STEPS.map((t) => toHex(shade(baseRgb, t)))

  return (
    <main style={{ minHeight: '100vh', background: 'var(--off-white)', padding: '40px 0 0', color: 'var(--dark)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px 32px' }}>
        <p className="about-label section-label">Demo</p>
        <h1 className="couture-title" style={{ margin: '6px 0 8px' }}>Űrlap színpróba</h1>
        <p style={{ maxWidth: 640, lineHeight: 1.6, marginBottom: 24 }}>
          Írd be az űrlap háttérszínét — az előnézet azonnal frissül. Mellette a szín 6 árnyalata;
          a pipás árnyalatokon a fehér szöveg már jól olvasható.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', marginBottom: 16 }}>
          <input type="color" value={bgHex} onChange={(e) => setTyped(e.target.value.toUpperCase())}
            aria-label="Háttérszín választó" style={{ width: 52, height: 44, border: 'none', background: 'none', cursor: 'pointer' }} />
          <input type="text" value={hex} onChange={(e) => setTyped(e.target.value)} aria-label="Háttérszín hex kódja"
            style={{ width: 130, padding: '10px 12px', fontSize: 16, fontFamily: 'monospace', border: `1px solid ${valid ? '#ccc' : '#c00'}`, borderRadius: 6 }} />
          <div style={{ display: 'flex', gap: 8 }} role="group" aria-label="Árnyalatok">
            {shades.map((c) => {
              const ok = ratio(parseHex(c), WHITE) >= 4.5
              return (
                <button key={c} type="button" title={`${c} · ${ratio(parseHex(c), WHITE).toFixed(2)}:1`} aria-label={`Árnyalat: ${c}`}
                  onClick={() => setHex(c)}
                  style={{ width: 36, height: 36, borderRadius: '50%', background: c, cursor: 'pointer', color: '#fff', fontSize: 14,
                    display: 'grid', placeItems: 'center', border: c === bgHex ? '2px solid #222' : '1px solid #bbb' }}>
                  {ok ? '✓' : ''}
                </button>
              )
            })}
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <strong style={{ fontSize: 22 }}>{r.toFixed(2)} : 1</strong>
          <Badge ok={r >= 4.5}>Szöveg (AA, 4.5:1)</Badge>
          <Badge ok={r >= 3}>Nagy szöveg, keret, gomb (3:1)</Badge>
          <Badge ok={r >= 7}>AAA (7:1)</Badge>
        </div>
      </div>

      {/* --- élő előnézet: a valódi BookConsultation űrlap, csak a háttér cserélve --- */}
      <div style={{ '--powder-deep': bgHex }}>
        <BookConsultation />
      </div>
    </main>
  )
}
