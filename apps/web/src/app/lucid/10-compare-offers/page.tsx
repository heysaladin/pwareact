'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import LucidStepper from '../_components/LucidStepper';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

const banks = [
  { id: 'snb',     logo: '/logo-alahli.png',        en: 'Saudi National Bank', apr: '4.89%', monthly: 'SAR 3,648', total: 'SAR 218,880', dp: 'SAR 45,750', amount: 'SAR 183,000', tenure: '60 Months', fee: 'SAR 0',   settlement: true,  insurance: true,  digital: 'Advanced', rating: 4.8, recommended: true },
  { id: 'alinma',  logo: '/logo-alinma.png',         en: 'alinma bank',         apr: '5.19%', monthly: 'SAR 3,755', total: 'SAR 225,300', dp: 'SAR 45,750', amount: 'SAR 183,000', tenure: '60 Months', fee: 'SAR 500', settlement: true,  insurance: false, digital: 'Standard', rating: 4.5, recommended: false },
  { id: 'riyad',   logo: '/logo-riyad.png',          en: 'Riyad Bank',          apr: '5.49%', monthly: 'SAR 3,697', total: 'SAR 221,820', dp: 'SAR 45,750', amount: 'SAR 183,000', tenure: '60 Months', fee: 'SAR 0',   settlement: false, insurance: true,  digital: 'Standard', rating: 4.3, recommended: false },
  { id: 'tamweel', logo: '/logo-tamweel-aloula.png', en: 'TAMWEEL ALOULA',      apr: '5.29%', monthly: 'SAR 3,820', total: 'SAR 229,200', dp: 'SAR 45,750', amount: 'SAR 183,000', tenure: '60 Months', fee: 'SAR 750', settlement: true,  insurance: false, digital: 'Standard', rating: 4.1, recommended: false },
];

const STAR_PATH = "M12.0664 6.76953C12.2104 7.11556 12.5356 7.35176 12.9092 7.38184L18.2725 7.8125L14.1865 11.3125C13.9018 11.5565 13.7773 11.939 13.8643 12.3037L15.1123 17.5371L10.5215 14.7324C10.2015 14.537 9.79853 14.537 9.47852 14.7324L4.8877 17.5371L6.13574 12.3037C6.22274 11.939 6.09819 11.5565 5.81348 11.3125L1.72754 7.8125L7.09082 7.38184C7.4644 7.35176 7.78959 7.11557 7.93359 6.76953L10 1.80176L12.0664 6.76953Z";
function StarIcon({ fill, uid }: { fill: 'empty' | 'half' | 'full'; uid: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
      <defs>
        <clipPath id={`sf-${uid}`}><rect width="20" height="20"/></clipPath>
        {fill === 'half' && <clipPath id={`sh-${uid}`}><rect width="10" height="20"/></clipPath>}
      </defs>
      <g clipPath={`url(#sf-${uid})`}>
        <path d={STAR_PATH} fill="#e5e7eb" stroke="#d1d5db"/>
        {fill !== 'empty' && (
          <g clipPath={fill === 'half' ? `url(#sh-${uid})` : `url(#sf-${uid})`}>
            <path d={STAR_PATH} fill="#f59e0b" stroke="#d97706"/>
          </g>
        )}
      </g>
    </svg>
  );
}
function Stars({ value, prefix }: { value: number; prefix: string }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => {
        const diff = value - (i - 1);
        const fill = diff >= 0.75 ? 'full' : diff >= 0.25 ? 'half' : 'empty';
        return <StarIcon key={i} fill={fill} uid={`${prefix}-${i}`} />;
      })}
      <span className="text-[11px] ml-1 font-semibold" style={{ color: 'var(--text)' }}>{value}</span>
    </span>
  );
}

