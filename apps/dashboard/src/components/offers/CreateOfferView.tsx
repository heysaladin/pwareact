'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, AlertTriangle, Info } from 'lucide-react';

/* ── Constants ────────────────────────────────────────────────────────────── */

const STEPS = [
  'Basic Configuration',
  'Eligibility Rules',
  'Budget & Limits',
  'Conflict & Stacking',
  'Display & Visibility',
  'Review & Approval',
];

const OFFER_TYPES = [
  {
    id: 'RATE_DISCOUNT',
    label: 'Rate Discount',
    desc: 'Reduce APR for eligible borrowers',
    color: 'blue',
  },
  {
    id: 'FEE_WAIVER',
    label: 'Fee Waiver',
    desc: 'Waive processing or admin fees',
    color: 'violet',
  },
  {
    id: 'CASHBACK',
    label: 'Cashback',
    desc: 'Post-disbursement reward, lowest fraud risk',
    color: 'green',
  },
  {
    id: 'TENURE_EXTENSION',
    label: 'Tenure Extension',
    desc: 'Extend repayment period → lower EMI & DBR',
    color: 'cyan',
  },
  {
    id: 'LIMIT_INCREASE',
    label: 'Limit Increase',
    desc: 'Boost loan limit for prime borrowers',
    color: 'amber',
  },
  {
    id: 'BUNDLE',
    label: 'Bundle (Phase 2)',
    desc: 'Combine multiple benefit types',
    color: 'gray',
    disabled: true,
  },
];

const TYPE_COLOR: Record<string, string> = {
  blue:   'border-blue-400 bg-blue-50 dark:bg-blue-950',
  violet: 'border-violet-400 bg-violet-50 dark:bg-violet-950',
  green:  'border-green-400 bg-green-50 dark:bg-green-950',
  cyan:   'border-cyan-400 bg-cyan-50 dark:bg-cyan-950',
  amber:  'border-amber-400 bg-amber-50 dark:bg-amber-950',
  gray:   'border-gray-200 bg-gray-50 dark:bg-slate-900 opacity-50',
};
const TYPE_TEXT: Record<string, string> = {
  blue: 'text-blue-700', violet: 'text-violet-700', green: 'text-green-700',
  cyan: 'text-cyan-700', amber: 'text-amber-700',   gray: 'text-gray-400',
};

const DIMENSIONS = [
  'Salary Range', 'SIMAH Score', 'Employment Sector', 'Employer',
  'Loan Amount', 'Loan Purpose', 'Debt-to-Burden Ratio (DBR)',
  'Behavior Signal', 'Region', 'Nationality', 'Age Range',
];

const OPERATORS = ['>=', '<=', '=', 'IN', 'NOT IN', 'BETWEEN'];

/* ── Shared primitives ────────────────────────────────────────────────────── */

const inputCls = 'w-full h-9 px-3 border border-[#d5d7da] rounded-lg text-sm text-[#344054] bg-white dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200 outline-none focus:ring-1 focus:ring-[#0063F5] focus:border-[#0063F5]';
const selectCls = inputCls;

function Field({ label, hint, children, className }: { label: string; hint?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label className="text-xs font-medium text-[#344054] dark:text-slate-300">
        {label}
        {hint && <span className="ml-1.5 text-[10px] text-[#9aa4b2] font-normal">{hint}</span>}
      </label>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9aa4b2] dark:text-slate-500 mb-3">{children}</p>;
}

/* ── Offer type conditional params ───────────────────────────────────────── */

