'use client'

import { useCallback, useEffect, useRef } from 'react'

// Közös képnézegető (a PhotoGallery-ből kiemelve, 2026-11-16): nagy kép, nyilak / swipe / billentyűk.
// Natív <dialog> (showModal): Esc, fókuszcsapda és felső réteg beépítve — nincs külső függőség.
// index: a nyitott kép sorszáma (null = zárva); onIndex: lapozás; onClose: bezárás (Esc, X, háttérkattintás).
export default function Lightbox({ images, index, onIndex, onClose, fallbackAlt }) {
  const dialogRef = useRef(null)
  const touchX = useRef(null)
  const count = images.length
  const isOpen = index !== null

  const step = useCallback((dir) => onIndex((index + dir + count) % count), [index, count, onIndex])

  // dialog nyitás/zárás + háttér görgetés-zár
  useEffect(() => {
    const dlg = dialogRef.current
    if (!dlg) return
    if (isOpen && !dlg.open) {
      dlg.showModal()
      document.documentElement.style.overflow = 'hidden'
    } else if (!isOpen && dlg.open) {
      dlg.close()
    }
    if (!isOpen) document.documentElement.style.overflow = ''
  }, [isOpen])

  useEffect(() => () => { document.documentElement.style.overflow = '' }, [])

  // ← → billentyűk
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') step(-1)
      else if (e.key === 'ArrowRight') step(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, step])

  // a szomszéd képek előtöltése → lapozáskor azonnal ott vannak
  useEffect(() => {
    if (!isOpen || count < 2) return
    for (const d of [-1, 1]) {
      const img = new Image()
      img.src = images[(index + d + count) % count].src
    }
  }, [index, isOpen, count, images])

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
  }

  const current = isOpen ? images[index] : null

  return (
    <dialog
      ref={dialogRef}
      className="lb"
      aria-label="Képnézegető"
      onClose={() => { if (isOpen) onClose() }}
      // a képen és a gombokon kívüli kattintás bezár
      onClick={(e) => { if (e.target === e.currentTarget || e.target.classList.contains('lb-stage')) onClose() }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {current && (
        <>
          <div className="lb-stage">
            <img key={current.src} className="lb-img" src={current.src} width={current.width} height={current.height} alt={current.alt || fallbackAlt} />
          </div>
          <p className="lb-count">{index + 1} / {count}</p>
          <button type="button" className="lb-btn lb-close" onClick={onClose} aria-label="Bezárás">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><path d="M5 5l14 14M19 5L5 19" /></svg>
          </button>
          {count > 1 && (
            <>
              <button type="button" className="lb-btn lb-prev" onClick={() => step(-1)} aria-label="Előző kép">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 5 8 12 15 19" /></svg>
              </button>
              <button type="button" className="lb-btn lb-next" onClick={() => step(1)} aria-label="Következő kép">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 5 16 12 9 19" /></svg>
              </button>
            </>
          )}
        </>
      )}
    </dialog>
  )
}
