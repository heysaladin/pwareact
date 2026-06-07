'use client';
import React, { useState, useRef, useEffect } from 'react';
import { X, Calendar, User, Phone, Mail, ArrowRight, Flag, Star, Building2, MessageCircle, Plus, RotateCcw, Settings, ShieldCheck, PhoneCall, AlertTriangle, ChevronRight, ChevronUp } from 'lucide-react';
import SARSymbol from '@/components/ui/SARSymbol';
import { cn } from '@/lib/utils';
import OrderStatusOverlay from './OrderStatusOverlay';
import ActionModal from './ActionModal';
import PipelineStatusOverlay from './PipelineStatusOverlay';
import MessageHubOverlay from './MessageHubOverlay';
import { useLang } from '@/lib/language-context';

type Priority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
type OrderStatus = 'Pending' | 'Approved' | 'Rejected' | 'Under Review' | 'Completed';

type Order = {
  id: string; createdAt: string; updatedAt: string; priority: Priority;
  slaTimeLeft: string; slaEscalation: string; slaProgress: number; aiScore: number;
  customerName: string; customerId: string; customerPhone: string; customerEmail: string;
  productName: string; productNameAr: string; status: OrderStatus;
  loanAmount: string; apr: string; managementFees: string; brokerageFees: string;
};

const priorityConfig: Record<Priority, { color: string; bg: string; border: string; labelEn: string; labelAr: string }> = {
  LOW:      { color: 'text-[#079455] dark:text-emerald-300', bg: 'bg-[#ecfdf3] dark:bg-emerald-950', border: 'border-[#abefc6] dark:border-emerald-900', labelEn: 'LOW',    labelAr: 'منخفض' },
  MEDIUM:   { color: 'text-[#b54708] dark:text-amber-300',   bg: 'bg-[#fffaeb] dark:bg-amber-950',   border: 'border-[#fedf89] dark:border-amber-900', labelEn: 'MEDIUM', labelAr: 'متوسط' },
  HIGH:     { color: 'text-[#d91c1c] dark:text-red-300',     bg: 'bg-[#fff1f3] dark:bg-red-950',     border: 'border-[#fda29b] dark:border-red-900',   labelEn: 'HIGH',   labelAr: 'عالي' },
  CRITICAL: { color: 'text-[#d91c1c] dark:text-red-300',     bg: 'bg-[#fff1f3] dark:bg-red-950',     border: 'border-[#fda29b] dark:border-red-900',   labelEn: 'HIGH',   labelAr: 'عالي' },
};

const _statusConfig: Record<OrderStatus, { variant: 'warning' | 'success' | 'error' | 'info' | 'completed' }> = {
  Pending:        { variant: 'warning' },
  Approved:       { variant: 'success' },
  Rejected:       { variant: 'error' },
  'Under Review': { variant: 'info' },
  Completed:      { variant: 'completed' },
};

function getAiGroup(score: number) {
  if (score >= 80) return { color: 'text-[#079455] dark:text-emerald-300', bg: 'bg-[#f8fafc] dark:bg-emerald-950', border: 'border-[#dcfae6] dark:border-emerald-900' };
  if (score >= 50) return { color: 'text-[#b54708] dark:text-amber-300', bg: 'bg-[#fffaeb] dark:bg-amber-950', border: 'border-[#fedf89] dark:border-amber-900' };
  return { color: 'text-[#d91c1c] dark:text-red-300', bg: 'bg-[#fff1f3] dark:bg-red-950', border: 'border-[#fda29b] dark:border-red-900' };
}

const imgBankLogo = '/illustrations/logo.svg';
const imgProductIcon = '/illustrations/simple-category-icon-perspective---personal.svg';
const imgBrandWatermark = '/illustrations/bg-logo-color.svg';
const imgSarWatermark = '/illustrations/bg-sar-light.svg';

type TimelineIconType = 'bank' | 'bank-warning' | 'message' | 'provider' | 'phone' | 'review' | 'aml' | 'system' | 'created';
type ActorType = 'agent' | 'customer' | 'provider' | 'system';

type TimelineEvent = {
  time: string;
  icon: TimelineIconType;
  title: string;
  titleAr?: string;
  actor: string;
  actorAr?: string;
  actorType?: ActorType;
  text?: string;
  textAr?: string;
  action?: string;
  counterOffer?: boolean;
  recalled?: boolean;
};

function getDotColor(icon: TimelineIconType): string {
  switch (icon) {
    case 'bank':     return 'bg-[#079455]';
    case 'bank-warning': return 'bg-[#ea8808]';
    case 'message':  return 'bg-[#ea8808]';
    case 'provider': return 'bg-[#0063f5]';
    case 'phone':    return 'bg-[#0063f5]';
    case 'review':   return 'bg-[#7c3aed]';
    case 'aml':      return 'bg-[#ea8808]';
    case 'system':   return 'bg-[#9aa4b2]';
    case 'created':  return 'bg-[#079455]';
  }
}

