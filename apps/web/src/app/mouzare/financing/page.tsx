'use client';

import { useState } from 'react';

const CART_ITEMS = [
  { id: 1, name: 'خزان رش مبيدات بسعة 2000 لتر', desc: 'براند عربي - محرك طلب التراكتور', price: 25000, img: '/tractor-product-1.png', imgBg: '#F0F4F0' },
  { id: 2, name: 'جرار زراعي 100 حصان', desc: '4×4 - متعدد الاستخدامات', price: 120000, img: '/tractor-product-2.png', imgBg: '#F5F0EE' },
  { id: 3, name: 'محراث أقراص زراعي', desc: 'عرض 2.5 متر - للمحاصيل المختلفة', price: 18500, img: '/tractor-product-3.png', imgBg: '#EFF4EF' },
];

const SUBTOTAL = CART_ITEMS.reduce((s, i) => s + i.price, 0);
const DURATIONS = [24, 36, 48, 60];
const RATE_MAP: Record<number, number> = { 24: 1.12, 36: 1.18, 48: 1.24, 60: 1.30 };

function fmt(n: number) { return Math.round(n).toLocaleString('en-SA'); }

export default function FinancingPage() {
  const [salary, setSalary] = useState('');
  const [obligations, setObligations] = useState('');
  const [downPct, setDownPct] = useState(20);
  const [duration, setDuration] = useState(36);

  const downPayment = Math.round((SUBTOTAL * downPct) / 100);
  const financed = SUBTOTAL - downPayment;
  const monthly = Math.round((financed * RATE_MAP[duration]) / duration);

  return (
    <div
      dir="rtl"
      className="h-screen flex flex-col overflow-hidden"
      style={{ fontFamily: "'SF Arabic', 'SF Pro Arabic', -apple-system, BlinkMacSystemFont, 'IBM Plex Sans Arabic', 'Cairo', 'Tajawal', Arial, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap'); @font-face { font-family: 'SF Arabic'; src: local('SF Arabic'), local('.SF Arabic'), local('.SFArabic-Regular'), local('SFArabic-Regular'); font-weight: 100 900; }
        * { box-sizing: border-box; }
        input[type=range] { -webkit-appearance: none; appearance: none; height: 4px; border-radius: 4px; outline: none; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #1B3A24; cursor: pointer; border: 2px solid white; box-shadow: 0 1px 4px rgba(0,0,0,0.2); }
      `}</style>

      {/* ── Navbar ─────────────────────────────────────────────── */}
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
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                <span className="absolute -top-1.5 -left-1.5 bg-[#2C5E1A] text-white text-[9px] rounded-full w-[17px] h-[17px] flex items-center justify-center font-bold">3</span>
              </div>
              <span className="text-sm">سلة التسوق</span>
            </button>
            <button className="flex items-center gap-2 text-[#374151] hover:text-[#1B3A24]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              <span className="text-sm">حسابي</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Main ────────────────────────────────────────────────── */}
      <main className="flex flex-1 overflow-hidden min-h-0">

        {/* ── Cart sidebar (first child = RIGHT in RTL) ─────────── */}
        <div className="relative z-20 flex-shrink-0 bg-white border-l border-[#E5E7EB] flex flex-col overflow-y-auto h-full" style={{ width: '300px' }}>
          <div className="px-6 pt-7 pb-7 flex flex-col min-h-full">

            {/* Header */}
            <div className="flex items-center gap-2 mb-5">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              <h2 className="text-[14px] font-bold text-[#111827]">ملخص الطلب</h2>
            </div>

            {/* Products */}
            <div className="space-y-4 mb-5">
              {CART_ITEMS.map(item => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg border border-[#E5E7EB] overflow-hidden flex-shrink-0" style={{ backgroundColor: item.imgBg }}>
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain p-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold text-[#111827] leading-snug line-clamp-2">{item.name}</p>
                    <p className="text-[10px] text-[#6B7280] mt-0.5">{item.desc}</p>
                    <p className="text-[10px] font-medium text-[#374151] mt-0.5">1 × {fmt(item.price)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></p>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t border-[#E5E7EB] pt-3 mb-5 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-medium text-[#374151]">{fmt(SUBTOTAL)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                <span className="text-[11px] text-[#6B7280]">إجمالي السلة</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-medium text-[#374151]">{fmt(downPayment)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                <span className="text-[11px] text-[#6B7280]">الدفعة المقدمة ({downPct}%)</span>
              </div>
              <div className="flex items-center justify-between pt-2.5 border-t border-[#E5E7EB]">
                <span className="text-[13px] font-bold text-[#111827]">{fmt(financed)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                <div className="flex items-center gap-1.5">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
                  </svg>
                  <span className="text-[11px] font-medium text-[#374151]">المبلغ المطلوب تمويله</span>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="space-y-2.5 mb-5">
              {[
                { text: 'خدمة عملاء مميزة', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z"/><path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z"/></svg> },
                { text: 'توصيل لجميع مناطق المملكة', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 4v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
                { text: 'دعم قطاع الزراعة في السعودية', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22V12"/><path d="M12 12C12 12 7 10 7 5a5 5 0 0110 0c0 5-5 7-5 7z"/></svg> },
              ].map(b => (
                <div key={b.text} className="flex items-center gap-2 text-[#374151]">
                  <div className="w-5 h-5 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#1B3A24] flex-shrink-0">{b.icon}</div>
                  <span className="text-[10px]">{b.text}</span>
                </div>
              ))}
            </div>

            {/* Hero image */}
            <div className="relative rounded-xl overflow-hidden mt-auto" style={{ height: '120px' }}>
              <img src="/tractor-hero-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '30% center' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.1), rgba(0,0,0,0.55))' }} />
              <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                <p className="text-white text-[15px] font-bold leading-snug drop-shadow">مستقبل الزراعة<br />يبدأ من هنا</p>
              </div>
            </div>

          </div>
        </div>


        {/* ── Form (second child = LEFT in RTL) ────────────────── */}
        <div className="relative z-20 flex-1 flex flex-col overflow-y-auto h-full bg-[#FAFAFA]">
          <div className="px-12 py-8 flex flex-col min-h-full">

            {/* Tamawal logo */}
            <div className="flex items-center justify-start mb-7">
              <img src="https://tamweelsaas.vercel.app/logo.svg" alt="Tamawal" className="h-10 w-auto" />
            </div>

            {/* Heading */}
            <h1 className="text-[28px] font-bold text-[#111827] mb-1">استكشف خيارات التمويل</h1>
            <p className="text-[13px] text-[#6B7280] mb-7">أدخل بعض البيانات للحصول على تقدير مبدئي مناسب لك.</p>

            {/* 2 inputs */}
            <div className="grid grid-cols-2 gap-5 mb-6">
              <div>
                <label className="block text-[12px] font-medium text-[#374151] mb-1.5">الراتب الشهري</label>
                <div className="flex items-center border border-[#D1D5DB] rounded-lg overflow-hidden focus-within:border-[#1B3A24] bg-white">
                  <span className="px-3 py-2.5 text-[11px] text-[#9CA3AF] border-l border-[#D1D5DB] bg-[#F9FAFB] select-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                  <input type="text" placeholder="أدخل المبلغ" value={salary} onChange={e => setSalary(e.target.value)}
                    className="flex-1 px-3 py-2.5 text-[13px] text-right outline-none bg-transparent" dir="rtl" />
                  <svg className="mx-2.5 text-[#9CA3AF] flex-shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1.5">
                  <label className="text-[12px] font-medium text-[#374151]">الالتزامات الائتمانية الشهرية الحالية</label>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <div className="flex items-center border border-[#D1D5DB] rounded-lg overflow-hidden focus-within:border-[#1B3A24] bg-white">
                  <span className="px-3 py-2.5 text-[11px] text-[#9CA3AF] border-l border-[#D1D5DB] bg-[#F9FAFB] select-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                  <input type="text" placeholder="أدخل المبلغ" value={obligations} onChange={e => setObligations(e.target.value)}
                    className="flex-1 px-3 py-2.5 text-[13px] text-right outline-none bg-transparent" dir="rtl" />
                  <svg className="mx-2.5 text-[#9CA3AF] flex-shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Down payment slider */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] font-medium text-[#374151]">الدفعة المقدمة</span>
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-bold text-[#111827]">{fmt(downPayment)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                  <span className="text-[12px] font-semibold text-white bg-[#1B3A24] rounded-md px-2 py-0.5">{downPct}%</span>
                </div>
              </div>
              <input type="range" min={0} max={50} step={1} value={downPct} onChange={e => setDownPct(Number(e.target.value))}
                className="w-full" dir="ltr"
                style={{ background: `linear-gradient(to right, #1B3A24 ${downPct * 2}%, #E5E7EB ${downPct * 2}%)` }} />
              <div className="flex items-center justify-between mt-1.5">
                {[0, 10, 20, 30, 40, 50].map(v => (
                  <span key={v} className="text-[10px] text-[#9CA3AF]">{v}%</span>
                ))}
              </div>
            </div>

            {/* Duration tabs */}
            <div className="mb-6">
              <label className="block text-[13px] font-medium text-[#374151] mb-2.5">مدة التمويل</label>
              <div className="flex gap-3">
                {DURATIONS.map(d => (
                  <button key={d} onClick={() => setDuration(d)}
                    className="flex-1 py-2.5 rounded-xl text-[13px] font-medium border transition-colors"
                    style={{ background: duration === d ? '#1B3A24' : 'white', borderColor: duration === d ? '#1B3A24' : '#D1D5DB', color: duration === d ? 'white' : '#374151' }}>
                    {d} شهر
                  </button>
                ))}
              </div>
            </div>

            {/* Estimate cards */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-white rounded-2xl p-5 border border-[#E5E7EB]">
                <h3 className="text-[13px] font-bold text-[#111827] mb-4">التقدير المبدئي</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium text-[#111827]">{fmt(SUBTOTAL)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                    <span className="text-[12px] text-[#6B7280]">إجمالي الطلب</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium text-[#DC2626]">- {fmt(downPayment)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                    <span className="text-[12px] text-[#6B7280]">الدفعة المقدمة ({downPct}%)</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#E5E7EB]">
                    <span className="text-[15px] font-bold text-[#111827]">{fmt(financed)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                    <span className="text-[12px] font-medium text-[#374151]">المبلغ المطلوب تمويله</span>
                  </div>
                </div>
              </div>
              <div className="w-[220px] rounded-2xl p-5 flex flex-col justify-between" style={{ background: '#1B3A24' }}>
                <p className="text-[11px] text-white/70 leading-snug">القسط الشهري المتوقع يبدأ من</p>
                <div>
                  <p className="text-[32px] font-bold text-white leading-tight">{fmt(monthly)}</p>
                  <p className="text-[13px] text-white/70"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg> / شهرياً</p>
                </div>
                <p className="text-[10px] text-white/50">هذا تقدير مبدئي فقط.</p>
              </div>
            </div>

            {/* Security + CTA */}
            <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3A24" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <p className="text-[12px] font-semibold text-[#111827]">بياناتك آمنة</p>
                  <p className="text-[11px] text-[#6B7280]">التحقق عبر نفاذ وخدمات الجهات المعتمدة</p>
                </div>
              </div>
              <a href="/mouzare/preliminary-offers"
                className="flex items-center gap-2 px-8 py-3 rounded-xl text-[13px] font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ background: '#1B3A24' }}>
                عرض العروض المبدئية
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

          </div>
        </div>


      </main>
    </div>
  );
}
