"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CoreCapabilitiesSection } from "@/components/CoreCapabilitiesSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const v1Ref = useRef<HTMLDivElement>(null);
  const v2Ref = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Static entry animation: Clipping mask letter reveal for Hero
    gsap.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
    });

    // Z-Axis Zoom & Fade ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500", // Length of the pinned section
        scrub: 1,
        pin: true,
      }
    });

    // Viewport 1 scales up and fades out
    tl.to(v1Ref.current, {
      scale: 2.5,
      opacity: 0,
      ease: "none",
    }, 0);

    // Viewport 2 banner translates horizontally
    tl.fromTo(bannerRef.current, {
      xPercent: -30,
      opacity: 0,
    }, {
      xPercent: 10,
      opacity: 1,
      ease: "none",
    }, 0);

  }, { scope: containerRef });

  return (
    <div className="flex flex-col min-h-screen bg-[#1E1E24] text-[#F5F5F7]">
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden border-b border-[#2C2C35]">
        {/* Viewport 1 */}
        <div ref={v1Ref} className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 bg-[#1E1E24]">
          <div className="space-y-4 text-center max-w-5xl mix-blend-difference">
            <div className="overflow-hidden">
              <h1 className="hero-text text-5xl md:text-6xl font-bold tracking-tighter uppercase text-[#F5F5F7]">
                ENGINEERING HIGH-PERFORMANCE
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-text text-5xl md:text-6xl font-bold tracking-tighter uppercase text-[#0A84FF]">
                DIGITAL ECOSYSTEMS FOR ENTERPRISE SCALE
              </h1>
            </div>
            <p className="hero-text text-lg text-[#8E8E93] mt-6 max-w-4xl mx-auto">
              Devfinity designs and deploys bespoke, type-safe full-stack software tailored to the exact operational blueprints of complex businesses. We eliminate the friction of rigid third-party templates, building clean, secure, and infinitely scalable web platforms that turn fragmented operational chaos into elegant, high-utility automation modules.
            </p>
            <div className="hero-text pt-4">
              <Button size="lg" className="bg-[#0A84FF] text-white hover:bg-[#0A84FF]/90 font-mono">
                Initialize Infrastructure
              </Button>
            </div>
          </div>
          
          <div className="hero-text mt-12 w-full max-w-5xl h-64 border border-[#2C2C35] rounded bg-[#16161c] flex flex-col shadow-2xl">
            <div className="flex items-center px-4 h-8 border-b border-[#2C2C35] bg-[#1E1E24]">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center text-[#8E8E93]">
              [ SaaS Interface Mockup ]
            </div>
          </div>
        </div>

        {/* Viewport 2 */}
        <div ref={v2Ref} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
          <h2 ref={bannerRef} className="text-[8vw] font-bold whitespace-nowrap text-[#2C2C35] opacity-50 tracking-tighter uppercase select-none">
            SYSTEMS OVER TEMPLATES // TYPE-SAFE CORE ARCHITECTURE // ZERO OPERATIONAL FRICTION // BESPOKE RUNTIMES // SCALABLE DATA ECOSYSTEMS // INFLEXIBLE PLATFORMS REDUCED TO CODE
          </h2>
          <div className="absolute max-w-3xl text-center px-8">
            <p className="text-xl text-[#F5F5F7] font-mono leading-relaxed bg-[#1E1E24]/80 backdrop-blur-md p-8 border border-[#2C2C35]">
              Off-the-shelf software forces your business to warp its workflows around a rigid, pre-built framework. Devfinity reverses that paradigm. We map your exact administrative control pipelines, logistics chains, and reporting registries into native digital tools. By engineering custom database schemas and responsive frontends side-by-side, we deliver tools that adapt perfectly to your staff, rather than making your staff adapt to the tool.
            </p>
          </div>
        </div>
      </div>

      <div className="z-20 relative bg-[#1E1E24]">
        <CoreCapabilitiesSection />
        
        {/* Viewport 4: Operational Metric Dashboard */}
        <section className="w-full py-24 flex items-center justify-center border-t border-[#2C2C35]">
          <div className="container px-4 md:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#F5F5F7] uppercase">Operational Metric Dashboard</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-[#2C2C35] p-8 flex flex-col items-start bg-[#16161c]">
                <div className="text-sm font-bold text-[#8E8E93] mb-4">SYSTEM LAUNCH ACCURACY</div>
                <div className="text-6xl font-bold text-[#0A84FF] mb-4">100%</div>
                <div className="text-sm text-[#8E8E93] leading-relaxed">
                  Type-safe compile-time validation ensures that zero structural database errors bypass our deployment pipeline into production environments.
                </div>
              </div>
              
              <div className="border border-[#2C2C35] p-8 flex flex-col items-start bg-[#16161c]">
                <div className="text-sm font-bold text-[#8E8E93] mb-4">AVERAGE INTERACTION LATENCY</div>
                <div className="text-6xl font-bold text-[#0A84FF] mb-4">&lt; 200ms</div>
                <div className="text-sm text-[#8E8E93] leading-relaxed">
                  Leveraging lightweight UI rendering layers means server round-trips occur almost instantaneously, maximizing daily operational speed.
                </div>
              </div>

              <div className="border border-[#2C2C35] p-8 flex flex-col items-start bg-[#16161c]">
                <div className="text-sm font-bold text-[#8E8E93] mb-4">CUSTOM MODULE ADOPTION RATE</div>
                <div className="text-6xl font-bold text-[#0A84FF] mb-4">94%</div>
                <div className="text-sm text-[#8E8E93] leading-relaxed">
                  Bespoke user interfaces designed specifically around established workflows eliminate administrative confusion, driving quick user onboarding.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
