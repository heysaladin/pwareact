'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Topbar from '@/components/orders/Topbar';
import { useLang } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import {
  BarChart2, ArrowLeft, Pencil, MessageSquare, ArrowRight,
  Briefcase, Receipt, Gift, Shield, FileSearch, ClipboardMinus,
  Phone, Globe, List, Bell, CreditCard, ClipboardList, CheckCircle2,
  File, Building2, Building, Banknote, UserCircle, Check, X,
  ChevronDown, ChevronUp, ArrowUpCircle,
} from 'lucide-react';
import {
  PROFILES, ACTIVITY_LOG, JOURNEY_STEPS,
  type Profile, type JourneyStep, type CheckpointStatus, type JourneyStepStatus,
} from './cps-data';

// ─── Tab config ──────────────────────────────────────────────────────────────

type SubTabItem = { key: string; labelEn: string; labelAr: string; Icon: React.ElementType };
type MainTab   = { key: string; labelEn: string; labelAr: string; Icon: React.ElementType; sub: SubTabItem[] };

const CUSTOMER_TABS: MainTab[] = [
  { key: 'overview',       labelEn: 'Overview',            labelAr: 'ملخص',                 Icon: BarChart2,      sub: [
    { key: 'summary',       labelEn: 'Summary',            labelAr: 'ملخص',           Icon: BarChart2      },
    { key: 'journey',       labelEn: 'User Journey',       labelAr: 'رحلة المستخدم',  Icon: ArrowUpCircle  },
    { key: 'comments',      labelEn: 'Internal Comments',  labelAr: 'تعليقات داخلية', Icon: MessageSquare  },
  ]},
  { key: 'verification',   labelEn: 'Verification & Risk', labelAr: 'التحقق والمخاطر',       Icon: FileSearch,     sub: [
    { key: 'screening',     labelEn: 'Screening',          labelAr: 'الفحص الانتقائي', Icon: FileSearch     },
    { key: 'risk',          labelEn: 'Risk',               labelAr: 'مخاطرة',          Icon: Shield         },
  ]},
  { key: 'reports',        labelEn: 'Reports',             labelAr: 'التقارير',               Icon: ClipboardMinus, sub: [
    { key: 'kyc',           labelEn: 'KYC',                labelAr: 'KYC',             Icon: UserCircle     },
    { key: 'masdr',         labelEn: 'MASDR',              labelAr: 'MASDR',           Icon: Building2      },
    { key: 'simah',         labelEn: 'SIMAH',              labelAr: 'SIMAH',           Icon: Building       },
  ]},
  { key: 'financing',      labelEn: 'Financing Journey',   labelAr: 'رحلة التمويل',           Icon: Briefcase,      sub: [
    { key: 'preliminary',   labelEn: 'Preliminary',        labelAr: 'تمهيدي',          Icon: List           },
    { key: 'applications',  labelEn: 'Applications',       labelAr: 'التطبيقات',        Icon: CreditCard     },
    { key: 'decisions',     labelEn: 'Decisions',          labelAr: 'القرارات',          Icon: CheckCircle2   },
    { key: 'orders',        labelEn: 'Orders',             labelAr: 'طلبات',            Icon: ClipboardList  },
  ]},
  { key: 'billing',        labelEn: 'Billing & Costs',     labelAr: 'الفواتير والتكاليف',     Icon: Receipt,        sub: [
    { key: 'invoices',      labelEn: 'Invoices',           labelAr: 'الفواتير',         Icon: File           },
    { key: 'billing',       labelEn: 'Billing',            labelAr: 'الفاتورة',          Icon: Receipt        },
  ]},
  { key: 'loyalty',        labelEn: 'Loyalty',             labelAr: 'وفاء',                   Icon: Gift,           sub: [
    { key: 'points',        labelEn: 'Points',             labelAr: 'نقاط',             Icon: Banknote       },
    { key: 'rewards',       labelEn: 'Rewards',            labelAr: 'المكافآت',          Icon: Gift           },
  ]},
  { key: 'security',       labelEn: 'Security & Access',   labelAr: 'الأمن والوصول',          Icon: Shield,         sub: [
    { key: 'devices',       labelEn: 'Devices',            labelAr: 'أجهزة',             Icon: Phone          },
    { key: 'ip',            labelEn: 'IP Addresses',       labelAr: 'عناوين IP',          Icon: Globe          },
    { key: 'logs',          labelEn: 'User Logs',          labelAr: 'سجلات المستخدمين',  Icon: List           },
  ]},
  { key: 'communications', labelEn: 'Communications',      labelAr: 'الاتصالات',              Icon: MessageSquare,  sub: [
    { key: 'notifications', labelEn: 'Notifications',      labelAr: 'إشعارات',          Icon: Bell           },
  ]},
];

