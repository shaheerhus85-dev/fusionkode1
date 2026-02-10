"use client";

import Container from "@/components/system/Container";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-[120px] bg-[#05070A] overflow-hidden">

            {/* Background Marquee Layer */}
            <div className="absolute inset-0 flex items-center pointer-events-none">
                <div
                    className="
            whitespace-nowrap
            text-white/5
            font-semibold
            tracking-tight
            select-none
            text-[clamp(5rem,14vw,14rem)]
          "
                >
                    FUSIONKODE&nbsp;FUSIONKODE&nbsp;FUSIONKODE&nbsp;FUSIONKODE
                </div>
            </div>

            <Container>
                <div className="relative z-10 w-full max-w-[900px] flex flex-col gap-8">

                    {/* System Label */}
                    <span className="text-white/50 text-xs tracking-[0.3em] uppercase">
            // Engineering Intelligent Systems
                    </span>

                    {/* Main Heading */}
                    <h1
                        className="
              text-white
              font-semibold
              leading-[1.05]
              text-[clamp(2.2rem,5vw,5rem)]
            "
                    >
                        Building AI-Driven
                        <br />
                        Web & Automation Infrastructure
                    </h1>

                    {/* Subtext */}
                    <p
                        className="
              text-white/70
              text-[clamp(0.95rem,1.2vw,1.125rem)]
              max-w-[60ch]
              leading-relaxed
            "
                    >
                        FusionKode is a precision engineering lab for AI agents, SaaS systems,
                        automation stacks, and scalable web architecture.
                    </p>

                    {/* CTA Row */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="#contact"
                            className="
                inline-flex
                items-center
                justify-center
                h-[48px]
                md:h-[52px]
                px-6
                glass-cta
                text-white
                text-sm
              "
                        >
                            Initialize Diagnostic
                        </Link>

                        <Link
                            href="#lab"
                            className="
                inline-flex
                items-center
                justify-center
                h-[48px]
                md:h-[52px]
                px-6
                glass-cta
                text-white/80
                text-sm
              "
                        >
                            Explore Lab
                        </Link>
                    </div>

                </div>
            </Container>
        </section>
    );
}