function getActorColor(actorType?: ActorType): string {
  switch (actorType) {
    case 'customer': return 'text-[#0e9384]';
    case 'provider': return 'text-[#ea8808]';
    case 'system':   return 'text-[#7c3aed]';
    default:         return 'text-[#0063f5]';
  }
}

const T = '2025-07-13 10:44:22';

const MOCK_TIMELINE: TimelineEvent[] = [
  { time: T, icon: 'bank', title: 'Brokerage fees Partially Refunded', titleAr: 'رسوم الوساطة مستردة جزئياً', actor: 'Alyaa', text: 'The partial refund request for {amount} has been successfully submitted. Status updated to Partially Refunded.', textAr: 'تم تقديم طلب الاسترداد الجزئي بنجاح. تم تحديث الحالة إلى مسترد جزئياً.', action: '+ Refund' },
  { time: T, icon: 'bank', title: 'Refund', titleAr: 'استرداد', actor: 'Alyaa', text: 'The refund request for {amount} has been successfully submitted. Status updated to Refund.', textAr: 'تم تقديم طلب الاسترداد بنجاح. تم تحديث الحالة إلى مسترد.' },
  { time: T, icon: 'message', title: 'Text Message', titleAr: 'رسالة نصية', actor: 'Alyaa', text: '"Updated offer"\n"Your offer has been updated."', textAr: '"عرض محدث"\n"تم تحديث عرضك."', counterOffer: true },
  { time: T, icon: 'bank', title: 'Brokerage fees paid', titleAr: 'تم دفع رسوم الوساطة', actor: 'Customer', actorAr: 'العميل', actorType: 'customer', text: 'Brokerage fee payment of {amount} failed. The customer has been requested to retry the payment.', textAr: 'فشل دفع رسوم الوساطة. تم طلب من العميل إعادة المحاولة.', action: '+ Refund' },
  { time: T, icon: 'bank-warning', title: 'Brokerage fees failed', titleAr: 'فشل دفع رسوم الوساطة', actor: 'Customer', actorAr: 'العميل', actorType: 'customer', text: 'Brokerage fee payment of {amount} failed. The customer has been requested to retry the payment.', textAr: 'فشل دفع رسوم الوساطة. تم طلب من العميل إعادة المحاولة.' },
  { time: T, icon: 'bank-warning', title: 'Brokerage fees Scheduled', titleAr: 'رسوم الوساطة مجدولة', actor: 'Alyaa', text: 'Brokerage fee payment is pending. The customer needs to review and complete the payment of {amount} to proceed.', textAr: 'دفع رسوم الوساطة معلق. يحتاج العميل لمراجعة وإتمام الدفع للمتابعة.' },
  { time: T, icon: 'bank-warning', title: 'RECALLED', titleAr: 'تم الاسترجاع', actor: 'Alyaa', text: 'Brokerage fee payment is pending. The customer needs to review and complete the payment of {amount} to proceed.', textAr: 'دفع رسوم الوساطة معلق. يحتاج العميل لمراجعة وإتمام الدفع للمتابعة.', recalled: true },
  { time: T, icon: 'bank', title: 'Brokerage fees Sent', titleAr: 'تم إرسال رسوم الوساطة', actor: 'Alyaa', text: 'Brokerage fee payment is pending. The customer needs to review and complete the payment of {amount} to proceed.', textAr: 'دفع رسوم الوساطة معلق. يحتاج العميل لمراجعة وإتمام الدفع للمتابعة.' },
  { time: T, icon: 'bank-warning', title: 'Brokerage fees Scheduled', titleAr: 'رسوم الوساطة مجدولة', actor: 'Alyaa', text: 'Brokerage fee payment is pending. The customer needs to review and complete the payment of {amount} to proceed.', textAr: 'دفع رسوم الوساطة معلق. يحتاج العميل لمراجعة وإتمام الدفع للمتابعة.' },
  { time: T, icon: 'provider', title: 'Text Message', titleAr: 'رسالة نصية', actor: 'provider', actorAr: 'المزود', actorType: 'provider', text: 'Title for text message\n"The body for text message, this can be so long and takes space so much. Let\'s try to make example of long text here. Yes, so long."', textAr: 'عنوان الرسالة النصية\n"نص الرسالة النصية، قد يكون طويلاً ويشغل مساحة كبيرة. لنأخذ مثالاً على نص طويل. نعم، طويل جداً."' },
  { time: T, icon: 'provider', title: 'Text Message', titleAr: 'رسالة نصية', actor: 'provider', actorAr: 'المزود', actorType: 'provider', text: 'Title for text message\n"The body for text message, this can be so long and takes space so much. Let\'s try to make example of long text here. Yes, so long."', textAr: 'عنوان الرسالة النصية\n"نص الرسالة النصية، قد يكون طويلاً ويشغل مساحة كبيرة. لنأخذ مثالاً على نص طويل. نعم، طويل جداً."' },
  { time: T, icon: 'provider', title: 'Loan Disbursed', titleAr: 'تم صرف القرض', actor: 'provider', actorAr: 'المزود', actorType: 'provider' },
  { time: T, icon: 'provider', title: 'Provider reviewing the order', titleAr: 'المزود يراجع الطلب', actor: 'provider', actorAr: 'المزود', actorType: 'provider' },
  { time: T, icon: 'provider', title: 'Text Message', titleAr: 'رسالة نصية', actor: 'provider', actorAr: 'المزود', actorType: 'provider', text: 'Title for text message\n"The body for text message, this can be so long and takes space so much. Let\'s try to make example of long text here. Yes, so long."', textAr: 'عنوان الرسالة النصية\n"نص الرسالة النصية، قد يكون طويلاً ويشغل مساحة كبيرة."' },
  { time: T, icon: 'review', title: 'Review the customer, Order, and Approve', titleAr: 'مراجعة بيانات العميل والطلب والموافقة عليه', actor: 'Brokerage Team Agent', actorAr: 'وكيل فريق الوساطة' },
  { time: T, icon: 'aml', title: 'AML Team approves order', titleAr: 'فريق مكافحة غسل الأموال يوافق على الطلب', actor: 'Alyaa' },
  { time: T, icon: 'phone', title: 'Customer confirms during call', titleAr: 'تأكيد العميل أثناء المكالمة', actor: 'Alyaa' },
  { time: T, icon: 'phone', title: 'No response (Without SLA)', titleAr: 'لا استجابة (بدون SLA)', actor: 'Mike' },
  { time: T, icon: 'phone', title: '3rd call attempt – no response, notification sent', titleAr: 'المحاولة الثالثة – لا استجابة، تم الإخطار', actor: 'Alyaa' },
  { time: T, icon: 'phone', title: '2nd call attempt – no response', titleAr: 'المحاولة الثانية – لا استجابة', actor: 'Alyaa' },
  { time: T, icon: 'phone', title: '1st call attempt – no response', titleAr: 'المحاولة الأولى – لا استجابة', actor: 'Alyaa' },
  { time: T, icon: 'system', title: 'System auto-transitions to Servicing', titleAr: 'النظام ينقل تلقائياً إلى الخدمة', actor: 'System Automation', actorAr: 'النظام الآلي', actorType: 'system' },
  { time: T, icon: 'system', title: 'Order assigned to Brokerage Team', titleAr: 'تم تعيين الطلب لفريق الوساطة', actor: 'System Automation', actorAr: 'النظام الآلي', actorType: 'system' },
  { time: T, icon: 'system', title: 'Order forwarded to AML', titleAr: 'تم إرسال الطلب إلى AML', actor: 'System Automation', actorAr: 'النظام الآلي', actorType: 'system' },
  { time: T, icon: 'created', title: 'Order is created', titleAr: 'تم إنشاء الطلب', actor: 'System', actorAr: 'النظام', actorType: 'system' },
];

