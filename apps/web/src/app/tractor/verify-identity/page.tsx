'use client';

import { useState } from 'react';
import StepperBar from '../components/StepperBar';
import CartSidebar from '../components/CartSidebar';


const STEPPER = [
  { label: 'استكشاف العروض', status: 'done' },
  { label: 'التحقق من الهوية', status: 'active' },
  { label: 'العقود والإفصاحات', status: 'pending' },
  { label: 'التحقق من البيانات', status: 'pending' },
  { label: 'العروض المؤهلة', status: 'pending' },
  { label: 'تفاصيل العرض', status: 'pending' },
  { label: 'مقارنة العروض', status: 'pending' },
  { label: 'إرسال الطلب', status: 'pending' },
];

export default function VerifyIdentityPage() {
  const [loading] = useState(false);

  return (
    <div
      dir="rtl"
      className="h-screen flex flex-col overflow-hidden"
      style={{ fontFamily: "'IBM Plex Sans Arabic', 'Cairo', 'Tajawal', Arial, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      {/* ── Navbar ───────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-[#E5E7EB] h-16 flex items-center px-8 relative z-50 flex-shrink-0">
        <div className="grid grid-cols-3 items-center w-full">
          <div className="flex items-center">
            <img src="/mouzare-logo.png" alt="فـزارع Mouzare" className="h-9 w-auto" />
          </div>
          <nav className="flex items-center justify-center gap-8">
            <a href="#" className="text-[#374151] text-sm hover:text-[#1B3A24] transition-colors">الرئيسية</a>
            <a href="#" className="text-[#374151] text-sm hover:text-[#1B3A24] transition-colors">المتجر</a>
            <a href="#" className="text-[#374151] text-sm font-medium text-[#1B3A24] hover:text-[#1B3A24] transition-colors">طلباتي</a>
          </nav>
          <div className="flex items-center gap-6 justify-end">
            <button className="flex items-center gap-2 text-[#374151] hover:text-[#1B3A24] transition-colors">
              <div className="relative">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                <span className="absolute -top-1.5 -left-1.5 bg-[#2C5E1A] text-white text-[9px] rounded-full w-[17px] h-[17px] flex items-center justify-center font-bold">1</span>
              </div>
              <span className="text-sm">سلة التسوق</span>
            </button>
            <button className="flex items-center gap-2 text-[#374151] hover:text-[#1B3A24] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span className="text-sm">حسابي</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden min-h-0">

        <CartSidebar />

        {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col overflow-y-auto h-full bg-[#FAFAF8]">
          <div className="px-10 py-7 flex flex-col h-full">
            <StepperBar steps={STEPPER} />

            {/* Top bar */}
            <div className="flex items-center justify-between mb-6">
              <a href="/tractor/financing" className="flex items-center gap-1.5 text-[12px] text-[#374151] hover:text-[#1B3A24] transition-colors">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                رجوع
              </a>
              <div className="flex items-center gap-2">
                <img src="https://tamweelsaas.vercel.app/logo.svg" alt="Tamawal" className="h-8 w-auto" />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-[20px] font-bold text-[#111827] mb-1">التحقق من الهوية عبر نفاذ</h1>
            <p className="text-[13px] text-[#6B7280] mb-6">للمتابعة، افتح تطبيق نفاذ وتحقق على طلب التحقق باستخدام الرقم الظاهر أدناه.</p>

            {/* Main card */}
            <div className="flex-1 flex items-start">
              <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 w-full shadow-sm">
                <div className="flex gap-8 items-center">

                  {/* Phone mockup */}
                  <div className="flex-shrink-0">
                    <div className="relative w-[120px] h-[220px] rounded-[24px] border-[6px] border-[#1a1a1a] overflow-hidden shadow-xl" style={{ background: '#ffffff' }}>
                      {/* Notch */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-[#1a1a1a] rounded-full z-10" />
                      {/* Screen content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-between p-3 pt-7 pb-4" style={{ background: 'linear-gradient(160deg, #f0faf4 0%, #ffffff 100%)' }}>
                        {/* Logo area */}
                        <div className="flex flex-col items-center">
                          <img src="/logo-nafath.png" alt="نفاذ Nafath" className="w-16 object-contain" />
                        </div>
                        {/* Fingerprint */}
                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 rounded-full border-2 border-[#1B3A24]/30 flex items-center justify-center" style={{ background: '#f0faf4' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B3A24" strokeWidth="1.3">
                              <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/>
                            </svg>
                          </div>
                        </div>
                        {/* Tagline */}
                        <p className="text-[#1B3A24] text-[7px] font-medium opacity-70">أمان. سهولة. ثقة</p>
                      </div>
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="flex-1">
                    <p className="text-[12px] text-[#6B7280] mb-2">رقم التحقق في تطبيق نفاذ</p>
                    <div className="inline-flex items-center justify-center rounded-xl mb-3" style={{ background: '#F5F0E8', padding: '12px 32px' }}>
                      <span className="text-[42px] font-bold text-[#111827] leading-none">87</span>
                    </div>
                    <p className="text-[12px] text-[#374151] mb-4 leading-relaxed">أدخل أو أكد هذا الرقم داخل تطبيق نفاذ لإتمام التحقق.</p>

                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.5" className="flex-shrink-0">
                          <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                        </svg>
                        <span className="text-[11px] text-[#6B7280]">رقم الهوية / الإقامة:</span>
                        <span className="text-[11px] font-medium text-[#374151]">1234 567 890</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" className="flex-shrink-0">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span className="text-[11px] text-[#6B7280]">حالة الطلب:</span>
                        <span className="text-[11px] font-medium text-[#F59E0B]">بانتظار الموافقة</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info box */}
                <div className="mt-5 flex items-start gap-2.5 p-3 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" className="flex-shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <p className="text-[11px] text-[#1E40AF]">قد يستغرق التحقق بضع دقائق. لا تغلق هذه الصفحة حتى الانتهاء.</p>
                </div>

                {/* Resend link */}
                <div className="text-center mt-4">
                  <button className="text-[12px] text-[#1B3A24] hover:underline flex items-center gap-1.5 mx-auto">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>
                    إعادة إرسال الطلب
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom buttons */}
            <div className="flex items-center justify-between w-full mt-6 pt-4 border-t border-[#E5E7EB]">
              <a href="/tractor/financing" className="px-6 py-3 rounded-xl text-[13px] font-medium text-[#374151] border border-[#D1D5DB] hover:bg-[#F9FAFB] transition-colors">
                إلغاء
              </a>
              <a
                href="/tractor/personal-data"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ background: '#1B3A24' }}
              >
                تم فتح تطبيق نفاذ
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
