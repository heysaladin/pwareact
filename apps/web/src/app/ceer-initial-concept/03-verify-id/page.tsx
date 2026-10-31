'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebar from '../_components/CeerSidebar';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

export default function VerifyIdPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(true);
  const [nid, setNid] = useState('');

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>

      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens. Please open it on a laptop or desktop.</p>
      </div>

      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>

          <CeerSidebar backHref="/ceer-tamawal/02-what-happens-next" />

          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col p-6">

              {/* Logo row */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt={brandName} className="h-8 w-auto" />
                  <button onClick={() => setDark(d => !d)} className="relative flex items-center shrink-0" style={{ width: 44, height: 24 }}>
                    <span className="absolute inset-0 rounded-full" style={{ background: dark ? '#2a3a4f' : '#dde3ec' }} />
                    <span className="absolute w-[18px] h-[18px] rounded-full shadow" style={{ left: dark ? 23 : 3, top: 3, background: dark ? '#4f95ff' : '#2563eb' }} />
                  </button>
                </div>
                <Link href="/ceer-tamawal/02-what-happens-next" className="text-[13px] font-semibold flex items-center gap-1" style={{ color: 'var(--muted)' }}>
                  ← Back
                </Link>
              </div>

              {/* Step bar */}
              <div className="flex items-center gap-0 mb-6 rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                {[
                  { label: 'Verify Identity', active: true },
                  { label: 'Nafath Approval', active: false },
                  { label: 'Mobile Verification', active: false },
                  { label: 'Consents', active: false },
                  { label: 'Personal Details', active: false },
                ].map((step, i) => (
                  <div
                    key={step.label}
                    className="flex-1 flex items-center gap-2 px-4 py-3 text-[12px] font-semibold"
                    style={{
                      background: step.active ? 'var(--highlight)' : 'transparent',
                      color: step.active ? 'var(--blue)' : 'var(--muted)',
                      borderRight: i < 4 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                      style={{ background: step.active ? 'var(--blue)' : 'var(--border)', color: step.active ? '#fff' : 'var(--muted)' }}
                    >
                      {i + 1}
                    </div>
                    {step.label}
                  </div>
                ))}
              </div>

              {/* Content card */}
              <div className="rounded-[18px] px-[52px] py-[44px] flex flex-col flex-1" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <h1 className="text-[30px] font-extrabold" style={{ color: 'var(--heading)' }}>Enter your verified ID</h1>
                <p className="mt-2 text-[15px]" style={{ color: 'var(--muted)' }}>Please enter your National ID or Iqama number to verify your identity.</p>

                <div className="mt-10" style={{ maxWidth: 560 }}>
                  <label className="block text-[14px] font-semibold mb-2.5" style={{ color: 'var(--text)' }}>National ID / Iqama number</label>
                  <div
                    className="flex items-center gap-3 rounded-[10px] px-[17px] py-[15px]"
                    style={{ border: `2px solid ${nid ? 'var(--blue)' : 'var(--border)'}`, background: 'var(--bg)', boxShadow: nid ? '0 0 0 4px rgba(79,149,255,0.12)' : 'none' }}
                  >
                    <span className="text-xl shrink-0" style={{ color: 'var(--blue)' }}>🪪</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="1 234 567 890"
                      value={nid}
                      onChange={e => setNid(e.target.value)}
                      autoFocus
                      className="flex-1 min-w-0 bg-transparent border-none outline-none text-[16px] font-semibold"
                      style={{ color: 'var(--text)' }}
                    />
                  </div>
                  <p className="mt-2.5 text-[12.5px]" style={{ color: 'var(--muted)' }}>Enter your 10-digit National ID or Iqama number.</p>
                </div>

                <div className="mt-10 rounded-[12px] px-5 py-4 flex items-center gap-3" style={{ background: 'var(--bg)', border: '1px solid var(--border)', maxWidth: 560 }}>
                  <span className="text-lg shrink-0">🔒</span>
                  <p className="text-[13px]" style={{ color: 'var(--muted)' }}>Your identity is verified via Nafath&apos;s official digital identity service. Your information is encrypted and secure.</p>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link href="/ceer-tamawal/02-what-happens-next" className="px-6 py-3 rounded-xl text-[14px] font-bold" style={{ color: 'var(--blue)', border: '1.5px solid var(--blue)', background: 'transparent' }}>
                Cancel
              </Link>
              <Link
                href="/ceer-tamawal/04-nafath-approve"
                className="px-8 py-3 rounded-xl text-[15px] font-bold text-white"
                style={{ background: nid.length >= 10 ? 'var(--blue)' : 'var(--border)', pointerEvents: nid.length >= 10 ? 'auto' : 'none' }}
              >
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
        input::placeholder{color:var(--muted);}
      `}</style>
    </div>
  );
}
