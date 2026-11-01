'use client'
import Link from 'next/link'
import PartnerPanelAr from '../_components/PartnerPanelAr'
import TopBarAr from '../_components/TopBarAr'

export default function RegisterInterestArPage() {
  return (
    <div className="taas min-h-screen bg-[#f2f4f7] flex gap-4 p-4" dir="rtl">
      <PartnerPanelAr />
      <div className="flex-1 bg-white border border-[#eaecf0] rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#eaecf0] flex flex-col gap-5 px-8 py-5 shrink-0">
          <TopBarAr />
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 pt-7 pb-6 flex flex-col gap-5">
          {/* Page title */}
          <div>
            <h1 className="font-['Noto_Sans_Arabic',sans-serif] text-[28px] font-bold text-[#101828] leading-tight">سجّل اهتمامك</h1>
            <p className="text-[#475467] text-[15px] mt-2">هذه الجهة التمويلية بتنضم إلى شركاء تموّل قريباً. سجّل اهتمامك وبنبلغك أول ما يتوفر التمويل.</p>
          </div>

          {/* Two-column layout: bank card left, form right */}
          <div className="flex gap-6 items-start">
            {/* Left: bank card */}
            <div className="w-[340px] bg-[#f7faff] rounded-[14px] p-6 flex flex-col gap-4 shrink-0">
              {/* Shield icon */}
              <div className="w-10 h-10 flex items-center justify-center">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#0063f5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 3L5 8v9c0 7.95 5.54 15.19 13 17 7.46-1.81 13-9.05 13-17V8L18 3z" />
                </svg>
              </div>

              {/* Title */}
              <div>
                <p className="text-[#101828] text-[16px] font-bold leading-snug">التمويل الصغير للموظف واحتياجات أسرته اليومية</p>
                <p className="text-[#475467] text-[13px] mt-1">من بنك البلاد</p>
              </div>

              {/* Blue divider */}
              <div className="h-[2px] bg-[#0063f5] rounded-full w-12" />

              {/* Orange badge */}
              <div className="inline-flex self-start px-3 py-1 rounded-full bg-[#fff5e6] border border-[#f5a623]">
                <span className="text-[#f5a623] text-[12px] font-semibold">قريباً على تموّل</span>
              </div>

              {/* Stats rows */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-[#475467]">معدل سنوي (APR) من</span>
                  <span className="text-[#101828] font-semibold">5.66%</span>
                </div>
                <div className="h-px bg-[#e4e7ec]" />
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-[#475467]">قسط شهري من</span>
                  <span className="text-[#101828] font-semibold">1,250 ر.س شهرياً</span>
                </div>
                <div className="h-px bg-[#e4e7ec]" />
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-[#475467]">مبلغ التمويل حتى</span>
                  <span className="text-[#101828] font-semibold">250,000 ر.س</span>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-[#98a2b3] text-[11px] leading-relaxed">
                المعدلات المعروضة استرشادية وتخضع لتقييم الائتمان. تُؤكَّد الشروط النهائية عند توفر الشريك.
              </p>
            </div>

            {/* Right: form */}
            <div className="flex-1 flex flex-col gap-4">
              {/* National ID / Iqama number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#071329] text-[14px] font-medium">
                  الهوية الوطنية / الإقامة <span className="text-[#e03137]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="أدخل رقم هويتك الوطنية أو الإقامة"
                  className="border border-[#d5d7da] rounded-[8px] px-[14px] py-[10px] bg-white text-[14px] text-[#101828] placeholder:text-[#717680] outline-none focus:border-[#0063f5] text-right"
                />
              </div>

              {/* City */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#071329] text-[14px] font-medium">
                  المدينة <span className="text-[#e03137]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="اختر مدينتك"
                  className="border border-[#d5d7da] rounded-[8px] px-[14px] py-[10px] bg-white text-[14px] text-[#101828] placeholder:text-[#717680] outline-none focus:border-[#0063f5] text-right"
                />
              </div>

              {/* Sector */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#071329] text-[14px] font-medium">
                  القطاع <span className="text-[#e03137]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="اختر قطاعك"
                  className="border border-[#d5d7da] rounded-[8px] px-[14px] py-[10px] bg-white text-[14px] text-[#101828] placeholder:text-[#717680] outline-none focus:border-[#0063f5] text-right"
                />
              </div>

              {/* Entity */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#071329] text-[14px] font-medium">
                  الجهة <span className="text-[#e03137]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="أدخل اسم جهة عملك"
                  className="border border-[#d5d7da] rounded-[8px] px-[14px] py-[10px] bg-white text-[14px] text-[#101828] placeholder:text-[#717680] outline-none focus:border-[#0063f5] text-right"
                />
              </div>

              {/* Job title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#071329] text-[14px] font-medium">
                  المسمى الوظيفي <span className="text-[#e03137]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="أدخل مسماك الوظيفي"
                  className="border border-[#d5d7da] rounded-[8px] px-[14px] py-[10px] bg-white text-[14px] text-[#101828] placeholder:text-[#717680] outline-none focus:border-[#0063f5] text-right"
                />
              </div>

              {/* Salary bank */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#071329] text-[14px] font-medium">
                  بنك الراتب <span className="text-[#e03137]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="اختر بنك راتبك"
                  className="border border-[#d5d7da] rounded-[8px] px-[14px] py-[10px] bg-white text-[14px] text-[#101828] placeholder:text-[#717680] outline-none focus:border-[#0063f5] text-right"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#eaecf0] px-8 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <Link
              href="/taas/ar/15b-register-interest-success"
              className="bg-[#0063f5] text-white font-medium text-[14px] px-5 py-[10px] rounded-lg"
            >
              سجّل اهتمامك
            </Link>
            <Link
              href="/taas/ar/01-preliminary-offers"
              className="bg-white border border-[#d5d7da] text-[#344054] font-medium text-[14px] px-5 py-[10px] rounded-lg"
            >
              إلغاء
            </Link>
          </div>
          <div className="flex items-center gap-2 text-[#98a2b3] text-[12px]">
            بياناتك مشفرة وتُعالَج وفق إرشادات حماية بيانات ساما.
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="10" height="8" rx="1" />
              <path d="M5 5V4a3 3 0 0 1 6 0v1" />
              <circle cx="8" cy="9" r="1" fill="currentColor" stroke="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
