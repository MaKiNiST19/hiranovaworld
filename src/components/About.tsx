import React, { useState } from 'react'
import './About.css'

interface Feature {
  title: string;
  items: string[];
  intro?: string;
}

const About: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const features: Feature[] = [
    {
      title: "Yeni Nesil Sıfır Karbon Köy",
      items: [
        "☀️ Güneş panelleri ile kendi enerjisini üretir",
        "💧 Yağmur suyu geri kazanımı ile su döngüsünü korur",
        "♻️ Kompost sistemi ile atıkları toprağa geri kazandırır",
        "🌬️ Doğal havalandırma ile temiz atmosfer ve yüksek oksijen sağlar",
        "🍃 Ağaçların yaydığı fitonsitler bağışıklığı güçlendirir",
        "🌿 Toprakla temas bedenin dengesini ve ruhun huzurunu geri kazandırır",
        "💧 Doğal nem ve ışık döngüsü sağlıklı bir yaşamın en saf halini sunar"
      ]
    },
    {
      title: "Aile Pedagog Desteği",
      items: [
        "Her aileye profesyonel pedagog desteği sunularak, çocukların güvenli, bilinçli ve doğayla uyumlu gelişimi desteklenir. HiraNova’da aileler huzuru, çocuklar ise güvenli büyümeyi yaşar."
      ]
    },
    {
      title: "Premium Yaşam Ünitesi",
      intro: "Teknolojik hem de çevreci yaşam anlayışıyla tasarlandı. Her evde standart olarak bulunan akıllı sistemler:",
      items: [
        "☀️ Işık Otomasyonu: Güneşin doğuşuna ve batışına göre otomatik aydınlatma",
        "🌡️ İklim Kontrolü: Uzaktan yönetilebilir sıcaklık, enerji tasarrufu sağlar",
        "🪟 Elektrikli Perde & Panjur: Gün ışığına göre otomatik açılıp kapanır"
      ]
    },
    {
      title: "Kaliteli İç Mekan ve Marka Seçimleri",
      items: [
        "• Beyaz Eşyalar: Siemens / Bosch – Akıllı bağlantılı, sessiz ve yüksek enerji verimliliği",
        "• Banyo – WC: Vitra / Artema – Minimalist, uzun ömürlü, su tasarruflu armatürler",
        "• Zemin Parkeleri: Su geçirmez lamine parke – Doğal doku, kolay temizlik, yüksek dayanıklılık",
        "• Mobilyalar: Mudo Concept / Kervan – Doğal tonlar, zarif tasarım, sürdürülebilir üretim",
        "• Elektrik ve Aydınlatma: Philips / Osram – Düşük enerji tüketimi, yumuşak doğal ışık",
        "• Mutfak Dolapları: Lineadecor – Modern çizgi, lake yüzey, ergonomik tasarım"
      ]
    }
  ]

  const closePopup = () => setSelectedFeature(null);

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text-group">
            <h2 className="about-title">Doğayla İç İçe Nitelikli Bir Yaşam Vadediyor.</h2>
            <p className="about-paragraph">
              <strong style={{ color: '#D4AF37', display: 'block', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>
                Denize Yakın • Orman İçinde • Yapay Zekâ Destekli Doğal Yaşam Hikâyesi
              </strong>
              HiraNova World bir site değildir. Bir ev projesi hiç değildir.
              <br /><br />
              Burası; denize çok yakın, orman içinde konumlanan;
              doğayla, teknolojiyle ve insanla uyumlu bir yaşam dünyasıdır.
            </p>
          </div>

          <div className="about-features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="about-feature-tag"
                onClick={() => setSelectedFeature(feature)}
              >
                {feature.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedFeature && (
        <div className="about-modal-overlay" onClick={closePopup}>
          <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="about-modal-close" onClick={closePopup}>&times;</button>
            <h3 className="about-modal-title">{selectedFeature.title}</h3>
            {selectedFeature.intro && (
              <p className="about-modal-intro">{selectedFeature.intro}</p>
            )}
            <ul className="about-modal-list">
              {selectedFeature.items.map((item, i) => (
                <li key={i} className="about-modal-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}

export default About
