'use client';
import { cn } from '@/lib/utils';
import type { Screen } from './OffersPage';

type NavItem = { id: Screen; label: string; icon: React.ReactNode };

const navItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: 'offers',
    label: 'My Offers',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
        <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'create',
    label: 'Create Offer',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    id: 'performance',
    label: 'Performance',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    id: 'conflicts',
    label: 'Conflict Rules',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export default function Sidebar({ activeScreen, onNavigate }: { activeScreen: Screen; onNavigate: (s: Screen) => void }) {
  return (
    <aside className="w-[220px] shrink-0 bg-[#0063F5] flex flex-col dark:bg-slate-900">
      <nav className="flex-1 px-3 py-5 flex flex-col gap-0.5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={cn(
              'flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-[13px] font-medium text-left transition-all',
              activeScreen === item.id
                ? 'bg-white/20 text-white'
                : 'text-white/65 hover:bg-white/10 hover:text-white'
            )}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      <div className="px-3 py-4 border-t border-white/10 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white shrink-0">RB</div>
        <div>
          <p className="text-xs font-semibold text-white leading-tight">Riyad Bank</p>
          <p className="text-[10px] text-white/55 leading-tight">Provider Admin</p>
        </div>
      </div>
    </aside>
  );
}
