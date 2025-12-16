import React from 'react'
import './Investors.css'

const Investors: React.FC = () => {
  return (
    <section id="investors" className="section investors-section">
      <div className="container">
        <h2 className="section-title">🌱 Yatırımcılar İçin</h2>
        <div className="investors-content">
          <div className="investors-grid">
            <div className="investor-card">
              <div className="card-icon">🤝</div>
              <h3>Kurucu Ortaklık</h3>
              <p>HiraNova ailesinin bir parçası olun. Sürdürülebilir yatırım fırsatları ve özel avantajlar.</p>
            </div>
            <div className="investor-card">
              <div className="card-icon">🏠</div>
              <h3>Kullanım Hakkı</h3>
              <p>Yılın belirli dönemlerinde kendi villanızda tatil yapma hakkı. Esnek kullanım modelleri.</p>
            </div>
            <div className="investor-card">
              <div className="card-icon">📅</div>
              <h3>Rezervasyon Modelleri</h3>
              <p>Farklı rezervasyon paketleri ile ihtiyacınıza uygun çözümler. Öncelikli rezervasyon hakları.</p>
            </div>
            <div className="investor-card">
              <div className="card-icon">📊</div>
              <h3>ROI Hesapları</h3>
              <p>Detaylı yatırım analizi ve getiri hesaplamaları. Şeffaf finansal planlama.</p>
            </div>
          </div>
          <div className="investors-cta">
            <button 
              className="download-btn"
              onClick={() => {
                // PDF dosyasını indir
                const link = document.createElement('a')
                link.href = '/IZMIR GUZELBAHCE HIRA NOVA-MND DESIGN 25 11 2025.pdf'
                link.download = 'HiraNova-Yatirim-Brosuru.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              📄 Yatırım Broşürü İndir (PDF)
            </button>
            <p className="cta-note">Detaylı bilgi için broşürümüzü indirebilir veya bizimle iletişime geçebilirsiniz.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Investors

