import { useState, useEffect, useRef, useCallback } from 'react'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navClass, setNavClass] = useState('video-top nav-hidden')
  const navRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    function updateNav() {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const atTop = window.scrollY < 4
        const isDesktop = window.innerWidth > 900
        let cls = ''
        if (atTop) cls += 'video-top'
        if (atTop && isDesktop) cls += ' nav-hidden'
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
  }, [])

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
        <a href="#" className="nav-logo">mooira</a>
        <ul className="nav-links">
          <li><a href="#folyamat">Folyamat</a></li>
          <li><a href="#velemenyek">Vélemények</a></li>
          <li><a href="#galeria">Galéria</a></li>
          <li><a href="#arak">Árak</a></li>
          <li><a href="#kapcsolat">Kapcsolat</a></li>
        </ul>
        <a href="#kapcsolat" className="nav-cta">Időpontot foglal</a>
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
          <a href="#folyamat" onClick={closeMenu}>Folyamat</a>
          <a href="#velemenyek" onClick={closeMenu}>Vélemények</a>
          <a href="#galeria" onClick={closeMenu}>Galéria</a>
          <a href="#arak" onClick={closeMenu}>Árak</a>
          <a href="#kapcsolat" onClick={closeMenu}>Kapcsolat</a>
        </nav>
        <div className="mobile-menu-footer">
          <a href="#kapcsolat" className="mobile-menu-cta" onClick={closeMenu}>Időpontot foglal</a>
          <div className="mobile-menu-contact">
            <a href="mailto:info@mooira.hu">info@mooira.hu</a>
            <a href="tel:+36705135869">+36 70 513 5869</a>
          </div>
        </div>
      </div>
    </>
  )
}
