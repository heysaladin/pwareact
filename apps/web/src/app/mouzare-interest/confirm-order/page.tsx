'use client';

import { useState } from 'react';

export default function ConfirmOrderPage() {
  const [otp] = useState(['4', '8', '2', '']);

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
      <header className="bg-white border-b border-[#E5E7EB] h-16 flex items-center px-8 relative z-50 flex-shrink-0">
        <div className="grid grid-cols-3 items-center w-full">
          <div className="flex items-center">
            <img src="/mouzare-logo.png" alt="Mouzare" className="h-9 w-auto" />
          </div>
          <nav className="flex items-center justify-center gap-8">
            <a href="#" className="text-[#374151] text-sm hover:text-[#1B3A24]">الرئيسية</a>
            <a href="#" className="text-[#374151] text-sm hover:text-[#1B3A24]">المتجر</a>
            <a href="#" className="text-[#1B3A24] text-sm font-medium">طلباتي</a>
          </nav>
          <div className="flex items-center gap-6 justify-end">
            <button className="flex items-center gap-2 text-[#374151] hover:text-[#1B3A24]">
              <div className="relative">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                <span className="absolute -top-1.5 -left-1.5 bg-[#2C5E1A] text-white text-[9px] rounded-full w-[17px] h-[17px] flex items-center justify-center font-bold">3</span>
              </div>
              <span className="text-sm">سلة التسوق</span>
            </button>
            <button className="flex items-center gap-2 text-[#374151] hover:text-[#1B3A24]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="text-sm">حسابي</span>
            </button>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="flex-1 flex flex-col items-end px-8 pt-7 pb-6 gap-5 overflow-y-auto min-h-0">

        {/* Page title */}
        <div className="flex flex-col gap-2 items-end w-full">
          <h1 className="text-[24px] font-bold text-[#111827] leading-[36px] w-full text-right" dir="auto">
            أكّد رقمك
          </h1>
          <p className="text-[14px] text-[#6b7280] leading-[21px] w-full text-right" dir="auto">
            أوشكت على الانتهاء! أدخل رمز التحقق (OTP) المرسل إلى رقم جوالك المسجّل في أبشر.
          </p>
        </div>

        {/* OTP card */}
        <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 flex flex-col gap-4 items-end w-full">

          {/* Header row */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-0.5 items-end">
              <p className="text-[14px] font-semibold text-[#111827] text-right" dir="auto">أدخل رمز التحقق</p>
              <p className="text-[12px] text-[#374151] text-right" dir="auto">أُرسل إلى الرقم المنتهي بـ 1634</p>
            </div>
            <div className="w-10 h-10 bg-[#eef4f0] rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1b3a24" strokeWidth="1.5">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* OTP boxes */}
          <div className="flex gap-3 items-center">
            {otp.map((digit, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-xl"
                style={{
                  width: '64px',
                  height: '72px',
                  background: 'white',
                  border: i === 3 ? '2px solid #1b3a24' : '1px solid #e5e7eb',
                }}
              >
                <span className="text-[24px] font-bold text-[#111827]">{digit}</span>
              </div>
            ))}
          </div>

          {/* Resend */}
          <p className="text-[13px] text-[#1b3a24] text-right" dir="auto">
            لم يصلك الرمز؟ إعادة الإرسال خلال <span className="font-semibold">00:45</span>
          </p>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e5e7eb] bg-white flex items-center justify-between px-8 py-4 flex-shrink-0">
        <a
          href="/mouzare-interest/financing"
          className="bg-[#1b3a24] text-white text-[13px] font-semibold px-[18px] py-3 rounded-lg shadow-sm"
          dir="auto"
        >
          تأكيد وإنشاء الطلب ←
        </a>
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-[#6b7280]" dir="auto">تبقى معلوماتك آمنة ومشفّرة.</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        </div>
      </footer>
    </div>
  );
}
