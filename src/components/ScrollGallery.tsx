import React, { useEffect, useRef, useState } from 'react';
import './ScrollGallery.css';

type GalleryItemType = 'image' | 'text';

interface GalleryItem {
    id: number;
    type: GalleryItemType;
    src?: string;
    size?: 'small' | 'medium' | 'large' | 'tall';
    alignment?: 'top' | 'center' | 'bottom';
    title: string;
    desc: string;
}

const items: GalleryItem[] = [
    {
        id: 0,
        type: 'text',
        title: 'Keşfedilecek Detaylar',
        desc: "HiraNova'nın her köşesinde sizi bekleyen yeni bir yaşam deneyimi var. Doğanın dokusunu modern yaşamın konforuyla buluşturduk.",
        alignment: 'center'
    },
    {
        id: 1,
        type: 'image',
        src: '/gallery/gallery (1).jpg',
        size: 'large',
        alignment: 'bottom',
        title: 'Doğal Yaşam',
        desc: 'Yeşilin her tonunun içinde huzurlu bir hayat.'
    },
    {
        id: 2,
        type: 'image',
        src: '/gallery/gallery (5).jpg',
        size: 'medium',
        alignment: 'bottom',
        title: 'Sosyal Alanlar',
        desc: 'Komşularla keyifli vakit geçirebileceğiniz buluşma noktaları.'
    },
    {
        id: 3,
        type: 'image',
        src: '/gallery/gallery (10).jpg',
        size: 'tall',
        alignment: 'center',
        title: 'Modern Mimari',
        desc: 'Estetik ve fonksiyonelliğin mükemmel uyumu.'
    },
    {
        id: 99,
        type: 'text',
        title: 'Ayrıcalıklı Yaşam',
        desc: "Sadece bir ev değil, her anından keyif alacağınız bütüncül bir yaşam konsepti. Güvenlikten sosyal donatılara her şey düşünüldü.",
        alignment: 'center'
    },
    {
        id: 4,
        type: 'image',
        src: '/gallery/gallery (14).jpg',
        size: 'small',
        alignment: 'top',
        title: 'Spor ve Aktivite',
        desc: 'Sağlıklı yaşam için özel tasarlanmış parkurlar.'
    },
    {
        id: 5,
        type: 'image',
        src: '/gallery/gallery (8).jpg',
        size: 'large',
        alignment: 'bottom',
        title: 'Çocuk Oyun Alanları',
        desc: 'Çocuklarınızın güvenle oynayabileceği özel alanlar.'
    },
    {
        id: 6,
        type: 'image',
        src: '/gallery/gallery (3).jpg',
        size: 'medium',
        alignment: 'center',
        title: 'Huzurlu Akşamlar',
        desc: 'Günün yorgunluğunu atabileceğiniz sessiz köşeler.'
    }
];

const ScrollGallery: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !trackRef.current) return;

            const section = sectionRef.current;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;

            const scrolled = window.scrollY - sectionTop;
            const maxScroll = sectionHeight - windowHeight;

            let percentage = (scrolled / maxScroll) * 100;
            percentage = Math.max(0, Math.min(percentage, 100));
            setProgress(percentage);

            const trackWidth = trackRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;
            const maxTranslate = trackWidth - viewportWidth + viewportWidth * 0.2; // Adjusted buffer

            const translateX = -(percentage / 100) * maxTranslate;

            trackRef.current.style.transform = `translateX(${translateX}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <section ref={sectionRef} className="scroll-gallery-section" id="life-gallery">
            <div className="gallery-sticky-wrapper">

                {/* Horizontal Moving Track */}
                <div className="gallery-track-container">
                    <div ref={trackRef} className="gallery-track">
                        {items.map((item) => (
                            <React.Fragment key={item.id}>
                                {item.type === 'text' ? (
                                    <div className="gallery-text-block">
                                        <h2 className="gallery-title">{item.title}</h2>
                                        <p className="gallery-desc">{item.desc}</p>
                                    </div>
                                ) : (
                                    <div className={`gallery-item size-${item.size} align-${item.alignment || 'center'}`}>
                                        <img src={item.src} alt={item.title} className="gallery-img" />

                                        {/* Tooltip Trigger */}
                                        <div className="tooltip-trigger">+</div>

                                        {/* Tooltip Card */}
                                        <div className="tooltip-card">
                                            <h4 className="tooltip-title">{item.title}</h4>
                                            <p className="tooltip-text">{item.desc}</p>
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="gallery-progress-container">
                    <div className="progress-fill" style={{ width: `${progress}%` }}>
                        <div className="progress-indicator">→</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ScrollGallery;
