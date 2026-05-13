'use client';
import { useState } from 'react';
import { X, User, Monitor, FileText, Gift, GitBranch, ShieldX } from 'lucide-react';
import { cn } from '@/lib/utils';

type Order = {
  customerName: string;
  customerId: string;
  customerPhone: string;
  customerEmail: string;
};

const MOCK_INVOICES = [
  { id: 'INV5745678567567', txId: 'TML-REQ-45922', date: 'Dec 12, 2023', time: '11:58 PM', status: 'Paid' },
  { id: 'INV5745678567567', txId: 'TML-REQ-45922', date: 'Dec 12, 2023', time: '11:58 PM', status: 'Refund' },
  { id: 'INV5745678567567', txId: 'TML-REQ-45922', date: 'Dec 12, 2023', time: '11:58 PM', status: 'Refund' },
  { id: 'INV5745678567567', txId: 'TML-REQ-45922', date: 'Dec 12, 2023', time: '11:58 PM', status: 'Paid' },
  { id: 'INV5745678567567', txId: 'TML-REQ-45922', date: 'Dec 12, 2023', time: '11:58 PM', status: 'Paid' },
  { id: 'INV5745678567567', txId: 'TML-REQ-45922', date: 'Dec 12, 2023', time: '11:58 PM', status: 'Paid' },
  { id: 'INV5745678567567', txId: 'TML-REQ-45922', date: 'Dec 12, 2023', time: '11:58 PM', status: 'Refund' },
  { id: 'INV5745678567567', txId: 'TML-REQ-45922', date: 'Dec 12, 2023', time: '11:58 PM', status: 'Paid' },
];

const TABS = [
  { label: 'Devices',   icon: Monitor },
  { label: 'Invoices',  icon: FileText },
  { label: 'Points',    icon: Gift },
  { label: 'Decisions', icon: GitBranch },
];

function StatusBadge({ status }: { status: string }) {
  if (status === 'Paid')
    return <span className="px-3 py-1 rounded-full bg-[#ecfdf3] border border-[#abefc6] text-[#079455] text-[12px] font-medium">{status}</span>;
  return <span className="px-3 py-1 rounded-full bg-[#f9fafb] border border-[#e3e8ef] text-[#667085] text-[12px] font-medium dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">{status}</span>;
}

export default function CustomerDetailsPanel({
  order,
  onClose,
  className,
}: {
  order: Order;
  onClose: () => void;
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState('Invoices');

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
        {/* Title */}
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-[22px] leading-7 font-bold text-[#181d27] dark:text-slate-100">Customer Details</h2>
        </div>

        <div className="px-6 pb-6 flex flex-col gap-3">
          {/* Profile row */}
          <div className="h-[114px] rounded-[6px] border border-[#eef1f6] flex items-center gap-6 px-4 dark:border-slate-800">
            {/* Avatar */}
            <div className="w-[100px] h-[100px] rounded-full bg-[#eef1f6] flex items-center justify-center shrink-0 overflow-hidden dark:bg-slate-800">
              <User className="w-10 h-10 text-[#9aa4b2] dark:text-slate-500" />
            </div>

            {/* Name + status */}
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              <p className="text-[16px] leading-5 font-bold text-[#181d27] dark:text-slate-100">{order.customerName}</p>
              <span className="inline-flex w-fit px-4 py-1.5 rounded-full bg-[#dcfae6] border border-[#079455] text-[#079455] text-[13px] font-semibold">
                Active
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 shrink-0">
              <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-[6px] border border-[#ffb4c0] text-[#ef3462] text-[14px] font-medium hover:bg-[#fff1f3] transition-colors w-[126px]">
                <User className="w-3.5 h-3.5" /> Deactivate
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-[6px] border border-[#ffb4c0] text-[#ef3462] text-[14px] font-medium hover:bg-[#fff1f3] transition-colors w-[126px]">
                <ShieldX className="w-3.5 h-3.5" /> Suspend
              </button>
            </div>
          </div>

          {/* Info grid */}
          <div className="flex gap-3">
            {/* Profile info */}
            <div className="w-[247px] border border-[#eef1f6] rounded-[6px] overflow-hidden dark:border-slate-800">
              {[
                { label: 'National/Iqama ID', value: order.customerId },
                { label: 'Mobile number',     value: order.customerPhone },
                { label: 'Nationality',        value: 'Saudi Arabia' },
              ].map((row, i, arr) => (
                <div key={row.label} className={`flex items-center justify-between h-[34px] px-4 ${i < arr.length - 1 ? 'border-b border-[#f2f4f7] dark:border-slate-800' : ''}`}>
                  <span className="text-[12px] text-[#697586] dark:text-slate-400">{row.label}</span>
                  <span className="text-[12px] font-semibold text-[#181d27] dark:text-slate-100">{row.value}</span>
                </div>
              ))}
            </div>

            {/* AML */}
            <div className="flex-1 shrink-0 border border-[#eef1f6] rounded-[6px] flex items-center justify-center gap-5 px-6 dark:border-slate-800">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[12px] text-[#697586] font-medium dark:text-slate-400">AML Score</span>
                <span className="text-[36px] font-bold text-[#181d27] leading-none dark:text-slate-100">86%</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[12px] text-[#697586] font-medium dark:text-slate-400">AML Status</span>
                <span className="px-5 py-2 rounded-full bg-[#dcfae6] border border-[#079455] text-[#079455] text-[13px] font-semibold">Passed</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#e3e8ef] gap-0 pt-1 dark:border-slate-800">
            {TABS.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => setActiveTab(label)}
                className={`flex items-center justify-center gap-2 h-12 px-5 text-[13px] font-semibold border border-b-0 rounded-t-[6px] -mb-px transition-colors ${
                  activeTab === label
                    ? 'border-[#e3e8ef] bg-white text-[#181d27] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100'
                    : 'border-transparent text-[#181d27] hover:bg-[#f8fafc] dark:text-slate-300 dark:hover:bg-slate-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </div>

          {/* Invoices table */}
          {activeTab === 'Invoices' && (
            <div className="flex flex-col rounded-[6px] border border-[#e3e8ef] border-t-0 overflow-hidden dark:border-slate-800">
              <div className="grid grid-cols-[1.6fr_.7fr_.45fr] px-5 py-3 border-b border-[#e3e8ef] dark:border-slate-800">
                <span className="text-[12px] font-medium text-[#697586] dark:text-slate-400">Invoice Number</span>
                <span className="text-[12px] font-medium text-[#697586] dark:text-slate-400">Creation Date</span>
                <span className="text-[12px] font-medium text-[#697586] text-right dark:text-slate-400">Status</span>
              </div>
              {MOCK_INVOICES.map((inv, i) => (
                <div key={i} className="grid grid-cols-[1.6fr_.7fr_.45fr] items-center px-5 py-3 border-b border-[#f2f4f7] hover:bg-[#fafafa] dark:border-slate-800 dark:hover:bg-slate-900">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[12px] font-bold text-[#181d27] dark:text-slate-100">{inv.id}</span>
                    <span className="text-[12px] text-[#697586] dark:text-slate-400">Transaction ID: {inv.txId}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[12px] font-semibold text-[#181d27] dark:text-slate-100">{inv.date}</span>
                    <span className="text-[12px] text-[#697586] dark:text-slate-400">{inv.time}</span>
                  </div>
                  <div className="flex justify-end">
                    <StatusBadge status={inv.status} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab !== 'Invoices' && (
            <div className="flex items-center justify-center py-12 text-[#9aa4b2] text-[14px]">
              No {activeTab.toLowerCase()} data available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
