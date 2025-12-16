import { useEffect } from 'react'
import Lenis from 'lenis'

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Lenis instance'ı window'a ekle (Hero bileşeni için)
    ;(window as any).lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // HTML'e lenis class'larını ekle
    document.documentElement.classList.add('lenis', 'lenis-smooth')
    document.documentElement.style.scrollBehavior = 'auto'

    return () => {
      lenis.destroy()
      delete (window as any).lenis
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
    }
  }, [])
}

