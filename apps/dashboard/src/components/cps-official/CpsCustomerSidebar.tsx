'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { PROFILES } from './cps-data';

type TabKey = 'all' | 'customers' | 'guests';

const TABS: { key: TabKey; en: string; ar: string }[] = [
  { key: 'all',       en: 'All',       ar: 'الجميع' },
  { key: 'customers', en: 'Customers', ar: 'العملاء' },
  { key: 'guests',    en: 'Guests',    ar: 'الضيوف' },
];

const HEADER: Record<TabKey, { en: string; ar: string }> = {
  all:       { en: 'All',       ar: 'الجميع' },
  customers: { en: 'Customers', ar: 'العملاء' },
  guests:    { en: 'Guests',    ar: 'الضيوف' },
};

export default function CpsCustomerSidebar({ currentId, basePath, isAr, initialTab }: { currentId: string; basePath: string; isAr?: boolean; initialTab?: string }) {
  const asideRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLAnchorElement>(null);
  const [btnTop, setBtnTop] = useState<number>(80);
  const [activeTab, setActiveTab] = useState<TabKey>(
    initialTab === 'customers' ? 'customers' : initialTab === 'guests' ? 'guests' : 'all'
  );

  const filtered = PROFILES.filter(p => {
    if (activeTab === 'customers') return p.type === 'Customer';
    if (activeTab === 'guests')    return p.type === 'Guest';
    return true;
  });

  useEffect(() => {
    function updatePosition() {
      if (!asideRef.current || !selectedRef.current) return;
      const asideRect = asideRef.current.getBoundingClientRect();
      const rowRect = selectedRef.current.getBoundingClientRect();
      setBtnTop(rowRect.top - asideRect.top + rowRect.height / 2);
    }
    updatePosition();
    const scrollEl = scrollRef.current;
    scrollEl?.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);
    return () => {
      scrollEl?.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [currentId, activeTab]);

  return (
    <aside ref={asideRef} className={cn(
      "relative flex flex-col isolate w-[200px] shrink-0 overflow-visible dark:border-slate-800",
      isAr ? "border-l border-[#f2f4f7]" : "border-r border-[#f2f4f7]"
    )}>
      <Link
        href={basePath}
        aria-label="Back to list"
        className="absolute -end-[11px] z-30 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-[#e9eaeb] shadow-sm hover:bg-[#f9fafb] text-[#344054] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
        style={{ top: btnTop, transform: 'translateY(-50%)', transition: 'top 350ms cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <ChevronRight className={cn("w-4 h-4", isAr && "rotate-180")} aria-hidden="true" />
      </Link>

      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none dark:hidden" style={{ background: 'linear-gradient(transparent, white)' }} />

        {/* Header */}
        <div className="px-4 pt-4 pb-2 bg-white shrink-0 dark:bg-slate-950">
          <span className="text-[#0063f5] text-[25px] font-medium leading-[32px]">
            {isAr ? HEADER[activeTab].ar : HEADER[activeTab].en}
          </span>
        </div>

        {/* Tabs */}
        <div className="flex px-2 pb-2 gap-0.5 bg-white shrink-0 border-b border-[#f2f4f7] dark:bg-slate-950 dark:border-slate-800">
          {TABS.map(t => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={cn(
                'flex-1 py-1 text-[11px] font-medium rounded-md transition-colors',
                activeTab === t.key
                  ? 'bg-[#eaf2ff] text-[#0053cc]'
                  : 'text-[#717680] hover:text-[#414651] hover:bg-[#f5f5f5]'
              )}
            >
              {isAr ? t.ar : t.en}
            </button>
          ))}
        </div>

        {/* List */}
        <div ref={scrollRef} className="flex flex-col overflow-y-auto flex-1">
          {filtered.map(p => {
            const isSelected = p.id === currentId;
            const showBadge = activeTab === 'all';
            const isCustomer = p.type === 'Customer';
            return (
              <Link
                key={p.id}
                ref={isSelected ? selectedRef : undefined}
                href={`${basePath}/${p.id}`}
                className={cn(
                  'relative flex items-center px-4 py-2 w-full transition-colors',
                  isSelected ? 'bg-[#eaf2ff] dark:bg-blue-950/50' : 'bg-white hover:bg-[#f0f6ff] dark:bg-slate-950 dark:hover:bg-slate-900'
                )}
              >
                <div className="flex flex-col gap-[6px] flex-1 min-w-0">
                  <span className="text-[14px] font-medium text-[#181d27] leading-6 tracking-[0.0336px] dark:text-slate-100 truncate">
                    {isAr ? p.nameAr : p.name}
                  </span>
                  <div className="flex items-center gap-[6px]">
                    {showBadge && (
                      <div className={cn(
                        'flex items-center px-1 rounded-2xl border text-[12px] font-medium leading-[18px] tracking-[0.012px] shrink-0',
                        isCustomer
                          ? 'bg-[#eaf2ff] border-[#aacbfc] text-[#0053cc]'
                          : 'bg-[#fffaeb] border-[#fedf89] text-[#b54708]'
                      )}>
                        {isCustomer ? 'C' : 'G'}
                      </div>
                    )}
                    <span className="text-[12px] text-[#717680] leading-4 tracking-[0.048px] dark:text-slate-400 truncate">
                      {isAr ? `بطاقة تعريف: ${p.id}` : `ID: ${p.id}`}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-1px_0px_0px_#f2f4f7] dark:shadow-none" />
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
