'use client';
import Link from 'next/link';

const CeerLogo = () => (
  <svg className="ceer-logo-header" width="100" height="14" viewBox="0 0 100 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3493_306)">
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
    <defs><clipPath id="clip0_3493_306"><rect width="99.6471" height="14" fill="white"/></clipPath></defs>
  </svg>
);

export default function CollectingReportsPage() {
  return (
    <>
      <style>{`
        :root {
          --blue: #1a73f5;
          --blue-dark: #0b57d0;
          --navy: #14233c;
          --text: #1c2b3a;
          --muted: #5b6b7c;
          --border: #e3e8ef;
          --bg-light: #eaf2fe;
          --bg-page: #f7f9fc;
          --green: #1db954;
          --green-dark: #14833b;
          --red: #e5484d;
          --amber: #f5a623;
          --surface: #ffffff;
        }
        .page-08 { font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif; color: var(--text); background: var(--surface); min-height: 100vh; display: flex; flex-direction: column; }
        .tw-header { display: flex; align-items: center; justify-content: space-between; padding: 14px 32px; border-bottom: 1px solid var(--border); background: var(--surface); }
        .logo { display: flex; align-items: center; gap: 10px; }
        .logo-img { width: 112px; height: 33px; display: block; }
        .logo-divider { width: 1px; height: 24px; background: var(--border); }
        .ceer-logo-header { color: var(--text); width: 141px; height: auto; }
        .stepper { display: flex; align-items: flex-start; gap: 0; padding: 18px 32px; border-bottom: 1px solid var(--border); background: var(--surface); }
        .step { flex: 1; display: flex; align-items: center; gap: 10px; position: relative; font-size: 12px; }
        .step-dot { width: 26px; height: 26px; flex-shrink: 0; border-radius: 50%; border: 2px solid var(--border); color: var(--muted); background: var(--surface); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; z-index: 1; }
        .step.done .step-dot { background: var(--green); border-color: var(--green); color: #fff; }
        .step.active .step-dot { border-color: var(--blue); color: var(--blue); }
        .step .step-label { line-height: 1.3; }
        .step .step-label b { display: block; font-size: 12px; }
        .step .step-label span { color: var(--muted); font-size: 11px; }
        .step.active .step-label b { color: var(--blue); }
        .step::after { content: ""; flex: 1; height: 2px; background: var(--border); margin: 0 10px; }
        .step.done::after { background: var(--green); }
        .step:last-child::after { display: none; }
        .page-wrap { display: flex; gap: 36px; padding: 24px 32px 40px; max-width: 1680px; margin: 0 auto; }
        .sidebar { width: 330px; flex-shrink: 0; }
        .main-col { flex: 1; min-width: 0; }
        .right-col { width: 320px; flex-shrink: 0; }
        .car-card { border: 1px solid var(--border); border-radius: 16px; padding: 20px; background: var(--surface); }
        .car-img { width: 100%; border-radius: 12px; background: url("/ceer-car-00.png") center / contain no-repeat, linear-gradient(160deg, #f4f6f8, #dde3e9); aspect-ratio: 16/10; display: block; }
        .car-title { font-size: 16px; font-weight: 700; margin-top: 16px; }
        .car-sub { color: var(--muted); margin-top: 4px; font-size: 14px; }
        .spec-list { border-top: 1px solid var(--border); margin-top: 14px; padding-top: 6px; }
        .spec { display: flex; align-items: flex-start; gap: 12px; padding: 10px 0; font-size: 13px; }
        .spec-icon { width: 32px; height: 32px; flex-shrink: 0; border-radius: 50%; background: var(--bg-light); color: var(--blue); display: flex; align-items: center; justify-content: center; font-size: 15px; }
        .spec-label { color: var(--muted); width: 100px; flex-shrink: 0; padding-top: 7px; }
        .spec-value { font-weight: 600; padding-top: 7px; }
        .price-block { border-top: 1px solid var(--border); margin-top: 8px; padding-top: 14px; }
        .price-block .label { color: var(--muted); font-size: 12px; }
        .price-block .value { font-size: 22px; font-weight: 800; margin-top: 4px; }
        .price-block .value small { font-size: 14px; font-weight: 700; }
        h1.page-title { font-size: 28px; font-weight: 800; color: var(--navy); font-family: "SF Pro Display", "SF Pro", -apple-system, sans-serif; }
        .page-sub { color: var(--muted); margin-top: 10px; font-size: 15px; line-height: 1.6; }
        .banner { display: flex; gap: 14px; background: var(--bg-light); border-radius: 12px; padding: 16px 20px; font-size: 14px; line-height: 1.6; }
        .card { border: 1px solid var(--border); border-radius: 14px; background: var(--surface); }
        .badge { display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; font-size: 12px; font-weight: 600; padding: 5px 12px; }
        .badge-green { background: color-mix(in srgb, var(--green) 14%, var(--surface)); color: var(--green-dark); }
        .badge-grey { background: color-mix(in srgb, var(--muted) 15%, var(--surface)); color: var(--muted); }
        .badge-inprogress { background: var(--bg-light); color: var(--blue); }
        .tw-footer { border-top: 1px solid var(--border); padding: 18px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; background: var(--surface); }
        .footer-note { display: flex; align-items: center; gap: 12px; font-size: 13px; line-height: 1.6; color: var(--muted); }
        .shield { width: 38px; height: 38px; flex-shrink: 0; border-radius: 50%; background: var(--bg-light); color: var(--blue); display: flex; align-items: center; justify-content: center; font-size: 17px; }
        .btn { border: none; border-radius: 10px; padding: 13px 32px; font-size: 15px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none; }
        .btn-primary { background: var(--blue); color: #fff; }

        .loader { width: 22px; height: 22px; flex-shrink: 0; border: 3px solid #c9def9; border-top-color: var(--blue); border-radius: 50%; animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .providers { margin-top: 18px; }
        .provider { display: flex; align-items: center; gap: 16px; border: 1px solid var(--border); border-radius: 14px; background: var(--surface); padding: 16px 20px; margin-top: 12px; }
        .p-logo { width: 52px; height: 52px; flex-shrink: 0; border: 1px solid var(--border); border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-weight: 800; font-size: 11px; line-height: 1.15; text-align: center; }
        .p-logo .ar { font-size: 12px; }
        .p-name { font-weight: 700; font-size: 15px; }
        .p-desc { color: var(--muted); font-size: 13px; margin-top: 3px; }
        .p-status { margin-left: auto; }

        .next-card { padding: 22px; }
        .next-card h3 { font-size: 16px; color: var(--navy); }
        .next-item { display: flex; gap: 12px; margin-top: 18px; }
        .next-num { width: 28px; height: 28px; flex-shrink: 0; border-radius: 50%; background: var(--bg-light); color: var(--blue); font-weight: 700; font-size: 13px; display: flex; align-items: center; justify-content: center; }
        .next-item b { display: block; font-size: 13.5px; }
        .next-item p { color: var(--muted); font-size: 12.5px; margin-top: 3px; line-height: 1.5; }
        .side-notes { margin-top: 18px; }
        .side-note { display: flex; gap: 12px; align-items: flex-start; border: 1px solid var(--border); border-radius: 12px; padding: 14px; font-size: 12.5px; line-height: 1.5; margin-top: 12px; background: var(--surface); }
        .side-note b { display: block; font-size: 13px; }
        .side-note span { color: var(--muted); }
        .nafath-mark { display: inline-block; background: color-mix(in srgb, var(--green) 12%, var(--surface)); color: #2a7d4f; border-radius: 6px; padding: 2px 8px; font-weight: 800; font-size: 11px; }
      `}</style>

      <div className="page-08">
        {/* Header */}
        <header className="tw-header">
          <div className="logo">
            <img className="logo-img" alt="Tamawal" src="/logo-tamawal-web-blue.svg" />
            <span className="logo-divider"></span>
            <CeerLogo />
          </div>
        </header>

        {/* Stepper */}
        <div className="stepper">
          <div className="step done">
            <div className="step-dot">✓</div>
            <div className="step-label"><b>Vehicle</b><span>Completed</span></div>
          </div>
          <div className="step done">
            <div className="step-dot">✓</div>
            <div className="step-label"><b>Identity</b><span>Verified</span></div>
          </div>
          <div className="step active">
            <div className="step-dot">3</div>
            <div className="step-label"><b>Data Collection</b><span>In Progress</span></div>
          </div>
          <div className="step">
            <div className="step-dot">4</div>
            <div className="step-label"><b>Financial Details</b><span>Pending</span></div>
          </div>
          <div className="step">
            <div className="step-dot">5</div>
            <div className="step-label"><b>SMAH Consent</b><span>Pending</span></div>
          </div>
          <div className="step">
            <div className="step-dot">6</div>
            <div className="step-label"><b>Compare Offers</b><span>Pending</span></div>
          </div>
        </div>

        {/* Page wrap */}
        <div className="page-wrap" style={{ flex: 1 }}>
          {/* Left sidebar */}
          <aside className="sidebar">
            <div className="car-card">
              <span className="car-img"></span>
              <div className="car-title">EXOBOT SEDAN</div>
              <div className="car-sub">First Edition – 2027</div>
              <div className="spec-list">
                <div className="spec">
                  <div className="spec-icon">🎨</div>
                  <div className="spec-label">Exterior</div>
                  <div className="spec-value">Harrat Grey Metallic</div>
                </div>
                <div className="spec">
                  <div className="spec-icon">💺</div>
                  <div className="spec-label">Interior</div>
                  <div className="spec-value">Red Nappa Leather</div>
                </div>
                <div className="spec">
                  <div className="spec-icon">✳️</div>
                  <div className="spec-label">Wheels</div>
                  <div className="spec-value">23&quot; Front, 24&quot; Rear</div>
                </div>
                <div className="spec">
                  <div className="spec-icon">⚙️</div>
                  <div className="spec-label">Options</div>
                  <div className="spec-value">DiR Mode, First Edition Floor Mats, Convenience Package</div>
                </div>
              </div>
              <div className="price-block">
                <div className="label">Total Price (incl. VAT)</div>
                <div className="value"><small>SAR</small> 399,000</div>
                <div className="label" style={{ marginTop: 10 }}>Indicative from</div>
                <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--blue)', marginTop: 2 }}>SAR 5,871 <small style={{ color: 'var(--muted)', fontWeight: 600 }}>/ month</small></div>
              </div>
            </div>

            <div className="side-notes">
              <div className="side-note">
                <div className="shield" style={{ width: 34, height: 34, fontSize: 15 }}>🛡️</div>
                <div>
                  <b>Secure &amp; Compliant</b>
                  <span>Your data is protected with bank-level security and encryption.</span>
                </div>
              </div>
              <div className="side-note">
                <span className="nafath-mark">نفاذ Nafath</span>
                <div>
                  <b>Verification powered by Nafath</b>
                  <span>Government-trusted identity verification.</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="main-col">
            <h1 className="page-title">Collecting your reports</h1>
            <p className="page-sub">We are securely connecting with trusted government and credit providers to collect your credit and employment information.</p>

            <div className="banner" style={{ marginTop: 22, alignItems: 'center' }}>
              <div className="loader"></div>
              <div>
                <b>Connecting to third-party providers...</b><br />
                <span style={{ color: 'var(--muted)' }}>This may take up to 60 seconds</span>
              </div>
            </div>

            <div className="providers">
              <div className="provider">
                <div className="p-logo" style={{ color: '#7a5db8' }}><span className="ar">سمة</span>SIMAH</div>
                <div>
                  <div className="p-name">SIMAH</div>
                  <div className="p-desc">Credit report &amp; financial obligations</div>
                </div>
                <span className="badge badge-green p-status">✓ Completed</span>
              </div>
              <div className="provider">
                <div className="p-logo" style={{ color: '#1a8f5c' }}>GOSI</div>
                <div>
                  <div className="p-name">GOSI</div>
                  <div className="p-desc">Employment &amp; salary information</div>
                </div>
                <span className="badge badge-inprogress p-status">⟳ In progress</span>
              </div>
              <div className="provider">
                <div className="p-logo" style={{ color: '#0b57d0' }}><span className="ar">مصدر</span>MASDR</div>
                <div>
                  <div className="p-name">MASDR</div>
                  <div className="p-desc">Income verification</div>
                </div>
                <span className="badge badge-inprogress p-status">⟳ In progress</span>
              </div>
              <div className="provider">
                <div className="p-logo" style={{ color: '#7d2c8a' }}><span className="ar">توكلنا</span></div>
                <div>
                  <div className="p-name">Tawakkalna</div>
                  <div className="p-desc">Identity &amp; profile verification</div>
                </div>
                <span className="badge badge-grey p-status">Pending</span>
              </div>
              <div className="provider">
                <div className="p-logo" style={{ color: '#b8860b' }}><span className="ar">إيجار</span>EJAR</div>
                <div>
                  <div className="p-name">EJAR</div>
                  <div className="p-desc">Rental agreements (if applicable)</div>
                </div>
                <span className="badge badge-grey p-status">Pending</span>
              </div>
            </div>
          </main>

          {/* Right col */}
          <aside className="right-col">
            <div className="card next-card">
              <h3>What happens next?</h3>
              <div className="next-item">
                <div className="next-num">1</div>
                <div>
                  <b>We collect your information</b>
                  <p>Securely retrieve your data from authorized providers.</p>
                </div>
              </div>
              <div className="next-item">
                <div className="next-num">2</div>
                <div>
                  <b>We validate your eligibility</b>
                  <p>Your information is analyzed to ensure fitting your financing eligibility.</p>
                </div>
              </div>
              <div className="next-item">
                <div className="next-num">3</div>
                <div>
                  <b>You&apos;ll see your offers</b>
                  <p>Once complete, compare preliminary financing offers.</p>
                </div>
              </div>
            </div>
            <div className="side-note" style={{ marginTop: 16 }}>
              <div className="shield" style={{ width: 34, height: 34, fontSize: 15 }}>🔒</div>
              <div><span>Your information remains secure and encrypted throughout the process.</span></div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="tw-footer">
          <div className="footer-note">
            <div className="shield">🔔</div>
            <div>You can safely leave this page, and we&apos;ll notify you once the process is complete.</div>
          </div>
          <Link className="btn btn-primary" href="/ceer-tamawal/09-eligibility-offers">Continue →</Link>
        </footer>
      </div>
    </>
  );
}
