'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import LucidStepper from '../_components/LucidStepper';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

const TABS = ['Product details', 'Fees & charges', 'Insurance', 'Terms & conditions'];

const financingRows = [
  ['Financing type', 'Conventional Car Finance'],
  ['APR', '4.89%'],
  ['Monthly payment', 'SAR 3,648'],
  ['Tenure', '60 months'],
  ['Amount financed', 'SAR 183,000'],
  ['Down payment (20%)', 'SAR 45,750'],
  ['Total payable', 'SAR 218,880'],
  ['First payment', '30 days after disbursement'],
];

const breakdownRows = [
  ['Vehicle price (incl. VAT)', 'SAR 228,750'],
  ['Down payment (20%)', 'SAR 45,750'],
  ['Amount to finance', 'SAR 183,000'],
  ['Total profit', 'SAR 35,880'],
  ['Total payable', 'SAR 218,880'],
];

const keyFeatures = [
  ['Sharia-compliant financing', 'Yes'],
  ['Fixed profit rate', 'Yes'],
  ['Early settlement allowed', 'Yes'],
  ['Comprehensive insurance', 'Included'],
  ['No processing fees', 'SAR 0'],
  ['Transfer of ownership', 'At end of term'],
];

const ratingBars: [string, number][] = [
  ['Customer satisfaction', 4.9],
  ['Digital experience', 4.8],
  ['Approval speed', 4.7],
  ['Transparency', 4.8],
];

