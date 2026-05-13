'use client';
import { useState } from 'react';
import { X, Calendar, User, Phone, Mail, ArrowRight, Flag, Star, Building2, MessageCircle, Plus, RotateCcw } from 'lucide-react';
import SARSymbol from '@/components/ui/SARSymbol';
import { cn } from '@/lib/utils';
import OrderStatusOverlay from './OrderStatusOverlay';
import ConfirmSubmissionModal from './ConfirmSubmissionModal';
import PipelineStatusOverlay from './PipelineStatusOverlay';

type Priority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
type OrderStatus = 'Pending' | 'Approved' | 'Rejected' | 'Under Review' | 'Completed';

type Order = {
  id: string; createdAt: string; updatedAt: string; priority: Priority;
  slaTimeLeft: string; slaEscalation: string; slaProgress: number; aiScore: number;
  customerName: string; customerId: string; customerPhone: string; customerEmail: string;
  productName: string; productNameAr: string; status: OrderStatus;
  loanAmount: string; apr: string; managementFees: string; brokerageFees: string;
};

const priorityConfig: Record<Priority, { color: string; bg: string; border: string; label: string }> = {
  LOW:      { color: 'text-[#079455] dark:text-emerald-300', bg: 'bg-[#ecfdf3] dark:bg-emerald-950', border: 'border-[#abefc6] dark:border-emerald-900', label: 'LOW' },
  MEDIUM:   { color: 'text-[#b54708] dark:text-amber-300', bg: 'bg-[#fffaeb] dark:bg-amber-950', border: 'border-[#fedf89] dark:border-amber-900', label: 'MEDIUM' },
  HIGH:     { color: 'text-[#d91c1c] dark:text-red-300', bg: 'bg-[#fff1f3] dark:bg-red-950', border: 'border-[#fda29b] dark:border-red-900', label: 'HIGH' },
  CRITICAL: { color: 'text-[#d91c1c] dark:text-red-300', bg: 'bg-[#fff1f3] dark:bg-red-950', border: 'border-[#fda29b] dark:border-red-900', label: 'HIGH' },
};

