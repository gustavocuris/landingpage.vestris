import { SystemPageTemplate } from "@/components/systems/SystemPageTemplate";
import { systemPages } from "@/data/systemPages";

export function OngLanding() {
  return <SystemPageTemplate data={systemPages.ongs} />;
}
