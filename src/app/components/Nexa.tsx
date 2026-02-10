"use client";

import Container from "@/components/system/Container";
import Link from "next/link";

export default function Nexa() {
    return (
        <section
            id="nexa"
            className="bg-[#05070A] py-[96px] md:py-[120px] lg:py-[160px]"
        >
            <Container>
                <div className="flex flex-col gap-16">

                    {/* Label */}
                    <span className="text-white/50 text-xs tracking-[0.3em] uppercase">
            // AI Consultant — NEXA
                    </span>

                    {/* Main Grid */}
                    <div
                        className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-12
              lg:gap-16
              items-center
            "
                    >

                        {/* Left Content */}
                        <div className="flex flex-col gap-8">

                            <h2
                                className="
                  text-white
                  font-semibold
                  leading-[1.1]
                  text-[clamp(1.8rem,4vw,3.2rem)]
                "
                            >
                                Meet Nexa — Your Intelligent System Consultant
                            </h2>

                            <p className="text-white/70 text-[clamp(0.95rem,1.2vw,1.125rem)] max-w-[60ch] leading-relaxed">
                                Nexa analyzes operational bottlenecks, automation gaps, and
                                architectural weaknesses — providing structured recommendations
                                tailored to your growth objectives.
                            </p>

                            <Link
                                href="#contact"
                                className="
                  inline-flex
                  items-center
                  justify-center
                  h-[48px]
                  md:h-[52px]
                  px-6
                  rounded-[16px]
                  border
                  border-white/15
                  text-white
                  text-sm
                  w-fit
                "
                            >
                                Initialize Diagnostic
                            </Link>

                        </div>

                        {/* Right Visual Chamber Placeholder */}
                        <div
                            className="
                glass-strong
                min-h-[320px]
                md:min-h-[420px]
                lg:min-h-[480px]
                w-full
                flex
                items-center
                justify-center
                text-white/40
                text-sm
              "
                        >
                            AI Core Chamber (Visual Placeholder)
                        </div>

                    </div>

                </div>
            </Container>
        </section>
    );
}
