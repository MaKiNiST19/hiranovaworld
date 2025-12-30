import React from 'react';
import './CallToAction.css';

const CallToAction: React.FC = () => {


    return (
        <section className="cta-section">
            <div className="cta-container">
                <div className="decor-lines-bg">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <div key={i} className="decor-line"></div>
                    ))}
                </div>
                {/* content Box */}
                <div className="cta-box">
                    <h2 className="cta-title">HiraNova World ile Tanışmaya Hazır Mısınız?</h2>
                    <button className="cta-button">
                        İletişime Geçin <span className="cta-arrow">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
