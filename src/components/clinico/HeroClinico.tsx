import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HeroClinico() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(52,211,153,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-60 w-[800px] h-[500px] rounded-full bg-emerald-600/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {/* Label */}
          <SectionLabel>Vestris Clínico · Produto principal</SectionLabel>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.04] text-white">
            A central clínica para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              medicina de silvestres
            </span>{" "}
            e exóticos.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
            O primeiro sistema do Brasil pensado para apoiar o raciocínio
            clínico, organizar o atendimento e conectar sinais clínicos,
            estratégias, farmacologia por espécie, prontuário e documentos em
            um fluxo único.
          </p>

          {/* Supporting phrase */}
          <p className="mt-3 text-sm text-slate-600 italic">
            "Não automatizamos a medicina. Organizamos o raciocínio."
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="#funcionalidades"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-colors shadow-md shadow-emerald-500/25"
            >
              Ver funcionalidades
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/planos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/12 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-colors"
            >
              Ver planos
            </Link>
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-emerald-400 font-semibold text-sm hover:text-emerald-300 transition-colors"
            >
              Solicitar acesso antecipado
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Context strip */}
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-2 text-slate-600 text-xs font-medium">
            {[
              "Aves e psitacídeos",
              "Répteis e quelônios",
              "Pequenos mamíferos",
              "Animais silvestres",
              "Exóticos domésticos",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-emerald-600 inline-block" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
