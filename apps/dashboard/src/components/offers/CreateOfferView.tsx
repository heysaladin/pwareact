'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const STEPS = [
  'Basic Configuration',
  'Eligibility Rules',
  'Budget & Limits',
  'Display & Visibility',
  'Review & Launch',
];

/* ── Step 1 ─────────────────────────────────── */
function Step1() {
  const [offerType, setOfferType] = useState(0);
  const types = [
    { label: 'Rate Discount', desc: 'Reduce APR' },
    { label: 'Fee Waiver', desc: 'Waive processing fees' },
    { label: 'Cashback', desc: 'Post-disbursement' },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Field label="Offer Name (EN)"><input className={inputCls} placeholder="e.g., Government Employee Rate Discount" /></Field>
        <Field label="Offer Name (AR)"><input className={inputCls} placeholder="مثال: خصم موظفي الحكومة" dir="rtl" /></Field>
      </div>
      <Field label="Offer Type">
        <div className="grid grid-cols-3 gap-3 mt-1">
          {types.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setOfferType(i)}
              className={cn(
                'p-3 rounded-lg border text-left transition-all',
                offerType === i
                  ? 'border-[#0063F5] bg-[#eff4ff] dark:bg-blue-950'
                  : 'border-[#d5d7da] bg-white dark:bg-slate-900 dark:border-slate-700 hover:border-[#0063F5]/50'
              )}
            >
              <p className={cn('text-sm font-semibold', offerType === i ? 'text-[#0063F5]' : 'text-[#101828] dark:text-white')}>{t.label}</p>
              <p className="text-xs text-[#667085] mt-0.5">{t.desc}</p>
            </button>
          ))}
        </div>
      </Field>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Product Scope">
          <select className={inputCls}>
            <option>All Products</option>
            <option>Personal Loan - Tamweel Plus</option>
            <option>Auto Loan - Standard</option>
            <option>Mortgage - Fixed Rate</option>
          </select>
        </Field>
        <Field label="Discount Value">
          <div className="relative">
            <input className={cn(inputCls, 'pr-8')} defaultValue="0.50" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#667085]">%</span>
          </div>
        </Field>
        <Field label="Valid From"><input type="date" className={inputCls} defaultValue="2026-03-28" /></Field>
        <Field label="Valid To"><input type="date" className={inputCls} defaultValue="2026-04-28" /></Field>
      </div>
    </div>
  );
}

/* ── Step 2 ─────────────────────────────────── */
function Step2() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#667085]">Define who qualifies using AND/OR conditions</p>
      <div className="border-2 border-[#0063F5]/30 rounded-xl p-4 bg-[#f8fafc] dark:bg-slate-900">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-0.5 rounded bg-[#0063F5] text-white text-xs font-bold">AND</span>
          <span className="text-xs text-[#667085]">All conditions must match</span>
        </div>
        <RuleRow fields={['Salary Range', '>=', '10,000 SAR']} />
        <div className="border-2 border-[#34D399]/40 rounded-lg p-3 bg-white dark:bg-slate-950 ml-4 mb-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded bg-[#34D399] text-white text-xs font-bold">OR</span>
            <span className="text-xs text-[#667085]">Any condition can match</span>
          </div>
          <RuleRow fields={['Employment Sector', 'IN', 'Government, Military']} />
          <RuleRow fields={['SIMAH Score', '>=', '700']} />
          <button className="text-xs text-[#34D399] border border-dashed border-[#34D399]/40 px-3 py-1.5 rounded-lg hover:bg-[#34D399]/5 transition-colors">
            + Add OR Condition
          </button>
        </div>
        <RuleRow fields={['Loan Amount', '>=', '50,000 SAR']} />
        <div className="flex gap-2 mt-3">
          <button className="text-xs text-[#0063F5] border border-dashed border-[#0063F5]/40 px-3 py-1.5 rounded-lg hover:bg-[#0063F5]/5 transition-colors">+ Add AND Condition</button>
          <button className="text-xs text-[#34D399] border border-dashed border-[#34D399]/40 px-3 py-1.5 rounded-lg hover:bg-[#34D399]/5 transition-colors">+ Add OR Group</button>
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#eff4ff] dark:bg-blue-950/50 border border-[#0063F5]/20 rounded-xl px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-[#0063F5]">Estimated Reach</p>
          <p className="text-xs text-[#667085] mt-0.5">Based on historical user data</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-[#0063F5]">~14,200</p>
          <p className="text-[10px] text-[#667085]">matching users / month</p>
        </div>
      </div>
    </div>
  );
}

