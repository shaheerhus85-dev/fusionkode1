"use client";

import Container from "@/components/system/Container";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#05070A] py-[80px] md:py-[100px] lg:py-[120px] border-t border-white/5">
            <Container>
                <div className="flex flex-col gap-16">

                    {/* Top Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                        {/* Brand */}
                        <div className="flex flex-col gap-6">
                            <div className="text-white text-sm tracking-[0.2em] uppercase">
                                FusionKode
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed max-w-[40ch]">
                                A precision engineering lab for AI agents, SaaS systems,
                                automation infrastructure, and scalable digital architecture.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div className="flex flex-col gap-4 text-sm text-white/70">
                            <Link href="#services">Services</Link>
                            <Link href="#strategy">Strategy</Link>
                            <Link href="#lab">Lab</Link>
                            <Link href="#contact">Contact</Link>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-4 text-sm text-white/70">
                            <div>info@fusionkode.com</div>
                            <div>0339 0140860</div>
                            <div>Karachi, Pakistan</div>
                            <div>Operating Globally</div>
                        </div>

                    </div>

                    {/* Bottom Signature */}
                    <div className="pt-10 border-t border-white/5 text-center text-white/40 text-xs tracking-[0.2em] uppercase">
                        Designed & Engineered by Shaheer Hussain Jafri
                    </div>

                </div>
            </Container>
        </footer>
    );
}
