'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import LucidStepper from '../_components/LucidStepper';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

export default function NafathApprovePage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(false);
  const [secs, setSecs] = useState(162);

  useEffect(() => {
    const t = setInterval(() => setSecs(s => s > 0 ? s - 1 : 0), 1000);
    return () => clearInterval(t);
  }, []);

  const mins = String(Math.floor(secs / 60)).padStart(2, '0');
  const ss = String(secs % 60).padStart(2, '0');
  const resendMins = String(Math.floor(Math.max(0, secs - 120) / 60)).padStart(2, '0');
  const resendSs = String(Math.max(0, secs - 120) % 60).padStart(2, '0');

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>

      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens.</p>
      </div>

      <div className="fixed inset-0 overflow-auto flex items-start justify-center pt-4" style={{ background: dark ? '#000' : '#d1d5db' }}>
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>

          <CeerSidebar backHref="/lucid/03-verify-id" />

          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col p-6 overflow-y-auto">

              {/* Logo row */}
              <div className="flex items-center justify-between mb-5">
                <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt={brandName} className="h-8 w-auto" />
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

              <LucidStepper activeStep={3} />

              <h1 className="text-[46px] font-normal leading-tight mb-2" style={{ color: 'var(--heading)', fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif" }}>Approve your identity in Nafath</h1>
              <p className="text-[16px] mb-5" style={{ color: 'var(--muted)' }}>A secure verification request has been sent to your Nafath application to verify your identity.</p>

              {/* 2-column body */}
              <div className="flex gap-6">

                {/* Left 50%: verified bar + code card */}
                <div className="flex-1 min-w-0 flex flex-col gap-4">

                  {/* Verified ID bar */}
                  <div className="flex items-center gap-3 rounded-[12px] px-4 py-3" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: '#16a34a' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-[13px] font-medium" style={{ color: 'var(--text)' }}>Verified National ID / Iqama</span>
                    <span className="ml-auto font-bold text-[13px]" style={{ color: 'var(--text)' }}>1 ••••••••• 34</span>
                  </div>

                  {/* Code card */}
                  <div className="rounded-[16px] overflow-hidden flex-1 flex flex-col" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="px-6 pt-5 pb-4 flex-1 flex flex-col justify-center items-center">
                      <p className="text-[13px] text-center mb-4" style={{ color: 'var(--muted)' }}>Verification number</p>
                      <div className="flex items-center gap-5">
                        <div className="flex gap-3">
                          {['6', '7'].map(n => (
                            <div key={n} className="w-[72px] h-[72px] rounded-[12px] flex items-center justify-center text-[40px] font-bold" style={{ border: '1.5px solid var(--border)', color: 'var(--blue)', background: 'var(--highlight)' }}>{n}</div>
                          ))}
                        </div>
                        <div>
                          <div className="text-[22px] font-bold" style={{ color: 'var(--text)' }}>{mins}:{ss}</div>
                          <div className="text-[12px]" style={{ color: 'var(--muted)' }}>Time remaining</div>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-3 flex items-center justify-center gap-2 text-[13px] font-semibold" style={{ borderTop: '1px solid var(--border)', color: 'var(--muted)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                      </svg>
                      Waiting for your approval...
                    </div>
                  </div>

                </div>

                {/* Right 50%: phone mockup + security notes */}
                <div className="flex gap-6 flex-1 min-w-0">
                  {/* Phone mockup */}
                  <div className="flex items-center justify-center rounded-[20px] flex-1" style={{ background: 'var(--highlight)', minHeight: 0 }}>
                    <div style={{ width: 200, border: '10px solid #111', borderRadius: 32, background: '#fff', boxShadow: '0 20px 50px rgba(0,0,0,0.35)', overflow: 'hidden' }}>
                      <div style={{ width: 70, height: 14, background: '#111', borderRadius: '0 0 8px 8px', margin: '0 auto' }} />
                      <div style={{ padding: '20px 16px 24px', textAlign: 'center' }}>
                        <div style={{ fontSize: 13, fontWeight: 800, color: '#16a34a', lineHeight: 1.2 }}>
                          <div style={{ fontSize: 12 }}>نفاذ</div>
                          Nafath
                        </div>
                        <div style={{ fontSize: 11, color: '#666', marginTop: 14, lineHeight: 1.5 }}>Verify your identity in your<br/>Nafath app</div>
                        <div style={{ fontSize: 11, color: '#888', marginTop: 10 }}>A verification request from</div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#111', marginTop: 3 }}>Tamawal Financing</div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 14 }}>
                          {['6', '7'].map(n => (
                            <div key={n} style={{ width: 44, height: 44, borderRadius: 10, border: '1.5px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 700, color: '#111' }}>{n}</div>
                          ))}
                        </div>
                        <button style={{ marginTop: 14, width: '100%', padding: '10px 0', borderRadius: 10, background: '#2563eb', color: '#fff', fontSize: 13, fontWeight: 700, border: 'none', cursor: 'pointer' }}>Approve</button>
                        <button style={{ marginTop: 8, width: '100%', padding: '8px 0', borderRadius: 10, background: 'transparent', color: '#555', fontSize: 13, fontWeight: 500, border: 'none', cursor: 'pointer' }}>Reject</button>
                      </div>
                    </div>
                  </div>

                  {/* Security notes */}
                  <div className="flex flex-col gap-6 justify-center" style={{ width: 200, flexShrink: 0 }}>
                    {[
                      {
                        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                        text: "You'll receive a verification request in your Nafath application.",
                      },
                      {
                        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
                        text: 'Log in to Nafath and approve the request using the verification number shown.',
                      },
                      {
                        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                        text: 'Your information is secure and used only for this financing journey.',
                      },
                    ].map(({ icon, text }, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--highlight)', border: '1px solid var(--border)' }}>
                          {icon}
                        </div>
                        <p className="text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* How to approve + action links — full width below */}
              <div className="mt-5 flex flex-col gap-4">
                <div>
                  <h3 className="text-[15px] font-bold mb-3" style={{ color: 'var(--text)' }}>How to approve</h3>
                  <ol className="flex flex-col gap-3">
                    {[
                      ['Open the Nafath application', null],
                      ['Review the identity verification request', null],
                      ['Enter the verification number', '6 7'],
                      ['Approve the request', null],
                      ['Return to this page with verification confirmed', null],
                    ].map(([label, badge], i) => (
                      <li key={i} className="flex items-center gap-3 text-[13.5px]">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0" style={{ background: 'var(--blue)', color: '#fff' }}>{i + 1}</div>
                        <span style={{ color: 'var(--text)' }}>
                          {label}
                          {badge && (
                            <span className="inline-flex gap-1.5 ml-2">
                              {badge.split(' ').map((n: string) => (
                                <span key={n} className="inline-flex items-center justify-center w-6 h-6 rounded text-[12px] font-bold" style={{ background: 'var(--highlight)', color: 'var(--blue)', border: '1px solid var(--blue)' }}>{n}</span>
                              ))}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex items-center gap-3 text-[13px] font-semibold flex-wrap pt-2" style={{ borderTop: '1px solid var(--border)' }}>
                  <button className="flex items-center gap-1.5 cursor-pointer" style={{ color: 'var(--blue)', background: 'none', border: 'none', padding: 0 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>
                    Resend request ({resendMins}:{resendSs})
                  </button>
                  <span style={{ color: 'var(--border)' }}>|</span>
                  <button className="flex items-center gap-1.5 cursor-pointer" style={{ color: 'var(--red)', background: 'none', border: 'none', padding: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    Cancel verification
                  </button>
                  <span style={{ color: 'var(--border)' }}>|</span>
                  <Link href="/lucid/03-verify-id" className="flex items-center gap-1.5" style={{ color: 'var(--blue)' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    Change National ID / Iqama
                  </Link>
                </div>
              </div>

            </div>
            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-end gap-4" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link href="/lucid/03-verify-id" className="px-6 py-3 text-[15px] font-semibold" style={{ color: 'var(--blue)' }}>
                Cancel
              </Link>
              <Link href="/lucid/05-mobile-verification" className="px-8 py-3 rounded-xl text-[15px] font-bold text-white flex items-center gap-3" style={{ background: '#111111' }}>
                Continue <span>→</span>
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
      `}</style>
    </div>
  );
}
