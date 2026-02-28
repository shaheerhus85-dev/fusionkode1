'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

export default function Contact() {
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

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const fullName = String(formData.get('fullName') || '').trim();
        const emailAddress = String(formData.get('emailAddress') || '').trim();
        const projectType = String(formData.get('projectType') || '').trim();
        const budgetRange = String(formData.get('budgetRange') || '').trim();
        const projectMessage = String(formData.get('projectMessage') || '').trim();

        const subject = encodeURIComponent(`Project Inquiry - ${projectType || 'Website Project'}`);
        const body = encodeURIComponent(
            `Name: ${fullName}\nEmail: ${emailAddress}\nProject Type: ${projectType}\nBudget: ${budgetRange}\n\nMessage:\n${projectMessage}`
        );

        window.location.href = `mailto:info@fusionkode.com?subject=${subject}&body=${body}`;
    };

    return (
        <section ref={sectionRef} className="contact-section" id="contact">
            <div className="contact-container">
                <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
                    <div className="contact-label">CONTACT US</div>
                    <h2 className="contact-heading">
                        Let&apos;s Build Something<br />
                        That <span className="text-accent">Performs.</span>
                    </h2>
                    <p className="contact-description">
                        We partner with growth-focused teams to design and engineer fast, SEO-ready digital platforms that
                        improve visibility, conversions, and long-term performance.
                    </p>

                    <ul className="contact-info-list">
                        <li className="contact-info-item">
                            <span className="contact-info-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M12 21C15.6 17.4 18 14.6 18 11.5C18 8.5 15.3 6 12 6C8.7 6 6 8.5 6 11.5C6 14.6 8.4 17.4 12 21Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="11.4" r="1.8" stroke="currentColor" strokeWidth="1.7" />
                                </svg>
                            </span>
                            <span>Remote-first team, serving global clients</span>
                        </li>
                        <li className="contact-info-item">
                            <span className="contact-info-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <rect x="3.5" y="6.5" width="17" height="11" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
                                    <path d="M4.5 8L12 13.2L19.5 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span>info@fusionkode.com</span>
                        </li>
                        <li className="contact-info-item">
                            <span className="contact-info-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M13.4 2.8L6.6 12H11.1L9.8 21.2L17.5 10.2H13.2L13.4 2.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span>+92 303-9106047</span>
                        </li>
                    </ul>
                </div>

                <div className={`contact-form-wrap ${isVisible ? 'visible' : ''}`}>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label className="sr-only" htmlFor="fullName">Full Name</label>
                        <input id="fullName" name="fullName" type="text" placeholder="Full Name" className="contact-input" required />

                        <label className="sr-only" htmlFor="emailAddress">Email Address</label>
                        <input id="emailAddress" name="emailAddress" type="email" placeholder="Email Address" className="contact-input" required />

                        <div className="contact-row">
                            <label className="sr-only" htmlFor="projectType">Project Type</label>
                            <select id="projectType" name="projectType" className="contact-select" defaultValue="" required>
                                <option value="" disabled>Project Type</option>
                                <option>Business Website</option>
                                <option>E-commerce Platform</option>
                                <option>Web Application</option>
                                <option>SEO & Performance Revamp</option>
                            </select>

                            <label className="sr-only" htmlFor="budgetRange">Budget Range</label>
                            <select id="budgetRange" name="budgetRange" className="contact-select" defaultValue="" required>
                                <option value="" disabled>Budget Range</option>
                                <option>$1k - $3k</option>
                                <option>$3k - $8k</option>
                                <option>$8k - $20k</option>
                                <option>$20k+</option>
                            </select>
                        </div>

                        <label className="sr-only" htmlFor="projectMessage">Project Message</label>
                        <textarea
                            id="projectMessage"
                            name="projectMessage"
                            className="contact-textarea"
                            placeholder="Tell us about your goals, timelines, and project requirements."
                            required
                        />

                        <button type="submit" className="contact-submit">
                            Start a Project
                        </button>

                        <p className="contact-note">Confidential. Secure. Performance-first delivery.</p>
                    </form>
                </div>
            </div>
        </section>
    );
}


