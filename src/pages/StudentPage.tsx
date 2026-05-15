import { ModulePlaceholderPage } from "@/components/ModulePlaceholderPage";
import { ecosystemModules, studentFeatures } from "@/data/index";

const module = ecosystemModules.find((m) => m.id === "student")!;

export function StudentPage() {
  return (
    <ModulePlaceholderPage
      module={module}
      features={studentFeatures}
      statusNote="O Vestris Student está na fase de planejamento. A visão é criar uma plataforma de aprendizado clínico que conecte estudantes ao mesmo raciocínio estruturado do ambiente profissional."
      paragraphs={[
        "Estudantes de veterinária não têm onde aprender a lógica clínica de silvestres de forma prática e estruturada. O Vestris Student nasce para preencher essa lacuna — com casos reais, simulações e base científica integrada.",
      ]}
    />
  );
}
