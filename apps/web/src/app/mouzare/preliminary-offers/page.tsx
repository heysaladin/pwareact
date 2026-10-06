'use client';

import { useState } from 'react';
import StepperBar from '../components/StepperBar';

const CART_ITEMS = [
  { id: 1, name: 'خزان رش مبيدات بسعة 2000 لتر', price: 25000, img: '/tractor-product-1.png', imgBg: '#F0F4F0' },
  { id: 2, name: 'جرار زراعي 100 حصان', price: 120000, img: '/tractor-product-2.png', imgBg: '#F5F0EE' },
  { id: 3, name: 'محراث أقراص زراعي', price: 18500, img: '/tractor-product-3.png', imgBg: '#EFF4EF' },
];

const SUBTOTAL = CART_ITEMS.reduce((s, i) => s + i.price, 0);
const DURATIONS = [24, 36, 48, 60];

const BANKS = [
  { id: 'aljazira', logo: '/logo-aljazeera.png', name: 'بنك الجزيرة', monthly: 8513, rate: 5.29, financed: 319200 },
  { id: 'alinma', logo: '/logo-alinma.png', name: 'مصرف الإنماء', monthly: 8742, rate: 5.59, financed: 319200 },
  { id: 'snb', logo: '/logo-alahli.png', name: 'البنك الأهلي', monthly: 8915, rate: 5.89, financed: 319200 },
];

const STEPPER = [
  { label: 'استكشاف العروض', status: 'active' },
  { label: 'التحقق من الهوية', status: 'pending' },
  { label: 'العقود والإفصاحات', status: 'pending' },
  { label: 'التحقق من البيانات', status: 'pending' },
  { label: 'العروض المؤهلة', status: 'pending' },
  { label: 'تفاصيل العرض', status: 'pending' },
  { label: 'مقارنة العروض', status: 'pending' },
  { label: 'إرسال الطلب', status: 'pending' },
];

function fmt(n: number) { return Math.round(n).toLocaleString('en-SA'); }

