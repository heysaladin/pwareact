'use client';
import { useMemo, useRef, useLayoutEffect, useEffect, useState, useCallback } from 'react';
import type { Order, OrderStatus } from '@/hooks/useOrderSimulation';
import SARSymbol from '@/components/ui/SARSymbol';
import { cn } from '@/lib/utils';
import { useLang } from '@/lib/language-context';

const BOARD_COLUMNS: { status: OrderStatus; dotColor: string }[] = [
  { status: 'Pending',      dotColor: '#f79009' },
  { status: 'Under Review', dotColor: '#0063f5' },
  { status: 'Approved',     dotColor: '#079455' },
  { status: 'Rejected',     dotColor: '#d91c1c' },
  { status: 'Completed',    dotColor: '#697586' },
];

const statusLabelAr: Record<OrderStatus, string> = {
  Pending: 'معلّق', 'Under Review': 'قيد المراجعة', Approved: 'موافق عليه',
  Rejected: 'مرفوض', Completed: 'مكتمل',
};

interface Props {
  orders: Order[];
  onSelectOrder: (id: string) => void;
  selectedOrderId?: string | null;
  onClose?: () => void;
}

export default function OrdersBoardView({ orders, onSelectOrder, selectedOrderId, onClose }: Props) {
  const { lang } = useLang();
  const isAr = lang === 'ar';

  const grouped = useMemo(() => {
    const map: Record<OrderStatus, Order[]> = {
      Pending: [], 'Under Review': [], Approved: [], Rejected: [], Completed: [],
    };
    orders.forEach((o) => { if (map[o.status]) map[o.status].push(o); });
    return map;
  }, [orders]);

  const visibleColumns = selectedOrderId
    ? BOARD_COLUMNS.filter(({ status }) => grouped[status]?.some((o) => o.id === selectedOrderId))
    : BOARD_COLUMNS;

  const selectedCardRef = useRef<HTMLButtonElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  const cardListRef = useRef<HTMLDivElement>(null);
  const [chevronTop, setChevronTop] = useState<number | null>(null);

  const updateChevronTop = useCallback(() => {
    const card = selectedCardRef.current;
    const cardList = cardListRef.current;
    if (!card || !cardList) { setChevronTop(null); return; }
    setChevronTop(cardList.offsetTop + card.offsetTop - cardList.scrollTop + card.offsetHeight / 2);
  }, []);

  useLayoutEffect(() => {
    updateChevronTop();
  }, [selectedOrderId, orders, updateChevronTop]);

  useEffect(() => {
    const el = cardListRef.current;
    if (!el || !selectedOrderId) return;
    el.addEventListener('scroll', updateChevronTop, { passive: true });
    return () => el.removeEventListener('scroll', updateChevronTop);
  }, [selectedOrderId, updateChevronTop]);

  return (
    <div className={`flex flex-row gap-2 h-full py-2 ${selectedOrderId ? 'overflow-visible' : 'overflow-x-auto'}`}>
      {visibleColumns.map(({ status, dotColor }) => {
        const col = grouped[status] ?? [];
        const label = isAr ? statusLabelAr[status] : status;
        const hasSelectedCard = !!selectedOrderId && col.some((o) => o.id === selectedOrderId);
        return (
          <div
            key={status}
            ref={hasSelectedCard ? columnRef : undefined}
            className="relative flex flex-col gap-2 bg-[#fcfcfd] dark:bg-slate-800/50 rounded-xl p-2 shrink-0 w-[216px]"
          >
            {/* Column header */}
            <div className="flex items-center gap-2 px-3 py-1 shrink-0">
              <span className="relative flex items-center justify-center w-2 h-2 shrink-0">
                <span className="absolute inset-0 rounded-full bg-[#697586]" />
                <span className="absolute inset-0 rounded-full" style={{ backgroundColor: dotColor }} />
              </span>
              <span className="text-[16px] font-medium text-[#121a26] dark:text-slate-100 flex-1 leading-[26px] whitespace-nowrap">
                {label}
              </span>
              <span className="bg-[#eef1f6] dark:bg-slate-700 text-[#364152] dark:text-slate-300 text-[12px] rounded-[16px] w-[22px] flex items-center justify-center px-[7px] py-[3px] shrink-0 leading-4">
                {col.length}
              </span>
            </div>

            {/* Cards */}
            <div
              ref={hasSelectedCard ? cardListRef : undefined}
              className="relative flex flex-col gap-2 overflow-y-auto flex-1 min-h-0"
            >
              {col.map((order) => (
                <button
                  key={order.id}
                  ref={selectedOrderId === order.id ? selectedCardRef : undefined}
                  onClick={() => onSelectOrder(order.id)}
                  className={cn(
                    'w-[200px] text-left bg-white dark:bg-slate-900 border rounded-lg px-4 py-2 drop-shadow-[0px_1px_1px_rgba(10,13,18,0.05)] transition-colors shrink-0',
                    selectedOrderId === order.id
                      ? 'border-[#0063f5]'
                      : 'border-[#e3e8ef] dark:border-slate-700 hover:border-[#0063f5]/40'
                  )}
                >
                  <div className="flex flex-col gap-[6px]">
                    <p className="text-[14px] font-medium text-[#121a26] dark:text-slate-100 leading-6 whitespace-nowrap">
                      {order.id}
                    </p>
                    <div className="flex flex-col">
                      <p className="text-[14px] font-medium text-[#121a26] dark:text-slate-100 leading-6">
                        {order.customerName}
                      </p>
                      <p className="text-[12px] text-[#697586] dark:text-slate-400 leading-4 truncate">
                        {order.productName}
                      </p>
                    </div>
                    <div className="flex items-baseline gap-1 w-[160px] whitespace-nowrap">
                      <span className="flex items-baseline gap-0.5 text-[14px] text-[#0063f5]">
                        <SARSymbol className="w-3 h-3 shrink-0 relative top-px" />
                        {order.loanAmount}
                      </span>
                      <span className="text-[12px] text-[#697586] dark:text-slate-400 leading-4">
                        for 4 Years
                      </span>
                    </div>
                  </div>
                </button>
              ))}

              {/* Gradient fade at bottom */}
              {col.length > 4 && (
                <div
                  className="sticky bottom-0 left-0 right-0 h-16 pointer-events-none rounded-b-xl"
                  style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
                />
              )}
            </div>

            {/* Chevron — rendered outside the overflow-y-auto card list, positioned via measured offsetTop */}
            {hasSelectedCard && onClose && chevronTop !== null && (
              <button
                onClick={onClose}
                style={{ top: chevronTop }}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border bg-white shadow-sm hover:bg-[#f9fafb] text-[#344054] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 rounded-full w-8 h-8 border-[#e2e3e4] absolute -translate-y-1/2 -right-4 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4 rtl:rotate-180" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
