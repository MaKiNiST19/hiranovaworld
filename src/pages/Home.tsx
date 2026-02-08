import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import './Home.css'
import Map from '../components/Map'
import GridGallery from '../components/GridGallery'
import Village from '../components/Village'
import Footer from '../components/Footer'

interface Feature {
    title: string;
    items: string[];
    intro?: string;
}

const Home = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
    const [activeWorldTab, setActiveWorldTab] = useState(0);

    const worldTabs = [
        {
            label: "DOĞANIN KALBİNDE ADRENALİN VE ÖZGÜRLÜK",
            title: "",
            description: "HiraNova'nın eşsiz doğal parkurlarında ATV ile sınırları zorlayın ya da asil atlarımızın sırtında yemyeşil ormanların derinliklerine doğru unutulmaz bir yolculuğa çıkın. Her anı macera dolu, her nefesi özgürlük kokan bu deneyimler, ruhunuzu yeniden canlandıracak ve doğayla aranızdaki bağı güçlendirecektir. Burada, keşfetmenin ve hissetmenin en saf hali sizi bekliyor.",
            items: [],
            image: "/doganin-kalbinde-adrenalin-ve-ozgurluk.jpeg"
        },
        {
            label: "MİNİK KAŞİFLER İÇİN SINIRSIZ EĞLENCE VE GÜVEN",
            title: "",
            description: "HiraNova, çocuklarınızın hayal güçlerini özgürce keşfedebilecekleri, güvenli ve ilham verici bir dünya sunar. Özel olarak tasarlanmış oyun alanlarımızda kahkahalarla dolu anlar yaşarken, ebeveynler de gönül rahatlığıyla dinlenebilir. Doğayla iç içe, eğitici ve eğlenceli aktivitelerle dolu bu ortamda, çocuklarınız hem öğrenecek hem de unutulmaz anılar biriktirecek. Geleceğin kaşifleri burada büyüyor.",
            items: [],
            image: "/minik-kasifler-icin-sinirsiz-elglence-ve-guven.png"
        },
        {
            label: "GECELERİNİZE KEYİF KATAN EĞLENCE DOLU ANLAR",
            title: "",
            description: "HiraNova'da akşamlar, yıldızların altında büyülü bir atmosfere dönüşür. Açık hava sinemasında klasik filmlerin keyfini çıkarın ya da canlı müzik performanslarıyla ruhunuzu dinlendirin. Özel temalı partiler ve kültürel etkinliklerle dolu geceler, sevdiklerinizle birlikte unutulmaz anılar biriktirmeniz için tasarlandı. Burada her gece, sanatın ve eğlencenin eşsiz birleşimiyle taçlanır.",
            items: [],
            image: "/gecelerinize-keyif-katan-eglence-dolu-anlar.png"
        },
        {
            label: "SAKİNLİĞİN VE DOĞALLIĞIN KUCAKLAYICI DOKUNUŞU",
            title: "",
            description: "HiraNova'da yaşam, doğanın sunduğu eşsiz sakinlikle iç içedir. Tavus kuşlarının zarif yürüyüşleri, koyunların huzurlu otlayışları ve atların asil duruşlarıyla çevrili bir ortamda, hayvanlarla kuracağınız samimi bağlar ruhunuzu besleyecek. Şehrin gürültüsünden uzakta, toprağın kokusunu içinize çekerek, doğanın ritmiyle yeniden denge bulun. Burada her an, huzurun ve yenilenmenin bir parçasıdır.",
            items: [],
            image: "/sakinligin-ve-dogalligin-kucaklayici-dokunusu.png"
        },
        {
            label: "ZİHNİNİZİ VE BEDENİNİZİ ŞIMARTAN BİR DENEYİM",
            title: "",
            description: "HiraNova'nın huzurlu atmosferinde, spa ve fitness merkezimizde kendinize özel bir kaçış yaratın. Uzman terapistler eşliğinde rahatlatıcı masajlarla tüm yorgunluğunuzu atın ya da modern ekipmanlarla donatılmış fitness salonumuzda enerjinizi tazeleyin. Bedeninizin ve zihninizin ihtiyaç duyduğu dengeyi bulacağınız bu özel alanda, kendinizi yeniden keşfedin ve tam anlamıyla yenilenin. Sağlıklı bir yaşamın kapıları burada aralanıyor.",
            items: [],
            image: "/zihninizi-ve-bedeninizi-simartan-bir-deneyim.jpeg"
        }
    ];

    const features: Feature[] = [
        {
            title: "Yeni Nesil Sıfır Karbon Köy",
            items: [
                "☀️ Güneş panelleri ile kendi enerjisini üretir",
                "💧 Yağmur suyu geri kazanımı ile su döngüsünü korur",
                "♻️ Kompost sistemi ile atıkları toprağa geri kazandırır",
                "🌬️ Doğal havalandırma ile temiz atmosfer ve yüksek oksijen sağlar",
                "🍃 Ağaçların yaydığı fitonsitler bağışıklığı güçlendirir",
                "🌿 Toprakla temas bedenin dengesini ve ruhun huzurunu geri kazandırır",
                "💧 Doğal nem ve ışık döngüsü sağlıklı bir yaşamın en saf halini sunar"
            ]
        },
        {
            title: "Aile Pedagog Desteği",
            items: [
                "Her aileye profesyonel pedagog desteği sunularak, çocukların güvenli, bilinçli ve doğayla uyumlu gelişimi desteklenir. HiraNova’da aileler huzuru, çocuklar ise güvenli büyümeyi yaşar."
            ]
        },
        {
            title: "Premium Yaşam Ünitesi",
            intro: "Teknolojik hem de çevreci yaşam anlayışıyla tasarlandı. Her evde standart olarak bulunan akıllı sistemler:",
            items: [
                "☀️ Işık Otomasyonu: Güneşin doğuşuna ve batışına göre otomatik aydınlatma",
                "🌡️ İklim Kontrolü: Uzaktan yönetilebilir sıcaklık, enerji tasarrufu sağlar",
                "🪟 Elektrikli Perde & Panjur: Gün ışığına göre otomatik açılıp kapanır"
            ]
        },
        {
            title: "Kaliteli İç Mekan ve Marka Seçimleri",
            items: [
                "• Beyaz Eşyalar: Siemens / Bosch – Akıllı bağlantılı, sessiz ve yüksek enerji verimliliği",
                "• Banyo – WC: Vitra / Artema – Minimalist, uzun ömürlü, su tasarruflu armatürler",
                "• Zemin Parkeleri: Su geçirmez lamine parke – Doğal doku, kolay temizlik, yüksek dayanıklılık",
                "• Mobilyalar: Mudo Concept / Kervan – Doğal tonlar, zarif tasarım, sürdürülebilir üretim",
                "• Elektrik ve Aydınlatma: Philips / Osram – Düşük enerji tüketimi, yumuşak doğal ışık",
                "• Mutfak Dolapları: Lineadecor – Modern çizgi, lake yüzey, ergonomik tasarım"
            ]
        }
    ]

    const closePopup = () => setSelectedFeature(null);

    useEffect(() => {
        // Scroll Handler for Section Padding & Text Opacity
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // 1. Padding Calculation (Section Expansion)
            const distanceToBottom = rect.bottom - windowHeight;
            const maxDistance = sectionRef.current.offsetHeight - 100;
            if (maxDistance > 0) {
                let paddingProgress = distanceToBottom / maxDistance;
                paddingProgress = Math.max(0, Math.min(1, paddingProgress));
                const paddingValue = paddingProgress * 30;
                sectionRef.current.style.paddingLeft = `${paddingValue}px`;
                sectionRef.current.style.paddingRight = `${paddingValue}px`;
            }

            // 2. Text Opacity Scrubbing (Removed - using Framer Motion)
            /* 
               Legacy manual scrub removed in favor of whileInView
            */
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount to set initial state
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className="home-container">
            <Header />
            {/* Hero Section */}
            <section className="home-hero">
                <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/slidermax-poster.jpg"
                >
                    <source src="/slidermax-optimized.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">HIRANOVA</h1>
                    <p className="hero-subtitle">GARDEN • SUIT • WORLD</p>
                </div>
            </section>

            {/* Info Section */}
            <section className="info-section" id="about" ref={sectionRef}>
                <div className="info-section-inner">
                    {/* Background Images */}
                    <div className="bg-image image-bottom-left">
                        <img src="/orman.png" alt="Orman" />
                    </div>
                    <div className="bg-image image-bottom-left-2">
                        <img src="/koyun.png" alt="Koyun" />
                    </div>
                    <div className="bg-image image-top-right">
                        <img src="/yaprak.png" alt="Yaprak" />
                    </div>

                    <div className="info-content">
                        <div className="info-subtitles">
                            <span>Denize Yakın</span>
                            <span className="dot">•</span>
                            <span>Orman İçinde</span>
                            <span className="dot">•</span>
                            <span>Sakin ve nitelikli bir yaşam</span>
                        </div>

                        <h2 className="reveal-text">
                            {"Doğayla iç içe, Benzersiz Bir Deneyim".split(" ").map((word, i) => (
                                <span key={i} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.2em' }}>
                                    {word.split("").map((char, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0.2 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: false, margin: "-10%" }}
                                            transition={{
                                                duration: 0.5,
                                                delay: (i * 5 + index) * 0.05,
                                                ease: "easeOut"
                                            }}
                                            className="char"
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </h2>

                        <p className="info-description">
                            Burası bir otelden fazlası.
                        </p>
                        <p className="info-description-secondary">
                            Burası; denize çok yakın, ormanın içinde konumlanan,
                            doğayla, insanla ve modern yaşamla uyumlu
                            özel bir yaşam dünyası.
                        </p>

                        <div className="info-btn-container" style={{ marginTop: '2rem' }}>
                            <Link to="/facility" className="gold-button" style={{ display: 'inline-block', textDecoration: 'none' }}>
                                TESİSİMİZ
                            </Link>
                        </div>

                        <div className="info-buttons">
                            {features.map((feature, index) => (
                                <button
                                    key={index}
                                    className="gold-button"
                                    onClick={() => setSelectedFeature(feature)}
                                >
                                    {feature.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Residence Section */}
            <section className="residence-section">
                <div className="residence-bg-image">
                    <img src="/decor-leaves.png" alt="Decor" />
                </div>
                <div className="residence-container">
                    <div className="residence-text">
                        <span className="residence-tag">Villalar</span>
                        <h2 className="residence-title">FERAH YAŞAYIN<br />SAKİN YAŞAYIN</h2>

                        <div className="residence-divider"></div>

                        <p className="residence-description">
                            Aydınlık ve geniş yaşam alanları, gün ışığını içeri alan yüksek pencereler, doğayla uyumlu malzemeler…
                            HiraNova villalarında her detay, günü yavaşlatan bir konfor için tasarlandı. Şık ve işlevsel mutfaklar, uzun günlerin yorgunluğunu alan spa hissindeki banyolar, iç mekânla dış mekânı birbirine bağlayan teraslar…
                            Burası yalnızca konaklayacağınız bir yer değil, kendinizi en çok evinizde hissettiğiniz alan.
                        </p>
                        <Link to="/suits-and-villas">
                            <button className="residence-button"></button>
                        </Link>
                    </div>
                    <div className="residence-image">
                        <img src="/gallery-2.png" alt="Residence" />
                    </div>
                </div>
            </section>

            {/* World System Section */}
            <section className="world-section">
                <div className="world-container">
                    <div className="world-header">
                        <span className="world-tag">HIRANOVA WORLD</span>
                        <h2 className="world-main-title">
                            <span className="text-outline">SUIT & VİLLALARDA</span><br />
                            DEĞERLİ YAŞAM.
                        </h2>
                        <div className="world-subtitle-row">
                            <p className="world-header-desc">
                                HiraNova World, yalnızca bir konaklama deneyimi sunmaz.
                                Sağlık, doğallık, huzur, güven ve mutluluk üzerine kurulu bütüncül bir yaşam anlayışı önerir. Her detay; bedeni, zihni ve gündelik yaşamı
                                daha dengeli ve nitelikli hale getirmek için tasarlandı.
                            </p>
                            <Link to="/life-at-hiranova">
                                <button className="world-discover-btn">Hira Nova'da Yaşam</button>
                            </Link>
                        </div>
                    </div>

                    <div className="world-content-grid">
                        <div className="world-tabs">
                            {worldTabs.map((tab, index) => (
                                <div
                                    key={index}
                                    className={`world-tab-item ${activeWorldTab === index ? 'active' : ''}`}
                                    onClick={() => setActiveWorldTab(index)}
                                >
                                    <span className="tab-arrow">→</span>
                                    <span className="tab-label">{tab.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="world-display">
                            <div className="world-display-image">
                                <img src={worldTabs[activeWorldTab].image} alt={worldTabs[activeWorldTab].label} />
                            </div>

                            <div className="world-tooltip-container" key={activeWorldTab}>
                                <div className="world-tooltip-box">
                                    <p>{worldTabs[activeWorldTab].description}</p>
                                </div>
                                <div className="world-tooltip-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Map />
            <GridGallery />
            <Village />
            <Footer />

            {selectedFeature && (
                <div className="home-modal-overlay" onClick={closePopup}>
                    <div className="home-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="home-modal-close" onClick={closePopup}>&times;</button>
                        <h3 className="home-modal-title">{selectedFeature.title}</h3>
                        {selectedFeature.intro && (
                            <p className="home-modal-intro">{selectedFeature.intro}</p>
                        )}
                        <ul className="home-modal-list">
                            {selectedFeature.items.map((item, i) => (
                                <li key={i} className="home-modal-item">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home
