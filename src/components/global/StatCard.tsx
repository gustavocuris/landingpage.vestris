interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-lg border border-white/8 bg-white/3 p-4">
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </div>
    </div>
  );
}