function TimelineIcon({ type }: { type: TimelineIconType }) {
  const configs: Record<TimelineIconType, { bg: string; darkBg: string; icon: React.ReactNode }> = {
    'bank':         { bg: 'bg-[#dcfae6]', darkBg: 'dark:bg-emerald-950', icon: <Building2 className="w-4 h-4 text-[#079455]" /> },
    'bank-warning': { bg: 'bg-[#fef3c7]', darkBg: 'dark:bg-amber-950',   icon: <Building2 className="w-4 h-4 text-[#ea8808]" /> },
    'message':      { bg: 'bg-[#fff5e7]', darkBg: 'dark:bg-amber-950',   icon: <MessageCircle className="w-4 h-4 text-[#ea8808]" /> },
    'provider':     { bg: 'bg-[#eff8ff]', darkBg: 'dark:bg-blue-950',    icon: <Building2 className="w-4 h-4 text-[#0063f5]" /> },
    'phone':        { bg: 'bg-[#eff8ff]', darkBg: 'dark:bg-blue-950',    icon: <PhoneCall className="w-4 h-4 text-[#0063f5]" /> },
    'review':       { bg: 'bg-[#f4f3ff]', darkBg: 'dark:bg-violet-950',  icon: <ShieldCheck className="w-4 h-4 text-[#7c3aed]" /> },
    'aml':          { bg: 'bg-[#fff5e7]', darkBg: 'dark:bg-amber-950',   icon: <ShieldCheck className="w-4 h-4 text-[#ea8808]" /> },
    'system':       { bg: 'bg-[#f2f4f7]', darkBg: 'dark:bg-slate-800',   icon: <Settings className="w-4 h-4 text-[#667085] dark:text-slate-400" /> },
    'created':      { bg: 'bg-[#dcfae6]', darkBg: 'dark:bg-emerald-950', icon: <AlertTriangle className="w-4 h-4 text-[#079455]" /> },
  };
  const c = configs[type];
  return (
    <div className={`w-8 h-8 rounded-full ${c.bg} ${c.darkBg} flex items-center justify-center shrink-0`}>
      {c.icon}
    </div>
  );
}

