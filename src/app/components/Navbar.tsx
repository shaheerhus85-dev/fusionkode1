"use client";

import Container from "@/components/system/Container";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-6 left-0 w-full z-[9999]">
            <Container>
                <div
                    className="
            relative
            z-50
            w-full
            flex
            items-center
            justify-between
            h-[56px]
            md:h-[60px]
            lg:h-[64px]
            px-6
            md:px-8
            glass-soft
          "
                >
                    {/* Left Placeholder */}
                    <div className="flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-white text-sm tracking-[0.2em] uppercase"
                        >
                            FusionKode
                        </Link>
                    </div>

                    {/* Center Nav Links */}
                    <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
                        <Link href="#services">Services</Link>
                        <Link href="#strategy">Strategy</Link>
                        <Link href="#lab">Lab</Link>
                    </nav>

                    {/* Right CTA */}
                    <div className="flex items-center">
                        <Link
                            href="#contact"
                            className="
                text-sm
                px-5
                py-2
                rounded-[14px]
                border
                border-white/15
                text-white
              "
                        >
                            Initialize
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
}
