'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Plus, Copy, Play, Pause } from 'lucide-react';

type Status = 'DRAFT' | 'SCHEDULED' | 'ACTIVE' | 'PAUSED' | 'EXPIRED' | 'EXHAUSTED';

type Offer = {
  name: string;
  created: string;
  type: string;
  product: string;
  budgetPct: number;
  impressions: string;
  conv: string;
  status: Status;
  terminal: boolean;
};

const offers: Offer[] = [
  { name: 'Gov Employees 0.5% Rate Cut',     created: 'Mar 12, 2026', type: 'RATE_DISCOUNT',    product: 'Personal Loan',  budgetPct: 80,  impressions: '12,340', conv: '8.4%', status: 'ACTIVE',    terminal: false },
  { name: 'Aramco Exclusive Fee Waiver',      created: 'Mar 15, 2026', type: 'FEE_WAIVER',       product: 'Personal Loan',  budgetPct: 45,  impressions: '4,820',  conv: '7.1%', status: 'ACTIVE',    terminal: false },
  { name: 'New User Welcome Cashback',        created: 'Mar 1, 2026',  type: 'CASHBACK',          product: 'All Products',   budgetPct: 92,  impressions: '18,100', conv: '5.9%', status: 'ACTIVE',    terminal: false },
  { name: 'DBR Relief Tenure Extension',      created: 'Mar 18, 2026', type: 'TENURE_EXTENSION',  product: 'Personal Loan',  budgetPct: 28,  impressions: '6,410',  conv: '4.3%', status: 'ACTIVE',    terminal: false },
  { name: 'Prime Borrower Limit Boost',       created: 'Mar 20, 2026', type: 'LIMIT_INCREASE',    product: 'Auto Loan',      budgetPct: 15,  impressions: '2,900',  conv: '6.7%', status: 'PAUSED',    terminal: false },
  { name: 'High SIMAH Premium Rate',          created: 'Feb 28, 2026', type: 'RATE_DISCOUNT',     product: 'Auto Loan',      budgetPct: 33,  impressions: '9,700',  conv: '5.2%', status: 'PAUSED',    terminal: false },
  { name: 'Flash Eid 48hr Deal',              created: 'Mar 25, 2026', type: 'RATE_DISCOUNT',     product: 'Personal Loan',  budgetPct: 0,   impressions: '—',      conv: '—',    status: 'SCHEDULED', terminal: false },
  { name: 'Q1 Salary Workers Draft',          created: 'Mar 26, 2026', type: 'RATE_DISCOUNT',     product: 'Personal Loan',  budgetPct: 0,   impressions: '—',      conv: '—',    status: 'DRAFT',     terminal: false },
  { name: 'Ramadan Special — 0 Fees',         created: 'Feb 10, 2026', type: 'FEE_WAIVER',        product: 'All Products',   budgetPct: 100, impressions: '31,200', conv: '6.1%', status: 'EXPIRED',   terminal: true  },
  { name: 'Eid Flash Budget Exhausted',       created: 'Mar 5, 2026',  type: 'RATE_DISCOUNT',     product: 'Personal Loan',  budgetPct: 100, impressions: '22,400', conv: '9.1%', status: 'EXHAUSTED', terminal: true  },
];

const STATUS_CFG: Record<Status, { dot: string; text: string; bg: string }> = {
  DRAFT:     { dot: '#9aa4b2', text: 'text-[#667085]',  bg: 'bg-[#f8fafc]' },
  SCHEDULED: { dot: '#0063F5', text: 'text-[#0063F5]',  bg: 'bg-[#eff4ff]' },
  ACTIVE:    { dot: '#34D399', text: 'text-[#067647]',  bg: 'bg-[#ecfdf5]' },
  PAUSED:    { dot: '#D97706', text: 'text-[#b54708]',  bg: 'bg-[#fffbeb]' },
  EXPIRED:   { dot: '#9aa4b2', text: 'text-[#667085]',  bg: 'bg-[#f8fafc]' },
  EXHAUSTED: { dot: '#DC2626', text: 'text-[#DC2626]',  bg: 'bg-[#fef2f2]' },
};

const TYPE_COLOR: Record<string, string> = {
  RATE_DISCOUNT:    'bg-blue-50 text-blue-700',
  FEE_WAIVER:       'bg-violet-50 text-violet-700',
  CASHBACK:         'bg-green-50 text-green-700',
  TENURE_EXTENSION: 'bg-cyan-50 text-cyan-700',
  LIMIT_INCREASE:   'bg-amber-50 text-amber-700',
};

const budgetColor = (pct: number) => pct >= 90 ? '#DC2626' : pct >= 60 ? '#D97706' : '#34D399';

type FilterTab = 'All' | 'Active' | 'Paused' | 'Scheduled' | 'Draft' | 'Expired' | 'Exhausted';
const FILTERS: FilterTab[] = ['All', 'Active', 'Paused', 'Scheduled', 'Draft', 'Expired', 'Exhausted'];

