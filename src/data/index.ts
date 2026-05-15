// ─── Navigation ──────────────────────────────────────────────────────────────

export type NavStatus = "active" | "dev" | "planned";

export interface NavLink {
  label: string;
  path: string;
  status: NavStatus;
}

export const navLinks: NavLink[] = [
  { label: "Vestris Clínico", path: "/clinico", status: "active" },
  { label: "Global Vestris", path: "/global", status: "active" },
  { label: "Vestris Lab", path: "/lab", status: "dev" },
  { label: "Vestris Student", path: "/student", status: "planned" },
  { label: "CETAS/ZOO", path: "/cetas-zoo", status: "planned" },
  { label: "ONGs", path: "/ongs", status: "planned" },
  { label: "Planos", path: "/planos", status: "active" },
];

// ─── Clinical Flow ────────────────────────────────────────────────────────────

export interface ClinicalStep {
  step: number;
  title: string;
  desc: string;
}

export const clinicalFlow: ClinicalStep[] = [
  {
    step: 1,
    title: "Relato do tutor",
    desc: "Queixa principal, tempo de evolução e contexto relatado",
  },
  {
    step: 2,
    title: "Anamnese por grupo",
    desc: "Perguntas específicas para aves, répteis ou pequenos mamíferos",
  },
  {
    step: 3,
    title: "Sinais clínicos",
    desc: "Registro estruturado por sistema — respiratório, digestório, neurológico",
  },
  {
    step: 4,
    title: "Exame físico",
    desc: "Parâmetros vitais, mucosas, temperatura e achados físicos por ordem",
  },
  {
    step: 5,
    title: "Suspeitas clínicas",
    desc: "Correlação entre sinais e hipóteses diagnósticas pelo raciocínio clínico",
  },
  {
    step: 6,
    title: "Exames complementares",
    desc: "Solicitação, rastreamento de resultados e integração ao prontuário",
  },
  {
    step: 7,
    title: "Conduta clínica",
    desc: "Estratégias adaptáveis: suporte, tratamento, observação ou encaminhamento",
  },
  {
    step: 8,
    title: "Farmacologia por espécie",
    desc: "Dose calculada por peso, concentração, via, frequência e alertas de risco",
  },
  {
    step: 9,
    title: "Receita e PDFs",
    desc: "Receituário, manejo ao tutor e resumo clínico gerados em um clique",
  },
  {
    step: 10,
    title: "Prontuário final",
    desc: "Histórico completo com assinatura digital, CRM/CRMV e arquivamento",
  },
];

// ─── Clinical Feature Groups ──────────────────────────────────────────────────

export interface FeatureGroup {
  category: string;
  description: string;
  features: string[];
}

export const clinicalFeatureGroups: FeatureGroup[] = [
  {
    category: "Atendimento clínico",
    description: "Fluxo guiado desde o relato até a conduta",
    features: [
      "Fluxo de atendimento guiado por etapas",
      "Anamnese específica para aves, répteis e pequenos mamíferos",
      "Correlação entre sinais clínicos e suspeitas diagnósticas",
      "Estratégias clínicas adaptáveis por caso",
      "Agenda e fila de atendimento",
      "Histórico completo por paciente",
    ],
  },
  {
    category: "Farmacologia",
    description: "Base farmacológica especializada por espécie",
    features: [
      "Banco de princípios ativos organizados por espécie",
      "Cálculo automático de dose por peso corporal",
      "Cálculo de concentração e volume a administrar",
      "Alertas de risco e contraindicações por grupo taxonômico",
      "Via de administração e frequência de uso",
      "Restrições farmacológicas específicas por espécie",
    ],
  },
  {
    category: "Documentação",
    description: "Prontuário e documentos gerados automaticamente",
    features: [
      "Prontuário veterinário especializado para silvestres",
      "Geração de receita médico-veterinária em PDF",
      "Documento de manejo e orientações ao tutor em PDF",
      "Resumo clínico completo em PDF",
      "Assinatura digital com CRM/CRMV",
      "Arquivamento e busca no histórico",
    ],
  },
  {
    category: "Base científica",
    description: "Conhecimento técnico integrado ao atendimento",
    features: [
      "Base científica por espécie e grupo taxonômico",
      "Semiologia aplicada por grupo taxonômico",
      "Exames complementares indicados por suspeita clínica",
      "Evolução clínica estruturada",
      "Estrutura para internação (em breve)",
      "Integração futura com Vestris Lab",
    ],
  },
];

