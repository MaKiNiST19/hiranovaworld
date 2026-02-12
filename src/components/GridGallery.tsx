import React, { useState, useEffect, useCallback } from 'react'
import './GridGallery.css'

const GridGallery = () => {
    // Placeholder images from the gallery folder
    const images = [
        "/gallery-1.png",
        "/gallery-2.png",
        "/gallery-3.png",
        "/gallery-4.png",
        "/gallery-5.png",
        "/gallery-6.png"
    ];

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        document.body.style.overflow = ''; // Restore scrolling
    };

    const showNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
    }, [selectedIndex, images.length]);

    const showPrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
    }, [selectedIndex, images.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, showNext, showPrev]);

    return (
        <section className="grid-gallery-section">
            <div className="grid-gallery-bg-image">
                <img src="/decor-leaves.png" alt="Decor" />
            </div>

            <div className="grid-gallery-container">
                <div className="grid-gallery-header">
                    <h2 className="grid-gallery-title">GALERİ</h2>
                </div>

                <div className="grid-gallery-grid">
                    {images.map((src, index) => (
                        <div key={index} className="grid-gallery-item" onClick={() => openLightbox(index)}>
                            <img src={src} alt={`Gallery Image ${index + 1}`} loading="lazy" decoding="async" />
                            <div className="grid-gallery-overlay">
                                <span>BÜYÜT</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>&times;</button>

                    <button className="lightbox-nav-btn lightbox-prev" onClick={showPrev}>
                        &#10094;
                    </button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={images[selectedIndex]} alt={`Full Screen Gallery ${selectedIndex + 1}`} />
                        <div className="lightbox-counter">
                            {selectedIndex + 1} / {images.length}
                        </div>
                    </div>

                    <button className="lightbox-nav-btn lightbox-next" onClick={showNext}>
                        &#10095;
                    </button>
                </div>
            )}
        </section>
    )
}

export default GridGallery
