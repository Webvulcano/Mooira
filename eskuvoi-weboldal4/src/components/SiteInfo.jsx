'use client'

import { createContext, useContext } from 'react'

// Elérhetőségek (email, telefon, social) minden oldalon — a root layout tölti a CMS-ből.
const SiteInfoContext = createContext(null)

export function SiteInfoProvider({ value, children }) {
  return <SiteInfoContext.Provider value={value}>{children}</SiteInfoContext.Provider>
}

export function useSiteInfo() {
  return useContext(SiteInfoContext)
}
