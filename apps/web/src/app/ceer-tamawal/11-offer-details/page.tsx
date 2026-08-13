'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

const offerSummary = [
  ['Financed Amount', 'SAR 183,000'],
  ['Tenure', '60 Months'],
  ['Down Payment (20%)', 'SAR 45,750'],
  ['Profit Rate (APR)', '4.69%'],
  ['Monthly Payment', 'SAR 3,648'],
  ['First Payment', '30 days after disbursement'],
];
const paymentBreakdown = [
  ['Vehicle Price (incl. VAT)', 'SAR 228,750'],
  ['Down Payment (20%)', 'SAR 45,750'],
  ['Amount to Finance', 'SAR 183,000'],
  ['Total Profit', 'SAR 35,880'],
  ['Total Payable', 'SAR 218,880'],
];
const keyFacts = [
  ['Sharia-compliant financing', 'Yes'],
  ['Fixed profit rate', 'Yes'],
  ['Early settlement allowed', 'Yes'],
  ['Insurance included', 'Comprehensive'],
  ['Processing fees', 'SAR 0'],
  ['Transfer of ownership', 'At end of term'],
];
const ratings = [
  ['Customer satisfaction', 4.9],
  ['Digital experience', 4.8],
  ['Approval speed', 4.7],
  ['Transparency', 4.8],
];

