'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

const banks = [
  { id: 'snb', ar: 'SNB الأهلي', en: 'Saudi National Bank', apr: '4.69%', monthly: 'SAR 3,648', total: 'SAR 218,880', dp: 'SAR 45,750', tenure: '60 Months', fee: 'SAR 0', settlement: true, insurance: true, digital: 'Advanced', rating: '4.8' },
  { id: 'alinma', ar: 'مصرف الإنماء', en: 'alinma bank', apr: '4.29%', monthly: 'SAR 3,564', total: 'SAR 213,840', dp: 'SAR 45,750', tenure: '60 Months', fee: 'SAR 500', settlement: true, insurance: false, digital: 'Standard', rating: '4.5' },
  { id: 'riyad', ar: 'بنك الرياض', en: 'Riyad Bank', apr: '4.99%', monthly: 'SAR 3,721', total: 'SAR 223,260', dp: 'SAR 45,750', tenure: '60 Months', fee: 'SAR 0', settlement: false, insurance: true, digital: 'Standard', rating: '4.3' },
  { id: 'tamweel', ar: 'تمويل الأولى', en: 'Tamweel Aloula', apr: '5.19%', monthly: 'SAR 3,775', total: 'SAR 226,500', dp: 'SAR 45,750', tenure: '60 Months', fee: 'SAR 750', settlement: true, insurance: false, digital: 'Standard', rating: '4.1' },
];

export default function CompareOffersPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(true);
  const [selected, setSelected] = useState('snb');

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

              <div className="flex items-center justify-between mb-2">
                <div>
                  <h1 className="text-[26px] font-extrabold" style={{ color: 'var(--heading)' }}>Compare & Choose Your Best Offer</h1>
                  <p className="text-[13px] mt-0.5" style={{ color: 'var(--muted)' }}>Compare financing offers from our trusted partners and select the best fit for you.</p>
                </div>
                <button className="text-[12px] font-semibold" style={{ color: 'var(--blue)', background: 'none', border: 'none', cursor: 'pointer' }}>Clear Selection</button>
              </div>
              <p className="text-[12px] mb-4" style={{ color: 'var(--muted)' }}>Compare up to 4 offers</p>

              {/* Comparison table */}
              <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                {/* Bank header row */}
                <div className="grid" style={{ gridTemplateColumns: '180px repeat(4, 1fr)', borderBottom: '1px solid var(--border)' }}>
                  <div className="px-4 py-3" />
                  {banks.map(b => (
                    <div key={b.id} className="px-3 py-3 flex flex-col items-center gap-2 text-center" style={{ borderLeft: '1px solid var(--border)' }}>
                      <div className="text-[14px] font-bold">{b.ar}</div>
                      <div className="text-[11px]" style={{ color: 'var(--muted)' }}>{b.en}</div>
                      <button
                        onClick={() => setSelected(b.id)}
                        className="px-4 py-1.5 rounded-full text-[12px] font-bold"
                        style={{ background: selected === b.id ? 'var(--blue)' : 'transparent', color: selected === b.id ? '#fff' : 'var(--blue)', border: `1.5px solid var(--blue)` }}
                      >
                        {selected === b.id ? '✓ Selected' : 'Select'}
                      </button>
                    </div>
                  ))}
                </div>

                {/* Section header */}
                <div className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider" style={{ background: 'var(--bg)', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
                  Key Details
                </div>

                {/* Rows */}
                {[
                  { label: 'Annual Profit Rate (APR)', key: 'apr', blue: true },
                  { label: 'Monthly Payment', key: 'monthly' },
                  { label: 'Total Payable', key: 'total' },
                  { label: 'Down Payment', key: 'dp' },
                  { label: 'Tenure', key: 'tenure' },
                  { label: 'Processing Fee', key: 'fee' },
                  { label: 'Early Settlement', key: 'settlement', bool: true },
                  { label: 'Free Comprehensive Insurance', key: 'insurance', bool: true },
                  { label: 'Digital Services', key: 'digital' },
                  { label: 'Customer Rating', key: 'rating', star: true },
                ].map((row, i) => (
                  <div key={row.label} className="grid" style={{ gridTemplateColumns: '180px repeat(4, 1fr)', borderBottom: '1px solid var(--border)' }}>
                    <div className="px-4 py-3 text-[12.5px] font-semibold flex items-center" style={{ color: 'var(--muted)' }}>{row.label}</div>
                    {banks.map(b => {
                      const val = b[row.key as keyof typeof b];
                      return (
                        <div key={b.id} className="px-3 py-3 flex items-center justify-center text-[13px] font-semibold" style={{ borderLeft: '1px solid var(--border)', color: row.blue ? 'var(--blue)' : 'var(--text)' }}>
                          {row.bool
                            ? <span style={{ color: val ? 'var(--green)' : 'var(--muted)' }}>{val ? '✓ Yes' : '✕ No'}</span>
                            : row.star
                            ? <span>★ {val}</span>
                            : <span>{String(val)}</span>
                          }
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link href="/ceer-tamawal/09-eligibility-offers" className="px-5 py-3 rounded-xl text-[14px] font-bold" style={{ border: '1.5px solid var(--blue)', color: 'var(--blue)' }}>← Back to Offers</Link>
              <div className="flex items-center gap-3">
                <button className="px-5 py-3 rounded-xl text-[14px] font-bold" style={{ border: '1.5px solid var(--border)', color: 'var(--text)', background: 'transparent' }}>Save Comparison</button>
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
      `}</style>
    </div>
  );
}