function TypeParams({ type }: { type: string }) {
  if (type === 'RATE_DISCOUNT') return (
    <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 rounded-xl p-4 flex flex-col gap-3">
      <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">Rate Discount Parameters</p>
      <div className="grid grid-cols-3 gap-3">
        <Field label="Discount Value">
          <div className="relative">
            <input className={cn(inputCls, 'pr-8')} defaultValue="0.50" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9aa4b2]">%</span>
          </div>
        </Field>
        <Field label="Discount Unit">
          <select className={selectCls}>
            <option>PERCENTAGE</option>
            <option>BASIS_POINTS</option>
          </select>
        </Field>
        <Field label="Regulatory Floor" hint="read-only">
          <div className="h-9 px-3 border border-[#eef1f6] rounded-lg bg-[#f8fafc] dark:bg-slate-900 dark:border-slate-700 flex items-center text-sm text-[#9aa4b2]">
            4.0% (from product catalog)
          </div>
        </Field>
      </div>
      <p className="text-[11px] text-blue-600 dark:text-blue-400">
        Formula: <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">final_rate = max(base_rate − discount_value, regulatory_floor)</code>
      </p>
    </div>
  );

  if (type === 'FEE_WAIVER') return (
    <div className="bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-900 rounded-xl p-4 flex flex-col gap-3">
      <p className="text-xs font-semibold text-violet-700 dark:text-violet-300">Fee Waiver Parameters</p>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Waiver Type">
          <select className={selectCls}>
            <option>Full waiver (100%)</option>
            <option>Partial waiver (%)</option>
          </select>
        </Field>
        <Field label="Waiver Amount" hint="if partial">
          <div className="relative">
            <input className={cn(inputCls, 'pr-8')} defaultValue="50" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9aa4b2]">%</span>
          </div>
        </Field>
      </div>
      <p className="text-[11px] text-violet-600 dark:text-violet-400">Provider absorbs fee cost. Co-absorption with Tamawal subject to commercial terms.</p>
    </div>
  );

  if (type === 'CASHBACK') return (
    <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-900 rounded-xl p-4 flex flex-col gap-3">
      <p className="text-xs font-semibold text-green-700 dark:text-green-300">Cashback Parameters</p>
      <div className="grid grid-cols-3 gap-3">
        <Field label="Cashback Amount">
          <input className={inputCls} defaultValue="500" />
        </Field>
        <Field label="Unit">
          <select className={selectCls}>
            <option>FIXED_AMOUNT (SAR)</option>
            <option>PERCENTAGE</option>
          </select>
        </Field>
        <Field label="Trigger">
          <div className="h-9 px-3 border border-[#eef1f6] rounded-lg bg-[#f8fafc] dark:bg-slate-900 dark:border-slate-700 flex items-center text-sm text-[#9aa4b2]">
            disbursement_confirmed
          </div>
        </Field>
      </div>
      <p className="text-[11px] text-green-600 dark:text-green-400">Lowest fraud risk — cashback activates only after confirmed disbursement webhook.</p>
    </div>
  );

  if (type === 'TENURE_EXTENSION') return (
    <div className="bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-900 rounded-xl p-4 flex flex-col gap-3">
      <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300">Tenure Extension Parameters</p>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Extension (months)">
          <div className="relative">
            <input className={cn(inputCls, 'pr-14')} defaultValue="12" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9aa4b2]">months</span>
          </div>
        </Field>
        <Field label="Max Extended Tenure">
          <div className="relative">
            <input className={cn(inputCls, 'pr-14')} defaultValue="60" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9aa4b2]">months</span>
          </div>
        </Field>
      </div>
      <p className="text-[11px] text-cyan-600 dark:text-cyan-400">Longer tenure lowers EMI → helps borrowers near DBR regulatory limit qualify.</p>
    </div>
  );

  if (type === 'LIMIT_INCREASE') return (
    <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 rounded-xl p-4 flex flex-col gap-3">
      <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">Limit Increase Parameters</p>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Increase Value">
          <input className={inputCls} defaultValue="50,000" />
        </Field>
        <Field label="Unit">
          <select className={selectCls}>
            <option>FIXED_AMOUNT (SAR)</option>
            <option>PERCENTAGE</option>
          </select>
        </Field>
      </div>
      <p className="text-[11px] text-amber-600 dark:text-amber-400">Target prime borrowers (high SIMAH, high salary, low existing commitment) to prevent split loans.</p>
    </div>
  );

  return null;
}

/* ── Step 1: Basic Configuration ────────────────────────────────────────── */

