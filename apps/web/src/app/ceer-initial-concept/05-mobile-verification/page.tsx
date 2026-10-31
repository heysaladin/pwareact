'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

export default function MobileVerificationPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(true);

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>

      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens.</p>
      </div>

      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>

          <CeerSidebar backHref="/ceer-tamawal/04-nafath-approve" />

          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col p-6 overflow-y-auto">

              {/* Logo row */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt={brandName} className="h-8 w-auto" />
                  <button onClick={() => setDark(d => !d)} className="relative flex items-center shrink-0" style={{ width: 44, height: 24 }}>
                    <span className="absolute inset-0 rounded-full" style={{ background: dark ? '#2a3a4f' : '#dde3ec' }} />
                    <span className="absolute w-[18px] h-[18px] rounded-full shadow" style={{ left: dark ? 23 : 3, top: 3, background: dark ? '#4f95ff' : '#2563eb' }} />
                  </button>
                </div>
                <Link href="/ceer-tamawal/04-nafath-approve" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>← Back</Link>
              </div>

              <h1 className="text-[28px] font-extrabold mb-1" style={{ color: 'var(--heading)' }}>Verifying mobile ownership</h1>
              <p className="text-[15px] mb-5" style={{ color: 'var(--muted)' }}>Your identity has been verified successfully. We are now confirming ownership of your mobile number.</p>

              {/* Status bar */}
              <div className="flex items-center gap-3 rounded-[12px] px-4 py-3 mb-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-[13px]" style={{ color: 'var(--muted)' }}>Verified National ID / Iqama</span>
                  <span className="font-bold text-[13px]">1 •••• •••• 34</span>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold" style={{ background: 'rgba(29,185,84,0.12)', color: 'var(--green)' }}>✓ Nafath identity verified</span>
              </div>

              <div className="flex gap-6">
                {/* Left panel */}
                <div className="flex-[1.4] min-w-0">
                  <div className="rounded-[16px] p-8 flex items-center gap-8" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    {/* Spinning circle */}
                    <div className="relative shrink-0" style={{ width: 130, height: 130 }}>
                      <div className="spin-ring absolute inset-0 rounded-full" />
                      <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>
                        <div className="w-12 h-12 rounded-[12px] flex items-center justify-center text-[24px]" style={{ background: 'var(--highlight)' }}>📱</div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="text-[14px]" style={{ color: 'var(--muted)' }}>Verifying mobile number</div>
                      <div className="text-[24px] font-extrabold mt-2" style={{ letterSpacing: 2 }}>+966 *** *** 1634</div>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="text-[14px] font-semibold" style={{ color: 'var(--blue)' }}>Verifying mobile ownership...</span>
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold" style={{ background: 'var(--highlight)', color: 'var(--blue)' }}>In progress</span>
                      </div>
                      <div className="text-[12.5px] mt-2" style={{ color: 'var(--muted)' }}>This may take a few moments.</div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-[12.5px]" style={{ color: 'var(--muted)' }}>
                    <span>🔒</span>
                    We use secure channels to validate your mobile number.
                  </div>
                </div>

                {/* Right panel */}
                <div className="flex-1 min-w-0 flex flex-col gap-4">
                  {/* About this screen */}
                  <div className="rounded-[16px] p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <h3 className="text-[14px] font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--heading)' }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold" style={{ border: '1px solid var(--blue)', color: 'var(--blue)' }}>i</span>
                      About this screen
                    </h3>
                    <p className="text-[13px] leading-[1.6]" style={{ color: 'var(--muted)' }}>{brandName} is verifying that this mobile number belongs to you. This keeps your account secure.</p>
                  </div>

                  {/* What happens next */}
                  <div className="rounded-[16px] p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <h3 className="text-[14px] font-bold mb-4" style={{ color: 'var(--heading)' }}>What happens next</h3>
                    {[
                      { done: true, label: 'Identity verified with Nafath', sub: 'Completed' },
                      { active: true, label: 'Mobile ownership confirmation', sub: 'In progress' },
                      { pending: true, label: 'Continue to financial assessment', sub: 'Pending' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 py-2 text-[13px]">
                        {item.done
                          ? <span className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5" style={{ background: 'var(--green)', color: '#fff' }}>✓</span>
                          : item.active
                          ? <span className="spinning-dot shrink-0 mt-0.5" />
                          : <span className="w-4 h-4 rounded-full shrink-0 mt-0.5" style={{ border: '2px solid var(--border)' }} />
                        }
                        <div>
                          <div className="font-semibold">{item.label}</div>
                          <div className="text-[11px] mt-0.5" style={{ color: 'var(--muted)' }}>{item.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <div className="text-[12.5px] flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                <span>🔔</span>
                You can safely leave this page, and we&apos;ll notify you when verification is complete.
              </div>
              <Link href="/ceer-tamawal/06-consents-contracts" className="px-8 py-3 rounded-xl text-[15px] font-bold text-white" style={{ background: 'var(--blue)' }}>
                Continue →
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        [data-theme="dark"]{--bg:#0b1420;--card:#121e2e;--border:#2a3a4f;--text:#e6edf5;--muted:#93a4b8;--blue:#4f95ff;--heading:#dbe7f5;--highlight:#16283f;--green:#1db954;--red:#e5484d;}
        [data-theme="light"]{--bg:#f4f6f9;--card:#ffffff;--border:#dde3ec;--text:#1a2636;--muted:#64748b;--blue:#2563eb;--heading:#0f172a;--highlight:#eff6ff;--green:#16a34a;--red:#dc2626;}
        .viewport-warning{background:var(--bg);}
        @media(max-width:1454px),(max-height:1014px){.frame{display:none;}.viewport-warning{display:flex!important;}}
        @keyframes spin{to{transform:rotate(360deg);}}
        .spin-ring{background:conic-gradient(var(--blue) 0deg 270deg,var(--highlight) 270deg 360deg);animation:spin 2.2s linear infinite;}
        .spinning-dot{width:16px;height:16px;border:2px solid var(--blue);border-top-color:transparent;border-radius:50%;animation:spin 1s linear infinite;display:inline-block;}
      `}</style>
    </div>
  );
}
