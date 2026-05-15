import { ModulePlaceholderPage } from "@/components/ModulePlaceholderPage";
import { ecosystemModules, institutionalFeatures } from "@/data/index";

const module = ecosystemModules.find((m) => m.id === "cetas")!;

export function CetasZooPage() {
  return (
    <ModulePlaceholderPage
      module={module}
      features={institutionalFeatures}
      statusNote="O Vestris CETAS/ZOO está na fase de planejamento. Ele será pensado especificamente para a realidade dos centros de triagem, zoológicos e instituições de manejo."
      paragraphs={[
        "CETAS e zoológicos gerenciam populações inteiras, não apenas animais individuais. O Vestris CETAS/ZOO terá protocolos institucionais, controle de quarentena e rastreabilidade para operações de grande escala.",
      ]}
    />
  );
}
