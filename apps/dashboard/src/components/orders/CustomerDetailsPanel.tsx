'use client';
import { useState, useRef } from 'react';
import {
  X, User, ShieldCheck, StickyNote, ClipboardList, Search, ClipboardX,
  BarChart2, Building2, Globe, Monitor, ScrollText, Coins, Gift, Briefcase,
  Receipt, GitBranch, ChevronLeft, ChevronRight, ChevronDown, ShieldX,
  Download, ExternalLink, CornerDownRight, MoreVertical, SlidersHorizontal,
  Lock, Key, AlertTriangle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type Order = {
  customerName: string;
  customerId: string;
  customerPhone: string;
  customerEmail: string;
};

type TabKey = 'KYC' | 'Preliminary' | 'Application' | 'Screening' | 'Risk' | 'MASDR' | 'SIMAH' | 'IPs' | 'Devices' | 'User Logs' | 'Points' | 'Rewards' | 'Orders' | 'Invoices' | 'Decisions';

const TABS: { label: TabKey; icon: React.ElementType }[] = [
  { label: 'KYC',         icon: ShieldCheck },
  { label: 'Preliminary', icon: StickyNote },
  { label: 'Application', icon: ClipboardList },
  { label: 'Screening',   icon: Search },
  { label: 'Risk',        icon: ClipboardX },
  { label: 'MASDR',       icon: BarChart2 },
  { label: 'SIMAH',       icon: Building2 },
  { label: 'IPs',         icon: Globe },
  { label: 'Devices',     icon: Monitor },
  { label: 'User Logs',   icon: ScrollText },
  { label: 'Points',      icon: Coins },
  { label: 'Rewards',     icon: Gift },
  { label: 'Orders',      icon: Briefcase },
  { label: 'Invoices',    icon: Receipt },
  { label: 'Decisions',   icon: GitBranch },
];

// ─── Shared primitives ───────────────────────────────────────────────────────

function TabCard({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="bg-white border border-[#e2e3e4] rounded-bl-[6px] rounded-br-[6px] rounded-tr-[6px] overflow-hidden dark:border-slate-700 dark:bg-slate-900">
      {title && (
        <div className="px-[18px] py-[18px] border-b border-[#f2f4f7] dark:border-slate-800">
          <span className="text-[18px] font-bold text-[#0063f5]">{title}</span>
        </div>
      )}
      {children}
    </div>
  );
}

function DataRow({ label, value, shaded, labelWidth = 150 }: { label: string; value: string; shaded?: boolean; labelWidth?: number }) {
  return (
    <div className={`flex gap-4 items-start px-4 py-2 rounded-[8px] ${shaded ? 'bg-[#f9fbfc] dark:bg-slate-800/50' : ''}`}>
      <span className="text-[14px] text-[#667085] shrink-0 leading-[28px] dark:text-slate-400" style={{ width: labelWidth }}>{label}</span>
      <span className="text-[14px] font-semibold text-[#1e2228] flex-1 leading-[28px] dark:text-slate-100">{value}</span>
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="px-4 py-4">
      <span className="text-[10px] font-bold text-[#667085] tracking-[2.5px] uppercase dark:text-slate-400">{children}</span>
    </div>
  );
}

function TablePagination() {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-t border-[#eaecf0] bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-2">
        <span className="text-[14px] text-[#344054] dark:text-slate-300">Show</span>
        <div className="flex items-center border border-[#eaecf0] rounded-[10px] overflow-hidden dark:border-slate-700">
          <span className="px-3 py-2 text-[14px] text-[#667085] dark:text-slate-400">10</span>
          <div className="px-2 py-2 border-l border-[#eaecf0] dark:border-slate-700">
            <ChevronDown className="w-4 h-4 text-[#667085] dark:text-slate-400" />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button className="h-10 px-4 border border-[#eaecf0] rounded-bl-[10px] rounded-tl-[10px] bg-white hover:bg-[#f9fafb] dark:border-slate-700 dark:bg-slate-900">
          <ChevronLeft className="w-4 h-4 text-[#667085] dark:text-slate-400" />
        </button>
        {(['1','2','...','49','50'] as const).map((p, i) => (
          <button key={i} className={cn('h-10 w-10 text-[14px] border-y border-r border-[#eaecf0] dark:border-slate-700', p === '1' ? 'bg-[#f9fafb] text-[#1d2939] dark:bg-slate-800 dark:text-slate-100' : 'bg-white text-[#98a2b3] hover:bg-[#f9fafb] dark:bg-slate-900 dark:text-slate-500')}>
            {p}
          </button>
        ))}
        <button className="h-10 px-4 border border-[#eaecf0] rounded-br-[10px] rounded-tr-[10px] bg-white hover:bg-[#f9fafb] dark:border-slate-700 dark:bg-slate-900">
          <ChevronRight className="w-4 h-4 text-[#667085] dark:text-slate-400" />
        </button>
      </div>
    </div>
  );
}

// ─── KYC ─────────────────────────────────────────────────────────────────────

function KycTab() {
  return (
    <TabCard title="Customer KYC Information">
      <div className="flex flex-col px-4">
        <SectionLabel>English KYC Information</SectionLabel>
        <div className="flex flex-col pb-6">
          {[
            { label: "First Name",          value: "AHMED" },
            { label: "Father's Name",       value: "FAHAD" },
            { label: "Grandfather's Name",  value: "MOHAMMED" },
            { label: "Family Name",         value: "SAUD" },
            { label: "Two Names",           value: "AHMED SAUD" },
            { label: "Full Name",           value: "AHMED FAHAD MOHAMMED SAUD" },
            { label: "Nationality",         value: "Saudi Arabia" },
            { label: "Card Issue Place",    value: "Personal Status Administration" },
          ].map((r, i) => <DataRow key={r.label} label={r.label} value={r.value} shaded={i % 2 === 0} />)}
        </div>

        <SectionLabel>Arabic KYC Information</SectionLabel>
        <div className="flex flex-col pb-6">
          {[
            { label: "الاسم العربي الأول",   value: "احمد" },
            { label: "اسم الأب العربي",      value: "فهد" },
            { label: "اسم الجد العربي",      value: "محمد" },
            { label: "اسم العائلة العربية",  value: "سعود" },
            { label: "اسمان عربيان",         value: "احمد سعود" },
            { label: "الاسم الكامل",         value: "أحمد فهد محمد سعود" },
            { label: "الجنسية العربية",      value: "المملكة العربية السعودية" },
            { label: "مكان إصدار البطاقة",   value: "إدارة الأحوال الشخصية" },
          ].map((r, i) => (
            <div key={r.label} dir="rtl" className={`flex gap-4 items-start px-4 py-2 rounded-[8px] ${i % 2 === 0 ? 'bg-[#f9fbfc] dark:bg-slate-800/50' : ''}`}>
              <span className="text-[14px] text-[#667085] w-[150px] shrink-0 leading-[28px] text-right dark:text-slate-400">{r.label}</span>
              <span className="text-[14px] font-semibold text-[#1e2228] flex-1 leading-[28px] text-right dark:text-slate-100">{r.value}</span>
            </div>
          ))}
        </div>

        <SectionLabel>General KYC Information</SectionLabel>
        <div className="flex flex-col pb-6">
          {[
            { label: "ID",               value: "1000000446" },
            { label: "ID Version",       value: "1" },
            { label: "Gender",           value: "M" },
            { label: "Language",         value: "A" },
            { label: "Nationality",      value: "113" },
            { label: "DoB G",            value: "1979-00-27" },
            { label: "DoB H",            value: "13990701" },
            { label: "ID Issue Date G",  value: "2015-00-16" },
            { label: "ID Issue Date H",  value: "14360728" },
            { label: "ID Expiry Date G", value: "2034-00-10" },
            { label: "ID Expiry Date H", value: "14560728" },
          ].map((r, i) => <DataRow key={r.label} label={r.label} value={r.value} shaded={i % 2 === 0} />)}
        </div>
      </div>
    </TabCard>
  );
}

// ─── Preliminary ─────────────────────────────────────────────────────────────

function PreliminaryTab() {
  return (
    <TabCard title="Initial Data">
      <div className="flex flex-col px-4 py-4 pb-6">
        {[
          { label: "Salary / income",                value: "25000" },
          { label: "Do you have active loan?",       value: "NO" },
          { label: "How much do you monthly pay?",   value: "0" },
        ].map((r, i) => <DataRow key={r.label} label={r.label} value={r.value} shaded={i % 2 === 0} labelWidth={250} />)}
      </div>
    </TabCard>
  );
}

// ─── Application ─────────────────────────────────────────────────────────────

function ApplicationTab() {
  return (
    <TabCard title="Application Information">
      <div className="flex flex-col px-4 py-4 pb-6">
        {[
          { label: "City",                    value: "Riyadh" },
          { label: "Employment Status",       value: "Employed" },
          { label: "Monthly Salary",          value: "25,000" },
          { label: "Salary Bank",             value: "Al-Rajhi Bank" },
          { label: "Monthly Education Fees",  value: "0" },
          { label: "Social Status",           value: "Single" },
          { label: "Source of Income",        value: "Salary" },
          { label: "Number of Dependents",    value: "0" },
          { label: "Home Ownership",          value: "Owned" },
          { label: "Net Worth Category",      value: "Medium" },
          { label: "PEP Status",              value: "No" },
          { label: "REDF Acceptance",         value: "Yes" },
          { label: "SIMAH Defaults",          value: "0" },
          { label: "SIMAH Score",             value: "680" },
          { label: "Credit Obligations",      value: "0" },
          { label: "Debt Burden Ratio",       value: "0%" },
          { label: "Application Date",        value: "March 11, 2026" },
        ].map((r, i) => <DataRow key={r.label} label={r.label} value={r.value} shaded={i % 2 === 0} labelWidth={200} />)}
      </div>
    </TabCard>
  );
}

// ─── Screening ───────────────────────────────────────────────────────────────

function ScreeningTab() {
  const history = [
    { date: 'Jan 27, 2026', score: '680', alerts: '0' },
    { date: 'Dec 15, 2025', score: '670', alerts: '0' },
    { date: 'Nov 10, 2025', score: '665', alerts: '1' },
    { date: 'Oct 05, 2025', score: '660', alerts: '0' },
    { date: 'Sep 01, 2025', score: '655', alerts: '0' },
    { date: 'Aug 15, 2025', score: '650', alerts: '0' },
    { date: 'Jul 01, 2025', score: '645', alerts: '2' },
  ];
  return (
    <TabCard title="Customer Screening Results">
      <div className="px-4 pt-4 pb-3 flex items-center gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#9aa4b2] dark:text-slate-500" />
          <input className="w-full h-9 pl-9 pr-3 border border-[#d5d7da] rounded-[8px] text-[14px] bg-white focus:outline-none focus:ring-1 focus:ring-[#0063f5] dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100" placeholder="Search..." />
        </div>
        <button className="px-4 h-9 bg-[#0063f5] text-white text-[14px] font-medium rounded-[8px] hover:bg-[#0052d4] shrink-0">Update</button>
      </div>
      <div className="flex gap-0 px-4 pb-4 overflow-x-auto">
        {/* History table */}
        <div className="flex-1 min-w-[200px]">
          <div className="grid grid-cols-3 bg-[#f8fafc] px-3 py-2 border border-[#eaecf0] rounded-tl-[6px] dark:bg-slate-800 dark:border-slate-700">
            {['Updated at', 'Score', 'Alerts'].map(h => (
              <span key={h} className="text-[12px] font-medium text-[#667085] dark:text-slate-400">{h}</span>
            ))}
          </div>
          {history.map((r, i) => (
            <div key={i} className={`grid grid-cols-3 px-3 py-2 border-x border-b border-[#eaecf0] dark:border-slate-700 ${i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-[#f9fafb] dark:bg-slate-800/50'}`}>
              <span className="text-[12px] text-[#181d27] dark:text-slate-200">{r.date}</span>
              <span className="text-[12px] font-semibold text-[#0063f5]">{r.score}</span>
              <span className="text-[12px] text-[#181d27] dark:text-slate-200">{r.alerts}</span>
            </div>
          ))}
        </div>
        {/* Customer detail */}
        <div className="flex-1 min-w-[200px] border border-[#eaecf0] rounded-tr-[6px] rounded-br-[6px] dark:border-slate-700">
          {[
            { label: 'Full Name',    value: 'Ahmed Fahad Saud' },
            { label: 'Gender',       value: 'Male' },
            { label: 'DoB',          value: '1979-00-27' },
            { label: 'Nationality',  value: 'Saudi Arabia' },
            { label: 'Class',        value: 'A' },
            { label: 'Match Score',  value: '98%' },
            { label: 'Watch List',   value: 'No' },
            { label: 'Alert Status', value: 'Clear' },
          ].map((r, i) => (
            <div key={r.label} className={`flex items-center justify-between px-3 py-2.5 ${i !== 7 ? 'border-b border-[#eaecf0] dark:border-slate-700' : ''} ${i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-[#f9fafb] dark:bg-slate-800/50'}`}>
              <span className="text-[12px] text-[#667085] dark:text-slate-400">{r.label}</span>
              <span className="text-[12px] font-semibold text-[#181d27] dark:text-slate-100">{r.value}</span>
            </div>
          ))}
        </div>
      </div>
    </TabCard>
  );
}

// ─── Risk ─────────────────────────────────────────────────────────────────────

function RiskTab() {
  const factors = [
    { name: 'Age',                  level: 'MEDIUM', color: '#b54708', bg: '#fffaeb', border: '#fedf89' },
    { name: 'Nationality',          level: 'HIGH',   color: '#b42318', bg: '#fef3f2', border: '#fecdca' },
    { name: 'Country of residence', level: 'LOW',    color: '#067647', bg: '#ecfdf3', border: '#abefc6' },
    { name: 'Channel',              level: 'HIGH',   color: '#b42318', bg: '#fef3f2', border: '#fecdca' },
  ];
  return (
    <TabCard title="Risk assessment">
      {/* Warning banner */}
      <div className="mx-4 mt-4 mb-3 flex items-start gap-3 px-4 py-3 bg-[#fffaeb] border border-[#fedf89] rounded-[8px]">
        <AlertTriangle className="w-4 h-4 text-[#b54708] shrink-0 mt-0.5" />
        <p className="text-[13px] text-[#b54708]">This assessment may be outdated. Please update to get the latest risk evaluation.</p>
      </div>
      {/* Overall result */}
      <div className="flex items-center gap-3 px-4 mb-4">
        <span className="text-[14px] text-[#667085] dark:text-slate-400">Risk Assessment Result</span>
        <span className="px-3 py-1 rounded-full bg-[#ecfdf3] border border-[#abefc6] text-[#067647] text-[12px] font-semibold">LOW</span>
      </div>
      {/* Factor rows */}
      <div className="flex flex-col px-4 pb-6 gap-2">
        {factors.map((f, i) => (
          <div key={f.name} className={`flex items-center justify-between px-4 py-2.5 rounded-[8px] ${i % 2 === 0 ? 'bg-[#f9fbfc] dark:bg-slate-800/50' : ''}`}>
            <span className="text-[14px] text-[#667085] dark:text-slate-400">{f.name}</span>
            <span className="px-3 py-1 rounded-full text-[12px] font-semibold" style={{ backgroundColor: f.bg, border: `1px solid ${f.border}`, color: f.color }}>{f.level}</span>
          </div>
        ))}
      </div>
    </TabCard>
  );
}

// ─── MASDR ────────────────────────────────────────────────────────────────────

function MasdrTab() {
  const rows = [
    { date: 'Jan 27, 2026', time: '06:54 PM', nid: 'N5745678567568', badge: 'Mofeed Emplyment Platinum', status: 'Success' },
  ];
  return (
    <TabCard title="MASDR">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px]">
          <thead>
            <tr className="bg-[#f8fafc] dark:bg-slate-800">
              {['Date & Time', 'NID', 'Badge', 'Status'].map(h => (
                <th key={h} className="text-left px-4 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] dark:border-slate-700 dark:text-slate-400">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-[#f9fafb] dark:bg-slate-800/50'}>
                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="text-[13px] font-semibold text-[#181d27] dark:text-slate-100">{r.date}</span>
                    <span className="text-[12px] text-[#697586] dark:text-slate-400">{r.time}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-[13px] text-[#181d27] dark:text-slate-100">{r.nid}</td>
                <td className="px-4 py-3">
                  <span className="px-3 py-1 rounded-full bg-[#eaf2ff] border border-[#aacbfc] text-[#0053cc] text-[12px] font-medium">{r.badge}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="px-3 py-1 rounded-full bg-[#ecfdf3] border border-[#abefc6] text-[#067647] text-[12px] font-medium">{r.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination />
    </TabCard>
  );
}

// ─── SIMAH ────────────────────────────────────────────────────────────────────

function SimahTab() {
  const cards = [
    { label: 'Judgements',         value: '0' },
    { label: 'SIMAH Score',        value: '680' },
    { label: 'Bounced Cheques',    value: '0' },
    { label: 'Primary Defaults',   value: '0' },
    { label: 'Total Installment',  value: '0' },
    { label: 'Credit Info',        value: 'Available' },
  ];
  return (
    <TabCard title="SIMAH">
      <div className="px-4 pt-3 pb-2">
        <span className="text-[13px] font-semibold text-[#181d27] dark:text-slate-300">Jan 27, 2026 — 06:54 PM</span>
      </div>
      <div className="grid grid-cols-3 gap-3 px-4 pb-4">
        {cards.map(c => (
          <div key={c.label} className="flex flex-col gap-1 border border-[#eaecf0] rounded-[8px] p-3 dark:border-slate-700">
            <span className="text-[11px] text-[#667085] dark:text-slate-400">{c.label}</span>
            <span className="text-[20px] font-bold text-[#181d27] dark:text-slate-100">{c.value}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 px-4 pb-4">
        <button className="flex items-center gap-1.5 px-4 py-2 border border-[#d5d7da] rounded-[8px] text-[13px] font-medium text-[#344054] hover:bg-[#f9fafb] dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
          Primary Defaults <ExternalLink className="w-3.5 h-3.5" />
        </button>
        <button className="flex items-center gap-1.5 px-4 py-2 border border-[#d5d7da] rounded-[8px] text-[13px] font-medium text-[#344054] hover:bg-[#f9fafb] dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
          Bounced Cheques <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </TabCard>
  );
}

// ─── IPs ─────────────────────────────────────────────────────────────────────

function IpsTab() {
  const rows = [
    { ip: '192.1.68.11', country: 'Kingdom of Saudi Arabia', blocked: false, created: 'May 15, 2024', createdTime: '10:32 AM', lastLogin: 'May 15, 2024', lastLoginTime: '10:32 AM', devices: ['Blink 128', 'Edge 128', 'Windows 11'] },
    { ip: '192.1.68.11', country: 'Egypt',                   blocked: true,  created: 'May 15, 2024', createdTime: '10:32 AM', lastLogin: 'May 15, 2024', lastLoginTime: '10:32 AM', devices: ['Blink 128', 'Edge 128', 'Windows 11'] },
    { ip: '192.1.68.11', country: 'Egypt',                   blocked: false, created: 'May 15, 2024', createdTime: '10:32 AM', lastLogin: 'May 15, 2024', lastLoginTime: '10:32 AM', devices: ['Blink 128', 'Edge 128', 'Windows 11'] },
    { ip: '192.1.68.11', country: 'Egypt',                   blocked: false, created: 'May 15, 2024', createdTime: '10:32 AM', lastLogin: 'May 15, 2024', lastLoginTime: '10:32 AM', devices: ['Blink 128', 'Edge 128', 'Windows 11'] },
    { ip: '192.1.68.11', country: 'Egypt',                   blocked: false, created: 'May 15, 2024', createdTime: '10:32 AM', lastLogin: 'May 15, 2024', lastLoginTime: '10:32 AM', devices: ['Blink 128', 'Edge 128', 'Windows 11'] },
  ];
  return (
    <TabCard>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px]">
          <thead>
            <tr className="bg-[#f8fafc] dark:bg-slate-800">
              {['IP', 'Last Country used', 'Block', 'Creation date', 'Last login date', 'Device', 'Action'].map(h => (
                <th key={h} className="text-left px-3 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] whitespace-nowrap dark:border-slate-700 dark:text-slate-400">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={`border-b border-[#f2f4f7] dark:border-slate-800 ${i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-[#f9fafb] dark:bg-slate-800/50'}`}>
                <td className="px-3 py-3 text-[13px] font-semibold text-[#181d27] whitespace-nowrap dark:text-slate-100">{r.ip}</td>
                <td className="px-3 py-3 text-[13px] text-[#181d27] dark:text-slate-200">{r.country}</td>
                <td className="px-3 py-3">
                  <span className="px-2 py-1 rounded-[6px] text-[12px] font-medium" style={r.blocked ? { background: '#ffe6ed', color: '#e93235' } : { background: '#ddfbed', color: '#12b76a' }}>
                    {r.blocked ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className="px-3 py-3">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-semibold text-[#181d27] dark:text-slate-100 whitespace-nowrap">{r.created}</span>
                    <span className="text-[11px] text-[#697586] dark:text-slate-400">{r.createdTime}</span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-semibold text-[#181d27] dark:text-slate-100 whitespace-nowrap">{r.lastLogin}</span>
                    <span className="text-[11px] text-[#697586] dark:text-slate-400">{r.lastLoginTime}</span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <div className="flex flex-wrap gap-1">
                    {r.devices.map(d => (
                      <span key={d} className="px-2 py-1 rounded-[6px] bg-[#d9e8ff] text-[#3981ff] text-[11px] font-medium whitespace-nowrap">{d}</span>
                    ))}
                  </div>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 rounded-[6px] hover:bg-[#f9fafb] dark:hover:bg-slate-800">
                      {r.blocked ? <Key className="w-4 h-4 text-[#667085] dark:text-slate-400" /> : <Lock className="w-4 h-4 text-[#667085] dark:text-slate-400" />}
                    </button>
                    <button className="p-1.5 rounded-[6px] hover:bg-[#f9fafb] dark:hover:bg-slate-800">
                      <ExternalLink className="w-4 h-4 text-[#667085] dark:text-slate-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TabCard>
  );
}

// ─── Devices ─────────────────────────────────────────────────────────────────

function DevicesTab() {
  const rows = [
    { device: 'Blink 128', os: 'Windows 11',  browser: 'Edge 128',   ip: '192.1.68.11', lastLogin: 'May 15, 2024', time: '10:32 AM', status: true },
    { device: 'Chrome 12', os: 'macOS 14',    browser: 'Chrome 120', ip: '192.1.68.22', lastLogin: 'Apr 03, 2024', time: '08:15 AM', status: false },
    { device: 'Safari 17', os: 'iOS 17',      browser: 'Safari 17',  ip: '192.1.68.33', lastLogin: 'Mar 20, 2024', time: '03:45 PM', status: true },
    { device: 'Firefox 12',os: 'Ubuntu 22',   browser: 'Firefox 120',ip: '192.1.68.44', lastLogin: 'Feb 10, 2024', time: '11:00 AM', status: true },
    { device: 'Edge 128',  os: 'Windows 10',  browser: 'Edge 128',   ip: '192.1.68.55', lastLogin: 'Jan 05, 2024', time: '09:30 PM', status: false },
  ];
  return (
    <TabCard>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="bg-[#f8fafc] dark:bg-slate-800">
              {['Device', 'OS', 'Browser', 'IP', 'Last Login', 'Status', 'Action'].map(h => (
                <th key={h} className="text-left px-3 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] whitespace-nowrap dark:border-slate-700 dark:text-slate-400">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={`border-b border-[#f2f4f7] dark:border-slate-800 ${i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-[#f9fafb] dark:bg-slate-800/50'}`}>
                <td className="px-3 py-3 text-[12px] font-semibold text-[#181d27] dark:text-slate-100">{r.device}</td>
                <td className="px-3 py-3 text-[12px] text-[#181d27] dark:text-slate-200">{r.os}</td>
                <td className="px-3 py-3 text-[12px] text-[#181d27] dark:text-slate-200">{r.browser}</td>
                <td className="px-3 py-3 text-[12px] text-[#181d27] whitespace-nowrap dark:text-slate-200">{r.ip}</td>
                <td className="px-3 py-3">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-semibold text-[#181d27] whitespace-nowrap dark:text-slate-100">{r.lastLogin}</span>
                    <span className="text-[11px] text-[#697586] dark:text-slate-400">{r.time}</span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <span className="px-2 py-1 rounded-[6px] text-[12px] font-medium" style={r.status ? { background: '#ddfbed', color: '#12b76a' } : { background: '#ffe6ed', color: '#e93235' }}>
                    {r.status ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-3 py-3">
                  <button className="p-1.5 rounded-[6px] hover:bg-[#f9fafb] dark:hover:bg-slate-800">
                    <ExternalLink className="w-4 h-4 text-[#667085] dark:text-slate-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TabCard>
  );
}

// ─── User Logs ────────────────────────────────────────────────────────────────

function UserLogsTab() {
  const rows = [
    { datetime: '2023-10-27 14:30:00', user: 'Abdullah ALOtaibi', userId: '258324578945', status: 'Active', action: 'CDD Created' },
    { datetime: '2023-10-27 14:30:00', user: 'Abdullah ALOtaibi', userId: '258324578945', status: 'Active', action: 'CDD Created' },
    { datetime: '2023-10-27 14:30:00', user: 'Abdullah ALOtaibi', userId: '258324578945', status: 'Active', action: 'CDD Created' },
    { datetime: '2023-10-27 14:30:00', user: 'Abdullah ALOtaibi', userId: '258324578945', status: 'Active', action: 'CDD Created' },
    { datetime: '2023-10-27 14:30:00', user: 'Abdullah ALOtaibi', userId: '258324578945', status: 'Active', action: 'CDD Created' },
    { datetime: '2023-10-27 14:30:00', user: 'Abdullah ALOtaibi', userId: '258324578945', status: 'Active', action: 'CDD Created' },
  ];
  return (
    <TabCard>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px]">
          <thead>
            <tr className="bg-[#f8fafc] dark:bg-slate-800">
              <th className="text-left px-6 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] dark:border-slate-700 dark:text-slate-400">Date and Time</th>
              <th className="text-left px-6 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] dark:border-slate-700 dark:text-slate-400">User</th>
              <th className="text-left px-6 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] dark:border-slate-700 dark:text-slate-400 w-[125px]">Status</th>
              <th className="text-left px-6 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] dark:border-slate-700 dark:text-slate-400">Action</th>
              <th className="px-2 py-3 border-b border-[#eaecf0] dark:border-slate-700">
                <button className="p-2 rounded-[8px] hover:bg-[#f2f4f7] dark:hover:bg-slate-700">
                  <Download className="w-4 h-4 text-[#667085] dark:text-slate-400" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={`border-b border-[#f2f4f7] dark:border-slate-800 ${i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-[#f9fafb] dark:bg-slate-800/50'}`}>
                <td className="px-6 py-3">
                  <span className="text-[13px] font-semibold text-[#121a26] dark:text-slate-100">{r.datetime}</span>
                </td>
                <td className="px-6 py-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-semibold text-[#121a26] dark:text-slate-100">{r.user}</span>
                    <span className="text-[12px] text-[#717680] dark:text-slate-400">ID:{r.userId}</span>
                  </div>
                </td>
                <td className="px-6 py-3">
                  <span className="px-3 py-1 rounded-full bg-[#ecfdf3] border border-[#abefc6] text-[#067647] text-[12px] font-medium">{r.status}</span>
                </td>
                <td className="px-6 py-3">
                  <span className="text-[13px] text-[#181d27] dark:text-slate-200">{r.action}</span>
                </td>
                <td />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination />
    </TabCard>
  );
}

// ─── Points ───────────────────────────────────────────────────────────────────

function PointsTab() {
  const rows = [
    { date: 'Dec 12, 2023', time: '11:58 PM', mission: 'Complimentary', type: 'Earned', amount: '+100' },
    { date: 'Dec 12, 2023', time: '11:58 PM', mission: '',              type: 'Redeemed', amount: '-100' },
    { date: 'Dec 12, 2023', time: '11:58 PM', mission: '',              type: 'Expired', amount: '-100' },
    { date: 'Dec 12, 2023', time: '11:58 PM', mission: 'Complimentary', type: 'Earned',  amount: '+100' },
  ];
  const typeBadge = (t: string) => {
    if (t === 'Earned' || t === 'Refunded') return 'bg-[#eaf2ff] border border-[#aacbfc] text-[#0053cc]';
    return 'bg-[#fafafa] border border-[#e9eaeb] text-[#414651]';
  };
  return (
    <TabCard>
      {/* Stat cards */}
      <div className="flex gap-3 px-4 pt-4 pb-3">
        {[
          { label: 'Total',    value: '1,500', yellow: false },
          { label: 'Redeemed', value: '200',   yellow: false },
          { label: 'Expired',  value: '1000',  yellow: false },
          { label: 'Active',   value: '300',   yellow: true },
        ].map(c => (
          <div key={c.label} className={`flex-1 rounded-[8px] px-3 py-2 flex flex-col gap-1 ${c.yellow ? 'bg-[#ffe355]' : 'bg-[#fafafa] dark:bg-slate-800'}`}>
            <span className="text-[11px] text-[#667085] dark:text-slate-400">{c.label}</span>
            <span className="text-[20px] font-bold text-[#181d27] dark:text-slate-100">{c.value}</span>
          </div>
        ))}
      </div>
      {/* Action buttons */}
      <div className="flex items-center gap-3 px-4 pb-3">
        <button className="px-4 py-2 rounded-[8px] border border-[#80b1fa] text-[#0053cc] text-[13px] font-medium bg-white hover:bg-[#f5f9ff] dark:bg-slate-900 dark:hover:bg-slate-800">
          Guest History
        </button>
        <button className="px-4 py-2 rounded-[8px] bg-[#0063f5] text-white text-[13px] font-medium hover:bg-[#0052d4]">
          Add Complimentary Points
        </button>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="bg-[#f8fafc] dark:bg-slate-800">
              {['Date & Time', 'Mission Name', 'Points Type', 'Points Amount', ''].map(h => (
                <th key={h} className="text-left px-4 py-2.5 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] dark:border-slate-700 dark:text-slate-400">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={`border-b border-[#f2f4f7] dark:border-slate-800 ${i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-[#f9fafb] dark:bg-slate-800/50'}`}>
                <td className="px-4 py-2.5">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-semibold text-[#181d27] dark:text-slate-100">{r.date}</span>
                    <span className="text-[11px] text-[#697586] dark:text-slate-400">{r.time}</span>
                  </div>
                </td>
                <td className="px-4 py-2.5 text-[12px] text-[#181d27] dark:text-slate-200">{r.mission}</td>
                <td className="px-4 py-2.5">
                  <span className={`px-3 py-1 rounded-full text-[12px] font-medium ${typeBadge(r.type)}`}>{r.type}</span>
                </td>
                <td className="px-4 py-2.5">
                  <span className={`text-[14px] font-semibold ${r.amount.startsWith('+') ? 'text-[#0063f5]' : 'text-[#697586] dark:text-slate-400'}`}>{r.amount}</span>
                </td>
                <td className="px-4 py-2.5">
                  <button className="p-1 rounded-[6px] hover:bg-[#f2f4f7] dark:hover:bg-slate-700">
                    <MoreVertical className="w-4 h-4 text-[#667085] dark:text-slate-400" />
                  </button>
                </td>
              </tr>
            ))}
            {/* Reason sub-row */}
            <tr className="bg-[#f9fbfc] dark:bg-slate-800/50">
              <td colSpan={5} className="px-4 py-2">
                <div className="flex items-start gap-2 pl-4">
                  <CornerDownRight className="w-4 h-4 text-[#9aa4b2] shrink-0 mt-0.5 dark:text-slate-500" />
                  <span className="text-[12px] text-[#697586] dark:text-slate-400"><span className="font-semibold text-[#181d27] dark:text-slate-300">Reason: </span>Adding points creates a fair and motivating system that benefits both the customer and the business.</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <TablePagination />
    </TabCard>
  );
}

// ─── Rewards ──────────────────────────────────────────────────────────────────

function RewardsTab() {
  return (
    <TabCard>
      <div className="flex flex-col items-center justify-center py-16 gap-6">
        <div className="w-[120px] h-[120px] rounded-full bg-[#f2f4f7] flex items-center justify-center dark:bg-slate-800">
          <Gift className="w-12 h-12 text-[#9aa4b2] dark:text-slate-500" />
        </div>
        <span className="text-[20px] font-semibold text-[#1e2228] dark:text-slate-200">No Rewards Found</span>
      </div>
    </TabCard>
  );
}

// ─── Orders ───────────────────────────────────────────────────────────────────

function OrdersTab() {
  const rows = [
    {
      orderId: 'PLN-1071',
      created: 'March 11, 2026, 01:00 PM',
      updated: 'March 12, 2026, 02:00 PM',
      status: 'Pending',
      name: 'Mustafa Barakat Adhi',
      customerId: '1074404649',
      phone: '+966586868658',
      email: 'mustafa.barakat@gmail.com',
      product: 'Buyout Debt Repayment Product',
      productAr: 'منتج سداد الديون عن طريق شراء الأصول',
      amount: '234,732.5',
      apr: '4.45%',
      mgmtFee: '2,190.49',
      brokerageFee: '2,190.49',
    },
  ];
  return (
    <TabCard>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="bg-[#f8fafc] dark:bg-slate-800">
              <th className="text-left px-4 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] w-[180px] dark:border-slate-700 dark:text-slate-400">Order ID</th>
              <th className="text-left px-4 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] w-[120px] dark:border-slate-700 dark:text-slate-400">Order Status</th>
              <th className="text-left px-4 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] w-[240px] dark:border-slate-700 dark:text-slate-400">Customer Details</th>
              <th className="text-left px-4 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] dark:border-slate-700 dark:text-slate-400">Product Details</th>
              <th className="text-left px-4 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] w-[180px] dark:border-slate-700 dark:text-slate-400">Loan Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={`border-b border-[#f2f4f7] dark:border-slate-800 ${i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-[#f9fafb] dark:bg-slate-800/50'}`}>
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-bold text-[#181d27] dark:text-slate-100">{r.orderId}</span>
                    <span className="text-[11px] text-[#697586] dark:text-slate-400">Created: {r.created}</span>
                    <span className="text-[11px] text-[#697586] dark:text-slate-400">Updated: {r.updated}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="px-3 py-1 rounded-full bg-[#fffaeb] border border-[#fedf89] text-[#b54708] text-[12px] font-medium">{r.status}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-semibold text-[#181d27] dark:text-slate-100">{r.name}</span>
                    <span className="text-[11px] text-[#697586] dark:text-slate-400">🪪 {r.customerId}</span>
                    <span className="text-[11px] text-[#697586] dark:text-slate-400">📞 {r.phone}</span>
                    <span className="text-[11px] text-[#697586] dark:text-slate-400">✉️ {r.email}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] text-[#181d27] dark:text-slate-100">{r.product}</span>
                    <span className="text-[12px] text-[#697586] dark:text-slate-400" dir="rtl">{r.productAr}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-bold text-[#0063f5]">SAR {r.amount}</span>
                    <span className="text-[11px] text-[#697586] dark:text-slate-400">APR: {r.apr}</span>
                    <span className="text-[11px] text-[#697586] dark:text-slate-400">Mgmt fee: SAR {r.mgmtFee}</span>
                    <span className="text-[11px] text-[#697586] dark:text-slate-400">Brokerage: SAR {r.brokerageFee}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination />
    </TabCard>
  );
}

// ─── Invoices ─────────────────────────────────────────────────────────────────

const MOCK_INVOICES = [
  { id: 'INV5745678567567', txId: 'TML-REQ-45922', date: 'Dec 12, 2023', time: '11:58 PM', status: 'Paid',   amount: '150' },
  { id: 'INV5745678567567', txId: 'TML-REQ-45922', date: 'Dec 12, 2023', time: '11:58 PM', status: 'Refund', amount: '150' },
  { id: 'INV5745678567567', txId: 'TML-REQ-45922', date: 'Dec 12, 2023', time: '11:58 PM', status: 'Refund', amount: '150' },
  { id: 'INV5745678567567', txId: 'TML-REQ-45922', date: 'Dec 12, 2023', time: '11:58 PM', status: 'Paid',   amount: '150' },
  { id: 'INV5745678567567', txId: 'TML-REQ-45922', date: 'Dec 12, 2023', time: '11:58 PM', status: 'Paid',   amount: '150' },
  { id: 'INV5745678567567', txId: 'TML-REQ-45922', date: 'Dec 12, 2023', time: '11:58 PM', status: 'Paid',   amount: '150' },
  { id: 'INV5745678567567', txId: 'TML-REQ-45922', date: 'Dec 12, 2023', time: '11:58 PM', status: 'Refund', amount: '150' },
];

function InvoicesTab() {
  return (
    <TabCard>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[440px]">
          <thead>
            <tr className="bg-[#f8fafc] dark:bg-slate-800">
              <th className="text-left px-5 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] dark:border-slate-700 dark:text-slate-400">Invoice Number</th>
              <th className="text-left px-5 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] w-[110px] dark:border-slate-700 dark:text-slate-400">Status</th>
              <th className="text-left px-5 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] w-[110px] dark:border-slate-700 dark:text-slate-400">Total Amount</th>
              <th className="px-5 py-3 border-b border-[#eaecf0] dark:border-slate-700 w-[48px]" />
            </tr>
          </thead>
          <tbody>
            {MOCK_INVOICES.map((inv, i) => (
              <tr key={i} className={`border-b border-[#f2f4f7] dark:border-slate-800 ${i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-[#f9fafb] dark:bg-slate-800/50'}`}>
                <td className="px-5 py-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-bold text-[#181d27] dark:text-slate-100">{inv.id}</span>
                    <span className="text-[12px] text-[#697586] dark:text-slate-400">Transaction ID: {inv.txId}</span>
                  </div>
                </td>
                <td className="px-5 py-3">
                  {inv.status === 'Paid'
                    ? <span className="px-3 py-1 rounded-full bg-[#ecfdf3] border border-[#abefc6] text-[#067647] text-[12px] font-medium">Paid</span>
                    : <span className="px-3 py-1 rounded-full bg-[#fafafa] border border-[#e9eaeb] text-[#414651] text-[12px] font-medium dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300">Refund</span>
                  }
                </td>
                <td className="px-5 py-3">
                  <span className="text-[20px] font-bold text-[#0063f5]">SAR {inv.amount}</span>
                </td>
                <td className="px-5 py-3">
                  <button className="p-2 rounded-[8px] hover:bg-[#f2f4f7] dark:hover:bg-slate-700">
                    <Download className="w-4 h-4 text-[#667085] dark:text-slate-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination />
    </TabCard>
  );
}

// ─── Decisions ────────────────────────────────────────────────────────────────

function DecisionsTab() {
  const rows = [
    { date: 'January 27, 2026', time: '06:54 PM', institution: 'Bank Al-Bilad', product: 'Buyout Debt Repayment Product' },
    { date: 'January 27, 2026', time: '06:54 PM', institution: 'Bank Al-Bilad', product: 'Buyout Debt Repayment Product' },
    { date: 'January 27, 2026', time: '06:54 PM', institution: 'Bank Al-Bilad', product: 'Buyout Debt Repayment Product' },
  ];
  return (
    <TabCard>
      {/* Header with title + filter */}
      <div className="flex items-center justify-between px-[18px] py-[18px] border-b border-[#f2f4f7] dark:border-slate-800">
        <span className="text-[18px] font-bold text-[#0063f5]">Decisions</span>
        <button className="flex items-center gap-2 px-4 py-2.5 border border-[#d5d7da] rounded-[8px] bg-white text-[14px] font-medium text-[#414651] shadow-sm hover:bg-[#f9fafb] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
          <SlidersHorizontal className="w-4 h-4 text-[#667085] dark:text-slate-400" />
          Filter
          <ChevronDown className="w-4 h-4 text-[#667085] dark:text-slate-400" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[460px]">
          <thead>
            <tr className="bg-[#f8fafc] dark:bg-slate-800">
              <th className="text-left px-4 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] w-[130px] dark:border-slate-700 dark:text-slate-400">Date / Time</th>
              <th className="text-left px-4 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] w-[120px] dark:border-slate-700 dark:text-slate-400">Institution</th>
              <th className="text-left px-4 py-3 text-[12px] font-medium text-[#667085] border-b border-[#eaecf0] dark:border-slate-700 dark:text-slate-400">Product Name</th>
              <th className="px-4 py-3 border-b border-[#eaecf0] dark:border-slate-700 w-[48px]" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={`border-b border-[#f2f4f7] dark:border-slate-800 ${i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-[#f9fafb] dark:bg-slate-800/50'}`}>
                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-semibold text-[#181d27] dark:text-slate-100">{r.date}</span>
                    <span className="text-[11px] text-[#697586] dark:text-slate-400">{r.time}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-[12px] font-semibold text-[#181d27] dark:text-slate-200">{r.institution}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-[13px] text-[#181d27] dark:text-slate-200">{r.product}</span>
                </td>
                <td className="px-4 py-3">
                  <button className="p-2 rounded-[8px] hover:bg-[#f2f4f7] dark:hover:bg-slate-700">
                    <ExternalLink className="w-4 h-4 text-[#667085] dark:text-slate-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TabCard>
  );
}

// ─── Panel ────────────────────────────────────────────────────────────────────

export default function CustomerDetailsPanel({
  order,
  onClose,
  className,
}: {
  order: Order;
  onClose: () => void;
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState<TabKey>('KYC');
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 'left' | 'right') {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -160 : 160, behavior: 'smooth' });
  }

  function renderTab() {
    switch (activeTab) {
      case 'KYC':        return <KycTab />;
      case 'Preliminary':return <PreliminaryTab />;
      case 'Application':return <ApplicationTab />;
      case 'Screening':  return <ScreeningTab />;
      case 'Risk':       return <RiskTab />;
      case 'MASDR':      return <MasdrTab />;
      case 'SIMAH':      return <SimahTab />;
      case 'IPs':        return <IpsTab />;
      case 'Devices':    return <DevicesTab />;
      case 'User Logs':  return <UserLogsTab />;
      case 'Points':     return <PointsTab />;
      case 'Rewards':    return <RewardsTab />;
      case 'Orders':     return <OrdersTab />;
      case 'Invoices':   return <InvoicesTab />;
      case 'Decisions':  return <DecisionsTab />;
    }
  }

  return (
    <div className={cn('w-[588px] shrink-0 flex flex-col rounded-[6px] border border-[#e2e3e4] bg-white overflow-hidden dark:border-slate-800 dark:bg-slate-950', className)}>
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-[#f2f4f7] shrink-0 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-[12px] leading-[18px] font-medium text-[#697586] dark:text-slate-400">Customer ID</span>
          <span className="text-[18px] leading-[28px] font-bold text-[#181d27] dark:text-slate-100">{order.customerId}</span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[#fee2e2] text-[#d91c1c] hover:bg-[#fff1f3] transition-colors dark:border-red-900 dark:hover:bg-red-950"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Title */}
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-[22px] leading-7 font-bold text-[#181d27] dark:text-slate-100">Customer Details</h2>
        </div>

        <div className="px-6 pb-6 flex flex-col gap-3">
          {/* Profile row */}
          <div className="h-[114px] rounded-[6px] border border-[#eef1f6] flex items-center gap-6 px-4 dark:border-slate-800">
            <div className="w-[100px] h-[100px] rounded-full bg-[#eef1f6] flex items-center justify-center shrink-0 overflow-hidden dark:bg-slate-800">
              <User className="w-10 h-10 text-[#9aa4b2] dark:text-slate-500" />
            </div>
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              <p className="text-[16px] leading-5 font-bold text-[#181d27] dark:text-slate-100">{order.customerName}</p>
              <span className="inline-flex w-fit px-4 py-1.5 rounded-full bg-[#dcfae6] border border-[#079455] text-[#079455] text-[13px] font-semibold">Active</span>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-[6px] border border-[#ffb4c0] text-[#ef3462] text-[14px] font-medium hover:bg-[#fff1f3] transition-colors w-[126px]">
                <User className="w-3.5 h-3.5" /> Deactivate
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-[6px] border border-[#ffb4c0] text-[#ef3462] text-[14px] font-medium hover:bg-[#fff1f3] transition-colors w-[126px]">
                <ShieldX className="w-3.5 h-3.5" /> Suspend
              </button>
            </div>
          </div>

          {/* Info grid */}
          <div className="flex gap-3">
            <div className="w-[247px] border border-[#eef1f6] rounded-[6px] overflow-hidden dark:border-slate-800">
              {[
                { label: 'National/Iqama ID', value: order.customerId },
                { label: 'Mobile number',     value: order.customerPhone },
                { label: 'Nationality',        value: 'Saudi Arabia' },
              ].map((row, i, arr) => (
                <div key={row.label} className={`flex items-center justify-between h-[34px] px-4 ${i < arr.length - 1 ? 'border-b border-[#f2f4f7] dark:border-slate-800' : ''}`}>
                  <span className="text-[12px] text-[#697586] dark:text-slate-400">{row.label}</span>
                  <span className="text-[12px] font-semibold text-[#181d27] dark:text-slate-100">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="flex-1 shrink-0 border border-[#eef1f6] rounded-[6px] flex items-center justify-center gap-5 px-6 dark:border-slate-800">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[12px] text-[#697586] font-medium dark:text-slate-400">AML Score</span>
                <span className="text-[36px] font-bold text-[#181d27] leading-none dark:text-slate-100">86%</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[12px] text-[#697586] font-medium dark:text-slate-400">AML Status</span>
                <span className="px-5 py-2 rounded-full bg-[#dcfae6] border border-[#079455] text-[#079455] text-[13px] font-semibold">Passed</span>
              </div>
            </div>
          </div>

          {/* Tabs + content (no gap between them) */}
          <div className="flex flex-col">
            <div className="flex h-[57px] items-start overflow-hidden pl-px relative z-[2]">
              <button
                onClick={() => scroll('left')}
                className="flex items-center justify-center px-2 py-[18px] shrink-0 text-[#667085] hover:text-[#202a39] dark:text-slate-400"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div ref={scrollRef} className="flex flex-1 h-full items-start overflow-x-auto scrollbar-none scroll-smooth pt-px pl-px">
                {TABS.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    onClick={() => setActiveTab(label)}
                    className={cn(
                      'flex items-center justify-center gap-2 h-full px-6 py-1 text-[14px] font-bold text-[#202a39] whitespace-nowrap rounded-tl-[6px] rounded-tr-[6px] shrink-0 -mb-px transition-colors dark:text-slate-200',
                      activeTab === label
                        ? 'bg-white border border-[#e2e3e4] border-b-white dark:bg-slate-900 dark:border-slate-700 dark:border-b-slate-900'
                        : 'hover:bg-[#f8fafc] dark:hover:bg-slate-900'
                    )}
                  >
                    <Icon className="w-[18px] h-[18px] shrink-0" />
                    {label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => scroll('right')}
                className="flex items-center justify-center px-2 py-[18px] shrink-0 text-[#667085] hover:text-[#202a39] dark:text-slate-400"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="-mt-px relative z-[1]">
              {renderTab()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
