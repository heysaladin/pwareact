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

function SimahInfoRow({ label, value, shaded }: { label: string; value: string; shaded?: boolean }) {
  return (
    <div className={`flex gap-2 items-start p-3 rounded-lg ${shaded ? 'bg-[#f8fafc] dark:bg-slate-800/50' : ''}`}>
      <span className="text-[13px] text-[#697586] dark:text-slate-400 shrink-0 w-[140px]">{label} :</span>
      <span className="text-[13px] font-semibold text-[#121a26] dark:text-slate-100 flex-1">{value}</span>
    </div>
  );
}

function SimahInfoRowWide({ label, value, shaded }: { label: string; value: string; shaded?: boolean }) {
  return (
    <div className={`flex gap-2 items-start p-3 rounded-lg ${shaded ? 'bg-[#f8fafc] dark:bg-slate-800/50' : ''}`}>
      <span className="text-[13px] text-[#697586] dark:text-slate-400 shrink-0 w-[220px]">{label} :</span>
      <span className="text-[13px] font-semibold text-[#121a26] dark:text-slate-100 flex-1">{value}</span>
    </div>
  );
}

function SimahContentBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#e3e8ef] rounded-[6px] overflow-hidden dark:bg-slate-900 dark:border-slate-700">
      {children}
    </div>
  );
}

function PersonalInfoContent() {
  const leftFields = [
    { label: 'ID Number',      value: '1092147162' },
    { label: 'Nationality',    value: 'Saudi Arabia' },
    { label: 'Mobile Number',  value: '966563271454' },
  ];
  const rightFields = [
    { label: 'Gender',         value: 'Female' },
    { label: 'Date Of Birth',  value: '13/04/1996' },
    { label: 'Update Date',    value: '28/08/2024' },
  ];
  return (
    <SimahContentBox>
      <div className="p-6 flex flex-col gap-4">
        <SimahInfoRow label="Customer Name" value="MOROOJ MOHANNA M FALEMBAN" />
        <div className="flex gap-6">
          <div className="flex-1 flex flex-col">
            {leftFields.map((f, i) => <SimahInfoRow key={f.label} label={f.label} value={f.value} shaded={i % 2 === 0} />)}
          </div>
          <div className="flex-1 flex flex-col">
            {rightFields.map((f, i) => <SimahInfoRow key={f.label} label={f.label} value={f.value} shaded={i % 2 === 0} />)}
          </div>
        </div>
      </div>
    </SimahContentBox>
  );
}

function CreditSummaryContent() {
  const group1 = [
    { label: 'First Account Issue Date',             value: '17/09/2016' },
    { label: 'Number of Active Credit Products',     value: '1' },
    { label: 'Total Limits',                         value: '230.00' },
    { label: 'Total Outstanding Balances',           value: '45.41' },
  ];
  const group2 = [
    { label: 'Total Guaranteed Limits',              value: '0.00' },
    { label: 'Total Guaranteed Balances',            value: '0.00' },
  ];
  const group3 = [
    { label: 'Number of Defaulted Products',         value: '0' },
    { label: 'Total Outstanding Defaulted Balance',  value: '0.00' },
  ];
  return (
    <SimahContentBox>
      <div className="p-6 flex flex-col gap-1">
        {group1.map((f, i) => <SimahInfoRowWide key={f.label} label={f.label} value={f.value} shaded={i % 2 === 0} />)}
        <div className="h-px bg-[#e3e8ef] dark:bg-slate-700 my-2" />
        {group2.map((f, i) => <SimahInfoRowWide key={f.label} label={f.label} value={f.value} shaded={i % 2 === 0} />)}
        <div className="h-px bg-[#e3e8ef] dark:bg-slate-700 my-2" />
        {group3.map((f, i) => <SimahInfoRowWide key={f.label} label={f.label} value={f.value} shaded={i % 2 === 0} />)}
      </div>
    </SimahContentBox>
  );
}

