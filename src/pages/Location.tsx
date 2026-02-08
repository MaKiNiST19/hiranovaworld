import Header from '../components/Header'
import Footer from '../components/Footer'
import './Location.css'

const Location = () => {
    return (
        <div className="location-page">
            <Header />
            <main>
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>KONUM AVANTAJLARI</h1>
                        <p>Denize yakın, doğanın içinde, şehrin imkanlarıyla.</p>
                    </div>
                </section>
                <section className="content-section">
                    <div className="container">
                        <h2>Harita ve ulaşım detayları yakında...</h2>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Location
