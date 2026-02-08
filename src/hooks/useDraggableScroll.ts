import { useEffect, useRef, useState } from 'react';

export const useDraggableScroll = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const slider = ref.current;
        if (!slider) return;

        const mouseDown = (e: MouseEvent) => {
            setIsDragging(true);
            slider.classList.add('active');
            setStartX(e.pageX - slider.offsetLeft);
            setScrollLeft(slider.scrollLeft);
        };

        const mouseLeave = () => {
            setIsDragging(false);
            slider.classList.remove('active');
        };

        const mouseUp = () => {
            setIsDragging(false);
            slider.classList.remove('active');
        };

        const mouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        };

        slider.addEventListener('mousedown', mouseDown);
        slider.addEventListener('mouseleave', mouseLeave);
        slider.addEventListener('mouseup', mouseUp);
        slider.addEventListener('mousemove', mouseMove);

        return () => {
            slider.removeEventListener('mousedown', mouseDown);
            slider.removeEventListener('mouseleave', mouseLeave);
            slider.removeEventListener('mouseup', mouseUp);
            slider.removeEventListener('mousemove', mouseMove);
        };
    }, [isDragging, startX, scrollLeft]);

    return { ref };
};
