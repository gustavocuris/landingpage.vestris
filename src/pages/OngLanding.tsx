import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Section } from "@/components/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ongFeatures } from "@/data/products";

export function OngLanding() {
  return (
    <PageLayout>
      {/* Breadcrumb */}
      <div className="border-b border-white/6 bg-[#060d09]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-600">
          <Link to="/" className="hover:text-slate-400 transition-colors">Global Vestris</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-400">Vestris ONGs</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(244,63,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(244,63,94,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-rose-600/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <StatusBadge status="planned" overrideLabel="Planejado" />
            <span className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
              Ecossistema Vestris
            </span>
          </div>

          <SectionLabel>Resgate e reabilitação</SectionLabel>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.03]">
            Vestris{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">
              ONGs
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-400 max-w-2xl leading-relaxed">
            Gestão de resgates, evolução clínica e documentação para ONGs e
            projetos ambientais. Histórico por animal, voluntários e
            documentação de reintrodução.
          </p>

          <p className="mt-4 text-slate-500 max-w-xl leading-relaxed">
            ONGs de resgate e reabilitação precisam de organização sem
            burocracia. O Vestris ONGs trará cadastro de resgates, histórico
            por animal, registro de reintrodução e gestão de voluntários em uma
            plataforma acessível para projetos ambientais.
          </p>

          <div className="mt-8 p-5 rounded-2xl border border-rose-500/20 bg-rose-500/6 max-w-xl">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white mb-1">Planejado</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  O Vestris ONGs será desenhado para a realidade de
                  organizações de resgate — com foco em simplicidade,
                  documentação confiável e gestão de voluntários.
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
            Quem vai usar o Vestris ONGs.
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "ONGs de resgate", text: "Que recebem animais silvestres e precisam de organização de histórico, tratamentos e evolução clínica por animal." },
            { title: "Projetos de reabilitação", text: "Que acompanham animais por longos períodos e precisam de documentação para processos de reintrodução." },
            { title: "Grupos de voluntários", text: "Que trabalham com resgate de fauna e precisam de gestão de equipe, acompanhamento de casos e relatórios." },
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
          {ongFeatures.map((f) => (
            <div key={f} className="flex items-start gap-3 p-4 rounded-xl border border-white/6 bg-white/2">
              <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-400">{f}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="bg-[#060d09]" narrow>
        <div className="text-center">
          <p className="text-slate-400 mb-5 max-w-md mx-auto">
            Enquanto o módulo ONGs está em planejamento, explore o produto
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
