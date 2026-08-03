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

const banks = [
  { id: 'snb', nameClass: 'snb', name: 'SNB الأهلي', sub: 'Saudi National Bank' },
  { id: 'alinma', nameClass: 'alinma', name: 'مصرف الإنماء', sub: 'alinma bank' },
  { id: 'riyad', nameClass: 'riyad', name: 'بنك الرياض', sub: 'Riyad Bank' },
  { id: 'aloula', nameClass: 'aloula', name: 'تمويل الأولى', sub: 'Tamweel Aloula' },
];

const rows = [
  { section: 'Key Details' },
  { label: 'Annual Profit Rate (APR)', values: ['4.69%', '4.29%', '4.99%', '5.19%'], bestIdx: 1, selStyle: { color: 'var(--blue)' } },
  { label: 'Monthly Payment', values: ['SAR 3,648', 'SAR 3,564', 'SAR 3,721', 'SAR 3,775'] },
  { label: 'Total Payable', values: ['SAR 218,880', 'SAR 213,840', 'SAR 223,260', 'SAR 226,500'] },
  { label: 'Down Payment', values: ['SAR 45,750', 'SAR 45,750', 'SAR 45,750', 'SAR 45,750'] },
  { label: 'Tenure', values: ['60 Months', '60 Months', '60 Months', '60 Months'] },
  { label: 'Processing Fee', values: ['SAR 0', 'SAR 500', 'SAR 0', 'SAR 750'], bestIdxs: [0, 2] },
  { label: 'Early Settlement Benefit', values: ['✓ Yes', '✓ Yes', '✕ No', '✓ Yes'], bestIdxs: [0, 1, 3], mutedIdxs: [2] },
  { label: 'Free Comprehensive Insurance', values: ['✓ Yes', '✕ No', '✓ Yes', '✕ No'], bestIdxs: [0, 2], mutedIdxs: [1, 3] },
  { label: 'Digital Services', values: ['Advanced', 'Standard', 'Standard', 'Standard'] },
  { label: 'Customer Rating', values: ['★★★★★ 4.8', '★★★★☆ 4.5', '★★★★☆ 4.3', '★★★★☆ 4.1'], starIdxs: [0, 1, 2, 3] },
];

