import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSolutionSection } from "@/components/landing/ProblemSolutionSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { MockupSection } from "@/components/landing/MockupSection";
import { PlatformsSection } from "@/components/landing/PlatformsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { InstallationSection } from "@/components/landing/InstallationSection";
import { StarCTASection } from "@/components/landing/StarCTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <MockupSection />
      <PlatformsSection />
      <HowItWorksSection />
      <InstallationSection />
      <StarCTASection />
      <Footer />
    </div>
  );
};

export default Index;
