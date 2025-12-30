import { useEffect } from 'react'

export const useLogoScroll = () => {
  useEffect(() => {
    const heroLogo = document.getElementById('hero-logo')
    const headerLogo = document.getElementById('header-logo')
    const heroStory = document.getElementById('hero-story')
    const heroCTA = document.getElementById('hero-cta')

    if (!heroLogo || !headerLogo) return

    const handleScroll = (e?: any) => {
      // Lenis kullanıyorsa e.scroll, yoksa window.scrollY
      let scrollY = window.scrollY
      if (e && typeof e === 'object' && 'scroll' in e && typeof e.scroll === 'number') {
        scrollY = e.scroll
      }
      if (isNaN(scrollY)) scrollY = 0
      const windowHeight = window.innerHeight
      const logoAnimRange = windowHeight * 0.3 // 30vh - logo animasyonu (KISALTILDI)

      // Scroll progress (0-1)
      const logoProgress = Math.min(scrollY / logoAnimRange, 1) // 0-30vh için

      // Header logo pozisyonunu hesapla
      const getHeaderLogoPosition = () => {
        const headerRect = headerLogo.getBoundingClientRect()
        return {
          x: headerRect.left + headerRect.width / 2, // X ortası
          y: headerRect.top + headerRect.height / 2  // Y ortası
        }
      }

      // === LOGO ANİMASYONU (0-50vh) ===
      if (scrollY <= logoAnimRange) {
        // Header logo pozisyonunu al
        const headerPos = getHeaderLogoPosition()

        // Hero logo başlangıç pozisyonu
        const startX = window.innerWidth / 2 // Ekran ortası
        const startY = windowHeight * 0.35 // 35vh
        const startScale = 1.0

        // Header logo hedef pozisyonu
        const endX = headerPos.x
        const endY = headerPos.y
        const endScale = 45 / 300 // Header'da 45px, hero'da 300px

        // Interpolasyon
        const currentX = startX + (endX - startX) * logoProgress
        const currentY = startY + (endY - startY) * logoProgress
        const currentScale = startScale + (endScale - startScale) * logoProgress

        heroLogo.style.opacity = '1'
        heroLogo.style.left = `${currentX}px`
        heroLogo.style.top = `${currentY}px`
        heroLogo.style.transform = `translate(-50%, -50%) scale(${currentScale})`

        // Header logo - logo animasyonu bitince görünsün
        const headerOpacity = logoProgress > 0.9 ? (logoProgress - 0.9) / 0.1 : 0
        headerLogo.style.opacity = headerOpacity.toString()
      } else {
        // Logo animasyonu bitti, header'da sabit
        const headerPos = getHeaderLogoPosition()
        const endScale = 45 / 300

        heroLogo.style.opacity = '0'
        heroLogo.style.left = `${headerPos.x}px`
        heroLogo.style.top = `${headerPos.y}px`
        heroLogo.style.transform = `translate(-50%, -50%) scale(${endScale})`

        headerLogo.style.opacity = '1'
      }

      // === HİKAYE PARAGRAFI (20-150vh fade in, 150-170vh fade out) ===
      if (heroStory) {
        const storyStart = windowHeight * 0.2 // 20vh - daha erken başlıyor
        const storyFadeInEnd = windowHeight * 0.4 // 40vh - fade in bitiş
        const storyFadeOutStart = windowHeight * 1.5 // 150vh - fade out başlangıcı (UZATILDI)
        const storyEnd = windowHeight * 1.7 // 170vh - tamamen gizli

        if (scrollY >= storyStart && scrollY < storyFadeInEnd) {
          // Fade in (20-40vh)
          const fadeInProgress = (scrollY - storyStart) / (storyFadeInEnd - storyStart)
          heroStory.style.opacity = fadeInProgress.toString()
          heroStory.style.transform = `translate(-50%, -50%) translateY(${(1 - fadeInProgress) * 20}px)`
        } else if (scrollY >= storyFadeInEnd && scrollY < storyFadeOutStart) {
          // Tam görünür (40-150vh) - 110vh boyunca görünür
          heroStory.style.opacity = '1'
          heroStory.style.transform = 'translate(-50%, -50%) translateY(0)'
        } else if (scrollY >= storyFadeOutStart && scrollY < storyEnd) {
          // Fade out (150-170vh)
          const fadeOutProgress = (scrollY - storyFadeOutStart) / (storyEnd - storyFadeOutStart)
          heroStory.style.opacity = (1 - fadeOutProgress).toString()
          heroStory.style.transform = `translate(-50%, -50%) translateY(${fadeOutProgress * 20}px)`
        } else if (scrollY < storyStart) {
          heroStory.style.opacity = '0'
          heroStory.style.transform = 'translate(-50%, -50%) translateY(20px)'
        } else {
          // 170vh'den sonra tamamen gizli
          heroStory.style.opacity = '0'
          heroStory.style.transform = 'translate(-50%, -50%) translateY(20px)'
        }
      }

      // === CTA YAZISI (170-200vh fade in, 200-350vh görünür) ===
      if (heroCTA) {
        const ctaStart = windowHeight * 1.7 // 170vh - fade in başlangıcı
        const ctaFullVisible = windowHeight * 2.0 // 200vh - tam görünür
        const ctaEnd = windowHeight * 3.5 // 350vh - hero bitişi (50vh daha uzun)

        if (scrollY >= ctaStart && scrollY < ctaFullVisible) {
          // Fade in (170-200vh)
          const fadeInProgress = (scrollY - ctaStart) / (ctaFullVisible - ctaStart)
          heroCTA.style.opacity = fadeInProgress.toString()
          heroCTA.style.transform = `translate(-50%, -50%) translateY(${(1 - fadeInProgress) * 20}px)`
        } else if (scrollY >= ctaFullVisible && scrollY < ctaEnd) {
          // Tam görünür (200-350vh) - 150vh scroll alanı (50vh daha uzun)
          heroCTA.style.opacity = '1'
          heroCTA.style.transform = 'translate(-50%, -50%) translateY(0)'
        } else if (scrollY < ctaStart) {
          heroCTA.style.opacity = '0'
          heroCTA.style.transform = 'translate(-50%, -50%) translateY(20px)'
        } else {
          // 350vh'den sonra (alt section'a geçiş)
          heroCTA.style.opacity = '1'
          heroCTA.style.transform = 'translate(-50%, -50%) translateY(0)'
        }
      }
    }

    // Lenis scroll event'i için bekle
    const checkLenis = () => {
      const lenisInstance = (window as any).lenis
      if (lenisInstance) {
        lenisInstance.on('scroll', handleScroll)
        console.log('useLogoScroll: Lenis detected and attached')
      } else {
        window.addEventListener('scroll', handleScroll, { passive: true })
        // Lenis geç yüklenebilir, bir kez daha kontrol et
        setTimeout(() => {
          if ((window as any).lenis && (window as any).lenis !== lenisInstance) {
            window.removeEventListener('scroll', handleScroll)
            checkLenis()
          }
        }, 500)
      }
    }

    checkLenis()
    handleScroll() // İlk durumu ayarla

    return () => {
      window.removeEventListener('scroll', handleScroll)
      const lenisInstance = (window as any).lenis
      if (lenisInstance) lenisInstance.off('scroll', handleScroll)
    }
  }, [])
}

