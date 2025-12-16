import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react'
import './MegaMenu.css'

export interface MegaMenuRef {
  close: () => void
}

const MegaMenu = forwardRef<MegaMenuRef>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const menuItems = [
    {
      title: 'Proje Hakkında',
      link: '#about'
    },
    {
      title: 'Villalar',
      link: '#villas'
    },
    {
      title: 'Yatırımcılar İçin',
      link: '#investors'
    },
    {
      title: 'İletişim',
      link: '#contact'
    }
  ]

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 400) // Animasyon süresi ile eşleşmeli
  }

  const handleMenuClick = (link: string) => {
    handleClose()
    const element = document.querySelector(link)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
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

  return (
    <div className="mega-menu">
      <div>
        <input 
          id="checkbox2" 
          type="checkbox" 
          checked={isOpen}
          onChange={(e) => {
            if (e.target.checked) {
              setIsOpen(true)
            } else {
              handleClose()
            }
          }}
        />
        <label 
          className={`toggle toggle2 ${isOpen ? 'active' : ''}`}
          htmlFor="checkbox2"
        >
          <div id="bar4" className="bars"></div>
          <div id="bar5" className="bars"></div>
          <div id="bar6" className="bars"></div>
        </label>
      </div>
      <span className="menu-button_text">{isOpen ? 'KAPAT' : 'MENÜ'}</span>
      
      {isOpen && (
        <>
          <div 
            className={`mega-menu-overlay ${isClosing ? 'closing' : ''}`} 
            onClick={handleClose}
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
                  <button className="genplan-btn" onClick={() => console.log('Genel Plan')}></button>
                </div>
              </div>
            </div>
            <div className="mega-menu-footer">
              <div className="contact-item">
                 <span>PHONE</span>
                 <span>+34 (951) 870-700</span>
              </div>
              <div className="contact-item">
                 <span>EMAIL</span>
                 <span>INFO@HORIZONTE-VILLAGE.COM</span>
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
