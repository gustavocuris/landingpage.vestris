import { ChevronRight } from "lucide-react";
import { clinicalFlow } from "@/data/index";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ClinicalFlow() {
  return (
    <section className="py-24 bg-[#060d09]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <SectionLabel>Fluxo clínico</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight max-w-2xl">
            Do relato ao prontuário. Um fluxo de raciocínio.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl leading-relaxed">
            Cada etapa do atendimento conectada à próxima. Não são abas soltas
            — é uma linha de raciocínio clínico estruturada do início ao fim.
          </p>
        </div>

        {/* Flow steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/30 via-emerald-500/15 to-transparent" />

          <div className="space-y-3">
            {clinicalFlow.map((step) => (
              <div
                key={step.step}
                className="relative flex items-start gap-5 p-5 rounded-2xl border border-white/6 bg-white/2 hover:border-emerald-500/20 hover:bg-white/4 transition-all duration-200 group"
              >
                {/* Step number bubble */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/12 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/18 transition-colors">
                  <span className="text-xs font-black text-emerald-400">
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 py-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">
                      {step.title}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 p-5 rounded-2xl border border-emerald-500/15 bg-emerald-500/5">
          <p className="text-sm text-emerald-300/80 leading-relaxed">
            <span className="font-semibold text-emerald-300">
              Importante:
            </span>{" "}
            O Vestris Clínico apoia o raciocínio do veterinário. Ele organiza
            sinais, sugere estratégias e estrutura a farmacologia — mas a
            conduta clínica é sempre decisão do profissional.
          </p>
        </div>
      </div>
    </section>
  );
}
