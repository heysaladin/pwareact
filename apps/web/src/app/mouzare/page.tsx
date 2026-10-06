'use client';

import { useState } from 'react';
import Link from 'next/link';

const CART_ITEMS = [
  {
    id: 1,
    name: 'خزان رش مبيدات بسعة 2000 لتر',
    desc: 'نيرو مروحة - مقطور خلف الزراكتور',
    price: 25000,
    img: '/tractor-product-1.png',
    imgBg: '#F0F4F0',
  },
  {
    id: 2,
    name: 'جرار زراعي 100 حصان',
    desc: '4×4 - متعدد الاستخدامات',
    price: 120000,
    img: '/tractor-product-2.png',
    imgBg: '#F5F0EE',
  },
  {
    id: 3,
    name: 'محراث أقراص زراعي',
    desc: 'عرض 2.5 متر - للمحاصيل المختلفة',
    price: 18500,
    img: '/tractor-product-3.png',
    imgBg: '#EFF4EF',
  },
];

const TRUST_BADGES = [
  {
    text: 'معدات أصلية',
    sub: 'من موردين معتمدين',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    text: 'توصيل لجميع مناطق المملكة',
    sub: '',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 4v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    text: 'دعم قطاع الزراعة في السعودية',
    sub: '',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22V12"/>
        <path d="M12 12C12 12 7 10 7 5a5 5 0 0110 0c0 5-5 7-5 7z"/>
        <path d="M12 12C12 12 8 9 3 12"/>
      </svg>
    ),
  },
  {
    text: 'خدمة عملاء مميزة',
    sub: '',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 18v-6a9 9 0 0118 0v6"/>
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z"/>
        <path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z"/>
      </svg>
    ),
  },
];

function fmt(n: number) {
  return n.toLocaleString('en-SA');
}

