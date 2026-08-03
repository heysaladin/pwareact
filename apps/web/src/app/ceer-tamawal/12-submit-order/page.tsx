'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';

export default function SubmitOrderPage() {
  const [dark, setDark] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit() {
    if (!agreed) return;
    setSubmitting(true);
    setTimeout(() => {
      window.location.href = '/ceer-tamawal/13-submit-success';
    }, 1200);
  }

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
                alt="Tamawal"
                className="h-8 w-auto"
              />
              <span className="w-px h-6" style={{ background: 'var(--border)' }} />
              <svg width="141" height="auto" viewBox="0 0 100 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--text)', height: 14 }}>
                <g clipPath="url(#ceer-hdr-12)">
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
                <defs><clipPath id="ceer-hdr-12"><rect width="99.6471" height="14" fill="white"/></clipPath></defs>
              </svg>
            </div>
            <div className="flex items-center gap-6">
              <div style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'right', lineHeight: 1.4 }}>
                Assessment ID<br/>
                <b style={{ color: 'var(--text)' }}>AELG-2026-05-18-1123</b>
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
            </div>
          </header>

          {/* Stepper */}
          <div className="flex items-center shrink-0 px-8 py-[18px]" style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
            {[
              { label: 'Vehicle Selected', done: true },
              { label: 'Identity Verified', done: true },
              { label: 'Reports Collected', done: true },
              { label: 'Offers Generated', done: true },
              { label: 'Offer Selected', done: true },
              { label: 'Submit Order', active: true },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex items-center flex-1">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-[26px] h-[26px] rounded-full border-2 flex items-center justify-center text-[12px] font-bold shrink-0"
                    style={
                      step.done
                        ? { background: 'var(--green)', borderColor: 'var(--green)', color: '#fff' }
                        : step.active
                        ? { borderColor: 'var(--blue)', color: 'var(--blue)', background: 'var(--card)' }
                        : { borderColor: 'var(--border)', color: 'var(--muted)', background: 'var(--card)' }
                    }
                  >
                    {step.done ? '✓' : i + 1}
                  </div>
                  <div style={{ lineHeight: 1.3 }}>
                    <b style={{ display: 'block', fontSize: 12, color: step.active ? 'var(--blue)' : 'var(--text)' }}>{step.label}</b>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex-1 h-[2px] mx-2.5" style={{ background: step.done ? 'var(--green)' : 'var(--border)' }} />
                )}
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="flex flex-1 min-h-0">
            <CeerSidebar backHref="/ceer-tamawal/11-offer-details" backLabel="Back to Offer Details" />

            {/* Main */}
            <div className="flex-1 min-w-0 flex flex-col overflow-y-auto">
              <div className="flex-1 p-8">

                <Link href="/ceer-tamawal/11-offer-details" className="inline-flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: 'var(--blue)' }}>
                  ‹ Back to Offer Details
                </Link>

                <h1 className="mt-4 text-[28px] font-extrabold" style={{ color: 'var(--navy)' }}>Review &amp; Submit Order</h1>
                <p className="mt-2.5 text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                  Please review the details of your financing order before submitting. Once submitted, the bank will begin processing your application.
                </p>

                <div className="mt-6 flex gap-6 items-start">

                  {/* Left column */}
                  <div className="flex-1 min-w-0 flex flex-col gap-5">

                    {/* Bank & Offer Summary */}
                    <div className="rounded-[14px] p-6" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                      <div className="flex items-center gap-4">
                        <div
                          className="w-[62px] h-[62px] shrink-0 rounded-[12px] flex items-center justify-center text-center font-extrabold text-[15px] leading-[1.2]"
                          style={{ border: '1px solid var(--border)', color: '#1a6b3c' }}
                        >
                          SNB<br/>الأهلي
                        </div>
                        <div>
                          <div className="text-[21px] font-extrabold" style={{ color: 'var(--navy)' }}>Saudi National Bank</div>
                          <span
                            className="mt-1.5 inline-flex items-center rounded-full px-3 py-[5px] text-[12px] font-semibold"
                            style={{ border: '1px solid var(--blue)', color: 'var(--blue)' }}
                          >
                            ✓ Selected Offer
                          </span>
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-4 gap-3">
                        {[
                          { label: 'Annual Profit Rate (APR)', value: '4.69%', blue: true },
                          { label: 'Monthly Payment', value: 'SAR 3,648', blue: false },
                          { label: 'Total Payable', value: 'SAR 218,880', blue: false },
                          { label: 'Down Payment', value: 'SAR 45,750', blue: false },
                        ].map(stat => (
                          <div key={stat.label} className="rounded-[12px] p-4" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                            <div className="text-[12px]" style={{ color: 'var(--muted)' }}>{stat.label}</div>
                            <div className="mt-[5px] text-[19px] font-extrabold" style={{ color: stat.blue ? 'var(--blue)' : 'var(--text)' }}>{stat.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {['✓ No Processing Fees', '✓ Early Settlement Benefit', '✓ Free Comprehensive Insurance', '✓ Advanced Digital Services'].map(chip => (
                          <span
                            key={chip}
                            className="inline-flex items-center gap-1.5 rounded-full px-[14px] py-[7px] text-[12.5px] font-semibold"
                            style={{ background: 'var(--bg)', color: 'var(--blue)' }}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Order Details */}
                    <div className="rounded-[14px] p-6" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                      <h3 className="text-[16px] font-extrabold mb-3" style={{ color: 'var(--navy)' }}>Order Details</h3>
                      {[
                        ['Customer Name', 'محمد عبدالله الغامدي'],
                        ['National ID', '1082XXXXXXX'],
                        ['Mobile', '+966 5X XXX XXXX'],
                        ['Vehicle', 'CEER EXOBOT SUV – Premium AWD 2026'],
                        ['Colour', 'Quantum Grey'],
                        ['Dealer', 'CEER Showroom, Riyadh'],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between py-[9px] text-[13.5px]" style={{ borderBottom: '1px solid var(--border)' }}>
                          <span style={{ color: 'var(--muted)' }}>{k}</span>
                          <span className="font-bold">{v}</span>
                        </div>
                      ))}
                      <div className="flex justify-between py-[9px] text-[13.5px]">
                        <span style={{ color: 'var(--muted)' }}>Order Reference</span>
                        <span className="font-bold">AELG-2026-05-18-1123</span>
                      </div>
                    </div>

                    {/* Payment Schedule Preview */}
                    <div className="rounded-[14px] p-6" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                      <h3 className="text-[16px] font-extrabold mb-3" style={{ color: 'var(--navy)' }}>Payment Schedule</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { label: 'Financed Amount', value: 'SAR 183,000' },
                          { label: 'Tenure', value: '60 Months' },
                          { label: 'First Payment', value: '30 days after disbursement' },
                          { label: 'Total Profit', value: 'SAR 35,880' },
                          { label: 'Total Payable', value: 'SAR 218,880' },
                          { label: 'Profit Rate (APR)', value: '4.69%' },
                        ].map(item => (
                          <div key={item.label} className="rounded-[10px] p-4" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                            <div className="text-[12px]" style={{ color: 'var(--muted)' }}>{item.label}</div>
                            <div className="mt-1 text-[14px] font-bold">{item.value}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 rounded-[10px] px-4 py-3 flex items-center justify-between" style={{ background: 'var(--bg-light)' }}>
                        <span className="text-[13px]">Indicative Monthly Payment</span>
                        <span>
                          From <b style={{ color: 'var(--blue)', fontSize: 16 }}>SAR 3,648</b>{' '}
                          <small style={{ color: 'var(--muted)' }}>/ month</small>
                        </span>
                      </div>
                    </div>

                    {/* Declaration */}
                    <div className="rounded-[14px] p-6" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                      <h3 className="text-[16px] font-extrabold mb-3" style={{ color: 'var(--navy)' }}>Declaration &amp; Consent</h3>
                      <p className="text-[13.5px] leading-[1.6]" style={{ color: 'var(--muted)' }}>
                        By submitting this order, I confirm that all information provided is accurate and complete. I consent to Saudi National Bank processing my application in accordance with their terms, conditions, and applicable Saudi Arabian regulations. I acknowledge this is a binding financing request subject to final credit approval.
                      </p>
                      <label className="mt-5 flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={e => setAgreed(e.target.checked)}
                          className="mt-0.5 w-4 h-4 shrink-0 accent-[#4f95ff] cursor-pointer"
                        />
                        <span className="text-[13.5px] font-semibold" style={{ color: 'var(--text)' }}>
                          I have read, understood and agree to the{' '}
                          <a href="#" style={{ color: 'var(--blue)' }}>Terms &amp; Conditions</a>
                          {', '}
                          <a href="#" style={{ color: 'var(--blue)' }}>Product Disclosure</a>
                          {' and '}
                          <a href="#" style={{ color: 'var(--blue)' }}>Schedule of Charges</a>.
                        </span>
                      </label>
                    </div>

                  </div>

                  {/* Right rail */}
                  <div className="w-[280px] shrink-0 flex flex-col gap-4">

                    {/* Key Documents */}
                    <div className="rounded-[14px] p-5" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                      <h3 className="text-[16px] font-extrabold mb-3" style={{ color: 'var(--navy)' }}>Key Documents</h3>
                      {[
                        'App Facts Sheet',
                        'Terms & Conditions',
                        'Product Disclosure',
                        'Schedule of Charges',
                      ].map((doc, i, arr) => (
                        <a
                          key={doc}
                          href="#"
                          className="flex items-center gap-2.5 py-[10px] text-[13.5px] font-semibold"
                          style={{
                            color: 'var(--text)',
                            borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                          }}
                        >
                          <span className="w-8 h-8 shrink-0 rounded-[8px] flex items-center justify-center text-[15px]" style={{ background: 'var(--bg)' }}>📄</span>
                          {doc}
                        </a>
                      ))}
                    </div>

                    {/* What Happens Next */}
                    <div className="rounded-[14px] p-5" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                      <h3 className="text-[16px] font-extrabold mb-3" style={{ color: 'var(--navy)' }}>What Happens Next</h3>
                      {[
                        'Your application is sent to Saudi National Bank',
                        'The bank reviews your order within 1–2 business days',
                        'You receive an SMS &amp; email with the outcome',
                        'Upon approval, vehicle delivery is arranged with the dealer',
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3 mt-3.5 text-[13px] leading-[1.4]">
                          <span
                            className="w-6 h-6 shrink-0 rounded-full flex items-center justify-center text-[12px] font-bold"
                            style={{ background: 'var(--bg)', color: 'var(--blue)' }}
                          >
                            {i + 1}
                          </span>
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </div>
                      ))}
                    </div>

                    {/* Security */}
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

              {/* Footer */}
              <div className="shrink-0 px-8 py-[18px] flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
                <Link
                  href="/ceer-tamawal/11-offer-details"
                  className="rounded-[10px] px-8 py-3.5 text-[15px] font-bold"
                  style={{ background: 'var(--card)', border: '1.5px solid var(--blue)', color: 'var(--blue)' }}
                >
                  ← Back to Offer Details
                </Link>
                <div className="flex items-center gap-4">
                  <button
                    className="rounded-[10px] px-8 py-3.5 text-[15px] font-bold"
                    style={{ background: 'var(--card)', border: '1.5px solid var(--blue)', color: 'var(--blue)' }}
                  >
                    Save Draft
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!agreed || submitting}
                    className="rounded-[10px] px-8 py-3.5 text-[15px] font-bold text-white transition-opacity"
                    style={{
                      background: agreed && !submitting ? '#f08a1d' : 'var(--border)',
                      cursor: agreed && !submitting ? 'pointer' : 'not-allowed',
                      color: agreed && !submitting ? '#fff' : 'var(--muted)',
                    }}
                  >
                    {submitting ? 'Submitting…' : 'Submit Order →'}
                  </button>
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
          --highlight: #16283f;
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
          --highlight: #eff6ff;
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
