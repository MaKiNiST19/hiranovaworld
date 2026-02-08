import { useState, useEffect, useImperativeHandle, forwardRef } from 'react'
import './MegaMenu.css'

export interface MegaMenuRef {
  close: () => void
}

const MegaMenu = forwardRef<MegaMenuRef>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const menuItems = [
    {
      title: 'Suitler & Villalar',
      link: '/suits-and-villas'
    },
    {
      title: 'Tesisimiz',
      link: '/facility'
    },
    {
      title: 'HiraNova\'da Yaşam',
      link: '/life-at-hiranova'
    },
    {
      title: 'Restoran',
      link: '/restaurant'
    },
    {
      title: 'Konum Avantajları',
      link: '/location'
    },
    {
      title: 'Galeri',
      link: '/gallery'
    },
    {
      title: 'Rezervasyon & Bilgi',
      link: '/contact' // Keeping contact for reservation/info as it's standard unless a specific booking page exists
    }
  ]

  const handleClose = () => {
    if (isClosing || !isOpen) return
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 450)
  }

  const handleMenuClick = (link: string) => {
    // Determine strict routing logic
    handleClose();
    if (link.startsWith('/')) {
      // Check if it's an anchor link on the same page or a different page
      if (link.includes('#')) {
        const [path, hash] = link.split('#');
        if (window.location.pathname === path || (path === '/' && window.location.pathname === '')) {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.location.href = link;
        }
      } else {
        // Standard navigation
        window.location.href = link;
      }
    } else {
      // Fallback or external links
      window.location.href = link;
    }
  }

  // Mega menü açıkken scroll'u engelle ve body'ye class ekle
  useEffect(() => {
    if (isOpen) {
      // Body scroll'u engelle
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      document.body.classList.add('mega-menu-open')

      // Lenis scroll'unu engelle
      const lenisInstance = (window as any).lenis
      if (lenisInstance) {
        lenisInstance.stop()
      }

      // Header yüksekliğini hesapla ve mega menü için top değerini ayarla
      const header = document.querySelector('.header')
      if (header) {
        const headerHeight = header.getBoundingClientRect().height
        const overlay = document.querySelector('.mega-menu-overlay') as HTMLElement
        const content = document.querySelector('.mega-menu-content') as HTMLElement
        if (overlay) overlay.style.top = `${headerHeight}px`
        if (content) content.style.top = `${headerHeight}px`
      }
    } else {
      // Scroll'u tekrar aktif et
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.body.classList.remove('mega-menu-open')

      // Lenis scroll'unu tekrar aktif et
      const lenisInstance = (window as any).lenis
      if (lenisInstance) {
        lenisInstance.start()
      }
    }

    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.body.classList.remove('mega-menu-open')

      // Cleanup: Lenis'i tekrar aktif et
      const lenisInstance = (window as any).lenis
      if (lenisInstance) {
        lenisInstance.start()
      }
    }
  }, [isOpen])

  // Header sticky durumunda mega menü pozisyonunu güncelle
  useEffect(() => {
    const updateMenuPosition = () => {
      if (isOpen) {
        const header = document.querySelector('.header')
        if (header) {
          const headerHeight = header.getBoundingClientRect().height
          const overlay = document.querySelector('.mega-menu-overlay') as HTMLElement
          const content = document.querySelector('.mega-menu-content') as HTMLElement
          if (overlay) overlay.style.top = `${headerHeight}px`
          if (content) content.style.top = `${headerHeight}px`
        }
      }
    }

    window.addEventListener('scroll', updateMenuPosition)
    window.addEventListener('resize', updateMenuPosition)

    return () => {
      window.removeEventListener('scroll', updateMenuPosition)
      window.removeEventListener('resize', updateMenuPosition)
    }
  }, [isOpen])

  // Ref ile dışarıdan close fonksiyonunu expose et
  useImperativeHandle(ref, () => ({
    close: handleClose
  }))

  const toggleMenu = () => {
    if (isClosing) return // Animasyon sırasında etkileşimi engelle

    if (isOpen) {
      handleClose()
    } else {
      setIsOpen(true)
    }
  }

  return (
    <div className="mega-menu" onClick={toggleMenu} style={{ cursor: 'pointer' }}>
      <div className={`mega-menu-toggle-wrapper ${isOpen ? 'active' : ''}`}>
        <div className={`toggle toggle2 ${isOpen ? 'active' : ''}`}>
          <div id="bar4" className="bars"></div>
          <div id="bar5" className="bars"></div>
          <div id="bar6" className="bars"></div>
        </div>
      </div>
      <span className="menu-button_text">{isOpen ? 'KAPAT' : 'MENÜ'}</span>

      {isOpen && (
        <>
          <div
            className={`mega-menu-overlay ${isClosing ? 'closing' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              handleClose()
            }}
          ></div>
          <div
            className={`mega-menu-content ${isClosing ? 'closing' : ''}`}
            onClick={(e) => {
              // Mega menu content'e tıklanınca kapanmasın, sadece overlay'e tıklanınca kapansın
              e.stopPropagation()
            }}
          >
            <div className="mega-menu-main">
              <div className="mega-menu-left">
                <nav className="mega-menu-nav">
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="mega-menu-item"
                      onClick={(e) => {
                        e.preventDefault()
                        handleMenuClick(item.link)
                      }}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="mega-menu-right">
                <div className="mega-menu-image">
                  {/* Button removed as requested */}
                </div>
              </div>
            </div>
            <div className="mega-menu-footer">
              <div className="contact-item">
                <span>PHONE</span>
                <span>+90 (232) 000 00 00</span>
              </div>
              <div className="contact-item">
                <span>EMAIL</span>
                <span>info@hiranovaworld.com</span>
              </div>
              <div className="contact-item">
                <span>SOCIALS</span>
                <span>FACEBOOK / INSTAGRAM / WHATSAPP</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
})

MegaMenu.displayName = 'MegaMenu'

export default MegaMenu
