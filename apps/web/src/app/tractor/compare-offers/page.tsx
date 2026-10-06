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
  { label: 'العروض المؤهلة', status: 'done' },
  { label: 'تفاصيل العرض', status: 'done' },
  { label: 'مقارنة العروض', status: 'active' },
  { label: 'إرسال الطلب', status: 'pending' },
];

const BANKS = [
  { id: 'snb', name: 'البنك الأهلي السعودي', logo: '/logo-alahli.png', abbr: 'SNB', color: '#1A3A6E', bg: '#EFF6FF', rate: '4.69%', monthly: 380, total: 22800, downPayment: 4772, duration: '60 شهر', adminFee: 0, earlyPayment: true, insurance: true, digital: 'متقدمة', rating: 4.8, badge: 'الأكثر ملاءمة', selected: true },
  { id: 'alinma', name: 'مصرف الإنماء', logo: '/logo-alinma.png', abbr: 'أل', color: '#006C3B', bg: '#ECFDF5', rate: '5.19%', monthly: 392, total: 23520, downPayment: 4772, duration: '60 شهر', adminFee: 0, earlyPayment: true, insurance: false, digital: 'جيدة', rating: 4.5, badge: null, selected: false },
  { id: 'riyad', name: 'بنك الرياض', logo: '/logo-riyad.png', abbr: 'ري', color: '#B91C1C', bg: '#FEF2F2', rate: '5.49%', monthly: 401, total: 24060, downPayment: 4772, duration: '60 شهر', adminFee: 250, earlyPayment: true, insurance: true, digital: 'جيدة', rating: 4.3, badge: null, selected: false },
  { id: 'tamweel', name: 'تمويل الأولى', logo: '/logo-tamweel-aloula.png', abbr: 'تم', color: '#7C3AED', bg: '#F5F3FF', rate: '5.29%', monthly: 396, total: 23760, downPayment: 4772, duration: '60 شهر', adminFee: 0, earlyPayment: true, insurance: false, digital: 'قياسية', rating: 4.1, badge: null, selected: false },
];

function SAR() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="ر.س" className="w-2.5 h-2.5 shrink-0 inline-block mx-0.5">
      <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
      <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
    </svg>
  );
}

function fmt(n: number) { return n.toLocaleString('en-SA'); }

const STAR_PATH = "M12.0664 6.76953C12.2104 7.11556 12.5356 7.35176 12.9092 7.38184L18.2725 7.8125L14.1865 11.3125C13.9018 11.5565 13.7773 11.939 13.8643 12.3037L15.1123 17.5371L10.5215 14.7324C10.2015 14.537 9.79853 14.537 9.47852 14.7324L4.8877 17.5371L6.13574 12.3037C6.22274 11.939 6.09819 11.5565 5.81348 11.3125L1.72754 7.8125L7.09082 7.38184C7.4644 7.35176 7.78959 7.11557 7.93359 6.76953L10 1.80176L12.0664 6.76953Z";

function StarIcon({ fill, uid }: { fill: 'empty' | 'half' | 'full'; uid: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`s-full-${uid}`}><rect width="20" height="20" fill="white"/></clipPath>
        {fill === 'half' && <clipPath id={`s-half-${uid}`}><rect width="10" height="20" fill="white"/></clipPath>}
      </defs>
      <g clipPath={`url(#s-full-${uid})`}>
        <path d={STAR_PATH} fill="#EEF1F6" stroke="#CDD4DF"/>
        {fill !== 'empty' && (
          <g clipPath={fill === 'half' ? `url(#s-half-${uid})` : `url(#s-full-${uid})`}>
            <path d={STAR_PATH} fill="#FFDD33" stroke="#D8B400"/>
          </g>
        )}
      </g>
    </svg>
  );
}

function Stars({ value, prefix }: { value: number; prefix: string }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => {
        const diff = value - (i - 1);
        const fill = diff >= 0.75 ? 'full' : diff >= 0.25 ? 'half' : 'empty';
        return <StarIcon key={i} fill={fill} uid={`${prefix}-${i}`} />;
      })}
      <span className="text-[10px] text-[#374151] mr-1">{value}</span>
    </span>
  );
}


