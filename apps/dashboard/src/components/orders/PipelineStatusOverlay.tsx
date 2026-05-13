'use client';
import { X, Maximize2 } from 'lucide-react';

type PipelineItem = {
  label: string;
  value: string;
};

export default function PipelineStatusOverlay({
  item,
  onClose,
}: {
  item: PipelineItem;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-end">
      <div className="absolute inset-0 backdrop-blur-[20px] bg-black/20" onClick={onClose} />
      <div className="relative z-10 bg-white flex flex-col h-full w-[624px] p-6 gap-6 overflow-y-auto animate-slide-in-right dark:bg-slate-950">
        {/* Buttons */}
        <div className="flex gap-2.5 items-center justify-end shrink-0 sticky top-0 bg-white pb-1 dark:bg-slate-950">
          <button className="border border-[#d5d7da] flex items-center justify-center p-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#f9fafb] transition-colors dark:border-slate-700 dark:hover:bg-slate-800">
            <Maximize2 className="w-5 h-5 text-[#414651] dark:text-slate-300" />
          </button>
          <button onClick={onClose} className="border border-[#d5d7da] flex items-center justify-center p-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#f9fafb] transition-colors dark:border-slate-700 dark:hover:bg-slate-800">
            <X className="w-5 h-5 text-[#414651] dark:text-slate-300" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-px">
            <h2 className="text-[26px] font-semibold text-[#15212f] leading-[1.5] dark:text-slate-100">{item.label}</h2>
            <p className="text-[16px] text-[#6d7989] dark:text-slate-400">Current status details for this pipeline stage</p>
          </div>

          <div className="bg-[#fcfcfd] flex flex-col gap-4 items-center justify-center p-6 rounded-[6px] dark:bg-slate-900">
            <p className="text-[16px] font-semibold text-[#697586] dark:text-slate-400">{item.label}</p>
            <span className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#fff5e7] border border-[#fdce88] text-[#a15e07] text-[24px] font-semibold uppercase dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300">
              {item.value}
            </span>
          </div>

          <div className="border border-[#e3e8ef] rounded-[6px] p-6 flex flex-col gap-3 dark:border-slate-800">
            <p className="text-[12px] font-medium text-[#697586] dark:text-slate-400">Stage description</p>
            <p className="text-[16px] text-[#181d27] leading-[1.5] dark:text-slate-100">
              This stage is currently <strong>{item.value.toLowerCase()}</strong>. No action is required at this time — the system will automatically advance once conditions are met.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
