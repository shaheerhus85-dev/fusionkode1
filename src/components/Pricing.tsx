'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const pricingPlans = [
    {
        name: 'Starter',
        price: '$1,200',
        description: 'Best for early-stage brands launching a high-performance website.',
        cta: 'Get Started',
        features: [
            'Custom responsive design',
            'Technical SEO setup',
            'Performance optimization'
        ]
    },
    {
        name: 'Growth',
        price: '$2,800',
        description: 'Ideal for growing teams focused on conversion and search visibility.',
        cta: 'Choose Growth',
        featured: true,
        features: [
            'CMS-driven pages',
            'Advanced on-page SEO',
            'Core Web Vitals improvements',
            'Conversion-focused UX updates'
        ]
    },
    {
        name: 'Enterprise',
        price: '$5,500+',
        description: 'For scale-focused businesses needing complex architecture and support.',
        cta: 'Contact Sales',
        features: [
            'Custom integrations',
            'Scalable architecture',
            'Priority technical support',
            'SEO and analytics strategy'
        ]
    }
];

export default function Pricing() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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
        <section ref={sectionRef} className="pricing-section" id="pricing">
            <div className="pricing-container">
                <div className={`pricing-header ${isVisible ? 'visible' : ''}`}>
                    <div className="pricing-label">PRICING PLANS</div>
                    <h2 className="pricing-heading">
                        Flexible Plans for <span className="text-accent">Growing</span> Businesses.
                    </h2>
                    <p className="pricing-description">
                        Choose a plan aligned with your current stage. Every package includes performance-first development and
                        technical SEO fundamentals for long-term search growth.
                    </p>
                </div>

                <div className={`pricing-grid ${isVisible ? 'visible' : ''}`}>
                    {pricingPlans.map((plan) => (
                        <article key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                            {plan.featured ? <div className="pricing-badge">Most Popular</div> : null}
                            <div className="pricing-plan-name">{plan.name}</div>
                            <div className="pricing-price">{plan.price}</div>
                            <p className="pricing-plan-description">{plan.description}</p>

                            <ul className="pricing-features">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="pricing-feature-item">
                                        <span className="pricing-check" aria-hidden="true">
                                            <svg viewBox="0 0 20 20" fill="none">
                                                <path d="M4.5 10.5L8.3 14.2L15.5 6.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="#contact" className={`pricing-cta ${plan.featured ? 'featured' : ''}`}>
                                {plan.cta}
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
