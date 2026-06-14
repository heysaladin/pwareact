'use client';
import { useState } from 'react';
import { Calendar, Filter, TrendingUp, ChevronDown, Clock, X, Building2, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLang } from '@/lib/language-context';
import SARSymbol from '@/components/ui/SARSymbol';

type PanelKey = 'timeFilter' | 'quickInsights' | 'financingVolume' | 'providers';

const TIME_OPTIONS    = ['Today', 'Yesterday', 'Last 7 days', 'Last 30 days', 'This month', 'Last month', 'Year to date'];
const TIME_OPTIONS_AR = ['اليوم', 'أمس', 'آخر 7 أيام', 'آخر 30 يومًا', 'هذا الشهر', 'الشهر الماضي', 'من بداية العام'];

const QUICK_INSIGHTS = [
  { key: 'servicing',   label: 'Servicing',    labelAr: 'الخدمة',       count: 16,  amount: '177,508.40',   selected: true, icon: 'http://localhost:3845/assets/abe1a74f4163edef560c43358cf74d300b272275.svg' },
  { key: 'denied',      label: 'Denied',       labelAr: 'مرفوض',        count: 18,  amount: '219,048.60',                  icon: 'http://localhost:3845/assets/0f293c08432f79115b1d81d1bce2ee13d4fa17d2.svg' },
  { key: 'cancelled',   label: 'Cancelled',    labelAr: 'ملغى',         count: 104, amount: '3,243,072.90',                icon: 'http://localhost:3845/assets/58989a79358e0f51d46bdb1094ea12c9964b4ef8.svg' },
  { key: 'notEligible', label: 'Not eligible', labelAr: 'غير مؤهل',     count: 25,  amount: '123,456.00',                  icon: 'http://localhost:3845/assets/7eb09902ebf8d53cdd3940094e48ac475fce7d59.svg' },
  { key: 'rejected',    label: 'Rejected',     labelAr: 'رُفض',         count: 35,  amount: '465,960.60',                  icon: 'http://localhost:3845/assets/cdc76e3d277332d82fcde9ba2266831e67f001df.svg' },
  { key: 'inReview',    label: 'In review',    labelAr: 'قيد المراجعة', count: 1,   amount: '307,008.10',                  icon: 'http://localhost:3845/assets/7c0cea03436b06a3ff0ae3b0d35fd1c72560c79a.svg' },
];

const FINANCING_VOLUME: { key: string; label: string; labelAr: string; count: number; amount: string; selected?: boolean; icon: string }[] = [
  { key: 'personalLoan', label: 'Personal Loan',  labelAr: 'قرض شخصي',    count: 178, amount: '3,918,774.60', selected: true, icon: 'http://localhost:3845/assets/5a77256f055552e9e79886dc3440c85820f950e3.svg' },
  { key: 'carLoan',      label: 'Car Loan',       labelAr: 'قرض سيارة',   count: 125, amount: '3,918,774.60',                icon: 'http://localhost:3845/assets/614cce53f191707412e73ad28452e03a14bea37c.svg' },
  { key: 'realEstate',   label: 'Real Estate',    labelAr: 'عقارات',      count: 39,  amount: '3,918,774.60',                icon: 'http://localhost:3845/assets/5b10f29a9e39f969c7e172d18fb18f24e8fbc685.svg' },
  { key: 'cardFinance',  label: 'Card Financing', labelAr: 'تمويل بطاقة', count: 64,  amount: '3,918,774.60',                icon: 'http://localhost:3845/assets/b4907e3706dbcc571a8a4593022af68334ffe4ab.svg' },
];

const PROVIDERS = [
  { key: 'sab',     label: 'SAB',     count: 69, amount: '3,918,774.60', selected: true, logo: 'http://localhost:3845/assets/6f09b218246cc00404f015a32e9f61bd88d67bc5.png' },
  { key: 'alahli',  label: 'Alahli',  count: 38, amount: '3,918,774.60',                logo: 'http://localhost:3845/assets/28aa3cef0af1c883e0caeaccb858bf841e5ae9be.png' },
  { key: 'albilad', label: 'Albilad', count: 24, amount: '3,918,774.60',                logo: 'http://localhost:3845/assets/ebc2dd5515877664b5557b9cbc6a2ca92a6ede94.png' },
  { key: 'alrajhi', label: 'Alrajhi', count: 16, amount: '3,918,774.60',                logo: 'http://localhost:3845/assets/04c44eb30fe8eafb10f6e8717923e709ea74449c.svg' },
];

function FilterToggleButton({
  icon: Icon,
  label,
  active,
  hasChevron = false,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  active: boolean;
  hasChevron?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-1 px-2 py-2 rounded-lg text-[14px] text-[#121a26] font-medium whitespace-nowrap transition-all dark:text-slate-100',
        active
          ? 'bg-white border border-[#0063f5] shadow-[0px_0px_0px_4px_rgba(0,99,245,0.1)] dark:bg-slate-900'
          : 'bg-white border border-[#e3e8ef] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-gray-50 dark:bg-slate-900 dark:border-slate-700 dark:hover:bg-slate-800'
      )}
    >
      <Icon className="w-4 h-4 shrink-0 text-[#667085] dark:text-slate-400" />
      <span className="px-0.5">{label}</span>
      {active && <span className="text-[#d91c1c] text-[9px] leading-none">●</span>}
      {hasChevron && <ChevronDown className="w-4 h-4 shrink-0 text-[#667085] dark:text-slate-400" />}
    </button>
  );
}

