'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

const fields = [
  { label: 'Social Status *', type: 'select', opts: ['Married', 'Single', 'Divorced', 'Widowed'] },
  { label: 'Number of Dependents *', type: 'select', opts: ['0', '1', '2', '3', '4', '5+'] },
  { label: 'Dependents in education', type: 'select', opts: ['0', '1', '2', '3', '4+'] },
  { label: 'Monthly Education Fees (SAR)', type: 'text', placeholder: 'Enter amount (SAR)' },
  { label: 'Salary Bank *', type: 'select', opts: ['Al Rajhi Bank', 'SNB', 'Alinma Bank', 'Riyad Bank', 'SABB', 'Other'] },
  { label: 'City *', type: 'select', opts: ['Riyadh', 'Jeddah', 'Dammam', 'Mecca', 'Medina', 'Other'] },
  { label: 'Home Ownership *', type: 'select', opts: ['Owned', 'Rented', 'Family-owned', 'Other'] },
  { label: 'Type of Residential *', type: 'select', opts: ['Apartment', 'Villa', 'Compound', 'Other'] },
  { label: 'Education Level *', type: 'select', opts: ['Secondary', 'Bachelor', 'Master', 'PhD', 'Other'] },
];
const accordions = [
  { label: 'Employment Details', items: ['Employer name', 'Employment type', 'Years of service', 'Position'] },
  { label: 'Additional Income Details', items: ['Income source', 'Monthly amount'] },
  { label: 'Financial Commitments', items: ['Existing loans', 'Credit cards', 'Monthly obligations'] },
];

export default function PersonalDetailsPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState<number | null>(null);
  const [vals, setVals] = useState<Record<number, string>>({});

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens.</p>
      </div>
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebar backHref="/ceer-tamawal/06-consents-contracts" />
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt={brandName} className="h-8 w-auto" />
                  <button onClick={() => setDark(d => !d)} className="relative flex items-center shrink-0" style={{ width: 44, height: 24 }}>
                    <span className="absolute inset-0 rounded-full" style={{ background: dark ? '#2a3a4f' : '#dde3ec' }} />
                    <span className="absolute w-[18px] h-[18px] rounded-full shadow" style={{ left: dark ? 23 : 3, top: 3, background: dark ? '#4f95ff' : '#2563eb' }} />
                  </button>
                </div>
                <Link href="/ceer-tamawal/06-consents-contracts" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>← Back</Link>
              </div>
              <h1 className="text-[28px] font-extrabold mb-1" style={{ color: 'var(--heading)' }}>Disclosures & Personal Details</h1>
              <p className="text-[15px] mb-4" style={{ color: 'var(--muted)' }}>Please provide your personal information accurately to enable a complete credit assessment.</p>
              <div className="flex items-center gap-2.5 rounded-[10px] px-4 py-3 mb-5" style={{ background: 'var(--highlight)', border: '1px solid var(--border)' }}>
                <span>🔒</span>
                <p className="text-[13px]" style={{ color: 'var(--muted)' }}>Your data is secure and protected under SAMA regulations.</p>
              </div>

              <div className="rounded-[16px] overflow-hidden mb-4" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                <div className="px-5 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h2 className="text-[14px] font-bold" style={{ color: 'var(--heading)' }}>Personal Details</h2>
                </div>
                <div className="p-5 grid grid-cols-3 gap-4">
                  {fields.map((f, i) => (
                    <div key={f.label}>
                      <label className="block text-[13px] font-semibold mb-2" style={{ color: 'var(--text)' }}>{f.label}</label>
                      {f.type === 'select' ? (
                        <select value={vals[i] || ''} onChange={e => setVals(p => ({ ...p, [i]: e.target.value }))} className="w-full rounded-[10px] px-3 py-2.5 text-[13.5px] outline-none appearance-none cursor-pointer" style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: vals[i] ? 'var(--text)' : 'var(--muted)' }}>
                          <option value="" disabled>Select…</option>
                          {f.opts!.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      ) : (
                        <input type="text" placeholder={f.placeholder} className="w-full rounded-[10px] px-3 py-2.5 text-[13.5px] outline-none" style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                <div className="px-5 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h2 className="text-[14px] font-bold" style={{ color: 'var(--heading)' }}>Additional Disclosures</h2>
                  <p className="text-[12.5px] mt-0.5" style={{ color: 'var(--muted)' }}>Please answer the following questions to the best of your knowledge.</p>
                </div>
                {accordions.map((acc, i) => (
                  <div key={acc.label} style={{ borderBottom: i < accordions.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <button className="w-full flex items-center justify-between px-5 py-4 text-left text-[14px] font-semibold" style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }} onClick={() => setOpen(open === i ? null : i)}>
                      {acc.label}
                      <span style={{ color: 'var(--muted)', display: 'inline-block', transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
                    </button>
                    {open === i && (
                      <div className="px-5 pb-4 grid grid-cols-2 gap-3">
                        {acc.items.map(item => (
                          <div key={item}>
                            <label className="block text-[12px] font-semibold mb-1.5" style={{ color: 'var(--muted)' }}>{item}</label>
                            <input type="text" className="w-full rounded-[8px] px-3 py-2 text-[13px] outline-none" style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <div className="flex items-center gap-2 text-[12.5px]" style={{ color: 'var(--muted)' }}>
                <span>🔒</span> Your information remains secure and encrypted throughout this process.
              </div>
              <Link href="/ceer-tamawal/08-collecting-reports" className="px-8 py-3 rounded-xl text-[15px] font-bold text-white" style={{ background: 'var(--blue)' }}>
                Confirm & Next →
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
        select option{background:var(--card);color:var(--text);}
        input::placeholder{color:var(--muted);}
      `}</style>
    </div>
  );
}
