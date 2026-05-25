import {
  BookOpen,
  Boxes,
  Brain,
  Calculator,
  ClipboardList,
  Dna,
  FileBarChart,
  FileText,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Microscope,
  Pill,
  QrCode,
  Search,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Users,
  Warehouse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SystemAccent = "emerald" | "blue" | "violet" | "amber" | "rose";

export interface SystemPageData {
  id: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  description: string;
  status: string;
  path: string;
  accent: SystemAccent;
  heroIcon: LucideIcon;
  cta: string;
  visualTitle: string;
  visualItems: string[];
  highlights?: string[];
  explainBlocks: Array<{
    title: string;
    text: string;
  }>;
  features: Array<{
    icon: LucideIcon;
    title: string;
    text: string;
  }>;
  routine: string[];
  plans: Array<{
    name: string;
    price: string;
    description: string;
    benefits: string[];
  }>;
}

const genericPlans = [
  {
    name: "Plano Inicial",
    price: "Em breve",
    description: "Para comecar com organizacao e controle.",
    benefits: ["Acesso ao sistema", "Funcionalidades principais", "Suporte basico"],
  },
  {
    name: "Plano Profissional",
    price: "R$ 00,00",
    description: "Para rotinas mais completas e frequentes.",
    benefits: ["Tudo do Inicial", "Mais usuarios", "Relatorios e historico"],
  },
  {
    name: "Plano Clinica",
    price: "R$ 00,00",
    description: "Para equipes, instituicoes e operacoes.",
    benefits: ["Equipe integrada", "Permissoes", "Acompanhamento prioritario"],
  },
];

export const systemPages: Record<string, SystemPageData> = {
  clinico: {
    id: "clinico",
    title: "VESTRIS SISTEMA CLINICO",
    eyebrow: "Produto principal",
    subtitle: "Para veterinarios e clinicas que atendem animais silvestres e exoticos.",
    description:
      "Prontuario inteligente, informacoes por especie, farmacologia organizada e apoio a decisao clinica em uma rotina clara.",
    status: "Disponivel",
    path: "/clinico",
    accent: "emerald",
    heroIcon: Stethoscope,
    cta: "Ver planos",
    visualTitle: "Consulta por especie",
    visualItems: ["Prontuario inteligente", "Calculo de doses", "Condutas e referencias", "Historico organizado"],
    highlights: ["TUDO ORGANIZADO POR ESPECIE", "MENOS TEMPO PROCURANDO. MAIS TEMPO CUIDANDO."],
    explainBlocks: [
      {
        title: "O que e",
        text: "Uma central clinica criada para silvestres e exoticos, com fluxo de atendimento e base organizada por especie.",
      },
      {
        title: "Para quem",
        text: "Veterinarios, clinicas e equipes que precisam atender aves, repteis, mamiferos exoticos e fauna silvestre.",
      },
      {
        title: "Problema que resolve",
        text: "Reduz tempo perdido procurando informacoes dispersas e melhora a seguranca da decisao clinica.",
      },
      {
        title: "Como ajuda",
        text: "Organiza consulta, dose, conduta, referencias, documentos e historico em uma experiencia unica.",
      },
    ],
    features: [
      { icon: Dna, title: "Informacoes por especie", text: "Conteudo clinico separado por grupo e especie." },
      { icon: ClipboardList, title: "Prontuario inteligente", text: "Atendimento estruturado do inicio ao fim." },
      { icon: Calculator, title: "Calculo de doses", text: "Dose por peso, concentracao e via." },
      { icon: Pill, title: "Farmacologia organizada", text: "Principios ativos, riscos e referencias." },
      { icon: Brain, title: "Apoio clinico", text: "Ajuda no raciocinio e nas condutas." },
      { icon: FileText, title: "Documentos", text: "Receitas, resumos e orientacoes prontos." },
    ],
    routine: [
      "Consulta por especie",
      "Apoio ao raciocinio clinico",
      "Calculo de dosagem",
      "Informacoes organizadas",
      "Menos tempo procurando",
      "Mais seguranca no atendimento",
    ],
    plans: genericPlans,
  },
  lab: {
    id: "lab",
    title: "VESTRIS LAB",
    eyebrow: "Laboratorio integrado",
    subtitle: "Organizacao laboratorial para amostras, exames e resultados.",
    description:
      "Rastreabilidade de amostras, soroteca, codigo de barras e historico laboratorial conectado a rotina clinica.",
    status: "Em desenvolvimento",
    path: "/lab",
    accent: "blue",
    heroIcon: FlaskConical,
    cta: "Acompanhar Lab",
    visualTitle: "Fluxo laboratorial",
    visualItems: ["Amostras rastreadas", "Soroteca digital", "Codigo de barras", "Resultados organizados"],
    explainBlocks: [
      { title: "O que e", text: "Um sistema para organizar a rotina laboratorial de ponta a ponta." },
      { title: "Para quem", text: "Laboratorios, clinicas com exames internos e equipes que processam amostras." },
      { title: "Problema que resolve", text: "Evita perda de amostras, registros soltos e resultados fora do historico." },
      { title: "Como ajuda", text: "Padroniza entrada, processamento, laudos, materiais e rastreabilidade." },
    ],
    features: [
      { icon: QrCode, title: "Codigo de barras", text: "Identificacao simples e rastreavel." },
      { icon: FlaskConical, title: "Controle de amostras", text: "Entrada, status e processamento." },
      { icon: Warehouse, title: "Soroteca", text: "Armazenamento organizado por amostra." },
      { icon: Search, title: "Rastreabilidade", text: "Historico completo do processo." },
      { icon: FileText, title: "Resultados", text: "Laudos e documentos centralizados." },
      { icon: Boxes, title: "Materiais", text: "Gestao de insumos e rotina." },
    ],
    routine: ["Receber amostra", "Gerar codigo", "Acompanhar processo", "Registrar resultado", "Organizar laudo", "Manter historico"],
    plans: genericPlans,
  },
  student: {
    id: "student",
    title: "VESTRIS STUDENT",
    eyebrow: "Formacao aplicada",
    subtitle: "Aprendizado pratico para estudantes e profissionais em formacao.",
    description:
      "Conteudos por especie, aulas rapidas, quizzes e trilhas de aprendizado para quem quer aprender silvestres.",
    status: "Planejado",
    path: "/student",
    accent: "violet",
    heroIcon: GraduationCap,
    cta: "Explorar Student",
    visualTitle: "Trilha de estudo",
    visualItems: ["Conteudos por especie", "Aulas rapidas", "Quizzes", "Casos praticos"],
    explainBlocks: [
      { title: "O que e", text: "Uma plataforma de estudo focada na pratica clinica de silvestres e exoticos." },
      { title: "Para quem", text: "Estudantes, residentes, aprimorandos e profissionais em formacao." },
      { title: "Problema que resolve", text: "Organiza o aprendizado em trilhas curtas, objetivas e aplicadas." },
      { title: "Como ajuda", text: "Transforma conteudo disperso em estudo guiado, pratico e progressivo." },
    ],
    features: [
      { icon: BookOpen, title: "Materiais de estudo", text: "Conteudos curtos e objetivos." },
      { icon: Dna, title: "Por especie", text: "Organizacao por grupos e especies." },
      { icon: Brain, title: "Quizzes", text: "Fixacao rapida do aprendizado." },
      { icon: ClipboardList, title: "Casos praticos", text: "Raciocinio clinico aplicado." },
      { icon: GraduationCap, title: "Trilhas", text: "Caminhos de aprendizado." },
      { icon: FileText, title: "Apoio pratico", text: "Materiais para revisar na rotina." },
    ],
    routine: ["Estudar por especie", "Assistir aula rapida", "Resolver quiz", "Revisar caso", "Fixar condutas", "Evoluir por trilha"],
    plans: genericPlans,
  },
  cetas: {
    id: "cetas",
    title: "VESTRIS CETAS/ZOO",
    eyebrow: "Gestao institucional",
    subtitle: "Para CETAS, zoologicos e instituicoes de fauna.",
    description:
      "Controle de animais, recintos, historico individual, protocolos internos, equipe e relatorios institucionais.",
    status: "Planejado",
    path: "/cetas-zoo",
    accent: "amber",
    heroIcon: Microscope,
    cta: "Explorar CETAS/ZOO",
    visualTitle: "Operacao institucional",
    visualItems: ["Gestao de animais", "Controle de recintos", "Protocolos", "Relatorios"],
    explainBlocks: [
      { title: "O que e", text: "Uma plataforma para operacoes institucionais que cuidam de muitos animais." },
      { title: "Para quem", text: "CETAS, zoologicos, centros de manejo, reabilitacao e conservacao." },
      { title: "Problema que resolve", text: "Reduz planilhas soltas e organiza historico, protocolos e equipe." },
      { title: "Como ajuda", text: "Centraliza rotina operacional, relatorios, recintos e acompanhamento individual." },
    ],
    features: [
      { icon: Dna, title: "Manejo por especie", text: "Protocolos alinhados ao grupo animal." },
      { icon: Users, title: "Organizacao de equipe", text: "Papeles, tarefas e rotina." },
      { icon: Warehouse, title: "Recintos", text: "Controle de ocupacao e manejo." },
      { icon: ClipboardList, title: "Historico individual", text: "Registros por animal." },
      { icon: FileBarChart, title: "Relatorios", text: "Dados claros para gestao." },
      { icon: ShieldCheck, title: "Protocolos internos", text: "Padronizacao da operacao." },
    ],
    routine: ["Cadastrar animal", "Definir recinto", "Registrar manejo", "Acompanhar saude", "Gerar relatorio", "Alinhar equipe"],
    plans: genericPlans,
  },
  ongs: {
    id: "ongs",
    title: "VESTRIS ONGS",
    eyebrow: "Resgate e reabilitacao",
    subtitle: "Organizacao para ONGs e projetos de fauna.",
    description:
      "Controle de animais resgatados, casos, voluntarios, relatorios e historico de atendimento em um fluxo simples.",
    status: "Planejado",
    path: "/ongs",
    accent: "rose",
    heroIcon: HeartHandshake,
    cta: "Explorar ONGs",
    visualTitle: "Apoio operacional",
    visualItems: ["Animais resgatados", "Casos acompanhados", "Voluntarios", "Relatorios"],
    explainBlocks: [
      { title: "O que e", text: "Um sistema para organizar informacoes de resgate, atendimento e reabilitacao." },
      { title: "Para quem", text: "ONGs, projetos ambientais, voluntarios e equipes de apoio a fauna." },
      { title: "Problema que resolve", text: "Evita perda de historico e melhora a continuidade dos cuidados." },
      { title: "Como ajuda", text: "Centraliza casos, voluntarios, relatorios, documentos e acompanhamento." },
    ],
    features: [
      { icon: HeartHandshake, title: "Animais resgatados", text: "Cadastro e historico de casos." },
      { icon: ClipboardList, title: "Acompanhamento", text: "Evolucao e tarefas do caso." },
      { icon: Users, title: "Voluntarios", text: "Organizacao da equipe." },
      { icon: FileBarChart, title: "Relatorios", text: "Informacoes prontas para prestar contas." },
      { icon: Syringe, title: "Atendimento", text: "Historico clinico e manejo." },
      { icon: ShieldCheck, title: "Apoio operacional", text: "Rotina mais clara e confiavel." },
    ],
    routine: ["Registrar resgate", "Criar caso", "Acompanhar evolucao", "Organizar voluntarios", "Gerar relatorio", "Manter historico"],
    plans: genericPlans,
  },
};
