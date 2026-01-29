import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import './SuitsAndVillas.css'
import '../App.css'

const SuitsAndVillas = () => {
    useSmoothScroll()

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="suits-page">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="suits-hero">
                    <div className="suits-container">
                        <div className="suits-logo-mark">
                            {/* Optional small logo mark above title if needed */}
                        </div>
                        <h1 className="suits-hero-title suits-serif-title">
                            Ormanın İçinde,
                            <span className="suits-hero-subtitle">Tepede Bir Yaşam.</span>
                        </h1>
                    </div>

                    <div className="suits-hero-image-wrapper">
                        <img
                            src="/gallery/gallery (1).jpg"
                            alt="Modern Kitchen Interior"
                            className="suits-hero-image"
                        />
                        {/* Fallback to a placeholder if specific image not found, using a generic class mostly */}
                    </div>
                </section>

                {/* Intro Text */}
                <section className="suits-intro">
                    <div className="suits-container">
                        <p className="suits-intro-text">
                            İZMİR URLA GÜZELBAHÇE'DE, ORMANIN İÇİNDE BİR TEPEDE
                            KURULMUŞ, 18 DÖNÜMLÜK BİR YERYÜZÜ CENNETİ.
                            80 ADET VİLLA TİPİ SUİT VE BAHÇELİ VİLLALARIMIZLA,
                            AÇIK HAVA SİNEMASINDAN AT BİNME ALANLARINA,
                            ATV PARKURUNDAN SPA VE SAUNAYA KADAR
                            HER DETAYIN DÜŞÜNÜLDÜĞÜ BİR TATİL DENEYİMİ.
                        </p>

                    </div>
                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <span style={{ fontSize: '2rem', color: '#C17D5F' }}>❧</span>
                    </div>
                </section>

                {/* Section 1: Dark Green - Living Spaces */}
                <section className="suits-section bg-dark-green">
                    <div className="suits-container">
                        <div className="suits-feature">
                            <div className="suits-feature-image">
                                <img src="/gallery/gallery (2).jpg" alt="Modern Living Room" />
                            </div>
                            <div className="suits-feature-content">
                                <div className="suits-section-title-wrapper">
                                    <h2 className="suits-section-title suits-serif-title">
                                        MODERN YAŞAM<br />ALANLARI
                                    </h2>
                                </div>
                                <div className="suits-text-content">
                                    <p>
                                        Misafirlerimiz golf arabalarıyla villalarına ulaşırken, pencerelerden gülümseyen yüzler bu huzurlu atmosferin bir parçası oluyor.
                                        Tesis içinde ağaçların gölgelemediği ferah bir gökyüzü, etrafta ise sarmalayan bir orman dokusu sizi bekliyor.
                                    </p>
                                    <p>
                                        Geniş ve konforlu yaşam alanlarımızda, doğanın tam kalbinde olmanın ayrıcalığını hissedin.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Light - Kitchen */}
                <section className="suits-section">
                    <div className="suits-container">
                        <div className="suits-feature reverse">
                            <div className="suits-feature-image">
                                <img src="/gallery/gallery (3).jpg" alt="High End Kitchen" />
                            </div>
                            <div className="suits-feature-content">
                                <div className="suits-section-title-wrapper">
                                    <h2 className="suits-section-title suits-serif-title" style={{ color: '#333' }}>
                                        ÜST DÜZEY<br />MUTFAK
                                    </h2>
                                </div>
                                <div className="suits-text-content">
                                    <p>
                                        Gastronomi tutkunları için özel olarak tasarlanmış, son teknoloji donanımlara sahip mutfaklar.
                                        Fonksiyonellik ve şıklığın mükemmel uyumu.
                                    </p>
                                    <div className="image-inset" style={{ marginTop: '2rem' }}>
                                        <img src="/gallery/gallery (4).jpg" alt="Cooking Detail" style={{ maxWidth: '200px', borderRadius: '4px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Terracotta - Primary Bedroom */}
                <section className="suits-section bg-terracotta">
                    <div className="suits-container">
                        <div className="suits-feature">
                            <div className="suits-feature-image">
                                <img src="/gallery/gallery (5).jpg" alt="Primary Bedroom" />
                            </div>
                            <div className="suits-feature-content">
                                <div className="suits-section-title-wrapper">
                                    <h2 className="suits-section-title suits-serif-title">
                                        EBEVEYN<br />YATAK ODASI
                                    </h2>
                                </div>
                                <div className="suits-text-content">
                                    <p>
                                        Günün yorgunluğunu atacağınız, sakin ve dingin bir sığınak.
                                        Yumuşak renk paletleri ve akustik konfor,
                                        kesintisiz bir uyku deneyimi için tasarlandı.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Light - Bathroom */}
                <section className="suits-section">
                    <div className="suits-container">
                        <div className="suits-feature reverse">
                            <div className="suits-feature-image">
                                <img src="/gallery/gallery (6).jpg" alt="Aktiviteler ve Spa" />
                            </div>
                            <div className="suits-feature-content">
                                <div className="suits-section-title-wrapper">
                                    <h2 className="suits-section-title suits-serif-title" style={{ color: '#333' }}>
                                        AKTİVİTE VE<br />YENİLENME
                                    </h2>
                                </div>
                                <div className="suits-text-content">
                                    <p>
                                        Ortak yüzme havuzunda serinleyin, at çiftliğinde gezintiye çıkın veya ATV parkurunda maceraya atılın.
                                        Arkalarda dolaşan minik dostlarımız eşliğinde, doğayla tam bir uyum içinde...
                                    </p>
                                    <div style={{ marginTop: '2rem' }}>
                                        <img src="/gallery/gallery (7).jpg" alt="Relaxing" style={{ maxWidth: '100%', borderRadius: '4px', height: '150px', objectFit: 'cover' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Callout */}
                <section id="contact" className="suits-section bg-dark-green" style={{ textAlign: 'center', padding: '10rem 0' }}>
                    <div className="suits-container">
                        <h2 className="suits-serif-title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>
                            İLETİŞİM
                        </h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: '#ccc' }}>
                            HiraNova dünyasında yerinizi ayırtın. Detaylı bilgi ve randevu için bizimle iletişime geçin.
                        </p>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default SuitsAndVillas
