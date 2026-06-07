'use client';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useLang } from '@/lib/language-context';

export default function CardHeader({ liveCount: _liveCount }: { liveCount?: number }) {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <h2 className="text-[#0063f5] text-2xl font-bold">{isAr ? 'طلبات' : 'Orders'}</h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative w-[260px]">
          <input
            className="w-full h-10 ps-9 pe-3 border border-[#d5d7da] rounded-lg text-sm text-[#717680] bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0063f5] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:placeholder:text-slate-500"
            placeholder={isAr ? 'البحث باستخدام رقم الطلب، رقم العميل، الاسم...' : 'Search by Order ID, Customer ID, Name...'}
          />
          <Search className="absolute start-3 top-3 w-4 h-4 text-[#9aa4b2] dark:text-slate-500" />
        </div>

        <button className="flex items-center gap-1.5 px-4 py-2.5 bg-white border border-[#d5d7da] rounded-lg text-sm font-medium text-[#344054] shadow-sm hover:bg-[#f9fafb] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
          <SlidersHorizontal className="w-4 h-4 text-[#667085] dark:text-slate-400" />
          {isAr ? 'فلتر' : 'Filter'}
          <ChevronDown className="w-4 h-4 text-[#667085] dark:text-slate-400" />
        </button>
      </div>
    </div>
  );
}
