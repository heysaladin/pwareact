'use client';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

type CardFooterProps = {
  currentPage?: number;
  totalPages?: number;
};

export default function CardFooter({ currentPage = 1, totalPages = 50 }: CardFooterProps) {
  const pages = [1, 2, '...', totalPages - 1, totalPages];

  return (
    <div className="flex items-center justify-between px-6 py-3 rounded-b-lg overflow-hidden">
      <div className="flex items-center gap-2 py-1.5">
        <span className="text-[#344054] text-[14px] dark:text-slate-300">Show</span>
        <div className="flex items-center bg-white border border-[#eaecf0] rounded-[10px] overflow-hidden dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center pl-3.5 py-2.5">
            <span className="text-[#667085] text-[14px] dark:text-slate-300">10</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-2.5">
            <ChevronDown className="w-4 h-4 text-[#667085] dark:text-slate-400" />
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-[#eaecf0] rounded-l-[10px] hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800">
          <ChevronLeft className="w-4 h-4 text-[#667085] dark:text-slate-400" />
        </button>

        {pages.map((page, i) => (
          <button
            key={i}
            className={`relative flex flex-col items-center justify-center w-10 border-t border-b border-[#eaecf0] text-[14px] ${
              page === currentPage
                ? 'bg-[#f9fafb] text-[#1d2939] font-medium dark:bg-slate-800 dark:text-slate-100'
                : 'bg-white text-[#98a2b3] dark:bg-slate-900 dark:text-slate-500'
            }`}
          >
            <div className="w-full h-px bg-[#eaecf0] dark:bg-slate-700" />
            <span className="flex items-center justify-center flex-1 px-2 py-[9px]">{page}</span>
            <div className="w-full h-px bg-[#eaecf0] dark:bg-slate-700" />
          </button>
        ))}

        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-[#eaecf0] rounded-r-[10px] hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800">
          <ChevronRight className="w-4 h-4 text-[#667085] dark:text-slate-400" />
        </button>
      </div>
    </div>
  );
}
