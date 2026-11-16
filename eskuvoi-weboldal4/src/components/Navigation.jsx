'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BRAND_NAME } from '@/content/site'
import { useSiteInfo } from './SiteInfo'

// standalone: aloldalon (pl. 404) használva — mindig látszik, a szekció-linkek a főoldalra mutatnak
export default function Navigation({ standalone = false }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navClass, setNavClass] = useState(standalone ? '' : 'video-top nav-hidden')
  const base = standalone ? '/' : ''
  const info = useSiteInfo()
  const pathname = usePathname()
  const cur = (path) => (pathname === path ? { 'aria-current': 'page' } : {})
  const navRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    function updateNav() {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const atTop = window.scrollY < 4
        let cls = ''
        if (atTop && !standalone) cls += 'video-top nav-hidden'
        setNavClass(cls.trim())
        if (navRef.current) {
          if (!atTop) {
            const nb = getComputedStyle(document.documentElement).getPropertyValue('--nav-bg').trim()
            navRef.current.style.background = window.scrollY > 60
              ? `rgba(${nb},0.98)`
              : `rgba(${nb},0.92)`
          } else {
            navRef.current.style.background = ''
          }
        }
      })
    }
    window.addEventListener('scroll', updateNav, { passive: true })
    window.addEventListener('resize', updateNav)
    updateNav()
    return () => {
      window.removeEventListener('scroll', updateNav)
      window.removeEventListener('resize', updateNav)
    }
  }, [standalone])

  const openMenu = useCallback(() => {
    setMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])
  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [])
  const toggleMenu = useCallback(() => menuOpen ? closeMenu() : openMenu(), [menuOpen, openMenu, closeMenu])

  const menuOpenClass = menuOpen ? ' menu-open' : ''

  return (
    <>
      <nav className={`nav${navClass ? ' ' + navClass : ''}${menuOpenClass}`} id="nav" ref={navRef}>
        <a href={standalone ? '/' : '#'} className="nav-logo">
          <img src="/logo/full-logo-black.png" alt={BRAND_NAME.toLowerCase()} />
        </a>
        <ul className="nav-links">
          {/* Eszter menüje (2026-11): Kezdőlap · Mooira pillanatok · Vélemények · Rólunk · [Időpontfoglalás] */}
          <li><Link href="/" className="p-style" {...cur('/')}>Kezdőlap</Link></li>
          <li><Link href="/pillanatok" className="p-style" {...cur('/pillanatok')}>Mooira pillanatok</Link></li>
          <li><a href={`${base}#velemenyek`} className="p-style">Vélemények</a></li>
          <li><Link href="/rolunk" className="p-style" {...cur('/rolunk')}>Rólunk</Link></li>
        </ul>
        <a href="#kapcsolat" className="nav-cta">Időpontfoglalás</a>
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={toggleMenu}
          aria-label="Menü megnyitása"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <nav className="mobile-nav-links">
          <Link href="/" onClick={closeMenu} {...cur('/')}>Kezdőlap</Link>
          <Link href="/pillanatok" onClick={closeMenu} {...cur('/pillanatok')}>Mooira pillanatok</Link>
          <a href={`${base}#velemenyek`} onClick={closeMenu}>Vélemények</a>
          <Link href="/rolunk" onClick={closeMenu} {...cur('/rolunk')}>Rólunk</Link>
        </nav>
        <div className="mobile-menu-footer">
          <a href="#kapcsolat" className="mobile-menu-cta" onClick={closeMenu}>Időpontfoglalás</a>
          <div className="mobile-menu-contact">
            <a href={info.mailto}>{info.email}</a>
            <a href={info.tel}>{info.phone}</a>
          </div>
        </div>
      </div>
    </>
  )
}
