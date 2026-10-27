import { useState, useEffect, useRef, useCallback } from 'react'

// standalone: aloldalon (pl. 404) használva — mindig látszik, a szekció-linkek a főoldalra mutatnak
export default function Navigation({ standalone = false }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navClass, setNavClass] = useState(standalone ? '' : 'video-top nav-hidden')
  const base = standalone ? '/' : ''
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
          <img src="/logo/full-logo-black.png" alt="mooira" />
        </a>
        <ul className="nav-links">
          <li><a href={`${base}#folyamat`} className="p-style">Folyamat</a></li>
          <li><a href={`${base}#velemenyek`} className="p-style">Vélemények</a></li>
          <li><a href={`${base}#galeria`} className="p-style">Galéria</a></li>
          <li><a href={`${base}#arak`} className="p-style">Árak</a></li>
          <li><a href="#kapcsolat" className="p-style">Kapcsolat</a></li>
        </ul>
        <a href="#kapcsolat" className="nav-cta">Időpontot foglalok</a>
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
          <a href={`${base}#folyamat`} onClick={closeMenu}>Folyamat</a>
          <a href={`${base}#velemenyek`} onClick={closeMenu}>Vélemények</a>
          <a href={`${base}#galeria`} onClick={closeMenu}>Galéria</a>
          <a href={`${base}#arak`} onClick={closeMenu}>Árak</a>
          <a href="#kapcsolat" onClick={closeMenu}>Kapcsolat</a>
        </nav>
        <div className="mobile-menu-footer">
          <a href="#kapcsolat" className="mobile-menu-cta" onClick={closeMenu}>Időpontot foglalok</a>
          <div className="mobile-menu-contact">
            <a href="mailto:info@mooira.hu">info@mooira.hu</a>
            <a href="tel:+36705135869">+36 70 513 5869</a>
          </div>
        </div>
      </div>
    </>
  )
}
