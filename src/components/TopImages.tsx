import React, { useEffect, useRef, useState } from 'react'
import './TopImages.css'

const topImages = [
  '/topimages/top1.jpg',
  '/topimages/top2.jpg',
  '/topimages/top3.jpg',
  '/topimages/top4.jpg',
  '/topimages/top5.jpg',
  '/topimages/top6.jpg',
  '/topimages/top7.jpg',
  '/topimages/top8.jpg',
  '/topimages/top9.jpg',
  '/topimages/top10.jpg',
  '/topimages/top11.jpg'
]

const SCROLL_FACTOR = 0.2 // Daha kısa scroll mesafesi için oran

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value))

const TopImages: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [progress, setProgress] = useState(0)
  const [sectionHeight, setSectionHeight] = useState<number>(
    (topImages.length + 1) * window.innerHeight * SCROLL_FACTOR
  )
  const tickingRef = useRef(false)

  useEffect(() => {
    const recalcHeight = () => {
      setSectionHeight((topImages.length + 1) * window.innerHeight * SCROLL_FACTOR)
    }

    const handleScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true

      requestAnimationFrame(() => {
        tickingRef.current = false
        if (!sectionRef.current) return

        const sectionTop = sectionRef.current.offsetTop
        const sectionHeightCurrent = sectionRef.current.offsetHeight
        const viewportHeight = window.innerHeight

        const maxScroll = Math.max(1, sectionHeightCurrent - viewportHeight)
        const current = window.scrollY - sectionTop
        const ratio = clamp(current / maxScroll, 0, 1)

        setProgress(ratio)
      })
    }

    recalcHeight()
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', () => {
      recalcHeight()
      handleScroll()
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', () => {
        recalcHeight()
        handleScroll()
      })
    }
  }, [])

  // Faz: scroll ile tüm görsellerin sırasını kapsa, son karede durup sonra serbest bıraksın
  const phase = progress * (topImages.length - 1)
  const currentIndex = Math.min(topImages.length, Math.max(1, Math.floor(phase) + 1))

  const handleSkip = () => {
    if (!sectionRef.current) return
    const target = sectionRef.current.offsetTop + sectionRef.current.offsetHeight
    window.scrollTo({ top: target, behavior: 'smooth' })
  }

  return (
    <section
      id="top-images"
      ref={sectionRef}
      className="top-images-section"
      style={{ height: `${sectionHeight}px` }} // +1 ekran: son görsel sonrası serbest bırakmak için
    >
      <div className="top-images-sticky">
        <div className="top-images-overlay" />
        <div className="top-images-indicator">
          <div className="top-images-counter">
            {currentIndex}/{topImages.length}
          </div>
          <button className="top-images-skip" onClick={handleSkip}>
            Atla
          </button>
        </div>
        {topImages.map((src, idx) => {
          const activeIndex = Math.min(
            topImages.length - 1,
            Math.max(0, Math.floor(phase + 0.0001))
          )
          const isActive = idx === activeIndex
          const opacity = isActive ? 1 : 0
          const scale = 1

          return (
            <img
              key={src}
              src={src}
              alt={`Top view ${idx + 1}`}
              className="top-image"
              style={{
                opacity,
                transform: `scale(${scale})`
              }}
              loading="lazy"
            />
          )
        })}
      </div>
    </section>
  )
}

export default TopImages

