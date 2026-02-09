import { useEffect, MouseEvent } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import './Suits.css'
import '../App.css'

const LifeAtHiraNova = () => {
    useSmoothScroll()

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
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
                            YAŞAMAKTAN<br />
                            <span className="text-italic">DAHA FAZLASI:</span><br />
                            HİRANOVA DENEYİMİ
                        </h1>
                    </div>

                    <div className="suits-hero-image-wrapper">
                        <video
                            src="/slidermax-optimized.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="suits-hero-image"
                        />

                        {/* Filter Menu (Overlaid) */}
                        <div className="suits-filter-menu">
                            <a onClick={(e) => handleAnchorClick(e, 'adventure')} className="suits-filter-item">MACERA VE ÖZGÜRLÜK</a>
                            <a onClick={(e) => handleAnchorClick(e, 'nature')} className="suits-filter-item">DOĞAYLA BÜTÜNLEŞME</a>
                            <a onClick={(e) => handleAnchorClick(e, 'children')} className="suits-filter-item">ÇOCUKLAR İÇİN</a>
                            <a onClick={(e) => handleAnchorClick(e, 'evenings')} className="suits-filter-item">AKŞAMLARIN KEYFİ</a>
                            <a onClick={(e) => handleAnchorClick(e, 'wellness')} className="suits-filter-item">YENİLENME</a>
                        </div>
                    </div>
                </section>

                {/* General Intro Text Section */}
                <section className="suits-general-intro">
                    <p className="reveal-text">
                        Her anı özenle tasarlanmış, ruhunuzu besleyen ayrıcalıklı bir dünya.</p>
                </section>

                {/* Section 1: Adventure (#adventure) - Residence Style */}
                <section id="adventure" className="residence-section-style">
                    <div className="residence-bg-image">
                        <img src="/decor-leaves.png" alt="Decor" />
                    </div>
                    <div className="residence-container">
                        <div className="residence-text">
                            <span className="residence-tag">MACERA</span>
                            <h2 className="residence-title">Macera ve <br />Özgürlüğün Ritmi</h2>
                            <div className="residence-divider"></div>
                            <p className="residence-description">
                                Urla'nın eşsiz doğasında, rüzgarın saçlarınızda dans ettiği anlar... HiraNova, size sadece huzur değil, aynı zamanda özgürlüğün ve maceranın kapılarını aralar. ATV'lerle orman patikalarında keşfe çıkarken ya da asil atlarımızın sırtında yemyeşil vadilerde ilerlerken, doğanın enerjisiyle yeniden bağlantı kurarsınız. Bu ritim, sınırlarınızı zorlamanın ve her nefeste yaşamın coşkusunu hissetmenin bir davetidir. HiraNova'da macera, ruhunuzu besleyen bir özgürlük senfonisine dönüşür.
                            </p>
                        </div>
                        <div className="residence-image-wrapper">
                            <img src="/doganin-kalbinde-adrenalin-ve-ozgurluk.jpeg" alt="Adventure and Freedom" loading="lazy" />
                        </div>
                    </div>
                </section>

                {/* Section 2: Nature (#nature) - Feature Style (Image Left) */}
                <section id="nature" className="feature-section-light">
                    <div className="feature-container">
                        <div className="feature-image">
                            <img src="/sakinligin-ve-dogalligin-kucaklayici-dokunusu.png" alt="Nature and Peace" loading="lazy" />
                        </div>
                        <div className="feature-content">
                            <span className="residence-tag" style={{ color: '#555' }}>DOĞA</span>
                            <h2 className="feature-title">Doğayla Bütünleşen <br />Huzur</h2>
                            <div className="feature-divider"></div>
                            <p className="feature-desc">
                                HiraNova'da zaman, doğanın kendi ritminde akar. Tavus kuşlarının zarif yürüyüşleri, koyunların sakin otlayışları ve atların nazik dokunuşları... Burada hayvan dostlarımızla kurduğunuz her temas, şehir hayatının getirdiği tüm yorgunlukları siler. Doğanın saf ve dingin enerjisiyle çevrili bu özel alanda, huzurun en yalın halini deneyimlersiniz. HiraNova, toprağa basmanın, bir canlının sıcaklığını hissetmenin ve doğanın döngüsüne tanıklık etmenin getirdiği o eşsiz dinginliği sunar.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: Children (#children) - Residence Style (Variant) */}
                <section id="children" className="residence-section-style bedroom-variant">
                    <div className="residence-bg-image">
                        <img src="/decor-leaves.png" alt="Leaf Pattern" style={{ opacity: 0.03 }} />
                    </div>
                    <div className="residence-container">
                        <div className="residence-text">
                            <span className="residence-tag">ÇOCUKLAR</span>
                            <h2 className="residence-title">Çocuklar İçin Güvenli <br />ve Eğlenceli Bir Dünya</h2>
                            <div className="residence-divider"></div>
                            <p className="residence-description">
                                HiraNova, çocukların hayal güçlerini özgürce keşfedebilecekleri, güvenli ve ilham verici bir cennettir. Geniş yeşil alanlarımızda, özel olarak tasarlanmış oyun parklarımızda ve doğayla iç içe aktivitelerimizde, minik misafirlerimiz hem eğlenir hem de öğrenir. Ebeveynler, çocuklarının güvenli ellerde olduğunu bilerek huzurun tadını çıkarırken, çocuklar da doğanın sunduğu sınırsız imkanlarla unutulmaz anılar biriktirir. HiraNova'da her çocuk, kendi macerasının kahramanı olur.
                            </p>
                        </div>
                        <div className="residence-image-wrapper">
                            <img src="/minik-kasifler-icin-sinirsiz-elglence-ve-guven.png" alt="Children Activities" loading="lazy" />
                        </div>
                    </div>
                </section>

                {/* Section 4: Evenings (#evenings) - Feature Style (Image Left) */}
                <section id="evenings" className="feature-section-light">
                    <div className="feature-container">
                        <div className="feature-image">
                            <img src="/gecelerinize-keyif-katan-eglence-dolu-anlar.png" alt="Evening Entertainment" loading="lazy" />
                        </div>
                        <div className="feature-content">
                            <span className="residence-tag" style={{ color: '#555' }}>AKŞAMLAR</span>
                            <h2 className="feature-title">Akşamların <br />Keyifli Ritmi</h2>
                            <div className="feature-divider"></div>
                            <p className="feature-desc">
                                Güneş batarken, HiraNova'da bambaşka bir enerji yükselir. Yıldızların altında kurulan açık hava sinemamızda klasik filmlerin büyüsüne kapılır, canlı müzik performanslarıyla ruhunuzu dinlendirir veya temalı partilerimizde sosyal yaşamın keyfini çıkarırsınız. Akşamların keyifli ritmi, sevdiklerinizle paylaşılan kahkahalara, anlamlı sohbetlere ve unutulmaz anılara dönüşür. HiraNova'da her akşam, günün yorgunluğunu unutturan, ilham veren bir kutlamadır.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 5: Wellness (#wellness) - Residence Style */}
                <section id="wellness" className="residence-section-style">
                    <div className="residence-bg-image">
                        <img src="/decor-leaves.png" alt="Decor" />
                    </div>
                    <div className="residence-container">
                        <div className="residence-text">
                            <span className="residence-tag">YENİLENME</span>
                            <h2 className="residence-title">Beden ve Ruh İçin <br />Yenilenme</h2>
                            <div className="residence-divider"></div>
                            <p className="residence-description">
                                HiraNova, bedeninizi ve ruhunuzu şımartan bir sığınaktır. Modern fitness merkezimizde enerjinizi yükseltirken, uzman terapistlerimizin eşliğinde Spa'mızda kendinizi doğanın iyileştirici gücüne bırakırsınız. Masajlar, arındırıcı bakımlar ve dinginleştirici atmosfer, zihinsel ve fiziksel dengenizi yeniden kurmanızı sağlar. Burada, kendinize ayırdığınız her an, bütünsel bir yenilenme yolculuğuna dönüşür. HiraNova, içsel huzurunuzu bulduğunuz ve yaşam enerjinizi tazelediğiniz özel bir duraktır.
                            </p>
                        </div>
                        <div className="residence-image-wrapper">
                            <img src="/zihninizi-ve-bedeninizi-simartan-bir-deneyim.jpeg" alt="Wellness Experience" loading="lazy" />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default LifeAtHiraNova