const rowIcons: Record<string, JSX.Element> = {
  apr:        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5L5 19M9 7a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
  monthly:    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10H3M16 2v4M8 2v4M7.8 22H16.2C17.88 22 18.72 22 19.36 21.67C19.93 21.39 20.39 20.93 20.67 20.36C21 19.72 21 18.88 21 17.2V8.8C21 7.12 21 6.28 20.67 5.64C20.39 5.07 19.93 4.61 19.36 4.33C18.72 4 17.88 4 16.2 4H7.8C6.12 4 5.28 4 4.64 4.33C4.07 4.61 3.61 5.07 3.33 5.64C3 6.28 3 7.12 3 8.8V17.2C3 18.88 3 19.72 3.33 20.36C3.61 20.93 4.07 21.39 4.64 21.67C5.28 22 6.12 22 7.8 22Z"/></svg>,
  total:      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 5c0 1.1-2.54 2-5.5 2S2 6.1 2 5m11 0c0-1.1-2.54-2-5.5-2S2 3.9 2 5m11 0v1.5M2 5v12c0 1.1 2.46 2 5.5 2m0-6C4.46 13 2 12.1 2 11m5.5 4C4.46 15 2 14.1 2 13"/></svg>,
  dp:         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.67C8.5 15.95 9.54 17 10.83 17H13c1.38 0 2.5-1.12 2.5-2.5S14.38 12 13 12h-2c-1.38 0-2.5-1.12-2.5-2.5S9.62 7 11 7h2.17C14.45 7 15.5 8.04 15.5 9.33M12 5.5V7m0 10v1.5"/></svg>,
  amount:     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
  tenure:     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  fee:        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  settlement: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 14s.12.85 3.64 4.36C9.15 21.88 14.85 21.88 18.36 18.36 19.61 17.12 20.41 15.6 20.78 14M8 14H2v6m14-14s-.12-.85-3.64-4.36C14.85 2.12 9.15 2.12 5.64 5.64 4.39 6.88 3.59 8.4 3.22 10M16 10h6V4"/></svg>,
  insurance:  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11.5l2 2 4.5-4.5M20 12c0 4.91-5.35 8.48-7.3 9.62a1.4 1.4 0 01-1.4 0C9.35 20.48 4 16.91 4 12V7.22c0-.8 0-1.2.13-1.54a2 2 0 01.55-.8C5.07 4.64 5.44 4.5 6.08 4.22L11.44 2.21a2 2 0 011.12 0l5.36 2.01c.64.28 1.01.42 1.3.66a2 2 0 01.55.8C20 6.02 20 6.42 20 7.22V12z"/></svg>,
  digital:    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  rating:     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
};