// ─── Plans ────────────────────────────────────────────────────────────────────

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
      "Prontuário digital",
      "Histórico de pacientes",
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

// ─── Ecosystem Modules ────────────────────────────────────────────────────────

export type ModuleStatus = "active" | "dev" | "planned";

export interface EcosystemModule {
  id: string;
  name: string;
  shortName: string;
  path: string;
  status: ModuleStatus;
  statusLabel: string;
  tagline: string;
  description: string;
  color: string;
}

export const ecosystemModules: EcosystemModule[] = [
  {
    id: "clinico",
    name: "Vestris Clínico",
    shortName: "Clínico",
    path: "/clinico",
    status: "active",
    statusLabel: "Disponível",
    tagline: "Central clínica completa",
    description:
      "Sistema clínico principal. Fluxo guiado de atendimento, estratégias adaptáveis, farmacologia por espécie e documentação completa para silvestres e exóticos.",
    color: "emerald",
  },
  {
    id: "lab",
    name: "Vestris Lab",
    shortName: "Lab",
    path: "/lab",
    status: "dev",
    statusLabel: "Em desenvolvimento",
    tagline: "Laboratório integrado",
    description:
      "Fluxo laboratorial especializado. Entrada de amostras, soroteca, rastreabilidade e integração direta com o prontuário clínico.",
    color: "blue",
  },
  {
    id: "student",
    name: "Vestris Student",
    shortName: "Student",
    path: "/student",
    status: "planned",
    statusLabel: "Planejado",
    tagline: "Formação clínica especializada",
    description:
      "Plataforma de aprendizado para estudantes de veterinária com interesse em silvestres. Casos clínicos, farmacologia e trilhas de estudo.",
    color: "violet",
  },
  {
    id: "cetas",
    name: "Vestris CETAS/ZOO",
    shortName: "CETAS/ZOO",
    path: "/cetas-zoo",
    status: "planned",
    statusLabel: "Planejado",
    tagline: "Gestão institucional",
    description:
      "Fluxo para CETAS, zoológicos e centros de manejo. Controle de população, protocolos institucionais e rastreabilidade completa.",
    color: "amber",
  },
  {
    id: "ongs",
    name: "Vestris ONGs",
    shortName: "ONGs",
    path: "/ongs",
    status: "planned",
    statusLabel: "Planejado",
    tagline: "Resgate e reabilitação",
    description:
      "Organização para ONGs e projetos de resgate. Histórico individual, tratamentos, evolução e documentação de reintrodução.",
    color: "rose",
  },
];

// ─── Module Feature Lists ─────────────────────────────────────────────────────

export const labFeatures: string[] = [
  "Entrada e cadastro de amostras",
  "Rastreabilidade completa por amostra",
  "Código de barras digital",
  "Status da amostra em tempo real",
  "Soroteca digital",
  "Exames em processamento",
  "Histórico laboratorial",
  "Integração com prontuário clínico",
  "Laudos e documentos em PDF",
];

export const studentFeatures: string[] = [
  "Casos clínicos guiados",
  "Semiologia por grupo taxonômico",
  "Farmacologia básica por espécie",
  "Cálculos de dose e concentração",
  "Conteúdos científicos estruturados",
  "Simulações de atendimento clínico",
  "Trilhas de estudo",
  "Material de apoio clínico",
  "Cursos especializados em silvestres",
];

export const institutionalFeatures: string[] = [
  "Controle de entrada de animais",
  "Histórico individual por espécie",
  "Protocolos de manejo por grupo",
  "Gestão de quarentena",
  "Exames e evolução clínica",
  "Relatórios institucionais",
  "Gestão de equipe e permissões",
  "Rastreabilidade e auditoria",
  "Manejo coletivo de populações",
];

export const ongFeatures: string[] = [
  "Cadastro de resgates",
  "Histórico individual do animal",
  "Registro de manejo e tratamentos",
  "Documentação completa",
  "Relatórios de atendimento",
  "Gestão de voluntários",
  "Acompanhamento pós-atendimento",
  "Registro de reintrodução na natureza",
];
