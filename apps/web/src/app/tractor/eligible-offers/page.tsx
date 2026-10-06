'use client';

import CartSidebar from '../components/CartSidebar';
import StepperBar from '../components/StepperBar';
import { useState } from 'react';

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
  { label: 'العروض المؤهلة', status: 'active' },
  { label: 'تفاصيل العرض', status: 'pending' },
  { label: 'مقارنة العروض', status: 'pending' },
  { label: 'إرسال الطلب', status: 'pending' },
];

const BANKS = [
  {
    id: 'snb', name: 'البنك الأهلي السعودي', nameEn: 'SNB الأهلي', logo: '/logo-alahli.png', color: '#1A3A6E', bg: '#EFF6FF',
    rate: 4.69, monthly: 380, duration: 60, financed: 19090, total: 22800,
    features: ['بدون رسوم إدارية', 'مرونة في السداد المبكر', 'تأمين شامل'],
    recommended: true,
  },
  {
    id: 'alinma', name: 'مصرف الإنماء', nameEn: 'alinma bank', logo: '/logo-alinma.png', color: '#006C3B', bg: '#ECFDF5',
    rate: 5.19, monthly: 392, duration: 60, financed: 19090, total: 23520,
    features: ['خيارات سداد مرنة', 'بدون رسوم معالجة', 'اعتماد سريع'],
    recommended: false,
  },
  {
    id: 'riyad', name: 'بنك الرياض', nameEn: 'Riyad Bank', logo: '/logo-riyad.png', color: '#B91C1C', bg: '#FEF2F2',
    rate: 5.49, monthly: 401, duration: 60, financed: 19090, total: 24060,
    features: ['موافقة سريعة', 'تأمين شامل'],
    recommended: false,
  },
  {
    id: 'tamweel', name: 'تمويل الأولى', nameEn: 'TAMWEEL ALOULA', logo: '/logo-tamweel-aloula.png', color: '#7C3AED', bg: '#F5F3FF',
    rate: 5.29, monthly: 396, duration: 60, financed: 19090, total: 23760,
    features: ['بدون رسوم إدارية', 'إمكانية السداد المبكر'],
    recommended: false,
  },
];

function fmt(n: number) { return n.toLocaleString('en-SA'); }


