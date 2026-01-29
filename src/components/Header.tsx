import React, { useState, useEffect, useRef } from 'react'
import MegaMenu, { MegaMenuRef } from './MegaMenu'
import { CONTACT_INFO } from '../constants'
import './Header.css'

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false)
  const megaMenuRef = useRef<MegaMenuRef>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      // Sticky header after 30vh
      setIsSticky(scrollY > windowHeight * 0.3)
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
      const lenisInstance = (window as any).lenis
      if (lenisInstance) {
        if (isMegaMenuOpen) {
          setTimeout(() => {
            lenisInstance.start()
            lenisInstance.scrollTo(0, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
          }, 400)
        } else {
          lenisInstance.scrollTo(0, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      window.location.href = '/'
    }
  }

  return (
    <header className={`header ${isSticky || window.location.pathname !== '/' ? 'header-sticky' : ''}`}>
      <div className="header-container">
        {/* Sol taraf */}
        <div className="header-left">
          <MegaMenu ref={megaMenuRef} />
        </div>

        {/* Orta - Logo (Sticky durumuna göre değişir) */}
        <div className="header-center">
          <div id="header-logo" className="header-logo-permanent" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src={(isSticky || window.location.pathname !== '/') ? "/hira-nova-logo.png" : "/beyaz-logo.png"} alt="HiraNova" />
          </div>
        </div>

        {/* Sağ taraf */}
        <div className="header-right">
          <a href={`tel:${CONTACT_INFO.whatsapp}`} className="phone-link">
            {CONTACT_INFO.phoneDisplay}
          </a>
          <button className="reservation-btn" onClick={handleReservation}>
            Rezervasyon Yap
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

