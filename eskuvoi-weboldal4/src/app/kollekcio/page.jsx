import Navigation from '@/components/Navigation'
import BookConsultation from '@/components/BookConsultation'
import Footer from '@/components/Footer'
import { BRAND_NAME } from '@/content/site'
import { getCms } from '@/lib/cms'
import { cmsAttr } from '@/lib/cms-attr'

export async function generateMetadata() {
  const cms = await getCms()
  return { title: cms.text('kollekcio.seo.title') }
}

export default async function CollectionPage() {
  const cms = await getCms()
  // Galéria modul (admin → Kollekciók); csak képek, YouTube-elemek nélkül.
  const images = (cms.gallery()?.items ?? []).filter((it) => it.src)

  return (
    <>
      <Navigation standalone />

      <main className="cg">
        <header className="cg-head">
          <h1 className="cg-title header-style" {...cmsAttr('kollekcio.head.title')}>{cms.text('kollekcio.head.title')}</h1>
          <p className="cg-sub p-style" {...cmsAttr('kollekcio.head.subtitle')}>{cms.text('kollekcio.head.subtitle')}</p>
        </header>

        <div className="cg-grid">
          {images.map(({ src, width, height, alt }) => (
            <img key={src} src={src} width={width} height={height} alt={alt || `${BRAND_NAME} menyasszonyi ruha`} loading="lazy" decoding="async" />
          ))}
        </div>
      </main>

      <BookConsultation />
      <Footer />
    </>
  )
}
