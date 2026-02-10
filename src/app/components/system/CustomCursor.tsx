"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            style={{
                left: position.x,
                top: position.y,
            }}
            className="
        fixed
        pointer-events-none
        z-[9999]
        w-4
        h-4
        -translate-x-1/2
        -translate-y-1/2
        border
        border-white/60
        rounded-full
        opacity-80
      "
        />
    );
}