function CreditScoreContent() {
  const score = 634;
  const min = 300;
  const max = 850;
  const r = 70;
  const cx = 100;
  const cy = 80;
  const circumference = Math.PI * r;
  const progress = (score - min) / (max - min);
  const offset = circumference * (1 - progress);

  return (
    <SimahContentBox>
      <div className="flex items-center gap-8 p-8">
        {/* Gauge */}
        <div className="flex flex-col items-center gap-4 shrink-0">
          <div className="relative">
            <svg viewBox="0 0 200 90" width="200" height="90">
              <path
                d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
                fill="none" stroke="#e9eaeb" strokeWidth="8" strokeLinecap="round"
              />
              <path
                d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
                fill="none" stroke="#0063f5" strokeWidth="8" strokeLinecap="round"
                strokeDasharray={circumference} strokeDashoffset={offset}
              />
              <text x={cx} y={cy - 40} textAnchor="middle" fill="#697586" fontSize="9" letterSpacing="0.5">Credit Score</text>
              <text x={cx} y={cy - 2} textAnchor="middle" fill="#181d27" fontSize="32" fontWeight="500">{score}</text>
              <text x={cx - r - 2} y={cy + 14} textAnchor="end" fill="#9aa4b2" fontSize="11" fontWeight="600">300</text>
              <text x={cx + r + 2} y={cy + 14} fill="#9aa4b2" fontSize="11" fontWeight="600">850</text>
            </svg>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="border-[1.5px] border-[#0063f5] text-[#004fc6] text-[12px] font-semibold rounded-[8px] px-3 py-1.5 tracking-[0.5px]">
              MEDIUM RISK
            </span>
            <span className="text-[10px] text-[#697586] tracking-[0.5px]">MOLIM Score powered by FICO</span>
          </div>
        </div>

        {/* Contributing factors */}
        <div className="flex flex-col gap-4 flex-1 min-w-0">
          <p className="text-[16px] font-bold text-[#0041a3] dark:text-blue-300">Score Contributing Factors :</p>
          <div className="flex flex-col gap-2">
            {[
              'Lack of recent revolving account information and activity',
              'At least one account with a missed payment',
            ].map(factor => (
              <div key={factor} className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-[3px] bg-[#00317a] shrink-0 mt-1" />
                <p className="text-[13px] text-[#00317a] dark:text-blue-400 leading-5">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SimahContentBox>
  );
}

function ActiveProductsTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <SimahContentBox>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col} className="text-left px-4 py-3 text-[13px] font-medium text-[#697586] dark:text-slate-400 border-b border-[#f2f4f7] dark:border-slate-700 whitespace-nowrap">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border border-[#e9eaeb] dark:border-slate-700 rounded-[6px]">
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-4 text-[13px] font-semibold text-[#697586] dark:text-slate-400 border-b border-[#f2f4f7] dark:border-slate-700 whitespace-nowrap">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SimahContentBox>
  );
}

const PAYMENT_CODES: { label: string; bg: string; text: string; icon?: string }[] = [
  { label: 'Payment on time',           bg: '#ecfdf3', text: '#079455',  icon: '✓' },
  { label: '30 days overdue',           bg: '#fef4e8', text: '#ca7404',  icon: '30' },
  { label: '60 days overdue',           bg: '#fef4e8', text: '#ca7404',  icon: '60' },
  { label: '90 days overdue',           bg: '#fef4e8', text: '#ca7404',  icon: '90' },
  { label: '120 days overdue',          bg: '#fef2f2', text: '#d91c1c',  icon: '120' },
  { label: '150 days overdue',          bg: '#fef2f2', text: '#d91c1c',  icon: '150' },
  { label: '180 days overdue',          bg: '#fef2f2', text: '#d91c1c',  icon: '180' },
  { label: '>180 days overdue',         bg: '#fef2f2', text: '#d91c1c',  icon: '>180' },
  { label: 'New product',               bg: '#f5f9ff', text: '#0063f5',  icon: '★' },
  { label: 'Default product',           bg: '#fef2f2', text: '#d91c1c',  icon: '⊘' },
  { label: 'Closed product',            bg: '#f5f9ff', text: '#0063f5',  icon: '⚑' },
  { label: 'No transactions',           bg: '#f8fafc', text: '#697586' },
  { label: 'Deferred payment',          bg: '#f8fafc', text: '#697586' },
  { label: 'Fully paid closed',         bg: '#f5f9ff', text: '#0063f5',  icon: '⚑' },
  { label: 'No update',                 bg: '#f8fafc', text: '#697586' },
  { label: 'Vacation Deferred',         bg: '#f8fafc', text: '#697586' },
];

function PaymentCodeGuideContent() {
  return (
    <SimahContentBox>
      <div className="p-6 grid grid-cols-2 gap-x-6 gap-y-3">
        {PAYMENT_CODES.map(({ label, bg, text, icon }) => (
          <div
            key={label}
            className="flex items-center gap-2 pl-[8px] pr-[12px] py-[6px] rounded-[24px]"
            style={{ backgroundColor: bg }}
          >
            {icon && (
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                style={{ backgroundColor: text + '22', color: text }}
              >
                {icon}
              </span>
            )}
            <span className="text-[13px] font-medium" style={{ color: text }}>{label}</span>
          </div>
        ))}
      </div>
    </SimahContentBox>
  );
}

const TAMAWAL_DISCLAIMER = 'This report was prepared by Tamawal Financial Company ("Tamawal"), under Commercial Registration No. 1010837629, issued from Riyadh on 1445/06/17H. Tamawal is licensed by the Saudi Central Bank (SAMA) under license number 22/01097 to practice Finance Aggregation activity. The information contained in this report is provided for informational purposes only and does not constitute financial advice, credit assessment, or a solicitation to enter into any financial transaction.';
const TAMAWAL_DISCLOSURE = 'Tamawal Financial Company is a Saudi limited liability company registered under Commercial Registration No. 1010837629, with its principal office located in Riyadh, Kingdom of Saudi Arabia. Tamawal is regulated by the Saudi Central Bank (SAMA) and operates under applicable Saudi laws and regulations governing financial services and consumer protection.';
const SIMAH_DISCLAIMER = 'The Saudi Credit Bureau (SIMAH) is the official credit reporting agency in the Kingdom of Saudi Arabia, established under Royal Decree No. (M/31) and licensed by the Saudi Central Bank (SAMA). The credit information contained herein is provided solely for the purposes of credit assessment and risk evaluation and shall not be used for any other purpose without prior written authorization from SIMAH.';
const SIMAH_DISCLOSURE = 'Saudi Credit Bureau – SIMAH is a closed joint-stock company operating under Commercial Registration No. 1010220774, headquartered in Riyadh, Kingdom of Saudi Arabia. SIMAH operates under the regulatory oversight of the Saudi Central Bank (SAMA) and is the sole licensed credit bureau authorized to collect, maintain, and disseminate credit information in the Kingdom in accordance with the Credit Information Law.';

function DisclaimerContent() {
  return (
    <SimahContentBox>
      <div className="p-6 flex flex-col gap-6">
        {/* Block 1: Tamawal */}
        <div className="flex flex-col gap-3">
          <p className="text-[12.5px] text-[#9aa4b2] text-center tracking-wide">Disclaimer &amp; Disclosure by Tamawal</p>
          <div className="flex flex-col gap-3">
            <p className="text-[13px] font-bold text-[#00317a]">Disclaimer</p>
            <p className="text-[13px] text-[#00317a] leading-6">{TAMAWAL_DISCLAIMER}</p>
            <p className="text-[13px] font-bold text-[#00317a]">Disclosure</p>
            <p className="text-[13px] text-[#00317a] leading-6">{TAMAWAL_DISCLOSURE}</p>
          </div>
        </div>

        <div className="h-px bg-[#e3e8ef] dark:bg-slate-700" />

        {/* Block 2: SIMAH */}
        <div className="flex flex-col gap-3">
          <p className="text-[12.5px] text-[#9aa4b2] text-center tracking-wide">Disclaimer &amp; Disclosure by SIMAH</p>
          <div className="flex flex-col gap-3">
            <p className="text-[13px] font-bold text-[#00317a]">Disclaimer</p>
            <p className="text-[13px] text-[#00317a] leading-6">{SIMAH_DISCLAIMER}</p>
            <p className="text-[13px] font-bold text-[#00317a]">Disclosure</p>
            <p className="text-[13px] text-[#00317a] leading-6">{SIMAH_DISCLOSURE}</p>
          </div>
        </div>
      </div>
    </SimahContentBox>
  );
}

const ENQUIRY_ROWS = [
  { date: '01/08/2024', enquirer: 'EMIRATES BANK',           ref: 'ENQ-2024-001234', product: 'Personal Loan',  amount: '0.00' },
  { date: '15/07/2024', enquirer: 'EMIRATES BANK',           ref: 'ENQ-2024-005678', product: 'Personal Loan',  amount: '0.00' },
  { date: '03/06/2024', enquirer: 'SOCIAL DEVELOPMENT BANK', ref: 'ENQ-2024-009012', product: 'Miscellaneous',  amount: '0.00' },
  { date: '22/04/2024', enquirer: 'EMKAN COMPANY',           ref: 'ENQ-2024-003456', product: 'Personal Loan',  amount: '500000.00' },
  { date: '10/03/2024', enquirer: 'AL RAJHI BANK',           ref: 'ENQ-2024-007890', product: 'Charge Card',    amount: '0.00' },
  { date: '28/01/2024', enquirer: 'AL RAJHI BANK',           ref: 'ENQ-2024-002345', product: 'Personal Loan',  amount: '0.00' },
  { date: '05/12/2023', enquirer: 'AL RAJHI BANK',           ref: 'ENQ-2023-006789', product: 'Car Lease',      amount: '0.00' },
  { date: '19/11/2023', enquirer: 'AL RAJHI BANK',           ref: 'ENQ-2023-001234', product: 'Personal Loan',  amount: '0.00' },
  { date: '07/09/2023', enquirer: 'AL RAJHI BANK',           ref: 'ENQ-2023-005678', product: 'Charge Card',    amount: '0.00' },
  { date: '14/07/2023', enquirer: 'AL RAJHI BANK',           ref: 'ENQ-2023-009012', product: 'Personal Loan',  amount: '0.00' },
  { date: '02/05/2023', enquirer: 'AL RAJHI BANK',           ref: 'ENQ-2023-003456', product: 'Car Lease',      amount: '0.00' },
];

function PreviousEnquiriesContent() {
  return (
    <SimahContentBox>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr style={{ height: 36 }}>
              <th className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] dark:text-slate-400 whitespace-nowrap" style={{ width: 110 }}>Enquiry Date</th>
              <th className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] dark:text-slate-400 whitespace-nowrap" style={{ width: 200 }}>Enquirer</th>
              <th className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] dark:text-slate-400 whitespace-nowrap">Enquiry Reference</th>
              <th className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] dark:text-slate-400 whitespace-nowrap" style={{ width: 200 }}>Product Type</th>
              <th className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] dark:text-slate-400 whitespace-nowrap" style={{ width: 100 }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {ENQUIRY_ROWS.map((row, i) => (
              <tr key={i} className="border border-[#e9eaeb] dark:border-slate-700 shadow-[inset_0px_-1px_0px_0px_#f2f4f7]" style={{ height: 96 }}>
                <td className="px-6 py-2 text-[13px] text-[#697586] dark:text-slate-400 whitespace-nowrap" dir="ltr">{row.date}</td>
                <td className="px-6 py-2 text-[13px] text-[#697586] dark:text-slate-400 whitespace-nowrap">{row.enquirer}</td>
                <td className="px-6 py-2 text-[13px] text-[#697586] dark:text-slate-400 whitespace-nowrap" dir="ltr">{row.ref}</td>
                <td className="px-6 py-2 text-[13px] text-[#697586] dark:text-slate-400 whitespace-nowrap">{row.product}</td>
                <td className="px-6 py-2 text-[13px] text-[#697586] dark:text-slate-400 whitespace-nowrap" dir="ltr">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SimahContentBox>
  );
}

