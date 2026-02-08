import { useEffect, MouseEvent } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import './Suits.css'
import '../App.css'

const Facility = () => {
    useSmoothScroll()

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Adjust offset for fixed header
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="suits-page">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="suits-hero">
                    <div className="suits-hero-content">
                        <span className="suits-hero-tag">HİRANOVA WORLD</span>
                        <div className="suits-hero-line"></div>
                        <h1 className="suits-hero-title">
                            HER DETAYIN<br />
                            <span className="text-italic">HUZURA ÇIKTIĞI YER.</span>
                        </h1>
                    </div>

                    <div className="suits-hero-image-wrapper">
                        <img
                            src="/tesisimiz.png"
                            alt="HiraNova Facility"
                            className="suits-hero-image"
                        />

                        {/* Filter Menu (Overlaid) */}
                        <div className="suits-filter-menu">
                            <a onClick={(e) => handleAnchorClick(e, 'overview')} className="suits-filter-item">HİRANOVA GENEL BAKIŞ</a>
                            <a onClick={(e) => handleAnchorClick(e, 'location-surroundings')} className="suits-filter-item">KONUM VE ÇEVRE</a>
                            <a onClick={(e) => handleAnchorClick(e, 'services')} className="suits-filter-item">AYRICALIKLI HİZMETLER</a>
                            <a onClick={(e) => handleAnchorClick(e, 'life-packages')} className="suits-filter-item">YAŞAM PAKETLERİ</a>
                        </div>
                    </div>
                </section>

                {/* Section 1: Overview (#overview) */}
                <section id="overview" className="suits-general-intro">
                    <p className="reveal-text">
                        HiraNova, sadece bir konaklama değil, bir yaşam felsefesidir. Tesisimiz, Urla'nın büyüleyici doğasında, denize nazır bir konumda yükselir.
                        Her biri özenle konumlandırılmış villalarımızdan, yemyeşil peyzajımıza, misafirlerimizin rahatlığı için düşünülmüş golf araçlarımızdan,
                        güvenli otopark alanlarımıza kadar her detay, size özel bir dünya sunar. Burada, mimari doğayla dans ederken, huzur ve estetik bir araya gelir.
                    </p>
                </section>

                {/* Section 2: Location (#location-surroundings) - Residence Style (Dark) */}
                <section id="location-surroundings" className="residence-section-style">
                    <div className="residence-bg-image">
                        <img src="/decor-leaves.png" alt="Decor" />
                    </div>
                    <div className="residence-container">
                        <div className="residence-text">
                            <span className="residence-tag">KONUM VE ÇEVRE</span>
                            <h2 className="residence-title">DOĞANIN VE MAVİNİN<br />BULUŞMA NOKTASI</h2>
                            <div className="residence-divider"></div>
                            <p className="residence-description">
                                Urla'nın eşsiz doğasında, zeytin ağaçları ve deniz kokusu arasında konumlanan tesisimiz, şehre yakın ama gürültüden uzak bir sığınak sunar. Ege'nin en özel rotalarına komşu olan HiraNova, çevresindeki bağ yolları, butik üreticiler ve tarihi dokuyla bütünleşen bir lokasyona sahiptir.
                            </p>
                        </div>
                        <div className="residence-image-wrapper">
                            <img src="/location-preview.jpg" alt="Location and Surroundings" loading="lazy" />
                        </div>
                    </div>
                </section>

                {/* Section 3: Services (#services) - Feature Style (Light, Image Left) */}
                <section id="services" className="feature-section-light">
                    <div className="feature-container">
                        <div className="feature-image">
                            <img src="/services-preview.jpg" alt="Exclusive Services" loading="lazy" />
                        </div>
                        <div className="feature-content">
                            <span className="residence-tag" style={{ color: '#555' }}>HİZMETLER</span>
                            <h2 className="feature-title">KONFORUN ÖTESİNDE<br />AYRICALIKLI HİZMETLER</h2>
                            <div className="feature-divider"></div>
                            <p className="feature-desc">
                                Misafirlerimizin her ihtiyacı için düşünülmüş geniş golf aracı ağı, 24 saat güvenlik, profesyonel peyzaj bakımı ve kişiye özel asistanlık hizmetleri ile hayatı kolaylaştırıyoruz. HiraNova dünyasında standartlar değil, sizin beklentileriniz esas alınır.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 4: Life Packages (#life-packages) - Residence Style (Dark Variant) */}
                <section id="life-packages" className="residence-section-style bedroom-variant">
                    <div className="residence-bg-image">
                        <img src="/decor-leaves.png" alt="Leaf Pattern" style={{ opacity: 0.03 }} />
                    </div>
                    <div className="residence-container">
                        <div className="residence-text">
                            <span className="residence-tag">YAŞAM PAKETLERİ</span>
                            <h2 className="residence-title">KİŞİYE ÖZEL<br />DENEYİM PAKETLERİ</h2>
                            <div className="residence-divider"></div>
                            <p className="residence-description">
                                Sadece konaklama değil, bir yaşam tarzı sunuyoruz. Detoks haftaları, gastronomi turları, yoga kampları veya size özel kurgulanan uzun dönem konaklama paketleri ile HiraNova'da her anı dolu dolu ve anlamlı yaşamanız için çalışıyoruz.
                            </p>
                        </div>
                        <div className="residence-image-wrapper">
                            <img src="/packages-preview.jpg" alt="Life Packages" loading="lazy" />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Facility
