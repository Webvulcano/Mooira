import Loader from '@/components/Loader'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Collection from '@/components/Collection'
import About from '@/components/About' // eslint-disable-line no-unused-vars -- kikommentezve, visszahozható
import CoutureIntro from '@/components/CoutureIntro'
import ImageTextSection from '@/components/ImageTextSection'
import Couture from '@/components/Couture'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing' // eslint-disable-line no-unused-vars -- A variáns kikommentezve, visszahozható
import PricingFull from '@/components/PricingFull'
import BookConsultation from '@/components/BookConsultation'
import Footer from '@/components/Footer'
import CopyToast from '@/components/CopyToast'
import { COLLECTION, TESTIMONIALS, PRICING, FIND_DRESS, FITTING } from '@/content/site'
import { getCms } from '@/lib/cms'

export async function generateMetadata() {
  const cms = await getCms()
  return {
    title: cms.text('home.seo.title'),
    description: cms.text('home.seo.description'),
  }
}

// A szekciók kliens komponensek (animációk) → a CMS-tartalmat itt, szerveren olvassuk ki, és sima adatként adjuk át.
export default async function HomePage() {
  const cms = await getCms()

  const couture = {
    label: cms.text('home.couture.label'),
    title: cms.lines('home.couture.title'),
    body: cms.rich('home.couture.body'),
    image: cms.image('home.couture.image'),
  }
  const about = {
    label: cms.text('home.about.label'),
    name: cms.text('home.about.name'),
    body: cms.rich('home.about.body'),
    cta: cms.text('home.about.cta'),
    image: cms.image('home.about.image'),
  }
  const carousel = cms.images('home.collection.carousel')
  const collection = {
    title: cms.text('home.collection.title'),
    ctaTitle: cms.text('home.collection.cta_title'),
    ctaSub: cms.text('home.collection.cta_sub'),
    images: carousel.length ? carousel : COLLECTION.fallbackImages,
  }
  // Vélemények modul (admin → Vélemények); amíg üres, a kódbeli lista látszik.
  const reviews = cms.reviews() ?? []
  const testimonials = {
    title: cms.text('home.testimonials.title'),
    slides: reviews.length ? reviews.map((r) => ({ quote: r.body, cite: r.author })) : TESTIMONIALS.fallback,
  }
  const pricingImages = cms.images('home.pricing.images')
  const pricing = {
    title: cms.lines('home.pricing.title'),
    cards: cms.list('home.pricing.cards'),
    images: pricingImages.length ? pricingImages : PRICING.images,
  }

  return (
    <>
      <Loader />
      <Navigation />
      <Hero tagline={cms.text('home.hero.tagline')} />
      <Couture {...couture} />
      {/* „Ismerd meg a tervezőt" — kikommentezve 2026-11-16, helyette CoutureIntro */}
      {/* <About {...about} /> */}
      <CoutureIntro />
      <Collection {...collection} />
      {/* „Találd meg a tökéletes ruhát" — Couture-stílusú szekció a Vélemények fölött (2026-11-16) */}
      <ImageTextSection id="ruhavalasztas" {...FIND_DRESS} />
      <Testimonials {...testimonials} />
      {/* „Ruhapróba, ami Rólad szól" — Csomagok fölött, kép jobbra (2026-11-16) */}
      <ImageTextSection id="ruhaproba" reverse {...FITTING} />
      {/* A variáns (kép + szöveg cikcakk) — kikommentezve 2026-11-16 (Lehel), helyette a B variáns. */}
      {/* <Pricing {...pricing} /> */}
      {/* B variáns: 3 kép, felirat a képen (desktop: egymás mellett, mobil: egymás alatt) */}
      <PricingFull {...pricing} />
      <BookConsultation />
      <Footer />
      <CopyToast />
    </>
  )
}

