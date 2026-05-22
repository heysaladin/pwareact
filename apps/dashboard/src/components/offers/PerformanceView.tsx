'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Pause, Pencil, Copy } from 'lucide-react';

const kpis = [
  { label: 'Impressions',  value: '12,340', delta: '▲ +24%',  color: 'text-[#0063F5]' },
  { label: 'Applications', value: '1,037',  delta: '▲ +18%',  color: 'text-[#818CF8]' },
  { label: 'Conversions',  value: '412',    delta: '▲ +31%',  color: 'text-[#34D399]' },
  { label: 'Conv. Rate',   value: '8.4%',   delta: '▲ +1.2pp',color: 'text-[#A78BFA]' },
  { label: 'Offer ROI',    value: '7.2x',   delta: '▲ +0.8x', color: 'text-[#F59E0B]' },
];

const segments = [
  { name: 'Government', pct: 62, color: '#0063F5' },
  { name: 'Military',   pct: 24, color: '#7C3AED' },
  { name: 'Healthcare', pct: 9,  color: '#06B6D4' },
  { name: 'Other',      pct: 5,  color: '#9aa4b2' },
];

const periods = ['7D', '14D', '30D'];

const chartPoints = [90,85,70,75,50,55,40,35,45,30,25,20,15,18,10];
const toPath = (pts: number[]) => {
  const w = 500, h = 120;
  return pts.map((p, i) => {
    const x = (i / (pts.length - 1)) * w;
    const y = (p / 100) * h;
    return `${i === 0 ? 'M' : 'L'}${x},${y}`;
  }).join(' ');
};

export default function PerformanceView({ onBack }: { onBack: () => void }) {
  const [period, setPeriod] = useState('14D');
  const linePath = toPath(chartPoints);
  const areaPath = `${linePath} L500,120 L0,120Z`;

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div>
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-xs text-[#667085] hover:text-[#344054] mb-2 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Back to offers
          </button>
          <h1 className="text-2xl font-bold text-[#101828] dark:text-white">Gov Employees 0.5% Rate Cut</h1>
          <div className="flex items-center gap-3 mt-1">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              <span className="text-xs text-[#34D399] font-medium">Active</span>
            </div>
            <span className="text-xs text-[#667085]">Mar 12 – Apr 12, 2026</span>
            <Badge variant="neutral" className="text-[10px]">RATE_DISCOUNT</Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5 text-[#F59E0B] border-[#F59E0B]/30 hover:bg-[#FFFAEB]">
            <Pause className="w-3.5 h-3.5" /> Pause
          </Button>
          <Button variant="outline" size="sm" className="gap-1.5"><Pencil className="w-3.5 h-3.5" /> Edit</Button>
          <Button variant="outline" size="sm" className="gap-1.5"><Copy className="w-3.5 h-3.5" /> Clone</Button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-5 gap-3">
        {kpis.map((k) => (
          <Card key={k.label} className="p-4 text-center flex flex-col gap-1">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[#667085]">{k.label}</p>
            <p className={`text-2xl font-bold ${k.color}`}>{k.value}</p>
            <p className="text-[10px] text-[#34D399]">{k.delta}</p>
          </Card>
        ))}
      </div>

      {/* Chart + Segments */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#eef1f6] dark:border-slate-800">
            <span className="text-sm font-semibold text-[#101828] dark:text-white">Daily Performance</span>
            <div className="flex gap-1.5">
              {periods.map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={cn(
                    'px-2.5 py-1 rounded text-xs font-medium border transition-all',
                    period === p
                      ? 'border-[#0063F5] bg-[#eff4ff] text-[#0063F5]'
                      : 'border-[#eef1f6] text-[#667085] hover:border-[#0063F5]/40 dark:border-slate-700'
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <CardContent className="border-none px-5 py-4">
            <svg viewBox="0 0 500 120" width="100%" height="120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0063F5" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#0063F5" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={areaPath} fill="url(#chartGrad)" />
              <path d={linePath} fill="none" stroke="#0063F5" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </CardContent>
        </Card>

        <Card>
          <div className="px-5 py-4 border-b border-[#eef1f6] dark:border-slate-800">
            <span className="text-sm font-semibold text-[#101828] dark:text-white">Segment Breakdown</span>
          </div>
          <CardContent className="border-none px-5 py-4 flex flex-col gap-3">
            {segments.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#344054] dark:text-slate-200">{s.name}</span>
                  <span className="font-semibold" style={{ color: s.color }}>{s.pct}%</span>
                </div>
                <div className="h-1.5 bg-[#eef1f6] dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Budget Status */}
      <Card className="px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-[#101828] dark:text-white">Budget Status</span>
          <span className="text-sm font-semibold text-[#F59E0B]">SAR 400,000 / 500,000 (80%)</span>
        </div>
        <div className="h-2 bg-[#eef1f6] dark:bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-[#0063F5] to-[#EF4444]" style={{ width: '80%' }} />
        </div>
        <div className="flex justify-between text-[10px] text-[#667085] mt-2">
          <span>412 of 1,000 redemptions used</span>
          <span>Est. exhaustion: Apr 5</span>
        </div>
      </Card>
    </div>
  );
}
