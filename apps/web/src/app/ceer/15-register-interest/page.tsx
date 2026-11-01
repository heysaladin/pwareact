'use client'
import Link from 'next/link'
import CeerSidebar from '../_components/CeerSidebar'

export default function RegisterInterestPage() {
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
            <div className="flex-1 flex flex-col gap-5 p-6 overflow-y-auto">

              {/* Page title */}
              <div>
                <h1 className="font-['Newsreader',Georgia,serif] text-[38px] font-medium leading-tight" style={{ color: 'var(--heading)' }}>Register your interest</h1>
                <p className="text-[15px] mt-2" style={{ color: 'var(--muted)' }}>This financial institution will join Tamawal's partners soon. Register your interest and we'll notify you once financing is available.</p>
              </div>

              {/* Two-column layout */}
              <div className="flex gap-6 items-start">
                {/* Left: form */}
                <div className="flex-1 flex flex-col gap-4">
                  {/* National ID / Iqama number */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium" style={{ color: 'var(--text)' }}>
                      National ID / Iqama number <span style={{ color: '#e03137' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your National ID or Iqama number"
                      className="rounded-[8px] px-[14px] py-[10px] text-[14px] outline-none"
                      style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    />
                  </div>

                  {/* City */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium" style={{ color: 'var(--text)' }}>
                      City <span style={{ color: '#e03137' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Select your city"
                      className="rounded-[8px] px-[14px] py-[10px] text-[14px] outline-none"
                      style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    />
                  </div>

                  {/* Sector */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium" style={{ color: 'var(--text)' }}>
                      Sector <span style={{ color: '#e03137' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Select your sector"
                      className="rounded-[8px] px-[14px] py-[10px] text-[14px] outline-none"
                      style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    />
                  </div>

                  {/* Entity */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium" style={{ color: 'var(--text)' }}>
                      Entity <span style={{ color: '#e03137' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your entity / employer"
                      className="rounded-[8px] px-[14px] py-[10px] text-[14px] outline-none"
                      style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    />
                  </div>

                  {/* Job title */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium" style={{ color: 'var(--text)' }}>
                      Job title <span style={{ color: '#e03137' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your job title"
                      className="rounded-[8px] px-[14px] py-[10px] text-[14px] outline-none"
                      style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    />
                  </div>

                  {/* Salary bank */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium" style={{ color: 'var(--text)' }}>
                      Salary bank <span style={{ color: '#e03137' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Select your salary bank"
                      className="rounded-[8px] px-[14px] py-[10px] text-[14px] outline-none"
                      style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    />
                  </div>
                </div>

                {/* Right: bank card */}
                <div className="w-[340px] rounded-[14px] p-6 flex flex-col gap-4 shrink-0" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  {/* Shield icon */}
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: 'var(--blue)' }}>
                      <path d="M18 3L5 8v9c0 7.95 5.54 15.19 13 17 7.46-1.81 13-9.05 13-17V8L18 3z" />
                    </svg>
                  </div>

                  {/* Title */}
                  <div>
                    <p className="text-[16px] font-bold leading-snug" style={{ color: 'var(--text)' }}>Microfinance for Employee &amp; their Family Daily Needs</p>
                    <p className="text-[13px] mt-1" style={{ color: 'var(--muted)' }}>by Bank Albilad</p>
                  </div>

                  {/* Blue divider */}
                  <div className="h-[2px] rounded-full w-12" style={{ background: 'var(--blue)' }} />

                  {/* Orange badge */}
                  <div className="inline-flex self-start px-3 py-1 rounded-full" style={{ background: 'var(--highlight)', border: '1px solid var(--blue)' }}>
                    <span className="text-[12px] font-semibold" style={{ color: 'var(--blue)' }}>Joining Tamawal soon</span>
                  </div>

                  {/* Stats rows */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between text-[13px]">
                      <span style={{ color: 'var(--muted)' }}>APR from</span>
                      <span className="font-semibold" style={{ color: 'var(--text)' }}>5.66%</span>
                    </div>
                    <div className="h-px" style={{ background: 'var(--border)' }} />
                    <div className="flex items-center justify-between text-[13px]">
                      <span style={{ color: 'var(--muted)' }}>Installment from</span>
                      <span className="font-semibold" style={{ color: 'var(--text)' }}>SAR 1,250/mo</span>
                    </div>
                    <div className="h-px" style={{ background: 'var(--border)' }} />
                    <div className="flex items-center justify-between text-[13px]">
                      <span style={{ color: 'var(--muted)' }}>Financing up to</span>
                      <span className="font-semibold" style={{ color: 'var(--text)' }}>SAR 250,000</span>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-[11px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                    Rates shown are indicative and subject to credit assessment. Final terms confirmed upon partner availability.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <div className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--muted)' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="10" height="8" rx="1" />
                  <path d="M5 5V4a3 3 0 0 1 6 0v1" />
                  <circle cx="8" cy="9" r="1" fill="currentColor" stroke="none" />
                </svg>
                Your data is encrypted and handled in accordance with SAMA's data protection guidelines.
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/ceer/01-preliminary-offers"
                  className="px-5 py-3 rounded-xl text-[14px] font-bold"
                  style={{ border: '1.5px solid var(--border)', color: 'var(--muted)', background: 'transparent' }}
                >
                  Cancel
                </Link>
                <Link
                  href="/ceer/15b-register-interest-success"
                  className="px-8 py-3 rounded-xl text-[15px] font-bold text-white"
                  style={{ background: 'var(--blue)' }}
                >
                  Register your interest
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        [data-theme="dark"]{--bg:#030b10;--card:#0b1315;--border:rgba(189,189,189,0.2);--text:#dadada;--muted:rgba(189,189,189,0.6);--blue:#ff8204;--heading:#dadada;--highlight:#2e3f46;--green:#1db954;--red:#e5484d;}
        [data-theme="light"]{--bg:#030b10;--card:#0b1315;--border:rgba(189,189,189,0.2);--text:#dadada;--muted:rgba(189,189,189,0.6);--blue:#ff8204;--heading:#dadada;--highlight:#2e3f46;--green:#16a34a;--red:#dc2626;}
        .viewport-warning{background:var(--bg);}
        @media(max-width:1454px),(max-height:1014px){.frame{display:none;}.viewport-warning{display:flex!important;}}
        input::placeholder{color:rgba(189,189,189,0.4);}
      `}</style>
    </div>
  )
}
