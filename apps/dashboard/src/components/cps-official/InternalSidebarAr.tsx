'use client';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  BarChart2, BadgeCheck, Bell, Settings, Settings2, Gift, Briefcase, Landmark,
  Network, UserCircle, ClipboardCheck, LayoutList, Gauge, KeyRound,
  GitBranch, Headset, CircleX, FileBarChart, AlignLeft,
  Search, ChevronDown, LifeBuoy,
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'الطلبات',                    icon: BarChart2,      hasChevron: false },
  { label: 'العناية تجاة العملاء',        icon: BadgeCheck,     hasChevron: true  },
  { label: 'الإشعارات',                  icon: Bell,           hasChevron: true  },
  { label: 'حملات الإشعارات',             icon: Settings,       hasChevron: false },
  { label: 'نظام المكافآت',              icon: Gift,           hasChevron: true  },
  { label: 'مرفقات المنتج',              icon: Briefcase,      hasChevron: true  },
  { label: 'قائمة المؤسسات',             icon: Landmark,       hasChevron: false },
  { label: 'نظام ملفات العملاء (CPS)',   icon: Network,        hasChevron: false, active: true },
  { label: 'إدارة الطلبات',              icon: ClipboardCheck, hasChevron: true  },
  { label: 'إدارة القوائم',              icon: LayoutList,     hasChevron: true  },
  { label: 'اداره التقييم',              icon: Gauge,          hasChevron: true  },
  { label: 'الأدوار و الصلاحيات',        icon: KeyRound,       hasChevron: false },
  { label: 'مسؤول',                      icon: UserCircle,     hasChevron: true  },
  { label: 'محرك القرار',                icon: GitBranch,      hasChevron: true  },
  { label: 'إدارة المهام',               icon: Settings2,      hasChevron: true  },
  { label: 'خدمة العملاء',               icon: Headset,        hasChevron: true  },
  { label: 'مكافحة الاحتيال',            icon: CircleX,        hasChevron: false },
  { label: 'التدقيق',                    icon: FileBarChart,   hasChevron: true  },
  { label: 'السجلات',                    icon: AlignLeft,      hasChevron: true  },
  { label: 'البحث',                      icon: Search,         hasChevron: true  },
];

export default function InternalSidebarAr() {
  return (
    <div className="w-[220px] h-full bg-[#0063f5] flex flex-col shrink-0 overflow-hidden" dir="rtl">
      {/* Logo header */}
      <div className="flex items-center px-4 shrink-0 h-[66px]">
        <Image src="/logo-tamawal-web.svg" alt="Tamawal" width={112} height={33} />
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-2 px-3 scrollbar-none">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={cn(
                'w-full flex items-center justify-between gap-2 px-3 py-[9px] rounded-lg text-[13px] font-medium transition-colors mb-0.5',
                item.active
                  ? 'bg-[#FBBF24] text-gray-900'
                  : 'text-white hover:bg-white/10'
              )}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Icon className={cn('w-[18px] h-[18px] shrink-0', item.active ? 'text-gray-900' : 'text-white')} />
                <span className="truncate">{item.label}</span>
              </div>
              {item.hasChevron && (
                <ChevronDown className={cn('w-3.5 h-3.5 shrink-0', item.active ? 'text-gray-900/70' : 'text-white/70')} />
              )}
            </button>
          );
        })}
      </nav>

      {/* Help */}
      <div className="p-3 shrink-0">
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-[#1a7aff] text-white text-right">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <LifeBuoy className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <span className="text-[13px] font-semibold leading-tight">تحتاج مساعدة؟</span>
            <span className="text-[11px] text-white/70 leading-tight">← مركز المساعدة</span>
          </div>
        </button>
      </div>
    </div>
  );
}