function RuleRow({ fields }: { fields: [string, string, string] }) {
  return (
    <div className="flex items-center gap-2 mb-2 p-2 bg-[#f8fafc] dark:bg-slate-900 rounded-lg border border-[#eef1f6] dark:border-slate-800">
      <select className="text-xs border border-[#d5d7da] dark:border-slate-700 rounded px-2 py-1 bg-white dark:bg-slate-900 text-[#344054] dark:text-slate-200 outline-none w-36">
        <option>{fields[0]}</option>
      </select>
      <select className="text-xs border border-[#d5d7da] dark:border-slate-700 rounded px-2 py-1 bg-white dark:bg-slate-900 text-[#344054] dark:text-slate-200 outline-none w-16">
        <option>{fields[1]}</option>
      </select>
      <input defaultValue={fields[2]} className="flex-1 text-xs border border-[#d5d7da] dark:border-slate-700 rounded px-2 py-1 bg-white dark:bg-slate-900 text-[#0063F5] font-semibold outline-none focus:border-[#0063F5]" />
      <button className="text-[#EF4444]/60 hover:text-[#EF4444] text-base px-1">×</button>
    </div>
  );
}

/* ── Step 3 ─────────────────────────────────── */
function Step3() {
  const [pacing, setPacing] = useState(0);
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Field label="Total Budget Cap">
          <div className="relative"><input className={cn(inputCls, 'pr-12')} defaultValue="500,000" /><span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#667085]">SAR</span></div>
        </Field>
        <Field label="Max Redemptions">
          <div className="relative"><input className={cn(inputCls, 'pr-10')} defaultValue="1,000" /><span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#667085]">uses</span></div>
        </Field>
        <Field label="Per-User Limit">
          <div className="relative"><input className={cn(inputCls, 'pr-16')} defaultValue="1" /><span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#667085]">per user</span></div>
        </Field>
        <Field label="Daily Cap">
          <div className="relative"><input className={cn(inputCls, 'pr-16')} defaultValue="50" /><span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#667085]">per day</span></div>
        </Field>
        <Field label="Budget Pacing" className="col-span-2">
          <div className="flex gap-3 mt-1">
            {['Even Pacing', 'Burst (FCFS)'].map((p, i) => (
              <button
                key={p}
                onClick={() => setPacing(i)}
                className={cn(
                  'flex-1 py-2.5 rounded-lg border text-sm font-medium transition-all',
                  pacing === i
                    ? 'border-[#0063F5] bg-[#eff4ff] text-[#0063F5] dark:bg-blue-950'
                    : 'border-[#d5d7da] bg-white text-[#667085] dark:bg-slate-900 dark:border-slate-700 hover:border-[#0063F5]/50'
                )}
              >
                {p}
              </button>
            ))}
          </div>
        </Field>
      </div>
      <div className="bg-[#f8fafc] dark:bg-slate-900 border border-[#eef1f6] dark:border-slate-800 rounded-xl p-4">
        <p className="text-sm font-semibold text-[#101828] dark:text-white mb-3">Budget Projection</p>
        <div className="flex items-end gap-0.5 h-16">
          {Array.from({ length: 30 }, (_, i) => {
            const h = Math.min(100, 15 + i * 2.8 + Math.sin(i) * 8);
            return (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{ height: `${h}%`, background: h > 80 ? '#EF4444' : '#0063F5', opacity: 0.7 }}
              />
            );
          })}
        </div>
        <div className="flex justify-between text-[10px] text-[#667085] mt-1">
          <span>Day 1</span><span>Day 15</span><span>Day 30</span>
        </div>
        <p className="text-xs text-[#F59E0B] mt-2">⚠ Projected to exhaust budget by Day 24 at current targeting</p>
      </div>
    </div>
  );
}

