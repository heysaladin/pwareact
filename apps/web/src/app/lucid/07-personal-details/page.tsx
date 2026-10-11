'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import LucidStepper from '../_components/LucidStepper';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

const fields = [
  { label: 'Social Status', req: true, type: 'select', opts: ['Single', 'Married', 'Divorced', 'Widowed'], default: 'Single' },
  { label: 'Family Members (Number of Dependents)', req: true, type: 'select', opts: ['0', '1', '2', '3', '4', '5+'], default: '0' },
  { label: 'How many dependents are you currently paying education fees for?', req: true, type: 'select', opts: ['0', '1', '2', '3', '4+'], default: '0' },
  { label: 'Monthly Education Fees for Dependents', req: false, type: 'text', placeholder: 'Enter amount (SAR)' },
  { label: 'Salary Bank', req: true, type: 'select', opts: ['Al Rajhi Bank', 'SNB', 'Alinma Bank', 'Riyad Bank', 'SABB', 'Other'], default: 'Al Rajhi Bank' },
  { label: 'City', req: true, type: 'select', opts: ['Riyadh', 'Jeddah', 'Dammam', 'Mecca', 'Medina', 'Other'], default: 'Riyadh' },
  { label: 'Home Ownership', req: true, type: 'select', opts: ['Owned', 'Rented', 'Family-owned', 'Other'], default: 'Owned' },
  { label: 'Type of Residential', req: true, type: 'select', opts: ['Apartment', 'Villa', 'Compound', 'Other'], default: 'Apartment' },
  { label: 'Education Level', req: true, type: 'select', opts: ["Bachelor's Degree", 'Secondary', 'Master', 'PhD', 'Other'], default: "Bachelor's Degree" },
];

const accordions = [
  {
    label: 'Employment Details',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/></svg>,
    items: ['Employer name', 'Employment type', 'Years of service', 'Position'],
  },
  {
    label: 'Additional Income Details',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    items: ['Income source', 'Monthly amount'],
  },
  {
    label: 'Financial Commitments',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    items: ['Existing loans', 'Credit cards', 'Monthly obligations'],
  },
];

export default function PersonalDetailsPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const [vals, setVals] = useState<Record<number, string>>(
    Object.fromEntries(fields.map((f, i) => f.default ? [i, f.default] : []).filter(e => e.length))
  );

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens.</p>
      </div>
      <div className="fixed inset-0 overflow-auto flex items-start justify-center pt-4" style={{ background: dark ? '#000' : '#d1d5db' }}>
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebar backHref="/lucid/06-consents-contracts" />
          <div className="flex-1 min-w-0 flex flex-col">
            {/* Top nav */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4">
              <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt={brandName} className="h-8 w-auto" />
              <div className="flex items-center gap-4">
                <Link href="/lucid/06-consents-contracts" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>← Back to Lucid</Link>
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
            </div>

            {/* Stepper */}
            <div className="px-6">
              <LucidStepper activeStep={4} />
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col px-6 pb-0 overflow-y-auto">
              {/* Title row */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h1 className="text-[48px] font-light mb-1" style={{ color: 'var(--heading)', fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif" }}>Disclosures &amp; Personal Details</h1>
                  <p className="text-[15px]" style={{ color: 'var(--muted)' }}>Please provide your personal information accurately to help us assess your eligibility.</p>
                </div>
                <div className="shrink-0 flex items-center gap-2.5 rounded-[12px] px-4 py-3 ml-6" style={{ background: 'var(--card)', border: '1px solid var(--border)', maxWidth: 260 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  <p className="text-[12px] leading-relaxed" style={{ color: 'var(--muted)' }}>Your data is secure and will only be used for financing assessment and verification.</p>
                </div>
              </div>

              {/* Personal Details card */}
              <div className="rounded-[16px] overflow-hidden mb-4" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                <div className="px-5 py-3.5" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h2 className="text-[15px] font-bold" style={{ color: 'var(--heading)' }}>Personal Details</h2>
                </div>
                <div className="p-5 grid grid-cols-3 gap-x-4 gap-y-5">
                  {fields.map((f, i) => (
                    <div key={f.label}>
                      <label className="block text-[13px] mb-1.5" style={{ color: 'var(--text)' }}>
                        {f.label}{f.req && <span style={{ color: '#e53e3e' }}> *</span>}
                      </label>
                      {f.type === 'select' ? (
                        <div className="relative">
                          <select
                            value={vals[i] || ''}
                            onChange={e => setVals(p => ({ ...p, [i]: e.target.value }))}
                            className="w-full rounded-[10px] px-3 py-2.5 text-[13.5px] outline-none appearance-none cursor-pointer pr-8"
                            style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
                          >
                            {f.opts!.map(o => <option key={o} value={o}>{o}</option>)}
                          </select>
                          <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                        </div>
                      ) : (
                        <input
                          type="text"
                          placeholder={f.placeholder}
                          className="w-full rounded-[10px] px-3 py-2.5 text-[13.5px] outline-none"
                          style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Disclosures */}
              <div className="mb-4">
                <h2 className="text-[18px] font-bold mb-1" style={{ color: 'var(--heading)' }}>Additional Disclosures</h2>
                <p className="text-[13px] mb-3" style={{ color: 'var(--muted)' }}>Please answer the following questions to the best of your knowledge.</p>
                <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                  {accordions.map((acc, i) => (
                    <div key={acc.label} style={{ borderBottom: i < accordions.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <button
                        className="w-full flex items-center justify-between px-5 py-4 text-left"
                        style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}
                        onClick={() => setOpen(open === i ? null : i)}
                      >
                        <div className="flex items-center gap-3">
                          <span style={{ color: 'var(--muted)' }}>{acc.icon}</span>
                          <span className="text-[14px] font-semibold">{acc.label}</span>
                        </div>
                        <svg style={{ color: 'var(--muted)', transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
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
            </div>

            {/* Bottom bar */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <div className="flex items-center gap-2 rounded-[10px] px-4 py-2.5 flex-1" style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span className="text-[12.5px]" style={{ color: '#1e40af' }}>All information you provide will be used for financing assessment and will remain confidential.</span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button className="px-7 py-2.5 rounded-xl text-[14px] font-semibold" style={{ border: '1.5px solid var(--border)', color: 'var(--text)', background: 'var(--card)', cursor: 'pointer' }}>
                  Save as Draft
                </button>
                <Link href="/lucid/08-collecting-reports" className="px-8 py-2.5 rounded-xl text-[14px] font-bold text-white flex items-center gap-2" style={{ background: 'var(--blue)' }}>
                  Confirm &amp; Next
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        [data-theme="dark"]{--bg:#0b1420;--card:#121e2e;--border:#2a3a4f;--text:#e6edf5;--muted:#93a4b8;--blue:#4f95ff;--heading:#dbe7f5;--highlight:#16283f;}
        [data-theme="light"]{--bg:#f4f6f9;--card:#ffffff;--border:#dde3ec;--text:#1a2636;--muted:#64748b;--blue:#2563eb;--heading:#0f172a;--highlight:#f8fafc;}
        .viewport-warning{background:var(--bg);}
        @media(max-width:1454px),(max-height:1014px){.frame{display:none;}.viewport-warning{display:flex!important;}}
        select option{background:var(--card);color:var(--text);}
        input::placeholder{color:var(--muted);}
      `}</style>
    </div>
  );
}