function Step1({ offerType, setOfferType }: { offerType: string; setOfferType: (t: string) => void }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <Field label="Offer Name (English)">
          <input className={inputCls} placeholder="e.g., Government Employee Rate Discount" />
        </Field>
        <Field label="Offer Name (Arabic)" >
          <input className={inputCls} placeholder="مثال: خصم موظفي الحكومة" dir="rtl" />
        </Field>
      </div>

      <div>
        <SectionLabel>Select Offer Type</SectionLabel>
        <div className="grid grid-cols-3 gap-3">
          {OFFER_TYPES.map((t) => (
            <button
              key={t.id}
              disabled={t.disabled}
              onClick={() => !t.disabled && setOfferType(t.id)}
              className={cn(
                'p-3.5 rounded-xl border-2 text-left transition-all',
                offerType === t.id
                  ? TYPE_COLOR[t.color]
                  : 'border-[#eef1f6] bg-white dark:bg-slate-900 dark:border-slate-700 hover:border-[#0063F5]/40',
                t.disabled && 'cursor-not-allowed'
              )}
            >
              <p className={cn('text-sm font-semibold', offerType === t.id ? TYPE_TEXT[t.color] : 'text-[#101828] dark:text-white')}>
                {t.label}
              </p>
              <p className="text-xs text-[#667085] mt-0.5 leading-tight">{t.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {offerType && <TypeParams type={offerType} />}

      <div className="grid grid-cols-2 gap-4">
        <Field label="Product Scope">
          <select className={selectCls}>
            <option>All Products</option>
            <option>Personal Loan — Tamweel Plus</option>
            <option>Auto Loan — Standard</option>
            <option>Mortgage — Fixed Rate</option>
            <option>Home Equity Loan</option>
          </select>
        </Field>
        <Field label="Priority" hint="higher = preferred in conflict resolution">
          <input className={inputCls} type="number" defaultValue="10" min="1" max="100" />
        </Field>
        <Field label="Valid From">
          <input type="date" className={inputCls} defaultValue="2026-06-15" />
        </Field>
        <Field label="Valid To" hint="leave empty = open-ended">
          <input type="date" className={inputCls} defaultValue="2026-07-15" />
        </Field>
      </div>
    </div>
  );
}

/* ── Step 2: Eligibility Rule Builder ────────────────────────────────────── */

type RuleNode =
  | { id: string; kind: 'group'; logic: 'AND' | 'OR'; children: RuleNode[] }
  | { id: string; kind: 'condition'; dimension: string; operator: string; value: string };

let uid = 0;
const newId = () => String(++uid);

const defaultRule = (): RuleNode => ({
  id: newId(),
  kind: 'group',
  logic: 'AND',
  children: [
    { id: newId(), kind: 'condition', dimension: 'Salary Range', operator: '>=', value: '10,000' },
    {
      id: newId(),
      kind: 'group',
      logic: 'OR',
      children: [
        { id: newId(), kind: 'condition', dimension: 'Employment Sector', operator: 'IN', value: 'government, military' },
        { id: newId(), kind: 'condition', dimension: 'SIMAH Score', operator: '>=', value: '700' },
      ],
    },
    { id: newId(), kind: 'condition', dimension: 'Loan Amount', operator: '>=', value: '50,000' },
  ],
});

function RuleRow({ node, onRemove }: { node: Extract<RuleNode, { kind: 'condition' }>; onRemove: () => void }) {
  return (
    <div className="flex items-center gap-2 p-2 bg-white dark:bg-slate-950 rounded-lg border border-[#eef1f6] dark:border-slate-800">
      <select defaultValue={node.dimension} className="text-xs border border-[#d5d7da] dark:border-slate-700 rounded px-2 py-1 bg-white dark:bg-slate-900 text-[#344054] dark:text-slate-200 outline-none w-44">
        {DIMENSIONS.map((d) => <option key={d}>{d}</option>)}
      </select>
      <select defaultValue={node.operator} className="text-xs border border-[#d5d7da] dark:border-slate-700 rounded px-2 py-1 bg-white dark:bg-slate-900 text-[#344054] dark:text-slate-200 outline-none w-20">
        {OPERATORS.map((op) => <option key={op}>{op}</option>)}
      </select>
      <input
        defaultValue={node.value}
        className="flex-1 min-w-0 text-xs border border-[#d5d7da] dark:border-slate-700 rounded px-2 py-1 bg-white dark:bg-slate-900 text-[#0063F5] font-semibold outline-none focus:border-[#0063F5]"
      />
      <button onClick={onRemove} className="text-[#9aa4b2] hover:text-[#DC2626] transition-colors text-base px-1 shrink-0">×</button>
    </div>
  );
}

function RuleGroup({ node, depth = 0, onRemove }: { node: Extract<RuleNode, { kind: 'group' }>; depth?: number; onRemove?: () => void }) {
  const [children, setChildren] = useState<RuleNode[]>(node.children);
  const [logic, setLogic] = useState<'AND' | 'OR'>(node.logic);

  const addCondition = () =>
    setChildren((prev) => [...prev, { id: newId(), kind: 'condition', dimension: 'Salary Range', operator: '>=', value: '' }]);
  const addGroup = () =>
    setChildren((prev) => [...prev, { id: newId(), kind: 'group', logic: 'OR', children: [] }]);
  const remove = (id: string) => setChildren((prev) => prev.filter((c) => c.id !== id));

  const borderColor = logic === 'AND' ? 'border-[#0063F5]/30' : 'border-[#34D399]/40';
  const badgeBg     = logic === 'AND' ? 'bg-[#0063F5]' : 'bg-[#34D399]';
  const containerBg = logic === 'AND' ? 'bg-[#f8fafc] dark:bg-slate-900' : 'bg-white dark:bg-slate-950';
  const addBtnColor = logic === 'AND' ? 'text-[#0063F5] border-[#0063F5]/30 hover:bg-[#0063F5]/5' : 'text-[#34D399] border-[#34D399]/30 hover:bg-[#34D399]/5';

  return (
    <div className={cn('border-2 rounded-xl p-3 flex flex-col gap-2', borderColor, containerBg, depth > 0 && 'ml-5')}>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setLogic((l) => (l === 'AND' ? 'OR' : 'AND'))}
          className={cn('px-2 py-0.5 rounded text-white text-xs font-bold transition-colors', badgeBg)}
          title="Click to toggle AND/OR"
        >
          {logic}
        </button>
        <span className="text-xs text-[#9aa4b2]">
          {logic === 'AND' ? 'All conditions must match' : 'Any condition can match'}
        </span>
        {depth > 0 && onRemove && (
          <button onClick={onRemove} className="ml-auto text-[#9aa4b2] hover:text-[#DC2626] text-sm px-1">×</button>
        )}
      </div>

      {children.map((child) =>
        child.kind === 'condition' ? (
          <RuleRow key={child.id} node={child} onRemove={() => remove(child.id)} />
        ) : (
          <RuleGroup key={child.id} node={child} depth={depth + 1} onRemove={() => remove(child.id)} />
        )
      )}

      <div className="flex gap-2 mt-1">
        <button onClick={addCondition} className={cn('text-xs border border-dashed px-3 py-1.5 rounded-lg transition-colors', addBtnColor)}>
          + Condition
        </button>
        {depth < 2 && (
          <button onClick={addGroup} className="text-xs border border-dashed border-[#9aa4b2]/40 text-[#9aa4b2] px-3 py-1.5 rounded-lg hover:bg-[#f8fafc] transition-colors">
            + Nested Group
          </button>
        )}
      </div>
    </div>
  );
}

function Step2() {
  const [root] = useState<Extract<RuleNode, { kind: 'group' }>>(defaultRule as unknown as Extract<RuleNode, { kind: 'group' }>);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 p-3 bg-[#eff4ff] dark:bg-blue-950/40 border border-[#0063F5]/20 rounded-xl">
        <Info className="w-4 h-4 text-[#0063F5] shrink-0" />
        <p className="text-xs text-[#0063F5]">
          Build eligibility conditions using 11 dimensions. Click <strong>AND/OR</strong> to toggle group logic.
        </p>
      </div>
      <RuleGroup node={root as Extract<RuleNode, { kind: 'group' }>} />
      <div className="flex items-center justify-between bg-[#eff4ff] dark:bg-blue-950/50 border border-[#0063F5]/20 rounded-xl px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-[#0063F5]">Estimated Reach</p>
          <p className="text-xs text-[#667085] mt-0.5">Based on historical Tamawal user data · refreshed nightly</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-[#0063F5]">~14,200</p>
          <p className="text-[10px] text-[#9aa4b2]">matching users / month</p>
        </div>
      </div>
    </div>
  );
}

/* ── Step 3: Budget & Limits ─────────────────────────────────────────────── */

function Step3() {
  const [pacing, setPacing] = useState<'even' | 'burst'>('even');

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <Field label="Total Budget Cap" hint="blank = unlimited">
          <div className="relative">
            <input className={cn(inputCls, 'pr-12')} defaultValue="500,000" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9aa4b2]">SAR</span>
          </div>
        </Field>
        <Field label="Max Redemptions" hint="blank = unlimited">
          <div className="relative">
            <input className={cn(inputCls, 'pr-14')} defaultValue="1,000" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9aa4b2]">uses</span>
          </div>
        </Field>
        <Field label="Per-User Limit">
          <div className="relative">
            <input className={cn(inputCls, 'pr-[70px]')} defaultValue="1" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9aa4b2]">per user</span>
          </div>
        </Field>
        <Field label="Daily Cap">
          <div className="relative">
            <input className={cn(inputCls, 'pr-[70px]')} defaultValue="50" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9aa4b2]">per day</span>
          </div>
        </Field>
      </div>

      <Field label="Budget Pacing">
        <div className="grid grid-cols-2 gap-3">
          {[
            { id: 'even' as const,  label: 'Even Pacing',   desc: 'Distribute budget evenly over validity period' },
            { id: 'burst' as const, label: 'Burst (FCFS)',  desc: 'First-come first-served, spend as fast as possible' },
          ].map((p) => (
            <button
              key={p.id}
              onClick={() => setPacing(p.id)}
              className={cn(
                'p-3 rounded-xl border-2 text-left transition-all',
                pacing === p.id
                  ? 'border-[#0063F5] bg-[#eff4ff] dark:bg-blue-950'
                  : 'border-[#eef1f6] bg-white dark:bg-slate-900 dark:border-slate-700 hover:border-[#0063F5]/40'
              )}
            >
              <p className={cn('text-sm font-semibold', pacing === p.id ? 'text-[#0063F5]' : 'text-[#101828] dark:text-white')}>{p.label}</p>
              <p className="text-xs text-[#9aa4b2] mt-0.5">{p.desc}</p>
            </button>
          ))}
        </div>
      </Field>

      {/* Budget projection chart */}
      <div className="bg-[#f8fafc] dark:bg-slate-900 border border-[#eef1f6] dark:border-slate-800 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-[#101828] dark:text-white">Budget Projection</p>
          <span className="text-xs text-[#9aa4b2]">30-day estimate at current targeting</span>
        </div>
        <div className="flex items-end gap-0.5 h-16">
          {Array.from({ length: 30 }, (_, i) => {
            const h = Math.min(100, 12 + i * 3.0 + Math.sin(i * 0.7) * 7);
            return (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{ height: `${h}%`, background: h > 80 ? '#DC2626' : h > 55 ? '#D97706' : '#0063F5', opacity: 0.75 }}
              />
            );
          })}
        </div>
        <div className="flex justify-between text-[10px] text-[#9aa4b2] mt-1">
          <span>Day 1</span><span>Day 15</span><span>Day 30</span>
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <AlertTriangle className="w-3.5 h-3.5 text-[#D97706]" />
          <p className="text-xs text-[#D97706]">Projected to exhaust budget by Day 24 — consider tightening targeting or raising cap.</p>
        </div>
      </div>

      {/* Estimated reach summary */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Estimated Reach',      value: '~14,200',     unit: 'users / month' },
          { label: 'Projected Daily Spend', value: '~SAR 20,833', unit: 'at even pacing' },
          { label: 'Est. Budget Duration',  value: '24 days',     unit: 'at current rules' },
        ].map((s) => (
          <div key={s.label} className="bg-white dark:bg-slate-950 border border-[#eef1f6] dark:border-slate-800 rounded-xl px-4 py-3 text-center">
            <p className="text-[10px] text-[#9aa4b2] uppercase tracking-wide">{s.label}</p>
            <p className="text-lg font-bold text-[#0063F5] mt-0.5">{s.value}</p>
            <p className="text-[10px] text-[#9aa4b2]">{s.unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Step 4: Conflict & Stacking ─────────────────────────────────────────── */

function Step4() {
  const [stacking, setStacking] = useState<'exclusive' | 'group' | 'stackable'>('exclusive');

  const policies = [
    {
      id: 'exclusive' as const,
      label: 'Exclusive',
      desc: 'Overrides all other offers — only highest-priority exclusive applies',
      color: 'text-[#DC2626]',
      border: 'border-[#DC2626]',
    },
    {
      id: 'group' as const,
      label: 'Group Stackable',
      desc: 'Stacks with offers in different stacking groups, exclusive within same group',
      color: 'text-[#D97706]',
      border: 'border-[#D97706]',
    },
    {
      id: 'stackable' as const,
      label: 'Fully Stackable',
      desc: 'Stacks with all other offers regardless of group',
      color: 'text-[#34D399]',
      border: 'border-[#34D399]',
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <Field label="Stacking Policy">
        <div className="grid grid-cols-3 gap-3 mt-1">
          {policies.map((p) => (
            <button
              key={p.id}
              onClick={() => setStacking(p.id)}
              className={cn(
                'p-3.5 rounded-xl border-2 text-left transition-all',
                stacking === p.id ? `${p.border} bg-white dark:bg-slate-950` : 'border-[#eef1f6] bg-white dark:bg-slate-900 dark:border-slate-700 hover:border-[#667085]/30'
              )}
            >
              <p className={cn('text-sm font-semibold', stacking === p.id ? p.color : 'text-[#344054] dark:text-slate-200')}>{p.label}</p>
              <p className="text-[11px] text-[#9aa4b2] mt-0.5 leading-tight">{p.desc}</p>
            </button>
          ))}
        </div>
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Stacking Group" hint="for group-level conflict resolution">
          <input className={inputCls} placeholder="e.g., rate_discounts" defaultValue="rate_discounts" />
        </Field>
        <Field label="Priority Score" hint="higher wins in conflict, tie-break: discount_value → created_at">
          <input className={inputCls} type="number" defaultValue="10" min="1" max="100" />
        </Field>
      </div>

      {/* Conflict warning */}
      <div className="border border-[#FECDCA] bg-[#FEF3F2] dark:bg-red-950/30 dark:border-red-900 rounded-xl p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0" />
          <p className="text-sm font-semibold text-[#DC2626]">Potential Conflict Detected</p>
          <span className="ml-auto text-[10px] bg-[#FECDCA] text-[#DC2626] font-bold px-2 py-0.5 rounded-full">2 conflicts</span>
        </div>
        <div className="flex flex-col gap-2">
          {[
            {
              with: 'High SIMAH Premium Rate',
              overlap: 'Overlapping segment: Gov employees with SIMAH ≥ 700',
              resolution: 'Priority resolves: this offer wins (P:10 vs P:7)',
              ok: true,
            },
            {
              with: 'New User Welcome Cashback',
              overlap: 'Partially overlapping: new-user new employee offers',
              resolution: 'Different stacking groups — both apply (stackable)',
              ok: true,
            },
          ].map((c) => (
            <div key={c.with} className="bg-white dark:bg-slate-950 rounded-lg border border-[#FECDCA] dark:border-red-900 px-3 py-2.5">
              <p className="text-xs font-semibold text-[#344054] dark:text-slate-200">vs &quot;{c.with}&quot;</p>
              <p className="text-[11px] text-[#9aa4b2] mt-0.5">{c.overlap}</p>
              <p className="text-[11px] font-medium text-[#34D399] mt-0.5">{c.resolution}</p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-[#9aa4b2]">
          Engine evaluation order: priority → discount_value → created_at. Conflicts with <code className="bg-[#FECDCA] px-1 rounded">stackable=false</code> override all others.
        </p>
      </div>
    </div>
  );
}

/* ── Step 5: Display & Visibility ────────────────────────────────────────── */

function Step5() {
  const [vis, setVis] = useState<'PUBLIC' | 'TARGETED' | 'HIDDEN'>('TARGETED');
  const modes: { id: typeof vis; icon: string; label: string; desc: string }[] = [
    { id: 'PUBLIC',   icon: '🌐', label: 'Public',   desc: 'Visible to all users in search results' },
    { id: 'TARGETED', icon: '🎯', label: 'Targeted', desc: 'Shown only to users who match eligibility rules' },
    { id: 'HIDDEN',   icon: '👁',  label: 'Hidden',  desc: 'Applied silently during application — no badge shown' },
  ];
  return (
    <div className="flex flex-col gap-5">
      <Field label="Visibility Mode">
        <div className="grid grid-cols-3 gap-3 mt-1">
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => setVis(m.id)}
              className={cn(
                'p-4 text-center rounded-xl border-2 transition-all',
                vis === m.id
                  ? 'border-[#0063F5] bg-[#eff4ff] dark:bg-blue-950'
                  : 'border-[#eef1f6] bg-white dark:bg-slate-900 dark:border-slate-700 hover:border-[#0063F5]/40'
              )}
            >
              <div className="text-2xl mb-2">{m.icon}</div>
              <p className={cn('text-sm font-semibold', vis === m.id ? 'text-[#0063F5]' : 'text-[#101828] dark:text-white')}>{m.label}</p>
              <p className="text-[11px] text-[#9aa4b2] mt-1 leading-tight">{m.desc}</p>
            </button>
          ))}
        </div>
      </Field>

      {vis !== 'HIDDEN' && (
        <div>
          <p className="text-xs font-medium text-[#344054] dark:text-slate-300 mb-2">Badge Preview</p>
          <div className="bg-[#f8fafc] dark:bg-slate-900 border border-[#eef1f6] dark:border-slate-800 rounded-xl p-4">
            <div className="relative bg-white dark:bg-slate-950 border border-[#eef1f6] dark:border-slate-800 rounded-xl p-4 max-w-xs">
              <span className="absolute -top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-b-lg shadow-sm">
                🔥 0.5% OFF
              </span>
              <p className="text-[10px] text-[#9aa4b2] mt-1">Riyad Bank</p>
              <p className="text-sm font-semibold text-[#101828] dark:text-white my-1">Personal Loan — Tamweel Plus</p>
              <div className="flex gap-5 mt-2">
                <div>
                  <p className="text-[9px] text-[#9aa4b2]">APR</p>
                  <p className="text-sm">
                    <span className="line-through text-[#9aa4b2] mr-1">7.5%</span>
                    <span className="font-bold text-[#34D399]">7.0%</span>
                  </p>
                </div>
                <div>
                  <p className="text-[9px] text-[#9aa4b2]">Monthly EMI</p>
                  <p className="text-sm font-bold text-[#101828] dark:text-white">2,280 SAR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <Field label="Badge Text (English)">
          <input className={inputCls} defaultValue="0.5% Rate Discount" />
        </Field>
        <Field label="Badge Text (Arabic)">
          <input className={inputCls} defaultValue="خصم 0.5% على الفائدة" dir="rtl" />
        </Field>
        <Field label="Promo Copy (English)">
          <input className={inputCls} defaultValue="Exclusive rate for government employees" />
        </Field>
        <Field label="Promo Copy (Arabic)">
          <input className={inputCls} defaultValue="سعر حصري لموظفي الحكومة" dir="rtl" />
        </Field>
        <Field label="Badge Color">
          <select className={selectCls}>
            <option>Red — Urgency</option>
            <option>Blue — Trust</option>
            <option>Green — Saving</option>
            <option>Gold — Premium</option>
          </select>
        </Field>
        <Field label="Badge Position">
          <select className={selectCls}>
            <option>Top-right corner</option>
            <option>Top-left corner</option>
            <option>Bottom strip</option>
          </select>
        </Field>
      </div>
    </div>
  );
}

/* ── Step 6: Review & Approval ───────────────────────────────────────────── */

function Step6({ onDone }: { onDone: () => void }) {
  const sections: { title: string; rows: [string, string][] }[] = [
    {
      title: 'Basic Config',
      rows: [
        ['Name (EN)', 'Gov Employees 0.5% Rate Cut'],
        ['Type', 'RATE_DISCOUNT'],
        ['Discount', '0.50% (PERCENTAGE)'],
        ['Product', 'Personal Loan — Tamweel Plus'],
        ['Validity', 'Jun 15 – Jul 15, 2026'],
        ['Priority', '10'],
      ],
    },
    {
      title: 'Eligibility Rules',
      rows: [
        ['Logic', 'AND ( salary ≥ 10,000 SAR ]'],
        ['', 'AND ( sector IN [gov, military] OR simah ≥ 700 )'],
        ['', 'AND ( loan_amount ≥ 50,000 SAR )'],
        ['Est. Reach', '~14,200 users / month'],
      ],
    },
    {
      title: 'Budget & Limits',
      rows: [
        ['Budget Cap', 'SAR 500,000'],
        ['Max Redemptions', '1,000'],
        ['Per-User Limit', '1'],
        ['Daily Cap', '50'],
        ['Pacing', 'Even Distribution'],
        ['Est. Duration', '~24 days'],
      ],
    },
    {
      title: 'Conflict & Stacking',
      rows: [
        ['Stacking Policy', 'Exclusive'],
        ['Stacking Group', 'rate_discounts'],
        ['Detected Conflicts', '2 (auto-resolved by priority)'],
      ],
    },
    {
      title: 'Display',
      rows: [
        ['Visibility', 'TARGETED'],
        ['Badge (EN)', '🔥 0.5% OFF'],
        ['Badge (AR)', 'خصم 0.5%'],
        ['Position', 'Top-right corner'],
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        {sections.map((s) => (
          <div key={s.title} className="bg-[#f8fafc] dark:bg-slate-900 border border-[#eef1f6] dark:border-slate-800 rounded-xl p-4">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[#0063F5] mb-3">{s.title}</p>
            {s.rows.map(([k, v], i) => (
              <div key={i} className="flex justify-between gap-3 py-1.5 border-b border-[#eef1f6] dark:border-slate-800 last:border-0 text-xs">
                <span className="text-[#9aa4b2] shrink-0">{k}</span>
                <span className="font-medium text-[#344054] dark:text-slate-200 text-right">{v}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="border border-[#FEC84B] bg-[#FFFAEB] dark:bg-amber-950/30 dark:border-amber-800 rounded-xl p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0" />
          <p className="text-sm font-semibold text-[#b54708]">Pre-Launch Checks</p>
        </div>
        <ul className="text-xs text-[#667085] dark:text-slate-400 space-y-1.5 leading-relaxed list-disc list-inside">
          <li>Conflict with &quot;High SIMAH Premium Rate&quot; detected — resolved by priority (this offer wins).</li>
          <li>Budget projected to exhaust by Day 24. Consider raising cap or tightening eligibility.</li>
          <li>Offer enters <strong>DRAFT</strong> on save or <strong>SCHEDULED</strong> on schedule — becomes <strong>ACTIVE</strong> at valid_from.</li>
          <li>Tamawal admin review required before activation (est. 2 business hours).</li>
          <li>All pre-SIMAH impressions will display <strong>&quot;Preliminary&quot; badge</strong> until SIMAH data is verified.</li>
        </ul>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" className="flex-1">Save as Draft</Button>
        <Button variant="outline" className="flex-1 text-[#7C3AED] border-[#7C3AED]/30 hover:bg-[#f5f3ff]">
          Schedule for Jun 15
        </Button>
        <Button className="flex-1 bg-[#34D399] hover:bg-[#22C55E] text-white" onClick={onDone}>
          Submit for Review →
        </Button>
      </div>
    </div>
  );
}

/* ── Main wizard ─────────────────────────────────────────────────────────── */

export default function CreateOfferView({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [offerType, setOfferType] = useState('RATE_DISCOUNT');

  const stepComponents = [
    <Step1 key={0} offerType={offerType} setOfferType={setOfferType} />,
    <Step2 key={1} />,
    <Step3 key={2} />,
    <Step4 key={3} />,
    <Step5 key={4} />,
    <Step6 key={5} onDone={onDone} />,
  ];

  return (
    <div className="p-6 flex flex-col gap-5 max-w-3xl">
      <div>
        <h1 className="text-[22px] font-bold text-[#101828] dark:text-white">Create New Offer</h1>
        <p className="text-sm text-[#667085] mt-0.5">Step {step + 1} of {STEPS.length}: {STEPS[step]}</p>
      </div>

      {/* Step indicators */}
      <div className="flex items-center">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <button
              onClick={() => setStep(i)}
              title={label}
              className={cn(
                'w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-semibold shrink-0 transition-all',
                i < step  ? 'border-[#0063F5] bg-[#0063F5] text-white' :
                i === step ? 'border-[#0063F5] bg-[#eff4ff] text-[#0063F5] dark:bg-blue-950' :
                             'border-[#d5d7da] text-[#9aa4b2] dark:border-slate-700'
              )}
            >
              {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
            </button>
            {i < STEPS.length - 1 && (
              <div className={cn('flex-1 h-0.5 mx-2', i < step ? 'bg-[#0063F5]' : 'bg-[#eef1f6] dark:bg-slate-800')} />
            )}
          </div>
        ))}
      </div>
      {/* Step label row */}
      <div className="flex">
        {STEPS.map((label, i) => (
          <div key={label} className="flex-1 last:flex-none">
            <p className={cn('text-[10px] leading-tight', i === step ? 'text-[#0063F5] font-semibold' : 'text-[#9aa4b2]')}>
              {label}
            </p>
          </div>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-base font-semibold text-[#101828] dark:text-white mb-4">{STEPS[step]}</h2>
        {stepComponents[step]}
      </Card>

      {step < 5 && (
        <div className="flex items-center justify-between">
          <Button variant="outline" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
            ← Previous
          </Button>
          <div className="flex gap-3">
            <Button variant="outline" className="text-[#667085]">Save Draft</Button>
            <Button onClick={() => setStep((s) => s + 1)}>
              Next: {STEPS[step + 1]} →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
