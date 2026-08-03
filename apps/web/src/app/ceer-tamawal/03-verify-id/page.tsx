'use client';
import { useState } from 'react';
import Link from 'next/link';

const CEER = () => (
  <svg width="100" height="14" viewBox="0 0 100 14" fill="none" style={{ color: 'var(--text)' }}>
    <g clipPath="url(#ceer-03)">
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
    <defs><clipPath id="ceer-03"><rect width="99.6471" height="14" fill="white"/></clipPath></defs>
  </svg>
);

const Sidebar = () => (
  <aside style={{ width: 330, flexShrink: 0 }}>
    <div style={{ border: '1px solid var(--border)', borderRadius: 16, padding: 20, background: 'var(--surface)' }}>
      <div style={{ width: '100%', borderRadius: 12, background: "url('/ceer-car-00.png') center/contain no-repeat, linear-gradient(160deg,#f4f6f8,#dde3e9)", aspectRatio: '16/10' }} />
      <div style={{ fontSize: 16, fontWeight: 700, marginTop: 16, color: 'var(--text)' }}>EXOBOT SEDAN</div>
      <div style={{ color: 'var(--muted)', marginTop: 4, fontSize: 14 }}>First Edition – 2027</div>
      <div style={{ borderTop: '1px solid var(--border)', marginTop: 14, paddingTop: 6 }}>
        {([['🎨','Exterior','Harrat Grey Metallic'],['💺','Interior','Red Nappa Leather'],['✳️','Wheels','23" Front / 24" Rear'],['⚙️','Options','First Edition Pack']] as [string,string,string][]).map(([icon,label,value]) => (
          <div key={label} style={{ display:'flex', alignItems:'flex-start', gap:12, padding:'10px 0', fontSize:13 }}>
            <div style={{ width:32,height:32,flexShrink:0,borderRadius:'50%',background:'var(--bg-light)',color:'var(--blue)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:15 }}>{icon}</div>
            <div style={{ color:'var(--muted)',width:100,flexShrink:0,paddingTop:7 }}>{label}</div>
            <div style={{ fontWeight:600,paddingTop:7,color:'var(--text)' }}>{value}</div>
          </div>
        ))}
      </div>
      <div style={{ borderTop:'1px solid var(--border)',marginTop:8,paddingTop:14 }}>
        <div style={{ color:'var(--muted)',fontSize:12 }}>Total price (incl. VAT)</div>
        <div style={{ fontSize:22,fontWeight:800,marginTop:4,color:'var(--text)' }}><small style={{fontSize:14,fontWeight:700}}>SAR</small> 399,000</div>
        <div style={{ color:'var(--muted)',fontSize:12,marginTop:8 }}>Indicative from</div>
        <div style={{ fontSize:16,fontWeight:800,marginTop:4,color:'var(--text)' }}><small style={{fontSize:14,fontWeight:700}}>SAR</small> 5,871 <small style={{fontSize:14,fontWeight:500,color:'var(--muted)'}}>/ month</small></div>
      </div>
    </div>
    <div style={{ marginTop:18,fontSize:12,color:'var(--muted)',display:'flex',flexDirection:'column',gap:8 }}>
      <div style={{ display:'flex',alignItems:'center',gap:8 }}>
        <span style={{ width:16,height:16,background:'var(--green)',borderRadius:'50%',color:'#fff',fontSize:10,display:'inline-flex',alignItems:'center',justifyContent:'center' }}>✓</span>
        Secure &amp; Compliant
      </div>
      <div style={{ display:'flex',alignItems:'center',gap:8 }}>
        <span style={{ width:16,height:16,background:'var(--blue)',borderRadius:'50%',color:'#fff',fontSize:10,display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>🛡</span>
        Verification powered by <span style={{ color:'#0b8a5c',fontWeight:700 }}>Nafath نفاذ</span>
      </div>
    </div>
  </aside>
);

export default function VerifyIdPage() {
  const [dark, setDark] = useState(false);
  const [nid, setNid] = useState('');

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ minHeight: '100vh', background: 'var(--bg-page)', color: 'var(--text)', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
      <div className="vp-warn" style={{ display:'none', position:'fixed', inset:0, zIndex:50, flexDirection:'column', alignItems:'center', justifyContent:'center', padding:32, textAlign:'center', background:'var(--surface)' }}>
        <div style={{fontSize:48,marginBottom:16}}>🖥️</div>
        <h2 style={{fontSize:22,fontWeight:800,color:'var(--navy)'}}>Screen too small</h2>
        <p style={{marginTop:10,fontSize:15,color:'var(--muted)',maxWidth:420}}>This app is designed for desktop (1280px+). Please use a wider screen.</p>
      </div>

      {/* Header */}
      <header style={{ display:'flex', alignItems:'center', justifyContent:'flex-end', padding:'14px 32px', borderBottom:'1px solid var(--border)', background:'var(--surface)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt="Tamawal" style={{ width:112, height:33 }} />
          <div style={{ width:1, height:24, background:'var(--border)' }} />
          <CEER />
        </div>
      </header>

      {/* Layout */}
      <div style={{ display:'flex', minHeight:'calc(100vh - 73px)' }}>
        <div style={{ width:320, flexShrink:0, background:'var(--bg-page)', borderRight:'1px solid var(--border)', padding:'24px 20px' }}>
          <Sidebar />
        </div>

        <main style={{ flex:1, padding:'40px 64px', maxWidth:860 }}>
          <Link href="/ceer-tamawal/02-what-happens-next" style={{ display:'inline-flex', alignItems:'center', gap:6, color:'var(--blue)', fontWeight:600, fontSize:14 }}>← Back</Link>
          <h1 style={{ fontSize:30, fontWeight:800, color:'var(--navy)', marginTop:28 }}>Enter your verified ID</h1>

          <div style={{ marginTop:34, maxWidth:560 }}>
            <label style={{ fontSize:13, fontWeight:500, display:'block', marginBottom:8 }}>National ID / Iqama number</label>
            <div style={{ display:'flex', alignItems:'center', gap:10, border:'2px solid var(--blue)', borderRadius:10, padding:'14px 16px', boxShadow:'0 0 0 4px rgba(26,115,245,0.12)', background:'var(--surface)' }}>
              <span style={{ fontSize:18, color:'var(--blue)' }}>🪪</span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="1 234 567 890"
                value={nid}
                onChange={e => setNid(e.target.value)}
                autoFocus
                style={{ flex:1, border:'none', outline:'none', fontSize:15, fontWeight:600, background:'transparent', color:'var(--text)' }}
              />
            </div>
          </div>

          <div style={{ maxWidth:560, display:'flex', justifyContent:'flex-end', alignItems:'center', gap:24, marginTop:60 }}>
            <Link href="/ceer-tamawal/02-what-happens-next" style={{ padding:'13px 32px', borderRadius:10, color:'var(--blue)', fontWeight:700, fontSize:15, background:'none' }}>Cancel</Link>
            <Link href="/ceer-tamawal/04-nafath-approve" style={{ padding:'13px 32px', borderRadius:10, background:'var(--blue)', color:'#fff', fontWeight:700, fontSize:15 }}>Continue</Link>
          </div>
        </main>
      </div>

      <button onClick={() => setDark(d => !d)} style={{ position:'fixed', bottom:24, right:24, zIndex:999, width:48, height:48, borderRadius:'50%', border:'1px solid var(--border)', background:'var(--surface)', fontSize:20, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 14px rgba(0,0,0,.15)' }}>
        {dark ? '☀️' : '🌙'}
      </button>

      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;}
        :root,[data-theme="light"]{--blue:#1a73f5;--blue-dark:#0b57d0;--navy:#14233c;--text:#1c2b3a;--muted:#5b6b7c;--border:#e3e8ef;--bg-light:#eaf2fe;--bg-page:#f7f9fc;--green:#1db954;--green-dark:#14833b;--red:#e5484d;--surface:#ffffff;}
        [data-theme="dark"]{--blue:#4f95ff;--navy:#dbe7f5;--text:#e6edf5;--muted:#93a4b8;--border:#2a3a4f;--bg-light:#16283f;--bg-page:#0b1420;--surface:#121e2e;}
        @media(max-width:1279px){.vp-warn{display:flex !important;}}
        a{text-decoration:none;}
        input::placeholder{color:#9aa8b8;font-weight:500;}
      `}</style>
    </div>
  );
}
