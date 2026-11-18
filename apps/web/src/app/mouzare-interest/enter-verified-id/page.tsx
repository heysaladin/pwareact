'use client';

import { useState } from 'react';

export default function EnterVerifiedIdPage() {
  const [phone, setPhone] = useState('');

  return (
    <div
      className="h-screen flex flex-col overflow-hidden bg-[#fafafa]"
      style={{ fontFamily: "'SF Arabic', 'SF Pro Arabic', -apple-system, BlinkMacSystemFont, 'IBM Plex Sans Arabic', 'Cairo', 'Tajawal', Arial, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap');
        @font-face { font-family: 'SF Arabic'; src: local('SF Arabic'), local('.SF Arabic'), local('.SFArabic-Regular'), local('SFArabic-Regular'); font-weight: 100 900; }
        * { box-sizing: border-box; }
      `}</style>

      {/* Header */}
      <header className="bg-white border-b border-[#e5e7eb] flex items-center justify-end px-8 py-5 flex-shrink-0">
        <div className="flex items-center gap-2">
          <img src="/logo-tamawal-icon.svg" alt="" className="h-8 w-8" />
          <img src="/logo-tamawal-web.svg" alt="Tamawal" className="h-8 w-auto" />
        </div>
      </header>

      {/* Body */}
      <main className="flex-1 flex flex-col items-end px-8 pt-7 pb-6 gap-6 overflow-y-auto min-h-0">

        {/* Page title */}
        <div className="flex flex-col gap-2 items-end w-full">
          <h1 className="text-[24px] font-bold text-[#111827] leading-[36px] w-full text-right" dir="auto">
            أدخل رقم جوالك
          </h1>
          <p className="text-[14px] text-[#6b7280] leading-[21px] w-full text-right" dir="auto">
            للمتابعة، أدخل رقم الجوال المسجّل في أبشر. سنرسل لك رمز تحقق لمرة واحدة للتأكد من أنه رقمك.
          </p>
        </div>

        {/* Two columns */}
        <div className="flex gap-6 items-start w-full">

          {/* Left: Security card */}
          <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 flex flex-col gap-3.5 items-end flex-shrink-0" style={{ width: '340px' }}>
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-[14px] font-semibold text-[#111827] text-right w-full" dir="auto">
              تحقق آمن
            </p>
            <p className="text-[13px] text-[#374151] leading-[20px] text-right w-full" dir="auto">
              يتم تشفير رقم جوالك ومشاركته فقط مع الجهات الحكومية المعتمدة للتأكد من أنه مسجّل باسمك.
            </p>
            <div className="w-full h-px bg-[#e5e7eb]" />
            <p className="text-[12px] text-[#6b7280] leading-[18px] text-right w-full" dir="auto">
              نستخدم رقمك فقط للتحقق من هويتك وإرسال تحديثات هذا الطلب.
            </p>
          </div>

          {/* Right: Form */}
          <div className="flex-1 flex flex-col gap-6 items-end min-w-0">

            {/* Phone input */}
            <div className="flex flex-col gap-1.5 items-end w-full">
              <div className="flex items-center gap-0.5 text-[13px] font-medium text-[#374151]">
                <span className="text-[#d92d20]">*</span>
                <span dir="auto">رقم الجوال</span>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="5X XXX XXXX"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  dir="auto"
                  className="w-full bg-white border border-[#d1d5db] rounded-lg px-3.5 py-[10px] pr-10 text-[13px] text-[#111827] text-right placeholder-[#9ca3af] outline-none focus:border-[#1b3a24] shadow-[0_1px_1px_rgba(10,13,18,0.05)]"
                />
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <p className="text-[13px] text-[#374151] text-right w-full" dir="auto">
                يجب أن يكون الرقم مسجّلاً باسمك في أبشر.
              </p>
            </div>

            {/* How verification works */}
            <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 flex flex-col gap-[18px] items-end w-full">
              <p className="text-[16px] font-bold text-[#111827] leading-[24px] text-right w-full" dir="auto">
                كيف يتم التحقق
              </p>
              {[
                { n: '1', title: 'أدخل رقم جوالك', desc: 'استخدم رقم الجوال السعودي المسجّل باسمك في أبشر.' },
                { n: '2', title: 'استلم رمز التحقق', desc: 'سنرسل رمزًا مكوّنًا من 4 أرقام (OTP) عبر رسالة نصية إلى هذا الرقم.' },
                { n: '3', title: 'أكّد رقمك', desc: 'أدخل الرمز في الخطوة التالية للتحقق من هويتك والمتابعة.' },
              ].map(step => (
                <div key={step.n} className="flex gap-3.5 items-start w-full">
                  <div className="flex-1 flex flex-col gap-0.5 items-end min-w-0">
                    <p className="text-[13px] font-medium text-[#111827] text-right w-full" dir="auto">{step.title}</p>
                    <p className="text-[13px] text-[#6b7280] text-right w-full" dir="auto">{step.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-2xl bg-[#eef4f0] flex items-center justify-center flex-shrink-0">
                    <span className="text-[13px] text-[#1b3a24]">{step.n}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e5e7eb] bg-white flex items-center justify-between px-8 py-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <a
            href="/mouzare-interest/confirm-order"
            className="bg-[#1b3a24] text-white text-[13px] font-semibold px-[18px] py-3 rounded-lg shadow-sm"
            dir="auto"
          >
            متابعة ←
          </a>
          <button
            className="bg-white border border-[#e5e7eb] text-[#111827] text-[13px] font-semibold px-[18px] py-3 rounded-lg shadow-sm"
            dir="auto"
          >
            إلغاء
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-[#6b7280]" dir="auto">يمكنك التوقف في أي وقت — لن يتم إرسال أي شيء حتى تؤكد طلبك.</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        </div>
      </footer>
    </div>
  );
}
