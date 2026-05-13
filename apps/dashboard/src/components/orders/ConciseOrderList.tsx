'use client';
import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import SARSymbol from '@/components/ui/SARSymbol';

type Priority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
type OrderStatus = 'Pending' | 'Approved' | 'Rejected' | 'Under Review' | 'Completed';

type Order = {
  id: string; createdAt: string; updatedAt: string; priority: Priority;
  slaTimeLeft: string; slaEscalation: string; slaProgress: number; aiScore: number;
  customerName: string; customerId: string; customerPhone: string; customerEmail: string;
  productName: string; productNameAr: string; status: OrderStatus;
  loanAmount: string; apr: string; managementFees: string; brokerageFees: string;
};

function getAiGroup(score: number): 'success' | 'warning' | 'error' {
  if (score >= 80) return 'success';
  if (score >= 50) return 'warning';
  return 'error';
}

const aiColors = {
  success: { bg: 'bg-[#f8fafc] dark:bg-emerald-950', border: 'border-[#dcfae6] dark:border-emerald-900', text: 'text-[#079455] dark:text-emerald-300' },
  warning: { bg: 'bg-[#f8fafc] dark:bg-amber-950', border: 'border-[#fee4c3] dark:border-amber-900', text: 'text-[#ea8808] dark:text-amber-300' },
  error:   { bg: 'bg-[#f8fafc] dark:bg-red-950', border: 'border-[#fee2e2] dark:border-red-900', text: 'text-[#d91c1c] dark:text-red-300' },
};

const priorityColors: Record<Priority, { bg: string; border: string; text: string }> = {
  LOW:      { bg: 'bg-[#f8fafc] dark:bg-emerald-950', border: 'border-[#dcfae6] dark:border-emerald-900', text: 'text-[#079455] dark:text-emerald-300' },
  MEDIUM:   { bg: 'bg-[#f8fafc] dark:bg-amber-950', border: 'border-[#fee4c3] dark:border-amber-900', text: 'text-[#ea8808] dark:text-amber-300' },
  HIGH:     { bg: 'bg-[#f8fafc] dark:bg-red-950', border: 'border-[#fee2e2] dark:border-red-900', text: 'text-[#d91c1c] dark:text-red-300' },
  CRITICAL: { bg: 'bg-[#f8fafc] dark:bg-red-950', border: 'border-[#fee2e2] dark:border-red-900', text: 'text-[#d91c1c] dark:text-red-300' },
};

const slaColors = {
  success: 'text-[#079455]',
  warning: 'text-[#ea8808]',
  error:   'text-[#d91c1c]',
};

export default function ConciseOrderList({
  orders,
  selectedId,
  onSelect,
  onClose,
}: {
  orders: Order[];
  selectedId: string;
  onSelect: (id: string) => void;
  onClose: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const prevPositions = useRef<Map<string, number>>(new Map());
  const [chevronTop, setChevronTop] = useState<number | null>(null);

  // ── FLIP animation for row reordering ──
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
  }, [orders]);

  useEffect(() => {
    rowRefs.current.forEach((el, id) => {
      if (el) prevPositions.current.set(id, el.getBoundingClientRect().top);
    });
  }, [orders]);

  // ── Chevron tracks selected row ──
  useEffect(() => {
    const el = rowRefs.current.get(selectedId);
    const container = containerRef.current;
    if (!el || !container) return;
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setChevronTop(elRect.top - containerRect.top + elRect.height / 2);
  }, [selectedId, orders]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col isolate w-[200px] shrink-0 border-r border-[#f2f4f7] overflow-visible dark:border-slate-800"
    >
      {/* ── Chevron — tracks selected row ── */}
      <button
        onClick={onClose}
        aria-label="Back to list"
        style={
          chevronTop !== null
            ? { top: chevronTop, transform: 'translateY(-50%)', transition: 'top 350ms cubic-bezier(0.16, 1, 0.3, 1)' }
            : { top: '50%', transform: 'translateY(-50%)' }
        }
        className="absolute -right-4 z-30 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-[#d5d7da] shadow-sm hover:bg-[#f9fafb] text-[#344054] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Fade out at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none dark:hidden"
          style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
        />

        {/* Title */}
        <div className="flex items-center px-4 py-4 bg-white shrink-0 border-b border-[#f2f4f7] dark:bg-slate-950 dark:border-slate-800">
          <span className="text-[#0063f5] text-2xl font-bold">Orders</span>
        </div>

        {/* List */}
        <div className="flex flex-col overflow-y-auto flex-1">
          {orders.map((order, i) => {
            const aiGroup = getAiGroup(order.aiScore);
            const ai = aiColors[aiGroup];
            const pri = priorityColors[order.priority];
            const slaColor = slaColors[aiGroup];
            const isSelected = order.id === selectedId;
            const isSlaBreached = order.slaProgress <= 10;

            return (
              <button
                key={order.id}
                ref={el => {
                  if (el) rowRefs.current.set(order.id, el);
                  else rowRefs.current.delete(order.id);
                }}
                onClick={() => onSelect(order.id)}
                className={cn(
                  'relative flex items-center pl-4 pr-6 py-2 w-full text-left transition-colors',
                  isSelected
                    ? 'bg-[#ebf3ff] dark:bg-blue-950/50'
                    : i % 2 === 0
                    ? 'bg-[#fcfcfd] hover:bg-[#f0f6ff] dark:bg-slate-950 dark:hover:bg-slate-900'
                    : 'bg-white hover:bg-[#f0f6ff] dark:bg-slate-950 dark:hover:bg-slate-900'
                )}
              >
                <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                  <span className="text-[14px] font-semibold text-[#181d27] leading-snug dark:text-slate-100">{order.id}</span>
                  <div className="flex items-center justify-between">
                    <span className={cn('flex items-center gap-1 px-2 py-1 rounded-full border text-[14px] font-semibold', ai.bg, ai.border, ai.text)}>
                      <Star className="w-3 h-3" />{order.aiScore}
                    </span>
                    <span className={cn('flex items-center justify-center h-8 px-3 py-2 rounded-full border text-[14px] font-semibold', pri.bg, pri.border, pri.text)}>
                      {order.priority}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', isSlaBreached ? 'bg-[#d91c1c]' : 'bg-[#697586]')}>
                        <span className={cn('block w-full h-full rounded-full', slaColor.replace('text-', 'bg-'))} />
                      </span>
                      <span className={cn('text-[12px] font-medium', slaColor)}>
                        {isSlaBreached ? 'Breached' : order.slaTimeLeft}
                      </span>
                    </div>
                    <span className="text-[12px] text-[#697586] dark:text-slate-400">
                      {isSlaBreached ? 'Escalation now' : order.slaEscalation}
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
