'use client';
import SARSymbol from '@/components/ui/SARSymbol';

type StatCardProps = {
  label: string;
  value: string;
  variant?: 'yellow' | 'blue' | 'white';
  isCurrency?: boolean;
};

function StatCard({ label, value, variant = 'white', isCurrency = false }: StatCardProps) {
  const bg =
    variant === 'yellow'
      ? 'bg-[#fd3]'
      : variant === 'blue'
      ? 'bg-[#0063f5]'
      : 'bg-white border border-[#eef1f6] dark:bg-slate-900 dark:border-slate-800';

  const labelColor =
    variant === 'yellow'
      ? 'text-[#4b5565]'
      : variant === 'blue'
      ? 'text-[#bbd5fb]'
      : 'text-[#697586] dark:text-slate-400';

  const valueColor =
    variant === 'yellow'
      ? 'text-[#121a26]'
      : variant === 'blue'
      ? 'text-white'
      : 'text-black dark:text-slate-100';

  return (
    <div className={`flex flex-col gap-1.5 flex-1 px-6 pt-6 pb-4 rounded-[6px] ${bg}`}>
      <p className={`text-[16px] font-semibold uppercase ${labelColor}`}>{label}</p>
      <p className={`text-[40px] font-bold leading-[1.35] flex items-center gap-2 ${valueColor}`}>
        {isCurrency && <SARSymbol className="w-7 h-7 shrink-0" />}
        {value}
      </p>
    </div>
  );
}

export default function StatsRow() {
  return (
    <div className="flex gap-4 w-full">
      <StatCard label="Total Amount Received" value="4,536,054.60" isCurrency variant="yellow" />
      <StatCard label="Total Orders" value="33" variant="blue" />
      <StatCard label="SLA Breached" value="8" />
      <StatCard label="Critical / High" value="10" />
      <StatCard label="New Queue" value="6" />
      <StatCard label="Avg AI Score" value="80" />
    </div>
  );
}