const t = {
  en: {
    orderId: 'Order ID',
    created: 'Created:',
    close: 'Close',
    priority: 'Priority',
    sla: 'SLA • Escalation in...',
    breached: 'Breached',
    escalationNow: 'Escalation now',
    aiScore: 'AI Score',
    customerDetails: 'Customer Details',
    more: 'More',
    masdrSalary: 'MASDR Salary',
    simahScore: 'SIMAH Score',
    provider: 'Provider',
    loanAmount: 'Loan Amount',
    apr: 'APR:',
    trackingTimeline: 'Tracking Timeline',
    sendMessage: 'Send message',
    by: 'by',
    counterOffer: 'Counter offer',
    productNameLabel: 'Product name',
    loanAmountField: 'Loan amount',
    loanPeriod: 'Loan Period',
    monthlyInstallment: 'Monthly Installment',
    refund: 'Refund',
    hold: 'Hold',
    reject: 'Reject',
    approve: 'Approve',
    takeAction: 'Take Action',
    actions: ['Disbursement', 'Closing', 'Contract Signing', 'Approve', 'Underwriting'],
    pipeline: ['Messaging Status', 'Messaging Status', 'Counter Offer Status', 'Payment Status'],
  },
  ar: {
    orderId: 'رقم الطلب',
    created: 'أُنشئ:',
    close: 'يغلق',
    priority: 'الأولوية',
    sla: 'SLA • التصعيد في...',
    breached: 'تم الاختراق',
    escalationNow: 'تصعيد الآن',
    aiScore: 'نتيجة AI',
    customerDetails: 'بيانات العميل',
    more: 'أكثر',
    masdrSalary: 'راتب MASDR',
    simahScore: 'مؤشر SIMAH',
    provider: 'مزود',
    loanAmount: 'مبلغ القرض',
    apr: 'APR:',
    trackingTimeline: 'تتبع الجدول الزمني',
    sendMessage: 'إرسال رسالة',
    by: 'من',
    counterOffer: 'عرض مضاد',
    productNameLabel: 'اسم المنتج',
    loanAmountField: 'مبلغ القرض',
    loanPeriod: 'مدة القرض',
    monthlyInstallment: 'القسط الشهري',
    refund: 'استرداد',
    hold: 'يمسك',
    reject: 'يرفض',
    approve: 'يعتمد',
    takeAction: 'اتخاذ إجراء',
    actions: ['صرف', 'إغلاق', 'توقيع العقد', 'موافقة', 'اكتتاب'],
    pipeline: ['حالة المراسلة', 'حالة المراسلة', 'حالة العرض المضاد', 'حالة الدفع'],
  },
} as const;

