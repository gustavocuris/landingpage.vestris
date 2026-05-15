import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Product } from "@/data/products";

// ─── Color map ────────────────────────────────────────────────────────────────

const colorMap = {
  emerald: {
    border: "border-emerald-800/40",
    bg: "bg-emerald-950/15",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    btnPrimary: "bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-500/20 shadow-md",
    btnGhost: "border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/10",
  },
  blue: {
    border: "border-blue-800/40",
    bg: "bg-blue-950/15",
    accent: "text-blue-400",
    accentBg: "bg-blue-500/10",
    btnPrimary: "bg-blue-500 hover:bg-blue-400 text-white shadow-blue-500/20 shadow-md",
    btnGhost: "border border-blue-500/25 text-blue-400 hover:bg-blue-500/10",
  },
  violet: {
    border: "border-violet-800/40",
    bg: "bg-violet-950/15",
    accent: "text-violet-400",
    accentBg: "bg-violet-500/10",
    btnPrimary: "bg-violet-500 hover:bg-violet-400 text-white shadow-violet-500/20 shadow-md",
    btnGhost: "border border-violet-500/25 text-violet-400 hover:bg-violet-500/10",
  },
  amber: {
    border: "border-amber-800/40",
    bg: "bg-amber-950/15",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    btnPrimary: "bg-amber-500 hover:bg-amber-400 text-white shadow-amber-500/20 shadow-md",
    btnGhost: "border border-amber-500/25 text-amber-400 hover:bg-amber-500/10",
  },
  rose: {
    border: "border-rose-800/40",
    bg: "bg-rose-950/15",
    accent: "text-rose-400",
    accentBg: "bg-rose-500/10",
    btnPrimary: "bg-rose-500 hover:bg-rose-400 text-white shadow-rose-500/20 shadow-md",
    btnGhost: "border border-rose-500/25 text-rose-400 hover:bg-rose-500/10",
  },
} as const;

// ─── Standard card ─────────────────────────────────────────────────────────────

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const c = colorMap[product.color];

  return (
    <div
      className={`flex flex-col rounded-2xl border ${c.border} ${c.bg} p-6 hover:border-opacity-70 transition-colors`}
    >
      {/* Status */}
      <div className="flex items-start justify-between mb-5">
        <StatusBadge status={product.status} overrideLabel={product.statusLabel} />
      </div>

      {/* Tagline */}
      <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${c.accent}`}>
        {product.tagline}
      </p>

      {/* Name */}
      <h3 className="text-xl font-black text-white mb-3 leading-tight">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed flex-1">
        {product.description}
      </p>

      {/* CTA */}
      <Link
        to={product.path}
        className={`mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-colors ${c.btnPrimary}`}
      >
        {product.ctaLabel}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

// ─── Featured card (for the main product) ────────────────────────────────────

interface FeaturedProductCardProps {
  product: Product;
  highlights: string[];
}

export function FeaturedProductCard({ product, highlights }: FeaturedProductCardProps) {
  const c = colorMap[product.color];

  return (
    <div
      className={`rounded-2xl border ${c.border} ${c.bg} p-8 relative overflow-hidden`}
    >
      {/* Glow */}
      <div className={`absolute inset-0 opacity-30 bg-gradient-to-br from-emerald-950 to-transparent pointer-events-none`} />

      <div className="relative z-10 flex flex-col lg:flex-row gap-8">
        {/* Left */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
            <StatusBadge status={product.status} overrideLabel={product.statusLabel} />
            <span className={`text-xs font-bold uppercase tracking-wider ${c.accent}`}>
              Produto principal
            </span>
          </div>

          <h3 className="text-3xl font-black text-white leading-tight mb-3">
            {product.name}
          </h3>

          <p className={`text-sm font-semibold mb-3 ${c.accent}`}>
            {product.tagline}
          </p>

          <p className="text-slate-400 leading-relaxed mb-6">
            {product.description}
          </p>

          <Link
            to={product.path}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors ${c.btnPrimary}`}
          >
            {product.ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right: highlights */}
        <div className="lg:w-72 flex flex-col gap-2">
          {highlights.map((h) => (
            <div
              key={h}
              className={`px-4 py-3 rounded-xl ${c.accentBg} border ${c.border} text-sm text-slate-300`}
            >
              {h}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