export default function CompareOffersPage() {
  const [selectedBank, setSelectedBank] = useState('snb');

  const rows = [
    { label: 'النسبة السنوية', key: 'rate' as const, highlight: true, sar: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5L5 19M9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7ZM19 17C19 18.1046 18.1046 19 17 19C15.8954 19 15 18.1046 15 17C15 15.8954 15.8954 15 17 15C18.1046 15 19 15.8954 19 17Z"/></svg> },
    { label: 'القسط الشهري', key: 'monthly' as const, highlight: true, sar: true, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"/></svg> },
    { label: 'إجمالي السداد', key: 'total' as const, highlight: true, sar: true, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25"/></svg> },
    { label: 'الدفعة المقدمة', key: 'downPayment' as const, sar: true, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.6667C8.5 15.9553 9.54467 17 10.8333 17H13C14.3807 17 15.5 15.8807 15.5 14.5C15.5 13.1193 14.3807 12 13 12H11C9.61929 12 8.5 10.8807 8.5 9.5C8.5 8.11929 9.61929 7 11 7H13.1667C14.4553 7 15.5 8.04467 15.5 9.33333M12 5.5V7M12 17V18.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/></svg> },
    { label: 'المدة', key: 'duration' as const, sar: false, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10H3M16 2V6M8 2V6M9 16L11 18L15.5 13.5M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"/></svg> },
    { label: 'الرسوم الإدارية', key: 'adminFee' as const, sar: true, icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M14 17H8M16 13H8M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z"/></svg> },
  ];

  return (
    <div
      dir="rtl"
      className="h-screen flex flex-col overflow-hidden"
      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Arabic', 'SF Pro Arabic', 'IBM Plex Sans Arabic', 'Cairo', 'Tajawal', Arial, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap');
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
        <div className="flex-1 overflow-y-auto bg-[#FAFAF8]">
          <div className="px-10 py-7">
            <StepperBar steps={STEPPER} />

            {/* Top bar */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-4">
                <a href="/tractor/eligible-offers" className="flex items-center gap-1.5 text-[12px] text-[#374151] hover:text-[#1B3A24] transition-colors">
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

            <h1 className="text-[20px] font-bold text-[#111827] mb-1">قارن واختر أفضل عرض تمويلي</h1>
            <div className="flex items-center justify-between mb-4">
              <p className="text-[12px] text-[#6B7280]">قارن بين عروض التمويل من الجهات المشاركة واختر العرض الأنسب لاحتياجاتك.</p>
              <a href="/tractor/eligible-offers" className="flex items-center gap-1.5 text-[12px] text-[#6B7280] hover:text-[#374151] transition-colors shrink-0 ml-4">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                إلغاء المقارنة
              </a>
            </div>

            {/* Comparison table */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full" dir="rtl">
                  <thead>
                    <tr className="border-b border-[#E5E7EB]">
                      <th className="p-3 text-right w-32">
                        <span className="block text-[10px] font-medium text-[#6B7280] text-right">البيانات الأساسية</span>
                      </th>
                      {BANKS.map(bank => (
                        <th key={bank.id} className="p-3 text-center" style={{ background: selectedBank === bank.id ? '#F0F7F2' : 'white' }}>
                          <div className="flex flex-col items-center gap-1.5">
                            {bank.badge && (
                              <span className="text-[9px] font-medium px-2 py-0.5 rounded-full" style={{ background: '#E8F5E9', color: '#1B3A24' }}>{bank.badge}</span>
                            )}
                            <div className="w-24 h-10 rounded-lg flex items-center justify-center overflow-hidden" style={{ background: bank.bg }}>
                              <img src={bank.logo} alt={bank.name} className="w-full h-full object-contain p-1" />
                            </div>
                            <button
                              onClick={() => setSelectedBank(bank.id)}
                              className="flex items-center gap-1 px-3 py-1 rounded-lg text-[10px] font-medium transition-colors"
                              style={selectedBank === bank.id ? { background: '#1B3A24', color: 'white' } : { background: '#F3F4F6', color: '#374151' }}
                            >
                              {selectedBank === bank.id && <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                              {selectedBank === bank.id ? 'مختار' : 'اختيار'}
                            </button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(row => (
                      <tr key={row.label} className="border-b border-[#F3F4F6]">
                        <td className="p-3 text-right">
                          <span className="flex items-center justify-start gap-1.5 text-[11px] font-medium text-[#374151]">
                            <span className="text-[#6B7280]">{row.icon}</span>
                            {row.label}
                          </span>
                        </td>
                        {BANKS.map(bank => (
                          <td key={bank.id} className="p-3 text-center" style={{ background: selectedBank === bank.id ? '#F0F7F2' : 'white' }}>
                            <span className="text-[12px]" style={{ color: selectedBank === bank.id && row.highlight ? '#1B3A24' : '#374151', fontWeight: selectedBank === bank.id && row.highlight ? 700 : 500 }}>
                              {row.sar ? (
                                <>{typeof bank[row.key] === 'number' ? (bank[row.key] as number).toLocaleString('en-SA') : bank[row.key]}<SAR /></>
                              ) : (
                                bank[row.key]
                              )}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                    {/* Early payment */}
                    <tr className="border-b border-[#F3F4F6]">
                      <td className="p-3 text-right">
                        <span className="flex items-center justify-start gap-1.5 text-[11px] font-medium text-[#374151]">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 14C2 14 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C19.6092 17.1187 20.4133 15.5993 20.7762 14M8 14H2V20M22 10C22 10 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C4.39076 6.88131 3.58669 8.40072 3.22383 10M16 10H22V4"/></svg>
                          إمكانية السداد المبكر
                        </span>
                      </td>
                      {BANKS.map(bank => (
                        <td key={bank.id} className="p-3 text-center" style={{ background: selectedBank === bank.id ? '#F0F7F2' : 'white' }}>
                          <span className="flex items-center justify-center gap-1 text-[11px] text-[#16A34A]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#16A34A" stroke="none"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                            نعم
                          </span>
                        </td>
                      ))}
                    </tr>
                    {/* Insurance */}
                    <tr className="border-b border-[#F3F4F6]">
                      <td className="p-3 text-right">
                        <span className="flex items-center justify-start gap-1.5 text-[11px] font-medium text-[#374151]">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11.5001L11 13.5001L15.5 9.00011M20 12.0001C20 16.9086 14.646 20.4785 12.698 21.615C12.4766 21.7442 12.3659 21.8087 12.2097 21.8422C12.0884 21.8682 11.9116 21.8682 11.7903 21.8422C11.6341 21.8087 11.5234 21.7442 11.302 21.615C9.35396 20.4785 4 16.9086 4 12.0001V7.21772C4 6.4182 4 6.01845 4.13076 5.67482C4.24627 5.37126 4.43398 5.10039 4.67766 4.88564C4.9535 4.64255 5.3278 4.50219 6.0764 4.22146L11.4382 2.21079C11.6461 2.13283 11.75 2.09385 11.857 2.07839C11.9518 2.06469 12.0482 2.06469 12.143 2.07839C12.25 2.09385 12.3539 2.13283 12.5618 2.21079L17.9236 4.22146C18.6722 4.50219 19.0465 4.64255 19.3223 4.88564C19.566 5.10039 19.7537 5.37126 19.8692 5.67482C20 6.01845 20 6.4182 20 7.21772V12.0001Z"/></svg>
                          التأمين الشامل
                        </span>
                      </td>
                      {BANKS.map(bank => (
                        <td key={bank.id} className="p-3 text-center" style={{ background: selectedBank === bank.id ? '#F0F7F2' : 'white' }}>
                          {bank.insurance ? (
                            <span className="flex items-center justify-center gap-1 text-[11px] text-[#16A34A]">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="#16A34A" stroke="none"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                              نعم
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-1 text-[11px] text-[#EF4444]">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="#EF4444" stroke="none"><circle cx="12" cy="12" r="10"/><path d="M9 9l6 6M15 9l-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
                              غير شامل
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                    {/* Digital */}
                    <tr className="border-b border-[#F3F4F6]">
                      <td className="p-3 text-right">
                        <span className="flex items-center justify-start gap-1.5 text-[11px] font-medium text-[#374151]">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 16V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V16H15.6627C15.4182 16 15.2959 16 15.1808 16.0276C15.0787 16.0521 14.9812 16.0925 14.8917 16.1474C14.7908 16.2092 14.7043 16.2957 14.5314 16.4686L14.4686 16.5314C14.2957 16.7043 14.2092 16.7908 14.1083 16.8526C14.0188 16.9075 13.9213 16.9479 13.8192 16.9724C13.7041 17 13.5818 17 13.3373 17H10.6627C10.4182 17 10.2959 17 10.1808 16.9724C10.0787 16.9479 9.98119 16.9075 9.89172 16.8526C9.7908 16.7908 9.70432 16.7043 9.53137 16.5314L9.46863 16.4686C9.29568 16.2957 9.2092 16.2092 9.10828 16.1474C9.01881 16.0925 8.92127 16.0521 8.81923 16.0276C8.70414 16 8.58185 16 8.33726 16H3ZM3 16C2.44772 16 2 16.4477 2 17V17.3333C2 17.9533 2 18.2633 2.06815 18.5176C2.25308 19.2078 2.79218 19.7469 3.48236 19.9319C3.7367 20 4.04669 20 4.66667 20H19.3333C19.9533 20 20.2633 20 20.5176 19.9319C21.2078 19.7469 21.7469 19.2078 21.9319 18.5176C22 18.2633 22 17.9533 22 17.3333C22 17.0233 22 16.8683 21.9659 16.7412C21.8735 16.3961 21.6039 16.1265 21.2588 16.0341C21.1317 16 20.9767 16 20.6667 16H20"/></svg>
                          الخدمات الرقمية
                        </span>
                      </td>
                      {BANKS.map(bank => (
                        <td key={bank.id} className="p-3 text-center" style={{ background: selectedBank === bank.id ? '#F0F7F2' : 'white' }}>
                          <span className="text-[11px] text-[#374151]">{bank.digital}</span>
                        </td>
                      ))}
                    </tr>
                    {/* Rating */}
                    <tr>
                      <td className="p-3 text-right">
                        <span className="flex items-center justify-start gap-1.5 text-[11px] font-medium text-[#374151]">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.2827 3.45332C11.5131 2.98638 11.6284 2.75291 11.7848 2.67831C11.9209 2.61341 12.0791 2.61341 12.2152 2.67831C12.3717 2.75291 12.4869 2.98638 12.7174 3.45332L14.9041 7.88328C14.9721 8.02113 15.0061 8.09006 15.0558 8.14358C15.0999 8.19096 15.1527 8.22935 15.2113 8.25662C15.2776 8.28742 15.3536 8.29854 15.5057 8.32077L20.397 9.03571C20.9121 9.11099 21.1696 9.14863 21.2888 9.27444C21.3925 9.38389 21.4412 9.5343 21.4215 9.68377C21.3988 9.85558 21.2124 10.0372 20.8395 10.4004L17.3014 13.8464C17.1912 13.9538 17.136 14.0076 17.1004 14.0715C17.0689 14.128 17.0487 14.1902 17.0409 14.2545C17.0321 14.3271 17.0451 14.403 17.0711 14.5547L17.906 19.4221C17.994 19.9355 18.038 20.1922 17.9553 20.3445C17.8833 20.477 17.7554 20.57 17.6071 20.5975C17.4366 20.6291 17.2061 20.5078 16.7451 20.2654L12.3724 17.9658C12.2361 17.8942 12.168 17.8584 12.0962 17.8443C12.0327 17.8318 11.9673 17.8318 11.9038 17.8443C11.832 17.8584 11.7639 17.8942 11.6277 17.9658L7.25492 20.2654C6.79392 20.5078 6.56341 20.6291 6.39297 20.5975C6.24468 20.57 6.11672 20.477 6.04474 20.3445C5.962 20.1922 6.00603 19.9355 6.09407 19.4221L6.92889 14.5547C6.95491 14.403 6.96793 14.3271 6.95912 14.2545C6.95132 14.1902 6.93111 14.128 6.89961 14.0715C6.86402 14.0076 6.80888 13.9538 6.69859 13.8464L3.16056 10.4004C2.78766 10.0372 2.60121 9.85558 2.57853 9.68377C2.55879 9.5343 2.60755 9.38389 2.71125 9.27444C2.83044 9.14863 3.08797 9.11099 3.60304 9.03571L8.49431 8.32077C8.64642 8.29854 8.72248 8.28742 8.78872 8.25662C8.84736 8.22935 8.90016 8.19096 8.94419 8.14358C8.99391 8.09006 9.02793 8.02113 9.09597 7.88328L11.2827 3.45332Z"/></svg>
                          تقييم العملاء
                        </span>
                      </td>
                      {BANKS.map(bank => (
                        <td key={bank.id} className="p-3 text-center" style={{ background: selectedBank === bank.id ? '#F0F7F2' : 'white' }}>
                          <div className="flex justify-center"><Stars value={bank.rating} prefix={bank.id} /></div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB] mt-4 pb-4">
              <div className="flex items-center gap-3">
                <a
                  href="/tractor/success"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-[13px] font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{ background: '#1B3A24' }}
                >
                  إنشاء الطلب
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-medium text-[#374151] border border-[#D1D5DB] hover:bg-[#F9FAFB] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
                  حفظ المقارنة
                </button>
              </div>
              <span className="flex items-center gap-1.5 text-[11px] text-[#6B7280]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                تظل معلوماتك آمنة ومشفرة طوال العملية
              </span>
              <a href="/tractor/eligible-offers" className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-medium text-[#374151] border border-[#D1D5DB] hover:bg-[#F9FAFB] transition-colors">
                العودة إلى العروض
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
