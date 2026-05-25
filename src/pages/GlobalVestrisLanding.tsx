import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Database,
  Dna,
  FileText,
  Leaf,
  Lock,
  Microscope,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/global/SectionHeading";
import { StatCard } from "@/components/global/StatCard";
import { SystemCard } from "@/components/global/SystemCard";
import { products } from "@/data/products";

const pillars = [
  {
    icon: Dna,
    title: "Base por especie",
    text: "Informacao organizada para aves, repteis, mamiferos exoticos e fauna silvestre.",
  },
  {
    icon: ShieldCheck,
    title: "Decisao mais segura",
    text: "Fluxos claros para reduzir improviso, retrabalho e busca dispersa por dados.",
  },
  {
    icon: Network,
    title: "Ecossistema conectado",
    text: "Clinica, laboratorio, ensino, instituicoes e projetos trabalhando na mesma linguagem.",
  },
];

const workflow = [
  "Consulta por especie",
  "Registro de atendimento",
  "Apoio ao raciocinio",
  "Calculo de dose",
  "Exames e documentos",
  "Historico rastreavel",
];

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="absolute -inset-6 rounded-[2rem] bg-lime-400/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#06120b]/95 shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
        <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          </div>
          <span className="text-mono-tech text-slate-500">VESTRIS GLOBAL</span>
        </div>

        <div className="grid gap-4 p-4 sm:p-5">
          <div className="rounded-lg border border-lime-400/20 bg-lime-400/8 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-lime-300">
                  Atendimento em andamento
                </p>
                <h3 className="mt-2 text-xl font-black uppercase text-white">
                  Ara ararauna
                </h3>
              </div>
              <Leaf className="h-9 w-9 text-lime-300" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
              {["Peso", "Dose", "Conduta"].map((item, index) => (
                <div key={item} className="rounded-md border border-white/8 bg-black/30 p-3">
                  <span className="block text-slate-500">{item}</span>
                  <strong className="mt-1 block text-sm text-white">
                    {["0,92 kg", "Calculada", "Registrada"][index]}
                  </strong>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { icon: ClipboardList, title: "Prontuario", text: "Historico organizado" },
              { icon: Microscope, title: "Lab", text: "Amostras rastreadas" },
              { icon: Database, title: "Base", text: "Referencias por especie" },
              { icon: FileText, title: "PDFs", text: "Documentos prontos" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-lg border border-white/8 bg-white/3 p-4">
                  <Icon className="h-5 w-5 text-lime-300" />
                  <h4 className="mt-3 text-sm font-black uppercase text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="global" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/25 bg-lime-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-lime-200">
            <Sparkles className="h-3.5 w-3.5" />
            Medicina de silvestres e exoticos
          </div>
          <h1 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            GLOBAL VESTRIS
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
            Um ecossistema premium para organizar clinicas, laboratorios, ensino e operacoes de fauna em uma experiencia clara e confiavel.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/clinico"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-black uppercase tracking-wide text-[#041006] transition hover:bg-lime-300"
            >
              Conhecer sistema clinico
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#sistemas"
              className="inline-flex items-center justify-center rounded-lg border border-white/14 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              Ver ecossistema
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <StatCard value="5" label="Sistemas integrados" />
            <StatCard value="24/7" label="Base consultavel" />
            <StatCard value="100%" label="Foco em silvestres" />
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function EcosystemSection() {
  return (
    <section id="sistemas" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Ecossistema"
          title="SISTEMAS PARA CADA ROTINA"
          description="A Vestris conecta diferentes frentes da medicina de silvestres sem misturar fluxos. Cada sistema tem uma funcao clara."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <SystemCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className="border-y border-white/6 bg-black/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Por que existe"
          title="MENOS RUIDO. MAIS CLAREZA CLINICA."
          description="Silvestres exigem informacao especifica, rastreabilidade e rotina bem documentada. A Vestris foi pensada para esse nivel de cuidado."
          align="center"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="rounded-lg border border-white/8 bg-white/3 p-6">
                <Icon className="h-7 w-7 text-lime-300" />
                <h3 className="section-title mt-5 text-xl font-black uppercase text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{pillar.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <SectionHeading
          eyebrow="Rotina"
          title="DO ATENDIMENTO AO HISTORICO"
          description="A plataforma ajuda o usuario a sair da informacao solta para um fluxo organizado, com menos tempo procurando e mais tempo cuidando."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {workflow.map((item, index) => (
            <div key={item} className="rounded-lg border border-white/8 bg-black/40 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 text-sm font-black text-[#041006]">
                  {index + 1}
                </span>
                <CheckCircle2 className="h-5 w-5 text-lime-300" />
              </div>
              <h3 className="mt-4 text-sm font-black uppercase tracking-wide text-white">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl rounded-lg border border-lime-400/20 bg-lime-400/8 p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="text-mono-tech text-lime-300">Contato</span>
            <h2 className="section-title mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              PRONTO PARA ORGANIZAR A ROTINA?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
              Fale com a Vestris para conhecer o ecossistema, acompanhar os modulos em desenvolvimento ou preparar sua clinica para o acesso.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              to="/clinico"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-black uppercase tracking-wide text-[#041006] transition hover:bg-lime-300"
            >
              Comecar pelo clinico
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/14 bg-black/30 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-black/50">
              <Lock className="h-4 w-4" />
              Solicitar acesso
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GlobalVestrisLanding() {
  return (
    <PageLayout>
      <HeroSection />
      <EcosystemSection />
      <PillarsSection />
      <WorkflowSection />
      <ContactSection />
    </PageLayout>
  );
}