/* ── Step 4 ─────────────────────────────────── */
function Step4() {
  const [vis, setVis] = useState(0);
  const modes = [
    { icon: '🌐', label: 'Public', desc: 'Visible to all users in search' },
    { icon: '🎯', label: 'Targeted', desc: 'Shown only to eligible users' },
    { icon: '👁', label: 'Hidden', desc: 'Applied silently in application' },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-xs font-medium text-[#667085] mb-2">Visibility Mode</p>
        <div className="grid grid-cols-3 gap-3">
          {modes.map((m, i) => (
            <button
              key={m.label}
              onClick={() => setVis(i)}
              className={cn(
                'p-4 text-center rounded-xl border-2 transition-all',
                vis === i
                  ? 'border-[#0063F5] bg-[#eff4ff] dark:bg-blue-950'
                  : 'border-[#eef1f6] bg-white dark:bg-slate-900 dark:border-slate-700 hover:border-[#0063F5]/40'
              )}
            >
              <div className="text-2xl mb-2">{m.icon}</div>
              <p className={cn('text-sm font-semibold', vis === i ? 'text-[#0063F5]' : 'text-[#101828] dark:text-white')}>{m.label}</p>
              <p className="text-[10px] text-[#667085] mt-1">{m.desc}</p>
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-[#667085] mb-2">Badge Preview</p>
        <div className="bg-[#f8fafc] dark:bg-slate-900 border border-[#eef1f6] dark:border-slate-800 rounded-xl p-4">
          <div className="relative bg-white dark:bg-slate-950 border border-[#eef1f6] dark:border-slate-800 rounded-xl p-4 max-w-xs">
            <span className="absolute -top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-b-lg">🔥 0.5% OFF</span>
            <p className="text-[10px] text-[#667085] mt-1">Riyad Bank</p>
            <p className="text-sm font-semibold text-[#101828] dark:text-white my-1">Personal Loan - Tamweel Plus</p>
            <div className="flex gap-4 mt-2">
              <div>
                <p className="text-[9px] text-[#667085]">APR</p>
                <p className="text-sm"><span className="line-through text-[#667085] mr-1">7.5%</span><span className="font-bold text-[#34D399]">7.0%</span></p>
              </div>
              <div>
                <p className="text-[9px] text-[#667085]">Monthly EMI</p>
                <p className="text-sm font-bold text-[#101828] dark:text-white">2,280 SAR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Badge Text (EN)"><input className={inputCls} defaultValue="0.5% Rate Discount" /></Field>
        <Field label="Badge Text (AR)"><input className={inputCls} defaultValue="خصم 0.5% على الفائدة" dir="rtl" /></Field>
        <Field label="Promo Copy (EN)"><input className={inputCls} defaultValue="Exclusive rate for government employees" /></Field>
        <Field label="Promo Copy (AR)"><input className={inputCls} defaultValue="سعر حصري لموظفي الحكومة" dir="rtl" /></Field>
      </div>
    </div>
  );
}

/* ── Step 5 ─────────────────────────────────── */
function Step5() {
  const sections = [
    {
      title: 'Basic Config',
      rows: [['Offer Name', 'Gov Employees 0.5% Rate Cut'], ['Type', 'Rate Discount (APR)'], ['Product', 'Personal Loan - Tamweel Plus'], ['Discount', '0.50%'], ['Validity', 'Mar 28 – Apr 28, 2026']],
    },
    {
      title: 'Eligibility Rules',
      rows: [['Rule', 'salary >= 10,000 SAR'], ['AND', 'sector IN [Gov, Military] OR simah >= 700'], ['AND', 'loan_amount >= 50,000 SAR'], ['Est. Reach', '~14,200 users/month']],
    },
    {
      title: 'Budget & Limits',
      rows: [['Budget Cap', '500,000 SAR'], ['Max Redemptions', '1,000'], ['Per User', '1 time'], ['Pacing', 'Even Distribution']],
    },
    {
      title: 'Display',
      rows: [['Visibility', 'Public'], ['Badge', '🔥 0.5% OFF'], ['Priority', '10 (High)'], ['Stackable', 'No (Exclusive)']],
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        {sections.map((s) => (
          <div key={s.title} className="bg-[#f8fafc] dark:bg-slate-900 border border-[#eef1f6] dark:border-slate-800 rounded-xl p-4">
            <p className="text-xs font-semibold text-[#0063F5] mb-3">{s.title}</p>
            {s.rows.map(([k, v]) => (
              <div key={k} className="flex justify-between py-1.5 border-b border-[#eef1f6] dark:border-slate-800 last:border-0 text-xs">
                <span className="text-[#667085]">{k}</span>
                <span className="font-medium text-[#344054] dark:text-slate-200">{v}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="border border-[#FEC84B] bg-[#FFFAEB] dark:bg-amber-950/30 dark:border-amber-800 rounded-xl p-4">
        <p className="text-sm font-semibold text-[#b54708] mb-2">⚠ Pre-Launch Checks</p>
        <ul className="text-xs text-[#667085] dark:text-slate-400 space-y-1 leading-relaxed list-disc list-inside">
          <li>Conflict detected with "High SIMAH Premium Rate" (overlapping segment). Priority will resolve: this offer wins.</li>
          <li>Budget projected to exhaust by Day 24. Consider increasing budget or tightening targeting.</li>
          <li>Offer will be reviewed by Tamawal admin before activation (est. 2 hours).</li>
        </ul>
      </div>
    </div>
  );
}

/* ── Shared helpers ──────────────────────────── */
const inputCls = 'w-full h-9 px-3 border border-[#d5d7da] rounded-lg text-sm text-[#344054] bg-white dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200 outline-none focus:ring-1 focus:ring-[#0063F5] focus:border-[#0063F5]';

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label className="text-xs font-medium text-[#667085]">{label}</label>
      {children}
    </div>
  );
}

/* ── Main component ──────────────────────────── */
export default function CreateOfferView() {
  const [step, setStep] = useState(0);

  const stepComponents = [<Step1 key={0} />, <Step2 key={1} />, <Step3 key={2} />, <Step4 key={3} />, <Step5 key={4} />];

  return (
    <div className="p-6 flex flex-col gap-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-[#101828] dark:text-white">Create New Offer</h1>
        <p className="text-sm text-[#667085] dark:text-slate-400 mt-1">Step {step + 1} of 5: {STEPS[step]}</p>
      </div>

      {/* Stepper */}
      <div className="flex items-center">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <button
              onClick={() => setStep(i)}
              className={cn(
                'w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-semibold shrink-0 transition-all',
                i < step
                  ? 'border-[#0063F5] bg-[#0063F5] text-white'
                  : i === step
                  ? 'border-[#0063F5] bg-[#eff4ff] text-[#0063F5]'
                  : 'border-[#d5d7da] text-[#667085] dark:border-slate-700'
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

      <Card className="p-6">
        <h2 className="text-base font-semibold text-[#101828] dark:text-white mb-4">{STEPS[step]}</h2>
        {stepComponents[step]}
      </Card>

      <div className="flex items-center justify-between">
        <Button variant="outline" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
          ← Previous
        </Button>
        <div className="flex gap-3">
          <Button variant="secondary">Save Draft</Button>
          {step < 4 ? (
            <Button onClick={() => setStep((s) => s + 1)}>Next Step →</Button>
          ) : (
            <Button className="bg-[#34D399] hover:bg-[#22C55E] text-white">🚀 Launch Offer</Button>
          )}
        </div>
      </div>
    </div>
  );
}
