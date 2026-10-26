import { Navigation } from "@/components/portfolio/Navigation";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ImpactSection } from "@/components/portfolio/ImpactSection";
import { BuildsSection } from "@/components/portfolio/BuildsSection";
import { CaseStudiesSection } from "@/components/portfolio/CaseStudiesSection";
import { PhilosophySection } from "@/components/portfolio/PhilosophySection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { LookingForSection } from "@/components/portfolio/LookingForSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ImpactSection />
        <BuildsSection />
        <CaseStudiesSection />
        <PhilosophySection />
        <SkillsSection />
        <ExperienceSection />
        <LookingForSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
