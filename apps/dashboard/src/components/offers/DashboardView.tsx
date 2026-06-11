'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const kpis = [
  { label: 'Active Offers',         value: '12',    sub: '+3 this week',          color: 'text-[#0063F5]', bg: 'bg-[#eff4ff]' },
  { label: 'SIMAH Gate Conversion', value: '11.4%', sub: 'Target: >15%',          color: 'text-[#7C3AED]', bg: 'bg-[#f5f3ff]' },
  { label: 'Offer-Influenced Conv.', value: '34%',  sub: 'Target: >40%',          color: 'text-[#0891B2]', bg: 'bg-[#ecfeff]' },
  { label: 'Budget Utilized',       value: '68%',   sub: 'SAR 340K / 500K',       color: 'text-[#D97706]', bg: 'bg-[#fffbeb]' },
  { label: 'Avg Offers / Search',   value: '2.6',   sub: 'Target: 2–4',           color: 'text-[#059669]', bg: 'bg-[#ecfdf5]' },
  { label: 'Rejection Recovery',    value: '21%',   sub: 'Target: >25%',          color: 'text-[#DC2626]', bg: 'bg-[#fef2f2]' },
];

const topOffers = [
  { name: 'Gov Employees 0.5% Rate Cut',  type: 'RATE_DISCOUNT',    conv: '8.4%', reach: '12.3K', status: 'ACTIVE' },
  { name: 'Aramco Exclusive Fee Waiver',  type: 'FEE_WAIVER',       conv: '7.1%', reach: '4.8K',  status: 'ACTIVE' },
  { name: 'New User Welcome Cashback',    type: 'CASHBACK',          conv: '5.9%', reach: '18.1K', status: 'ACTIVE' },
  { name: 'High SIMAH Premium Rate',      type: 'RATE_DISCOUNT',    conv: '5.2%', reach: '9.7K',  status: 'PAUSED' },
  { name: 'Flash Eid 48hr Deal',          type: 'RATE_DISCOUNT',    conv: '—',    reach: '—',     status: 'SCHEDULED' },
];

const funnel = [
  { label: 'Impressions',          value: '45,200', pct: 100, color: '#0063F5' },
  { label: 'Clicks',               value: '8,136',  pct: 56,  color: '#7C3AED' },
  { label: 'Applications Started', value: '3,254',  pct: 35,  color: '#0891B2' },
  { label: 'Approvals',            value: '1,692',  pct: 16,  color: '#059669' },
  { label: 'Disbursements',        value: '1,354',  pct: 10,  color: '#34D399' },
];

const activity = [
  { dot: '#34D399', msg: "Offer 'Flash Eid Deal' activated",                     time: '2 min ago' },
  { dot: '#D97706', msg: "Budget alert: 'Gov Employees Rate Cut' at 80%",        time: '1 hr ago' },
  { dot: '#0063F5', msg: "'New User Cashback' reached 500 redemptions",          time: '3 hrs ago' },
  { dot: '#7C3AED', msg: "New SIMAH-triggered offer unlocked for 1,240 users",   time: '5 hrs ago' },
  { dot: '#DC2626', msg: "Offer 'Ramadan Special' exhausted budget — terminal",  time: 'Yesterday' },
];

const statusStyle: Record<string, { dot: string; text: string }> = {
  ACTIVE:    { dot: '#34D399', text: 'text-[#067647]' },
  PAUSED:    { dot: '#D97706', text: 'text-[#b54708]' },
  SCHEDULED: { dot: '#0063F5', text: 'text-[#0063F5]' },
  DRAFT:     { dot: '#9aa4b2', text: 'text-[#667085]' },
  EXPIRED:   { dot: '#9aa4b2', text: 'text-[#667085]' },
  EXHAUSTED: { dot: '#DC2626', text: 'text-[#DC2626]' },
};

const typeColor: Record<string, string> = {
  RATE_DISCOUNT:   'bg-blue-50 text-blue-700',
  FEE_WAIVER:      'bg-violet-50 text-violet-700',
  CASHBACK:        'bg-green-50 text-green-700',
  TENURE_EXTENSION:'bg-cyan-50 text-cyan-700',
  LIMIT_INCREASE:  'bg-amber-50 text-amber-700',
};

