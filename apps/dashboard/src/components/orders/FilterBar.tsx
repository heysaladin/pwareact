'use client';
import { useState } from 'react';
import { Filter, TrendingUp, Building2, Search, X, ChevronDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLang } from '@/lib/language-context';
import SARSymbol from '@/components/ui/SARSymbol';

const QUICK_INSIGHTS = [
  { key: 'servicing',   label: 'Servicing',    labelAr: 'الخدمة',       count: 16,  amount: '177,508.40',   icon: 'http://localhost:3845/assets/abe1a74f4163edef560c43358cf74d300b272275.svg' },
  { key: 'denied',      label: 'Denied',       labelAr: 'مرفوض',        count: 18,  amount: '219,048.60',   icon: 'http://localhost:3845/assets/0f293c08432f79115b1d81d1bce2ee13d4fa17d2.svg' },
  { key: 'cancelled',   label: 'Cancelled',    labelAr: 'ملغى',         count: 104, amount: '3,243,072.90', icon: 'http://localhost:3845/assets/58989a79358e0f51d46bdb1094ea12c9964b4ef8.svg' },
  { key: 'notEligible', label: 'Not eligible', labelAr: 'غير مؤهل',     count: 25,  amount: '123,456.00',   icon: 'http://localhost:3845/assets/7eb09902ebf8d53cdd3940094e48ac475fce7d59.svg' },
  { key: 'rejected',    label: 'Rejected',     labelAr: 'رُفض',         count: 35,  amount: '465,960.60',   icon: 'http://localhost:3845/assets/cdc76e3d277332d82fcde9ba2266831e67f001df.svg' },
  { key: 'inReview',    label: 'In review',    labelAr: 'قيد المراجعة', count: 1,   amount: '307,008.10',   icon: 'http://localhost:3845/assets/7c0cea03436b06a3ff0ae3b0d35fd1c72560c79a.svg' },
];

const FINANCING_VOLUME = [
  { key: 'personalLoan', label: 'Personal Loan',  labelAr: 'قرض شخصي',    count: 178, amount: '3,918,774.60', icon: '/illustrations/simple-category-icon-perspective-personal.svg' },
  { key: 'carLoan',      label: 'Car Loan',       labelAr: 'قرض سيارة',   count: 125, amount: '3,918,774.60', icon: '/illustrations/simple-category-icon-perspective-car.svg' },
  { key: 'realEstate',   label: 'Real Estate',    labelAr: 'عقارات',      count: 39,  amount: '3,918,774.60', icon: '/illustrations/simple-category-icon-perspective-mortgage.svg' },
  { key: 'cardFinance',  label: 'Card Financing', labelAr: 'تمويل بطاقة', count: 64,  amount: '3,918,774.60', icon: '/illustrations/simple-category-icon-perspective-card.svg' },
];

const PROVIDERS = [
  { key: 'sab',     label: 'SAB',     labelAr: 'سامبا',    count: 69, amount: '3,918,774.60', logo: 'http://localhost:3845/assets/6f09b218246cc00404f015a32e9f61bd88d67bc5.png' },
  { key: 'alahli',  label: 'Alahli',  labelAr: 'الأهلي',   count: 38, amount: '3,918,774.60', logo: 'http://localhost:3845/assets/28aa3cef0af1c883e0caeaccb858bf841e5ae9be.png' },
  { key: 'albilad', label: 'Albilad', labelAr: 'البلاد',   count: 24, amount: '3,918,774.60', logo: 'http://localhost:3845/assets/ebc2dd5515877664b5557b9cbc6a2ca92a6ede94.png' },
  { key: 'alrajhi', label: 'Alrajhi', labelAr: 'الراجحي',  count: 16, amount: '3,918,774.60', logo: 'http://localhost:3845/assets/04c44eb30fe8eafb10f6e8717923e709ea74449c.svg' },
  { key: 'aljabr',  label: 'Al Jabr', labelAr: 'الجابر',   count: 20, amount: '3,918,774.60', logo: '' },
];

