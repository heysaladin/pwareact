'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

// ─── Types ───────────────────────────────────────────────────────────────────

type PauseKey = 'waitingCustomer' | 'waitingDocuments' | 'waitingConfirmation' | 'waiting3rdParty' | 'onHold';

const PAUSE_LABELS: Record<PauseKey, string> = {
  waitingCustomer: 'Waiting Customer',
  waitingDocuments: 'Waiting Documents',
  waitingConfirmation: 'Waiting Confirmation',
  waiting3rdParty: 'Waiting 3rd Party',
  onHold: 'On Hold',
};

type SlaRule = {
  id: number;
  workflowStep: string;
  description: string;
  team: string;
  durationHrs: number;
  pause: Record<PauseKey, boolean>;
  warnPct: number;
  warnEscalateTo: string;
  warnReassign: boolean;
  breachPct: number;
  breachEscalateTo: string;
  breachReassign: boolean;
};

type Product = {
  id: number;
  name: string;
  category: string;
  provider: string;
  e2eDays: number;
  productSteps: number;
  rules: SlaRule[];
};

// ─── Data ────────────────────────────────────────────────────────────────────

const defaultRules: SlaRule[] = [
  {
    id: 1, workflowStep: 'Customer Service Confirmation', description: 'Verify customer details and contact info',
    team: 'Customer Care', durationHrs: 2,
    pause: { waitingCustomer: true, waitingDocuments: true, waitingConfirmation: false, waiting3rdParty: false, onHold: true },
    warnPct: 50, warnEscalateTo: 'Assigned User', warnReassign: false,
    breachPct: 100, breachEscalateTo: 'Manager', breachReassign: true,
  },
  {
    id: 2, workflowStep: 'AML Review', description: 'Anti-money laundering screening',
    team: 'AML Team', durationHrs: 4,
    pause: { waitingCustomer: true, waitingDocuments: true, waitingConfirmation: false, waiting3rdParty: false, onHold: true },
    warnPct: 50, warnEscalateTo: 'Assigned User', warnReassign: false,
    breachPct: 100, breachEscalateTo: 'AML Manager', breachReassign: true,
  },
  {
    id: 3, workflowStep: 'Brokerage Review', description: 'Review and validate broker information',
    team: 'Brokerage Team', durationHrs: 4,
    pause: { waitingCustomer: true, waitingDocuments: true, waitingConfirmation: true, waiting3rdParty: false, onHold: true },
    warnPct: 50, warnEscalateTo: 'Assigned User', warnReassign: false,
    breachPct: 100, breachEscalateTo: 'Brokerage Manager', breachReassign: true,
  },
  {
    id: 4, workflowStep: 'Provider Review', description: 'Provider final review and decision',
    team: 'Provider Team', durationHrs: 4,
    pause: { waitingCustomer: true, waitingDocuments: true, waitingConfirmation: false, waiting3rdParty: true, onHold: false },
    warnPct: 50, warnEscalateTo: 'Assigned User', warnReassign: false,
    breachPct: 100, breachEscalateTo: 'Provider Manager', breachReassign: true,
  },
  {
    id: 5, workflowStep: 'Final Approval', description: 'Credit approval and offer generation',
    team: 'Credit Team', durationHrs: 2,
    pause: { waitingCustomer: false, waitingDocuments: false, waitingConfirmation: false, waiting3rdParty: false, onHold: true },
    warnPct: 50, warnEscalateTo: 'Assigned User', warnReassign: false,
    breachPct: 100, breachEscalateTo: 'Credit Manager', breachReassign: false,
  },
  {
    id: 6, workflowStep: 'Disbursement', description: 'Disburse the loan to customer',
    team: 'Operations Team', durationHrs: 3,
    pause: { waitingCustomer: false, waitingDocuments: false, waitingConfirmation: false, waiting3rdParty: false, onHold: false },
    warnPct: 50, warnEscalateTo: 'Assigned User', warnReassign: false,
    breachPct: 100, breachEscalateTo: 'Operations Manager', breachReassign: false,
  },
];

