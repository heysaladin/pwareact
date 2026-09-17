'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { PROFILES } from './cps-data';

export default function CpsCustomerSidebar({ currentId, basePath }: { currentId: string; basePath: string }) {
  return (
    <aside className="w-[198px] shrink-0 border-r border-[#f2f4f7] bg-white flex flex-col overflow-hidden dark:bg-slate-900 dark:border-slate-800">
      <div className="px-4 py-4 border-b border-[#f2f4f7] dark:border-slate-800 shrink-0">
        <h2 className="text-[24px] font-bold text-[#0063f5]">Customers</h2>
      </div>
      <div className="flex-1 overflow-y-auto relative">
        {PROFILES.map(p => {
          const isSelected = p.id === currentId;
          return (
            <Link key={p.id} href={`${basePath}/${p.id}`} className="block">
              <div className={cn(
                'flex items-center px-4 py-2',
                isSelected ? 'bg-[#ebf3ff]' : 'bg-[#fcfcfd] hover:bg-[#f5f9ff]',
                'shadow-[inset_0px_-1px_0px_0px_#f2f4f7]',
              )}>
                <div className="flex flex-col gap-1.5 min-w-0 flex-1">
                  <span className="text-[14px] font-medium text-[#121a26] dark:text-slate-100 leading-6 truncate">
                    {p.name}
                  </span>
                  <div className="flex items-center gap-0.5 text-[12px] text-[#697586] dark:text-slate-400 whitespace-nowrap">
                    <span>ID: {p.id}</span>
                  </div>
                </div>
                {isSelected && <ChevronRight className="w-4 h-4 text-[#0063f5] shrink-0" />}
              </div>
            </Link>
          );
        })}
        <div className="absolute bottom-0 left-0 right-0 h-[72px] pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)' }} />
      </div>
    </aside>
  );
}
