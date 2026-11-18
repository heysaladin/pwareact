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
      <header className="bg-white border-b border-[#e5e7eb] flex items-center justify-end px-8 py-5 flex-shrink-0">
        <div className="flex items-center gap-2">
          <img src="/logo-tamawal-icon.svg" alt="" className="h-8 w-8" />
          <img src="/logo-tamawal-web.svg" alt="Tamawal" className="h-8 w-auto" />
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
