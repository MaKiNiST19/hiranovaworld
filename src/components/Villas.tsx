import React from 'react'
import './Villas.css'

const Villas: React.FC = () => {
  const villas = [
    {
      type: 'Garden Villas',
      description: 'Bahçeli evler',
      size: '120-180 m²',
      features: ['Özel bahçe', 'Doğal peyzaj', 'Enerji verimli tasarım', 'Modern konfor'],
      image: '/yakin.jpg'
    },
    {
      type: 'EcoSuites / FairyHomes',
      description: 'Otel birimleri',
      size: '45-80 m²',
      features: ['Ekolojik mimari', 'Akıllı otomasyon', 'Doğa manzarası', 'Sürdürülebilir malzemeler'],
      image: '/uzak.jpg'
    }
  ]

  return (
    <section id="villas" className="section villas-section">
      <div className="container">
        <h2 className="section-title">🏘️ Villalar & EcoSuites</h2>
        <div className="villas-grid">
          {villas.map((villa, index) => (
            <div key={index} className="villa-card">
              <div className="villa-image">
                <img src={villa.image} alt={villa.type} loading="lazy" />
                <div className="villa-badge">{villa.size}</div>
              </div>
              <div className="villa-content">
                <h3>{villa.type}</h3>
                <p className="villa-description">{villa.description}</p>
                <ul className="villa-features">
                  {villa.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Villas















