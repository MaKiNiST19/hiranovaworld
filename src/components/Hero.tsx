import React, { useRef, useEffect } from 'react'
import './Hero.css'

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    const wrapper = wrapperRef.current
    if (!video || !canvas) return

    const ctx = canvas.getContext('2d', { 
      alpha: false,
      desynchronized: true, // Performans için
      willReadFrequently: false
    })
    if (!ctx) return

    // Canvas rendering kalitesini artır
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    let videoDuration = 6 // Varsayılan 6 saniye
    let targetVideoTime = 0
    let currentVideoTime = 0
    let rafId: number | null = null
    let animationRafId: number | null = null

    // Canvas'a video frame çiz (optimize edilmiş)
    const drawVideoFrame = () => {
      if (!ctx || !canvas || !video) return
      
      // Video henüz yüklenmemişse çıkış yap
      if (video.readyState < 2) return
      
      try {
        // Canvas boyutlarını video aspect ratio'suna göre ayarla
        const videoAspect = video.videoWidth / video.videoHeight
        const canvasAspect = canvas.width / canvas.height
        
        let drawWidth, drawHeight, drawX, drawY
        
        if (videoAspect > canvasAspect) {
          // Video daha geniş - yüksekliği tam kullan
          drawHeight = canvas.height
          drawWidth = drawHeight * videoAspect
          drawX = (canvas.width - drawWidth) / 2
          drawY = 0
        } else {
          // Video daha dar - genişliği tam kullan
          drawWidth = canvas.width
          drawHeight = drawWidth / videoAspect
          drawX = 0
          drawY = (canvas.height - drawHeight) / 2
        }
        
        // Canvas'ı temizle (önceki frame'i sil) - sadece gerekli alanı
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        // Video frame'ini canvas'a çiz (optimize edilmiş)
        ctx.drawImage(video, drawX, drawY, drawWidth, drawHeight)
      } catch (error) {
        // Video henüz yüklenmemiş olabilir, sessizce devam et
        // console.warn('Canvas çizim hatası:', error)
      }
    }
    
    // Canvas boyutunu ayarla (retina display için pixel ratio ile)
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const displayWidth = window.innerWidth
      const displayHeight = window.innerHeight
      
      // Canvas'ın gerçek boyutunu pixel ratio'ya göre ayarla
      canvas.width = displayWidth * dpr
      canvas.height = displayHeight * dpr
      
      // Canvas'ın görünen boyutunu ayarla
      canvas.style.width = `${displayWidth}px`
      canvas.style.height = `${displayHeight}px`
      
      // Context'i scale et
      ctx.scale(dpr, dpr)
      
      // Rendering kalitesini tekrar ayarla
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      
      // Video hazırsa frame çiz
      if (video.readyState >= 2) {
        drawVideoFrame()
      }
    }
    
    // Video metadata yüklendiğinde başlangıçta durdur
    const handleLoadedMetadata = () => {
      videoDuration = video.duration || 6
      video.currentTime = 0
      currentVideoTime = 0
      targetVideoTime = 0
      video.pause()
      
      // Hero wrapper yüksekliğini video süresine göre ayarla
      // 6 saniye video + 1 saniye ekstra bekleme = 7 saniye scroll alanı
      // Video bitince 1 saniye daha scroll yapılabilir, hero sabit kalır
      if (wrapper) {
        const extraWaitTime = 1 // 1 saniye ekstra bekleme
        const scrollHeight = (videoDuration + extraWaitTime) * 100 // Her saniye için 100vh (7 saniye = 700vh)
        wrapper.style.height = `${scrollHeight}vh`
        
        // Container yüksekliğini scroll alanı kadar yap (sticky için)
        const container = wrapper.parentElement
        if (container) {
          // Container yüksekliği = wrapper yüksekliği (scroll alanı)
          // Hero sticky olduğu için container'ın yüksekliği scroll alanı kadar olmalı
          container.style.height = `${scrollHeight}vh`
        }
      }
      
      // Canvas'ı ayarla
      resizeCanvas()
      
      // Animation loop'u başlat
      startAnimationLoop()
    }
    
    // Video ilk frame yüklendiğinde canvas'a çiz
    const handleCanPlay = () => {
      console.log('Video can play, drawing first frame')
      drawVideoFrame()
      // Animation loop'u başlat (eğer başlamadıysa)
      startAnimationLoop()
    }

    // Video event listeners
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('loadeddata', handleCanPlay)
    video.addEventListener('canplay', handleCanPlay)
    
    // Video yüklenene kadar bekle
    if (video.readyState === 0) {
      video.load()
    } else if (video.readyState >= 2) {
      // Video zaten yüklüyse
      handleLoadedMetadata()
      handleCanPlay()
    }

    // Direkt scroll senkronizasyonu - scroll başlar başlamaz video hareket etmeli
    const updateVideoTime = () => {
      // Mega menü açıkken video güncellemesini durdur (mevcut durumu koru)
      if (document.body.classList.contains('mega-menu-open')) {
        // Sadece mevcut frame'i çiz, video time'ı güncelleme
        if (video && video.readyState >= 2) {
          drawVideoFrame()
        }
        animationRafId = requestAnimationFrame(updateVideoTime)
        return
      }
      
      if (!video || video.readyState < 2) {
        // Video henüz hazır değilse tekrar dene
        animationRafId = requestAnimationFrame(updateVideoTime)
        return
      }
      
      // Mevcut video zamanını al
      currentVideoTime = video.currentTime || 0
      const timeDifference = targetVideoTime - currentVideoTime
      
      // Çok küçük farklar için direkt güncelle (hızlı tepki için)
      if (Math.abs(timeDifference) < 0.01) {
        if (Math.abs(video.currentTime - targetVideoTime) > 0.01) {
        video.currentTime = targetVideoTime
          currentVideoTime = targetVideoTime
        }
        drawVideoFrame()
      } else {
        // Çok hızlı lerp ile anında tepki (scroll başlar başlamaz video hareket etmeli)
        // Lerp factor: 0.8 (çok hızlı, neredeyse anında)
        const lerpFactor = 0.8
        currentVideoTime += timeDifference * lerpFactor
        
        // Video süresini aşmamasını garanti et
        currentVideoTime = Math.max(0, Math.min(currentVideoTime, videoDuration))
        
        // Video zamanını güncelle (seek maliyetli, ama hızlı tepki için threshold düşük)
        if (Math.abs(video.currentTime - currentVideoTime) > 0.02) {
          video.currentTime = currentVideoTime
        }
        
        // Her frame'de canvas'a çiz
          drawVideoFrame()
      }
      
      // Sürekli animasyon loop'u devam ettir
      animationRafId = requestAnimationFrame(updateVideoTime)
    }
    
    // Continuous animation loop başlat
    const startAnimationLoop = () => {
      if (animationRafId === null) {
        animationRafId = requestAnimationFrame(updateVideoTime)
      }
    }

    window.addEventListener('resize', resizeCanvas)

    // Scroll başlar başlamaz video hareket etmeli - direkt senkronizasyon
    const handleScroll = (e?: { scroll: number } | Event) => {
      // Mega menü açıkken scroll handling'i durdur (hero section'ın durumunu koru)
      if (document.body.classList.contains('mega-menu-open')) {
        return
      }
      
      // Lenis kullanıyorsa e.scroll, yoksa window.scrollY
      const scrollY = (e && 'scroll' in e) ? e.scroll : window.scrollY
      const windowHeight = window.innerHeight
      
      // Video süresine göre scroll alanı hesapla
      // 6 saniye video + 1 saniye ekstra bekleme = 7 saniye scroll alanı
      // Video bitince 1 saniye daha scroll yapılabilir, hero sabit kalır
      const videoScrollRange = videoDuration * windowHeight // Video için scroll alanı
      
      // Video progress hesapla (0-1 arası, video bitince 1'de sabit kalır)
      const videoProgress = Math.min(Math.max(scrollY / videoScrollRange, 0), 1)
      
      // Video zamanını hesapla (0 saniye - video süresi arası)
      // Video bitince (videoProgress = 1) video son frame'de sabit kalır
      targetVideoTime = videoProgress * videoDuration
      
      // Video süresini aşmamasını garanti et (video bitince sabit kalır)
      targetVideoTime = Math.max(0, Math.min(targetVideoTime, videoDuration))
      
      // Animation loop'u başlat (scroll başlar başlamaz)
      startAnimationLoop()
      
      // Video time'ı direkt güncelle (scroll anında tepki için)
      if (video && video.readyState >= 2) {
        // Çok küçük bir lerp ile smooth ama hızlı güncelleme
        const immediateLerp = 0.9
        currentVideoTime = currentVideoTime + (targetVideoTime - currentVideoTime) * immediateLerp
        currentVideoTime = Math.max(0, Math.min(currentVideoTime, videoDuration))
        
        // Video zamanını güncelle
        if (Math.abs(video.currentTime - currentVideoTime) > 0.01) {
          video.currentTime = currentVideoTime
        }
        
        // Frame çiz
        drawVideoFrame()
      }

      // Video her zaman durdurulmuş olmalı (scrub mode)
      if (video && !video.paused) {
        video.pause()
      }
    }

    // Lenis scroll event'i için
    const lenisInstance = (window as any).lenis
    if (lenisInstance) {
      lenisInstance.on('scroll', handleScroll)
    } else {
      window.addEventListener('scroll', handleScroll as EventListener, { passive: true })
    }
    
    return () => {
      const lenisInstance = (window as any).lenis
      if (lenisInstance) {
        lenisInstance.off('scroll', handleScroll)
      } else {
        window.removeEventListener('scroll', handleScroll as EventListener)
      }
      window.removeEventListener('resize', resizeCanvas)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('loadeddata', handleCanPlay)
      video.removeEventListener('canplay', handleCanPlay)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      if (animationRafId !== null) {
        cancelAnimationFrame(animationRafId)
      }
    }
  }, [])

  return (
    <div className="hero-container">
      <section ref={heroRef} className="hero">
        <div className="hero-video-container">
          <canvas ref={canvasRef} className="hero-canvas"></canvas>
          <video
            ref={videoRef}
            className="hero-video-hidden"
            preload="auto"
            muted
            playsInline
            crossOrigin="anonymous"
          >
            <source src="/herovid.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
      <div className="hero-content">
        <div id="hero-logo" className="hero-logo">
          <img src="/beyaz-logo.png" alt="HiraNova" />
        </div>
        <div id="hero-story" className="hero-story">
          <p>HiraNova, doğanın kalbinde yaşamın en saf halini sunuyor. Yağmurla beslenen, güneşle aydınlanan bir dünya... Burada modern konfor ile doğal yaşam bir araya geliyor.</p>
        </div>
        <div id="hero-cta" className="hero-cta">
          <h2>HiraNova ile Tanışmaya Hazır mısın?</h2>
        </div>
        <div className="hero-scroll-indicator">
          <span>Keşfet</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
      <div ref={wrapperRef} className="hero-wrapper-internal"></div>
    </div>
  )
}

export default Hero

