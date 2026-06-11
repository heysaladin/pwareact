'use client';
import { Card, CardContent } from '@/components/ui/card';

const conflicts = [
  {
    offer1: 'Gov Employees 0.5% Rate Cut',
    offer2: 'High SIMAH Premium Rate',
    overlap: 'Segment overlap: government employees with SIMAH ≥ 700',
    resolution: 'Priority resolves: "Gov Employees" wins (P:10 vs P:7)',
    both: 'rate_discounts group — exclusive, only highest priority applies',
    ok: true,
  },
  {
    offer1: 'New User Welcome Cashback',
    offer2: 'Flash Eid 48hr Deal',
    overlap: 'Time overlap: new users during Eid flash window',
    resolution: 'Different stacking groups (cashback vs rate_discounts) — both apply',
    both: 'Fully stackable across groups',
    ok: true,
  },
  {
    offer1: 'Aramco Exclusive Fee Waiver',
    offer2: 'DBR Relief Tenure Extension',
    overlap: 'Aramco employees near DBR limit qualify for both',
    resolution: 'Different benefit types, different groups — both apply',
    both: 'Stacking order: RATE → FEE → CASHBACK → TENURE → LIMIT',
    ok: true,
  },
];

const stackingRules = [
  { name: 'Gov Employees Rate Cut',    priority: 10, policy: 'Exclusive',       group: 'rate_discounts', type: 'RATE_DISCOUNT',    max: '0.75%',       stackable: false },
  { name: 'High SIMAH Premium Rate',   priority: 7,  policy: 'Exclusive',       group: 'rate_discounts', type: 'RATE_DISCOUNT',    max: '0.50%',       stackable: false },
  { name: 'New User Cashback',         priority: 8,  policy: 'Group Stackable', group: 'cashback',       type: 'CASHBACK',         max: '1,000 SAR',   stackable: true  },
  { name: 'Flash Eid 48hr Deal',       priority: 9,  policy: 'Group Stackable', group: 'fee_waivers',    type: 'FEE_WAIVER',       max: '100%',        stackable: true  },
  { name: 'DBR Relief Tenure Ext.',    priority: 6,  policy: 'Fully Stackable', group: 'tenure',         type: 'TENURE_EXTENSION', max: '+12 months',  stackable: true  },
  { name: 'Prime Borrower Limit Boost',priority: 5,  policy: 'Fully Stackable', group: 'limits',         type: 'LIMIT_INCREASE',   max: 'SAR 50,000',  stackable: true  },
];

const TYPE_COLOR: Record<string, string> = {
  RATE_DISCOUNT:    'bg-blue-50 text-blue-700',
  FEE_WAIVER:       'bg-violet-50 text-violet-700',
  CASHBACK:         'bg-green-50 text-green-700',
  TENURE_EXTENSION: 'bg-cyan-50 text-cyan-700',
  LIMIT_INCREASE:   'bg-amber-50 text-amber-700',
};

const POLICY_STYLE: Record<string, string> = {
  'Exclusive':       'text-[#DC2626] bg-[#fef2f2]',
  'Group Stackable': 'text-[#D97706] bg-[#fffbeb]',
  'Fully Stackable': 'text-[#34D399] bg-[#ecfdf5]',
};

