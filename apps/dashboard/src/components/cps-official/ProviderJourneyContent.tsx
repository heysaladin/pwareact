'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { PROVIDER_JOURNEY_STEPS, type ProviderCheckpointResult } from './cps-data';

function ResultBadge({ result }: { result: ProviderCheckpointResult }) {
  const cfg = {
    'Passed':           { bg: 'bg-[#ecfdf3]', border: 'border-[#abefc6]', text: 'text-[#067647]' },
    'Valid at request': { bg: 'bg-[#ecfdf3]', border: 'border-[#abefc6]', text: 'text-[#067647]' },
    'Failed':           { bg: 'bg-[#fef3f2]', border: 'border-[#fecdca]', text: 'text-[#b42318]' },
    'Pending':          { bg: 'bg-[#fffaeb]', border: 'border-[#fedf89]', text: 'text-[#b54708]' },
  }[result];
  return (
    <div className={cn('flex gap-[4px] items-center px-[12px] py-[4px] rounded-[16px] border shrink-0', cfg.bg, cfg.border)}>
      <div className="overflow-clip shrink-0 size-[14px]">
        <img alt="" className="block size-full" src="/journey-icons/check-green.svg" />
      </div>
      <p className={cn('text-[14px] font-medium whitespace-nowrap', cfg.text)}>{result}</p>
    </div>
  );
}

