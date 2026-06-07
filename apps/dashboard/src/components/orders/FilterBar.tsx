'use client';
import { useState } from 'react';
import { Calendar, Filter, TrendingUp, ChevronDown, Clock, X } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLang } from '@/lib/language-context';

type PanelKey = 'timeFilter' | 'quickInsights' | 'financingVolume' | 'providers';

const TIME_OPTIONS     = ['Today', 'Yesterday', 'Last 7 days', 'Last 30 days', 'This month', 'Last month', 'Year to date'];
const TIME_OPTIONS_AR  = ['اليوم', 'أمس', 'آخر 7 أيام', 'آخر 30 يومًا', 'هذا الشهر', 'الشهر الماضي', 'من بداية العام'];

const INSIGHTS_OPTIONS    = ['1 Denied — 219,048.60', '2 Servicing — 177,508.40', '0 Disbursed — 0.00', '24 Cancelled — 3,243,072.90', '1 Not eligible — 123,456.00', '3 Rejected — 465,960.60', '2 In review — 307,008.10'];
const INSIGHTS_OPTIONS_AR = ['1 مرفوض — 219,048.60', '2 خدمة — 177,508.40', '0 صُرف — 0.00', '24 ملغى — 3,243,072.90', '1 غير مؤهل — 123,456.00', '3 رُفض — 465,960.60', '2 قيد المراجعة — 307,008.10'];

const FINANCING_OPTIONS    = ['Real Estate (617,280.00)', 'Personal Loan (3,918,774.60)'];
const FINANCING_OPTIONS_AR = ['العقارات (617,280.00)', 'قرض شخصي (3,918,774.60)'];

const PROVIDER_OPTIONS = ['FAB Bank (9)', 'Real estate provider (9)', 'Amlak (9)', 'ANB (9)', 'Riyad Bank (9)', 'Social Development Bank (9)', 'SNB (9)', 'Al-Rajhi (9)', 'Bank Albilad (9)'];

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

function InsightPanel({
  options,
  activeOption,
  onSelect,
  onClose,
}: {
  options: string[];
  activeOption?: string;
  onSelect?: (opt: string) => void;
  onClose: () => void;
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
  const [selectedTimeIdx, setSelectedTimeIdx] = useState(5); // Last month

  const toggle = (key: PanelKey) =>
    setOpenPanels((prev) => {
      const next = new Set(prev);
      if (next.has(key)) { next.delete(key); } else { next.add(key); }
      return next;
    });

  const close = (key: PanelKey) =>
    setOpenPanels((prev) => { const next = new Set(prev); next.delete(key); return next; });

  const timeOpts    = isAr ? TIME_OPTIONS_AR    : TIME_OPTIONS;
  const insightOpts = isAr ? INSIGHTS_OPTIONS_AR : INSIGHTS_OPTIONS;
  const financeOpts = isAr ? FINANCING_OPTIONS_AR : FINANCING_OPTIONS;

  const panels: { key: PanelKey; options: string[]; activeOption?: string; onSelect?: (v: string) => void }[] = [
    { key: 'timeFilter',      options: timeOpts,    activeOption: timeOpts[selectedTimeIdx], onSelect: (v) => setSelectedTimeIdx(timeOpts.indexOf(v)) },
    { key: 'quickInsights',   options: insightOpts },
    { key: 'financingVolume', options: financeOpts },
    { key: 'providers',       options: PROVIDER_OPTIONS },
  ];

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
          <FilterToggleButton icon={Filter}     label={isAr ? 'رؤى سريعة'           : 'Quick Insights'}             active={openPanels.has('quickInsights')}   hasChevron onClick={() => toggle('quickInsights')} />
          <FilterToggleButton icon={TrendingUp} label={isAr ? 'تفاصيل حجم التمويل'  : 'Financing Volume Breakdown'}  active={openPanels.has('financingVolume')} hasChevron onClick={() => toggle('financingVolume')} />
          <FilterToggleButton icon={TrendingUp} label={isAr ? 'مزودون'              : 'Providers'}                   active={openPanels.has('providers')}      hasChevron onClick={() => toggle('providers')} />
        </div>
      </div>

      {/* Expandable panels */}
      {panels.map(({ key, options, activeOption, onSelect }) =>
        openPanels.has(key) ? (
          <InsightPanel
            key={key}
            options={options}
            activeOption={activeOption}
            onSelect={onSelect}
            onClose={() => close(key)}
          />
        ) : null
      )}
    </div>
  );
}
