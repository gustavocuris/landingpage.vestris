import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-[#050a07]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Pronto para transformar o atendimento em silvestres?
        </h2>
        <p className="mt-5 text-lg text-slate-400 max-w-xl mx-auto">
          Junte-se aos veterinários que estão estruturando sua prática clínica
          com o primeiro sistema feito para silvestres e exóticos.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-colors shadow-lg shadow-emerald-500/25">
            Começar agora
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/12 bg-white/5 hover:bg-white/10 text-white font-semibold transition-colors">
            Entrar
          </button>
        </div>

        <p className="mt-6 text-xs text-slate-600">
          Acesso antecipado disponível · Sem cartão de crédito
        </p>
      </div>
    </section>
  );
}
