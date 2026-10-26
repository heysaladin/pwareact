import Link from 'next/link'
import PartnerPanelAr from '../_components/PartnerPanelAr'
import TopBarAr from '../_components/TopBarAr'
import StepperAr from '../_components/StepperAr'

export default function MobileVerificationArPage() {
  return (
    <div className="taas min-h-screen bg-[#f2f4f7] flex gap-4 p-4">
      <PartnerPanelAr />
      <div className="flex-1 bg-white border border-[#eaecf0] rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#eaecf0] flex flex-col gap-5 px-8 py-5 shrink-0">
          <TopBarAr />
          <StepperAr currentStep={2} />
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 pt-7 pb-6 flex flex-col gap-5">
          {/* Title */}
          <div>
            <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-[#101828] leading-tight">التحقق من ملكية الجوال</h1>
            <p className="text-[#475467] text-[15px] mt-2">تم التحقق من هويتك. نقوم الآن بتأكيد أن رقم جوالك مسجل باسمك عبر قناة حكومية آمنة.</p>
          </div>

          {/* Two columns */}
          <div className="flex gap-6">
            {/* Left panel */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Verified ID bar */}
              <div className="border border-[#eaecf0] rounded-xl px-5 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#ecfdf3] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#067647" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="2.5" width="12" height="9" rx="1.5" />
                    <path d="M1 5.5h12M4 8h2M4 9.5h3" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#475467] text-[11px]">الهوية الوطنية / الإقامة المتحقق منها</p>
                  <p className="text-[#101828] text-[13px] font-semibold">1 •••• •••• 34</p>
                </div>
                <span className="bg-[#ecfdf3] border border-[#a9efc5] text-[#067647] text-[11px] font-semibold px-3 py-1 rounded-full shrink-0">تم التحقق</span>
              </div>

              {/* Mobile in progress */}
              <div className="border-[1.5px] border-[#0063f5] rounded-[14px] px-5 py-4 flex flex-col gap-3 bg-[#f7faff]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#d1e3ff] flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#0063f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4.5" y="1" width="7" height="14" rx="1.5" />
                      <circle cx="8" cy="12.5" r="0.75" fill="#0063f5" stroke="none" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#475467] text-[11px]">رقم الجوال</p>
                    <p className="text-[#101828] text-[14px] font-semibold">+966 5• ••• 1634</p>
                  </div>
                  <span className="bg-[#eff5ff] border border-[#d1e3ff] text-[#0063f5] text-[11px] font-semibold px-3 py-1 rounded-full shrink-0">جارٍ</span>
                </div>
                <div className="w-full h-2 bg-[#e4e9f2] rounded-full overflow-hidden">
                  <div className="h-full bg-[#0063f5] rounded-full" style={{ width: '62%' }} />
                </div>
                <p className="text-[#475467] text-[12px]">جارٍ التحقق من ملكية الجوال... قد يستغرق هذا بعض الوقت.</p>
              </div>

              {/* What happens next */}
              <div className="border border-[#eaecf0] rounded-[14px] p-5 flex flex-col gap-3">
                <p className="text-[13px] font-semibold text-[#101828]">ماذا يحدث بعد ذلك؟</p>
                {[
                  { done: true, active: false, label: 'تم التحقق من الهوية عبر نافذ', sub: 'مكتمل' },
                  { done: false, active: true, label: 'تأكيد ملكية الجوال', sub: 'جارٍ' },
                  { done: false, active: false, label: 'المتابعة إلى الموافقات والتحقق من البيانات', sub: 'قيد الانتظار' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {step.done ? (
                      <div className="w-6 h-6 rounded-full bg-[#12b76a] flex items-center justify-center shrink-0">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1.5 5.5l2.5 2.5 5-5.5" />
                        </svg>
                      </div>
                    ) : step.active ? (
                      <div className="w-6 h-6 rounded-full bg-[#0063f5] flex items-center justify-center shrink-0">
                        <span className="text-white text-[10px] font-bold">{i + 1}</span>
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-[#d0d5dd] flex items-center justify-center shrink-0">
                        <span className="text-[#475467] text-[10px] font-bold">{i + 1}</span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-[#101828]">{step.label}</p>
                    </div>
                    <span className={['text-[11px] font-semibold shrink-0', step.done ? 'text-[#12b76a]' : step.active ? 'text-[#0063f5]' : 'text-[#98a2b3]'].join(' ')}>
                      {step.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel */}
            <div className="w-[280px] shrink-0">
              <div className="bg-[#f7faff] border border-[#eaecf0] rounded-[14px] p-5 flex flex-col gap-3">
                <div className="w-10 h-10 bg-white rounded-xl border border-[#eaecf0] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#0063f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 1.5L1.5 5v4.5c0 4.67 3.15 8.27 7.5 9.5 4.35-1.23 7.5-4.83 7.5-9.5V5L9 1.5z" />
                    <path d="M6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] font-bold text-[#101828]">عن هذه الخطوة</p>
                  <p className="text-[12px] text-[#475467] mt-1 leading-relaxed">
                    تتحقق تمول من أن رقم الجوال هذا مسجل باسمك لدى الجهات الحكومية الرسمية. هذا يحمي حسابك وطلب التمويل الخاص بك.
                  </p>
                </div>
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
            يستخدم قنوات حكومية آمنة فقط.
          </div>
          <div className="flex items-center gap-3">
            <Link href="/taas/ar/04-nafath-approve" className="bg-white border border-[#d5d7da] text-[#344054] font-medium text-[14px] px-5 py-[10px] rounded-lg">
              إلغاء
            </Link>
            <Link href="/taas/ar/06-consents-contracts" className="bg-[#0063f5] text-white font-medium text-[14px] px-5 py-[10px] rounded-lg">
              متابعة ←
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
