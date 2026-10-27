import { BRAND_NAME, CITY_IN, OWNER_NAME } from '@/lib/site'
import SiteAnalytics from '@/components/analytics/SiteAnalytics'
import '@/styles/tailwind.css'
import '@/styles/globals.css'

export const metadata = {
  title: `${BRAND_NAME.toLowerCase()} — Egyedi Esküvői Ruhák | ${OWNER_NAME}`,
  description: `Egyedi esküvői ruhák tervezése és készítése ${CITY_IN}. ${OWNER_NAME} — 2014 óta, 200+ elkészült ruha.`,
}

export default function RootLayout({ children }) {
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
        {children}
        <SiteAnalytics />
      </body>
    </html>
  )
}
