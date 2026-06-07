'use client';
import { useLayoutEffect, useEffect, useRef } from 'react';
import type { Order, Priority, OrderStatus } from '@/hooks/useOrderSimulation';
import { PRIORITY_RANK } from '@/hooks/useOrderSimulation';
import SARSymbol from '@/components/ui/SARSymbol';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, User, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

function getPriorityVariant(p: Priority): 'success' | 'warning' | 'error' {
  if (p === 'LOW') return 'success';
  if (p === 'MEDIUM') return 'warning';
  return 'error';
}

function getStatusVariant(s: OrderStatus): 'warning' | 'success' | 'error' | 'info' | 'completed' {
  const map: Record<OrderStatus, 'warning' | 'success' | 'error' | 'info' | 'completed'> = {
    Pending: 'warning', Approved: 'success', Rejected: 'error',
    'Under Review': 'info', Completed: 'completed',
  };
  return map[s];
}

function getAiGroup(score: number): 'success' | 'warning' | 'error' {
  if (score >= 80) return 'success';
  if (score >= 50) return 'warning';
  return 'error';
}

function getSlaGroup(progress: number): 'success' | 'warning' | 'error' {
  if (progress >= 60) return 'success';
  if (progress >= 25) return 'warning';
  return 'error';
}

function SlaBar({ progress, group }: { progress: number; group: 'success' | 'warning' | 'error' }) {
  const color = group === 'success' ? '#079455' : group === 'warning' ? '#b54708' : '#c01048';
  return (
    <div className="h-1.5 rounded-full bg-[#e3e8ef]/50 overflow-hidden w-full">
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{ width: `${Math.min(100 - progress, 98)}%`, backgroundColor: color }}
      />
    </div>
  );
}

function getSlaTextColor(group: 'success' | 'warning' | 'error') {
  if (group === 'success') return 'text-[#079455]';
  if (group === 'warning') return 'text-[#b54708]';
  return 'text-[#c01048]';
}

function getPriorityRowStyle(priority: Priority): string {
  if (priority === 'CRITICAL') return 'border-l-2 border-l-[#c01048]';
  if (priority === 'HIGH') return 'border-l-2 border-l-[#b54708]';
  return '';
}

export default function OrdersTable({
  orders,
  justEscalated,
  onSelectOrder,
}: {
  orders: Order[];
  justEscalated: Set<string>;
  onSelectOrder?: (id: string) => void;
}) {
  const rowRefs = useRef<Map<string, HTMLTableRowElement>>(new Map());
  const prevPositions = useRef<Map<string, number>>(new Map());

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

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-white dark:hover:bg-slate-950">
          <TableHead className="w-12"></TableHead>
          <TableHead className="w-48">Order ID</TableHead>
          <TableHead className="w-28">Priority</TableHead>
          <TableHead className="w-56">SLA • Escalation in.</TableHead>
          <TableHead className="w-28 text-center">AI Score</TableHead>
          <TableHead className="w-72">Customer Details</TableHead>
          <TableHead>Product Details</TableHead>
          <TableHead className="w-36">Order Status</TableHead>
          <TableHead className="w-48">Loan Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          const slaGroup = getSlaGroup(order.slaProgress);
          const aiGroup = getAiGroup(order.aiScore);
          const isEscalated = justEscalated.has(order.id);
          const rank = PRIORITY_RANK[order.priority];
          const isCritical = rank === 0;
          const isHighOrAbove = rank <= 1;

          return (
            <TableRow
              key={order.id}
              ref={el => {
                if (el) rowRefs.current.set(order.id, el);
                else rowRefs.current.delete(order.id);
              }}
              className={cn(
                getPriorityRowStyle(order.priority),
                isEscalated && 'animate-escalation-flash',
                isCritical && 'animate-critical-pulse-bg',
              )}
            >
              <TableCell>
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    'rounded-full w-8 h-8',
                    isHighOrAbove && 'border-current',
                    isCritical && 'border-[#c01048]/40 text-[#c01048]',
                    !isCritical && isHighOrAbove && 'border-[#b54708]/40 text-[#b54708]',
                  )}
                  onClick={() => onSelectOrder?.(order.id)}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className={cn(
                    'font-semibold dark:text-slate-100',
                    isCritical ? 'text-[#c01048]' : 'text-[#181d27]',
                  )}>
                    {order.id}
                  </span>
                  <span className="text-xs text-[#717680] dark:text-slate-400">Created: {order.createdAt}</span>
                  <span className="text-xs text-[#717680] dark:text-slate-400">Updated: {order.updatedAt}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={getPriorityVariant(order.priority)} className={cn(
                  'text-xs font-semibold rounded-full',
                  isCritical && 'animate-badge-pulse',
                )}>
                  {order.priority}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1.5">
                  <span className={cn('text-xs font-medium', getSlaTextColor(slaGroup))}>
                    {order.slaTimeLeft}
                  </span>
                  <SlaBar progress={order.slaProgress} group={slaGroup} />
                  <span className="text-xs text-[#697586] dark:text-slate-400">{order.slaEscalation}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Badge variant={aiGroup} className="gap-1 rounded-full mx-auto">
                  <Star className="w-3 h-3" />
                  {order.aiScore}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1.5">
                  <span className="font-semibold text-sm text-[#121a26] dark:text-slate-100">{order.customerName}</span>
                  <div className="flex items-center gap-2 text-xs text-[#717680] dark:text-slate-400">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />{order.customerId}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{order.customerPhone}</span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-[#717680] dark:text-slate-400">
                    <Mail className="w-3 h-3" />{order.customerEmail}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-sm text-[#121a26] dark:text-slate-100">{order.productName}</span>
                  <span className="text-left text-sm text-[#121a26] dark:text-slate-200" dir="ltr">{order.productNameAr}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(order.status)} className="rounded-2xl text-xs font-medium">
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1 text-sm">
                  <span className="font-semibold text-[#121a26] flex items-center gap-1 dark:text-slate-100">
                    <SARSymbol className="w-3.5 h-3 shrink-0" />
                    {order.loanAmount.replace(/﷼\s?/, '')}
                  </span>
                  <span className="text-xs text-[#717680] dark:text-slate-400">APR: {order.apr}</span>
                  <span className="text-xs text-[#717680] flex items-center gap-1 dark:text-slate-400">
                    Mgmt: <SARSymbol className="w-3 h-2.5 shrink-0" />{order.managementFees.replace(/﷼\s?/, '')}
                  </span>
                  <span className="text-xs text-[#717680] flex items-center gap-1 dark:text-slate-400">
                    Brokerage: <SARSymbol className="w-3 h-2.5 shrink-0" />{order.brokerageFees.replace(/﷼\s?/, '')}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
