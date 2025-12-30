import React, { useRef, useEffect } from 'react';
import './Particles.css';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedY: number;
    opacity: number;
    parallaxFactor: number;
}

const Particles: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const animationFrameId = useRef<number>(0);
    const scrollY = useRef<number>(0);

    const createParticles = (width: number, height: number) => {
        const particleCount = Math.floor((width * height) / 10000); // Increased density
        const newParticles: Particle[] = [];

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 2 + 0.8, // Slightly larger
                speedY: Math.random() * 0.2 + 0.1,
                opacity: Math.random() * 0.7 + 0.3, // Brighter
                parallaxFactor: Math.random() * 0.8 + 0.2,
            });
        }
        particles.current = newParticles;
    };

    const draw = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        ctx.clearRect(0, 0, width, height);

        // Set particle color matching the aesthetic (brighter gold/white)
        ctx.fillStyle = '#FFD700'; // Pure Gold for better visibility

        particles.current.forEach((particle) => {
            // Apply parallax effect based on scroll
            const parallaxY = (scrollY.current * particle.parallaxFactor) % height;
            let drawY = (particle.y + parallaxY) % height;
            if (drawY < 0) drawY += height;

            ctx.globalAlpha = particle.opacity;
            ctx.beginPath();
            ctx.arc(particle.x, drawY, particle.size, 0, Math.PI * 2);
            ctx.fill();
        });

        animationFrameId.current = requestAnimationFrame(() => draw(ctx, width, height));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createParticles(canvas.width, canvas.height);
        };

        const handleScroll = (e?: any) => {
      let currentScroll = window.scrollY
      if (e && typeof e === 'object' && 'scroll' in e && typeof e.scroll === 'number') {
        currentScroll = e.scroll
      }
      if (!isNaN(currentScroll)) {
        scrollY.current = currentScroll
      }
    };

        // Use periodic check to ensure Lenis is captured if initialized late
        const checkLenis = () => {
            const lenis = (window as any).lenis;
            if (lenis) {
                lenis.on('scroll', (e: any) => {
                    scrollY.current = e.scroll;
                });
                console.log('Particles: Lenis detected and attached');
            } else {
                window.addEventListener('scroll', handleScroll, { passive: true });
                // Check again after a delay
                setTimeout(() => {
                    const currentLenis = (window as any).lenis;
                    if (currentLenis && currentLenis !== lenis) {
                        window.removeEventListener('scroll', handleScroll);
                        checkLenis();
                    }
                }, 500);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        checkLenis();

        draw(ctx, canvas.width, canvas.height);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            const lenis = (window as any).lenis;
            if (lenis) lenis.off('scroll');
            cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    return <canvas ref={canvasRef} className="particles-canvas" />;
};

export default Particles;
