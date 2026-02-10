"use client";

import Container from "@/components/system/Container";

export default function ContactEngine() {
    return (
        <section
            id="contact"
            className="bg-[#05070A] py-[96px] md:py-[120px] lg:py-[160px]"
        >
            <Container>
                <div className="flex flex-col items-center gap-16">

                    {/* Label */}
                    <span className="text-white/50 text-xs tracking-[0.3em] uppercase">
            // Contact Engine
                    </span>

                    {/* Heading */}
                    <h2
                        className="
              text-white
              font-semibold
              leading-[1.1]
              text-[clamp(1.8rem,4vw,3.2rem)]
              text-center
              max-w-[720px]
            "
                    >
                        Initialize Your System Diagnostic.
                    </h2>

                    {/* Form Wrapper */}
                    <div className="w-full max-w-[720px] flex flex-col gap-6">

                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white/60 text-sm tracking-[0.2em] uppercase">
                                Name
                            </label>
                            <input
                                type="text"
                                className="
                  w-full
                  h-[48px]
                  md:h-[52px]
                  px-4
                  glass-soft
                  text-white
                  outline-none
                "
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white/60 text-sm tracking-[0.2em] uppercase">
                                Email
                            </label>
                            <input
                                type="email"
                                className="
                  w-full
                  h-[48px]
                  md:h-[52px]
                  px-4
                  glass-soft
                  text-white
                  outline-none
                "
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white/60 text-sm tracking-[0.2em] uppercase">
                                Project Brief
                            </label>
                            <textarea
                                rows={5}
                                className="
                  w-full
                  px-4
                  py-4
                  glass-soft
                  text-white
                  outline-none
                  resize-none
                "
                            />
                        </div>

                        {/* Primary CTA */}
                        <button
                            className="
                w-full
                h-[48px]
                md:h-[52px]
                glass-cta
                text-white
                text-sm
              "
                        >
                            Transmit Request
                        </button>

                        {/* Direct Contact Info */}
                        <div className="pt-6 text-center text-white/60 text-sm leading-relaxed">
                            <div>Direct Line (WhatsApp): 0339 0140860</div>
                            <div>Email: info@fusionkode.com</div>
                            <div>Karachi, Pakistan — Operating Globally</div>
                        </div>

                    </div>

                </div>
            </Container>
        </section>
    );
}
