import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import './Contact.css'
import '../App.css'

const Contact = () => {
    useSmoothScroll()

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page">
            <Header />

            <main className="contact-main">
                <div className="contact-split">
                    {/* Left Side: Information */}
                    <div className="contact-info-side">
                        <span className="contact-pretitle">BİZİMLE TANIŞIN</span>
                        <h1 className="contact-title">İLETİŞİME GEÇİN</h1>

                        <p className="contact-description">
                            YENİ YAŞAMINIZ İÇİN İLK ADIMI ATMAYI MI DÜŞÜNÜYORSUNUZ?
                            SİZE ETRAFI GEZDİRMEKTEN MUTLULUK DUYARIZ.
                            BİR TUR PLANLAMAK İÇİN İLETİŞİM EKİBİMİZLE GÖRÜŞÜN.
                        </p>

                        <div className="contact-details-list" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div className="contact-detail-item">
                                <strong style={{ display: 'block', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.2rem', color: '#1a1a1a' }}>PHONE</strong>
                                <a href="tel:+902320000000" style={{ textDecoration: 'none', color: '#333', fontSize: '1.1rem' }}>+90 (232) 000 00 00</a>
                            </div>
                            <div className="contact-detail-item">
                                <strong style={{ display: 'block', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.2rem', color: '#1a1a1a' }}>EMAIL</strong>
                                <a href="mailto:info@hiranovaworld.com" style={{ textDecoration: 'none', color: '#333', fontSize: '1.1rem' }}>info@hiranovaworld.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="contact-form-side">
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">ADINIZ*</label>
                                    <input type="text" className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">SOYADINIZ*</label>
                                    <input type="text" className="form-input" required />
                                </div>
                            </div>

                            <div className="form-group" style={{ marginBottom: '2rem' }}>
                                <label className="form-label">E-POSTA ADRESİ*</label>
                                <input type="email" className="form-input" required />
                            </div>

                            <div className="form-group" style={{ marginBottom: '2rem' }}>
                                <label className="form-label">TELEFON</label>
                                <input type="tel" className="form-input" />
                            </div>

                            <div className="form-group form-group-select" style={{ marginBottom: '2rem' }}>
                                <label className="form-label">ÜNİTE TERCİHİ</label>
                                <select className="form-select">
                                    <option value="">Seçiniz</option>
                                    <option value="suit">Suit Villa</option>
                                    <option value="garden">Bahçeli Villa</option>
                                </select>
                            </div>

                            <div className="form-group form-group-select" style={{ marginBottom: '2rem' }}>
                                <label className="form-label">FİYAT ARALIĞI</label>
                                <select className="form-select">
                                    <option value="">Seçiniz</option>
                                    <option value="standard">Standart</option>
                                    <option value="premium">Premium</option>
                                </select>
                            </div>

                            <div className="form-group form-group-select" style={{ marginBottom: '2rem' }}>
                                <label className="form-label">BİZİ NEREDEN DUYDUNUZ?*</label>
                                <select className="form-select" required>
                                    <option value="">Seçiniz</option>
                                    <option value="social">Sosyal Medya</option>
                                    <option value="friend">Arkadaş Tavsiyesi</option>
                                    <option value="ads">Reklamlar</option>
                                    <option value="other">Diğer</option>
                                </select>
                            </div>

                            <div className="form-group form-group-select" style={{ marginBottom: '2rem' }}>
                                <label className="form-label">EMLAK DANIŞMANIYIM?</label>
                                <select className="form-select">
                                    <option value="no">Hayır</option>
                                    <option value="yes">Evet</option>
                                </select>
                            </div>

                            <div className="form-group" style={{ marginBottom: '2rem' }}>
                                <label className="form-label">MESAJ</label>
                                <textarea className="form-textarea" rows={4}></textarea>
                            </div>

                            <button type="submit" className="submit-btn" style={{ writingMode: 'vertical-rl', float: 'right', padding: '1rem 0.5rem', height: '100px', display: 'none' }}>
                                {/* The typical side button from the design might be hard to make responsive purely broadly, sticky button style maybe? 
                                    Let's stick to a normal button for usability first, match color though.
                                */}
                            </button>

                            <button type="submit" className="submit-btn" style={{ width: '100%', float: 'none', writingMode: 'horizontal-tb' }}>
                                GÖNDER
                            </button>

                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Contact
