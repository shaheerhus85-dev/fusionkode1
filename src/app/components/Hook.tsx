"use client";

import Container from "@/components/system/Container";

export default function Hook() {
    return (
        <section id="hook" className="bg-[#05070A] py-[96px] md:py-[120px] lg:py-[160px]">
            <Container>
                <div className="flex flex-col gap-12">

                    {/* Label */}
                    <span className="text-white/50 text-xs tracking-[0.3em] uppercase">
            // System Diagnostic
                    </span>

                    {/* Headline */}
                    <h2
                        className="
              text-white
              font-semibold
              leading-[1.1]
              text-[clamp(1.8rem,4vw,3.2rem)]
              max-w-[900px]
            "
                    >
                        Most digital operations are not failing because of traffic —
                        <span className="text-white/60"> they are failing because of broken systems.</span>
                    </h2>

                    {/* Grid */}
                    <div
                        className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
              lg:gap-8
            "
                    >
                        {/* Card 1 */}
                        <div className="glass-panel p-6 md:p-8">
                            <h3 className="text-white text-[clamp(1.1rem,2vw,1.6rem)] font-medium mb-4">
                                Lead Flow Gaps
                            </h3>
                            <p className="text-white/70 text-[clamp(0.95rem,1.2vw,1.125rem)] leading-relaxed">
                                Visitors arrive, but no structured capture system or automated qualification pipeline exists.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="glass-panel p-6 md:p-8">
                            <h3 className="text-white text-[clamp(1.1rem,2vw,1.6rem)] font-medium mb-4">
                                Automation Weakness
                            </h3>
                            <p className="text-white/70 text-[clamp(0.95rem,1.2vw,1.125rem)] leading-relaxed">
                                Manual workflows replace intelligent agents, reducing scalability and operational clarity.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="glass-panel p-6 md:p-8">
                            <h3 className="text-white text-[clamp(1.1rem,2vw,1.6rem)] font-medium mb-4">
                                Structural Chaos
                            </h3>
                            <p className="text-white/70 text-[clamp(0.95rem,1.2vw,1.125rem)] leading-relaxed">
                                Tools exist, but architecture is missing. Systems operate without unified design logic.
                            </p>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
