import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { plans } from "@/data/index";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PlansSection() {
  return (
    <section id="planos" className="py-24 bg-[#060d09]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 text-center">
          <SectionLabel>Planos</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight max-w-2xl mx-auto">
            Escolha o plano para sua prática.
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto">
            Cada plano inclui acesso completo ao Vestris Clínico. Sem
            funcionalidades escondidas.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                plan.highlighted
                  ? "border-emerald-500/40 bg-emerald-950/30"
                  : "border-white/8 bg-white/2"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    Mais escolhido
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  {plan.target}
                </div>
                <h3 className="text-xl font-black text-white">{plan.name}</h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-4xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 text-sm mb-1">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-colors inline-flex items-center justify-center gap-2 ${
                  plan.highlighted
                    ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-md shadow-emerald-500/25"
                    : "border border-white/12 bg-white/5 hover:bg-white/10 text-white"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-xs text-slate-600">
          Todos os planos incluem acesso antecipado durante o período beta · Preços sujeitos a alteração no lançamento oficial
        </p>
      </div>
    </section>
  );
}
