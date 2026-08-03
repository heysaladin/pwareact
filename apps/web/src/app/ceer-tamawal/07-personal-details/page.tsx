'use client';
import { useState } from 'react';
import Link from 'next/link';

const CEER = () => (
  <svg width="100" height="14" viewBox="0 0 100 14" fill="none" style={{ color: 'var(--text)' }}>
    <g clipPath="url(#ceer-07)">
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
    <defs><clipPath id="ceer-07"><rect width="99.6471" height="14" fill="white"/></clipPath></defs>
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
  </aside>
);

const stepsList = ['Vehicle','Identity','Disclosures & Personal Details','Financial Details','SIMAH Consent','Compare Offers'];

const Field = ({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
  <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
    <div style={{ fontSize:13, fontWeight:500 }}>{label}{required && <sup style={{ color:'var(--red)' }}>*</sup>}</div>
    {children}
  </div>
);

const Select = ({ options }: { options: string[] }) => (
  <div style={{ display:'flex', alignItems:'center', gap:10, border:'1px solid var(--border)', borderRadius:10, padding:'12px 14px', fontSize:15, fontWeight:600, background:'var(--surface)' }}>
    <select style={{ border:'none', font:'inherit', color:'inherit', background:'none', outline:'none', width:'100%' }}>
      <option value="">Select</option>
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  </div>
);

export default function PersonalDetailsPage() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

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
          <Link href="/ceer-tamawal/06-consents-contracts" style={{ color:'var(--blue)', fontWeight:600, fontSize:14 }}>‹ Back</Link>
          <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:30, marginTop:14 }}>
            <div>
              <h1 style={{ fontSize:28, fontWeight:800, color:'var(--navy)' }}>Disclosures &amp; Personal Details</h1>
              <p style={{ color:'var(--muted)', marginTop:10, fontSize:15, lineHeight:1.6 }}>Please provide your personal information accurately to help us assess your eligibility.</p>
            </div>
            <div style={{ display:'flex', alignItems:'flex-start', gap:8, fontSize:12, color:'var(--muted)', maxWidth:260, lineHeight:1.5, flexShrink:0, marginTop:6 }}>
              <span style={{ color:'var(--blue)' }}>🔒</span>
              Your data is secure and will only be used for financing assessment and verification.
            </div>
          </div>

          {/* Personal Details Card */}
          <div style={{ border:'1px solid var(--border)', borderRadius:14, background:'var(--surface)', padding:24, marginTop:22 }}>
            <h3 style={{ fontSize:16, fontWeight:700, color:'var(--navy)', marginBottom:18 }}>Personal Details</h3>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'18px 20px' }}>
              <Field label="Social Status" required><Select options={['Single','Married','Divorced','Widowed']} /></Field>
              <Field label="Family Members (Number of Dependents)" required><Select options={['0','1','2','3','4','5+']} /></Field>
              <Field label="Education fees dependents" required><Select options={['0','1','2','3','4','5+']} /></Field>
              <Field label="Monthly Education Fees for Dependents">
                <div style={{ display:'flex', alignItems:'center', border:'1px solid var(--border)', borderRadius:10, padding:'12px 14px', background:'var(--surface)' }}>
                  <input type="text" placeholder="Enter amount (SAR)" style={{ flex:1, border:'none', outline:'none', fontSize:15, fontWeight:600, background:'transparent', color:'var(--text)' }} />
                </div>
              </Field>
              <Field label="Salary Bank" required><Select options={['Bank AlJazira','Alinma Bank','SNB','Al Rajhi Bank','Riyad Bank']} /></Field>
              <Field label="City" required><Select options={['Riyadh','Jeddah','Dammam','Makkah','Madinah']} /></Field>
              <Field label="Home Ownership" required><Select options={['Owned','Rented','Family-owned','Company-provided']} /></Field>
              <Field label="Type of Residential" required><Select options={['Villa','Apartment','Compound','Other']} /></Field>
              <Field label="Education Level" required><Select options={["High School","Bachelor's","Master's","PhD","Other"]} /></Field>
            </div>
          </div>

          {/* Additional Disclosures */}
          <div style={{ fontSize:16, fontWeight:700, color:'var(--navy)', margin:'28px 0 6px' }}>Additional Disclosures</div>
          <div style={{ fontSize:13, color:'var(--muted)', marginBottom:14 }}>Please answer the following questions to the best of your knowledge.</div>

          {['Employment Details','Additional Income Details','Financial Commitments'].map((title, i) => (
            <div key={title} style={{ border:'1px solid var(--border)', borderRadius:14, background:'var(--surface)', marginTop:12, overflow:'hidden' }}>
              <div onClick={() => setOpen(open === i ? null : i)} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'18px 20px', cursor:'pointer', fontWeight:700, fontSize:15, color:'var(--navy)' }}>
                {title}
                <span style={{ color:'var(--muted)', fontSize:13, transition:'transform .2s', transform:open===i?'rotate(180deg)':'none', display:'inline-block' }}>▼</span>
              </div>
              {open === i && (
                <div style={{ padding:'0 20px 18px', fontSize:13, color:'var(--muted)', lineHeight:1.6 }}>
                  Please provide details about your {title.toLowerCase()}. This information helps us assess your financing eligibility accurately.
                </div>
              )}
            </div>
          ))}
        </main>
      </div>

      <footer style={{ borderTop:'1px solid var(--border)', padding:'18px 32px', display:'flex', alignItems:'center', justifyContent:'space-between', background:'var(--surface)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:12, fontSize:13, color:'var(--muted)', maxWidth:'60%' }}>
          <div style={{ width:38,height:38,flexShrink:0,borderRadius:'50%',background:'var(--bg-light)',color:'var(--blue)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:17 }}>🔒</div>
          <div>Your information remains secure and encrypted throughout the process.</div>
        </div>
        <Link href="/ceer-tamawal/08-collecting-reports" style={{ padding:'13px 32px', borderRadius:10, background:'var(--blue)', color:'#fff', fontWeight:700, fontSize:15, minWidth:220, textAlign:'center' }}>Confirm &amp; Next</Link>
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
