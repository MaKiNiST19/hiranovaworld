import { useEffect, MouseEvent } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import './Suits.css' // Using shared styles
import '../App.css'

const Villas = () => {
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
                        <span className="suits-hero-tag">SUITLER & VİLLALAR</span>
                        <div className="suits-hero-line"></div>
                        <h1 className="suits-hero-title">
                            MÜSTAKİL, KONFORLU<br />
                            <span className="text-italic">AYRICALIKLI YAŞAM</span>
                        </h1>
                    </div>

                    <div className="suits-hero-image-wrapper">
                        <img
                            src="/suit-giris.jpg"
                            alt="Luxury Villas"
                            className="suits-hero-image"
                        />

                        {/* Filter Menu (Overlaid) */}
                        <div className="suits-filter-menu">
                            <a onClick={(e) => handleAnchorClick(e, 'living-area')} className="suits-filter-item">YAŞAM ALANI</a>
                            <a onClick={(e) => handleAnchorClick(e, 'kitchen')} className="suits-filter-item">MUTFAK</a>
                            <a onClick={(e) => handleAnchorClick(e, 'bedroom')} className="suits-filter-item">YATAK ODASI</a>
                            <a onClick={(e) => handleAnchorClick(e, 'fireplace')} className="suits-filter-item">ŞÖMİNE</a>
                            <a onClick={(e) => handleAnchorClick(e, 'bathroom')} className="suits-filter-item">BANYO</a>
                        </div>
                    </div>
                </section>

                {/* General Intro Text Section */}
                <section className="suits-general-intro">
                    <p className="reveal-text">
                        Taş Mimariyle Ayrıcalıklı Bir Yaşam Alanı</p>
                    <p className="info-description-secondary">İki katlı taş villalar, doğayla uyumlu mimarisi ve geniş hacimleriyle otel konforunu kişisel alan ayrıcalığıyla buluşturur. Geleneksel taş dokular, modern iç planlama ile birleşirken; her detay, misafirin zamandan kopmasını ve bulunduğu mekâna gerçekten yerleşmesini hedefler. Bu villalar, kısa süreli bir konaklamadan çok daha fazlasını sunar.</p>
                </section>

                {/* Living Area Section (#living-area) - Residence Style */}
                <section id="living-area" className="residence-section-style">
                    <div className="residence-bg-image">
                        <img src="/decor-leaves.png" alt="Decor" />
                    </div>
                    <div className="residence-container">
                        <div className="residence-text">
                            <span className="residence-tag">YAŞAM ALANI</span>
                            <h2 className="residence-title">Geniş, Sessiz <br />ve Doğal Akış</h2>
                            <div className="residence-divider"></div>
                            <p className="residence-description">
                                Villa yaşam alanları, ferah oturma düzeni ve yüksek tavan hissiyle günün temposunu yavaşlatmak üzere tasarlanmıştır. Doğal ışıkla beslenen bu alanlar, iç mekân ile bahçe arasındaki geçişi akıcı hale getirir. Kalabalıktan uzak, kendi ritmini kurabileceğiniz bir ortam sunar.
                            </p>
                        </div>
                        <div className="residence-image-wrapper">
                            <img src="/suit-yasam-alani.jpg" alt="Villa Living Area" loading="lazy" />
                        </div>
                    </div>
                </section>

                {/* Kitchen Section (#kitchen) - Feature Style (Image Left) */}
                <section id="kitchen" className="feature-section-light">
                    <div className="feature-container">
                        <div className="feature-image">
                            <img src="/suit-mutfak.jpg" alt="Villa Kitchen" loading="lazy" />
                        </div>
                        <div className="feature-content">
                            <span className="residence-tag" style={{ color: '#555' }}>MUTFAK</span>
                            <h2 className="feature-title">Gastronomik Deneyimlere <br />Açılan Mutfak</h2>
                            <div className="feature-divider"></div>
                            <p className="feature-desc">
                                Villalarda yer alan mutfaklar, sadece ihtiyaçları karşılamak için değil; keyifli anlar yaratmak için kurgulanmıştır. Geniş tezgâh alanları, kaliteli ekipmanlar ve doğal malzemelerle çevrili düzen, ister sade bir kahvaltı ister uzun akşam sofraları için ideal bir atmosfer oluşturur.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Bedroom Section (#bedroom) - Residence Style (Variant) */}
                <section id="bedroom" className="residence-section-style bedroom-variant">
                    <div className="residence-bg-image">
                        <img src="/decor-leaves.png" alt="Leaf Pattern" style={{ opacity: 0.03 }} />
                    </div>
                    <div className="residence-container">
                        <div className="residence-text">
                            <span className="residence-tag">YATAK ODASI</span>
                            <h2 className="residence-title">Üst Katlarda Sakinlik <br />ve Mahremiyet</h2>
                            <div className="residence-divider"></div>
                            <p className="residence-description">
                                Villanın üst katlarında konumlanan yatak odaları, günün sonunda tam anlamıyla geri çekilme hissi sunar. Sessizliği destekleyen planlama, yumuşak aydınlatmalar ve doğal dokularla birleşerek derin bir dinlenme alanı yaratır. Burada uyku, sadece bir ihtiyaç değil; deneyimin kendisidir.
                            </p>
                        </div>
                        <div className="residence-image-wrapper">
                            <img src="/suit-yatak-odasi.jpg" alt="Villa Bedroom" loading="lazy" />
                        </div>
                    </div>
                </section>

                {/* Fireplace Section (#fireplace) - Feature Style (Image Left) */}
                <section id="fireplace" className="feature-section-light">
                    <div className="feature-container">
                        <div className="feature-image">
                            <img src="/suit-somine.jpg" alt="Villa Fireplace" loading="lazy" />
                        </div>
                        <div className="feature-content">
                            <span className="residence-tag" style={{ color: '#555' }}>ŞÖMİNE</span>
                            <h2 className="feature-title">Ateşin Etrafında <br />Zamanın Yavaşladığı Anlar</h2>
                            <div className="feature-divider"></div>
                            <p className="feature-desc">
                                İç mekândaki şömine ve bahçedeki ateş çukuru, villanın en karakterli noktalarını oluşturur. Akşam saatlerinde ateşin etrafında toplanmak, sohbeti ve sessizliği aynı anda mümkün kılar. Bu alanlar, mevsim fark etmeksizin villaya sıcak ve zamansız bir ruh kazandırır.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Bathroom Section (#bathroom) - Residence Style (Moved to end) */}
                <section id="bathroom" className="residence-section-style">
                    <div className="residence-bg-image">
                        <img src="/decor-leaves.png" alt="Decor" />
                    </div>
                    <div className="residence-container">
                        <div className="residence-text">
                            <span className="residence-tag">BANYO</span>
                            <h2 className="residence-title">Taş Dokular Arasında <br />Sessiz Bir Arınma Alanı</h2>
                            <div className="residence-divider"></div>
                            <p className="residence-description">
                                Villa banyoları, doğal taş yüzeyler ve sade formlar etrafında şekillenen dingin bir atmosfer sunar. Geniş kullanım alanı, yumuşak aydınlatmalar ve özenle seçilmiş detaylar, banyoyu sadece işlevsel bir alan olmaktan çıkarır. Günün temposundan kopmak ve zihni sakinleştirmek için tasarlanmış, sessiz ve rafine bir deneyim alanıdır.
                            </p>
                        </div>
                        <div className="residence-image-wrapper">
                            <img src="/suit-banyo.jpg" alt="Villa Bathroom" loading="lazy" />
                        </div>
                    </div>
                </section>

                {/* Garden/Outdoor Living Section (#garden-living) - Feature Style (Image Left) */}
                <section id="garden-living" className="feature-section-light">
                    <div className="feature-container">
                        <div className="feature-image">
                            <img src="/villa-bahce.jpg" alt="Villa Garden Living" loading="lazy" />
                        </div>
                        <div className="feature-content">
                            <span className="residence-tag" style={{ color: '#555' }}>VİLLADA YAŞAM</span>
                            <h2 className="feature-title">Özel Alan, Açık Hava ve<br /> Benzersiz Konfor</h2>
                            <div className="feature-divider"></div>
                            <p className="feature-desc">
                                Taş villalar, iç mekân konforunu bahçe ve dış yaşamla bütünleştiren bir anlayışla tasarlanmıştır. Geniş bahçe alanı, ateş çukuru ve açık oturma düzenleriyle günün farklı saatlerine farklı atmosferler sunar. İçerideki sakinlik, dışarıda doğayla temas ederek devam eder. Burada villa, yalnızca konaklanan bir yapı değil; gün boyu içinde yaşanan, akşamları ise dış mekâna taşan bütüncül bir deneyim haline gelir.
                            </p>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Villas
