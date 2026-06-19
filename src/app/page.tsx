"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CoreCapabilitiesSection } from "@/components/CoreCapabilitiesSection";

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
      xPercent: -50,
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
          <div className="space-y-4 text-center max-w-4xl mix-blend-difference">
            <div className="overflow-hidden">
              <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tighter uppercase text-[#F5F5F7]">
                Engineering High-Performance
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tighter uppercase text-[#0A84FF]">
                Digital Ecosystems.
              </h1>
            </div>
            <p className="hero-text text-lg text-[#8E8E93] mt-6">
              Bespoke enterprise software built with mathematical type-safety and minimalist design.
            </p>
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
        <div ref={v2Ref} className="absolute inset-0 flex items-center pointer-events-none z-0">
          <h2 ref={bannerRef} className="text-[10vw] font-bold whitespace-nowrap text-[#2C2C35] opacity-50 tracking-tighter uppercase select-none">
            Systems Over Templates // Scalable Core Architecture
          </h2>
        </div>
      </div>

      <div className="z-20 relative bg-[#1E1E24]">
        <CoreCapabilitiesSection />
      </div>
    </div>
  );
}
