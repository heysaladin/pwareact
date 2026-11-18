export default function InterestRegisteredPage() {
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
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                <span className="absolute -top-1.5 -left-1.5 bg-[#2C5E1A] text-white text-[9px] rounded-full w-[17px] h-[17px] flex items-center justify-center font-bold">3</span>
              </div>
              <span className="text-sm">سلة التسوق</span>
            </button>
            <button className="flex items-center gap-2 text-[#374151] hover:text-[#1B3A24]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="text-sm">حسابي</span>
            </button>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-6 overflow-y-auto min-h-0">
        <img
          src="/mouzare-interest-registered.svg"
          alt=""
          style={{ width: '180px', height: '180px' }}
          className="mb-5"
        />
        <h1
          className="text-[24px] font-bold text-[#111827] text-center leading-[36px] max-w-[620px] mb-3"
          dir="auto"
        >
          تم تسجيل اهتمامك بنجاح!
        </h1>
        <p
          className="text-[14px] text-[#6b7280] text-center leading-[21px] max-w-[520px]"
          dir="auto"
        >
          تم تسجيل اهتمامك في نظام تموّل. شكرًا لتسجيل اهتمامك، وسنبقيك على اطلاع بكل جديد.
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e5e7eb] bg-white flex items-center justify-center px-8 py-4 flex-shrink-0">
        <a
          href="/mouzare-interest/track-requests"
          className="bg-[#1b3a24] text-white text-[13px] font-semibold px-[18px] py-3 rounded-lg shadow-sm"
          dir="auto"
        >
          العودة إلى قائمة المنتجات
        </a>
      </footer>
    </div>
  );
}
