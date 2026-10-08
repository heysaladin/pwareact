'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import LucidStepper from '../_components/LucidStepper';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

type Status = 'pending' | 'loading' | 'done';

const LOADING_DURATION = 1200;
const START_DELAY = 800;

const providers = [
  { id: 'simah',      name: 'SIMAH',      desc: 'Credit report & financial obligations', logo: '/logo-simah.png',  bg: '#F5F3FF' },
  { id: 'gosi',       name: 'GOSI',       desc: 'Employment & salary information',       logo: '/logo-gosi.png',   bg: '#EFF6FF' },
  { id: 'masdr',      name: 'MASDR',      desc: 'Income verification',                   logo: '/logo-masdr.png',  bg: '#FFFBEB' },
  { id: 'tawakkalna', name: 'Tawakkalna', desc: 'Identity & profile verification',       logo: '/logo-tawakkalna.png', bg: '#E8F5E9' },
  { id: 'elm',        name: 'ELM',        desc: 'Car history',                           logo: '/logo-elm.png',       bg: '#FEE2E2' },
];

export default function CollectingReportsPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(false);
  const [statuses, setStatuses] = useState<Status[]>(providers.map(() => 'pending'));

  const doneCount = statuses.filter(s => s === 'done').length;
  const allDone = doneCount === providers.length;
  const progressPct = (doneCount / providers.length) * 100;

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    providers.forEach((_, i) => {
      const loadingAt = START_DELAY + i * (LOADING_DURATION + 200);
      const doneAt = loadingAt + LOADING_DURATION;
      timers.push(setTimeout(() => {
        setStatuses(prev => prev.map((s, idx) => idx === i ? 'loading' : s));
      }, loadingAt));
      timers.push(setTimeout(() => {
        setStatuses(prev => prev.map((s, idx) => idx === i ? 'done' : s));
      }, doneAt));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens.</p>
      </div>

      <div className="fixed inset-0 overflow-auto flex items-start justify-center pt-4" style={{ background: dark ? '#000' : '#d1d5db' }}>
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebar backHref="/lucid/07-personal-details" />
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

              <LucidStepper activeStep={5} />

              {/* Header row — full width */}
              <div className="mb-4">
                <h1 className="text-[44px] font-normal leading-tight mb-2" style={{ color: 'var(--heading)', fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif" }}>Collecting your reports</h1>
                <p className="text-[16px]" style={{ color: 'var(--muted)' }}>We are securely connecting with trusted government and financial providers to collect your credit and employment information.</p>
              </div>

              {/* Two columns */}
              <div className="flex gap-6 flex-1 min-h-0">

                {/* Left */}
                <div className="flex-[1.5] min-w-0 flex flex-col gap-4">

                  {/* Connecting bar */}
                  <div className="rounded-[14px] px-5 py-4" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" className="spinner shrink-0">
                        <path d="M21 12a9 9 0 11-6.219-8.56"/>
                      </svg>
                      <div>
                        <div className="text-[14px] font-bold" style={{ color: 'var(--text)' }}>Connecting to third-party providers...</div>
                        <div className="text-[12px]" style={{ color: 'var(--muted)' }}>This may take up to 60 seconds. Please do not close this page.</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progressPct}%`, background: 'var(--blue)' }} />
                      </div>
                      <span className="text-[12px] font-semibold shrink-0" style={{ color: 'var(--muted)' }}>{doneCount} of {providers.length} completed</span>
                    </div>
                  </div>

                  {/* Provider cards */}
                  <div className="flex flex-col gap-2.5">
                    {providers.map((p, i) => {
                      const status = statuses[i];
                      return (
                        <div
                          key={p.id}
                          className="rounded-[14px] px-5 py-4 flex items-center gap-4 transition-colors"
                          style={{
                            background: status === 'done' ? 'var(--card)' : 'var(--card)',
                            border: `1px solid ${status === 'done' ? 'rgba(22,163,74,0.25)' : status === 'loading' ? 'var(--blue)' : 'var(--border)'}`,
                          }}
                        >
                          {/* Logo */}
                          <div className="w-14 h-14 rounded-[12px] flex items-center justify-center shrink-0 overflow-hidden" style={{ background: p.bg }}>
                            {p.logo
                              ? <img src={p.logo} alt={p.name} className="w-full h-full object-contain p-2" />
                              : <span className="text-[12px] font-black" style={{ color: '#374151' }}>{p.name.slice(0, 3)}</span>
                            }
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="text-[15px] font-bold" style={{ color: 'var(--text)' }}>{p.name}</div>
                            <div className="text-[13px] mt-0.5" style={{ color: 'var(--muted)' }}>{p.desc}</div>
                          </div>

                          {/* Status */}
                          <div className="flex items-center gap-2 shrink-0">
                            {status === 'done' && (
                              <>
                                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#16a34a' }}>
                                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </div>
                                <span className="text-[13px] font-semibold" style={{ color: '#16a34a' }}>Completed</span>
                              </>
                            )}
                            {status === 'loading' && (
                              <>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" className="spinner">
                                  <circle cx="12" cy="12" r="9" strokeOpacity="0.25"/>
                                  <path d="M12 3a9 9 0 0 1 9 9"/>
                                </svg>
                                <span className="text-[13px] font-semibold" style={{ color: 'var(--blue)' }}>In progress</span>
                              </>
                            )}
                            {status === 'pending' && (
                              <>
                                <div className="w-6 h-6 rounded-full" style={{ border: '2px solid var(--border)' }} />
                                <span className="text-[13px]" style={{ color: 'var(--muted)' }}>Pending</span>
                              </>
                            )}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: 'var(--border)', marginLeft: 4 }}>
                              <polyline points="6 9 12 15 18 9"/>
                            </svg>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom info */}
                  <div className="rounded-[12px] px-4 py-3 flex items-center gap-2.5" style={{ background: 'var(--highlight)', border: '1px solid var(--border)' }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--blue)' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    </div>
                    <span className="text-[13px]" style={{ color: 'var(--muted)' }}>We&apos;ll notify you once all reports are collected and the validation is complete. This usually takes less than a minute.</span>
                  </div>
                </div>

                {/* Right */}
                <div className="flex-1 min-w-0 flex flex-col gap-4">
                  <div className="rounded-[16px] p-5" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <h3 className="text-[15px] font-bold mb-4" style={{ color: 'var(--text)' }}>What happens next?</h3>
                    {[
                      { n: '1', label: 'We collect your information', desc: 'Securely retrieve your data from authorized providers.' },
                      { n: '2', label: 'We validate your eligibility', desc: 'Your information is analyzed to ensure fitting your financing eligibility.' },
                      { n: '3', label: "You'll see your offers", desc: 'Once complete, compare preliminary financing offers.' },
                    ].map(step => (
                      <div key={step.n} className="flex gap-3 mt-3.5 text-[13px]">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 text-white" style={{ background: 'var(--blue)' }}>{step.n}</div>
                        <div>
                          <div className="font-bold" style={{ color: 'var(--text)' }}>{step.label}</div>
                          <div className="mt-0.5" style={{ color: 'var(--muted)' }}>{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[16px] px-5 py-4 flex items-center gap-3" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" style={{ flexShrink: 0 }}>
                      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    <p className="text-[13px]" style={{ color: 'var(--muted)' }}>Your information remains secure and encrypted throughout the process.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-end" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              {allDone ? (
                <Link href="/lucid/09-eligibility-offers" className="px-8 py-3 rounded-xl text-[15px] font-bold text-white" style={{ background: '#111111' }}>
                  Continue →
                </Link>
              ) : (
                <span className="px-8 py-3 rounded-xl text-[15px] font-bold text-white cursor-not-allowed select-none" style={{ background: '#9ca3af' }}>
                  Continue →
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        [data-theme="dark"]{--bg:#0b1420;--card:#121e2e;--border:#2a3a4f;--text:#e6edf5;--muted:#93a4b8;--blue:#4f95ff;--heading:#dbe7f5;--highlight:#16283f;--green:#1db954;}
        [data-theme="light"]{--bg:#f4f6f9;--card:#ffffff;--border:#dde3ec;--text:#1a2636;--muted:#64748b;--blue:#2563eb;--heading:#0f172a;--highlight:#eff6ff;--green:#16a34a;}
        .viewport-warning{background:var(--bg);}
        @media(max-width:1454px),(max-height:1014px){.frame{display:none;}.viewport-warning{display:flex!important;}}
        @keyframes spin{to{transform:rotate(360deg);}}
        .spinner{animation:spin 1s linear infinite;}
      `}</style>
    </div>
  );
}
