'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import LucidStepper from '../_components/LucidStepper';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

const TERMS = [24, 36, 48, 60];

const offers = [
  {
    id: 'snb',
    logo: '/logo-alahli.png',
    bankEn: 'Saudi National Bank',
    monthly: 'SAR 8,113',
    apr: '3.29%',
    tenure: '36 Months',
    total: 'SAR 375,100',
    profit: 'SAR 78,099',
    feats: ['No processing fee', 'Early settlement available', 'Free online servicing'],
    recommended: true,
  },
  {
    id: 'alrajhi',
    logo: '/logo-alrajhi.png',
    bankEn: 'Al Rajhi Bank',
    monthly: 'SAR 8,342',
    apr: '3.59%',
    tenure: '36 Months',
    total: 'SAR 378,309',
    profit: 'SAR 78,309',
    feats: ['No processing fee', 'Flexible payment options', 'Online account management'],
    recommended: false,
  },
  {
    id: 'riyad',
    logo: '/logo-riyad.png',
    bankEn: 'Riyad Bank',
    monthly: 'SAR 8,515',
    apr: '3.89%',
    tenure: '36 Months',
    total: 'SAR 381,509',
    profit: 'SAR 78,909',
    feats: ['No processing fee', 'Early settlement available', 'Relationship benefits'],
    recommended: false,
  },
];

function SelectField({ label, icon, value }: { label: string; icon: React.ReactNode; value: string }) {
  return (
    <div className="flex-1 min-w-0">
      <div className="text-[13px] font-semibold mb-1.5" style={{ color: 'var(--text)' }}>{label}</div>
      <div className="flex items-center gap-2 px-3 py-2.5 rounded-[10px] cursor-pointer" style={{ border: '1.5px solid var(--border)', background: 'var(--card)' }}>
        <span style={{ color: 'var(--muted)' }}>{icon}</span>
        <span className="flex-1 text-[13px] font-semibold" style={{ color: 'var(--text)' }}>{value}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--muted)', flexShrink: 0 }}><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </div>
  );
}

