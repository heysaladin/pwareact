'use client';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  BarChart2, BadgeCheck, Bell, Settings, Settings2, Gift, Briefcase, Landmark,
  Users, UserCircle, ClipboardCheck, LayoutList, Gauge, KeyRound,
  GitBranch, Headset, CircleX, FileBarChart, AlignLeft,
  Search, ChevronDown, LifeBuoy,
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Orders',                icon: BarChart2,      hasChevron: false },
  { label: 'AML',                   icon: BadgeCheck,     hasChevron: true  },
  { label: 'Notification',          icon: Bell,           hasChevron: true  },
  { label: 'Configuration',         icon: Settings,       hasChevron: false },
  { label: 'Rewards System',        icon: Gift,           hasChevron: true  },
  { label: 'Product Utilities',     icon: Briefcase,      hasChevron: true  },
  { label: 'Institutions',          icon: Landmark,       hasChevron: false },
  { label: 'Customers',             icon: Users,          hasChevron: false },
  { label: 'Guest',                 icon: UserCircle,     hasChevron: false },
  { label: 'Order Managment',       icon: ClipboardCheck, hasChevron: true  },
  { label: 'Lists Management',      icon: LayoutList,     hasChevron: true  },
  { label: 'Scoring Management',    icon: Gauge,          hasChevron: true  },
  { label: 'Roles and Permissions', icon: KeyRound,       hasChevron: false },
  { label: 'Admin',                 icon: UserCircle,     hasChevron: true  },
  { label: 'Decision Engine',       icon: GitBranch,      hasChevron: true  },
  { label: 'Task Management',       icon: Settings2,      hasChevron: true  },
  { label: 'Customer Service',      icon: Headset,        hasChevron: true  },
  { label: 'Anti-Fraud',            icon: CircleX,        hasChevron: false },
  { label: 'Audit',                 icon: FileBarChart,   hasChevron: true  },
  { label: 'Logs',                  icon: AlignLeft,      hasChevron: true  },
  { label: 'Lookups',               icon: Search,         hasChevron: true  },
];

export default function InternalSidebar() {
  return (
    <div className="w-[220px] h-full bg-[#0063f5] flex flex-col shrink-0 overflow-hidden">
      {/* Logo header */}
      <div className="flex items-center gap-2.5 px-4 py-3.5 shrink-0 h-[66px]">
        <div className="w-8 h-8 shrink-0">
          <Image src="/favicon.svg" alt="Tamawal" width={32} height={32} style={{ filter: 'brightness(0) invert(1)' }} />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-white text-[14px] font-bold leading-tight">Tamawal</span>
          <span className="text-white/60 text-[9px] font-semibold uppercase tracking-wider leading-tight">Internal Team</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-2 px-3 scrollbar-none">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className="w-full flex items-center justify-between gap-2 px-3 py-[9px] rounded-lg text-[13px] font-medium text-white hover:bg-white/10 transition-colors mb-0.5"
            >
              <div className="flex items-center gap-3 min-w-0">
                <Icon className="w-[18px] h-[18px] shrink-0 text-white" />
                <span className="truncate">{item.label}</span>
              </div>
              {item.hasChevron && (
                <ChevronDown className="w-3.5 h-3.5 shrink-0 text-white/70" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Help */}
      <div className="p-3 shrink-0">
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-[#1a7aff] text-white text-left">
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
