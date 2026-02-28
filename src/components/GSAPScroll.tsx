'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function GSAPScroll() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 0.58,
            smoothWheel: true,
            wheelMultiplier: 1.15,
            touchMultiplier: 1.2,
            syncTouch: true,
            infinite: false,
        });

        const onLenisScroll = () => {
            ScrollTrigger.update();
        };

        lenis.on('scroll', onLenisScroll);

        const scrollToHashTarget = () => {
            const hash = window.location.hash;
            if (!hash) return;
            const target = document.querySelector<HTMLElement>(hash);
            if (!target) return;
            lenis.scrollTo(target, { offset: -96, duration: 0.9 });
        };

        let rafId = 0;
        const raf = (time: number) => {
            lenis.raf(time);
            rafId = window.requestAnimationFrame(raf);
        };
        rafId = window.requestAnimationFrame(raf);
        window.setTimeout(scrollToHashTarget, 0);
        window.addEventListener('hashchange', scrollToHashTarget);

        const sections = gsap.utils.toArray<HTMLElement>('main section:not(.hero-section)');

        sections.forEach((section) => {
            gsap.fromTo(
                section,
                { autoAlpha: 0, y: 32 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.64,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 90%',
                        once: true,
                    },
                }
            );
        });

        return () => {
            window.cancelAnimationFrame(rafId);
            window.removeEventListener('hashchange', scrollToHashTarget);
            lenis.off('scroll', onLenisScroll);
            lenis.destroy();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return null;
}


