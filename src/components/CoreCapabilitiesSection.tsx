import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Code2, LayoutTemplate } from "lucide-react";

export function CoreCapabilitiesSection() {
  const capabilities = [
    {
      title: "Custom Enterprise Solutions (ERP & CRM)",
      description: "Designing robust, role-based management systems—from real-time operational tracking to automated inventory and replacement registers—tailored to specific industry workflows.",
      icon: <Server className="h-8 w-8 mb-4 text-primary" />,
    },
    {
      title: "Modern Full-Stack Engineering",
      description: "Utilizing cutting-edge, type-safe development stacks to ensure lightning-fast performance, rock-solid security, and effortless scalability.",
      icon: <Code2 className="h-8 w-8 mb-4 text-primary" />,
    },
    {
      title: "Minimalist UI/UX Design",
      description: "Prioritizing clean, intuitive, and highly responsive interfaces that reduce operational friction and maximize user adoption.",
      icon: <LayoutTemplate className="h-8 w-8 mb-4 text-primary" />,
    },
  ];

  return (
    <section id="capabilities" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Core Capabilities
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What We Do Best
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We translate complex data structures into elegant, high-utility tools.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          {capabilities.map((item, idx) => (
            <Card key={idx} className="flex flex-col text-center border border-border/40 bg-card hover:bg-accent/10 transition-colors shadow-sm">
              <CardHeader className="flex items-center pb-2">
                {item.icon}
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
