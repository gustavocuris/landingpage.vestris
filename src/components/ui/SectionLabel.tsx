interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-xs font-semibold tracking-[0.1em] uppercase mb-4 ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
      {children}
    </div>
  );
}
