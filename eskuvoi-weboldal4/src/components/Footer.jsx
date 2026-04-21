export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo">mooira</div>
          <p className="footer-desc">Egyedi esküvői ruhák tervezése és készítése Győrben, 2014 óta. Tóth Eszter kézimunkája — minden ruha egyedi és személyre szabott.</p>
        </div>
        <div className="footer-col">
          <h4>Navigáció</h4>
          <ul>
            <li><a href="#kollekcio">Kollekció</a></li>
            <li><a href="#bemutatkozas">Bemutatkozás</a></li>
            <li><a href="#galeria">Galéria</a></li>
            <li><a href="#folyamat">Folyamat</a></li>
            <li><a href="#arak">Árak</a></li>
            <li><a href="#velemenyek">Vélemények</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Szolgáltatások</h4>
          <ul>
            <li><a href="#arak">Egyedi tervezés</a></li>
            <li><a href="#arak">Kollekcióból</a></li>
            <li><a href="#arak">Bérlés</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Kapcsolat</h4>
          <ul>
            <li>
              <a href="mailto:info@mooira.hu" data-copy-email="info@mooira.hu">
                info@mooira.hu
                <span className="copy-icon">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><path d="M3 11H2.5A1.5 1.5 0 0 1 1 9.5v-7A1.5 1.5 0 0 1 2.5 1h7A1.5 1.5 0 0 1 11 2.5V3" stroke="currentColor" strokeWidth="1.4" /></svg>
                </span>
              </a>
            </li>
            <li><a href="tel:+36705135869">+36 70 513 5869</a></li>
            <li><a href="https://mooira.hu" target="_blank" rel="noreferrer">www.mooira.hu</a></li>
            <li><a href="#">Győr, Magyarország</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} mooira · Tóth Eszter. Minden jog fenntartva.</p>
        <p>Tervezte: Bognár Lehel</p>
      </div>
    </footer>
  )
}
