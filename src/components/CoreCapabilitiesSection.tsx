import { TiltCard } from "@/components/TiltCard";

export function CoreCapabilitiesSection() {
  const capabilities = [
    {
      title: "01 / Custom Enterprise Architectures (ERP & CRM)",
      description: "We engineer robust management systems engineered from the ground up to track raw operations in real time. From granular employee logging and automated sales auditing to advanced operational modules like a dedicated Replacement Register for tracking and logging damaged goods by Order ID, we translate your physical workflows into reliable, type-safe digital environments.",
    },
    {
      title: "02 / Type-Safe Backend Engineering",
      description: "Our servers are built using deeply integrated, type-safe data access layers and serverless execution models. By utilizing advanced Object-Relational Mapping (ORM) and end-to-end network validation layers, we ensure every database entry is structurally verified before it hits the disk, eliminating runtime crashes and state corruption.",
    },
    {
      title: "03 / Minimalist Interface Optimization",
      description: "We prioritize hyper-responsive, lightweight UI/UX frameworks designed to operate flawlessly on any screen. By stripping out heavy, bloated client-side scripts and using server-optimized components, we deliver sub-second page loads, minimal layout shifting, and a clean interface aesthetic that reduces friction.",
    },
    {
      title: "04 / Advanced Relational Database Design",
      description: "Data structure dictates speed. We architect highly optimized relational schemas that can withstand heavy concurrent query traffic without bottlenecking. From complex inner joins to custom automated data pipelines, your company's operational records remain isolated, secure, and instantaneously retrievable.",
    },
  ];

  return (
    <section id="capabilities" className="w-full py-24 flex items-center justify-center">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-start space-y-4 mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#F5F5F7] uppercase">
              The Specialized Full-Stack Feature Matrix
            </h2>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, idx) => (
            <TiltCard key={idx} className="flex flex-col p-8 h-full bg-[#16161c] border-[#2C2C35]">
              <div className="flex flex-col items-start pb-4 border-b border-[#2C2C35] mb-4">
                <h3 className="text-lg font-bold leading-tight tracking-tight text-[#0A84FF] font-mono">{item.title}</h3>
              </div>
              <div className="text-sm text-[#8E8E93] flex-1 leading-relaxed">
                {item.description}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
