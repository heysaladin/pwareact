'use client';
import { useState } from 'react';
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

const offers = [
  {
    id: 'snb',
    bankClass: 'snb',
    bankName: 'SNB الأهلي',
    bankSub: 'Saudi National Bank',
    apr: '4.69%',
    monthly: 'SAR 3,648',
    tenure: '60 months',
    financed: 'SAR 183,000',
    total: 'SAR 218,880',
    feats: ['No processing fee', 'Early settlement flexibility', 'Free comprehensive insurance', 'Advanced digital services'],
    recommended: true,
    defaultCompare: true,
    defaultSelected: true,
  },
  {
    id: 'alinma',
    bankClass: 'alinma',
    bankName: 'مصرف الإنماء',
    bankSub: 'alinma bank',
    apr: '5.19%',
    monthly: 'SAR 3,755',
    tenure: '60 months',
    financed: 'SAR 183,000',
    total: 'SAR 225,300',
    feats: ['Flexible payment options', 'No processing fees', 'Early settlement available'],
    recommended: false,
    defaultCompare: false,
    defaultSelected: false,
  },
  {
    id: 'riyad',
    bankClass: 'riyad',
    bankName: 'بنك الرياض',
    bankSub: 'Riyad Bank',
    apr: '5.49%',
    monthly: 'SAR 3,697',
    tenure: '60 months',
    financed: 'SAR 183,000',
    total: 'SAR 221,820',
    feats: ['Fast approval', 'Free comprehensive insurance'],
    recommended: false,
    defaultCompare: true,
    defaultSelected: false,
  },
  {
    id: 'aloula',
    bankClass: 'aloula',
    bankName: 'تمويل الأولى',
    bankSub: 'Tamweel Aloula',
    apr: '5.29%',
    monthly: 'SAR 3,820',
    tenure: '60 months',
    financed: 'SAR 183,000',
    total: 'SAR 229,200',
    feats: ['No processing fee', 'Early settlement available'],
    recommended: false,
    defaultCompare: false,
    defaultSelected: false,
  },
];

