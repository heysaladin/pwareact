'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Topbar from '@/components/orders/Topbar';
import { useLang } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import {
  ArrowLeft, ChevronRight, Pencil, MessageSquare,
  Phone, Globe, List, Bell, CreditCard, ClipboardList, CheckCircle2,
  File, Building2, Building, Banknote, UserCircle, UserX, Shield, Eye,
} from 'lucide-react';
import {
  PROFILES, JOURNEY_STEPS, GUEST_JOURNEY_STEPS,
  type Profile,
} from './cps-data';
import ViewSwitcherModal from './ViewSwitcherModal';
import { TabPageContent } from './cps-tab-pages';
import ProviderJourneyContent from './ProviderJourneyContent';

// ─── Tab config ──────────────────────────────────────────────────────────────

type SubTabItem = { key: string; labelEn: string; labelAr: string; iconSrc?: string; Icon?: React.ElementType };
type MainTab   = { key: string; labelEn: string; labelAr: string; iconSrc: string; sub: SubTabItem[] };

const CUSTOMER_TABS: MainTab[] = [
  { key: 'overview',       labelEn: 'Overview',            labelAr: 'ملخص',                 iconSrc: '/tab-icons/bar-chart-square-03.svg',   sub: [
    { key: 'summary',       labelEn: 'Summary',            labelAr: 'ملخص',           iconSrc: '/tab-icons/bar-chart-square-03.svg'   },
    { key: 'journey',       labelEn: 'User Journey',       labelAr: 'رحلة المستخدم',  iconSrc: '/tab-icons/arrow-circle-up-right.svg' },
    { key: 'comments',      labelEn: 'Internal Comments',  labelAr: 'تعليقات داخلية', Icon: MessageSquare  },
    { key: 'notifications', labelEn: 'Notifications',      labelAr: 'إشعارات',         Icon: Bell           },
  ]},
  { key: 'verification',   labelEn: 'AML',                 labelAr: 'AML',                    iconSrc: '/tab-icons/receipt-search.svg',         sub: [
    { key: 'screening',     labelEn: 'Screening',          labelAr: 'الفحص الانتقائي', iconSrc: '/tab-icons/receipt-search.svg'        },
    { key: 'risk',          labelEn: 'Risk',               labelAr: 'مخاطرة',          Icon: UserCircle         },
  ]},
  { key: 'reports',        labelEn: 'Reports',             labelAr: 'التقارير',               iconSrc: '/tab-icons/clipboard-minus.svg',        sub: [
    { key: 'kyc',           labelEn: 'KYC',                labelAr: 'KYC',             Icon: UserCircle     },
    { key: 'masdr',         labelEn: 'MASDR',              labelAr: 'MASDR',           Icon: Building2      },
    { key: 'simah',         labelEn: 'SIMAH',              labelAr: 'SIMAH',           Icon: Building       },
  ]},
  { key: 'financing',      labelEn: 'Financing Orders',    labelAr: 'طلبات التمويل',          iconSrc: '/tab-icons/briefcase-02.svg',           sub: [
    { key: 'preliminary',   labelEn: 'Preliminary',        labelAr: 'تمهيدي',          Icon: List           },
    { key: 'applications',  labelEn: 'Applications',       labelAr: 'التطبيقات',        Icon: CreditCard     },
    { key: 'decisions',     labelEn: 'Decisions',          labelAr: 'القرارات',          Icon: CheckCircle2   },
    { key: 'orders',        labelEn: 'Orders',             labelAr: 'طلبات',            Icon: ClipboardList  },
  ]},
  { key: 'billing',        labelEn: 'Billing & Costs',     labelAr: 'الفواتير والتكاليف',     iconSrc: '/tab-icons/receipt.svg',                sub: [
    { key: 'invoices',      labelEn: 'Invoices',           labelAr: 'الفواتير',         Icon: File           },
    { key: 'billing',       labelEn: 'Billing',            labelAr: 'الفاتورة',          iconSrc: '/tab-icons/receipt.svg'               },
  ]},
  { key: 'loyalty',        labelEn: 'Loyalty',             labelAr: 'وفاء',                   iconSrc: '/tab-icons/gift.svg',                   sub: [
    { key: 'points',        labelEn: 'Points',             labelAr: 'نقاط',             Icon: Banknote       },
    { key: 'rewards',       labelEn: 'Rewards',            labelAr: 'المكافآت',          iconSrc: '/tab-icons/gift.svg'                  },
  ]},
  { key: 'security',       labelEn: 'Security & Access',   labelAr: 'الأمن والوصول',          iconSrc: '/tab-icons/driver.svg',                 sub: [
    { key: 'devices',       labelEn: 'Devices',            labelAr: 'أجهزة',             Icon: Phone          },
    { key: 'ip',            labelEn: 'IP Addresses',       labelAr: 'عناوين IP',          Icon: Globe          },
    { key: 'logs',          labelEn: 'User Logs',          labelAr: 'سجلات المستخدمين',  Icon: List           },
  ]},
];


const PROVIDER_TABS: MainTab[] = [
  { key: 'overview',       labelEn: 'Overview',          labelAr: 'نظرة عامة',       iconSrc: '/tab-icons/bar-chart-square-03.svg',  sub: [
    { key: 'summary',       labelEn: 'Summary',          labelAr: 'ملخص',          iconSrc: '/tab-icons/bar-chart-square-03.svg'   },
    { key: 'comments',      labelEn: 'Internal Comments', labelAr: 'تعليقات داخلية', Icon: MessageSquare },
  ]},
  { key: 'reports',        labelEn: 'Reports',           labelAr: 'التقارير',        iconSrc: '/tab-icons/clipboard-minus.svg',      sub: [
    { key: 'kyc',           labelEn: 'KYC',              labelAr: 'KYC',           Icon: UserCircle },
    { key: 'masdr',         labelEn: 'MASDR',            labelAr: 'MASDR',         Icon: Building2  },
    { key: 'simah',         labelEn: 'SIMAH',            labelAr: 'SIMAH',         Icon: Building   },
  ]},
  { key: 'financing',      labelEn: 'Financing Journey', labelAr: 'رحلة التمويل',    iconSrc: '/tab-icons/briefcase-02.svg',         sub: [
    { key: 'preliminary',   labelEn: 'Preliminary',      labelAr: 'تمهيدي',        Icon: List       },
    { key: 'applications',  labelEn: 'Applications',     labelAr: 'التطبيقات',      Icon: CreditCard },
    { key: 'decisions',     labelEn: 'Decisions',        labelAr: 'القرارات',        Icon: CheckCircle2 },
    { key: 'orders',        labelEn: 'Orders',           labelAr: 'طلبات',          Icon: ClipboardList },
  ]},
];

