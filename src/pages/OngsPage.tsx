import { ModulePlaceholderPage } from "@/components/ModulePlaceholderPage";
import { ecosystemModules, ongFeatures } from "@/data/index";

const module = ecosystemModules.find((m) => m.id === "ongs")!;

export function OngsPage() {
  return (
    <ModulePlaceholderPage
      module={module}
      features={ongFeatures}
      statusNote="O Vestris ONGs está na fase de planejamento. A solução será desenhada para a realidade de organizações de resgate — com foco em simplicidade e documentação confiável."
      paragraphs={[
        "ONGs de resgate e reabilitação precisam de organização sem burocracia. O Vestris ONGs trará cadastro de resgates, histórico por animal, registro de reintrodução e gestão de voluntários em uma plataforma acessível.",
      ]}
    />
  );
}
