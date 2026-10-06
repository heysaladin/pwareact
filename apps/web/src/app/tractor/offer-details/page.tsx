'use client';

import React from 'react';
import CartSidebar from '../components/CartSidebar';
import StepperBar from '../components/StepperBar';

function SAR() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="ر.س" className="w-2.5 h-2.5 shrink-0 inline-block mx-0.5">
      <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
      <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
    </svg>
  );
}

function CheckIcon({ color = '#16A34A' }: { color?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
      <path d="M3 8l4 4 6-6" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const STAR_PATH = "M12.0664 6.76953C12.2104 7.11556 12.5356 7.35176 12.9092 7.38184L18.2725 7.8125L14.1865 11.3125C13.9018 11.5565 13.7773 11.939 13.8643 12.3037L15.1123 17.5371L10.5215 14.7324C10.2015 14.537 9.79853 14.537 9.47852 14.7324L4.8877 17.5371L6.13574 12.3037C6.22274 11.939 6.09819 11.5565 5.81348 11.3125L1.72754 7.8125L7.09082 7.38184C7.4644 7.35176 7.78959 7.11557 7.93359 6.76953L10 1.80176L12.0664 6.76953Z";

function StarIcon({ fill, uid }: { fill: 'empty' | 'half' | 'full'; uid: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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

function StarRating({ value, prefix = 'od' }: { value: number; prefix?: string }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => {
        const diff = value - (i - 1);
        const fill = diff >= 0.75 ? 'full' : diff >= 0.25 ? 'half' : 'empty';
        return <StarIcon key={i} fill={fill} uid={`${prefix}-${i}`} />;
      })}
    </div>
  );
}

function RatingBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] text-[#6B7280] w-28 flex-shrink-0">{label}</span>
      <div className="flex-1 h-1.5 rounded-full bg-[#E5E7EB] overflow-hidden">
        <div className="h-full rounded-full bg-[#F59E0B]" style={{ width: `${(value / 5) * 100}%` }} />
      </div>
      <span className="text-[10px] font-medium text-[#374151] w-5">{value}</span>
    </div>
  );
}

const STEPPER = [
  { label: 'استكشاف العروض', status: 'done' },
  { label: 'التحقق من الهوية', status: 'done' },
  { label: 'العقود والإفصاحات', status: 'done' },
  { label: 'التحقق من البيانات', status: 'done' },
  { label: 'العروض المؤهلة', status: 'done' },
  { label: 'تفاصيل العرض', status: 'active' },
  { label: 'مقارنة العروض', status: 'pending' },
  { label: 'إرسال الطلب', status: 'pending' },
];

