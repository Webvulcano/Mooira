import Navigation from '@/components/Navigation'
import BookConsultation from '@/components/BookConsultation'
import Footer from '@/components/Footer'
import RichText from '@/components/cms/RichText'
import { ROLUNK_PAGE } from '@/content/site'
import { getCms } from '@/lib/cms'
import { cmsAttr } from '@/lib/cms-attr'

export async function generateMetadata() {
  const cms = await getCms()
  return { title: cms.text('rolunk.seo.title') }
}

// Rólunk / A márka mögött (Eszter „Menüpont kifejtése”, 2026-11): szöveg · nagy kép · szöveg · 3 kép · tervező.
export default async function RolunkPage() {
  const cms = await getCms()
  const wide = cms.image('rolunk.brand.wide_image')
  const uploadedTrio = cms.images('rolunk.style.images')
  // amíg az adminban nincs feltöltve kép, a slot üres → kódbeli 3 kép
  const trio = uploadedTrio.length ? uploadedTrio : ROLUNK_PAGE.trio
  const portrait = cms.image('rolunk.designer.portrait')

  return (
    <>
      <Navigation standalone />

      <main className="ro">
        <header className="ro-head">
          <p className="about-label section-label" {...cmsAttr('rolunk.brand.label')}>{cms.text('rolunk.brand.label')}</p>
          <h1 className="about-name couture-title" {...cmsAttr('rolunk.brand.title')}>
            {cms.lines('rolunk.brand.title').map((line, i) => <span key={i}>{i > 0 && <br />}{line}</span>)}
          </h1>
          <RichText className="ro-text" value={cms.rich('rolunk.brand.intro')} {...cmsAttr('rolunk.brand.intro')} />
        </header>

        {wide && (
          <figure className="ro-wide" {...cmsAttr('rolunk.brand.wide_image')}>
            <img src={wide.src} width={wide.width} height={wide.height} alt={wide.alt} />
          </figure>
        )}

        <RichText className="ro-text ro-text--center" value={cms.rich('rolunk.style.body')} {...cmsAttr('rolunk.style.body')} />

        <div className="ro-trio" {...cmsAttr('rolunk.style.images')}>
          {trio.slice(0, 3).map((img) => (
            <img key={img.src} src={img.src} width={img.width} height={img.height} alt={img.alt} loading="lazy" decoding="async" />
          ))}
        </div>

        <section className="ro-designer">
          <div className="about-grid about-grid--reverse">
            <div className="about-photos" {...cmsAttr('rolunk.designer.portrait')}>
              {portrait && <img className="about-photo-main" src={portrait.src} alt={portrait.alt} loading="lazy" />}
            </div>
            <div className="about-text">
              <p className="about-label section-label" {...cmsAttr('rolunk.designer.label')}>{cms.text('rolunk.designer.label')}</p>
              <h2 className="about-name couture-title" {...cmsAttr('rolunk.designer.title')}>{cms.text('rolunk.designer.title')}</h2>
              <RichText value={cms.rich('rolunk.designer.body')} {...cmsAttr('rolunk.designer.body')} />
              <a href="#kapcsolat" className="about-cta" {...cmsAttr('rolunk.designer.cta')}>{cms.text('rolunk.designer.cta')}</a>
            </div>
          </div>
        </section>
      </main>

      <BookConsultation />
      <Footer />
    </>
  )
}
