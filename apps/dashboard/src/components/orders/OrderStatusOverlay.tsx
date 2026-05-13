'use client';
import { X, Maximize2, Lightbulb, MapPin, Lock, Clock, CheckCircle2 } from 'lucide-react';
import SARSymbol from '@/components/ui/SARSymbol';

const imgProductIcon = '/illustrations/simple-category-icon-perspective---personal.svg';

type OrderStatus = 'Pending' | 'Approved' | 'Rejected' | 'Under Review' | 'Completed';

type Order = {
  id: string;
  productName: string;
  loanAmount: string;
  status: OrderStatus;
};

type StageState = 'completed' | 'active' | 'locked';

const STAGES: { label: string; description: string; state: StageState }[] = [
  { label: 'Completed',        description: 'Where the order completed',                            state: 'locked'    },
  { label: 'Under Writing',    description: 'Where the provider prepare the loan business',          state: 'locked'    },
  { label: 'Under Processing', description: 'Where the order processing by the provider',            state: 'locked'    },
  { label: 'Pending',          description: 'Where the order waiting for back office team to confirm', state: 'active'  },
  { label: 'Process',          description: 'Where the IVR system works',                           state: 'completed' },
  { label: 'Created',          description: 'Where the order created',                              state: 'completed' },
];

function StageIcon({ state }: { state: StageState }) {
  if (state === 'completed')
    return (
      <div className="bg-[#17b26a] flex items-center justify-center p-[2px] rounded-full shrink-0">
        <CheckCircle2 className="w-2 h-2 text-white" strokeWidth={3} />
      </div>
    );
  if (state === 'active')
    return <Clock className="w-3 h-3 text-[#a15e07] shrink-0" />;
  return <Lock className="w-3 h-3 text-[#cdd4df] shrink-0" />;
}

function StageBadge({ label, state }: { label: string; state: StageState }) {
  if (state === 'completed')
    return (
      <span className="inline-flex items-center justify-end px-4 py-[9px] rounded-[40px] bg-[#ecf5ff] border border-[#88c3fd] text-[#1288fb] text-[14px] font-semibold whitespace-nowrap dark:border-sky-900 dark:bg-sky-950 dark:text-sky-300">
        {label}
      </span>
    );
  if (state === 'active')
    return (
      <span className="inline-flex items-center justify-end px-4 py-[9px] rounded-[40px] bg-[#fff5e7] border border-[#fdce88] text-[#a15e07] text-[14px] font-semibold whitespace-nowrap dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300">
        {label}
      </span>
    );
  return (
    <span className="inline-flex items-center justify-end px-4 py-[9px] rounded-[40px] bg-[#fcfcfd] border border-[#eef1f6] text-[#cdd4df] text-[14px] font-semibold whitespace-nowrap dark:border-slate-800 dark:bg-slate-900 dark:text-slate-600">
      {label}
    </span>
  );
}

