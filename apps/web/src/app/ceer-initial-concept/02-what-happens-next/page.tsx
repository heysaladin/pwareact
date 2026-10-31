'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

const CEER = ({ id }: { id: string }) => (
  <svg width="100" height="14" viewBox="0 0 100 14" fill="none" style={{ color: 'var(--text)' }}>
    <g clipPath={`url(#${id})`}>
      <path d="M48.4003 14H25.6232L28.4698 11.1994H45.5529L48.4003 14Z" fill="currentColor"/>
      <path d="M99.6471 5.5997L96.7994 8.4003H26.8022L21.1079 14H2.84656L0 11.1994V6.98782L2.84656 9.78729V11.1994H19.9293L25.6232 5.5997H99.6471Z" fill="currentColor"/>
      <path d="M22.7759 0L19.9293 2.79948H2.84656V6.99756L0 4.19809V2.79948L2.84656 0H22.7759Z" fill="currentColor"/>
      <path d="M48.4003 0L45.5529 2.79948H25.6232V0H48.4003Z" fill="currentColor"/>
      <path d="M74.0235 0L71.1761 2.79948H54.0941V5.5997H51.2468V0H74.0235Z" fill="currentColor"/>
      <path d="M79.7173 8.4003H76.87V14H79.7173V8.4003Z" fill="currentColor"/>
      <path d="M74.0235 14H51.2468V8.4003H54.0941V11.1994H71.1761L74.0235 14Z" fill="currentColor"/>
      <path d="M99.6471 2.79948V5.5997H96.7994V2.79948H79.7177V5.5997H76.87V0H96.7994L99.6471 2.79948Z" fill="currentColor"/>
      <path d="M99.6471 14H95.6208L89.9269 8.4003H93.9539L99.6471 14Z" fill="currentColor"/>
    </g>
    <defs><clipPath id={id}><rect width="99.6471" height="14" fill="white"/></clipPath></defs>
  </svg>
);

