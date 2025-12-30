import React from 'react'
import { CONTACT_INFO } from '../constants'
import './Contact.css'

const Contact: React.FC = () => {
  const whatsappMessage = encodeURIComponent('Merhaba, HiraNova hakkında bilgi almak istiyorum.')
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`

  return (
    <section id="contact" className="contact-section">
      {/* Decorative Lines */}
      <div className="contact-decor-lines">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="decor-line"></div>
        ))}
      </div>

      <div className="contact-container">
        {/* Main Title */}
        <div className="contact-header">
          <h2 className="contact-title">Projemiz İlginizi Çekti mi?</h2>
          <p className="contact-subtitle">Bizimle İletişime Geçin</p>
        </div>

        {/* Logo / Brand */}
        <div className="contact-brand">
          <img src="/beyaz-logo.png" alt="HiraNova Logo" className="contact-logo" />
          <p className="contact-tagline">Yetkili Satış Danışmanı</p>
        </div>

        {/* Contact Info */}
        <div className="contact-info-grid">
          <a href={`tel:${CONTACT_INFO.phone}`} className="contact-item">
            <span className="contact-icon">📞</span>
            <span className="contact-text">{CONTACT_INFO.phone}</span>
          </a>

          <a href={`mailto:${CONTACT_INFO.email}`} className="contact-item">
            <span className="contact-icon">✉️</span>
            <span className="contact-text">{CONTACT_INFO.email}</span>
          </a>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-item whatsapp-item">
            <span className="contact-icon">💬</span>
            <span className="contact-text">WhatsApp ile Yazın</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
