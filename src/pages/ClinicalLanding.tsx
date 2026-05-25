import { SystemPageTemplate } from "@/components/systems/SystemPageTemplate";
import { systemPages } from "@/data/systemPages";

export function ClinicalLanding() {
  return <SystemPageTemplate data={systemPages.clinico} />;
}