const initialProducts: Product[] = [
  { id: 1, name: 'Home Renovation Loan', category: 'Mortgage Loan', provider: 'Al Rajhi Bank', e2eDays: 3, productSteps: 7, rules: defaultRules },
  { id: 2, name: 'Buy Home Loan', category: 'Mortgage Loan', provider: 'Al Rajhi Bank', e2eDays: 3, productSteps: 7, rules: defaultRules },
  { id: 3, name: 'Build Home Loan', category: 'Mortgage Loan', provider: 'Al Rajhi Bank', e2eDays: 3, productSteps: 7, rules: defaultRules },
];

// ─── Icons ───────────────────────────────────────────────────────────────────

function TamawalLogo() {
  return (
    <div className="w-8 h-8 bg-[#0063F5] rounded-lg flex items-center justify-center shrink-0">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function BellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#697586" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#414651" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B42318" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6M14 11v6M9 6V4h6v2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9aa4b2" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#026AA2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-px">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#697586" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

// ─── Mini Components ──────────────────────────────────────────────────────────

function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <span
      onClick={onChange}
      className={cn(
        'h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors cursor-pointer overflow-hidden',
        checked ? 'bg-[#0063F5] border-[#0063F5]' : 'border-[#D5D7DA]'
      )}
    >
      {checked && (
        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
  );
}

function WarnBadge({ pct }: { pct: number }) {
  return (
    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-[#FEDF89] bg-[#FFFAEB] text-[#B54708] text-[14px] font-medium whitespace-nowrap">
      {pct}%
    </span>
  );
}

function BreachBadge({ pct }: { pct: number }) {
  return (
    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-[#FECDCA] bg-[#FEF3F2] text-[#B42318] text-[14px] font-medium whitespace-nowrap">
      {pct}%
    </span>
  );
}

function DurationBadge({ hrs }: { hrs: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#E9EAEB] bg-[#FAFAFA] text-[#414651] text-[14px] font-medium whitespace-nowrap">
      <ClockIcon />
      {hrs} hrs
    </span>
  );
}

function AvatarPlaceholder() {
  return (
    <div className="w-6 h-6 rounded-full bg-[#F5F5F5] flex items-center justify-center shrink-0 border border-black/5">
      <UserIcon />
    </div>
  );
}

function ProductAvatar() {
  return (
    <div className="w-12 h-12 rounded-xl bg-[#F2F4F7] flex items-center justify-center shrink-0">
      <HouseIcon />
    </div>
  );
}

function StatBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-[#E9EAEB] bg-[#FAFAFA] text-[#414651] text-[12px] font-medium whitespace-nowrap">
      {children}
    </span>
  );
}

// ─── Table Header ─────────────────────────────────────────────────────────────

function SlaTableHeader() {
  const cols = [
    { label: '#', width: 'w-8' },
    { label: 'WORKFLOW STEP', width: 'w-[150px]' },
    { label: 'TEAM / OWNER', width: 'w-[150px]' },
    { label: 'SLA DURATION', width: 'w-[110px]' },
    { label: 'PAUSE CONDITIONS', width: 'w-[200px]' },
    { label: 'WARNING → ESCALATE', width: 'w-[120px]' },
    { label: 'WARN REASSIGN', width: 'w-[110px]' },
    { label: 'BREACH → ESCALATE', width: 'w-[120px]' },
    { label: 'BREACH REASSIGN', width: 'w-[110px]' },
    { label: 'ACTIONS', width: 'w-[90px]' },
  ];
  return (
    <div className="flex items-center gap-6 px-6 py-0 h-16 border-b border-[#F2F4F7]">
      {cols.map((c) => (
        <div key={c.label} className={cn('shrink-0', c.width)}>
          <p className="text-[14px] font-medium text-[#697586] whitespace-nowrap">{c.label}</p>
        </div>
      ))}
    </div>
  );
}

// ─── SLA Table Row ────────────────────────────────────────────────────────────

function SlaTableRow({
  rule,
  onUpdate,
  onDelete,
}: {
  rule: SlaRule;
  onUpdate: (r: SlaRule) => void;
  onDelete: () => void;
}) {
  function togglePause(key: PauseKey) {
    onUpdate({ ...rule, pause: { ...rule.pause, [key]: !rule.pause[key] } });
  }

  return (
    <div className="flex items-start gap-6 px-6 py-2 border border-[#E9EAEB] rounded-[6px] bg-white mx-3 mb-1.5 relative shadow-[0_-1px_0_0_#F2F4F7_inset]">
      {/* # */}
      <div className="w-8 shrink-0 py-3">
        <p className="text-[14px] font-medium text-[#697586]">{rule.id}</p>
      </div>

      {/* Workflow Step */}
      <div className="w-[150px] shrink-0 py-3 flex flex-col gap-1.5">
        <p className="text-[16px] font-medium text-[#121a26] leading-snug">{rule.workflowStep}</p>
        <p className="text-[12px] text-[#697586] leading-snug">{rule.description}</p>
      </div>

      {/* Team / Owner */}
      <div className="w-[150px] shrink-0 py-3">
        <div className="flex items-center gap-1.5">
          <AvatarPlaceholder />
          <p className="text-[14px] font-medium text-[#535862]">{rule.team}</p>
        </div>
      </div>

      {/* SLA Duration */}
      <div className="w-[110px] shrink-0 py-3">
        <DurationBadge hrs={rule.durationHrs} />
      </div>

      {/* Pause Conditions */}
      <div className="w-[200px] shrink-0 py-3 flex flex-col gap-2">
        {(Object.keys(PAUSE_LABELS) as PauseKey[]).map((key) => (
          <label key={key} className="flex items-center gap-2 cursor-pointer">
            <Checkbox checked={rule.pause[key]} onChange={() => togglePause(key)} />
            <span className="text-[16px] font-medium text-[#414651] leading-none select-none">{PAUSE_LABELS[key]}</span>
          </label>
        ))}
      </div>

      {/* Warning → Escalate */}
      <div className="w-[120px] shrink-0 py-3 flex flex-col gap-4">
        <WarnBadge pct={rule.warnPct} />
        <div className="flex flex-col gap-0.5">
          <p className="text-[12px] text-[#9aa4b2] leading-tight">Escalate to:</p>
          <p className="text-[12px] font-medium text-[#202a39] leading-tight">{rule.warnEscalateTo}</p>
        </div>
      </div>

      {/* Warn Reassign */}
      <div className="w-[110px] shrink-0 py-3">
        <p className="text-[18px] font-semibold text-[#697586]">{rule.warnReassign ? 'Yes' : 'No'}</p>
      </div>

      {/* Breach → Escalate */}
      <div className="w-[120px] shrink-0 py-3 flex flex-col gap-4">
        <BreachBadge pct={rule.breachPct} />
        <div className="flex flex-col gap-0.5">
          <p className="text-[12px] text-[#9aa4b2] leading-tight">Escalate to:</p>
          <p className="text-[12px] font-medium text-[#202a39] leading-tight">{rule.breachEscalateTo}</p>
        </div>
      </div>

      {/* Breach Reassign */}
      <div className="w-[110px] shrink-0 py-3">
        <p className="text-[18px] font-semibold text-[#697586]">{rule.breachReassign ? 'Yes' : 'No'}</p>
      </div>

      {/* Actions */}
      <div className="w-[90px] shrink-0 py-3 flex flex-col gap-2">
        <button className="w-11 h-11 flex items-center justify-center rounded-lg border border-[#E9EAEB] bg-white text-[#697586] hover:bg-[#F9FAFB] transition-colors shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <EditIcon />
        </button>
        <button
          onClick={onDelete}
          className="w-11 h-11 flex items-center justify-center rounded-lg border border-[#FECDCA] bg-white hover:bg-[#FEF3F2] transition-colors shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}

// ─── Product Item ─────────────────────────────────────────────────────────────

function ProductItem({
  product,
  expanded,
  onToggle,
  onUpdateRule,
  onDeleteRule,
}: {
  product: Product;
  expanded: boolean;
  onToggle: () => void;
  onUpdateRule: (r: SlaRule) => void;
  onDeleteRule: (id: number) => void;
}) {
  return (
    <div className={cn('border border-[#E3E8EF] rounded-lg bg-white overflow-hidden', expanded && 'shadow-sm')}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-3 hover:bg-[#FAFAFA] transition-colors text-left gap-4"
      >
        <div className="flex items-center gap-6">
          <ProductAvatar />
          <div className="flex flex-col gap-1">
            <p className="text-[18px] font-semibold text-[#121a26] leading-tight">{product.name}</p>
            <p className="text-[12px] text-[#697586]">{product.category} • {product.provider}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <StatBadge>{product.e2eDays} Working Days (E2E)</StatBadge>
          <StatBadge>{product.productSteps} Product Steps</StatBadge>
          <StatBadge>{product.rules.length} SLA Rules</StatBadge>
          <ChevronDownIcon className={cn('text-[#697586] transition-transform', expanded && 'rotate-180')} />
        </div>
      </button>

      {expanded && (
        <>
          <div className="px-6 py-3 border-t border-[#F2F4F7] bg-[#FAFAFA] flex items-center justify-between">
            <div>
              <p className="text-[11px] text-[#697586] uppercase tracking-wider">End-to-end SLA</p>
              <p className="text-[18px] font-semibold text-[#121a26]">{product.e2eDays} Working Days</p>
            </div>
            <button className="h-9 px-4 flex items-center gap-1.5 text-[14px] font-medium text-white bg-[#0063F5] rounded-lg hover:bg-[#0052cc] transition-colors shadow-[0_1px_2px_rgba(0,99,245,0.2)]">
              <PlusIcon />
              Add SLA Rule
            </button>
          </div>

          <div className="pb-3">
            <SlaTableHeader />
            <div className="pt-1.5">
              {product.rules.map((rule) => (
                <SlaTableRow
                  key={rule.id}
                  rule={rule}
                  onUpdate={onUpdateRule}
                  onDelete={() => onDeleteRule(rule.id)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ─── Top Bar ─────────────────────────────────────────────────────────────────

function TopBar() {
  return (
    <div className="h-[60px] bg-white border-b border-[#E9EAEB] flex items-center justify-between px-5 shrink-0">
      <div className="flex items-center gap-3">
        <TamawalLogo />
        <button className="w-6 h-6 flex items-center justify-center text-[#697586] hover:text-[#344054] transition-colors">
          <ChevronRightIcon />
        </button>
      </div>

      <div className="flex items-center gap-5">
        <button className="text-[13px] font-medium text-[#344054] hover:text-[#101828] transition-colors">عربي</button>
        <button className="text-[#697586] hover:text-[#344054] transition-colors">
          <BellIcon />
        </button>
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-[#0063F5] flex items-center justify-center shrink-0">
            <span className="text-[11px] font-bold text-white">AA</span>
          </div>
          <div>
            <p className="text-[12px] font-semibold text-[#101828] leading-tight">Abdullah Ayyad</p>
            <p className="text-[11px] text-[#697586] leading-tight">abusayyad@tamawal.sa</p>
          </div>
          <ChevronDownIcon className="text-[#9aa4b2] w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}

// ─── Pagination ───────────────────────────────────────────────────────────────

function PageBtn({ n, page, onPage }: { n: number; page: number; onPage: (p: number) => void }) {
  return (
    <button
      onClick={() => onPage(n)}
      className={cn(
        'w-7 h-7 flex items-center justify-center rounded-lg text-[12px] font-medium transition-colors',
        page === n ? 'bg-[#0063F5] text-white' : 'border border-[#D5D7DA] bg-white text-[#344054] hover:bg-[#F9FAFB]'
      )}
    >
      {n}
    </button>
  );
}

function Pagination({
  page, perPage, total, onPage, onPerPage,
}: {
  page: number; perPage: number; total: number;
  onPage: (p: number) => void; onPerPage: (n: number) => void;
}) {
  const lastPage = Math.ceil(total / perPage);

  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-[12px] text-[#697586]">Show</span>
        <div className="relative">
          <select
            value={perPage}
            onChange={(e) => onPerPage(Number(e.target.value))}
            className="appearance-none h-7 pl-2 pr-6 text-[12px] font-medium text-[#344054] bg-white border border-[#D5D7DA] rounded-lg focus:outline-none cursor-pointer"
          >
            {[10, 25, 50].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-[#697586] w-[10px] h-[10px]" />
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-[#D5D7DA] bg-white text-[#697586] disabled:opacity-40 hover:bg-[#F9FAFB] transition-colors"
        >
          <ChevronLeftIcon />
        </button>
        <PageBtn n={1} page={page} onPage={onPage} />
        {page > 3 && <span className="text-[12px] text-[#697586] px-1">...</span>}
        {page > 2 && page < lastPage - 1 && <PageBtn n={page} page={page} onPage={onPage} />}
        {page < lastPage - 2 && <span className="text-[12px] text-[#697586] px-1">...</span>}
        {lastPage > 1 && <PageBtn n={lastPage - 1} page={page} onPage={onPage} />}
        {lastPage > 2 && <PageBtn n={lastPage} page={page} onPage={onPage} />}
        <button
          onClick={() => onPage(Math.min(lastPage, page + 1))}
          disabled={page === lastPage}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-[#D5D7DA] bg-white text-[#697586] disabled:opacity-40 hover:bg-[#F9FAFB] transition-colors"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const TABS = ['SLA Rules', 'Business Hours', 'Role Assignment', 'Priority Engine'] as const;
type Tab = typeof TABS[number];

type Factor = { name: string; weight: number };

export default function SlaPage() {
  const [activeTab, setActiveTab] = useState<Tab>('SLA Rules');
  const [provider, setProvider] = useState('Al Rajhi Bank');
  const [loanType, setLoanType] = useState('Mortgage Loan');
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [expandedId, setExpandedId] = useState<number | null>(3);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [factors, setFactors] = useState<Factor[]>([
    { name: 'SLA Risk', weight: 50 },
    { name: 'Order Age', weight: 30 },
    { name: 'Loan Amount', weight: 20 },
  ]);
  const [savedFactors, setSavedFactors] = useState<Factor[]>([
    { name: 'SLA Risk', weight: 50 },
    { name: 'Order Age', weight: 30 },
    { name: 'Loan Amount', weight: 20 },
  ]);
  const [previewValues, setPreviewValues] = useState([45, 18, 14]);
  const [showExplainer, setShowExplainer] = useState(false);

  const totalWeight = factors.reduce((s, f) => s + f.weight, 0);
  const clampedPreviews = previewValues.map((v, i) => Math.min(v, factors[i].weight));
  const computedScore = Math.min(100, clampedPreviews.reduce((s, v) => s + v, 0));
  const isDirty = factors.some((f, i) => f.weight !== savedFactors[i].weight);

  function updateWeight(index: number, value: number) {
    setFactors((prev) => prev.map((f, i) => (i === index ? { ...f, weight: value } : f)));
  }

  function handleSave() {
    setSavedFactors(factors);
  }

  function handleCancel() {
    setFactors(savedFactors);
  }

  function updatePreview(index: number, value: number) {
    setPreviewValues((prev) => prev.map((v, i) => (i === index ? value : v)));
  }

  function getPriorityLevel(score: number): { label: string; bg: string; text: string } {
    if (score >= 85) return { label: 'Critical Priority', bg: '#fee4e2', text: '#912018' };
    if (score >= 65) return { label: 'High Priority', bg: '#fff0e8', text: '#b54708' };
    if (score >= 40) return { label: 'Medium Priority', bg: '#fff4d6', text: '#8a4b00' };
    return { label: 'Low Priority', bg: '#eaf8f0', text: '#16834a' };
  }

  const level = getPriorityLevel(computedScore);

  const TOTAL_RECORDS = 50;

  function toggleProduct(id: number) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  function updateRule(productId: number, rule: SlaRule) {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, rules: p.rules.map((r) => (r.id === rule.id ? rule : r)) } : p
      )
    );
  }

  function deleteRule(productId: number, ruleId: number) {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, rules: p.rules.filter((r) => r.id !== ruleId) } : p
      )
    );
  }

  const visibleProducts = products.filter((p) =>
    !search || p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-screen flex flex-col bg-[#F8FAFB] overflow-hidden">
      <TopBar />

      <div className="flex-1 flex flex-col min-h-0">
        {/* Tabs */}
        <div className="bg-white border-b border-[#E9EAEB] px-6 shrink-0">
          <div className="flex items-center">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'px-4 py-3.5 text-[14px] font-medium border-b-2 -mb-px transition-colors whitespace-nowrap',
                  activeTab === tab
                    ? 'text-[#0063F5] border-[#0063F5]'
                    : 'text-[#697586] border-transparent hover:text-[#344054]'
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 py-5">

            {/* SLA Rules header */}
            {activeTab === 'SLA Rules' && (
              <>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-[18px] font-semibold text-[#121a26] leading-tight">SLA Configuration</h1>
                    <p className="text-[14px] text-[#697586] mt-1">
                      Manage end-to-end and step SLA rules per product, using category workflow steps and escalation settings.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className="relative">
                      <select
                        value={provider}
                        onChange={(e) => setProvider(e.target.value)}
                        className="appearance-none h-9 pl-3 pr-7 text-[14px] font-medium text-[#344054] bg-white border border-[#D5D7DA] rounded-lg shadow-[0_1px_2px_rgba(16,24,40,0.05)] focus:outline-none focus:ring-1 focus:ring-[#0063F5] cursor-pointer"
                      >
                        <option>Al Rajhi Bank</option>
                        <option>Riyad Bank</option>
                        <option>NCB</option>
                      </select>
                      <ChevronDownIcon className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#697586] w-3.5 h-3.5" />
                    </div>

                    <div className="relative">
                      <select
                        value={loanType}
                        onChange={(e) => setLoanType(e.target.value)}
                        className="appearance-none h-9 pl-3 pr-7 text-[14px] font-medium text-[#344054] bg-white border border-[#D5D7DA] rounded-lg shadow-[0_1px_2px_rgba(16,24,40,0.05)] focus:outline-none focus:ring-1 focus:ring-[#0063F5] cursor-pointer"
                      >
                        <option>Mortgage Loan</option>
                        <option>Personal Finance</option>
                        <option>Auto Loan</option>
                      </select>
                      <ChevronDownIcon className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#697586] w-3.5 h-3.5" />
                    </div>

                    <div className="relative">
                      <span className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <SearchIcon />
                      </span>
                      <input
                        type="text"
                        placeholder="Search product..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="h-9 pl-8 pr-3 text-[14px] text-[#344054] placeholder:text-[#9aa4b2] bg-white border border-[#D5D7DA] rounded-lg shadow-[0_1px_2px_rgba(16,24,40,0.05)] focus:outline-none focus:ring-1 focus:ring-[#0063F5] w-[180px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-[#EFF8FF] border border-[#B2DDFF] rounded-xl px-4 py-2.5 mb-4">
                  <InfoIcon />
                  <p className="text-[13px] text-[#026AA2] leading-relaxed">
                    SLA timers follow the configured business calendar and pause only for the selected pause conditions inside each Step SLA rule.
                  </p>
                </div>
              </>
            )}

            {/* Priority Engine header */}
            {activeTab === 'Priority Engine' && (
              <div className="flex items-center gap-2 mb-6">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 17V3M5 8l5-5 5 5" stroke="#0063F5" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <h1 className="text-[20px] font-semibold text-[#0063F5] leading-tight">Priority Engine</h1>
                  <p className="text-[13px] text-[#535862] mt-0.5">A priority score is calculated based on weighted business factors.</p>
                </div>
              </div>
            )}

            {/* Products */}
            {activeTab === 'SLA Rules' && (
              <div className="flex flex-col gap-2">
                {visibleProducts.length === 0 ? (
                  <div className="bg-white rounded-xl border border-[#E9EAEB] px-6 py-12 text-center">
                    <p className="text-[14px] text-[#697586]">No products match your search.</p>
                  </div>
                ) : (
                  visibleProducts.map((product) => (
                    <ProductItem
                      key={product.id}
                      product={product}
                      expanded={expandedId === product.id}
                      onToggle={() => toggleProduct(product.id)}
                      onUpdateRule={(r) => updateRule(product.id, r)}
                      onDeleteRule={(id) => deleteRule(product.id, id)}
                    />
                  ))
                )}
              </div>
            )}

            {/* Priority Engine content */}
            {activeTab === 'Priority Engine' && (
              <div className="grid grid-cols-[2fr_1fr_1fr] gap-3">
                {/* Factors panel */}
                <div className="bg-white border border-[#e3e8ef] rounded-lg flex flex-col min-w-0">
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-5 border-b border-[#e3e8ef]">
                    <span className="text-[18px] font-semibold text-[#202a39]">Factors</span>
                    {/* Circular progress */}
                    <div className="relative w-14 h-14">
                      <svg width="56" height="56" viewBox="0 0 56 56">
                        <circle cx="28" cy="28" r="24" fill="none" stroke="#eef1f6" strokeWidth="4" />
                        <circle
                          cx="28" cy="28" r="24" fill="none"
                          stroke={totalWeight > 100 ? '#d92d20' : totalWeight === 100 ? '#16a34a' : '#0063F5'}
                          strokeWidth="4"
                          strokeDasharray={`${2 * Math.PI * 24}`}
                          strokeDashoffset={`${2 * Math.PI * 24 * (1 - Math.min(totalWeight, 100) / 100)}`}
                          strokeLinecap="round"
                          transform="rotate(-90 28 28)"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[12px] font-medium text-[#181d27]">
                        {totalWeight}%
                      </span>
                    </div>
                  </div>

                  {/* Table header */}
                  <div className="grid grid-cols-[120px_1fr_96px] items-center px-6 h-11 border-b border-[#e3e8ef]">
                    <span className="text-[13px] font-medium text-[#697586]">Factor</span>
                    <span />
                    <span className="text-[13px] font-medium text-[#697586] text-right">Weight</span>
                  </div>

                  {/* Factor rows */}
                  {factors.map((factor, i) => (
                    <div key={factor.name} className="grid grid-cols-[120px_1fr_96px] items-center px-6 py-6 gap-4 bg-[#fcfcfd] border-b border-[#f0f2f5] last:border-b-0">
                      <span className="text-[14px] font-medium text-[#121a26]">{factor.name}</span>
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[11px] text-[#667085]">Weight Slider</span>
                        <input
                          type="range"
                          min={0}
                          max={100}
                          value={factor.weight}
                          onChange={(e) => updateWeight(i, Number(e.target.value))}
                          className="w-full h-1 rounded-full appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, #0063f5 ${factor.weight}%, #eef1f6 ${factor.weight}%)`,
                          }}
                        />
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <input
                          type="number"
                          min={0}
                          max={100}
                          value={factor.weight}
                          onChange={(e) => updateWeight(i, Number(e.target.value))}
                          className="w-14 h-9 px-2 text-center text-[15px] font-medium text-[#181d27] bg-white border border-[#d5d7da] rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0063F5]"
                        />
                        <span className="text-[14px] text-[#697586]">%</span>
                      </div>
                    </div>
                  ))}

                  {/* Footer */}
                  {isDirty && (
                    <div className="flex items-center justify-between px-6 py-4 mt-auto border-t border-[#e3e8ef]">
                      <button
                        onClick={handleCancel}
                        className="h-9 px-4 text-[14px] font-medium text-[#414651] bg-white border border-[#d5d7da] rounded-lg hover:bg-[#f9fafb] transition-colors shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSave}
                        disabled={totalWeight !== 100}
                        className="h-9 px-4 text-[14px] font-medium text-white bg-[#0063F5] border-2 border-white/20 rounded-lg hover:bg-[#004fc6] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#0063F5]"
                      >
                        Save factor
                      </button>
                    </div>
                  )}
                </div>

                {/* Live Preview panel */}
                <div className="bg-white border border-[#e3e8ef] rounded-lg flex flex-col min-w-0">
                  <div className="px-6 pt-6 pb-4 border-b border-[#e3e8ef]">
                    <span className="text-[18px] font-semibold text-[#697586]">Live Preview</span>
                  </div>
                  <div className="flex flex-col items-center px-6 pt-6 pb-4 gap-3">
                    <span className="text-[64px] font-black text-[#202a39] leading-none">{computedScore}</span>
                    <span
                      className="text-[14px] font-medium px-5 py-1.5 rounded-full"
                      style={{ background: level.bg, color: level.text }}
                    >
                      {level.label}
                    </span>
                    <p className="text-[11px] text-[#667085] text-center leading-relaxed">
                      Priority is recalculated automatically and then used by the Queue Engine.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 px-6 pb-4">
                    {factors.map((factor, i) => {
                      const subLabels: (string | null)[] = [null, 'Older First', 'Bigger Amount'];
                      const clamped = Math.min(previewValues[i], factor.weight);
                      return (
                        <div key={factor.name} className="flex flex-col gap-1">
                          <span className="text-[11px] text-[#667085]">{factor.name}</span>
                          <div className="flex items-center gap-2">
                            <input
                              type="range"
                              min={0}
                              max={factor.weight}
                              value={clamped}
                              onChange={(e) => updatePreview(i, Number(e.target.value))}
                              className="flex-1 h-1 rounded-full appearance-none cursor-pointer"
                              style={{
                                background: `linear-gradient(to right, #202a39 ${(clamped / factor.weight) * 100}%, #eef1f6 ${(clamped / factor.weight) * 100}%)`,
                              }}
                            />
                            <span className="text-[14px] font-bold text-[#1d2939] w-6 text-right">{clamped}</span>
                            <span className="text-[11px] text-[#667085]">/ {factor.weight}</span>
                          </div>
                          {showExplainer && i === 0 && (
                            <div className="flex items-end justify-between w-full" style={{ paddingRight: 60 }}>
                              {[
                                { label: 'On Track', color: '#0063f5' },
                                { label: 'Warning', color: '#ea8808' },
                                { label: 'Breach', color: '#d91c1c' },
                              ].map(({ label, color }) => (
                                <div key={label} className="flex flex-col items-center gap-0.5 flex-1">
                                  <div className="w-full h-0.5 rounded-full" style={{ background: color }} />
                                  <span className="text-[10px] font-semibold" style={{ color }}>{label}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {showExplainer && subLabels[i] && (
                            <span className="text-[11px] text-[#667085] w-full text-right" style={{ paddingRight: 60 }}>{subLabels[i]}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-between px-6 py-3 mt-auto border-t border-[#e3e8ef]">
                    <span className="text-[13px] font-medium text-[#697586]">Show explainer</span>
                    <button
                      onClick={() => setShowExplainer((v) => !v)}
                      className={cn(
                        'relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors',
                        showExplainer ? 'bg-[#0063F5]' : 'bg-[#D5D7DA]'
                      )}
                    >
                      <span
                        className={cn(
                          'pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform transition-transform',
                          showExplainer ? 'translate-x-4' : 'translate-x-0'
                        )}
                      />
                    </button>
                  </div>
                </div>

                {/* Priority Levels panel */}
                <div className="bg-[#fcfcfd] border border-[#e3e8ef] rounded-lg flex flex-col min-w-0">
                  <div className="px-6 pt-6 pb-3 border-b border-[#e3e8ef]">
                    <span className="text-[18px] font-semibold text-[#697586]">Priority Levels</span>
                  </div>
                  <div className="flex flex-col gap-2 px-6 py-4">
                    {[
                      { label: 'Critical', range: '85–100', bg: '#fee4e2', text: '#912018' },
                      { label: 'High', range: '65–84', bg: '#fff0e8', text: '#b54708' },
                      { label: 'Medium', range: '40–64', bg: '#fff4d6', text: '#8a4b00' },
                      { label: 'Low', range: '0–39', bg: '#eaf8f0', text: '#16834a' },
                    ].map(({ label, range, bg, text }) => (
                      <div
                        key={label}
                        className="flex items-center justify-between px-5 py-4 rounded-lg"
                        style={{ background: bg }}
                      >
                        <span className="text-[15px]" style={{ color: text }}>{label}</span>
                        <span className="text-[15px] font-bold" style={{ color: text }}>{range}</span>
                      </div>
                    ))}
                  </div>
                  <div className="px-6 pb-6 mt-auto">
                    <div className="flex gap-2 bg-white border border-[#e9eaeb] rounded-lg p-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
                        <circle cx="7" cy="7" r="6" stroke="#697586" strokeWidth="1.2"/>
                        <path d="M7 6.5v4M7 4.5h.01" stroke="#697586" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                      <p className="text-[11px] font-medium text-[#414651] leading-relaxed">
                        Each order receives a priority score between 0 and 100. A priority score is calculated based on weighted business factors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs placeholder */}
            {activeTab !== 'SLA Rules' && activeTab !== 'Priority Engine' && (
              <div className="bg-white rounded-xl border border-[#E9EAEB] px-6 py-16 text-center">
                <p className="text-[15px] font-medium text-[#121a26]">{activeTab}</p>
                <p className="text-[13px] text-[#697586] mt-1">This section is under construction.</p>
              </div>
            )}

            {activeTab === 'SLA Rules' && (
              <Pagination
                page={page}
                perPage={perPage}
                total={TOTAL_RECORDS}
                onPage={setPage}
                onPerPage={setPerPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
