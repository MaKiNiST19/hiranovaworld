import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import './Suits.css'
import '../App.css'

const Gallery = () => {
    useSmoothScroll()
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Gallery images - using existing site images
    const galleryImages = [
        '/tesisimiz.png',
        '/suit-giris.jpg',
        '/suit-yasam-alani.jpg',
        '/suit-mutfak.jpg',
        '/suit-yatak-odasi.jpg',
        '/suit-somine.jpg',
        '/suit-banyo.jpg',
        '/villa-bahce.jpg',
        '/restoran.jpg',
        '/garden-world-1.png',
        '/garden-world-2.png',
        '/urla.png',
        '/destek.jpg',
        '/doganin-kalbinde-adrenalin-ve-ozgurluk.jpeg',
        '/sakinligin-ve-dogalligin-kucaklayici-dokunusu.png',
        '/minik-kasifler-icin-sinirsiz-elglence-ve-guven.png',
        '/gecelerinize-keyif-katan-eglence-dolu-anlar.png',
        '/zihninizi-ve-bedeninizi-simartan-bir-deneyim.jpeg',
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
                            ANLARIN ÖTESİNDE,<br />
                            <span className="text-italic">BİR YAŞAM</span><br />
                            SANATI
                        </h1>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="gallery-slider-section">
                    <div className="gallery-main-wrapper">
                        {/* Navigation Arrows */}
                        <button className="gallery-nav gallery-prev">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Main Swiper */}
                        <Swiper
                            modules={[Navigation, Thumbs, Autoplay]}
                            navigation={{
                                prevEl: '.gallery-prev',
                                nextEl: '.gallery-next',
                            }}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            className="gallery-main-swiper"
                        >
                            {galleryImages.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <div className="gallery-main-slide">
                                        <img src={src} alt={`HiraNova ${index + 1}`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button className="gallery-nav gallery-next">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Thumbnails */}
                    <Swiper
                        modules={[Thumbs]}
                        onSwiper={setThumbsSwiper}
                        slidesPerView={8}
                        spaceBetween={12}
                        watchSlidesProgress={true}
                        className="gallery-thumbs-swiper"
                        breakpoints={{
                            320: { slidesPerView: 4 },
                            640: { slidesPerView: 6 },
                            1024: { slidesPerView: 8 },
                            1400: { slidesPerView: 10 },
                        }}
                    >
                        {galleryImages.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="gallery-thumb-slide">
                                    <img src={src} alt={`Thumb ${index + 1}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Gallery
