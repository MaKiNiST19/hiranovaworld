import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './AboutHotel.css'

const AboutHotel = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-hotel-page">
            <Header />

            {/* Hero Typography */}
            <section className="about-hero">
                <span className="about-hero-subtitle">HIRANOVA WORLD</span>
                <h1 className="about-hero-title">
                    DOĞANIN KALBİNDE,<br />
                    <span>HUZURUN</span> BİR KONAKLAMA.
                </h1>
            </section>

            {/* Large Hero Image */}
            <section className="about-large-image">
                <img src="/main-about.jpg" alt="HiraNova Mood" />
            </section>

            {/* Centered Text Block */}
            <section className="about-text-section">
                <div className="about-text-content">
                    <h2 className='reveal-text'>
                       Doğanın İçinde Bir Kaçış
                    </h2>
                    <p className="info-description-secondary">
                        doğanın içinde, sakinlik ve konfor arayan misafirler için tasarlanmış özel bir oteldir.
Bahçeli villalar ve suit üniteler; kalabalıktan uzak, huzurlu bir konaklama deneyimi sunar.
Burada her şey, misafirlerin kendini rahat hissetmesi için sade ve dengeli bir anlayışla planlanmıştır.
                    </p>
                </div>
            </section>

            {/* Vision Section (Vizyonumuz) - Dark BG */}
            <section className="about-vision-section">
                <div className="about-vision-image">
                    <img src="/gallery-6.png" alt="Vizyonumuz" />
                </div>
                <div className="about-vision-content">
                    <h2 className="about-vision-title">
                       Vizyonumuz
                    </h2>
                    <p className="about-vision-desc">
                       Doğanın içinde konumlanan,
kalabalıktan uzak ve yüksek konfor sunan bir otel anlayışını
Urla–Güzelbahçe hattında referans bir konaklama deneyimi hâline getirmek.
<br /><br />
HiraNova World’ü;
sessizlik, mahremiyet ve nitelikli hizmet arayan misafirlerin
tekrar tekrar tercih ettiği,
sade ama güçlü bir marka olarak konumlandırmayı hedefliyoruz.
                    </p>
                </div>
            </section>

            {/* Mission Section (Misyonumuz) - Light BG */}
            <section className="about-mission-section">
                <div className="about-mission-image">
                    <img src="/kitchen-detail.jpg" alt="Misyonumuz" onError={(e) => e.currentTarget.src = '/gallery-5.png'} />
                    {/* Using gallery-5 as fallback/placeholder if specific kitchen img missing */}
                </div>
                <div className="about-mission-content">
                    <h2 className="about-mission-title">
                        Misyonumuz
                    </h2>
                    <p className="about-mission-desc">
               Misafirlerimize;
doğayla uyumlu bir ortamda, rahat, huzurlu ve özenli bir konaklama sunmak.
<br /><br />
Bahçeli villalar ve suit ünitelerden oluşan yapımızda;
kalabalık hissi yaratmadan,
her detayı düşünülmüş bir hizmet anlayışıyla
tatilin temposunu misafirlerimizin belirlemesini sağlıyoruz.
<br /><br />

HiraNova’da misyonumuz;
gösterişli vaatler yerine,
samimi bir atmosfer, düzenli bir işletme ve güven veren bir konfor sunmaktır.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default AboutHotel
