'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Topbar from '@/components/orders/Topbar';
import CardFooter from '@/components/orders/CardFooter';
import { Card, CardContent, CardFooter as CardFooterSlot } from '@/components/ui/card';
import { useLang } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { PROFILES, ACTIVITY_LOG, type Profile } from './cps-data';
import {
  Users, UserCircle, Smile, Info,
  BarChart2,
  Search, ChevronDown, X,
  MapPin, Mail, Briefcase, ChevronsLeft, Phone,
  Check, Calendar, Pencil, MessageSquare, ArrowRight,
  Banknote, Building2, Building, Landmark, ArrowRightCircle,
  Gift, Shield, Receipt, FileSearch, ClipboardMinus, ArrowUpCircle,
  File, Globe, List, Bell, CreditCard, ClipboardList, CheckCircle2,
} from 'lucide-react';
import ViewSwitcherModal from './ViewSwitcherModal';
import InternalSidebar from './InternalSidebar';
import ProviderSidebar from './ProviderSidebar';

function FilterMixerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 19.697 16.6667" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.818 1.515a2.273 2.273 0 1 0 0 4.546 2.273 2.273 0 0 0 0-4.546zM3.03 4.545a3.788 3.788 0 0 0 7.502 0H18.94a.758.758 0 0 0 0-1.515H10.53A3.788 3.788 0 0 0 3.106 3.034a.758.758 0 0 0-.076-.003H.758a.758.758 0 0 0 0 1.515H3.03zm13.562 9.088a3.788 3.788 0 0 1-7.502 0H.758a.758.758 0 0 1 0-1.515h8.334a3.788 3.788 0 0 1 7.502 0h2.346a.758.758 0 0 1 0 1.515h-2.348zm-1.44-.757a2.273 2.273 0 1 1-4.546 0 2.273 2.273 0 0 1 4.546 0z" fill="currentColor"/>
    </svg>
  );
}

function ExportIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M13 11L21.2 2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 6.8V2H17.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

type Tab = 'all' | 'customers' | 'guests';


const kpis = [
  {
    label: { en: 'All profiles', ar: 'جميع الملفات' },
    value: '24,860',
    sub: { en: '+6.2% this month', ar: '+٦.٢٪ هذا الشهر' },
    bg: 'bg-[#ffdd33]',
    border: 'border-[#d8b400]',
    iconBg: 'border border-[#d8b400]',
    icon: Users,
    iconColor: 'text-[#7a6400]',
    labelColor: 'text-[#4b5565]',
    valueColor: 'text-[#121a26]',
    subColor: 'text-[#4b5565]',
  },
  {
    label: { en: 'Customers', ar: 'العملاء' },
    value: '18,420',
    sub: { en: '74% of all profiles', ar: '٧٤٪ من جميع الملفات' },
    bg: 'bg-[#0063f5]',
    border: 'border-[#77a6ed]',
    iconBg: 'border border-[#77a6ed]',
    icon: UserCircle,
    iconColor: 'text-white',
    labelColor: 'text-[#bbd5fb]',
    valueColor: 'text-white',
    subColor: 'text-[#bbd5fb]',
  },
  {
    label: { en: 'Guests', ar: 'الضيوف' },
    value: '6,440',
    sub: { en: '1,284 with interest', ar: '١٬٢٨٤ مع اهتمام' },
    bg: 'bg-white dark:bg-slate-900',
    border: 'border-[#eef1f6] dark:border-slate-700',
    iconBg: 'bg-[#f8fafc] dark:bg-slate-800',
    icon: Smile,
    iconColor: 'text-[#697586] dark:text-slate-400',
    labelColor: 'text-[#697586] dark:text-slate-400',
    valueColor: 'text-[#121a26] dark:text-slate-100',
    subColor: 'text-[#697586] dark:text-slate-400',
  },
  {
    label: { en: 'Need attention', ar: 'تحتاج اهتماماً' },
    value: '312',
    sub: { en: 'Action required', ar: '٨٩ غير مخصصة حاليًا' },
    bg: 'bg-white dark:bg-slate-900',
    border: 'border-[#eef1f6] dark:border-slate-700',
    iconBg: 'bg-[#f8fafc] dark:bg-slate-800',
    icon: Info,
    iconColor: 'text-[#697586] dark:text-slate-400',
    labelColor: 'text-[#697586] dark:text-slate-400',
    valueColor: 'text-[#121a26] dark:text-slate-100',
    subColor: 'text-[#697586] dark:text-slate-400',
  },
];

const TABS: { key: Tab; label: { en: string; ar: string } }[] = [
  { key: 'all',       label: { en: 'All profiles', ar: 'جميع الملفات' } },
  { key: 'customers', label: { en: 'Customers',    ar: 'العملاء' } },
  { key: 'guests',    label: { en: 'Guests',        ar: 'الضيوف' } },
];

function JourneyBadge({ result, isAr }: { result: Profile['journeyResult']; isAr?: boolean }) {
  if (result === 'Passed')  return <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#ecfdf3] border border-[#abefc6] text-[#067647] text-xs font-medium"><Check className="w-3 h-3" />{isAr ? 'اجتاز' : 'Passed'}</span>;
  if (result === 'Failed')  return <span className="inline-flex px-3 py-0.5 rounded-full bg-[#fef3f2] border border-[#fecdca] text-[#b42318] text-xs font-medium">{isAr ? 'فشل' : 'Failed'}</span>;
  return <span className="inline-flex px-3 py-0.5 rounded-full bg-[#fffaeb] border border-[#fedf89] text-[#b54708] text-xs font-medium">{isAr ? 'قيد الانتظار' : 'Pending'}</span>;
}

function RecordBadge({ type, isAr }: { type: Profile['type']; isAr?: boolean }) {
  if (type === 'Customer') return <span className="px-3 py-0.5 rounded-full bg-[#eaf2ff] border border-[#aacbfc] text-[#0053cc] text-xs font-medium">{isAr ? 'عميل' : 'Customer'}</span>;
  return <span className="px-3 py-0.5 rounded-full bg-[#fffaeb] border border-[#fedf89] text-[#b54708] text-xs font-medium">{isAr ? 'ضيف' : 'Guest'}</span>;
}

