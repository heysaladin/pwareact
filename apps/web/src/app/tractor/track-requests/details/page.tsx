'use client';

function SAR() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" fill="currentColor" aria-label="ر.س" className="w-2.5 h-2.5 shrink-0 inline-block mx-0.5">
      <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
      <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
    </svg>
  );
}

const TIMELINE = [
  {
    id: 1,
    label: 'تم إنشاء الطلب',
    desc: 'تم استلام طلب التمويل الخاص بك.',
    date: '21 يوليو 2026',
    time: '10:24 ص',
    status: 'done',
  },
  {
    id: 2,
    label: 'تم إرسال الطلب إلى جهة التمويل',
    desc: 'تم إرسال الطلب إلى جهة التمويل.',
    date: '21 يوليو 2026',
    time: '11:08 ص',
    status: 'done',
  },
  {
    id: 3,
    label: 'قيد المراجعة لدى جهة التمويل',
    desc: 'جاء مراجعة طلبك من قبل البنك الأهلي.',
    date: '22 يوليو 2026',
    time: '09:15 ص',
    status: 'active',
  },
  {
    id: 4,
    label: 'موافقة مبدئية',
    desc: 'سنقوم بإشعارك فور صدور الموافقة.',
    date: null,
    time: null,
    status: 'pending',
  },
  {
    id: 5,
    label: 'توقيع العقد',
    desc: 'قم بتوقيع اتفاقية التمويل إلكترونياً.',
    date: null,
    time: null,
    status: 'pending',
  },
  {
    id: 6,
    label: 'تسليم المعدات',
    desc: 'بعد اكتمال الإجراءات، سيتم التنسيق مع المورد لتسليم المعدات.',
    date: null,
    time: null,
    status: 'pending',
  },
];

const NEXT_STEPS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'انتظار مراجعة التمويل',
    desc: 'سنوم مراجعة مستنداتك وتقييم الطلب من قبل البنك الأهلي.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
      </svg>
    ),
    title: 'إشعارك بالنتيجة',
    desc: 'سنقوم بإرسال إشعار عبر المنصة والبريد الإلكتروني.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: 'توقيع العقد إلكترونياً',
    desc: 'في حال الموافقة، ستتمكن من توقيع العقد عبر المنصة.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'تسليم المعدات',
    desc: 'بعد توقيع العقد، سيتم التنسيق مع المورد لتسليم المعدات.',
  },
];