export default function SubmitOrderPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens.</p>
      </div>

      <div className="fixed inset-0 overflow-auto flex items-start justify-center pt-4" style={{ background: dark ? '#000' : '#d1d5db' }}>
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebar backHref="/lucid/10-compare-offers" />
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

              {/* Header */}
              <div className="mb-4">
                <h1 className="text-[44px] font-normal leading-tight mb-2" style={{ color: 'var(--heading)', fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif" }}>Review &amp; Submit Order</h1>
                <p className="text-[16px]" style={{ color: 'var(--muted)' }}>Please review the details of your financing order before submitting. Once submitted, the bank will begin processing your application.</p>
              </div>

              {/* Two-col */}
              <div className="flex gap-5 flex-1 min-h-0">

                {/* Left */}
                <div className="flex-1 min-w-0 flex flex-col gap-4">

                  {/* Bank card */}
                  <div className="rounded-[14px] px-5 py-4" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <img src="/logo-alahli.png" alt="SNB" style={{ height: 36, width: 'auto', maxWidth: 110, objectFit: 'contain' }} />
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide text-white" style={{ background: 'var(--blue)' }}>RECOMMENDED</span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold" style={{ background: 'var(--highlight)', color: 'var(--muted)', border: '1px solid var(--border)' }}>English</span>
                    </div>
                    <div className="text-[15px] font-bold mb-3" style={{ color: 'var(--text)' }}>Saudi National Bank</div>

                    {/* Metrics */}
                    <div className="rounded-[10px] px-4 py-3 flex items-center gap-8 mb-3" style={{ border: '1px solid var(--border)' }}>
                      {[
                        { label: 'APR', value: '4.89%', blue: true },
                        { label: 'Monthly payment', value: 'SAR 3,648' },
                        { label: 'Tenure', value: '60 months' },
                        { label: 'Total payable', value: 'SAR 218,880' },
                        { label: 'Down payment', value: 'SAR 45,750' },
                      ].map(({ label, value, blue }) => (
                        <div key={label} className="shrink-0">
                          <div className="text-[11px]" style={{ color: 'var(--muted)' }}>{label}</div>
                          <div className="text-[15px] font-bold mt-0.5" style={{ color: blue ? 'var(--blue)' : 'var(--text)' }}>{value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Feature chips */}
                    <div className="flex items-center gap-5 flex-wrap">
                      {['No processing fees', 'Early settlement flexibility', 'Free comprehensive insurance', 'Advanced digital services'].map(f => (
                        <div key={f} className="flex items-center gap-1.5 text-[12px]" style={{ color: 'var(--text)' }}>
                          <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: '#16a34a' }}>
                            <svg width="8" height="8" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="rounded-[14px] overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="flex" style={{ borderBottom: '1px solid var(--border)' }}>
                      {TABS.map((tab, i) => (
                        <button key={tab} onClick={() => setActiveTab(i)}
                          className="px-5 py-3 text-[13px] font-semibold shrink-0"
                          style={{
                            color: activeTab === i ? 'var(--blue)' : 'var(--muted)',
                            borderBottom: activeTab === i ? '2px solid var(--blue)' : '2px solid transparent',
                            background: 'transparent',
                            marginBottom: -1,
                          }}>
                          {tab}
                        </button>
                      ))}
                    </div>

                    <div className="p-5">
                      {activeTab === 0 ? (
                        <div className="flex gap-5">
                          {/* Financing details */}
                          <div className="flex-1 min-w-0">
                            <div className="text-[13px] font-bold mb-2" style={{ color: 'var(--text)' }}>Financing details</div>
                            {financingRows.map(([k, v]) => (
                              <div key={k} className="flex justify-between py-[7px] text-[12px]" style={{ borderBottom: '1px solid var(--border)' }}>
                                <span style={{ color: 'var(--muted)' }}>{k}</span>
                                <span className="font-semibold" style={{ color: 'var(--text)' }}>{v}</span>
                              </div>
                            ))}
                          </div>

                          {/* Payment breakdown */}
                          <div className="flex-1 min-w-0">
                            <div className="text-[13px] font-bold mb-2" style={{ color: 'var(--text)' }}>Payment breakdown</div>
                            {breakdownRows.map(([k, v]) => (
                              <div key={k} className="flex justify-between py-[7px] text-[12px]" style={{ borderBottom: '1px solid var(--border)' }}>
                                <span style={{ color: 'var(--muted)' }}>{k}</span>
                                <span className="font-semibold" style={{ color: 'var(--text)' }}>{v}</span>
                              </div>
                            ))}
                            <div className="mt-3 rounded-[10px] px-4 py-3 flex items-center justify-between" style={{ background: 'var(--highlight)', border: '1px solid var(--border)' }}>
                              <span className="text-[12px]" style={{ color: 'var(--muted)' }}>Indicative monthly payment</span>
                              <span className="text-[12px]">From <b style={{ color: 'var(--blue)', fontSize: 15 }}>SAR 3,648</b> <span style={{ color: 'var(--muted)' }}>/ month</span></span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-[13px] py-8 text-center" style={{ color: 'var(--muted)' }}>Content for this tab coming soon.</div>
                      )}
                    </div>
                  </div>

                  {/* Key features + Offer rating */}
                  <div className="flex gap-4">
                    {/* Key features */}
                    <div className="flex-1 rounded-[14px] p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                      <div className="text-[13px] font-bold mb-2" style={{ color: 'var(--text)' }}>Key features</div>
                      {keyFeatures.map(([k, v]) => (
                        <div key={k} className="flex items-center justify-between py-1.5 text-[12px]" style={{ borderBottom: '1px solid var(--border)' }}>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: '#16a34a' }}>
                              <svg width="8" height="8" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                            <span style={{ color: 'var(--text)' }}>{k}</span>
                          </div>
                          <span className="font-semibold" style={{ color: 'var(--text)' }}>{v}</span>
                        </div>
                      ))}
                    </div>

                    {/* Offer rating */}
                    <div className="flex-1 rounded-[14px] p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                      <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text)' }}>Offer rating</div>
                      <div className="flex items-end gap-3 mb-3">
                        <span className="text-[36px] font-extrabold leading-none" style={{ color: 'var(--text)' }}>4.8</span>
                        <div>
                          <div className="flex gap-0.5">
                            {[1,2,3,4,5].map(s => (
                              <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            ))}
                          </div>
                          <div className="text-[11px] mt-0.5" style={{ color: 'var(--muted)' }}>+728 reviews</div>
                        </div>
                      </div>
                      {ratingBars.map(([label, score]) => (
                        <div key={label} className="flex items-center gap-3 mb-2 text-[12px]">
                          <span className="shrink-0" style={{ width: 140, color: 'var(--muted)' }}>{label}</span>
                          <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                            <div className="h-full rounded-full" style={{ width: `${(score / 5) * 100}%`, background: 'var(--blue)' }} />
                          </div>
                          <span className="shrink-0 font-semibold" style={{ width: 24, textAlign: 'right', color: 'var(--text)' }}>{score}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right */}
                <div className="flex flex-col gap-4 shrink-0" style={{ width: 260 }}>

                  {/* Why recommended */}
                  <div className="rounded-[14px] p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text)' }}>Why this offer is recommended</div>
                    {['Lowest total payable', 'Competitive profit rate', 'No processing fees', 'Free comprehensive insurance', 'Advanced digital services'].map(r => (
                      <div key={r} className="flex items-center gap-2 mb-2 text-[12px]" style={{ color: 'var(--text)' }}>
                        <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: '#16a34a' }}>
                          <svg width="8" height="8" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        {r}
                      </div>
                    ))}
                  </div>

                  {/* Key documents */}
                  <div className="rounded-[14px] p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text)' }}>Key documents</div>
                    {['Key Facts Sheet', 'Terms & Conditions', 'Product Disclosure', 'Schedule of Charges'].map((doc, i, arr) => (
                      <div key={doc} className="flex items-center justify-between py-2 text-[12px]" style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-[6px] flex items-center justify-center shrink-0" style={{ background: 'var(--highlight)' }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                          </div>
                          <span style={{ color: 'var(--text)' }}>{doc}</span>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      </div>
                    ))}
                  </div>

                  {/* Next steps */}
                  <div className="rounded-[14px] p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="text-[13px] font-bold mb-3" style={{ color: 'var(--text)' }}>Next steps</div>
                    {[
                      'Review the key facts and terms',
                      'Accept the offer to proceed',
                      'Complete final verification',
                      'The bank will contact you for final approval',
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3 mb-2.5 text-[12px]">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5"
                          style={{ background: i === 0 ? 'var(--blue)' : 'transparent', border: i === 0 ? 'none' : '1.5px solid var(--border)', color: i === 0 ? '#fff' : 'var(--muted)' }}>
                          {i + 1}
                        </div>
                        <span style={{ color: 'var(--text)' }}>{step}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link href="/lucid/10-compare-offers" className="flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-bold" style={{ border: '1.5px solid var(--border)', color: 'var(--text)', background: 'transparent' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                Back to Offers
              </Link>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-bold" style={{ border: '1.5px solid var(--blue)', color: 'var(--blue)', background: 'transparent' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                  Save This Offer
                </button>
                <Link href="/lucid/12-submit-order" className="flex items-center gap-2 px-8 py-3 rounded-xl text-[14px] font-bold text-white" style={{ background: 'var(--blue)' }}>
                  Create Order <span>→</span>
                </Link>
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
