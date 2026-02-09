import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import './Suits.css'
import '../App.css'

const Restaurant = () => {
    useSmoothScroll()

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Gallery images
    const galleryImages = [
        '/restoran-galeri-1.jpg',
        '/restoran-galeri-2.jpg',
        '/restoran-galeri-3.jpg',
        '/restoran-galeri-4.jpg',
        '/restoran-galeri-5.jpg',
        '/restoran-galeri-6.jpg',
    ];

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
                            DAMAKLARDA<br />
                            <span className="text-italic">İZ BIRAKAN</span><br />
                            BİR DENEYİM
                        </h1>
                    </div>

                    <div className="suits-hero-image-wrapper">
                        <img
                            src="/restoran.jpg"
                            alt="HiraNova Restaurant"
                            className="suits-hero-image"
                        />
                    </div>
                </section>

                {/* Intro Text Section */}
                <section className="suits-general-intro">
                    <p className="reveal-text">
                        Şık atmosferde, doğanın ilham verdiği menülerle unutulmaz anlar.</p>
                    <p className="info-description-secondary">
                        HiraNova restoranı, sadece bir yemek mekanı değil, bir lezzet yolculuğudur. Şeflerimizin doğadan ilham alarak hazırladığı menülerde, yöresel ve mevsimlik ürünlerin tazeliği ön plandadır. Her bir tabak, hem göze hem damağa hitap eden bir sanat eseridir. Orman manzarasına karşı, huzurlu bir atmosferde, sevdiklerinizle birlikte unutulmaz gastronomi deneyimleri yaşayın. HiraNova mutfağı, sağlıklı ve lezzetli yaşamın buluşma noktasıdır.
                    </p>
                </section>

                {/* Dark Green Gallery Section */}
                <section className="restaurant-gallery-section">
                    <div className="restaurant-leaf-bg"></div>

                    <div className="masonry-gallery">
                        {galleryImages.map((src, index) => (
                            <div key={index} className="masonry-item">
                                <img src={src} alt={`Restaurant ${index + 1}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Restaurant
