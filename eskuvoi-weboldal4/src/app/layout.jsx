import SiteAnalytics from '@/components/analytics/SiteAnalytics'
import CmsBridge from '@/components/cms/CmsBridge'
import { SiteInfoProvider } from '@/components/SiteInfo'
import { SEO } from '@/content/site'
import { getCms } from '@/lib/cms'
import { siteInfoFromCms } from '@/lib/site-info'
import '@/styles/tailwind.css'
import '@/styles/globals.css'

// Alap (pl. 404-hez); a főoldal és a /kollekcio a CMS-ből írja felül (generateMetadata).
export const metadata = {
  title: SEO.title,
  description: SEO.description,
}

export default async function RootLayout({ children }) {
  const cms = await getCms()

  return (
    // data-scroll-behavior: oldalváltáskor a Next azonnal ugrik a tetejére (a CSS smooth scroll csak a horgonyokra hat)
    <html lang="hu" data-scroll-behavior="smooth">
      <head>
        {/* a CSS szó szerinti fontnevekre hivatkozik ('Plus Jakarta Sans', 'Jost') → next/font helyett marad a link */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SiteInfoProvider value={siteInfoFromCms(cms)}>{children}</SiteInfoProvider>
        <SiteAnalytics />
        <CmsBridge />
      </body>
    </html>
  )
}
