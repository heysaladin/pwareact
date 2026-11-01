'use client'
import Link from 'next/link'
import CeerSidebarAr from '../_components/CeerSidebarAr'

export default function RegisterInterestSuccessArPage() {
  return (
    <div data-theme="dark" style={{ fontFamily: "'ceerBeta3Font', Arial, sans-serif" }} dir="rtl">

      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>الشاشة صغيرة جداً</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>هذه الصفحة مصممة للشاشات الواسعة. يرجى فتحها على حاسوب محمول أو مكتبي.</p>
      </div>

      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>

          {/* Main content */}
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6 overflow-y-auto">

              {/* Checkmark illustration */}
              <div className="w-[180px] h-[180px] flex items-center justify-center text-[80px]">
                ✅
              </div>

              {/* Title */}
              <h1 className="font-['Noto_Sans_Arabic',sans-serif] text-[28px] font-bold text-center w-[620px] leading-tight" style={{ color: 'var(--heading)' }}>
                تم تسجيل اهتمامك بنجاح!
              </h1>

              {/* Body text */}
              <p className="text-[15px] text-center w-[520px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                تم تسجيل اهتمامك في نظام تموّل. شكراً لتسجيل اهتمامك! سنبقيك على اطلاع بآخر المستجدات.
              </p>
            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-center" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link
                href="/ceer/ar/01-preliminary-offers"
                className="px-8 py-3 rounded-xl text-[15px] font-bold text-white"
                style={{ background: 'var(--blue)' }}
              >
                العودة إلى قائمة المنتجات
              </Link>
            </div>
          </div>

          <CeerSidebarAr backHref="/ceer/ar" />

        </div>
      </div>

      <style>{`
        [data-theme="dark"]{--bg:#030b10;--card:#0b1315;--border:rgba(189,189,189,0.2);--text:#dadada;--muted:rgba(189,189,189,0.6);--blue:#ff8204;--heading:#dadada;--highlight:#2e3f46;--green:#1db954;--red:#e5484d;}
        [data-theme="light"]{--bg:#030b10;--card:#0b1315;--border:rgba(189,189,189,0.2);--text:#dadada;--muted:rgba(189,189,189,0.6);--blue:#ff8204;--heading:#dadada;--highlight:#2e3f46;--green:#16a34a;--red:#dc2626;}
        .viewport-warning{background:var(--bg);}
        @media(max-width:1454px),(max-height:1014px){.frame{display:none;}.viewport-warning{display:flex!important;}}
      `}</style>
    </div>
  )
}
