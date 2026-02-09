import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Map from '../components/Map'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import './Suits.css'
import '../App.css'

// Tab kategorileri ve içerikleri
interface LocationItem {
    name: string;
    distance: string;
}

interface LocationCategory {
    id: string;
    icon: string;
    title: string;
    items: LocationItem[];
}

const locationCategories: LocationCategory[] = [
    {
        id: 'beaches',
        icon: '🏖️',
        title: 'PLAJLAR & SAHİLLER',
        items: [
            { name: 'Menteş Sahili', distance: '27 km' },
            { name: 'Çeşme Altı Plajı', distance: '16 km' },
            { name: 'Liman Plajı', distance: '15 km' },
            { name: 'Urla İskele', distance: '8 km' },
        ]
    },
    {
        id: 'culture',
        icon: '🏛️',
        title: 'KÜLTÜR & TARİH',
        items: [
            { name: 'Karantina Adası', distance: '12 km' },
            { name: 'Urla Merkez', distance: '5 km' },
            { name: 'Klazomenai Antik Kenti', distance: '7 km' },
            { name: 'Limantepe Höyüğü', distance: '6 km' },
        ]
    },
    {
        id: 'gastronomy',
        icon: '🍷',
        title: 'GASTRONOMİ & BAĞLAR',
        items: [
            { name: 'Urla Bağ Yolu', distance: '3 km' },
            { name: 'Urla Şarapçılık', distance: '4 km' },
            { name: 'Urlice Vineyard', distance: '5 km' },
            { name: 'Usca Winery', distance: '6 km' },
        ]
    },
    {
        id: 'health',
        icon: '🏥',
        title: 'SAĞLIK & HİZMETLER',
        items: [
            { name: 'Urla Devlet Hastanesi', distance: '6 km' },
            { name: 'Özel Eczaneler', distance: '5 km' },
            { name: 'Sağlık Ocağı', distance: '4 km' },
        ]
    },
    {
        id: 'transport',
        icon: '✈️',
        title: 'ULAŞIM',
        items: [
            { name: 'İzmir Adnan Menderes Havalimanı', distance: '45 km' },
            { name: 'İzmir Şehir Merkezi', distance: '35 km' },
            { name: 'Çeşme', distance: '40 km' },
        ]
    },
];

const Location = () => {
    useSmoothScroll()
    const [activeCategory, setActiveCategory] = useState<string>('beaches')

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const activeData = locationCategories.find(cat => cat.id === activeCategory);

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
                            URLA'NIN KALBİNDE,<br />
                            <span className="text-italic">AYRICALIKLI</span><br />
                            BİR DÜNYA
                        </h1>
                    </div>
                </section>

                {/* Map Section */}
                <Map />

                {/* Neighborhood Info Section */}
                <section className="neighborhood-section">
                    <div className="neighborhood-container">
                        {/* Left Side - Categories */}
                        <div className="neighborhood-sidebar">
                            <h2 className="neighborhood-title">ÇEVRE</h2>

                            {locationCategories.map((category) => (
                                <div key={category.id} className="neighborhood-category">
                                    <button
                                        className={`neighborhood-category-btn ${activeCategory === category.id ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(category.id)}
                                    >
                                        <span className="category-icon">{category.icon}</span>
                                        <span className="category-title">{category.title}</span>
                                        <span className="category-toggle">
                                            {activeCategory === category.id ? '−' : '+'}
                                        </span>
                                    </button>

                                    {/* Expandable Items */}
                                    <div className={`neighborhood-items ${activeCategory === category.id ? 'expanded' : ''}`}>
                                        {category.items.map((item, idx) => (
                                            <div key={idx} className="neighborhood-item">
                                                <span className="item-number">{String(idx + 1).padStart(2, '0')}</span>
                                                <span className="item-name">{item.name}</span>
                                                <span className="item-distance">{item.distance}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Side - Featured Image */}
                        <div className="neighborhood-featured">
                            <div className="neighborhood-featured-image">
                                <img src="/urla.png" alt="Urla Bölgesi" />
                            </div>
                            {activeData && (
                                <div className="neighborhood-featured-info">
                                    <h3>{activeData.title}</h3>
                                    <p>HiraNova'dan bölgenin en önemli noktalarına kolay erişim imkanı.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Location
