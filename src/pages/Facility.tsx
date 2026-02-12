import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Suits.css'
import '../App.css'

const Facility = () => {
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
            description: "HiraNova'Vın huzurlu atmosferinde, spa ve fitness merkezimizde kendinize özel bir kaçış yaratın. Uzman terapistler eşliğinde rahatlatıcı masajlarla tüm yorgunluğunuzu atın ya da modern ekipmanlarla donatılmış fitness salonumuzda enerjinizi tazeleyin. Bedeninizin ve zihninizin ihtiyaç duyduğu dengeyi bulacağınız bu özel alanda, kendinizi yeniden keşfedin ve tam anlamıyla yenilenin. Sağlıklı bir yaşamın kapıları burada aralanıyor.",
            items: [],
            image: "/zihninizi-ve-bedeninizi-simartan-bir-deneyim.jpeg"
        }
    ];

    // Note: useSmoothScroll (Lenis) disabled on this page to allow sticky horizontal scroll to work
    // Sticky Horizontal Scroll Component
    const StickyHorizontalSection = () => {
        const containerRef = useRef<HTMLDivElement>(null);
        const stickyRef = useRef<HTMLDivElement>(null);
        const trackRef = useRef<HTMLDivElement>(null);
        const progressBarRef = useRef<HTMLDivElement>(null);

        const scrollToSection = (targetId: string) => {
            if (!containerRef.current || !trackRef.current) return;

            const containerTop = containerRef.current.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollDistance = containerRef.current.offsetHeight - windowHeight;
            const trackScrollWidth = trackRef.current.scrollWidth - window.innerWidth;

            let targetScrollY = containerTop;

            if (targetId === 'services') {
                const progress = window.innerWidth / trackScrollWidth;
                targetScrollY = containerTop + (progress * scrollDistance);
            } else if (targetId === 'tech-support') {
                targetScrollY = containerTop + scrollDistance;
            }

            window.scrollTo({
                top: targetScrollY,
                behavior: 'smooth'
            });
        };

        useEffect(() => {
            const calculateDimensions = () => {
                if (!containerRef.current || !trackRef.current) return;

                // User requested ~300vh of scroll duration
                // We set the container height to 400vh. 
                // This leaves 300vh of "scrollable" distance (height - viewport).
                const scrollDistance = window.innerHeight * 3;
                containerRef.current.style.height = `${window.innerHeight + scrollDistance}px`;
            };

            // Listen for custom scroll events
            const handleCustomScroll = (e: any) => {
                scrollToSection(e.detail);
            };
            window.addEventListener('scrollToHorizontalSection', handleCustomScroll);

            const handleScroll = () => {
                if (!containerRef.current || !stickyRef.current || !trackRef.current || !progressBarRef.current) return;

                const containerTop = containerRef.current.offsetTop;
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;

                // The scrollable distance is the container height minus the viewport height
                const startScroll = containerTop;
                const endScroll = startScroll + (containerRef.current.offsetHeight - windowHeight);

                if (scrollY >= startScroll && scrollY <= endScroll) {
                    // Inside the scroll zone
                    const totalScrollDistance = endScroll - startScroll;
                    const currentScroll = scrollY - startScroll;
                    const progress = currentScroll / totalScrollDistance;

                    // Calculate how much horizontal distance we need to cover
                    const trackScrollWidth = trackRef.current.scrollWidth - window.innerWidth;

                    // Map the 0-1 progress to the total horizontal distance
                    const translateX = progress * trackScrollWidth;

                    trackRef.current.style.transform = `translateX(-${translateX}px)`;
                    progressBarRef.current.style.width = `${progress * 100}%`;
                } else if (scrollY < startScroll) {
                    // Before section
                    trackRef.current.style.transform = `translateX(0px)`;
                    progressBarRef.current.style.width = `0%`;
                } else if (scrollY > endScroll) {
                    // After section
                    const trackScrollWidth = trackRef.current.scrollWidth - window.innerWidth;
                    trackRef.current.style.transform = `translateX(-${trackScrollWidth}px)`;
                    progressBarRef.current.style.width = `100%`;
                }
            };

            // Initial calculation
            calculateDimensions();
            setTimeout(calculateDimensions, 500);

            window.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('resize', calculateDimensions);
            window.addEventListener('scrollToHorizontalSection', handleCustomScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', calculateDimensions);
                window.removeEventListener('scrollToHorizontalSection', handleCustomScroll);
            };
        }, []);

        // Slider autoplay effect - 3 second interval
        useEffect(() => {
            const slides = document.querySelectorAll('.services-slide');
            if (slides.length === 0) return;

            let currentIndex = 0;

            const interval = setInterval(() => {
                slides[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % slides.length;
                slides[currentIndex].classList.add('active');
            }, 3000);

            return () => clearInterval(interval);
        }, []);

        return (
            <section className="horizontal-section-container" ref={containerRef} id="location-surroundings">
                <div className="horizontal-scroll-wrapper" ref={stickyRef}>
                    <div className="horizontal-scroll-track" ref={trackRef} style={{ gap: '0' }}>

                        {/* PILLAR 1: KONUM VE ÇEVRE - Reference Image Style */}
                        <div className="h-panel-intro">
                            {/* Decorative leaf background */}
                            <div className="intro-leaf-bg"></div>

                            <h2 className="h-intro-title">
                                KONUM<br />VE ÇEVRE
                            </h2>

                            {/* 2x2 Icon Grid in center */}
                            <div className="h-intro-icons">
                                <div className="h-icon-item">
                                    <img src="/pin.svg" alt="Konum" />
                                    <h4>Stratejik Konum</h4>
                                    <p>Plajlara, şehir merkezine ve temel noktalara yakın, planlı bir konum.</p>
                                </div>
                                <div className="h-icon-item">
                                    <img src="/tarih.svg" alt="Tarih" />
                                    <h4>Tarihi Doku</h4>
                                    <p>Urla–Güzelbahçe hattının köklü geçmişiyle çevrili bir atmosfer.</p>
                                </div>
                                <div className="h-icon-item">
                                    <img src="/sef.svg" alt="Gastronomi" />
                                    <h4>Gastronomik Avantaj</h4>
                                    <p>Yerel lezzetler ve keşfe açık rotalarla zengin bir çevre.</p>
                                </div>
                                <div className="h-icon-item">
                                    <img src="/saglik.svg" alt="Sağlık" />
                                    <h4>Sağlık</h4>
                                    <p>Sağlık hizmetlerine yakın, kolay ulaşılabilir bir yerleşim.</p>
                                </div>
                            </div>

                            <div className="h-intro-desc-box">
                                <p>
                                    HİRANOVA, EGE'NİN İNCİSİ URLA'NIN BÜYÜLEYİCİ DOĞASINDA, HUZUR VE AYRICALIĞIN BULUŞTUĞU BİR NOKTADA KONUMLANMIŞTIR. ŞEHRİN KARMAŞASINDAN UZAK, ANCAK TÜM ÖNEMLİ MERKEZLERE KOLAY ERİŞİM İMKANI SUNAN BU ÖZEL LOKASYON, SİZE HEM DİNGİN BİR YAŞAM HEM DE DİNAMİK BİR KEŞİF VAAT EDER. MENTEŞ SAHİLİ'NİN SERİN SULARINA SADECE BİRKAÇ DAKİKA MESAFEDE YER ALAN TESİSİMİZ, KARANTİNA ADASI'NIN TARİHİ DOKUSUNA VE URLA'NIN HAREKETLİ MERKEZİNE YAKINLIĞIYLA DİKKAT ÇEKER. ÇEVREMİZDEKİ BUTİK ECZANELER, MODERN SAĞLIK KURULUŞLARI VE SEÇKİN RESTORANLAR, HİRANOVA'DA GEÇİRECEĞİNİZ HER ANI EKSİKSİZ KILAR. BURADA, DOĞANIN SUNDUĞU EŞSİZ MANZARALARLA İÇ İÇE, URLA'NIN KÜLTÜREL VE GASTRONOMİK ZENGİNLİKLERİNİ KEŞFETME AYRICALIĞINA SAHİP OLACAKSINIZ.
                                </p>
                            </div>

                            <img src="/urla.png" alt="Urla Coast" className="h-intro-image-large" />
                        </div>

                        {/* PILLAR 2: AYRICALIKLI HİZMETLER - Dark Green with Slider */}
                        <div className="h-panel-services">
                            {/* Decorative leaf background */}
                            <div className="services-leaf-bg"></div>

                            <div className="services-content">
                                <h2 className="services-title">
                                    AYRICALIKLI<br />HİZMETLER
                                </h2>
                                <p className="services-desc">
                                    HİRANOVA'DA, MİSAFİRLERİMİZİN KONFORU VE MEMNUNİYETİ EN ÜST ÖNCELİĞİMİZDİR. SEÇKİN YAŞAM KULÜBÜ ANLAYIŞIMIZIN BİR PARÇASI OLARAK, HER DETAYI ÖZENLE DÜŞÜNÜLMÜŞ BİR DİZİ AYRICALIKLI HİZMET SUNUYORUZ. TESİSİMİZ GENELİNDE 7/24 KESİNTİSİZ GÜVENLİK HİZMETİ İLE HUZURLU BİR ORTAM SAĞLARKEN, VİLLALARINIZA VE TESİS İÇİ AKTİVİTE ALANLARINA ULAŞIMINIZI KOLAYLAŞTIRMAK İÇİN ÇEVRE DOSTU ELEKTRİKLİ GOLF ARAÇLARI TAHSİS EDİLMİŞTİR. HER BİR KONAKLAMA BİRİMİNE ÖZEL OTOPARK ALANLARI, ARAÇLARINIZ İÇİN GÜVENLİ VE KOLAY ERİŞİM SUNAR. KİŞİSELLEŞTİRİLMİŞ KARŞILAMA HİZMETİMİZDEN, TESİS İÇİ TEKNİK DESTEK EKİBİMİZE KADAR, HİRANOVA'DA GEÇİRECEĞİNİZ HER ANIN SORUNSUZ VE KEYİFLİ OLMASI İÇİN TİTİZLİKLE ÇALIŞIYORUZ. BURADA, SADECE KONAKLAMAZ, AYNI ZAMANDA BEKLENTİLERİNİZİN ÖTESİNDE BİR HİZMET KALİTESİYLE ŞIMARTILIRSINIZ.
                                </p>

                                {/* 4x1 Icon Grid */}
                                <div className="services-icon-grid">
                                    <div className="services-icon-item">
                                        <img src="/guvenlik.svg" alt="Güvenlik" />
                                        <h4>Güvenlik</h4>
                                        <p>Düzenli ve kontrollü bir konaklama ortamı.</p>
                                    </div>
                                    <div className="services-icon-item">
                                        <img src="/arac.svg" alt="Ulaşım" />
                                        <h4>Çevre Dostu Ulaşım</h4>
                                        <p>Tesis içi ulaşımda doğaya duyarlı çözümler.</p>
                                    </div>
                                    <div className="services-icon-item">
                                        <img src="/otopark.svg" alt="Otopark" />
                                        <h4>Özel Otopark</h4>
                                        <p>Misafirlere ayrılmış, rahat ve güvenli park alanı.</p>
                                    </div>
                                    <div className="services-icon-item">
                                        <img src="/karsilama.svg" alt="Karşılama" />
                                        <h4>Kişiselleştirilmiş Karşılama</h4>
                                        <p>Misafire özel, sade ve özenli bir karşılama deneyimi.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image Slider */}
                            <div className="services-slider">
                                <button className="slider-arrow slider-prev" onClick={() => {
                                    const slides = document.querySelectorAll('.services-slide');
                                    const current = document.querySelector('.services-slide.active');
                                    if (current && slides.length > 0) {
                                        current.classList.remove('active');
                                        const prev = current.previousElementSibling || slides[slides.length - 1];
                                        prev.classList.add('active');
                                    }
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <div className="services-slider-track">
                                    <img src="/hizmetler-1.jpg" alt="Hizmet 1" className="services-slide active" />
                                    <img src="/hizmetler-2.jpg" alt="Hizmet 2" className="services-slide" />
                                    <img src="/hizmetler-3.jpg" alt="Hizmet 3" className="services-slide" />
                                    <img src="/hizmetler-4.jpg" alt="Hizmet 4" className="services-slide" />
                                    <img src="/hizmetler-5.jpg" alt="Hizmet 5" className="services-slide" />
                                    <img src="/hizmetler-6.jpg" alt="Hizmet 6" className="services-slide" />
                                    <img src="/hizmetler-7.jpg" alt="Hizmet 7" className="services-slide" />
                                    <img src="/hizmetler-8.jpg" alt="Hizmet 8" className="services-slide" />
                                    <img src="/hizmetler-9.jpg" alt="Hizmet 9" className="services-slide" />
                                </div>
                                <button className="slider-arrow slider-next" onClick={() => {
                                    const slides = document.querySelectorAll('.services-slide');
                                    const current = document.querySelector('.services-slide.active');
                                    if (current && slides.length > 0) {
                                        current.classList.remove('active');
                                        const next = current.nextElementSibling?.classList.contains('services-slide') ? current.nextElementSibling : slides[0];
                                        next.classList.add('active');
                                    }
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>


                        {/* PILLAR 2: TEKNİK DESTEK */}
                        <div className="h-panel-services" style={{ gridTemplateColumns: '1fr 1fr' }}>
                            <div className="services-leaf-bg"></div>

                            <div className="services-content">
                                <h2 className="services-title">
                                    TEKNİK<br />DESTEK
                                </h2>
                                <p className="services-desc">
                                    HİRANOVA, SADECE BİR KONAKLAMA YERİ DEĞİL, SİZE ÖZEL BİR YAŞAM TARZI SUNAN BİR SEÇKİN YAŞAM KULÜBÜDÜR. SUNDUĞUMUZ YAŞAM PAKETLERİ, FARKLI İHTİYAÇ VE BEKLENTİLERE GÖRE ÖZENLE TASARLANMIŞTIR. İSTER KISA DÖNEMLİ BİR KAÇAMAK, İSTER UZUN DÖNEMLİ BİR YAŞAM DENEYİMİ ARAYIŞINDA OLUN, HİRANOVA'DA SİZE UYGUN BİR SEÇENEK MUTLAKA BULUNUR. KONAKLAMA VE AKTİVİTE KOMBİNASYONLARINDAN OLUŞAN TEMATİK PAKETLERİMİZLE, URLA'NIN DOĞAL GÜZELLİKLERİNİ KEŞFEDEBİLİR, TESİS İÇİ AYRICALIKLI DENEYİMLERİN TADINI ÇIKARABİLİRSİNİZ.
                                </p>
                            </div>

                            <div className="services-image-single">
                                <img src="/destek.jpg" alt="Teknik Destek" />
                            </div>
                        </div>

                    </div>

                    {/* Progress Bar */}
                    <div className="scroll-progress-container">
                        <div className="scroll-progress-bar" ref={progressBarRef}></div>
                    </div>
                </div>
            </section>
        );
    };

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
                            <button onClick={() => {
                                document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
                            }} className="suits-filter-item">HİRANOVA GENEL BAKIŞ</button>

                            <button onClick={() => {
                                document.getElementById('location-surroundings')?.scrollIntoView({ behavior: 'smooth' });
                            }} className="suits-filter-item">KONUM VE ÇEVRE</button>

                            <button onClick={() => {
                                window.dispatchEvent(new CustomEvent('scrollToHorizontalSection', { detail: 'services' }));
                            }} className="suits-filter-item">AYRICALIKLI HİZMETLER</button>

                            <button onClick={() => {
                                window.dispatchEvent(new CustomEvent('scrollToHorizontalSection', { detail: 'tech-support' }));
                            }} className="suits-filter-item">TEKNİK DESTEK</button>
                        </div>
                    </div>
                </section>

                {/* Section 1: Overview (#overview) - Updated Clean Reveal Style */}
                <section id="overview" className="vibrant-intro">
                    <h2 className="reveal-text-large">
                        HİRANOVA, SADECE BİR KONAKLAMA DEĞİL, <br />
                        BİR YAŞAM FELSEFESİDİR.  TESİSİMİZ, <br />
                        URLA'NIN BÜYÜLEYİCİ <br />
                        DOĞASINDA YÜKSELİR.
                    </h2>
                    <p className="vibrant-subtext">
                        Her biri özenle konumlandırılmış villalarımızdan, yemyeşil peyzajımıza, misafirlerimizin rahatlığı için düşünülmüş golf araçlarımızdan, güvenli otopark alanlarımıza kadar her detay, size özel bir dünya sunar. Burada, mimari doğayla dans ederken, huzur ve estetik bir araya gelir.
                    </p>
                    <img src="/hira-nova-logo.png" alt="HiraNova Decoration" className="vibrant-decoration-logo" />


                </section>

                {/* Section 2: Location (#location-surroundings) - Sticky Horizontal Scroll */}
                <StickyHorizontalSection />

                {/* World System Section */}
                <section className="world-section" style={{ marginBottom: "8rem" }}>
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
                            </div>
                        </div>

                        <div className="world-content-grid">
                            <div className="world-tabs">
                                {worldTabs.map((tab, index) => (
                                    <div key={index} className="world-tab-container">
                                        <div
                                            className={`world-tab-item ${activeWorldTab === index ? 'active' : ''}`}
                                            onClick={() => setActiveWorldTab(index)}
                                        >
                                            <span className="tab-arrow">→</span>
                                            <span className="tab-label">{tab.label}</span>
                                        </div>
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: activeWorldTab === index ? 'auto' : 0,
                                                opacity: activeWorldTab === index ? 1 : 0,
                                                marginTop: activeWorldTab === index ? '1rem' : 0,
                                                marginBottom: activeWorldTab === index ? '1rem' : 0
                                            }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            style={{ overflow: 'hidden' }}
                                            className="world-tab-description"
                                        >
                                            <p>{tab.description}</p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>

                            <div className="world-display">
                                <div className="world-display-image">
                                    <img src={worldTabs[activeWorldTab].image} alt={worldTabs[activeWorldTab].label} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Facility
