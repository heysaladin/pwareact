'use client';
import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { ChevronRight, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLang } from '@/lib/language-context';

type Customer = {
  id: string;
  name: string;
  nameAr: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Suspended';
  creditScore: number;
  creditRisk: string;
};

export default function ConciseCustomerList({
  customers,
  selectedId,
  onSelect,
  onClose,
}: {
  customers: Customer[];
  selectedId: string;
  onSelect: (id: string) => void;
  onClose: () => void;
}) {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const prevPositions = useRef<Map<string, number>>(new Map());
  const [chevronTop, setChevronTop] = useState<number | null>(null);

  useLayoutEffect(() => {
    rowRefs.current.forEach((el, id) => {
      const prevY = prevPositions.current.get(id);
      if (!el || prevY === undefined) return;
      const currY = el.getBoundingClientRect().top;
      const dy = prevY - currY;
      if (Math.abs(dy) < 2) return;
      el.style.transition = 'none';
      el.style.transform = `translateY(${dy}px)`;
      void el.getBoundingClientRect();
      el.style.transition = 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transform = '';
      const cleanup = () => { el.style.transition = ''; };
      el.addEventListener('transitionend', cleanup, { once: true });
    });
  }, [customers]);

  useEffect(() => {
    rowRefs.current.forEach((el, id) => {
      if (el) prevPositions.current.set(id, el.getBoundingClientRect().top);
    });
  }, [customers]);

  useEffect(() => {
    const el = rowRefs.current.get(selectedId);
    const container = containerRef.current;
    if (!el || !container) return;
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setChevronTop(elRect.top - containerRect.top + elRect.height / 2);
  }, [selectedId, customers]);

  function getRiskColor(risk: string) {
    if (risk === 'LOW RISK') return 'text-[#067647]';
    if (risk === 'HIGH RISK') return 'text-[#b42318]';
    return 'text-[#697586]';
  }

  function getStatusDot(status: string) {
    if (status === 'Active') return 'bg-[#12b76a]';
    if (status === 'Suspended') return 'bg-[#f04438]';
    return 'bg-[#f79009]';
  }

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col isolate w-[200px] shrink-0 border-r border-[#f2f4f7] overflow-visible dark:border-slate-800"
    >
      {/* Chevron tracks selected row */}
      <button
        onClick={onClose}
        aria-label="Back to list"
        style={
          chevronTop !== null
            ? { top: chevronTop, transform: 'translateY(-50%)', transition: 'top 350ms cubic-bezier(0.16, 1, 0.3, 1)' }
            : { top: '50%', transform: 'translateY(-50%)' }
        }
        className="absolute -end-4 z-30 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-[#d5d7da] shadow-sm hover:bg-[#f9fafb] text-[#344054] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
      >
        <ChevronRight className="w-4 h-4 rtl:rotate-180" />
      </button>

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Fade at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none dark:hidden"
          style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
        />

        {/* Title */}
        <div className="flex items-center px-4 py-4 bg-white shrink-0 border-b border-[#f2f4f7] dark:bg-slate-950 dark:border-slate-800">
          <span className="text-[#0063f5] text-xl font-bold">{isAr ? 'العملاء' : 'Customers'}</span>
        </div>

        {/* List */}
        <div className="flex flex-col overflow-y-auto flex-1">
          {customers.map((customer, i) => {
            const isSelected = customer.id === selectedId;
            return (
              <button
                key={customer.id}
                ref={el => {
                  if (el) rowRefs.current.set(customer.id, el);
                  else rowRefs.current.delete(customer.id);
                }}
                onClick={() => onSelect(customer.id)}
                className={cn(
                  'relative flex items-start pl-4 pr-6 py-3 w-full text-left transition-colors',
                  isSelected
                    ? 'bg-[#ebf3ff] dark:bg-blue-950/50'
                    : i % 2 === 0
                    ? 'bg-[#fcfcfd] hover:bg-[#f0f6ff] dark:bg-slate-950 dark:hover:bg-slate-900'
                    : 'bg-white hover:bg-[#f0f6ff] dark:bg-slate-950 dark:hover:bg-slate-900'
                )}
              >
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${getStatusDot(customer.status)}`} />
                    <span className="text-[13px] font-semibold text-[#181d27] dark:text-slate-100 truncate" dir="auto">
                      {isAr ? customer.nameAr : customer.name}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-[#697586] dark:text-slate-400 font-ltr" dir="ltr">
                    {customer.id}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-semibold ${getRiskColor(customer.creditRisk)}`}>
                      {customer.creditScore}
                    </span>
                    <span className={`text-[10px] font-medium ${getRiskColor(customer.creditRisk)}`}>
                      {customer.creditRisk}
                    </span>
                  </div>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-px bg-[#f2f4f7] dark:bg-slate-800" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
