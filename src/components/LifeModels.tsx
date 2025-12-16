import React from 'react'
import './LifeModels.css'

const LifeModels: React.FC = () => {
  return (
    <section id="lifemodels" className="lifemodels-section">
      <div className="lifemodels-inner">
        <header className="lifemodels-header">
          <h3 className="lifemodels-title">Life Models</h3>
          <p className="lifemodels-description">
            HiraNova&apos;nın iki farklı yaşam modeli ile doğa, konfor ve özgürlüğü kendi ritminize göre deneyimleyin.
          </p>
        </header>

        <div className="lifemodels-grid">
          <article className="lifemodels-card">
            <div className="lifemodels-image-wrapper">
              <img src="/gardenlife.jpg" alt="Garden Life" className="lifemodels-image" loading="lazy" />
            </div>
          </article>

          <article className="lifemodels-card">
            <div className="lifemodels-image-wrapper">
              <img src="/villalife.jpg" alt="Villa Life" className="lifemodels-image" loading="lazy" />
            </div>
          </article>
        </div>

        <p className="lifemodels-note">
          Detaylar, ön değerlendirme sonrasında paylaşılır.
        </p>
      </div>
    </section>
  )
}

export default LifeModels


