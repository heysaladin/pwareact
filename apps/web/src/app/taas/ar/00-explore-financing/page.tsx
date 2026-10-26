'use client'
import { useState } from 'react'
import Link from 'next/link'
import PartnerPanelAr from '../_components/PartnerPanelAr'
import TopBarAr from '../_components/TopBarAr'
import StepperAr from '../_components/StepperAr'

const PRICE = 228750

export default function ExploreFinancingArPage() {
  const [salary, setSalary] = useState('')
  const [commitments, setCommitments] = useState('')
  const [downPayment, setDownPayment] = useState(20)
  const [tenure, setTenure] = useState<24 | 36 | 48 | 60>(60)

  const dpAmount = Math.round(PRICE * (downPayment / 100))
  const financeAmount = PRICE - dpAmount
  const monthly = Math.round((financeAmount / tenure) * 1.08)

  return (
    <div className="taas min-h-screen bg-[#f2f4f7] flex gap-4 p-4">
      <PartnerPanelAr />
      <div className="flex-1 bg-white border border-[#eaecf0] rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#eaecf0] flex flex-col gap-5 px-8 py-5 shrink-0">
          <TopBarAr />
          <StepperAr currentStep={1} />
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 pt-7 pb-6 flex flex-col gap-6">
          {/* Page title */}
          <div>
            <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-[#101828] leading-tight">استكشف خيارات التمويل</h1>
            <p className="text-[#475467] text-[15px] mt-2">أدخل بعض التفاصيل للحصول على تقدير أولي مخصص لك.</p>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-2 gap-6">
            {/* Monthly salary */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-[#344054]">
                الراتب الشهري <span className="text-red-500">*</span>
              </label>
              <div className="flex rounded-lg border border-[#d0d5dd] overflow-hidden">
                <div className="bg-[#f9fafb] border-r border-[#d0d5dd] px-3 flex items-center text-[#475467] text-[13px] font-medium shrink-0">
                  SAR
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="مثلاً: 25,000"
                  value={salary}
                  onChange={e => setSalary(e.target.value)}
                  className="flex-1 px-3 py-[11px] text-[14px] text-[#101828] outline-none bg-white"
                />
              </div>
            </div>

            {/* Existing commitments */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-[#344054]">
                الالتزامات الشهرية الحالية <span className="text-red-500">*</span>
              </label>
              <div className="flex rounded-lg border border-[#d0d5dd] overflow-hidden">
                <div className="bg-[#f9fafb] border-r border-[#d0d5dd] px-3 flex items-center text-[#475467] text-[13px] font-medium shrink-0">
                  SAR
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="مثلاً: 3,500"
                  value={commitments}
                  onChange={e => setCommitments(e.target.value)}
                  className="flex-1 px-3 py-[11px] text-[14px] text-[#101828] outline-none bg-white"
                />
              </div>
            </div>
          </div>

          {/* Down payment */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-semibold text-[#344054]">الدفعة المقدمة</span>
              <div className="flex gap-2">
                <span className="bg-[#eff5ff] border border-[#d1e3ff] text-[#0063f5] text-[13px] font-semibold px-3 py-1 rounded-lg">
                  {downPayment}%
                </span>
                <span className="bg-[#f9fafb] border border-[#eaecf0] text-[#344054] text-[13px] font-semibold px-3 py-1 rounded-lg">
                  SAR {dpAmount.toLocaleString('en-US')}
                </span>
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={50}
              step={5}
              value={downPayment}
              onChange={e => setDownPayment(Number(e.target.value))}
              className="w-full accent-[#0063f5] h-[6px] cursor-pointer"
            />
            <div className="flex justify-between">
              {[0, 10, 20, 30, 40, 50].map(v => (
                <span key={v} className="text-[12px] text-[#98a2b3]">{v}%</span>
              ))}
            </div>
          </div>

          {/* Financing term */}
          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-semibold text-[#344054]">مدة التمويل</span>
            <div className="grid grid-cols-4 gap-3">
              {([24, 36, 48, 60] as const).map(m => (
                <button
                  key={m}
                  onClick={() => setTenure(m)}
                  className={[
                    'py-3 rounded-lg text-[14px] font-semibold transition-colors',
                    tenure === m
                      ? 'bg-[#eff5ff] border-[1.5px] border-[#0063f5] text-[#0063f5]'
                      : 'bg-white border border-[#d0d5dd] text-[#101828]',
                  ].join(' ')}
                >
                  {m} شهراً
                </button>
              ))}
            </div>
          </div>

          {/* Indicative estimate box */}
          <div className="rounded-[14px] border border-[#eaecf0] flex overflow-hidden">
            {/* Left */}
            <div className="flex-1 p-6 flex flex-col gap-0">
              <p className="font-['Newsreader',Georgia,serif] text-[22px] font-medium text-[#101828] mb-4">تقدير أولي</p>
              <div className="flex justify-between items-center py-3 border-b border-dashed border-[#eaecf0] text-[13px]">
                <span className="text-[#475467]">السعر (شامل ض.ق.م)</span>
                <span className="text-[#101828] font-semibold">SAR 228,750</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-dashed border-[#eaecf0] text-[13px]">
                <span className="text-[#475467]">الدفعة المقدمة ({downPayment}%)</span>
                <span className="text-[#101828] font-semibold">− SAR {dpAmount.toLocaleString('en-US')}</span>
              </div>
              <div className="flex justify-between items-center py-3 text-[13px]">
                <span className="text-[#475467]">مبلغ التمويل</span>
                <span className="text-[#101828] font-semibold">SAR {financeAmount.toLocaleString('en-US')}</span>
              </div>
            </div>

            {/* Right */}
            <div className="w-[280px] bg-[#f7faff] flex flex-col items-center justify-center p-6 gap-2 shrink-0 border-l border-[#eaecf0]">
              <p className="text-[#475467] text-[12px] text-center">الدفعة الشهرية التقديرية تبدأ من</p>
              <p className="text-[#0063f5] text-[36px] font-bold leading-none">
                SAR {monthly.toLocaleString('en-US')}
              </p>
              <p className="text-[#475467] text-[13px]">/شهرياً</p>
              <p className="text-[#98a2b3] text-[11px] text-center mt-1">تقديري فقط. يخضع للأهلية وموافقة البنك.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#eaecf0] px-8 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-[#98a2b3] text-[12px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 1L1.5 3.5v4c0 3.09 1.96 5.56 5.5 6.5 3.54-.94 5.5-3.41 5.5-6.5v-4L7 1z" />
            </svg>
            معلوماتك محمية ومشفرة.
          </div>
          <Link
            href="/taas/ar/01-preliminary-offers"
            className="bg-[#0063f5] text-white font-medium text-[16px] px-[18px] py-[12px] rounded-lg"
          >
            عرض العروض الأولية ←
          </Link>
        </div>
      </div>
    </div>
  )
}
