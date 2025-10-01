import FmsHero from "@/components/fms/Hero";
import ProblemSolution from "@/components/fms/ProblemSolution";
import Features from "@/components/fms/Features";
import Integrations from "@/components/fms/Integrations";
import PlatformOverview from "@/components/fms/PlatformOverview";
import InstallationSteps from "@/components/fms/InstallationSteps";
import CtaSection from "@/components/fms/CtaSection";
import Comparison from "@/components/fms/Comparison";
import ToggleOptions from "@/components/fms/ToggleOptions";

export default function FileManagementPage() {
  return (
    <main className="bg-[#0A0F1C]">
      <FmsHero />

      {/* 2. Problem + Solution */}
      <ProblemSolution />
      {/* 4. Features */}
      <Features />
      {/* 5. Integrations */}
      <Integrations />
      {/* 6. Platform Overview */}
      <div className="py-8" />
      <PlatformOverview />
      {/* 7. 3 Step Installation */}
      <div className="py-8" />
      <InstallationSteps />
      {/* 8. Callisto vs other FMS comparison */}
      <div className="py-8" />
      <Comparison />
      {/* 9. Toggle-state section */}
      <div className="py-8" />
      <ToggleOptions />
      {/* 10. CTA Section */}
      <div className="py-8" />
      <CtaSection />
      {/* 11. Footer is global via layout */}
    </main>
  );
}