function PanelHeader({
  title,
  icon: Icon,
  hasSelection,
  onClear,
  isAr,
}: {
  title: string;
  icon: LucideIcon;
  hasSelection: boolean;
  onClear: () => void;
  isAr: boolean;
}) {
  return (
    <div className="flex items-center justify-between mb-3 shrink-0">
      <div className="flex items-center gap-1.5">
        <Icon className="w-4 h-4 shrink-0 text-[#667085] dark:text-slate-400" aria-hidden />
        <span className="text-[14px] font-semibold text-[#181d27] dark:text-slate-100 whitespace-nowrap">{title}</span>
      </div>
      {hasSelection && (
        <button
          onClick={onClear}
          className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-[#d5d7da] bg-white text-[#414651] text-[12px] font-medium hover:bg-gray-50 transition-colors dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 shrink-0"
        >
          <X className="w-3 h-3" />
          {isAr ? 'مسح' : 'Clear'}
        </button>
      )}
    </div>
  );
}

function InsightChip({
  count, icon, label, amount, selected, onClick,
}: {
  count: number; icon: string; label: string; amount: string; selected: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center rounded-lg border overflow-hidden h-10 transition-colors text-left',
        selected
          ? 'border-[#0063f5] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),0px_0px_0px_2px_white,0px_0px_0px_4px_#0063f5] dark:bg-slate-900'
          : 'border-[#e9eaeb] bg-transparent hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800'
      )}
    >
      <span className="px-2.5 text-[13px] font-semibold text-[#121a26] dark:text-slate-100 shrink-0 min-w-[36px] text-center leading-none">
        {count}
      </span>
      <span className={cn('border-l flex items-center gap-1.5 px-2.5 text-[13px] text-[#181d27] dark:text-slate-200 whitespace-nowrap', selected ? 'border-[#0063f5]' : 'border-[#e9eaeb] dark:border-slate-700')}>
        <img src={icon} alt="" className="w-4 h-4 shrink-0" />
        {label}
      </span>
      <span className={cn('border-l flex items-center gap-0.5 px-2.5 text-[13px] font-medium text-[#121a26] dark:text-slate-100 shrink-0 whitespace-nowrap', selected ? 'border-[#0063f5]' : 'border-[#e9eaeb] dark:border-slate-700')}>
        <SARSymbol className="w-2.5 h-2.5 shrink-0" />
        {amount}
      </span>
    </button>
  );
}

function DataRow({
  count, label, amount, selected, children, onClick,
}: {
  count: number; label: string; amount: string; selected?: boolean; children?: React.ReactNode; onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full flex items-center rounded-lg border text-left transition-colors overflow-hidden',
        selected
          ? 'border-[#0063f5] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),0px_0px_0px_2px_white,0px_0px_0px_4px_#0063f5] dark:bg-slate-900'
          : 'border-[#e9eaeb] bg-transparent hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800'
      )}
    >
      <span className="px-2.5 py-2 text-[13px] font-semibold text-[#121a26] dark:text-slate-100 shrink-0 min-w-[36px] text-center">
        {count}
      </span>
      <span className={cn('border-l px-2.5 py-2 text-[13px] text-[#181d27] dark:text-slate-200 flex-1 flex items-center gap-1.5 min-w-0', selected ? 'border-[#0063f5]' : 'border-[#e9eaeb] dark:border-slate-700')}>
        {children}
        {label}
      </span>
      <span className={cn('border-l flex items-center gap-0.5 px-2.5 py-2 text-[13px] font-medium text-[#121a26] dark:text-slate-100 shrink-0 whitespace-nowrap', selected ? 'border-[#0063f5]' : 'border-[#e9eaeb] dark:border-slate-700')}>
        <SARSymbol className="w-2.5 h-2.5 shrink-0" />
        {amount}
      </span>
    </button>
  );
}

