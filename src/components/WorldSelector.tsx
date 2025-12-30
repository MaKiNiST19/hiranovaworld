import React, { useState } from 'react';
import './WorldSelector.css';

const WorldSelector: React.FC = () => {
    // Persistent mode: 'garden' or 'suit'. Defaults to 'garden'.
    const [activeMode, setActiveMode] = useState<'garden' | 'suit'>('garden');
    // Hover state just for blur/focus effects
    const [hovered, setHovered] = useState<'garden' | 'suit' | null>(null);

    const handleMouseEnter = (mode: 'garden' | 'suit') => {
        setActiveMode(mode);
        setHovered(mode);
    };

    return (
        <section id="worlds" className="world-selector-section">
            <div className="world-container">

                {/* Left Box */}
                <div
                    className={`world-box ${hovered === 'garden' ? 'active' : ''}`}
                    onMouseEnter={() => handleMouseEnter('garden')}
                    onMouseLeave={() => setHovered(null)}
                >
                    {/* Background Layers */}
                    {/* Shows Garden-1 if mode is garden, Suit-1 if mode is suit */}
                    <div
                        className="world-bg"
                        style={{
                            backgroundImage: `url(${activeMode === 'garden' ? '/garden-world-1.png' : '/suit-world-1.png'})`
                        }}
                    ></div>

                    {/* Dark Green Overlay */}
                    <div className="world-overlay"></div>

                    <div className="world-content">
                        <h2 className="world-title">Garden World</h2>
                        <div className="world-details">
                            <p className="world-desc">
                                Doğayla iç içe, yeşilin her tonunu barındıran huzurlu bir yaşam alanı.
                                Organik bahçeler ve sakin yürüyüş yolları sizi bekliyor.
                            </p>
                            <button className="world-btn">İNCELE</button>
                        </div>
                    </div>
                </div>

                {/* Right Box */}
                <div
                    className={`world-box ${hovered === 'suit' ? 'active' : ''}`}
                    onMouseEnter={() => handleMouseEnter('suit')}
                    onMouseLeave={() => setHovered(null)}
                >
                    {/* Background Layers */}
                    {/* Shows Garden-2 if mode is garden, Suit-2 if mode is suit */}
                    <div
                        className="world-bg"
                        style={{
                            backgroundImage: `url(${activeMode === 'garden' ? '/garden-world-2.png' : '/suit-world-2.png'})`
                        }}
                    ></div>

                    {/* Dark Green Overlay */}
                    <div className="world-overlay"></div>

                    <div className="world-content">
                        <h2 className="world-title">Suit World</h2>
                        <div className="world-details">
                            <p className="world-desc">
                                Modern mimarinin zirvesi, otel konforunda rezidans yaşamı.
                                Akıllı ev teknolojileri ve premium hizmetler elinizin altında.
                            </p>
                            <button className="world-btn">İNCELE</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WorldSelector;