export default function OrderStatusOverlay({
  order,
  onClose,
}: {
  order: Order;
  onClose: () => void;
}) {
  const amount = order.loanAmount.replace(/﷼\s?/, '');

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-[20px] bg-black/20"
        onClick={onClose}
      />

      {/* Sliding panel */}
      <div className="relative z-10 bg-white flex flex-col h-full w-[624px] p-6 gap-6 overflow-y-auto animate-slide-in-right dark:bg-slate-950">
        {/* Top buttons */}
        <div className="flex gap-2.5 items-center justify-end shrink-0 sticky top-0 bg-white pb-1 dark:bg-slate-950">
          <button
            className="border border-[#d5d7da] flex items-center justify-center p-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#f9fafb] transition-colors dark:border-slate-700 dark:hover:bg-slate-800"
            aria-label="Maximize"
          >
            <Maximize2 className="w-5 h-5 text-[#414651] dark:text-slate-300" />
          </button>
          <button
            onClick={onClose}
            className="border border-[#d5d7da] flex items-center justify-center p-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#f9fafb] transition-colors dark:border-slate-700 dark:hover:bg-slate-800"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-[#414651] dark:text-slate-300" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Title */}
          <div className="flex flex-col gap-px">
            <h2 className="text-[26px] font-semibold text-[#15212f] leading-[1.5] dark:text-slate-100">Order Status</h2>
            <p className="text-[16px] text-[#6d7989] dark:text-slate-400">Your order status for selected order &amp; check where are you now</p>
          </div>

          {/* Order info card */}
          <div className="flex gap-6 items-center border border-[#e3e8ef] rounded-[6px] px-6 py-4 shrink-0 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col justify-between h-[54px] whitespace-nowrap">
              <p className="text-[12px] font-medium text-[#697586] leading-[18px] dark:text-slate-400">Order ID</p>
              <p className="text-[18px] font-semibold text-[#202a39] leading-[28px] dark:text-slate-100">{order.id}</p>
            </div>
            <div className="w-px self-stretch border-r border-[#e3e8ef] dark:border-slate-800" />
            <img src={imgProductIcon} alt="" className="w-16 h-16 shrink-0" />
            <div className="flex flex-col justify-between h-[54px] flex-1 min-w-0">
              <p className="text-[12px] font-medium text-[#697586] leading-[18px] truncate dark:text-slate-400">{order.productName}</p>
              <p className="text-[18px] font-semibold text-[#181d27] leading-[28px] flex items-center gap-1 dark:text-slate-100">
                <SARSymbol className="w-4 h-4" />
                {amount}
              </p>
            </div>
          </div>

          {/* Status badge */}
          <div className="bg-[#fcfcfd] flex flex-col gap-4 items-center justify-center p-6 rounded-[6px] dark:bg-slate-900">
            <p className="text-[16px] font-semibold text-[#697586] dark:text-slate-400">Order Status</p>
            <span className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#fff5e7] border border-[#fdce88] text-[#a15e07] text-[24px] font-semibold uppercase whitespace-nowrap dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300">
              PENDING
            </span>
          </div>

          {/* What to do */}
          <div className="border border-[#e3e8ef] rounded-[6px] p-6 flex flex-col gap-3 dark:border-slate-800">
            <div className="flex gap-1.5 items-center">
              <Lightbulb className="w-4 h-4 text-[#697586] shrink-0 dark:text-slate-400" />
              <p className="text-[12px] font-medium text-[#697586] leading-[18px] dark:text-slate-400">What should we do at this stage?</p>
            </div>
            <p className="text-[16px] text-[#181d27] leading-[1.35] dark:text-slate-100">
              The AML team is currently reviewing this order. Please be patient —{' '}
              it won&apos;t take long. We&apos;ll proceed to the next step shortly.
            </p>
          </div>

          {/* Stage timeline */}
          <div className="border border-[#e3e8ef] rounded-[6px] p-6 flex flex-col gap-6 flex-1 dark:border-slate-800">
            <div className="flex gap-1.5 items-center">
              <MapPin className="w-4 h-4 text-[#697586] shrink-0 dark:text-slate-400" />
              <p className="text-[12px] font-medium text-[#697586] leading-[18px] dark:text-slate-400">What&apos;s the current stage of this order?</p>
            </div>
            <div className="flex flex-col">
              {STAGES.map((stage, i) => (
                <div key={stage.label}>
                  <div className="flex gap-4 items-center">
                    <StageIcon state={stage.state} />
                    <StageBadge label={stage.label} state={stage.state} />
                    <p
                      className={`text-[12px] flex-1 min-w-0 leading-[16px] ${
                        stage.state === 'locked' ? 'text-[#cdd4df]' : 'text-[#697586]'
                      }`}
                    >
                      {stage.description}
                    </p>
                  </div>
                  {i < STAGES.length - 1 && (
                    <div className="ml-[5px] w-px h-4 bg-[#e3e8ef] dark:bg-slate-800" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