export default function FilterBar() {
  const { lang } = useLang();
  const isAr = lang === 'ar';

  const [selectedInsight,   setSelectedInsight]   = useState<string | null>('servicing');
  const [selectedFinancing, setSelectedFinancing] = useState<string | null>('personalLoan');
  const [selectedProvider,  setSelectedProvider]  = useState<string | null>('sab');
  const [providerSearch,    setProviderSearch]    = useState('');

  const filteredProviders = PROVIDERS.filter(
    (p) => !providerSearch || p.label.toLowerCase().includes(providerSearch.toLowerCase())
  );

  return (
    <div className="bg-[#fcfcfd] border-l border-r border-t border-[#e3e8ef] flex flex-col gap-4 p-4 rounded-tl-xl rounded-tr-xl w-full dark:bg-slate-900/50 dark:border-slate-700">
      <div className="flex gap-4 w-full">

        {/* Quick Insights */}
        <div className="flex-1 flex flex-col min-w-0">
          <PanelHeader
            title={isAr ? 'رؤى سريعة' : 'Quick Insights'}
            icon={Filter}
            hasSelection={selectedInsight !== null}
            onClear={() => setSelectedInsight(null)}
            isAr={isAr}
          />
          <div className="flex flex-wrap gap-1.5">
            {QUICK_INSIGHTS.map((item) => (
              <InsightChip
                key={item.key}
                count={item.count}
                icon={item.icon}
                label={isAr ? item.labelAr : item.label}
                amount={item.amount}
                selected={selectedInsight === item.key}
                onClick={() => setSelectedInsight(selectedInsight === item.key ? null : item.key)}
              />
            ))}
          </div>
        </div>

        <div className="w-px bg-[#e3e8ef] dark:bg-slate-700 self-stretch shrink-0" />

        {/* Financing Volume Breakdown */}
        <div className="flex-1 flex flex-col min-w-0">
          <PanelHeader
            title={isAr ? 'تفاصيل حجم التمويل' : 'Financing Volume Breakdown'}
            icon={TrendingUp}
            hasSelection={selectedFinancing !== null}
            onClear={() => setSelectedFinancing(null)}
            isAr={isAr}
          />
          <div className="flex flex-col gap-1.5">
            {FINANCING_VOLUME.map((item) => (
              <DataRow
                key={item.key}
                count={item.count}
                label={isAr ? item.labelAr : item.label}
                amount={item.amount}
                selected={selectedFinancing === item.key}
                onClick={() => setSelectedFinancing(selectedFinancing === item.key ? null : item.key)}
              >
                <img src={item.icon} alt="" className="w-5 h-5 shrink-0 object-contain" />
              </DataRow>
            ))}
          </div>
        </div>

        <div className="w-px bg-[#e3e8ef] dark:bg-slate-700 self-stretch shrink-0" />

        {/* Providers */}
        <div className="flex-1 flex flex-col min-w-0">
          <PanelHeader
            title={isAr ? 'مزودون' : 'Providers'}
            icon={Building2}
            hasSelection={selectedProvider !== null}
            onClear={() => setSelectedProvider(null)}
            isAr={isAr}
          />
          <div className="relative mb-1.5">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9aa4b2] dark:text-slate-500 pointer-events-none" />
            <input
              value={providerSearch}
              onChange={(e) => setProviderSearch(e.target.value)}
              placeholder={isAr ? 'بحث واختيار المزود...' : 'Search & select the provider...'}
              className="w-full h-10 ps-9 pe-9 border border-[#d5d7da] rounded-lg text-sm bg-white placeholder:text-[#697586] focus:outline-none focus:ring-1 focus:ring-[#0063f5] dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-slate-100"
            />
            <ChevronDown className="absolute end-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9aa4b2] dark:text-slate-500 pointer-events-none" />
          </div>
          <div className="flex flex-col gap-1.5">
            {filteredProviders.map((item) => (
              <DataRow
                key={item.key}
                count={item.count}
                label={isAr ? item.labelAr : item.label}
                amount={item.amount}
                selected={selectedProvider === item.key}
                onClick={() => setSelectedProvider(selectedProvider === item.key ? null : item.key)}
              >
                {item.logo
                  ? <img src={item.logo} alt={item.label} className="h-5 w-14 shrink-0 object-contain" />
                  : <span className="text-[11px] font-semibold text-[#697586] dark:text-slate-400 w-14 shrink-0">{item.label}</span>
                }
              </DataRow>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
