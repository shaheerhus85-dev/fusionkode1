"use client";
import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problems = [
    "I am getting traffic but no leads",
    "My operations are manual and slow",
    "My tools are disconnected",
    "I want AI automation"
];

const answers: Record<string, string> = {
    "I am getting traffic but no leads":
        "You need a structured lead capture + qualification pipeline with automated follow-up agents.",

    "My operations are manual and slow":
        "We replace repetitive workflows with AI + automation stacks that reduce human load.",

    "My tools are disconnected":
        "We design unified system architecture so every tool feeds one decision engine.",

    "I want AI automation":
        "We deploy custom AI agents trained for your business workflows."
};

export default function AIConsultant() {
    const [selected, setSelected] = useState<string | null>(null);
    const root = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".consultant-reveal", {
                y: 40,
                opacity: 0,
                duration: 0.9,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: root.current,
                    start: "top 75%",
                }
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={root} className="section-padding min-h-screen flex flex-col justify-center">
            <div className="layout-wrapper">

                <div className="tech-label consultant-reveal mb-8">
          // AI CONSULTANT NODE
                </div>

                <h2 className="consultant-reveal font-light mb-12 max-w-3xl"
                    style={{ fontSize: "clamp(2rem,5vw,4rem)" }}>
                    Describe your system problem.
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-12">

                    {problems.map((p) => (
                        <button
                            key={p}
                            onClick={() => setSelected(p)}
                            className="glass-panel consultant-reveal p-6 text-left hover:bg-white/10 transition"
                        >
                            {p}
                        </button>
                    ))}

                </div>

                {selected && (
                    <div className="glass-panel p-8 max-w-3xl animate-fade-in">

                        <div className="tech-label mb-4">
                            SYSTEM RESPONSE
                        </div>

                        <p className="text-white/80 mb-8">
                            {answers[selected]}
                        </p>

                        <a href="#contact" className="glass-cta">
                            Initialize Solution Plan
                        </a>

                    </div>
                )}

            </div>
        </section>
    );
}
