import { PageLayout } from "@/components/PageLayout";
import { HeroClinico } from "@/components/clinico/HeroClinico";
import { ClinicalFlow } from "@/components/clinico/ClinicalFlow";
import { FeaturesSection } from "@/components/clinico/FeaturesSection";
import { PlansSection } from "@/components/clinico/PlansSection";
import { CTASection } from "@/components/clinico/CTASection";

export function ClinicPage() {
  return (
    <PageLayout>
      <HeroClinico />
      <ClinicalFlow />
      <FeaturesSection />
      <PlansSection />
      <CTASection />
    </PageLayout>
  );
}
