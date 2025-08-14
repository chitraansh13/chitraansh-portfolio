import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { AwardsSection } from "@/components/AwardsSection";
import { ContactSection } from "@/components/ContactSection";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <AwardsSection />
      <ContactSection />
    </main>
  );
};

export default Index;