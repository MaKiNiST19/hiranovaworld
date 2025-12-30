import React from 'react'
import './LifeModels.css'

const LifeModels: React.FC = () => {
  return (
    <section id="lifemodels" className="lifemodels-section">
      <div className="lifemodels-artboard">
        {/* Background Mountains */}
        <div className="artboard-carrier"></div>

        {/* Content Container */}
        <div className="artboard-content">
          <h2 className="artboard-title">Life Models</h2>
          <p className="artboard-desc">
            Garden ve Suit modelleri, doğanın içinde müstakil bir yaşam veya otel konforunda gelir odaklı bir yatırım sunar.
            <br />
            Her iki seçenek de HiraNova'nın profesyonel işletme güvencesiyle yönetilir; siz hayatın tadını çıkarırken sistem sizin için çalışır.
          </p>

          {/* Animated Flower */}
          <div className="artboard-flower">
            <img
              src="https://static.tildacdn.com/tild3134-3639-4233-a365-353434376362/flower.svg"
              alt="Decorative Flower"
              className="flower-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LifeModels


