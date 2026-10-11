'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import LucidStepper from '../_components/LucidStepper';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

const consents = [
  { id: 'tamawal', logo: '/logo-tamawal-web-blue.svg', title: 'Tamawal Consent', desc: 'Consent to Tamawal collecting, using, processing, storing, and sharing my personal data as necessary to assess my eligibility and provide financing solutions.' },
  { id: 'simah', logo: '/logo-simah.png', title: 'SIMAH Consent', desc: 'Consent to Tamawal requesting my credit information from SIMAH to assess my creditworthiness and financing eligibility.' },
  { id: 'nafath', logo: '/logo-nafath.png', title: 'Nafath Consent', desc: 'Consent to verify my identity through Nafath and retrieve my personal data from government services.' },
  { id: 'gosi', logo: '/logo-gosi.png', title: 'GOSI Consent', desc: 'Consent to retrieve my employment and income details from GOSI.' },
];

const agreements = [
  { id: 'terms', title: 'Tamawal Terms & Conditions', desc: 'I have read, understood, and agree to the Tamawal Terms & Conditions.', link: 'View document' },
  { id: 'sama', title: 'SAMA Financing Disclosures', desc: 'I have read and agree to the Saudi Central Bank (SAMA) Financing Disclosures.', link: 'View document' },
];

const infoCards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    iconBg: '#2563eb',
    title: 'Why we need your consent?',
    desc: 'These consents allow Tamawal to securely retrieve and verify your information from government and financial entities to assess your eligibility and provide you with suitable financing offers.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
    iconBg: '#f1f5f9',
    title: 'Your data is protected',
    desc: 'We use secure, encrypted channels to access your information.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
    ),
    iconBg: '#f1f5f9',
    title: 'You are in control',
    desc: 'You can review all details before providing your consent.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    ),
    iconBg: '#f1f5f9',
    title: 'Used only for this application',
    desc: 'Your information will only be used for financing assessment and related processing.',
  },
];

function Checkbox({ checked }: { checked: boolean }) {
  return (
    <div style={{
      width: 20, height: 20, borderRadius: 5, flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: checked ? '#2563eb' : 'transparent',
      border: `2px solid ${checked ? '#2563eb' : '#dde3ec'}`,
    }}>
      {checked && (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      )}
    </div>
  );
}

