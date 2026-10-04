'use client';
import { useState } from 'react';
import Topbar from '@/components/orders/Topbar';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Screen = 'overview' | 'orders' | 'customers' | 'reports' | 'settings';

const kpis = [
  { label: 'Total Applications', value: '3,842',  sub: '+12% this month',  color: 'text-[#0063F5]', bg: 'bg-[#eff4ff]' },
  { label: 'Approved Loans',     value: '1,204',  sub: '31.3% approval rate', color: 'text-[#059669]', bg: 'bg-[#ecfdf5]' },
  { label: 'Disbursed (SAR)',    value: '48.2M',  sub: 'This quarter',      color: 'text-[#7C3AED]', bg: 'bg-[#f5f3ff]' },
  { label: 'Pending Review',     value: '287',    sub: 'Requires action',   color: 'text-[#D97706]', bg: 'bg-[#fffbeb]' },
];

const recentOrders = [
  { id: 'ORD-9912', customer: 'Ali Al-Ghamdi',    type: 'Personal Loan', amount: 'SAR 45,000', status: 'APPROVED',  date: 'Today, 10:14' },
  { id: 'ORD-9911', customer: 'Fatima Al-Zahrani', type: 'Car Loan',      amount: 'SAR 120,000', status: 'PENDING',   date: 'Today, 09:52' },
  { id: 'ORD-9910', customer: 'Mohammed Al-Otaibi', type: 'Real Estate',  amount: 'SAR 850,000', status: 'REVIEW',    date: 'Today, 08:30' },
  { id: 'ORD-9909', customer: 'Sara Al-Harbi',     type: 'Personal Loan', amount: 'SAR 30,000',  status: 'REJECTED',  date: 'Yesterday' },
  { id: 'ORD-9908', customer: 'Khalid Al-Shehri',  type: 'Car Loan',      amount: 'SAR 95,000',  status: 'APPROVED',  date: 'Yesterday' },
];

const activity = [
  { dot: '#34D399', msg: 'ORD-9912 approved — Ali Al-Ghamdi',            time: '10 min ago' },
  { dot: '#D97706', msg: '287 applications pending review',               time: '1 hr ago' },
  { dot: '#0063F5', msg: 'New batch of 42 applications received',         time: '2 hrs ago' },
  { dot: '#DC2626', msg: 'ORD-9909 rejected — insufficient SIMAH score',  time: '5 hrs ago' },
  { dot: '#7C3AED', msg: 'Monthly disbursement report generated',         time: 'Yesterday' },
];

const statusStyle: Record<string, { dot: string; label: string; text: string }> = {
  APPROVED: { dot: '#34D399', label: 'Approved', text: 'text-[#067647]' },
  PENDING:  { dot: '#D97706', label: 'Pending',  text: 'text-[#b54708]' },
  REVIEW:   { dot: '#0063F5', label: 'Review',   text: 'text-[#0063F5]' },
  REJECTED: { dot: '#DC2626', label: 'Rejected', text: 'text-[#DC2626]' },
};

const navItems: { id: Screen; label: string; icon: React.ReactNode }[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: 'orders',
    label: 'Applications',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 'customers',
    label: 'Customers',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
];

