import { ModulePlaceholderPage } from "@/components/ModulePlaceholderPage";
import { ecosystemModules, labFeatures } from "@/data/index";

const module = ecosystemModules.find((m) => m.id === "lab")!;

export function LabPage() {
  return (
    <ModulePlaceholderPage
      module={module}
      features={labFeatures}
      statusNote="O Vestris Lab está em desenvolvimento ativo. A integração com o prontuário clínico já está sendo arquitetada para garantir rastreabilidade completa entre clínica e laboratório."
      paragraphs={[
        "O laboratório na medicina de silvestres exige rastreabilidade, organização e integração com o prontuário. O Vestris Lab será a extensão natural do Clínico — com soroteca digital, código de barras e laudos estruturados.",
      ]}
    />
  );
}
