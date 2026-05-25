import { SystemPageTemplate } from "@/components/systems/SystemPageTemplate";
import { systemPages } from "@/data/systemPages";

export function StudentLanding() {
  return <SystemPageTemplate data={systemPages.student} />;
}
