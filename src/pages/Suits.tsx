import { useEffect, MouseEvent } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import './Suits.css'
import '../App.css'

const Suits = () => {
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
                            MINIMAL, FERAH<br />
                            <span className="text-italic">ÜST DÜZEY KONFOR</span>
                        </h1>
                    </div>

                    <div className="suits-hero-image-wrapper">
                        <img
                            src="/suit-giris.jpg"
                            alt="Minimalist Suite Design"
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
                        HiraNova World suitleri, doğanın içinde konumlanan yapısı ve konfor odaklı tasarımıyla, misafirlerine sakin ve rafine bir konaklama deneyimi sunar.
                        Doğal ışık alan ferah alanlar ve kaliteli detaylar, tatilin temposunu yavaşlatır.
                    </p>
                </section>

                {/* Living Area Section (#living-area) - Residence Style */}
                <section id="living-area" className="residence-section-style">
                    <div className="residence-bg-image">
                        <img src="/decor-leaves.png" alt="Decor" />
                    </div>
                    <div className="residence-container">
                        <div className="residence-text">
                            <span className="residence-tag">YAŞAM ALANI</span>
                            <h2 className="residence-title">BENZERSİZ BİR<br />SUİT DENEYİMİ</h2>
                            <div className="residence-divider"></div>
                            <p className="residence-description">
                                Doğal malzemelerle şekillenen bu yaşam alanı, gösterişten uzak ama karakteri güçlü bir atmosfer sunar. Taş dokuların sıcaklığı, ahşabın dengeli kullanımı ve geniş açıklıklar mekâna gün boyu yumuşak bir akış kazandırır. Her detay, konforu sezgisel hale getirmek için düşünülmüştür; ne fazlası var ne de eksiği. Günün temposundan uzaklaşmak, içerideyken bile dışarıyla bağını koparmamak isteyenler için sakin, rafine ve uzun süreli bir konaklama hissi yaratır.
                            </p>
                        </div>
                        <div className="residence-image-wrapper">
                            <img src="/suit-yasam-alani.jpg" alt="Living Area Ambience" loading="lazy" />
                        </div>
                    </div>
                </section>

                {/* Kitchen Section (#kitchen) - Feature Style (Image Left) */}
                <section id="kitchen" className="feature-section-light">
                    <div className="feature-container">
                        <div className="feature-image">
                            <img src="/suit-mutfak.jpg" alt="Modern Kitchen Design" loading="lazy" />
                        </div>
                        <div className="feature-content">
                            <span className="residence-tag" style={{ color: '#555' }}>MUTFAK</span>
                            <h2 className="feature-title">GÜNLÜK RİTME UYUMLU<br />GASTRONOMİK ALAN</h2>
                            <div className="feature-divider"></div>
                            <p className="feature-desc">
                                Bu mutfak, yalnızca hazırlanmak için değil, vakit geçirmek için tasarlandı. Doğal taş yüzeyler, ahşabın sıcak dokusu ve sade çizgiler mekâna dengeli bir karakter kazandırır. Her detay, kullanım kolaylığını estetikle bir araya getirecek şekilde konumlandırılmıştır; ne göz yorar ne de eksik hissettirir. İster kısa bir kahvaltı ister sakin bir akşam hazırlığı olsun, mutfak alanı konaklamanın ritmine uyum sağlayan, sessiz ama güçlü bir tamamlayıcıdır.
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
                            <h2 className="residence-title">SESSİZLİĞİN MERKEZİNDE<br />KONFORLU BİR DİNLENME</h2>
                            <div className="residence-divider"></div>
                            <p className="residence-description">
                                Yatak odaları, günün ritminden bilinçli olarak kopmanız için tasarlandı. Doğal taş dokular, yumuşak tekstiller ve dengeli ışık kullanımı mekâna sakin bir derinlik kazandırırken, her detay uyku kalitesini ve zihinsel rahatlığı destekleyecek şekilde kurgulandı. Gürültüden uzak, sade ama güçlü bir atmosfer içinde, geceyi gerçekten dinlenerek geçirebileceğiniz bir alan sunar. Burada amaç yalnızca uyumak değil; bedeni ve zihni aynı anda toparlayan bir gece deneyimi yaşamaktır.
                            </p>
                        </div>
                        <div className="residence-image-wrapper">
                            <img src="/suit-yatak-odasi.jpg" alt="Bedroom Serenity" loading="lazy" />
                        </div>
                    </div>
                </section>

                {/* Fireplace Section (#fireplace) - Feature Style (Image Left) */}
                <section id="fireplace" className="feature-section-light">
                    <div className="feature-container">
                        <div className="feature-image">
                            <img src="/suit-somine.jpg" alt="Fireplace Ambience" loading="lazy" />
                        </div>
                        <div className="feature-content">
                            <span className="residence-tag" style={{ color: '#555' }}>ŞÖMİNE</span>
                            <h2 className="feature-title">ATEŞİN ETRAFINDA<br />YAVAŞLAYAN ZAMAN</h2>
                            <div className="feature-divider"></div>
                            <p className="feature-desc">
                                Şömine alanı, mekânın en karakterli duraklarından biri olarak tasarlandı. Canlı ateşin sıcaklığı, doğal ahşap ve taş yüzeylerle birleşerek günün temposunu bilinçli biçimde düşüren bir atmosfer yaratır. Akşam saatlerinde sessiz bir sohbet, bir fincan kahve ya da yalnızca ateşi izleyerek geçirilen anlar için ideal bir odak noktasıdır. Burada amaç gösteriş değil; dinginlik, derinlik ve gerçek bir konfor hissidir. Şömine, bu alanın ruhunu tamamlayan sakin ama güçlü bir merkez görevi görür.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Bathroom Section (#bathroom) - Residence Style (Moved to end for better flow) */}
                <section id="bathroom" className="residence-section-style">
                    <div className="residence-bg-image">
                        <img src="/decor-leaves.png" alt="Decor" />
                    </div>
                    <div className="residence-container">
                        <div className="residence-text">
                            <span className="residence-tag">BANYO</span>
                            <h2 className="residence-title">SESSİZ BİR<br />SPA DENEYİMİ</h2>
                            <div className="residence-divider"></div>
                            <p className="residence-description">
                                Banyo alanı, yalnızca bir ihtiyaç alanı olarak değil, günün ritmini sıfırlayan kişisel bir mola noktası olarak kurgulandı. Doğal taş dokular, yumuşak ve kontrollü aydınlatma ile birleşerek sade ama güçlü bir atmosfer yaratır. Geniş duş alanı, kaliteli armatürler ve özenle seçilmiş yüzeyler; her kullanımda konforu ve dinginliği hissettirmeyi amaçlar. Burada hız yok, gürültü yok. Sadece sakinlik, denge ve iyi hissettiren bir bütünlük var.
                            </p>
                        </div>
                        <div className="residence-image-wrapper">
                            <img src="/suit-banyo.jpg" alt="Spa Bathroom" loading="lazy" />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Suits
