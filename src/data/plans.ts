export interface Plan {
  name: string;
  price: string;
  period: string;
  target: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export const plans: Plan[] = [
  {
    name: "Veterinário",
    price: "R$79",
    period: "/mês",
    target: "Profissional autônomo",
    description:
      "Para veterinários que atendem silvestres e exóticos de forma independente.",
    features: [
      "Atendimento clínico guiado",
      "Farmacologia por espécie",
      "Geração de PDFs e receituário",
      "Prontuário digital especializado",
      "Histórico completo por paciente",
      "Suporte por email",
    ],
    highlighted: false,
    cta: "Começar agora",
  },
  {
    name: "Clínica",
    price: "R$249",
    period: "/mês",
    target: "Equipe especializada",
    description:
      "Para clínicas e equipes especializadas em medicina de silvestres e exóticos.",
    features: [
      "Tudo do plano Veterinário",
      "Múltiplos veterinários",
      "Agenda compartilhada",
      "Fila de atendimento",
      "Relatórios da clínica",
      "Suporte prioritário",
    ],
    highlighted: true,
    cta: "Escolher Clínica",
  },
  {
    name: "Operação",
    price: "R$449",
    period: "/mês",
    target: "Hospital e operações avançadas",
    description:
      "Para hospitais, centros de referência e operações clínicas de grande porte.",
    features: [
      "Tudo do plano Clínica",
      "Equipes ilimitadas",
      "Gestão de internação",
      "Integração com Vestris Lab",
      "API e integrações externas",
      "Suporte dedicado",
    ],
    highlighted: false,
    cta: "Falar com o time",
  },
];
