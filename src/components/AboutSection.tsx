export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Our Mission
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Precision. Performance. Utility.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              At Devfinity, we don’t believe in one-size-fits-all templates. We take the time to understand the intricate nuances of a business, translating complex data structures into elegant, high-utility tools. From administrative control centers to client-facing applications, we build the digital infrastructure that empowers teams and drives efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
