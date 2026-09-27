'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { PROFILES } from './cps-data';

export default function CpsCustomerSidebar({ currentId, basePath }: { currentId: string; basePath: string }) {
  const asideRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLAnchorElement>(null);
  const [badge, setBadge] = useState<{ top: number; visible: boolean } | null>(null);

  useEffect(() => {
    function updatePosition() {
      if (!asideRef.current || !scrollRef.current || !selectedRef.current) return;
      const asideRect = asideRef.current.getBoundingClientRect();
      const scrollRect = scrollRef.current.getBoundingClientRect();
      const rowRect = selectedRef.current.getBoundingClientRect();
      setBadge({
        top: rowRect.top - asideRect.top + rowRect.height / 2,
        visible: rowRect.top >= scrollRect.top && rowRect.bottom <= scrollRect.bottom,
      });
    }
    updatePosition();
    const scrollEl = scrollRef.current;
    scrollEl?.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);
    return () => {
      scrollEl?.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [currentId]);

  return (
    <aside ref={asideRef} className="w-[198px] shrink-0 border-r border-[#f2f4f7] bg-white flex flex-col relative dark:bg-slate-900 dark:border-slate-800">
      <div className="p-4 shrink-0">
        <h2 className="text-[25px] font-medium text-[#0063f5] leading-[32px]">Customers</h2>
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto relative">
        {PROFILES.map(p => {
          const isSelected = p.id === currentId;
          return (
            <Link
              key={p.id}
              ref={isSelected ? selectedRef : undefined}
              href={`${basePath}/${p.id}`}
              className="block"
            >
              <div className={cn(
                'flex items-center px-4 py-2',
                isSelected ? 'bg-[#eaf2ff]' : 'bg-white hover:bg-[#f5f9ff]',
                'shadow-[inset_0px_-1px_0px_0px_#f2f4f7]',
              )}>
                <div className="flex flex-col gap-1.5 min-w-0 flex-1">
                  <span className="text-[14px] font-medium text-[#252b37] dark:text-slate-100 leading-6 tracking-[0.0336px] truncate">
                    {p.name}
                  </span>
                  <div className="flex items-center gap-0.5 text-[12px] text-[#717680] dark:text-slate-400 leading-4 tracking-[0.048px] whitespace-nowrap">
                    <span>ID: {p.id}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        <div className="absolute bottom-0 left-0 right-0 h-[72px] pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)' }} />
      </div>
      {badge?.visible && (
        <div
          className="absolute -end-4 bg-white border border-[#e9eaeb] rounded-full p-2 flex items-center justify-center z-20"
          style={{ top: badge.top, transform: 'translateY(-50%)' }}
        >
          <ChevronRight className="w-4 h-4 text-[#0063f5] shrink-0" />
        </div>
      )}
    </aside>
  );
}
