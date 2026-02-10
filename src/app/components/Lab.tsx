"use client";

import { useLayoutEffect, useRef } from "react";
import Container from "@/components/system/Container";
import { gsap, ScrollTrigger } from "@/components/system/gsapSetup";

const labPhases = [
    {
        title: "Research & Analysis",
        description:
            "Every project begins with structured system mapping, identifying inefficiencies and architectural constraints.",
    },
    {
        title: "System Engineering",
        description:
            "We architect AI-driven workflows, scalable SaaS layers, and automation frameworks with precision.",
    },
    {
        title: "Deployment & Optimization",
        description:
            "Continuous performance analysis ensures structural stability and measurable system growth.",
    },
];

export default function Lab() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const stackRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useLayoutEffect(() => {
        if (!sectionRef.current || !stackRef.current) return;

        const ctx = gsap.context(() => {
            const cards = cardsRef.current;

            // Initial state
            gsap.set(cards, {
                opacity: 0,
                scale: 1,
            });

            gsap.set(cards[0], {
                opacity: 1,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${cards.length * window.innerHeight}`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 0.3,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            cards.forEach((card, index) => {
                if (index === 0) return;

                // Step 1: fade out previous card completely
                tl.to(cards[index - 1], {
                    opacity: 0,
                    scale: 1.02,
                    ease: "none",
                    duration: 1,
                });

                // Step 2: then fade in next card
                tl.to(card, {
                    opacity: 1,
                    scale: 1,
                    ease: "none",
                    duration: 1,
                });
            });

            // --- LOOP ANIMATION (Blueprint System) ---

            // Outer ring slow rotation
            gsap.to("#outerRing", {
                rotation: 360,
                transformOrigin: "50% 50%",
                duration: 18,
                ease: "none",
                repeat: -1,
            });

            // Node pulse
            gsap.to(["#coreNode", "#node1", "#node2", "#node3"], {
                scale: 1.04,
                transformOrigin: "50% 50%",
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "none",
            });

            // Data pulse animation along lines
            gsap.to(["#line1", "#line2", "#line3"], {
                strokeDasharray: 4,
                strokeDashoffset: -8,
                duration: 2.4,
                repeat: -1,
                ease: "none",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="lab"
            className="relative bg-[#05070A] py-[80px] md:py-[100px] lg:py-[120px]"
        >
            <Container>
                <div className="flex flex-col gap-16 items-center text-center">
                    <span className="text-white/50 text-xs tracking-[0.3em] uppercase">
                        // Engineering Lab
                    </span>

                    <h2 className="text-white font-semibold leading-[1.1] text-[clamp(1.8rem,4vw,3.2rem)] max-w-[760px] text-center">
                        Inside the FusionKode Research Facility.
                    </h2>
                </div>
            </Container>

            {/* STACK AREA */}
            <div className="relative mt-20 flex justify-center">
                <div
                    ref={stackRef}
                    className="relative w-[92%] max-w-[900px] h-[420px] md:h-[500px] lg:h-[520px]"
                >
                    {/* SVG SYSTEM DIAGRAM */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg viewBox="0 0 500 500" className="w-full h-full max-w-[520px]">
                            {/* Outer rotating ring */}
                            <g id="outerRing">
                                <circle
                                    cx="250"
                                    cy="250"
                                    r="170"
                                    stroke="rgba(255,255,255,0.15)"
                                    strokeWidth="1"
                                    fill="none"
                                />
                            </g>

                            {/* Connection lines */}
                            <line
                                id="line1"
                                x1="250"
                                y1="250"
                                x2="250"
                                y2="80"
                                stroke="rgba(255,255,255,0.2)"
                                strokeWidth="1"
                            />
                            <line
                                id="line2"
                                x1="250"
                                y1="250"
                                x2="100"
                                y2="350"
                                stroke="rgba(255,255,255,0.2)"
                                strokeWidth="1"
                            />
                            <line
                                id="line3"
                                x1="250"
                                y1="250"
                                x2="400"
                                y2="350"
                                stroke="rgba(255,255,255,0.2)"
                                strokeWidth="1"
                            />

                            {/* Central core node */}
                            <circle
                                id="coreNode"
                                cx="250"
                                cy="250"
                                r="20"
                                stroke="rgba(255,255,255,0.6)"
                                strokeWidth="1.5"
                                fill="rgba(255,255,255,0.05)"
                            />

                            {/* Satellite nodes */}
                            <circle
                                id="node1"
                                cx="250"
                                cy="80"
                                r="12"
                                stroke="rgba(255,255,255,0.5)"
                                strokeWidth="1"
                                fill="rgba(255,255,255,0.04)"
                            />
                            <circle
                                id="node2"
                                cx="100"
                                cy="350"
                                r="12"
                                stroke="rgba(255,255,255,0.5)"
                                strokeWidth="1"
                                fill="rgba(255,255,255,0.04)"
                            />
                            <circle
                                id="node3"
                                cx="400"
                                cy="350"
                                r="12"
                                stroke="rgba(255,255,255,0.5)"
                                strokeWidth="1"
                                fill="rgba(255,255,255,0.04)"
                            />
                        </svg>
                    </div>

                    {labPhases.map((phase, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            className="
                absolute
                inset-0
                glass-panel
                p-8
                md:p-10
                flex
                flex-col
                gap-6
              "
                            style={{
                                zIndex: labPhases.length - index,
                            }}
                        >
                            <h3 className="text-white text-[clamp(1.1rem,2vw,1.6rem)] font-medium">
                                {phase.title}
                            </h3>

                            <p className="text-white/70 text-[clamp(0.95rem,1.2vw,1.125rem)] leading-relaxed">
                                {phase.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
