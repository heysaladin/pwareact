'use client';
import { useMemo } from 'react';
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
}

export default function OrdersBoardView({ orders, onSelectOrder, selectedOrderId }: Props) {
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

  return (
    <div className="flex flex-row gap-2 h-full overflow-x-auto pb-2">
      {visibleColumns.map(({ status, dotColor }) => {
        const col = grouped[status] ?? [];
        const label = isAr ? statusLabelAr[status] : status;
        return (
          <div
            key={status}
            className="flex flex-col gap-2 bg-[#fcfcfd] dark:bg-slate-800/50 rounded-xl p-2 shrink-0 w-[216px]"
          >
            {/* Column header */}
            <div className="flex items-center gap-2 px-3 py-1 shrink-0">
              {/* Double-circle status dot */}
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

            {/* Cards + gradient overlay */}
            <div className="relative flex flex-col gap-2 overflow-y-auto flex-1 min-h-0">
              {col.map((order) => (
                <button
                  key={order.id}
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
          </div>
        );
      })}
    </div>
  );
}
