import Header from '../components/Header'
import Footer from '../components/Footer'
import './Gallery.css'

const Gallery = () => {
    return (
        <div className="gallery-page">
            <Header />
            <main>
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>GALERİ</h1>
                        <p>HiraNova'dan enfes kareler.</p>
                    </div>
                </section>
                <section className="content-section">
                    <div className="container">
                        <h2>Fotoğraf ve video galerisi yakında...</h2>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Gallery