function StageBadge({ stage, subStage }: { stage: string; subStage: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="self-start px-3 py-0.5 rounded-full bg-[#fffaeb] border border-[#fedf89] text-[#b54708] text-xs font-medium">{stage}</span>
      <div className="flex items-center gap-1 text-[#697586] text-xs">
        <ChevronsLeft className="w-3 h-3" />
        <span>{subStage}</span>
      </div>
    </div>
  );
}

function YesNoBadge({ value, isAr }: { value: boolean; isAr?: boolean }) {
  if (value) return <span className="px-3 py-0.5 rounded-full bg-[#ecfdf3] border border-[#abefc6] text-[#067647] text-xs font-medium">{isAr ? 'نعم' : 'Yes'}</span>;
  return <span className="px-3 py-0.5 rounded-full bg-[#fef3f2] border border-[#fecdca] text-[#b42318] text-xs font-medium">{isAr ? 'لا' : 'No'}</span>;
}

type SummaryCardStatus = 'Available' | 'Expired' | 'Failed' | 'Completed';

function SummaryCard({ title, source, status }: { title: string; source: string; status: SummaryCardStatus }) {
  const isGreen = status === 'Available' || status === 'Completed';
  const isYellow = status === 'Expired';
  const cardBg = isGreen ? 'bg-[#f6fef9]' : isYellow ? 'bg-[#fef8f0]' : 'bg-[#fffafa]';
  const cardBorder = isGreen ? 'border-[#abefc6]' : isYellow ? 'border-[#fed095]' : 'border-[#fecaca]';
  return (
    <div className={cn('rounded-lg border overflow-hidden', cardBorder)}>
      <div className={cn('px-4 pt-4 pb-3', cardBg)}>
        <div className="flex items-start justify-between mb-2">
          <p className="text-sm font-medium text-[#181d27] flex-1 pe-2 leading-5">{title}</p>
          <span className="text-[10px] font-semibold text-[#697586] shrink-0 mt-0.5">{source}</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-[#a4a7ae]">
          <span>Generated on 04 Aug 2026</span>
          {isGreen && <><span className="px-1">·</span><span>Valid until 03 Sep 2026</span></>}
        </div>
      </div>
      <div className={cn('px-4 py-2.5 border-t flex items-center justify-between', cardBg, cardBorder)}>
        {status === 'Available'  && <span className="inline-flex px-3 py-0.5 rounded-full bg-[#ecfdf3] border border-[#abefc6] text-[#067647] text-xs font-medium">Available</span>}
        {status === 'Expired'    && <span className="inline-flex px-3 py-0.5 rounded-full bg-[#fffaeb] border border-[#fedf89] text-[#b54708] text-xs font-medium">Expired</span>}
        {status === 'Failed'     && <span className="inline-flex px-3 py-0.5 rounded-full bg-[#fef3f2] border border-[#fecdca] text-[#b42318] text-xs font-medium">Failed</span>}
        {status === 'Completed'  && <span className="inline-flex px-3 py-0.5 rounded-full bg-[#ecfdf3] border border-[#abefc6] text-[#067647] text-xs font-medium">Completed</span>}
        <button className="p-1 text-[#697586] hover:text-[#121a26] transition-colors">
          <ExportIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

type SubTabItem = { key: string; labelEn: string; labelAr: string; Icon: React.ElementType };
type MainTab   = { key: string; labelEn: string; labelAr: string; Icon: React.ElementType; sub: SubTabItem[] };

const CUSTOMER_TABS: MainTab[] = [
  { key: 'overview',       labelEn: 'Overview',            labelAr: 'ملخص',                 Icon: BarChart2,     sub: [
    { key: 'summary',       labelEn: 'Summary',            labelAr: 'ملخص',           Icon: BarChart2      },
    { key: 'journey',       labelEn: 'User Journey',       labelAr: 'رحلة المستخدم',  Icon: ArrowUpCircle  },
    { key: 'comments',      labelEn: 'Internal Comments',  labelAr: 'تعليقات داخلية', Icon: MessageSquare  },
  ]},
  { key: 'verification',   labelEn: 'Verification & Risk', labelAr: 'التحقق والمخاطر',       Icon: FileSearch,    sub: [
    { key: 'screening',     labelEn: 'Screening',          labelAr: 'الفحص الانتقائي', Icon: FileSearch     },
    { key: 'risk',          labelEn: 'Risk',               labelAr: 'مخاطرة',          Icon: Shield         },
  ]},
  { key: 'reports',        labelEn: 'Reports',             labelAr: 'التقارير',               Icon: ClipboardMinus, sub: [
    { key: 'kyc',           labelEn: 'KYC',                labelAr: 'KYC',             Icon: UserCircle     },
    { key: 'masdr',         labelEn: 'MASDR',              labelAr: 'MASDR',           Icon: Building2      },
    { key: 'simah',         labelEn: 'SIMAH',              labelAr: 'SIMAH',           Icon: Building       },
  ]},
  { key: 'financing',      labelEn: 'Financing Journey',   labelAr: 'رحلة التمويل',           Icon: Briefcase,     sub: [
    { key: 'preliminary',   labelEn: 'Preliminary',        labelAr: 'تمهيدي',          Icon: List           },
    { key: 'applications',  labelEn: 'Applications',       labelAr: 'التطبيقات',        Icon: CreditCard     },
    { key: 'decisions',     labelEn: 'Decisions',          labelAr: 'القرارات',          Icon: CheckCircle2   },
    { key: 'orders',        labelEn: 'Orders',             labelAr: 'طلبات',            Icon: ClipboardList  },
  ]},
  { key: 'billing',        labelEn: 'Billing & Costs',     labelAr: 'الفواتير والتكاليف',     Icon: Receipt,       sub: [
    { key: 'invoices',      labelEn: 'Invoices',           labelAr: 'الفواتير',         Icon: File           },
    { key: 'billing',       labelEn: 'Billing',            labelAr: 'الفاتورة',          Icon: Receipt        },
  ]},
  { key: 'loyalty',        labelEn: 'Loyalty',             labelAr: 'وفاء',                   Icon: Gift,          sub: [
    { key: 'points',        labelEn: 'Points',             labelAr: 'نقاط',             Icon: Banknote       },
    { key: 'rewards',       labelEn: 'Rewards',            labelAr: 'المكافآت',          Icon: Gift           },
  ]},
  { key: 'security',       labelEn: 'Security & Access',   labelAr: 'الأمن والوصول',          Icon: Shield,        sub: [
    { key: 'devices',       labelEn: 'Devices',            labelAr: 'أجهزة',             Icon: Phone          },
    { key: 'ip',            labelEn: 'IP Addresses',       labelAr: 'عناوين IP',          Icon: Globe          },
    { key: 'logs',          labelEn: 'User Logs',          labelAr: 'سجلات المستخدمين',  Icon: List           },
  ]},
  { key: 'communications', labelEn: 'Communications',      labelAr: 'الاتصالات',              Icon: MessageSquare, sub: [
    { key: 'notifications', labelEn: 'Notifications',      labelAr: 'إشعارات',          Icon: Bell           },
  ]},
];

const GUEST_TABS: MainTab[] = [
  { key: 'overview',       labelEn: 'Overview',            labelAr: 'ملخص',                 Icon: BarChart2,     sub: [
    { key: 'summary',       labelEn: 'Summary',            labelAr: 'ملخص',           Icon: BarChart2      },
    { key: 'journey',       labelEn: 'User Journey',       labelAr: 'رحلة المستخدم',  Icon: ArrowUpCircle  },
    { key: 'comments',      labelEn: 'Internal Comments',  labelAr: 'تعليقات داخلية', Icon: MessageSquare  },
  ]},
  { key: 'financing',      labelEn: 'Financing Journey',   labelAr: 'رحلة التمويل',           Icon: Briefcase,     sub: [] },
  { key: 'billing',        labelEn: 'Billing & Costs',     labelAr: 'الفواتير والتكاليف',     Icon: Receipt,       sub: [
    { key: 'invoices',      labelEn: 'Invoices',           labelAr: 'الفواتير',         Icon: File           },
    { key: 'billing',       labelEn: 'Billing',            labelAr: 'الفاتورة',          Icon: Receipt        },
  ]},
  { key: 'security',       labelEn: 'Security & Access',   labelAr: 'الأمن والوصول',          Icon: Shield,        sub: [
    { key: 'devices',       labelEn: 'Devices',            labelAr: 'أجهزة',             Icon: Phone          },
    { key: 'ip',            labelEn: 'IP Addresses',       labelAr: 'عناوين IP',          Icon: Globe          },
    { key: 'logs',          labelEn: 'User Logs',          labelAr: 'سجلات المستخدمين',  Icon: List           },
  ]},
  { key: 'communications', labelEn: 'Communications',      labelAr: 'الاتصالات',              Icon: MessageSquare, sub: [
    { key: 'notifications', labelEn: 'Notifications',      labelAr: 'إشعارات',          Icon: Bell           },
  ]},
];

type CheckpointStatus = 'Passed' | 'Paused' | 'Failed' | 'Not started';
type JourneyStepStatus = 'Passed' | 'Paused' | 'Failed' | 'Not started';

type Checkpoint = {
  labelEn: string;
  labelAr: string;
  status: CheckpointStatus;
  noteEn?: string;
  noteAr?: string;
  progress?: number;
  passedCount?: number;
  totalCount?: number;
};

type JourneyStep = {
  id: string;
  labelEn: string;
  labelAr: string;
  status: JourneyStepStatus;
  checkpoints: Checkpoint[];
};

const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 'guest-history',
    labelEn: 'Guest history',
    labelAr: 'سجل الضيف',
    status: 'Passed',
    checkpoints: [
      { labelEn: 'Guest record found',       labelAr: 'تم العثور على سجل الضيف',   status: 'Passed' },
      { labelEn: 'Interest data captured',   labelAr: 'تم تسجيل بيانات الاهتمام', status: 'Passed' },
      { labelEn: 'Guest session validated',  labelAr: 'تم التحقق من جلسة الضيف',  status: 'Passed' },
    ],
  },
  {
    id: 'customer-access',
    labelEn: 'Customer access',
    labelAr: 'وصول العميل',
    status: 'Passed',
    checkpoints: [
      { labelEn: 'Identity verified',        labelAr: 'تم التحقق من الهوية',       status: 'Passed' },
      { labelEn: 'Mobile OTP confirmed',     labelAr: 'تم تأكيد OTP الجوال',      status: 'Passed' },
      { labelEn: 'Account activated',        labelAr: 'تم تفعيل الحساب',           status: 'Passed' },
    ],
  },
  {
    id: 'disclosure',
    labelEn: 'Disclosure',
    labelAr: 'الإفصاح',
    status: 'Passed',
    checkpoints: [
      { labelEn: 'Terms & conditions shown', labelAr: 'تم عرض الشروط والأحكام',   status: 'Passed' },
      { labelEn: 'Customer agreement signed',labelAr: 'تم توقيع الاتفاقية',        status: 'Passed' },
    ],
  },
  {
    id: 'eligibility',
    labelEn: 'Eligibility',
    labelAr: 'الأهلية',
    status: 'Passed',
    checkpoints: [
      { labelEn: 'SIMAH report fetched',     labelAr: 'تم جلب تقرير SIMAH',       status: 'Passed' },
      { labelEn: 'MASDR data validated',     labelAr: 'تم التحقق من بيانات MASDR',status: 'Passed' },
      { labelEn: 'Eligibility decision',     labelAr: 'قرار الأهلية',              status: 'Passed' },
    ],
  },
  {
    id: 'order-submission',
    labelEn: 'Order submission',
    labelAr: 'تقديم الطلب',
    status: 'Paused',
    checkpoints: [
      { labelEn: 'Offer selected',           labelAr: 'تم اختيار العرض',           status: 'Passed'      },
      { labelEn: 'Order created',            labelAr: 'تم إنشاء الطلب',            status: 'Passed'      },
      { labelEn: 'OTP transmitted',          labelAr: 'تم إرسال رمز تأكيد الطلب',   status: 'Passed'      },
      {
        labelEn: 'Confirmation OTP verified',
        labelAr: 'تم التحقق من رمز تأكيد الطلب',
        status: 'Paused',
        noteEn: 'OTP was sent and remains valid for 4 minutes.',
        noteAr: 'تم إرسال OTP ولا يزال صالحاً لمدة ٤ دقائق.',
        progress: 50,
        passedCount: 3,
        totalCount: 6,
      },
      { labelEn: 'Order reviewed',           labelAr: 'تم تأكيد الطلب',                    status: 'Not started' },
      { labelEn: 'Order finalized',          labelAr: 'تم إرسال الطلب إلى مقدم التمويل', status: 'Not started' },
    ],
  },
];

function CheckpointStatusIcon({ status }: { status: CheckpointStatus }) {
  if (status === 'Passed')
    return <span className="w-5 h-5 rounded-full bg-[#dcfae6] border border-[#17b26a] flex items-center justify-center shrink-0"><Check className="w-3 h-3 text-[#17b26a]" /></span>;
  if (status === 'Paused')
    return <span className="w-5 h-5 rounded-full bg-[#fffaeb] border border-[#fec84b] flex items-center justify-center shrink-0"><span className="w-2 h-2 rounded-full bg-[#f79009]" /></span>;
  if (status === 'Failed')
    return <span className="w-5 h-5 rounded-full bg-[#fef3f2] border border-[#fecdca] flex items-center justify-center shrink-0"><X className="w-3 h-3 text-[#f04438]" /></span>;
  return <span className="w-5 h-5 rounded-full bg-white border border-[#d0d5dd] flex items-center justify-center shrink-0" />;
}

function StepStatusBadge({ status, isAr }: { status: JourneyStepStatus; isAr: boolean }) {
  const labels = {
    Passed:      { en: 'Passed',      ar: 'ناجح'      },
    Paused:      { en: 'Paused',      ar: 'موقوف مؤقتاً' },
    Failed:      { en: 'Failed',      ar: 'فاشل'      },
    'Not started': { en: 'Not started', ar: 'لم يبدأ'   },
  };
  const label = isAr ? labels[status].ar : labels[status].en;
  if (status === 'Passed')
    return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#ecfdf3] border border-[#abefc6] text-[#067647] text-[10px] font-medium"><Check className="w-2.5 h-2.5" />{label}</span>;
  if (status === 'Paused')
    return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#fffaeb] border border-[#fedf89] text-[#b54708] text-[10px] font-medium"><span className="w-1.5 h-1.5 rounded-full bg-[#f79009]" />{label}</span>;
  if (status === 'Failed')
    return <span className="inline-flex px-2 py-0.5 rounded-full bg-[#fef3f2] border border-[#fecdca] text-[#b42318] text-[10px] font-medium">{label}</span>;
  return <span className="inline-flex px-2 py-0.5 rounded-full bg-[#f8f9fb] border border-[#d0d5dd] text-[#697586] text-[10px] font-medium">{label}</span>;
}

function JourneyTrackerContent({ isAr }: { isAr: boolean }) {
  const [selectedStep, setSelectedStep] = useState(4);

  const step = JOURNEY_STEPS[selectedStep];

  return (
    <div className="bg-white border border-[#e3e8f1] rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#eef1f6]">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-[#15212f]">{isAr ? 'متتبع دورة الحياة المباشر' : 'Live lifecycle tracker'}</span>
          <span className="px-2.5 py-1 rounded-full bg-[#f0f5ff] border border-[#c3d5fd] text-[#2f5fc4] text-xs font-medium">S-1042</span>
          <span className="px-2.5 py-1 rounded-full bg-[#f8f9fb] border border-[#d0d5dd] text-[#344054] text-xs font-medium">Order O-8821</span>
        </div>
        {/* Status legend */}
        <div className="flex items-center gap-3">
          {(['Passed', 'Paused', 'Failed', 'Not started'] as JourneyStepStatus[]).map(s => (
            <span key={s} className="flex items-center gap-1 text-[10px] text-[#697586]">
              <StepStatusBadge status={s} isAr={false} />
            </span>
          ))}
        </div>
      </div>

      {/* Steps row */}
      <div className="flex border-b border-[#eef1f6]">
        {JOURNEY_STEPS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setSelectedStep(i)}
            className={cn(
              'flex-1 flex flex-col items-center gap-2 px-3 py-4 border-e border-[#eef1f6] last:border-e-0 transition-colors',
              i === selectedStep ? 'bg-[#f5f9ff]' : 'bg-white hover:bg-[#fafbfc]'
            )}
          >
            {/* Step connector line */}
            <div className="flex items-center w-full gap-1 justify-center">
              <div className={cn('h-0.5 flex-1', i === 0 ? 'bg-transparent' : s.status === 'Not started' ? 'bg-[#e3e8f1]' : 'bg-[#17b26a]')} />
              <div className={cn(
                'w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0',
                s.status === 'Passed'      ? 'bg-[#dcfae6] border-[#17b26a]' :
                s.status === 'Paused'      ? 'bg-[#fffaeb] border-[#fec84b]' :
                s.status === 'Failed'      ? 'bg-[#fef3f2] border-[#f04438]' :
                                             'bg-white border-[#d0d5dd]'
              )}>
                {s.status === 'Passed'  && <Check className="w-4 h-4 text-[#17b26a]" />}
                {s.status === 'Paused'  && <span className="w-2.5 h-2.5 rounded-full bg-[#f79009]" />}
                {s.status === 'Failed'  && <X className="w-4 h-4 text-[#f04438]" />}
                {s.status === 'Not started' && <span className="w-2.5 h-2.5 rounded-full bg-[#d0d5dd]" />}
              </div>
              <div className={cn('h-0.5 flex-1', i === JOURNEY_STEPS.length - 1 ? 'bg-transparent' : s.status === 'Not started' ? 'bg-[#e3e8f1]' : 'bg-[#17b26a]')} />
            </div>
            <div className="text-center">
              <p className={cn('text-xs font-medium', i === selectedStep ? 'text-[#0063f5]' : 'text-[#344054]')}>
                {isAr ? s.labelAr : s.labelEn}
              </p>
              <div className="mt-1 flex justify-center">
                <StepStatusBadge status={s.status} isAr={isAr} />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Checkpoint list */}
      <div className="p-5">
        <p className="text-xs font-semibold text-[#697586] uppercase tracking-wide mb-3">
          {isAr ? 'نقاط التحقق' : 'Checkpoints'}
        </p>
        <div className="flex flex-col gap-2">
          {step.checkpoints.map((cp, i) => (
            <div
              key={i}
              className={cn(
                'flex items-start gap-3 p-3 rounded-lg border',
                cp.status === 'Passed'      ? 'bg-white border-[#e3e8f1]' :
                cp.status === 'Paused'      ? 'bg-[#fffcf5] border-[#fec84b]' :
                cp.status === 'Failed'      ? 'bg-[#fef3f2] border-[#fecdca]' :
                                              'bg-[#f8f9fb] border-[#e3e8f1]'
              )}
            >
              <CheckpointStatusIcon status={cp.status} />
              <div className="flex-1 min-w-0">
                <p className={cn('text-sm font-medium', cp.status === 'Not started' ? 'text-[#98a2b3]' : 'text-[#15212f]')}>
                  {isAr ? cp.labelAr : cp.labelEn}
                </p>
                {cp.noteEn && (
                  <p className="text-xs text-[#697586] mt-0.5">{isAr ? cp.noteAr : cp.noteEn}</p>
                )}
                {cp.progress !== undefined && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-[#e3e8f1] overflow-hidden">
                      <div className="h-full rounded-full bg-[#f79009]" style={{ width: `${cp.progress}%` }} />
                    </div>
                    <span className="text-[10px] text-[#697586] whitespace-nowrap">{cp.passedCount}/{cp.totalCount} {isAr ? 'مكتمل' : 'done'}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CustomerDetailPanel({ profile, onClose, isAr }: { profile: Profile; onClose: () => void; isAr: boolean }) {
  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeSubTab, setActiveSubTab]   = useState(0);
  const initials = profile.assignedName.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Panel header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e3e4] shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#697586]">{isAr ? 'رقم العميل' : 'Customer ID'}</span>
          <span className="text-sm font-semibold text-[#121a26]">{profile.id}</span>
          <span className="text-sm font-semibold text-[#121a26]">·</span>
          <span className="text-sm font-semibold text-[#121a26]">{isAr ? profile.nameAr : profile.name}</span>
        </div>
        <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 text-[#697586] transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Profile header row */}
      <div className="flex items-stretch gap-3 px-6 py-4 border-b border-[#eef1f6] shrink-0">
        {/* Avatar + name + active + action buttons */}
        <div className="flex items-center gap-0 bg-white border border-[#eef1f6] rounded-md flex-[1.5] min-w-0">
          <div className="flex items-center gap-5 p-4 flex-1 min-w-0">
            <div className="w-[80px] h-[80px] rounded-full bg-[#eaf2ff] border border-[#aacbfc] flex items-center justify-center text-2xl font-semibold text-[#0053cc] shrink-0">
              {profile.initials}
            </div>
            <div className="flex flex-col gap-2 min-w-0">
              <span className="text-lg font-semibold text-[#1e2228] truncate">{isAr ? profile.nameAr : profile.name}</span>
              <span className="self-start px-4 py-1.5 rounded-full bg-[#ecfdf3] border border-[#12b76a] text-[#12b76a] text-sm font-medium">Active</span>
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

        {/* National ID / mobile / nationality */}
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

        {/* AML score */}
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
      <div className="border-b border-[#e2e3e4] shrink-0 overflow-x-auto">
        <div className="flex min-w-max">
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
                    : 'border-transparent text-[#202a39] hover:bg-gray-50'
                )}
              >
                <TabIcon className="w-4 h-4 shrink-0" />
                {isAr ? tab.labelAr : tab.labelEn}
              </button>
            );
          })}
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex gap-4 p-4">

          {/* Left: summary section + recent activity */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">

            {/* Sub-tab group — changes per active main tab */}
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

            {/* Content switches per sub-tab */}
            {activeMainTab === 0 && activeSubTab === 1 ? (
              <JourneyTrackerContent isAr={isAr} />
            ) : (
              /* Financial profile readiness */
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
            )}

            {/* Recent activity */}
            <div className="bg-white border border-[#e3e8f1] rounded-xl p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold text-[#15212f]">
                  {isAr ? 'النشاط الأخير' : 'Recent activity'}
                </h3>
                <button className="text-sm font-medium text-[#0053cc] hover:underline">
                  {isAr ? 'عرض كل السجلات' : 'View all logs'}
                </button>
              </div>
              <div className="flex flex-col mt-2">
                {ACTIVITY_LOG.map((item, i) => (
                  <div key={i} className={cn('flex items-center justify-between py-3', i > 0 && 'border-t border-[#edf0f5]')}>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-black">{isAr ? item.eventAr : item.event}</span>
                      <span className="text-xs text-[#697586]">{isAr ? item.detailAr : item.detail}</span>
                    </div>
                    <span className="text-xs text-[#697586] whitespace-nowrap ms-4">{isAr ? item.timeAr : item.time}</span>
                  </div>
                ))}
              </div>
            </div>
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
                  {initials}
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
                  {initials}
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

const GUEST_INTEREST_FIELDS = [
  { labelEn: 'Product interest', labelAr: 'اهتمام بالمنتج',  value: 'Personal finance',           valueAr: 'التمويل الشخصي',          Icon: BarChart2 },
  { labelEn: 'Preferred amount', labelAr: 'المبلغ المفضل',   value: '﷼ 120,000',                   valueAr: '١٢٠٬٠٠٠ ﷼',             Icon: Banknote },
  { labelEn: 'Sector',           labelAr: 'القطاع',           value: 'Government',                  valueAr: 'حكومي',                   Icon: Building2 },
  { labelEn: 'Entity',           labelAr: 'الجهة',            value: 'Emirate of Riyadh Region',    valueAr: 'إمارة منطقة الرياض',      Icon: Building },
  { labelEn: 'Job title',        labelAr: 'المسمى الوظيفي',  value: 'Administrative specialist',   valueAr: 'أخصائي إداري',            Icon: Briefcase },
  { labelEn: 'Salary bank',      labelAr: 'بنك الراتب',       value: 'SNB',                         valueAr: 'SNB',                     Icon: Landmark },
  { labelEn: 'Hiring date',      labelAr: 'تاريخ التوظيف',   value: 'Mar 09, 2022',                valueAr: '٠٩ مار ٢٠٢٢',            Icon: Calendar },
  { labelEn: 'Salary transfer',  labelAr: 'تحويل الراتب',    value: 'Yes, agreed',                 valueAr: 'نعم، موافق',              Icon: ArrowRightCircle },
];

function GuestDetailPanel({ profile, onClose, isAr }: { profile: Profile; onClose: () => void; isAr: boolean }) {
  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeSubTab, setActiveSubTab]   = useState(0);
  const initials = profile.assignedName.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Panel header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e3e4] shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#697586]">{isAr ? 'رقم العميل' : 'Customer ID'}</span>
          <span className="text-sm font-semibold text-[#121a26]">{profile.id}</span>
          <span className="text-sm font-semibold text-[#121a26]">·</span>
          <span className="text-sm font-semibold text-[#121a26]">{isAr ? profile.nameAr : profile.name}</span>
        </div>
        <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 text-[#697586] transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Profile header row — avatar + name + status + action | ID/mobile/nationality (no AML for guest) */}
      <div className="flex items-stretch gap-3 px-6 py-4 border-b border-[#eef1f6] shrink-0">
        <div className="flex items-center gap-0 bg-white border border-[#eef1f6] rounded-md flex-1 min-w-0">
          <div className="flex items-center gap-5 p-4 flex-1 min-w-0">
            <div className="w-[80px] h-[80px] rounded-full bg-[#eaf2ff] border border-[#aacbfc] flex items-center justify-center text-2xl font-semibold text-[#0053cc] shrink-0">
              {profile.initials}
            </div>
            <div className="flex flex-col gap-2 min-w-0">
              <span className="text-lg font-semibold text-[#1e2228] truncate">{isAr ? profile.nameAr : profile.name}</span>
              <span className="self-start px-4 py-1.5 rounded-full bg-[#ecfdf3] border border-[#12b76a] text-[#12b76a] text-sm font-medium">Active</span>
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

        {/* ID/Mobile/Nationality — no AML for guest */}
        <div className="bg-white border border-[#eef1f6] rounded-md w-[284px] shrink-0">
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
      </div>

      {/* Main tabs */}
      <div className="border-b border-[#e2e3e4] shrink-0 overflow-x-auto">
        <div className="flex min-w-max">
          {GUEST_TABS.map((tab, i) => {
            const TabIcon = tab.Icon;
            return (
              <button
                key={tab.key}
                onClick={() => { setActiveMainTab(i); setActiveSubTab(0); }}
                className={cn(
                  'flex items-center gap-2 px-5 py-3.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors',
                  i === activeMainTab
                    ? 'border-[#0063f5] text-[#202a39] bg-white'
                    : 'border-transparent text-[#202a39] hover:bg-gray-50'
                )}
              >
                <TabIcon className="w-4 h-4 shrink-0" />
                {isAr ? tab.labelAr : tab.labelEn}
              </button>
            );
          })}
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex gap-4 p-4">

          {/* Left: interest info + recent activity */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">

            {/* Sub-tab group — changes per active main tab */}
            {GUEST_TABS[activeMainTab].sub.length > 0 && (
              <div className="flex isolate rounded-lg overflow-hidden border border-[#d5d7da] self-start">
                {GUEST_TABS[activeMainTab].sub.map((subTab, i) => {
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

            {/* Interest information */}
            <div className="bg-white border border-[#e3e8f1] rounded-xl p-4">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold text-[#15212f]">
                  {isAr ? 'معلومات الاهتمام' : 'Interest information'}
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#ecfdf3] border border-[#abefc6] text-[#067647] text-sm font-medium">
                  {isAr ? 'مُقدَّم' : 'Submitted'}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                {GUEST_INTEREST_FIELDS.map(({ labelEn, labelAr, value, valueAr, Icon }) => (
                  <div key={labelEn} className="flex items-center gap-3">
                    <div className="border border-[#eef1f6] rounded-lg p-3 shrink-0">
                      <Icon className="w-6 h-6 text-[#344054]" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-medium text-[#697586] uppercase tracking-wide">
                        {isAr ? labelAr : labelEn}
                      </span>
                      <span className="text-sm font-semibold text-black">
                        {isAr ? valueAr : value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent activity */}
            <div className="bg-white border border-[#e3e8f1] rounded-xl p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold text-[#15212f]">
                  {isAr ? 'النشاط الأخير' : 'Recent activity'}
                </h3>
                <button className="text-sm font-medium text-[#0053cc] hover:underline">
                  {isAr ? 'عرض كل السجلات' : 'View all logs'}
                </button>
              </div>
              <div className="flex flex-col mt-2">
                {ACTIVITY_LOG.map((item, i) => (
                  <div key={i} className={cn('flex items-center justify-between py-3', i > 0 && 'border-t border-[#edf0f5]')}>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-black">{isAr ? item.eventAr : item.event}</span>
                      <span className="text-xs text-[#697586]">{isAr ? item.detailAr : item.detail}</span>
                    </div>
                    <span className="text-xs text-[#697586] whitespace-nowrap ms-4">{isAr ? item.timeAr : item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar — same as customer */}
          <div className="w-[290px] shrink-0 flex flex-col gap-3">
            <div className="bg-white border border-[#e3e8f1] rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-[#15212f]">{isAr ? 'المسؤول' : 'Assignment'}</h3>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#cce0fd] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                  <Pencil className="w-4 h-4 text-[#0063f5]" />
                </button>
              </div>
              <div className="flex items-center gap-2.5 bg-[#f8fafc] border border-[#e3e8f1] rounded-xl p-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#dfeeff] flex items-center justify-center text-xs font-bold text-[#0d5fcd] shrink-0">
                  {initials}
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
                  {initials}
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

export default function CpsOfficialPage({ forceLang, detailBasePath = '/cps-official', isProvider }: { forceLang?: 'en' | 'ar'; detailBasePath?: string; isProvider?: boolean } = {}) {
  const { lang } = useLang();
  const isAr = (forceLang ?? lang) === 'ar';
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('all');
  const [search, setSearch] = useState('');
  const [showSwitcher, setShowSwitcher] = useState(false);

  const filtered = PROFILES.filter(p => {
    if (activeTab === 'customers' && p.type !== 'Customer') return false;
    if (activeTab === 'guests'    && p.type !== 'Guest')    return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.nameAr.includes(q) ||
        p.id.includes(q) ||
        p.email.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="h-screen flex flex-row dark:bg-slate-950 relative" dir={isAr ? 'rtl' : 'ltr'}>
      {isProvider ? <ProviderSidebar /> : <InternalSidebar />}

      <div className="flex flex-col flex-1 min-w-0 bg-[#f8fafc] dark:bg-slate-950">
      <Topbar onProfileClick={() => setShowSwitcher(true)} isProvider={isProvider} hasSidebar />
      {showSwitcher && <ViewSwitcherModal onClose={() => setShowSwitcher(false)} />}

      <main className="flex-1 px-6 pt-4 pb-4 flex flex-col gap-4 min-h-0 overflow-y-auto">

        {/* Page header */}
        <div className="flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <BarChart2 className="w-6 h-6 text-[#0063f5]" />
            <h1 className="text-[25px] font-semibold text-[#0063f5] leading-8">
              {isAr ? 'لوحة العمليات' : 'Customer profiling system'}
            </h1>
          </div>
          <button className="relative flex items-center gap-1 px-[14px] py-[10px] border border-[#d5d7da] rounded-lg bg-white text-[#414651] text-sm font-medium shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200">
            <Calendar className="w-5 h-5 shrink-0" />
            <span className="px-0.5 whitespace-nowrap">
              {isAr ? '١٠ يناير ٢٠٢٥ – ١٦ يناير ٢٠٢٥' : 'Jan 10, 2025 – Jan 16, 2025'}
            </span>
            <div className="absolute inset-0 rounded-lg pointer-events-none shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
          </button>
        </div>

        {/* KPIs */}
        <div className="flex flex-wrap gap-2 shrink-0">
          {(isProvider ? kpis.slice(0, 3) : kpis).map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div key={kpi.label.en} className={cn('flex flex-1 gap-6 items-start min-w-[220px] max-w-[350px] p-2.5 rounded-lg border', kpi.bg, kpi.border)}>
                <div className={cn('flex items-center justify-center p-5 rounded shrink-0 self-stretch', kpi.iconBg)}>
                  <Icon className={cn('w-8 h-8', kpi.iconColor)} />
                </div>
                <div className="flex flex-col items-start min-w-0">
                  <p className={cn('text-base font-medium', kpi.labelColor)}>{isAr ? kpi.label.ar : kpi.label.en}</p>
                  <p className={cn('text-[32px] font-bold leading-10', kpi.valueColor)}>{kpi.value}</p>
                  <p className={cn('text-sm', kpi.subColor)}>{isAr ? kpi.sub.ar : kpi.sub.en}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main card */}
        <Card className="flex-1 flex flex-col min-h-0 overflow-hidden">

          {/* Card header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#eef1f6] dark:border-slate-800 shrink-0">
            {/* Tabs */}
            <div className="flex isolate rounded-lg overflow-hidden">
              {TABS.map((tab, i) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={cn(
                      'flex items-center justify-center min-h-[40px] px-4 py-2 text-sm font-medium border-t border-b whitespace-nowrap',
                      i === 0 && (isAr ? 'rounded-r-lg border-r' : 'rounded-l-lg border-l'),
                      i === TABS.length - 1 && (isAr ? 'rounded-l-lg border-l' : 'rounded-r-lg border-r'),
                      isActive
                        ? 'bg-[#f5f9ff] border-[#0063f5] text-[#0063f5] z-10'
                        : 'bg-white border-[#d5d7da] text-[#414651] dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300',
                      !isActive && i > 0 && 'border-s-0',
                    )}
                  >
                    {isAr ? tab.label.ar : tab.label.en}
                  </button>
                );
              })}
            </div>

            {/* Search + filter */}
            <div className="flex items-center gap-3">
              <div className="bg-white border border-[#cdd4df] rounded-lg flex items-center gap-2 px-[14px] py-[10px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-[260px] dark:bg-slate-900 dark:border-slate-700">
                <Search className="w-5 h-5 text-[#697586] dark:text-slate-400 shrink-0" />
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="flex-1 min-w-0 bg-transparent text-sm text-[#121a26] placeholder:text-[#697586] focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
                  placeholder={isAr ? 'البحث برقم العميل...' : 'Search by Customer ID, Customer Details, Product Details, Loan Amount...'}
                />
                {search && (
                  <button onClick={() => setSearch('')} className="flex items-center justify-center w-4 h-4 rounded-full bg-[#d92d20] hover:bg-[#b91c1c] shrink-0">
                    <X className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                  </button>
                )}
              </div>

              <button className="relative flex items-center justify-center gap-[6px] px-4 py-[10px] min-w-[120px] overflow-clip border border-[#cdd4df] rounded-[8px] text-[#364152] text-base font-medium shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] dark:border-slate-700 dark:text-slate-200">
                <div aria-hidden className="absolute inset-0 rounded-[8px] pointer-events-none bg-white dark:bg-slate-900" />
                <FilterMixerIcon className="w-5 h-5 shrink-0 relative" />
                <span className="px-0.5 relative">{isAr ? 'التصنيف حسب' : 'Filter'}</span>
                <ChevronDown className="w-5 h-5 relative" aria-hidden />
                <div className="absolute inset-0 rounded-[8px] pointer-events-none shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
              </button>
            </div>
          </div>

          {/* Table */}
          <CardContent className="flex-1 overflow-auto p-0">
            <table className="w-full min-w-max">
              <thead>
                <tr className="bg-white dark:bg-slate-900 border-b border-[#f2f4f7] dark:border-slate-800">
                  <th className="ps-6 pe-4 py-3 text-start text-xs font-medium text-[#697586] dark:text-slate-400 w-[300px]">
                    {isAr ? 'الملف الشخصي' : 'Profile'}
                  </th>
                  <th className="px-4 py-3 text-start text-xs font-medium text-[#697586] dark:text-slate-400 w-[120px]">
                    {isAr ? 'نوع السجل' : 'Record type'}
                  </th>
                  <th className="px-4 py-3 text-start text-xs font-medium text-[#697586] dark:text-slate-400 w-[220px]">
                    {isAr ? 'المرحلة الحالية' : 'Current stage'}
                  </th>
                  <th className="px-4 py-3 text-start text-xs font-medium text-[#697586] dark:text-slate-400 w-[120px]">
                    {isAr ? 'نتيجة الرحلة' : 'Journey result'}
                  </th>
                  {!isProvider && (
                    <th className="px-4 py-3 text-start text-xs font-medium text-[#697586] dark:text-slate-400 w-[180px]">
                      {isAr ? 'المسؤول' : 'Assigned to'}
                    </th>
                  )}
                  {!isProvider && activeTab === 'customers' && (
                    <>
                      <th className="px-4 py-3 text-start text-xs font-medium text-[#697586] dark:text-slate-400 w-[80px]">SIMAH</th>
                      <th className="px-4 py-3 text-start text-xs font-medium text-[#697586] dark:text-slate-400 w-[80px]">MASDR</th>
                    </>
                  )}
                  <th className="px-4 py-3 text-start text-xs font-medium text-[#697586] dark:text-slate-400 w-[180px]">
                    {isAr ? 'تاريخ الانضمام' : 'Joined date'}
                  </th>
                  {!isProvider && activeTab === 'customers' && (
                    <th className="px-4 py-3 text-start text-xs font-medium text-[#697586] dark:text-slate-400 w-[100px]">
                      {isAr ? 'عدد الطلبات' : 'Order count'}
                    </th>
                  )}
                  <th className="px-4 py-3 text-center text-xs font-medium text-[#697586] dark:text-slate-400 w-[48px]" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, idx) => (
                  <tr
                    key={p.id}
                    onClick={() => router.push(`${detailBasePath}/${p.id}`)}
                    className={cn(
                      'border-b border-[#f2f4f7] dark:border-slate-800 hover:bg-[#f9fafb] dark:hover:bg-slate-800/50 transition-colors cursor-pointer',
                      idx % 2 === 1 && 'bg-[#fcfcfd] dark:bg-slate-900/30',
                    )}
                  >
                    {/* Profile */}
                    <td className="ps-6 pe-4 py-3">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#eaf2ff] border border-[#aacbfc] text-[#0053cc] text-sm font-semibold shrink-0">
                          {p.initials}
                        </div>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <span className="text-sm font-medium text-[#121a26] dark:text-slate-100 leading-6 truncate">
                            {isAr ? p.nameAr : p.name}
                          </span>
                          <div className="flex items-center gap-1 text-[#697586] dark:text-slate-400 text-xs">
                            <UserCircle className="w-3 h-3 shrink-0" />
                            <span>{p.id}</span>
                          </div>
                          {p.type === 'Customer' && (
                            <>
                              <div className="flex items-center gap-1 text-[#697586] dark:text-slate-400 text-xs">
                                <Phone className="w-3 h-3 shrink-0" />
                                <span>{p.phone}</span>
                              </div>
                              <div className="flex items-center gap-1 text-[#697586] dark:text-slate-400 text-xs">
                                <MapPin className="w-3 h-3 shrink-0" />
                                <span>{isAr ? 'المملكة العربية السعودية' : p.country}</span>
                              </div>
                              <div className="flex items-center gap-1 text-[#697586] dark:text-slate-400 text-xs">
                                <Mail className="w-3 h-3 shrink-0" />
                                <span>{p.email}</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Record type */}
                    <td className="px-4 py-3"><RecordBadge type={p.type} isAr={isAr} /></td>

                    {/* Current stage */}
                    <td className="px-4 py-3">
                      <StageBadge stage={isAr ? p.stageAr : p.stage} subStage={isAr ? p.subStageAr : p.subStage} />
                    </td>

                    {/* Journey result */}
                    <td className="px-4 py-3"><JourneyBadge result={p.journeyResult} isAr={isAr} /></td>

                    {/* Assigned to */}
                    {!isProvider && (
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#bbd5fb] border border-white dark:border-slate-800 flex items-center justify-center text-xs font-semibold text-[#0063f5] shrink-0">
                            {p.assignedName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-sm font-medium text-[#121a26] dark:text-slate-100 leading-6 truncate">
                              {isAr ? p.assignedNameAr : p.assignedName}
                            </span>
                            <div className="flex items-center gap-1 text-[#697586] dark:text-slate-400 text-xs">
                              <Briefcase className="w-3 h-3 shrink-0" />
                              <span>{p.assignedRole}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                    )}

                    {/* SIMAH + MASDR (customers tab only, internal only) */}
                    {!isProvider && activeTab === 'customers' && (
                      <>
                        <td className="px-4 py-3"><YesNoBadge value={p.simah} isAr={isAr} /></td>
                        <td className="px-4 py-3"><YesNoBadge value={p.masdr} isAr={isAr} /></td>
                      </>
                    )}

                    {/* Joined date */}
                    <td className="px-4 py-3">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-[#121a26] dark:text-slate-100 leading-6 whitespace-nowrap">{p.joinedDate}</span>
                        <span className="text-xs text-[#697586] dark:text-slate-400">{p.joinedTime}</span>
                      </div>
                    </td>

                    {/* Order count (customers tab only, internal only) */}
                    {!isProvider && activeTab === 'customers' && (
                      <td className="px-4 py-3">
                        <span className="text-sm font-medium text-[#121a26] dark:text-slate-100">{p.orderCount}</span>
                      </td>
                    )}

                    {/* Action */}
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={e => { e.stopPropagation(); router.push(`${detailBasePath}/${p.id}`); }}
                        className="p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 text-[#667085] dark:text-slate-400 transition-colors"
                      >
                        <ExportIcon className="w-6 h-6" />
                      </button>
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={12} className="py-16 text-center text-[#697586] dark:text-slate-400 text-sm">
                      {isAr ? 'لا توجد نتائج' : 'No results found'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </CardContent>

          <CardFooterSlot>
            <CardFooter currentPage={1} totalPages={5} />
          </CardFooterSlot>
        </Card>
      </main>
      </div>
    </div>
  );
}
