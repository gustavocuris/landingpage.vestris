import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, GraduationCap, HeartHandshake, Microscope, Stethoscope } from "lucide-react";
import type { Product } from "@/data/products";

const iconById = {
  clinico: Stethoscope,
  lab: FlaskConical,
  student: GraduationCap,
  cetas: Microscope,
  ongs: HeartHandshake,
};

const accentByColor = {
  emerald: "text-emerald-300 border-emerald-400/25 bg-emerald-400/10",
  blue: "text-blue-300 border-blue-400/25 bg-blue-400/10",
  violet: "text-violet-300 border-violet-400/25 bg-violet-400/10",
  amber: "text-amber-300 border-amber-400/25 bg-amber-400/10",
  rose: "text-rose-300 border-rose-400/25 bg-rose-400/10",
};

export function SystemCard({ product }: { product: Product }) {
  const Icon = iconById[product.id as keyof typeof iconById] ?? Stethoscope;
  const accent = accentByColor[product.color];

  return (
    <Link
      to={product.path}
      className="group flex h-full flex-col rounded-lg border border-white/8 bg-black/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/35 hover:bg-black/60 hover:shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className={`rounded-lg border p-3 ${accent}`}>
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300">
          {product.statusLabel}
        </span>
      </div>

      <div className="mt-6 flex-1">
        <h3 className="section-title text-xl font-black uppercase leading-tight text-white">
          {product.shortName}
        </h3>
        <p className="mt-3 text-sm font-semibold text-lime-100">
          {product.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {product.description}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-lime-300">
        {product.ctaLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
