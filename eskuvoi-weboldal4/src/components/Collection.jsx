import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from './useReveal'

const items = [
  { name: 'Celine',  slug: 'celine',  img: 'http://mooira.hu/wp-content/uploads/2015/01/foto-059.jpg' },
  { name: 'Mirella', slug: 'mirella', img: 'http://mooira.hu/wp-content/uploads/2016/10/kicsibb.jpg' },
  { name: 'Odette',  slug: 'odette',  img: 'http://mooira.hu/wp-content/uploads/2015/01/foto-311.jpg' },
  { name: 'Vivien',  slug: 'vivien',  img: 'http://mooira.hu/wp-content/uploads/2015/01/foto-071.jpg' },
  { name: 'Celine',  slug: 'celine-2',  img: 'http://mooira.hu/wp-content/uploads/2015/01/foto-059.jpg' },
  { name: 'Mirella', slug: 'mirella-2', img: 'http://mooira.hu/wp-content/uploads/2016/10/kicsibb.jpg' },
  { name: 'Odette',  slug: 'odette-2',  img: 'http://mooira.hu/wp-content/uploads/2015/01/foto-311.jpg' },
  { name: 'Vivien',  slug: 'vivien-2',  img: 'http://mooira.hu/wp-content/uploads/2015/01/foto-071.jpg' },
]

export default function Collection() {
  const ref = useRef(null)
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const dragState = useRef({ active: false, startX: 0, startScroll: 0, moved: false })
  useReveal(ref)

  const updateArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  useEffect(() => {
    updateArrows()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [updateArrows])

  const stepSize = () => {
    const el = trackRef.current
    if (!el) return 0
    const first = el.querySelector('.collection-item')
    if (!first) return el.clientWidth
    const style = getComputedStyle(el)
    const gap = parseFloat(style.columnGap || style.gap || '0') || 0
    return first.getBoundingClientRect().width + gap
  }

  const scrollByStep = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * stepSize(), behavior: 'smooth' })
  }

  const onPointerDown = (e) => {
    const el = trackRef.current
    if (!el) return
    dragState.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false }
    el.setPointerCapture(e.pointerId)
    el.classList.add('is-dragging')
  }
  const onPointerMove = (e) => {
    const s = dragState.current
    if (!s.active) return
    const dx = e.clientX - s.startX
    if (Math.abs(dx) > 4) s.moved = true
    trackRef.current.scrollLeft = s.startScroll - dx * 1.5
  }
  const onPointerUp = (e) => {
    const s = dragState.current
    if (!s.active) return
    s.active = false
    trackRef.current.classList.remove('is-dragging')
    try { trackRef.current.releasePointerCapture(e.pointerId) } catch {}
  }
  const onClickCapture = (e) => {
    if (dragState.current.moved) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <section className="section" id="kollekcio" ref={ref}>
      <div className="container">
        <div className="collection-top reveal">
          <div>
            <span className="eyebrow">Kollekció</span>
            <h2 className="section-h2">Kollekció <em>2025</em></h2>
          </div>
          {/*<a href="#kapcsolat" className="link-arrow">Teljes kollekcióhoz →</a>*/}
        </div>
      </div>

      <div className="collection-carousel reveal">
        <button
          type="button"
          className="collection-arrow collection-arrow-prev"
          onClick={() => scrollByStep(-1)}
          aria-label="Előző"
          disabled={!canPrev}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 6 9 12 15 18" /></svg>
        </button>

        <div
          className="collection-track"
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onClickCapture={onClickCapture}
        >
          {items.map(item => (
            <Link
              to={`/collections/${item.slug}`}
              className="collection-item"
              key={item.slug}
              draggable={false}
            >
              <div className="collection-item-img">
                <img src={item.img} alt={`${item.name} esküvői ruha`} draggable={false} />
                <div className="collection-item-meta">
                  <span className="collection-name">{item.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="collection-arrow collection-arrow-next"
          onClick={() => scrollByStep(1)}
          aria-label="Következő"
          disabled={!canNext}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
        </button>
      </div>
    </section>
  )
}
