import React, { useEffect, useRef } from 'react'
import './Hero.css'

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollY = window.scrollY
      // Parallax effect: image moves at sublte speed (reduced 10x)
      heroRef.current.style.transform = `translateY(${scrollY * 0.25}px)`
    }

    // Support Lenis if available
    const lenis = (window as any).lenis
    if (lenis) {
      lenis.on('scroll', handleScroll)
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      if (lenis) lenis.off('scroll', handleScroll)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="hero-section">
      <div ref={heroRef} className="hero-parallax-bg" style={{ backgroundImage: 'url(/hira-nova-hero.jpg)' }}></div>
      <div className="hero-overlay"></div>
      <div className="hero-bottom-fade"></div>
      <div className="hero-content-new">
        <h1 className="hero-main-title">
          <span>Hira Nova | Garden | Suit</span>
        </h1>
        <p className="hero-sub-title">Ev alana sadece bir anahtar değil,<br />yaşamın kendisi hediye ediliyor.</p>

        <div className="hero-cta-group">
          <button className="hero-cta-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="hero-cta-primary-inner">İletişime Geç</span>
          </button>
          <button className="hero-cta-secondary" onClick={() => document.getElementById('lifemodels')?.scrollIntoView({ behavior: 'smooth' })}>
            Modelleri İncele
          </button>
        </div>
      </div>

      <div className="hero-badge">
        <div className="badge-inner">
          <span className="badge-icon">✧</span>
          <span className="badge-text">Türkiye'de<br />TEK</span>
        </div>
      </div>
      <div className="hero-scroll-btn-wrapper">
        <button className="hero-scroll-btn" onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
        }}>
          <div className="hero-scroll-wheel"></div>
        </button>
      </div>
    </div>
  )
}

export default Hero