// ─── Journey helpers ──────────────────────────────────────────────────────────

function CpStatusDot({ status }: { status: CheckpointStatus }) {
  if (status === 'Passed')
    return <span className="w-5 h-5 rounded-full bg-[#dcfae6] border border-[#17b26a] flex items-center justify-center shrink-0"><Check className="w-3 h-3 text-[#17b26a]" /></span>;
  if (status === 'Paused')
    return <span className="w-5 h-5 rounded-full bg-[#fffaeb] border border-[#fec84b] flex items-center justify-center shrink-0"><span className="w-2 h-2 rounded-full bg-[#f79009]" /></span>;
  if (status === 'Failed')
    return <span className="w-5 h-5 rounded-full bg-[#fef3f2] border border-[#fecdca] flex items-center justify-center shrink-0"><X className="w-3 h-3 text-[#f04438]" /></span>;
  return <span className="w-5 h-5 rounded-full bg-white border border-[#d0d5dd] flex items-center justify-center shrink-0" />;
}

function StepCircle({ status }: { status: JourneyStepStatus }) {
  const base = 'w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0';
  if (status === 'Passed')
    return <span className={cn(base, 'bg-[#dcfae6] border-[#17b26a]')}><Check className="w-4 h-4 text-[#17b26a]" /></span>;
  if (status === 'Paused')
    return <span className={cn(base, 'bg-[#fffaeb] border-[#f79009]')}><span className="w-3 h-3 rounded-full bg-[#f79009]" /></span>;
  if (status === 'Failed')
    return <span className={cn(base, 'bg-[#fef3f2] border-[#f04438]')}><X className="w-4 h-4 text-[#f04438]" /></span>;
  return <span className={cn(base, 'bg-white border-[#d0d5dd]')}><span className="w-3 h-3 rounded-full bg-[#d0d5dd]" /></span>;
}

function Connector({ done }: { done: boolean }) {
  return <div className={cn('h-0.5 flex-1 mx-1', done ? 'bg-[#17b26a]' : 'bg-[#e3e8f1]')} />;
}

function StatusLegend({ isAr }: { isAr: boolean }) {
  const items: { label: string; labelAr: string; color: string }[] = [
    { label: 'Passed',      labelAr: 'ناجح',         color: '#17b26a' },
    { label: 'Paused',      labelAr: 'موقوف مؤقتاً', color: '#f79009' },
    { label: 'Failed',      labelAr: 'فاشل',         color: '#f04438' },
    { label: 'Not started', labelAr: 'لم يبدأ',      color: '#d0d5dd' },
  ];
  return (
    <div className="flex items-center gap-4">
      {items.map(it => (
        <span key={it.label} className="flex items-center gap-1.5 text-xs text-[#697586]">
          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: it.color }} />
          {isAr ? it.labelAr : it.label}
        </span>
      ))}
    </div>
  );
}

function CheckpointTag({ tag }: { tag: 'Mandatory' | 'System' }) {
  if (tag === 'Mandatory')
    return <span className="px-2 py-0.5 rounded-full bg-[#eef3ff] border border-[#c7d7fd] text-[#3538cd] text-[10px] font-medium whitespace-nowrap">Mandatory</span>;
  return <span className="px-2 py-0.5 rounded-full bg-[#f8f9fb] border border-[#d0d5dd] text-[#697586] text-[10px] font-medium whitespace-nowrap">System</span>;
}

