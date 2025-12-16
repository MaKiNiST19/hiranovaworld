import React from 'react'
import './LifeValueGrid.css'

interface BentoGridProps {
  children: React.ReactNode
}

interface BentoCardProps {
  title: string
  children: React.ReactNode
  variant?: 'hero' | 'tall' | 'wide' | 'standard'
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children }) => {
  return <div className="bento-grid">{children}</div>
}

export const BentoCard: React.FC<BentoCardProps> = ({ title, children, variant = 'standard' }) => {
  return (
    <article className={`bento-card bento-card--${variant}`}>
      <h4 className="bento-title">{title}</h4>
      <div className="bento-body">{children}</div>
    </article>
  )
}

const LifeValueGrid: React.FC = () => {
  return (
    <section id="lifemodel-values" className="life-values-section">
      <div className="life-values-inner">
        <BentoGrid>
          <BentoCard title="Kira Yerine Geçen Değer" variant="hero">
            <p className="bento-text-strong">Bugün şehirde ödenen kiralar sürekli artar, karşılığı belirsizdir.</p>
            <p className="bento-text">
              HiraNova&apos;da ise beş yıl boyunca sabit yaşam hakkı, kira artışı olmadan öngörülebilir ve planlanabilir bir yaşam sunar.
            </p>
            <p className="bento-text">Aynı bütçe ile çok daha net ve sürdürülebilir bir sonuç elde edilir.</p>
          </BentoCard>

          <BentoCard title="Maliyet Kontrolü = Kazanç" variant="hero">
            <p className="bento-text-strong">Birçok kişi için gerçek kazanç, ne ödeyeceğini baştan bilmektir.</p>
            <p className="bento-text">
              HiraNova&apos;da aidatlar öngörülebilir, enerji verimli yapı sistemi sayesinde giderler kontrollüdür ve beklenmedik masraf baskısı azalır.
            </p>
            <p className="bento-text">
              Bu da zihinsel rahatlık, finansal denge ve uzun vadeli güven ortamı oluşturur.
            </p>
          </BentoCard>

          <BentoCard title="Yaşam Kazancı" variant="standard">
            <p className="bento-text-strong">Bazı kazanımlar rakamla ölçülmez.</p>
            <p className="bento-text">
              Doğayla temas, üretime dokunma hissi, çocuklar için güvenli alanlar ve sakin ama sosyal bir çevre,
              günlük yaşam ritmini sağlıklı hale getirir.
            </p>
            <p className="bento-text">HiraNova&apos;da kazanç, hayatın yavaşlayıp derinleşmesiyle başlar.</p>
          </BentoCard>

          <BentoCard title="Sınırlı Sayı, Kalıcı Değer" variant="wide">
            <p className="bento-text-strong">HiraNova sınırlı sayıda katılımcıyla tasarlanmış bir yaşam modelidir.</p>
            <p className="bento-text">
              Bu yaklaşım, kalabalıklaşmayan bir ortam, korunmuş yaşam kalitesi ve uzun vadede güçlü bir değer algısı anlamına gelir.
            </p>
            <p className="bento-text">
              Herkesin kolayca ulaşamadığı, seçici projeler uzun vadede değerini daha iyi korur.
            </p>
          </BentoCard>

          <BentoCard title="Netlik ve Güven" variant="standard">
            <p className="bento-text-strong">HiraNova bir yatırım ya da getiri vaadi sunmaz.</p>
            <p className="bento-text">
              Burada garanti edilen; planlı, sürdürülebilir ve öngörülebilir bir yaşam modelidir.
            </p>
            <p className="bento-text">
              Bu netlik, hukuki riskleri azaltır, güven duygusunu güçlendirir ve doğru profilde katılımcıları çeker.
            </p>
          </BentoCard>
        </BentoGrid>
      </div>
    </section>
  )
}

export default LifeValueGrid


