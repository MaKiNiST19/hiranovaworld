import Header from '../components/Header'
import Footer from '../components/Footer'
import './Facility.css'

const Facility = () => {
    return (
        <div className="facility-page">
            <Header />
            <main>
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>TESİSİMİZ</h1>
                        <p>HiraNova'nın benzersiz dünyasını keşfedin.</p>
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

export default Facility
