"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";

export function ConnectFormWizard() {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scopes: [] as string[],
    capacity: "",
    briefing: ""
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleScopeChange = (scope: string) => {
    setFormData(prev => ({
      ...prev,
      scopes: prev.scopes.includes(scope) ? prev.scopes.filter(s => s !== scope) : [...prev.scopes, scope]
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error("Failed to send");
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert("System fault: Unable to initialize pipeline.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { id: "identity", label: "01 / Identity" },
    { id: "scope", label: "02 / Operational Scope" },
    { id: "capacity", label: "03 / System Capacity" },
    { id: "briefing", label: "04 / Core Briefing" },
  ];

  const handleNext = contextSafe(() => {
    if (step < steps.length - 1) {
      gsap.to(".wizard-track", {
        xPercent: -25 * (step + 1),
        duration: 0.6,
        ease: "power3.inOut"
      });
      setStep(prev => prev + 1);
    }
  });

  const handlePrev = contextSafe(() => {
    if (step > 0) {
      gsap.to(".wizard-track", {
        xPercent: -25 * (step - 1),
        duration: 0.6,
        ease: "power3.inOut"
      });
      setStep(prev => prev - 1);
    }
  });

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto border border-[#2C2C35] bg-[#16161A] shadow-2xl overflow-hidden font-mono text-[#F5F5F7]">
      {/* Wizard Header */}
      <div className="flex border-b border-[#2C2C35] bg-[#1A1A1E]">
        {steps.map((s, idx) => (
          <div key={s.id} className={`flex-1 p-4 text-xs md:text-sm text-center transition-colors duration-300 ${idx === step ? "text-[#0A84FF] border-b-2 border-[#0A84FF] bg-[#121214]" : "text-[#8E8E93]"}`}>
            {s.label}
          </div>
        ))}
      </div>

      {/* Wizard Track (Horizontal Scroll) */}
      <div className="overflow-hidden w-full h-[400px] relative">
        <div className="wizard-track flex w-[400%] h-full absolute top-0 left-0">
          
          {/* Step 01: Identity */}
          <div className="w-1/4 h-full p-8 md:p-12 flex flex-col justify-center">
             <div className="space-y-8 max-w-xl mx-auto w-full">
               <div className="space-y-2">
                 <label className="text-[#8E8E93] text-sm">[CLIENT_NAME]</label>
                 <input 
                   type="text" 
                   value={formData.name}
                   onChange={e => setFormData({...formData, name: e.target.value})}
                   className="w-full bg-[#1A1A1E] border border-[#2C2C35] p-3 focus:outline-none focus:border-[#0A84FF] transition-colors duration-200" 
                   placeholder="Enter your full name" 
                 />
               </div>
               <div className="space-y-2">
                 <label className="text-[#8E8E93] text-sm">[ORGANIZATION_EMAIL]</label>
                 <input 
                   type="email" 
                   value={formData.email}
                   onChange={e => setFormData({...formData, email: e.target.value})}
                   className="w-full bg-[#1A1A1E] border border-[#2C2C35] p-3 focus:outline-none focus:border-[#0A84FF] transition-colors duration-200" 
                   placeholder="hello@company.com" 
                 />
               </div>
             </div>
          </div>

          {/* Step 02: Scope */}
          <div className="w-1/4 h-full p-8 md:p-12 flex flex-col justify-center">
             <div className="space-y-4 max-w-2xl mx-auto w-full">
               <label className="text-[#8E8E93] text-sm mb-4 block">[SELECT_OPERATIONAL_SCOPE]</label>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {["[CUSTOM_ERP]", "[E-COMMERCE_ECOSYSTEM]", "[UI_UX_REFACTOR]", "[RELATIONAL_DATABASE]"].map(scope => (
                    <label key={scope} className="cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="peer sr-only" 
                        checked={formData.scopes.includes(scope)}
                        onChange={() => handleScopeChange(scope)}
                      />
                      <div className="border border-[#2C2C35] p-4 text-center bg-[#1A1A1E] peer-checked:border-[#0A84FF] peer-checked:text-[#0A84FF] transition-colors hover:border-[#0A84FF]/50">
                        {scope}
                      </div>
                    </label>
                 ))}
               </div>
             </div>
          </div>

          {/* Step 03: Capacity */}
          <div className="w-1/4 h-full p-8 md:p-12 flex flex-col justify-center">
             <div className="space-y-4 max-w-xl mx-auto w-full">
               <label className="text-[#8E8E93] text-sm block">[SYSTEM_CAPACITY_TIER]</label>
                <select 
                  value={formData.capacity}
                  onChange={e => setFormData({...formData, capacity: e.target.value})}
                  className="w-full bg-[#1A1A1E] border border-[#2C2C35] p-4 focus:outline-none focus:border-[#0A84FF] transition-colors duration-200 appearance-none cursor-pointer"
                >
                 <option value="">Select Operational Budget Tier...</option>
                 <option value="tier1">Seed / Prototype ($10k - $25k)</option>
                 <option value="tier2">Growth Architecture ($25k - $50k)</option>
                 <option value="tier3">Enterprise Infrastructure ($50k+)</option>
               </select>
               <p className="text-xs text-[#8E8E93] mt-2">{"//"} Capacity tiers determine the underlying infrastructure scalability required.</p>
             </div>
          </div>

          {/* Step 04: Briefing */}
          <div className="w-1/4 h-full p-8 md:p-12 flex flex-col justify-center">
             <div className="space-y-4 max-w-2xl mx-auto w-full h-full flex flex-col">
               <label className="text-[#8E8E93] text-sm block">[CORE_BRIEFING]</label>
                <textarea 
                  value={formData.briefing}
                  onChange={e => setFormData({...formData, briefing: e.target.value})}
                  className="w-full flex-1 bg-[#1A1A1E] border border-[#2C2C35] p-4 focus:outline-none focus:border-[#0A84FF] transition-colors duration-200 resize-none" 
                  placeholder="// Outline any custom operational features here (e.g., Replacement Register, custom integrations)..."
                />
             </div>
          </div>

        </div>
      </div>

      {/* Wizard Controls */}
      <div className="p-6 border-t border-[#2C2C35] bg-[#1A1A1E] flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={handlePrev} 
          disabled={step === 0}
          className="border-[#2C2C35] text-[#8E8E93] hover:text-[#F5F5F7]"
        >
          {"<"} PREVIOUS
        </Button>
        {step < steps.length - 1 ? (
          <Button 
            onClick={handleNext}
            className="bg-[#2C2C35] text-[#F5F5F7] hover:bg-[#0A84FF] transition-colors"
          >
            NEXT_PHASE {">"}
          </Button>
        ) : (
          <Button 
            onClick={handleSubmit}
            disabled={isSubmitting || isSuccess}
            className={`transition-colors ${isSuccess ? "bg-[#30D158] text-[#121214] border-[#30D158]" : "bg-[#2C2C35] text-[#F5F5F7] hover:bg-[#0A84FF]"}`}
          >
            {isSubmitting ? "[ ESTABLISHING CONNECTION... ]" : isSuccess ? "[ CONNECTION ESTABLISHED ]" : "[ EXECUTE CONNECTION PIPELINE ]"}
          </Button>
        )}
      </div>
    </div>
  );
}
