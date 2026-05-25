import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import type { SystemPageData } from "@/data/systemPages";

const accentClasses = {
  emerald: {
    text: "text-emerald-300",
    title: "text-lime-300",
    border: "border-emerald-400/25",
    bg: "bg-emerald-400/10",
    button: "bg-lime-400 text-[#041006] hover:bg-lime-300",
    glow: "bg-emerald-400/12",
  },
  blue: {
    text: "text-blue-300",
    title: "text-blue-300",
    border: "border-blue-400/25",
    bg: "bg-blue-400/10",
    button: "bg-blue-400 text-[#041006] hover:bg-blue-300",
    glow: "bg-blue-400/12",
  },
  violet: {
    text: "text-violet-300",
    title: "text-violet-300",
    border: "border-violet-400/25",
    bg: "bg-violet-400/10",
    button: "bg-violet-400 text-white hover:bg-violet-300",
    glow: "bg-violet-400/12",
  },
  amber: {
    text: "text-amber-300",
    title: "text-amber-300",
    border: "border-amber-400/25",
    bg: "bg-amber-400/10",
    button: "bg-amber-400 text-[#120b02] hover:bg-amber-300",
    glow: "bg-amber-400/12",
  },
  rose: {
    text: "text-rose-300",
    title: "text-rose-300",
    border: "border-rose-400/25",
    bg: "bg-rose-400/10",
    button: "bg-rose-400 text-white hover:bg-rose-300",
    glow: "bg-rose-400/12",
  },
};

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="text-mono-tech text-lime-300">{eyebrow}</span>
      <h2 className="section-title mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">{text}</p>
    </div>
  );
}

function HeroMockup({ data }: { data: SystemPageData }) {
  const Icon = data.heroIcon;
  const accent = accentClasses[data.accent];
  const systemName = getSystemName(data.title);

  return (
    <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
      <div className={`absolute -inset-6 rounded-[2rem] blur-3xl ${accent.glow}`} />
      <div className="relative overflow-hidden rounded-lg border border-white/12 bg-[#041008]/92 shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          <span className="text-sm font-black uppercase tracking-wide text-slate-300">
            {data.visualTitle}
          </span>
          <Icon className={`h-5 w-5 ${accent.text}`} />
        </div>
        <div className="p-5 sm:p-6">
          <div className={`rounded-lg border p-5 sm:p-6 ${accent.border} ${accent.bg}`}>
            <p className={`text-xs font-black uppercase tracking-wider ${accent.text}`}>
              {data.status}
            </p>
            <h3 className="section-title mt-4 text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
              VESTRIS <span className={accent.title}>{systemName}</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">{data.subtitle}</p>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {data.visualItems.map((item) => (
              <div key={item} className="min-h-28 rounded-lg border border-white/10 bg-black/35 p-5">
                <CheckCircle2 className={`h-4 w-4 ${accent.text}`} />
                <p className="mt-5 text-sm font-black uppercase leading-snug tracking-wide text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getSystemName(title: string) {
  return title.replace(/^VESTRIS\s+/i, "");
}

export function SystemPageTemplate({ data }: { data: SystemPageData }) {
  const accent = accentClasses[data.accent];
  const Icon = data.heroIcon;
  const systemName = getSystemName(data.title);

  return (
    <PageLayout>
      <div className="border-b border-white/6 bg-black/30">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
          <Link to="/" className="transition hover:text-slate-300">Global Vestris</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-slate-300">{data.title}</span>
        </div>
      </div>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${accent.border} ${accent.bg} ${accent.text}`}>
              <Sparkles className="h-3.5 w-3.5" />
              {data.eyebrow}
            </div>
            {data.id === "clinico" ? (
              <h1 className="section-title mt-7 flex max-w-5xl flex-wrap items-baseline gap-x-4 gap-y-2 text-5xl font-black uppercase leading-[1.06] tracking-normal text-white sm:text-6xl lg:text-7xl">
                <span>VESTRIS</span>
                <span className={accent.title}>CLINICO</span>
              </h1>
            ) : (
              <h1 className="section-title mt-7 flex max-w-5xl flex-wrap items-baseline gap-x-4 gap-y-2 text-5xl font-black uppercase leading-[1.06] tracking-normal text-white sm:text-6xl lg:text-7xl">
                <span>VESTRIS</span>
                <span className={accent.title}>{systemName}</span>
              </h1>
            )}
            <p className="mt-8 max-w-2xl text-xl font-semibold leading-relaxed text-slate-100">
              {data.subtitle}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {data.description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/planos"
                className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-black uppercase tracking-wide transition ${accent.button}`}
              >
                VER TODOS PLANOS
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#funcionalidades"
                className="inline-flex items-center justify-center rounded-lg border border-white/14 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                Ver funcionalidades
              </a>
            </div>
          </div>
          <HeroMockup data={data} />
        </div>
      </section>

      {data.highlights && (
        <section className="border-y border-white/6 bg-black/35 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
            {data.highlights.map((item) => (
              <div key={item} className={`rounded-lg border p-6 ${accent.border} ${accent.bg}`}>
                <h2 className="section-title text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                  {item}
                </h2>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Estrutura"
            title="O QUE O SISTEMA ENTREGA"
            text="Uma explicacao direta para entender rapidamente onde o sistema entra na rotina."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {data.explainBlocks.map((block) => (
              <div key={block.title} className="rounded-lg border border-white/8 bg-black/40 p-5">
                <h3 className="section-title text-lg font-black uppercase text-white">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="funcionalidades" className="border-y border-white/6 bg-black/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Funcionalidades"
            title="RECURSOS PRINCIPAIS"
            text="Cards curtos, objetivos e pensados para mostrar valor sem poluir a pagina."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={feature.title} className="rounded-lg border border-white/8 bg-white/3 p-5">
                  <FeatureIcon className={`h-6 w-6 ${accent.text}`} />
                  <h3 className="mt-4 text-base font-black uppercase tracking-wide text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionTitle
            eyebrow="Dia a dia"
            title="COMO AJUDA NA ROTINA"
            text="Uma rotina mais objetiva, com informacao organizada e menos passos improvisados."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.routine.map((item, index) => (
              <div key={item} className="rounded-lg border border-white/8 bg-black/40 p-5">
                <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-black ${accent.bg} ${accent.text}`}>
                  {index + 1}
                </span>
                <h3 className="mt-4 text-sm font-black uppercase tracking-wide text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="border-t border-white/6 bg-black/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Planos"
            title="PLANOS PARA COMECAR"
            text="Valores e condicoes estao como placeholders para edicao posterior."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {data.plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`rounded-lg border p-6 ${index === 1 ? `${accent.border} ${accent.bg}` : "border-white/8 bg-white/3"}`}
              >
                <h3 className="section-title text-xl font-black uppercase text-white">{plan.name}</h3>
                <p className={`mt-4 text-3xl font-black ${accent.text}`}>{plan.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm text-slate-300">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 flex-shrink-0 ${accent.text}`} />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className={`mt-7 w-full rounded-lg px-5 py-3 text-sm font-black uppercase tracking-wide transition ${index === 1 ? accent.button : "border border-white/14 bg-black/30 text-white hover:bg-black/50"}`}>
                  Solicitar acesso
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