function PanelHeader({
  title,
  icon: Icon,
  onClose,
  isAr,
}: {
  title: string;
  icon: LucideIcon;
  onClose: () => void;
  isAr: boolean;
}) {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-1.5">
        <Icon className="w-4 h-4 shrink-0 text-[#667085] dark:text-slate-400" />
        <span className="text-[14px] font-semibold text-[#121a26] dark:text-slate-100 whitespace-nowrap">{title}</span>
      </div>
      <button
        onClick={onClose}
        className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-[#d5d7da] bg-white text-[#414651] text-[12px] font-medium hover:bg-gray-50 transition-colors dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 shrink-0"
      >
        <X className="w-3 h-3" />
        {isAr ? 'مسح' : 'Clear'}
      </button>
    </div>
  );
}

function DataRow({
  count,
  label,
  amount,
  selected,
  children,
}: {
  count: number;
  label: string;
  amount: string;
  selected?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <button
      className={cn(
        'w-full flex items-center rounded-lg border text-left transition-colors overflow-hidden',
        selected
          ? 'border-[#0063f5] bg-white dark:bg-slate-900'
          : 'border-[#e9eaeb] bg-transparent hover:bg-white dark:border-slate-700 dark:hover:bg-slate-800'
      )}
    >
      <span className="px-2.5 py-2.5 text-[13px] font-semibold text-[#121a26] dark:text-slate-100 shrink-0 min-w-[36px] text-center">
        {count}
      </span>
      <span className={cn(
        'border-l border-[#e9eaeb] dark:border-slate-700 px-2.5 py-2.5 text-[13px] text-[#181d27] dark:text-slate-200 flex-1 flex items-center gap-1.5 min-w-0 text-left',
      )}>
        {children}
        {label}
      </span>
      <span className="flex items-center gap-1 px-2.5 py-2.5 text-[13px] font-medium text-[#121a26] dark:text-slate-100 shrink-0 whitespace-nowrap">
        <SARSymbol className="w-3 h-3 shrink-0" />
        {amount}
      </span>
    </button>
  );
}

function TimePanel({
  options,
  activeOption,
  onSelect,
  onClose,
  isAr,
}: {
  options: string[];
  activeOption?: string;
  onSelect?: (opt: string) => void;
  onClose: () => void;
  isAr: boolean;
}) {
  return (
    <div className="flex items-start justify-between p-2 border border-[#0063f5] rounded-2xl w-full bg-white dark:bg-slate-900">
      <div className="flex items-center gap-1.5 flex-wrap">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect?.(opt)}
            className={cn(
              'relative px-3.5 py-2.5 rounded-lg border text-[14px] font-medium leading-5 whitespace-nowrap shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition-colors',
              opt === activeOption
                ? 'border-[#0063f5] text-[#0063f5] bg-white dark:bg-slate-900 dark:text-blue-300'
                : 'border-[#e9eaeb] text-[#181d27] bg-transparent hover:bg-gray-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
            )}
          >
            {opt}
            <span className="absolute inset-0 rounded-[inherit] pointer-events-none shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
          </button>
        ))}
      </div>
      <button
        onClick={onClose}
        className="relative flex items-center justify-center p-2 rounded-lg border border-[#d5d7da] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 hover:bg-gray-50 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
      >
        <X className="w-4 h-4 text-[#414651] dark:text-slate-300" />
        <span className="absolute inset-0 rounded-[inherit] pointer-events-none shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
      </button>
    </div>
  );
}

