import Header from '../components/Header'
import Footer from '../components/Footer'
import './Restaurant.css'

const Restaurant = () => {
    return (
        <div className="restaurant-page">
            <Header />
            <main>
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>RESTORAN</h1>
                        <p>Eşsiz lezzetler, unutulmaz anlar.</p>
                    </div>
                </section>
                <section className="content-section">
                    <div className="container">
                        <h2>Menü ve detaylar yakında...</h2>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Restaurant
