'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        const sectionElement = sectionRef.current;
        if (sectionElement) {
            observer.observe(sectionElement);
        }

        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="about-section" id="about">
            <div className="about-container">
                {/* Left Side - Content Block */}
                <div className={`about-content ${isVisible ? 'visible' : ''}`}>
                    {/* Small Label */}
                    <div className="about-label">
                        ABOUT FUSIONKODE
                    </div>

                    {/* Main Heading */}
                    <h2 className="about-heading">
                        Who We Are & What <span className="text-accent">Drives</span> Us.
                    </h2>

                    {/* Paragraph */}
                    <p className="about-description">
                        We are a collective of digital artisans dedicated to crafting high-performance digital experiences. Our focus is on precision in design, scalability in engineering, and optimizing every pixel for performance, ensuring that our solutions not only look exceptional but also deliver measurable results and long-term growth.
                    </p>

                    {/* Stats Row */}
                    <div className="about-stats">
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">Global</div>
                            <div className="stat-label">Clients</div>
                        </div>
                    </div>


                </div>

                {/* Right Side - Image Block */}
                <div className={`about-image-wrapper ${isVisible ? 'visible' : ''}`}>
                    <div className="about-image">
                        <Image
                            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="Professional engineering workspace with team collaborating"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority={false}
                        />
                    </div>

                    {/* Features Row */}
                    <div className="about-features">
                        <div className="feature-item">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Pixel-Perfect Design</span>
                        </div>
                        <div className="feature-item">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Clean Architecture</span>
                        </div>
                        <div className="feature-item">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Performance Optimized</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
