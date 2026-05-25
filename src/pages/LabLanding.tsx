import { SystemPageTemplate } from "@/components/systems/SystemPageTemplate";
import { systemPages } from "@/data/systemPages";

export function LabLanding() {
  return <SystemPageTemplate data={systemPages.lab} />;
}
