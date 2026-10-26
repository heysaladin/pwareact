import Link from 'next/link'
import PartnerPanelAr from '../_components/PartnerPanelAr'
import TopBarAr from '../_components/TopBarAr'
import StepperAr from '../_components/StepperAr'

export default function SubmitSuccessArPage() {
  return (
    <div className="taas min-h-screen bg-[#f2f4f7] flex gap-4 p-4">
      <PartnerPanelAr />
      <div className="flex-1 bg-white border border-[#eaecf0] rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#eaecf0] flex flex-col gap-5 px-8 py-5 shrink-0">
          <TopBarAr />
          <StepperAr currentStep={6} />
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 pt-7 pb-6 flex flex-col gap-5">

          {/* Success hero card */}
          <div className="bg-[#f6fef9] border border-[#d1fadf] rounded-2xl px-10 py-7 flex flex-col items-center gap-[10px]">
            {/* Icon */}
            <div className="w-[88px] h-[88px] rounded-[44px] bg-[#d1fadf] flex items-center justify-center">
              <div className="w-[60px] h-[60px] rounded-[30px] bg-[#12b76a] flex items-center justify-center">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 15l7 8 13-14" />
                </svg>
              </div>
            </div>
            <h1 className="font-['Newsreader',Georgia,serif] text-[40px] font-medium text-center text-[#101828]">تم تقديم الطلب</h1>
            <p className="text-[16px] font-semibold text-center text-[#101828]">تم تقديم طلبك بنجاح!</p>
            <p className="text-[14px] text-[#475467] text-center max-w-lg leading-relaxed">
              سنُخطرك فور انتهاء البنك من التحقق النهائي وتأكيد طلبك.
            </p>
          </div>

          {/* Order info row */}
          <div className="flex gap-4">
            {/* Reference */}
            <div className="border border-[#eaecf0] rounded-[14px] p-5 flex-1">
              <p className="text-[#98a2b3] text-[11px] mb-1">رقم مرجع الطلب</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[20px] font-bold text-[#101828]">TM-2026-001245</span>
                <button className="w-7 h-7 rounded-[6px] bg-[#f9fafb] border border-[#eaecf0] flex items-center justify-center">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#0063f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4.5" y="4.5" width="7" height="7" rx="1" />
                    <path d="M2.5 8.5H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5a1 1 0 0 1 1 1v.5" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Date */}
            <div className="border border-[#eaecf0] rounded-[14px] p-5 flex-1">
              <p className="text-[#98a2b3] text-[11px] mb-1">تاريخ التقديم</p>
              <div className="flex items-center gap-2 mt-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#0063f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1.5" y="2.5" width="13" height="12" rx="1.5" />
                  <path d="M5 1v3M11 1v3M1.5 6.5h13" />
                </svg>
                <span className="text-[15px] font-semibold text-[#101828]">25 أكتوبر 2026 · 10:24 ص</span>
              </div>
            </div>

            {/* Selected offer */}
            <div className="border border-[#eaecf0] rounded-[14px] p-5 flex-1">
              <p className="text-[#98a2b3] text-[11px] mb-1">العرض المختار</p>
              <p className="text-[15px] font-semibold text-[#101828] mt-1">البنك الأهلي السعودي</p>
              <p className="text-[#0063f5] text-[13px] font-medium">SAR 3,648 / شهرياً · 60 شهراً</p>
            </div>
          </div>

          {/* What happens next */}
          <div className="border border-[#eaecf0] rounded-[14px] p-5 flex flex-col gap-4">
            <h2 className="font-['Newsreader',Georgia,serif] text-[24px] font-medium text-[#101828]">ماذا يحدث بعد ذلك؟</h2>
            <div className="flex gap-4">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0063f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 2h9l4 4v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                      <path d="M12 2v4h4M6 9h8M6 13h5" />
                    </svg>
                  ),
                  title: 'التحقق من البنك',
                  desc: 'يجري البنك التحقق النهائي.',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0063f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="10" cy="10" r="8" />
                      <path d="M6 10l3 3 5-5" />
                    </svg>
                  ),
                  title: 'تأكيد الطلب',
                  desc: 'ستتلقى تأكيداً عند الموافقة.',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0063f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h11v9H2zM13 6.5h3.5l2.5 3V15H13V6.5z" />
                      <circle cx="5" cy="15" r="2" />
                      <circle cx="15.5" cy="15" r="2" />
                    </svg>
                  ),
                  title: 'معالجة الطلب',
                  desc: 'يُجهّز الشريك منتجك للتسليم.',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0063f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 3h13v9H1zM14 7h3l2 2.5V15h-5V7z" />
                      <circle cx="4" cy="15.5" r="1.75" />
                      <circle cx="14.5" cy="15.5" r="1.75" />
                    </svg>
                  ),
                  title: 'تتبع الطلب',
                  desc: 'تابع حالة طلبك من حسابك.',
                },
              ].map((step, i) => (
                <div key={i} className="flex-1 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#eff5ff] flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#101828]">{step.title}</p>
                    <p className="text-[12px] text-[#475467] mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#eaecf0] px-8 py-4 flex items-center justify-between shrink-0">
          <Link
            href="/taas/ar"
            className="text-[#0063f5] text-[14px] font-semibold"
          >
            العودة إلى الشريك
          </Link>
          <Link
            href="/taas/ar"
            className="bg-[#0063f5] text-white font-medium text-[14px] px-5 py-[10px] rounded-lg"
          >
            تتبع الطلب ←
          </Link>
        </div>
      </div>
    </div>
  )
}
