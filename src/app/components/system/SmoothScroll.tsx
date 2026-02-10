"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "./gsapSetup";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.1, // controls smoothness
            smoothWheel: true,
            smoothTouch: false,
            wheelMultiplier: 1,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Sync Lenis with GSAP
        lenis.on("scroll", () => {
            gsap.ticker.tick();
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
