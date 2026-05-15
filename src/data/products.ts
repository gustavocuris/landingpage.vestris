export type ProductStatus = "active" | "dev" | "planned";

export interface Product {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  path: string;
  status: ProductStatus;
  statusLabel: string;
  color: "emerald" | "blue" | "violet" | "amber" | "rose";
  ctaLabel: string;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: "clinico",
    name: "Vestris Sistema Clinico",
    shortName: "Sistema Clinico",
    tagline: "Informacao por especie para decisoes clinicas mais seguras.",
    description:
      "Ferramenta clinica para silvestres e exoticos com consulta por especie, apoio ao raciocinio, farmacologia organizada, calculo de dose e documentacao em um fluxo unico.",
    path: "/clinico",
    status: "active",
    statusLabel: "Disponivel",
    color: "emerald",
    ctaLabel: "Conhecer sistema clinico",
    isFeatured: true,
  },
  {
    id: "lab",
    name: "Vestris Lab",
    shortName: "Lab",
    tagline: "Rastreabilidade laboratorial conectada a rotina clinica.",
    description:
      "Estrutura para rastreabilidade, processamento e integracao de exames. Amostras, codigos, laudos e historico laboratorial conectados ao atendimento.",
    path: "/lab",
    status: "dev",
    statusLabel: "Em desenvolvimento",
    color: "blue",
    ctaLabel: "Explorar Vestris Lab",
  },
  {
    id: "student",
    name: "Vestris Student",
    shortName: "Student",
    tagline: "Formacao clinica aplicada para silvestres e exoticos.",
    description:
      "Ambiente para estudantes e profissionais em formacao com casos clinicos, farmacologia aplicada e trilhas de estudo conectadas a pratica.",
    path: "/student",
    status: "planned",
    statusLabel: "Planejado",
    color: "violet",
    ctaLabel: "Explorar Student",
  },
  {
    id: "cetas",
    name: "Vestris CETAS/ZOO",
    shortName: "CETAS/ZOO",
    tagline: "Gestao institucional para operacoes de grande escala.",
    description:
      "Gestao para zoologicos, CETAS e centros de manejo com controle populacional, protocolos, quarentena, historico e rastreabilidade.",
    path: "/cetas-zoo",
    status: "planned",
    statusLabel: "Planejado",
    color: "amber",
    ctaLabel: "Explorar CETAS/ZOO",
  },
  {
    id: "ongs",
    name: "Vestris ONGs",
    shortName: "ONGs",
    tagline: "Gestao de resgates e reabilitacao de animais silvestres.",
    description:
      "Organizacao de resgates, evolucao clinica e documentacao para ONGs e projetos ambientais, com historico por animal e acompanhamento estruturado.",
    path: "/ongs",
    status: "planned",
    statusLabel: "Planejado",
    color: "rose",
    ctaLabel: "Explorar ONGs",
  },
];

export const labFeatures: string[] = [
  "Entrada e cadastro de amostras",
  "Rastreabilidade completa por amostra",
  "Codigo de barras digital",
  "Status da amostra em tempo real",
  "Soroteca digital",
  "Exames em processamento",
  "Historico laboratorial",
  "Integracao com prontuario clinico",
  "Laudos e documentos em PDF",
];

export const studentFeatures: string[] = [
  "Casos clinicos guiados",
  "Semiologia por grupo taxonomico",
  "Farmacologia basica por especie",
  "Calculos de dose e concentracao",
  "Conteudos cientificos estruturados",
  "Simulacoes de atendimento clinico",
  "Trilhas de estudo especializadas",
  "Material de apoio clinico",
  "Cursos em medicina de silvestres",
];

export const institutionalFeatures: string[] = [
  "Controle de entrada de animais",
  "Historico individual por especie",
  "Protocolos de manejo por grupo",
  "Gestao de quarentena",
  "Exames e evolucao clinica",
  "Relatorios institucionais",
  "Gestao de equipe e permissoes",
  "Rastreabilidade e auditoria",
  "Manejo coletivo de populacoes",
];

export const ongFeatures: string[] = [
  "Cadastro de resgates",
  "Historico individual do animal",
  "Registro de manejo e tratamentos",
  "Documentacao completa",
  "Relatorios de atendimento",
  "Gestao de voluntarios",
  "Acompanhamento pos-atendimento",
  "Registro de reintroducao na natureza",
];
