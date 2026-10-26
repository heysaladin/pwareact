'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PartnerPanelAr from '../_components/PartnerPanelAr'
import TopBarAr from '../_components/TopBarAr'
import StepperAr from '../_components/StepperAr'

const OTP_LENGTH = 4
const RESEND_SECONDS = 45

export default function SubmitOrderArPage() {
  const [otp, setOtp] = useState<string[]>(['4', '8', '2', ''])
  const [countdown, setCountdown] = useState(RESEND_SECONDS)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (countdown === 0) return
    const t = setTimeout(() => setCountdown(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [countdown])

  const handleChange = (i: number, val: string) => {
    const digit = val.replace(/\D/g, '').slice(-1)
    const next = [...otp]
    next[i] = digit
    setOtp(next)
    if (digit && i < OTP_LENGTH - 1) {
      inputRefs.current[i + 1]?.focus()
    }
  }

  const handleKey = (i: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[i] && i > 0) {
      inputRefs.current[i - 1]?.focus()
    }
  }

  const mm = String(Math.floor(countdown / 60)).padStart(2, '0')
  const ss = String(countdown % 60).padStart(2, '0')

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
          {/* Title */}
          <div>
            <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-[#101828] leading-tight">تأكيد طلبك</h1>
            <p className="text-[#475467] text-[15px] mt-2">أنت على وشك الإنهاء! أدخل كلمة المرور لمرة واحدة (OTP) المُرسَلة إلى رقم جوالك المسجل في أبشر.</p>
          </div>

          {/* Two columns */}
          <div className="flex gap-6">
            {/* Left */}
            <div className="flex-1 flex flex-col gap-5">
              {/* OTP card */}
              <div className="border border-[#eaecf0] rounded-[14px] p-5 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#f2f4f7] flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4.5" y="1" width="7" height="14" rx="1.5" />
                      <circle cx="8" cy="12.5" r="0.75" fill="#475467" stroke="none" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#101828]">أدخل رمز التحقق</p>
                    <p className="text-[12px] text-[#475467]">أُرسل إلى +966 5• ••• 1634</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {Array.from({ length: OTP_LENGTH }).map((_, i) => (
                    <input
                      key={i}
                      ref={el => { inputRefs.current[i] = el }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={otp[i] || ''}
                      onChange={e => handleChange(i, e.target.value)}
                      onKeyDown={e => handleKey(i, e)}
                      className={[
                        'w-[68px] h-[68px] text-center text-[28px] font-bold rounded-[12px] border-2 outline-none transition-colors',
                        i === 3 ? 'border-[#0063f5]' : 'border-[#eaecf0]',
                        otp[i] ? 'text-[#101828]' : 'text-[#101828]',
                      ].join(' ')}
                    />
                  ))}
                </div>

                <p className="text-[12px] text-[#475467]">
                  لم تستلم الرمز؟{' '}
                  <button className="text-[#0063f5] font-medium">إعادة الإرسال خلال {mm}:{ss}</button>
                </p>
              </div>

              {/* What happens next */}
              <div className="border border-[#eaecf0] rounded-[14px] p-5 flex flex-col gap-3">
                <p className="text-[13px] font-semibold text-[#101828]">ماذا يحدث بعد ذلك؟</p>
                {[
                  { n: 1, label: 'إنشاء الطلب', desc: 'نؤكد طلبك ونُخطر &#123;الشريك&#125;.' },
                  { n: 2, label: 'التحقق من البنك', desc: 'يجري البنك التحقق النهائي.' },
                  { n: 3, label: 'تأكيد الطلب', desc: 'ستتلقى تأكيداً عند الموافقة.' },
                ].map(step => (
                  <div key={step.n} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#eff5ff] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#0063f5] text-[11px] font-bold">{step.n}</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#101828]">{step.label}</p>
                      <p className="text-[12px] text-[#475467] mt-0.5" dangerouslySetInnerHTML={{ __html: step.desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: order summary */}
            <div className="w-[300px] shrink-0">
              <div className="border border-[#eaecf0] rounded-[14px] p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-semibold text-[#101828]">ملخص الطلب</p>
                  <button className="flex items-center gap-1 text-[#0063f5] text-[12px] font-medium">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8.5 1.5a1.414 1.414 0 0 1 2 2L3.5 10.5l-3 .5.5-3 7.5-6.5z" />
                    </svg>
                    تعديل
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <Image src="/taas-snb.png" alt="البنك الأهلي السعودي" width={56} height={22} className="object-contain" />
                  <span className="text-[12px] font-semibold text-[#101828]">البنك الأهلي السعودي</span>
                </div>

                {[
                  ['نسبة الفائدة (ثابتة)', '4.89%', false],
                  ['الدفعة الشهرية', 'SAR 3,648', false],
                  ['مدة التمويل', '60 شهراً', false],
                  ['مبلغ التمويل', 'SAR 183,000', false],
                  ['الدفعة المقدمة (20%)', 'SAR 45,750', false],
                  ['إجمالي المبلغ المستحق', 'SAR 218,880', true],
                ].map(([k, v, blue]) => (
                  <div key={k as string} className="flex items-center justify-between py-2 border-b border-[#eaecf0] last:border-b-0 text-[12px]">
                    <span className="text-[#475467]">{k as string}</span>
                    <span className={['font-semibold', blue ? 'text-[#0063f5]' : 'text-[#101828]'].join(' ')}>{v as string}</span>
                  </div>
                ))}

                <div className="h-px bg-[#eaecf0]" />

                {/* Product */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f2f4f7] flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="4" width="14" height="8" rx="1" />
                      <circle cx="4" cy="12.5" r="1.5" />
                      <circle cx="12" cy="12.5" r="1.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#101828]">&#123;اسم المنتج&#125;</p>
                    <p className="text-[11px] text-[#475467]">&#123;الفئة&#125; · 2026</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-[#475467]">السعر (شامل ض.ق.م)</span>
                  <span className="text-[#101828] font-semibold">SAR 228,750</span>
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
            معلوماتك تبقى آمنة ومشفرة.
          </div>
          <Link href="/taas/ar/13-submit-success" className="bg-[#0063f5] text-white font-medium text-[14px] px-5 py-[10px] rounded-lg">
            تأكيد وإنشاء الطلب ←
          </Link>
        </div>
      </div>
    </div>
  )
}
