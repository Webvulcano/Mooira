import Loader from '@/components/Loader'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Collection from '@/components/Collection'
import About from '@/components/About'
import Couture from '@/components/Couture'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import BookConsultation from '@/components/BookConsultation'
import Footer from '@/components/Footer'
import CopyToast from '@/components/CopyToast'
import { COLLECTION, TESTIMONIALS } from '@/content/site'
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
  const process = {
    title: cms.text('home.process.title'),
    steps: cms.list('home.process.steps'),
  }
  // Vélemények modul (admin → Vélemények); amíg üres, a kódbeli lista látszik.
  const reviews = cms.reviews() ?? []
  const testimonials = {
    title: cms.text('home.testimonials.title'),
    slides: reviews.length ? reviews.map((r) => ({ quote: r.body, cite: r.author })) : TESTIMONIALS.fallback,
  }
  const pricing = {
    title: cms.lines('home.pricing.title'),
    cards: cms.list('home.pricing.cards'),
  }

  return (
    <>
      <Loader />
      <Navigation />
      <Hero tagline={cms.text('home.hero.tagline')} />
      <Couture {...couture} />
      <About {...about} />
      <Collection {...collection} />
      <Process {...process} />
      <Testimonials {...testimonials} />
      <Pricing {...pricing} />
      <BookConsultation />
      <Footer />
      <CopyToast />
    </>
  )
}

