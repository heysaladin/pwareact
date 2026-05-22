'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

type KpiCardProps = { label: string; value: string; change: string; valueColor: string };

function KpiCard({ label, value, change, valueColor }: KpiCardProps) {
  return (
    <Card className="px-5 py-4 flex flex-col gap-1.5">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-[#667085] dark:text-slate-400">{label}</p>
      <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
      <p className="text-xs text-[#667085] dark:text-slate-400">{change}</p>
    </Card>
  );
}

const topOffers = [
  { name: 'Gov Employees 0.5% Rate Cut', type: 'RATE_DISCOUNT', conv: '8.4%', views: '12.3K views', active: true },
  { name: 'Aramco Exclusive Fee Waiver', type: 'FEE_WAIVER', conv: '7.1%', views: '4.8K views', active: true },
  { name: 'New User Welcome Cashback', type: 'CASHBACK', conv: '5.9%', views: '18.1K views', active: true },
  { name: 'High SIMAH Rate Discount', type: 'RATE_DISCOUNT', conv: '5.2%', views: '9.7K views', active: false },
];

const funnel = [
  { label: 'Impressions', value: '45,200', pct: 100, color: '#0063F5' },
  { label: 'Click-through', value: '8,136', pct: 56, color: '#818CF8' },
  { label: 'Application Started', value: '3,254', pct: 35, color: '#A78BFA' },
  { label: 'Application Submitted', value: '2,115', pct: 22, color: '#C084FC' },
  { label: 'Approved', value: '1,692', pct: 16, color: '#E879F9' },
  { label: 'Disbursed', value: '1,354', pct: 10, color: '#34D399' },
];

const activity = [
  { dot: '#34D399', text: "Offer 'Flash Eid Deal' activated", time: '2 min ago' },
  { dot: '#F59E0B', text: "Budget alert: 'Gov Employees Rate Cut' at 80%", time: '1 hr ago' },
  { dot: '#0063F5', text: "'New User Cashback' reached 500 redemptions", time: '3 hrs ago' },
  { dot: '#EF4444', text: "Offer 'Ramadan Special' expired", time: 'Yesterday' },
];

export default function DashboardView({
  onCreateOffer,
}: {
  onCreateOffer: () => void;
  onViewPerformance: () => void;
}) {
  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#101828] dark:text-white">Offers Dashboard</h1>
          <p className="text-sm text-[#667085] dark:text-slate-400 mt-1">Overview of your active offers and performance</p>
        </div>
        <Button onClick={onCreateOffer} className="gap-2">
          <Plus className="w-4 h-4" />
          New Offer
        </Button>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-4 gap-4">
        <KpiCard label="Active Offers" value="12" change="+3 this week" valueColor="text-[#0063F5]" />
        <KpiCard label="Total Impressions" value="45.2K" change="+18% vs last week" valueColor="text-[#34D399]" />
        <KpiCard label="Conversion Rate" value="6.8%" change="+1.2pp vs avg" valueColor="text-[#A78BFA]" />
        <KpiCard label="Budget Utilized" value="68%" change="SAR 340K / 500K" valueColor="text-[#F59E0B]" />
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-2 gap-4">
        {/* Top Offers */}
        <Card>
          <div className="px-5 py-4 border-b border-[#eef1f6] dark:border-slate-800">
            <h3 className="text-sm font-semibold text-[#101828] dark:text-white">Top Performing Offers</h3>
          </div>
          <CardContent className="border-none divide-y divide-[#eef1f6] dark:divide-slate-800">
            {topOffers.map((o) => (
              <div key={o.name} className="flex items-center gap-3 px-5 py-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#101828] dark:text-white truncate">{o.name}</p>
                  <Badge variant="neutral" className="mt-1 text-[10px]">{o.type}</Badge>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-[#34D399]">{o.conv}</p>
                  <p className="text-[10px] text-[#667085]">{o.views}</p>
                </div>
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: o.active ? '#34D399' : '#F59E0B' }}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Funnel */}
        <Card>
          <div className="px-5 py-4 border-b border-[#eef1f6] dark:border-slate-800">
            <h3 className="text-sm font-semibold text-[#101828] dark:text-white">Offer Conversion Funnel</h3>
          </div>
          <CardContent className="border-none px-5 py-4 flex flex-col gap-3">
            {funnel.map((f) => (
              <div key={f.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#667085]">{f.label}</span>
                  <span className="font-medium text-[#344054] dark:text-slate-200">{f.value}</span>
                </div>
                <div className="h-1.5 bg-[#eef1f6] dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${f.pct}%`, background: f.color }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <div className="px-5 py-4 border-b border-[#eef1f6] dark:border-slate-800">
          <h3 className="text-sm font-semibold text-[#101828] dark:text-white">Recent Activity</h3>
        </div>
        <CardContent className="border-none divide-y divide-[#eef1f6] dark:divide-slate-800">
          {activity.map((a) => (
            <div key={a.text} className="flex items-center gap-3 px-5 py-3">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: a.dot }} />
              <span className="flex-1 text-sm text-[#344054] dark:text-slate-300">{a.text}</span>
              <span className="text-xs text-[#667085] shrink-0">{a.time}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
