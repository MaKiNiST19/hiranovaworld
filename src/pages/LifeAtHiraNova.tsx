import Header from '../components/Header'
import Footer from '../components/Footer'
import './LifeAtHiraNova.css'

const LifeAtHiraNova = () => {
    return (
        <div className="life-page">
            <Header />
            <main>
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>HIRANOVA'DA YAŞAM</h1>
                        <p>Doğal, sakin ve modern bir yaşam stili.</p>
                    </div>
                </section>
                <section className="content-section">
                    <div className="container">
                        <h2>Detaylar yakında...</h2>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default LifeAtHiraNova
