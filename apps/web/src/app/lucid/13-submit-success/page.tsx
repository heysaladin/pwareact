'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

const STEPS = ['Discover Offers', 'Verify Identity', 'Contracts & Disclosures', 'Data Validation', 'Eligible Offers', 'Submit Order'];

export default function SubmitSuccessPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(false);
  const [copied, setCopied] = useState(false);

  const ref = 'TM-2026-001245';

  function copyRef() {
    navigator.clipboard.writeText(ref);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens.</p>
      </div>

      <div className="fixed inset-0 overflow-auto flex items-start justify-center pt-4" style={{ background: dark ? '#000' : '#d1d5db' }}>
        <div className="frame w-[1455px] h-[1015px] overflow-y-auto flex flex-col" style={{ background: 'var(--bg)', color: 'var(--text)' }}>

          {/* Stepper bar — all complete */}
          <div className="shrink-0 px-8 py-[18px] flex items-center justify-between" style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
            <Link href="/lucid/12-submit-order" className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0 mr-4" style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            </Link>
            <div className="flex items-center flex-1">
              {STEPS.map((label, i) => (
                <div key={label} className="flex items-center flex-1">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0" style={{ background: '#16a34a' }}>
                      <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div style={{ lineHeight: 1.3 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>{label}</div>
                      <div style={{ fontSize: 10, color: '#16a34a' }}>Completed</div>
                    </div>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="flex-1 h-px mx-3" style={{ background: 'var(--border)' }} />
                  )}
                </div>
              ))}
            </div>
            <button onClick={() => setDark(d => !d)} className="relative flex items-center shrink-0 ml-6" aria-label="Toggle theme" style={{ width: 44, height: 24 }}>
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

          {/* Hero */}
          <div className="relative shrink-0 flex flex-col items-center justify-center" style={{ height: 330, backgroundImage: "url('/bg-car.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 38% 80% at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0) 100%)' }} />
            <div className="relative z-10 flex flex-col items-center text-center px-8">
              {/* Rings + checkmark */}
              <div className="relative flex items-center justify-center mb-5" style={{ width: 120, height: 120 }}>
                <div className="absolute rounded-full" style={{ width: 120, height: 120, border: '1px solid rgba(22,163,74,0.2)' }} />
                <div className="absolute rounded-full" style={{ width: 94, height: 94, border: '1px solid rgba(22,163,74,0.35)' }} />
                <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center" style={{ background: '#fff', border: '2.5px solid #16a34a' }}>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M6 16l7 7 11-12" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                {/* Dots */}
                <div style={{ position: 'absolute', width: 6, height: 6, borderRadius: '50%', background: '#16a34a', top: 2, left: '50%', transform: 'translateX(-50%)' }} />
                <div style={{ position: 'absolute', width: 5, height: 5, borderRadius: '50%', background: '#16a34a', top: '28%', left: 2 }} />
                <div style={{ position: 'absolute', width: 4, height: 4, borderRadius: '50%', background: '#16a34a', bottom: '20%', right: 0 }} />
                <div style={{ position: 'absolute', width: 5, height: 5, borderRadius: '50%', background: '#16a34a', bottom: 2, left: '35%' }} />
              </div>

              <h1 className="text-[34px] font-extrabold leading-tight" style={{ color: '#0f172a' }}>Order Submitted</h1>
              <p className="text-[15px] font-semibold mt-1.5" style={{ color: '#1a2636' }}>Your order has been submitted successfully!</p>
              <p className="text-[13px] mt-2 max-w-[440px] leading-relaxed" style={{ color: '#64748b' }}>We will notify you once the bank completes the final verification and confirms your order.</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-4 px-8 py-5">

            {/* Reference card */}
            <div className="rounded-[14px] px-7 py-5 flex items-center" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'var(--muted)' }}>Order reference number</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[22px] font-bold" style={{ color: 'var(--text)' }}>{ref}</span>
                  <button onClick={copyRef} className="flex items-center justify-center w-7 h-7 rounded-[6px]" style={{ background: 'var(--highlight)', border: '1px solid var(--border)' }} title="Copy">
                    {copied ? (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="w-px mx-8 self-stretch" style={{ background: 'var(--border)' }} />
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'var(--muted)' }}>Submission date</div>
                <div className="flex items-center gap-2 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  <span className="text-[15px] font-bold" style={{ color: 'var(--text)' }}>14 September 2026</span>
                </div>
                <div className="text-[13px] mt-0.5 ml-6" style={{ color: 'var(--muted)' }}>10:24 AM</div>
              </div>
            </div>

            {/* What happens next */}
            <div className="rounded-[14px] px-7 py-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="text-[15px] font-bold mb-5" style={{ color: 'var(--text)' }}>What happens next?</div>
              <div className="flex items-start">
                {[
                  {
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
                    label: 'Bank verification',
                    desc: 'The bank will conduct final verification.',
                  },
                  {
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>,
                    label: 'Order confirmation',
                    desc: 'You will receive a confirmation once approved.',
                  },
                  {
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
                    label: 'Order processing',
                    desc: 'We will start preparing your vehicle.',
                  },
                  {
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
                    label: 'Order tracking',
                    desc: 'You can track your order status in your account.',
                  },
                ].map((step, i) => (
                  <div key={step.label} className="flex items-start flex-1">
                    <div className="flex flex-col items-start">
                      <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--highlight)', border: '1px solid var(--border)' }}>
                        {step.icon}
                      </div>
                      <div className="mt-3 pr-4">
                        <div className="text-[13px] font-bold" style={{ color: 'var(--text)' }}>{step.label}</div>
                        <div className="text-[12px] mt-1 leading-relaxed" style={{ color: 'var(--muted)' }}>{step.desc}</div>
                      </div>
                    </div>
                    {i < 3 && (
                      <div className="flex items-center mt-6 flex-1 px-2">
                        <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginLeft: 2 }}><path d="M2 5h6M6 3l2 2-2 2" stroke="var(--muted)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-2">
              <button className="w-full py-4 rounded-xl text-[15px] font-bold text-white flex items-center justify-center gap-2" style={{ background: '#111111' }}>
                Track Order <span>→</span>
              </button>
              <Link href="/lucid" className="text-center text-[14px] font-semibold" style={{ color: 'var(--blue)' }}>
                Back to Home
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
      `}</style>
    </div>
  );
}
