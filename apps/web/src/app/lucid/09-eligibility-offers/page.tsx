'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import LucidStepper from '../_components/LucidStepper';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

const offers = [
  {
    id: 'snb',
    logo: '/logo-alahli.png',
    bankAr: 'SNB الأهلي',
    bankEn: 'Saudi National Bank',
    apr: '4.89%',
    monthly: '3,648',
    tenure: '60',
    financed: '183,000',
    total: '218,880',
    feats: ['No processing fee', 'Early settlement flexibility', 'Free comprehensive insurance', 'Advanced digital services'],
    recommended: true,
  },
  {
    id: 'alinma',
    logo: '/logo-alinma.png',
    bankAr: 'مصرف الإنماء',
    bankEn: 'alinma bank',
    apr: '5.19%',
    monthly: '3,755',
    tenure: '60',
    financed: '183,000',
    total: '225,300',
    feats: ['Flexible payment options', 'No processing fee', 'Early settlement available'],
    recommended: false,
  },
  {
    id: 'riyad',
    logo: '/logo-riyad.png',
    bankAr: 'بنك الرياض',
    bankEn: 'Riyad Bank',
    apr: '5.49%',
    monthly: '3,697',
    tenure: '60',
    financed: '183,000',
    total: '221,820',
    feats: ['Fast approval', 'Free comprehensive insurance', 'Digital account management'],
    recommended: false,
  },
  {
    id: 'tamweel',
    logo: '/logo-tamweel-aloula.png',
    bankAr: 'تمويل الأولى',
    bankEn: 'T AMWEEL ALOULA',
    apr: '5.29%',
    monthly: '3,820',
    tenure: '60',
    financed: '183,000',
    total: '229,200',
    feats: ['No processing fee', 'Early settlement available', 'Dedicated customer support'],
    recommended: false,
  },
];

export default function EligibilityOffersPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(false);
  const [selected, setSelected] = useState('snb');
  const [compare, setCompare] = useState<Set<string>>(new Set(['snb', 'alinma']));

  const toggleCompare = (id: string) => setCompare(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.size < 4 && next.add(id);
    return next;
  });

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens.</p>
      </div>

      <div className="fixed inset-0 overflow-auto flex items-start justify-center pt-4" style={{ background: dark ? '#000' : '#d1d5db' }}>
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebar backHref="/lucid/08-collecting-reports" />
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

              {/* Header row */}
              <div className="mb-2">
                <h1 className="text-[44px] font-normal leading-tight mb-2" style={{ color: 'var(--heading)', fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif" }}>Your eligibility offers</h1>
                <p className="text-[16px]" style={{ color: 'var(--muted)' }}>Here are the financing offers generated for you based on your validated information and each provider&apos;s product criteria.</p>
              </div>

              {/* Offers */}
              <div className="flex flex-col gap-3 mt-4">
                {offers.map(offer => (
                  <div key={offer.id} className="relative" onClick={() => setSelected(offer.id)} style={{ cursor: 'pointer' }}>
                    {offer.recommended && (
                      <div className="absolute -top-[11px] left-14 z-10">
                        <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wide" style={{ background: 'var(--blue)', color: '#fff' }}>RECOMMENDED</span>
                      </div>
                    )}
                    <div className="rounded-[14px] px-5 py-4" style={{ background: 'var(--card)', border: `1.5px solid ${selected === offer.id ? 'var(--blue)' : 'var(--border)'}` }}>
                      <div className="flex items-center gap-4">

                        {/* Radio */}
                        <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ border: `2px solid ${selected === offer.id ? 'var(--blue)' : 'var(--border)'}` }}>
                          {selected === offer.id && <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--blue)' }} />}
                        </div>

                        {/* Bank logo + name */}
                        <div className="flex flex-col items-center gap-1 shrink-0" style={{ width: 100 }}>
                          <img src={offer.logo} alt={offer.bankEn} style={{ height: 32, width: 'auto', maxWidth: 90, objectFit: 'contain' }} />
                          <div className="text-[10px] text-center" style={{ color: 'var(--muted)' }}>{offer.bankEn}</div>
                        </div>

                        {/* Data columns */}
                        <div className="flex items-center gap-6 flex-1 min-w-0">
                          {[
                            { label: 'APR', value: offer.apr, blue: true },
                            { label: 'Monthly\npayment', value: `SAR\n${offer.monthly}` },
                            { label: 'Tenure', value: `${offer.tenure}\nmonths` },
                            { label: 'Amount\nfinanced', value: `SAR\n${offer.financed}` },
                            { label: 'Total payable', value: `SAR\n${offer.total}` },
                          ].map(({ label, value, blue }) => (
                            <div key={label} className="shrink-0">
                              <div className="text-[10px] leading-tight whitespace-pre-line" style={{ color: 'var(--muted)' }}>{label}</div>
                              <div className="text-[15px] font-bold mt-0.5 leading-tight whitespace-pre-line" style={{ color: blue ? 'var(--blue)' : 'var(--text)' }}>{value}</div>
                            </div>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="flex flex-col gap-1.5 shrink-0" style={{ minWidth: 200 }}>
                          {offer.feats.map(f => (
                            <div key={f} className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--text)' }}>
                              <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: '#16a34a' }}>
                                <svg width="8" height="8" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </div>
                              {f}
                            </div>
                          ))}
                        </div>

                        {/* Compare + View details */}
                        <div className="flex flex-col items-start justify-between shrink-0 ml-2 self-stretch">
                          <label className="flex items-center gap-1.5 text-[13px] font-semibold cursor-pointer" style={{ color: 'var(--text)' }}
                            onClick={e => { e.stopPropagation(); toggleCompare(offer.id); }}>
                            <div className="w-4 h-4 rounded flex items-center justify-center" style={{ border: `2px solid ${compare.has(offer.id) ? 'var(--blue)' : 'var(--border)'}`, background: compare.has(offer.id) ? 'var(--blue)' : 'transparent' }}>
                              {compare.has(offer.id) && <svg width="9" height="9" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                            </div>
                            Compare
                          </label>
                          <Link href="/lucid/11-offer-details" className="text-[13px] font-semibold flex items-center gap-1" style={{ color: 'var(--blue)' }} onClick={e => e.stopPropagation()}>
                            View details <span>→</span>
                          </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info bar */}
              <div className="mt-4 flex items-start gap-3 rounded-[12px] px-4 py-3" style={{ background: 'var(--highlight)', border: '1px solid var(--border)' }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'var(--blue)' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <p className="text-[13px]" style={{ color: 'var(--muted)' }}>These offers are indicative and remain subject to final approval by the provider. Final terms, fees, and eligibility will be confirmed after full application review and credit assessment.</p>
              </div>

            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link href="/lucid/10-compare-offers" className="flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-bold" style={{ border: '1.5px solid var(--blue)', color: 'var(--blue)', background: 'transparent' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
                Compare selected offers ({compare.size})
              </Link>
              <Link href="/lucid/12-submit-order" className="flex items-center gap-2 px-8 py-3 rounded-xl text-[15px] font-bold text-white" style={{ background: 'var(--blue)' }}>
                Create order <span>→</span>
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