export default function CompareOffersPage() {
  const [selectedBank, setSelectedBank] = useState(0);

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
        .page-10 { font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif; color: var(--text); background: var(--bg-page); min-height: 100vh; display: flex; flex-direction: column; }
        .tw-header { display: flex; align-items: center; justify-content: space-between; padding: 14px 32px; border-bottom: 1px solid var(--border); background: var(--surface); }
        .logo { display: flex; align-items: center; gap: 10px; }
        .logo-img { width: 112px; height: 33px; display: block; }
        .logo-divider { width: 1px; height: 24px; background: var(--border); }
        .ceer-logo-header { color: var(--text); width: 141px; height: auto; }
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
        .compare-head { display: flex; align-items: center; justify-content: space-between; margin-top: 22px; }
        .compare-head .count { font-weight: 700; font-size: 14px; }
        .clear-link { font-size: 13px; font-weight: 600; color: var(--blue); text-decoration: none; }
        .btn { border: none; border-radius: 10px; padding: 13px 32px; font-size: 15px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none; }
        .btn-primary { background: var(--blue); color: #fff; }
        .btn-outline { background: var(--surface); color: var(--blue); border: 1.5px solid var(--blue); }
        .tw-footer { border-top: 1px solid var(--border); padding: 18px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; background: var(--surface); }
        .cmp-table { width: 100%; border-collapse: separate; border-spacing: 0; margin-top: 14px; background: var(--surface); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; font-size: 13.5px; }
        .cmp-table th, .cmp-table td { padding: 12px 16px; text-align: center; border-bottom: 1px solid var(--border); border-left: 1px solid var(--border); }
        .cmp-table th:first-child, .cmp-table td:first-child { text-align: left; color: var(--muted); font-weight: 500; border-left: none; width: 200px; background: var(--bg-light); }
        .cmp-table tr:last-child td { border-bottom: none; }
        .cmp-table td { font-weight: 700; }
        .cmp-table .sel { background: var(--bg-light); box-shadow: inset 0 0 0 2px var(--blue); }
        th.bank-h { padding: 18px 14px 14px; vertical-align: top; }
        .bank-h .bank-name { font-weight: 800; font-size: 15px; }
        .bank-h .bank-sub { font-size: 10.5px; color: var(--muted); margin-top: 2px; font-weight: 500; }
        .bank-h.snb .bank-name { color: #1a6b3c; font-size: 18px; }
        .bank-h.alinma .bank-name { color: #4a2c1a; }
        .bank-h.riyad .bank-name { color: #17807c; }
        .bank-h.aloula .bank-name { color: #1b2a4a; }
        .sel-btn { margin-top: 10px; display: inline-block; border: 1.5px solid var(--blue); color: var(--blue); border-radius: 999px; padding: 4px 16px; font-size: 12px; font-weight: 700; cursor: pointer; background: var(--surface); }
        .sel-btn.on { background: var(--blue); color: #fff; }
        .section-row td { background: color-mix(in srgb, var(--muted) 15%, var(--surface)) !important; color: var(--navy) !important; font-weight: 800 !important; text-align: left !important; box-shadow: none !important; font-size: 13px; }
        .stars { color: var(--amber); letter-spacing: 1px; }
        .best { color: var(--green-dark); }
      `}</style>

      <div className="page-10">
        {/* Header */}
        <header className="tw-header">
          <div className="logo">
            <img className="logo-img" alt="Tamawal" src="/logo-tamawal-web-blue.svg" />
            <span className="logo-divider"></span>
            <CeerLogo />
          </div>
        </header>

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
                <span>Total payable (SNB)</span>
                <b>SAR 218,880</b>
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
            <Link className="back" href="/ceer-tamawal/09-eligibility-offers">‹ Back to Offers</Link>
            <h1 className="page-title" style={{ marginTop: 12 }}>Compare &amp; Choose Your Best Offer</h1>
            <p className="page-sub">Compare financing offers from our trusted partners and choose the one that fits you best.</p>

            <div className="compare-head">
              <span className="count">Compare up to 4 offers</span>
              <a className="clear-link" href="#">Clear Selection</a>
            </div>

            <table className="cmp-table">
              <tbody>
                <tr>
                  <th></th>
                  {banks.map((bank, i) => (
                    <th key={bank.id} className={`bank-h ${bank.nameClass}${selectedBank === i ? ' sel' : ''}`}>
                      <div className="bank-name">{bank.name}</div>
                      <div className="bank-sub">{bank.sub}</div>
                      <button
                        className={`sel-btn${selectedBank === i ? ' on' : ''}`}
                        onClick={() => setSelectedBank(i)}
                      >
                        {selectedBank === i ? '✓ Selected' : 'Select'}
                      </button>
                    </th>
                  ))}
                </tr>

                {rows.map((row, ri) => {
                  if ('section' in row) {
                    return (
                      <tr key={ri} className="section-row">
                        <td colSpan={5}>{row.section}</td>
                      </tr>
                    );
                  }
                  return (
                    <tr key={ri}>
                      <td>{row.label}</td>
                      {row.values!.map((val, vi) => {
                        const isSel = vi === selectedBank;
                        const isBest = (row.bestIdx === vi) || (row.bestIdxs?.includes(vi));
                        const isMuted = row.mutedIdxs?.includes(vi);
                        const isStars = row.starIdxs?.includes(vi);
                        let style: React.CSSProperties = {};
                        if (isSel && row.selStyle) style = { ...style, ...row.selStyle };
                        if (isBest && !isSel) style = { ...style, color: 'var(--green-dark)' };
                        if (isMuted) style = { ...style, color: 'var(--muted)' };
                        return (
                          <td key={vi} className={isSel ? 'sel' : ''} style={style}>
                            {isStars ? (
                              <span>
                                <span className="stars">{val.split(' ')[0]}</span> {val.split(' ')[1]}
                              </span>
                            ) : val}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </main>
        </div>

        {/* Footer */}
        <footer className="tw-footer">
          <Link className="btn btn-outline" href="/ceer-tamawal/09-eligibility-offers">← Back to Offers</Link>
          <div style={{ display: 'flex', gap: 14 }}>
            <a className="btn btn-outline" href="#">Save Comparison</a>
            <Link className="btn btn-primary" style={{ background: '#f08a1d' }} href="/ceer-tamawal/11-offer-details">Create Order &nbsp;→</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
