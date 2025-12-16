import React from 'react'
import './Village.css'

const Village: React.FC = () => {
  return (
    <section id="village" className="village-section">
      <div className="village-overlay" />
      <div className="village-content">
        <div className="village-text-box">
          <p className="village-kicker">HiraNova</p>
          <h3 className="village-title">Garden &amp; Suites</h3>
          <p className="village-body">
            Saf doğa, akıllı konfor ve kira stresi olmadan planlı bir yaşam.
            HiraNova, doğayla uyumlu ve sınırlı sayıda katılımcıyla ilerleyen bir yaşam modelidir.
            Herkese uygun değildir.
          </p>
          <p className="village-footnote">
            “HiraNova herkese açık bir proje değildir.”
          </p>
         <button className="village-cta">
            Bana Uygun mu?
          </button>
          <p className="village-note">
         (2 dakikalık ön değerlendirme)
          </p>
        </div>
      </div>
    </section>
  )
}

export default Village

