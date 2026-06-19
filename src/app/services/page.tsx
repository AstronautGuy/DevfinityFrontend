"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ComparisonSlider } from "@/components/ComparisonSlider";

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const vp2Ref = useRef<HTMLDivElement>(null);
  const dashRef = useRef<HTMLDivElement>(null);
  const vp4Ref = useRef<HTMLDivElement>(null);
  const trackLineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Viewport 1: Clipping Mask Entry
    gsap.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
    });

    // Viewport 2: Pinned Dashboard
    ScrollTrigger.create({
      trigger: vp2Ref.current,
      start: "top top",
      end: "bottom bottom",
      pin: dashRef.current,
      scrub: 1,
    });

    // Viewport 2: Row Highlights interpolation sync
    const rows = gsap.utils.toArray(".dash-row");
    rows.forEach((row, i) => {
      gsap.to(row as Element, {
        scrollTrigger: {
          trigger: vp2Ref.current,
          start: `top+=${i * 30}% center`,
          end: `top+=${(i + 1) * 30}% center`,
          scrub: true,
          toggleClass: "border-[#30D158] text-[#30D158]",
        },
      });
    });

    // Viewport 4: Vertical Timeline Fill
    gsap.fromTo(trackLineRef.current, { height: "0%" }, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: vp4Ref.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      }
    });

    // Viewport 4: Phase Header illumination
    const phases = gsap.utils.toArray(".phase-header");
    phases.forEach((phase) => {
      gsap.to(phase as Element, {
        scrollTrigger: {
          trigger: phase as Element,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          toggleClass: "text-[#30D158]",
        }
      });
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-[#121214] text-[#F5F5F7] font-mono">
      
      {/* Viewport 1: The Core Systems Engineering Hook */}
      <section className="h-screen w-full flex items-center justify-center p-8 border-b border-[#2C2C35] bg-[#121214]">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="overflow-hidden">
              <h1 className="hero-text text-4xl md:text-6xl font-bold tracking-tighter uppercase text-[#F5F5F7]">
                [02 / SERVICES]
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-text text-4xl md:text-6xl font-bold tracking-tighter uppercase text-[#0A84FF]">
                BESPOKE ENTERPRISE ARCHITECTURES
              </h1>
            </div>
            <p className="hero-text text-[#8E8E93] text-lg leading-relaxed">
              We engineer reliable administrative engines that replace slow, fragmented spreadsheets with centralized software platforms. By linking real-time internal auditing tools directly to clean operational dashboards, we build the reliable internal framework that lets teams coordinate without operational friction.
            </p>
          </div>
          <div className="hero-text w-full aspect-video border border-[#2C2C35] bg-[#1A1A1E] rounded-md shadow-2xl relative overflow-hidden flex items-center justify-center">
            {/* Node graph placeholder */}
            <div className="absolute inset-0 flex items-center justify-center opacity-50">
               <svg className="w-full h-full text-[#30D158]" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-pulse" />
                 <circle cx="10" cy="50" r="2" fill="currentColor" />
                 <circle cx="50" cy="50" r="2" fill="currentColor" />
                 <circle cx="90" cy="50" r="2" fill="currentColor" />
               </svg>
            </div>
            <span className="text-[#8E8E93] z-10">[ ACTIVE NODE-GRAPH VISUALIZER ]</span>
          </div>
        </div>
      </section>

      {/* Viewport 2: Pinned Custom ERP Systems */}
      <section ref={vp2Ref} className="relative w-full flex flex-col md:flex-row bg-[#1A1A1E] border-b border-[#2C2C35]">
        {/* Left Column: Scrolling Text */}
        <div className="w-full md:w-1/2 p-8 md:p-24 space-y-96">
          <div className="max-w-xl mx-auto space-y-6 pt-24 pb-96">
             <h2 className="text-3xl font-bold uppercase text-[#0A84FF]">The Replacement Register</h2>
             <p className="text-[#8E8E93] leading-relaxed text-lg">
                Our tailored Enterprise Resource Planning (ERP) systems are built explicitly around your company's physical daily transactions. Instead of shoehorning operations into rigid presets, we map your inventory, dispatch, and delivery tracks into custom database schemas.
             </p>
             <p className="text-[#8E8E93] leading-relaxed text-lg">
                This includes specialized operational features like a dedicated Replacement Register, designed to let administrators isolate order IDs, instantly cross-reference damaged cargo metrics, and log inventory overrides automatically without breaking data continuity.
             </p>
          </div>
        </div>

        {/* Right Column: Pinned Dashboard */}
        <div className="w-full md:w-1/2 relative">
          <div ref={dashRef} className="h-screen w-full flex items-center justify-center p-8 sticky top-0">
            <div className="w-full max-w-lg border border-[#2C2C35] rounded-md shadow-2xl bg-[#121214] flex flex-col overflow-hidden">
               <div className="h-8 border-b border-[#2C2C35] flex items-center px-4 bg-[#1A1A1E]">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#2C2C35]" />
                    <div className="w-3 h-3 rounded-full bg-[#2C2C35]" />
                    <div className="w-3 h-3 rounded-full bg-[#2C2C35]" />
                  </div>
               </div>
               <div className="p-4 space-y-4 font-mono text-sm">
                  <div className="flex justify-between text-[#8E8E93] border-b border-[#2C2C35] pb-2">
                    <span>[ORDER_ID]</span><span>[SKU_REF]</span><span>[STATUS]</span>
                  </div>
                  <div className="dash-row flex justify-between border border-[#2C2C35] p-2 transition-colors duration-300">
                    <span>#ORD-9921</span><span>SKU-A12</span><span>DISPATCHED</span>
                  </div>
                  <div className="dash-row flex justify-between border border-[#2C2C35] p-2 transition-colors duration-300">
                    <span>#ORD-9922</span><span>SKU-B44</span><span>DAMAGED_LOG</span>
                  </div>
                  <div className="dash-row flex justify-between border border-[#2C2C35] p-2 transition-colors duration-300">
                    <span>#ORD-9923</span><span>SKU-C19</span><span>OVERRIDE</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Viewport 3: The Performance Optimization Playground */}
      <section className="h-screen w-full flex flex-col items-center justify-center p-8 bg-[#121214] border-b border-[#2C2C35]">
         <div className="max-w-4xl w-full text-center space-y-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-[#F5F5F7]">
               OPTIMIZED ENGINE METRICS // SUB-SECOND RENDERING
            </h2>
            <p className="text-[#8E8E93] text-lg leading-relaxed max-w-3xl mx-auto">
               Bloated interfaces waste valuable administrative time and degrade focus. We isolate component layers, strips away unnecessary client-side background scripts, and serves pages that render immediately. Our applications reduce layout shifting to zero, keeping high-frequency data pipelines stable and accessible under heavy daily transaction loads.
            </p>
         </div>
         <div className="w-full max-w-5xl">
            <ComparisonSlider />
         </div>
      </section>

      {/* Viewport 4: The 4-Phase System Deployment Pipeline */}
      <section ref={vp4Ref} className="relative w-full py-32 flex justify-center bg-[#1A1A1E]">
         {/* Vertical Tracker Line */}
         <div className="absolute left-8 md:left-1/2 top-32 bottom-32 w-[2px] bg-[#2C2C35] -translate-x-1/2">
            <div ref={trackLineRef} className="w-full bg-[#30D158] origin-top" />
         </div>
         
         <div className="max-w-4xl w-full px-16 space-y-32">
            <div className="text-center mb-32">
               <h2 className="text-4xl md:text-5xl font-bold uppercase text-[#F5F5F7]">
                  THE DEPLOYMENT SYSTEM // SOURCE CODE TO PRODUCTION
               </h2>
            </div>

            <div className="relative">
               <h3 className="phase-header text-2xl font-bold uppercase text-[#8E8E93] transition-colors duration-300 mb-4 bg-[#1A1A1E] inline-block pr-4 relative z-10">
                  [PHASE_01 // ARCHITECTURAL BLUEPRINTING]
               </h3>
               <p className="text-lg text-[#F5F5F7] leading-relaxed">
                  Mapping raw enterprise communication hierarchies, role permissions, and inventory workflows into deterministic logical diagrams before a single line of code is committed.
               </p>
            </div>

            <div className="relative">
               <h3 className="phase-header text-2xl font-bold uppercase text-[#8E8E93] transition-colors duration-300 mb-4 bg-[#1A1A1E] inline-block pr-4 relative z-10">
                  [PHASE_02 // TYPE-SAFE COMPILATION]
               </h3>
               <p className="text-lg text-[#F5F5F7] leading-relaxed">
                  Initializing backend servers with strict validation layers and fully mapped relational schemas to guarantee that schema mismatch errors are caught at build-time.
               </p>
            </div>

            <div className="relative">
               <h3 className="phase-header text-2xl font-bold uppercase text-[#8E8E93] transition-colors duration-300 mb-4 bg-[#1A1A1E] inline-block pr-4 relative z-10">
                  [PHASE_03 // QA STRESS SIMULATION]
               </h3>
               <p className="text-lg text-[#F5F5F7] leading-relaxed">
                  Flooding mock data models with simulated concurrent queries to monitor latency spikes, verify database index stability, and stress-test permission locks.
               </p>
            </div>

            <div className="relative">
               <h3 className="phase-header text-2xl font-bold uppercase text-[#8E8E93] transition-colors duration-300 mb-4 bg-[#1A1A1E] inline-block pr-4 relative z-10">
                  [PHASE_04 // CONTINUOUS PRODUCTION DELIVERY]
               </h3>
               <p className="text-lg text-[#F5F5F7] leading-relaxed">
                  Launching isolated web platforms onto zero-downtime server architecture, ensuring subsequent module updates deploy seamlessly without interrupting active workflows.
               </p>
            </div>
         </div>
      </section>
    </div>
  );
}
