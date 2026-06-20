"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";

export default function WorkClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".work-hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-[#1E1E24] text-[#F5F5F7] font-mono">
      
      {/* Hero Section */}
      <section className="py-32 px-8 flex flex-col items-center justify-center border-b border-[#2C2C35] bg-[#16161A] text-center">
        <div className="max-w-4xl space-y-6">
          <div className="overflow-hidden">
            <h1 className="work-hero-text text-4xl md:text-6xl font-bold tracking-tighter uppercase text-[#F5F5F7]">
              [03 / WORK]
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="work-hero-text text-4xl md:text-5xl font-bold tracking-tighter uppercase text-[#0A84FF]">
              PRODUCTION DEPLOYMENTS
            </h1>
          </div>
          <p className="work-hero-text text-[#8E8E93] text-lg max-w-3xl mx-auto leading-relaxed">
            Review our raw architectural deployments. We do not build brochures. We engineer low-latency, role-based database environments that handle complex physical operations.
          </p>
        </div>
      </section>

      {/* Featured Horizontal Scroll */}
      <FeaturedProjectsSection />

      {/* Deep Dive Case Study */}
      <section className="w-full py-32 px-8 bg-[#1E1E24] flex justify-center">
        <div className="max-w-5xl w-full space-y-12 bg-[#121214] p-8 md:p-16 border border-[#2C2C35] shadow-2xl">
          <div className="space-y-4 border-b border-[#2C2C35] pb-8">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#30D158]">
              Case Study // Shivshakti Agricultural ERP System Architecture
            </h2>
            <p className="text-[#8E8E93] leading-relaxed text-lg">
              A complete overhaul of fragmented dispatch spreadsheets into a centralized, type-safe Next.js platform. We integrated a dedicated Replacement Register and multi-level role authentication for factory administrators.
            </p>
          </div>

          <div className="space-y-6">
             <h3 className="text-xl font-bold uppercase text-[#0A84FF]">Architectural Metric Matrix</h3>
             
             {/* Styled Markdown Matrix Table */}
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse font-mono text-sm md:text-base">
                 <thead>
                   <tr>
                     <th className="border border-[#2C2C35] bg-[#1A1A1E] p-4 text-[#8E8E93] font-bold">Stack Component</th>
                     <th className="border border-[#2C2C35] bg-[#1A1A1E] p-4 text-[#8E8E93] font-bold">Implementation Metric</th>
                     <th className="border border-[#2C2C35] bg-[#1A1A1E] p-4 text-[#8E8E93] font-bold">Operational Gain</th>
                   </tr>
                 </thead>
                 <tbody className="text-[#F5F5F7]">
                   <tr className="hover:bg-[#1A1A1E] transition-colors">
                     <td className="border border-[#2C2C35] p-4">Drizzle ORM</td>
                     <td className="border border-[#2C2C35] p-4">Monolithic Schema Mapping</td>
                     <td className="border border-[#2C2C35] p-4 text-[#30D158]">Elimination of data type mismatches</td>
                   </tr>
                   <tr className="hover:bg-[#1A1A1E] transition-colors">
                     <td className="border border-[#2C2C35] p-4">Next.js App Router</td>
                     <td className="border border-[#2C2C35] p-4">Edge Dynamic Rendering</td>
                     <td className="border border-[#2C2C35] p-4 text-[#30D158]">40% reduction in customer check-out steps</td>
                   </tr>
                   <tr className="hover:bg-[#1A1A1E] transition-colors">
                     <td className="border border-[#2C2C35] p-4">PostgreSQL</td>
                     <td className="border border-[#2C2C35] p-4">B-Tree Index Tuning</td>
                     <td className="border border-[#2C2C35] p-4 text-[#30D158]">Sub-50ms query latency under load</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