const GUEST_TABS: MainTab[] = [
  { key: 'overview',       labelEn: 'Overview',          labelAr: 'ملخص',               iconSrc: '/tab-icons/bar-chart-square-03.svg',  sub: [
    { key: 'summary',       labelEn: 'Summary',          labelAr: 'ملخص',          iconSrc: '/tab-icons/bar-chart-square-03.svg'   },
    { key: 'journey',       labelEn: 'User Journey',     labelAr: 'رحلة المستخدم', iconSrc: '/tab-icons/arrow-circle-up-right.svg' },
    { key: 'comments',      labelEn: 'Internal Comments',labelAr: 'تعليقات داخلية', Icon: MessageSquare                            },
  ]},
  { key: 'financing',      labelEn: 'Financing Journey', labelAr: 'رحلة التمويل',        iconSrc: '/tab-icons/briefcase-02.svg',         sub: [] },
  { key: 'billing',        labelEn: 'Billing & Costs',   labelAr: 'الفواتير والتكاليف',  iconSrc: '/tab-icons/receipt.svg',              sub: [
    { key: 'invoices',      labelEn: 'Invoices',         labelAr: 'الفواتير',        Icon: File                                     },
    { key: 'billing',       labelEn: 'Billing',          labelAr: 'الفاتورة',         iconSrc: '/tab-icons/receipt.svg'               },
  ]},
  { key: 'loyalty',        labelEn: 'Loyalty',           labelAr: 'وفاء',                iconSrc: '/tab-icons/gift.svg',                 sub: [
    { key: 'points',        labelEn: 'Points',           labelAr: 'نقاط',            Icon: Banknote                                 },
    { key: 'rewards',       labelEn: 'Rewards',          labelAr: 'المكافآت',         iconSrc: '/tab-icons/gift.svg'                  },
  ]},
  { key: 'security',       labelEn: 'Security & Access', labelAr: 'الأمن والوصول',       iconSrc: '/tab-icons/driver.svg',               sub: [
    { key: 'devices',       labelEn: 'Devices',          labelAr: 'أجهزة',            Icon: Phone                                    },
    { key: 'ip',            labelEn: 'IP Addresses',     labelAr: 'عناوين IP',         Icon: Globe                                    },
    { key: 'logs',          labelEn: 'User Logs',        labelAr: 'سجلات المستخدمين', Icon: List                                     },
  ]},
  { key: 'communications', labelEn: 'Communications',    labelAr: 'الاتصالات',           iconSrc: '/tab-icons/message-dots-circle.svg',  sub: [
    { key: 'notifications', labelEn: 'Notifications',    labelAr: 'إشعارات',          Icon: Bell                                     },
  ]},
];

const STEP_OVERLINES_EN = [
  'Preserved history',
  'Repeatable login',
  '15-day validity',
  'Versioned snapshot',
  'MASDAR & SIMAH',
  'Decision Engine',
  'OTP & IVR',
];

const STEP_OVERLINES_AR = [
  'سجل محفوظ',
  'دخول متكرر',
  'صلاحية ١٥ يومًا',
  'لقطة محفوظة',
  'مصدر وسيمه',
  'محرك القرار',
  'OTP وIVR',
];

const SUB_JOURNEYS = [
  { labelEn: 'Guest registration',  labelAr: 'إنشاء حساب ضيف',  count: '5/5 passed' },
  { labelEn: 'Product search',      labelAr: 'البحث عن المنتجات', count: '4/4 passed' },
  { labelEn: 'Search payment',      labelAr: 'دفع رسوم البحث',   count: '4/4 passed' },
  { labelEn: 'Customer Conversion', labelAr: 'التحويل إلى عميل', count: '10/10 passed' },
];

const DATA_VALIDATION_SUB_STEPS = [
  { labelEn: 'Report validity',     labelAr: 'صحة التقرير',             count: '3/3 passed',  status: 'Passed'      },
  { labelEn: 'MASDR & employment',  labelAr: 'MASDR والتوظيف',          count: '4/6 passed',  status: 'Not started' },
  { labelEn: 'SIMAH credit data',   labelAr: 'بيانات SIMAH الائتمانية', count: '3/6 passed',  status: 'Not started' },
] as const;

const JOURNEYS = [
  { date: 'Jun 27, 2026', status: 'Pending',   descEn: 'Current · New order journey · S-1108 · SIMAH retry pending', descAr: 'حالي · طلب تمويل جديد · S-1108 · إعادة محاولة SIMAH معلقة' },
  { date: 'Jun 27, 2026', status: 'Completed', descEn: 'Closed · Order O-8740 · Completed',                          descAr: 'مغلق · طلب O-8740 · مكتمل' },
] as const;

const DATA_VALIDATION_CP_RANGES = [[0, 1, 2], [3, 4, 5, 6, 7, 8], [9, 10, 11, 12, 13, 14]] as const;

