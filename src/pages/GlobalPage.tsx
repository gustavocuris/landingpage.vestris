import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ecosystemModules } from "@/data/index";

// Color map for module cards
const colorMap: Record<string, { border: string; bg: string; accent: string; dot: string }> = {
  emerald: { border: "border-emerald-800/40", bg: "bg-emerald-950/20", accent: "text-emerald-400", dot: "bg-emerald-400" },
  blue: { border: "border-blue-800/40", bg: "bg-blue-950/20", accent: "text-blue-400", dot: "bg-blue-400" },
  violet: { border: "border-violet-800/40", bg: "bg-violet-950/20", accent: "text-violet-400", dot: "bg-violet-400" },
  amber: { border: "border-amber-800/40", bg: "bg-amber-950/20", accent: "text-amber-400", dot: "bg-amber-400" },
  rose: { border: "border-rose-800/40", bg: "bg-rose-950/20", accent: "text-rose-400", dot: "bg-rose-400" },
};

export function GlobalPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(52,211,153,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Global Vestris</SectionLabel>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white leading-tight max-w-3xl">
            O ecossistema completo da medicina de silvestres.
          </h1>
          <p className="mt-5 text-xl text-slate-400 max-w-2xl leading-relaxed">
            Vestris Clínico é o começo. Global Vestris é a infraestrutura
            completa — conectando clínica, laboratório, ensino, pesquisa e
            gestão institucional em uma plataforma unificada.
          </p>
          <blockquote className="mt-5 text-sm text-slate-600 italic">
            "Uma infraestrutura digital para uma área que nunca teve estrutura
            própria."
          </blockquote>
        </div>
      </section>

      {/* Vision statement */}
      <section className="py-12 bg-[#060d09]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Produto principal forte",
                desc: "Vestris Clínico já é uma solução completa para o atendimento. É onde tudo começa.",
              },
              {
                title: "Visão de ecossistema",
                desc: "Cada novo módulo amplia a infraestrutura — sem fragmentar a experiência do veterinário.",
              },
              {
                title: "Primeira solução do Brasil",
                desc: "Nenhum sistema foi construído especificamente para silvestres e exóticos em toda a sua complexidade.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-white/8 bg-white/2"
              >
                <h3 className="font-bold text-white text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem modules map */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Mapa do ecossistema</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight text-white leading-tight max-w-2xl">
              Cinco módulos. Uma plataforma.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {ecosystemModules.map((module) => {
              const colors = colorMap[module.color] ?? colorMap.emerald;
              return (
                <Link
                  key={module.id}
                  to={module.path}
                  className={`group flex flex-col p-6 rounded-2xl border ${colors.border} ${colors.bg} hover:opacity-90 transition-opacity`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${colors.accent}`}>
                        {module.tagline}
                      </p>
                      <h3 className="font-black text-white text-lg">
                        {module.name}
                      </h3>
                    </div>
                    <StatusBadge status={module.status} />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">
                    {module.description}
                  </p>

                  {/* Footer */}
                  <div className={`mt-5 flex items-center gap-1.5 text-xs font-semibold ${colors.accent} group-hover:gap-2.5 transition-all`}>
                    {module.status === "active"
                      ? "Ver produto"
                      : "Ver roadmap"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#060d09]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black tracking-tight text-white mb-5">
            Comece pelo Vestris Clínico.
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            O produto principal está pronto. Os demais módulos chegam conforme
            a plataforma cresce.
          </p>
          <Link
            to="/clinico"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-colors shadow-md shadow-emerald-500/25"
          >
            Conhecer o Vestris Clínico
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
