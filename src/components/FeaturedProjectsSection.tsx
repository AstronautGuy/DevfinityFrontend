import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FeaturedProjectsSection() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A modern SaaS dashboard built with Next.js and Tailwind.",
    },
    {
      title: "Project Beta",
      description: "An e-commerce storefront with seamless payment integration.",
    },
    {
      title: "Project Gamma",
      description: "A real-time collaborative documentation platform.",
    },
  ];

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              My Work
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="flex flex-col">
              <div className="h-48 w-full bg-muted/60 rounded-t-lg flex items-center justify-center text-muted-foreground">
                Image Placeholder
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
