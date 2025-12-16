import React, { useState } from 'react'
import './Contact.css'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted:', formData)
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const whatsappNumber = '905551234567' // Replace with actual number
  const whatsappMessage = encodeURIComponent('Merhaba, HiraNova hakkında bilgi almak istiyorum.')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">💬 İletişim / Rezervasyon</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Bize Ulaşın</h3>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Ankara Ofis</h4>
                <p>Adres bilgisi buraya eklenecek</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📱</span>
              <div>
                <h4>WhatsApp</h4>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                  Hemen Mesaj Gönder
                </a>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🗺️</span>
              <div>
                <h4>Konum</h4>
                <p>İzmir Güzelbahçe</p>
                <a 
                  href="https://www.google.com/maps/search/İzmir+Güzelbahçe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Google Maps'te Aç
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesajınız *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact













