"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ConnectFormWizard } from "@/components/ConnectFormWizard";
import { AccordionFAQ } from "@/components/AccordionFAQ";

// Minimal Interactive Coordinate Canvas
function CoordinateCanvas() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Matrix of dots */}
      <div 
        className="w-full h-full opacity-20" 
        style={{ 
          backgroundImage: 'radial-gradient(#2C2C35 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      {/* Coordinate Readout */}
      <div className="absolute bottom-8 right-8 border border-[#2C2C35] bg-[#121214] text-[#8E8E93] text-xs font-mono p-2 flex items-center shadow-lg">
        <span className="text-[#0A84FF] mr-2">{"//"}</span>
        X_{coords.x.toString().padStart(4, '0')} // Y_{coords.y.toString().padStart(4, '0')}
      </div>
    </div>
  );
}

// Clipboard Contact Component
function ClipboardContact({ label, value }: { label: string, value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col space-y-2 border-b border-[#2C2C35] pb-4">
      <span className="text-sm text-[#8E8E93]">{label}</span>
      <div className="flex justify-between items-center group cursor-pointer" onClick={handleCopy}>
        <span className="text-lg text-[#F5F5F7] group-hover:text-[#0A84FF] transition-colors">{value}</span>
        <span className={`text-xs font-bold transition-colors ${copied ? "text-[#30D158]" : "text-[#2C2C35] group-hover:text-[#0A84FF]"}`}>
          {copied ? "[COPIED]" : "[COPY]"}
        </span>
      </div>
    </div>
  );
}

export default function ConnectPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Viewport 1: Clipping Mask Entry
    gsap.from(".connect-hero-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-[#16161A] text-[#F5F5F7] font-mono">
      
      {/* Viewport 1: The Connection Terminal */}
      <section className="relative h-screen w-full flex items-center justify-center p-8 border-b border-[#2C2C35] overflow-hidden">
        <CoordinateCanvas />
        <div className="relative z-10 max-w-4xl w-full text-center space-y-6 bg-[#16161A]/80 backdrop-blur-sm p-8 border border-[#2C2C35] shadow-2xl">
          <div className="overflow-hidden">
            <h1 className="connect-hero-text text-3xl md:text-5xl font-bold tracking-tighter uppercase text-[#F5F5F7]">
              [04 / CONNECT]
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="connect-hero-text text-4xl md:text-6xl font-bold tracking-tighter uppercase text-[#0A84FF]">
              INITIALIZE SYSTEM DEPLOYMENT
            </h1>
          </div>
          <p className="connect-hero-text text-[#8E8E93] text-lg leading-relaxed max-w-3xl mx-auto pt-4 border-t border-[#2C2C35]">
            Establish direct contact with Devfinity. Whether you are ready to replace a legacy architecture with a custom ERP infrastructure or need a high-performance web platform built from scratch, our intake console maps your functional requirements straight to our engineering team.
          </p>
        </div>
      </section>

      {/* Viewport 2: The Project Configurator Wizard */}
      <section className="w-full py-32 flex flex-col items-center justify-center bg-[#1E1E24] border-b border-[#2C2C35]">
        <div className="container px-4 md:px-8 mb-16 text-center space-y-4">
           <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#F5F5F7]">PROJECT CONFIGURATOR WIZARD</h2>
           <p className="text-[#8E8E93] max-w-2xl mx-auto">Map your operational requirements directly into our deployment pipeline using the interactive console below.</p>
        </div>
        <div className="w-full px-4">
           <ConnectFormWizard />
        </div>
      </section>

      {/* Viewport 3: The Technical FAQ Registry */}
      <section className="w-full py-32 flex flex-col items-center bg-[#16161A] border-b border-[#2C2C35]">
        <div className="container px-4 md:px-8">
           <div className="text-center mb-16 space-y-4">
             <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#0A84FF]">
               INTEGRATION PROTOCOLS // SYSTEM FREQUENTLY ASKED QUESTIONS
             </h2>
             <p className="text-[#8E8E93] max-w-3xl mx-auto">
               Review our standard operational protocols and architectural rollout timelines.
             </p>
           </div>
           <AccordionFAQ />
        </div>
      </section>

      {/* Viewport 4: Direct Routing & Geographic Node */}
      <section className="w-full py-32 flex justify-center bg-[#1E1E24]">
         <div className="max-w-6xl w-full px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Column: Routing Actions */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold uppercase text-[#F5F5F7] mb-8 border-b border-[#2C2C35] pb-4">
                DIRECT ROUTING
              </h2>
              <div className="space-y-6">
                <ClipboardContact label="[SYSTEM_MAILBOX]" value="info@devfinity.net" />
                <ClipboardContact label="[SYSTEM_PHONE]" value="8780706192" />
                <ClipboardContact label="[OPERATIONAL_HOURS]" value="09:00 - 18:00 IST" />
              </div>
            </div>

            {/* Right Column: Node Visualizer Placeholder */}
            <div className="w-full aspect-square md:aspect-auto md:h-96 border border-[#2C2C35] bg-[#16161A] rounded-lg shadow-2xl relative overflow-hidden flex flex-col">
              <div className="h-8 border-b border-[#2C2C35] flex items-center px-4 bg-[#1A1A1E]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#2C2C35]" />
                  <div className="w-3 h-3 rounded-full bg-[#2C2C35]" />
                  <div className="w-3 h-3 rounded-full bg-[#2C2C35]" />
                </div>
              </div>
              <div className="flex-1 relative bg-[#0d1117] overflow-hidden flex items-center justify-center p-8">
                 {/* Schematic Vector Mock */}
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0A84FF] to-transparent" />
                 <div className="w-full h-full border border-[#0A84FF]/20 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#0A84FF] rounded-full shadow-[0_0_15px_#0A84FF] animate-pulse" />
                    <div className="absolute top-[40%] left-[30%] w-2 h-2 bg-[#8E8E93] rounded-full" />
                    <div className="absolute top-[60%] left-[70%] w-2 h-2 bg-[#8E8E93] rounded-full" />
                    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                      <line x1="50" y1="50" x2="30" y2="40" stroke="#0A84FF" strokeWidth="0.5" />
                      <line x1="50" y1="50" x2="70" y2="60" stroke="#0A84FF" strokeWidth="0.5" />
                    </svg>
                 </div>
                 <div className="absolute bottom-8 left-8 border border-[#2C2C35] bg-[#121214] p-2 text-xs text-[#30D158]">
                   [ NODE_ACTIVE: VADODARA_IN ]
                   <br/>[ PING: 12ms ]
                 </div>
              </div>
            </div>
         </div>
      </section>

    </div>
  );
}