export default function PreliminaryOffersPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(false);
  const [term, setTerm] = useState(36);
  const [selected, setSelected] = useState('snb');

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens.</p>
      </div>

      <div className="fixed inset-0 overflow-auto flex items-start justify-center pt-4" style={{ background: dark ? '#000' : '#d1d5db' }}>
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebar backHref="/lucid/00-explore-financing" />
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col px-6 pb-6 pt-5 overflow-y-auto">

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

              <LucidStepper activeStep={2} />

              {/* Header */}
              <div className="mb-4">
                <h1 className="text-[44px] font-normal leading-tight mb-2" style={{ color: 'var(--heading)', fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif" }}>View Preliminary Offers</h1>
                <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>Based on the information provided, here are some financing options for your Lucid Air Touring. You can compare the details below and select the offer that suits you best.</p>
              </div>

              {/* Filters */}
              <div className="mb-4">
                <div className="flex gap-4 mb-4">
                  <SelectField label="Monthly salary"
                    icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>}
                    value="SAR 25,000" />
                  <SelectField label="Existing monthly credit commitments"
                    icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>}
                    value="SAR 3,500" />
                  <SelectField label="Down payment"
                    icon={<span className="text-[12px] font-bold" style={{ color: 'var(--muted)' }}>%</span>}
                    value="20% (SAR 93,357)" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[13px] font-semibold mb-1.5" style={{ color: 'var(--text)' }}>Financing term</div>
                    <div className="flex gap-2">
                      {TERMS.map(m => (
                        <button key={m} onClick={() => setTerm(m)}
                          className="px-4 py-2 rounded-[10px] text-[13px] font-semibold"
                          style={term === m
                            ? { background: 'var(--highlight)', border: '1.5px solid var(--blue)', color: 'var(--blue)' }
                            : { background: 'var(--card)', border: '1.5px solid var(--border)', color: 'var(--text)' }}>
                          {m}<br /><span className="text-[11px] font-normal">Months</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-[13px] font-semibold" style={{ border: '1.5px solid var(--border)', color: 'var(--text)', background: 'var(--card)' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
                    Filters
                  </button>
                </div>
              </div>

              {/* Offers */}
              <div className="flex flex-col gap-3">
                {offers.map(offer => (
                  <div key={offer.id} className="rounded-[14px] px-5 py-4 cursor-pointer"
                    onClick={() => setSelected(offer.id)}
                    style={{ background: 'var(--card)', border: `1.5px solid ${selected === offer.id ? 'var(--blue)' : 'var(--border)'}` }}>

                    <div className="flex items-center gap-5">
                      {/* Radio */}
                      <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ border: `2px solid ${selected === offer.id ? 'var(--blue)' : 'var(--border)'}` }}>
                        {selected === offer.id && <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--blue)' }} />}
                      </div>

                      {/* Logo */}
                      <img src={offer.logo} alt={offer.bankEn} style={{ height: 32, width: 'auto', maxWidth: 90, objectFit: 'contain', flexShrink: 0 }} />

                      {/* Data cols */}
                      <div className="flex items-start gap-5 flex-1 min-w-0">
                        <div className="shrink-0">
                          <div className="text-[11px]" style={{ color: 'var(--muted)' }}>Monthly payment</div>
                          <div className="text-[17px] font-bold mt-0.5" style={{ color: 'var(--blue)' }}>{offer.monthly}</div>
                        </div>
                        <div className="shrink-0">
                          <div className="text-[11px]" style={{ color: 'var(--muted)' }}>APR (fixed)</div>
                          <div className="text-[17px] font-bold mt-0.5" style={{ color: 'var(--blue)' }}>{offer.apr}</div>
                        </div>
                        <div className="shrink-0">
                          <div className="text-[11px]" style={{ color: 'var(--muted)' }}>Tenure</div>
                          <div className="text-[14px] font-bold mt-0.5" style={{ color: 'var(--text)' }}>{offer.tenure}</div>
                        </div>
                        <div className="shrink-0">
                          <div className="text-[11px]" style={{ color: 'var(--muted)' }}>Total amount<br />to be paid</div>
                          <div className="text-[14px] font-bold mt-0.5" style={{ color: 'var(--text)' }}>SAR<br />{offer.total.replace('SAR ', '')}</div>
                        </div>
                        <div className="shrink-0">
                          <div className="text-[11px]" style={{ color: 'var(--muted)' }}>Total profit</div>
                          <div className="text-[14px] font-bold mt-0.5" style={{ color: 'var(--text)' }}>SAR<br />{offer.profit.replace('SAR ', '')}</div>
                        </div>
                      </div>

                      {/* Right section: badge (if any) + features + View Details */}
                      <div className="flex flex-col gap-1.5 shrink-0" style={{ minWidth: 190 }}>
                        {offer.recommended && (
                          <span className="self-end px-3 py-1 rounded-full text-[11px] font-extrabold mb-0.5" style={{ border: '1.5px solid var(--blue)', color: 'var(--blue)' }}>Recommended</span>
                        )}
                        {offer.feats.map(f => (
                          <div key={f} className="flex items-center gap-1.5 text-[12px]" style={{ color: 'var(--muted)' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            {f}
                          </div>
                        ))}
                        <Link href="/lucid/11-offer-details" className="self-end text-[13px] font-semibold flex items-center gap-1 mt-1" style={{ color: 'var(--blue)' }}
                          onClick={e => e.stopPropagation()}>
                          View Details <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>


            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center gap-5" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <div className="flex items-start gap-2.5 flex-1 min-w-0">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ border: '1.5px solid var(--muted)', color: 'var(--muted)' }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <div>
                  <p className="text-[12px] font-semibold" style={{ color: 'var(--text)' }}>These preliminary offers are based on the salary, existing commitments, down payment, and financing term you entered.</p>
                  <p className="text-[11px] mt-0.5" style={{ color: 'var(--muted)' }}>Final offers are confirmed after identity verification and eligibility checks.</p>
                </div>
              </div>
              <Link href="/lucid/03-verify-id" className="shrink-0 flex items-center gap-2 px-10 py-3 rounded-xl text-[15px] font-bold text-white" style={{ background: '#111111' }}>
                Continue <span>›</span>
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
