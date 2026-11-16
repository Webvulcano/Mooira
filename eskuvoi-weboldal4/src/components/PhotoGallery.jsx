'use client'

import { useEffect, useMemo, useState } from 'react'
import Lightbox from './Lightbox'

// Masonry galéria + lightbox (Eszter kérése, 2026-11): kattintásra a kép nagyban, nyilak / swipe / billentyűk.
// A nézegető a közös Lightbox komponens.
// initialSrc (2026-11-16): a főoldali „Mooira pillanatok” képére kattintva (?kep=<src>) ez a kép nyílik meg nagyban,
// bezárás után a galéria marad. Ha a kép nincs a galériában (főoldali saját kép), a nézegetőben elsőként jelenik meg.
export default function PhotoGallery({ images, initialSrc = null, fallbackAlt }) {
  // csak saját oldalról származó kép (relatív út) vagy a galéria egy eleme fogadható el
  const extra = useMemo(() => {
    if (!initialSrc || images.some((it) => it.src === initialSrc)) return null
    return initialSrc.startsWith('/') && !initialSrc.startsWith('//') ? { src: initialSrc } : null
  }, [initialSrc, images])
  const lbImages = useMemo(() => (extra ? [extra, ...images] : images), [extra, images])

  const [index, setIndex] = useState(null) // null = zárva

  // nyitás az URL-ben kapott képen (mount után, hogy a <dialog> már létezzen)
  useEffect(() => {
    if (!initialSrc) return
    const i = lbImages.findIndex((it) => it.src === initialSrc)
    if (i >= 0) setIndex(i)
  }, [initialSrc, lbImages])

  const close = () => {
    setIndex(null)
    // a ?kep= paramétert levesszük, hogy frissítéskor ne nyíljon újra
    if (initialSrc) window.history.replaceState(null, '', window.location.pathname)
  }

  return (
    <>
      <div className="cg-grid">
        {images.map(({ src, width, height, alt }, i) => (
          <button key={src} type="button" className="cg-item" onClick={() => setIndex(extra ? i + 1 : i)} aria-label="Kép megnyitása nagyban">
            <img src={src} width={width} height={height} alt={alt || fallbackAlt} loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      <Lightbox images={lbImages} index={index} onIndex={setIndex} onClose={close} fallbackAlt={fallbackAlt} />
    </>
  )
}
