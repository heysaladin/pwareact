'use client';
import { useState } from 'react';
import Link from 'next/link';

const ORDERS = [
  {
    id: '#LUC-2026-00126',
    vehicle: 'Lucid Air Touring',
    color: 'Fathom Blue Metallic',
    img: '/lucid-car.webp',
    bankName: 'Al Rajhi Bank',
    bankNameAr: 'مصرف الراجحي',
    bankLogo: '/logo-alrajhi.png',
    date: 'Apr 26, 2026',
    status: 'Order Submitted',
    statusColor: '#16a34a',
    statusBg: '#dcfce7',
    statusDot: '#16a34a',
  },
  {
    id: '#LUC-2026-00103',
    vehicle: 'Lucid Air Pure',
    color: 'Stellar White',
    img: '/lucid-car.webp',
    bankName: 'Riyad Bank',
    bankNameAr: 'بنك الرياض',
    bankLogo: '/logo-riyad.png',
    date: 'Apr 14, 2026',
    status: 'Under Review',
    statusColor: '#2563eb',
    statusBg: '#dbeafe',
    statusDot: '#2563eb',
  },
  {
    id: '#LUC-2026-00087',
    vehicle: 'Lucid Air Grand Touring',
    color: 'Infinite Black',
    img: '/lucid-car.webp',
    bankName: 'SNB',
    bankNameAr: 'الأهلي',
    bankLogo: '/logo-snb.png',
    date: 'Mar 28, 2026',
    status: 'Additional Documents Required',
    statusColor: '#d97706',
    statusBg: '#fef3c7',
    statusDot: '#f59e0b',
  },
  {
    id: '#LUC-2026-00051',
    vehicle: 'Lucid Air Touring',
    color: 'Quantum Grey',
    img: '/lucid-car.webp',
    bankName: 'Alinma Bank',
    bankNameAr: 'مصرف الإنماء',
    bankLogo: '/logo-alinma.png',
    date: 'Mar 10, 2026',
    status: 'Completed',
    statusColor: '#6b7280',
    statusBg: '#f3f4f6',
    statusDot: '#9ca3af',
  },
];

