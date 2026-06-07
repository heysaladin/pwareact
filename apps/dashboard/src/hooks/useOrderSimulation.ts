'use client';
import { useState, useEffect, useRef } from 'react';
import ordersData from '@/data/orders.json';

export type Priority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type OrderStatus = 'Pending' | 'Approved' | 'Rejected' | 'Under Review' | 'Completed';

export type Order = {
  id: string; createdAt: string; updatedAt: string; priority: Priority;
  slaTimeLeft: string; slaEscalation: string; slaProgress: number; aiScore: number;
  customerName: string; customerId: string; customerPhone: string; customerEmail: string;
  productName: string; productNameAr: string; status: OrderStatus;
  loanAmount: string; apr: string; managementFees: string; brokerageFees: string;
};

export const PRIORITY_RANK: Record<Priority, number> = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };

function sortOrders(orders: Order[]): Order[] {
  return [...orders].sort((a, b) => {
    const d = PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority];
    return d !== 0 ? d : a.slaProgress - b.slaProgress;
  });
}

function formatSla(progress: number): { slaTimeLeft: string; slaEscalation: string } {
  const totalMinutes = Math.round((progress / 100) * 33 * 60);
  if (totalMinutes <= 0) return { slaTimeLeft: 'Breached!', slaEscalation: 'Escalation now' };
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  const label = h === 0 ? `${m}m left` : `${h}h ${m}m left`;
  const esc = h === 0 ? `Escalation in ${m}m` : `Escalation in ${h}h ${m}m`;
  return { slaTimeLeft: label, slaEscalation: esc };
}

function escalatePriority(priority: Priority, progress: number): Priority {
  if (priority === 'LOW' && progress <= 60) return 'MEDIUM';
  if (priority === 'MEDIUM' && progress <= 35) return 'HIGH';
  if (priority === 'HIGH' && progress <= 15) return 'CRITICAL';
  return priority;
}

export function useOrderSimulation(paused = false) {
  const [orders, setOrders] = useState<Order[]>(() => sortOrders(ordersData as Order[]));
  const [justEscalated, setJustEscalated] = useState<Set<string>>(new Set());
  const ordersRef = useRef<Order[]>(sortOrders(ordersData as Order[]));
  const escalationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      const prev = ordersRef.current;

      const next = prev.map(order => {
        if (Math.random() > 0.45) return order;

        const decrease = Math.floor(Math.random() * 5) + 1;
        const newProgress = order.slaProgress - decrease;

        if (newProgress <= 0) {
          const resetProgress = 90 + Math.floor(Math.random() * 10);
          return { ...order, priority: 'LOW' as Priority, slaProgress: resetProgress, ...formatSla(resetProgress) };
        }

        const newPriority = escalatePriority(order.priority, newProgress);
        return { ...order, priority: newPriority, slaProgress: newProgress, ...formatSla(newProgress) };
      });

      const sorted = sortOrders(next);

      const escalated = new Set<string>();
      next.forEach(newOrder => {
        const old = prev.find(o => o.id === newOrder.id);
        if (old && PRIORITY_RANK[newOrder.priority] < PRIORITY_RANK[old.priority]) {
          escalated.add(newOrder.id);
        }
      });

      ordersRef.current = sorted;
      setOrders(sorted);

      if (escalated.size > 0) {
        if (escalationTimerRef.current) clearTimeout(escalationTimerRef.current);
        setJustEscalated(escalated);
        escalationTimerRef.current = setTimeout(() => setJustEscalated(new Set()), 2500);
      }
    }, 5000);

    return () => {
      clearInterval(timer);
      if (escalationTimerRef.current) clearTimeout(escalationTimerRef.current);
    };
  }, [paused]);

  return { orders, justEscalated };
}
