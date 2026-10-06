'use client';

import CartSidebar from '../components/CartSidebar';
import StepperBar from '../components/StepperBar';
import { useState } from 'react';

const PRODUCT = {
  name: 'خزان رش مبيدات بسعة 2000 لتر',
  qty: 1,
  capacity: '2000 لتر',
  type: 'نيرو مروحة - مقطور خلف الزراكتور',
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
  { label: 'العقود والإفصاحات', status: 'active' },
  { label: 'التحقق من البيانات', status: 'pending' },
  { label: 'العروض المؤهلة', status: 'pending' },
  { label: 'تفاصيل العرض', status: 'pending' },
  { label: 'مقارنة العروض', status: 'pending' },
  { label: 'إرسال الطلب', status: 'pending' },
];

function fmt(n: number) {
  return n.toLocaleString('en-SA');
}


export default function PersonalDataPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [maritalStatus, setMaritalStatus] = useState('');
  const [familyMembers, setFamilyMembers] = useState('');
  const [educationDependents, setEducationDependents] = useState('');
  const [educationCost, setEducationCost] = useState('');
  const [salaryBank, setSalaryBank] = useState('');
  const [city, setCity] = useState('');
  const [housingOwnership, setHousingOwnership] = useState('');
  const [housingType, setHousingType] = useState('');
  const [educationLevel, setEducationLevel] = useState('');

  const accordions = [
    { title: 'تفاصيل العمل', content: 'أدخل تفاصيل عملك الحالية وجهة عملك.' },
    { title: 'تفاصيل الدخل الإضافي', content: 'أضف أي مصادر دخل إضافية إن وجدت.' },
    { title: 'الالتزامات المالية', content: 'اذكر التزاماتك المالية الحالية كالقروض والأقساط.' },
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
        select { appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: left 10px center; }
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
              <a href="/tractor/verify-identity" className="flex items-center gap-1.5 text-[12px] text-[#374151] hover:text-[#1B3A24] transition-colors">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                رجوع
              </a>
              <div className="flex items-center gap-2">
                <img src="https://tamweelsaas.vercel.app/logo.svg" alt="Tamawal" className="h-8 w-auto" />
              </div>
            </div>

            {/* Security notice */}
            <div className="flex items-center gap-2 mb-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B3A24" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              <p className="text-[11px] text-[#374151]">بياناتك آمنة ولن تستخدم إلا لأغراض دراسة التمويل والتحقق.</p>
            </div>

            {/* Heading */}
            <h1 className="text-[20px] font-bold text-[#111827] mb-1">الإفصاحات والبيانات الشخصية</h1>
            <p className="text-[12px] text-[#6B7280] mb-5">يرجى إدخال بياناتك الشخصية والإفصاحات المطلوبة بدقة لاستكمال طلب التمويل.</p>

            {/* Section: Personal Data */}
            <h2 className="text-[14px] font-bold text-[#111827] mb-3">البيانات الشخصية</h2>
            <div className="grid grid-cols-3 gap-4 mb-5">
              {[
                { label: 'الحالة الاجتماعية', value: maritalStatus, setter: setMaritalStatus, options: ['أعزب', 'متزوج', 'مطلق', 'أرمل'] },
                { label: 'عدد أفراد الأسرة (عدد المعالين)*', value: familyMembers, setter: setFamilyMembers, options: ['0', '1', '2', '3', '4', '5+'] },
                { label: 'كم عدد المعالين الذين يدفع رسومهم التعليمية حالياً*', value: educationDependents, setter: setEducationDependents, options: ['0', '1', '2', '3', '4+'] },
                { label: 'مصاريف تعليم المعالين شهرياً', value: educationCost, setter: setEducationCost, options: ['0 - 500', '500 - 2000', '2000 - 5000', '5000+'] },
                { label: 'بنك الراتب*', value: salaryBank, setter: setSalaryBank, options: ['البنك الأهلي السعودي', 'بنك الراجحي', 'بنك الجزيرة', 'مصرف الإنماء', 'بنك الرياض'] },
                { label: 'المدينة*', value: city, setter: setCity, options: ['الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام'] },
                { label: 'ملكية السكن*', value: housingOwnership, setter: setHousingOwnership, options: ['مملوك', 'مستأجر', 'عائلي'] },
                { label: 'نوع السكن*', value: housingType, setter: setHousingType, options: ['شقة', 'فيلا', 'دور', 'استراحة'] },
                { label: 'المستوى التعليمي*', value: educationLevel, setter: setEducationLevel, options: ['ثانوي', 'دبلوم', 'بكالوريوس', 'ماجستير', 'دكتوراه'] },
              ].map(field => (
                <div key={field.label}>
                  <label className="block text-[11px] font-medium text-[#374151] mb-1.5 leading-snug">{field.label}</label>
                  <select
                    value={field.value}
                    onChange={e => field.setter(e.target.value)}
                    className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-[12px] text-right outline-none focus:border-[#1B3A24] bg-white text-[#374151] pr-3 pl-8"
                    dir="rtl"
                  >
                    <option value="">اختر...</option>
                    {field.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>

            {/* Section: Additional Disclosures */}
            <h2 className="text-[14px] font-bold text-[#111827] mb-1">إفصاحات إضافية</h2>
            <p className="text-[12px] text-[#6B7280] mb-3">يرجى الإجابة على الأسئلة التالية بحسب أفضل ما لديك من معلومات.</p>
            <div className="space-y-2 mb-6">
              {accordions.map((acc, i) => (
                <div key={i} className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-right"
                  >
                    <span className="text-[13px] font-medium text-[#374151]">{acc.title}</span>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"
                      className="flex-shrink-0 transition-transform duration-200"
                      style={{ transform: openAccordion === i ? 'rotate(180deg)' : 'none' }}
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>
                  {openAccordion === i && (
                    <div className="px-4 pb-4 border-t border-[#E5E7EB]">
                      <p className="text-[12px] text-[#6B7280] mt-3">{acc.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB] mt-auto pb-4">
              <a href="/tractor/verify-identity" className="px-6 py-3 rounded-xl text-[13px] font-medium text-[#374151] border border-[#D1D5DB] hover:bg-[#F9FAFB] transition-colors">
                رجوع
              </a>
              <div className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1B3A24" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
                <span className="text-[11px] text-[#6B7280]">تظل معلوماتك آمنة ومشفرة طوال العملية.</span>
              </div>
              <a
                href="/tractor/collecting-data"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ background: '#1B3A24' }}
              >
                تأكيد ومتابعة
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
