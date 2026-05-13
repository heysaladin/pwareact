'use client';
import { X, Maximize2, User, Phone, Mail, CreditCard, TrendingUp } from 'lucide-react';

type Order = {
  customerName: string;
  customerId: string;
  customerPhone: string;
  customerEmail: string;
};

export default function CustomerDetailsOverlay({
  order,
  onClose,
}: {
  order: Order;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-end">
      <div className="absolute inset-0 backdrop-blur-[20px] bg-black/20" onClick={onClose} />

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
            <h2 className="text-[26px] font-semibold text-[#15212f] leading-[1.5] dark:text-slate-100">Customer Details</h2>
            <p className="text-[16px] text-[#6d7989] dark:text-slate-400">Full profile information for the selected customer</p>
          </div>

          {/* Name card */}
          <div className="rounded-xl bg-[#0063f5] p-6 flex flex-col gap-3">
            <p className="text-white/70 text-[13px] font-medium">Full Name</p>
            <p className="text-white text-[26px] font-bold leading-tight">{order.customerName}</p>
          </div>

          {/* Contact info */}
          <div className="border border-[#e3e8ef] rounded-[6px] p-6 flex flex-col gap-4 dark:border-slate-800">
            <p className="text-[12px] font-medium text-[#697586] uppercase tracking-wide dark:text-slate-400">Contact Information</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#ecf5ff] flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-[#1288fb]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[11px] text-[#697586] font-medium dark:text-slate-400">National ID</p>
                  <p className="text-[15px] font-semibold text-[#181d27] dark:text-slate-100">{order.customerId}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#ecf5ff] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#1288fb]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[11px] text-[#697586] font-medium dark:text-slate-400">Phone Number</p>
                  <p className="text-[15px] font-semibold text-[#181d27] dark:text-slate-100">{order.customerPhone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#ecf5ff] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#1288fb]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[11px] text-[#697586] font-medium dark:text-slate-400">Email Address</p>
                  <p className="text-[15px] font-semibold text-[#181d27] dark:text-slate-100">{order.customerEmail}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Financial info */}
          <div className="border border-[#e3e8ef] rounded-[6px] p-6 flex flex-col gap-4 dark:border-slate-800">
            <p className="text-[12px] font-medium text-[#697586] uppercase tracking-wide dark:text-slate-400">Financial Profile</p>
            <div className="flex gap-4">
              <div className="flex-1 flex items-center gap-3 bg-[#f9fafb] rounded-[6px] p-4 dark:bg-slate-900">
                <div className="w-9 h-9 rounded-full bg-[#ecfdf3] flex items-center justify-center shrink-0">
                  <CreditCard className="w-4 h-4 text-[#079455]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[11px] text-[#697586] font-medium dark:text-slate-400">MASDR Salary</p>
                  <p className="text-[18px] font-bold text-[#181d27] dark:text-slate-100">﷼ 25,000</p>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-3 bg-[#f9fafb] rounded-[6px] p-4 dark:bg-slate-900">
                <div className="w-9 h-9 rounded-full bg-[#fffaeb] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-[#b54708]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[11px] text-[#697586] font-medium dark:text-slate-400">SIMAH Score</p>
                  <p className="text-[18px] font-bold text-[#181d27] dark:text-slate-100">200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
