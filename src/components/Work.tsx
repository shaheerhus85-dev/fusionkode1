'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Work() {
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
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
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

    const projects = [
        {
            title: "Apex Analytics Suite",
            category: "SaaS Platform",
            // Using a generic dark dashboard placeholder to match the vibe
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            alt: "Apex Analytics Suite Dashboard"
        },
        {
            title: "Lumina Fashion E-commerce",
            category: "E-commerce",
            // Using a fashion e-commerce placeholder
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop",
            alt: "Lumina Fashion Storefront"
        }
    ];

    return (
        <section ref={sectionRef} className="work-section" id="work">
            <div className="work-container">
                {/* Left Content */}
                <div className={`work-content ${isVisible ? 'visible' : ''}`}>
                    <div className="work-label">OUR WORK</div>
                    <h2 className="work-heading">
                        Selected Projects<br />
                        That <span className="text-accent">Deliver</span> Results.
                    </h2>
                    <p className="work-description">
                        We partner with ambitious companies to engineer high-performance digital platforms that drive growth and user engagement.
                    </p>

                    <Link href="#pricing" className="work-cta">
                        View All Projects
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Right Column - Stacked Cards */}
                <div className={`work-grid ${isVisible ? 'visible' : ''}`}>
                    {projects.map((project, index) => (
                        <div key={index} className="work-card-wrapper">
                            <div className="work-card-frame">
                                <div className="work-card-inner">
                                    <Image
                                        src={project.image}
                                        alt={project.alt}
                                        fill
                                        className="work-card-bg"
                                    />
                                    {/* Glass Overlay */}
                                    <div className="work-card-glass">
                                        <div className="work-card-details">
                                            <h3 className="project-title">{project.title}</h3>
                                            <span className="project-category">{project.category}</span>
                                        </div>
                                        <div className="project-arrow">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
