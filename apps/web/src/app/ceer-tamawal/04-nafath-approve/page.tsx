'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const CEER = () => (
  <svg width="100" height="14" viewBox="0 0 100 14" fill="none" style={{ color: 'var(--text)' }}>
    <g clipPath="url(#ceer-04)">
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
    <defs><clipPath id="ceer-04"><rect width="99.6471" height="14" fill="white"/></clipPath></defs>
  </svg>
);

const Sidebar = () => (
  <aside style={{ width: 330, flexShrink: 0 }}>
    <div style={{ border:'1px solid var(--border)', borderRadius:16, padding:20, background:'var(--surface)' }}>
      <div style={{ width:'100%', borderRadius:12, background:"url('/ceer-car-00.png') center/contain no-repeat, linear-gradient(160deg,#f4f6f8,#dde3e9)", aspectRatio:'16/10' }} />
      <div style={{ fontSize:16, fontWeight:700, marginTop:16, color:'var(--text)' }}>EXOBOT SEDAN</div>
      <div style={{ color:'var(--muted)', marginTop:4, fontSize:14 }}>First Edition – 2027</div>
      <div style={{ borderTop:'1px solid var(--border)', marginTop:14, paddingTop:6 }}>
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
      <div style={{ display:'flex',alignItems:'center',gap:8 }}><span style={{ width:16,height:16,background:'var(--green)',borderRadius:'50%',color:'#fff',fontSize:10,display:'inline-flex',alignItems:'center',justifyContent:'center' }}>✓</span> Secure &amp; Compliant</div>
      <div style={{ display:'flex',alignItems:'center',gap:8,flexWrap:'wrap' }}><span style={{ width:16,height:16,background:'var(--blue)',borderRadius:'50%',color:'#fff',fontSize:10,display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>🛡</span> Verification powered by <span style={{ color:'#0b8a5c',fontWeight:700 }}>Nafath نفاذ</span></div>
    </div>
  </aside>
);

export default function NafathApprovePage() {
  const [dark, setDark] = useState(false);
  const [secs, setSecs] = useState(165);

  useEffect(() => {
    const t = setInterval(() => setSecs(s => s > 0 ? s - 1 : 0), 1000);
    return () => clearInterval(t);
  }, []);

  const mins = String(Math.floor(secs / 60)).padStart(2, '0');
  const ss = String(secs % 60).padStart(2, '0');

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ minHeight:'100vh', background:'var(--bg-page)', color:'var(--text)', fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
      <div className="vp-warn" style={{ display:'none', position:'fixed', inset:0, zIndex:50, flexDirection:'column', alignItems:'center', justifyContent:'center', padding:32, textAlign:'center', background:'var(--surface)' }}>
        <div style={{fontSize:48,marginBottom:16}}>🖥️</div>
        <h2 style={{fontSize:22,fontWeight:800,color:'var(--navy)'}}>Screen too small</h2>
        <p style={{marginTop:10,fontSize:15,color:'var(--muted)',maxWidth:420}}>This app is designed for desktop (1280px+). Please use a wider screen.</p>
      </div>

      {/* Header */}
      <header style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 32px', borderBottom:'1px solid var(--border)', background:'var(--surface)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt="Tamawal" style={{ width:112, height:33 }} />
          <div style={{ width:1, height:24, background:'var(--border)' }} />
          <CEER />
        </div>
      </header>

      {/* Layout */}
      <div style={{ display:'flex', gap:32, padding:'24px 32px 32px', maxWidth:1680, margin:'0 auto' }}>
        <Sidebar />

        <main style={{ flex:1, minWidth:0 }}>
          <Link href="/ceer-tamawal/03-verify-id" style={{ display:'inline-flex', alignItems:'center', gap:6, color:'var(--blue)', fontWeight:600, fontSize:14 }}>‹ Back</Link>
          <h1 style={{ fontSize:28, fontWeight:800, color:'var(--navy)', marginTop:14 }}>Approve your identity in Nafath</h1>
          <p style={{ color:'var(--muted)', marginTop:10, fontSize:15, lineHeight:1.6 }}>A secure verification request has been sent to your Nafath application.</p>

          <div style={{ display:'flex', gap:32, marginTop:22, alignItems:'flex-start' }}>
            {/* Left col */}
            <div style={{ flex:'1.3', minWidth:0 }}>
              <div style={{ display:'flex', alignItems:'center', gap:12, border:'1px solid var(--border)', borderRadius:12, padding:'14px 16px', fontSize:14 }}>
                <span style={{ width:16,height:16,background:'var(--green)',borderRadius:'50%',color:'#fff',fontSize:10,display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>✓</span>
                <span style={{ color:'var(--muted)' }}>Verified National ID / Iqama</span>
                <span style={{ fontWeight:700, marginLeft:'auto' }}>1 •••• •••• 34</span>
              </div>

              <div style={{ border:'1px solid var(--border)', borderRadius:14, background:'var(--surface)', padding:24, marginTop:16, textAlign:'center' }}>
                <div style={{ color:'var(--muted)', fontSize:13 }}>Verification number</div>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:28, marginTop:12 }}>
                  <div style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', border:'2px solid var(--blue)', borderRadius:14, color:'var(--blue)', fontSize:46, fontWeight:800, width:110, height:90, background:'var(--bg-light)' }}>67</div>
                  <div style={{ textAlign:'left' }}>
                    <div style={{ fontSize:16, fontWeight:700 }}>{mins}:{ss}</div>
                    <div style={{ color:'var(--muted)', fontSize:12, display:'block', marginTop:2 }}>Time remaining</div>
                  </div>
                </div>
                <div style={{ marginTop:14, paddingTop:14, borderTop:'1px solid var(--border)', color:'var(--amber)', fontWeight:600, fontSize:14 }}>⏳ Waiting for your approval</div>
              </div>

              <div style={{ marginTop:20 }}>
                <h3 style={{ fontSize:15, fontWeight:700, color:'var(--navy)', marginBottom:12 }}>How to approve</h3>
                <ol style={{ listStyle:'none' }}>
                  {['Open the Nafath application','Review the identity verification request','Select the matching number (67)','Approve the request','Return with verification confirmed'].map((step, i) => (
                    <li key={i} style={{ display:'flex', alignItems:'center', gap:12, padding:'7px 0', fontSize:14 }}>
                      <div style={{ width:26,height:26,flexShrink:0,borderRadius:'50%',background:'var(--bg-light)',color:'var(--blue)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:700 }}>{i+1}</div>
                      {step.replace('67', '')}
                      {i === 2 && <strong style={{ color:'var(--blue)' }}>67</strong>}
                    </li>
                  ))}
                </ol>
              </div>

              <div style={{ display:'flex', alignItems:'center', gap:10, marginTop:22, fontSize:14, flexWrap:'wrap' }}>
                <a href="#" style={{ fontWeight:600, color:'var(--blue)' }}>↻ Resend request</a>
                <span style={{ color:'var(--border)' }}>·</span>
                <a href="#" style={{ fontWeight:600, color:'var(--red)' }}>✕ Cancel verification</a>
                <span style={{ color:'var(--border)' }}>·</span>
                <Link href="/ceer-tamawal/03-verify-id" style={{ fontWeight:600, color:'var(--blue)' }}>Change National ID / Iqama</Link>
              </div>
            </div>

            {/* Right col: Phone + help */}
            <div style={{ flex:1, minWidth:0, display:'flex', gap:20, alignItems:'flex-start' }}>
              {/* Phone mockup */}
              <div style={{ width:250, flexShrink:0, border:'10px solid #14233c', borderRadius:34, background:'var(--surface)', overflow:'hidden', boxShadow:'0 18px 40px rgba(20,35,60,.18)' }}>
                <div style={{ width:90, height:18, background:'#14233c', borderRadius:'0 0 12px 12px', margin:'0 auto' }} />
                <div style={{ padding:'18px 16px 26px', textAlign:'center' }}>
                  <div style={{ fontWeight:800, color:'#0b8a5c', fontSize:18 }}>
                    <span style={{ display:'block', fontSize:15 }}>نفاذ</span>Nafath
                  </div>
                  <div style={{ fontSize:11, color:'var(--muted)', marginTop:12, lineHeight:1.5 }}>Identity verification request</div>
                  <div style={{ marginTop:10, fontSize:12, fontWeight:700 }}>Tamawal Financing</div>
                  <div style={{ display:'flex', justifyContent:'center', gap:12, marginTop:16 }}>
                    {['6','7'].map(n => (
                      <div key={n} style={{ width:54,height:54,border:'1.5px solid var(--border)',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,fontWeight:800,color:'var(--navy)' }}>{n}</div>
                    ))}
                  </div>
                  <button style={{ display:'block', width:'100%', border:'none', borderRadius:10, padding:'11px 0', fontSize:14, fontWeight:700, cursor:'pointer', marginTop:12, background:'var(--blue)', color:'#fff' }}>Approve</button>
                  <button style={{ display:'block', width:'100%', border:'none', borderRadius:10, padding:'11px 0', fontSize:14, fontWeight:700, cursor:'pointer', marginTop:8, background:'rgba(91,107,124,0.15)', color:'var(--muted)' }}>Reject</button>
                </div>
              </div>

              {/* Help notes */}
              <div style={{ display:'flex', flexDirection:'column', gap:16, fontSize:13, color:'var(--muted)', lineHeight:1.5 }}>
                {[['🪪','Identity verified via Nafath'],['🔒','Fully encrypted'],['🛡️','Information used only for this journey']].map(([ic,txt]) => (
                  <div key={txt} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                    <div style={{ width:30,height:30,flexShrink:0,borderRadius:'50%',background:'var(--bg-light)',color:'var(--blue)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14 }}>{ic}</div>
                    <span>{txt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop:32, display:'flex', justifyContent:'flex-end' }}>
            <Link href="/ceer-tamawal/05-mobile-verification" style={{ padding:'13px 32px', borderRadius:10, background:'var(--blue)', color:'#fff', fontWeight:700, fontSize:15 }}>Continue →</Link>
          </div>
        </main>
      </div>

      <button onClick={() => setDark(d => !d)} style={{ position:'fixed', bottom:24, right:24, zIndex:999, width:48, height:48, borderRadius:'50%', border:'1px solid var(--border)', background:'var(--surface)', fontSize:20, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 14px rgba(0,0,0,.15)' }}>
        {dark ? '☀️' : '🌙'}
      </button>

      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;}
        :root,[data-theme="light"]{--blue:#1a73f5;--blue-dark:#0b57d0;--navy:#14233c;--text:#1c2b3a;--muted:#5b6b7c;--border:#e3e8ef;--bg-light:#eaf2fe;--bg-page:#f7f9fc;--green:#1db954;--green-dark:#14833b;--red:#e5484d;--amber:#f5a623;--surface:#ffffff;}
        [data-theme="dark"]{--blue:#4f95ff;--navy:#dbe7f5;--text:#e6edf5;--muted:#93a4b8;--border:#2a3a4f;--bg-light:#16283f;--bg-page:#0b1420;--surface:#121e2e;}
        @media(max-width:1279px){.vp-warn{display:flex !important;}}
        a{text-decoration:none;}
      `}</style>
    </div>
  );
}
