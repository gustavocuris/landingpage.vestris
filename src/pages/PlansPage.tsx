import { useState } from "react";
import {
  ArrowRight,
  Beaker,
  BookOpen,
  Building2,
  CheckCircle2,
  Heart,
  Stethoscope,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const systems = [
  {
    id: "clinico",
    name: "Vestris Clinico",
    shortTitle: "Clinico",
    label: "Clinico",
    color: "#a3e635",
    icon: Stethoscope,
    description: "Prontuario, apoio clinico, dose e informacao por especie.",
    plans: [
      ["Plano Inicial", "R$ 00,00", "Para profissionais iniciando a organizacao clinica."],
      ["Plano Profissional", "R$ 00,00", "Para rotina frequente com mais recursos."],
      ["Plano Clinica", "R$ 00,00", "Para equipes e clinicas especializadas."],
    ],
  },
  {
    id: "lab",
    name: "Vestris Lab",
    shortTitle: "Lab",
    label: "Lab",
    color: "#60a5fa",
    icon: Beaker,
    description: "Amostras, soroteca, codigo de barras e laudos rastreaveis.",
    plans: [
      ["Lab Inicial", "Em breve", "Para controle basico de amostras."],
      ["Lab Profissional", "R$ 00,00", "Para laboratorios com fluxo ativo."],
      ["Lab Operacao", "R$ 00,00", "Para equipes e integracao clinica."],
    ],
  },
  {
    id: "student",
    name: "Vestris Student",
    shortTitle: "Student",
    label: "Student",
    color: "#a78bfa",
    icon: BookOpen,
    description: "Conteudos, quizzes, trilhas e estudo aplicado em silvestres.",
    plans: [
      ["Student Inicial", "Em breve", "Para estudantes em formacao."],
      ["Student Pro", "R$ 00,00", "Para aprendizado continuo."],
      ["Turmas", "R$ 00,00", "Para grupos, cursos e instituicoes."],
    ],
  },
  {
    id: "cetas",
    name: "Vestris CETAS/ZOO",
    shortTitle: "CETAS/ZOO",
    label: "CETAS/ZOO",
    color: "#f59e0b",
    icon: Building2,
    description: "Gestao institucional, recintos, protocolos e relatorios.",
    plans: [
      ["Institucional Inicial", "Em breve", "Para organizar a rotina da equipe."],
      ["Institucional Pro", "R$ 00,00", "Para operacoes com mais animais."],
      ["Operacao", "R$ 00,00", "Para centros e zoologicos completos."],
    ],
  },
  {
    id: "ongs",
    name: "Vestris ONGs",
    shortTitle: "ONGs",
    label: "ONGs",
    color: "#fb7185",
    icon: Heart,
    description: "Resgates, voluntarios, historico e apoio operacional.",
    plans: [
      ["ONG Inicial", "Em breve", "Para organizar casos e historicos."],
      ["ONG Pro", "R$ 00,00", "Para projetos com voluntarios."],
      ["Projeto", "R$ 00,00", "Para operacoes de fauna maiores."],
    ],
  },
];

export function PlansPage() {
  const [activeId, setActiveId] = useState("clinico");
  const active = systems.find((system) => system.id === activeId) ?? systems[0];
  const ActiveIcon = active.icon;

  return (
    <PageLayout>
      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-mono-tech text-lime-300">Planos Vestris</span>
            <h1 className="section-title mt-3 text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              VER TODOS PLANOS
            </h1>
            <p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
              Escolha primeiro o sistema. Depois veja os planos e valores de cada modulo.
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-5">
            {systems.map((system) => {
              const Icon = system.icon;
              const selected = system.id === active.id;
              return (
                <button
                  key={system.id}
                  type="button"
                  onClick={() => setActiveId(system.id)}
                  className="rounded-lg border p-4 text-left transition hover:-translate-y-1"
                  style={{
                    borderColor: selected ? `${system.color}80` : "rgba(255,255,255,0.12)",
                    background: selected ? `${system.color}18` : "rgba(0,0,0,0.34)",
                  }}
                >
                  <Icon className="h-5 w-5" style={{ color: system.color }} />
                  <h2
                    className="mt-3 font-['Barlow'] text-base font-black uppercase leading-none"
                    style={{ color: system.color }}
                  >
                    {system.label}
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{system.description}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-lg border border-white/10 bg-black/35 p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <ActiveIcon className="h-6 w-6" style={{ color: active.color }} />
                  <h2 className="section-title text-2xl font-black uppercase text-white sm:text-3xl">
                    VESTRIS <span style={{ color: active.color }}>{active.shortTitle}</span>
                  </h2>
                </div>
                <p className="mt-2 text-sm text-slate-400 sm:text-base">{active.description}</p>
              </div>
              <ArrowRight className="hidden h-7 w-7 text-slate-600 sm:block" />
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              {active.plans.map(([name, price, description], index) => (
                <div
                  key={name}
                  className="rounded-lg border p-5"
                  style={{
                    borderColor: index === 1 ? `${active.color}70` : "rgba(255,255,255,0.12)",
                    background: index === 1 ? `${active.color}12` : "rgba(255,255,255,0.03)",
                  }}
                >
                  <h3 className="text-xl font-black uppercase text-white">{name}</h3>
                  <p className="mt-3 text-3xl font-black" style={{ color: active.color }}>{price}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
                  <ul className="mt-4 space-y-2.5">
                    {["Acesso ao sistema", "Historico organizado", "Suporte para implantacao"].map((benefit) => (
                      <li key={benefit} className="flex gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: active.color }} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-5 w-full rounded-lg px-5 py-3 text-sm font-black uppercase tracking-wide text-[#041006]" style={{ background: active.color }}>
                    Escolher plano
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
