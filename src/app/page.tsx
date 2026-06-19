import { HeroSection } from "@/components/HeroSection";
import { CoreCapabilitiesSection } from "@/components/CoreCapabilitiesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <CoreCapabilitiesSection />
    </div>
  );
}
