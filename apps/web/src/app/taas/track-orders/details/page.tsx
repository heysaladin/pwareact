'use client';
import { useState } from 'react';
import Link from 'next/link';

const ORDER_PROGRESS = [
  { label: 'Order Submitted', date: 'Apr 26, 2026', status: 'done' },
  { label: 'Identity Verified', date: 'Apr 27, 2026', status: 'done' },
  { label: 'Reports Collected', date: 'Apr 28, 2026', status: 'done' },
  { label: 'Eligible Offer Selected', date: 'Apr 29, 2026', status: 'done' },
  { label: 'Bank Final Review', date: 'Apr 30, 2026', status: 'active' },
  { label: 'Additional Documents Upload', date: '—', status: 'action' },
  { label: 'Final Approval', date: '—', status: 'pending' },
  { label: 'Vehicle Delivery Coordination', date: '—', status: 'pending' },
];

const RECENT_UPDATES = [
  { text: 'Application submitted successfully', date: 'Apr 26, 2026', time: '10:14 AM', color: '#16a34a' },
  { text: 'Identity verification completed', date: 'Apr 27, 2026', time: '02:36 PM', color: '#16a34a' },
  { text: 'Credit and income reports validated', date: 'Apr 28, 2026', time: '11:20 AM', color: '#16a34a' },
  { text: 'Additional documents requested by finance provider', date: 'Apr 30, 2026', time: '09:15 AM', color: '#d97706' },
];

