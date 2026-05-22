'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Plus } from 'lucide-react';

type FilterTab = 'All' | 'Active' | 'Paused' | 'Scheduled' | 'Expired';

const FILTERS: { label: FilterTab; count: number }[] = [
  { label: 'All', count: 6 },
  { label: 'Active', count: 3 },
  { label: 'Paused', count: 1 },
  { label: 'Scheduled', count: 1 },
  { label: 'Expired', count: 1 },
];

type Offer = {
  name: string;
  created: string;
  type: string;
  product: string;
  budgetPct: number;
  impressions: string;
  conv: string;
  status: 'active' | 'paused' | 'expired' | 'scheduled';
};

const offers: Offer[] = [
  { name: 'Gov Employees 0.5% Rate Cut', created: 'Created Mar 12', type: 'RATE_DISCOUNT', product: 'Personal Loan', budgetPct: 80, impressions: '12.3K', conv: '8.4%', status: 'active' },
  { name: 'Aramco Exclusive Fee Waiver', created: 'Created Mar 15', type: 'FEE_WAIVER', product: 'Personal Loan', budgetPct: 45, impressions: '4.8K', conv: '7.1%', status: 'active' },
  { name: 'New User Welcome 500 SAR Cashback', created: 'Created Mar 1', type: 'CASHBACK', product: 'All Products', budgetPct: 92, impressions: '18.1K', conv: '5.9%', status: 'active' },
  { name: 'High SIMAH Premium Rate', created: 'Created Feb 28', type: 'RATE_DISCOUNT', product: 'Auto Loan', budgetPct: 33, impressions: '9.7K', conv: '5.2%', status: 'paused' },
  { name: 'Ramadan Special - 0 Fees', created: 'Created Feb 10', type: 'FEE_WAIVER', product: 'All Products', budgetPct: 100, impressions: '31.2K', conv: '6.1%', status: 'expired' },
  { name: 'Flash Eid 48hr Deal', created: 'Created Mar 25', type: 'RATE_DISCOUNT', product: 'Personal Loan', budgetPct: 0, impressions: '—', conv: '—', status: 'scheduled' },
];

const statusConfig: Record<Offer['status'], { label: string; dot: string; text: string }> = {
  active:    { label: 'Active',    dot: '#34D399', text: 'text-[#067647]' },
  paused:    { label: 'Paused',    dot: '#F59E0B', text: 'text-[#b54708]' },
  expired:   { label: 'Expired',   dot: '#9aa4b2', text: 'text-[#667085]' },
  scheduled: { label: 'Scheduled', dot: '#0063F5', text: 'text-[#0063F5]' },
};

const budgetBarColor = (pct: number) =>
  pct >= 90 ? '#EF4444' : pct >= 60 ? '#F59E0B' : '#34D399';

export default function OffersListView({
  onCreateOffer,
  onViewPerformance,
}: {
  onCreateOffer: () => void;
  onViewPerformance: () => void;
}) {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('All');

  const filtered =
    activeFilter === 'All'
      ? offers
      : offers.filter((o) => o.status === activeFilter.toLowerCase());

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#101828] dark:text-white">My Offers</h1>
        <Button onClick={onCreateOffer} className="gap-2">
          <Plus className="w-4 h-4" />
          New Offer
        </Button>
      </div>

      <Card className="flex flex-col">
        {/* Tabs + search */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#eef1f6] dark:border-slate-800">
          <div className="flex items-center gap-1">
            {FILTERS.map((f) => (
              <button
                key={f.label}
                onClick={() => setActiveFilter(f.label)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-sm font-medium transition-all',
                  activeFilter === f.label
                    ? 'bg-[#eff4ff] text-[#0063F5] dark:bg-blue-950 dark:text-blue-300'
                    : 'text-[#667085] hover:text-[#344054] hover:bg-[#f9fafb] dark:text-slate-400 dark:hover:bg-slate-800'
                )}
              >
                {f.label}
                <span className="ml-1 text-[10px] opacity-60">({f.count})</span>
              </button>
            ))}
          </div>
          <div className="relative w-[240px]">
            <input
              className="w-full h-9 pl-9 pr-3 border border-[#d5d7da] rounded-lg text-sm text-[#717680] bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0063f5] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              placeholder="Search offers..."
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#9aa4b2]" />
          </div>
        </div>

        <CardContent className="border-none">
          {/* Table header */}
          <div className="grid grid-cols-[2fr_1fr_1fr_80px_80px_70px_80px] px-5 py-2.5 bg-[#f8fafc] dark:bg-slate-900 border-b border-[#eef1f6] dark:border-slate-800 text-[11px] font-semibold uppercase tracking-wide text-[#667085]">
            <span>Offer Name</span>
            <span>Type</span>
            <span>Product</span>
            <span>Budget</span>
            <span>Impressions</span>
            <span>Conv.</span>
            <span>Status</span>
          </div>

          {filtered.map((offer) => {
            const s = statusConfig[offer.status];
            return (
              <div
                key={offer.name}
                onClick={onViewPerformance}
                className="grid grid-cols-[2fr_1fr_1fr_80px_80px_70px_80px] px-5 py-3.5 border-b border-[#eef1f6] dark:border-slate-800 last:border-0 items-center hover:bg-[#f8fafc] dark:hover:bg-slate-900/50 cursor-pointer transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-[#101828] dark:text-white">{offer.name}</p>
                  <p className="text-[10px] text-[#667085] mt-0.5">{offer.created}</p>
                </div>
                <Badge variant="neutral" className="text-[10px] w-fit">{offer.type}</Badge>
                <span className="text-sm text-[#667085] dark:text-slate-400">{offer.product}</span>
                <div>
                  <div className="h-1.5 w-12 bg-[#eef1f6] dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${offer.budgetPct}%`, background: budgetBarColor(offer.budgetPct) }}
                    />
                  </div>
                  <p className="text-[10px] text-[#667085] mt-1">{offer.budgetPct}%</p>
                </div>
                <span className="text-sm text-[#344054] dark:text-slate-300">{offer.impressions}</span>
                <span className="text-sm font-semibold text-[#34D399]">{offer.conv}</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.dot }} />
                  <span className={`text-xs font-medium ${s.text}`}>{s.label}</span>
                </div>
              </div>
            );
          })}
        </CardContent>

        <CardFooter>
          <div className="flex items-center justify-between px-5 py-3 text-sm text-[#667085]">
            <span>Showing {filtered.length} of {offers.length} offers</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