export default function TrackOrdersPage() {
  const [dark, setDark] = useState(false);

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center" style={{ background: 'var(--bg)' }}>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>Screen too small</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>This dashboard is designed for wide screens.</p>
      </div>

      <div className="fixed inset-0 overflow-auto flex items-start justify-center pt-4" style={{ background: dark ? '#000' : '#d1d5db' }}>
        <div className="frame w-[1455px] h-[1015px] overflow-hidden flex flex-col" style={{ background: 'var(--bg)', color: 'var(--text)' }}>

          {/* Top Navbar */}
          <header style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)', height: 56, flexShrink: 0, display: 'flex', alignItems: 'center', paddingLeft: 28, paddingRight: 28, gap: 32 }}>
            <img src="/lucid-motors-logo.svg" alt="Lucid" style={{ height: 9, width: 'auto', filter: dark ? 'brightness(0) invert(1)' : 'brightness(0)' }} />
            <div style={{ width: 1, height: 24, background: 'var(--border)', margin: '0 4px' }} />
            <nav style={{ display: 'flex', gap: 28, flex: 1 }}>
              {['VEHICLES', 'OWNERSHIP', 'DISCOVER'].map(item => (
                <button key={item} style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
                  {item}
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              ))}
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                SA – EN
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </button>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', position: 'relative' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
              </button>
              <button onClick={() => setDark(d => !d)} className="relative flex items-center shrink-0" aria-label="Toggle theme" style={{ width: 44, height: 24 }}>
                <span className="absolute inset-0 rounded-full transition-colors" style={{ background: dark ? '#2a3a4f' : '#dde3ec' }} />
                <span className="absolute flex items-center justify-center w-[18px] h-[18px] rounded-full shadow transition-all" style={{ left: dark ? 23 : 3, top: 3, background: dark ? '#4f95ff' : '#2563eb' }}>
                  {dark ? (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                  ) : (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                  )}
                </span>
              </button>
            </div>
          </header>

          {/* Body: sidebar + content */}
          <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

            {/* Left Sidebar */}
            <aside style={{ width: 220, flexShrink: 0, background: 'var(--card)', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
              <nav style={{ padding: '20px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  {
                    label: 'My Account',
                    href: '#',
                    active: false,
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
                  },
                  {
                    label: 'Order History',
                    href: '#',
                    active: false,
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
                  },
                  {
                    label: 'Order Tracking',
                    href: '/lucid/track-orders',
                    active: true,
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
                  },
                ].map(item => (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '9px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: item.active ? 600 : 400,
                      color: item.active ? 'var(--blue)' : 'var(--muted)',
                      background: item.active ? 'var(--highlight)' : 'transparent',
                      textDecoration: 'none',
                      borderLeft: item.active ? '3px solid var(--blue)' : '3px solid transparent',
                      transition: 'background 0.15s',
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div style={{ marginTop: 'auto', padding: 16, borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: 12, borderRadius: 10, background: 'var(--bg)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: 1 }}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.6 12.9a19.79 19.79 0 01-3.07-8.67A2 2 0 012.48 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>Need help?</p>
                    <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2, lineHeight: 1.5 }}>Our support team is here to assist you.</p>
                    <a href="#" style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 6 }}>
                      Contact Support →
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, overflowY: 'auto', padding: '36px 40px', background: 'var(--bg)' }}>
              {/* Header */}
              <div style={{ marginBottom: 28 }}>
                <h1 style={{ fontSize: 32, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>Order Tracking</h1>
                <p style={{ fontSize: 14, color: 'var(--muted)' }}>Track your financing orders and current application status</p>
              </div>

              {/* Search + Filter */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ flex: 1, position: 'relative' }}>
                  <svg style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  <input
                    type="text"
                    placeholder="Search by Order ID, Vehicle or Provider..."
                    style={{ width: '100%', paddingLeft: 40, paddingRight: 14, paddingTop: 10, paddingBottom: 10, borderRadius: 10, border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--text)', fontSize: 13, outline: 'none' }}
                  />
                </div>
                <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 10, border: '1px solid var(--border)', background: 'var(--card)', fontSize: 13, color: 'var(--muted)', cursor: 'pointer', fontWeight: 500 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
                  Filter
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>

              {/* Table */}
              <div style={{ borderRadius: 14, border: '1px solid var(--border)', overflow: 'hidden', background: 'var(--card)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
                      {['Order ID', 'Vehicle', 'Finance Provider', 'Order Date', 'Current Status', 'Action'].map(col => (
                        <th key={col} style={{ padding: '13px 20px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.02em' }}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ORDERS.map((order, i) => (
                      <tr key={order.id} style={{ borderBottom: i < ORDERS.length - 1 ? '1px solid var(--border)' : 'none' }}>
                        <td style={{ padding: '18px 20px' }}>
                          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--blue)', fontVariantNumeric: 'tabular-nums' }}>{order.id}</span>
                        </td>
                        <td style={{ padding: '18px 20px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                            <div style={{ width: 72, height: 44, borderRadius: 8, overflow: 'hidden', flexShrink: 0, background: dark ? '#1a2233' : '#e8eaed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <img src={order.img} alt={order.vehicle} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div>
                              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{order.vehicle}</p>
                              <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{order.color}</p>
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: '18px 20px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                              <img src={order.bankLogo} alt={order.bankName} style={{ width: 28, height: 28, objectFit: 'contain' }}
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                            </div>
                            <div>
                              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{order.bankName}</p>
                              <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 1 }}>{order.bankNameAr}</p>
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: '18px 20px' }}>
                          <span style={{ fontSize: 13, color: 'var(--muted)' }}>{order.date}</span>
                        </td>
                        <td style={{ padding: '18px 20px' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 500, padding: '5px 12px', borderRadius: 99, background: order.statusBg, color: order.statusColor }}>
                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: order.statusDot, flexShrink: 0 }} />
                            {order.status}
                          </span>
                        </td>
                        <td style={{ padding: '18px 20px' }}>
                          <Link
                            href="/lucid/track-orders/details"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--card)', fontSize: 13, fontWeight: 500, color: 'var(--text)', textDecoration: 'none' }}
                          >
                            View Tracking
                            <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </div>

      <style>{`
        [data-theme="dark"]{--bg:#0b1420;--card:#121e2e;--border:#2a3a4f;--text:#e6edf5;--muted:#93a4b8;--blue:#4f95ff;--heading:#dbe7f5;--highlight:#16283f;}
        [data-theme="light"]{--bg:#f4f6f9;--card:#ffffff;--border:#dde3ec;--text:#1a2636;--muted:#64748b;--blue:#2563eb;--heading:#0f172a;--highlight:#eff6ff;}
        .viewport-warning{background:var(--bg);}
        @media(max-width:1454px),(max-height:1014px){.frame{display:none;}.viewport-warning{display:flex!important;}}
      `}</style>
    </div>
  );
}
