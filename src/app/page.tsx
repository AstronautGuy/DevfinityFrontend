import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CoreCapabilitiesSection } from "@/components/CoreCapabilitiesSection";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <CoreCapabilitiesSection />
      <AboutSection />
      <FeaturedProjectsSection />
    </div>
  );
}
