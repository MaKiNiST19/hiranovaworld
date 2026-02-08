import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import './SuitsAndVillas.css'
import '../App.css'

const SuitsAndVillas = () => {
    useSmoothScroll()

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
                    <div className="suits-container">
                        <div className="suits-hero-content">
                            <span className="suits-hero-tag">SUITLER & VİLLALAR</span>
                            <div className="suits-hero-line"></div>
                            <h1 className="suits-hero-title">
                                DOĞANIN KALBİNDE,<br />
                                <span className="text-italic">HUZURUN MERKEZİNDE.</span>
                            </h1>
                            <p className="suits-hero-desc">
                                Şehrin gürültüsünden uzak, ormanın sessizliğiyle harmanlanmış seçkin bir yaşam.
                            </p>
                        </div>
                    </div>

                    <div className="suits-hero-image-wrapper">
                        <img
                            src="/suitler-villalar.jpg"
                            alt="Suits and Villas"
                            className="suits-hero-image"
                        />
                    </div>
                </section>

                {/* Intro Section - Selection Cards */}
                <section className="suits-intro">
                    <div className="suits-container">
                        <div className="suits-intro-grid">
                            <a href="/suits" className="suits-intro-card">
                                <div className="suits-intro-bg" style={{ backgroundImage: "url('/suits-cover.jpg')" }}></div>
                                <span className="suits-intro-label">SUİTLER</span>
                                <span className="suits-intro-details">DETAYLAR</span>
                            </a>
                            <a href="/villas" className="suits-intro-card">
                                <div className="suits-intro-bg" style={{ backgroundImage: "url('/villas-cover.jpg')" }}></div>
                                <span className="suits-intro-label">VİLLALAR</span>
                                <span className="suits-intro-details">DETAYLAR</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default SuitsAndVillas
