'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import LucidStepper from '../_components/LucidStepper';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

export default function VerifyIdPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(false);
  const [nid, setNid] = useState('');

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>

      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens. Please open it on a laptop or desktop.</p>
      </div>

      <div className="fixed inset-0 overflow-auto flex items-start justify-center pt-4" style={{ background: dark ? '#000' : '#d1d5db' }}>
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>

          <CeerSidebar backHref="/lucid/02-what-happens-next" />

          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col p-6">

              {/* Logo row */}
              <div className="flex items-center justify-between mb-5">
                                <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt={brandName} className="h-8 w-auto" />
                <div className="flex items-center gap-4">
  <Link href="/lucid/02-what-happens-next" className="text-[13px] font-semibold flex items-center gap-1" style={{ color: 'var(--muted)' }}>
                    ← Back
                  </Link>
                  <button onClick={() => setDark(d => !d)} className="relative flex items-center shrink-0" aria-label="Toggle theme" style={{ width: 44, height: 24 }}>
                    <span className="absolute inset-0 rounded-full transition-colors" style={{ background: dark ? '#2a3a4f' : '#dde3ec' }} />
                    <span className="absolute flex items-center justify-center w-[18px] h-[18px] rounded-full shadow transition-all" style={{ left: dark ? 23 : 3, top: 3, background: dark ? '#4f95ff' : '#2563eb' }}>
                      {dark ? (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                      ) : (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                      )}
                    </span>
                  </button>
                </div>
              </div>

              <LucidStepper activeStep={3} />

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h1 className="text-[48px] font-normal leading-tight" style={{ color: 'var(--heading)', fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif" }}>Enter your verified ID</h1>
                <p className="mt-3 text-[16px]" style={{ color: 'var(--muted)' }}>To continue, please enter your National ID or Iqama number to verify your identity with Tamawal.</p>

                <div className="mt-10 flex gap-8">
                  {/* Left: input */}
                  <div style={{ flex: 1, maxWidth: 560 }}>
                    <label className="block text-[15px] font-bold mb-3" style={{ color: 'var(--text)' }}>National ID / Iqama number</label>
                    <div
                      className="flex items-center gap-3 rounded-[10px] px-[17px] py-[17px]"
                      style={{ border: `2px solid ${nid ? 'var(--blue)' : 'var(--border)'}`, background: 'var(--card)' }}
                    >
                      <svg width="24" height="18" viewBox="0 0 32 22" fill="none" style={{ flexShrink: 0, opacity: 0.5 }}>
                        <rect x="1" y="1" width="30" height="20" rx="3" fill="#1a3a5c" stroke="#1a3a5c"/>
                        <rect x="4" y="5" width="10" height="7" rx="1" fill="#2a5a8c"/>
                        <line x1="17" y1="7" x2="27" y2="7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="17" y1="10" x2="24" y2="10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="4" y1="15" x2="27" y2="15" stroke="white" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5"/>
                      </svg>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="1234 567 890"
                        value={nid}
                        onChange={e => setNid(e.target.value)}
                        autoFocus
                        className="flex-1 min-w-0 bg-transparent border-none outline-none text-[18px]"
                        style={{ color: 'var(--text)' }}
                      />
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ border: '1.5px solid var(--muted)' }}>
                        <span style={{ fontSize: 9, color: 'var(--muted)', fontWeight: 700 }}>i</span>
                      </div>
                      <p className="text-[13px]" style={{ color: 'var(--muted)' }}>We will verify your identity securely with government systems.</p>
                    </div>
                  </div>

                  {/* Right: secure card */}
                  <div className="rounded-[16px] px-8 py-8 flex flex-col items-start" style={{ width: 340, background: 'var(--highlight)', flexShrink: 0 }}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(37,99,235,0.12)' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <h3 className="text-[17px] font-bold mb-2" style={{ color: 'var(--text)' }}>Secure Verification</h3>
                    <p className="text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }}>Your information is encrypted and shared only with authorized government services to verify your identity.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-end gap-4" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link href="/lucid/02-what-happens-next" className="px-6 py-3 text-[15px] font-semibold" style={{ color: 'var(--blue)' }}>
                Cancel
              </Link>
              <Link
                href="/lucid/04-nafath-approve"
                className="px-8 py-3 rounded-xl text-[15px] font-bold text-white flex items-center gap-3"
                style={{ background: '#111111' }}
              >
                Continue <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        [data-theme="dark"]{--bg:#0b1420;--card:#121e2e;--border:#2a3a4f;--text:#e6edf5;--muted:#93a4b8;--blue:#4f95ff;--heading:#dbe7f5;--highlight:#16283f;--green:#1db954;}
        [data-theme="light"]{--bg:#f4f6f9;--card:#ffffff;--border:#dde3ec;--text:#1a2636;--muted:#64748b;--blue:#2563eb;--heading:#0f172a;--highlight:#eff6ff;--green:#16a34a;}
        .viewport-warning{background:var(--bg);}
        @media(max-width:1454px),(max-height:1014px){.frame{display:none;}.viewport-warning{display:flex!important;}}
        input::placeholder{color:var(--muted);}
      `}</style>
    </div>
  );
}