export default function ProviderJourneyContent({ isAr }: { isAr: boolean }) {
  const [selectedStep, setSelectedStep] = useState(0);
  const [journeyDropdownOpen, setJourneyDropdownOpen] = useState(false);

  const step = PROVIDER_JOURNEY_STEPS[selectedStep];

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
            {/* Status pill */}
            <div className="bg-[#f5f9ff] border border-[#80b1fa] flex gap-[8px] items-center px-[12px] py-[8px] rounded-[24px] shrink-0">
              <div className="overflow-clip size-[16px] shrink-0">
                <img alt="" className="block size-full" src="/journey-icons/layers-three-01.svg" />
              </div>
              <p className="text-[10px] font-bold text-[#0063f5] tracking-[0.05px] whitespace-nowrap uppercase">
                {isAr ? 'مغلق' : 'Closed'}
              </p>
            </div>

            {/* Journey dropdown */}
            <div className="relative shrink-0">
              <button
                onClick={() => setJourneyDropdownOpen(v => !v)}
                className="bg-white border border-[#d5d7da] flex gap-[8px] items-center px-[14px] py-[10px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] w-[250px]"
              >
                <p className="flex-1 min-w-0 text-[14px] text-[#414651] tracking-[0.014px] truncate text-start">
                  {isAr ? 'طلب تمويل جديد قيد التنفيذ' : 'New order journey in progress'}
                </p>
                <div className="overflow-clip size-[20px] shrink-0 transition-transform duration-200" style={{ transform: journeyDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <img alt="" className="block size-full" src="/journey-icons/chevron-down.svg" />
                </div>
              </button>
              {journeyDropdownOpen && (
                <div className="absolute top-[calc(100%+4px)] left-0 bg-white border border-[#e9eaeb] rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.05),0px_4px_6px_-2px_rgba(10,13,18,0.03)] z-20 w-[320px] overflow-hidden">
                  {[
                    { date: 'Jun 27, 2026', status: 'Pending',   desc: isAr ? 'حالي · طلب تمويل جديد · S-1108 · SIMAH معلقة' : 'Current · New order journey · S-1108 · SIMAH retry pending' },
                    { date: 'Jun 27, 2026', status: 'Completed', desc: isAr ? 'مغلق · طلب O-8740 · مكتمل' : 'Closed · Order O-8740 · Completed' },
                  ].map((j, ji) => (
                    <button
                      key={ji}
                      className="flex flex-col gap-[4px] items-start px-[14px] py-[10px] w-full hover:bg-[#f8fafc] transition-colors border-b border-[#f0f2f5] last:border-b-0"
                      onClick={() => setJourneyDropdownOpen(false)}
                    >
                      <div className="flex items-center gap-[8px] w-full">
                        <div className="overflow-clip size-[16px] shrink-0">
                          <img alt="" className="block size-full" src="/journey-icons/calendar.svg" />
                        </div>
                        <span className="text-[13px] text-[#697586] whitespace-nowrap shrink-0">{j.date}</span>
                        <span className={cn(
                          'px-[8px] py-[2px] rounded-[16px] text-[12px] font-medium whitespace-nowrap shrink-0 border',
                          j.status === 'Pending' ? 'bg-[#fffaeb] border-[#fedf89] text-[#b54708]' : 'bg-[#ecfdf3] border-[#abefc6] text-[#067647]'
                        )}>{j.status}</span>
                      </div>
                      <p className="text-[11px] text-[#717680] text-start ps-[24px]">{j.desc}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* View order button */}
            <button className="border border-[#aacbfc] bg-white flex gap-[4px] items-center justify-center px-[14px] py-[10px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] whitespace-nowrap">
              <p className="text-[14px] font-medium text-[#0063f5] leading-[20px] tracking-[0.014px]">
                {isAr ? 'عرض الطلب' : 'View order'}
              </p>
              <div className="overflow-clip size-[20px] shrink-0" style={{ transform: isAr ? 'scaleX(-1)' : undefined }}>
                <img alt="" className="block size-full" src="/journey-icons/arrow-right.svg" />
              </div>
            </button>
          </div>
        </div>

        {/* Checkpoint 1 — Associated financing journey */}
        <div className="bg-[#f5f9ff] border border-[#80b1fa] rounded-[9px] w-full overflow-clip">
          <div className="flex items-center justify-between p-[12px] pl-[16px]">
            <div className="flex gap-[12px] items-center flex-1 min-w-0">
              <div className="bg-[#0063f5] flex items-center justify-center p-[8px] rounded-[8px] shrink-0">
                <div className="overflow-clip size-[24px]">
                  <img alt="" className="block size-full" src="/journey-icons/image-user-check.svg" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start flex-1 min-w-0 font-bold whitespace-nowrap">
                <p className="text-[8px] text-[#0063f5] uppercase tracking-[0.72px] leading-[12px]">
                  {isAr ? 'رحلة التمويل المرتبطة' : 'Associated financing journey'}
                </p>
                <p className="text-[18px] text-[#121a26] leading-[16.5px] tracking-[0.25px]">
                  {isAr ? 'طلب المزود · O-8740' : 'Provider order · O-8740'}
                </p>
              </div>
            </div>
            <div className="bg-[#ecfdf3] border border-[#abefc6] flex items-center px-[12px] py-[4px] rounded-[16px] shrink-0">
              <p className="text-[14px] font-medium text-[#067647] text-center whitespace-nowrap">
                {isAr ? 'مغلق' : 'Closed'}
              </p>
            </div>
          </div>
        </div>

        {/* Checkpoint 2 — Selected journey outcome */}
        <div className="bg-white border-[#b54708] border-b border-s-4 border-e border-t rounded-[9px] w-full overflow-clip">
          <div className="flex items-center justify-between p-[12px] pl-[16px]">
            <div className="flex gap-[12px] items-center flex-1 min-w-0">
              <div className="bg-[#dc6803] flex items-center justify-center p-[8px] rounded-[8px] shrink-0">
                <div className="overflow-clip size-[24px]">
                  <img alt="" className="block size-full" src="/journey-icons/check-circle-broken.svg" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start flex-1 min-w-0 font-bold whitespace-nowrap">
                <p className="text-[8px] text-[#0063f5] uppercase tracking-[0.72px] leading-[12px]">
                  {isAr ? 'نتيجة الرحلة المختارة' : 'Selected journey outcome'}
                </p>
                <p className="text-[16px] text-[#121a26] leading-[16.5px] tracking-[0.25px]">
                  {isAr ? 'نتيجة المزود · الطلب مغلق' : 'Provider outcome · Order closed'}
                </p>
              </div>
            </div>
            <div className="flex gap-[40px] items-center h-[49px] px-[12px] py-[8px] flex-1 min-w-0 justify-end">
              {[
                { label: isAr ? 'الحالة'    : 'Status',      value: isAr ? 'مغلق'          : 'Closed',           w: 45  },
                { label: isAr ? 'المزود'    : 'Provider',    value: 'Namaa Finance',                               w: 99  },
                { label: isAr ? 'المرجع'    : 'Reference',   value: 'O-8740',                                      w: 50  },
                { label: isAr ? 'آخر تحديث' : 'Last update', value: isAr ? '١٣ أغسطس 2026، 03:18 م' : '13 Aug 2026, 03:18 PM', w: 151 },
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

      {/* ── Journey section ──────────────────────────────────────── */}
      <div className="p-[8px] flex flex-col">

        {/* Title row */}
        <div className="flex items-center justify-between pt-[16px] w-full">
          <p className="text-[25px] font-medium text-[#15212f] leading-[32px] flex-1 min-w-0">
            {isAr ? 'رحلة العميل' : 'Customer journey'}
          </p>
          <div className="flex gap-[16px] h-[16px] items-start shrink-0">
            {[
              { color: '#079455', label: isAr ? 'مكتمل'  : 'Passed'      },
              { color: '#f79009', label: isAr ? 'موقوف'  : 'Paused'      },
              { color: '#d92d20', label: isAr ? 'فشل'    : 'Failed'      },
              { color: '#a4a7ae', label: isAr ? 'لم يبدأ' : 'Not started' },
            ].map(l => (
              <div key={l.label} className="flex gap-[4px] items-center self-stretch">
                <div className="rounded-[3.5px] size-[7px] shrink-0" style={{ backgroundColor: l.color }} />
                <p className="text-[12px] text-[#717680] whitespace-nowrap leading-[16px] tracking-[0.048px]">{l.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Step selector */}
        <div className="flex items-start py-[20px] w-full overflow-x-auto">
          {PROVIDER_JOURNEY_STEPS.map((s, i) => {
            const isSel = i === selectedStep;
            return (
              <React.Fragment key={s.id}>
                {i > 0 && (
                  <div className="flex h-[24px] max-h-[24px] items-center justify-center shrink-0" style={{ width: 24 }}>
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
                    isSel ? 'bg-[#0063f5] border-2 border-[#0063f5]' : 'bg-[#cdd4df] border border-[#cdd4df]'
                  )}
                >
                  <div className={cn(
                    'flex gap-[12px] items-start p-[12px] rounded-[8px] shrink-0',
                    isSel ? 'bg-white border-2 border-[#0063f5]' : 'bg-white border border-[#cdd4df] w-[194px]'
                  )}>
                    {/* Completed dot */}
                    <div className="overflow-clip size-[20px] shrink-0">
                      <img alt="" className="block size-full" src="/journey-icons/state-completed.svg" />
                    </div>
                    <div className="flex flex-col gap-[16px] items-start flex-1 min-w-px">
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

        {/* Provider-visible checkpoints table */}
        <div className="bg-white border border-[#e9eaeb] rounded-[12px] flex flex-col gap-[8px] items-start">

          {/* Table header */}
          <div className="flex items-center gap-[8px] px-[24px] py-[8px] w-full">
            <p className="text-[20px] text-[#15212f] leading-[28px] tracking-[0px] flex-1 min-w-0">
              {isAr ? 'نقاط التحقق المرئية للمزود' : 'Provider-visible checkpoints'}
            </p>
            <div className="bg-[#fafafa] border border-[#e9eaeb] flex items-center px-[12px] py-[4px] rounded-[16px] shrink-0">
              <p className="text-[14px] font-medium text-[#414651] text-center whitespace-nowrap">
                {step.checkpoints.length}
              </p>
            </div>
          </div>

          {/* Column headers */}
          <div className="flex gap-[24px] h-[44px] items-center px-[24px] w-full bg-white">
            <div className="flex flex-[1_0_0] items-center py-[12px]">
              <p className="text-[14px] font-medium text-[#697586] leading-[20px] tracking-[0.014px] flex-1 min-w-px">
                {isAr ? 'نقطة التحقق' : 'Checkpoint'}
              </p>
            </div>
            <div className="flex flex-[1_0_0] items-center py-[12px]">
              <p className="text-[14px] font-medium text-[#697586] leading-[20px] tracking-[0.014px] flex-1 min-w-px">
                {isAr ? 'القيمة المسجلة' : 'Recorded value'}
              </p>
            </div>
            <div className="flex flex-[1_0_0] items-center py-[12px]">
              <p className="text-[14px] font-medium text-[#697586] leading-[20px] tracking-[0.014px]">
                {isAr ? 'النتيجة' : 'Result'}
              </p>
            </div>
            <div className="flex items-center py-[12px] w-[125px] shrink-0">
              <p className="text-[14px] font-medium text-[#697586] leading-[20px] tracking-[0.014px]">
                {isAr ? 'وقت الحدث' : 'Event time'}
              </p>
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col items-start w-full">
            {step.checkpoints.map((cp, ci) => (
              <div key={ci} className="relative flex gap-[24px] h-[72px] items-start px-[24px] py-[8px] w-full bg-white shadow-[inset_0px_-1px_0px_0px_#f2f4f7]">
                <div className="flex flex-[1_0_0] flex-col items-start min-w-px py-[12px] self-stretch justify-center">
                  <p className="text-[16px] font-medium text-[#121a26] leading-[26px] tracking-[0.024px] w-full">
                    {isAr ? cp.nameAr : cp.nameEn}
                  </p>
                </div>
                <div className="flex flex-[1_0_0] flex-col items-start min-w-px py-[12px] self-stretch justify-center">
                  <p className="text-[16px] font-medium text-[#121a26] leading-[26px] tracking-[0.024px] w-full">
                    {cp.recordedValue}
                  </p>
                </div>
                <div className="flex flex-[1_0_0] flex-col items-start min-w-px py-[12px] self-stretch justify-center">
                  <ResultBadge result={cp.result} />
                </div>
                <div className="flex flex-col items-start py-[12px] self-stretch justify-center shrink-0 w-[125px]">
                  <p className="text-[14px] font-medium text-[#697586] leading-[24px] tracking-[0.034px] whitespace-nowrap">
                    {cp.eventTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
