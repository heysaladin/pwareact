'use client';

const items = [
  { icon: '/icon-payout-immediately.svg', label: 'Finalization & Disbursement immediately' },
  { icon: '/icon-payout-24h.svg',         label: 'Finalization & Disbursement within 24 hours' },
  { icon: '/icon-payout-1-2days.svg',     label: 'Finalization & Disbursement within 1 to 2 working days' },
  { icon: '/icon-payout-3-4days.svg',     label: 'Finalization & Disbursement within 3 to 4 working days' },
  { icon: '/icon-payout-5-6days.svg',     label: 'Finalization & Disbursement within 5 to 6 working days' },
  { icon: '/icon-payout-6plus-days.svg',  label: 'Finalization & Disbursement after more than 6 working days' },
];

export default function PayoutTimeModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[6px]" onClick={onClose} />

      {/* Desktop: centered modal */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white flex-col gap-[32px] p-[24px] rounded-[8px] w-[calc(100%-48px)] max-w-[640px]">
        <div className="flex gap-[10px] items-start justify-end">
          <div className="flex-1">
            <p className="font-semibold text-[26px] leading-[1.5] text-[#15212f]">Payout Execution Time</p>
          </div>
          <button
            onClick={onClose}
            className="border border-[#d5d7da] flex items-center justify-center p-[8px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5l10 10" stroke="#414651" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="flex flex-col w-full">
          {items.map((item, i) => (
            <div key={i} className={`flex gap-[20px] items-center py-[12px] ${i < items.length - 1 ? 'border-b border-[#eef1f6]' : ''}`}>
              <div className="relative shrink-0 size-[56px]">
                <img alt="" src={item.icon} className="absolute block inset-0 max-w-none size-full" />
              </div>
              <p className="font-semibold text-[15.5px] leading-[22px] text-[#202a39]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: bottom sheet */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-white rounded-t-[16px] flex flex-col max-h-[85vh]">
        {/* drag handle */}
        <div className="flex justify-center pt-[12px] pb-[4px] shrink-0">
          <div className="w-[36px] h-[4px] rounded-full bg-[#d5d7da]" />
        </div>
        {/* header */}
        <div className="flex items-start justify-between gap-[10px] px-[16px] py-[16px] shrink-0">
          <p className="font-semibold text-[20px] leading-[1.4] text-[#15212f]">Payout Execution Time</p>
          <button
            onClick={onClose}
            className="border border-[#d5d7da] flex items-center justify-center p-[8px] rounded-[8px] shrink-0"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5l10 10" stroke="#414651" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        {/* scrollable list */}
        <div className="flex flex-col overflow-y-auto px-[16px] pb-[32px]">
          {items.map((item, i) => (
            <div key={i} className={`flex gap-[16px] items-center py-[12px] ${i < items.length - 1 ? 'border-b border-[#eef1f6]' : ''}`}>
              <div className="relative shrink-0 size-[48px]">
                <img alt="" src={item.icon} className="absolute block inset-0 max-w-none size-full" />
              </div>
              <p className="font-semibold text-[14px] leading-[20px] text-[#202a39]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
