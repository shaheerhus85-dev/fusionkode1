"use client";

import { useLayoutEffect, useRef } from "react";
import Container from "@/components/system/Container";
import { gsap, ScrollTrigger } from "@/components/system/gsapSetup";

const phases = [
    {
        title: "System Audit",
        description:
            "Mapping operational inefficiencies, lead flow gaps, infrastructure weaknesses, and automation bottlenecks.",
    },
    {
        title: "Architecture Blueprint",
        description:
            "Designing scalable system flows, AI layer integrations, and structured automation frameworks.",
    },
    {
        title: "Engineering & Integration",
        description:
            "Deploying AI agents, SaaS systems, APIs, and automation pipelines with precision execution.",
    },
    {
        title: "Optimization & Scale",
        description:
            "Continuous performance analysis, system refinement, and long-term growth scaling.",
    },
];

export default function Strategy() {
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="strategy"
            className="relative bg-[#05070A] py-[96px] md:py-[120px] lg:py-[160px]"
        >
            <Container>
                <div className="flex flex-col gap-16 items-center text-center">

                    <span className="text-white/50 text-xs tracking-[0.3em] uppercase">
            // Strategy Protocol
                    </span>

                    <h2 className="text-white font-semibold leading-[1.1] text-[clamp(1.8rem,4vw,3.2rem)] max-w-[900px]">
                        The Architecture of Scalable Growth.
                    </h2>

                </div>
            </Container>

            {/* STACK AREA */}
            <div className="relative mt-20 flex justify-center">
                <div
                    ref={stackRef}
                    className="relative w-[92%] max-w-[900px] h-[420px] md:h-[500px] lg:h-[520px]"
                >
                    {phases.map((phase, index) => (
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
                                zIndex: phases.length - index,
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
