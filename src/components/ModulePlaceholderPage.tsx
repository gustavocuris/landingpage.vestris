import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { EcosystemModule, ModuleStatus } from "@/data/index";

interface ModulePlaceholderPageProps {
  module: EcosystemModule;
  features: string[];
  statusNote: string;
  /** Optional extra detail paragraphs */
  paragraphs?: string[];
}

export function ModulePlaceholderPage({
  module,
  features,
  statusNote,
  paragraphs,
}: ModulePlaceholderPageProps) {
  return (
    <PageLayout>
      {/* Back nav */}
      <div className="border-b border-white/6 bg-[#060d09]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center gap-3">
          <Link
            to="/global"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Global Vestris
          </Link>
          <span className="text-slate-700">/</span>
          <span className="text-xs text-slate-400">{module.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <StatusBadge status={module.status as ModuleStatus} />
          </div>
          <SectionLabel>{module.tagline}</SectionLabel>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white leading-tight max-w-3xl">
            {module.name}
          </h1>
          <p className="mt-5 text-xl text-slate-400 max-w-2xl leading-relaxed">
            {module.description}
          </p>

          {paragraphs?.map((p, i) => (
            <p key={i} className="mt-4 text-slate-500 max-w-2xl leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Status banner */}
      <section className="py-6 bg-[#060d09] border-y border-white/6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/8 bg-white/2">
            <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white mb-1">
                Status: {module.statusLabel}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                {statusNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features roadmap */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel>Funcionalidades planejadas</SectionLabel>
            <h2 className="text-3xl font-black tracking-tight text-white">
              O que estamos construindo.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-4 rounded-xl border border-white/6 bg-white/2"
              >
                <CheckCircle2 className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#060d09] border-t border-white/6">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-400 mb-5 max-w-md mx-auto text-sm">
            Enquanto este módulo está em desenvolvimento, explore o produto
            principal da plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/clinico"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-colors"
            >
              Conhecer o Vestris Clínico
            </Link>
            <Link
              to="/global"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/12 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-colors"
            >
              Ver todo o ecossistema
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