export default function ConsentsContractsPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(false);
  const allIds = [...consents, ...agreements].map(i => i.id);
  const [checked, setChecked] = useState<Record<string, boolean>>(
    Object.fromEntries(allIds.map(id => [id, true]))
  );
  const toggle = (id: string) => setChecked(p => ({ ...p, [id]: !p[id] }));
  const allChecked = allIds.every(id => checked[id]);

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens.</p>
      </div>
      <div className="fixed inset-0 overflow-auto flex items-start justify-center pt-4" style={{ background: dark ? '#000' : '#d1d5db' }}>
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebar backHref="/lucid/05-mobile-verification" />
          <div className="flex-1 min-w-0 flex flex-col">
            {/* Top nav */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4">
              <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt={brandName} className="h-8 w-auto" />
              <div className="flex items-center gap-4">
                <Link href="/lucid/05-mobile-verification" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>← Back to Lucid</Link>
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
              <LucidStepper activeStep={3} />
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col px-6 pb-0 overflow-y-auto">
              <h1 className="text-[48px] font-light mb-1" style={{ color: 'var(--heading)', fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif" }}>Consents &amp; Contracts</h1>
              <p className="text-[15px] mb-5" style={{ color: 'var(--muted)' }}>Please review and accept the required consents and agreements to continue your application.</p>

              <div className="flex gap-5 flex-1">
                {/* Left: cards */}
                <div className="flex-1 min-w-0 flex flex-col gap-4">
                  {/* Required consents */}
                  <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <div className="px-5 py-3.5" style={{ borderBottom: '1px solid var(--border)' }}>
                      <h2 className="text-[14px] font-bold" style={{ color: 'var(--heading)' }}>Required consents</h2>
                    </div>
                    {consents.map((item, i) => (
                      <div key={item.id} className="flex items-center gap-4 px-5 py-4 cursor-pointer" style={{ borderBottom: i < consents.length - 1 ? '1px solid var(--border)' : 'none' }} onClick={() => toggle(item.id)}>
                        <div className="shrink-0 flex items-center justify-center" style={{ width: 68, height: 48 }}>
                          <img src={item.logo} alt={item.title} style={{ maxWidth: 68, maxHeight: 44, objectFit: 'contain' }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[14px] font-semibold mb-0.5" style={{ color: 'var(--heading)' }}>{item.title}</div>
                          <div className="text-[12.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{item.desc}</div>
                        </div>
                        <a href="#" className="text-[12.5px] font-semibold shrink-0 flex items-center gap-1" style={{ color: 'var(--blue)' }} onClick={e => e.stopPropagation()}>
                          View details
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        </a>
                        <Checkbox checked={!!checked[item.id]} />
                      </div>
                    ))}
                  </div>

                  {/* Agreements & Disclosures */}
                  <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <div className="px-5 py-3.5" style={{ borderBottom: '1px solid var(--border)' }}>
                      <h2 className="text-[14px] font-bold" style={{ color: 'var(--heading)' }}>Agreements &amp; Disclosures</h2>
                    </div>
                    {agreements.map((item, i) => (
                      <div key={item.id} className="flex items-center gap-4 px-5 py-4 cursor-pointer" style={{ borderBottom: i < agreements.length - 1 ? '1px solid var(--border)' : 'none' }} onClick={() => toggle(item.id)}>
                        <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0" style={{ background: 'var(--highlight)', border: '1px solid var(--border)' }}>
                          {item.id === 'terms' ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                          ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[14px] font-semibold mb-0.5" style={{ color: 'var(--heading)' }}>{item.title}</div>
                          <div className="text-[12.5px]" style={{ color: 'var(--muted)' }}>{item.desc}</div>
                        </div>
                        <a href="#" className="text-[12.5px] font-semibold shrink-0 flex items-center gap-1" style={{ color: 'var(--blue)' }} onClick={e => e.stopPropagation()}>
                          {item.link}
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        </a>
                        <Checkbox checked={!!checked[item.id]} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: info sidebar */}
                <div className="shrink-0 flex flex-col gap-0" style={{ width: 300, borderRadius: 16, border: '1px solid var(--border)', background: 'var(--card)', alignSelf: 'start' }}>
                  {infoCards.map((card, i) => (
                    <div key={i} className="flex gap-3 px-4 py-4" style={{ borderBottom: i < infoCards.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: card.iconBg }}>
                        {card.icon}
                      </div>
                      <div>
                        <div className="text-[13px] font-bold mb-1" style={{ color: 'var(--heading)' }}>{card.title}</div>
                        <div className="text-[12px] leading-relaxed" style={{ color: 'var(--muted)' }}>{card.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <div className="flex items-center gap-2 text-[12.5px]" style={{ color: 'var(--muted)' }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--highlight)', border: '1px solid var(--border)' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                All consents and agreements are mandatory to proceed with your application.
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link href="/lucid/05-mobile-verification" className="px-7 py-2.5 rounded-xl text-[14px] font-semibold" style={{ border: '1.5px solid var(--border)', color: 'var(--text)', background: 'var(--card)' }}>
                  Back
                </Link>
                <Link href="/lucid/07-personal-details" className="px-8 py-2.5 rounded-xl text-[14px] font-bold text-white flex items-center gap-2" style={{ background: allChecked ? 'var(--blue)' : 'var(--border)', pointerEvents: allChecked ? 'auto' : 'none' }}>
                  Continue
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
      `}</style>
    </div>
  );
}