export default function EligibilityOffersPage() {
  const [selected, setSelected] = useState('snb');
  const [compared, setCompared] = useState<string[]>(['snb', 'riyad']);

  const toggleCompare = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompared(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const compareCount = compared.length;

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
          --surface: #ffffff;
        }
        .page-09 { font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif; color: var(--text); background: var(--bg-page); min-height: 100vh; display: flex; flex-direction: column; }
        .tw-header { display: flex; align-items: center; justify-content: space-between; padding: 14px 32px; border-bottom: 1px solid var(--border); background: var(--surface); }
        .logo { display: flex; align-items: center; gap: 10px; }
        .logo-img { width: 112px; height: 33px; display: block; }
        .logo-divider { width: 1px; height: 24px; background: var(--border); }
        .ceer-logo-header { color: var(--text); width: 141px; height: auto; }
        .stepper { display: flex; align-items: flex-start; gap: 0; padding: 12px 32px; border-bottom: 1px solid var(--border); background: var(--surface); }
        .step { flex: 1; display: flex; align-items: center; gap: 10px; position: relative; font-size: 12px; }
        .step-dot { width: 20px; height: 20px; flex-shrink: 0; border-radius: 50%; border: 2px solid var(--border); color: var(--muted); background: var(--surface); display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; z-index: 1; }
        .step.done .step-dot { background: var(--green); border-color: var(--green); color: #fff; }
        .step.active .step-dot { border-color: var(--blue); color: var(--blue); }
        .step .step-label b { display: block; font-size: 11.5px; font-weight: 600; }
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
        .indicative-band { background: var(--blue); color: #fff; border-radius: 10px; padding: 12px 16px; margin-top: 10px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; }
        .indicative-band b { font-size: 16px; }
        .sidebar-note { color: var(--muted); font-size: 11.5px; margin-top: 12px; line-height: 1.5; }
        h1.page-title { font-size: 28px; font-weight: 800; color: var(--navy); font-family: "SF Pro Display", -apple-system, sans-serif; }
        .page-sub { color: var(--muted); margin-top: 10px; font-size: 15px; line-height: 1.6; }
        .headline-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }
        .btn { border: none; border-radius: 10px; padding: 13px 32px; font-size: 15px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none; }
        .btn-primary { background: var(--blue); color: #fff; }
        .btn-outline { background: var(--surface); color: var(--blue); border: 1.5px solid var(--blue); }
        .info-strip { display: flex; align-items: center; gap: 10px; background: var(--bg-light); border-radius: 10px; padding: 12px 16px; margin-top: 18px; font-size: 13.5px; }
        .offer { display: flex; align-items: center; border: 1px solid var(--border); border-radius: 14px; margin-top: 16px; padding: 18px 18px; gap: 2px; cursor: pointer; position: relative; background: var(--surface); }
        .offer.selected { border: 2px solid var(--blue); background: var(--bg-light); }
        .rec-badge { position: absolute; top: -10px; left: 54px; background: var(--blue); color: #fff; font-size: 10px; font-weight: 800; letter-spacing: 1px; padding: 4px 12px; border-radius: 999px; }
        .radio { width: 22px; height: 22px; flex-shrink: 0; border: 2px solid #c3ccd6; border-radius: 50%; margin-right: 14px; position: relative; }
        .radio.checked { border-color: var(--blue); }
        .radio.checked::after { content: ""; position: absolute; inset: 3px; background: var(--blue); border-radius: 50%; }
        .bank { width: 130px; flex-shrink: 0; text-align: center; }
        .bank .bank-name { font-weight: 800; font-size: 15px; }
        .bank .bank-sub { font-size: 10px; color: var(--muted); margin-top: 2px; }
        .bank.snb .bank-name { color: #1a6b3c; font-size: 20px; }
        .bank.alinma .bank-name { color: #4a2c1a; }
        .bank.riyad .bank-name { color: #17807c; }
        .bank.aloula .bank-name { color: #1b2a4a; }
        .offer-col { flex: 1; padding: 2px 14px; border-left: 1px solid var(--border); min-width: 96px; }
        .offer-col .label { color: var(--muted); font-size: 11.5px; }
        .offer-col .value { font-weight: 700; font-size: 15.5px; margin-top: 4px; }
        .offer-col .value.blue { color: var(--blue); }
        .offer-feats { flex: 1.25; padding-left: 14px; border-left: 1px solid var(--border); display: flex; flex-direction: column; gap: 6px; font-size: 12.5px; }
        .feat { display: flex; align-items: center; gap: 8px; }
        .check { width: 16px; height: 16px; flex-shrink: 0; background: var(--blue); border-radius: 50%; color: #fff; font-size: 10px; display: inline-flex; align-items: center; justify-content: center; }
        .check.green { background: var(--green); }
        .offer-right { width: 120px; flex-shrink: 0; display: flex; flex-direction: column; align-items: flex-end; gap: 14px; }
        .compare-check { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--muted); cursor: pointer; }
        .compare-check input { accent-color: var(--blue); width: 15px; height: 15px; }
        .view-details { font-size: 13px; font-weight: 700; color: var(--blue); text-decoration: none; }
        .tw-footer { border-top: 1px solid var(--border); padding: 18px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; background: var(--surface); }
      `}</style>

      <div className="page-09">
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
          <div className="step done"><div className="step-dot">✓</div><div className="step-label"><b>Select vehicle</b></div></div>
          <div className="step done"><div className="step-dot">✓</div><div className="step-label"><b>Verify identity (Nafath)</b></div></div>
          <div className="step done"><div className="step-dot">✓</div><div className="step-label"><b>Mobile ownership</b></div></div>
          <div className="step done"><div className="step-dot">✓</div><div className="step-label"><b>Consents &amp; disclosures</b></div></div>
          <div className="step done"><div className="step-dot">✓</div><div className="step-label"><b>Data collection</b></div></div>
          <div className="step active"><div className="step-dot">6</div><div className="step-label"><b>Eligibility offers</b></div></div>
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
              <div className="indicative-band">
                <span>Indicative monthly payment</span>
                <span>From <b>SAR 3,600</b></span>
              </div>
              <p className="sidebar-note">ℹ️ Figures are indicative and may change based on final verification.</p>
            </div>
          </aside>

          {/* Main */}
          <main className="main-col">
            <div className="headline-row">
              <div>
                <h1 className="page-title">Your eligibility offers</h1>
                <p className="page-sub">Here are the financing offers generated for you based on your reports and each provider&apos;s product strategy in our decision engine.</p>
              </div>
              <Link className="btn btn-outline" style={{ flexShrink: 0 }} href="/ceer-tamawal/10-compare-offers">
                ⇄ Compare selected products ({compareCount})
              </Link>
            </div>

            <div className="info-strip">
              <span style={{ color: 'var(--blue)', fontWeight: 700 }}>ℹ️</span>
              These offers are indicative and remain subject to final approval by the provider.
            </div>

            {offers.map(offer => (
              <div
                key={offer.id}
                className={`offer${selected === offer.id ? ' selected' : ''}`}
                onClick={() => setSelected(offer.id)}
              >
                {offer.recommended && <span className="rec-badge">RECOMMENDED</span>}
                <div className={`radio${selected === offer.id ? ' checked' : ''}`}></div>
                <div className={`bank ${offer.bankClass}`}>
                  <div className="bank-name">{offer.bankName}</div>
                  <div className="bank-sub">{offer.bankSub}</div>
                </div>
                <div className="offer-col"><div className="label">APR</div><div className="value blue">{offer.apr}</div></div>
                <div className="offer-col"><div className="label">Monthly payment</div><div className="value">{offer.monthly}</div></div>
                <div className="offer-col"><div className="label">Tenure</div><div className="value">{offer.tenure}</div></div>
                <div className="offer-col"><div className="label">Amount financed</div><div className="value">{offer.financed}</div></div>
                <div className="offer-col"><div className="label">Total payable</div><div className="value">{offer.total}</div></div>
                <div className="offer-feats">
                  {offer.feats.map(f => (
                    <div key={f} className="feat"><span className="check green">✓</span> {f}</div>
                  ))}
                </div>
                <div className="offer-right">
                  <label className="compare-check" onClick={e => toggleCompare(offer.id, e)}>
                    <input type="checkbox" readOnly checked={compared.includes(offer.id)} /> Compare
                  </label>
                  <Link className="view-details" href="/ceer-tamawal/11-offer-details">View details</Link>
                </div>
              </div>
            ))}
          </main>
        </div>

        {/* Footer */}
        <footer className="tw-footer">
          <span></span>
          <div style={{ display: 'flex', gap: 14 }}>
            <Link className="btn btn-outline" href="/ceer-tamawal/10-compare-offers">
              ⇄ Compare selected products ({compareCount})
            </Link>
            <Link className="btn btn-primary" href="/ceer-tamawal/11-offer-details">Create order &nbsp;→</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
