import { SystemPageTemplate } from "@/components/systems/SystemPageTemplate";
import { systemPages } from "@/data/systemPages";

export function CetasZooLanding() {
  return <SystemPageTemplate data={systemPages.cetas} />;
}
