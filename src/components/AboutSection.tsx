export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Who I Am
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am a dedicated developer with a strong background in creating scalable and efficient solutions. My expertise spans across frontend technologies, primarily React and Next.js, allowing me to build robust applications from the ground up. I am always eager to learn new technologies and take on challenging projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
