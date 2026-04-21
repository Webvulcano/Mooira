import Loader from './components/Loader'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import QuoteStrip from './components/QuoteStrip'
import Collection from './components/Collection'
import About from './components/About'
import Gallery from './components/Gallery'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import BookConsultation from './components/BookConsultation'
import Footer from './components/Footer'
import FontTweaks from './components/FontTweaks'
import CopyToast from './components/CopyToast'
import { SpeedInsights } from "@vercel/speed-insights/react"


export default function App() {
  return (
    <>
      <Loader />
      <Navigation />
      <Hero />
      <QuoteStrip />
      <Collection />
      <About />
      <Gallery />
      <Process />
      <Testimonials />
      <Pricing />
      {/*<Contact />*/}
      <BookConsultation />
      <Footer />
      <FontTweaks />
      <CopyToast />
      <SpeedInsights />
    </>
  )
}