export default function WhatHappensNextPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(false);

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ minHeight: '100vh', background: 'var(--bg-page)', color: 'var(--text)', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
      <div className="vp-warn" style={{ display: 'none', position: 'fixed', inset: 0, zIndex: 50, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 32, textAlign: 'center', background: 'var(--surface)' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🖥️</div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--navy)' }}>Screen too small</h2>
        <p style={{ marginTop: 10, fontSize: 15, color: 'var(--muted)', maxWidth: 420 }}>This app is designed for desktop (1280px+). Please use a wider screen.</p>
      </div>

      {/* Header */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 32px', borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt={brandName} style={{ width: 112, height: 33 }} />
          <div style={{ width: 1, height: 24, background: 'var(--border)' }} />
          <CEER id="ceer-02" />
        </div>
        <Link href="/ceer-tamawal/01-preliminary-offers" style={{ fontSize: 14, fontWeight: 600, color: 'var(--blue)' }}>← Back to offers</Link>
      </header>

      {/* Title section */}
      <div style={{ textAlign: 'center', padding: '32px 32px 0', maxWidth: 1280, margin: '0 auto' }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, color: 'var(--navy)' }}>What happens next?</h1>
        <p style={{ color: 'var(--muted)', fontSize: 15, marginTop: 10 }}>Here&apos;s how we get you started after you choose a preliminary offer.</p>
      </div>

      {/* Flow diagram */}
      <div style={{ maxWidth: 1280, margin: '32px auto 0', padding: '0 32px' }}>
        {/* Step labels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 40, marginBottom: 18 }}>
          {[
            { num: 1, label: 'Start' },
            { num: 2, label: 'Check CEER Login' },
            { num: 3, label: `Check ${brandName} Customer` },
            { num: 4, label: 'Next Step' },
          ].map((s, i) => (
            <div key={s.num} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, color: 'var(--blue)' }}>
              <div style={{ width: 22, height: 22, flexShrink: 0, borderRadius: '50%', background: 'var(--blue)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>{s.num}</div>
              {s.label}
              {i < 3 && <div style={{ flex: 1, borderTop: '2px dotted var(--border)', marginLeft: 6 }} />}
            </div>
          ))}
        </div>

        {/* Diagram grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridTemplateRows: 'auto auto', columnGap: 40, rowGap: 56 }}>
          {/* Row 1 */}
          <div style={{ border: '1px solid var(--border)', borderRadius: 14, background: 'var(--surface)', padding: '22px 18px', textAlign: 'center', position: 'relative' }}>
            <div style={{ width: 44, height: 44, margin: '0 auto 12px', fontSize: 19, background: 'var(--bg-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🔍</div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', lineHeight: 1.4 }}>You selected a preliminary offer</div>
            <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 8, lineHeight: 1.5 }}>Click {brandName} to continue</div>
            <div style={{ position: 'absolute', top: '50%', right: -40, width: 40, height: 2, background: 'var(--blue)' }} />
          </div>

          <div style={{ border: '1.5px solid var(--blue)', borderRadius: 14, background: 'var(--bg-light)', padding: '22px 18px', textAlign: 'center', position: 'relative' }}>
            <div style={{ width: 44, height: 44, margin: '0 auto 12px', fontSize: 19, background: 'var(--surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👤</div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', lineHeight: 1.4 }}>Are you logged in with CEER?</div>
            <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 8 }}>Yes / No</div>
            <div style={{ position: 'absolute', top: '50%', right: -40, width: 40, height: 2, background: 'var(--blue)' }} />
            <div style={{ position: 'absolute', left: '50%', bottom: -56, height: 56, width: 2, background: 'var(--red)' }} />
            <div style={{ position: 'absolute', top: '50%', right: -30, fontSize: 11, fontWeight: 700, color: '#14833b', background: 'rgba(29,185,84,0.12)', borderRadius: 999, padding: '2px 9px', zIndex: 1, marginTop: -10 }}>Yes</div>
            <div style={{ position: 'absolute', left: 'calc(50% + 10px)', bottom: -34, fontSize: 11, fontWeight: 700, color: 'var(--red)', background: 'rgba(229,72,77,0.12)', borderRadius: 999, padding: '2px 9px' }}>No</div>
          </div>

          <div style={{ border: '1.5px solid var(--blue)', borderRadius: 14, background: 'var(--bg-light)', padding: '22px 18px', textAlign: 'center', position: 'relative' }}>
            <div style={{ width: 44, height: 44, margin: '0 auto 12px', fontSize: 19, background: 'var(--surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🧾</div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', lineHeight: 1.4 }}>Are you already a {brandName} customer?</div>
            <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 8 }}>Yes / No</div>
            <div style={{ position: 'absolute', top: '50%', right: -40, width: 40, height: 2, background: 'var(--blue)' }} />
            <div style={{ position: 'absolute', left: '50%', bottom: -56, height: 56, width: 2, background: 'var(--red)' }} />
            <div style={{ position: 'absolute', top: '50%', right: -30, fontSize: 11, fontWeight: 700, color: '#14833b', background: 'rgba(29,185,84,0.12)', borderRadius: 999, padding: '2px 9px', zIndex: 1, marginTop: -10 }}>Yes</div>
            <div style={{ position: 'absolute', left: 'calc(50% + 10px)', bottom: -34, fontSize: 11, fontWeight: 700, color: 'var(--red)', background: 'rgba(229,72,77,0.12)', borderRadius: 999, padding: '2px 9px' }}>No</div>
          </div>

          <div style={{ border: '1.5px solid var(--green)', borderRadius: 14, background: 'rgba(29,185,84,0.08)', padding: '22px 18px', textAlign: 'center' }}>
            <div style={{ width: 44, height: 44, margin: '0 auto 12px', fontSize: 19, background: 'rgba(29,185,84,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🔑</div>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#14833b', lineHeight: 1.4 }}>Enter your login</div>
            <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 8, lineHeight: 1.5 }}>Welcome back! Enter your {brandName} PIN</div>
          </div>

          {/* Row 2 */}
          <div style={{ gridColumn: 1, visibility: 'hidden' }} />

          <div style={{ border: '1px solid var(--border)', borderRadius: 14, background: 'var(--surface)', padding: '22px 18px', textAlign: 'center' }}>
            <div style={{ width: 44, height: 44, margin: '0 auto 12px', fontSize: 19, background: 'var(--bg-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🔐</div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', lineHeight: 1.4 }}>Login or Sign up to CEER</div>
            <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 8, lineHeight: 1.5 }}>Complete CEER authentication to continue</div>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: 14, background: 'var(--surface)', padding: '22px 18px', textAlign: 'center' }}>
            <div style={{ width: 44, height: 44, margin: '0 auto 12px', fontSize: 19, background: 'var(--bg-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>➕</div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', lineHeight: 1.4 }}>Create your {brandName} account</div>
            <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 8, lineHeight: 1.5 }}>Quick sign-up to get started</div>
          </div>

          <div style={{ gridColumn: 4, visibility: 'hidden' }} />
        </div>
      </div>

      {/* Quick summary */}
      <div style={{ maxWidth: 1280, margin: '48px auto 0', padding: '22px 32px', border: '1px solid var(--border)', borderRadius: 14, background: 'var(--surface)', display: 'flex', gap: 0, alignItems: 'stretch' }}>
        {[
          { n: '1️⃣', title: 'You selected an offer', desc: 'You choose the offer that fits you best' },
          { n: '2️⃣', title: 'We check your CEER login', desc: 'Not logged in → CEER login/sign up. Logged in → continue.' },
          { n: '3️⃣', title: `We check your ${brandName} status`, desc: 'Existing customer → Enter your PIN. New customer → Create account.' },
          { n: '🔒', title: "You're all set!", desc: 'Enter your PIN and continue your financing journey' },
        ].map((step, i) => (
          <div key={step.n} style={{ flex: 1, padding: '16px 20px', borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{step.n}</div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)' }}>{step.title}</div>
            <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>{step.desc}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '18px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface)', marginTop: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'var(--muted)' }}>
          <div style={{ width: 38, height: 38, flexShrink: 0, borderRadius: '50%', background: 'var(--bg-light)', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>🛡️</div>
          <div>Your data is safe with us. {brandName} is licensed and regulated by the Saudi Central Bank (SAMA).<br /><span style={{ fontWeight: 600 }}>Need help?</span> Contact us 24/7</div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link href="/ceer-tamawal/01-preliminary-offers" style={{ padding: '12px 24px', borderRadius: 10, border: '1.5px solid var(--blue)', color: 'var(--blue)', fontWeight: 700, fontSize: 14 }}>← Back to offers</Link>
          <Link href="/ceer-tamawal/03-verify-id" style={{ padding: '12px 28px', borderRadius: 10, background: 'var(--blue)', color: '#fff', fontWeight: 700, fontSize: 14 }}>Continue →</Link>
        </div>
      </footer>

      <button onClick={() => setDark(d => !d)} style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 999, width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--surface)', fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,0,0,.15)' }}>
        {dark ? '☀️' : '🌙'}
      </button>

      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;}
        :root,[data-theme="light"]{--blue:#1a73f5;--blue-dark:#0b57d0;--navy:#14233c;--text:#1c2b3a;--muted:#5b6b7c;--border:#e3e8ef;--bg-light:#eaf2fe;--bg-page:#f7f9fc;--green:#1db954;--green-dark:#14833b;--red:#e5484d;--surface:#ffffff;}
        [data-theme="dark"]{--blue:#4f95ff;--navy:#dbe7f5;--text:#e6edf5;--muted:#93a4b8;--border:#2a3a4f;--bg-light:#16283f;--bg-page:#0b1420;--surface:#121e2e;}
        @media(max-width:1279px){.vp-warn{display:flex !important;}}
        a{text-decoration:none;}
      `}</style>
    </div>
  );
}
