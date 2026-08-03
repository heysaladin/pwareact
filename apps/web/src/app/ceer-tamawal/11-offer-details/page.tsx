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

export default function OfferDetailsPage() {
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
          --amber: #f5a623;
          --surface: #ffffff;
        }
        .page-11 { font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif; color: var(--text); background: var(--bg-page); min-height: 100vh; display: flex; flex-direction: column; }
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
        .step .step-label b { display: block; font-size: 12px; }
        .step.active .step-label b { color: var(--blue); }
        .step::after { content: ""; flex: 1; height: 2px; background: var(--border); margin: 0 10px; }
        .step.done::after { background: var(--green); }
        .step:last-child::after { display: none; }
        .page-wrap { display: flex; gap: 36px; padding: 24px 32px 40px; max-width: 1680px; margin: 0 auto; flex: 1; }
        .sidebar { width: 330px; flex-shrink: 0; }
        .main-col { flex: 1; min-width: 0; }
        .car-card { border: 1px solid var(--border); border-radius: 16px; padding: 20px; background: var(--surface); }
        .car-img { width: 100%; border-radius: 12px; background: url("/ceer-car-00.png") center / contain no-repeat, linear-gradient(160deg, #f4f6f8, #dde3e9); aspect-ratio: 16/10; display: block; }
        .car-title { font-size: 16px; font-weight: 700; margin-top: 16px; }
        .car-sub { color: var(--muted); margin-top: 4px; font-size: 14px; }
        .kv { display: flex; justify-content: space-between; font-size: 13px; padding: 7px 0; }
        .kv .k { color: var(--muted); }
        .kv .v { font-weight: 600; }
        .spec-list { border-top: 1px solid var(--border); margin-top: 14px; padding-top: 6px; }
        .price-block { border-top: 1px solid var(--border); margin-top: 8px; padding-top: 14px; }
        .amount-band { background: var(--bg-light); border-radius: 10px; padding: 12px 16px; margin-top: 14px; display: flex; justify-content: space-between; align-items: center; font-size: 13px; }
        .amount-band b { font-size: 15px; }
        .total-band { background: var(--blue); color: #fff; border-radius: 10px; padding: 12px 16px; margin-top: 10px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; }
        .total-band b { font-size: 15px; }
        .side-note { display: flex; gap: 12px; align-items: flex-start; border: 1px solid var(--border); border-radius: 12px; padding: 14px; font-size: 12.5px; line-height: 1.5; margin-top: 12px; background: var(--surface); }
        .side-note b { display: block; font-size: 13px; }
        .side-note span { color: var(--muted); }
        .nafath-mark { display: inline-block; background: color-mix(in srgb, var(--green) 12%, var(--surface)); color: #2a7d4f; border-radius: 6px; padding: 2px 8px; font-weight: 800; font-size: 11px; }
        .shield { width: 38px; height: 38px; flex-shrink: 0; border-radius: 50%; background: var(--bg-light); color: var(--blue); display: flex; align-items: center; justify-content: center; font-size: 17px; }
        h1.page-title { font-size: 28px; font-weight: 800; color: var(--navy); font-family: "SF Pro Display", -apple-system, sans-serif; }
        .page-sub { color: var(--muted); margin-top: 10px; font-size: 15px; line-height: 1.6; }
        .back { display: inline-flex; align-items: center; gap: 6px; color: var(--blue); font-weight: 600; font-size: 14px; text-decoration: none; }
        .card { border: 1px solid var(--border); border-radius: 14px; background: var(--surface); }
        .badge { display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; font-size: 12px; font-weight: 600; padding: 5px 12px; }
        .badge-blue { border: 1px solid var(--blue); color: var(--blue); }
        .btn { border: none; border-radius: 10px; padding: 13px 32px; font-size: 15px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none; }
        .btn-primary { background: var(--blue); color: #fff; }
        .btn-outline { background: var(--surface); color: var(--blue); border: 1.5px solid var(--blue); }
        .tw-footer { border-top: 1px solid var(--border); padding: 18px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; background: var(--surface); }
        .content-cols { display: flex; gap: 24px; margin-top: 16px; align-items: flex-start; }
        .center-col { flex: 1; min-width: 0; }
        .rail { width: 300px; flex-shrink: 0; }
        .hero { padding: 24px; }
        .hero-top { display: flex; align-items: center; gap: 16px; }
        .hero-logo { width: 62px; height: 62px; flex-shrink: 0; border: 1px solid var(--border); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #1a6b3c; font-weight: 800; font-size: 15px; text-align: center; line-height: 1.2; }
        .hero-name { font-size: 21px; font-weight: 800; color: var(--navy); }
        .hero-stats { display: flex; gap: 12px; margin-top: 20px; }
        .stat { flex: 1; background: var(--bg-page); border: 1px solid var(--border); border-radius: 12px; padding: 14px 16px; }
        .stat .l { color: var(--muted); font-size: 12px; }
        .stat .v { font-weight: 800; font-size: 19px; margin-top: 5px; }
        .stat .v.blue { color: var(--blue); }
        .chips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px; }
        .chip { display: inline-flex; align-items: center; gap: 7px; background: var(--bg-light); color: var(--blue); border-radius: 999px; padding: 7px 14px; font-size: 12.5px; font-weight: 600; }
        .detail-grid { display: flex; gap: 20px; margin-top: 20px; }
        .detail-grid .card { flex: 1; padding: 22px; }
        .card h3 { font-size: 16px; color: var(--navy); margin-bottom: 8px; }
        .row { display: flex; justify-content: space-between; font-size: 13.5px; padding: 9px 0; border-bottom: 1px solid #eef2f6; }
        .row:last-child { border-bottom: none; }
        .row .k { color: var(--muted); }
        .row .v { font-weight: 700; }
        .mo-highlight { background: var(--bg-light); border-radius: 10px; padding: 12px 16px; margin-top: 12px; display: flex; justify-content: space-between; align-items: center; font-size: 13px; }
        .mo-highlight b { color: var(--blue); font-size: 16px; }
        .rating-head { display: flex; align-items: center; gap: 12px; }
        .rating-big { font-size: 38px; font-weight: 800; color: var(--navy); }
        .stars { color: var(--amber); font-size: 15px; letter-spacing: 1px; }
        .rbar-row { display: flex; align-items: center; gap: 10px; font-size: 12.5px; margin-top: 12px; }
        .rbar-row .lbl { width: 140px; color: var(--muted); flex-shrink: 0; }
        .rbar { flex: 1; height: 6px; background: color-mix(in srgb, var(--muted) 20%, var(--surface)); border-radius: 999px; overflow: hidden; }
        .rbar i { display: block; height: 100%; background: var(--blue); border-radius: 999px; }
        .rbar-row .n { width: 26px; text-align: right; font-weight: 700; }
        .rail .card { padding: 20px; margin-bottom: 16px; }
        .feat { display: flex; align-items: center; gap: 8px; font-size: 13px; padding: 6px 0; }
        .check { width: 16px; height: 16px; flex-shrink: 0; background: var(--blue); border-radius: 50%; color: #fff; font-size: 10px; display: inline-flex; align-items: center; justify-content: center; }
        .check.green { background: var(--green); }
        .doc-row { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-bottom: 1px solid #eef2f6; font-size: 13.5px; font-weight: 600; color: var(--text); text-decoration: none; }
        .doc-row:last-child { border-bottom: none; }
        .doc-icon { width: 32px; height: 32px; flex-shrink: 0; border-radius: 8px; background: var(--bg-light); display: flex; align-items: center; justify-content: center; font-size: 15px; }
        .next-item { display: flex; gap: 12px; margin-top: 14px; font-size: 13px; line-height: 1.4; }
        .next-num { width: 24px; height: 24px; flex-shrink: 0; border-radius: 50%; background: var(--bg-light); color: var(--blue); font-weight: 700; font-size: 12px; display: flex; align-items: center; justify-content: center; }
      `}</style>

      <div className="page-11">
        {/* Header */}
        <header className="tw-header">
          <div className="logo">
            <img className="logo-img" alt="Tamawal" src="/logo-tamawal-web-blue.svg" />
            <span className="logo-divider"></span>
            <CeerLogo />
          </div>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>
            Assessment ID<br /><b style={{ color: 'var(--text)' }}>AELG-2026-05-18-1123</b>
          </div>
        </header>

        {/* Stepper */}
        <div className="stepper">
          <div className="step done"><div className="step-dot">✓</div><div className="step-label"><b>Vehicle Selected</b></div></div>
          <div className="step done"><div className="step-dot">✓</div><div className="step-label"><b>Identity Verified</b></div></div>
          <div className="step done"><div className="step-dot">✓</div><div className="step-label"><b>Reports Collected</b></div></div>
          <div className="step active"><div className="step-dot">4</div><div className="step-label"><b>Offers Generated</b></div></div>
          <div className="step"><div className="step-dot">5</div><div className="step-label"><b>SMAH Consent</b></div></div>
          <div className="step"><div className="step-dot">6</div><div className="step-label"><b>Compare Offers</b></div></div>
        </div>

        {/* Page wrap */}
        <div className="page-wrap">
          {/* Left sidebar */}
          <aside className="sidebar">
            <h3 style={{ fontSize: 16, color: 'var(--navy)', marginBottom: 14 }}>Your selected vehicle</h3>
            <div className="car-card">
              <span className="car-img"></span>
              <div className="car-title">EXOBOT SUV</div>
              <div className="car-sub">Premium AWD – 2026</div>
              <div className="spec-list">
                <div className="kv"><span className="k">🎨 Exterior</span><span className="v">Quantum Grey</span></div>
                <div className="kv"><span className="k">💺 Interior</span><span className="v">Onyx Black</span></div>
                <div className="kv"><span className="k">✳️ Wheels</span><span className="v">21&quot; Alloy Sport</span></div>
                <div className="kv"><span className="k">🔋 Battery</span><span className="v">108 kWh</span></div>
                <div className="kv"><span className="k">📏 Range</span><span className="v">610 km</span></div>
              </div>
              <div className="price-block">
                <div className="kv"><span className="k">Vehicle price (incl. VAT)</span><span className="v">SAR 228,750</span></div>
                <div className="kv"><span className="k">Down payment (20%)</span><span className="v">SAR 45,750</span></div>
              </div>
              <div className="amount-band">
                <span>Amount to finance</span>
                <b>SAR 183,000</b>
              </div>
              <div className="kv" style={{ marginTop: 8 }}><span className="k">Tenure</span><span className="v">60 Months</span></div>
              <div className="total-band">
                <span>Monthly payment</span>
                <span>From <b>SAR 3,648</b></span>
              </div>
            </div>

            <div className="side-note">
              <div className="shield" style={{ width: 34, height: 34, fontSize: 15 }}>🛡️</div>
              <div>
                <b>Your data is secure</b>
                <span>We use bank-level encryption to protect your information.</span>
              </div>
            </div>
            <div className="side-note">
              <span className="nafath-mark">نفاذ Nafath</span>
              <div><span>Verification powered by Nafath — government-trusted identity services.</span></div>
            </div>
          </aside>

          {/* Main */}
          <main className="main-col">
            <Link className="back" href="/ceer-tamawal/10-compare-offers">‹ Back to Comparison</Link>

            <div className="content-cols">
              <div className="center-col">
                {/* Hero */}
                <div className="card hero">
                  <div className="hero-top">
                    <div className="hero-logo">SNB<br />الأهلي</div>
                    <div>
                      <div className="hero-name">Saudi National Bank</div>
                      <span className="badge badge-blue" style={{ marginTop: 6 }}>English</span>
                    </div>
                  </div>
                  <div className="hero-stats">
                    <div className="stat"><div className="l">Annual Profit Rate (APR)</div><div className="v blue">4.69%</div></div>
                    <div className="stat"><div className="l">Monthly Payment</div><div className="v">SAR 3,648</div></div>
                    <div className="stat"><div className="l">Total Payable</div><div className="v">SAR 218,880</div></div>
                    <div className="stat"><div className="l">Down Payment</div><div className="v">SAR 45,750</div></div>
                  </div>
                  <div className="chips">
                    <span className="chip">✓ No Processing Fees</span>
                    <span className="chip">✓ Early Settlement Benefit</span>
                    <span className="chip">✓ Free Comprehensive Insurance</span>
                    <span className="chip">✓ Advanced Digital Services</span>
                  </div>
                </div>

                {/* Summary + Breakdown */}
                <div className="detail-grid">
                  <div className="card">
                    <h3>Offer Summary</h3>
                    <div className="row"><span className="k">Financed Amount</span><span className="v">SAR 183,000</span></div>
                    <div className="row"><span className="k">Tenure</span><span className="v">60 Months</span></div>
                    <div className="row"><span className="k">Down Payment (20%)</span><span className="v">SAR 45,750</span></div>
                    <div className="row"><span className="k">Profit Rate (APR)</span><span className="v" style={{ color: 'var(--blue)' }}>4.69%</span></div>
                    <div className="row"><span className="k">Monthly Payment</span><span className="v">SAR 3,648</span></div>
                    <div className="row"><span className="k">First Payment</span><span className="v">30 days after disbursement</span></div>
                  </div>
                  <div className="card">
                    <h3>Payment Breakdown</h3>
                    <div className="row"><span className="k">Vehicle Price (incl. VAT)</span><span className="v">SAR 228,750</span></div>
                    <div className="row"><span className="k">Down Payment (20%)</span><span className="v">SAR 45,750</span></div>
                    <div className="row"><span className="k">Amount to Finance</span><span className="v">SAR 183,000</span></div>
                    <div className="row"><span className="k">Total Profit</span><span className="v">SAR 35,880</span></div>
                    <div className="row"><span className="k">Total Payable</span><span className="v">SAR 218,880</span></div>
                    <div className="mo-highlight">
                      <span>Indicative Monthly Payment</span>
                      <span>From <b>SAR 3,648</b> <small style={{ color: 'var(--muted)' }}>/ month</small></span>
                    </div>
                  </div>
                </div>

                {/* Key Facts + Rating */}
                <div className="detail-grid">
                  <div className="card">
                    <h3>Key Facts</h3>
                    <div className="row"><span className="k"><span className="check green" style={{ marginRight: 6 }}>✓</span>Sharia-compliant financing</span><span className="v">Yes</span></div>
                    <div className="row"><span className="k"><span className="check green" style={{ marginRight: 6 }}>✓</span>Fixed profit rate</span><span className="v">Yes</span></div>
                    <div className="row"><span className="k"><span className="check green" style={{ marginRight: 6 }}>✓</span>Early settlement allowed</span><span className="v">Yes</span></div>
                    <div className="row"><span className="k"><span className="check green" style={{ marginRight: 6 }}>✓</span>Insurance included</span><span className="v">Comprehensive</span></div>
                    <div className="row"><span className="k"><span className="check green" style={{ marginRight: 6 }}>✓</span>Processing fees</span><span className="v">SAR 0</span></div>
                    <div className="row"><span className="k"><span className="check green" style={{ marginRight: 6 }}>✓</span>Transfer of ownership</span><span className="v">At end of term</span></div>
                  </div>
                  <div className="card">
                    <h3>Offer Rating</h3>
                    <div className="rating-head">
                      <span className="rating-big">4.8</span>
                      <div>
                        <div className="stars">★★★★★</div>
                        <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 3 }}>+728 reviews</div>
                      </div>
                    </div>
                    <div className="rbar-row"><span className="lbl">Customer satisfaction</span><span className="rbar"><i style={{ width: '98%' }}></i></span><span className="n">4.9</span></div>
                    <div className="rbar-row"><span className="lbl">Digital experience</span><span className="rbar"><i style={{ width: '96%' }}></i></span><span className="n">4.8</span></div>
                    <div className="rbar-row"><span className="lbl">Approval speed</span><span className="rbar"><i style={{ width: '94%' }}></i></span><span className="n">4.7</span></div>
                    <div className="rbar-row"><span className="lbl">Transparency</span><span className="rbar"><i style={{ width: '96%' }}></i></span><span className="n">4.8</span></div>
                  </div>
                </div>
              </div>

              {/* Right rail */}
              <aside className="rail">
                <div className="card">
                  <h3>Why this offer is recommended</h3>
                  <div className="feat"><span className="check green">✓</span> Lowest total payable</div>
                  <div className="feat"><span className="check green">✓</span> Competitive profit rate</div>
                  <div className="feat"><span className="check green">✓</span> No processing fees</div>
                  <div className="feat"><span className="check green">✓</span> Free comprehensive insurance</div>
                  <div className="feat"><span className="check green">✓</span> Advanced digital services</div>
                </div>
                <div className="card">
                  <h3>Key Documents</h3>
                  <a className="doc-row" href="#"><span className="doc-icon">📄</span> App Facts Sheet</a>
                  <a className="doc-row" href="#"><span className="doc-icon">📄</span> Terms &amp; Conditions</a>
                  <a className="doc-row" href="#"><span className="doc-icon">📄</span> Product Disclosure</a>
                  <a className="doc-row" href="#"><span className="doc-icon">📄</span> Schedule of Charges</a>
                </div>
                <div className="card">
                  <h3>Next Steps</h3>
                  <div className="next-item"><span className="next-num">1</span> Review the key facts and terms</div>
                  <div className="next-item"><span className="next-num">2</span> Accept the offer to proceed</div>
                  <div className="next-item"><span className="next-num">3</span> Complete final verification</div>
                  <div className="next-item"><span className="next-num">4</span> The bank will contact you for final approval</div>
                </div>
              </aside>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="tw-footer">
          <Link className="btn btn-outline" href="/ceer-tamawal/09-eligibility-offers">← Back to Offers</Link>
          <div style={{ display: 'flex', gap: 14 }}>
            <a className="btn btn-outline" href="#">Save This Offer</a>
            <a className="btn btn-primary" style={{ background: '#f08a1d' }} href="#">Create Order &nbsp;→</a>
          </div>
        </footer>
      </div>
    </>
  );
}