export default function TrackOrderDetailsPage() {
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
            <Link href="/lucid" style={{ display: 'flex', alignItems: 'center', padding: '12px 8px', margin: '-12px -8px' }}>
              <img src="/lucid-motors-logo.svg" alt="Lucid" style={{ height: 9, width: 'auto', filter: dark ? 'brightness(0) invert(1)' : 'brightness(0)' }} />
            </Link>
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
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}>
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
            <main style={{ flex: 1, overflowY: 'auto', padding: '28px 36px', background: 'var(--bg)' }}>

              {/* Page Header */}
              <div style={{ marginBottom: 20 }}>
                <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Order Tracking Details</h1>
                <p style={{ fontSize: 13, color: 'var(--muted)' }}>Track your financing order and required actions</p>
              </div>

              {/* Order Meta Strip */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 0, padding: '16px 24px', borderRadius: 12, border: '1px solid var(--border)', background: 'var(--card)', marginBottom: 20 }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>Order ID</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>#LUC-2026-00126</p>
                </div>
                <div style={{ width: 1, height: 36, background: 'var(--border)', marginRight: 28, marginLeft: 28 }} />
                <div style={{ flex: 1.5 }}>
                  <p style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>Vehicle</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>2026 Lucid Air Touring</p>
                </div>
                <div style={{ width: 1, height: 36, background: 'var(--border)', marginRight: 28, marginLeft: 28 }} />
                <div style={{ flex: 1.5, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--card)', overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/logo-alrajhi.png" alt="Al Rajhi" style={{ width: 28, height: 28, objectFit: 'contain' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 2 }}>Finance Provider</p>
                    <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--blue)' }}>Al Rajhi Bank</p>
                    <p style={{ fontSize: 11, color: 'var(--muted)' }}>مصرف الراجحي</p>
                  </div>
                </div>
                <div style={{ width: 1, height: 36, background: 'var(--border)', marginRight: 28, marginLeft: 28 }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>Order Date</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Apr 26, 2026</p>
                </div>
                <div style={{ width: 1, height: 36, background: 'var(--border)', marginRight: 28, marginLeft: 28 }} />
                <div style={{ flex: 1.5 }}>
                  <p style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 6 }}>Current Status</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 500, padding: '5px 12px', borderRadius: 99, background: '#fef3c7', color: '#d97706' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#d97706"><path d="M12 2L2 22h20L12 2z"/><line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2"/><circle cx="12" cy="17" r="1" fill="white"/></svg>
                    Additional Documents Required
                  </span>
                </div>
              </div>

              {/* Two-column layout */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>

                {/* LEFT: Vehicle Summary */}
                <div style={{ borderRadius: 12, border: '1px solid var(--border)', background: 'var(--card)', padding: '20px 22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                      <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Vehicle Summary</span>
                    </div>
                    <a href="#" style={{ fontSize: 12, fontWeight: 500, color: 'var(--blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                      View Configuration →
                    </a>
                  </div>
                  <div style={{ display: 'flex', gap: 18 }}>
                    <div style={{ width: 160, height: 100, borderRadius: 10, overflow: 'hidden', flexShrink: 0, background: dark ? '#1a2233' : '#e8eaed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="/lucid-car.webp" alt="2026 Lucid Air Touring" style={{ width: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>2026 Lucid Air Touring</p>
                      {[
                        { icon: <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#4a6a9c' }} />, text: 'Fathom Blue Metallic' },
                        { icon: <div style={{ width: 10, height: 10, borderRadius: '50%', overflow: 'hidden', display: 'flex' }}><div style={{ width: '50%', background: '#1a1a1a' }} /><div style={{ width: '50%', background: '#b5632a' }} /></div>, text: 'Tahoe interior' },
                        { icon: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>, text: 'Front and Rear Motor, All-Wheel Drive' },
                        { icon: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>, text: '20" Aero Lite wheels' },
                      ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 14, flexShrink: 0 }}>{item.icon}</div>
                          <span style={{ fontSize: 12, color: 'var(--muted)' }}>{item.text}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: 18, minWidth: 140 }}>
                      {[
                        { label: 'Vehicle price', value: 'SAR 466,785', bold: true },
                        { label: 'Down payment (20%)', value: 'SAR 93,357', bold: false },
                        { label: 'Amount financed', value: 'SAR 373,428', bold: false },
                        { label: 'Tenure', value: '36 months', bold: true },
                      ].map((item, i) => (
                        <div key={i} style={{ marginBottom: i < 3 ? 10 : 0 }}>
                          <p style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 2 }}>{item.label}</p>
                          <p style={{ fontSize: item.bold ? 15 : 13, fontWeight: item.bold ? 700 : 600, color: 'var(--text)' }}>{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT: Financing Offer */}
                <div style={{ borderRadius: 12, border: '1px solid var(--border)', background: 'var(--card)', padding: '20px 22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                      <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Financing Offer</span>
                    </div>
                    <span style={{ fontSize: 12, color: 'var(--muted)' }}>Provided by Al Rajhi Bank</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
                    {[
                      { label: 'Monthly payment', value: 'SAR 11,896' },
                      { label: 'APR / Profit Rate', value: '4.25%' },
                      { label: 'Total payable', value: 'SAR 428,256' },
                    ].map(item => (
                      <div key={item.label}>
                        <p style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>{item.label}</p>
                        <p style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)' }}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {[
                      { label: 'Processing fee', value: 'SAR 1,000' },
                      { label: 'Insurance (annual)', value: 'SAR 6,800' },
                    ].map(item => (
                      <div key={item.label}>
                        <p style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 4 }}>{item.label} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg></p>
                        <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom two-column */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>

                {/* LEFT: Order Progress */}
                <div style={{ borderRadius: 12, border: '1px solid var(--border)', background: 'var(--card)', padding: '20px 22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Order Progress</span>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: 10, top: 0, bottom: 0, width: 1, background: 'var(--border)' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                      {ORDER_PROGRESS.map((step, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, paddingBottom: i < ORDER_PROGRESS.length - 1 ? 14 : 0 }}>
                          <div style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
                            {step.status === 'done' && (
                              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              </div>
                            )}
                            {step.status === 'active' && (
                              <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid #d97706', background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#d97706' }} />
                              </div>
                            )}
                            {step.status === 'action' && (
                              <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid #d97706', background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#d97706' }} />
                              </div>
                            )}
                            {step.status === 'pending' && (
                              <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid var(--border)', background: 'var(--card)' }} />
                            )}
                          </div>
                          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span style={{ fontSize: 13, fontWeight: step.status === 'done' || step.status === 'active' || step.status === 'action' ? 600 : 400, color: step.status === 'pending' ? 'var(--muted)' : 'var(--text)' }}>
                              {step.label}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              {step.date !== '—' && <span style={{ fontSize: 11, color: 'var(--muted)' }}>{step.date}</span>}
                              {step.date === '—' && <span style={{ fontSize: 11, color: 'var(--muted)' }}>—</span>}
                              {step.status === 'done' && <span style={{ fontSize: 11, fontWeight: 500, padding: '2px 8px', borderRadius: 99, background: '#dcfce7', color: '#16a34a' }}>Completed</span>}
                              {step.status === 'active' && <span style={{ fontSize: 11, fontWeight: 500, padding: '2px 8px', borderRadius: 99, background: '#dbeafe', color: '#2563eb' }}>In Progress</span>}
                              {step.status === 'action' && <span style={{ fontSize: 11, fontWeight: 500, padding: '2px 8px', borderRadius: 99, background: '#fef3c7', color: '#d97706' }}>Action Required</span>}
                              {step.status === 'pending' && <span style={{ fontSize: 11, fontWeight: 500, padding: '2px 8px', borderRadius: 99, background: 'var(--bg)', color: 'var(--muted)' }}>Upcoming</span>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT: Required Action + Support */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {/* Required Action */}
                  <div style={{ borderRadius: 12, border: '1px solid #fed7aa', background: '#fff7ed', padding: '20px 22px', flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>Required Action</p>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 16 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#d97706" style={{ flexShrink: 0, marginTop: 1 }}><path d="M12 2L2 22h20L12 2z"/><line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2"/><circle cx="12" cy="17" r="1" fill="white"/></svg>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#d97706' }}>Additional Documents Required</p>
                        <p style={{ fontSize: 12, color: '#92400e', marginTop: 3 }}>To continue your financing application, please upload the following documents.</p>
                      </div>
                    </div>
                    {[
                      { label: 'Latest salary certificate', hint: 'PDF, JPG or PNG (Max 10 MB)' },
                      { label: 'Bank statement (last 3 months)', hint: 'PDF, JPG or PNG (Max 10 MB)' },
                    ].map((doc, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 10, border: '1px dashed #fed7aa', background: 'white', marginBottom: 10 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.5" style={{ flexShrink: 0 }}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: 13, fontWeight: 600, color: '#1a2636' }}>{doc.label}</p>
                          <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>{doc.hint}</p>
                        </div>
                        <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 8, border: '1px solid #d97706', background: 'white', fontSize: 12, fontWeight: 600, color: '#d97706', cursor: 'pointer' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>
                          Upload
                        </button>
                      </div>
                    ))}
                    <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                      <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '11px 0', borderRadius: 10, background: '#111111', color: 'white', fontSize: 13, fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>
                        Upload Documents
                      </button>
                      <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '11px 0', borderRadius: 10, border: '1px solid var(--border)', background: 'white', color: '#1a2636', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                        Contact Support
                      </button>
                    </div>
                  </div>

                  {/* Support & Contact */}
                  <div style={{ borderRadius: 12, border: '1px solid var(--border)', background: 'var(--card)', padding: '16px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.6 12.9a19.79 19.79 0 01-3.07-8.67A2 2 0 012.48 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Support & Contact</p>
                        <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>Need help with your financing application?<br />Our team is here to support you throughout the process.</p>
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                      {[
                        { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.6 12.9a19.79 19.79 0 01-3.07-8.67A2 2 0 012.48 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>, label: 'Call Us', value: '800 123 4567', sub: 'Sun - Thu, 9AM - 6PM' },
                        { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>, label: 'Live Chat', value: 'Chat with our team', sub: 'Available now' },
                        { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: 'Email Us', value: 'support@tamawal.com', sub: 'Response within 24 hours' },
                      ].map((c, i) => (
                        <div key={i} style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg)' }}>
                          <div style={{ marginBottom: 6 }}>{c.icon}</div>
                          <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text)', marginBottom: 2 }}>{c.label}</p>
                          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--blue)' }}>{c.value}</p>
                          <p style={{ fontSize: 10, color: 'var(--muted)', marginTop: 1 }}>{c.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Updates */}
              <div style={{ borderRadius: 12, border: '1px solid var(--border)', background: 'var(--card)', padding: '20px 22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Recent Updates</span>
                  </div>
                  <a href="#" style={{ fontSize: 12, fontWeight: 500, color: 'var(--blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>View All →</a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {RECENT_UPDATES.map((u, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: u.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: 'var(--text)', flex: 1 }}>{u.text}</span>
                      <span style={{ fontSize: 12, color: 'var(--muted)', whiteSpace: 'nowrap' }}>{u.date} &nbsp; {u.time}</span>
                    </div>
                  ))}
                </div>
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