export default function OfferDetailsPage() {
  return (
    <div
      dir="rtl"
      className="h-screen flex flex-col overflow-hidden"
      style={{ fontFamily: "'SF Arabic', 'SF Pro Arabic', -apple-system, 'IBM Plex Sans Arabic', 'Cairo', 'Tajawal', Arial, sans-serif" }}
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
      <main className="flex flex-1 overflow-hidden min-h-0">
        <CartSidebar />

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col overflow-hidden h-full">

          {/* SCROLLABLE CONTENT */}
          <div className="flex-1 overflow-y-auto bg-[#FAFAF8]">
            <div className="px-10 py-7 flex flex-col">
            <StepperBar steps={STEPPER} />
            <div className="flex gap-5">

              {/* RIGHT PANEL: heading + why recommended + docs + next steps */}
              <div className="flex flex-col gap-4 flex-shrink-0" style={{ width: '248px' }}>
                <div>
                  <h1 className="text-[22px] font-bold text-[#111827] mb-2">تفاصيل العرض</h1>
                  <p className="text-[11px] text-[#6B7280] leading-relaxed">هذه هي تفاصيل العرض التمويلي المختار من الجهة التمويلية. يرجى مراجعة جميع التفاصيل والشروط قبل إنشاء الطلب.</p>
                </div>

                {/* لماذا نوصي بهذا العرض */}
                <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
                  <h3 className="text-[12px] font-bold text-[#111827] mb-3 flex items-center gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    لماذا نوصي بهذا العرض؟
                  </h3>
                  <div className="space-y-2">
                    {['أقل إجمالي سداد', 'نسبة تنافسية', 'بدون رسوم إدارية', 'تأمين شامل', 'سهولة في الإجراءات الرقمية'].map(r => (
                      <div key={r} className="flex items-center gap-1.5">
                        <CheckIcon />
                        <span className="text-[11px] text-[#374151]">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* المستندات الأساسية */}
                <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
                  <h3 className="text-[12px] font-bold text-[#111827] mb-3 flex items-center gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1B3A24" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                    المستندات الأساسية
                  </h3>
                  <div className="space-y-2">
                    {['ملخص الحقائق والأحكام', 'الشروط والأحكام', 'إفصاح المنتج', 'جدول الرسوم'].map(doc => (
                      <div key={doc} className="flex items-center gap-1.5">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                        <a href="#" className="text-[11px] text-[#374151] hover:underline">{doc}</a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* الخطوات التالية */}
                <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
                  <h3 className="text-[12px] font-bold text-[#111827] mb-3 flex items-center gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1B3A24" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 11l3 3L22 4" /></svg>
                    الخطوات التالية
                  </h3>
                  <div className="space-y-2">
                    {[
                      'راجع الحقائق والشروط',
                      'وافق على العرض للمتابعة',
                      'أكمل التحقق النهائي عند الحاجة',
                      'سيتم إنشاء الطلب للمتابعة مع تمّول',
                    ].map((step, i) => (
                      <div key={step} className="flex items-start gap-2">
                        <span className="text-[10px] font-bold text-white w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#1B3A24' }}>{i + 1}</span>
                        <span className="text-[11px] text-[#374151]">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* LEFT AREA: back button + bank card + two sub-columns */}
              <div className="flex-1 flex flex-col gap-4">

                {/* Back button */}
                <div>
                  <a href="/tractor/eligible-offers" className="inline-flex items-center gap-1.5 text-[12px] text-[#374151] border border-[#D1D5DB] bg-white rounded-xl px-4 py-2 hover:bg-[#F9FAFB] transition-colors">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    العودة إلى العروض
                  </a>
                </div>

                {/* Bank card */}
                <div className="bg-white rounded-2xl border-2 border-[#1B3A24] p-4">
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B3A24]">موصى به</span>
                      <div className="flex items-center gap-2">
                        <div className="w-28 h-16 rounded-xl overflow-hidden bg-[#EFF6FF] flex items-center justify-center p-2">
                          <img src="/logo-alahli.png" alt="SNB" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <p className="text-[14px] font-bold text-[#111827]">البنك الأهلي السعودي</p>
                          <p className="text-[10px] text-[#6B7280]">خدمات رقمية متقدمة</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 justify-end">
                      <div className="text-center">
                        <p className="text-[9px] text-[#6B7280] mb-0.5">الدفعة المقدمة</p>
                        <p className="text-[13px] font-bold text-[#111827]">4,772 <SAR /></p>
                      </div>
                      <div className="text-center">
                        <p className="text-[9px] text-[#6B7280] mb-0.5">إجمالي السداد</p>
                        <p className="text-[13px] font-bold text-[#111827]">22,800 <SAR /></p>
                      </div>
                      <div className="text-center">
                        <p className="text-[9px] text-[#6B7280] mb-0.5">القسط الشهري</p>
                        <p className="text-[13px] font-bold text-[#111827]">380 <SAR /></p>
                      </div>
                      <div className="text-center">
                        <p className="text-[9px] text-[#6B7280] mb-0.5">النسبة السنوية</p>
                        <p className="text-[16px] font-bold text-[#1B3A24]">4.69%</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-3 border-t border-[#E5E7EB]">
                    {['بدون رسوم إدارية', 'مرونة في السداد المبكر', 'تأمين شامل', 'خدمات رقمية متقدمة'].map(f => (
                      <div key={f} className="flex items-center gap-1">
                        <CheckIcon />
                        <span className="text-[10px] text-[#374151]">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Two sub-columns */}
                <div className="flex gap-4">

                  {/* Right sub-col: ملخص العرض + معلومات أساسية */}
                  <div className="flex-1 space-y-4">
                    <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
                      <h3 className="text-[12px] font-bold text-[#111827] mb-3 flex items-center gap-1.5">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1B3A24" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                        ملخص العرض
                      </h3>
                      <div className="space-y-2.5">
                        {([
                          { label: 'مبلغ التمويل', value: <span>19,090 <SAR /></span> },
                          { label: 'المدة', value: '60 شهر' },
                          { label: 'الدفعة المقدمة', value: <span>4,772 <SAR /></span> },
                          { label: 'النسبة السنوية', value: '4.69%' },
                          { label: 'القسط الشهري', value: <span>380 <SAR /></span> },
                          { label: 'أول دفعة', value: 'بعد 30 يوم من التنفيذ' },
                        ] as { label: string; value: React.ReactNode }[]).map(item => (
                          <div key={item.label} className="flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-[#111827]">{item.value}</span>
                            <span className="text-[10px] text-[#6B7280]">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
                      <h3 className="text-[12px] font-bold text-[#111827] mb-3 flex items-center gap-1.5">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1B3A24" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                        معلومات أساسية
                      </h3>
                      <div className="space-y-2">
                        {([
                          { label: 'تمويل متوافق مع الشريعة', value: 'نعم' },
                          { label: 'نسبة ثابتة', value: 'نعم' },
                          { label: 'السداد المبكر متاح', value: 'نعم' },
                          { label: 'التأمين', value: 'شامل' },
                          { label: 'الرسوم الإدارية', value: <span>0 <SAR /></span> },
                          { label: 'نقل الملكية', value: 'وفق سياسة الجهة الممولة' },
                        ] as { label: string; value: React.ReactNode }[]).map(item => (
                          <div key={item.label} className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <CheckIcon />
                              <span className="text-[11px] font-medium text-[#374151]">{item.value}</span>
                            </div>
                            <span className="text-[10px] text-[#6B7280]">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Left sub-col: تفصيل السداد + تقييم العرض */}
                  <div className="flex-1 space-y-4">
                    <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
                      <h3 className="text-[12px] font-bold text-[#111827] mb-3 flex items-center gap-1.5">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1B3A24" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /></svg>
                        تفصيل السداد
                      </h3>
                      <div className="space-y-2.5">
                        {([
                          { label: 'السعر الإجمالي', value: <span>23,862 <SAR /></span> },
                          { label: 'الدفعة المقدمة', value: <span>4,772 <SAR /></span> },
                          { label: 'مبلغ التمويل', value: <span>19,090 <SAR /></span> },
                          { label: 'تكلفة التمويل التقديرية', value: <span>3,710 <SAR /></span> },
                        ] as { label: string; value: React.ReactNode }[]).map(item => (
                          <div key={item.label} className="flex items-center justify-between">
                            <span className="text-[11px] font-medium text-[#374151]">{item.value}</span>
                            <span className="text-[10px] text-[#6B7280]">{item.label}</span>
                          </div>
                        ))}
                        <div className="flex justify-between pt-2 border-t border-[#E5E7EB]">
                          <span className="text-[13px] font-bold text-[#111827]">22,800 <SAR /></span>
                          <span className="text-[10px] font-medium text-[#374151]">إجمالي السداد</span>
                        </div>
                      </div>
                      <div className="mt-3 p-2.5 rounded-lg bg-[#F0F7F2] flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B3A24" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
                        <span className="text-[10px] text-[#1B3A24]">القسط الشهري التقديري يبدأ من <strong>380 <SAR /> / شهر</strong></span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
                      <h3 className="text-[12px] font-bold text-[#111827] mb-2 flex items-center gap-1.5">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                        تقييم العرض
                      </h3>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[24px] font-bold text-[#111827]">4.8</span>
                        <div>
                          <StarRating value={4.8} />
                          <span className="text-[9px] text-[#6B7280]">728+ تقييم من العملاء+</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <RatingBar label="رضا العملاء" value={4.9} />
                        <RatingBar label="التجربة الرقمية" value={4.8} />
                        <RatingBar label="سرعة الموافقة" value={4.7} />
                        <RatingBar label="الشفافية" value={4.8} />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR — pinned outside scroll area */}
          <div className="flex-shrink-0 flex items-center justify-between px-8 py-4 border-t border-[#E5E7EB] bg-white">
            <a href="/tractor/eligible-offers" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-[13px] font-medium text-[#374151] border border-[#D1D5DB] hover:bg-[#F9FAFB] transition-colors">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              العودة إلى العروض
            </a>
            <div className="flex items-center gap-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1B3A24" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <span className="text-[11px] text-[#6B7280]">تظل معلوماتك آمنة ومشفرة طوال العملية.</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-5 py-2.5 rounded-xl text-[13px] font-medium text-[#374151] border border-[#D1D5DB] hover:bg-[#F9FAFB] transition-colors">
                حفظ العرض
              </button>
              <a
                href="/tractor/compare-offers"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-[13px] font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ background: '#1B3A24' }}
              >
                إنشاء الطلب
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