export default function ConflictsView() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <div>
        <h1 className="text-[22px] font-bold text-[#101828] dark:text-white">Conflict Resolution & Stacking</h1>
        <p className="text-sm text-[#667085] mt-0.5">Manage how your offers interact when a user qualifies for multiple</p>
      </div>

      {/* Engine pipeline note */}
      <div className="bg-[#eff4ff] dark:bg-blue-950/40 border border-[#0063F5]/20 rounded-xl px-4 py-3 flex flex-col gap-1">
        <p className="text-sm font-semibold text-[#0063F5]">Resolution Pipeline</p>
        <p className="text-xs text-[#667085]">
          Evaluation order: <strong>priority</strong> → <strong>discount_value</strong> → <strong>created_at</strong>.
          If any offer has <code className="bg-[#dbeafe] px-1 rounded">stackable=false</code>, it overrides all — only the highest-priority exclusive applies.
          Offers in different stacking groups always stack. Stacking application order: RATE → FEE → CASHBACK → TENURE → LIMIT.
        </p>
      </div>

      {/* Detected conflicts */}
      <Card>
        <div className="px-5 py-3.5 border-b border-[#eef1f6] dark:border-slate-800 flex items-center gap-2">
          <span className="text-sm font-semibold text-[#101828] dark:text-white">Detected Conflicts</span>
          <span className="px-2 py-0.5 rounded-full bg-[#FEF3F2] text-[#DC2626] text-[10px] font-bold border border-[#FECDCA]">
            {conflicts.length} detected
          </span>
          <span className="ml-1 px-2 py-0.5 rounded-full bg-[#ecfdf5] text-[#067647] text-[10px] font-bold border border-[#a7f3d0]">
            All auto-resolved
          </span>
        </div>
        <CardContent className="border-none divide-y divide-[#eef1f6] dark:divide-slate-800 p-0">
          {conflicts.map((c) => (
            <div key={c.offer1} className="px-5 py-4 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-bold bg-[#FEF3F2] text-[#DC2626] border border-[#FECDCA] px-2 py-0.5 rounded">CONFLICT</span>
                <span className="text-sm font-medium text-[#101828] dark:text-white">{c.offer1}</span>
                <span className="text-xs text-[#9aa4b2]">vs</span>
                <span className="text-sm font-medium text-[#101828] dark:text-white">{c.offer2}</span>
              </div>
              <p className="text-xs text-[#667085]">{c.overlap}</p>
              <p className="text-xs font-medium text-[#34D399]">✓ {c.resolution}</p>
              <p className="text-[10px] text-[#9aa4b2]">{c.both}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Priority & stacking table */}
      <Card>
        <div className="px-5 py-3.5 border-b border-[#eef1f6] dark:border-slate-800">
          <span className="text-sm font-semibold text-[#101828] dark:text-white">Offer Priority & Stacking Rules</span>
        </div>
        <CardContent className="border-none p-0">
          <div className="grid grid-cols-[2fr_60px_110px_130px_120px_90px_80px] px-5 py-2.5 bg-[#f8fafc] dark:bg-slate-900 border-b border-[#eef1f6] dark:border-slate-800 text-[10px] font-semibold uppercase tracking-wide text-[#9aa4b2]">
            <span>Offer</span>
            <span>P</span>
            <span>Type</span>
            <span>Policy</span>
            <span>Group</span>
            <span>Max Benefit</span>
            <span>Stacks?</span>
          </div>
          {stackingRules.map((r) => (
            <div
              key={r.name}
              className="grid grid-cols-[2fr_60px_110px_130px_120px_90px_80px] px-5 py-3.5 border-b border-[#eef1f6] dark:border-slate-800 last:border-0 items-center"
            >
              <span className="text-[13px] font-medium text-[#101828] dark:text-white">{r.name}</span>
              <span className="text-sm font-bold text-[#0063F5]">{r.priority}</span>
              <span className={`text-[10px] font-semibold px-2 py-1 rounded w-fit ${TYPE_COLOR[r.type] ?? ''}`}>{r.type}</span>
              <span className={`text-[11px] font-semibold px-2 py-1 rounded w-fit ${POLICY_STYLE[r.policy] ?? ''}`}>{r.policy}</span>
              <code className="text-[11px] text-[#667085] dark:text-slate-400">{r.group}</code>
              <span className="text-[12px] text-[#344054] dark:text-slate-200 font-medium">{r.max}</span>
              <span className={`text-[11px] font-semibold ${r.stackable ? 'text-[#34D399]' : 'text-[#DC2626]'}`}>
                {r.stackable ? 'Yes' : 'No'}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
