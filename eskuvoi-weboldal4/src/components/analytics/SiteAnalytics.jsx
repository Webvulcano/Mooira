'use client'

import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import ClickTracker from './ClickTracker'

// Az oldalt csak a CMS admin framelheti (CSP frame-ancestors) → a framelt megtekintés
// szerkesztő-előnézet, nem látogató.
function beforeSend(event) {
  return window.self !== window.top ? null : event
}

export default function SiteAnalytics() {
  return (
    <>
      <Analytics beforeSend={beforeSend} />
      <SpeedInsights beforeSend={beforeSend} />
      <ClickTracker />
    </>
  )
}
