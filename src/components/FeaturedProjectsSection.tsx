"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FeaturedProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    { title: "Enterprise Resource Planner", desc: "A modern SaaS dashboard built with Next.js and Tailwind." },
    { title: "Distributed Financial Ledger", desc: "Real-time sync capabilities using tRPC and WebSockets." },
    { title: "Cloud Infrastructure Visualizer", desc: "Interactive node graphs mapped directly from AWS." },
    { title: "Automated Deployment Pipeline", desc: "Seamless CI/CD integrated terminal UI." },
  ];

  useGSAP(() => {
    // Static Entry
    gsap.from(".work-text", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });

    // Horizontal Scroll Interception
    const totalPanels = projects.length;
    
    gsap.to(containerRef.current, {
      xPercent: -100 * ((totalPanels - 1) / totalPanels),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + (containerRef.current?.offsetWidth || 0),
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="h-screen w-full flex flex-col justify-center overflow-hidden bg-[#1E1E24]">
      <div className="container px-4 md:px-8 mb-8 z-10 relative pointer-events-none">
        <h2 className="work-text text-4xl md:text-6xl font-bold tracking-tighter text-[#F5F5F7] uppercase">
          Structural <span className="text-[#0A84FF]">Mockups</span>
        </h2>
        <p className="work-text text-[#8E8E93] mt-2 max-w-lg">
          Scroll down to explore enterprise dashboard architectures on a horizontal matrix.
        </p>
      </div>

      {/* Horizontal Matrix Container */}
      <div 
        ref={containerRef} 
        className="flex h-[60vh] w-[400vw] items-center px-4"
        style={{ width: `${projects.length * 100}vw` }}
      >
        {projects.map((project, idx) => (
          <div key={idx} className="w-screen px-4 md:px-12 flex-shrink-0">
            <Card className="flex flex-col h-full max-w-5xl mx-auto border border-[#30363d] hover:border-[#0A84FF] transition-colors bg-[#161b22]">
              <div className="h-96 w-full border-b border-[#30363d] flex flex-col bg-[#0d1117]">
                <div className="flex items-center px-4 h-8 border-b border-[#30363d] bg-[#161b22]">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center text-[#8E8E93]">
                  [ Dashboard Rendering Engine: {project.title} ]
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-[#F5F5F7]">{project.title}</CardTitle>
                <CardDescription className="text-[#8E8E93]">{project.desc}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button variant="outline" className="w-full border-[#30363d] text-[#F5F5F7] hover:text-[#0A84FF] hover:border-[#0A84FF]">
                  Analyze Structure
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
