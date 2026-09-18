import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ValueStrip } from "@/components/sections/value-strip";
import { AboutSection } from "@/components/sections/about";
import { ClientsSection } from "@/components/sections/clients";
import { ServicesOverview } from "@/components/sections/services-overview";
import { RecruitmentSection } from "@/components/sections/recruitment";
import { RecruitmentProcess } from "@/components/sections/recruitment-process";
import { HRConsulting } from "@/components/sections/hr-consulting";
import { HRAdvisory } from "@/components/sections/hr-advisory";
import { CVCareerServices } from "@/components/sections/cv-career-services";
import { CareerServicesCTA } from "@/components/sections/career-services-cta";
import { Training } from "@/components/sections/training";
import { DualPathway } from "@/components/sections/dual-pathway";
import { Industries } from "@/components/sections/industries";
import { Philosophy } from "@/components/sections/philosophy";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <ValueStrip />
        <AboutSection />
        <ClientsSection />
        <ServicesOverview />
        <RecruitmentSection />
        <RecruitmentProcess />
        <HRConsulting />
        <HRAdvisory />
        <CVCareerServices />
        <CareerServicesCTA />
        <Training />
        <DualPathway />
        <Industries />
        <Philosophy />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
