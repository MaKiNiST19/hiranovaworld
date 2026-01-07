import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
    const navigationLinks = [
        { label: 'ANA SAYFA', href: '#hero' },
        { label: 'YAŞAM MODELLERİ', href: '#life-models' },
        { label: 'DÜNYA', href: '#world-selector' },
        { label: 'KONUM', href: '#map' },
        { label: 'GALERİ', href: '#life-gallery' },
        { label: 'İLETİŞİM', href: '#contact' },
    ]

    const legalLinks = [
        { label: 'GİZLİLİK POLİTİKASI', href: '#' },
        { label: 'ŞARTLAR VE KOŞULLAR', href: '#' },
        { label: 'KVKK', href: '#' },
    ]

    return (
        <footer className="footer-section">
            {/* Decorative leaf pattern overlay */}
            <div className="footer-leaf-pattern"></div>

            <div className="footer-container">
                {/* Logo */}
                <div className="footer-logo-wrapper">
                    <img src="/beyaz-logo.png" alt="HiraNova" className="footer-logo" />
                </div>

                {/* Navigation Links */}
                <nav className="footer-nav">
                    {navigationLinks.map((link, index) => (
                        <a key={index} href={link.href} className="footer-nav-link">
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Vertical Divider Line */}
                <div className="footer-divider"></div>

                {/* Address */}
                <div className="footer-address">
                    <p>SAPANCA, SAKARYA</p>
                    <p>TÜRKİYE</p>
                </div>

                {/* Social Media */}
                <div className="footer-social">
                    <a href="https://instagram.com/hiranova" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                </div>

                {/* Legal Links */}
                <div className="footer-legal">
                    {legalLinks.map((link, index) => (
                        <React.Fragment key={index}>
                            <a href={link.href} className="footer-legal-link">
                                {link.label}
                            </a>
                            {index < legalLinks.length - 1 && <span className="footer-legal-separator">|</span>}
                        </React.Fragment>
                    ))}
                </div>

                {/* Copyright */}
                <div className="footer-copyright">
                    <p>© 2025 HiraNova. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
