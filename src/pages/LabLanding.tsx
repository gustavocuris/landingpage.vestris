import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Section } from "@/components/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { labFeatures } from "@/data/products";

export function LabLanding() {
  return (
    <PageLayout>
      {/* Breadcrumb */}
      <div className="border-b border-white/6 bg-[#060d09]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-600">
          <Link to="/" className="hover:text-slate-400 transition-colors">Global Vestris</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-400">Vestris Lab</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <StatusBadge status="dev" overrideLabel="Em desenvolvimento" />
            <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
              Ecossistema Vestris
            </span>
          </div>

          <SectionLabel>Laboratório integrado</SectionLabel>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.03]">
            Vestris{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Lab
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-400 max-w-2xl leading-relaxed">
            Rastreabilidade e integração laboratorial para a medicina de
            silvestres. Soroteca, código de barras, laudos e integração direta
            com o prontuário clínico.
          </p>

          <p className="mt-4 text-slate-500 max-w-xl leading-relaxed">
            O laboratório na medicina de silvestres exige rastreabilidade,
            organização e integração com o prontuário. O Vestris Lab será a
            extensão natural do Sistema Clínico — com soroteca digital, código
            de barras e laudos estruturados em um fluxo contínuo.
          </p>

          <div className="mt-8 p-5 rounded-2xl border border-blue-500/20 bg-blue-500/6 max-w-xl">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white mb-1">Em desenvolvimento ativo</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A integração com o prontuário clínico já está sendo
                  arquitetada para garantir rastreabilidade completa entre
                  clínica e laboratório.
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
            Quem vai usar o Vestris Lab.
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "Clínicas e hospitais", text: "Que processam exames internamente ou trabalham com laboratórios parceiros e precisam de rastreabilidade." },
            { title: "Laboratórios veterinários", text: "Especializados em silvestres e exóticos que precisam de gestão de amostras e integração com prontuários." },
            { title: "Centros de pesquisa", text: "Que precisam de soroteca digital, rastreabilidade e histórico laboratorial para pesquisas científicas." },
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
          <h2 className="text-3xl font-black tracking-tight text-white max-w-2xl">
            O que estamos construindo.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
          {labFeatures.map((f) => (
            <div key={f} className="flex items-start gap-3 p-4 rounded-xl border border-white/6 bg-white/2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-400">{f}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="bg-[#060d09]" narrow>
        <div className="text-center">
          <p className="text-slate-400 mb-5 max-w-md mx-auto">
            Enquanto o Lab está em desenvolvimento, explore o produto principal
            do ecossistema.
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
