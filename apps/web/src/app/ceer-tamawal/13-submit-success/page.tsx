'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

export default function SubmitSuccessPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(true);

  const ref = 'AELG-2026-05-18-1123';
  const date = 'Sunday, 18 May 2026 — 14:37 AST';

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>

      {/* Viewport warning */}
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens. Please open it on a laptop or desktop for the best experience.</p>
      </div>

      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex flex-col items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>

          {/* Header */}
          <header style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }} className="flex items-center justify-between px-8 py-[14px] shrink-0">
            <div className="flex items-center gap-[10px]">
              <img
                src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'}
                alt={brandName}
                className="h-8 w-auto"
              />
              <span className="w-px h-6" style={{ background: 'var(--border)' }} />
              <svg width="141" height="auto" viewBox="0 0 100 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--text)', height: 14 }}>
                <g clipPath="url(#ceer-hdr-13)">
                  <path d="M48.4003 14H25.6232L28.4698 11.1994H45.5529L48.4003 14Z" fill="currentColor"/>
                  <path d="M99.6471 5.5997L96.7994 8.4003H26.8022L21.1079 14H2.84656L0 11.1994V6.98782L2.84656 9.78729V11.1994H19.9293L25.6232 5.5997H99.6471Z" fill="currentColor"/>
                  <path d="M22.7759 0L19.9293 2.79948H2.84656V6.99756L0 4.19809V2.79948L2.84656 0H22.7759Z" fill="currentColor"/>
                  <path d="M48.4003 0L45.5529 2.79948H25.6232V0H48.4003Z" fill="currentColor"/>
                  <path d="M74.0235 0L71.1761 2.79948H54.0941V5.5997H51.2468V0H74.0235Z" fill="currentColor"/>
                  <path d="M79.7173 8.4003H76.87V14H79.7173V8.4003Z" fill="currentColor"/>
                  <path d="M74.0235 14H51.2468V8.4003H54.0941V11.1994H71.1761L74.0235 14Z" fill="currentColor"/>
                  <path d="M99.6471 2.79948V5.5997H96.7994V2.79948H79.7177V5.5997H76.87V0H96.7994L99.6471 2.79948Z" fill="currentColor"/>
                  <path d="M99.6471 14H95.6208L89.9269 8.4003H93.9539L99.6471 14Z" fill="currentColor"/>
                </g>
                <defs><clipPath id="ceer-hdr-13"><rect width="99.6471" height="14" fill="white"/></clipPath></defs>
              </svg>
            </div>
            <button
              onClick={() => setDark(d => !d)}
              className="relative flex items-center shrink-0"
              aria-label="Toggle theme"
              style={{ width: 44, height: 24 }}
            >
              <span className="absolute inset-0 rounded-full transition-colors" style={{ background: dark ? '#2a3a4f' : '#dde3ec' }} />
              <span
                className="absolute flex items-center justify-center w-[18px] h-[18px] rounded-full shadow transition-all"
                style={{ left: dark ? 23 : 3, top: 3, background: dark ? '#4f95ff' : '#2563eb' }}
              >
                {dark ? (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
                  </svg>
                ) : (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                )}
              </span>
            </button>
          </header>

          {/* Stepper — all done */}
          <div className="flex items-center shrink-0 px-8 py-[18px]" style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
            {[
              'Vehicle Selected',
              'Identity Verified',
              'Reports Collected',
              'Offers Generated',
              'Offer Selected',
              'Order Submitted',
            ].map((label, i, arr) => (
              <div key={label} className="flex items-center flex-1">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-[26px] h-[26px] rounded-full border-2 flex items-center justify-center text-[12px] font-bold shrink-0"
                    style={{ background: 'var(--green)', borderColor: 'var(--green)', color: '#fff' }}
                  >
                    ✓
                  </div>
                  <div style={{ lineHeight: 1.3 }}>
                    <b style={{ display: 'block', fontSize: 12 }}>{label}</b>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex-1 h-[2px] mx-2.5" style={{ background: 'var(--green)' }} />
                )}
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto flex items-center justify-center p-8">
            <div className="w-full max-w-[860px] flex flex-col gap-6">

              {/* Success hero */}
              <div className="rounded-[20px] p-10 text-center flex flex-col items-center" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                {/* Animated checkmark circle */}
                <div
                  className="w-[88px] h-[88px] rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'color-mix(in srgb, var(--green) 14%, var(--card))', border: '2.5px solid var(--green)' }}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 21l8 8 16-16" stroke="#1db954" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <h1 className="text-[32px] font-extrabold" style={{ color: 'var(--navy)' }}>Order Successfully Submitted!</h1>
                <p className="mt-3 text-[16px] leading-relaxed max-w-[580px]" style={{ color: 'var(--muted)' }}>
                  Your financing order has been sent to Saudi National Bank for review. You will receive a notification within 1–2 business days with the outcome of your application.
                </p>

                {/* Reference box */}
                <div className="mt-7 rounded-[12px] px-7 py-5 flex items-center gap-8" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                  <div className="text-left">
                    <div className="text-[12px] font-semibold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Order Reference</div>
                    <div className="mt-1 text-[22px] font-extrabold tracking-wide" style={{ color: 'var(--navy)' }}>{ref}</div>
                  </div>
                  <div className="w-px h-10" style={{ background: 'var(--border)' }} />
                  <div className="text-left">
                    <div className="text-[12px] font-semibold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Submitted At</div>
                    <div className="mt-1 text-[15px] font-bold" style={{ color: 'var(--text)' }}>{date}</div>
                  </div>
                  <div className="w-px h-10" style={{ background: 'var(--border)' }} />
                  <div className="text-left">
                    <div className="text-[12px] font-semibold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Bank</div>
                    <div className="mt-1 text-[15px] font-bold" style={{ color: '#1a6b3c' }}>Saudi National Bank</div>
                  </div>
                </div>

                {/* Confirmation note */}
                <div className="mt-5 flex items-center gap-3 text-[13.5px]" style={{ color: 'var(--muted)' }}>
                  <span className="text-[18px]">📧</span>
                  A confirmation has been sent to your registered mobile number and email address.
                </div>
              </div>

              {/* Order Summary + What's next */}
              <div className="flex gap-5">

                {/* Order Summary */}
                <div className="flex-1 rounded-[14px] p-6" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                  <h3 className="text-[16px] font-extrabold mb-4" style={{ color: 'var(--navy)' }}>Order Summary</h3>
                  {[
                    ['Vehicle', 'CEER EXOBOT SUV – Premium AWD 2026'],
                    ['Bank', 'Saudi National Bank (SNB)'],
                    ['Financed Amount', 'SAR 183,000'],
                    ['Down Payment (20%)', 'SAR 45,750'],
                    ['Monthly Payment', 'SAR 3,648'],
                    ['Tenure', '60 Months'],
                    ['Annual Profit Rate', '4.69%'],
                    ['Total Payable', 'SAR 218,880'],
                  ].map(([k, v], i, arr) => (
                    <div
                      key={k}
                      className="flex justify-between py-[9px] text-[13.5px]"
                      style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}
                    >
                      <span style={{ color: 'var(--muted)' }}>{k}</span>
                      <span className="font-bold">{v}</span>
                    </div>
                  ))}
                </div>

                {/* What happens next + Actions */}
                <div className="w-[320px] shrink-0 flex flex-col gap-4">

                  <div className="rounded-[14px] p-6" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <h3 className="text-[16px] font-extrabold mb-4" style={{ color: 'var(--navy)' }}>What Happens Next</h3>
                    {[
                      { icon: '🏦', title: 'Bank Review', desc: 'SNB reviews your application within 1–2 business days.' },
                      { icon: '📱', title: 'Notification', desc: 'You receive an SMS & email with the decision.' },
                      { icon: '✍️', title: 'Final Signing', desc: 'If approved, you complete contract signing digitally.' },
                      { icon: '🚗', title: 'Vehicle Delivery', desc: 'Delivery is arranged with your selected CEER dealer.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 mt-3.5 first:mt-0">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-[16px]"
                          style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-[13px] font-bold">{item.title}</div>
                          <div className="mt-0.5 text-[12.5px] leading-[1.5]" style={{ color: 'var(--muted)' }}>{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3">
                    <button
                      className="w-full rounded-[10px] py-3.5 text-[15px] font-bold text-white"
                      style={{ background: '#f08a1d' }}
                    >
                      Download Order PDF
                    </button>
                    <Link
                      href="/ceer-tamawal"
                      className="w-full rounded-[10px] py-3.5 text-[15px] font-bold text-center"
                      style={{ background: 'var(--card)', border: '1.5px solid var(--blue)', color: 'var(--blue)' }}
                    >
                      Back to Home
                    </Link>
                  </div>

                  {/* Security note */}
                  <div className="rounded-[14px] p-4 flex items-center gap-3" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-[15px]" style={{ background: 'var(--bg)' }}>🛡️</div>
                    <div>
                      <p className="text-[13px] font-bold">Your data is secure</p>
                      <p className="text-[12.5px] mt-0.5" style={{ color: 'var(--muted)' }}>Bank-level encryption protects your information.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        [data-theme="dark"] {
          --bg: #0b1420;
          --card: #121e2e;
          --border: #2a3a4f;
          --text: #e6edf5;
          --muted: #93a4b8;
          --blue: #4f95ff;
          --navy: #dbe7f5;
          --bg-light: #16283f;
          --green: #1db954;
        }
        [data-theme="light"] {
          --bg: #f7f9fc;
          --card: #ffffff;
          --border: #e3e8ef;
          --text: #1c2b3a;
          --muted: #5b6b7c;
          --blue: #1a73f5;
          --navy: #14233c;
          --bg-light: #eaf2fe;
          --green: #1db954;
        }
        .viewport-warning { background: var(--bg); }
        @media (max-width: 1454px), (max-height: 1014px) {
          .frame { display: none; }
          .viewport-warning { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
