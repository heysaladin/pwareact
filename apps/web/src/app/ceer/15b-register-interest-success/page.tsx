'use client'
import Link from 'next/link'
import CeerSidebar from '../_components/CeerSidebar'

export default function RegisterInterestSuccessPage() {
  return (
    <div data-theme="dark" style={{ fontFamily: "'ceerBeta3Font', Arial, sans-serif" }}>

      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens. Please open it on a laptop or desktop.</p>
      </div>

      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>

          <CeerSidebar backHref="/ceer" />

          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6 overflow-y-auto">

              {/* Checkmark illustration */}
              <div className="w-[180px] h-[180px] flex items-center justify-center text-[80px]">
                ✅
              </div>

              {/* Title */}
              <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium text-center w-[620px] leading-tight" style={{ color: 'var(--heading)' }}>
                Your interest has been successfully registered!
              </h1>

              {/* Body text */}
              <p className="text-[15px] text-center w-[520px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                Your interest has been registered in the Tamawal system. Thank you for registering your interest! We will keep you updated.
              </p>
            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-center" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link
                href="/ceer/01-preliminary-offers"
                className="px-8 py-3 rounded-xl text-[15px] font-bold text-white"
                style={{ background: 'var(--blue)' }}
              >
                Back to the product list
              </Link>
            </div>
          </div>

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
