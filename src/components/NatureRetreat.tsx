import React from 'react';
import './NatureRetreat.css';

const NatureRetreat: React.FC = () => {
    const features = [
        {
            icon: '🏡',
            title: 'Kullanım Hakkı',
            desc: 'Kendiniz konaklayabilir, ailenizle tatil yapabilir veya dönemsel olarak kullanabilirsiniz. Biriminiz size ait bir yaşam alanıdır.'
        },
        {
            icon: '💰',
            title: 'Gelir Hakkı',
            desc: 'Biriminizi HiraNova profesyonel işletmesine bırakabilirsiniz. Rezervasyon, temizlik ve operasyon tek merkezden şeffaf şekilde yönetilir.'
        },
        {
            icon: '🔄',
            title: 'Devir Hakkı',
            desc: 'İlk yıl kullanım sonrası, yönetimin onayıyla biriminizi üçüncü kişilere devredebilirsiniz. Esneklik sizin elinizde.'
        },
        {
            icon: '🛡️',
            title: 'Profesyonel İşletme',
            desc: 'Tüm tesis tek merkezden yönetilir. Karmaşa, bireysel uğraş ve kontrolsüzlük yoktur. Standartlar korunur, değer sürdürülebilir şekilde artar.'
        }
    ];

    return (
        <section className="nature-retreat-section">
            {/* Forest Background */}
            <div className="retreat-artboard">
                <img src="/forest.png" alt="Forest illustration" className="forest-img" />
            </div>

            {/* Content Area with Background */}
            <div className="retreat-content-bg">
                <div className="retreat-content-overlay">
                   

                    <div className="retreat-features">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-row">
                                <div className="feature-icon">{feature.icon}</div>
                                <div className="feature-content">
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-desc">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="retreat-header">
                        <h2 className="retreat-title">Doğanın İçinde, Otel Konforunda</h2>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NatureRetreat;
