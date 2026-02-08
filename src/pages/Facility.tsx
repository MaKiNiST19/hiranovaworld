import { useRef, useEffect, MouseEvent } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import './Suits.css'
import '../App.css'

const Facility = () => {
    useSmoothScroll()
    // Sticky Horizontal Scroll Component
    const StickyHorizontalSection = () => {
        const containerRef = useRef<HTMLDivElement>(null);
        const stickyRef = useRef<HTMLDivElement>(null);
        const trackRef = useRef<HTMLDivElement>(null);
        const progressBarRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const calculateDimensions = () => {
                if (!containerRef.current || !trackRef.current) return;

                // Calculate total scrollable width
                const scrollWidth = trackRef.current.scrollWidth;
                const windowWidth = window.innerWidth;
                const scrollAmount = scrollWidth - windowWidth;

                // Set container height to allow for full horizontal scroll
                // Make it taller so scroll feels natural (e.g. 3x width or 1:1 pixel mapping)
                containerRef.current.style.height = `${scrollWidth}px`;
            };

            const handleScroll = () => {
                if (!containerRef.current || !stickyRef.current || !trackRef.current || !progressBarRef.current) return;

                const containerTop = containerRef.current.offsetTop;
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;

                // Calculate scroll progress within the container
                // Start scrolling when container top hits viewport top (sticky behavior)
                const startScroll = containerTop;
                const endScroll = startScroll + (containerRef.current.offsetHeight - windowHeight);

                if (scrollY >= startScroll && scrollY <= endScroll) {
                    // We are inside the scroll zone
                    const totalScrollDistance = endScroll - startScroll;
                    const currentScroll = scrollY - startScroll;
                    const progress = currentScroll / totalScrollDistance;

                    const trackScrollWidth = trackRef.current.scrollWidth - window.innerWidth;
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

            window.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('resize', calculateDimensions);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', calculateDimensions);
            };
        }, []);

        return (
            <section className="horizontal-section-container" ref={containerRef} id="location-surroundings">
                <div className="horizontal-scroll-wrapper" ref={stickyRef}>
                    <div className="horizontal-scroll-track" ref={trackRef} style={{ gap: '0' }}>

                        {/* PILLAR 1: KONUM VE ÇEVRE */}
                        <div className="h-panel-intro">
                            <h2 className="h-intro-title">
                                KONUM<br />VE ÇEVRE
                            </h2>
                            <div className="h-intro-desc-box">
                                <p>
                                    HiraNova, Ege'nin incisi Urla'nın büyüleyici doğasında, huzur ve ayrıcalığın buluştuğu stratejik bir noktadadır. Şehrin karmaşasından uzak, ancak tüm önemli merkezlere kolay erişim.
                                </p>
                            </div>
                            <img src="/izmir.jpg" alt="Izmir Location" className="h-intro-image-small" />
                        </div>

                        <div className="h-panel-image">
                            <img src="/mentes.jpg" alt="Mentes Coast" className="h-large-image" />
                        </div>

                        <div className="h-panel-content">
                            <h2>STRATEJİK<br />YAŞAM</h2>
                            <p style={{ marginBottom: '3rem' }}>
                                Menteş Sahili'ne yürüme mesafesinde, Karantina Adası ve Urla merkezine komşu. Ulaşım kolaylığı ve doğanın kalbi bir arada.
                            </p>
                            <div className="location-icon-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div className="location-icon-box">
                                    <div className="location-icon-wrapper"><img src="/pin.svg" alt="Pin" /></div>
                                    <h3>Merkezi Konum</h3>
                                </div>
                                <div className="location-icon-box">
                                    <div className="location-icon-wrapper"><img src="/tarih.svg" alt="History" /></div>
                                    <h3>Tarihi Doku</h3>
                                </div>
                            </div>
                        </div>


                        {/* PILLAR 2: HUZUR VE DOĞA (Architecture & Nature) */}
                        <div className="h-panel-intro" style={{ marginLeft: '10vw' }}>
                            <h2 className="h-intro-title">
                                DOĞA<br />VE HUZUR
                            </h2>
                            <div className="h-intro-desc-box">
                                <p>
                                    Yeşilin her tonunu barındıran peyzajımız ve modern mimarimiz ile ruhunuzu dinlendiren bir atmosfer sunuyoruz. Kuş sesleri ve rüzgarın melodisi eşliğinde.
                                </p>
                            </div>
                            <img src="/peyzaj-1.png" alt="Nature" className="h-intro-image-small" />
                        </div>

                        <div className="h-panel-image">
                            <img src="/peyzaj-2.png" alt="Landscape View" className="h-large-image" />
                        </div>

                        <div className="h-panel-content">
                            <h2>MODERN<br />PEYZAJ</h2>
                            <p style={{ marginBottom: '3rem' }}>
                                Geniş bahçeler, özel yürüyüş yolları ve doğayla bütünleşen mimari detaylar. Her köşe huzur için tasarlandı.
                            </p>
                            <div className="location-icon-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div className="location-icon-box">
                                    <div className="location-icon-wrapper"><img src="/flower.svg" alt="Nature" /></div>
                                    <h3>Yeşil Alanlar</h3>
                                </div>
                                <div className="location-icon-box">
                                    <div className="location-icon-wrapper"><img src="/sun.svg" alt="Peace" /></div>
                                    <h3>Sessiz Ortam</h3>
                                </div>
                            </div>
                        </div>


                        {/* PILLAR 3: LEZZET VE GASTRONOMİ */}
                        <div className="h-panel-intro" style={{ marginLeft: '10vw' }}>
                            <h2 className="h-intro-title">
                                LEZZET<br />VE KEŞİF
                            </h2>
                            <div className="h-intro-desc-box">
                                <p>
                                    Urla'nın ünlü gastronomi rotası üzerinde, yerel lezzetlerin ve dünya mutfağının en seçkin örneklerini deneyimleyin. Bağ yolları ve gurme duraklar sizi bekliyor.
                                </p>
                            </div>
                            <img src="/chef-small.jpg" alt="Gastronomy" className="h-intro-image-small" />
                        </div>

                        <div className="h-panel-image">
                            <img src="/restaurant.jpg" alt="Restaurant Atmosphere" className="h-large-image" />
                        </div>

                        <div className="h-panel-content" style={{ marginRight: '10vw' }}>
                            <h2>GURME<br />ROTALAR</h2>
                            <p style={{ marginBottom: '3rem' }}>
                                Bölgenin en iyi restoranlarına ve şarap bağlarına yakınlık. Damak tadınıza hitap eden eşsiz bir lokasyon avantajı.
                            </p>
                            <div className="location-icon-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div className="location-icon-box">
                                    <div className="location-icon-wrapper"><img src="/sef.svg" alt="Chef" /></div>
                                    <h3>Gastronomi</h3>
                                </div>
                                <div className="location-icon-box">
                                    <div className="location-icon-wrapper"><img src="/wine.svg" alt="Vineyard" /></div>
                                    <h3>Bağ Yolları</h3>
                                </div>
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

                {/* Section 1: Overview (#overview) - Updated Clean Reveal Style */}
                <section id="overview" className="vibrant-intro">
                    <h2 className="reveal-text-large">
                        HİRANOVA, SADECE BİR KONAKLAMA <br />
                        DEĞİL, BİR YAŞAM FELSEFESİDİR. <br />
                        TESİSİMİZ, URLA'NIN BÜYÜLEYİCİ <br />
                        DOĞASINDA YÜKSELİR.
                    </h2>
                    <p className="vibrant-subtext">
                        Her biri özenle konumlandırılmış villalarımızdan, yemyeşil peyzajımıza, misafirlerimizin rahatlığı için düşünülmüş golf araçlarımızdan, güvenli otopark alanlarımıza kadar her detay, size özel bir dünya sunar. Burada, mimari doğayla dans ederken, huzur ve estetik bir araya gelir.
                    </p>
                    <img src="/hira-nova-logo.png" alt="HiraNova Decoration" className="vibrant-decoration-logo" />
                </section>

                {/* Section 2: Location (#location-surroundings) - Sticky Horizontal Scroll */}
                <StickyHorizontalSection />


                {/* Section 3: Services (#services) - placeholder */}
                <section id="services" className="feature-section-light">
                    {/* Content will be updated soon */}
                </section>

                {/* Section 4: Life Packages (#life-packages) - placeholder */}
                <section id="life-packages" className="residence-section-style bedroom-variant">
                    {/* Content will be updated soon */}
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Facility
