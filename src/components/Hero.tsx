'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [isThemeReady, setIsThemeReady] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger animations after mount
        setTimeout(() => setIsLoaded(true), 100);
    }, []);

    useEffect(() => {
        const savedTheme = window.localStorage.getItem('fusionkode-theme');
        const frameId = window.requestAnimationFrame(() => {
            if (savedTheme === 'light' || savedTheme === 'dark') {
                setTheme(savedTheme);
            }
            setIsThemeReady(true);
        });

        return () => {
            window.cancelAnimationFrame(frameId);
        };
    }, []);

    useEffect(() => {
        if (!isThemeReady) {
            return;
        }
        document.documentElement.classList.toggle('dark', theme === 'dark');
        window.localStorage.setItem('fusionkode-theme', theme);
    }, [theme, isThemeReady]);

    return (
        <>
            {/* Fixed Navbar */}
            <nav className={`navbar-fixed ${isLoaded ? 'loaded' : ''}`}>
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="navbar-logo">
                        <Link href="#top">FusionKode</Link>
                    </div>

                    {/* Center Links */}
                    <div className="navbar-links">
                        <Link href="#top">Home</Link>
                        <Link href="#about">About</Link>
                        <Link href="#services">Services</Link>
                        <Link href="#work">Work</Link>
                        <Link href="#contact">Contact</Link>
                    </div>

                    {/* Right Section */}
                    <div className="navbar-right">
                        {/* Theme Toggle */}
                        <button
                            type="button"
                            className={`theme-mode-toggle ${theme === 'dark' ? 'is-dark' : 'is-light'}`}
                            aria-label="Toggle day and night mode"
                            aria-pressed={theme === 'dark'}
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        >
                            <span className="theme-mode-label">
                                {theme === 'dark' ? 'NIGHT MODE' : 'DAY MODE'}
                            </span>
                            <span className="theme-mode-knob" aria-hidden="true">
                                {theme === 'dark' ? (
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M16.9 13.7C16 14.4 14.9 14.8 13.7 14.8C10.7 14.8 8.2 12.3 8.2 9.3C8.2 8.1 8.6 7 9.3 6.1C6.1 6.7 3.8 9.5 3.8 12.9C3.8 16.9 7 20.2 11 20.2C14.4 20.2 17.3 17.8 17.9 14.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.8 7.3L19.3 8.5L20.6 9L19.3 9.5L18.8 10.7L18.3 9.5L17.1 9L18.3 8.5L18.8 7.3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
                                        <path d="M12 2.5V5.2M12 18.8V21.5M5.3 5.3L7.2 7.2M16.8 16.8L18.7 18.7M2.5 12H5.2M18.8 12H21.5M5.3 18.7L7.2 16.8M16.8 7.2L18.7 5.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                )}
                            </span>
                        </button>

                        {/* Primary CTA */}
                        <Link href="#contact" className="navbar-cta">
                            Book a Call
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    {/* Small Label */}
                    <div className={`hero-label ${isLoaded ? 'loaded' : ''}`}>
                        FUSIONKODE DIGITAL STUDIO
                    </div>

                    {/* Main Heading */}
                    <h1 className={`hero-heading ${isLoaded ? 'loaded' : ''}`}>
                        Crafting Digital<br />
                        Experiences That <span className="text-accent">Perform.</span>
                    </h1>

                    {/* Supporting Text */}
                    <p className={`hero-description ${isLoaded ? 'loaded' : ''}`}>
                        We build scalable, high-performance websites for speed, security, and long-term growth.
                    </p>

                    {/* CTA Buttons */}
                    <div className={`hero-buttons ${isLoaded ? 'loaded' : ''}`}>
                        <Link href="#contact" className="btn-primary">
                            Book a Call
                        </Link>
                        <Link href="#work" className="btn-secondary">
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}


