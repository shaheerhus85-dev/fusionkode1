"use client";

import React from "react";

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
    return (
        <div className={`w-full flex justify-center overflow-x-hidden ${className}`}>
            <div
                className="
          w-full
          max-w-[1440px]
          px-[24px]
          md:px-[8vw]
        "
            >
                {children}
            </div>
        </div>
    );
}
