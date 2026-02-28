'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Enable smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';

        // Microsoft-style smooth scroll with Lenis-like behavior
        let scrollY = window.scrollY;
        let targetScrollY = scrollY;
        const ease = 0.08; // Smoothness factor (lower = smoother)

        const smoothScrollFrame = () => {
            targetScrollY = window.scrollY;

            // Interpolate between current and target
            scrollY += (targetScrollY - scrollY) * ease;

            // Update scroll position smoothly
            if (Math.abs(targetScrollY - scrollY) > 0.5) {
                requestAnimationFrame(smoothScrollFrame);
            }
        };

        // Start on scroll
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(smoothScrollFrame);
                ticking = true;
                setTimeout(() => ticking = false, 100);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.documentElement.style.scrollBehavior = '';
        };
    }, []);

    return <>{children}</>;
}