function JourneyContent({ isAr }: { isAr: boolean }) {
  const [selectedStep, setSelectedStep] = useState(4);
  const [expandedCp,   setExpandedCp]   = useState(3);

  const step = JOURNEY_STEPS[selectedStep];
  const passedCount = step.checkpoints.filter(c => c.status === 'Passed').length;
  const pausedCount = step.checkpoints.filter(c => c.status === 'Paused').length;
  const notStarted  = step.checkpoints.filter(c => c.status === 'Not started').length;

  return (
    <div className="flex flex-col gap-4">

      {/* Journey steps card */}
      <div className="bg-white border border-[#e3e8f1] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#eef1f6]">
          <h2 className="text-base font-semibold text-[#15212f]">
            {isAr ? 'رحلة تمويل العميل' : 'Customer financing journey'}
          </h2>
          <StatusLegend isAr={isAr} />
        </div>

        <div className="flex px-4 py-5 gap-0">
          {JOURNEY_STEPS.map((s, i) => (
            <React.Fragment key={s.id}>
              {i > 0 && <Connector done={JOURNEY_STEPS[i - 1].status === 'Passed'} />}
              <button
                onClick={() => setSelectedStep(i)}
                className={cn(
                  'flex flex-col items-center gap-2 px-3 py-3 rounded-xl transition-all shrink-0',
                  i === selectedStep
                    ? s.status === 'Paused'
                      ? 'bg-[#fffaeb] border-2 border-[#f79009]'
                      : 'bg-[#f5f9ff] border-2 border-[#0063f5]'
                    : 'hover:bg-[#fafbfc] border-2 border-transparent'
                )}
              >
                <div className="flex flex-col items-center gap-1">
                  <p className="text-[10px] font-medium text-[#697586] whitespace-nowrap">
                    {isAr ? `الخطوة ${i + 1}` : `Step ${i + 1}`}
                  </p>
                  <StepCircle status={s.status} />
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium text-[#344054] whitespace-nowrap">{isAr ? s.labelAr : s.labelEn}</p>
                  <p className={cn(
                    'text-[10px] font-semibold mt-0.5',
                    s.status === 'Passed'      ? 'text-[#17b26a]' :
                    s.status === 'Paused'      ? 'text-[#f79009]' :
                    s.status === 'Failed'      ? 'text-[#f04438]' :
                                                 'text-[#98a2b3]'
                  )}>
                    {s.status === 'Passed' && (isAr ? 'ناجح' : 'Passed')}
                    {s.status === 'Paused' && (isAr ? 'موقوف مؤقتاً' : 'Paused')}
                    {s.status === 'Failed' && (isAr ? 'فاشل' : 'Failed')}
                    {s.status === 'Not started' && (isAr ? 'لم يبدأ' : 'Not started')}
                  </p>
                  {i === selectedStep && (
                    <p className="text-[10px] font-bold text-[#0063f5] mt-1 uppercase tracking-wide">
                      {isAr ? 'الحالي' : 'Current'}
                    </p>
                  )}
                </div>
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Checkpoints card */}
      <div className="bg-white border border-[#e3e8f1] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#eef1f6]">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-[#15212f]">
              {isAr ? `نقاط التحقق: ${isAr ? step.labelAr : step.labelEn}` : `${step.labelEn} checkpoints`}
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-[#f0f5ff] border border-[#c3d5fd] text-[#2f5fc4] text-xs font-medium">
              {step.checkpoints.length} {isAr ? 'نقاط' : 'checkpoints'}
            </span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-bold text-[#15212f]">{passedCount}</span>
              <span className="text-xs text-[#697586] leading-tight">{isAr ? 'اجتياز\nمطلوب' : 'Required\npassed'}</span>
            </div>
            <div className="w-px h-8 bg-[#e3e8f1]" />
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-bold text-[#15212f]">{pausedCount + notStarted}</span>
              <span className="text-xs text-[#697586] leading-tight">{isAr ? 'مفتوح\nمطلوب' : 'Open\nrequired'}</span>
            </div>
            <div className="w-px h-8 bg-[#e3e8f1]" />
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-bold text-[#15212f]">0</span>
              <span className="text-xs text-[#697586] leading-tight">{isAr ? 'اختياري' : 'Optional'}</span>
            </div>
          </div>
        </div>

        {/* Info note */}
        <div className="px-5 py-3 bg-[#f8f9fb] border-b border-[#eef1f6] flex items-start gap-2 text-xs text-[#697586]">
          <span className="mt-0.5 shrink-0">ⓘ</span>
          <span>
            {isAr
              ? 'الحالات المشروطة: الشروط غير مطلوبة إلا عند تحقق شرط تفعيلها، وهذه الشروط لا تُطبق لذلك.'
              : 'Downstream hands can remain Not started. Conditional checkpoints shall not required when their condition does not apply.'}
          </span>
        </div>

        {/* Checkpoint list */}
        <div className="divide-y divide-[#f2f4f7]">
          {step.checkpoints.map((cp, i) => {
            const isExpanded = expandedCp === i;
            const isPaused   = cp.status === 'Paused';
            const isNS       = cp.status === 'Not started';

            return (
              <div
                key={i}
                className={cn(
                  'px-5 py-4',
                  isPaused ? 'bg-[#fffcf5]' : isNS ? 'bg-white' : 'bg-white'
                )}
              >
                {/* Left accent bar */}
                <div className="flex gap-3">
                  <div className={cn(
                    'w-1 rounded-full shrink-0 self-stretch',
                    cp.status === 'Passed'      ? 'bg-[#17b26a]' :
                    cp.status === 'Paused'      ? 'bg-[#f79009]' :
                    cp.status === 'Failed'      ? 'bg-[#f04438]' :
                                                  'bg-[#e3e8f1]'
                  )} />

                  <div className="flex-1 min-w-0">
                    {/* Row: status dot + label + tag + timestamp + expand */}
                    <div className="flex items-center gap-3">
                      <CpStatusDot status={cp.status} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-semibold text-[#98a2b3] uppercase tracking-wider mb-0.5">
                          {isAr ? `نقطة التحقق ${i + 1}` : `Checkpoint ${i + 1}`}
                        </p>
                        <p className={cn('text-sm font-medium', isNS ? 'text-[#98a2b3]' : 'text-[#15212f]')}>
                          {isAr ? cp.labelAr : cp.labelEn}
                        </p>
                      </div>
                      <CheckpointTag tag={cp.tag} />
                      {cp.timestamp && (
                        <span className="text-xs text-[#697586] whitespace-nowrap">{cp.timestamp}</span>
                      )}
                      {!cp.timestamp && (
                        <span className={cn('text-xs whitespace-nowrap', isNS ? 'text-[#98a2b3]' : 'text-[#f79009] font-medium')}>
                          {isNS ? (isAr ? 'لم يبدأ' : 'Not started') : (isAr ? 'موقوف' : 'Paused')}
                        </span>
                      )}
                      <button
                        onClick={() => setExpandedCp(isExpanded ? -1 : i)}
                        className="p-1 rounded hover:bg-[#f2f4f7] text-[#697586] shrink-0"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Note */}
                    {cp.noteEn && (
                      <p className="mt-1.5 ms-8 text-xs text-[#697586]">{isAr ? cp.noteAr : cp.noteEn}</p>
                    )}

                    {/* Expanded details */}
                    {isExpanded && cp.details && (
                      <div className="mt-3 ms-8 grid grid-cols-3 gap-x-8 gap-y-2">
                        {[
                          { label: isAr ? 'المصدر'           : 'Source',           value: cp.details.source          },
                          { label: isAr ? 'المحاولات'        : 'Attempts',         value: String(cp.details.attempts) },
                          { label: isAr ? 'في انتظار'        : 'Waiting on',       value: cp.details.waitingOn       },
                          { label: isAr ? 'المدة'            : 'Duration',         value: cp.details.duration        },
                          { label: isAr ? 'المرجع'           : 'Reference',        value: cp.details.reference       },
                          { label: isAr ? 'نتيجة الأعمال'   : 'Business outcome', value: cp.details.businessOutcome },
                        ].map(field => (
                          <div key={field.label} className="flex flex-col gap-0.5">
                            <span className="text-[10px] text-[#98a2b3] font-medium uppercase tracking-wide">{field.label}</span>
                            <span className="text-xs font-medium text-[#344054]">{field.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Summary tab helpers ──────────────────────────────────────────────────────

type SummaryStatus = 'Expired' | 'Available' | 'Failed' | 'Completed';
function SummaryCard({ title, source, status }: { title: string; source: string; status: SummaryStatus }) {
  const cfg: Record<SummaryStatus, { bg: string; border: string; badge: string; text: string }> = {
    Expired:   { bg: 'bg-[#fef3f2]', border: 'border-[#fecdca]', badge: 'bg-[#fef3f2] border-[#fecdca] text-[#b42318]', text: 'text-[#b42318]' },
    Available: { bg: 'bg-[#ecfdf3]', border: 'border-[#abefc6]', badge: 'bg-[#ecfdf3] border-[#abefc6] text-[#067647]', text: 'text-[#067647]' },
    Failed:    { bg: 'bg-[#fef3f2]', border: 'border-[#fecdca]', badge: 'bg-[#fef3f2] border-[#fecdca] text-[#b42318]', text: 'text-[#b42318]' },
    Completed: { bg: 'bg-[#f0f9ff]', border: 'border-[#b9e6fe]', badge: 'bg-[#f0f9ff] border-[#b9e6fe] text-[#026aa2]', text: 'text-[#026aa2]' },
  };
  const c = cfg[status];
  return (
    <div className={cn('rounded-xl border p-4 flex flex-col gap-2', c.bg, c.border)}>
      <p className="text-sm font-medium text-[#344054]">{title}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-[#697586]">{source}</span>
        <span className={cn('px-2 py-0.5 rounded-full border text-xs font-medium', c.badge)}>{status}</span>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function CustomerDetailPage({ profileId }: { profileId: string }) {
  const { lang } = useLang();
  const isAr = lang === 'ar';

  const profile = PROFILES.find(p => p.id === profileId) ?? PROFILES[0];
  const assignedInitials = profile.assignedName.split(' ').map(n => n[0]).join('').slice(0, 2);

  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeSubTab,  setActiveSubTab]  = useState(1); // default: User Journey

  const isJourneyTab = activeMainTab === 0 && activeSubTab === 1;

  return (
    <div className="h-screen bg-[#f8fafc] flex flex-col dark:bg-slate-950" dir={isAr ? 'rtl' : 'ltr'}>
      <Topbar />

      <div className="flex-1 overflow-y-auto">

        {/* Page header bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#e2e3e4] bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2 text-sm text-[#697586]">
            <span className="font-medium">{isAr ? 'رقم العميل' : 'Customer ID'}</span>
            <span className="font-bold text-[#121a26]">{profile.id}</span>
          </div>
          <Link
            href="/cps-official"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0063f5] text-white text-sm font-medium hover:bg-[#0052cc] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isAr ? 'رجوع' : 'Back'}
          </Link>
        </div>

        {/* Profile header */}
        <div className="flex items-stretch gap-3 px-6 py-4 border-b border-[#eef1f6] bg-white">
          {/* Avatar + name + status + actions */}
          <div className="flex items-center gap-0 bg-white border border-[#eef1f6] rounded-md flex-[1.5] min-w-0">
            <div className="flex items-center gap-5 p-4 flex-1 min-w-0">
              <div className="w-[80px] h-[80px] rounded-full bg-[#eaf2ff] border border-[#aacbfc] flex items-center justify-center text-2xl font-semibold text-[#0053cc] shrink-0">
                {profile.initials}
              </div>
              <div className="flex flex-col gap-2 min-w-0">
                <span className="text-lg font-semibold text-[#1e2228] truncate">{isAr ? profile.nameAr : profile.name}</span>
                <span className="self-start px-4 py-1.5 rounded-full bg-[#ecfdf3] border border-[#12b76a] text-[#12b76a] text-sm font-medium">
                  {isAr ? 'نشط' : 'Active'}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-4 border-s border-[#eef1f6]">
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg border border-[#fda29b] bg-white text-[#b42318] text-sm font-medium shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] whitespace-nowrap">
                {isAr ? 'إلغاء التفعيل' : 'Deactivate'}
              </button>
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg border border-[#fda29b] bg-white text-[#b42318] text-sm font-medium shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] whitespace-nowrap">
                {isAr ? 'تعليق' : 'Suspend'}
              </button>
            </div>
          </div>

          {/* ID / mobile / nationality */}
          <div className="bg-white border border-[#eef1f6] rounded-md flex-1 min-w-0">
            <div className="flex items-start justify-between px-4 py-2.5">
              <span className="text-xs text-[#667085] w-[110px] shrink-0">{isAr ? 'الهوية / الإقامة' : 'National/Iqama ID'}</span>
              <span className="text-sm font-medium text-[#1e2228] text-end">9573566234</span>
            </div>
            <div className="flex items-start justify-between px-4 py-2.5 bg-[#f9fbfc]">
              <span className="text-xs text-[#667085] w-[110px] shrink-0">{isAr ? 'رقم الجوال' : 'Mobile number'}</span>
              <span className="text-sm font-medium text-[#1e2228] text-end">{profile.phone}</span>
            </div>
            <div className="flex items-start justify-between px-4 py-2.5">
              <span className="text-xs text-[#667085] w-[110px] shrink-0">{isAr ? 'الجنسية' : 'Nationality'}</span>
              <span className="text-sm font-medium text-[#1e2228] text-end">{isAr ? 'المملكة العربية السعودية' : profile.country}</span>
            </div>
          </div>

          {/* AML */}
          <div className="bg-white border border-[#eef1f6] rounded-md flex items-center justify-center p-4 w-[200px] shrink-0">
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-[#7d89a3]">{isAr ? 'درجة AML' : 'AML Score'}</span>
                <span className="text-4xl font-semibold text-[#1e2228]">86%</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-[#7d89a3]">{isAr ? 'حالة AML' : 'AML Status'}</span>
                <span className="px-4 py-1.5 rounded-full bg-[#ecfdf3] border border-[#12b76a] text-[#12b76a] text-sm font-medium whitespace-nowrap">
                  {isAr ? 'ناجح' : 'Passed'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main tabs */}
        <div className="border-b border-[#e2e3e4] bg-white overflow-x-auto">
          <div className="flex min-w-max px-6">
            {CUSTOMER_TABS.map((tab, i) => {
              const TabIcon = tab.Icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => { setActiveMainTab(i); setActiveSubTab(0); }}
                  className={cn(
                    'flex items-center gap-2 px-5 py-3.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors',
                    i === activeMainTab
                      ? 'border-[#0063f5] text-[#202a39] bg-white'
                      : 'border-transparent text-[#697586] hover:bg-gray-50'
                  )}
                >
                  <TabIcon className="w-4 h-4 shrink-0" />
                  {isAr ? tab.labelAr : tab.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Page content */}
        <div className="flex gap-6 px-6 py-5">

          {/* Left column */}
          <div className="flex-1 min-w-0 flex flex-col gap-5">

            {/* Sub-tabs */}
            {CUSTOMER_TABS[activeMainTab].sub.length > 0 && (
              <div className="flex isolate rounded-lg overflow-hidden border border-[#d5d7da] self-start">
                {CUSTOMER_TABS[activeMainTab].sub.map((subTab, i) => {
                  const SubIcon = subTab.Icon;
                  return (
                    <button
                      key={subTab.key}
                      onClick={() => setActiveSubTab(i)}
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 text-sm font-medium whitespace-nowrap border-e border-[#d5d7da] last:border-e-0 transition-colors',
                        activeSubTab === i
                          ? 'bg-[#f5f9ff] text-[#0063f5]'
                          : 'bg-white text-[#414651] hover:bg-gray-50'
                      )}
                    >
                      <SubIcon className="w-4 h-4 shrink-0" />
                      {isAr ? subTab.labelAr : subTab.labelEn}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Journey or summary */}
            {isJourneyTab ? (
              <JourneyContent isAr={isAr} />
            ) : (
              <>
                <div className="bg-white border border-[#e3e8f1] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-[#202a39]">
                      {isAr ? 'جاهزية الملف المالي' : 'Financial profile readiness'}
                    </h3>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#aacbfc] bg-white text-[#0063f5] text-sm font-medium shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                      {isAr ? 'فتح الرحلة' : 'Open journey'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <SummaryCard title={isAr ? 'سجلات التوظيف منتهية الصلاحية' : 'Employment records expired'} source="MASDR" status="Expired" />
                    <SummaryCard title={isAr ? 'تقارير الائتمان: ٣' : 'Credit reports found: 3'} source="SIMAH" status="Available" />
                    <SummaryCard title={isAr ? 'فشل التحقق' : 'Verification failed'} source="Nafath" status="Failed" />
                    <SummaryCard title={isAr ? 'تقرير الفحص متاح' : 'Screening report available'} source="Tamawal" status="Completed" />
                  </div>
                </div>

                <div className="bg-white border border-[#e3e8f1] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-[#15212f]">{isAr ? 'النشاط الأخير' : 'Recent activity'}</h3>
                    <button className="text-sm font-medium text-[#0053cc] hover:underline">{isAr ? 'عرض كل السجلات' : 'View all logs'}</button>
                  </div>
                  <div className="flex flex-col mt-2">
                    {ACTIVITY_LOG.map((item, i) => (
                      <div key={i} className={cn('flex items-center justify-between py-3', i > 0 && 'border-t border-[#edf0f5]')}>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-semibold text-black">{item.event}</span>
                          <span className="text-xs text-[#697586]">{item.detail}</span>
                        </div>
                        <span className="text-xs text-[#697586] whitespace-nowrap ms-4">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right sidebar */}
          <div className="w-[290px] shrink-0 flex flex-col gap-3">

            {/* Assignment */}
            <div className="bg-white border border-[#e3e8f1] rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-[#15212f]">{isAr ? 'المسؤول' : 'Assignment'}</h3>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#cce0fd] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                  <Pencil className="w-4 h-4 text-[#0063f5]" />
                </button>
              </div>
              <div className="flex items-center gap-2.5 bg-[#f8fafc] border border-[#e3e8f1] rounded-xl p-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#dfeeff] flex items-center justify-center text-xs font-bold text-[#0d5fcd] shrink-0">
                  {assignedInitials}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-medium text-[#121827] truncate">{isAr ? profile.assignedNameAr : profile.assignedName}</span>
                  <span className="text-[10px] text-[#697386]">{profile.assignedRole}</span>
                </div>
              </div>
              <button className="w-full h-10 flex items-center justify-center gap-2 rounded-lg border border-[#d6dde9] bg-white text-xs font-semibold text-[#121827] hover:bg-gray-50 transition-colors mb-4">
                {isAr ? 'إعادة تعيين الملف' : 'Reassign profile'}
              </button>
              <div className="border-t border-[#e3e8f1] pt-3">
                <p className="text-[10px] text-[#697386] mb-1">{isAr ? 'آخر تغيير للمسؤول' : 'Latest assignment change'}</p>
                <p className="text-[10px] text-[#121827]">System queue → {isAr ? profile.assignedNameAr : profile.assignedName}</p>
                <p className="text-[10px] text-[#697386] mt-0.5">Jul 25, 2026 · 09:30</p>
              </div>
            </div>

            {/* Internal comments */}
            <div className="bg-white border border-[#e3e8f1] rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#0d5fcd] mb-0.5">
                    {isAr ? 'تعاون الفريق' : 'Team collaboration'}
                  </p>
                  <h3 className="text-sm font-medium text-[#121827]">
                    {isAr ? 'التعليقات الداخلية' : 'Internal comments'}
                  </h3>
                </div>
                <span className="px-2 py-1 rounded-full bg-[#eaf3ff] border border-[#d5e8ff] text-[#0d5fcd] text-[10px] font-semibold">3</span>
              </div>
              <div className="flex gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-[#dfeeff] flex items-center justify-center text-[9px] font-bold text-[#0d5fcd] shrink-0 mt-0.5">
                  {assignedInitials}
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-xs font-medium text-[#121827]">{isAr ? profile.assignedNameAr : profile.assignedName}</span>
                  <p className="text-[10px] text-[#485469] leading-relaxed">Identity checks complete. Waiting for the next customer action.</p>
                  <p className="text-[10px] text-[#697386]">Yesterday · 14:26</p>
                </div>
              </div>
              <button className="w-full h-10 flex items-center justify-center gap-2 rounded-lg border border-[#d6dde9] bg-white text-xs font-semibold text-[#121827] hover:bg-gray-50 transition-colors">
                <MessageSquare className="w-4 h-4" />
                {isAr ? 'فتح التعليقات' : 'Open internal comments'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
