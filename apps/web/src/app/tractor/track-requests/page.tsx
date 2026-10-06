'use client';

const REQUESTS = [
  {
    id: '#MZ-00167002',
    product: 'خزان رش مبيدات بسعة 2000 لتر',
    productImg: '/tractor-product-1.png',
    productBg: '#F0F4F0',
    bankName: 'Bank Albilad',
    bankLogo: '/logo-albilad.png',
    bankBg: '#FFF9EC',
    date: '21 يوليو 2026',
    status: 'تم إرسال الطلب',
    statusColor: '#16A34A',
    statusBg: '#DCFCE7',
    statusDot: '#16A34A',
  },
  {
    id: '#MZ-00167011',
    product: 'مضخة ري زراعية',
    productImg: '/tractor-product-2.png',
    productBg: '#F0F4F0',
    bankName: 'alrajhi bank',
    bankLogo: '/logo-alrajhi.png',
    bankBg: '#F0FFF4',
    date: '24 يوليو 2026',
    status: 'قيد المراجعة',
    statusColor: '#2563EB',
    statusBg: '#DBEAFE',
    statusDot: '#2563EB',
  },
  {
    id: '#MZ-00167018',
    product: 'نظام طاقة شمسية للري',
    productImg: '/tractor-product-3.png',
    productBg: '#F0F4F0',
    bankName: 'بنك الرياض',
    bankLogo: '/logo-riyad.png',
    bankBg: '#FEF2F2',
    date: '26 يوليو 2026',
    status: 'مطلوب مستندات إضافية',
    statusColor: '#D97706',
    statusBg: '#FEF3C7',
    statusDot: '#F59E0B',
  },
];

export default function TrackRequestsPage() {
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
          {/* Farm decorative image */}
          <div className="overflow-hidden flex-shrink-0" style={{ height: 185 }}>
            <img src="/bg-side.png" alt="" className="w-full h-full object-cover object-bottom" />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-[#FAFAF8]">
          <div className="flex-1 px-10 py-8">
            {/* Title area */}
            <div className="mb-6">
              <h1 className="text-[26px] font-bold text-[#111827] mb-1">تتبع الطلبات</h1>
              <p className="text-[13px] text-[#6B7280]">تابع طلبات التمويل الخاصة بك وحالة كل طلب من خلال هذه الصفحة.</p>
            </div>

            {/* Search + filter bar */}
            <div className="flex items-center gap-3 mb-5">
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#D1D5DB] bg-white text-[13px] text-[#374151] hover:bg-[#F9FAFB] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/>
                </svg>
                تضفية
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <div className="flex-1 relative">
                <svg className="absolute top-1/2 -translate-y-1/2 right-3.5" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input
                  type="text"
                  placeholder="ابحث برقم الطلب"
                  className="w-full bg-white border border-[#D1D5DB] rounded-xl py-2.5 pr-10 pl-4 text-[13px] text-[#374151] placeholder-[#9CA3AF] outline-none focus:border-[#1B3A24] transition-colors"
                  dir="rtl"
                />
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
              <table className="w-full" dir="rtl">
                <thead>
                  <tr className="border-b border-[#F3F4F6]" style={{ background: '#FAFAFA' }}>
                    <th className="px-5 py-3.5 text-right text-[12px] font-semibold text-[#374151]">رقم الطلب</th>
                    <th className="px-5 py-3.5 text-right text-[12px] font-semibold text-[#374151]">المنتج</th>
                    <th className="px-5 py-3.5 text-right text-[12px] font-semibold text-[#374151]">جهة التمويل</th>
                    <th className="px-5 py-3.5 text-right text-[12px] font-semibold text-[#374151]">تاريخ الطلب</th>
                    <th className="px-5 py-3.5 text-right text-[12px] font-semibold text-[#374151]">الحالة الحالية</th>
                    <th className="px-5 py-3.5 text-right text-[12px] font-semibold text-[#374151]">الإجراء</th>
                  </tr>
                </thead>
                <tbody>
                  {REQUESTS.map((req, i) => (
                    <tr key={req.id} className={`border-b border-[#F3F4F6] ${i === REQUESTS.length - 1 ? 'border-b-0' : ''}`}>
                      <td className="px-5 py-4">
                        <span className="text-[13px] font-semibold" style={{ color: '#1B3A24' }} dir="ltr">{req.id}</span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center" style={{ background: req.productBg }}>
                            <img src={req.productImg} alt={req.product} className="w-full h-full object-contain p-1"
                              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                          </div>
                          <span className="text-[13px] font-medium text-[#111827]">{req.product}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-9 rounded-lg overflow-hidden flex items-center justify-center" style={{ background: req.bankBg }}>
                            <img src={req.bankLogo} alt={req.bankName} className="w-full h-full object-contain p-1"
                              onError={(e) => {
                                const parent = (e.target as HTMLImageElement).parentElement;
                                if (parent) { parent.innerHTML = `<span style="font-size:10px;color:#6B7280;padding:4px">${req.bankName}</span>`; }
                              }} />
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-[13px] text-[#374151]">{req.date}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="flex items-center gap-2 text-[12px] font-medium px-3 py-1.5 rounded-full w-fit" style={{ background: req.statusBg, color: req.statusColor }}>
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: req.statusDot }}></span>
                          {req.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <a
                          href="/tractor/track-requests/details"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12px] font-medium text-[#374151] border border-[#D1D5DB] hover:bg-[#F9FAFB] transition-colors w-fit"
                        >
                          عرض التتبع
                          <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="px-10 py-4 border-t border-[#F3F4F6] flex items-center justify-center">
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
  );
}
