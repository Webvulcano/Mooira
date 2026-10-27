'use client'

// Egyedi események a Vercel Web Analyticsbe (sütimentes). Oldalmegtekintés: <Analytics /> (SiteAnalytics),
// ez a fájl a kapcsolatfelvételi kattintásokat + a sikeres űrlapküldést méri. Minta: Cyber Beaver.
// Konverziók (cms.manifest.js analytics.vercel.conversions): Telefonhívás, Email, Űrlapküldés.
// A többi esemény (Időpontfoglalás gomb, Instagram, Facebook, Kollekciók) = érdeklődés.
// Egyedi esemény csak Pro csomagban, max. 2 extra adat.
import { track } from '@vercel/analytics'

// Az Ügyfél Admin szerkesztő iframe-je nem látogató
const inEditor = () => {
  try {
    return window.self !== window.top
  } catch {
    return true
  }
}

export function trackEvent(name, props) {
  if (typeof window === 'undefined' || inEditor()) return
  track(name, props)
}

// href → eseménynév (null = nem mérjük)
export function classifyLink(href) {
  if (!href) return null
  if (href.startsWith('tel:')) return 'Telefonhívás'
  if (href.startsWith('mailto:')) return 'Email'
  if (href.includes('instagram.com')) return 'Instagram'
  if (href.includes('facebook.com')) return 'Facebook'
  if (href === '#kapcsolat' || href === '/#kapcsolat') return 'Időpontfoglalás gomb'
  if (href === '/kollekcio') return 'Kollekciók'
  return null
}

// A gomb felirata; ikon-gombnál az aria-label
export function linkLabel(el) {
  const text = (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim()
  return (text || el.getAttribute('aria-label') || '(ikon)').slice(0, 60)
}

const PLACE_NAMES = {
  'mooira-couture': 'couture',
  bemutatkozas: 'bemutatkozás',
  kollekcio: 'kollekció',
  folyamat: 'folyamat',
  velemenyek: 'vélemények',
  arak: 'árak',
  kapcsolat: 'kapcsolat',
}

// Hol volt a link: fejléc / mobilmenü / lábléc / szakasz id / oldal útvonala
export function linkPlace(el) {
  if (el.closest('.mobile-menu')) return 'mobilmenü'
  if (el.closest('nav')) return 'fejléc'
  if (el.closest('footer')) return 'lábléc'
  const sec = el.closest('section')
  if (sec?.id) return PLACE_NAMES[sec.id] || sec.id
  return `oldal: ${window.location.pathname}`
}
