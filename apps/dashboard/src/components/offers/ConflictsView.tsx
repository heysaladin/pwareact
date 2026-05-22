'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const conflicts = [
  {
    offer1: 'Gov Employees 0.5% Rate Cut',
    offer2: 'High SIMAH Premium Rate',
    overlap: 'Overlap: Gov employees with SIMAH >= 700',
    resolution: 'Resolution: Priority: Gov Employees wins (P:10 vs P:7)',
  },
  {
    offer1: 'New User Cashback',
    offer2: 'Flash Eid 48hr Deal',
    overlap: 'Overlap: New users during Eid flash period',
    resolution: 'Resolution: Stackable: Both apply (different stacking groups)',
  },
];

const priorities = [
  { name: 'Gov Employees Rate Cut', priority: 10, stacking: 'Exclusive', group: 'rate_discounts', max: '0.75%' },
  { name: 'High SIMAH Premium',     priority: 7,  stacking: 'Exclusive', group: 'rate_discounts', max: '0.50%' },
  { name: 'New User Cashback',       priority: 8,  stacking: 'Stackable', group: 'cashback',       max: '1,000 SAR' },
  { name: 'Flash Eid Deal',          priority: 9,  stacking: 'Stackable', group: 'fee_waivers',    max: '100%' },
];

export default function ConflictsView() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-[#101828] dark:text-white">Conflict Resolution & Stacking</h1>
        <p className="text-sm text-[#667085] dark:text-slate-400 mt-1">Manage how your offers interact when a user qualifies for multiple</p>
      </div>

      {/* Detected Conflicts */}
      <Card>
        <div className="px-5 py-4 border-b border-[#eef1f6] dark:border-slate-800 flex items-center gap-2">
          <span className="text-sm font-semibold text-[#101828] dark:text-white">Detected Conflicts</span>
          <span className="px-2 py-0.5 rounded-full bg-[#FEF3F2] text-[#B42318] text-xs font-semibold">{conflicts.length}</span>
        </div>
        <CardContent className="border-none divide-y divide-[#eef1f6] dark:divide-slate-800">
          {conflicts.map((c) => (
            <div key={c.offer1} className="px-5 py-4">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className="px-2 py-0.5 rounded bg-[#FEF3F2] text-[#B42318] text-[10px] font-bold border border-[#FECDCA]">CONFLICT</span>
                <span className="text-sm font-medium text-[#101828] dark:text-white">{c.offer1}</span>
                <span className="text-xs text-[#667085]">vs</span>
                <span className="text-sm font-medium text-[#101828] dark:text-white">{c.offer2}</span>
              </div>
              <p className="text-xs text-[#667085]">{c.overlap}</p>
              <p className="text-xs text-[#34D399] mt-1 font-medium">{c.resolution}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Priority & Stacking Rules */}
      <Card>
        <div className="px-5 py-4 border-b border-[#eef1f6] dark:border-slate-800">
          <span className="text-sm font-semibold text-[#101828] dark:text-white">Offer Priority & Stacking Rules</span>
        </div>
        <CardContent className="border-none">
          {/* Table header */}
          <div className="grid grid-cols-[2fr_0.6fr_0.8fr_0.8fr_0.8fr] px-5 py-2.5 bg-[#f8fafc] dark:bg-slate-900 border-b border-[#eef1f6] dark:border-slate-800 text-[11px] font-semibold uppercase tracking-wide text-[#667085]">
            <span>Offer</span>
            <span>Priority</span>
            <span>Stacking</span>
            <span>Group</span>
            <span>Max Combined</span>
          </div>
          {priorities.map((p) => (
            <div
              key={p.name}
              className="grid grid-cols-[2fr_0.6fr_0.8fr_0.8fr_0.8fr] px-5 py-3.5 border-b border-[#eef1f6] dark:border-slate-800 last:border-0 items-center"
            >
              <span className="text-sm font-medium text-[#101828] dark:text-white">{p.name}</span>
              <span className="text-sm font-bold text-[#0063F5]">{p.priority}</span>
              <span className={`text-xs font-semibold ${p.stacking === 'Exclusive' ? 'text-[#EF4444]' : 'text-[#34D399]'}`}>
                {p.stacking}
              </span>
              <Badge variant="neutral" className="text-[10px] w-fit">{p.group}</Badge>
              <span className="text-sm text-[#667085]">{p.max}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
