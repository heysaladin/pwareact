'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Pause, Pencil, Copy } from 'lucide-react';

const kpis = [
  { label: 'Impressions',   value: '12,340', delta: '+24%',   color: 'text-[#0063F5]',  bg: 'bg-[#eff4ff]' },
  { label: 'Click-Through', value: '8.1%',   delta: '+1.4pp', color: 'text-[#7C3AED]',  bg: 'bg-[#f5f3ff]' },
  { label: 'Applications',  value: '1,037',  delta: '+18%',   color: 'text-[#0891B2]',  bg: 'bg-[#ecfeff]' },
  { label: 'Conversions',   value: '412',    delta: '+31%',   color: 'text-[#34D399]',  bg: 'bg-[#ecfdf5]' },
  { label: 'Conv. Rate',    value: '8.4%',   delta: '+1.2pp', color: 'text-[#059669]',  bg: 'bg-[#ecfdf5]' },
  { label: 'Offer ROI',     value: '7.2×',   delta: '+0.8×',  color: 'text-[#D97706]',  bg: 'bg-[#fffbeb]' },
];

const funnel = [
  { label: 'Impressions',          value: 12340, color: '#0063F5' },
  { label: 'Clicks',               value: 1001,  color: '#7C3AED' },
  { label: 'Applications Started', value: 511,   color: '#0891B2' },
  { label: 'Approvals',            value: 441,   color: '#059669' },
  { label: 'Disbursements',        value: 412,   color: '#34D399' },
];

const segments = [
  { name: 'Government',  pct: 62, color: '#0063F5' },
  { name: 'Military',    pct: 24, color: '#7C3AED' },
  { name: 'Healthcare',  pct: 9,  color: '#0891B2' },
  { name: 'Other',       pct: 5,  color: '#9aa4b2' },
];

const PERIODS = ['7D', '14D', '30D'];

const chartData: Record<string, number[]> = {
  '7D':  [40, 55, 50, 70, 65, 80, 75],
  '14D': [30, 35, 45, 40, 55, 50, 70, 65, 80, 75, 85, 78, 90, 88],
  '30D': Array.from({ length: 30 }, (_, i) => Math.round(20 + i * 2.2 + Math.sin(i * 0.8) * 12)),
};

