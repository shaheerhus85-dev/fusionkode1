'use client';

import React from 'react';

const steps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description: "We analyze user intent, market demand, and define a clear roadmap with measurable goals."
    },
    {
        number: "02",
        title: "Design & Validation",
        description: "We craft intuitive UX flows and validate prototypes early to reduce risk before development."
    },
    {
        number: "03",
        title: "Build, Technical SEO & Performance",
        description: "We build scalable code, improve Core Web Vitals, and implement technical SEO foundations."
    },
    {
        number: "04",
        title: "Launch, Track & Scale",
        description: "We launch with analytics, monitor rankings and conversions, then iterate for steady growth."
    }
];

export default function Approach() {
    return (
        <section className="approach-section-v3" id="approach">
            <div className="approach-frame-v3">
                <div className="approach-ambient-v3" aria-hidden="true"></div>
                <div className="approach-container-v3">
                    {/* Left Column */}
                    <div className="approach-left-v3">
                        <div className="approach-label-v3">OUR APPROACH</div>
                        <h2 className="approach-heading-v3">
                            How We Turn Ideas Into <span className="text-highlight-orange">Scalable</span> Digital Products.
                        </h2>
                        <p className="approach-desc-v3">
                            A structured process focused on UX, performance, and technical SEO to deliver clarity, speed, and long-term growth.
                        </p>
                    </div>

                    {/* Right Column - Timeline List */}
                    <div className="approach-right-v3">
                        <div className="approach-timeline-line-v3" aria-hidden="true"></div>
                        <div className="approach-steps-wrapper-v3">
                            {steps.map((step, index) => (
                                <article key={index} className="approach-step-card-v3">
                                    <span className="approach-step-dot-v3" aria-hidden="true"></span>
                                    <span className="approach-step-number-v3">{step.number}</span>
                                    <div className="approach-step-content-v3">
                                        <h3 className="approach-step-title-v3">{step.title}</h3>
                                        <p className="approach-step-desc-v3">{step.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
