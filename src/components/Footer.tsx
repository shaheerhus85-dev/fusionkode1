'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="site-footer" id="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand-col">
                        <Link href="#top" className="footer-brand">
                            <span className="footer-brand-text">FusionKode</span>
                        </Link>
                        <p className="footer-brand-desc">
                            FusionKode designs and engineers high-performance digital platforms built for visibility, conversions, and long-term growth.
                        </p>

                        <div className="footer-socials">
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social-link">in</a>
                            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="footer-social-link">X</a>
                            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-social-link">gh</a>
                            <a href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble" className="footer-social-link">db</a>
                        </div>
                    </div>

                    <div className="footer-links-col">
                        <h3 className="footer-col-title">Company</h3>
                        <nav className="footer-nav">
                            <Link href="#top">Home</Link>
                            <Link href="#about">About</Link>
                            <Link href="#services">Services</Link>
                            <Link href="#work">Work</Link>
                            <Link href="#contact" className="active">Contact</Link>
                        </nav>
                    </div>

                    <div className="footer-links-col">
                        <h3 className="footer-col-title">Services</h3>
                        <nav className="footer-nav">
                            <Link href="#services">Web Engineering</Link>
                            <Link href="#services">UI/UX Design</Link>
                            <Link href="#services">Performance Optimization</Link>
                            <Link href="#services">Scalable Architecture</Link>
                        </nav>
                    </div>

                    <div className="footer-contact-col">
                        <h3 className="footer-col-title">Contact</h3>
                        <p>Karachi, Pakistan</p>
                        <a href="mailto:info@fusionkode.com">info@fusionkode.com</a>
                        <a href="tel:+923039106047">+92 303-9106047</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 FusionKode. All rights reserved.</p>
                    <div className="footer-legal-links">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}