export default function OffersListView({ onCreateOffer, onViewOffer }: { onCreateOffer: () => void; onViewOffer: () => void }) {
  const [filter, setFilter] = useState<FilterTab>('All');
  const [search, setSearch] = useState('');

  const visible = offers.filter((o) => {
    const matchFilter = filter === 'All' || o.status === filter.toUpperCase();
    const matchSearch = o.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const countFor = (f: FilterTab) =>
    f === 'All' ? offers.length : offers.filter((o) => o.status === f.toUpperCase()).length;

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-bold text-[#101828] dark:text-white">My Offers</h1>
          <p className="text-sm text-[#667085] mt-0.5">{offers.filter(o => o.status === 'ACTIVE').length} active · {offers.filter(o => o.terminal).length} terminal (clone-only)</p>
        </div>
        <Button onClick={onCreateOffer} className="gap-2 text-sm"><Plus className="w-4 h-4" /> New Offer</Button>
      </div>

      <Card>
        {/* Tabs + search */}
        <div className="px-5 py-3 border-b border-[#eef1f6] dark:border-slate-800 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-0.5 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  'px-2.5 py-1.5 rounded-lg text-[12px] font-medium transition-all',
                  filter === f
                    ? 'bg-[#eff4ff] text-[#0063F5] dark:bg-blue-950 dark:text-blue-300'
                    : 'text-[#667085] hover:text-[#344054] hover:bg-[#f9fafb] dark:text-slate-400 dark:hover:bg-slate-800'
                )}
              >
                {f} <span className="opacity-50 text-[10px]">{countFor(f)}</span>
              </button>
            ))}
          </div>
          <div className="relative w-[220px]">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-8 pl-8 pr-3 border border-[#d5d7da] rounded-lg text-[12px] text-[#344054] bg-white shadow-sm outline-none focus:ring-1 focus:ring-[#0063f5] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              placeholder="Search offers..."
            />
            <Search className="absolute left-2.5 top-2 w-4 h-4 text-[#9aa4b2]" />
          </div>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-[2fr_130px_110px_70px_80px_60px_110px_80px] px-5 py-2.5 bg-[#f8fafc] dark:bg-slate-900 border-b border-[#eef1f6] dark:border-slate-800 text-[10px] font-semibold uppercase tracking-wide text-[#9aa4b2]">
          <span>Offer Name</span>
          <span>Type</span>
          <span>Product</span>
          <span>Budget</span>
          <span>Impressions</span>
          <span>Conv.</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        <CardContent className="border-none p-0">
          {visible.length === 0 && (
            <p className="px-5 py-8 text-center text-sm text-[#9aa4b2]">No offers match this filter.</p>
          )}
          {visible.map((offer) => {
            const s = STATUS_CFG[offer.status];
            return (
              <div
                key={offer.name}
                className="grid grid-cols-[2fr_130px_110px_70px_80px_60px_110px_80px] px-5 py-3.5 border-b border-[#eef1f6] dark:border-slate-800 last:border-0 items-center hover:bg-[#f8fafc] dark:hover:bg-slate-900/40 cursor-pointer transition-colors"
                onClick={offer.terminal ? undefined : onViewOffer}
              >
                <div>
                  <p className="text-[13px] font-medium text-[#101828] dark:text-white leading-tight">{offer.name}</p>
                  <p className="text-[10px] text-[#9aa4b2] mt-0.5">{offer.created}</p>
                  {offer.terminal && (
                    <span className="text-[9px] font-semibold text-[#DC2626] bg-[#fef2f2] px-1.5 py-0.5 rounded mt-1 inline-block">
                      TERMINAL — clone only
                    </span>
                  )}
                </div>
                <span className={`text-[10px] font-semibold px-2 py-1 rounded w-fit ${TYPE_COLOR[offer.type] ?? 'bg-gray-50 text-gray-600'}`}>{offer.type}</span>
                <span className="text-[12px] text-[#667085] dark:text-slate-400">{offer.product}</span>
                <div>
                  <div className="h-1.5 w-12 bg-[#eef1f6] dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${offer.budgetPct}%`, background: budgetColor(offer.budgetPct) }} />
                  </div>
                  <p className="text-[10px] text-[#9aa4b2] mt-0.5">{offer.budgetPct}%</p>
                </div>
                <span className="text-[12px] text-[#344054] dark:text-slate-300">{offer.impressions}</span>
                <span className="text-[12px] font-semibold text-[#34D399]">{offer.conv}</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.dot }} />
                  <span className={`text-[11px] font-semibold ${s.text}`}>{offer.status}</span>
                </div>
                <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                  {offer.terminal ? (
                    <button title="Clone as new draft" className="p-1.5 rounded hover:bg-[#eef1f6] dark:hover:bg-slate-800 text-[#9aa4b2] hover:text-[#0063F5] transition-colors">
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <>
                      {offer.status === 'ACTIVE' && (
                        <button title="Pause" className="p-1.5 rounded hover:bg-[#fffbeb] text-[#9aa4b2] hover:text-[#D97706] transition-colors">
                          <Pause className="w-3.5 h-3.5" />
                        </button>
                      )}
                      {offer.status === 'PAUSED' && (
                        <button title="Resume" className="p-1.5 rounded hover:bg-[#ecfdf5] text-[#9aa4b2] hover:text-[#34D399] transition-colors">
                          <Play className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <button title="Clone" className="p-1.5 rounded hover:bg-[#eef1f6] dark:hover:bg-slate-800 text-[#9aa4b2] hover:text-[#0063F5] transition-colors">
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </CardContent>

        <div className="px-5 py-3 border-t border-[#eef1f6] dark:border-slate-800 flex items-center justify-between text-[11px] text-[#9aa4b2]">
          <span>Showing {visible.length} of {offers.length} offers</span>
          <span>{offers.filter(o => o.terminal).length} terminal offers (EXPIRED/EXHAUSTED) can only be cloned</span>
        </div>
      </Card>
    </div>
  );
}
