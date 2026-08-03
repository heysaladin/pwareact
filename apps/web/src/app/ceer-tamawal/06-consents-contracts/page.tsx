'use client';
import { useState } from 'react';
import Link from 'next/link';

const CEER = () => (
  <svg width="100" height="14" viewBox="0 0 100 14" fill="none" style={{ color: 'var(--text)' }}>
    <g clipPath="url(#ceer-06)">
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
    <defs><clipPath id="ceer-06"><rect width="99.6471" height="14" fill="white"/></clipPath></defs>
  </svg>
);

const Sidebar = () => (
  <aside style={{ width:330, flexShrink:0 }}>
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
      </div>
    </div>
    <div style={{ marginTop:18,fontSize:12,color:'var(--muted)',display:'flex',flexDirection:'column',gap:8 }}>
      <div style={{ display:'flex',alignItems:'center',gap:8 }}><span style={{ width:16,height:16,background:'var(--green)',borderRadius:'50%',color:'#fff',fontSize:10,display:'inline-flex',alignItems:'center',justifyContent:'center' }}>✓</span> Secure &amp; Compliant</div>
    </div>
  </aside>
);

const stepsList = ['Vehicle','Identity','Consents & Contracts','Financial Details','SIMAH Consent','Compare Offers'];

export default function ConsentsContractsPage() {
  const [dark, setDark] = useState(false);
  const [checked, setChecked] = useState([true, true, true, true]);

  const toggle = (i: number) => setChecked(c => c.map((v, idx) => idx === i ? !v : v));

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ minHeight:'100vh', background:'var(--bg-page)', color:'var(--text)', fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
      <div className="vp-warn" style={{ display:'none', position:'fixed', inset:0, zIndex:50, flexDirection:'column', alignItems:'center', justifyContent:'center', padding:32, textAlign:'center', background:'var(--surface)' }}>
        <div style={{fontSize:48,marginBottom:16}}>🖥️</div>
        <h2 style={{fontSize:22,fontWeight:800,color:'var(--navy)'}}>Screen too small</h2>
        <p style={{marginTop:10,fontSize:15,color:'var(--muted)',maxWidth:420}}>This app is designed for desktop (1280px+). Please use a wider screen.</p>
      </div>

      {/* Top bar with stepper */}
      <div style={{ display:'flex', alignItems:'center', padding:'10px 32px', borderBottom:'1px solid var(--border)', background:'var(--surface)', gap:40 }}>
        <div style={{ flexShrink:0, display:'flex', alignItems:'center', gap:10 }}>
          <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt="Tamawal" style={{ width:112, height:33 }} />
          <div style={{ width:1, height:24, background:'var(--border)' }} />
          <CEER />
        </div>
        <div style={{ flex:1, display:'flex', alignItems:'flex-start' }}>
          {stepsList.map((label, i) => (
            <div key={label} style={{ flex:1, display:'flex', alignItems:'center', gap:10, fontSize:12 }}>
              <div style={{ width:26,height:26,flexShrink:0,borderRadius:'50%',border:`2px solid ${i<2?'var(--green)':i===2?'var(--blue)':'var(--border)'}`,background:i<2?'var(--green)':'var(--surface)',color:i<2?'#fff':i===2?'var(--blue)':'var(--muted)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:700 }}>
                {i < 2 ? '✓' : i+1}
              </div>
              <div>
                <b style={{ display:'block', color:i===2?'var(--blue)':'var(--text)', fontSize:12 }}>{label}</b>
                <span style={{ color:'var(--muted)', fontSize:11 }}>{i<2?'Completed':i===2?'In progress':'Pending'}</span>
              </div>
              {i < stepsList.length-1 && <div style={{ flex:1, height:2, background:i<2?'var(--green)':'var(--border)', margin:'0 10px' }} />}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display:'flex', gap:32, padding:'24px 32px 32px', maxWidth:1680, margin:'0 auto' }}>
        <Sidebar />
        <main style={{ flex:1, minWidth:0 }}>
          <Link href="/ceer-tamawal/05-mobile-verification" style={{ color:'var(--blue)', fontWeight:600, fontSize:14 }}>‹ Back</Link>
          <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:30, marginTop:14 }}>
            <div>
              <h1 style={{ fontSize:28, fontWeight:800, color:'var(--navy)' }}>Consents &amp; Contracts</h1>
              <p style={{ color:'var(--muted)', marginTop:10, fontSize:15, lineHeight:1.6 }}>Please review and accept the required consents and agreements to continue your application.</p>
            </div>
            <div style={{ display:'flex', alignItems:'flex-start', gap:8, fontSize:12, color:'var(--muted)', maxWidth:260, lineHeight:1.5, flexShrink:0, marginTop:6 }}>
              <span style={{ color:'var(--blue)' }}>🔒</span>
              Your data is secure and will only be used for financing assessment and verification.
            </div>
          </div>

          <div style={{ fontSize:16, fontWeight:700, color:'var(--navy)', margin:'26px 0 12px' }}>Required consents</div>

          {[
            { icon: <div style={{ width:46,height:46,flexShrink:0,borderRadius:12,background:'var(--bg-light)',color:'var(--blue)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:20 }}>T</div>, title:'Tamawal Consent', desc:'Consent to Tamawal collecting, using, processing, storing, and sharing my personal data as necessary to assess my eligibility and provide financing solutions.' },
            { icon: <div style={{ width:46,height:46,flexShrink:0,borderRadius:12,background:'rgba(29,185,84,0.1)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,lineHeight:1.1,textAlign:'center' as const,color:'#0b8a5c' }}>سمة<br/>SIMAH</div>, title:'SIMAH Consent', desc:'Consent to Tamawal requesting my credit information from SIMAH to assess my credit worthiness and financing eligibility.' },
          ].map((item, i) => (
            <div key={item.title} style={{ display:'flex', alignItems:'center', gap:16, padding:'18px 20px', marginTop:12, border:'1px solid var(--border)', borderRadius:14, background:'var(--surface)' }}>
              {item.icon}
              <div style={{ flex:1, minWidth:0 }}>
                <b style={{ fontSize:15, color:'var(--navy)' }}>{item.title}</b>
                <p style={{ fontSize:13, color:'var(--muted)', marginTop:5, lineHeight:1.55 }}>{item.desc}</p>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:18, flexShrink:0 }}>
                <a href="#" style={{ fontSize:13, fontWeight:600, color:'var(--blue)' }}>View details</a>
                <div onClick={() => toggle(i)} style={{ width:22,height:22,flexShrink:0,border:`2px solid ${checked[i]?'var(--blue)':'#c3ccd6'}`,borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:13,cursor:'pointer',background:checked[i]?'var(--blue)':'transparent',userSelect:'none' }}>
                  {checked[i] && '✓'}
                </div>
              </div>
            </div>
          ))}

          <div style={{ fontSize:16, fontWeight:700, color:'var(--navy)', margin:'26px 0 12px' }}>Agreements &amp; Disclosures</div>

          {[
            { icon: '📄', title:'Tamawal Terms & Conditions', desc:'I have read, understood, and agree to the Tamawal Terms & Conditions.', link:'View document' },
            { icon: '🏛️', title:'SAMA Financing Disclosures', desc:'I have read and agree to the Saudi Central Bank (SAMA) Financing Disclosures.', link:'View document' },
          ].map((item, i) => (
            <div key={item.title} style={{ display:'flex', alignItems:'center', gap:16, padding:'18px 20px', marginTop:12, border:'1px solid var(--border)', borderRadius:14, background:'var(--surface)' }}>
              <div style={{ width:46,height:46,flexShrink:0,borderRadius:12,background:'var(--bg-light)',color:'var(--blue)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20 }}>{item.icon}</div>
              <div style={{ flex:1, minWidth:0 }}>
                <b style={{ fontSize:15, color:'var(--navy)' }}>{item.title}</b>
                <p style={{ fontSize:13, color:'var(--muted)', marginTop:5, lineHeight:1.55 }}>{item.desc}</p>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:18, flexShrink:0 }}>
                <a href="#" style={{ fontSize:13, fontWeight:600, color:'var(--blue)' }}>{item.link}</a>
                <div onClick={() => toggle(i+2)} style={{ width:22,height:22,flexShrink:0,border:`2px solid ${checked[i+2]?'var(--blue)':'#c3ccd6'}`,borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:13,cursor:'pointer',background:checked[i+2]?'var(--blue)':'transparent',userSelect:'none' }}>
                  {checked[i+2] && '✓'}
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>

      <footer style={{ borderTop:'1px solid var(--border)', padding:'18px 32px', display:'flex', alignItems:'center', justifyContent:'space-between', background:'var(--surface)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:12, fontSize:13, color:'var(--muted)', maxWidth:'60%' }}>
          <div style={{ width:38,height:38,flexShrink:0,borderRadius:'50%',background:'var(--bg-light)',color:'var(--blue)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:17 }}>🔒</div>
          <div>Your information remains secure and encrypted throughout the process.</div>
        </div>
        <Link href="/ceer-tamawal/07-personal-details" style={{ padding:'13px 32px', borderRadius:10, background:'var(--blue)', color:'#fff', fontWeight:700, fontSize:15, minWidth:220, textAlign:'center' }}>Continue</Link>
      </footer>

      <button onClick={() => setDark(d => !d)} style={{ position:'fixed', bottom:24, right:24, zIndex:999, width:48, height:48, borderRadius:'50%', border:'1px solid var(--border)', background:'var(--surface)', fontSize:20, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 14px rgba(0,0,0,.15)' }}>
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
