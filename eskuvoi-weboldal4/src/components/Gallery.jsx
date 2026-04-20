import { useRef } from 'react'
import { useReveal } from './useReveal'

const images = [
  { src: 'http://mooira.hu/wp-content/uploads/2015/01/foto-282.jpg',           cls: 'portrait' },
  { src: 'http://mooira.hu/wp-content/uploads/2015/01/IMG_0039.jpg',           cls: 'portrait' },
  { src: 'http://mooira.hu/wp-content/uploads/2015/01/BAGA-2498-1280x853.jpg', cls: 'landscape' },
  { src: 'http://mooira.hu/wp-content/uploads/2018/10/image3.jpeg',            cls: 'portrait' },
  { src: 'http://mooira.hu/wp-content/uploads/2015/01/foto-321.jpg',           cls: 'portrait' },
  { src: 'http://mooira.hu/wp-content/uploads/2015/01/img_081.jpg',            cls: 'portrait' },
  { src: 'http://mooira.hu/wp-content/uploads/2015/01/foto-311.jpg',           cls: 'portrait' },
  { src: 'http://mooira.hu/wp-content/uploads/2015/01/foto-071.jpg',           cls: 'portrait' },
]

export default function Gallery() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)

  useReveal(sectionRef)

  const onMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - trackRef.current.offsetLeft
    scrollStart.current = trackRef.current.scrollLeft
    trackRef.current.style.cursor = 'grabbing'
  }
  const onMouseLeave = () => {
    isDragging.current = false
    trackRef.current.style.cursor = 'grab'
  }
  const onMouseUp = () => {
    isDragging.current = false
    trackRef.current.style.cursor = 'grab'
  }
  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = scrollStart.current - (x - startX.current) * 1.5
  }

  return (
    <section className="gallery-section" id="galeria" ref={sectionRef}>
      <div className="gallery-header reveal">
        <div>
          <span className="eyebrow">Galéria</span>
          <h2 className="section-h2">Az <em>elkészült</em> ruhák</h2>
        </div>
        <a href="#kapcsolat" className="link-arrow">Időpontot foglalok →</a>
      </div>
      <div
        className="gallery-track"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {images.map((img, i) => (
          <img key={i} className={img.cls} src={img.src} alt="mooira esküvői ruha" />
        ))}
      </div>
    </section>
  )
}