function JourneyContent({ isAr }: { isAr: boolean }) {
  const [selectedStep,          setSelectedStep]          = useState(4);
  const [selectedSubJourney,    setSelectedSubJourney]    = useState(0);
  const [selectedDataValSub,    setSelectedDataValSub]    = useState(0);
  const [expandedCp,            setExpandedCp]            = useState<number | null>(null);
  const step        = JOURNEY_STEPS[selectedStep];
  // "required" = all passed checkpoints + all mandatory checkpoints (regardless of status)
  const requiredCps = step.checkpoints.filter(c => c.status === 'Passed' || c.tag === 'Mandatory');
  const passed      = requiredCps.filter(c => c.status === 'Passed').length;
  const open        = requiredCps.filter(c => c.status !== 'Passed').length;
  const total       = requiredCps.length;
  const progress    = total > 0 ? Math.round((passed / total) * 100) : 0;

  const displayedCheckpoints = selectedStep === 4
    ? DATA_VALIDATION_CP_RANGES[selectedDataValSub].map(i => step.checkpoints[i])
    : step.checkpoints;

  return (
    <div className="flex flex-col">

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
              { color: '#1a1a1a', label: 'Not required' },
            ].map(l => (
              <div key={l.label} className="flex gap-[4px] items-center self-stretch">
                <div className="rounded-[3.5px] size-[7px] shrink-0" style={{ backgroundColor: l.color }} />
                <p className="text-[12px] text-[#717680] whitespace-nowrap leading-[16px] tracking-[0.048px]">{l.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey steps (horizontal) */}
        <div className="flex items-start py-[20px] w-full overflow-x-auto">
          {JOURNEY_STEPS.map((s, i) => {
            const isSel    = i === selectedStep;
            const isPaused = s.status === 'Paused';
            return (
              <React.Fragment key={s.id}>
                {i > 0 && (
                  <div className="flex flex-[1_0_0] h-[48px] items-center justify-center min-w-[24px]">
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
                    <div className="overflow-clip size-[20px] shrink-0">
                      <img alt="" className="block size-full" src={isPaused ? '/journey-icons/state-paused.svg' : '/journey-icons/state-completed.svg'} />
                    </div>
                    <div className={cn('flex flex-col gap-[16px] items-start', isSel ? 'w-[138px]' : 'flex-1 min-w-px')}>
                      <div className="flex flex-col gap-[8px] w-full">
                        <div className="flex gap-[2px] items-start font-bold text-[10px] tracking-[0.05px] leading-[14px] w-full">
                          <span className="text-[#0063f5] whitespace-nowrap">{isAr ? `الخطوة ${i + 1}` : `Step ${i + 1}`}</span>
                          <span className="text-[#a4a7ae] whitespace-nowrap">·</span>
                          <span className="text-[#a4a7ae] flex-1 min-w-px">{isAr ? STEP_OVERLINES_AR[i] : STEP_OVERLINES_EN[i]}</span>
                        </div>
                        <p className="font-bold text-[14px] text-[#202a39] leading-[12.75px] tracking-[0.25px] w-full">
                          {isAr ? s.labelAr : s.labelEn}
                        </p>
                      </div>
                    </div>
                  </div>
                  {isSel && (
                    <div className="pb-[8px]">
                      <p className="text-white text-[10px] font-bold leading-[14px] tracking-[0.05px] whitespace-nowrap">{isAr ? 'الحالي' : 'CURRENT'}</p>
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
                  <p className="text-[14px] font-medium text-[#414651] text-center whitespace-nowrap">4 sub-steps</p>
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
                          <div className="overflow-clip size-[20px] shrink-0">
                            <img alt="" className="block size-full" src={isSjSel ? '/journey-icons/state-completed.svg' : '/journey-icons/state-not-started.svg'} />
                          </div>
                          <div className="flex flex-col gap-[8px] flex-1 min-w-px">
                            <p className="font-bold text-[14px] text-[#202a39] leading-[12.75px] tracking-[0.25px]">{isAr ? sj.labelAr : sj.labelEn}</p>
                            <p className="text-[10px] text-[#697586]">{sj.count}</p>
                          </div>
                        </div>
                      </button>
                    </React.Fragment>
                  );
                })}
              </div>
            )}

            {/* Data Validation sub-steps */}
            {selectedStep === 4 && (
              <div className="flex items-start py-[16px] w-full">
                {DATA_VALIDATION_SUB_STEPS.map((sj, si) => {
                  const isSjSel = si === selectedDataValSub;
                  const isPassed = sj.status === 'Passed';
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
                        onClick={() => { setSelectedDataValSub(si); setExpandedCp(null); }}
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
                          {isPassed ? (
                            <div className="overflow-clip size-[20px] shrink-0">
                              <img alt="" className="block size-full" src="/journey-icons/state-completed.svg" />
                            </div>
                          ) : (
                            <div className="flex items-center py-[8px] shrink-0">
                              <div className="overflow-clip size-[20px] shrink-0">
                                <img alt="" className="block size-full" src="/journey-icons/state-not-started.svg" />
                              </div>
                            </div>
                          )}
                          <div className="flex flex-col gap-[8px] flex-1 min-w-px">
                            <p className="font-bold text-[14px] text-[#202a39] leading-[12.75px] tracking-[0.25px]">{isAr ? sj.labelAr : sj.labelEn}</p>
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
                {selectedStep === 4
                  ? `${isAr ? DATA_VALIDATION_SUB_STEPS[selectedDataValSub].labelAr : DATA_VALIDATION_SUB_STEPS[selectedDataValSub].labelEn} ${isAr ? 'نقاط تحقق' : 'checkpoints'}`
                  : selectedStep === 0
                    ? `${isAr ? SUB_JOURNEYS[selectedSubJourney].labelAr : SUB_JOURNEYS[selectedSubJourney].labelEn} ${isAr ? 'نقاط تحقق' : 'checkpoints'}`
                    : `${isAr ? step.labelAr : step.labelEn} ${isAr ? 'نقاط تحقق' : 'checkpoints'}`}
              </p>
              <div className="bg-[#fafafa] border border-[#e9eaeb] flex items-center px-[12px] py-[4px] rounded-[16px] shrink-0">
                <p className="text-[14px] font-medium text-[#414651] text-center whitespace-nowrap">
                  {selectedStep === 4
                    ? DATA_VALIDATION_CP_RANGES[selectedDataValSub].length
                    : step.checkpoints.length} {isAr ? 'نقاط' : 'checkpoints'}
                </p>
              </div>
            </div>

            {/* Checkpoint list */}
            <div className="flex flex-col gap-[8px] w-full">
              {displayedCheckpoints.map((cp, ci) => {
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
                  cp.status === 'Passed'      ? (isAr ? (cp.noteAr ?? 'مكتمل بنجاح') : (cp.noteEn ?? 'Completed successfully')) :
                  cp.status === 'Paused'      ? (isAr ? (cp.noteAr ?? 'في الانتظار') : (cp.noteEn ?? 'Waiting for action')) :
                                                (isAr ? 'لم يبدأ بعد'              : 'Not started yet');
                return (
                  <div
                    key={ci}
                    className="bg-white border-solid overflow-clip rounded-[9px] w-full"
                    style={isExp
                      ? { borderWidth: '2px', borderInlineStartWidth: '4px', borderColor: '#0063f5' }
                      : { borderWidth: '1px', borderInlineStartWidth: '4px', borderColor: '#e9eaeb', borderInlineStartColor: statusColor }
                    }
                  >
                    {/* Header row */}
                    <button
                      className="flex items-center justify-between p-[12px] ps-[16px] w-full text-start"
                      onClick={() => setExpandedCp(isExp ? null : ci)}
                    >
                      <div className="flex flex-[1_0_0] gap-[22px] items-start min-w-px ps-[8px]">
                        <div className="flex items-center py-[8px] shrink-0">
                          <div className="overflow-clip size-[20px] shrink-0">
                            <img alt="" className="block size-full" src={
                              cp.status === 'Passed'      ? '/journey-icons/state-completed.svg'  :
                              cp.status === 'Paused'      ? '/journey-icons/state-paused.svg'     :
                              cp.status === 'Failed'      ? '/journey-icons/state-error.svg'      :
                                                            '/journey-icons/state-not-started.svg'
                            } />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px whitespace-nowrap">
                          <p className="font-bold text-[8px] text-[#0063f5] uppercase tracking-[0.72px] leading-[12px]">
                            {isAr ? `نقطة التحقق ${ci + 1}` : `CHECKPOINT ${ci + 1}`}
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
                        ) : cp.tag === 'Optional' ? (
                          <div className="bg-[#fafafa] border border-[#e9eaeb] flex items-center px-[8px] py-[2px] rounded-[16px]">
                            <p className="text-[12px] font-medium text-[#697586] whitespace-nowrap">{isAr ? 'اختياري' : 'Optional'}</p>
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
                    {isExp && (
                      <div className="bg-[#f8fafc] border-t border-[#e3e8ef] flex gap-[8px] items-center ps-[64px] pe-[16px] py-[12px] w-full min-h-[57px]">
                        {[
                          { label: isAr ? 'المصدر'         : 'Source',           value: cp.details?.source           ?? '—' },
                          { label: isAr ? 'المحاولات'      : 'Attempts',         value: cp.details ? String(cp.details.attempts) : '—' },
                          { label: isAr ? 'في انتظار'      : 'Waiting on',       value: cp.details?.waitingOn        ?? '—' },
                          { label: isAr ? 'المدة'          : 'Duration',         value: cp.details?.duration         ?? '—' },
                          { label: isAr ? 'المرجع'         : 'Reference',        value: cp.details?.reference        ?? '—' },
                          { label: isAr ? 'نتيجة الأعمال' : 'Business outcome', value: cp.details?.businessOutcome  ?? '—' },
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

            {/* Customer message panel — shown when the selected step is Paused */}
            {step.status === 'Paused' && (
              <div className="bg-[#fffbeb] border border-[#fcd34d] rounded-[9px] p-[16px] w-full flex flex-col gap-[8px]">
                <p className="text-[10px] font-bold text-[#92400e] uppercase tracking-[0.72px] leading-[12px]">
                  {isAr ? 'رسالة العميل' : 'Customer message'}
                </p>
                <p className="text-[14px] text-[#78350f] leading-[20px] tracking-[0.014px]">
                  {isAr
                    ? 'عذرًا! لا نستطيع حاليًا الوصول إلى بياناتك لتأهيلك للعروض التمويلية. لا تقلق، سنحاول مجددًا وسنخطرك فور تأهلك لعروض تمويل مناسبة.'
                    : "Sorry! We are currently unable to access your data to qualify you for financing offers. Don't worry. We'll try again and notify you once you successfully qualify for suitable financing offers."}
                </p>
              </div>
            )}
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
                className="absolute bg-[#0063f5] h-[8px] start-0 rounded-[4px] top-0"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex gap-[4px] items-start w-full">
              {[
                { num: passed, label: isAr ? 'مطلوب اجتياز' : 'Required passed' },
                { num: open,   label: isAr ? 'مطلوب فتح'   : 'Open required'   },
                { num: 0,      label: isAr ? 'الي'           : 'Optional'        },
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
  );
}

// ─── Guest journey ────────────────────────────────────────────────────────────

const GUEST_JOURNEYS = [
  { date: 'Jun 27, 2026', status: 'Pending',   descEn: 'Current · New order journey · S-1108 · SIMAH retry pending', descAr: 'حالي · طلب تمويل جديد · S-1108 · إعادة محاولة SIMAH معلقة' },
  { date: 'Jun 27, 2026', status: 'Completed', descEn: 'Closed · Order O-8740 · Completed',                          descAr: 'مغلق · طلب O-8740 · مكتمل' },
] as const;

function GuestJourneyContent({ isAr }: { isAr: boolean }) {
  const [selectedStep,        setSelectedStep]        = useState(0);
  const [expandedCp,          setExpandedCp]          = useState<number | null>(0);
  const [journeyDropdownOpen, setJourneyDropdownOpen] = useState(false);

  const guestSteps     = GUEST_JOURNEY_STEPS[0].subJourneys!;
  const step           = guestSteps[selectedStep];
  const activeCheckpoints = step.checkpoints;
  const activeLabel    = isAr ? step.labelAr : step.labelEn;
  const requiredCps = activeCheckpoints.filter(c => c.status === 'Passed' || c.tag === 'Mandatory');
  const passed      = requiredCps.filter(c => c.status === 'Passed').length;
  const open        = requiredCps.filter(c => c.status !== 'Passed').length;
  const optional    = activeCheckpoints.filter(c => c.tag === 'Optional').length;
  const total       = requiredCps.length;
  const progress    = total > 0 ? Math.round((passed / total) * 100) : 0;

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
              {isAr ? 'رحلة الضيف' : 'Guest journey'}
            </p>
          </div>
          <div className="flex items-center gap-[8px] shrink-0">
            <div className="bg-[#f5f9ff] border border-[#80b1fa] flex gap-[8px] h-full items-center px-[12px] py-[8px] rounded-[24px] shrink-0">
              <div className="overflow-clip size-[16px] shrink-0">
                <img alt="" className="block size-full" src="/journey-icons/refresh-ccw-02.svg" />
              </div>
              <p className="text-[12px] font-medium text-[#0063f5] whitespace-nowrap">
                {isAr ? 'رحلة طلب جديدة قيد التنفيذ' : 'New order journey in progress'}
              </p>
            </div>
            <div className="relative shrink-0">
              <button
                onClick={() => setJourneyDropdownOpen(v => !v)}
                className="bg-white border border-[#d5d7da] flex gap-[8px] items-center px-[12px] py-[8px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-[250px]"
              >
                <p className="flex-1 min-w-0 text-[16px] text-[#717680] tracking-[0.08px] truncate text-start">
                  {isAr ? 'رحلة طلب جديدة قيد التنفيذ' : 'New order journey in progress'}
                </p>
                <div className="overflow-clip size-[20px] shrink-0 transition-transform duration-200" style={{ transform: journeyDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <img alt="" className="block size-full" src="/journey-icons/chevron-down.svg" />
                </div>
              </button>
              {journeyDropdownOpen && (
                <div className="absolute top-[calc(100%+4px)] left-0 bg-white border border-[#e3e8f1] rounded-[8px] shadow-[0px_8px_24px_0px_rgba(16,24,40,0.12)] z-20 w-[420px] overflow-hidden">
                  {GUEST_JOURNEYS.map((j, ji) => (
                    <button
                      key={ji}
                      className="flex items-center gap-[10px] px-[14px] py-[12px] text-start w-full hover:bg-[#f8fafc] transition-colors border-b border-[#f0f2f5] last:border-b-0"
                      onClick={() => setJourneyDropdownOpen(false)}
                    >
                      <div className="overflow-clip size-[16px] shrink-0">
                        <img alt="" className="block size-full" src="/journey-icons/calendar.svg" />
                      </div>
                      <span className="text-[13px] text-[#697586] whitespace-nowrap shrink-0">{j.date}</span>
                      <span className={cn(
                        'px-[8px] py-[2px] rounded-[16px] text-[12px] font-medium whitespace-nowrap shrink-0 border',
                        j.status === 'Pending'
                          ? 'bg-[#fffaeb] border-[#fedf89] text-[#b54708]'
                          : 'bg-[#ecfdf3] border-[#abefc6] text-[#067647]'
                      )}>{j.status}</span>
                      <span className="text-[13px] text-[#121a26] flex-1 min-w-0 truncate">{isAr ? j.descAr : j.descEn}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="border border-[#aacbfc] bg-white flex gap-[4px] items-center justify-center px-[14px] py-[10px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] min-w-[120px]">
              <p className="text-[14px] font-medium text-[#0063f5] leading-[20px] tracking-[0.014px] whitespace-nowrap">
                {isAr ? 'الذهاب للخطوة الحالية' : 'Go to current step'}
              </p>
              <div className="overflow-clip size-[20px] shrink-0" style={{ transform: isAr ? 'scaleX(-1)' : undefined }}>
                <img alt="" className="block size-full" src="/journey-icons/arrow-right.svg" />
              </div>
            </button>
          </div>
        </div>

        {/* Current stop bar */}
        <div className="bg-white border border-[#d5d7da] border-s-[#b54708] rounded-[9px] w-full overflow-clip" style={{ borderInlineStartWidth: 4 }}>
          <div className="flex items-center justify-between p-[12px] ps-[16px]">
            <div className="flex gap-[12px] items-center flex-1 min-w-0">
              <div className="bg-[#0063f5] flex items-center justify-center p-[8px] rounded-[8px] shrink-0">
                <div className="overflow-clip size-[24px]">
                  <img alt="" className="block size-full" src="/journey-icons/search-refraction.svg" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start flex-1 min-w-0 font-bold whitespace-nowrap">
                <p className="text-[8px] text-[#0063f5] uppercase tracking-[0.72px] leading-[12px]">
                  {isAr ? 'التوقف الحالي' : 'Current stop'}
                </p>
                <p className="text-[16px] text-[#121a26] leading-[16.5px] tracking-[0.25px]">
                  {isAr ? 'البحث عن المنتجات · بدأ البحث' : 'Product search · Search started'}
                </p>
              </div>
            </div>
            <div className="flex gap-[24px] items-center h-[49px] px-[12px] py-[8px] flex-1 min-w-0 justify-end">
              <div className="flex flex-col gap-[4px] h-full items-start justify-center shrink-0" style={{ width: 47 }}>
                <p className="text-[10px] text-[#697586] leading-[10.5px] tracking-[0.25px] w-full">{isAr ? 'الحالة' : 'Status'}</p>
                <p className="text-[12.5px] font-medium text-[#121a26] leading-[18px] tracking-[0.5px] w-full">{isAr ? 'موقوف' : 'Paused'}</p>
              </div>
              <div className="flex flex-col gap-[4px] h-full items-start justify-center shrink-0">
                <p className="text-[10px] text-[#697586] leading-[10.5px] tracking-[0.25px] w-full">{isAr ? 'في انتظار' : 'Waiting on'}</p>
                <p className="text-[12.5px] font-medium text-[#121a26] leading-[18px] tracking-[0.5px] w-full">{isAr ? 'العميل' : 'Customer'}</p>
              </div>
              <div className="flex flex-col gap-[4px] h-full items-start justify-center shrink-0">
                <p className="text-[10px] text-[#697586] leading-[10.5px] tracking-[0.25px] w-full">{isAr ? 'المرجع' : 'Reference'}</p>
                <p className="text-[12.5px] font-medium text-[#121a26] leading-[18px] tracking-[0.5px] w-full">O-8821</p>
              </div>
              <div className="flex flex-col gap-[4px] h-full items-start justify-center shrink-0" style={{ width: 174 }}>
                <p className="text-[10px] text-[#697586] leading-[10.5px] tracking-[0.25px] w-full">{isAr ? 'آخر تحديث' : 'Last update'}</p>
                <p className="text-[12.5px] font-medium text-[#121a26] leading-[18px] tracking-[0.5px] w-full whitespace-nowrap">Waiting since Jul 11 · 10:31</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content below banner ─────────────────────────────────── */}
      <div className="p-[8px] flex flex-col">

        {/* Title row */}
        <div className="flex items-center justify-between pt-[16px] w-full">
          <p className="text-[25px] font-medium text-[#15212f] leading-[32px] flex-1 min-w-0">
            {isAr ? 'رحلة الضيف' : 'Guest journey'}
          </p>
          <div className="flex gap-[16px] h-[16px] items-start shrink-0">
            {[
              { color: '#079455', label: 'Passed' },
              { color: '#f79009', label: 'Paused' },
              { color: '#d92d20', label: 'Failed' },
              { color: '#a4a7ae', label: 'Not started' },
              { color: '#1a1a1a', label: 'Not required' },
            ].map(l => (
              <div key={l.label} className="flex gap-[4px] items-center self-stretch">
                <div className="rounded-[3.5px] size-[7px] shrink-0" style={{ backgroundColor: l.color }} />
                <p className="text-[12px] text-[#717680] whitespace-nowrap leading-[16px] tracking-[0.048px]">{l.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey steps (horizontal) */}
        <div className="flex items-start py-[20px] w-full overflow-x-auto">
          {guestSteps.map((s, i) => {
            const isSel = i === selectedStep;
            return (
              <React.Fragment key={s.id}>
                {i > 0 && (
                  <div className="flex w-[24px] h-[48px] items-center justify-center shrink-0">
                    <div className="flex-1 h-0 relative">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src="/journey-icons/line.svg" />
                      </div>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => { setSelectedStep(i); setExpandedCp(null); }}
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
                    <div className="overflow-clip size-[20px] shrink-0">
                      <img alt="" className="block size-full" src={
                        s.status === 'Passed'      ? '/journey-icons/state-completed.svg'  :
                        s.status === 'Paused'      ? '/journey-icons/state-paused.svg'     :
                        s.status === 'Failed'      ? '/journey-icons/state-error.svg'      :
                                                     '/journey-icons/state-not-started.svg'
                      } />
                    </div>
                    <div className={cn('flex flex-col gap-[16px] items-start', isSel ? 'w-[138px]' : 'flex-1 min-w-px')}>
                      <div className="flex flex-col gap-[8px] w-full">
                        <div className="flex gap-[2px] items-start font-bold text-[10px] tracking-[0.05px] leading-[14px] w-full">
                          <span className="text-[#0063f5] whitespace-nowrap">{isAr ? `الخطوة ${i + 1}` : `Step ${i + 1}`}</span>
                          <span className="text-[#a4a7ae] whitespace-nowrap">·</span>
                          <span className="text-[#a4a7ae] flex-1 min-w-px">{isAr ? s.overlineAr : s.overlineEn}</span>
                        </div>
                        <p className="font-bold text-[14px] text-[#202a39] leading-[12.75px] tracking-[0.25px] w-full">
                          {isAr ? s.labelAr : s.labelEn}
                        </p>
                      </div>
                    </div>
                  </div>
                  {isSel && (
                    <div className="pb-[8px]">
                      <p className="text-white text-[10px] font-bold leading-[14px] tracking-[0.05px] whitespace-nowrap">{isAr ? 'الحالي' : 'CURRENT'}</p>
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
            </div>

            {activeCheckpoints.length > 0 ? (
              <>
                {/* Checkpoints header */}
                <div className="flex items-center gap-[8px] w-full">
                  <p className="text-[20px] text-[#15212f] leading-[32px] tracking-[0px] flex-1 min-w-0">
                    {`${activeLabel} ${isAr ? 'نقاط تحقق' : 'checkpoints'}`}
                  </p>
                  <div className="bg-[#fafafa] border border-[#e9eaeb] flex items-center px-[12px] py-[4px] rounded-[16px] shrink-0">
                    <p className="text-[14px] font-medium text-[#414651] text-center whitespace-nowrap">
                      {activeCheckpoints.length} {isAr ? 'نقاط' : 'checkpoints'}
                    </p>
                  </div>
                </div>

                {/* Checkpoint list */}
                <div className="flex flex-col gap-[8px] w-full">
                  {activeCheckpoints.map((cp, ci) => {
                    const isExp = expandedCp === ci;
                    const statusColor =
                      cp.status === 'Passed' ? '#079455' :
                      cp.status === 'Paused' ? '#ca7404' :
                      cp.status === 'Failed' ? '#d92d20' : '#e9eaeb';
                    const statusLabel =
                      cp.status === 'Passed'      ? (isAr ? 'مكتمل'   : 'Passed')      :
                      cp.status === 'Paused'      ? (isAr ? 'موقوف'   : 'Paused')      :
                      cp.status === 'Failed'      ? (isAr ? 'فشل'     : 'Failed')      :
                                                    (isAr ? 'لم يبدأ' : 'Not started');
                    const detailNote =
                      cp.status === 'Passed' ? (isAr ? (cp.noteAr ?? 'مكتمل بنجاح') : (cp.noteEn ?? 'Completed successfully')) :
                      cp.status === 'Paused' ? (isAr ? (cp.noteAr ?? 'في الانتظار') : (cp.noteEn ?? 'Waiting for action')) :
                                               (isAr ? 'لم يبدأ بعد' : 'Not started yet');
                    return (
                      <div
                        key={ci}
                        className="bg-white border-solid overflow-clip rounded-[9px] w-full"
                        style={isExp
                          ? { borderWidth: '2px', borderInlineStartWidth: '4px', borderColor: '#0063f5' }
                          : { borderWidth: '1px', borderInlineStartWidth: '4px', borderColor: '#e9eaeb', borderInlineStartColor: statusColor }
                        }
                      >
                        {/* Header row */}
                        <button
                          className="flex items-center justify-between p-[12px] ps-[16px] w-full text-start"
                          onClick={() => setExpandedCp(isExp ? null : ci)}
                        >
                          <div className="flex flex-[1_0_0] gap-[22px] items-start min-w-px ps-[8px]">
                            <div className="flex items-center py-[8px] shrink-0">
                              <div className="overflow-clip size-[20px] shrink-0">
                                <img alt="" className="block size-full" src={
                                  cp.status === 'Passed'      ? '/journey-icons/state-completed.svg'  :
                                  cp.status === 'Paused'      ? '/journey-icons/state-paused.svg'     :
                                  cp.status === 'Failed'      ? '/journey-icons/state-error.svg'      :
                                                                '/journey-icons/state-not-started.svg'
                                } />
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px whitespace-nowrap">
                              <p className="font-bold text-[8px] text-[#0063f5] uppercase tracking-[0.72px] leading-[12px]">
                                {isAr ? `نقطة التحقق ${ci + 1}` : `CHECKPOINT ${ci + 1}`}
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
                            ) : cp.tag === 'Optional' ? (
                              <div className="bg-[#fafafa] border border-[#e9eaeb] flex items-center px-[8px] py-[2px] rounded-[16px]">
                                <p className="text-[12px] font-medium text-[#697586] whitespace-nowrap">{isAr ? 'اختياري' : 'Optional'}</p>
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

                        {/* Expanded detail */}
                        {isExp && (
                          <div className="bg-[#f8fafc] border-t border-[#e3e8ef] flex gap-[8px] items-center ps-[64px] pe-[16px] py-[12px] w-full min-h-[57px]">
                            {[
                              { label: isAr ? 'المصدر'         : 'Source',           value: cp.details?.source           ?? '—' },
                              { label: isAr ? 'المحاولات'      : 'Attempts',         value: cp.details ? String(cp.details.attempts) : '—' },
                              { label: isAr ? 'في انتظار'      : 'Waiting on',       value: cp.details?.waitingOn        ?? '—' },
                              { label: isAr ? 'المدة'          : 'Duration',         value: cp.details?.duration         ?? '—' },
                              { label: isAr ? 'المرجع'         : 'Reference',        value: cp.details?.reference        ?? '—' },
                              { label: isAr ? 'نتيجة الأعمال' : 'Business outcome', value: cp.details?.businessOutcome  ?? '—' },
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
              </>
            ) : (
              <div className="flex items-center justify-center py-8 w-full text-[#697586] text-sm">
                {isAr ? 'لا توجد نقاط تحقق لهذه الخطوة بعد' : 'No checkpoints for this step yet'}
              </div>
            )}
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
                className="absolute bg-[#0063f5] h-[8px] start-0 rounded-[4px] top-0"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex gap-[4px] items-start w-full">
              {[
                { num: passed,   label: isAr ? 'مطلوب اجتياز' : 'Required passed' },
                { num: open,     label: isAr ? 'مطلوب فتح'    : 'Open required'   },
                { num: optional, label: isAr ? 'اختياري'       : 'Optional'        },
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

export default function CustomerDetailPage({ profileId, forceLang, listPath = '/cps-official', isProvider = false }: { profileId: string; forceLang?: 'en' | 'ar'; listPath?: string; isProvider?: boolean }) {
  const { lang } = useLang();
  const isAr = (forceLang ?? lang) === 'ar';

  const profile = PROFILES.find(p => p.id === profileId) ?? PROFILES[0];
  const assignedInitials = profile.assignedName.split(' ').map(n => n[0]).join('').slice(0, 2);
  const isGuest = profile.type === 'Guest';
  const activeTabs = isGuest ? GUEST_TABS : isProvider ? PROVIDER_TABS : CUSTOMER_TABS;

  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeSubTab,  setActiveSubTab]  = useState(isProvider ? 0 : 1);
  const [showSwitcher, setShowSwitcher] = useState(false);

  const activeSubTabKey = activeTabs[activeMainTab]?.sub[activeSubTab]?.key ?? '';
  const isJourneyTab = activeMainTab === 0 && activeSubTabKey === 'journey';

  return (
    <div className="h-screen bg-[#f8fafc] flex flex-col dark:bg-slate-950" dir={isAr ? 'rtl' : 'ltr'}>
      <Topbar onProfileClick={() => setShowSwitcher(true)} />
      {showSwitcher && <ViewSwitcherModal onClose={() => setShowSwitcher(false)} />}

      <div className="flex-1 overflow-y-auto">

        {/* Page header bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#eef1f6] bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="text-[12px] text-[#697586]">{isAr ? 'معرف المستخدم' : 'User ID'}</span>
            <span className="text-[18px] font-semibold text-[#202a39] leading-[28px] tracking-[0.027px]">{profile.id}</span>
          </div>
          <Link
            href={listPath}
            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white border border-[#fda29b] text-[#d92d20] text-[14px] font-medium hover:bg-[#fef3f2] transition-colors shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
          >
            <ArrowLeft className="w-4 h-4" style={{ transform: isAr ? 'scaleX(-1)' : undefined }} />
            {isAr ? 'خلف' : 'Back'}
          </Link>
        </div>

        {/* Profile header */}
        <div className="flex items-stretch gap-3 px-6 py-4 border-b border-[#eef1f6] bg-white">
          {/* Avatar + name + status + actions */}
          <div className="bg-white border border-[#eef1f6] rounded-[6px] flex-[1_0_0] min-w-0">
            <div className="flex gap-[24px] items-center p-[16px] h-full">
              <div className="w-[100px] h-[100px] rounded-full bg-[#eaf2ff] border border-[#aacbfc] flex items-center justify-center text-2xl font-semibold text-[#0053cc] shrink-0">
                {profile.initials}
              </div>
              <div className="flex flex-col gap-[24px] flex-1 min-w-0 h-full justify-center">
                <div className="flex flex-col gap-[12px] items-start">
                  <span className="text-[18px] font-semibold text-[#1e2228] leading-[28px] tracking-[0.027px] truncate">{isAr ? profile.nameAr : profile.name}</span>
                  <div className="flex gap-[12px] items-center">
                    <span className="px-4 py-[4px] rounded-full bg-[#ecfdf3] border border-[#12b76a] text-[#12b76a] text-[14px] font-medium leading-[24px] whitespace-nowrap">
                      {isAr ? 'نشيط' : 'Active'}
                    </span>
                    <button className="flex items-center gap-[4px] px-[12px] py-[8px] rounded-[8px] border border-[#80b1fa] bg-white text-[#0053cc] text-[14px] font-medium min-w-[120px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] whitespace-nowrap">
                      {isAr ? 'إرسال رسالة' : 'Send Message'}
                      <div className="overflow-clip size-[20px] shrink-0" style={{ transform: isAr ? 'scaleX(-1)' : undefined }}>
                        <img alt="" className="block size-full" src="/journey-icons/arrow-right.svg" />
                      </div>
                    </button>
                  </div>
                </div>
                {!isProvider && (
                  <div className="flex gap-[12px] items-start">
                    <button className="flex items-center gap-[4px] px-[16px] py-[8px] rounded-[8px] border border-[#fda29b] bg-white text-[#b42318] text-[14px] font-medium min-w-[120px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] whitespace-nowrap">
                      <div className="overflow-clip size-[20px] shrink-0">
                        <img alt="" className="block size-full" src="/tab-icons/profile-delete.svg" />
                      </div>
                      {isAr ? 'إلغاء التنشيط' : 'Deactivate'}
                    </button>
                    <button className="flex items-center gap-[4px] px-[16px] py-[8px] rounded-[8px] border border-[#fda29b] bg-white text-[#b42318] text-[14px] font-medium min-w-[120px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] whitespace-nowrap">
                      <div className="overflow-clip size-[20px] shrink-0">
                        <img alt="" className="block size-full" src="/tab-icons/shield-cross.svg" />
                      </div>
                      {isAr ? 'تعليق' : 'Suspend'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ID fields */}
          <div className="flex gap-[12px] items-stretch flex-1 min-w-0">
            {isProvider ? (
              <>
                <div className="border border-[#eef1f6] rounded-[6px] bg-white flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex items-start justify-between px-4 py-2.5">
                    <span className="text-xs text-[#667085] w-[110px] shrink-0">NIN</span>
                    <span className="text-sm font-medium text-[#1e2228] text-end">{profile.nationalId}</span>
                  </div>
                </div>
                <div className="border border-[#eef1f6] rounded-[6px] bg-white flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex items-start justify-between px-4 py-2.5">
                    <span className="text-xs text-[#667085] w-[110px] shrink-0">{isAr ? 'جنسية' : 'Nationality'}</span>
                    <span className="text-sm font-medium text-[#1e2228] text-end">{profile.country}</span>
                  </div>
                  <div className="flex items-start justify-between px-4 py-2.5 bg-[#f9fbfc]">
                    <span className="text-xs text-[#667085] w-[110px] shrink-0">DOB</span>
                    <span className="text-sm font-medium text-[#1e2228] text-end">{profile.dob ?? '—'}</span>
                  </div>
                  <div className="flex items-start justify-between px-4 py-2.5">
                    <span className="text-xs text-[#667085] w-[110px] shrink-0">{isAr ? 'النوع' : 'Gender'}</span>
                    <span className="text-sm font-medium text-[#1e2228] text-end">{profile.gender ?? '—'}</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="border border-[#eef1f6] rounded-[6px] bg-white flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex items-start justify-between px-4 py-2.5">
                    <span className="text-xs text-[#667085] w-[110px] shrink-0">{isAr ? 'الهوية / الإقامة' : 'NIN'}</span>
                    <span className="text-sm font-medium text-[#1e2228] text-end">{profile.nationalId}</span>
                  </div>
                  <div className="flex items-start justify-between px-4 py-2.5 bg-[#f9fbfc]">
                    <span className="text-xs text-[#667085] w-[110px] shrink-0">{isAr ? 'رقم الجوال' : 'Mobile No.'}</span>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-[#1e2228] text-end min-w-0"><span className="truncate">{profile.phone}</span><Eye className="w-[14px] h-[14px] text-[#98a2b3] shrink-0" /></span>
                  </div>
                  <div className="flex items-start justify-between px-4 py-2.5">
                    <span className="text-xs text-[#667085] w-[110px] shrink-0">{isAr ? 'البريد الإلكتروني' : 'Email'}</span>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-[#1e2228] text-end min-w-0"><span className="truncate">{profile.email ?? '—'}</span><Eye className="w-[14px] h-[14px] text-[#98a2b3] shrink-0" /></span>
                  </div>
                </div>
                <div className="border border-[#eef1f6] rounded-[6px] bg-white flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex items-start justify-between px-4 py-2.5">
                    <span className="text-xs text-[#667085] w-[110px] shrink-0">{isAr ? 'الجنسية' : 'Nationality'}</span>
                    <span className="text-sm font-medium text-[#1e2228] text-end">{isAr ? 'المملكة العربية السعودية' : profile.country}</span>
                  </div>
                  <div className="flex items-start justify-between px-4 py-2.5 bg-[#f9fbfc]">
                    <span className="text-xs text-[#667085] w-[110px] shrink-0">DOB</span>
                    <span className="text-sm font-medium text-[#1e2228] text-end">{profile.dob ?? '—'}</span>
                  </div>
                  <div className="flex items-start justify-between px-4 py-2.5">
                    <span className="text-xs text-[#667085] w-[110px] shrink-0">{isAr ? 'النوع' : 'Gender'}</span>
                    <span className="text-sm font-medium text-[#1e2228] text-end">{profile.gender ?? '—'}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* AML — customers only */}
          {!isGuest && (
            <div className="bg-white border border-[#eef1f6] rounded-[6px] flex flex-col items-center justify-between p-[24px] h-[180px] shrink-0">
              <div className="flex flex-col items-center gap-[4px]">
                <span className="text-[12px] text-[#7d89a3] leading-[18px] whitespace-nowrap">{isAr ? 'درجة AML' : 'AML Score'}</span>
                <span className="text-[32px] font-bold text-[#1e2228] leading-[40px]">86<span className="text-[25px] leading-[32px]">%</span></span>
              </div>
              <div className="flex flex-col items-center gap-[8px]">
                <span className="text-[12px] text-[#7d89a3] leading-[18px] whitespace-nowrap">{isAr ? 'حالة AML' : 'AML Status'}</span>
                <span className="px-[20px] py-[4px] rounded-full bg-[#ecfdf3] border border-[#12b76a] text-[#12b76a] text-[14px] font-medium whitespace-nowrap">
                  {isAr ? 'اجتاز' : 'Passed'}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-[8px] px-6 py-4 border-b border-[#e2e3e4] bg-white">
          <div className="flex items-center gap-[12px] flex-1 min-w-0">
            <div className="overflow-clip size-[24px] shrink-0">
              <img alt="" className="block size-full" src="/tab-icons/arrow-circle-up-right.svg" />
            </div>
            <span className="text-[18px] font-semibold text-[#15212f] leading-[28px] tracking-[0.027px]">
              {isAr ? 'رحلة العميل' : 'Customer journey'}
            </span>
          </div>
          <div className="flex items-center gap-[8px] shrink-0">
            <button className="flex items-center gap-[4px] px-[14px] py-[10px] rounded-[8px] border border-[#d5d7da] bg-white text-[14px] font-medium text-[#414651] min-w-[120px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] whitespace-nowrap">
              {isAr ? 'S-1108 · إعادة محاولة SIMAH معلقة' : 'S-1108 · SIMAH retry pending'}
              <div className="overflow-clip size-[20px] shrink-0">
                <img alt="" className="block size-full" src="/journey-icons/chevron-down.svg" />
              </div>
            </button>
            <button className="flex items-center gap-[4px] px-[14px] py-[10px] rounded-[8px] border border-[#cce0fd] bg-white text-[14px] font-medium text-[#0042a3] min-w-[120px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] whitespace-nowrap" style={{ transform: isAr ? 'scaleX(-1)' : undefined }}>
              {isAr ? 'الانتقال للخطوة الحالية' : 'Go to current step'}
              <div className="overflow-clip size-[20px] shrink-0">
                <img alt="" className="block size-full" src="/journey-icons/arrow-right.svg" />
              </div>
            </button>
          </div>
        </div>

        {/* Main tabs */}
        <div className="bg-white border-b border-[#e2e3e4] h-[57px]">
          <div className="flex h-full px-6 overflow-x-auto scrollbar-none">
            {activeTabs.map((tab, i) => (
              <button
                key={tab.key}
                onClick={() => { setActiveMainTab(i); setActiveSubTab(0); }}
                className={cn(
                  'flex items-center gap-2 px-6 text-[14px] font-medium whitespace-nowrap transition-colors text-[#202a39]',
                  i === activeMainTab
                    ? 'h-full mb-[-1px] border-t border-l border-r border-[#e2e3e4] rounded-tl-[6px] rounded-tr-[6px] bg-white'
                    : 'h-[53px] self-end hover:bg-[#f8fafc] rounded-t-[6px]'
                )}
              >
                <img src={tab.iconSrc} alt="" className="w-6 h-6 shrink-0" />
                {isAr ? tab.labelAr : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Sub-tabs row */}
        {activeTabs[activeMainTab].sub.length > 0 && (
          <div className="bg-white border-b border-[#e2e3e4] px-6 py-[14px] shrink-0">
            <div className="flex isolate rounded-lg overflow-hidden border border-[#d5d7da] self-start">
              {activeTabs[activeMainTab].sub.map((subTab, i) => {
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
                    {subTab.iconSrc
                      ? <img src={subTab.iconSrc} alt="" className="w-4 h-4 shrink-0" />
                      : SubIcon ? <SubIcon className="w-4 h-4 shrink-0" /> : null
                    }
                    {isAr ? subTab.labelAr : subTab.labelEn}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Page content */}
        <div className="flex gap-6 px-6 py-5">

          {/* Left column */}
          <div className="flex-1 min-w-0 flex flex-col gap-5">

            {/* Journey or tab page content */}
            {isJourneyTab ? (
              isProvider
                ? <ProviderJourneyContent isAr={isAr} />
                : isGuest
                  ? <GuestJourneyContent isAr={isAr} />
                  : <JourneyContent isAr={isAr} />
            ) : (
              <TabPageContent
                mainTabKey={activeTabs[activeMainTab].key}
                subTabKey={activeSubTabKey}
                isAr={isAr}
                profile={profile}
              />
            )}
          </div>

          {activeMainTab === 0 && activeSubTabKey === 'summary' && !isGuest && (
            <div className="flex flex-col gap-[8px] items-start w-[250px] shrink-0">
              <div className="bg-white border border-[#e9eaeb] rounded-[12px] w-full">
                <div className="flex flex-col gap-[16px] items-start p-[17px]">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[17.5px] font-bold text-[#181d27] leading-[26px] tracking-[0.1px] whitespace-nowrap">
                      {isAr ? 'التعيين' : 'Assignment'}
                    </span>
                    <button className="border border-[#cce0fd] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] p-[8px] bg-white">
                      <div className="overflow-clip size-[20px]">
                        <img alt="" className="block size-full" src="/tab-icons/edit-05.svg" />
                      </div>
                    </button>
                  </div>
                  <div className="bg-[#fafafa] border border-[#e9eaeb] rounded-[9px] w-full">
                    <div className="flex gap-[9px] items-center p-[13px]">
                      <div className="bg-[#eaf2ff] rounded-full size-[36px] flex items-center justify-center shrink-0">
                        <span className="text-[11px] font-bold text-[#0063f5]">NA</span>
                      </div>
                      <div className="flex flex-col whitespace-nowrap">
                        <span className="text-[14px] font-medium text-[#181d27] leading-[24px] tracking-[0.0336px]">Noura Alqahtani</span>
                        <span className="text-[10px] font-bold text-[#a4a7ae] leading-[14px] tracking-[0.05px]">Customer Success</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-[#f5f5f5] pt-[13px] w-full flex flex-col gap-[2px]">
                    <span className="text-[10px] font-bold text-[#717680] leading-[14px] tracking-[0.05px] whitespace-nowrap">Latest assignment change</span>
                    <span className="text-[10px] font-bold text-[#181d27] leading-[14px] tracking-[0.05px] whitespace-nowrap">System queue → Noura Alqahtani</span>
                    <span className="text-[10px] font-bold text-[#717680] leading-[14px] tracking-[0.05px] whitespace-nowrap">Jul 25, 2026 · 09:30</span>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e9eaeb] rounded-[12px] w-full">
                <div className="flex flex-col gap-[16px] items-start p-[17px]">
                  <div className="flex gap-[8px] items-center w-full">
                    <span className="text-[18px] font-semibold text-[#181d27] leading-[28px] tracking-[0.027px] flex-1 min-w-0">
                      {isAr ? 'تعليقات داخلية' : 'Internal comments'}
                    </span>
                    <button className="border border-[#cce0fd] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white flex items-center gap-[8px] px-[12px] py-[8px]">
                      <span className="text-[14px] font-medium text-[#0042a3] leading-[20px] tracking-[0.014px]">3</span>
                      <div className="overflow-clip size-[20px]">
                        <img alt="" className="block size-full" src="/tab-icons/square-arrow-out-up-right.svg" />
                      </div>
                    </button>
                  </div>
                  <div className="flex gap-[9px] items-start w-full">
                    <div className="bg-[#eaf2ff] rounded-full size-[25px] flex items-center justify-center shrink-0 mt-[2px]">
                      <span className="text-[8px] font-bold text-[#0063f5]">NA</span>
                    </div>
                    <div className="flex flex-col gap-[8px] flex-1 min-w-0">
                      <div className="flex flex-col gap-[4px]">
                        <span className="text-[14px] font-medium text-[#181d27] leading-[24px] tracking-[0.0336px]">Noura Alqahtani</span>
                        <span className="text-[12px] text-[#535862] leading-[14px] tracking-[0.05px]">Identity checks complete. Waiting for the next customer action.</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#a4a7ae] leading-[14px] tracking-[0.05px] whitespace-nowrap">Yesterday · 14:26</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
