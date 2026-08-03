'use client';
import { useState } from 'react';
import Link from 'next/link';

const CEER = () => (
  <svg width="100" height="14" viewBox="0 0 100 14" fill="none" style={{ color: 'var(--text)' }}>
    <g clipPath="url(#ceer-05)">
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
    <defs><clipPath id="ceer-05"><rect width="99.6471" height="14" fill="white"/></clipPath></defs>
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

const steps = [
  { label: 'Select vehicle', sub: 'Completed', state: 'done' },
  { label: 'Verify identity (Nafath)', sub: 'Completed', state: 'done' },
  { label: 'Mobile ownership', sub: 'In progress', state: 'active' },
  { label: 'Tamawal consent', sub: 'Pending', state: '' },
  { label: 'SIMAH consent', sub: 'Pending', state: '' },
  { label: 'Continue application', sub: 'Pending', state: '' },
];

export default function MobileVerificationPage() {
  const [dark, setDark] = useState(false);

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ minHeight:'100vh', background:'var(--bg-page)', color:'var(--text)', fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
      <div className="vp-warn" style={{ display:'none', position:'fixed', inset:0, zIndex:50, flexDirection:'column', alignItems:'center', justifyContent:'center', padding:32, textAlign:'center', background:'var(--surface)' }}>
        <div style={{fontSize:48,marginBottom:16}}>🖥️</div>
        <h2 style={{fontSize:22,fontWeight:800,color:'var(--navy)'}}>Screen too small</h2>
        <p style={{marginTop:10,fontSize:15,color:'var(--muted)',maxWidth:420}}>This app is designed for desktop (1280px+). Please use a wider screen.</p>
      </div>

      <header style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 32px', borderBottom:'1px solid var(--border)', background:'var(--surface)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt="Tamawal" style={{ width:112, height:33 }} />
          <div style={{ width:1, height:24, background:'var(--border)' }} />
          <CEER />
        </div>
      </header>

      <div style={{ display:'flex', gap:32, padding:'24px 32px 32px', maxWidth:1680, margin:'0 auto' }}>
        <Sidebar />
        <main style={{ flex:1, minWidth:0 }}>
          <Link href="/ceer-tamawal/04-nafath-approve" style={{ color:'var(--blue)', fontWeight:600, fontSize:14 }}>‹ Back</Link>
          <h1 style={{ fontSize:28, fontWeight:800, color:'var(--navy)', marginTop:14 }}>Verifying mobile ownership</h1>
          <p style={{ color:'var(--muted)', marginTop:10, fontSize:15, lineHeight:1.6 }}>Your identity has been verified successfully. We are now confirming ownership of your mobile number.</p>

          <div style={{ display:'flex', gap:28, marginTop:22, alignItems:'flex-start' }}>
            {/* Left */}
            <div style={{ flex:'1.5', minWidth:0 }}>
              <div style={{ display:'flex', alignItems:'center', gap:12, border:'1px solid var(--border)', borderRadius:12, padding:'14px 16px', fontSize:14 }}>
                <span style={{ color:'var(--muted)' }}>Verified National ID / Iqama</span>
                <span style={{ fontWeight:700 }}>1 •••• •••• 34</span>
                <span style={{ marginLeft:'auto', padding:'4px 10px', borderRadius:999, background:'rgba(29,185,84,0.12)', color:'#14833b', fontSize:12, fontWeight:600 }}>✓ Nafath identity verified</span>
              </div>

              <div style={{ border:'1px solid var(--border)', borderRadius:14, background:'var(--surface)', padding:'34px 30px', marginTop:18, display:'flex', alignItems:'center', gap:34 }}>
                <div style={{ position:'relative', width:150, height:150, flexShrink:0 }}>
                  <div className="spin-ring" />
                  <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', zIndex:1 }}>
                    <div style={{ width:54,height:54,borderRadius:14,background:'var(--bg-light)',color:'var(--blue)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:26 }}>📱</div>
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize:15, fontWeight:600, color:'var(--muted)' }}>Verifying mobile number</h3>
                  <div style={{ fontSize:26, fontWeight:800, color:'var(--navy)', marginTop:8, letterSpacing:2 }}>+966 *** *** 1634</div>
                  <div style={{ marginTop:14, color:'var(--blue)', fontWeight:700, fontSize:15, display:'flex', alignItems:'center', gap:12 }}>
                    Verifying mobile ownership...
                    <span style={{ padding:'4px 12px', borderRadius:999, background:'var(--bg-light)', color:'var(--blue)', fontSize:13, fontWeight:600 }}>In progress</span>
                  </div>
                  <div style={{ color:'var(--muted)', fontSize:13, marginTop:8 }}>This may take a few moments.</div>
                </div>
              </div>

              <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:14, fontSize:12, color:'var(--muted)' }}>
                🔒 We use secure channels to validate your mobile number securely.
              </div>
            </div>

            {/* Right */}
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ border:'1px solid var(--border)', borderRadius:14, background:'var(--surface)', padding:20, marginBottom:16 }}>
                <h3 style={{ fontSize:14, fontWeight:700, color:'var(--navy)', display:'flex', alignItems:'center', gap:8, marginBottom:12 }}>
                  <span style={{ width:16,height:16,background:'var(--blue)',borderRadius:'50%',color:'#fff',fontSize:10,display:'inline-flex',alignItems:'center',justifyContent:'center' }}>i</span>
                  About this screen
                </h3>
                <p style={{ fontSize:13, color:'var(--muted)', lineHeight:1.6 }}>Tamawal is verifying that this mobile number belongs to you.</p>
                <p style={{ fontSize:13, color:'var(--muted)', lineHeight:1.6, marginTop:10 }}>This step keeps you informed securely and protects your account.</p>
              </div>

              <div style={{ border:'1px solid var(--border)', borderRadius:14, background:'var(--surface)', padding:20 }}>
                <h3 style={{ fontSize:14, fontWeight:700, color:'var(--navy)', marginBottom:12 }}>What happens next</h3>
                {[
                  { icon: '✓', color: '#1db954', bg: 'rgba(29,185,84,0.1)', label: 'Identity verified with Nafath', sub: 'Completed' },
                  { icon: '⟳', color: 'var(--blue)', bg: 'var(--bg-light)', label: 'Mobile ownership confirmation', sub: 'In progress', spin: true },
                  { icon: '', color: 'var(--border)', bg: 'transparent', label: 'Continue to financial assessment', sub: 'Pending', empty: true },
                ].map((item, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, padding:'8px 0', fontSize:13 }}>
                    {item.empty
                      ? <div style={{ width:16,height:16,flexShrink:0,marginTop:2,border:'2px solid var(--border)',borderRadius:'50%' }} />
                      : item.spin
                      ? <div className="dot-progress" />
                      : <span style={{ width:16,height:16,flexShrink:0,marginTop:2,borderRadius:'50%',background:item.bg,color:item.color,fontSize:10,display:'inline-flex',alignItems:'center',justifyContent:'center',fontWeight:700 }}>{item.icon}</span>
                    }
                    <div>
                      <b style={{ display:'block', fontWeight:600 }}>{item.label}</b>
                      <span style={{ color:'var(--muted)', fontSize:12 }}>{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom stepper */}
      <div style={{ borderTop:'1px solid var(--border)', display:'flex', alignItems:'flex-start', padding:'18px 32px', background:'var(--surface)' }}>
        {steps.map((s, i) => (
          <div key={s.label} style={{ flex:1, display:'flex', alignItems:'center', gap:10, fontSize:12 }}>
            <div style={{ width:26,height:26,flexShrink:0,borderRadius:'50%',border:`2px solid ${s.state==='done'?'var(--green)':s.state==='active'?'var(--blue)':'var(--border)'}`,background:s.state==='done'?'var(--green)':'var(--surface)',color:s.state==='done'?'#fff':s.state==='active'?'var(--blue)':'var(--muted)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:700 }}>
              {s.state==='done' ? '✓' : i+1}
            </div>
            <div>
              <b style={{ display:'block', color:s.state==='active'?'var(--blue)':'var(--text)' }}>{s.label}</b>
              <span style={{ color:'var(--muted)', fontSize:11 }}>{s.sub}</span>
            </div>
            {i < steps.length-1 && <div style={{ flex:1, height:2, background:s.state==='done'?'var(--green)':'var(--border)', margin:'0 10px' }} />}
          </div>
        ))}
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
        @keyframes spin{to{transform:rotate(360deg);}}
        .spin-ring{width:100%;height:100%;border-radius:50%;background:conic-gradient(#1a73f5 0deg 270deg,#eaf2fe 270deg 360deg);animation:spin 2.2s linear infinite;position:absolute;inset:0;}
        [data-theme="dark"] .spin-ring{background:conic-gradient(#4f95ff 0deg 270deg,#16283f 270deg 360deg);}
        .dot-progress{width:16px;height:16px;flex-shrink:0;margin-top:2px;border:2px solid var(--blue);border-top-color:transparent;border-radius:50%;animation:spin 1s linear infinite;}
      `}</style>
    </div>
  );
}
