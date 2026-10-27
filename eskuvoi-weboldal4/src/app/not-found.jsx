import Link from 'next/link'
import Navigation from '@/components/Navigation'
import BookConsultation from '@/components/BookConsultation'
import Footer from '@/components/Footer'
import { BRAND_NAME } from '@/content/site'

export const metadata = {
  title: `Az oldal nem található — ${BRAND_NAME}`,
}

export default function NotFoundPage() {
  return (
    <>
      <Navigation standalone />

      <main className="nf">
        <picture className="nf-media">
          <source media="(max-width: 767px)" srcSet="/404-vazlat-mobil.webp" />
          <img
            src="/404-vazlat.webp"
            alt="Ceruzás menyasszonyiruha-vázlat"
            width="1042"
            height="1510"
          />
        </picture>

        <div className="nf-content">
          <p className="nf-code">404</p>
          <h1 className="nf-title">Ez az oldal még csak vázlat.</h1>
          <div className="nf-actions">
            <Link href="/" className="nf-btn nf-btn--solid">Vissza a főoldalra</Link>
          </div>
        </div>
      </main>

      <BookConsultation />
      <Footer />
    </>
  )
}
