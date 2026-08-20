'use client';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  BarChart2, Star, Briefcase, Landmark, CreditCard, Car, House,
  ClipboardCheck, FileText, ClipboardList, Heart, Users, ListTodo,
  Settings, GitBranch, UserCircle, KeyRound, PanelLeft, ChevronDown,
  ChevronLeft, SquarePlus, LifeBuoy,
} from 'lucide-react';

type Child = { label: string; icon: React.ElementType };
type NavItem = {
  label: string;
  icon: React.ElementType;
  active?: boolean;
  children?: Child[];
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', icon: BarChart2 },
  { label: 'Rating',    icon: Star      },
  {
    label: 'Products', icon: Briefcase,
    children: [
      { label: 'Personal Loan',  icon: Landmark  },
      { label: 'Cards',          icon: CreditCard },
      { label: 'Cars Loan',      icon: Car        },
      { label: 'Mortgage Loan',  icon: House      },
    ],
  },
  {
    label: 'Order Managment', icon: ClipboardCheck,
    children: [
      { label: 'Finance Orders',       icon: FileText      },
      { label: 'Finance Configuration', icon: ClipboardList },
      { label: 'Customer Interests',    icon: Heart         },
    ],
  },
  { label: 'Customers', icon: Users, active: true },
  {
    label: 'Task Management', icon: SquarePlus,
    children: [
      { label: 'Dashboard',  icon: BarChart2  },
      { label: 'Settings',   icon: Settings   },
      { label: 'My Tasks',   icon: ListTodo   },
      { label: 'Workflows',  icon: GitBranch  },
    ],
  },
  {
    label: 'Admin', icon: UserCircle,
    children: [
      { label: 'Team Management', icon: ClipboardList },
    ],
  },
  { label: 'Roles and Permissions', icon: KeyRound  },
  {
    label: 'Decision Engine', icon: GitBranch,
    children: [
      { label: 'Variables', icon: PanelLeft },
    ],
  },
];

const DEFAULT_EXPANDED = ['Products', 'Order Managment', 'Task Management', 'Admin', 'Decision Engine'];

export default function ProviderSidebar() {
  const [expanded, setExpanded] = useState<string[]>(DEFAULT_EXPANDED);

  function toggle(label: string) {
    setExpanded(prev =>
      prev.includes(label) ? prev.filter(k => k !== label) : [...prev, label]
    );
  }

  return (
    <div className="w-[240px] h-full bg-white border-r border-[#e2e7e9] flex flex-col shrink-0 overflow-hidden">
      {/* Logo header */}
      <div className="flex items-center justify-between px-4 shrink-0 h-[66px] border-b border-[#e2e7e9]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 shrink-0">
            <Image src="/favicon.svg" alt="Tamawal" width={32} height={32} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[#121a26] text-[14px] font-bold leading-tight">Tamawal</span>
            <span className="text-[#9ca3af] text-[9px] font-semibold uppercase tracking-wider leading-tight">Internal Team</span>
          </div>
        </div>
        <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#f8fafc] text-[#9ca3af] shrink-0">
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-2 px-3 scrollbar-none">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const hasChildren = !!(item.children && item.children.length > 0);
          const isExpanded = expanded.includes(item.label);

          return (
            <div key={item.label}>
              <button
                onClick={() => hasChildren && toggle(item.label)}
                className={cn(
                  'w-full flex items-center justify-between gap-2 px-3 py-[9px] rounded-lg text-[13px] font-medium transition-colors mb-0.5',
                  item.active
                    ? 'bg-[#0063f5] text-white'
                    : 'text-[#4b5565] hover:bg-[#f8fafc]'
                )}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Icon className={cn('w-[18px] h-[18px] shrink-0', item.active ? 'text-white' : 'text-[#4b5565]')} />
                  <span className="truncate">{item.label}</span>
                </div>
                {hasChildren && (
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 shrink-0 transition-transform',
                      item.active ? 'text-white' : 'text-[#9ca3af]',
                      isExpanded && 'rotate-180'
                    )}
                  />
                )}
              </button>

              {hasChildren && isExpanded && (
                <div className="ms-4 ps-3 border-s-2 border-[#e2e7e9] mb-1">
                  {item.children!.map((child) => {
                    const ChildIcon = child.icon;
                    return (
                      <button
                        key={child.label}
                        className="w-full flex items-center gap-2.5 px-2.5 py-[7px] rounded-lg text-[12.5px] font-medium text-[#697586] hover:bg-[#f8fafc] transition-colors mb-0.5"
                      >
                        <ChildIcon className="w-[15px] h-[15px] shrink-0 text-[#697586]" />
                        <span className="truncate">{child.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Help */}
      <div className="p-3 border-t border-[#e2e7e9] shrink-0">
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-[#0063f5] text-white text-left">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <LifeBuoy className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <span className="text-[13px] font-semibold leading-tight">Need help?</span>
            <span className="text-[11px] text-white/70 leading-tight">Go to Help Center →</span>
          </div>
        </button>
      </div>
    </div>
  );
}
