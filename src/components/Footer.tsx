import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
    // Main navigation links styled like the example
    const navigationLinks = [
        { label: 'ANASAYFA', href: '/' },
        { label: 'SUİTLER & VİLLALAR', href: '/suits' },
        { label: 'OTEL HAKKINDA', href: '/about' },
        { label: 'ULAŞIM & ÇEVRE', href: '/location' },
        { label: 'İLETİŞİM', href: '/contact' },
    ]

    return (
        <footer className="footer-section">
            {/* Background Decorative Elements */}
            <div className="footer-bg-overlay"></div>

            <div className="footer-content">
                {/* Logo Section */}
                <div className="footer-logo-container">
                    {/* Circle P Logo Style Placeholder */}
                    <div className="footer-circle-logo">
                        <img src="/beyaz-logo.png" alt="HiraNova" />
                    </div>
                </div>

                {/* Main Navigation Links */}
                <nav className="footer-main-nav">
                    {navigationLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.href}
                            className="footer-link-item"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Vertical Divider */}
                <div className="footer-divider-line"></div>

                {/* Address Info */}
                <div className="footer-info-text">
                    <p>URLA / GÜZELBAHÇE</p>
                    <p>İZMİR, TÜRKİYE</p>
                </div>
            </div>

            {/* Side Tab (Optional Book A Tour) */}
            <div className="footer-side-tab">
                <span>REZERVASYON YAP</span>
            </div>
        </footer>
    )
}

export default Footer
