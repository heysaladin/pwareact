'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import LucidStepper from '../_components/LucidStepper';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

const OTP_LENGTH = 6;
const RESEND_SECONDS = 45;
const PREFILL = ['2', '7', '4', '9', '1', '6'];

export default function SubmitOrderPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(false);
  const [otp, setOtp] = useState<string[]>(PREFILL);
  const [focusIdx, setFocusIdx] = useState(5);
  const [countdown, setCountdown] = useState(RESEND_SECONDS);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown === 0) return;
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  const handleKey = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      const next = [...otp];
      next[i] = '';
      setOtp(next);
      if (i > 0) { inputRefs.current[i - 1]?.focus(); setFocusIdx(i - 1); }
    }
  };

  const handleChange = (i: number, val: string) => {
    const digit = val.replace(/\D/g, '').slice(-1);
    const next = [...otp];
    next[i] = digit;
    setOtp(next);
    if (digit && i < OTP_LENGTH - 1) { inputRefs.current[i + 1]?.focus(); setFocusIdx(i + 1); }
  };

  const mm = String(Math.floor(countdown / 60)).padStart(2, '0');
  const ss = String(countdown % 60).padStart(2, '0');

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens.</p>
      </div>

      <div className="fixed inset-0 overflow-auto flex items-start justify-center pt-4" style={{ background: dark ? '#000' : '#d1d5db' }}>
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebar backHref="/lucid/11-offer-details" />
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

              <LucidStepper activeStep={6} />

              {/* Header — full width */}
              <div className="mb-4">
                <h1 className="text-[44px] font-normal leading-tight mb-2" style={{ color: 'var(--heading)', fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif" }}>Confirm your order</h1>
                <p className="text-[16px]" style={{ color: 'var(--muted)' }}>You are almost done! Please confirm your order by entering the one-time password (OTP) sent to your registered mobile number.</p>
              </div>

              {/* Two-col layout */}
              <div className="flex gap-6 flex-1 min-h-0">

                {/* Left */}
                <div className="flex-1 min-w-0 flex flex-col gap-4">

                  {/* Info bar */}
                  <div className="flex items-start gap-3 rounded-[12px] px-4 py-3.5" style={{ background: 'var(--highlight)', border: '1px solid var(--border)' }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'var(--blue)' }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    </div>
                    <p className="text-[13px]" style={{ color: 'var(--text)' }}>For your security, we have sent a one-time password (OTP) to your mobile number registered with Absher.</p>
                  </div>

                  {/* OTP */}
                  <div>
                    <div className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text)' }}>Enter OTP</div>
                    <div className="flex gap-3">
                      {Array.from({ length: OTP_LENGTH }).map((_, i) => (
                        <input
                          key={i}
                          ref={el => { inputRefs.current[i] = el; }}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={otp[i] || ''}
                          onChange={e => handleChange(i, e.target.value)}
                          onKeyDown={e => handleKey(i, e)}
                          onFocus={() => setFocusIdx(i)}
                          className="w-[64px] h-[64px] text-center text-[24px] font-bold rounded-[12px] outline-none"
                          style={{
                            border: `2px solid ${focusIdx === i ? 'var(--blue)' : 'var(--border)'}`,
                            background: 'var(--card)',
                            color: 'var(--text)',
                          }}
                        />
                      ))}
                    </div>
                    <div className="mt-3 text-[13px]" style={{ color: 'var(--muted)' }}>
                      Didn&apos;t receive the code? Resend OTP in{' '}
                      <span className="font-bold" style={{ color: 'var(--blue)' }}>{mm}:{ss}</span>
                    </div>
                  </div>

                  {/* Order summary */}
                  <div className="rounded-[14px] p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-[15px] font-bold" style={{ color: 'var(--text)' }}>Order summary</div>
                        <div className="text-[12px] mt-0.5" style={{ color: 'var(--muted)' }}>Review your selected offer and vehicle details before confirming.</div>
                      </div>
                      <button className="flex items-center gap-1.5 text-[12px] font-semibold" style={{ color: 'var(--blue)' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        Edit
                      </button>
                    </div>

                    <div className="flex gap-5">
                      {/* Bank + financing */}
                      <div className="flex-1 min-w-0">
                        <img src="/logo-alahli.png" alt="SNB" style={{ height: 32, maxWidth: 100, objectFit: 'contain', marginBottom: 6 }} />
                        <div className="text-[12px] font-bold mb-3" style={{ color: 'var(--text)' }}>Saudi National Bank</div>
                        {[
                          ['Annual Profit Rate (APR)', '4.89%'],
                          ['Monthly Payment', 'SAR 3,648'],
                          ['Tenure', '60 months'],
                          ['Amount Financed', 'SAR 183,000'],
                          ['Down Payment (20%)', 'SAR 45,750'],
                          ['Total Payable', 'SAR 218,880'],
                        ].map(([k, v]) => (
                          <div key={k} className="flex justify-between py-1.5 text-[12px]" style={{ borderBottom: '1px solid var(--border)' }}>
                            <span style={{ color: 'var(--muted)' }}>{k}</span>
                            <span className="font-semibold" style={{ color: 'var(--text)' }}>{v}</span>
                          </div>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="w-px self-stretch" style={{ background: 'var(--border)' }} />

                      {/* Vehicle */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-4">
                          <img src="/lucid-car.webp" alt="Lucid Air" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
                          <span className="text-[13px] font-bold" style={{ color: 'var(--text)' }}>Lucid Air Touring 2026</span>
                        </div>
                        {[
                          ['Vehicle Price (incl. VAT)', null, 'SAR 228,750'],
                          ['Exterior Color', '#1a3a5c', 'Fathom Blue Metallic'],
                          ['Interior Theme', '#8B6914', 'Tahoe'],
                          ['Wheels', '#111', '20" Aero Lite'],
                        ].map(([label, color, value]) => (
                          <div key={label} className="flex items-center justify-between py-1.5 text-[12px]" style={{ borderBottom: '1px solid var(--border)' }}>
                            <span style={{ color: 'var(--muted)' }}>{label}</span>
                            <div className="flex items-center gap-2">
                              {color && <div className="w-4 h-4 rounded-full shrink-0" style={{ background: color }} />}
                              <span className="font-semibold" style={{ color: 'var(--text)' }}>{value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right */}
                <div className="flex flex-col gap-4 shrink-0" style={{ width: 280 }}>
                  <div className="rounded-[14px] p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="text-[14px] font-bold mb-4" style={{ color: 'var(--text)' }}>What happens next?</div>
                    {[
                      { label: 'Order creation', desc: 'We will confirm your order and reserve the vehicle.' },
                      { label: 'Bank verification', desc: 'The bank will conduct final verification.' },
                      { label: 'Order confirmation', desc: 'You will receive a confirmation once your order is approved.' },
                      { label: 'Order tracking', desc: 'You can track your order status in your account.' },
                    ].map((step, i) => (
                      <div key={i} className="flex gap-3 mb-4 last:mb-0">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5 text-white shrink-0" style={{ background: 'var(--blue)' }}>{i + 1}</div>
                        <div>
                          <div className="text-[13px] font-bold" style={{ color: 'var(--text)' }}>{step.label}</div>
                          <div className="text-[12px] mt-0.5 leading-relaxed" style={{ color: 'var(--muted)' }}>{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex flex-col items-center gap-2" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link href="/lucid/13-submit-success" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-[15px] font-bold text-white" style={{ background: 'var(--blue)' }}>
                Confirm &amp; Create Order <span>→</span>
              </Link>
              <div className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--muted)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                Your information remains secure and encrypted throughout the process.
              </div>
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
