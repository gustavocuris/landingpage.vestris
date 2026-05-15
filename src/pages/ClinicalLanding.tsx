import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Check,
  ChevronRight,
  ClipboardCheck,
  Sparkles,
  Pill,
  FileText,
  Globe,
  Zap,
  Shield,
  Layers,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { clinicalFlow, clinicalFeatureGroups } from "@/data/clinicalData";
import { plans } from "@/data/plans";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
function Divider() {
  return <div className="divider mx-auto max-w-7xl" />;
}
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden grid-bg">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-emerald-600/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[300px] rounded-full bg-lime-500/4 blur-[80px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="flex items-center gap-2 text-xs text-slate-600 mb-8">
          <Link to="/" className="hover:text-slate-400 transition-colors">Global Vestris</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-400">Sistema Clínico</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.05 }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-lime-500/30 bg-lime-500/8 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse inline-block" />
          <span className="text-lime-400 text-xs font-bold uppercase tracking-widest">Disponível · Produto principal</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="text-[clamp(3.5rem,10vw,7.5rem)] font-black tracking-tighter text-white leading-[0.93]">
          SISTEMA
          <br />
          <span className="text-gradient-green">CLÍNICO</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }} className="mt-6 text-lg text-slate-400 max-w-lg leading-relaxed">
          Do relato ao PDF. O fluxo clínico completo{" "}
          <span className="text-white font-medium">em um só lugar.</span>
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-3 text-slate-500 text-sm max-w-md leading-relaxed">
          A primeira central clínica do Brasil feita exclusivamente para silvestres e exóticos.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.38 }} className="mt-9 flex flex-wrap gap-3">
          <a href="#planos" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm transition-all glow-yellow hover:scale-[1.03]">
            Ver planos <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#fluxo" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/6 text-emerald-300 hover:bg-emerald-500/12 font-semibold text-sm transition-all">
            Ver funcionalidades
          </a>
          <button className="inline-flex items-center gap-2 px-6 py-3.5 text-slate-400 hover:text-white font-semibold text-sm transition-colors group">
            Acesso antecipado <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-12 flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-slate-600 font-medium">
          {["Aves e psitacídeos", "Répteis e quelônios", "Pequenos mamíferos", "Animais silvestres"].map((s) => (
            <span key={s} className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-emerald-700" />{s}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
function Atributos() {
  const items = [
    { icon: ClipboardCheck, color: "emerald", title: "Central de atendimento", text: "Fluxo guiado do relato à documentação." },
    { icon: Sparkles, color: "lime", title: "Apoio ao raciocínio", text: "Estratégias e correlação de sinais." },
    { icon: Pill, color: "yellow", title: "Farmacologia por espécie", text: "Dose calculada com alertas de risco." },
    { icon: FileText, color: "emerald", title: "Documentação automática", text: "Prontuário e PDFs com 1 clique." },
  ];
  const colorMap: Record<string, string> = {
    emerald: "bg-emerald-500/8 border-emerald-500/15 text-emerald-400",
    lime: "bg-lime-500/8 border-lime-500/15 text-lime-400",
    yellow: "bg-yellow-500/8 border-yellow-500/15 text-yellow-400",
  };
  return (
    <>
      <Divider />
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => { const Icon = item.icon; return (
          <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -4 }} className="p-5 rounded-2xl border border-white/7 bg-white/2 hover:border-white/12 transition-all cursor-default">
            <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 ${colorMap[item.color]}`}><Icon className="w-4 h-4" /></div>
            <p className="font-bold text-white text-sm mb-1">{item.title}</p>
            <p className="text-slate-500 text-xs leading-relaxed">{item.text}</p>
          </motion.div>
        );})}
      </motion.div>
      <Divider />
    </>
  );
}
function FluxoClinico() {
  return (
    <section id="fluxo" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
        <motion.div variants={fadeUp} className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/6 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />Fluxo clínico
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">Uma linha de raciocínio.<br /><span className="text-slate-500">Do relato ao prontuário.</span></h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-3">
          {clinicalFlow.map((step) => (
            <motion.div key={step.step} variants={fadeUp} whileHover={{ x: 4 }} className="group flex items-start gap-4 p-5 rounded-2xl border border-white/6 bg-white/2 hover:border-emerald-500/20 hover:bg-white/3 transition-all cursor-default">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/8 border border-emerald-500/15 flex items-center justify-center group-hover:bg-emerald-500/15 transition-colors">
                <span className="text-xs font-black text-emerald-400">{String(step.step).padStart(2, "0")}</span>
              </div>
              <div className="flex-1 min-w-0 py-0.5">
                <p className="font-bold text-white text-sm mb-0.5">{step.title}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-emerald-500/40 flex-shrink-0 mt-3 transition-colors" />
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUp} className="mt-6 p-4 rounded-xl border border-emerald-500/12 bg-emerald-500/4 flex items-start gap-3">
          <div className="w-1 min-h-[1.5rem] rounded-full bg-emerald-500/30 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-emerald-400/70 leading-relaxed"><span className="font-semibold text-emerald-400">Importante:</span> O sistema organiza o raciocínio. A conduta clínica é sempre do veterinário.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
function Funcionalidades() {
  return (
    <>
      <Divider />
      <section id="funcionalidades" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime-500/25 bg-lime-500/6 text-lime-400 text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 inline-block" />Funcionalidades
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight max-w-2xl">Tudo que o atendimento em silvestres exige.</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clinicalFeatureGroups.map((group) => (
              <motion.div key={group.category} variants={fadeUp} whileHover={{ y: -4 }} className="flex flex-col p-6 rounded-2xl border border-white/7 bg-white/2 hover:border-lime-500/15 transition-all cursor-default">
                <h3 className="font-bold text-white text-sm mb-1">{group.category}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{group.description}</p>
                <div className="h-px bg-white/6 mb-4" />
                <ul className="space-y-2 flex-1">
                  {group.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 flex-shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <Divider />
    </>
  );
}
function Farmacologia() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div variants={fadeUp}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/6 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />Farmacologia
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">Dose certa.<br /><span className="text-gradient-green">Espécie certa.</span></h2>
          <p className="mt-5 text-slate-400 text-sm leading-relaxed max-w-sm">Banco farmacológico construído para silvestres. Dose, via, frequência e alertas por grupo taxonômico.</p>
          <div className="mt-6 space-y-2">
            {["Banco por princípio ativo e espécie","Cálculo automático por peso corporal","Concentração e volume calculados","Alertas de contraindicação por grupo"].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />{item}</div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/15 to-lime-900/8 rounded-3xl blur-2xl" />
          <div className="relative rounded-2xl border border-white/10 bg-white/2 backdrop-blur overflow-hidden">
            <div className="border-b border-white/8 px-5 py-3 flex items-center gap-2">
              <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500/50" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/50" /></div>
              <span className="ml-3 text-[11px] text-slate-600 font-mono">Vestris  Farmacologia</span>
            </div>
            <div className="p-5 space-y-3">
              {[
                { drug: "Enrofloxacino", species: "Psitacídeos", info: "15 mg/kg · VO · BID", calc: "350g ? 5,25 mg", alert: false },
                { drug: "Meloxicam", species: "Quelônios", info: "0,5 mg/kg · IM/VO · SID", calc: "800g ? 0,4 mg", alert: false },
                { drug: "Ivermectina", species: "Psitacídeos", info: "", calc: "? Contraindicado em Bugigangas", alert: true },
              ].map((item) => (
                <div key={item.drug + item.species} className={`p-4 rounded-xl border ${item.alert ? "border-red-500/25 bg-red-500/5" : "border-white/8 bg-white/3"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div><p className="font-bold text-white text-sm">{item.drug}</p><p className="text-[11px] text-slate-600 mt-0.5">{item.species}</p></div>
                    <div className="text-right"><p className={`text-xs font-mono ${item.alert ? "text-red-400" : "text-lime-400"}`}>{item.info}</p><p className="text-[11px] text-slate-600 mt-0.5">{item.calc}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
function Planos() {
  return (
    <>
      <Divider />
      <section id="planos" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-14 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/6 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />Planos
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Escolha seu plano.</h2>
            <p className="mt-3 text-slate-500 text-sm">Sem funcionalidades escondidas. Acesso completo em todos os planos.</p>
          </motion.div>
          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <motion.div key={plan.name} variants={fadeUp} whileHover={{ y: -6 }} className={`relative flex flex-col rounded-2xl border p-7 transition-all ${plan.highlighted ? "border-yellow-400/30 bg-gradient-to-b from-yellow-950/20 to-transparent" : "border-white/7 bg-white/2"}`}>
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-yellow-400 text-black text-[10px] font-bold uppercase tracking-wider">Mais escolhido</span>
                  </div>
                )}
                <div className="mb-6">
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-2">{plan.target}</p>
                  <h3 className="text-xl font-black text-white">{plan.name}</h3>
                  <div className="mt-3 flex items-end gap-1">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-slate-600 text-sm mb-1">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">{plan.description}</p>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-lime-400 flex-shrink-0 mt-0.5" /><span className="text-xs text-slate-300">{f}</span></li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl text-sm font-bold transition-all inline-flex items-center justify-center gap-2 ${plan.highlighted ? "bg-yellow-400 hover:bg-yellow-300 text-black glow-yellow hover:scale-[1.02]" : "border border-white/10 bg-white/4 hover:bg-white/8 text-white"}`}>
                  {plan.cta} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </motion.div>
          <motion.p variants={fadeUp} className="mt-7 text-center text-xs text-slate-700">Acesso antecipado durante o beta · Preços sujeitos a alteração no lançamento</motion.p>
        </motion.div>
      </section>
      <Divider />
    </>
  );
}
function Diferenciais() {
  const items = [
    { icon: Globe, title: "Primeiro no Brasil", text: "Construído especificamente para silvestres." },
    { icon: Sparkles, title: "Estratégias adaptáveis", text: "Condutas reutilizáveis criadas pelo veterinário." },
    { icon: Pill, title: "Farmacologia real", text: "Banco por espécie com alertas de risco." },
    { icon: Zap, title: "Fluxo inteligente", text: "Do relato à documentação sem fragmentação." },
    { icon: Shield, title: "Rastreabilidade total", text: "Histórico completo e auditável." },
    { icon: Layers, title: "Arquitetura modular", text: "Conecta Lab, CETAS, Student e ONGs." },
  ];
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
        <motion.div variants={fadeUp} className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/6 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />Diferenciais
          </div>
          <h2 className="text-4xl font-black tracking-tight text-white">Construído para quem nunca teve sistema próprio.</h2>
        </motion.div>
        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((d) => { const Icon = d.icon; return (
            <motion.div key={d.title} variants={fadeUp} whileHover={{ y: -4 }} className="flex items-start gap-4 p-5 rounded-2xl border border-white/7 bg-white/2 hover:border-emerald-500/20 hover:bg-white/3 transition-all cursor-default">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/8 border border-emerald-500/12 flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4 text-emerald-400" /></div>
              <div><p className="font-bold text-white text-sm mb-1">{d.title}</p><p className="text-slate-500 text-xs leading-relaxed">{d.text}</p></div>
            </motion.div>
          );})}
        </motion.div>
      </motion.div>
    </section>
  );
}
function CTAFinal() {
  return (
    <>
      <Divider />
      <section className="py-28 px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="relative max-w-4xl mx-auto text-center">
          <motion.h2 variants={fadeUp} className="text-5xl sm:text-6xl font-black tracking-tight text-white leading-[0.95]">
            Pronto para transformar<br /><span className="text-gradient-green">o atendimento?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
            Junte-se aos veterinários que estão estruturando a prática com o primeiro sistema feito para silvestres.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-bold transition-all glow-yellow hover:scale-[1.02]">
              Começar agora <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/4 hover:bg-white/8 text-white font-semibold transition-all">
              Entrar na plataforma
            </button>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-5 text-xs text-slate-700">Acesso antecipado · Sem cartão de crédito</motion.p>
          <motion.div variants={fadeUp} className="mt-8 pt-7 border-t border-white/6">
            <Link to="/" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">? Voltar para o Global Vestris</Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
export function ClinicalLanding() {
  return (
    <PageLayout>
      <Hero />
      <Atributos />
      <FluxoClinico />
      <Funcionalidades />
      <Farmacologia />
      <Planos />
      <Diferenciais />
      <CTAFinal />
    </PageLayout>
  );
}
