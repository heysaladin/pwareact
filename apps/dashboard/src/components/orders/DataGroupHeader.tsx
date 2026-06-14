'use client';
import { BarChart2, Calendar } from 'lucide-react';
import { useLang } from '@/lib/language-context';

export default function DataGroupHeader() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <BarChart2 className="w-6 h-6 text-[#0063f5] shrink-0" />
        <span className="text-[25px] font-semibold text-[#0063f5] leading-8 whitespace-nowrap">
          {isAr ? 'لوحة العمليات' : 'Operations Dashboard'}
        </span>
      </div>
      <button className="flex items-center gap-1.5 px-3.5 py-2.5 bg-white border border-[#d5d7da] rounded-lg text-sm font-medium text-[#414651] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-gray-50 transition-colors dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
        <Calendar className="w-5 h-5 text-[#667085] dark:text-slate-400 shrink-0" />
        <span>{isAr ? '1 يناير 2026، 02:00 ص → 11 مارس 2026، 01:00 م' : 'January 01, 2026, 02:00 AM → March 11, 2026, 01:00 PM'}</span>
      </button>
    </div>
  );
}
