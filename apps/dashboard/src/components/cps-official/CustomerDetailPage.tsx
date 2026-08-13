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
  File, Building2, Building, Banknote, UserCircle,
} from 'lucide-react';
import {
  PROFILES, ACTIVITY_LOG, JOURNEY_STEPS,
  type Profile,
} from './cps-data';

// ─── Tab config ──────────────────────────────────────────────────────────────

type SubTabItem = { key: string; labelEn: string; labelAr: string; Icon: React.ElementType };
type MainTab   = { key: string; labelEn: string; labelAr: string; Icon: React.ElementType; sub: SubTabItem[] };

const CUSTOMER_TABS: MainTab[] = [
  { key: 'overview',       labelEn: 'Overview',            labelAr: 'ملخص',                 Icon: BarChart2,      sub: [
    { key: 'summary',       labelEn: 'Summary',            labelAr: 'ملخص',           Icon: BarChart2      },
    { key: 'journey',       labelEn: 'User Journey',       labelAr: 'رحلة المستخدم',  Icon: ArrowRight     },
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


const STEP_OVERLINES = [
  'Preserved history',
  'Repeatable login',
  'Versioned',
  'Repeatable engine',
  'Repeatable order',
];

const SUB_JOURNEYS = [
  { labelEn: 'Guest registration', count: '5/5 passed' },
  { labelEn: 'Product search',     count: '4/4 passed' },
  { labelEn: 'Search payment',     count: '4/4 passed' },
  { labelEn: 'Customer conversion', count: '10/10 passed' },
];

function JourneyContent({ isAr }: { isAr: boolean }) {
  const [selectedStep,       setSelectedStep]       = useState(0);
  const [selectedSubJourney, setSelectedSubJourney] = useState(0);
  const [expandedCp,         setExpandedCp]         = useState<number | null>(null);

  const step     = JOURNEY_STEPS[selectedStep];
  const passed   = step.checkpoints.filter(c => c.status === 'Passed').length;
  const open     = step.checkpoints.filter(c => c.status === 'Paused' || c.status === 'Failed').length;
  const total    = step.checkpoints.length;
  const progress = total > 0 ? Math.round((passed / total) * 100) : 0;

  return (
    <div className="flex flex-col">

      {/* ── Banner ──────────────────────────────────────────────── */}
      <div className="bg-white border border-[#e3e8f1] rounded-[11px] p-[17px] flex flex-col gap-[16px] items-start">
        {/* Header row */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[12px] flex-1 min-w-0">
            <div className="overflow-clip size-[24px] shrink-0">
              <img alt="" className="block size-full" src="/journey-icons/arrow-circle-up-right.svg" />
            </div>
            <p className="text-[18px] font-semibold text-[#15212f] leading-[28px] tracking-[0.027px]">
              {isAr ? 'رحلة العميل' : 'Customer journey'}
            </p>
          </div>
          <div className="flex items-center gap-[8px] shrink-0">
            <div className="bg-white border border-[#d5d7da] flex gap-[8px] items-center px-[12px] py-[8px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-[250px]">
              <p className="flex-1 min-w-0 text-[16px] text-[#717680] tracking-[0.08px] truncate">Journey instance</p>
              <div className="overflow-clip size-[20px] shrink-0">
                <img alt="" className="block size-full" src="/journey-icons/chevron-down.svg" />
              </div>
            </div>
            <button className="border border-[#aacbfc] bg-white flex gap-[4px] items-center justify-center px-[14px] py-[10px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] min-w-[120px]">
              <p className="text-[14px] font-medium text-[#0063f5] leading-[20px] tracking-[0.014px] whitespace-nowrap">
                {isAr ? 'الذهاب للخطوة الحالية' : 'Go to current step'}
              </p>
              <div className="overflow-clip size-[20px] shrink-0">
                <img alt="" className="block size-full" src="/journey-icons/arrow-right.svg" />
              </div>
            </button>
          </div>
        </div>

        {/* Card 1: Guest → Customer */}
        <div className="bg-[#f5f9ff] border border-[#80b1fa] rounded-[9px] w-full overflow-clip">
          <div className="flex items-start justify-between p-[12px]">
            <div className="flex gap-[12px] items-start flex-1 min-w-0 pl-[6px]">
              <div className="bg-[#0063f5] flex items-center justify-center p-[8px] rounded-[8px] shrink-0">
                <div className="overflow-clip size-[24px]">
                  <img alt="" className="block size-full" src="/journey-icons/image-user-check.svg" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start flex-1 min-w-0 font-bold whitespace-nowrap">
                <p className="text-[8px] text-[#0063f5] uppercase tracking-[0.72px] leading-[12px]">
                  {isAr ? 'ضيف ← عميل' : 'Guest → Customer'}
                </p>
                <p className="text-[18px] text-[#121a26] leading-[16.5px] tracking-[0.25px]">
                  {isAr ? 'سجل الضيف أصبح الخطوة 1 من رحلة العميل' : 'Guest history is now Step 1 of this Customer journey'}
                </p>
              </div>
            </div>
            <div className="bg-[#ecfdf3] border border-[#abefc6] flex items-center px-[12px] py-[4px] rounded-[16px] shrink-0">
              <p className="text-[14px] font-medium text-[#067647] text-center whitespace-nowrap">
                {isAr ? 'نفس خيط الملف' : 'Same profile thread'}
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Current stop */}
        <div className="bg-white border-[#b54708] border-b border-l-4 border-r border-t rounded-[9px] w-full overflow-clip">
          <div className="flex items-center justify-between p-[12px] pl-[16px]">
            <div className="flex gap-[12px] items-center flex-1 min-w-0">
              <div className="bg-[#dc6803] flex items-center justify-center p-[8px] rounded-[8px] shrink-0">
                <div className="overflow-clip size-[24px]">
                  <img alt="" className="block size-full" src="/journey-icons/marker-pin.svg" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start flex-1 min-w-0 font-bold whitespace-nowrap">
                <p className="text-[8px] text-[#0063f5] uppercase tracking-[0.72px] leading-[12px]">
                  {isAr ? 'التوقف الحالي' : 'Current stop'}
                </p>
                <p className="text-[16px] text-[#121a26] leading-[16.5px] tracking-[0.25px]">
                  {isAr ? 'تقديم الطلب · التحقق من OTP تأكيد الطلب' : 'Order submission · Order confirmation OTP verified'}
                </p>
              </div>
            </div>
            <div className="flex gap-[40px] items-center h-[49px] px-[12px] py-[8px] flex-1 min-w-0 justify-end">
              {[
                { label: 'Status',      value: 'Paused',                      w: 47  },
                { label: 'Waiting on',  value: 'Customer',                    w: 63  },
                { label: 'Reference',   value: 'O-8821',                      w: 50  },
                { label: 'Last update', value: 'Waiting since Jul 11 · 10:31', w: 174 },
              ].map(m => (
                <div key={m.label} className="flex flex-col gap-[4px] h-full items-start justify-center shrink-0" style={{ width: m.w }}>
                  <p className="text-[10px] text-[#697586] leading-[10.5px] tracking-[0.25px] w-full">{m.label}</p>
                  <p className="text-[12.5px] font-medium text-[#121a26] leading-[18px] tracking-[0.5px] w-full">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Content below banner ─────────────────────────────────── */}
      <div className="p-[8px] flex flex-col">

        {/* Title row */}
        <div className="flex items-center justify-between pt-[16px] w-full">
          <p className="text-[25px] font-medium text-[#15212f] leading-[32px] flex-1 min-w-0">
            {isAr ? 'رحلة العميل' : 'Customer journey'}
          </p>
          <div className="flex gap-[16px] h-[16px] items-start shrink-0">
            {[
              { color: '#079455', label: 'Passed' },
              { color: '#f79009', label: 'Paused' },
              { color: '#d92d20', label: 'Failed' },
              { color: '#a4a7ae', label: 'Not started' },
            ].map(l => (
              <div key={l.label} className="flex gap-[4px] items-center self-stretch">
                <div className="rounded-[3.5px] size-[7px] shrink-0" style={{ backgroundColor: l.color }} />
                <p className="text-[12px] text-[#717680] whitespace-nowrap leading-[16px] tracking-[0.048px]">{l.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey steps (horizontal) */}
        <div className="flex items-start py-[20px] w-full">
          {JOURNEY_STEPS.map((s, i) => {
            const isSel    = i === selectedStep;
            const isPaused = s.status === 'Paused';
            return (
              <React.Fragment key={s.id}>
                {i > 0 && (
                  <div className="flex flex-[1_0_0] h-[48px] items-center justify-center min-w-px">
                    <div className="flex-1 h-0 min-w-px relative">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src="/journey-icons/line.svg" />
                      </div>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => setSelectedStep(i)}
                  className={cn(
                    'flex flex-col gap-[8px] items-center rounded-[8px] shrink-0 text-start',
                    isSel
                      ? 'bg-[#0063f5] border-2 border-[#0063f5]'
                      : 'bg-[#cdd4df] border border-[#cdd4df]'
                  )}
                >
                  <div className={cn(
                    'flex gap-[12px] items-start p-[12px] rounded-[8px] shrink-0',
                    isSel
                      ? 'bg-white border-2 border-[#0063f5]'
                      : 'bg-white border border-[#cdd4df] w-[194px]'
                  )}>
                    {isPaused ? (
                      <div className="bg-[#ca7404] border-[6px] border-[#fef4e8] flex items-center justify-center p-[4px] rounded-full shrink-0 w-[20px]">
                        <div className="overflow-clip size-[12px]">
                          <img alt="" className="block size-full" src="/journey-icons/pause-square.svg" />
                        </div>
                      </div>
                    ) : (
                      <div className="bg-[#079455] border-[6px] border-[#dcfae6] flex items-center justify-center p-[4px] rounded-full shrink-0 w-[20px]">
                        <div className="overflow-clip size-[12px]">
                          <img alt="" className="block size-full" src="/journey-icons/check.svg" />
                        </div>
                      </div>
                    )}
                    <div className={cn('flex flex-col gap-[16px] items-start', isSel ? 'w-[138px]' : 'flex-1 min-w-px')}>
                      <div className="flex flex-col gap-[8px] w-full">
                        <div className="flex gap-[2px] items-start font-bold text-[10px] tracking-[0.05px] leading-[14px] w-full">
                          <span className="text-[#0063f5] whitespace-nowrap">Step {i + 1}</span>
                          <span className="text-[#a4a7ae] whitespace-nowrap">·</span>
                          <span className="text-[#a4a7ae] flex-1 min-w-px">{STEP_OVERLINES[i]}</span>
                        </div>
                        <p className="font-bold text-[14px] text-[#202a39] leading-[12.75px] tracking-[0.25px] w-full">
                          {isAr ? s.labelAr : s.labelEn}
                        </p>
                      </div>
                    </div>
                  </div>
                  {isSel && (
                    <div className="pb-[8px]">
                      <p className="text-white text-[10px] font-bold leading-[14px] tracking-[0.05px] whitespace-nowrap">CURRENT</p>
                    </div>
                  )}
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom area */}
        <div className="flex gap-[16px] items-start">

          {/* Left: detail panel */}
          <div className="flex-1 min-w-0 bg-white border border-[#e9eaeb] rounded-[12px] p-[17px] flex flex-col gap-[16px] items-start">
            {/* Step title */}
            <div className="flex items-center gap-[8px] w-full">
              <p className="text-[25px] font-medium text-[#15212f] leading-[32px] flex-1 min-w-0">
                {isAr ? step.labelAr : step.labelEn}
              </p>
              {selectedStep === 0 && (
                <div className="bg-[#fafafa] border border-[#e9eaeb] flex items-center px-[12px] py-[4px] rounded-[16px] shrink-0">
                  <p className="text-[14px] font-medium text-[#414651] text-center whitespace-nowrap">4 sub-journey</p>
                </div>
              )}
            </div>

            {/* Sub-journeys (step 1 only) */}
            {selectedStep === 0 && (
              <div className="flex items-start py-[16px] w-full">
                {SUB_JOURNEYS.map((sj, si) => {
                  const isSjSel = si === selectedSubJourney;
                  return (
                    <React.Fragment key={si}>
                      {si > 0 && (
                        <div className="flex h-[48px] items-center justify-center shrink-0 w-[24px]">
                          <div className="flex-1 h-0 relative">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src="/journey-icons/line.svg" />
                            </div>
                          </div>
                        </div>
                      )}
                      <button
                        onClick={() => setSelectedSubJourney(si)}
                        className={cn(
                          'flex flex-1 flex-col gap-[8px] items-start justify-center min-w-px rounded-[8px] text-start',
                          isSjSel
                            ? 'bg-[#0063f5] border-2 border-[#0063f5]'
                            : 'bg-[#cdd4df] border border-[#cdd4df]'
                        )}
                      >
                        <div className={cn(
                          'flex gap-[16px] items-start p-[12px] rounded-[8px] shrink-0 w-full',
                          isSjSel
                            ? 'bg-[#f5f9ff] border-2 border-[#0063f5]'
                            : 'bg-white border border-[#cdd4df]'
                        )}>
                          {isSjSel ? (
                            <div className="bg-[#079455] border-[6px] border-[#dcfae6] flex items-center justify-center p-[4px] rounded-full shrink-0 w-[20px]">
                              <div className="overflow-clip size-[12px]">
                                <img alt="" className="block size-full" src="/journey-icons/check.svg" />
                              </div>
                            </div>
                          ) : (
                            <div className="bg-[#9aa4b2] border-[6px] border-[#f8fafc] flex items-center justify-center p-[4px] rounded-full shrink-0 w-[20px]">
                              <div className="overflow-clip size-[12px]">
                                <img alt="" className="block size-full" src="/journey-icons/circle-dot.svg" />
                              </div>
                            </div>
                          )}
                          <div className="flex flex-col gap-[8px] flex-1 min-w-px">
                            <p className="font-bold text-[14px] text-[#202a39] leading-[12.75px] tracking-[0.25px]">{sj.labelEn}</p>
                            <p className="text-[10px] text-[#697586]">{sj.count}</p>
                          </div>
                        </div>
                      </button>
                    </React.Fragment>
                  );
                })}
              </div>
            )}

            {/* Checkpoints header */}
            <div className="flex items-center gap-[8px] w-full">
              <p className="text-[20px] text-[#15212f] leading-[32px] tracking-[0px] flex-1 min-w-0">
                {selectedStep === 0
                  ? `${SUB_JOURNEYS[selectedSubJourney].labelEn} checkpoints`
                  : `${isAr ? step.labelAr : step.labelEn} checkpoints`}
              </p>
              <div className="bg-[#fafafa] border border-[#e9eaeb] flex items-center px-[12px] py-[4px] rounded-[16px] shrink-0">
                <p className="text-[14px] font-medium text-[#414651] text-center whitespace-nowrap">
                  {step.checkpoints.length} checkpoints
                </p>
              </div>
            </div>

            {/* Checkpoint list */}
            <div className="flex flex-col gap-[8px] w-full">
              {step.checkpoints.map((cp, ci) => {
                const isExp = expandedCp === ci;
                const statusColor =
                  cp.status === 'Passed' ? '#079455' :
                  cp.status === 'Paused' ? '#ca7404' :
                  cp.status === 'Failed' ? '#d92d20' : '#e9eaeb';
                const statusLabel =
                  cp.status === 'Passed'      ? (isAr ? 'مكتمل'    : 'Passed')      :
                  cp.status === 'Paused'      ? (isAr ? 'موقوف'    : 'Paused')      :
                  cp.status === 'Failed'      ? (isAr ? 'فشل'      : 'Failed')      :
                                                (isAr ? 'لم يبدأ'  : 'Not started');
                const detailNote =
                  cp.status === 'Passed'      ? (isAr ? 'مكتمل بنجاح'              : 'Completed successfully')         :
                  cp.status === 'Paused'      ? (isAr ? (cp.noteAr ?? 'في الانتظار') : (cp.noteEn ?? 'Waiting for action')) :
                                                (isAr ? 'لم يبدأ بعد'              : 'Not started yet');
                return (
                  <div
                    key={ci}
                    className="bg-white border-solid overflow-clip rounded-[9px] w-full"
                    style={isExp
                      ? { borderWidth: '2px 2px 2px 4px', borderColor: '#0063f5' }
                      : { borderWidth: '1px 1px 1px 4px', borderColor: statusColor, borderTopColor: '#e9eaeb', borderRightColor: '#e9eaeb', borderBottomColor: '#e9eaeb' }
                    }
                  >
                    {/* Header row */}
                    <button
                      className="flex items-center justify-between p-[12px] pl-[16px] w-full text-start"
                      onClick={() => setExpandedCp(isExp ? null : ci)}
                    >
                      <div className="flex flex-[1_0_0] gap-[22px] items-start min-w-px pl-[8px]">
                        <div className="flex items-center py-[8px] shrink-0">
                          {cp.status === 'Passed' && (
                            <div className="bg-[#079455] border-[6px] border-[#dcfae6] flex items-center justify-center p-[4px] rounded-full w-[20px]">
                              <div className="overflow-clip size-[12px]">
                                <img alt="" className="block size-full" src="/journey-icons/check.svg" />
                              </div>
                            </div>
                          )}
                          {cp.status === 'Paused' && (
                            <div className="bg-[#ca7404] border-[6px] border-[#fef4e8] flex items-center justify-center p-[4px] rounded-full w-[20px]">
                              <div className="overflow-clip size-[12px]">
                                <img alt="" className="block size-full" src="/journey-icons/pause-square.svg" />
                              </div>
                            </div>
                          )}
                          {(cp.status === 'Not started' || cp.status === 'Failed') && (
                            <div className="bg-[#9aa4b2] border-[6px] border-[#f8fafc] flex items-center justify-center p-[4px] rounded-full w-[20px]">
                              <div className="overflow-clip size-[12px]">
                                <img alt="" className="block size-full" src="/journey-icons/circle-dot.svg" />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px whitespace-nowrap">
                          <p className="font-bold text-[8px] text-[#0063f5] uppercase tracking-[0.72px] leading-[12px]">
                            {isAr ? `نقطة التحقق ${ci + 1}` : `Checkpoint ${ci + 1}`}
                          </p>
                          <p className="font-bold text-[18px] text-[#121a26] leading-[16.5px] tracking-[0.25px]">
                            {isAr ? cp.labelAr : cp.labelEn}
                          </p>
                          <p className="text-[10px] text-[#697586] leading-[12px] tracking-[0.25px]">{detailNote}</p>
                        </div>
                      </div>
                      <div className="flex gap-[16px] items-center self-stretch shrink-0">
                        {cp.tag === 'Mandatory' ? (
                          <div className="bg-[#eaf2ff] border border-[#aacbfc] flex items-center px-[8px] py-[2px] rounded-[16px]">
                            <p className="text-[12px] font-medium text-[#0053cc] whitespace-nowrap">{isAr ? 'إلزامي' : 'Mandatory'}</p>
                          </div>
                        ) : (
                          <div className="bg-[#f8f9fb] border border-[#d0d5dd] flex items-center px-[8px] py-[2px] rounded-[16px]">
                            <p className="text-[12px] font-medium text-[#697586] whitespace-nowrap">{isAr ? 'نظام' : 'System'}</p>
                          </div>
                        )}
                        <div className="flex flex-col gap-[4px] items-end justify-center h-full w-[87px]">
                          <p className="text-[10px] text-[#697586] leading-[10.5px] tracking-[0.25px] w-full text-end">{statusLabel}</p>
                          <p className="text-[12.5px] font-medium text-[#121a26] leading-[18px] tracking-[0.5px] w-full text-end whitespace-nowrap">
                            {cp.timestamp ?? '—'}
                          </p>
                        </div>
                        <div className="overflow-clip size-[20px] shrink-0 transition-transform duration-200" style={{ transform: isExp ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                          <img alt="" className="block size-full" src="/journey-icons/chevron-down.svg" />
                        </div>
                      </div>
                    </button>

                    {/* Expanded detail panel */}
                    {isExp && cp.details && (
                      <div className="bg-[#f8fafc] border-t border-[#e3e8ef] flex gap-[8px] items-center pl-[64px] pr-[16px] py-[12px] w-full min-h-[57px]">
                        {[
                          { label: isAr ? 'المصدر'         : 'Source',           value: cp.details.source          },
                          { label: isAr ? 'المحاولات'      : 'Attempts',         value: String(cp.details.attempts) },
                          { label: isAr ? 'في انتظار'      : 'Waiting on',       value: cp.details.waitingOn       },
                          { label: isAr ? 'المدة'          : 'Duration',         value: cp.details.duration        },
                          { label: isAr ? 'المرجع'         : 'Reference',        value: cp.details.reference       },
                          { label: isAr ? 'نتيجة الأعمال' : 'Business outcome', value: cp.details.businessOutcome },
                        ].map(field => (
                          <div key={field.label} className="flex flex-1 flex-col gap-[4px] h-full items-start justify-center min-w-px">
                            <p className="text-[10px] text-[#697586] leading-[10.5px] tracking-[0.25px] w-full">{field.label}</p>
                            <p className="text-[12.5px] font-medium text-[#121a26] leading-[18px] tracking-[0.5px] w-full">{field.value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: StepSidePanel */}
          <div className="bg-[#f8fafc] border border-[#e3e8ef] rounded-[12px] p-[14px] flex flex-col gap-[16px] items-start w-[265px] shrink-0">
            <div className="flex items-center justify-between w-full">
              <p className="text-[12px] text-[#697586] leading-[16px] tracking-[0.048px]">
                {isAr ? 'التقدم المطلوب' : 'Required progress'}
              </p>
              <p className="text-[25px] text-[#121a26] leading-[32px]">{progress}%</p>
            </div>
            <div className="relative w-full h-[8px] bg-[#e9eaeb] rounded-[4px]">
              <div
                className="absolute bg-[#0063f5] h-[8px] left-0 rounded-[4px] top-0"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex gap-[4px] items-start w-full">
              {[
                { num: passed, label: 'Required passed' },
                { num: open,   label: 'Open required'   },
                { num: 0,      label: 'Optional'         },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="bg-white border border-[#e9eaeb] flex-1 min-w-px rounded-[7px] flex flex-col gap-[4px] items-center p-[9px]"
                >
                  <p className="text-[25px] text-[#121827] text-center leading-[32px] whitespace-nowrap">{stat.num}</p>
                  <p className="text-[10px] font-bold text-[#697386] text-center tracking-[0.05px] w-full leading-[14px]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

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

export default function CustomerDetailPage({ profileId, forceLang, listPath = '/cps-official' }: { profileId: string; forceLang?: 'en' | 'ar'; listPath?: string }) {
  const { lang } = useLang();
  const isAr = (forceLang ?? lang) === 'ar';

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
            href={listPath}
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
