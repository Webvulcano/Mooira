import Navigation from '@/components/Navigation'
import BookConsultation from '@/components/BookConsultation'
import Footer from '@/components/Footer'
import PhotoGallery from '@/components/PhotoGallery'
import { BRAND_NAME } from '@/content/site'
import { getCms } from '@/lib/cms'
import { cmsAttr } from '@/lib/cms-attr'

export async function generateMetadata() {
  const cms = await getCms()
  return { title: cms.text('kollekcio.seo.title') }
}

export default async function CollectionPage({ searchParams }) {
  // ?kep=<src> → a főoldali „Mooira pillanatok” képére kattintva ez a kép nyílik meg nagyban (2026-11-16)
  const { kep } = (await searchParams) ?? {}
  const cms = await getCms()
  // Galéria modul (admin → Mooira pillanatok); csak képek, YouTube-elemek nélkül.
  const images = (cms.gallery()?.items ?? []).filter((it) => it.src)

  return (
    <>
      <Navigation standalone />

      <main className="cg">
        <header className="cg-head">
          <h1 className="cg-title header-style" {...cmsAttr('kollekcio.head.title')}>{cms.text('kollekcio.head.title')}</h1>
          <p className="cg-sub p-style" {...cmsAttr('kollekcio.head.subtitle')}>{cms.text('kollekcio.head.subtitle')}</p>
        </header>

        <PhotoGallery images={images} initialSrc={typeof kep === 'string' ? kep : null} fallbackAlt={`${BRAND_NAME} menyasszonyi ruha`} />
      </main>

      <BookConsultation />
      <Footer />
    </>
  )
}
