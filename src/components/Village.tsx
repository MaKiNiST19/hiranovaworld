import React from 'react'
import './Village.css'

const Village: React.FC = () => {
  return (
    <section id="village" className="village-section">
      <div className="village-overlay" />
      <div className="village-content">
        <div className="village-text-box">
          <p className="village-kicker">HiraNova</p>
          <h3 className="village-title">Suit &amp; Villa Otel</h3>
          <p className="village-body">
            Bahçeli villalar ve suit üniteler;
sessizlik, konfor ve mahremiyet arayan misafirler için tasarlandı.
Kalabalık tesis anlayışından uzak, her detayı düşünülmüş bir konaklama düzeniyle
tatilinizi aceleye getirmeden yaşamanıza olanak tanır.
          </p>
          <p className="village-footnote">
            “Urla–Güzelbahçe hattında, doğanın içinde konumlanmış özel bir otel deneyimi sunar.”
          </p>
         <button className="village-cta">
            Rezervasyon Yap!
          </button>
        </div>
      </div>
    </section>
  )
}

export default Village

