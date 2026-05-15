export interface ClinicalStep {
  step: number;
  title: string;
  desc: string;
}

export const clinicalFlow: ClinicalStep[] = [
  {
    step: 1,
    title: "Relato do tutor",
    desc: "Queixa principal, tempo de evolução e contexto relatado pelo responsável",
  },
  {
    step: 2,
    title: "Anamnese por grupo",
    desc: "Perguntas direcionadas para aves, répteis ou pequenos mamíferos exóticos",
  },
  {
    step: 3,
    title: "Sinais clínicos",
    desc: "Registro estruturado por sistema — respiratório, digestório, neurológico e outros",
  },
  {
    step: 4,
    title: "Exame físico",
    desc: "Parâmetros vitais, mucosas, temperatura, hidratação e achados físicos por sistema",
  },
  {
    step: 5,
    title: "Suspeitas clínicas",
    desc: "Correlação entre sinais e hipóteses — guiada pelo raciocínio do veterinário",
  },
  {
    step: 6,
    title: "Exames complementares",
    desc: "Solicitação, rastreamento e integração de resultados laboratoriais ao prontuário",
  },
  {
    step: 7,
    title: "Conduta clínica",
    desc: "Estratégias adaptáveis: suporte, tratamento, observação ou encaminhamento especializado",
  },
  {
    step: 8,
    title: "Farmacologia por espécie",
    desc: "Dose calculada por peso, concentração, via, frequência e alertas de contraindicação",
  },
  {
    step: 9,
    title: "Receita e PDFs",
    desc: "Receituário, orientações ao tutor e resumo clínico gerados automaticamente em PDF",
  },
  {
    step: 10,
    title: "Prontuário final",
    desc: "Histórico completo com assinatura digital, CRM/CRMV e arquivamento permanente",
  },
];

export interface FeatureGroup {
  category: string;
  description: string;
  features: string[];
}

export const clinicalFeatureGroups: FeatureGroup[] = [
  {
    category: "Atendimento clínico",
    description: "Fluxo guiado desde o relato até a conduta final",
    features: [
      "Fluxo de atendimento guiado por etapas",
      "Anamnese específica por grupo taxonômico",
      "Correlação de sinais clínicos com suspeitas",
      "Estratégias clínicas adaptáveis por caso",
      "Agenda e fila de atendimento",
      "Histórico completo por paciente",
    ],
  },
  {
    category: "Farmacologia",
    description: "Base farmacológica especializada por espécie",
    features: [
      "Banco de princípios ativos por espécie",
      "Cálculo automático de dose por peso corporal",
      "Cálculo de concentração e volume a administrar",
      "Alertas de risco e contraindicações por grupo",
      "Via de administração e frequência de uso",
      "Restrições farmacológicas específicas",
    ],
  },
  {
    category: "Documentação",
    description: "Prontuário e documentos gerados automaticamente",
    features: [
      "Prontuário veterinário especializado",
      "Geração de receita médico-veterinária em PDF",
      "Documento de manejo e orientações ao tutor",
      "Resumo clínico completo em PDF",
      "Assinatura digital com CRM/CRMV",
      "Arquivamento e busca no histórico",
    ],
  },
  {
    category: "Base científica",
    description: "Conhecimento técnico integrado ao atendimento",
    features: [
      "Base científica por grupo taxonômico",
      "Semiologia aplicada por espécie",
      "Exames complementares por suspeita clínica",
      "Evolução clínica estruturada",
      "Estrutura para internação (em breve)",
      "Integração futura com Vestris Lab",
    ],
  },
];