const PRODUCT_DETAILS_ITEMS = [
  { company: 'TIHAAD ETISALAAT COMPANY', product: 'Mobile Phone', status: 'Active', onTime: 16 },
  { company: 'ZAIN COMPANY',             product: 'Mobile Phone', status: 'Active', onTime: 16 },
  { company: 'ANOTHER COMPANY',          product: 'Mobile Phone', status: 'Active', onTime: 16 },
];

const TABLE_A_COLS = ['Account Number', 'Issue Date', 'Credit Limit', 'Number Of Installments', 'Installment Amount', 'Payment Frequency', 'Expiry Date', 'Type Of Guarantee'];
const TABLE_A_ROW  = ['99201004263\n1585886_1', '06/02/2022', '230.00', '0.00', '0.00', 'Monthly', '01/08/2024', 'Cash'];
const TABLE_B_COLS = ['Outstanding Balance', 'Past Due Balance', 'As Of Date', 'Last Amount Paid', 'Last Payment Date', 'Next Payment Date', 'Close Date', 'Salary Assignment'];
const TABLE_B_ROW  = ['45.41', '0.00', '01/08/2024', '5.00', '09/07/2024', '01/08/2024', '01/08/2024', 'No'];
const TABLE_C_COLS = ['Balloon Payment', 'Down Payment', 'Dispensed Amount', 'Max Installment Amount', 'Contract Type', 'Product Status', 'Average Installment Amount', ''];
const TABLE_C_ROW  = ['0.00', '0.00', '0.00', '0.00', '', 'Active', '0.00', ''];