export default function OrderDetailPanel({
  order,
  onClose,
  onOpenCustomerDetails,
  onOpenProductDetails,
  customerPanelOpen = false,
  className,
}: {
  order: Order;
  onClose: () => void;
  onOpenCustomerDetails: () => void;
  onOpenProductDetails: () => void;
  customerPanelOpen?: boolean;
  className?: string;
}) {
  const { lang } = useLang();
  const i18n = t[lang];
  const isAr = lang === 'ar';

  const PIPELINE_ITEMS = [
    { id: 'order-status', label: i18n.pipeline[0], value: 'PENDING', primary: true },
    { id: 'messaging-status', label: i18n.pipeline[1], value: 'PENDING' },
    { id: 'counter-offer-status', label: i18n.pipeline[2], value: 'WAITING' },
    { id: 'payment-status', label: i18n.pipeline[3], value: 'PENDING' },
  ];

  const [statusOverlayOpen, setStatusOverlayOpen] = useState(false);
  const [messageHubOpen, setMessageHubOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const [activePipeline, setActivePipeline] = useState<{ label: string; value: string } | null>(null);
  const [fillHeight, setFillHeight] = useState(false);
  const [dropupOpen, setDropupOpen] = useState(false);
  const dropupRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropupOpen) return;
    function handleClick(e: MouseEvent) {
      if (dropupRef.current && !dropupRef.current.contains(e.target as Node)) {
        setDropupOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropupOpen]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const obs = new ResizeObserver(([entry]) => setFillHeight(entry.contentRect.height > 705));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const pri = priorityConfig[order.priority];
  const ai  = getAiGroup(order.aiScore);
  const isBreached = order.slaProgress <= 10;
  const slaColor = order.slaProgress >= 60 ? '#079455' : order.slaProgress >= 25 ? '#b54708' : '#fb2c36';
  const slaTextColor = order.slaProgress >= 60 ? 'text-[#079455]' : order.slaProgress >= 25 ? 'text-[#b54708]' : 'text-[#d91c1c]';
  const amount = order.loanAmount.replace(/﷼\s?/, '');
  const contentWidthClass = 'w-full';

  function handlePipelineClick(item: { label: string; value: string; primary?: boolean }) {
    if (item.primary) {
      setStatusOverlayOpen(true);
    } else {
      setActivePipeline(item);
    }
  }

  return (
    <>
    <div
      className={cn(
        'flex flex-col min-w-0 overflow-hidden bg-white dark:bg-slate-950',
        className ?? (customerPanelOpen
          ? 'w-[588px] shrink-0 rounded-[6px] border border-[#e2e3e4] dark:border-slate-800'
          : 'flex-1')
      )}
    >

      {/* ── Full-width Header ── */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-[#f2f4f7] shrink-0 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-[12px] leading-[18px] font-medium text-[#697586] dark:text-slate-400">{i18n.orderId}</span>
          <span className="text-[18px] leading-[28px] font-semibold text-[#202a39] dark:text-slate-100">{order.id}</span>
        </div>
        <div className="flex items-center gap-2">
          {!customerPanelOpen && (
            <span className="flex items-center gap-1.5 text-[13px] text-[#667085] dark:text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {i18n.created} <strong className="text-[#181d27] dark:text-slate-100">{order.createdAt}</strong>
            </span>
          )}
          <span className="flex items-center gap-1.5 min-w-[120px] px-[14px] py-2.5 rounded-[8px] text-[14px] leading-5 font-medium text-[#202a39] dark:text-slate-100">
            <Calendar className="w-4 h-4 text-[#697586]" />
            {order.updatedAt}
          </span>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-4 py-3 rounded-full border border-[#fee2e2] dark:border-white/25 text-[#d91c1c] text-[14px] font-semibold hover:bg-[#fff1f3] transition-colors"
          >
            {i18n.close} <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── Middle row: content + timeline ── */}
      <div className="flex flex-1 min-h-0 divide-x divide-[#f2f4f7] overflow-hidden dark:divide-slate-800">

        {/* Left: scrollable content */}
        <div ref={scrollRef} className="flex flex-col flex-1 min-w-0 overflow-y-auto">
          <div className={`flex flex-col gap-4 p-6 items-start ${fillHeight ? 'min-h-full' : ''}`}>
            {/* Priority + SLA + AI Score */}
            <div className={`flex items-start justify-between pb-3 ${contentWidthClass} max-w-full`}>
              <div className="flex items-start gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] leading-[18px] text-[#697586] font-medium dark:text-slate-400">{i18n.priority}</span>
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${pri.bg} ${pri.border}`}>
                    <Flag className={`w-4 h-4 ${pri.color}`} />
                    <span className={`text-[16px] leading-5 font-semibold ${pri.color}`}>{isAr ? pri.labelAr : pri.labelEn}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px] w-[250px]">
                  <span className="text-[12px] leading-[18px] text-[#697586] font-medium truncate dark:text-slate-400">{i18n.sla}</span>
                  <div className="h-[6px] rounded-full bg-[#e5e7eb] overflow-hidden w-full dark:bg-slate-800">
                    <div
                      className="h-full transition-all duration-700"
                      style={{ width: `${Math.min(100 - order.slaProgress, 98)}%`, backgroundColor: slaColor }}
                    />
                  </div>
                  <span className={`text-[12px] leading-4 font-medium ${slaTextColor}`}>
                    {isBreached ? i18n.breached : order.slaTimeLeft}
                    <span className="ms-[11px] font-normal text-[#6b7280] dark:text-slate-400">
                      {isBreached ? i18n.escalationNow : order.slaEscalation}
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[12px] leading-[18px] text-[#697586] font-medium dark:text-slate-400">{i18n.aiScore}</span>
                <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[14px] font-semibold ${ai.bg} ${ai.border} ${ai.color}`}>
                  <Star className="w-4 h-4" />{order.aiScore}
                </span>
              </div>
            </div>

            {/* Pipeline — 4 clickable buttons */}
            <div className={`flex items-stretch gap-2 ${contentWidthClass} max-w-full`}>
              {PIPELINE_ITEMS.map((item) => {
                const isActive = item.primary;
                return (
                  <button
                    key={item.id}
                    onClick={() => handlePipelineClick(item)}
                    className={`flex flex-1 min-w-0 flex-col gap-1 px-3 py-2 rounded-[6px] border text-start transition-colors ${
                      isActive
                        ? 'bg-[#fef8f0] border-[#fee4c3] hover:bg-[#fef0dc] dark:bg-amber-950 dark:border-amber-900 dark:hover:bg-amber-900/60'
                        : 'bg-white border-[#e9eaeb] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#f9fafb] dark:bg-slate-900 dark:border-slate-700 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className={`text-[12px] leading-[18px] truncate ${isActive ? 'text-[#ea8808] dark:text-amber-300' : 'text-[#717680] dark:text-slate-400'}`}>
                      {item.label}
                    </span>
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-[16px] font-bold leading-5 whitespace-nowrap ${isActive ? 'text-[#a15e07] dark:text-amber-200' : 'text-[#181d27] dark:text-slate-100'}`}>
                        {item.value}
                      </span>
                      <ArrowRight className={`w-3 h-3 shrink-0 rtl:rotate-180 ${isActive ? 'text-[#a15e07] dark:text-amber-200' : 'text-[#717680] dark:text-slate-400'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Customer Details */}
            <div className={`relative overflow-hidden rounded-[6px] border border-[#bbd5fb] dark:border-white/25 bg-[#0063f5] ${contentWidthClass} max-w-full flex flex-col gap-6 px-6 pb-4 pt-6 ${fillHeight ? 'flex-1' : ''}`}>
              <img
                aria-hidden
                src={imgBrandWatermark}
                alt=""
                className="absolute -end-10 bottom-[-36px] h-[211px] w-[179px] opacity-35 select-none"
              />
              <div className="flex items-center justify-between">
                <span className="relative text-[#92baf6] text-[16px] font-semibold">{i18n.customerDetails}</span>
                <button
                  onClick={onOpenCustomerDetails}
                  className="relative flex items-center gap-1.5 rounded-full border border-[#77a6ed] px-3 py-2 text-[#d7e7fe] text-[12px] font-semibold hover:bg-white/10 transition-colors"
                >
                  {i18n.more} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
              <div className="relative flex flex-col gap-2">
              <p className="text-white text-[24px] leading-[32px] font-bold">{order.customerName}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="flex items-center gap-1.5 text-white/80 text-[13px]">
                  <User className="w-3.5 h-3.5" />{order.customerId}
                </span>
                <span className="text-white/40">•</span>
                <span className="flex items-center gap-1.5 text-white/80 text-[13px]">
                  <Phone className="w-3.5 h-3.5" />{order.customerPhone}
                </span>
                <span className="text-white/40">•</span>
                <span className="flex items-center gap-1.5 text-white/80 text-[13px]">
                  <Mail className="w-3.5 h-3.5" />{order.customerEmail}
                </span>
              </div>
              </div>
              <div className="relative flex items-center gap-10">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[#92baf6] text-[16px] font-semibold">{i18n.masdrSalary}</span>
                  <span className="text-white text-[24px] font-bold flex items-center gap-1">
                    <SARSymbol className="w-5 h-5 opacity-90" /> 25,000
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[#92baf6] text-[16px] font-semibold">{i18n.simahScore}</span>
                  <span className="text-white text-[24px] font-bold">200</span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className={`relative overflow-hidden rounded-[6px] border border-[#e2e3e4] bg-white ${contentWidthClass} max-w-full px-6 pb-4 pt-6 flex flex-col ${customerPanelOpen ? 'gap-11' : 'gap-12'} dark:border-slate-800 dark:bg-slate-900 ${fillHeight ? 'flex-1' : ''}`}>
              <img
                aria-hidden
                src={imgSarWatermark}
                alt=""
                className="absolute -end-8 bottom-[-22px] h-[231px] w-[191px] select-none opacity-80 dark:opacity-10"
              />
              <div className="flex items-center justify-between">
                <div className="relative flex items-center gap-4 min-w-0">
                  {!customerPanelOpen && <img src={imgProductIcon} alt="" className="w-16 h-16 shrink-0" />}
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-[24px] leading-[32px] font-bold text-[#364152] truncate rtl:text-end dark:text-slate-100">{order.productName}</span>
                    <span className="text-start rtl:text-end text-[14px] leading-5 text-[#364152] truncate dark:text-slate-200" dir="auto">{order.productNameAr}</span>
                  </div>
                </div>
                <button
                  onClick={onOpenProductDetails}
                  className="relative flex items-center gap-1.5 rounded-full border border-[#e2e3e4] px-3 py-2 text-[#697586] text-[12px] font-semibold hover:bg-[#f8fafc] transition-colors dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  {i18n.more} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
              <div className={`relative grid ${customerPanelOpen ? 'grid-cols-[189px_189px_66px] gap-6' : 'grid-cols-[1.4fr_1.15fr_.6fr] gap-8'} items-end`}>
                <div className="flex flex-col gap-3">
                  <span className="text-[16px] leading-[26px] text-[#697586] font-semibold dark:text-slate-400">{i18n.provider}</span>
                  <img src={imgBankLogo} alt="Alinma Bank" className="h-10 w-[124px] object-contain object-left" />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[16px] leading-[26px] text-[#697586] font-semibold dark:text-slate-400">{i18n.loanAmount}</span>
                  <span className={`${customerPanelOpen ? 'text-[24px] leading-[32px]' : 'text-[36px] leading-[44px]'} font-bold text-[#181d27] flex items-center gap-2 dark:text-slate-100`}>
                    <SARSymbol className={customerPanelOpen ? 'w-6 h-6' : 'w-8 h-8'} />{amount}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[16px] leading-[26px] text-[#697586] font-semibold dark:text-slate-400">{i18n.apr}</span>
                  <span className="text-[24px] leading-[32px] font-bold text-[#181d27] dark:text-slate-100">{order.apr}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Tracking Timeline */}
        {!customerPanelOpen && (
          <div className="w-[460px] shrink-0 flex flex-col overflow-y-auto px-6 pt-6 pb-4">
            <div className="pb-4 shrink-0 flex items-center justify-between w-full">
              <span className="font-semibold text-[16px] leading-normal text-[#697586]">{i18n.trackingTimeline}</span>
              <button onClick={() => setMessageHubOpen(true)} className="cursor-pointer flex items-center gap-1 border border-[#d7e7fe] rounded-[8px] px-2 py-2 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] min-w-[120px]">
                <MessageCircle className="w-5 h-5 text-[#0063f5]" />
                <span className="text-[14px] font-medium leading-5 tracking-[0.014px] text-[#0063f5] px-0.5">{i18n.sendMessage}</span>
                <ChevronRight className="w-5 h-5 text-[#0063f5] rtl:rotate-180" />
              </button>
            </div>
            <div className="relative flex flex-col">
              <span aria-hidden className="absolute start-[18px] top-[26px] bottom-0 w-px bg-[#e3e8ef] dark:bg-slate-800" />
              {MOCK_TIMELINE.map((event, i) => (
                <div key={i} className="relative flex gap-5">
                  <div className="flex flex-col items-center pt-[22px] shrink-0 w-9">
                    <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${getDotColor(event.icon)}`} />
                  </div>
                  <div className={cn(
                    'flex flex-col gap-1.5 pb-6 flex-1 min-w-0',
                    event.recalled && 'bg-[#fef3c7] dark:bg-amber-950/40 rounded-[8px] px-3 py-2 -mx-3'
                  )}>
                    <span className="text-[12px] leading-[18px] text-[#9aa4b2] dark:text-slate-400">{event.time}</span>
                    <div className="flex items-start gap-2">
                      <TimelineIcon type={event.icon} />
                      <p className="text-[14px] text-[#414651] leading-5 dark:text-slate-100 min-w-0 pt-1.5">
                        <span className="font-semibold">{isAr && event.titleAr ? event.titleAr : event.title}</span>
                        {' '}
                        <span className="text-[#697586] font-normal dark:text-slate-400">{i18n.by}</span>
                        {' '}
                        <span className={`font-semibold ${getActorColor(event.actorType)}`}>{isAr && event.actorAr ? event.actorAr : event.actor}</span>
                      </p>
                    </div>
                    {event.text && (
                      <p className="text-[13px] text-[#414651] leading-[18px] tracking-[0.4px] whitespace-pre-line dark:text-slate-400 ps-10">{isAr && event.textAr ? event.textAr : event.text}</p>
                    )}
                    {event.action && (
                      <div className="ps-10">
                        <button className="self-start flex items-center gap-2 min-w-[103px] justify-center px-4 py-2 rounded-[6px] border border-[#80b1fa] text-[14px] font-semibold text-[#0063f5] hover:bg-[#f8fafc] transition-colors dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
                          <Plus className="w-4 h-4" /> {i18n.refund}
                        </button>
                      </div>
                    )}
                    {event.counterOffer && (
                      <div className="flex flex-col gap-0.5 ps-10">
                        <div className="flex items-center gap-1.5 mb-1">
                          <RotateCcw className="w-3 h-3 text-[#667085] dark:text-slate-400" />
                          <span className="text-[11px] font-medium text-[#667085] dark:text-slate-400">{i18n.counterOffer}</span>
                        </div>
                        <div className="border border-[#e3e8ef] rounded-[6px] p-3 flex flex-col gap-2 dark:border-slate-800 dark:bg-slate-900">
                          <div className="flex items-center gap-2">
                            <img src={imgBankLogo} alt="Bank" className="h-6 w-auto object-contain" />
                            <div className="flex flex-col">
                              <span className="text-[10px] text-[#697586] dark:text-slate-400">{i18n.productNameLabel}</span>
                              <span className="text-[12px] font-semibold text-[#181d27] dark:text-slate-100">Personal Loan for Senior Employee</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                            {[
                              { labelEn: 'Loan amount',         labelAr: i18n.loanAmountField, value: '99,999,999.99' },
                              { labelEn: 'Loan Period',         labelAr: i18n.loanPeriod,      value: '999 month' },
                              { labelEn: 'Monthly Installment', labelAr: i18n.monthlyInstallment, value: '83,333.33' },
                              { labelEn: 'APR',                 labelAr: 'APR',                value: '99.99%' },
                            ].map((row) => (
                              <div key={row.labelEn} className="flex flex-col gap-0.5">
                                <span className="text-[10px] text-[#697586] dark:text-slate-400">{isAr ? row.labelAr : row.labelEn}</span>
                                <span className="text-[11px] font-semibold text-[#181d27] dark:text-slate-100">{row.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>{/* end middle row */}

      {/* ── Full-width Footer ── */}
      <div className="border-t border-[#e9eaeb] px-8 py-4 flex items-center justify-between shrink-0 bg-white dark:border-slate-800 dark:bg-slate-950">
        <button className="min-w-[120px] px-[14px] py-2.5 border border-[#d5d7da] rounded-[8px] text-[14px] leading-5 font-medium text-[#414651] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9fafb] transition-colors dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
          {i18n.hold}
        </button>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setActiveAction('Reject')}
            className="min-w-[120px] px-[18px] py-3 border border-[#d5d7da] rounded-[8px] text-[16px] leading-[26px] font-medium text-[#414651] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9fafb] transition-colors dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {i18n.reject}
          </button>
          {/* Take Action dropup */}
          <div ref={dropupRef} className="relative">
            {dropupOpen && (
              <div className="absolute bottom-full end-0 mb-2 min-w-[180px] bg-white border border-[#e9eaeb] rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.05),0px_4px_6px_-2px_rgba(10,13,18,0.01),0px_2px_2px_-1px_rgba(10,13,18,0.02)] overflow-hidden z-20 dark:bg-slate-900 dark:border-slate-700">
                <div className="py-1">
                  {(['Disbursement', 'Closing', 'Contract Signing', 'Approve', 'Underwriting'] as const).map((key, idx) => (
                    <button
                      key={key}
                      onClick={() => { setDropupOpen(false); setActiveAction(key); }}
                      className="w-full text-start px-4 py-2 text-[14px] leading-6 font-medium text-[#414651] hover:bg-[#f5f8ff] transition-colors dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      {i18n.actions[idx]}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <button
              onClick={() => setDropupOpen(o => !o)}
              className="flex items-center gap-1.5 min-w-[120px] px-[18px] py-3 bg-[#0063f5] rounded-[8px] border-2 border-[rgba(255,255,255,0.12)] text-[16px] leading-[26px] font-medium text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] hover:bg-[#004fc6] transition-colors"
            >
              {i18n.takeAction}
              <ChevronUp className={cn('w-5 h-5 transition-transform', !dropupOpen && 'rotate-180')} />
            </button>
          </div>
        </div>
      </div>
    </div>

    {statusOverlayOpen && (
      <OrderStatusOverlay order={order} onClose={() => setStatusOverlayOpen(false)} />
    )}
    {activePipeline && (
      <PipelineStatusOverlay item={activePipeline} onClose={() => setActivePipeline(null)} />
    )}
    {messageHubOpen && (
      <MessageHubOverlay onClose={() => setMessageHubOpen(false)} order={{ productName: order.productName, productNameAr: order.productNameAr }} />
    )}
    {activeAction && (
      <ActionModal
        action={activeAction}
        order={order}
        onClose={() => setActiveAction(null)}
      />
    )}
    </>
  );
}
