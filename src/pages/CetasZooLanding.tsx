import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Section } from "@/components/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { institutionalFeatures } from "@/data/products";

export function CetasZooLanding() {
  return (
    <PageLayout>
      {/* Breadcrumb */}
      <div className="border-b border-white/6 bg-[#060d09]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-600">
          <Link to="/" className="hover:text-slate-400 transition-colors">Global Vestris</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-400">Vestris CETAS/ZOO</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-amber-600/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <StatusBadge status="planned" overrideLabel="Planejado" />
            <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
              Ecossistema Vestris
            </span>
          </div>

          <SectionLabel>Gestão institucional</SectionLabel>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.03]">
            Vestris{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
              CETAS/ZOO
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-400 max-w-2xl leading-relaxed">
            Gestão institucional para zoológicos, CETAS e centros de manejo de
            animais silvestres. Controle de população, protocolos e
            rastreabilidade completa.
          </p>

          <p className="mt-4 text-slate-500 max-w-xl leading-relaxed">
            CETAS e zoológicos gerenciam populações inteiras, não apenas animais
            individuais. O Vestris CETAS/ZOO terá protocolos institucionais,
            controle de quarentena e rastreabilidade para operações de grande
            escala.
          </p>

          <div className="mt-8 p-5 rounded-2xl border border-amber-500/20 bg-amber-500/6 max-w-xl">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white mb-1">Planejado</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  O Vestris CETAS/ZOO será pensado especificamente para a
                  realidade dos centros de triagem, zoológicos e instituições de
                  manejo em grande escala.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem */}
      <Section bg="bg-[#060d09]">
        <div className="mb-10">
          <SectionLabel>Para quem é</SectionLabel>
          <h2 className="text-3xl font-black tracking-tight text-white max-w-2xl">
            Quem vai usar o Vestris CETAS/ZOO.
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "CETAS e centros de triagem", text: "Para gestão de entrada de animais, quarentena, evolução clínica e documentação de reintrodução ou destinação." },
            { title: "Zoológicos e parques", text: "Para controle de população, histórico individual, protocolos de manejo e relatórios institucionais." },
            { title: "Centros de reabilitação", text: "Para acompanhamento clínico de longa duração, gestão de equipes e rastreabilidade do histórico de cada animal." },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-2xl border border-white/7 bg-white/2">
              <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Funcionalidades */}
      <Section>
        <div className="mb-10">
          <SectionLabel>Funcionalidades planejadas</SectionLabel>
          <h2 className="text-3xl font-black tracking-tight text-white max-w-2xl">O que estamos planejando.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
          {institutionalFeatures.map((f) => (
            <div key={f} className="flex items-start gap-3 p-4 rounded-xl border border-white/6 bg-white/2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-400">{f}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="bg-[#060d09]" narrow>
        <div className="text-center">
          <p className="text-slate-400 mb-5 max-w-md mx-auto">
            Enquanto o CETAS/ZOO está em planejamento, explore o produto
            principal do ecossistema.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/clinico" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-colors">
              Explorar Sistema Clínico <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/12 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-colors">
              Ver ecossistema completo
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