export default function RequestDetailsPage() {
  return (
    <div
      dir="rtl"
      className="h-screen flex flex-col overflow-hidden"
      style={{ fontFamily: "'SF Arabic', 'SF Pro Arabic', -apple-system, BlinkMacSystemFont, 'IBM Plex Sans Arabic', 'Cairo', 'Tajawal', Arial, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap');
        @font-face { font-family: 'SF Arabic'; src: local('SF Arabic'), local('.SF Arabic'), local('.SFArabic-Regular'), local('SFArabic-Regular'); font-weight: 100 900; }
        * { box-sizing: border-box; }
      `}</style>

      {/* Navbar */}
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
        {/* Right Sidebar */}
        <aside className="bg-white border-l border-[#E5E7EB] flex flex-col overflow-hidden flex-shrink-0" style={{ width: 220 }}>
          <div className="p-5 flex-1 overflow-y-auto">
<nav className="flex flex-col gap-1">
              <a href="#" className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] text-[#6B7280] hover:bg-[#F3F4F6] transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                حسابي
              </a>
              <a href="#" className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] text-[#6B7280] hover:bg-[#F3F4F6] transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                سجل الطلبات
              </a>
              <a href="/tractor/track-requests" className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-colors" style={{ background: '#F0F7F2', color: '#1B3A24' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                تتبع الطلبات
              </a>
            </nav>
          </div>
          <div className="p-4 border-t border-[#F3F4F6]">
            <div className="flex items-start gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#F0F7F2' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B3A24" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.6 12.9a19.79 19.79 0 01-3.07-8.67A2 2 0 012.48 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-[#111827]">هل تحتاج إلى مساعدة؟</p>
                <p className="text-[11px] text-[#6B7280] leading-relaxed mt-0.5">فريق الدعم لدينا جاهز لمساعدتك في أي وقت.</p>
              </div>
            </div>
            <a href="#" className="flex items-center gap-1.5 text-[12px] font-medium" style={{ color: '#1B3A24' }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              تواصل مع الدعم
            </a>
          </div>
          <div className="overflow-hidden flex-shrink-0" style={{ height: 185 }}>
            <img src="/bg-side.png" alt="" className="w-full h-full object-cover object-bottom" />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-[#FAFAF8]">
          <div className="px-10 py-8">
            {/* Title + back */}
            <div className="mb-5">
              <h1 className="text-[26px] font-bold text-[#111827] mb-1">تفاصيل الطلب</h1>
              <p className="text-[13px] text-[#6B7280] mb-4">تابع حالة طلب التمويل الخاص بك ومعرفة الخطوات القادمة.</p>
              <a href="/tractor/track-requests" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#D1D5DB] bg-white text-[13px] text-[#374151] hover:bg-[#F9FAFB] transition-colors">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                العودة إلى تتبع الطلبات
              </a>
            </div>

            {/* Product + request header */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-5 mb-4">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-36 h-36 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center" style={{ background: '#F0F4F0' }}>
                  <img src="/tractor-product-tractor.png" alt="جرار زراعي" className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.src = '/tractor-product-1.png';
                    }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-[17px] font-bold text-[#111827]">جرار زراعي</h2>
                      <p className="text-[13px] text-[#6B7280] mt-0.5">John Deere 6120M</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[11px] px-2.5 py-1 rounded-full border border-[#D1D5DB] text-[#374151]">جديد</span>
                        <span className="text-[11px] px-2.5 py-1 rounded-full border border-[#D1D5DB] text-[#374151]">آلات زراعية</span>
                      </div>
                    </div>
                    <div className="text-left flex flex-col items-end gap-1">
                      <span className="text-[11px] text-[#6B7280]">جهة التمويل</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[13px] font-semibold text-[#111827]">الأهلي NCB</span>
                        <div className="w-32 h-16 rounded-lg border flex items-center justify-center overflow-hidden" style={{ background: 'white', borderColor: '#F0F7F2' }}>
                          <img src="/logo-ncb.png" alt="NCB" className="w-full h-full object-contain px-3 py-1"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meta row */}
              <div className="flex items-center gap-6 pt-4 border-t border-[#F3F4F6]">
                <div>
                  <span className="text-[11px] text-[#6B7280] block mb-0.5">رقم الطلب</span>
                  <span className="text-[13px] font-bold" style={{ color: '#1B3A24' }} dir="ltr">#MZ-2026-4587</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#6B7280] block mb-0.5">تاريخ الطلب</span>
                  <span className="text-[13px] font-medium text-[#111827]">21 يوليو 2026</span>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-6 gap-3 mb-4">
              {[
                { label: 'سعر المعدات', value: '180,000', sar: true },
                { label: 'الدفعة المقدمة', value: '27,000', sub: '(15%)', sar: true },
                { label: 'المبلغ الممول', value: '153,000', sar: true },
                { label: 'القسط الشهري', value: '2,915', sar: true },
                { label: 'مدة التمويل', value: '60 شهر', sar: false },
                { label: 'نسبة الربح السنوية', value: '5.29%', sar: false },
              ].map(stat => (
                <div key={stat.label} className="bg-white rounded-xl border border-[#E5E7EB] px-4 py-3 text-center">
                  <p className="text-[10px] text-[#6B7280] mb-1">{stat.label}</p>
                  <p className="text-[14px] font-bold text-[#111827]">
                    {stat.sar ? <><span>SAR</span> {stat.value}</> : stat.value}
                    {stat.sub && <span className="text-[11px] font-normal text-[#6B7280] mr-1">{stat.sub}</span>}
                  </p>
                </div>
              ))}
            </div>

            {/* Two-column section */}
            <div className="grid grid-cols-2 gap-4">
              {/* Right: Request timeline */}
              <div className="bg-white rounded-2xl border border-[#E5E7EB] p-5">
                <h3 className="text-[15px] font-bold text-[#111827] mb-4">مسار الطلب</h3>
                <div className="relative">
                  {/* vertical line */}
                  <div className="absolute top-0 bottom-0 right-[11px] w-px" style={{ background: '#E5E7EB' }}></div>
                  <div className="flex flex-col gap-0">
                    {TIMELINE.map((step, i) => (
                      <div key={step.id} className={`relative flex items-start gap-3.5 ${i < TIMELINE.length - 1 ? 'pb-5' : ''} ${step.status === 'active' ? 'bg-[#F7FFF9] -mx-5 px-5 rounded-xl py-3' : ''}`}>
                        {/* Dot */}
                        <div className="relative z-10 flex-shrink-0 mt-0.5">
                          {step.status === 'done' && (
                            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#1B3A24' }}>
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                          )}
                          {step.status === 'active' && (
                            <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#1B3A24', background: 'white' }}>
                              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#1B3A24' }}></div>
                            </div>
                          )}
                          {step.status === 'pending' && (
                            <div className="w-6 h-6 rounded-full border-2 border-[#D1D5DB] bg-white"></div>
                          )}
                        </div>
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <p className={`text-[13px] font-semibold ${step.status === 'pending' ? 'text-[#9CA3AF]' : 'text-[#111827]'}`}>{step.label}</p>
                            {step.date && (
                              <span className="text-[11px] text-[#6B7280] shrink-0">{step.date} {step.time}</span>
                            )}
                          </div>
                          <p className={`text-[12px] mt-0.5 ${step.status === 'pending' ? 'text-[#C4C9D4]' : 'text-[#6B7280]'}`}>{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Left: Status + Next steps */}
              <div className="flex flex-col gap-4">
                {/* Current status */}
                <div className="bg-white rounded-2xl border border-[#E5E7EB] p-5">
                  <h3 className="text-[15px] font-bold text-[#111827] mb-3">الحالة الحالية</h3>
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-2 text-[12px] font-medium px-3 py-1.5 rounded-full" style={{ background: '#DBEAFE', color: '#2563EB' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                      قيد المراجعة
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl" style={{ background: '#F0F9FF' }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#0EA5E9' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#0C4A6E]">طلبك قيد المراجعة حالياً لدى البنك الأهلي</p>
                      <p className="text-[12px] text-[#0369A1] mt-1 leading-relaxed">لا يلزم منك أي إجراء في الوقت الحالي. سنقوم بإشعارك في حال طلب أي مستندات إضافية</p>
                    </div>
                  </div>
                </div>

                {/* Next steps */}
                <div className="bg-white rounded-2xl border border-[#E5E7EB] p-5">
                  <h3 className="text-[15px] font-bold text-[#111827] mb-3">الخطوات التالية</h3>
                  <div className="flex flex-col gap-3">
                    {NEXT_STEPS.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-[#6B7280]" style={{ background: '#F3F4F6' }}>
                          {step.icon}
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold text-[#111827]">{step.title}</p>
                          <p className="text-[12px] text-[#6B7280] mt-0.5 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer security */}
            <div className="flex items-center justify-center mt-5">
              <span className="flex items-center gap-1.5 text-[12px] text-[#9CA3AF]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
                معلوماتك محمية وآمنة.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
