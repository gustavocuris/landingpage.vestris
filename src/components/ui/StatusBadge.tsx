import type { ModuleStatus } from "@/data/index";

const config: Record<
  ModuleStatus,
  { label: string; dot: string; text: string; bg: string; border: string }
> = {
  active: {
    label: "Disponível",
    dot: "bg-emerald-400",
    text: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/25",
  },
  dev: {
    label: "Em desenvolvimento",
    dot: "bg-blue-400",
    text: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/25",
  },
  planned: {
    label: "Planejado",
    dot: "bg-slate-400",
    text: "text-slate-400",
    bg: "bg-slate-400/10",
    border: "border-slate-400/20",
  },
};

interface StatusBadgeProps {
  status: ModuleStatus;
  overrideLabel?: string;
  className?: string;
}

export function StatusBadge({
  status,
  overrideLabel,
  className = "",
}: StatusBadgeProps) {
  const c = config[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${c.text} ${c.bg} ${c.border} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {overrideLabel ?? c.label}
    </span>
  );
}
