'use client'
import { useState } from 'react'
import Link from 'next/link'
import PartnerPanelAr from '../_components/PartnerPanelAr'
import TopBarAr from '../_components/TopBarAr'
import StepperAr from '../_components/StepperAr'

const SOCIAL_STATUS = ['أعزب', 'متزوج', 'مطلق', 'أرمل']
const DEPENDENTS = ['0', '1', '2', '3', '4', '5+']
const ADDITIONAL = [
  {
    label: 'تفاصيل التوظيف',
    desc: 'صاحب العمل، القطاع، تاريخ البدء',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1.5" y="5" width="13" height="9.5" rx="1.5" />
        <path d="M5.5 5V3.5A1.5 1.5 0 0 1 7 2h2a1.5 1.5 0 0 1 1.5 1.5V5" />
      </svg>
    ),
  },
  {
    label: 'دخل إضافي',
    desc: 'إيجار أو دخل تجاري أو غيره',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="5" r="3" />
        <path d="M2 14c0-3.31 2.69-5 6-5s6 1.69 6 5" />
      </svg>
    ),
  },
  {
    label: 'الالتزامات المالية',
    desc: 'قروض وبطاقات والتزامات أخرى',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 1.5H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5l-3.5-3.5z" />
        <path d="M9.5 1.5V5H13" />
      </svg>
    ),
  },
]

export default function PersonalDetailsArPage() {
  const [socialStatus, setSocialStatus] = useState('متزوج')
  const [dependents, setDependents] = useState('2')
  const [salaryBank, setSalaryBank] = useState('مصرف الراجحي')
  const [city, setCity] = useState('الرياض')
  const [homeOwnership, setHomeOwnership] = useState('إيجار')
  const [residenceType, setResidenceType] = useState('شقة')
  const [educationLevel, setEducationLevel] = useState('بكالوريوس')
  const [monthlyEdFees, setMonthlyEdFees] = useState('SAR 1,200')
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  return (
    <div className="taas min-h-screen bg-[#f2f4f7] flex gap-4 p-4">
      <PartnerPanelAr />
      <div className="flex-1 bg-white border border-[#eaecf0] rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#eaecf0] flex flex-col gap-5 px-8 py-5 shrink-0">
          <TopBarAr />
          <StepperAr currentStep={4} />
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 pt-7 pb-6 flex flex-col gap-5">
          {/* Title */}
          <div>
            <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-[#101828] leading-tight">البيانات الشخصية والإفصاحات</h1>
            <p className="text-[#475467] text-[15px] mt-2">يُرجى تقديم معلومات دقيقة — تُستخدم فقط لتقييم أهليتك للتمويل.</p>
          </div>

          {/* Social status */}
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-[#344054]">الحالة الاجتماعية <span className="text-red-500">*</span></label>
            <div className="flex items-center gap-2">
              {SOCIAL_STATUS.map(s => (
                <button
                  key={s}
                  onClick={() => setSocialStatus(s)}
                  className={['px-4 py-2 rounded-full text-[13px] font-medium border transition-colors', socialStatus === s ? 'bg-[#eff5ff] border-[#0063f5] text-[#0063f5]' : 'bg-white border-[#d0d5dd] text-[#344054]'].join(' ')}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Number of dependents */}
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-[#344054]">عدد المعالين <span className="text-red-500">*</span></label>
            <div className="flex items-center gap-2">
              {DEPENDENTS.map(d => (
                <button
                  key={d}
                  onClick={() => setDependents(d)}
                  className={['w-10 h-10 rounded-full text-[13px] font-medium border transition-colors', dependents === d ? 'bg-[#eff5ff] border-[#0063f5] text-[#0063f5]' : 'bg-white border-[#d0d5dd] text-[#344054]'].join(' ')}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Form fields */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {[
              { label: 'بنك الراتب', req: true, value: salaryBank, onChange: setSalaryBank, type: 'select', opts: ['مصرف الراجحي', 'البنك الأهلي السعودي', 'مصرف الإنماء', 'بنك الرياض', 'SABB', 'أخرى'] },
              { label: 'المدينة', req: true, value: city, onChange: setCity, type: 'select', opts: ['الرياض', 'جدة', 'الدمام', 'مكة المكرمة', 'المدينة المنورة', 'أخرى'] },
              { label: 'ملكية المسكن', req: true, value: homeOwnership, onChange: setHomeOwnership, type: 'select', opts: ['ملك', 'إيجار', 'ملك عائلي', 'أخرى'] },
              { label: 'نوع السكن', req: true, value: residenceType, onChange: setResidenceType, type: 'select', opts: ['شقة', 'فيلا', 'مجمع', 'أخرى'] },
              { label: 'المستوى التعليمي', req: true, value: educationLevel, onChange: setEducationLevel, type: 'select', opts: ['بكالوريوس', 'ثانوية', 'ماجستير', 'دكتوراه', 'أخرى'] },
              { label: 'رسوم التعليم الشهرية', req: true, value: monthlyEdFees, onChange: setMonthlyEdFees, type: 'text', placeholder: 'SAR 0' },
            ].map(field => (
              <div key={field.label} className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#344054]">
                  {field.label} {field.req && <span className="text-red-500">*</span>}
                </label>
                {field.type === 'select' ? (
                  <div className="relative">
                    <select
                      value={field.value}
                      onChange={e => field.onChange(e.target.value)}
                      className="w-full px-4 py-[11px] rounded-lg border border-[#d0d5dd] text-[14px] text-[#101828] outline-none bg-white appearance-none cursor-pointer pr-9 focus:border-[#0063f5]"
                    >
                      {field.opts!.map(o => <option key={o}>{o}</option>)}
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#98a2b3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.5 5.25l3.5 3.5 3.5-3.5" />
                    </svg>
                  </div>
                ) : (
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={e => field.onChange(e.target.value)}
                    className="px-4 py-[11px] rounded-lg border border-[#d0d5dd] text-[14px] text-[#101828] outline-none focus:border-[#0063f5] transition-colors"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Additional disclosures */}
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-semibold text-[#98a2b3] uppercase tracking-wider">إفصاحات إضافية</p>
            <div className="border border-[#eaecf0] rounded-[14px] overflow-hidden">
              {ADDITIONAL.map((item, i) => (
                <div key={item.label} className={i < ADDITIONAL.length - 1 ? 'border-b border-[#eaecf0]' : ''}>
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#f9fafb] transition-colors"
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#f2f4f7] flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-[#101828]">{item.label}</p>
                        <p className="text-[12px] text-[#475467]">{item.desc}</p>
                      </div>
                    </div>
                    <svg
                      className={['transition-transform', openAccordion === i ? 'rotate-180' : ''].join(' ')}
                      width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#98a2b3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </button>
                  {openAccordion === i && (
                    <div className="px-5 pb-4 pt-1 bg-[#f9fafb] border-t border-[#eaecf0]">
                      <p className="text-[12px] text-[#98a2b3] italic">ستظهر هنا حقول {item.label}.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#eaecf0] px-8 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-[#98a2b3] text-[12px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2.5" y="6" width="9" height="7" rx="1" />
              <path d="M4.5 6V4a2.5 2.5 0 0 1 5 0v2" />
            </svg>
            جميع المعلومات تبقى سرية.
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-white border border-[#d5d7da] text-[#344054] font-medium text-[14px] px-5 py-[10px] rounded-lg">
              حفظ كمسودة
            </button>
            <Link href="/taas/ar/08-collecting-reports" className="bg-[#0063f5] text-white font-medium text-[14px] px-5 py-[10px] rounded-lg">
              تأكيد والتالي ←
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
