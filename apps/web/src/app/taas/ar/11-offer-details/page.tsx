'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PartnerPanelAr from '../_components/PartnerPanelAr'
import TopBarAr from '../_components/TopBarAr'
import StepperAr from '../_components/StepperAr'

const TABS = ['تفاصيل التمويل', 'الرسوم والتكاليف', 'التأمين', 'الأحكام والشروط']

export default function OfferDetailsArPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="taas min-h-screen bg-[#f2f4f7] flex gap-4 p-4">
      <PartnerPanelAr />
      <div className="flex-1 bg-white border border-[#eaecf0] rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#eaecf0] flex flex-col gap-5 px-8 py-5 shrink-0">
          <TopBarAr />
          <StepperAr currentStep={5} />
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 pt-7 pb-6 flex flex-col gap-5">
          {/* Title */}
          <div>
            <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-[#101828] leading-tight">راجع عرضك</h1>
            <p className="text-[#475467] text-[15px] mt-2">تحقق من تفاصيل عرضك المختار قبل إنشاء طلبك.</p>
          </div>

          {/* Bank header card */}
          <div className="border border-[#eaecf0] rounded-[14px] px-5 py-4">
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-3 shrink-0">
                <Image src="/taas-snb.png" alt="البنك الأهلي السعودي" width={80} height={32} className="object-contain" />
                <div>
                  <p className="text-[14px] font-semibold text-[#101828]">البنك الأهلي السعودي</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="bg-[#0063f5] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">موصى به</span>
                    <span className="flex items-center gap-1 text-[#475467] text-[12px]">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="#f79009" stroke="none">
                        <path d="M5.5 1l1.27 2.58 2.85.41-2.06 2.01.49 2.83L5.5 7.47l-2.55 1.36.49-2.83L1.38 3.99l2.85-.41L5.5 1z" />
                      </svg>
                      4.8 · 728 تقييمًا
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-8 w-px bg-[#eaecf0] shrink-0" />

              {[
                { label: 'نسبة الفائدة (ثابتة)', value: '4.89%', blue: false },
                { label: 'الدفعة الشهرية', value: 'SAR 3,648', blue: true },
                { label: 'مدة التمويل', value: '60 شهراً', blue: false },
                { label: 'إجمالي المبلغ المستحق', value: 'SAR 218,880', blue: false },
              ].map(m => (
                <div key={m.label} className="flex flex-col gap-0.5 shrink-0">
                  <span className="text-[#475467] text-[11px]">{m.label}</span>
                  <span className={['text-[15px] font-bold', m.blue ? 'text-[#0063f5]' : 'text-[#101828]'].join(' ')}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="border border-[#eaecf0] rounded-[14px] overflow-hidden">
            <div className="flex border-b border-[#eaecf0]">
              {TABS.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={['px-5 py-3 text-[13px] font-medium shrink-0 border-b-2 -mb-px transition-colors', activeTab === i ? 'text-[#0063f5] border-[#0063f5]' : 'text-[#475467] border-transparent'].join(' ')}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-5">
              {activeTab === 0 ? (
                <div className="flex gap-6">
                  {/* Left: financing details */}
                  <div className="flex-1 min-w-0 flex flex-col gap-4">
                    <div>
                      <p className="text-[12px] font-semibold text-[#344054] uppercase tracking-wider mb-3">تفاصيل التمويل</p>
                      {[
                        ['نوع التمويل', 'المرابحة (متوافقة مع الشريعة)'],
                        ['مبلغ التمويل', 'SAR 183,000'],
                        ['الدفعة المقدمة (20%)', 'SAR 45,750'],
                        ['الدفعة الأولى', '30 يوماً بعد الصرف'],
                        ['نقل الملكية', 'في نهاية المدة'],
                      ].map(([k, v]) => (
                        <div key={k} className="flex items-center justify-between py-[10px] border-b border-[#eaecf0] last:border-b-0 text-[13px]">
                          <span className="text-[#475467]">{k}</span>
                          <span className="text-[#101828] font-semibold">{v}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <p className="text-[12px] font-semibold text-[#344054] uppercase tracking-wider mb-3">المزايا الرئيسية</p>
                      {['نسبة ربح ثابتة', 'التسوية المبكرة مسموح بها', 'التأمين الشامل مشمول', 'بدون رسوم معالجة'].map(f => (
                        <div key={f} className="flex items-center gap-2 py-1.5">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#12b76a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2.5 7l3 3 6-6" />
                          </svg>
                          <span className="text-[#475467] text-[13px]">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: payment breakdown */}
                  <div className="w-[300px] shrink-0 flex flex-col gap-2">
                    <p className="text-[12px] font-semibold text-[#344054] uppercase tracking-wider mb-1">تفاصيل الدفع</p>
                    {[
                      ['السعر (شامل ض.ق.م)', 'SAR 228,750'],
                      ['الدفعة المقدمة (20%)', '− SAR 45,750'],
                      ['مبلغ التمويل', 'SAR 183,000'],
                      ['إجمالي الربح', 'SAR 35,880'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between py-[10px] border-b border-[#eaecf0] text-[13px]">
                        <span className="text-[#475467]">{k}</span>
                        <span className="text-[#101828] font-semibold">{v}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between py-3 mt-1">
                      <span className="text-[#344054] text-[13px] font-bold">إجمالي المبلغ المستحق</span>
                      <span className="text-[#0063f5] text-[18px] font-bold">SAR 218,880</span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-[13px] text-[#98a2b3] text-center py-8">المحتوى قادم قريباً.</p>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#eaecf0] px-8 py-4 flex items-center justify-between shrink-0">
          <Link href="/taas/ar/10-compare-offers" className="text-[#475467] text-[14px] font-medium">
            العودة للمقارنة
          </Link>
          <Link href="/taas/ar/12-submit-order" className="bg-[#0063f5] text-white font-medium text-[14px] px-5 py-[10px] rounded-lg">
            اختر هذا العرض ←
          </Link>
        </div>
      </div>
    </div>
  )
}
