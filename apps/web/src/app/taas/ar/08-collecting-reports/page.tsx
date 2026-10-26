'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import PartnerPanelAr from '../_components/PartnerPanelAr'
import TopBarAr from '../_components/TopBarAr'
import StepperAr from '../_components/StepperAr'

type Status = 'pending' | 'loading' | 'done'

const PROVIDERS = [
  { id: 'simah', name: 'SIMAH', desc: 'تقرير الائتمان والالتزامات المالية' },
  { id: 'gosi', name: 'GOSI', desc: 'معلومات التوظيف والراتب' },
  { id: 'masdr', name: 'Masdr', desc: 'التحقق من الدخل' },
  { id: 'tawakkalna', name: 'Tawakkalna', desc: 'التحقق من الهوية والملف الشخصي' },
  { id: 'elm', name: 'ELM', desc: 'سجل الأصول والملكية' },
]

const INITIAL_DONE = 3

export default function CollectingReportsArPage() {
  const [statuses, setStatuses] = useState<Status[]>([
    'done', 'done', 'done', 'loading', 'pending',
  ])

  const doneCount = statuses.filter(s => s === 'done').length
  const allDone = doneCount === PROVIDERS.length

  useEffect(() => {
    const t1 = setTimeout(() => {
      setStatuses(prev => prev.map((s, i) => i === 3 ? 'done' : s))
    }, 2000)
    const t2 = setTimeout(() => {
      setStatuses(prev => prev.map((s, i) => i === 4 ? 'loading' : s))
    }, 2200)
    const t3 = setTimeout(() => {
      setStatuses(prev => prev.map((s, i) => i === 4 ? 'done' : s))
    }, 3800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

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
            <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-[#101828] leading-tight">جمع تقاريرك</h1>
            <p className="text-[#475467] text-[15px] mt-2">نقوم بالتواصل بشكل آمن مع مزودي الخدمات الحكومية والمالية الموثوقة لجمع معلومات الائتمان والتوظيف الخاصة بك.</p>
          </div>

          {/* Two columns */}
          <div className="flex gap-6">
            {/* Left: providers */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Status bar */}
              <div className="border border-[#eaecf0] rounded-[14px] px-5 py-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {!allDone && (
                      <svg className="animate-spin" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#0063f5" strokeWidth="2" strokeLinecap="round">
                        <path d="M9 1.5A7.5 7.5 0 0 1 16.5 9" />
                        <circle cx="9" cy="9" r="7.5" strokeOpacity="0.2" />
                      </svg>
                    )}
                    <div>
                      <p className="text-[13px] font-semibold text-[#101828]">
                        {allDone ? 'تم جمع جميع التقارير!' : 'الاتصال بمزودي الخدمة...'}
                      </p>
                      {!allDone && <p className="text-[12px] text-[#475467]">قد يستغرق هذا ما يصل إلى 60 ثانية. يُرجى إبقاء هذه الصفحة مفتوحة.</p>}
                    </div>
                  </div>
                  <span className="text-[#0063f5] text-[12px] font-semibold shrink-0">{doneCount} من {PROVIDERS.length} مكتملة</span>
                </div>
                <div className="w-full h-2 bg-[#e4e9f2] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0063f5] rounded-full transition-all duration-500"
                    style={{ width: `${(doneCount / PROVIDERS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Provider list */}
              <div className="border border-[#eaecf0] rounded-[14px] overflow-hidden">
                {PROVIDERS.map((p, i) => {
                  const status = statuses[i]
                  return (
                    <div
                      key={p.id}
                      className={['flex items-center gap-4 px-5 py-4', i < PROVIDERS.length - 1 ? 'border-b border-[#eaecf0]' : ''].join(' ')}
                    >
                      {/* Status icon */}
                      <div className="w-8 h-8 flex items-center justify-center shrink-0">
                        {status === 'done' ? (
                          <div className="w-6 h-6 rounded-full bg-[#12b76a] flex items-center justify-center">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M1.5 5.5l2.5 2.5 5-5.5" />
                            </svg>
                          </div>
                        ) : status === 'loading' ? (
                          <svg className="animate-spin" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0063f5" strokeWidth="2" strokeLinecap="round">
                            <path d="M10 2a8 8 0 0 1 8 8" />
                            <circle cx="10" cy="10" r="8" strokeOpacity="0.2" />
                          </svg>
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-[#d0d5dd]" />
                        )}
                      </div>

                      {/* DB icon */}
                      <div className="w-9 h-9 rounded-xl bg-[#f2f4f7] flex items-center justify-center shrink-0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <ellipse cx="8" cy="4" rx="6" ry="2" />
                          <path d="M14 8c0 1.1-2.686 2-6 2S2 9.1 2 8M14 12c0 1.1-2.686 2-6 2S2 13.1 2 12" />
                          <path d="M2 4v8M14 4v8" />
                        </svg>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-semibold text-[#101828]">{p.name}</p>
                        <p className="text-[12px] text-[#475467]">{p.desc}</p>
                      </div>

                      <span className={[
                        'text-[11px] font-semibold shrink-0',
                        status === 'done' ? 'text-[#12b76a]' : status === 'loading' ? 'text-[#0063f5]' : 'text-[#98a2b3]',
                      ].join(' ')}>
                        {status === 'done' ? 'مكتمل' : status === 'loading' ? 'جارٍ' : 'قيد الانتظار'}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right: what happens next */}
            <div className="w-[280px] shrink-0">
              <div className="border border-[#eaecf0] rounded-[14px] p-5 flex flex-col gap-4">
                <p className="text-[13px] font-semibold text-[#101828]">ماذا يحدث بعد ذلك؟</p>
                {[
                  { n: 1, label: 'نجمع معلوماتك', desc: 'تُسترجع بأمان من مزودين معتمدين.' },
                  { n: 2, label: 'نتحقق من أهليتك', desc: 'يتم تطبيق معايير كل مزود على بياناتك.' },
                  { n: 3, label: 'تشاهد عروضك النهائية', desc: 'قارن واختر العرض الذي يناسبك.' },
                ].map(step => (
                  <div key={step.n} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#eff5ff] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#0063f5] text-[11px] font-bold">{step.n}</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#101828]">{step.label}</p>
                      <p className="text-[12px] text-[#475467] mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
            تبقى معلوماتك مشفرة طوال العملية.
          </div>
          <Link
            href="/taas/ar/09-eligibility-offers"
            className={['font-medium text-[14px] px-5 py-[10px] rounded-lg transition-colors', allDone ? 'bg-[#0063f5] text-white' : 'bg-[#98a2b3] text-white cursor-not-allowed pointer-events-none'].join(' ')}
          >
            متابعة ←
          </Link>
        </div>
      </div>
    </div>
  )
}
