import React from 'react'
import './Technology.css'

const Technology: React.FC = () => {
  const technologies = [
    {
      icon: '⚡',
      title: 'Enerji Sistemleri',
      description: 'Güneş panelleri, rüzgar enerjisi ve akıllı enerji yönetimi ile sıfır karbon ayak izi.'
    },
    {
      icon: '🤖',
      title: 'Akıllı Otomasyon',
      description: 'Ev otomasyonu ile ışık, ısıtma, güvenlik ve daha fazlasını tek dokunuşla kontrol edin.'
    },
    {
      icon: '🧠',
      title: 'Yapay Zekâ Concierge',
      description: 'Kişiselleştirilmiş hizmetler için AI destekli asistan. Her ihtiyacınıza anında çözüm.'
    },
    {
      icon: '🌿',
      title: 'Çevre Dostu Mimari',
      description: 'Doğal malzemeler, pasif soğutma sistemleri ve sürdürülebilir inşaat teknikleri.'
    }
  ]

  return (
    <section id="technology" className="section technology-section">
      <div className="container">
        <h2 className="section-title">🌎 Doğa & Teknoloji</h2>
        <p className="section-subtitle">
          Doğanın gücü ile teknolojinin konforunu bir araya getiriyoruz
        </p>
        <div className="technology-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon">{tech.icon}</div>
              <h3>{tech.title}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technology













