import React, { useState, useEffect, useRef } from 'react'
import MegaMenu, { MegaMenuRef } from './MegaMenu'
import './Header.css'

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false)
  const megaMenuRef = useRef<MegaMenuRef>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const heroScrollRange = windowHeight * 3.5 // 350vh
      
      // Hero scroll'u bittikten sonra sticky olsun
      setIsSticky(scrollY > heroScrollRange)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleReservation = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleGeneralPlan = () => {
    console.log('Genel Plan')
  }

  const handleFounderPartnership = () => {
    const investorsSection = document.getElementById('investors')
    if (investorsSection) {
      investorsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLogoClick = () => {
    // Mega menü açıksa kapat
    const isMegaMenuOpen = document.body.classList.contains('mega-menu-open')
    if (isMegaMenuOpen && megaMenuRef.current) {
      megaMenuRef.current.close()
    }
    
    // Anasayfada mıyız kontrol et
    const isHomePage = window.location.pathname === '/' || 
                      window.location.pathname === '/index.html' ||
                      window.location.pathname === ''
    
    if (isHomePage) {
      // Mega menü kapanma animasyonunu bekle (400ms) sonra scroll
      if (isMegaMenuOpen) {
        setTimeout(() => {
          const lenisInstance = (window as any).lenis
          if (lenisInstance) {
            lenisInstance.start() // Lenis'i tekrar başlat
            lenisInstance.scrollTo(0, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
        }, 400) // Mega menü kapanma animasyon süresi
      } else {
        // Mega menü kapalıysa direkt scroll
        const lenisInstance = (window as any).lenis
        if (lenisInstance) {
          lenisInstance.scrollTo(0, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    } else {
      // Diğer sayfalarda ise anasayfaya git
      window.location.href = '/'
    }
  }

  return (
    <header className={`header ${isSticky ? 'header-sticky' : ''}`}>
      <div className="header-container">
        {/* Sol taraf */}
        <div className="header-left">
          <MegaMenu ref={megaMenuRef} />
          <button className="reservation-btn" onClick={handleReservation}>
            Rezervasyon Yap
          </button>
          <button className="general-plan-btn" onClick={handleGeneralPlan}>
            Genel Plan
          </button>
        </div>

        {/* Orta - Logo (scroll ile gelecek) */}
        <div className="header-center">
          <div id="header-logo" className="header-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src="/beyaz-logo.png" alt="HiraNova" />
          </div>
        </div>

        {/* Sağ taraf */}
        <div className="header-right">
          <a href="tel:+905551234567" className="phone-link">
            +90 555 123 45 67
          </a>
          <button className="founder-partnership-btn" onClick={handleFounderPartnership}>
            Kurucu Ortaklık
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