export default function FilterBar() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const [openPanels, setOpenPanels] = useState<Set<PanelKey>>(new Set());
  const [selectedTimeIdx, setSelectedTimeIdx] = useState(5);
  const [providerSearch, setProviderSearch] = useState('');

  const toggle = (key: PanelKey) =>
    setOpenPanels((prev) => {
      const next = new Set(prev);
      if (next.has(key)) { next.delete(key); } else { next.add(key); }
      return next;
    });

  const close = (key: PanelKey) =>
    setOpenPanels((prev) => { const next = new Set(prev); next.delete(key); return next; });

  const timeOpts = isAr ? TIME_OPTIONS_AR : TIME_OPTIONS;

  const activeSidePanels = (
    (['quickInsights', 'financingVolume', 'providers'] as PanelKey[]).filter((k) => openPanels.has(k))
  );

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Main filter bar */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 shrink-0 text-[#4b5565] dark:text-slate-400" />
            <span className="text-[14px] font-semibold text-[#4b5565] dark:text-slate-300">
              {isAr
                ? '1 يناير 2026، 02:00 ص ← 11 مارس 2026، 01:00 م'
                : 'January 01, 2026, 02:00 AM → March 11, 2026, 01:00 PM'}
            </span>
          </div>
          <FilterToggleButton icon={Clock} label={isAr ? 'فلتر الوقت' : 'Time Filter'} active={openPanels.has('timeFilter')} onClick={() => toggle('timeFilter')} />
        </div>

        <div className="flex items-center gap-1.5">
          <FilterToggleButton icon={Filter}     label={isAr ? 'رؤى سريعة'          : 'Quick Insights'}            active={openPanels.has('quickInsights')}   hasChevron onClick={() => toggle('quickInsights')} />
          <FilterToggleButton icon={TrendingUp} label={isAr ? 'تفاصيل حجم التمويل' : 'Financing Volume Breakdown'} active={openPanels.has('financingVolume')} hasChevron onClick={() => toggle('financingVolume')} />
          <FilterToggleButton icon={Building2}  label={isAr ? 'مزودون'             : 'Providers'}                  active={openPanels.has('providers')}      hasChevron onClick={() => toggle('providers')} />
        </div>
      </div>

      {/* Time filter panel */}
      {openPanels.has('timeFilter') && (
        <TimePanel
          options={timeOpts}
          activeOption={timeOpts[selectedTimeIdx]}
          onSelect={(v) => setSelectedTimeIdx(timeOpts.indexOf(v))}
          onClose={() => close('timeFilter')}
          isAr={isAr}
        />
      )}

      {/* Side-by-side panels: Quick Insights | Financing Volume | Providers */}
      {activeSidePanels.length > 0 && (
        <div className="flex flex-row gap-4 w-full bg-[#fcfcfd] border-t border-l border-r border-[#e3e8ef] rounded-t-xl p-4 dark:bg-slate-900/50 dark:border-slate-700">

          {/* Quick Insights */}
          {openPanels.has('quickInsights') && (
            <div className="flex-1 flex flex-col gap-1.5 min-w-0">
              <PanelHeader
                title={isAr ? 'رؤى سريعة' : 'Quick Insights'}
                icon={Filter}
                onClose={() => close('quickInsights')}
                isAr={isAr}
              />
              {QUICK_INSIGHTS.map((item) => (
                <DataRow
                  key={item.key}
                  count={item.count}
                  label={isAr ? item.labelAr : item.label}
                  amount={item.amount}
                  selected={item.selected}
                >
                  <img src={item.icon} alt="" className="w-5 h-5 shrink-0" />
                </DataRow>
              ))}
            </div>
          )}

          {/* Divider */}
          {openPanels.has('quickInsights') && openPanels.has('financingVolume') && (
            <div className="w-px bg-[#e3e8ef] dark:bg-slate-700 self-stretch shrink-0" />
          )}

          {/* Financing Volume Breakdown */}
          {openPanels.has('financingVolume') && (
            <div className="flex-1 flex flex-col gap-1.5 min-w-0">
              <PanelHeader
                title={isAr ? 'تفاصيل حجم التمويل' : 'Financing Volume Breakdown'}
                icon={TrendingUp}
                onClose={() => close('financingVolume')}
                isAr={isAr}
              />
              {FINANCING_VOLUME.map((item) => (
                <DataRow
                  key={item.key}
                  count={item.count}
                  label={isAr ? item.labelAr : item.label}
                  amount={item.amount}
                  selected={item.selected}
                >
                  <img src={item.icon} alt="" className="w-5 h-5 shrink-0 object-contain" />
                </DataRow>
              ))}
            </div>
          )}

          {/* Divider */}
          {openPanels.has('financingVolume') && openPanels.has('providers') && (
            <div className="w-px bg-[#e3e8ef] dark:bg-slate-700 self-stretch shrink-0" />
          )}

          {/* Providers */}
          {openPanels.has('providers') && (
            <div className="flex-1 flex flex-col gap-1.5 min-w-0">
              <PanelHeader
                title={isAr ? 'مزودون' : 'Providers'}
                icon={Building2}
                onClose={() => close('providers')}
                isAr={isAr}
              />

              {/* Provider search */}
              <div className="relative mb-1.5">
                <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9aa4b2] dark:text-slate-500 pointer-events-none" />
                <input
                  value={providerSearch}
                  onChange={(e) => setProviderSearch(e.target.value)}
                  placeholder={isAr ? 'بحث واختيار المزود' : 'Search & select the provider'}
                  className="w-full h-10 ps-9 pe-9 border border-[#d5d7da] rounded-lg text-sm bg-white placeholder:text-[#697586] focus:outline-none focus:ring-1 focus:ring-[#0063f5] dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-slate-100"
                />
                <ChevronDown className="absolute end-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9aa4b2] dark:text-slate-500 pointer-events-none" />
              </div>

              {PROVIDERS.filter((p) =>
                !providerSearch || p.label.toLowerCase().includes(providerSearch.toLowerCase())
              ).map((item) => (
                <DataRow
                  key={item.key}
                  count={item.count}
                  label={item.label}
                  amount={item.amount}
                  selected={item.selected}
                >
                  <img src={item.logo} alt={item.label} className="w-5 h-5 shrink-0 object-contain rounded" />
                </DataRow>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
