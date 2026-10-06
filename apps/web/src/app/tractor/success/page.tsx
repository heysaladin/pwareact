'use client';

import CartSidebar from '../components/CartSidebar';
import StepperBar from '../components/StepperBar';

const PRODUCT = {
  name: 'خزان رش مبيدات بسعة 2000 لتر',
  qty: 1,
  capacity: '2000 لتر',
  usage: 'مبيدات زراعية',
  brand: 'مزارع',
  totalPrice: 23862,
  downPayment: 4772,
  financingAmount: 19090,
  img: '/tractor-product-1.png',
  imgBg: '#F0F4F0',
};

const STEPPER = [
  { label: 'استكشاف العروض', status: 'done' },
  { label: 'التحقق من الهوية', status: 'done' },
  { label: 'العقود والإفصاحات', status: 'done' },
  { label: 'التحقق من البيانات', status: 'done' },
  { label: 'العروض المؤهلة', status: 'done' },
  { label: 'تفاصيل العرض', status: 'done' },
  { label: 'مقارنة العروض', status: 'done' },
  { label: 'إرسال الطلب', status: 'done' },
];

function fmt(n: number) { return n.toLocaleString('en-SA'); }


export default function SuccessPage() {
  return (
    <div
      dir="rtl"
      className="h-screen flex flex-col overflow-hidden"
      style={{ fontFamily: "'SF Arabic', 'SF Pro Arabic', -apple-system, BlinkMacSystemFont, 'IBM Plex Sans Arabic', 'Cairo', 'Tajawal', Arial, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        @keyframes scaleIn {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes checkDraw {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        .success-circle { animation: scaleIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .success-check { stroke-dasharray: 60; animation: checkDraw 0.5s ease 0.4s forwards; stroke-dashoffset: 60; }
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

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col overflow-y-auto h-full bg-[#FAFAF8]">
          <div className="px-10 py-7 flex flex-col h-full">

            <StepperBar steps={STEPPER} />

            {/* Top bar */}
            <div className="flex items-center justify-between mb-6">
              <a href="/tractor/eligible-offers" className="flex items-center gap-1.5 text-[12px] text-[#374151] hover:text-[#1B3A24] transition-colors">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                رجوع
              </a>
              <div className="flex items-center gap-2">
                <img src="https://tamweelsaas.vercel.app/logo.svg" alt="Tamawal" className="h-8 w-auto" />
              </div>
            </div>

            {/* Success content centered */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-center" style={{ maxWidth: 480 }}>

                {/* Animated checkmark with arc ring */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative w-36 h-36">
                    {/* Outer arc ring */}
                    <svg className="absolute inset-0 w-full h-full success-circle" viewBox="0 0 144 144" fill="none">
                      <circle cx="72" cy="72" r="68" stroke="#1B3A24" strokeWidth="3" strokeLinecap="round"
                        strokeDasharray="380" strokeDashoffset="60" opacity="0.25" />
                      <circle cx="72" cy="72" r="68" stroke="#1B3A24" strokeWidth="3" strokeLinecap="round"
                        strokeDasharray="340 100" strokeDashoffset="0" />
                    </svg>
                    {/* Inner circle with checkmark */}
                    <div className="absolute inset-4 rounded-full flex items-center justify-center" style={{ background: '#1B3A24' }}>
                      <svg width="44" height="44" viewBox="0 0 56 56" fill="none">
                        <path className="success-check" d="M14 28l10 10 18-20" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Heading */}
                <h1 className="text-[28px] font-bold text-[#111827] mb-3">تم إرسال الطلب بنجاح</h1>
                <p className="text-[14px] text-[#6B7280] leading-relaxed mb-5">
                  تم إرسال طلبك بنجاح، ويمكنك متابعة حالة الطلب ومعرفة آخر التحديثات من خلال صفحة الطلبات.
                </p>

                {/* Order number */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-[13px] font-bold text-[#1B3A24]" dir="ltr">MWZ-2026-10384</span>
                  <span className="text-[13px] text-[#6B7280]">:رقم الطلب</span>
                </div>

                {/* CTA button */}
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-[15px] font-semibold text-white hover:opacity-90 transition-opacity mb-8"
                  style={{ background: '#1B3A24' }}
                >
                  تتبع الطلب
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>

                {/* Security badge */}
                <div className="flex items-center justify-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                  <span className="text-[11px] text-[#6B7280]">تظل معلوماتك آمنة ومشفرة طوال العملية</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
