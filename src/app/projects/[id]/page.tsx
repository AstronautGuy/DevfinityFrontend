import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const projectId = resolvedParams.id;
  
  // Generic mock data based on ID
  const project = {
    id: projectId,
    title: `Project ${projectId.toUpperCase()}`,
    description: "A cutting-edge solution designed to improve operational efficiency and deliver an exceptional user experience. This custom build incorporates state-of-the-art technologies to ensure scalability, security, and performance.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    client: "Acme Corporation",
    year: "2026",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="mb-8">
        <Button variant="ghost" asChild className="-ml-4">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          <div className="aspect-video bg-muted/60 rounded-lg flex items-center justify-center border border-border/40">
            <span className="text-muted-foreground">Main Project Image Placeholder</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-video bg-muted/60 rounded-lg flex items-center justify-center border border-border/40">
              <span className="text-muted-foreground text-sm">Screenshot 1</span>
            </div>
            <div className="aspect-video bg-muted/60 rounded-lg flex items-center justify-center border border-border/40">
              <span className="text-muted-foreground text-sm">Screenshot 2</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg border border-border/40">
            <h3 className="font-semibold text-lg mb-4">Project Details</h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Client</dt>
                <dd className="font-medium">{project.client}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Year</dt>
                <dd className="font-medium">{project.year}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground mb-2">Technologies</dt>
                <dd className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-secondary px-2 py-1 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col space-y-3">
            <Button asChild className="w-full">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Project
              </a>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