const ICON_CHECK   = 'http://localhost:3845/assets/2edf0c96b3c6c32e8ff8d95fffec21d874937655.svg';
const ICON_REFRESH = 'http://localhost:3845/assets/f5977d9797035e96336d26678f886df41173c976.svg';

function ProductSubTable({ cols, row }: { cols: string[]; row: string[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-max">
        <thead>
          <tr style={{ height: 56 }}>
            {cols.map((c, i) => (
              <th key={i} className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] whitespace-pre-wrap align-bottom pb-2">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border border-[#e9eaeb] shadow-[inset_0px_-1px_0px_0px_#f2f4f7]" style={{ height: 96 }}>
            {row.map((cell, ci) => (
              <td key={ci} className="px-6 py-3 text-[13px] font-semibold text-[#697586] whitespace-pre-wrap align-top pt-4">{cell}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function PaymentStrip({ onTime }: { onTime: number }) {
  const total = 24;
  return (
    <div className="px-6 pb-6">
      <p className="text-[24px] font-bold text-[#0063f5] mb-3">Payment Status For Last 24 Months</p>
      <div className="flex flex-wrap gap-1">
        {Array.from({ length: total }, (_, i) => {
          const isOnTime = i < onTime;
          return (
            <div key={i} className="flex flex-col items-center gap-0.5">
              {i === 0 && <span className="text-[10px] text-[#697586]">Recent</span>}
              <div
                className="w-8 h-8 rounded-[24px] flex items-center justify-center"
                style={{ backgroundColor: isOnTime ? '#ecfdf3' : '#f8fafc' }}
              >
                <img
                  src={isOnTime ? ICON_CHECK : ICON_REFRESH}
                  alt={isOnTime ? 'on time' : 'no update'}
                  className="w-4 h-4"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProductDetailsContent() {
  return (
    <SimahContentBox>
      {PRODUCT_DETAILS_ITEMS.map((item, idx) => (
        <div key={item.company} className={idx < PRODUCT_DETAILS_ITEMS.length - 1 ? 'border-b border-[#e3e8ef]' : ''}>
          {/* Product header */}
          <div className="flex items-center gap-6 px-6 pt-5 pb-3">
            <span className="text-[32px] font-black text-[#0063f5] leading-tight">{item.company}</span>
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[14px] text-[#697586]">Product :</span>
              <span className="text-[14px] font-semibold text-[#121a26]">{item.product}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[14px] text-[#697586]">Product Status :</span>
              <span className="w-3 h-3 rounded-full bg-[#079455] shrink-0" />
              <span className="text-[14px] font-semibold text-[#00317a]">{item.status}</span>
            </div>
          </div>
          {/* Three sub-tables */}
          <ProductSubTable cols={TABLE_A_COLS} row={TABLE_A_ROW} />
          <ProductSubTable cols={TABLE_B_COLS} row={TABLE_B_ROW} />
          <ProductSubTable cols={TABLE_C_COLS} row={TABLE_C_ROW} />
          {/* Payment strip */}
          <div className="pt-4">
            <PaymentStrip onTime={item.onTime} />
          </div>
        </div>
      ))}
    </SimahContentBox>
  );
}

function DefaultedProductsContent() {
  const activeCols = ['Product Type', 'Creditor', 'Account Number', 'Reported Date', 'Default Amount', 'Default Outstanding', 'Default Status'];
  const activeRows = [['Mobile Phone', 'Saudi Telecom', '5076181839', '2024/09/03', '558.13', '558.13', 'Unpaid']];
  const settledCols = ['Product Type', 'Creditor', 'Account Number', 'Reported Date', 'Default Amount', 'Default Outstanding', 'Default Status', 'Settlement Date'];
  const settledRows = [['Mobile Phone', 'Saudi Telecom', '5076181839', '2024/09/03', '558.13', '558.13', 'Unpaid', '2024/09/03']];
  return (
    <SimahContentBox>
      <div className="px-6 pt-4 pb-2"><span className="text-[24px] font-bold text-[#0063f5]">Active Defaulted Products</span></div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead><tr style={{ height: 36 }}>{activeCols.map(c => <th key={c} className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] whitespace-nowrap">{c}</th>)}</tr></thead>
          <tbody>{activeRows.map((row, i) => (<tr key={i} className="border border-[#e9eaeb] shadow-[inset_0px_-1px_0px_0px_#f2f4f7]" style={{ height: 96 }}>{row.map((cell, ci) => <td key={ci} className="px-6 py-3 text-[13px] font-semibold text-[#697586] whitespace-nowrap">{cell}</td>)}</tr>))}</tbody>
        </table>
      </div>
      <div className="px-6 pt-4 pb-2"><span className="text-[24px] font-bold text-[#0063f5]">Settled Defaulted Products</span></div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead><tr style={{ height: 36 }}>{settledCols.map(c => <th key={c} className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] whitespace-nowrap">{c}</th>)}</tr></thead>
          <tbody>{settledRows.map((row, i) => (<tr key={i} className="border border-[#e9eaeb] shadow-[inset_0px_-1px_0px_0px_#f2f4f7]" style={{ height: 96 }}>{row.map((cell, ci) => <td key={ci} className="px-6 py-3 text-[13px] font-semibold text-[#697586] whitespace-nowrap">{cell}</td>)}</tr>))}</tbody>
        </table>
      </div>
      <div className="h-2" />
    </SimahContentBox>
  );
}

function GuaranteedDefaultedContent() {
  const activeCols = ['Product Type', 'Creditor', 'Account Number', 'Reported Date', 'Default Amount', 'Default Outstanding', 'Default Status'];
  const activeRows = [['Mobile Phone', 'Saudi Telecom', '5076181839', '2024/09/03', '558.13', '558.13', 'Unpaid']];
  const settledCols = ['Product Type', 'Creditor', 'Account Number', 'Reported Date', 'Default Amount', 'Default Outstanding', 'Default Status', 'Settlement Date'];
  const settledRows = [['Mobile Phone', 'Saudi Telecom', '5076181839', '2024/09/03', '558.13', '558.13', 'Unpaid', '2024/09/03']];
  return (
    <SimahContentBox>
      <div className="px-6 pt-4 pb-2"><span className="text-[24px] font-bold text-[#0063f5]">Active Guaranteed Defaulted Products</span></div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead><tr style={{ height: 36 }}>{activeCols.map(c => <th key={c} className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] whitespace-nowrap">{c}</th>)}</tr></thead>
          <tbody>{activeRows.map((row, i) => (<tr key={i} className="border border-[#e9eaeb] shadow-[inset_0px_-1px_0px_0px_#f2f4f7]" style={{ height: 96 }}>{row.map((cell, ci) => <td key={ci} className="px-6 py-3 text-[13px] font-semibold text-[#697586] whitespace-nowrap">{cell}</td>)}</tr>))}</tbody>
        </table>
      </div>
      <div className="px-6 pt-4 pb-2"><span className="text-[24px] font-bold text-[#0063f5]">Settled Guaranteed Defaulted Products</span></div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead><tr style={{ height: 36 }}>{settledCols.map(c => <th key={c} className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] whitespace-nowrap">{c}</th>)}</tr></thead>
          <tbody>{settledRows.map((row, i) => (<tr key={i} className="border border-[#e9eaeb] shadow-[inset_0px_-1px_0px_0px_#f2f4f7]" style={{ height: 96 }}>{row.map((cell, ci) => <td key={ci} className="px-6 py-3 text-[13px] font-semibold text-[#697586] whitespace-nowrap">{cell}</td>)}</tr>))}</tbody>
        </table>
      </div>
      <div className="h-2" />
    </SimahContentBox>
  );
}

function NarrativesContent() {
  const memberRows = [
    { date: '2025/07/29', type: 'EMIRATES BANK', reportedBy: 'Personal Loan', text: '074A5E43-979D-4FC7-8BDE-FA817A7C2120' },
  ];
  const personalRows = [
    { date: '2025/07/29', type: 'EMIRATES BANK', text: '074A5E43-979D-4FC7-8BDE-FA817A7C2120' },
  ];
  return (
    <SimahContentBox>
      {/* Member Narratives */}
      <div className="px-6 pt-4 pb-2">
        <span className="text-[24px] font-bold text-[#0063f5]">Member Narratives</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr style={{ height: 36 }}>
              <th className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] whitespace-nowrap" style={{ width: 110 }}>Reported Date</th>
              <th className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] whitespace-nowrap" style={{ width: 200 }}>Narrative Type</th>
              <th className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] whitespace-nowrap" style={{ width: 200 }}>Reported by</th>
              <th className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] whitespace-nowrap">Narrative Text</th>
            </tr>
          </thead>
          <tbody>
            {memberRows.map((row, i) => (
              <tr key={i} className="border border-[#e9eaeb] dark:border-slate-700 shadow-[inset_0px_-1px_0px_0px_#f2f4f7]" style={{ height: 68 }}>
                <td className="px-6 py-3 text-[13px] font-semibold text-[#697586] whitespace-nowrap" dir="ltr">{row.date}</td>
                <td className="px-6 py-3 text-[13px] font-semibold text-[#697586] whitespace-nowrap">{row.type}</td>
                <td className="px-6 py-3 text-[13px] font-semibold text-[#697586] whitespace-nowrap">{row.reportedBy}</td>
                <td className="px-6 py-3 text-[13px] font-semibold text-[#697586] whitespace-nowrap" dir="ltr">{row.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Personal Narratives */}
      <div className="px-6 pt-4 pb-2">
        <span className="text-[24px] font-bold text-[#0063f5]">Personal Narratives</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr style={{ height: 36 }}>
              <th className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] whitespace-nowrap" style={{ width: 110 }}>Reported Date</th>
              <th className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] whitespace-nowrap" style={{ width: 200 }}>Narrative Type</th>
              <th className="text-left px-6 py-2 text-[14px] font-medium text-[#697586] whitespace-nowrap">Narrative Text</th>
            </tr>
          </thead>
          <tbody>
            {personalRows.map((row, i) => (
              <tr key={i} className="border border-[#e9eaeb] dark:border-slate-700 shadow-[inset_0px_-1px_0px_0px_#f2f4f7]" style={{ height: 68 }}>
                <td className="px-6 py-3 text-[13px] font-semibold text-[#697586] whitespace-nowrap" dir="ltr">{row.date}</td>
                <td className="px-6 py-3 text-[13px] font-semibold text-[#697586] whitespace-nowrap">{row.type}</td>
                <td className="px-6 py-3 text-[13px] font-semibold text-[#697586] whitespace-nowrap" dir="ltr">{row.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h-2" />
    </SimahContentBox>
  );
}

const SIMAH_SECTION_CONFIG: { title: string; count: number; renderContent: () => React.ReactNode }[] = [
  {
    title: 'Personal Information',
    count: 6,
    renderContent: () => <PersonalInfoContent />,
  },
  {
    title: 'Credit Report Summary',
    count: 8,
    renderContent: () => <CreditSummaryContent />,
  },
  {
    title: 'Credit Score',
    count: 1,
    renderContent: () => <CreditScoreContent />,
  },
  {
    title: 'Active Products Summary',
    count: 1,
    renderContent: () => (
      <ActiveProductsTable
        columns={['Product Type', 'Creditor', 'Account No.', 'Installment', 'Credit Limit', 'Outstanding', 'As Of Date', 'Status']}
        rows={[['Mobile Phone', 'TIHAAD ETISALAAT COMPANY', '99201004263', '0.00', '230.00', '45.41', '01/08/2024', 'Current']]}
      />
    ),
  },
  {
    title: 'Active Guaranteed Products',
    count: 1,
    renderContent: () => (
      <ActiveProductsTable
        columns={['Product Type', 'Creditor', 'Account No.', 'Issue Date', 'Credit Limit', 'Outstanding', 'Status', 'Expiry Date']}
        rows={[['Mobile Phone', 'TIHAAD ETISALAAT COMPANY', '99201004263', '01/08/2024', '230.00', '45.41', 'Current', '01/08/2026']]}
      />
    ),
  },
  { title: 'Defaulted Products Summary',              count: 2, renderContent: () => <DefaultedProductsContent /> },
  { title: 'Guaranteed Defaulted Products Summary',   count: 2, renderContent: () => <GuaranteedDefaultedContent /> },
  {
    title: 'Bounced Cheques',
    count: 1,
    renderContent: () => (
      <ActiveProductsTable
        columns={['Reported Bank', 'Cheque Number', 'Reported Date', 'Cheque Amount', 'Outstanding Balance', 'Cheque Status', 'Settlement Date']}
        rows={[['BANK', '5076181839', '2024/09/03', '558.13', '558.13', 'Status', '2024/09/03']]}
      />
    ),
  },
  { title: 'Product Details',                         count: 3, renderContent: () => <ProductDetailsContent /> },
  { title: 'Previous Enquiries',                      count: 11, renderContent: () => <PreviousEnquiriesContent /> },
  {
    title: 'Enforcement Courts Decisions',
    count: 1,
    renderContent: () => (
      <ActiveProductsTable
        columns={['Resolution Date', 'Resolution Number', 'City', 'Reported Date', 'Claimed Amount', 'Outstanding Balance', 'Status', 'Settlement Date']}
        rows={[['01/08/2024', '5076181839', 'Riyadh', '01/08/2024', '230.00', '45.41', 'Current', '01/08/2024']]}
      />
    ),
  },
  { title: 'Narratives',                              count: 14, renderContent: () => <NarrativesContent /> },
  { title: 'Disclaimer & Disclosure',                 count: 1,  renderContent: () => <DisclaimerContent /> },
  { title: 'Payment Code Prescription Guide',         count: 16, renderContent: () => <PaymentCodeGuideContent /> },
];

const SIMAH_DATES = ['Jun 27, 2026', 'Jan 20, 2026', 'Dec 25, 2025'];

function SimahTab() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [selectedDate, setSelectedDate] = useState(SIMAH_DATES[0]);

  function toggle(title: string) {
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(title) ? next.delete(title) : next.add(title);
      return next;
    });
  }

  return (
    <TabCard>
      {/* Header: title + download buttons */}
      <div className="flex items-center justify-between px-[18px] pt-[24px] pb-[12px]">
        <span className="text-[18px] font-bold text-[#0063f5]">SIMAH Report</span>
        <div className="flex items-center gap-4">
          <a
            href="/Tamawal-Report-EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-[14px] py-[10px] border border-[#cdd4df] rounded-[8px] text-[14px] font-medium text-[#364152] hover:bg-[#f9fafb] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Download English Report
            <Download className="w-[18px] h-[18px] shrink-0 ml-1" />
          </a>
          <a
            href="/Tamawal-Report-AR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-[14px] py-[10px] border border-[#cdd4df] rounded-[8px] text-[14px] font-medium text-[#364152] hover:bg-[#f9fafb] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Download Arabic Report
            <Download className="w-[18px] h-[18px] shrink-0 ml-1" />
          </a>
        </div>
      </div>

      {/* Date filter pills */}
      <div className="flex items-center gap-[10px] px-6 pb-4 pt-2">
        {SIMAH_DATES.map(date => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={cn(
              'h-[40px] px-4 py-2 rounded-[6px] text-[14px] font-medium transition-all',
              selectedDate === date
                ? 'bg-white text-[#252b37] shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#77a6ed] dark:bg-slate-800 dark:text-slate-100'
                : 'text-[#414651] hover:bg-[#f9fafb] dark:text-slate-400 dark:hover:bg-slate-800'
            )}
          >
            {date}
          </button>
        ))}
      </div>

      {/* Separator */}
      <div className="h-px bg-[#e2e3e4] dark:bg-slate-700 mx-6 mb-4" />

      {/* Accordion sections */}
      <div className="flex flex-col gap-2 px-6 pb-6">
        {SIMAH_SECTION_CONFIG.map(({ title, count, renderContent }) => {
          const isOpen = expanded.has(title);
          const hasData = count > 0;
          return (
            <div key={title} className="flex flex-col gap-2">
              {/* Accordion header */}
              <div
                className={cn(
                  'rounded-[6px] border transition-colors',
                  isOpen
                    ? 'bg-[#f5f9ff] border-[#0063f5] dark:bg-blue-950/30 dark:border-blue-600'
                    : 'bg-white border-[#e2e3e4] dark:bg-slate-900 dark:border-slate-700'
                )}
              >
                <button
                  onClick={() => toggle(title)}
                  className="w-full flex items-center justify-between px-4 py-3 gap-2"
                >
                  <div className="flex items-center gap-2">
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-[#697586] dark:text-slate-400 transition-transform duration-200 shrink-0',
                        isOpen ? 'rotate-180' : ''
                      )}
                    />
                    <span className="text-[18px] font-semibold text-[#121a26] dark:text-slate-100 text-left">
                      {title}
                    </span>
                  </div>
                  <span className={cn(
                    'text-[12px] font-medium rounded-2xl px-2 py-0.5 shrink-0',
                    isOpen && hasData
                      ? 'bg-[#eaf2ff] border border-[#aacbfc] text-[#0053cc]'
                      : 'bg-[#fafafa] border border-[#e9eaeb] text-[#414651] dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300'
                  )}>
                    {count > 0 ? `${count} Data` : '0 Data'}
                  </span>
                </button>
              </div>

              {/* Expanded content */}
              {isOpen && (
                <div>
                  {hasData
                    ? renderContent()
                    : (
                      <div className="px-4 py-3 text-[13px] text-[#697586] dark:text-slate-400 bg-white border border-[#e3e8ef] rounded-[6px] dark:bg-slate-900 dark:border-slate-700">
                        No data available for this section.
                      </div>
                    )
                  }
                </div>
              )}
            </div>
          );
        })}
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
        <div className="px-6 pt-6 pb-6 flex flex-col gap-3">
          {/* Profile data — 3 columns */}
          <div className="flex gap-3 h-[132px]">
            {/* Col 1: avatar + name + status + action buttons */}
            <div className="flex-1 rounded-[6px] border border-[#eef1f6] flex items-center gap-6 px-4 dark:border-slate-800">
              <div className="w-[100px] h-[100px] rounded-full bg-[#eef1f6] flex items-center justify-center shrink-0 overflow-hidden dark:bg-slate-800">
                <User className="w-10 h-10 text-[#9aa4b2] dark:text-slate-500" />
              </div>
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <p className="text-[16px] font-semibold text-[#121a26] dark:text-slate-100 leading-[28px]">{order.customerName}</p>
                <span className="inline-flex w-fit px-3 py-1 rounded-2xl bg-[#ecfdf3] border border-[#abefc6] text-[#067647] text-[13px] font-medium">Active</span>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <button className="flex items-center justify-center gap-2 px-3 py-2 rounded-[6px] border border-[#fda29b] text-[#b42318] text-[13px] font-medium hover:bg-[#fff1f3] transition-colors w-[122px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                  <User className="w-3.5 h-3.5 shrink-0" /> Deactivate
                </button>
                <button className="flex items-center justify-center gap-2 px-3 py-2 rounded-[6px] border border-[#fda29b] text-[#b42318] text-[13px] font-medium hover:bg-[#fff1f3] transition-colors w-[122px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                  <ShieldX className="w-3.5 h-3.5 shrink-0" /> Suspend
                </button>
              </div>
            </div>

            {/* Col 2: key-value rows */}
            <div className="w-[248px] shrink-0 rounded-[6px] border border-[#eef1f6] overflow-hidden flex flex-col justify-center dark:border-slate-800">
              {[
                { label: 'National/Iqama ID', value: order.customerId },
                { label: 'Mobile number',     value: order.customerPhone },
                { label: 'Nationality',        value: 'Saudi Arabia' },
              ].map((row, i, arr) => (
                <div key={row.label} className={`flex items-center justify-between h-[44px] px-4 ${i < arr.length - 1 ? 'border-b border-[#f2f4f7] dark:border-slate-800' : ''}`}>
                  <span className="text-[13px] text-[#697586] dark:text-slate-400">{row.label}</span>
                  <span className="text-[13px] font-medium text-[#121a26] dark:text-slate-100 text-right">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Col 3: AML score + status */}
            <div className="w-[188px] shrink-0 rounded-[6px] border border-[#eef1f6] flex items-center justify-center gap-5 px-4 dark:border-slate-800">
              <div className="flex flex-col items-center gap-1">
                <span className="text-[12px] text-[#697586] font-medium dark:text-slate-400 whitespace-nowrap">AML Score</span>
                <span className="text-[36px] font-bold text-[#181d27] leading-none dark:text-slate-100">86%</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[12px] text-[#697586] font-medium dark:text-slate-400 whitespace-nowrap">AML Status</span>
                <span className="px-4 py-1.5 rounded-full bg-[#ecfdf3] border border-[#abefc6] text-[#067647] text-[13px] font-medium whitespace-nowrap">Passed</span>
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