export default function DashboardPage() {
  const [screen, setScreen] = useState<Screen>('overview');

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col dark:bg-slate-950">
      <Topbar />
      <div className="flex flex-1 min-h-0 overflow-hidden">

        {/* Sidebar */}
        <aside className="w-[220px] shrink-0 bg-[#0063F5] flex flex-col dark:bg-slate-900">
          <nav className="flex-1 px-3 py-5 flex flex-col gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setScreen(item.id)}
                className={cn(
                  'flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-[13px] font-medium text-left transition-all',
                  screen === item.id
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
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white shrink-0">AA</div>
            <div>
              <p className="text-xs font-semibold text-white leading-tight">Abdullah Ayyad</p>
              <p className="text-[10px] text-white/55 leading-tight">Admin</p>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 overflow-auto p-6 flex flex-col gap-6">
          <div>
            <h1 className="text-[22px] font-bold text-[#101828] dark:text-white">Overview</h1>
            <p className="text-sm text-[#667085] dark:text-slate-400 mt-0.5">Welcome back, Abdullah. Here's what's happening today.</p>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-4 gap-3">
            {kpis.map((k) => (
              <Card key={k.label} className="px-5 py-4 flex items-center gap-4">
                <div className={`w-9 h-9 rounded-lg ${k.bg} flex items-center justify-center shrink-0`}>
                  <span className={`text-base font-bold ${k.color}`}>#</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-[#667085] dark:text-slate-400 leading-tight">{k.label}</p>
                  <p className={`text-[20px] font-bold leading-tight ${k.color}`}>{k.value}</p>
                  <p className="text-[10px] text-[#9aa4b2] dark:text-slate-500">{k.sub}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Table + Activity */}
          <div className="grid grid-cols-[1fr_320px] gap-4">
            <Card>
              <div className="px-5 py-3.5 border-b border-[#eef1f6] dark:border-slate-800 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#101828] dark:text-white">Recent Applications</h3>
                <button className="text-xs text-[#0063F5] font-medium hover:underline">View all →</button>
              </div>
              <CardContent className="border-none p-0">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-[#eef1f6] dark:border-slate-800">
                      <th className="text-left px-5 py-2.5 text-[11px] font-semibold text-[#667085] dark:text-slate-400">ID</th>
                      <th className="text-left px-3 py-2.5 text-[11px] font-semibold text-[#667085] dark:text-slate-400">Customer</th>
                      <th className="text-left px-3 py-2.5 text-[11px] font-semibold text-[#667085] dark:text-slate-400">Type</th>
                      <th className="text-left px-3 py-2.5 text-[11px] font-semibold text-[#667085] dark:text-slate-400">Amount</th>
                      <th className="text-left px-3 py-2.5 text-[11px] font-semibold text-[#667085] dark:text-slate-400">Status</th>
                      <th className="text-left px-3 py-2.5 text-[11px] font-semibold text-[#667085] dark:text-slate-400">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eef1f6] dark:divide-slate-800">
                    {recentOrders.map((o) => {
                      const s = statusStyle[o.status];
                      return (
                        <tr key={o.id} className="hover:bg-[#f8fafc] dark:hover:bg-slate-900/40 cursor-pointer transition-colors">
                          <td className="px-5 py-3 font-mono text-[#667085] dark:text-slate-400">{o.id}</td>
                          <td className="px-3 py-3 font-medium text-[#101828] dark:text-white">{o.customer}</td>
                          <td className="px-3 py-3 text-[#667085] dark:text-slate-400">{o.type}</td>
                          <td className="px-3 py-3 font-semibold text-[#344054] dark:text-slate-200">{o.amount}</td>
                          <td className="px-3 py-3">
                            <span className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.dot }} />
                              <span className={`font-semibold ${s.text}`}>{s.label}</span>
                            </span>
                          </td>
                          <td className="px-3 py-3 text-[#9aa4b2] dark:text-slate-500">{o.date}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <Card>
              <div className="px-5 py-3.5 border-b border-[#eef1f6] dark:border-slate-800">
                <h3 className="text-sm font-semibold text-[#101828] dark:text-white">Recent Activity</h3>
              </div>
              <CardContent className="border-none divide-y divide-[#eef1f6] dark:divide-slate-800 p-0">
                {activity.map((a) => (
                  <div key={a.msg} className="flex items-start gap-3 px-5 py-3">
                    <span className="w-2 h-2 rounded-full shrink-0 mt-1" style={{ background: a.dot }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] text-[#344054] dark:text-slate-300 leading-snug">{a.msg}</p>
                      <p className="text-[11px] text-[#9aa4b2] dark:text-slate-500 mt-0.5">{a.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
