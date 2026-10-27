import { BRAND_NAME, CONTACT_EMAIL, CONTACT_MAILTO, FACEBOOK_URL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <a href="#" aria-label={`${BRAND_NAME.toLowerCase()} – vissza a tetejére`}>
            <img className="site-footer__logo" src="/logo/full-logo-black.png" alt={`${BRAND_NAME.toLowerCase()} couture`} />
          </a>
          <div className="site-footer__legal">
            <p>© {new Date().getFullYear()} {BRAND_NAME.toLowerCase()} · Minden jog fenntartva.</p>
            <p>Készítette: <a href="https://webvulcano.hu" target="_blank" rel="noopener" className="site-footer__credit">WebVulcano.hu</a></p>
          </div>
        </div>

        <div className="site-footer__contact">
          <div className="site-footer__block">
            <span className="about-label">Elérhetőség</span>
            <a href={PHONE_TEL} className="site-footer__value">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>
              {PHONE_DISPLAY}
            </a>
            <a href={CONTACT_MAILTO} className="site-footer__value">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="site-footer__block">
            <span className="about-label">Kövess minket</span>
            <div className="site-footer__socials">
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></svg>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