export default function EligibleOffersPage() {
  const [selectedBank, setSelectedBank] = useState('snb');
  const [compareList, setCompareList] = useState<string[]>(['snb', 'alinma']);

  function toggleCompare(id: string) {
    setCompareList(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id].slice(-2));
  }

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
          <div className="px-10 py-7 flex flex-col min-h-full">
            <StepperBar steps={STEPPER} />

            {/* Top bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <a href="/tractor/collecting-data" className="flex items-center gap-1.5 text-[12px] text-[#374151] hover:text-[#1B3A24] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  رجوع
                </a>
                <button className="flex items-center gap-1.5 text-[12px] text-[#374151] border border-[#D1D5DB] rounded-lg px-3 py-1.5 hover:bg-[#F9FAFB] transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  مساعدة
                </button>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://tamweelsaas.vercel.app/logo.svg" alt="Tamawal" className="h-8 w-auto" />
              </div>
            </div>

            {/* Heading */}
            <div className="flex items-center justify-between mb-1">
              <h1 className="text-[20px] font-bold text-[#111827]">العروض المـؤهلة لك</h1>
              <a href="/tractor/compare-offers" className="flex items-center gap-1.5 text-[12px] font-medium text-[#374151] border border-[#D1D5DB] rounded-lg px-3 py-2 hover:bg-[#F9FAFB] transition-colors">
                ⇄ مقارنة المنتجات المختارة ({compareList.length})
              </a>
            </div>
            <p className="text-[12px] text-[#6B7280] mb-3">بناءً على نتائج التحقق والبيانات المدخلة، هذه هي عروض التمويل المتاحة لك من الجهات التمويلية المشاركة.</p>

            {/* Amber info */}
            <div className="flex items-center gap-2.5 p-3 rounded-lg mb-4 border" style={{ background: '#FFFBEB', borderColor: '#FDE68A' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5" className="flex-shrink-0">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <p className="text-[11px] text-[#92400E]">هذه العروض مبدئية وتبقى خاضعة للموافقة النهائية من جهة التمويل.</p>
            </div>

            {/* Column headers */}
            <div className="grid items-center px-4 py-2 mb-2 rounded-lg" style={{ gridTemplateColumns: '32px 28px 1fr 90px 90px 60px 90px 100px 120px 90px', background: '#F3F4F6' }}>
              <span className="text-[9px] font-medium text-[#6B7280]">اختيار</span>
              <span className="text-[9px] font-medium text-[#6B7280]">مقارنة</span>
              <span className="text-[9px] font-medium text-[#6B7280]">الجهة التمويلية</span>
              <span className="text-[9px] font-medium text-[#6B7280] text-center">النسبة السنوية</span>
              <span className="text-[9px] font-medium text-[#6B7280] text-center">القسط الشهري</span>
              <span className="text-[9px] font-medium text-[#6B7280] text-center">المدة</span>
              <span className="text-[9px] font-medium text-[#6B7280] text-center">مبلغ التمويل</span>
              <span className="text-[9px] font-medium text-[#6B7280] text-center">إجمالي السداد</span>
              <span className="text-[9px] font-medium text-[#6B7280] text-center">المميزات</span>
              <span className="text-[9px] font-medium text-[#6B7280] text-center">التفاصيل</span>
            </div>

            <div className="space-y-2.5 flex-1">
              {BANKS.map(bank => (
                <div
                  key={bank.id}
                  onClick={() => setSelectedBank(bank.id)}
                  className="grid items-center px-4 py-3.5 rounded-xl border cursor-pointer transition-all"
                  style={{
                    gridTemplateColumns: '32px 28px 1fr 90px 90px 60px 90px 100px 120px 90px',
                    borderColor: selectedBank === bank.id ? '#1B3A24' : '#E5E7EB',
                    background: selectedBank === bank.id ? '#F0F7F2' : 'white',
                  }}
                >
                  {/* Radio */}
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: selectedBank === bank.id ? '#1B3A24' : '#D1D5DB' }}>
                    {selectedBank === bank.id && <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#1B3A24' }} />}
                  </div>
                  {/* Checkbox */}
                  <div
                    onClick={e => { e.stopPropagation(); toggleCompare(bank.id); }}
                    className="w-4 h-4 rounded border-2 flex items-center justify-center cursor-pointer"
                    style={{ borderColor: compareList.includes(bank.id) ? '#1B3A24' : '#D1D5DB', background: compareList.includes(bank.id) ? '#1B3A24' : 'white' }}
                  >
                    {compareList.includes(bank.id) && <svg width="8" height="8" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                  {/* Bank name */}
                  <div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-20 h-10 rounded flex items-center justify-center overflow-hidden" style={{ background: bank.bg }}><img src={bank.logo} alt={bank.nameEn} className="w-full h-full object-contain p-1" /></div>
                      <div>
                        <div className="text-[11px] font-bold text-[#111827] flex items-center gap-1.5">
                          {bank.name}
                          {bank.recommended && <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: '#E8F5E9', color: '#1B3A24' }}>موصى به</span>}
                        </div>
                        <div className="text-[9px] text-[#6B7280]">{bank.nameEn}</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-[12px] font-medium text-[#374151]">{bank.rate}%</div>
                  <div className="text-center">
                    <span className="text-[13px] font-bold text-[#111827]">{fmt(bank.monthly)}</span>
                    <span className="text-[9px] text-[#6B7280] mr-0.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                  </div>
                  <div className="text-center text-[11px] text-[#374151]">{bank.duration} شهر</div>
                  <div className="text-center text-[11px] text-[#374151]">{fmt(bank.financed)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></div>
                  <div className="text-center text-[11px] text-[#374151]">{fmt(bank.total)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></div>
                  <div className="flex flex-col gap-0.5">
                    {bank.features.map(f => (
                      <div key={f} className="flex items-center gap-1">
                        <svg width="8" height="8" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span className="text-[9px] text-[#374151]">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <a href="/tractor/offer-details" className="text-[10px] font-medium text-[#1B3A24] hover:underline">عرض التفاصيل ←</a>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB] mt-4 pb-4">
              <a href="/tractor/collecting-data" className="px-5 py-2.5 rounded-xl text-[13px] font-medium text-[#374151] border border-[#D1D5DB] hover:bg-[#F9FAFB] transition-colors">
                عودة
              </a>
              <div className="flex items-center gap-3">
                <a href="/tractor/compare-offers" className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-[13px] font-medium text-[#374151] border border-[#D1D5DB] hover:bg-[#F9FAFB] transition-colors">
                  ⇄ مقارنة المنتجات المختارة ({compareList.length})
                </a>
                <a
                  href="/tractor/offer-details"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-[13px] font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{ background: '#1B3A24' }}
                >
                  إنشاء الطلب
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