export default function DashboardView({ onCreateOffer, onViewOffer }: { onCreateOffer: () => void; onViewOffer: () => void }) {
  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[22px] font-bold text-[#101828] dark:text-white">Offers Dashboard</h1>
          <p className="text-sm text-[#667085] dark:text-slate-400 mt-0.5">Overview of your active offers and platform-level performance</p>
        </div>
        <Button onClick={onCreateOffer} className="gap-2 text-sm">
          <Plus className="w-4 h-4" /> New Offer
        </Button>
      </div>

      {/* KPI grid */}
      <div className="grid grid-cols-3 gap-3">
        {kpis.map((k) => (
          <Card key={k.label} className="px-5 py-4 flex items-center gap-4">
            <div className={`w-9 h-9 rounded-lg ${k.bg} flex items-center justify-center shrink-0`}>
              <span className={`text-base font-bold ${k.color}`}>#</span>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-[#667085] dark:text-slate-400 leading-tight">{k.label}</p>
              <p className={`text-[22px] font-bold leading-tight ${k.color}`}>{k.value}</p>
              <p className="text-[10px] text-[#9aa4b2] dark:text-slate-500">{k.sub}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Top offers + funnel */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <div className="px-5 py-3.5 border-b border-[#eef1f6] dark:border-slate-800 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[#101828] dark:text-white">Top Performing Offers</h3>
            <button onClick={onViewOffer} className="text-xs text-[#0063F5] font-medium hover:underline">View all →</button>
          </div>
          <CardContent className="border-none divide-y divide-[#eef1f6] dark:divide-slate-800 p-0">
            {topOffers.map((o) => {
              const s = statusStyle[o.status];
              return (
                <div key={o.name} className="flex items-center gap-3 px-5 py-3 hover:bg-[#f8fafc] dark:hover:bg-slate-900/40 cursor-pointer transition-colors" onClick={onViewOffer}>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-[#101828] dark:text-white truncate">{o.name}</p>
                    <span className={`inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded mt-1 ${typeColor[o.type] ?? 'bg-gray-50 text-gray-600'}`}>{o.type}</span>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-[#34D399]">{o.conv}</p>
                    <p className="text-[10px] text-[#9aa4b2]">{o.reach} reach</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.dot }} />
                    <span className={`text-[10px] font-semibold ${s.text}`}>{o.status}</span>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <div className="px-5 py-3.5 border-b border-[#eef1f6] dark:border-slate-800">
            <h3 className="text-sm font-semibold text-[#101828] dark:text-white">Offer Conversion Funnel</h3>
            <p className="text-[11px] text-[#667085] mt-0.5">Impressions → Disbursements</p>
          </div>
          <CardContent className="border-none px-5 py-4 flex flex-col gap-3">
            {funnel.map((f, i) => (
              <div key={f.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#667085]">{f.label}</span>
                  <span className="font-semibold text-[#344054] dark:text-slate-200">{f.value}</span>
                </div>
                <div className="h-2 bg-[#eef1f6] dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${f.pct}%`, background: f.color }} />
                </div>
                {i < funnel.length - 1 && (
                  <p className="text-[10px] text-[#9aa4b2] mt-0.5 text-right">
                    {Math.round((funnel[i + 1].pct / f.pct) * 100)}% pass-through
                  </p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <div className="px-5 py-3.5 border-b border-[#eef1f6] dark:border-slate-800">
          <h3 className="text-sm font-semibold text-[#101828] dark:text-white">Recent Activity</h3>
        </div>
        <CardContent className="border-none divide-y divide-[#eef1f6] dark:divide-slate-800 p-0">
          {activity.map((a) => (
            <div key={a.msg} className="flex items-center gap-3 px-5 py-3">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: a.dot }} />
              <span className="flex-1 text-[13px] text-[#344054] dark:text-slate-300">{a.msg}</span>
              <span className="text-[11px] text-[#9aa4b2] shrink-0">{a.time}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
