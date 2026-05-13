'use client';
import Image from 'next/image';
import { Bell, ChevronDown } from 'lucide-react';
import ThemeToggle from '@/components/ui/theme-toggle';

export default function Topbar() {
  return (
    <header className="bg-white border-b border-[#e2e7e9] flex items-center justify-between px-6 py-4 h-[66px] shrink-0 dark:bg-slate-950 dark:border-slate-800">
      <Image src="/logo.svg" alt="Tamawal" width={119} height={35} priority />

      <div className="flex items-center gap-4">
        <button className="flex items-center px-2 py-1 rounded-full text-[#121212] text-[11px] font-medium hover:bg-gray-50 dark:text-slate-200 dark:hover:bg-slate-800">
          عربي
        </button>

        <ThemeToggle />

        <button className="relative flex items-center p-1.5 rounded-full hover:bg-gray-50 dark:hover:bg-slate-800">
          <Bell className="w-[18px] h-[18px] text-[#667085] dark:text-slate-400" />
          <span className="absolute top-1.5 right-0 w-[5px] h-[5px] bg-red-500 rounded-full border-[1.5px] border-white dark:border-slate-950" />
        </button>

        <div className="flex items-center gap-1">
          <div className="flex items-center gap-2">
            <div className="flex items-center -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#e2e7e9] border border-white z-10 flex items-center justify-center text-xs font-semibold text-[#4b5565] dark:bg-slate-800 dark:border-slate-950 dark:text-slate-200">MM</div>
              <div className="w-8 h-8 rounded-full bg-[#bbd5fb] border border-white flex items-center justify-center text-xs font-semibold text-[#0063f5] dark:border-slate-950">AB</div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#363b44] text-[14px] font-semibold leading-tight dark:text-slate-100">Mohammed Mahdi</span>
              <span className="text-[#667085] text-[10px] leading-tight dark:text-slate-400">Alinma Bank</span>
            </div>
          </div>
          <button className="flex items-center justify-center w-6 h-6 rounded-full p-1 hover:bg-gray-50 dark:hover:bg-slate-800">
            <ChevronDown className="w-3 h-3 text-[#667085] dark:text-slate-400" />
          </button>
        </div>
      </div>
    </header>
  );
}
