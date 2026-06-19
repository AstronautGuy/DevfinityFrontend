import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
    </div>
  );
}
