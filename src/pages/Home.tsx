import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import './Home.css'
import Map from '../components/Map'
import ScrollGallery from '../components/ScrollGallery'
import Village from '../components/Village'

interface Feature {
    title: string;
    items: string[];
    intro?: string;
}

const Home = () => {
    const revealRef = useRef<HTMLHeadingElement>(null)
    const sectionRef = useRef<HTMLElement>(null)
    const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
    const [activeWorldTab, setActiveWorldTab] = useState(0);

    const worldTabs = [
        {
            label: "HIRANOVA WORLD NEDİR?",
            title: "DOĞADA YAŞAM VE TATİL HAKKI MODELİ",
            description: "HiraNova World; doğanın içinde, sakin, düzenli ve yüksek standartlarda tasarlanmış, yaşam ve tatil hakkını bir arada sunan, profesyonelce işletilen özel bir sistemdir.",
            items: [
                "Ev satışı yoktur",
                "Tapu satışı yoktur",
                "Devre mülk modeli yoktur",
                "Sunulan hak; rezervasyonlu, dönemli ve planlı kullanım hakkıdır."
            ],
            image: "/kazancli-bahce-ev.jpg"
        },
        {
            label: "SİSTEMİN TEMEL YAPISI",
            title: "BEŞ DEĞERLİ YAŞAM FELSEFESİ",
            description: "Beş yıldız değil, beş değerli yaşam. Sağlık • Doğallık • Huzur • Güven • Mutluluk. Öze dönüş HiraNova ile başlıyor.",
            items: [
                "Garden ve Suit konseptlerinden oluşan yaşam alanları",
                "Rezervasyon esaslı kullanım",
                "Profesyonel işletme ve tek merkezden yönetim",
                "Kalabalık değil, denge ve huzur odaklı planlama"
            ],
            image: "/orman.png"
        },
        {
            label: "KULLANIM HAKKI & KAPASİTE",
            title: "5 YILLIK KULLANIM HAKKI",
            description: "Katılımcılara 5 yıl süreyle kullanım hakkı tanımlanır. Her yıl yaz ve kış dönemlerinde konaklama imkanı sunulur.",
            items: [
                "Toplam bağımsız konaklama birimi: 36",
                "18 Garden – 18 Suit",
                "Aynı anda maksimum 36 aile konaklar."
            ],
            image: "/logo-hira.png"
        },
        {
            label: "YAZ DÖNEMİ PLANLAMASI",
            title: "YAZ TAKVİMİ: 1 HAZİRAN – 30 EYLÜL",
            description: "Yaz dönemi 4 ay (15 günlük bloklar) olarak planlanmıştır. Toplam yaz kapasitesi: 288 aile.",
            items: [
                "1–15 Haziran / 16–30 Haziran",
                "1–15 Temmuz / 16–31 Temmuz",
                "1–15 Ağustos / 16–31 Ağustos",
                "1–15 Eylül / 16–30 Eylül"
            ],
            image: "/garden-world-1.png"
        },
        {
            label: "KIŞ DÖNEMİ PLANLAMASI",
            title: "KIŞ TAKVİMİ: 1 KASIM – 31 MART",
            description: "Kış dönemi de 15 günlük bloklar halinde planlanır. Aynı anda en fazla 36 aile konaklar.",
            items: [
                "1–15 Kasım / 16–30 Kasım",
                "1–15 Aralık / 16–31 Aralık",
                "1–15 Ocak / 16–31 Ocak",
                "1–15 Şubat / 16–28 Şubat",
                "1–15 Mart / 16–31 Mart"
            ],
            image: "/suit-world-1.png"
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

            // 2. Text Opacity Scrubbing (Cumulative Section Scroll)
            if (revealRef.current) {
                const chars = revealRef.current.querySelectorAll('.char');
                // Calculate section progress specifically for text reveal
                // Start reveal when section top is at 70% viewport, end at 30%
                const revealStart = windowHeight * 0.7;
                const revealEnd = windowHeight * 0.2;
                const sectionVisibleHeight = revealStart - revealEnd;
                const currentPos = rect.top;

                let textProgress = (revealStart - currentPos) / sectionVisibleHeight;
                textProgress = Math.max(0, Math.min(1, textProgress));

                chars.forEach((char, index) => {
                    // Stagger characters across the textProgress
                    const charThreshold = index / chars.length;
                    const charProgress = (textProgress - charThreshold) * 5; // Reveal speed multiplier

                    let opacity = 0.2 + Math.max(0, Math.min(0.8, charProgress * 0.8));
                    (char as HTMLElement).style.opacity = opacity.toString();
                });
            }
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
                >
                    <source src="/vidhero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">HIRANOVA</h1>
                    <p className="hero-subtitle">GARDEN • SUIT • WORLD</p>
                </div>
            </section>

            {/* Info Section */}
            <section className="info-section" ref={sectionRef}>
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
                            <span>Yapay Zekâ Destekli Doğal Yaşam Hikâyesi</span>
                        </div>

                        <h2 className="reveal-text" ref={revealRef}>
                            {"Doğayla İç İçe Nitelikli Bir Yaşam Vadediyor.".split("").map((char, index) => (
                                <span key={index} style={{ transitionDelay: `${index * 30}ms` }} className="char">
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </h2>

                        <p className="info-description">
                            HiraNova World bir site değildir. Bir ev projesi hiç değildir.
                        </p>
                        <p className="info-description-secondary">
                            Burası; denize çok yakın, orman içinde konumlanan; doğayla, teknolojiyle ve insanla uyumlu bir yaşam dünyasıdır.
                        </p>

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
                        <span className="residence-tag">REZİDANSLAR</span>
                        <h2 className="residence-title">FERAH YAŞAYIN<br />GÜZEL YAŞAYIN</h2>

                        <div className="residence-divider"></div>

                        <p className="residence-description">
                            AYDINLIK VE GENİŞ YAŞAM ALANLARI. ŞIK VE MODERN MUTFAKLAR.
                            GÜNE TAZE BİR BAŞLANGIÇ YAPMANIZI SAĞLAYACAK SPA TADINDA BANYOLAR.
                            HIRANOVA WORLD'DE HER DETAY, EVİNİZİ EN SEVDİĞİNİZ YER YAPMAK İÇİN TASARLANDI.
                        </p>
                        <button className="residence-button"></button>
                    </div>
                    <div className="residence-image">
                        <img src="/kazancli-bahce-ev.jpg" alt="Residence" />
                    </div>
                </div>
            </section>

            {/* World System Section */}
            <section className="world-section">
                <div className="world-container">
                    <div className="world-header">
                        <span className="world-tag">HIRANOVA WORLD</span>
                        <h2 className="world-main-title">
                            <span className="text-outline">GARDEN | SUIT</span><br />
                            BEŞ DEĞERLİ YAŞAM.
                        </h2>
                        <div className="world-subtitle-row">
                            <p className="world-header-desc">
                                SAĞLIK • DOĞALLIK • HUZUR • GÜVEN • MUTLULUK<br />
                                ÖZE DÖNÜŞ HIRANOVA İLE BAŞLIYOR.
                            </p>
                            <button className="world-discover-btn"></button>
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
                                <div className="world-display-content">
                                    <h3 className="world-display-title">{worldTabs[activeWorldTab].title}</h3>
                                    <p className="world-display-desc">{worldTabs[activeWorldTab].description}</p>
                                    <ul className="world-display-list">
                                        {worldTabs[activeWorldTab].items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Map />
            <ScrollGallery />
            <Village />

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