export default function MouzarePage() {
  const [qtys, setQtys] = useState([1, 1, 1]);
  const [items, setItems] = useState(CART_ITEMS);
  const [discountOpen, setDiscountOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState('');

  const subtotal = items.reduce((sum, item, i) => sum + item.price * qtys[i], 0);

  function updateQty(i: number, delta: number) {
    setQtys((prev) => prev.map((q, idx) => (idx === i ? Math.max(1, q + delta) : q)));
  }

  function removeItem(id: number) {
    const idx = items.findIndex((it) => it.id === id);
    setItems((prev) => prev.filter((it) => it.id !== id));
    setQtys((prev) => prev.filter((_, i) => i !== idx));
  }

  return (
    <div
      dir="rtl"
      className="h-screen flex flex-col overflow-hidden"
      style={{ fontFamily: "'SF Arabic', 'SF Pro Arabic', -apple-system, BlinkMacSystemFont, 'IBM Plex Sans Arabic', 'Cairo', 'Tajawal', Arial, sans-serif" }}
    >
      {/* Arabic font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap'); @font-face { font-family: 'SF Arabic'; src: local('SF Arabic'), local('.SF Arabic'), local('.SFArabic-Regular'), local('SFArabic-Regular'); font-weight: 100 900; }
        * { box-sizing: border-box; }
      `}</style>

      {/* ── Navbar ───────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-[#E5E7EB] h-16 flex items-center px-8 relative z-50 flex-shrink-0">
        <div className="grid grid-cols-3 items-center w-full">

          {/* Logo (RTL start = right side visually) */}
          <div className="flex items-center">
            <img src="/mouzare-logo.png" alt="فـزارع Mouzare" className="h-9 w-auto" />
          </div>

          {/* Nav links (center) */}
          <nav className="flex items-center justify-center gap-8">
            <a href="#" className="text-[#374151] text-sm hover:text-[#1B3A24] transition-colors">الرئيسية</a>
            <a href="#" className="text-[#374151] text-sm hover:text-[#1B3A24] transition-colors">المتجر</a>
            <a href="#" className="text-[#374151] text-sm font-medium text-[#1B3A24] hover:text-[#1B3A24] transition-colors">طلباتي</a>
          </nav>

          {/* Cart + Account (RTL end = left side visually) */}
          <div className="flex items-center gap-6 justify-end">
            <button className="flex items-center gap-2 text-[#374151] hover:text-[#1B3A24] transition-colors">
              <div className="relative">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                <span className="absolute -top-1.5 -left-1.5 bg-[#2C5E1A] text-white text-[9px] rounded-full w-[17px] h-[17px] flex items-center justify-center font-bold">
                  {items.length}
                </span>
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

      {/* ── Main ─────────────────────────────────────────────────────── */}
      <main className="flex flex-1 relative overflow-hidden min-h-0">

        {/* Background: clean agricultural hero photo */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/tractor-hero-bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '30% center' }}
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.5) 100%)' }} />
        </div>

        {/* ── Cart Panel (first child = RIGHT in RTL) ───────────────── */}
        <div className="relative z-20 flex-shrink-0 bg-white flex flex-col overflow-hidden h-full" style={{ width: '660px', boxShadow: '-4px 0 40px rgba(0,0,0,0.12)' }}>

          {/* Scrollable top area */}
          <div className="flex-1 overflow-y-auto px-8 pt-8">

            {/* Header */}
            <div className="mb-5">
              <h2 className="text-[22px] font-bold text-[#111827] leading-tight">مراجعة الطلب</h2>
              <p className="text-[13px] text-[#6B7280] mt-1">تأكد من المنتجات قبل إتمام الشراء</p>
            </div>

            {/* Back link */}
            <div className="mb-5">
              <button className="flex items-center gap-1.5 text-[13px] text-[#374151] hover:text-[#1B3A24] transition-colors">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                العودة للتسوق
              </button>
            </div>

            {/* Table header */}
            <div className="grid items-center pb-2.5 border-b border-[#F3F4F6]" style={{ gridTemplateColumns: '1fr 90px 130px 80px' }}>
              <span className="text-[11px] text-[#9CA3AF] font-medium">المنتج</span>
              <span className="text-[11px] text-[#9CA3AF] font-medium text-center">السعر (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg>)</span>
              <span className="text-[11px] text-[#9CA3AF] font-medium text-center">الكمية</span>
              <span className="text-[11px] text-[#9CA3AF] font-medium text-center">الإجمالي (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg>)</span>
            </div>

            {/* Product rows */}
            {items.map((item, i) => (
              <div
                key={item.id}
                className="grid items-center py-5 border-b border-[#F3F4F6]"
                style={{ gridTemplateColumns: '1fr 90px 130px 80px' }}
              >
                {/* Product */}
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-[76px] h-[76px] rounded-lg flex-shrink-0 border border-[#E5E7EB] overflow-hidden"
                    style={{ backgroundColor: item.imgBg }}
                  >
                    {item.img && (
                      <img src={item.img} alt={item.name} className="w-full h-full object-contain p-1" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-[#111827] leading-snug">{item.name}</p>
                    <p className="text-[11px] text-[#6B7280] mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>

                {/* Price */}
                <span className="text-[13px] font-medium text-[#374151] text-center">{fmt(item.price)}</span>

                {/* Quantity + trash */}
                <div className="flex items-center justify-center gap-1">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-7 h-7 flex items-center justify-center text-[#9CA3AF] hover:text-red-500 transition-colors ml-1"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polyline points="3 6 5 6 21 6" strokeLinecap="round"/>
                      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" strokeLinecap="round"/>
                      <path d="M10 11v6M14 11v6" strokeLinecap="round"/>
                      <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => updateQty(i, -1)}
                    className="w-7 h-7 rounded border border-[#E5E7EB] flex items-center justify-center text-[#374151] hover:bg-[#F9FAFB] text-base leading-none"
                  >
                    −
                  </button>
                  <span className="w-7 text-center text-[13px] font-semibold text-[#111827]">{qtys[i]}</span>
                  <button
                    onClick={() => updateQty(i, 1)}
                    className="w-7 h-7 rounded border border-[#E5E7EB] flex items-center justify-center text-[#374151] hover:bg-[#F9FAFB] text-base leading-none"
                  >
                    +
                  </button>
                </div>

                {/* Total */}
                <span className="text-[13px] font-medium text-[#374151] text-center">{fmt(item.price * qtys[i])}</span>
              </div>
            ))}

          </div>{/* end scrollable */}

          {/* Sticky bottom */}
          <div className="flex-shrink-0 px-8 pb-8 border-t border-[#F3F4F6] bg-white">

            {/* Discount code */}
            <div className="py-5 border-b border-[#F3F4F6]">
              <button
                onClick={() => setDiscountOpen(!discountOpen)}
                className="flex items-center gap-1.5 text-[13px] text-[#374151] hover:text-[#1B3A24] transition-colors"
              >
                <svg
                  width="14" height="14" viewBox="0 0 16 16" fill="none"
                  className={`transition-transform duration-200 ${discountOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                لديك رمز خصم؟
              </button>
              {discountOpen && (
                <div className="mt-3 flex gap-2">
                  <input
                    type="text"
                    placeholder="أدخل رمز الخصم"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    dir="rtl"
                    className="flex-1 border border-[#D1D5DB] rounded-lg px-4 py-2.5 text-[13px] text-right outline-none focus:border-[#1B3A24] transition-colors"
                  />
                  <button className="px-5 py-2.5 bg-[#F3F4F6] text-[#374151] text-[13px] font-medium rounded-lg hover:bg-[#E5E7EB] transition-colors">
                    تطبيق
                  </button>
                </div>
              )}
            </div>

            {/* Order summary */}
            <div className="py-5 space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#374151]">{fmt(subtotal)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                <span className="text-[13px] text-[#6B7280]">المجموع الفرعي</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] font-medium text-[#059669]">مجاناً</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <span className="text-[13px] text-[#6B7280]">رسوم الشحن</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-[#E5E7EB]">
                <span className="text-[15px] font-bold text-[#111827]">{fmt(subtotal)} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block"><path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path><path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path></svg></span>
                <span className="text-[14px] font-bold text-[#111827]">إجمالي الطلب</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <Link
                href="/mouzare/financing"
                className="py-3.5 px-5 rounded-xl text-[13px] font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                style={{ background: '#1B3A24' }}
              >
                استكشف خيارات التمويل
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <button className="py-3.5 px-5 border border-[#D1D5DB] text-[#374151] text-[13px] font-semibold rounded-xl flex items-center justify-center hover:bg-[#F9FAFB] transition-colors">
                متابعة الدفع النقدي
              </button>
            </div>

          </div>{/* end sticky bottom */}
        </div>

        {/* ── Hero (second child = LEFT in RTL) ─────────────────────── */}
        <div className="relative z-10 flex-1 flex flex-col justify-between px-14 py-12 min-w-0">

          {/* Heading text */}
          <div className="mt-8">
            <h1 className="text-[48px] font-bold text-white leading-[1.2] tracking-tight drop-shadow-lg">
              مستقبل الزراعة
              <br />
              يبدأ من هنا
            </h1>
            <p className="text-[16px] text-white/75 mt-4 font-medium drop-shadow">
              معدات موثوقة .. لزراعة أكثر إنتاجية
            </p>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-3 pb-2">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.text} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-white/40 bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                  {badge.icon}
                </div>
                <div>
                  <p className="text-white text-[11px] font-semibold leading-snug drop-shadow">{badge.text}</p>
                  {badge.sub && (
                    <p className="text-white/60 text-[10px] leading-tight">{badge.sub}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
