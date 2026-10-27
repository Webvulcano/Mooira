import Navigation from '@/components/Navigation'
import BookConsultation from '@/components/BookConsultation'
import Footer from '@/components/Footer'
import { BRAND_NAME } from '@/lib/site'

// public/kollekcio-galeria/01..42.webp — [szélesség, magasság] a layout-ugrás ellen
const sizes = [
  [1000, 1333],
  [1000, 666],
  [1000, 1500],
  [1000, 750],
  [1000, 750],
  [1000, 999],
  [1000, 1500],
  [1000, 1500],
  [1000, 1500],
  [668, 1000],
  [1000, 1500],
  [1000, 1498],
  [1000, 1500],
  [911, 1366],
  [1000, 1500],
  [1000, 667],
  [1000, 1500],
  [1000, 1500],
  [1000, 1501],
  [1000, 1500],
  [1000, 667],
  [1000, 1501],
  [1000, 1500],
  [1000, 1500],
  [1000, 1503],
  [1000, 1500],
  [1000, 1500],
  [1000, 1500],
  [1000, 1500],
  [1000, 1500],
  [1000, 1500],
  [1000, 1567],
  [1000, 1500],
  [1000, 1500],
  [1000, 750],
  [1000, 1500],
  [1000, 1500],
  [1000, 1500],
  [1000, 1500],
  [1000, 1512],
  [1000, 1500],
  [1000, 1500],
]
const images = sizes.map(([w, h], i) => ({ src: `/kollekcio-galeria/${String(i + 1).padStart(2, '0')}.webp`, w, h }))

export const metadata = {
  title: `Kollekciók — ${BRAND_NAME}`,
}

export default function CollectionPage() {
  return (
    <>
      <Navigation standalone />

      <main className="cg">
        <header className="cg-head">
          <h1 className="cg-title">Kollekciók</h1>
          <p className="cg-sub p-style">Nézd meg, milyen ruhák születtek eddig — aztán mondd el, a Tiéd milyen legyen.</p>
        </header>

        <div className="cg-grid">
          {images.map(({ src, w, h }) => (
            <img key={src} src={src} width={w} height={h} alt={`${BRAND_NAME} menyasszonyi ruha`} loading="lazy" decoding="async" />
          ))}
        </div>
      </main>

      <BookConsultation />
      <Footer />
    </>
  )
}
