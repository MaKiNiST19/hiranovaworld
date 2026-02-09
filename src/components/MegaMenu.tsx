import { useState, useEffect, useImperativeHandle, forwardRef } from 'react'
import { Link } from 'react-router-dom'
import './MegaMenu.css'

export interface MegaMenuRef {
  close: () => void
}

const MegaMenu = forwardRef<MegaMenuRef>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const menuItems = [
    { title: 'SUİTLER & VİLLALAR', link: '/suits-and-villas' },
    { title: 'TESİSİMİZ', link: '/facility' },
    { title: "HİRANOVA'DA YAŞAM", link: '/life-at-hiranova' },
    { title: 'RESTORAN', link: '/restaurant' },
    { title: 'KONUM AVANTAJLARI', link: '/location' },
    { title: 'GALERİ', link: '/gallery' },
    { title: 'İLETİŞİM', link: '/contact' }
  ]

  const handleClose = () => {
    if (isClosing || !isOpen) return
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 600) // Matches CSS transition
  }

  const handleMenuClick = (link: string) => {
    handleClose();
    // Use window.location as standard or if using react-router properly, just navigate
    // Given the current project structure, window.location.href is safest for full page reload triggers if needed
    window.location.href = link;
  }

  useImperativeHandle(ref, () => ({
    close: handleClose
  }))

  const toggleMenu = () => {
    if (isClosing) return
    if (isOpen) {
      handleClose()
    } else {
      setIsOpen(true)
    }
  }

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen])

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('mega-menu-open')
    } else {
      document.body.style.overflow = ''
      document.body.classList.remove('mega-menu-open')
    }
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('mega-menu-open')
    }
  }, [isOpen])

  return (
    <div className="mega-menu-wrapper">
      {/* Trigger Button */}
      <div className="menu-trigger" onClick={toggleMenu}>
        <div className={`hamburger-icon ${isOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
        </div>
        <span className="menu-trigger-text">{isOpen ? 'KAPAT' : 'MENÜ'}</span>
      </div>

      {/* Menu Content Overlay */}
      {isOpen && (
        <div className={`mega-menu-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
          <div className="mega-menu-container" onClick={(e) => e.stopPropagation()}>

            {/* Top Bar: Close Button */}
            <div className="mega-menu-top">
              <button className="mega-menu-close" onClick={handleClose}>
                <div className="close-circle">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 13M1 13L13 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span>KAPAT</span>
              </button>
            </div>

            <div className="mega-menu-main-content">
              {/* Left Column: Navigation & Info */}
              <div className="mega-menu-left-col">
                <nav className="mega-menu-navigation">
                  {menuItems.map((item, index) => (
                    <div key={index} className="mega-menu-link-wrapper">
                      <a
                        href={item.link}
                        className="mega-menu-link"
                        onClick={(e) => {
                          e.preventDefault();
                          handleMenuClick(item.link);
                        }}
                      >
                        {item.title}
                      </a>
                    </div>
                  ))}
                </nav>

                <div className="mega-menu-contact-info">
                  <div className="contact-block">
                    <p>URLA / GÜZELBAHÇE</p>
                    <p>İZMİR, TÜRKİYE</p>
                  </div>
                  <div className="contact-block">
                    <p>T: +90 (232) 000 00 00</p>
                    <p>E: INFO@HIRANOVAWORLD.COM</p>
                  </div>
                  <div className="mega-menu-socials">
                    <a href="#" className="social-icon">INSTAGRAM</a>
                    <a href="#" className="social-icon">FACEBOOK</a>
                  </div>
                </div>
              </div>

              {/* Right Column: Featured Image */}
              <div className="mega-menu-right-col">
                <div className="featured-image-container">
                  <img src="/suit-yatak-odasi.jpg" alt="Featured Interior" className="mega-menu-featured-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
})

MegaMenu.displayName = 'MegaMenu'

export default MegaMenu
