"use client";

import { useLayoutEffect, useRef } from "react";
import Container from "@/components/system/Container";
import { gsap, ScrollTrigger } from "@/components/system/gsapSetup";

const services = [
    "AI Agents",
    "Automation Stacks",
    "Lead Systems",
    "Data Pipelines",
    "Decision Engines",
];

export default function ServicesRail() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const stackRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useLayoutEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            const cards = cardsRef.current;

            // Initial states
            gsap.set(cards, { opacity: 0, scale: 1 });
            gsap.set(cards[0], { opacity: 1 });

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

                // Step 1: hide previous instantly
                tl.to(cards[index - 1], {
                    opacity: 0,
                    scale: 1.02,
                    ease: "none",
                    duration: 1,
                });

                // Step 2: show current instantly
                tl.set(card, {
                    opacity: 1,
                    scale: 1,
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative bg-[#05070A] py-[80px] md:py-[100px] lg:py-[120px]"
        >
            <Container>
                <div className="flex flex-col gap-16 items-center">
                    <span className="text-white/50 text-xs tracking-[0.3em] uppercase">
            // Capability Modules
                    </span>

                    <h2 className="text-white font-semibold leading-[1.1] text-[clamp(1.8rem,4vw,3.2rem)] max-w-[760px] text-center">
                        Systems we engineer and deploy.
                    </h2>
                </div>
            </Container>

            <div className="relative mt-28 flex justify-center items-start">
                <div
                    ref={stackRef}
                    className="relative w-[90%] max-w-[760px] h-[380px] md:h-[440px] lg:h-[480px] bg-white/[0.02] rounded-[20px]"
                >
                    {services.map((title, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            className="absolute inset-0 top-0 glass-panel p-6 md:p-8 flex flex-col gap-6"
                            style={{
                                zIndex: services.length - index,
                            }}
                        >
                            <h3 className="text-white text-[clamp(1.1rem,2vw,1.6rem)] font-medium">
                                {title}
                            </h3>

                            <p className="text-white/70 text-[clamp(0.95rem,1.2vw,1.125rem)] leading-relaxed">
                                Engineered architecture block built for scale,
                                automation, and operational intelligence.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
