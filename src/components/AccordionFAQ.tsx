"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function AccordionFAQ() {
  const faqs = [
    {
      q: "How long does a custom ERP or CRM architectural build take from blueprint to deployment?",
      a: "A standard custom enterprise infrastructure typically spans 8 to 12 weeks. This includes detailed operational mapping, relational schema building, integration of specialized registers (such as a custom Replacement Register), and live traffic stress testing."
    },
    {
      q: "Can Devfinity migrate legacy company data into the new type-safe ecosystem safely?",
      a: "Yes. We engineer automated script pipelines to extract, validate, and structure your legacy data into our type-safe relational schemas, eliminating data corruption or downtime during the system changeover."
    },
    {
      q: "Who owns the final production codebase and deployment infrastructure?",
      a: "Your organization retains full ownership of the source code assets, database instances, and platform configurations. Devfinity provides clear documentation and direct keys upon production handoff."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 font-mono">
      {faqs.map((faq, idx) => (
        <AccordionItem key={idx} question={faq.q} answer={faq.a} />
      ))}
    </div>
  );
}

function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#2C2C35] bg-[#16161A]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center hover:bg-[#1A1A1E] transition-colors focus:outline-none"
      >
        <span className="text-left text-[#F5F5F7] font-bold text-sm md:text-base leading-relaxed pr-8">
          [Q] {question}
        </span>
        <div className={`p-2 rounded border transition-colors ${isOpen ? "border-[#0A84FF] text-[#0A84FF]" : "border-[#2C2C35] text-[#8E8E93]"}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="p-6 pt-0 text-[#8E8E93] text-sm md:text-base leading-relaxed border-t border-[#2C2C35]">
            [A] {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