export default function OfferDetailsPage() {
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
          <CeerSidebar backHref="/ceer-tamawal/09-eligibility-offers" />
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt={brandName} className="h-8 w-auto" />
                  <button onClick={() => setDark(d => !d)} className="relative flex items-center shrink-0" style={{ width: 44, height: 24 }}>
                    <span className="absolute inset-0 rounded-full" style={{ background: dark ? '#2a3a4f' : '#dde3ec' }} />
                    <span className="absolute w-[18px] h-[18px] rounded-full shadow" style={{ left: dark ? 23 : 3, top: 3, background: dark ? '#4f95ff' : '#2563eb' }} />
                  </button>
                </div>
                <Link href="/ceer-tamawal/09-eligibility-offers" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>← Back to Offers</Link>
              </div>

              <div className="flex gap-5">
                {/* Left main */}
                <div className="flex-1 min-w-0 flex flex-col gap-4">
                  {/* Bank header */}
                  <div className="rounded-[16px] p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-[12px] flex items-center justify-center text-[14px] font-extrabold text-center" style={{ border: '1px solid var(--border)', color: '#1a6b3c', lineHeight: 1.2 }}>SNB<br/>الأهلي</div>
                      <div>
                        <div className="text-[20px] font-extrabold" style={{ color: 'var(--heading)' }}>Saudi National Bank</div>
                        <div className="text-[12px] mt-0.5" style={{ color: 'var(--muted)' }}>SNB الأهلي</div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-3">
                      {[['APR', '4.69%', true], ['Monthly Payment', 'SAR 3,648', false], ['Total Payable', 'SAR 218,880', false], ['Down Payment', 'SAR 45,750', false]].map(([k, v, blue]) => (
                        <div key={k as string} className="rounded-[10px] p-3" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                          <div className="text-[11px]" style={{ color: 'var(--muted)' }}>{k}</div>
                          <div className="text-[16px] font-extrabold mt-1" style={{ color: blue ? 'var(--blue)' : 'var(--text)' }}>{v}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['✓ No Processing Fees', '✓ Early Settlement Benefit', '✓ Free Comprehensive Insurance', '✓ Advanced Digital Services'].map(chip => (
                        <span key={chip} className="px-3 py-1.5 rounded-full text-[11.5px] font-semibold" style={{ background: 'var(--highlight)', color: 'var(--blue)' }}>{chip}</span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Offer Summary */}
                    <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                      <div className="px-4 py-3 text-[13px] font-bold" style={{ borderBottom: '1px solid var(--border)', color: 'var(--heading)' }}>Offer Summary</div>
                      {offerSummary.map(([k, v], i) => (
                        <div key={k} className="flex justify-between px-4 py-2.5 text-[12.5px]" style={{ borderBottom: i < offerSummary.length - 1 ? '1px solid var(--border)' : 'none' }}>
                          <span style={{ color: 'var(--muted)' }}>{k}</span>
                          <span className="font-semibold">{v}</span>
                        </div>
                      ))}
                    </div>

                    {/* Payment Breakdown */}
                    <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                      <div className="px-4 py-3 text-[13px] font-bold" style={{ borderBottom: '1px solid var(--border)', color: 'var(--heading)' }}>Payment Breakdown</div>
                      {paymentBreakdown.map(([k, v], i) => (
                        <div key={k} className="flex justify-between px-4 py-2.5 text-[12.5px]" style={{ borderBottom: i < paymentBreakdown.length - 1 ? '1px solid var(--border)' : 'none' }}>
                          <span style={{ color: 'var(--muted)' }}>{k}</span>
                          <span className="font-semibold">{v}</span>
                        </div>
                      ))}
                      <div className="px-4 py-3 flex items-center justify-between rounded-b-[16px]" style={{ background: 'var(--highlight)' }}>
                        <span className="text-[12px]">Indicative Monthly Payment</span>
                        <span className="font-extrabold" style={{ color: 'var(--blue)' }}>SAR 3,648<span className="text-[11px] font-normal" style={{ color: 'var(--muted)' }}> / month</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Key Facts */}
                  <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <div className="px-4 py-3 text-[13px] font-bold" style={{ borderBottom: '1px solid var(--border)', color: 'var(--heading)' }}>Key Facts</div>
                    <div className="grid grid-cols-2">
                      {keyFacts.map(([k, v], i) => (
                        <div key={k} className="flex justify-between px-4 py-2.5 text-[12.5px]" style={{ borderBottom: '1px solid var(--border)', borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none' }}>
                          <span style={{ color: 'var(--muted)' }}>✓ {k}</span>
                          <span className="font-semibold">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Offer Rating */}
                  <div className="rounded-[16px] p-4" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[28px] font-extrabold" style={{ color: 'var(--heading)' }}>4.8</span>
                      <div>
                        <div style={{ color: '#f5a623' }}>★★★★★</div>
                        <div className="text-[11px]" style={{ color: 'var(--muted)' }}>+728 reviews</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {ratings.map(([label, score]) => (
                        <div key={label as string} className="flex items-center gap-3 text-[12px]">
                          <span className="w-40 shrink-0" style={{ color: 'var(--muted)' }}>{label}</span>
                          <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                            <div className="h-full rounded-full" style={{ width: `${(score as number / 5) * 100}%`, background: 'var(--blue)' }} />
                          </div>
                          <span className="w-6 text-right font-semibold">{score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right rail */}
                <div className="flex flex-col gap-4" style={{ width: 280, flexShrink: 0 }}>
                  {/* Why recommended */}
                  <div className="rounded-[16px] p-4" style={{ border: '1px solid var(--blue)', background: 'var(--highlight)' }}>
                    <h3 className="text-[13px] font-bold mb-3" style={{ color: 'var(--heading)' }}>Why this offer is recommended</h3>
                    {['Lowest total payable', 'Competitive profit rate', 'No processing fees', 'Free comprehensive insurance', 'Advanced digital services'].map(reason => (
                      <div key={reason} className="flex items-center gap-2 mb-2 text-[12.5px]">
                        <span style={{ color: 'var(--green)' }}>✓</span>
                        <span>{reason}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Documents */}
                  <div className="rounded-[16px] p-4" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <h3 className="text-[13px] font-bold mb-3" style={{ color: 'var(--heading)' }}>Key Documents</h3>
                    {['App Facts Sheet', 'Terms & Conditions', 'Product Disclosure', 'Schedule of Charges'].map((doc, i, arr) => (
                      <a key={doc} href="#" className="flex items-center gap-2.5 py-2 text-[12.5px] font-semibold" style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none', color: 'var(--text)' }}>
                        <span className="w-7 h-7 rounded-[6px] flex items-center justify-center text-[13px]" style={{ background: 'var(--bg)' }}>📄</span>
                        {doc}
                      </a>
                    ))}
                  </div>

                  {/* Next Steps */}
                  <div className="rounded-[16px] p-4" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <h3 className="text-[13px] font-bold mb-3" style={{ color: 'var(--heading)' }}>Next Steps</h3>
                    {['Review the key facts and terms', 'Accept the offer to proceed', 'Complete final verification', 'The bank will contact you for final approval'].map((step, i) => (
                      <div key={i} className="flex gap-2.5 mb-2.5 text-[12px]">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5" style={{ background: 'var(--highlight)', color: 'var(--blue)' }}>{i + 1}</div>
                        <span style={{ color: 'var(--muted)' }}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link href="/ceer-tamawal/09-eligibility-offers" className="px-5 py-3 rounded-xl text-[14px] font-bold" style={{ border: '1.5px solid var(--blue)', color: 'var(--blue)' }}>← Back to Offers</Link>
              <div className="flex items-center gap-3">
                <button className="px-5 py-3 rounded-xl text-[14px] font-bold" style={{ border: '1.5px solid var(--border)', color: 'var(--text)', background: 'transparent' }}>Save This Offer</button>
                <Link href="/ceer-tamawal/12-submit-order" className="px-8 py-3 rounded-xl text-[15px] font-bold text-white" style={{ background: 'var(--blue)' }}>Create Order →</Link>
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
        a{text-decoration:none;}
      `}</style>
    </div>
  );
}