const statusConfig: Record<OrderStatus, { variant: 'warning' | 'success' | 'error' | 'info' | 'completed' }> = {
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

type TimelineEvent = {
  time: string;
  icon: 'bank' | 'message';
  title: string;
  actor: string;
  text: string;
  action?: string;
  counterOffer?: boolean;
};

const MOCK_TIMELINE: TimelineEvent[] = [
  {
    time: '2025-07-13 10:44:22',
    icon: 'bank',
    title: 'Brokerage fees Partially Refunded',
    actor: 'Alyaa',
    text: 'The partial refund request for {amount} has been successfully submitted. Status updated to Partially Refunded.',
    action: '+ Refund',
  },
  {
    time: '2025-07-13 10:44:22',
    icon: 'bank',
    title: 'Refund',
    actor: 'Alyaa',
    text: 'The refund request for {amount} has been successfully submitted. status updated to Refund.',
  },
  {
    time: '2025-07-13 10:44:22',
    icon: 'message',
    title: 'Text Message',
    actor: 'Alyaa',
    text: '"Updated offer"\n"Your offer has been updated."',
    counterOffer: true,
  },
];

function TimelineIcon({ type }: { type: 'bank' | 'message' }) {
  if (type === 'message')
    return (
      <div className="w-8 h-8 rounded-full bg-[#fff5e7] flex items-center justify-center shrink-0 dark:bg-amber-950">
        <MessageCircle className="w-4 h-4 text-[#ea8808]" />
      </div>
    );
  return (
    <div className="w-8 h-8 rounded-full bg-[#f2f4f7] flex items-center justify-center shrink-0 dark:bg-slate-800">
      <Building2 className="w-4 h-4 text-[#667085] dark:text-slate-400" />
    </div>
  );
}

const PIPELINE_ITEMS = [
  { id: 'order-status', label: 'Messaging Status', value: 'PENDING', primary: true },
  { id: 'messaging-status', label: 'Messaging Status', value: 'PENDING' },
  { id: 'counter-offer-status', label: 'Counter Offer Status', value: 'WAITING' },
  { id: 'payment-status', label: 'Payment Status', value: 'PENDING' },
];

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
  const [statusOverlayOpen, setStatusOverlayOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [activePipeline, setActivePipeline] = useState<{ label: string; value: string } | null>(null);

  const pri = priorityConfig[order.priority];
  const ai  = getAiGroup(order.aiScore);
  const isBreached = order.slaProgress <= 10;
  const amount = order.loanAmount.replace(/﷼\s?/, '');
  const contentWidthClass = customerPanelOpen ? 'w-[540px]' : 'w-[676px]';

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
          <span className="text-[12px] leading-[18px] font-medium text-[#697586] dark:text-slate-400">Order ID</span>
          <span className="text-[18px] leading-[28px] font-semibold text-[#202a39] dark:text-slate-100">{order.id}</span>
        </div>
        <div className="flex items-center gap-2">
          {!customerPanelOpen && (
            <span className="flex items-center gap-1.5 text-[13px] text-[#667085] dark:text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              Created: <strong className="text-[#181d27] dark:text-slate-100">{order.createdAt}</strong>
            </span>
          )}
          <span className="flex items-center gap-1.5 min-w-[120px] px-[14px] py-2.5 rounded-[8px] text-[14px] leading-5 font-medium text-[#202a39] dark:text-slate-100">
            <Calendar className="w-4 h-4 text-[#697586]" />
            {order.updatedAt}
          </span>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-4 py-3 rounded-full border border-[#fee2e2] text-[#d91c1c] text-[14px] font-semibold hover:bg-[#fff1f3] transition-colors"
          >
            Close <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── Middle row: content + timeline ── */}
      <div className="flex flex-1 min-h-0 divide-x divide-[#f2f4f7] overflow-hidden dark:divide-slate-800">

        {/* Left: scrollable content */}
        <div className="flex flex-col flex-1 min-w-0 overflow-y-auto">
          <div className="flex flex-col gap-4 p-6 items-start">
            {/* Priority + SLA + AI Score */}
            <div className={`flex items-start justify-between pb-3 ${contentWidthClass} max-w-full`}>
              <div className="flex items-start gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] leading-[18px] text-[#697586] font-medium dark:text-slate-400">Priority</span>
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${pri.bg} ${pri.border}`}>
                    <Flag className={`w-4 h-4 ${pri.color}`} />
                    <span className={`text-[16px] leading-5 font-semibold ${pri.color}`}>{pri.label}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px] w-[250px]">
                  <span className="text-[12px] leading-[18px] text-[#697586] font-medium truncate dark:text-slate-400">SLA • Escalation in...</span>
                  <div className="h-[6px] rounded-full bg-[#e5e7eb] overflow-hidden w-full dark:bg-slate-800">
                    <div
                      className={`h-full ${isBreached ? 'bg-[#fb2c36] w-full' : 'bg-[#079455]'}`}
                      style={!isBreached ? { width: `${order.slaProgress}%` } : undefined}
                    />
                  </div>
                  <span className={`text-[12px] leading-4 font-medium ${isBreached ? 'text-[#d91c1c]' : 'text-[#079455]'}`}>
                    {isBreached ? 'Breached' : order.slaTimeLeft}
                    <span className="ml-[11px] font-normal text-[#6b7280] dark:text-slate-400">
                      {isBreached ? 'Escalation now' : order.slaEscalation}
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[12px] leading-[18px] text-[#697586] font-medium dark:text-slate-400">AI Score</span>
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
                    className={`flex flex-1 min-w-0 flex-col gap-1 px-3 py-2 rounded-[6px] border text-left transition-colors ${
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
                      <ArrowRight className={`w-3 h-3 shrink-0 ${isActive ? 'text-[#a15e07] dark:text-amber-200' : 'text-[#717680] dark:text-slate-400'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Customer Details */}
            <div className={`relative overflow-hidden rounded-[6px] border border-[#bbd5fb] bg-[#0063f5] ${contentWidthClass} max-w-full flex flex-col gap-6 px-6 pb-4 pt-6`}>
              <img
                aria-hidden
                src={imgBrandWatermark}
                alt=""
                className="absolute -right-10 bottom-[-36px] h-[211px] w-[179px] opacity-35 select-none"
              />
              <div className="flex items-center justify-between">
                <span className="relative text-[#92baf6] text-[16px] font-semibold">Customer Details</span>
                <button
                  onClick={onOpenCustomerDetails}
                  className="relative flex items-center gap-1.5 rounded-full border border-[#77a6ed] px-3 py-2 text-[#d7e7fe] text-[12px] font-semibold hover:bg-white/10 transition-colors"
                >
                  More <ArrowRight className="w-4 h-4" />
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
                  <span className="text-[#92baf6] text-[16px] font-semibold">MASDR Salary</span>
                  <span className="text-white text-[24px] font-bold flex items-center gap-1">
                    <SARSymbol className="w-5 h-5 opacity-90" /> 25,000
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[#92baf6] text-[16px] font-semibold">SIMAH Score</span>
                  <span className="text-white text-[24px] font-bold">200</span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className={`relative overflow-hidden rounded-[6px] border border-[#e2e3e4] bg-white ${contentWidthClass} max-w-full h-[255px] px-6 pb-4 pt-6 flex flex-col ${customerPanelOpen ? 'gap-11' : 'gap-12'} dark:border-slate-800 dark:bg-slate-900`}>
              <img
                aria-hidden
                src={imgSarWatermark}
                alt=""
                className="absolute -right-8 bottom-[-22px] h-[231px] w-[191px] select-none"
              />
              <div className="flex items-center justify-between">
                <div className="relative flex items-center gap-4 min-w-0">
                  {!customerPanelOpen && <img src={imgProductIcon} alt="" className="w-16 h-16 shrink-0" />}
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-[24px] leading-[32px] font-bold text-[#364152] truncate dark:text-slate-100">{order.productName}</span>
                    <span className="text-left text-[14px] leading-5 text-[#364152] truncate dark:text-slate-200" dir="ltr">{order.productNameAr}</span>
                  </div>
                </div>
                <button
                  onClick={onOpenProductDetails}
                  className="relative flex items-center gap-1.5 rounded-full border border-[#e2e3e4] px-3 py-2 text-[#697586] text-[12px] font-semibold hover:bg-[#f8fafc] transition-colors dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className={`relative grid ${customerPanelOpen ? 'grid-cols-[189px_189px_66px] gap-6' : 'grid-cols-[1.4fr_1.15fr_.6fr] gap-8'} items-end`}>
                <div className="flex flex-col gap-3">
                  <span className="text-[16px] leading-[26px] text-[#697586] font-semibold dark:text-slate-400">Provider</span>
                  <img src={imgBankLogo} alt="Alinma Bank" className="h-10 w-[124px] object-contain object-left" />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[16px] leading-[26px] text-[#697586] font-semibold dark:text-slate-400">Loan Amount</span>
                  <span className={`${customerPanelOpen ? 'text-[24px] leading-[32px]' : 'text-[36px] leading-[44px]'} font-bold text-[#181d27] flex items-center gap-2 dark:text-slate-100`}>
                    <SARSymbol className={customerPanelOpen ? 'w-6 h-6' : 'w-8 h-8'} />{amount}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[16px] leading-[26px] text-[#697586] font-semibold dark:text-slate-400">APR:</span>
                  <span className="text-[24px] leading-[32px] font-bold text-[#181d27] dark:text-slate-100">{order.apr}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Tracking Timeline */}
        {!customerPanelOpen && (
          <div className="w-[460px] shrink-0 flex flex-col overflow-y-auto px-6 pt-6 pb-4">
            <div className="pb-4 shrink-0">
              <span className="text-[18px] leading-[28px] font-semibold text-[#697586] dark:text-slate-100">Tracking Timeline</span>
            </div>
            <div className="relative flex flex-col">
              <span aria-hidden className="absolute left-[18px] top-5 bottom-0 w-px bg-[#e3e8ef] dark:bg-slate-800" />
              {MOCK_TIMELINE.map((event, i) => (
                <div key={i} className="relative flex gap-5">
                  <div className="flex flex-col items-center pt-2 shrink-0 w-9">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#d5d7da] shrink-0" />
                  </div>
                  <div className="flex flex-col gap-2 pb-8 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <TimelineIcon type={event.icon} />
                      <span className="text-[12px] leading-[18px] text-[#9aa4b2] dark:text-slate-400">{event.time}</span>
                    </div>
                    <p className="text-[14px] text-[#414651] leading-5 dark:text-slate-100">
                      <span className="font-semibold">{event.title}</span>
                      {' '}
                      <span className="text-[#697586] font-normal dark:text-slate-400">by</span>
                      {' '}
                      <span className="text-[#0063f5] font-semibold">{event.actor}</span>
                    </p>
                    <p className="text-[13px] text-[#414651] leading-[18px] tracking-[0.4px] whitespace-pre-line dark:text-slate-400">{event.text}</p>
                    {event.action && (
                      <button className="self-start flex items-center gap-2 min-w-[103px] justify-center px-4 py-2 rounded-[6px] border border-[#80b1fa] text-[14px] font-semibold text-[#0063f5] hover:bg-[#f8fafc] transition-colors dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
                        <Plus className="w-4 h-4" /> Refund
                      </button>
                    )}
                    {event.counterOffer && (
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-1.5 mb-1">
                          <RotateCcw className="w-3 h-3 text-[#667085] dark:text-slate-400" />
                          <span className="text-[11px] font-medium text-[#667085] dark:text-slate-400">Counter offer</span>
                        </div>
                        <div className="border border-[#e3e8ef] rounded-[6px] p-3 flex flex-col gap-2 dark:border-slate-800 dark:bg-slate-900">
                          <div className="flex items-center gap-2">
                            <img src={imgBankLogo} alt="Bank" className="h-6 w-auto object-contain" />
                            <div className="flex flex-col">
                              <span className="text-[10px] text-[#697586] dark:text-slate-400">Product name</span>
                              <span className="text-[12px] font-semibold text-[#181d27] dark:text-slate-100">Personal Loan for Senior Employee</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                            {[
                              { label: 'Loan amount',         value: '99,999,999.99' },
                              { label: 'Loan Period',         value: '999 month' },
                              { label: 'Monthly Installment', value: '83,333.33' },
                              { label: 'APR',                 value: '99.99%' },
                            ].map((row) => (
                              <div key={row.label} className="flex flex-col gap-0.5">
                                <span className="text-[10px] text-[#697586] dark:text-slate-400">{row.label}</span>
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
      <div className="border-t border-[#eef1f6] px-4 py-3 flex items-center justify-between shrink-0 bg-white dark:border-slate-800 dark:bg-slate-950">
        <button className="min-w-[120px] px-[14px] py-2.5 border border-[#d5d7da] rounded-[8px] text-[14px] leading-5 font-medium text-[#414651] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9fafb] transition-colors dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
          Hold
        </button>
        <div className="flex items-center gap-4">
          <button className="min-w-[120px] px-[14px] py-2.5 border border-[#d5d7da] rounded-[8px] text-[14px] leading-5 font-medium text-[#414651] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9fafb] transition-colors dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
            Reject
          </button>
          <button
            onClick={() => setConfirmModalOpen(true)}
            className="min-w-[120px] px-[14px] py-2.5 bg-[#0063f5] rounded-[8px] border-2 border-[rgba(255,255,255,0.12)] text-[14px] leading-5 font-medium text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] hover:bg-[#004fc6] transition-colors"
          >
            Approve
          </button>
        </div>
      </div>
    </div>

    {statusOverlayOpen && (
      <OrderStatusOverlay order={order} onClose={() => setStatusOverlayOpen(false)} />
    )}
    {activePipeline && (
      <PipelineStatusOverlay item={activePipeline} onClose={() => setActivePipeline(null)} />
    )}
    {confirmModalOpen && (
      <ConfirmSubmissionModal
        onConfirm={() => setConfirmModalOpen(false)}
        onCancel={() => setConfirmModalOpen(false)}
      />
    )}
    </>
  );
}
