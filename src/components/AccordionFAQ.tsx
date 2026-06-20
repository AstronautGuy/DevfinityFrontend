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
      q: "Can Devfinity handle legacy database migration into a new full-stack system?",
      a: "Yes. Devfinity designs dedicated data translation pipelines that extract, clean, and map legacy files directly into optimized, type-safe relational schemas. This migration workflow maintains absolute data integrity and ensures zero system downtime during the cutover phase."
    },
    {
      q: "Who owns the final production codebase and deployment infrastructure?",
      a: "Your organization retains full ownership of the source code assets, database instances, and platform configurations. Devfinity provides clear documentation and direct keys upon production handoff."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 font-mono">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
        <h3 className="text-left text-[#F5F5F7] font-bold text-sm md:text-base leading-relaxed pr-8 m-0">
          Q: {question}
        </h3>
        <div className={`p-2 rounded border transition-colors ${isOpen ? "border-[#0A84FF] text-[#0A84FF]" : "border-[#2C2C35] text-[#8E8E93]"}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="p-6 pt-0 text-[#8E8E93] text-sm md:text-base leading-relaxed border-t border-[#2C2C35] m-0">
            A: {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
