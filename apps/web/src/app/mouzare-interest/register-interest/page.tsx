'use client';

import { useState } from 'react';

const SARIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="SAR" className="w-2.5 h-2.5 shrink-0 inline-block">
    <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
    <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
  </svg>
);

export default function RegisterInterestPage() {
  const [idNumber, setIdNumber] = useState('');
  const [city, setCity] = useState('');
  const [sector, setSector] = useState('');
  const [employer, setEmployer] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salaryBank, setSalaryBank] = useState('');

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
            سجّل اهتمامك
          </h1>
          <p className="text-[14px] text-[#6b7280] leading-[21px] w-full text-right" dir="auto">
            ستنضم هذه الجهة التمويلية إلى شركاء تموّل قريبًا. سجّل اهتمامك وسنبلغك فور توفر التمويل.
          </p>
        </div>

        {/* Two columns */}
        <div className="flex gap-6 items-start w-full">

          {/* Left: Bank Albilad card */}
          <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 flex flex-col gap-3.5 items-end flex-shrink-0" style={{ width: '340px' }}>
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-[14px] font-semibold text-[#111827] leading-[21px] text-right w-full" dir="auto">
              تمويل متناهي الصغر لاحتياجات الموظف وأسرته اليومية
            </p>
            <p className="text-[13px] text-[#374151] leading-[20px] text-right w-full" dir="auto">
              من بنك البلاد
            </p>
            <div className="w-full h-px bg-[#e5e7eb]" />
            <div className="bg-white border border-[#e5e7eb] rounded-full px-2.5 py-1">
              <span className="text-[12px] text-[#db6903] leading-[18px]" dir="auto">ينضم إلى تموّل قريبًا</span>
            </div>
            <div className="flex flex-col gap-2.5 w-full">
              <div className="flex items-center justify-between w-full">
                <span className="text-[14px] font-semibold text-[#111827]">5.66%</span>
                <span className="text-[13px] text-[#374151] text-right" dir="auto">معدل النسبة السنوي من</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="text-[14px] font-semibold text-[#111827]" dir="auto"><SARIcon /> 1,250 / شهريًا</span>
                <span className="text-[13px] text-[#374151] text-right" dir="auto">القسط الشهري من</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="text-[14px] font-semibold text-[#111827]"><SARIcon /> 250,000</span>
                <span className="text-[13px] text-[#374151] text-right" dir="auto">تمويل يصل إلى</span>
              </div>
            </div>
            <p className="text-[12px] text-[#6b7280] leading-[18px] text-right w-full" dir="auto">
              يتم تأكيد العرض النهائي والمعدل والأهلية من قبل الجهة التمويلية بعد انضمامها إلى تموّل.
            </p>
          </div>

          {/* Right: Form */}
          <div className="flex-1 flex flex-col gap-5 items-end min-w-0">

            {/* National ID */}
            <div className="flex flex-col gap-1.5 items-end w-full">
              <div className="flex items-center gap-0.5 text-[13px] font-medium text-[#374151]">
                <span className="text-[#d92d20]">*</span>
                <span dir="auto">رقم الهوية الوطنية / الإقامة</span>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="1XXXXXXXXX"
                  value={idNumber}
                  onChange={e => setIdNumber(e.target.value)}
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
                يجب أن يطابق رقم الهوية المسجّل في أبشر.
              </p>
            </div>

            {/* City + Sector row */}
            <div className="flex gap-5 items-start w-full">
              <div className="flex-1 flex flex-col gap-1.5 items-end">
                <div className="flex items-center gap-0.5 text-[13px] font-medium text-[#374151]">
                  <span className="text-[#d92d20]">*</span>
                  <span dir="auto">القطاع</span>
                </div>
                <select
                  value={sector}
                  onChange={e => setSector(e.target.value)}
                  dir="rtl"
                  className="w-full bg-white border border-[#d1d5db] rounded-lg px-3.5 py-[10px] text-[13px] text-[#9ca3af] text-right outline-none focus:border-[#1b3a24] shadow-[0_1px_1px_rgba(10,13,18,0.05)] appearance-none"
                >
                  <option value="" disabled>اختر القطاع</option>
                  <option value="gov">حكومي</option>
                  <option value="private">خاص</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col gap-1.5 items-end">
                <div className="flex items-center gap-0.5 text-[13px] font-medium text-[#374151]">
                  <span className="text-[#d92d20]">*</span>
                  <span dir="auto">المدينة</span>
                </div>
                <select
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  dir="rtl"
                  className="w-full bg-white border border-[#d1d5db] rounded-lg px-3.5 py-[10px] text-[13px] text-[#9ca3af] text-right outline-none focus:border-[#1b3a24] shadow-[0_1px_1px_rgba(10,13,18,0.05)] appearance-none"
                >
                  <option value="" disabled>اختر المدينة</option>
                  <option value="riyadh">الرياض</option>
                  <option value="jeddah">جدة</option>
                  <option value="dammam">الدمام</option>
                </select>
              </div>
            </div>

            {/* Job title + Employer row */}
            <div className="flex gap-5 items-start w-full">
              <div className="flex-1 flex flex-col gap-1.5 items-end">
                <div className="flex items-center gap-0.5 text-[13px] font-medium text-[#374151]">
                  <span className="text-[#d92d20]">*</span>
                  <span dir="auto">المسمى الوظيفي</span>
                </div>
                <select
                  value={jobTitle}
                  onChange={e => setJobTitle(e.target.value)}
                  dir="rtl"
                  className="w-full bg-white border border-[#d1d5db] rounded-lg px-3.5 py-[10px] text-[13px] text-[#9ca3af] text-right outline-none focus:border-[#1b3a24] shadow-[0_1px_1px_rgba(10,13,18,0.05)] appearance-none"
                >
                  <option value="" disabled>اختر المسمى الوظيفي</option>
                  <option value="engineer">مهندس</option>
                  <option value="teacher">معلم</option>
                  <option value="admin">إداري</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col gap-1.5 items-end">
                <div className="flex items-center gap-0.5 text-[13px] font-medium text-[#374151]">
                  <span className="text-[#d92d20]">*</span>
                  <span dir="auto">جهة العمل</span>
                </div>
                <select
                  value={employer}
                  onChange={e => setEmployer(e.target.value)}
                  dir="rtl"
                  className="w-full bg-white border border-[#d1d5db] rounded-lg px-3.5 py-[10px] text-[13px] text-[#9ca3af] text-right outline-none focus:border-[#1b3a24] shadow-[0_1px_1px_rgba(10,13,18,0.05)] appearance-none"
                >
                  <option value="" disabled>اختر جهة عملك</option>
                  <option value="gov">وزارة</option>
                  <option value="aramco">أرامكو</option>
                </select>
              </div>
            </div>

            {/* Salary bank */}
            <div className="flex flex-col gap-1.5 items-end w-full">
              <div className="flex items-center gap-0.5 text-[13px] font-medium text-[#374151]">
                <span className="text-[#d92d20]">*</span>
                <span dir="auto">بنك الراتب</span>
              </div>
              <select
                value={salaryBank}
                onChange={e => setSalaryBank(e.target.value)}
                dir="rtl"
                className="w-full bg-white border border-[#d1d5db] rounded-lg px-3.5 py-[10px] text-[13px] text-[#9ca3af] text-right outline-none focus:border-[#1b3a24] shadow-[0_1px_1px_rgba(10,13,18,0.05)] appearance-none"
              >
                <option value="" disabled>اختر بنك راتبك</option>
                <option value="alahli">البنك الأهلي السعودي</option>
                <option value="rajhi">مصرف الراجحي</option>
                <option value="albilad">بنك البلاد</option>
              </select>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e5e7eb] bg-white flex items-center justify-between px-8 py-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <a
            href="/mouzare-interest/interest-registered"
            className="bg-[#1b3a24] text-white text-[13px] font-semibold px-[18px] py-3 rounded-lg shadow-sm"
            dir="auto"
          >
            سجّل اهتمامك
          </a>
          <button
            className="bg-white border border-[#e5e7eb] text-[#111827] text-[13px] font-semibold px-[18px] py-3 rounded-lg shadow-sm"
            dir="auto"
          >
            إلغاء
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-[#6b7280]" dir="auto">نستخدم بياناتك فقط لإبلاغك عند توفر هذا العرض.</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        </div>
      </footer>
    </div>
  );
}
