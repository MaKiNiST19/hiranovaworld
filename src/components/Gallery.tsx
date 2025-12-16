import React, { useState, useEffect } from 'react'
import './Gallery.css'

const Gallery: React.FC = () => {
  // Gallery görsellerini dinamik olarak yükle
  const galleryImages = Array.from({ length: 18 }, (_, i) => ({
    src: `/gallery/gallery (${i + 1}).jpg`,
    alt: `Gallery image ${i + 1}`
  }))

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Önceki ve sonraki görsellerin indexlerini hesapla
  const getPrevIndex = (index: number) => (index - 1 + galleryImages.length) % galleryImages.length
  const getNextIndex = (index: number) => (index + 1) % galleryImages.length

  const prevIndex = getPrevIndex(currentIndex)
  const nextIndex = getNextIndex(currentIndex)

  // Klavye ile navigasyon
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => getPrevIndex(prev))
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => getNextIndex(prev))
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(getPrevIndex(currentIndex))
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(getNextIndex(currentIndex))
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  return (
    <section id="gallery" className="section gallery-section">
      <div className="gallery-container">
        <div className="gallery-slider">
          {/* Önceki görsel - Sol %5 - Blurlu */}
          <div 
            className={`gallery-slide gallery-slide-prev ${isTransitioning ? 'transitioning' : ''}`} 
            onClick={goToPrevious}
          >
            <img 
              src={galleryImages[prevIndex].src} 
              alt={galleryImages[prevIndex].alt}
              loading="lazy"
            />
          </div>

          {/* Ana görsel - Orta %90 */}
          <div className={`gallery-slide gallery-slide-main ${isTransitioning ? 'transitioning' : ''}`}>
            <img 
              src={galleryImages[currentIndex].src} 
              alt={galleryImages[currentIndex].alt}
              loading="lazy"
              key={currentIndex}
            />
          </div>

          {/* Sonraki görsel - Sağ %5 - Blurlu */}
          <div 
            className={`gallery-slide gallery-slide-next ${isTransitioning ? 'transitioning' : ''}`} 
            onClick={goToNext}
          >
            <img 
              src={galleryImages[nextIndex].src} 
              alt={galleryImages[nextIndex].alt}
              loading="lazy"
            />
          </div>
        </div>

        {/* Navigasyon butonları */}
        <button className="gallery-nav gallery-nav-prev" onClick={goToPrevious} aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button className="gallery-nav gallery-nav-next" onClick={goToNext} aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        {/* Thumbnail navigasyon */}
        <div className="gallery-thumbnails">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              className={`gallery-thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