export default function PreliminaryOffersPage() {
  const [salary, setSalary] = useState('');
  const [obligations, setObligations] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [duration, setDuration] = useState(36);
  const [selectedBank, setSelectedBank] = useState('aljazira');

  return (
    <div
      dir="rtl"
      className="h-screen flex flex-col overflow-hidden"
      style={{ fontFamily: "'SF Arabic', 'SF Pro Arabic', -apple-system, BlinkMacSystemFont, 'IBM Plex Sans Arabic', 'Cairo', 'Tajawal', Arial, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap'); @font-face { font-family: 'SF Arabic'; src: local('SF Arabic'), local('.SF Arabic'), local('.SFArabic-Regular'), local('SFArabic-Regular'); font-weight: 100 900; }
        * { box-sizing: border-box; }
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

        {/* ── Right sidebar — order summary ─────────────────────── */}
        <div className="relative z-20 flex-shrink-0 bg-white border-r border-[#E5E7EB] flex flex-col overflow-y-auto h-full" style={{ width: '280px' }}>
          <div className="px-5 pt-6 pb-6 flex flex-col min-h-full">

            {/* Header */}
            <div className="mb-1">
              <h2 className="text-[14px] font-bold text-[#111827]">ملخص الطلب</h2>
              <p className="text-[11px] text-[#6B7280] mt-0.5">3 منتجات في السلة</p>
            </div>

            {/* Products */}
            <div className="space-y-3 my-4">
              {CART_ITEMS.map(item => (
                <div key={item.id} className="flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-lg border border-[#E5E7EB] overflow-hidden flex-shrink-0" style={{ backgroundColor: item.imgBg }}>
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain p-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold text-[#111827] leading-snug line-clamp-2">{item.name}</p>
                    <p className="text-[10px] text-[#6B7280] mt-0.5">الكمية: 1</p>
                  </div>
                  <span className="text-[11px] font-medium text-[#374151] flex-shrink-0">{fmt(item.price)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t border-[#E5E7EB] pt-3 mb-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-[#374151]">{fmt(SUBTOTAL)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                <span className="text-[11px] text-[#6B7280]">المجموع الفرعي</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-medium text-[#059669]">مجاناً</span>
                <span className="text-[11px] text-[#6B7280]">رسوم الشحن</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[#E5E7EB]">
                <span className="px-2.5 py-1 rounded-full text-[13px] font-bold text-[#1B3A24]" style={{ background: '#E8F5E9' }}>{fmt(SUBTOTAL)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                <span className="text-[12px] font-bold text-[#111827]">إجمالي الطلب</span>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative rounded-xl overflow-hidden mb-4" style={{ height: '110px' }}>
              <img src="/tractor-hero-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '30% center' }} />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
            </div>

            {/* Trust badges */}
            <div className="space-y-2.5">
              {[
                { text: 'معدات أصلية من موردين معتمدين', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                { text: 'توصيل لجميع مناطق المملكة', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 4v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
                { text: 'دعم قطاع الزراعة في السعودية', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22V12"/><path d="M12 12C12 12 7 10 7 5a5 5 0 0110 0c0 5-5 7-5 7z"/></svg> },
              ].map(b => (
                <div key={b.text} className="flex items-center gap-2 text-[#374151]">
                  <div className="w-5 h-5 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#1B3A24] flex-shrink-0">{b.icon}</div>
                  <span className="text-[10px]">{b.text}</span>
                </div>
              ))}
            </div>

            {/* Back link */}
            <div className="mt-auto pt-4">
              <a href="/mouzare/financing" className="flex items-center gap-1.5 text-[12px] text-[#6B7280] hover:text-[#1B3A24] transition-colors">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                العودة إلى السلة
              </a>
            </div>

          </div>
        </div>

        {/* ── Main content ─────────────────────────────────────── */}
        <div className="relative z-20 flex-1 flex flex-col overflow-y-auto h-full bg-[#FAFAFA]">
          <div className="px-10 py-7 flex flex-col">
            <StepperBar steps={STEPPER} />

            {/* Heading row + Tamawal logo */}
            <div className="flex items-start justify-between gap-5 mb-5">
              <div>
                <h1 className="text-[24px] font-bold text-[#111827] mb-1">استكشف خيارات التمويل</h1>
                <p className="text-[13px] text-[#6B7280]">أدخل بعض المعلومات للحصول على عروض تمويل مبدئية تناسبك.</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-[11px] text-[#6B7280]">بالتعاون مع</span>
                <img src="https://tamweelsaas.vercel.app/logo.svg" alt="Tamawal" className="h-8 w-auto" />
              </div>
            </div>

            {/* 3 inputs + CTA row */}
            <div className="flex items-end gap-3 mb-5">
              <div className="flex-1">
                <label className="block text-[12px] font-medium text-[#374151] mb-1.5">الراتب الشهري</label>
                <div className="flex items-center border border-[#D1D5DB] rounded-lg overflow-hidden focus-within:border-[#1B3A24] bg-white">
                  <span className="px-2.5 py-2.5 text-[11px] text-[#9CA3AF] border-l border-[#D1D5DB] bg-[#F9FAFB] select-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                  <input type="text" placeholder="أدخل المبلغ" value={salary} onChange={e => setSalary(e.target.value)}
                    className="flex-1 px-3 py-2.5 text-[12px] text-right outline-none bg-transparent" dir="rtl" />
                  <svg className="mx-2 text-[#9CA3AF] flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-1.5">
                  <label className="text-[12px] font-medium text-[#374151]">الالتزامات المالية الشهرية الحالية</label>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <div className="flex items-center border border-[#D1D5DB] rounded-lg overflow-hidden focus-within:border-[#1B3A24] bg-white">
                  <span className="px-2.5 py-2.5 text-[11px] text-[#9CA3AF] border-l border-[#D1D5DB] bg-[#F9FAFB] select-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                  <input type="text" placeholder="أدخل المبلغ" value={obligations} onChange={e => setObligations(e.target.value)}
                    className="flex-1 px-3 py-2.5 text-[12px] text-right outline-none bg-transparent" dir="rtl" />
                  <svg className="mx-2 text-[#9CA3AF] flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-[12px] font-medium text-[#374151] mb-1.5">الدفعة المقدمة</label>
                <div className="flex items-center border border-[#D1D5DB] rounded-lg overflow-hidden focus-within:border-[#1B3A24] bg-white">
                  <span className="px-2.5 py-2.5 text-[11px] text-[#9CA3AF] border-l border-[#D1D5DB] bg-[#F9FAFB] select-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                  <input type="text" placeholder="أدخل المبلغ" value={downPayment} onChange={e => setDownPayment(e.target.value)}
                    className="flex-1 px-3 py-2.5 text-[12px] text-right outline-none bg-transparent" dir="rtl" />
                  <svg className="mx-2 text-[#9CA3AF] flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Duration tabs + CTA button row */}
            <div className="flex items-center gap-16 mb-6">
              <div className="flex-1">
                <label className="block text-[12px] font-medium text-[#374151] mb-2">مدة التمويل</label>
                <div className="flex gap-2">
                  {DURATIONS.map(d => (
                    <button key={d} onClick={() => setDuration(d)}
                      className="flex-1 py-2 rounded-lg text-[13px] font-medium border transition-colors"
                      style={{ background: duration === d ? '#1B3A24' : 'white', borderColor: duration === d ? '#1B3A24' : '#D1D5DB', color: duration === d ? 'white' : '#374151' }}>
                      {d} شهر
                    </button>
                  ))}
                </div>
              </div>
              <a href="/mouzare/verify-identity"
                className="flex items-center gap-2 px-8 py-2.5 rounded-xl text-[13px] font-semibold text-white hover:opacity-90 transition-opacity flex-shrink-0 self-end"
                style={{ background: '#1B3A24' }}>
                بدأ التأهيل
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

            {/* Preliminary offers section */}
            <div className="border-t border-[#E5E7EB] pt-5">
              <h2 className="text-[16px] font-bold text-[#111827] mb-1">عروض تمويل مبدئية</h2>
              <p className="text-[12px] text-[#6B7280] mb-4">بناءً على المعلومات التي قمت بإدخالها، ستعرض لك العروض المبدئية من شركائنا في التمويل</p>

              {/* Column headers */}
              <div className="grid items-center mb-2 px-4 gap-3" style={{ gridTemplateColumns: '28px 1fr 110px 110px 80px 120px 100px' }}>
                <span />
                <span className="text-[10px] font-medium text-[#9CA3AF]">الجهة التمويلية</span>
                <span className="text-[10px] font-medium text-[#9CA3AF] text-center">القسط الشهري</span>
                <span className="text-[10px] font-medium text-[#9CA3AF] text-center">معدل النسبة السنوية</span>
                <span className="text-[10px] font-medium text-[#9CA3AF] text-center">المدة</span>
                <span className="text-[10px] font-medium text-[#9CA3AF] text-center">مبلغ التمويل</span>
                <span className="text-[10px] font-medium text-[#9CA3AF] text-center">التفاصيل</span>
              </div>

              <div className="space-y-3 mb-4">
                {BANKS.map(bank => (
                  <div key={bank.id} onClick={() => setSelectedBank(bank.id)}
                    className="grid items-center p-4 rounded-xl border cursor-pointer transition-all gap-3"
                    style={{ gridTemplateColumns: '28px 1fr 110px 110px 80px 120px 100px', borderColor: selectedBank === bank.id ? '#1B3A24' : '#E5E7EB', background: selectedBank === bank.id ? '#F0F7F2' : 'white' }}>
                    <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                      style={{ borderColor: selectedBank === bank.id ? '#1B3A24' : '#D1D5DB' }}>
                      {selectedBank === bank.id && <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#1B3A24' }} />}
                    </div>
                    <div className="flex items-center">
                      <img src={bank.logo} alt={bank.name} className="h-7 w-auto object-contain max-w-[100px]" />
                    </div>
                    <div className="text-center">
                      <span className="text-[13px] font-bold text-[#111827]">{fmt(bank.monthly)}</span>
                      <span className="text-[10px] text-[#6B7280] mr-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                    </div>
                    <div className="text-center text-[12px] font-semibold text-[#374151]">{bank.rate}%</div>
                    <div className="text-center text-[12px] text-[#374151]">{duration} شهر</div>
                    <div className="text-center text-[12px] text-[#374151]">{fmt(bank.financed)} <span className="text-[10px] text-[#6B7280]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span></div>
                    <div className="text-center">
                      <a href="/mouzare/verify-identity" className="text-[11px] font-medium text-[#1B3A24] hover:underline">عرض التفاصيل ←</a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FFF8E7] border border-[#FDE68A]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5" className="flex-shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <p className="text-[11px] text-[#92400E] leading-relaxed">
                  العروض المبدئية لا تعد موافقة نهائية على التمويل. يتم تأكيد العروض النهائية بعد التحقق من الهوية والبيانات واستيفاء متطلبات الجهات التمويلية.
                </p>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
