'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

const consents = [
  { id: 'tamawal', logoText: 'T', logoColor: '#4f95ff', title: 'Tamawal Consent', desc: 'Consent to Tamawal collecting, using, processing, and sharing your personal and financial data for the purpose of financing assessment.' },
  { id: 'simah', logoText: 'سمة\nSIMAH', logoColor: '#1db954', title: 'SIMAH Consent', desc: 'Consent to Tamawal requesting my credit information and credit score from SIMAH (Saudi Credit Bureau).' },
];
const agreements = [
  { id: 'terms', icon: '📄', title: 'Tamawal Terms & Conditions', desc: 'I have read, understood, and agree to the Tamawal Terms & Conditions governing the financing application process.', link: 'View document' },
  { id: 'sama', icon: '🏛️', title: 'SAMA Financing Disclosures', desc: 'I have read and agree to the Saudi Central Bank (SAMA) required financing disclosures and product information statements.', link: 'View document' },
];

export default function ConsentsContractsPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(true);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setChecked(p => ({ ...p, [id]: !p[id] }));
  const allChecked = [...consents, ...agreements].every(i => checked[i.id]);

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens.</p>
      </div>
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebar backHref="/ceer-tamawal/05-mobile-verification" />
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
                <Link href="/ceer-tamawal/05-mobile-verification" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>← Back</Link>
              </div>
              <h1 className="text-[28px] font-extrabold mb-1" style={{ color: 'var(--heading)' }}>Consents & Contracts</h1>
              <p className="text-[15px] mb-4" style={{ color: 'var(--muted)' }}>Please review and accept the required consents and agreements to continue.</p>
              <div className="flex items-center gap-2.5 rounded-[10px] px-4 py-3 mb-5" style={{ background: 'var(--highlight)', border: '1px solid var(--border)' }}>
                <span>🔒</span>
                <p className="text-[13px]" style={{ color: 'var(--muted)' }}>Your data is secure and will only be used for financing purposes in accordance with SAMA regulations.</p>
              </div>

              <div className="rounded-[16px] overflow-hidden mb-4" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                <div className="px-5 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h2 className="text-[14px] font-bold" style={{ color: 'var(--heading)' }}>Required consents</h2>
                </div>
                {consents.map((item, i) => (
                  <div key={item.id} className="flex items-center gap-4 px-5 py-4 cursor-pointer" style={{ borderBottom: i < consents.length - 1 ? '1px solid var(--border)' : 'none' }} onClick={() => toggle(item.id)}>
                    <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 text-[10px] font-black text-center whitespace-pre leading-[13px]" style={{ background: `${item.logoColor}20`, color: item.logoColor, border: `1px solid ${item.logoColor}40` }}>{item.logoText}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[14px] font-semibold">{item.title}</div>
                      <div className="text-[12.5px] mt-0.5" style={{ color: 'var(--muted)' }}>{item.desc}</div>
                    </div>
                    <a href="#" className="text-[12px] font-semibold shrink-0" style={{ color: 'var(--blue)' }} onClick={e => e.stopPropagation()}>View details</a>
                    <div className="w-5 h-5 rounded-[5px] flex items-center justify-center shrink-0" style={{ background: checked[item.id] ? 'var(--blue)' : 'transparent', border: `2px solid ${checked[item.id] ? 'var(--blue)' : 'var(--border)'}` }}>
                      {checked[item.id] && <span className="text-white text-[11px] font-bold">✓</span>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                <div className="px-5 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h2 className="text-[14px] font-bold" style={{ color: 'var(--heading)' }}>Agreements & Disclosures</h2>
                </div>
                {agreements.map((item, i) => (
                  <div key={item.id} className="flex items-center gap-4 px-5 py-4 cursor-pointer" style={{ borderBottom: i < agreements.length - 1 ? '1px solid var(--border)' : 'none' }} onClick={() => toggle(item.id)}>
                    <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 text-xl" style={{ background: 'var(--highlight)' }}>{item.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[14px] font-semibold">{item.title}</div>
                      <div className="text-[12.5px] mt-0.5" style={{ color: 'var(--muted)' }}>{item.desc}</div>
                    </div>
                    <a href="#" className="text-[12px] font-semibold shrink-0" style={{ color: 'var(--blue)' }} onClick={e => e.stopPropagation()}>{item.link}</a>
                    <div className="w-5 h-5 rounded-[5px] flex items-center justify-center shrink-0" style={{ background: checked[item.id] ? 'var(--blue)' : 'transparent', border: `2px solid ${checked[item.id] ? 'var(--blue)' : 'var(--border)'}` }}>
                      {checked[item.id] && <span className="text-white text-[11px] font-bold">✓</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <div className="flex items-center gap-2 text-[12.5px]" style={{ color: 'var(--muted)' }}>
                <span>🔒</span> Your information remains secure and encrypted throughout this process.
              </div>
              <Link href="/ceer-tamawal/07-personal-details" className="px-8 py-3 rounded-xl text-[15px] font-bold text-white" style={{ background: allChecked ? 'var(--blue)' : 'var(--border)', pointerEvents: allChecked ? 'auto' : 'none' }}>
                Continue →
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
