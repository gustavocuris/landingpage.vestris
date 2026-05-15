import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { Network, Activity, Shield, Globe, ArrowUpRight } from "lucide-react";

const systemStatus = [
  { id: "clinico", label: "Sistema Clínico", status: "ONLINE", dot: "bg-lime-400", text: "text-lime-400", pulse: true },
  { id: "lab", label: "Vestris Lab", status: "DEV", dot: "bg-blue-400", text: "text-blue-400", pulse: false },
  { id: "student", label: "Student", status: "PLANNED", dot: "bg-slate-600", text: "text-slate-600", pulse: false },
  { id: "cetas", label: "CETAS/ZOO", status: "PLANNED", dot: "bg-slate-600", text: "text-slate-600", pulse: false },
  { id: "ongs", label: "ONGs", status: "PLANNED", dot: "bg-slate-600", text: "text-slate-600", pulse: false },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: "rgba(2,6,4,0.97)", backdropFilter: "blur(16px)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>

      {/* Platform status bar */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", backgroundColor: "rgba(255,255,255,0.015)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Activity className="w-3 h-3 text-lime-400" />
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Platform Status</span>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            {systemStatus.map((s) => (
              <div key={s.id} className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.dot} ${s.pulse ? "animate-pulse" : ""}`} />
                <span className="text-[9px] text-slate-500 font-mono">{s.label}</span>
                <span className={`text-[8px] font-bold uppercase tracking-wide ${s.text}`}>{s.status}</span>
              </div>
            ))}
          </div>
          <div className="sm:ml-auto text-[9px] font-mono text-slate-600 uppercase tracking-widest whitespace-nowrap">
            Uptime 99.9% · v1.0.0
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-lime-400 flex items-center justify-center shadow-lg shadow-lime-900/30">
                <span className="text-black text-xs font-black">V</span>
              </div>
              <div>
                <span className="block font-black text-white tracking-tight leading-none">VESTRIS</span>
                <span className="text-[8px] font-mono text-lime-600 uppercase tracking-[0.2em]">Global Ecosystem</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-6">
              O primeiro ecossistema tecnologico para medicina de silvestres e exoticos do Brasil.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[{ icon: Shield, label: "Dados seguros" }, { icon: Globe, label: "Brasil" }, { icon: Network, label: "5 modulos" }].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] text-slate-500 font-semibold uppercase tracking-wider" style={{ border: "1px solid rgba(255,255,255,0.07)", backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <Icon className="w-2.5 h-2.5" />{label}
                </span>
              ))}
            </div>
            <div className="flex gap-5">
              {["Instagram", "Documentacao", "Contato"].map((l) => (
                <a key={l} href="#" className="text-xs text-slate-600 hover:text-lime-400 transition-colors flex items-center gap-0.5 group">
                  {l}<ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Ecossistema */}
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.18em] mb-6">Ecossistema</p>
            <div className="space-y-3">
              {products.map((m) => (
                <Link key={m.id} to={m.path} className="flex items-center gap-2.5 group">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${m.status === "active" ? "bg-lime-400 animate-pulse" : m.status === "dev" ? "bg-blue-400" : "bg-slate-700"}`} />
                  <span className="text-sm text-slate-400 group-hover:text-white transition-colors">{m.shortName}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Plataforma */}
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.18em] mb-6">Plataforma</p>
            <div className="space-y-3">
              {[
                { label: "Sistema Clinico", to: "/clinico" },
                { label: "Ver planos", to: "/clinico" },
                { label: "Acesso antecipado", to: "/clinico" },
                { label: "Login", to: "#" },
              ].map((item) => (
                <Link key={item.label} to={item.to} className="block text-sm text-slate-400 hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.18em] mb-6">Roadmap</p>
            <div className="space-y-3">
              {[
                { label: "Sistema Clinico", note: "ONLINE", color: "text-lime-500", noteBg: "rgba(74,222,128,0.1)", noteBorder: "rgba(74,222,128,0.2)" },
                { label: "Vestris Lab", note: "Q3 2026", color: "text-blue-400", noteBg: "rgba(96,165,250,0.08)", noteBorder: "rgba(96,165,250,0.15)" },
                { label: "Student", note: "Q4 2026", color: "text-violet-400", noteBg: "rgba(167,139,250,0.08)", noteBorder: "rgba(167,139,250,0.15)" },
                { label: "CETAS/ZOO", note: "2027", color: "text-amber-400", noteBg: "rgba(251,191,36,0.07)", noteBorder: "rgba(251,191,36,0.14)" },
                { label: "ONGs", note: "2027", color: "text-orange-400", noteBg: "rgba(251,146,60,0.07)", noteBorder: "rgba(251,146,60,0.14)" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-3">
                  <span className="text-sm text-slate-400">{item.label}</span>
                  <span className={`text-[9px] font-bold font-mono px-1.5 py-0.5 rounded ${item.color}`} style={{ backgroundColor: item.noteBg, border: `1px solid ${item.noteBorder}` }}>
                    {item.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-8" style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.05)" }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <p className="text-xs text-slate-600">© {year} Vestris. Todos os direitos reservados.</p>
            <span className="hidden sm:inline text-slate-800">·</span>
            <p className="text-xs text-slate-700 font-mono">CNPJ em registro · Brasil</p>
          </div>
          <div className="flex items-center gap-2 text-[9px] font-mono text-slate-600 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            Clinical Infrastructure · Wildlife Medicine
          </div>
        </div>
      </div>
    </footer>
  );
}