function SparkLine({ points }: { points: number[] }) {
  const w = 500, h = 100;
  const max = Math.max(...points);
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - (p / max) * h * 0.9 - 5;
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    })
    .join(' ');
  const area = `${path} L${w},${h} L0,${h}Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="perfGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0063F5" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0063F5" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#perfGrad)" />
      <path d={path} fill="none" stroke="#0063F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PerformanceView({ onBack }: { onBack: () => void }) {
  const [period, setPeriod] = useState('14D');

  const maxFunnel = funnel[0].value;

  return (
    <div className="p-6 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <button onClick={onBack} className="flex items-center gap-1 text-xs text-[#9aa4b2] hover:text-[#344054] mb-2 transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" /> Back to offers
          </button>
          <h1 className="text-[22px] font-bold text-[#101828] dark:text-white">Gov Employees 0.5% Rate Cut</h1>
          <div className="flex items-center gap-3 mt-1 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              <span className="text-xs font-semibold text-[#067647]">ACTIVE</span>
            </div>
            <span className="text-xs text-[#9aa4b2]">Jun 15 – Jul 15, 2026</span>
            <span className="text-[10px] font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded">RATE_DISCOUNT</span>
            <span className="text-[10px] font-semibold bg-[#f5f3ff] text-[#7C3AED] px-2 py-0.5 rounded">Priority: 10</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5 text-[#D97706] border-[#D97706]/30 hover:bg-[#fffbeb]">
            <Pause className="w-3.5 h-3.5" /> Pause
          </Button>
          <Button variant="outline" size="sm" className="gap-1.5"><Pencil className="w-3.5 h-3.5" /> Edit</Button>
          <Button variant="outline" size="sm" className="gap-1.5"><Copy className="w-3.5 h-3.5" /> Clone</Button>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-6 gap-3">
        {kpis.map((k) => (
          <Card key={k.label} className={`p-3 text-center flex flex-col gap-1 border-0 ${k.bg}`}>
            <p className="text-[9px] font-semibold uppercase tracking-wide text-[#9aa4b2]">{k.label}</p>
            <p className={`text-xl font-bold ${k.color}`}>{k.value}</p>
            <p className="text-[10px] text-[#34D399] font-medium">▲ {k.delta}</p>
          </Card>
        ))}
      </div>

      {/* Chart + funnel */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#eef1f6] dark:border-slate-800">
            <div>
              <span className="text-sm font-semibold text-[#101828] dark:text-white">Daily Impressions</span>
              <p className="text-[11px] text-[#9aa4b2] mt-0.5">Trend over selected period</p>
            </div>
            <div className="flex gap-1">
              {PERIODS.map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={cn(
                    'px-2.5 py-1 rounded text-xs font-medium border transition-all',
                    period === p ? 'border-[#0063F5] bg-[#eff4ff] text-[#0063F5]' : 'border-[#eef1f6] text-[#9aa4b2] hover:border-[#0063F5]/40 dark:border-slate-700'
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <CardContent className="border-none px-5 py-4">
            <SparkLine points={chartData[period]} />
          </CardContent>
        </Card>

        {/* Conversion Funnel */}
        <Card>
          <div className="px-5 py-3.5 border-b border-[#eef1f6] dark:border-slate-800">
            <span className="text-sm font-semibold text-[#101828] dark:text-white">Conversion Funnel</span>
            <p className="text-[11px] text-[#9aa4b2] mt-0.5">Impressions → Disbursements</p>
          </div>
          <CardContent className="border-none px-5 py-4 flex flex-col gap-2">
            {funnel.map((f, i) => (
              <div key={f.label}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-[#667085]">{f.label}</span>
                  <div className="flex items-center gap-2">
                    {i > 0 && (
                      <span className="text-[10px] text-[#9aa4b2]">
                        {Math.round((f.value / funnel[i - 1].value) * 100)}% pass
                      </span>
                    )}
                    <span className="font-semibold text-[#344054] dark:text-slate-200">
                      {f.value.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-[#eef1f6] dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${(f.value / maxFunnel) * 100}%`, background: f.color }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Segment + ROI */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <div className="px-5 py-3.5 border-b border-[#eef1f6] dark:border-slate-800">
            <span className="text-sm font-semibold text-[#101828] dark:text-white">Segment Breakdown</span>
          </div>
          <CardContent className="border-none px-5 py-4 flex flex-col gap-3">
            {segments.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#344054] dark:text-slate-200">{s.name}</span>
                  <span className="font-semibold" style={{ color: s.color }}>{s.pct}%</span>
                </div>
                <div className="h-2 bg-[#eef1f6] dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* ROI Calculator */}
        <Card>
          <div className="px-5 py-3.5 border-b border-[#eef1f6] dark:border-slate-800">
            <span className="text-sm font-semibold text-[#101828] dark:text-white">ROI Calculator</span>
          </div>
          <CardContent className="border-none px-5 py-4 flex flex-col gap-3">
            {[
              { label: 'Revenue from Converted Loans', value: 'SAR 2,884,000', color: 'text-[#34D399]' },
              { label: 'Discount Cost (disbursed)',     value: '− SAR 400,000', color: 'text-[#DC2626]' },
              { label: 'Net Offer ROI',                 value: '7.2×',          color: 'text-[#D97706]', bold: true },
            ].map((r) => (
              <div key={r.label} className="flex justify-between items-center py-2 border-b border-[#eef1f6] dark:border-slate-800 last:border-0">
                <span className="text-xs text-[#667085]">{r.label}</span>
                <span className={`text-sm ${r.color} ${r.bold ? 'font-bold text-base' : 'font-medium'}`}>{r.value}</span>
              </div>
            ))}
            <p className="text-[10px] text-[#9aa4b2]">
              Formula: (revenue from converted loans − discount cost) / discount cost
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Budget Status */}
      <Card className="px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-[#101828] dark:text-white">Budget Status</span>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-[#D97706]">SAR 400,000 / 500,000 (80%)</span>
            <span className="text-xs text-[#9aa4b2]">412 / 1,000 redemptions</span>
          </div>
        </div>
        <div className="h-2.5 bg-[#eef1f6] dark:bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-[#0063F5] to-[#D97706]" style={{ width: '80%' }} />
        </div>
        <div className="flex justify-between text-[10px] text-[#9aa4b2] mt-2">
          <span>Budget pacing: Even distribution</span>
          <span className="font-medium text-[#D97706]">Est. exhaustion: Jul 9 — budget alert at 80%</span>
        </div>
      </Card>
    </div>
  );
}
