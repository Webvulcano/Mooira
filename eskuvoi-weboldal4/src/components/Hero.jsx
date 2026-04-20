export default function Hero() {
  return (
    <section className="hero-video" id="heroVideo">
      <video className="hero-video-bg" autoPlay muted loop playsInline preload="auto">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay"></div>
      <div className="hero-video-content">
        <div className="hero-video-titles">
          <div className="hero-video-brand">mooira</div>
          <div className="hero-video-tagline">Egyedi esküvői ruhák · Tóth Eszter</div>
        </div>
      </div>
      <a href="#quote" className="hero-video-scroll" aria-label="Görgetés">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  )
}
