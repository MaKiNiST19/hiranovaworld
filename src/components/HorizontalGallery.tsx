import React, { useRef, useEffect } from 'react';
import './HorizontalGallery.css';

const HorizontalGallery: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const galleryImages = Array.from({ length: 10 }, (_, i) => ({
        src: `/gallery/gallery (${i + 1}).jpg`,
        alt: `Gallery image ${i + 1}`
    }));

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !scrollRef.current) return;

            const container = containerRef.current;
            const stickyOffset = container.offsetTop;
            const scrollHeight = container.offsetHeight - window.innerHeight;
            const scrolled = window.scrollY - stickyOffset;

            if (scrolled >= 0 && scrolled <= scrollHeight) {
                const scrollLimit = 0.85;
                const rawProgress = scrolled / scrollHeight;
                const progress = Math.min(rawProgress / scrollLimit, 1);

                const maxTranslate = scrollRef.current.scrollWidth - window.innerWidth;
                scrollRef.current.style.transform = `translateX(-${progress * maxTranslate}px)`;

                // Individual Parallax for each item
                const items = scrollRef.current.querySelectorAll('.gallery-item');
                items.forEach((item: any) => {
                    const rect = item.getBoundingClientRect();
                    const winWidth = window.innerWidth;

                    // Item'ın ekrandaki yatay pozisyonuna göre progress hesapla
                    // Ekranın en sağında girdiğinde 0, en solunda çıktığında 1
                    const itemProgress = (rect.left + rect.width) / (winWidth + rect.width);
                    const clampedProgress = Math.max(0, Math.min(1, 1 - itemProgress));

                    const img = item.querySelector('img');
                    if (img) {
                        // Görseli -10% ile +10% arası kaydırıyoruz (bleeding payı kadar)
                        const parallaxVal = (clampedProgress * 20) - 10;
                        img.style.transform = `scale(1.1) translateX(${parallaxVal}%)`;
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div ref={containerRef} className="horizontal-gallery-wrapper">
            <div className="decor-lines-bg">
                {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="decor-line"></div>
                ))}
            </div>

            <div className="sticky-content">
                <div ref={scrollRef} className="horizontal-scroll-container">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image.src} alt={image.alt} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HorizontalGallery;
