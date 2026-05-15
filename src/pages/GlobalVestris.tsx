import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowDown,
  Zap,
  Shield,
  Globe,
  Layers,
  FlaskConical,
  BookOpen,
  Building2,
  Microscope,
  CheckCircle2,
  ChevronRight,
  Activity,
  Cpu,
  Network,
  Database,
  GitBranch,
  Stethoscope,
  Beaker,
  GraduationCap,
  TreePine,
  Heart,
  Lock,
  BarChart3,
  QrCode,
  Users,
  FileText,
  Video,
  ClipboardList,
  Monitor,
  Tablet,
  Smartphone,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { products } from "@/data/products";
import { StatusBadge } from "@/components/ui/StatusBadge";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

function Divider() {
  return <div className="divider mx-auto max-w-7xl" />;
}

function AnimCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const step = (target / duration) * 16;
          let current = 0;
          const tick = () => {
            current = Math.min(current + step, target);
            setCount(Math.floor(current));
            if (current < target) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function SpeciesHeroCard() {
  const INTERVAL = 10000;
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  const modules = [
    {
      id: "clinico",
      label: "Clínico",
      badge: "SISTEMA CLÍNICO",
      tagline: "Informação clínica na hora certa.",
      icon: Stethoscope,
      text: "text-lime-400",
      border: "border-lime-500/25",
      bg: "bg-lime-500/8",
      dot: "bg-lime-400",
      bar: "bg-lime-400",
      features: [
        "Ficha por espécie com dados fisiológicos",
        "Dosagem calculada por peso e espécie",
        "Manejo e contenção espécie-específica",
        "Banco de doenças e diagnósticos diferenciais",
        "Base científica com referências",
      ],
    },
    {
      id: "lab",
      label: "Lab",
      badge: "LABORATÓRIO",
      tagline: "Rastreabilidade total da amostra.",
      icon: FlaskConical,
      text: "text-blue-400",
      border: "border-blue-500/25",
      bg: "bg-blue-500/8",
      dot: "bg-blue-400",
      bar: "bg-blue-400",
      features: [
        "Geração de código de barras por amostra",
        "Rastreio em tempo real",
        "Laudos digitais assinados",
        "Integração com módulo clínico",
        "Histórico completo por paciente",
      ],
    },
    {
      id: "student",
      label: "Student",
      badge: "APRENDIZADO",
      tagline: "Silvestres do zero ao avançado.",
      icon: GraduationCap,
      text: "text-violet-400",
      border: "border-violet-500/25",
      bg: "bg-violet-500/8",
      dot: "bg-violet-400",
      bar: "bg-violet-400",
      features: [
        "Cursos por espécie e grupo taxonômico",
        "Fisiologia e anatomia comparativa",
        "Manejo e comportamento em cativeiro",
        "Quizzes e avaliações interativas",
        "Vídeos e materiais especializados",
      ],
    },
    {
      id: "cetas",
      label: "CETAS / Zoo",
      badge: "GESTÃO INSTITUCIONAL",
      tagline: "Controle operacional e regulatório.",
      icon: TreePine,
      text: "text-amber-400",
      border: "border-amber-500/25",
      bg: "bg-amber-500/8",
      dot: "bg-amber-400",
      bar: "bg-amber-400",
      features: [
        "Controle populacional de animais",
        "Fluxos operacionais configuráveis",
        "Protocolos de quarentena",
        "Relatórios e documentos IBAMA",
        "Rastreio de movimentações",
      ],
    },
    {
      id: "ongs",
      label: "ONGs",
      badge: "GESTÃO DE RESGATE",
      tagline: "Do resgate ao encaminhamento.",
      icon: Heart,
      text: "text-orange-400",
      border: "border-orange-500/25",
      bg: "bg-orange-500/8",
      dot: "bg-orange-400",
      bar: "bg-orange-400",
      features: [
        "Cadastro e ficha de cada animal",
        "Evolução clínica e acompanhamento",
        "Documentação legal e termos",
        "Gestão de voluntários",
        "Campanhas e comunicação",
      ],
    },
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setTick(0);
      setActive((a) => (a + 1) % modules.length);
    }, INTERVAL);
    const prog = setInterval(() => setTick((p) => Math.min(p + 1, 100)), INTERVAL / 100);
    return () => { clearInterval(t); clearInterval(prog); };
  }, []);

  const m = modules[active];
  const Icon = m.icon;

  const demoContent: Record<string, ReactNode> = {
    clinico: (
      <div className="space-y-2.5">
        <div className="flex items-start gap-3 p-4 rounded-xl bg-white/4 border border-white/6">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-mono text-lime-400 uppercase tracking-widest mb-1.5">Iguana iguana · Réptil · 1.2 kg</p>
            <p className="text-sm font-bold text-white">Meloxicam — anti-inflamatório</p>
            <p className="text-xs text-slate-400 mt-1">0.2 mg/kg · via oral · SID</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-xl font-black text-lime-300">0.24 mg</p>
            <p className="text-[11px] text-slate-500">dose calculada</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 rounded-lg bg-white/3 border border-white/5">
            <p className="text-[11px] text-slate-500 mb-1">Temperatura</p>
            <p className="text-sm font-bold text-white">27 – 32 °C</p>
          </div>
          <div className="p-3 rounded-lg bg-white/3 border border-white/5">
            <p className="text-[11px] text-slate-500 mb-1">Freq. cardíaca</p>
            <p className="text-sm font-bold text-white">40 – 80 bpm</p>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {["Analgésico", "Anti-inflamatório", "VO"].map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-lime-500/10 text-lime-400 border border-lime-500/20 font-medium">{tag}</span>
          ))}
        </div>
      </div>
    ),
    lab: (
      <div className="space-y-2.5">
        <div className="p-4 rounded-xl bg-white/4 border border-white/6 flex items-center gap-3">
          <QrCode className="w-10 h-10 text-blue-400 flex-shrink-0" />
          <div>
            <p className="text-xs font-mono text-blue-400 uppercase tracking-widest">VTR-2026-00847</p>
            <p className="text-sm font-bold text-white mt-1">Sangue total · Jabuti-piranga</p>
            <p className="text-xs text-slate-400 mt-0.5">Coletada 14/05/2026 · 09:42</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Triagem", status: "done", color: "text-green-400" },
            { label: "Análise", status: "active", color: "text-blue-400" },
            { label: "Laudo", status: "pending", color: "text-slate-500" },
          ].map((step) => (
            <div key={step.label} className="p-2.5 rounded-lg bg-white/3 border border-white/5 text-center">
              <p className={`text-xs font-semibold ${step.color}`}>{step.label}</p>
              <p className="text-[10px] text-slate-600 mt-1">{step.status === "done" ? "✓ concluído" : step.status === "active" ? "● em andamento" : "aguardando"}</p>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-lg bg-blue-500/8 border border-blue-500/20 flex items-center justify-between">
          <span className="text-xs text-blue-300 font-medium">Integração clínica ativa</span>
          <span className="text-xs text-blue-400 font-mono">→ Ficha #0034</span>
        </div>
      </div>
    ),
    student: (
      <div className="space-y-2.5">
        <div className="p-4 rounded-xl bg-white/4 border border-white/6">
          <div className="flex items-center gap-2 mb-2.5">
            <Video className="w-4 h-4 text-violet-400" />
            <p className="text-sm font-bold text-white">Répteis — Fisiologia Básica</p>
          </div>
          <div className="w-full h-2 rounded-full bg-white/8 overflow-hidden">
            <div className="h-full w-3/5 rounded-full bg-violet-400" />
          </div>
          <p className="text-xs text-slate-500 mt-2">60% concluído · 12 de 20 aulas</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Espécies catalogadas", val: "147+" },
            { label: "Horas de conteúdo", val: "80h+" },
            { label: "Quizzes disponíveis", val: "340" },
            { label: "Grupos taxonômicos", val: "18" },
          ].map((s) => (
            <div key={s.label} className="p-3 rounded-lg bg-white/3 border border-white/5">
              <p className="text-base font-black text-white">{s.val}</p>
              <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    cetas: (
      <div className="space-y-2.5">
        <div className="p-4 rounded-xl bg-white/4 border border-white/6">
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Quarentena ativa</p>
            <span className="px-2.5 py-1 rounded-full text-xs bg-amber-500/15 text-amber-400 border border-amber-500/25 font-medium">14 animais</span>
          </div>
          {[
            { id: "#Q-041", sp: "Amazona amazonica", days: "D+3" },
            { id: "#Q-042", sp: "Chelonoidis carbonaria", days: "D+7" },
            { id: "#Q-043", sp: "Iguana iguana", days: "D+1" },
          ].map((row) => (
            <div key={row.id} className="flex items-center justify-between py-2 border-t border-white/4">
              <p className="text-xs font-mono text-slate-500">{row.id}</p>
              <p className="text-xs text-white">{row.sp}</p>
              <p className="text-xs text-amber-400 font-bold">{row.days}</p>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-lg bg-amber-500/8 border border-amber-500/20 flex items-center justify-between">
          <span className="text-xs text-amber-300 font-medium">Relatório IBAMA</span>
          <span className="text-xs text-amber-400">Pronto para exportar →</span>
        </div>
      </div>
    ),
    ongs: (
      <div className="space-y-2.5">
        <div className="p-4 rounded-xl bg-white/4 border border-white/6">
          <div className="flex items-start justify-between gap-2 mb-2.5">
            <div>
              <p className="text-xs font-mono text-orange-400 uppercase tracking-widest mb-1">Resgate #R-2026-0198</p>
              <p className="text-sm font-bold text-white">Capivara · fêmea · adulta</p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs bg-orange-500/15 text-orange-400 border border-orange-500/25 flex-shrink-0 font-medium">Em recuperação</span>
          </div>
          <div className="flex gap-3 text-xs text-slate-400">
            <span>Resgate: 10/05</span>
            <span>·</span>
            <span>Voluntário: Ana C.</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: ClipboardList, label: "Evolução clínica", color: "text-orange-400" },
            { icon: FileText, label: "Doc. legal", color: "text-orange-300" },
            { icon: Users, label: "Voluntários", color: "text-orange-400" },
          ].map(({ icon: Ic, label, color }) => (
            <div key={label} className="p-3 rounded-lg bg-white/3 border border-white/5 text-center">
              <Ic className={`w-4 h-4 mx-auto mb-1.5 ${color}`} />
              <p className="text-[11px] text-slate-400 leading-tight font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div className="relative rounded-2xl border border-white/8 bg-black/45 backdrop-blur-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-6 pt-5 pb-4 border-b border-white/5">
        <span className={`w-2 h-2 rounded-full ${m.dot} animate-pulse`} />
        <span className="text-xs text-slate-400 font-mono tracking-wider">vestris://sistema</span>
        <span className="ml-auto text-[11px] font-mono text-slate-500 uppercase tracking-widest">ao vivo</span>
      </div>

      {/* Module tab strip */}
      <div className="flex items-center gap-1.5 px-6 py-3 border-b border-white/5 overflow-x-auto no-scrollbar">
        {modules.map((mod, i) => (
          <button
            key={mod.id}
            type="button"
            onClick={() => { setActive(i); setTick(0); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              i === active
                ? `${mod.bg} ${mod.text} border ${mod.border}`
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            {mod.label}
          </button>
        ))}
      </div>

      {/* Module content */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="px-6 pt-5 pb-4"
      >
        {/* Module header */}
        <div className="flex items-center gap-3 mb-5">
          <div className={`p-2.5 rounded-xl ${m.bg} border ${m.border}`}>
            <Icon className={`w-5 h-5 ${m.text}`} />
          </div>
          <div>
            <p className={`text-[11px] font-mono uppercase tracking-widest ${m.text}`}>{m.badge}</p>
            <p className="text-base font-bold text-white mt-0.5 font-[Sora]">{m.tagline}</p>
          </div>
        </div>

        {/* Demo area */}
        <div className="mb-5">
          {demoContent[m.id]}
        </div>

        {/* Feature list */}
        <div className="space-y-2 border-t border-white/5 pt-4">
          {m.features.map((feat) => (
            <div key={feat} className="flex items-center gap-2.5">
              <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${m.text}`} />
              <p className="text-xs text-slate-400 leading-tight">{feat}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Progress bar */}
      <div className="px-6 pb-5 pt-3">
        <div className="w-full h-0.5 rounded-full bg-white/6 overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${m.bar}`}
            initial={{ width: "0%" }}
            animate={{ width: `${tick}%` }}
            transition={{ duration: 0.3, ease: "linear" }}
          />
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-[11px] text-slate-600">Próximo em {Math.ceil((100 - tick) / 10)}s</p>
          <div className="flex gap-1.5">
            {modules.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => { setActive(i); setTick(0); }}
                className={`rounded-full transition-all duration-300 ${i === active ? `w-5 h-1.5 ${m.bar}` : "w-1.5 h-1.5 bg-white/12 hover:bg-white/25"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OrbitalCore() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const modules = [
    { id: "clinico", angle: -90, label: "Clínico", color: "#4ade80", bg: "bg-lime-500/15", border: "border-lime-500/30", glow: "rgba(74,222,128,0.3)", icon: Stethoscope, status: "active" },
    { id: "lab", angle: -18, label: "Lab", color: "#60a5fa", bg: "bg-blue-500/15", border: "border-blue-500/30", glow: "rgba(96,165,250,0.3)", icon: Beaker, status: "dev" },
    { id: "student", angle: 54, label: "Student", color: "#a78bfa", bg: "bg-violet-500/15", border: "border-violet-500/30", glow: "rgba(167,139,250,0.3)", icon: GraduationCap, status: "planned" },
    { id: "cetas", angle: 126, label: "CETAS/ZOO", color: "#fbbf24", bg: "bg-amber-500/15", border: "border-amber-500/30", glow: "rgba(251,191,36,0.3)", icon: TreePine, status: "planned" },
    { id: "ongs", angle: 198, label: "ONGs", color: "#fb923c", bg: "bg-orange-500/15", border: "border-orange-500/30", glow: "rgba(251,146,60,0.3)", icon: Heart, status: "planned" },
  ];
  const r = 140;

  return (
    <div className="relative w-full flex items-center justify-center" style={{ height: 380 }}>
      <div className="absolute rounded-full border border-white/4" style={{ width: r * 2 + 80, height: r * 2 + 80, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      <div className="absolute rounded-full border border-white/3" style={{ width: r * 2 - 40, height: r * 2 - 40, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
        {modules.map((m) => {
          const rad = (m.angle * Math.PI) / 180;
          const mx = 50 + (r * Math.cos(rad) / 3.8) + "%";
          const my = 50 + (r * Math.sin(rad) / 3.8) + "%";
          const isHov = hoveredId === m.id;
          return (
            <motion.line key={m.id} x1="50%" y1="50%" x2={mx} y2={my}
              stroke={m.color} strokeWidth={isHov ? 1.5 : 0.5}
              strokeOpacity={isHov ? 0.7 : 0.15}
              strokeDasharray={isHov ? "none" : "4 4"}
              animate={{ strokeOpacity: isHov ? 0.7 : 0.12 }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </svg>
      <motion.div
        className="absolute z-10 flex flex-col items-center justify-center rounded-full border border-lime-500/25 bg-black/60 backdrop-blur-md"
        style={{ width: 90, height: 90, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        animate={{ boxShadow: hoveredId ? "0 0 40px rgba(74,222,128,0.18)" : "0 0 20px rgba(74,222,128,0.08)" }}
      >
        <Network className="w-5 h-5 text-lime-400 mb-1" />
        <span className="text-[8px] font-black text-lime-400 tracking-wider uppercase">VESTRIS</span>
        <span className="text-[7px] text-slate-600 tracking-widest">CORE</span>
      </motion.div>
      {modules.map((m) => {
        const rad = (m.angle * Math.PI) / 180;
        const mx = r * Math.cos(rad);
        const my = r * Math.sin(rad);
        const Icon = m.icon;
        const isHov = hoveredId === m.id;
        const product = products.find((p) => p.id === m.id);
        return (
          <motion.div key={m.id} className="absolute z-20"
            style={{ left: "50%", top: "50%", x: mx - 36, y: my - 36, width: 72, height: 72 }}
            onHoverStart={() => setHoveredId(m.id)}
            onHoverEnd={() => setHoveredId(null)}
            whileHover={{ scale: 1.12 }}
            animate={{ boxShadow: isHov ? `0 0 24px ${m.glow}` : "none" }}
          >
            <Link to={product?.path ?? "/"} className={`flex flex-col items-center justify-center w-full h-full rounded-2xl border ${m.border} ${m.bg} backdrop-blur-sm transition-all duration-200`}>
              <Icon className="w-5 h-5 mb-1" style={{ color: m.color }} />
              <span className="text-[9px] font-bold text-center leading-tight px-1" style={{ color: m.color }}>{m.label}</span>
              {m.status === "active" && <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-glow absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-lime-500/8 blur-[120px]" />
        <div className="hero-glow absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-[100px]" />
        <div className="hero-glow absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-yellow-500/7 blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 min-h-screen py-28 lg:py-0">

        {/* Left: Text content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-lime-500/20 bg-lime-500/5 mb-7 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse inline-block" />
            <span className="text-lime-400 text-[10px] font-bold tracking-[0.18em] uppercase">Ecossistema · Silvestres e exóticos · Brasil</span>
            <span className="w-px h-3 bg-lime-500/25" />
            <span className="text-[10px] text-lime-400 font-semibold">v1.0 — 2026</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="leading-[1.05] mb-6 tracking-wide" style={{ fontSize: "clamp(4rem,8vw,10rem)", fontFamily: "'Anton', sans-serif" }}>
            <span className="block text-white">GLOBAL</span>
            <span className="block text-gradient-green pr-4">VESTRIS</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-sm text-white/60 font-medium mb-7 max-w-sm leading-relaxed">
            A plataforma que a medicina de silvestres esperava.
          </motion.p>

          {/* Description */}
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }}
            className="text-base text-white/70 max-w-md leading-relaxed mb-9">
            Para veterinários, biólogos e estudantes que levam a fauna silvestre a sério.
            <span className="text-white font-semibold"> Tudo organizado por espécie, em um ecossistema construído do zero para essa especialidade.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.42 }}
            className="flex flex-nowrap items-center justify-center lg:justify-start gap-3">
            <a href="#ecossistema" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-sm tracking-wider uppercase transition-all hover:scale-[1.04] active:scale-[0.97] text-black whitespace-nowrap"
              style={{ background: "linear-gradient(135deg, #4ade80 0%, #facc15 100%)", boxShadow: "0 0 32px rgba(74,222,128,0.35)" }}>
              <Network className="w-4 h-4 flex-shrink-0" />
              Explorar Ecossistema
              <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/clinico" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-yellow-400/40 bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-300 font-black text-sm tracking-wider uppercase transition-all hover:border-yellow-400/60 hover:scale-[1.02] whitespace-nowrap">
              <Stethoscope className="w-4 h-4 flex-shrink-0" />
              Sistema Clínico
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </motion.div>

        </div>

        {/* Right: Species card */}
        <div className="w-full lg:w-[460px] xl:w-[500px] flex-shrink-0">
          <motion.div initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.5 }}>
            <SpeciesHeroCard />
          </motion.div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 divider" />
    </section>
  );
}

function QuemSomos() {
  const points = [
    {
      icon: Globe,
      title: "Especialidade, não adaptação",
      text: "A Vestris foi criada para a medicina de silvestres. Cada detalhe do produto foi pensado para essa realidade — não copiado de uma plataforma genérica.",
    },
    {
      icon: Database,
      title: "Tudo começa pela espécie",
      text: "Espécie é a unidade central de todo o ecossistema. É a partir dela que as informações se organizam, conectam e fazem sentido na prática.",
    },
    {
      icon: Heart,
      title: "Responsabilidade com a vida",
      text: "Não automatizamos condutas. Não entregamos conteúdo clínico para quem não é formado. Apoiamos o profissional sem nunca substituir seu julgamento.",
    },
  ];

  return (
    <section id="quem-somos" className="py-28 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}
        className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
        <motion.div variants={fadeUp}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime-500/25 bg-lime-500/6 text-lime-400 text-[10px] font-bold tracking-widest uppercase mb-5">
            <Globe className="w-3 h-3" />
            Quem somos
          </div>
          <h2 className="section-title font-black leading-[0.9] max-w-xl" style={{ fontSize: "clamp(2.6rem,5vw,4.5rem)" }}>
            <span className="block text-white">Feita com</span>
            <span className="text-gradient-green">propósito real.</span>
          </h2>
          <p className="mt-6 text-white/75 text-base leading-relaxed max-w-xl">
            A Vestris nasceu para a medicina de silvestres. Não adaptamos nada de outra especialidade. Cada decisão de produto parte do respeito pela complexidade dessa área.
          </p>
          <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-xl">
            Construímos junto com veterinários e biólogos. Crescemos com responsabilidade. E estamos aqui para ficar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#ecossistema" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-sm transition-all">
              Ver ecossistema
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#visao" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/12 bg-white/4 hover:bg-white/8 text-white font-semibold text-sm transition-all">
              Nossa visão
            </a>
          </div>
        </motion.div>

        <motion.div variants={stagger} className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div key={point.title} variants={fadeUp}
                className="flex gap-4 p-6 rounded-2xl border border-white/7 bg-white/2 backdrop-blur-sm">
                <div className="w-11 h-11 rounded-xl bg-lime-500/10 border border-lime-500/18 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-lime-400" />
                </div>
                <div>
                  <h3 className="font-black text-white text-lg leading-tight mb-2">{point.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{point.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

const moduleIdentities = {
  lab: { tech: "Laboratório conectado", desc: "Exames, amostras e laudos ligados ao histórico clínico do animal.", features: ["Código de barras", "Rastreio de amostras", "Laudos digitais", "Integração clínica"], status: "EM DESENVOLVIMENTO", statusColor: "text-blue-400", gradFrom: "from-blue-950/25", border: "border-blue-500/20", accent: "text-blue-400", dot: "bg-blue-400" },
  student: { tech: "Aprendizado sobre silvestres", desc: "Espécies, comportamentos, manejo e curiosidades da fauna silvestre de forma educativa, interativa e acessível.", features: ["Espécies e fisiologia", "Comportamento e manejo", "Quizzes interativos", "Vídeos de creators"], status: "PLANEJADO", statusColor: "text-violet-400", gradFrom: "from-violet-950/25", border: "border-violet-500/20", accent: "text-violet-400", dot: "bg-slate-600" },
  cetas: { tech: "Gestão institucional", desc: "Rotina, quarentena e fluxo operacional para centros com alto volume de animais silvestres.", features: ["Controle populacional", "Quarentena", "Fluxo operacional", "Relatórios IBAMA"], status: "PLANEJADO", statusColor: "text-amber-400", gradFrom: "from-amber-950/25", border: "border-amber-500/20", accent: "text-amber-400", dot: "bg-slate-600" },
  ongs: { tech: "Resgate e reabilitação", desc: "Histórico, evolução clínica e documentação para projetos de cuidado.", features: ["Cadastro de animais", "Evolução clínica", "Documentação legal", "Voluntários"], status: "PLANEJADO", statusColor: "text-orange-400", gradFrom: "from-orange-950/25", border: "border-orange-500/20", accent: "text-orange-400", dot: "bg-slate-600" },
};

function Ecossistema() {
  const featured = products.find((p) => p.isFeatured)!;
  const rest = products.filter((p) => !p.isFeatured);
  const highlights = ["Informação por espécie", "Dose por peso", "Doenças e condutas", "Raciocínio clínico", "Base organizada", "Histórico clínico"];

  return (
    <section id="ecossistema" className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
        <motion.div variants={fadeUp} className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime-500/25 bg-lime-500/6 text-lime-400 text-[10px] font-bold tracking-widest uppercase mb-5">
            <Cpu className="w-3 h-3" />
            Ecossistema · 5 módulos conectados
          </div>
          <h2 className="section-title font-black tracking-tight leading-[1.05] mb-6" style={{ fontSize: "clamp(2.2rem,4vw,4rem)" }}>
            <span className="text-white">Tudo que você precisa, </span>
            <span className="text-gradient-green">onde você precisa.</span>
          </h2>
          <p className="text-white/65 text-base leading-relaxed max-w-2xl">Consulta, doenças, condutas, farmacologia, documentação e acompanhamento. Cinco módulos conectados, organizados por espécie, para simplificar cada etapa da rotina.</p>
        </motion.div>

        <motion.div variants={scaleIn} className="mb-5">
          <Link to={featured.path} className="group relative flex flex-col lg:flex-row overflow-hidden rounded-2xl border border-lime-500/20 bg-gradient-to-br from-lime-950/20 via-emerald-950/10 to-transparent p-9 lg:p-11 card-hover">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-500 pointer-events-none" />
            <div className="absolute top-5 right-5 hidden lg:flex items-center gap-2">
                    <span className="text-[9px] font-mono text-lime-600 tracking-widest uppercase">Ferramenta principal</span>
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            </div>
            <div className="flex-1 lg:pr-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="px-2.5 py-1 rounded-full bg-lime-400/12 border border-lime-400/20 text-lime-400 text-[9px] font-black uppercase tracking-widest">
                  ONLINE · Disponível agora
                </span>
              </div>
              <h3 className="text-4xl sm:text-5xl font-black text-white mb-3 group-hover:text-lime-50 transition-colors leading-tight">{featured.name}</h3>
              <p className="text-slate-200 max-w-md leading-relaxed text-sm mb-6">
                A ferramenta clínica organiza informações por espécie, apoia o raciocínio, facilita consulta de doenças e condutas, calcula dosagens e reduz a perda de tempo buscando referências.
              </p>
              <div className="inline-flex items-center gap-2 text-yellow-400 text-sm font-black group-hover:gap-3 transition-all">
                Conhecer ferramenta <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-72 xl:w-80">
              <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.15em] mb-4">O que ela centraliza</p>
              <ul className="grid grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 flex-shrink-0" />{h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-lime-500/10 bg-lime-500/4 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-3 h-3 text-lime-400" />
                  <span className="text-[9px] font-mono text-lime-500 uppercase tracking-wider">System Health</span>
                  <span className="ml-auto text-[9px] text-lime-400 font-bold">99.9%</span>
                </div>
                <div className="flex gap-1 items-end">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-lime-400" style={{ height: `${6 + Math.abs(Math.sin(i * 0.9)) * 10}px`, opacity: 0.3 + (i / 24) * 0.7 }} />
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((p) => {
            const identity = moduleIdentities[p.id as keyof typeof moduleIdentities];
            if (!identity) return null;
            return (
              <motion.div key={p.id} variants={fadeUp}>
                <Link to={p.path} className={`group flex flex-col h-full rounded-2xl border ${identity.border} bg-gradient-to-br ${identity.gradFrom} to-transparent p-6 card-hover overflow-hidden relative`}>
                  <p className={`text-[8px] font-mono ${identity.accent} uppercase tracking-[0.15em] mb-3 opacity-70`}>{identity.tech}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${identity.dot}`} />
                    <span className={`text-[9px] font-bold ${identity.statusColor} uppercase tracking-wider`}>{identity.status}</span>
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight mb-2">{p.shortName}</h3>
                  <p className="text-slate-200 text-xs leading-relaxed flex-1">{identity.desc}</p>
                  <div className="mt-4 space-y-1.5">
                    {identity.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <span className={`w-1 h-1 rounded-full ${identity.dot}`} />
                        <span className="text-[10px] text-slate-300">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className={`mt-5 flex items-center gap-1.5 text-[11px] font-bold ${identity.accent} group-hover:gap-2.5 transition-all`}>
                    Saiba mais <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

function PorQueVestris() {
  const items = [
    { icon: Layers, title: "Tudo espalhado", text: "Livros, PDFs, anotações e conversas no WhatsApp competindo pela atenção durante o atendimento. Isso custa tempo e segurança.", tag: "Referências" },
    { icon: FlaskConical, title: "Dose nunca é simples", text: "Espécie, peso e condição do animal tornam cada cálculo uma etapa crítica. Um acesso rápido pode fazer toda a diferença.", tag: "Dose" },
    { icon: Microscope, title: "Pressão na hora da decisão", text: "Raciocinar bem exige clareza. Com múltiplas fontes abertas e tempo curto, a margem de erro aumenta.", tag: "Decisão" },
    { icon: Shield, title: "Histórico que se perde", text: "Cada profissional carrega suas anotações. Quando algo muda, o histórico vai junto. Retrabalho constante.", tag: "Rotina" },
    { icon: Zap, title: "Minutos que somem", text: "Buscando informação no lugar de atender. O problema não é falta de conhecimento — é falta de organização.", tag: "Agilidade" },
    { icon: BookOpen, title: "Sem plataforma própria", text: "Silvestres não é adaptação de outro sistema. Precisa de uma ferramenta pensada para a sua realidade desde o início.", tag: "Especialidade" },
  ];
  return (
    <>
      <Divider />
      <section className="pt-10 pb-32 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/6 text-yellow-400 text-[10px] font-bold tracking-widest uppercase mb-5">
              <GitBranch className="w-3 h-3" />
              Problema real
            </div>
            <h2 className="section-title font-black tracking-tight leading-[0.9] max-w-4xl" style={{ fontSize: "clamp(2.6rem,5vw,4.5rem)" }}>
              <span className="block text-white">A rotina exige mais.</span>
              <span className="text-gradient-green">As ferramentas ficam atrás.</span>
            </h2>
          </motion.div>
          <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -4 }}
                  className="relative flex flex-col gap-3 p-6 rounded-2xl border border-white/6 bg-white/2 transition-colors cursor-default overflow-hidden">
                  <span className="absolute top-3 right-4 text-[8px] font-mono text-slate-400 uppercase tracking-wider">{item.tag}</span>
                  <div className="w-9 h-9 rounded-xl bg-yellow-400/8 border border-yellow-400/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-black text-white text-sm mb-1">{item.title}</p>
                    <p className="text-slate-300 text-xs leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>
      <Divider />
    </>
  );
}

function Visao() {
  const pillars = [
    { icon: Building2, num: "01", title: "Rotina sem caos", text: "Consulta, acompanhamento e documentação organizados num só lugar. Sem abas abertas, sem anotações perdidas.", tech: "Rotina" },
    { icon: Database, num: "02", title: "Informação perto de quem decide", text: "Doenças, condutas, doses e referências acessíveis no momento em que são necessárias. Não depois.", tech: "Base" },
    { icon: BookOpen, num: "03", title: "Construído com a comunidade", text: "Quem usa é quem molda. Desenvolvemos junto com veterinários e biólogos que conhecem a pressão da rotina.", tech: "Comunidade" },
    { icon: Globe, num: "04", title: "Controle de verdade", text: "Menos improviso, mais consistência. Para clínicas, hospitais e profissionais que precisam de confiança na operação.", tech: "Segurança" },
  ];
  return (
    <section id="visao" className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
        <motion.div variants={fadeUp} className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/6 text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-5">
            <BarChart3 className="w-3 h-3" />
            O que acreditamos
          </div>
          <h2 className="section-title font-black tracking-tight leading-[0.9] mb-6" style={{ fontSize: "clamp(2.8rem,6vw,5rem)" }}>
            <span className="block text-white">Menos improviso.</span>
            <span className="text-gradient-green">Mais presença.</span>
          </h2>
          <p className="text-white/65 max-w-2xl text-base leading-relaxed">
            Boa tecnologia não atrapalha o atendimento. Ela organiza o caminho para que o profissional passe mais tempo com o paciente e menos tempo procurando.
          </p>
        </motion.div>
        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.num} variants={fadeUp} whileHover={{ y: -4 }}
                className="relative p-7 rounded-2xl border border-white/7 bg-white/2 transition-all cursor-default overflow-hidden">
                <span className="absolute top-4 right-5 text-5xl font-black text-white/3 select-none leading-none">{p.num}</span>
                <span className="absolute top-5 left-6 text-[7px] font-mono text-slate-500 uppercase tracking-widest">{p.tech}</span>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center mb-5 mt-5">
                  <Icon className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="font-black text-white text-sm mb-2">{p.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{p.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Depoimentos() {
  const items = [
    { title: "Organização que não engessa", label: "Diferencial", text: "A Vestris organiza, estrutura e facilita. Mas a conduta sempre pertence ao profissional. Sem automação de decisão, sem conduta fechada." },
    { title: "Informação no momento certo", label: "Clareza", text: "Doença, dose, conduta e histórico onde você precisa, quando você precisa. Não no final da jornada de busca." },
    { title: "Zero adaptação de outra área", label: "Foco", text: "Cada fluxo, cada campo, cada decisão de produto foi pensada para a realidade de silvestres. Do zero. Sem atalho." },
  ];
  return (
    <>
      <Divider />
      <section className="pt-10 pb-32 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime-500/25 bg-lime-500/6 text-lime-400 text-[10px] font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 inline-block" />
              Diferencial Vestris
            </div>
            <h2 className="section-title font-black tracking-tight leading-[0.9]" style={{ fontSize: "clamp(2.4rem,5vw,4rem)" }}>
              <span className="block text-white">Apoio clínico.</span>
              <span className="text-gradient-green">Autonomia preservada.</span>
            </h2>
          </motion.div>
          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-4">
            {items.map((t) => (
              <motion.div key={t.title} variants={scaleIn} whileHover={{ y: -4 }}
                className="relative p-7 rounded-2xl border border-white/7 bg-white/2 hover:border-lime-500/15 transition-all cursor-default">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-lime-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-lime-400">{t.label}</span>
                </div>
                <h3 className="font-black text-white text-lg leading-tight mb-3">{t.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">{t.text}</p>
                <div className="border-t border-white/6 pt-4">
                  <p className="text-slate-400 text-xs leading-relaxed">Mais organização para clínicas, hospitais e profissionais que precisam decidir com agilidade sem perder profundidade técnica.</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <Divider />
    </>
  );
}

function CTAFinal() {
  return (
    <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-lime-500/4 blur-[120px] pointer-events-none" />
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}
        className="relative max-w-4xl mx-auto text-center">
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/6 text-yellow-400 text-[10px] font-bold tracking-widest uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block animate-pulse" />
          Sistema clínico · Acesso antecipado
        </motion.div>
        <motion.h2 variants={fadeUp} className="section-title text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-2">
          Menos busca.
        </motion.h2>
        <motion.h2 variants={fadeUp} className="section-title text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
          <span className="text-gradient-green">Mais presença.</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-lg text-white/60 max-w-lg mx-auto mb-10">
          O ecossistema que coloca a informação onde ela precisa estar: do seu lado, organizada por espécie, pronta para quando importa.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link to="/clinico" className="group inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-black text-sm transition-all glow-yellow hover:scale-[1.03] active:scale-[0.98]">
            <Stethoscope className="w-4 h-4" />
            Conhecer Sistema Clínico
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a href="#ecossistema" className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl border border-white/12 bg-white/4 hover:bg-white/8 text-white font-semibold text-sm transition-all">
            Ver módulos
          </a>
          <a href="#quem-somos" className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl border border-lime-500/25 bg-lime-500/8 hover:bg-lime-500/12 text-lime-200 font-semibold text-sm transition-all">
            Quem somos
          </a>
        </motion.div>
        <motion.p variants={fadeUp} className="text-xs text-slate-500 font-mono">
          Feito para silvestres · Para veterinários, biólogos e quem se importa
        </motion.p>
      </motion.div>
    </section>
  );
}

function DeviceMockup() {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const devices = [
    { id: "desktop" as const, label: "Computador", icon: Monitor },
    { id: "tablet" as const, label: "Tablet", icon: Tablet },
    { id: "mobile" as const, label: "Celular", icon: Smartphone },
  ];

  /* ── UI inside the screen ── */
  const SystemUI = () => (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* App layout — row for desktop/tablet, column for mobile */}
      <div className="flex-1 flex overflow-hidden" style={{ flexDirection: "row" }}>
        {/* Sidebar — hidden on mobile */}
        {device !== "mobile" && (
          <div className="flex-shrink-0 flex flex-col bg-[#060e08] border-r border-white/6"
            style={{ width: device === "desktop" ? 160 : 110 }}>
            <div className="px-3 py-3 border-b border-white/6 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-lime-400" />
              <span className="text-[7px] font-bold text-white tracking-wide">VESTRIS</span>
            </div>
            <nav className="flex-1 py-2 space-y-0.5 px-2">
              {[
                { label: "Dashboard", active: false },
                { label: "Espécies", active: true },
                { label: "Dosagens", active: false },
                { label: "Doenças", active: false },
                { label: "Pacientes", active: false },
                { label: "Laudos", active: false },
              ].map((item) => (
                <div key={item.label}
                  className={`px-2 py-1.5 rounded-md text-[7px] font-medium cursor-default ${item.active ? "bg-lime-500/15 text-lime-300" : "text-slate-500"}`}>
                  {item.label}
                </div>
              ))}
            </nav>
            <div className="p-2 border-t border-white/6">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-lime-500/20 flex items-center justify-center">
                  <span className="text-[5px] font-bold text-lime-400">DR</span>
                </div>
                {device === "desktop" && <span className="text-[6px] text-slate-500">Dr. Rodrigo</span>}
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col bg-[#07100a] overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 flex-shrink-0">
            {device === "mobile" && (
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                <span className="text-[7px] font-bold text-white">VESTRIS</span>
              </div>
            )}
            <div className={`${device === "mobile" ? "" : "flex-1"} flex items-center gap-1.5 bg-white/4 rounded-md px-2 py-1`}
              style={{ maxWidth: device === "desktop" ? 200 : 110 }}>
              <span className="text-[6px] text-slate-500">🔍</span>
              <span className="text-[6px] text-slate-500">Buscar espécie...</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              <span className="text-[6px] text-lime-500 font-mono">Online</span>
            </div>
          </div>

        {/* Content area */}
        <div className="flex-1 overflow-hidden p-2.5 flex gap-2">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-2 min-w-0">
            {/* Species card */}
            <div className="bg-[#0a160c] rounded-lg border border-lime-500/15 p-2.5">
              <div className="flex items-start justify-between mb-1.5">
                <div>
                  <p className="text-[6px] font-mono text-lime-400 uppercase tracking-widest mb-0.5">Réptil · Iguanidae</p>
                  <p className="text-[9px] font-bold text-white italic">Iguana iguana</p>
                  <p className="text-[6px] text-slate-400">Iguana-verde</p>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-lime-500/15 text-lime-400 text-[5px] font-bold uppercase">Ativa</span>
              </div>
              <div className="grid grid-cols-3 gap-1 mt-2">
                {[["Temp.", "27–32°C"], ["FC", "40–80bpm"], ["FR", "15–30rpm"]].map(([l, v]) => (
                  <div key={l} className="bg-white/3 rounded p-1 text-center">
                    <p className="text-[5px] text-slate-500">{l}</p>
                    <p className="text-[6px] font-bold text-white">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dosage card */}
            <div className="bg-[#0a100d] rounded-lg border border-white/6 p-2.5">
              <p className="text-[6px] font-mono text-slate-500 uppercase tracking-widest mb-1.5">Cálculo de dosagem</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[8px] font-bold text-white">Meloxicam</p>
                  <p className="text-[6px] text-slate-400">0.2 mg/kg · VO · SID</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-lime-300">0.48mg</p>
                  <p className="text-[5px] text-slate-500">para 2.4 kg</p>
                </div>
              </div>
              <div className="mt-1.5 flex gap-1">
                {["Analgesia", "VO", "SID"].map((t) => (
                  <span key={t} className="px-1 py-0.5 rounded text-[5px] bg-lime-500/10 text-lime-400 border border-lime-500/15">{t}</span>
                ))}
              </div>
            </div>

            {/* Diseases */}
            {device !== "mobile" && (
              <div className="bg-[#0a100d] rounded-lg border border-white/6 p-2.5 flex-1">
                <p className="text-[6px] font-mono text-slate-500 uppercase tracking-widest mb-2">Doenças frequentes</p>
                <div className="space-y-1">
                  {[
                    { name: "Estomatite ulcerativa", sev: "Alta" },
                    { name: "Metabolic Bone Disease", sev: "Média" },
                    { name: "Retenção de muda", sev: "Baixa" },
                  ].map((d) => (
                    <div key={d.name} className="flex items-center justify-between py-1 border-t border-white/4 first:border-0">
                      <p className="text-[6px] text-slate-300">{d.name}</p>
                      <span className={`text-[5px] font-bold px-1 py-0.5 rounded ${d.sev === "Alta" ? "bg-red-500/15 text-red-400" : d.sev === "Média" ? "bg-yellow-500/15 text-yellow-400" : "bg-green-500/15 text-green-400"}`}>{d.sev}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column — desktop/tablet only */}
          {device === "desktop" && (
            <div className="w-32 flex flex-col gap-2 flex-shrink-0">
              <div className="bg-[#0a100d] rounded-lg border border-white/6 p-2">
                <p className="text-[6px] font-mono text-slate-500 uppercase tracking-widest mb-1.5">Histórico</p>
                {[
                  { date: "12/05", note: "Consulta inicial" },
                  { date: "08/05", note: "Exame de sangue" },
                  { date: "01/05", note: "Retorno" },
                ].map((h) => (
                  <div key={h.date} className="flex gap-1.5 py-1 border-t border-white/4 first:border-0">
                    <span className="text-[5px] text-slate-600 flex-shrink-0 pt-0.5">{h.date}</span>
                    <span className="text-[6px] text-slate-300">{h.note}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#0c1209] rounded-lg border border-lime-500/12 p-2 flex-1">
                <p className="text-[6px] font-mono text-lime-600 uppercase tracking-widest mb-1.5">Base científica</p>
                <p className="text-[6px] text-slate-400 leading-relaxed">Referências integradas por espécie com links para literatura especializada.</p>
                <div className="mt-2 space-y-1">
                  {["Mader's Reptile", "Carpenter (2013)", "BSAVA Exotic"].map((r) => (
                    <div key={r} className="text-[5px] text-lime-500 underline cursor-pointer">{r}</div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
      {/* Mobile bottom tab bar */}
      {device === "mobile" && (
        <div style={{ display: "flex", borderTop: "1px solid rgba(255,255,255,0.06)", background: "#050c07", flexShrink: 0 }}>
          {[
            { label: "Início", active: false },
            { label: "Espécies", active: true },
            { label: "Dosagem", active: false },
            { label: "Perfil", active: false },
          ].map((tab) => (
            <div key={tab.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5px 0 4px", gap: 2 }}>
              <div style={{ width: 12, height: 12, borderRadius: 3, background: tab.active ? "rgba(163,230,53,0.15)" : "rgba(255,255,255,0.04)" }} />
              <span style={{ fontSize: 5, fontFamily: "Inter, sans-serif", color: tab.active ? "#a3e635" : "rgba(255,255,255,0.25)", fontWeight: tab.active ? 700 : 400 }}>{tab.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <Divider />
      <div className="relative overflow-hidden">

        {/* ── Tech background decorations ── */}
        <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0">

          {/* Dot grid — left side, fades toward center */}
          <svg style={{ position: "absolute", left: 0, top: 0, height: "100%", width: "38%", opacity: 0.22 }}
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="dm-dots-l" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="11" cy="11" r="1.3" fill="#a3e635" />
              </pattern>
              <linearGradient id="dm-grad-l" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="82%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <mask id="dm-mask-l">
                <rect width="100%" height="100%" fill="url(#dm-grad-l)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#dm-dots-l)" mask="url(#dm-mask-l)" />
          </svg>

          {/* Dot grid — right side, fades toward center */}
          <svg style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "38%", opacity: 0.22 }}
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="dm-dots-r" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="11" cy="11" r="1.3" fill="#a3e635" />
              </pattern>
              <linearGradient id="dm-grad-r" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="82%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <mask id="dm-mask-r">
                <rect width="100%" height="100%" fill="url(#dm-grad-r)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#dm-dots-r)" mask="url(#dm-mask-r)" />
          </svg>

          {/* Circuit traces — left */}
          <svg style={{ position: "absolute", left: "3%", top: "50%", transform: "translateY(-50%)", width: "16%", maxWidth: 200, opacity: 0.34 }}
            viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" fill="none">
            <g stroke="#84cc16" strokeWidth="0.75">
              <polyline points="200,40 130,40 110,60 30,60" />
              <polyline points="200,100 145,100 125,120 45,120" />
              <polyline points="200,160 148,160 128,180 48,180" />
              <polyline points="200,220 136,220 116,240 36,240" />
            </g>
            <g fill="#84cc16">
              <circle cx="130" cy="40" r="3" /><circle cx="110" cy="60" r="2" opacity="0.6" /><circle cx="30" cy="60" r="4.5" opacity="0.28" />
              <circle cx="145" cy="100" r="3" /><circle cx="125" cy="120" r="2" opacity="0.6" /><circle cx="45" cy="120" r="4.5" opacity="0.28" />
              <circle cx="148" cy="160" r="3" /><circle cx="128" cy="180" r="2" opacity="0.6" /><circle cx="48" cy="180" r="4.5" opacity="0.28" />
              <circle cx="136" cy="220" r="3" /><circle cx="116" cy="240" r="2" opacity="0.6" /><circle cx="36" cy="240" r="4.5" opacity="0.28" />
            </g>
          </svg>

          {/* Circuit traces — right */}
          <svg style={{ position: "absolute", right: "3%", top: "50%", transform: "translateY(-50%)", width: "16%", maxWidth: 200, opacity: 0.34 }}
            viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" fill="none">
            <g stroke="#84cc16" strokeWidth="0.75">
              <polyline points="0,40 70,40 90,60 170,60" />
              <polyline points="0,100 55,100 75,120 155,120" />
              <polyline points="0,160 52,160 72,180 152,180" />
              <polyline points="0,220 64,220 84,240 164,240" />
            </g>
            <g fill="#84cc16">
              <circle cx="70" cy="40" r="3" /><circle cx="90" cy="60" r="2" opacity="0.6" /><circle cx="170" cy="60" r="4.5" opacity="0.28" />
              <circle cx="55" cy="100" r="3" /><circle cx="75" cy="120" r="2" opacity="0.6" /><circle cx="155" cy="120" r="4.5" opacity="0.28" />
              <circle cx="52" cy="160" r="3" /><circle cx="72" cy="180" r="2" opacity="0.6" /><circle cx="152" cy="180" r="4.5" opacity="0.28" />
              <circle cx="64" cy="220" r="3" /><circle cx="84" cy="240" r="2" opacity="0.6" /><circle cx="164" cy="240" r="4.5" opacity="0.28" />
            </g>
          </svg>

          {/* Corner bracket — top-left */}
          <svg style={{ position: "absolute", top: 20, left: 20, width: 56, height: 56, opacity: 0.45 }}
            viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" fill="none">
            <rect x="0" y="0" width="16" height="1.5" fill="#84cc16" />
            <rect x="0" y="0" width="1.5" height="16" fill="#84cc16" />
            <line x1="18" y1="22" x2="34" y2="22" stroke="#84cc16" strokeWidth="0.7" />
            <line x1="34" y1="22" x2="40" y2="28" stroke="#84cc16" strokeWidth="0.7" />
            <line x1="22" y1="18" x2="22" y2="34" stroke="#84cc16" strokeWidth="0.7" />
            <line x1="22" y1="34" x2="28" y2="40" stroke="#84cc16" strokeWidth="0.7" />
            <circle cx="34" cy="22" r="2" fill="#84cc16" /><circle cx="22" cy="34" r="2" fill="#84cc16" />
            <circle cx="40" cy="28" r="1.4" fill="#84cc16" opacity="0.5" /><circle cx="28" cy="40" r="1.4" fill="#84cc16" opacity="0.5" />
          </svg>

          {/* Corner bracket — top-right */}
          <svg style={{ position: "absolute", top: 20, right: 20, width: 56, height: 56, opacity: 0.45, transform: "scaleX(-1)" }}
            viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" fill="none">
            <rect x="0" y="0" width="16" height="1.5" fill="#84cc16" />
            <rect x="0" y="0" width="1.5" height="16" fill="#84cc16" />
            <line x1="18" y1="22" x2="34" y2="22" stroke="#84cc16" strokeWidth="0.7" />
            <line x1="34" y1="22" x2="40" y2="28" stroke="#84cc16" strokeWidth="0.7" />
            <line x1="22" y1="18" x2="22" y2="34" stroke="#84cc16" strokeWidth="0.7" />
            <line x1="22" y1="34" x2="28" y2="40" stroke="#84cc16" strokeWidth="0.7" />
            <circle cx="34" cy="22" r="2" fill="#84cc16" /><circle cx="22" cy="34" r="2" fill="#84cc16" />
            <circle cx="40" cy="28" r="1.4" fill="#84cc16" opacity="0.5" /><circle cx="28" cy="40" r="1.4" fill="#84cc16" opacity="0.5" />
          </svg>

          {/* Corner bracket — bottom-left */}
          <svg style={{ position: "absolute", bottom: 20, left: 20, width: 56, height: 56, opacity: 0.45, transform: "scaleY(-1)" }}
            viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" fill="none">
            <rect x="0" y="0" width="16" height="1.5" fill="#84cc16" />
            <rect x="0" y="0" width="1.5" height="16" fill="#84cc16" />
            <line x1="18" y1="22" x2="34" y2="22" stroke="#84cc16" strokeWidth="0.7" />
            <line x1="34" y1="22" x2="40" y2="28" stroke="#84cc16" strokeWidth="0.7" />
            <line x1="22" y1="18" x2="22" y2="34" stroke="#84cc16" strokeWidth="0.7" />
            <line x1="22" y1="34" x2="28" y2="40" stroke="#84cc16" strokeWidth="0.7" />
            <circle cx="34" cy="22" r="2" fill="#84cc16" /><circle cx="22" cy="34" r="2" fill="#84cc16" />
            <circle cx="40" cy="28" r="1.4" fill="#84cc16" opacity="0.5" /><circle cx="28" cy="40" r="1.4" fill="#84cc16" opacity="0.5" />
          </svg>

          {/* Corner bracket — bottom-right */}
          <svg style={{ position: "absolute", bottom: 20, right: 20, width: 56, height: 56, opacity: 0.45, transform: "scale(-1,-1)" }}
            viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" fill="none">
            <rect x="0" y="0" width="16" height="1.5" fill="#84cc16" />
            <rect x="0" y="0" width="1.5" height="16" fill="#84cc16" />
            <line x1="18" y1="22" x2="34" y2="22" stroke="#84cc16" strokeWidth="0.7" />
            <line x1="34" y1="22" x2="40" y2="28" stroke="#84cc16" strokeWidth="0.7" />
            <line x1="22" y1="18" x2="22" y2="34" stroke="#84cc16" strokeWidth="0.7" />
            <line x1="22" y1="34" x2="28" y2="40" stroke="#84cc16" strokeWidth="0.7" />
            <circle cx="34" cy="22" r="2" fill="#84cc16" /><circle cx="22" cy="34" r="2" fill="#84cc16" />
            <circle cx="40" cy="28" r="1.4" fill="#84cc16" opacity="0.5" /><circle cx="28" cy="40" r="1.4" fill="#84cc16" opacity="0.5" />
          </svg>

        </div>{/* end tech decorations */}

        <section className="pt-20 pb-10 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime-500/25 bg-lime-500/6 text-lime-400 text-[10px] font-bold tracking-widest uppercase mb-5">
              <Monitor className="w-3 h-3" />
              Interface · Qualquer dispositivo
            </div>
            <h2 className="section-title font-black leading-tight mb-4" style={{ fontSize: "clamp(2.4rem,5vw,4rem)" }}>
              <span className="text-white">Projetado para</span>{" "}
              <span className="text-gradient-green">qualquer tela.</span>
            </h2>
            <p className="text-white/60 text-base max-w-xl mx-auto">
              Do atendimento no consultório ao resgate em campo. A interface se adapta ao dispositivo sem perder nenhuma funcionalidade.
            </p>
          </motion.div>

          {/* Device switcher */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-10">
            {devices.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setDevice(id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  device === id
                    ? "bg-lime-500/15 border border-lime-500/35 text-lime-300"
                    : "border border-white/8 text-slate-500 hover:text-slate-300 hover:border-white/16"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </motion.div>

          {/* Device frame */}
          <motion.div variants={scaleIn} className="flex items-center justify-center">
            {/* Desktop — realistic laptop */}
            {device === "desktop" && (
              <div className="w-full max-w-3xl mx-auto" style={{ filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.7)) drop-shadow(0 0 80px rgba(74,222,128,0.07))" }}>

                {/* ── LID ── */}
                <div style={{
                  background: "linear-gradient(170deg, #2e2e30 0%, #1c1c1e 45%, #232325 100%)",
                  borderRadius: "14px 14px 3px 3px",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(0,0,0,0.5)",
                  position: "relative",
                }}>
                  {/* Top bezel — camera */}
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: 10, paddingBottom: 5 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2c2c2e", boxShadow: "0 0 0 1.5px rgba(255,255,255,0.06), inset 0 1px 2px rgba(0,0,0,0.8)" }} />
                  </div>
                  {/* Side bezels + screen */}
                  <div style={{ margin: "0 10px 8px 10px", borderRadius: "5px", overflow: "hidden", position: "relative", aspectRatio: "16/10", background: "#07100a" }}>
                    <motion.div key="desktop-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}
                      style={{ position: "absolute", inset: 0 }}>
                      {/* Browser chrome */}
                      <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", background: "#050c07", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,95,87,0.85)" }} />
                        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,188,46,0.85)" }} />
                        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(39,201,63,0.85)" }} />
                        <div style={{ flex: 1, maxWidth: 200, background: "rgba(255,255,255,0.05)", borderRadius: 4, padding: "2px 8px", marginLeft: 6 }}>
                          <span style={{ fontSize: 7, color: "#475569", fontFamily: "Inter, sans-serif" }}>app.vestris.com.br/clinico</span>
                        </div>
                        <div style={{ display: "flex", gap: 3, marginLeft: "auto" }}>
                          {[1,2,3].map(i => <div key={i} style={{ width: 18, height: 9, borderRadius: 2, background: "rgba(255,255,255,0.03)" }} />)}
                        </div>
                      </div>
                      <div style={{ position: "absolute", inset: 0, top: 24 }}>
                        <SystemUI />
                      </div>
                    </motion.div>
                  </div>
                  {/* Apple-style logo hint on outer lid face (bottom strip) */}
                  <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 16, height: 3, borderRadius: "2px 2px 0 0", background: "rgba(255,255,255,0.04)" }} />
                </div>

                {/* ── HINGE ── */}
                <div style={{ height: 5, background: "linear-gradient(180deg, #111113 0%, #191919 100%)", position: "relative", zIndex: 1 }} />

                {/* ── BASE ── */}
                <div style={{
                  background: "linear-gradient(175deg, #272729 0%, #1d1d1f 55%, #232325 100%)",
                  borderRadius: "0 0 14px 14px",
                  padding: "12px 18px 16px",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), 0 2px 0 rgba(0,0,0,0.3)",
                  position: "relative",
                }}>
                  {/* Speaker dots — left */}
                  <div style={{ position: "absolute", left: 16, top: 14, display: "flex", flexDirection: "column", gap: 2.5 }}>
                    {[0,1,2,3].map(i => (
                      <div key={i} style={{ display: "flex", gap: 2 }}>
                        {[0,1,2].map(j => <div key={j} style={{ width: 2, height: 2, borderRadius: "50%", background: "rgba(0,0,0,0.5)" }} />)}
                      </div>
                    ))}
                  </div>
                  {/* Speaker dots — right */}
                  <div style={{ position: "absolute", right: 16, top: 14, display: "flex", flexDirection: "column", gap: 2.5 }}>
                    {[0,1,2,3].map(i => (
                      <div key={i} style={{ display: "flex", gap: 2 }}>
                        {[0,1,2].map(j => <div key={j} style={{ width: 2, height: 2, borderRadius: "50%", background: "rgba(0,0,0,0.5)" }} />)}
                      </div>
                    ))}
                  </div>

                  {/* Keyboard */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 2.5, marginBottom: 10 }}>
                    {/* Function row — smaller */}
                    <div style={{ display: "flex", gap: 1.5 }}>
                      {[3.2, 1, 1, 1, 1, 0.6, 1, 1, 1, 1, 0.6, 1, 1, 1, 1, 1.8].map((flex, i) => (
                        <div key={i} style={{ flex, height: 5, background: "rgba(0,0,0,0.38)", borderRadius: 2, border: "1px solid rgba(255,255,255,0.04)" }} />
                      ))}
                    </div>
                    {/* Number row */}
                    <div style={{ display: "flex", gap: 1.5 }}>
                      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.9].map((flex, i) => (
                        <div key={i} style={{ flex, height: 8, background: "rgba(0,0,0,0.33)", borderRadius: 2.5, border: "1px solid rgba(255,255,255,0.05)", boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)" }} />
                      ))}
                    </div>
                    {/* QWERTY + Tab/backslash */}
                    <div style={{ display: "flex", gap: 1.5 }}>
                      {[1.6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.4].map((flex, i) => (
                        <div key={i} style={{ flex, height: 8, background: "rgba(0,0,0,0.33)", borderRadius: 2.5, border: "1px solid rgba(255,255,255,0.05)", boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)" }} />
                      ))}
                    </div>
                    {/* ASDF + Caps/Enter */}
                    <div style={{ display: "flex", gap: 1.5 }}>
                      {[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.1].map((flex, i) => (
                        <div key={i} style={{ flex, height: 8, background: "rgba(0,0,0,0.33)", borderRadius: 2.5, border: "1px solid rgba(255,255,255,0.05)", boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)" }} />
                      ))}
                    </div>
                    {/* ZXCV + Shift */}
                    <div style={{ display: "flex", gap: 1.5 }}>
                      {[2.6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.4].map((flex, i) => (
                        <div key={i} style={{ flex, height: 8, background: "rgba(0,0,0,0.33)", borderRadius: 2.5, border: "1px solid rgba(255,255,255,0.05)", boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)" }} />
                      ))}
                    </div>
                    {/* Bottom row — ctrl/opt/cmd/space/arrows */}
                    <div style={{ display: "flex", gap: 1.5 }}>
                      {[1.2, 1.2, 1.4, 5.5, 1.2, 1.2, 0.9, 0.9].map((flex, i) => (
                        <div key={i} style={{ flex, height: 8, background: "rgba(0,0,0,0.33)", borderRadius: 2.5, border: "1px solid rgba(255,255,255,0.05)", boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)" }} />
                      ))}
                    </div>
                  </div>

                  {/* Trackpad */}
                  <div style={{
                    width: "36%",
                    margin: "0 auto",
                    height: 42,
                    background: "rgba(0,0,0,0.28)",
                    borderRadius: 7,
                    border: "1px solid rgba(255,255,255,0.045)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02), 0 1px 3px rgba(0,0,0,0.4)",
                  }} />
                </div>

                {/* Table shadow */}
                <div style={{ height: 14, background: "radial-gradient(ellipse 85% 100% at 50% 0%, rgba(0,0,0,0.45) 0%, transparent 100%)", marginTop: 1 }} />
              </div>
            )}

            {/* Tablet */}
            {device === "tablet" && (
              <div className="w-full max-w-[340px]" style={{ filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.7)) drop-shadow(0 0 60px rgba(74,222,128,0.08))" }}>
                <div style={{
                  background: "linear-gradient(160deg, #2e2e30 0%, #1e1e20 100%)",
                  borderRadius: 28,
                  padding: "14px 8px 14px 8px",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(0,0,0,0.4)",
                  position: "relative",
                }}>
                  {/* Power button */}
                  <div style={{ position: "absolute", right: -3, top: 80, width: 3, height: 28, background: "#141416", borderRadius: "0 3px 3px 0" }} />
                  {/* Volume buttons */}
                  <div style={{ position: "absolute", left: -3, top: 70, width: 3, height: 18, background: "#141416", borderRadius: "3px 0 0 3px" }} />
                  <div style={{ position: "absolute", left: -3, top: 96, width: 3, height: 18, background: "#141416", borderRadius: "3px 0 0 3px" }} />
                  {/* Camera strip */}
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2a2a2c", boxShadow: "0 0 0 1.5px rgba(255,255,255,0.06)" }} />
                  </div>
                  {/* Screen */}
                  <div style={{ borderRadius: 14, overflow: "hidden", aspectRatio: "3/4", background: "#07100a", position: "relative" }}>
                    <motion.div key="tablet-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}
                      style={{ position: "absolute", inset: 0 }}>
                      <SystemUI />
                    </motion.div>
                  </div>
                  {/* Home indicator */}
                  <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
                    <div style={{ width: 40, height: 4, borderRadius: 4, background: "rgba(255,255,255,0.15)" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Mobile — iPhone 15 Pro */}
            {device === "mobile" && (
              <div className="w-full max-w-[260px]" style={{ filter: "drop-shadow(0 50px 70px rgba(0,0,0,0.85)) drop-shadow(0 0 100px rgba(74,222,128,0.08))" }}>
                {/* Titanium outer frame */}
                <div style={{
                  position: "relative",
                  borderRadius: 52,
                  padding: 4,
                  background: "linear-gradient(145deg, #48484a 0%, #3a3a3c 25%, #2c2c2e 50%, #3a3a3c 75%, #48484a 100%)",
                  boxShadow: [
                    "0 0 0 0.5px rgba(255,255,255,0.18)",
                    "inset 0 1px 0 rgba(255,255,255,0.22)",
                    "inset 0 -1px 0 rgba(0,0,0,0.6)",
                    "inset 1px 0 0 rgba(255,255,255,0.1)",
                    "inset -1px 0 0 rgba(0,0,0,0.4)",
                  ].join(", "),
                }}>
                  {/* Action button — left top */}
                  <div style={{ position: "absolute", left: -5, top: 82, width: 5, height: 20, borderRadius: "4px 0 0 4px",
                    background: "linear-gradient(90deg, #3a3a3c, #48484a)",
                    boxShadow: "-1px 0 0 rgba(255,255,255,0.12), -2px 0 4px rgba(0,0,0,0.5)" }} />
                  {/* Volume up — left */}
                  <div style={{ position: "absolute", left: -5, top: 112, width: 5, height: 32, borderRadius: "4px 0 0 4px",
                    background: "linear-gradient(90deg, #3a3a3c, #48484a)",
                    boxShadow: "-1px 0 0 rgba(255,255,255,0.12), -2px 0 4px rgba(0,0,0,0.5)" }} />
                  {/* Volume down — left */}
                  <div style={{ position: "absolute", left: -5, top: 152, width: 5, height: 32, borderRadius: "4px 0 0 4px",
                    background: "linear-gradient(90deg, #3a3a3c, #48484a)",
                    boxShadow: "-1px 0 0 rgba(255,255,255,0.12), -2px 0 4px rgba(0,0,0,0.5)" }} />
                  {/* Power button — right */}
                  <div style={{ position: "absolute", right: -5, top: 118, width: 5, height: 52, borderRadius: "0 4px 4px 0",
                    background: "linear-gradient(270deg, #3a3a3c, #48484a)",
                    boxShadow: "1px 0 0 rgba(255,255,255,0.12), 2px 0 4px rgba(0,0,0,0.5)" }} />

                  {/* Glass body */}
                  <div style={{ borderRadius: 48, overflow: "hidden", background: "#1c1c1e", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.9)" }}>
                    {/* Status + Dynamic Island area */}
                    <div style={{ background: "#050c07" }}>
                      {/* Dynamic Island */}
                      <div style={{ display: "flex", justifyContent: "center", paddingTop: 10, paddingBottom: 6 }}>
                        <div style={{
                          width: 92, height: 24, borderRadius: 22,
                          background: "#000",
                          boxShadow: "0 0 0 1px rgba(0,0,0,1), inset 0 0 0 0.5px rgba(255,255,255,0.04)",
                          display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                        }}>
                          <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#141414",
                            boxShadow: "0 0 0 1.5px rgba(255,255,255,0.04), inset 0 0 5px rgba(0,80,160,0.4)" }} />
                          <div style={{ width: 17, height: 17, borderRadius: "50%", background: "#111",
                            boxShadow: "0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 3px rgba(0,0,0,0.8)" }} />
                        </div>
                      </div>
                      {/* Status bar */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 18px 7px" }}>
                        <span style={{ fontSize: 8, fontWeight: 700, color: "rgba(255,255,255,0.88)", fontFamily: "Inter, sans-serif", letterSpacing: "-0.3px" }}>9:41</span>
                        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                          <div style={{ display: "flex", gap: 1.5, alignItems: "flex-end" }}>
                            {[4, 6, 8, 10].map((h, i) => (
                              <div key={i} style={{ width: 2.5, height: h, borderRadius: 1.5, background: i < 3 ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.22)" }} />
                            ))}
                          </div>
                          <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M6.5 8a1.1 1.1 0 110 2.2A1.1 1.1 0 016.5 8z" fill="rgba(255,255,255,0.88)"/>
                            <path d="M3.2 5.2C4.2 4.1 5.3 3.5 6.5 3.5c1.2 0 2.3.6 3.3 1.7" stroke="rgba(255,255,255,0.88)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
                            <path d="M.5 2.5C2 1 4.1.1 6.5.1c2.4 0 4.5.9 6 2.4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
                          </svg>
                          <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <div style={{ width: 18, height: 9, borderRadius: 3, border: "1px solid rgba(255,255,255,0.5)", padding: 1.5, display: "flex", alignItems: "stretch" }}>
                              <div style={{ width: "82%", borderRadius: 1, background: "rgba(255,255,255,0.88)" }} />
                            </div>
                            <div style={{ width: 2, height: 4, borderRadius: 1, background: "rgba(255,255,255,0.38)" }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* App screen content */}
                    <div style={{ position: "relative", aspectRatio: "9/17", background: "#07100a" }}>
                      <motion.div key="mobile-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}
                        style={{ position: "absolute", inset: 0 }}>
                        <SystemUI />
                      </motion.div>
                    </div>

                    {/* Home indicator */}
                    <div style={{ background: "#07100a", paddingTop: 6, paddingBottom: 10, display: "flex", justifyContent: "center" }}>
                      <div style={{ width: 54, height: 5, borderRadius: 5, background: "rgba(255,255,255,0.3)" }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </section>
      </div>{/* end relative wrapper */}
    </>
  );
}

export function GlobalVestris() {
  return (
    <PageLayout>
      <Hero />
      <QuemSomos />
      <Ecossistema />
      <PorQueVestris />
      <Visao />
      <DeviceMockup />
      <Depoimentos />
      <CTAFinal />
    </PageLayout>
  );
}
