import React from 'react'
import './Experiences.css'

const Experiences: React.FC = () => {
  const experiences = [
    {
      icon: '🌳',
      title: 'Şükür Ağacı',
      description: 'Doğanın kalbinde, huzur dolu anlar için özel alan'
    },
    {
      icon: '🌈',
      title: 'Gökkuşağı Kapısı',
      description: 'Renkli ve büyülü bir giriş deneyimi'
    },
    {
      icon: '👶',
      title: 'Çocuk Kulübü',
      description: 'Çocuklar için güvenli ve eğlenceli aktivite alanları'
    },
    {
      icon: '🐴',
      title: 'At Çiftliği',
      description: 'Doğal yaşamla iç içe, unutulmaz at binme deneyimi'
    },
    {
      icon: '💧',
      title: 'Gölet',
      description: 'Sakin suların yansımasında huzur bulun'
    },
    {
      icon: '🚶',
      title: 'Yürüyüş Yolları',
      description: 'Doğanın içinde keşif rotaları ve temiz hava'
    }
  ]

  return (
    <section id="experiences" className="section experiences-section">
      <div className="container">
        <h2 className="section-title">✨ Deneyim Alanları</h2>
        <p className="section-subtitle">
          HiraNova'da her an, yeni bir deneyim sizi bekliyor
        </p>
        <div className="experiences-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-icon">{exp.icon}</div>
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences
