export default function CompareOffersPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(false);
  const [selected, setSelected] = useState('snb');
  const [checked, setChecked] = useState<Set<string>>(new Set(['snb', 'alinma', 'riyad', 'tamweel']));

  const toggleCheck = (id: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const rows: { label: string; key: keyof typeof banks[0]; bool?: boolean; star?: boolean; blue?: boolean }[] = [
    { label: 'Annual Profit Rate (APR)',       key: 'apr',        blue: true },
    { label: 'Monthly Payment',                key: 'monthly',    blue: true },
    { label: 'Total Payable',                  key: 'total',      blue: true },
    { label: 'Down Payment (20%)',             key: 'dp' },
    { label: 'Amount to Finance',              key: 'amount' },
    { label: 'Tenure',                         key: 'tenure' },
    { label: 'Processing Fee',                 key: 'fee',        blue: true },
    { label: 'Early Settlement Benefit',       key: 'settlement', bool: true },
    { label: 'Free Comprehensive Insurance',   key: 'insurance',  bool: true },
    { label: 'Digital Services',               key: 'digital',    blue: true },
    { label: 'Customer Rating',                key: 'rating',     star: true },
  ];

  const iconKeys = ['apr','monthly','total','dp','amount','tenure','fee','settlement','insurance','digital','rating'];

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens.</p>
      </div>

      <div className="fixed inset-0 overflow-auto flex items-start justify-center pt-4" style={{ background: dark ? '#000' : '#d1d5db' }}>
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebar backHref="/lucid/09-eligibility-offers" />
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex flex-col p-6">

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

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-[30px] font-extrabold leading-tight" style={{ color: 'var(--heading)' }}>Compare &amp; Choose Your Best Offer</h1>
                  <p className="text-[14px] mt-1" style={{ color: 'var(--muted)' }}>Compare financing offers from our trusted partners and choose the one that fits you best.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold shrink-0 ml-6" style={{ border: '1.5px solid var(--border)', color: 'var(--muted)', background: 'transparent' }}
                  onClick={() => setChecked(new Set())}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                  Clear Selection
                </button>
              </div>

              {/* Table */}
              <div className="rounded-[14px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                <table className="w-full" style={{ borderCollapse: 'collapse', tableLayout: 'fixed' }}>
                  <colgroup>
                    <col style={{ width: 200 }} />
                    {banks.map(b => <col key={b.id} />)}
                  </colgroup>

                  {/* Bank header */}
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      <th />
                      {banks.map(b => {
                        const isSel = selected === b.id;
                        return (
                          <th key={b.id} className="px-4 py-4 text-center"
                            style={{ borderLeft: isSel ? '2px solid var(--blue)' : '1px solid var(--border)', borderTop: isSel ? '2px solid var(--blue)' : 'none', borderRight: isSel ? '2px solid var(--blue)' : 'none', verticalAlign: 'top', background: isSel ? 'rgba(37,99,235,0.04)' : 'transparent' }}>
                            <div className="flex flex-col items-center gap-2">
                              {/* Recommended badge or spacer */}
                              {b.recommended
                                ? <span className="px-3 py-0.5 rounded-full text-[10px] font-extrabold text-white" style={{ background: 'var(--blue)' }}>Recommended</span>
                                : <span style={{ display: 'block', height: 20 }} />
                              }
                              {/* Checkbox centered */}
                              <div className="w-[15px] h-[15px] rounded-[3px] flex items-center justify-center cursor-pointer"
                                style={{ border: `1.5px solid ${checked.has(b.id) ? 'var(--blue)' : 'var(--border)'}`, background: checked.has(b.id) ? 'var(--blue)' : 'transparent' }}
                                onClick={() => toggleCheck(b.id)}>
                                {checked.has(b.id) && <svg width="8" height="8" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                              </div>
                              {/* Logo + name */}
                              <img src={b.logo} alt={b.en} style={{ height: 36, maxWidth: 120, objectFit: 'contain', marginTop: 4 }} />
                              <div className="text-[10px]" style={{ color: 'var(--muted)' }}>{b.en}</div>
                              {/* Select button */}
                              <button onClick={() => setSelected(b.id)}
                                className="px-5 py-1.5 rounded-lg text-[12px] font-bold w-full"
                                style={{ background: isSel ? 'var(--highlight)' : 'transparent', color: 'var(--blue)', border: '1.5px solid var(--blue)' }}>
                                {isSel ? 'Selected' : 'Select'}
                              </button>
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>

                  <tbody>
                    {/* Key Details section row */}
                    <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
                      <td className="px-5 py-2.5 text-[12px] font-bold" style={{ color: 'var(--text)' }}>Key Details</td>
                      {banks.map(b => <td key={b.id} style={{ borderLeft: selected === b.id ? '2px solid var(--blue)' : '1px solid var(--border)', borderRight: selected === b.id ? '2px solid var(--blue)' : 'none', background: selected === b.id ? 'rgba(37,99,235,0.04)' : 'transparent' }} />)}
                    </tr>

                    {rows.map((row, ri) => (
                      <tr key={row.label} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-2 text-[12px] font-medium" style={{ color: 'var(--muted)' }}>
                            <span style={{ color: 'var(--muted)' }}>{rowIcons[iconKeys[ri]]}</span>
                            {row.label}
                          </div>
                        </td>
                        {banks.map(b => {
                          const val = b[row.key];
                          const isSelected = selected === b.id;
                          return (
                            <td key={b.id} className="px-4 py-3 text-center text-[13px] font-semibold"
                              style={{ borderLeft: isSelected ? '2px solid var(--blue)' : '1px solid var(--border)', borderRight: isSelected ? '2px solid var(--blue)' : 'none', background: isSelected ? 'rgba(37,99,235,0.04)' : 'transparent' }}>
                              {row.star ? (
                                <div className="flex justify-center"><Stars value={val as number} prefix={`${b.id}-${row.key}`} /></div>
                              ) : row.bool ? (
                                val ? (
                                  <span className="flex items-center justify-center gap-1 text-[12px]" style={{ color: '#16a34a' }}>
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    Yes
                                  </span>
                                ) : (
                                  <span className="flex items-center justify-center gap-1 text-[12px]" style={{ color: 'var(--muted)' }}>
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                                    No
                                  </span>
                                )
                              ) : (
                                <span style={{ color: (row.blue && isSelected) ? 'var(--blue)' : 'var(--text)', fontWeight: (row.blue && isSelected) ? 700 : 600 }}>{String(val)}</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}

                    {/* Bottom select row */}
                    <tr>
                      <td />
                      {banks.map(b => (
                        <td key={b.id} className="px-4 py-3" style={{ borderLeft: selected === b.id ? '2px solid var(--blue)' : '1px solid var(--border)', borderRight: selected === b.id ? '2px solid var(--blue)' : 'none', borderBottom: selected === b.id ? '2px solid var(--blue)' : 'none', background: selected === b.id ? 'rgba(37,99,235,0.04)' : 'transparent' }}>
                          <button onClick={() => setSelected(b.id)}
                            className="w-full py-2 rounded-lg text-[13px] font-bold flex items-center justify-center gap-1.5"
                            style={{ background: selected === b.id ? 'var(--highlight)' : 'transparent', color: 'var(--blue)', border: '1.5px solid var(--blue)' }}>
                            {selected === b.id && <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                            {selected === b.id ? 'Selected' : 'Select'}
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link href="/lucid/09-eligibility-offers" className="flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-bold" style={{ border: '1.5px solid var(--border)', color: 'var(--text)', background: 'transparent' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                Back to Offers
              </Link>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-bold" style={{ border: '1.5px solid var(--blue)', color: 'var(--blue)', background: 'transparent' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
                  Save Comparison
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
