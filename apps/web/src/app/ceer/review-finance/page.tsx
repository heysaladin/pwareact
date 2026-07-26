'use client';

import Link from 'next/link';
import CeerNavbar from '../components/CeerNavbar';
import CeerBreadcrumb from '../components/CeerBreadcrumb';

export default function Screen1() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col">
      <CeerNavbar variant={1} />

      <CeerBreadcrumb activeStep={4} hideStep5 />

      <div className="flex flex-1">
        <div className="flex-1 relative bg-[#0C0C0C] overflow-hidden flex flex-col">
          <div className="px-8 pt-5">
            <span className="text-[10px] font-semibold tracking-widest text-[#E87722] uppercase">SCREEN 01 — Vehicle Details &amp; Configuration</span>
          </div>

          <div className="relative flex-1 flex flex-col items-center justify-center min-h-[400px]">
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-full flex items-center justify-center text-white text-xl z-10">
              ‹
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-full flex items-center justify-center text-white text-xl z-10">
              ›
            </button>

            <div className="w-full flex items-center justify-center px-8">
              <img
                src="/ceer-car-00.png"
                alt="CEER Exobot Sedan"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex items-center gap-3 text-[10px] text-white/30 mt-4">
              <span className="border border-white/15 rounded-full px-2 py-0.5">360°</span>
              <span>Drag to rotate  •  Scroll to zoom  •  Click to explore</span>
            </div>
          </div>

          <div className="flex gap-2 mt-5 px-8">
            {['ceer-car-01', 'ceer-car-02', 'ceer-car-03', 'ceer-car-04', 'ceer-car-05'].map((name, i) => (
              <div
                key={i}
                className={`w-[88px] h-[54px] rounded-lg bg-[#161616] overflow-hidden flex items-center justify-center ${i === 0 ? 'border-2 border-[#E87722]' : 'border border-white/10'}`}
              >
                <img src={`/${name}.png`} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <p className="text-[10px] text-white/25 mt-2 px-8">
            Images are for illustrative purposes only. Final specifications may vary.
          </p>

          <div className="mx-8 mb-5 mt-auto bg-[#141414] border border-white/[0.07] rounded-xl px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
                <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
              <div>
                <p className="text-xs font-medium text-white/80">Have a car to trade in?</p>
                <p className="text-[11px] text-white/35">Get an estimated value in minutes.</p>
              </div>
            </div>
            <span className="text-xs font-medium text-[#E87722] flex items-center gap-1 cursor-pointer">
              Start Trade-In →
            </span>
          </div>
        </div>

        <div className="w-full max-w-[640px] bg-[#080808] border-l border-white/[0.06] flex flex-col overflow-y-auto">
          <div className="flex border-b border-white/[0.06]">
            {['VARIANT', 'EXTERIOR', 'COLOR PACK', 'WHEELS', 'INTERIOR', 'OPTIONS'].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-3 text-[10px] font-semibold tracking-widest uppercase cursor-pointer whitespace-nowrap ${i === 0 ? 'text-white border-b-2 border-[#E87722] -mb-px' : 'text-white/35 hover:text-white/60 transition-colors'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="px-6 py-5 flex flex-col gap-0 flex-1">
            <h1 className="text-base font-bold text-white tracking-wide font-ceer">EXOBOT SEDAN FIRST EDITION</h1>
            <p className="text-xs text-white/40 mt-0.5">Model Year 2027</p>

            <div className="border-t border-white/[0.06] divide-y divide-white/[0.06] mt-3">
              <div className="flex items-start justify-between py-3">
                <div className="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <span className="text-[11px] text-white/50">Exterior Color</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-white text-right">
                  <div className="w-3 h-3 rounded-full bg-[#8A8A8A] border border-white/10" />
                  Harrat Grey Metallic
                </div>
              </div>

              <div className="flex items-start justify-between py-3">
                <div className="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <span className="text-[11px] text-white/50">Color Pack</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-white text-right">
                  <div className="w-3 h-3 rounded-full bg-[#111] border border-white/20" />
                  Black First Edition Pack
                </div>
              </div>

              <div className="flex items-start justify-between py-3">
                <div className="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                  <span className="text-[11px] text-white/50">Wheels &amp; Tires</span>
                </div>
                <span className="text-[11px] text-white text-right">Standard – 23" Front / 24" Rear</span>
              </div>

              <div className="flex items-start justify-between py-3">
                <div className="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  <span className="text-[11px] text-white/50">Interior Material</span>
                </div>
                <span className="text-[11px] text-white text-right">Red Nappa Leather</span>
              </div>

              <div className="flex items-start justify-between py-3">
                <div className="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30">
                    <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M5.34 5.34L3.93 6.75M19.07 19.07l-1.41-1.41M5.34 18.66l-1.41 1.41M21 12h-2M5 12H3M12 21v-2M12 5V3"/>
                  </svg>
                  <span className="text-[11px] text-white/50">Options (Included)</span>
                </div>
                <div className="flex flex-col items-end gap-0.5 text-[11px] text-white text-right">
                  <span>Switchable Tint – Lower Door</span>
                  <span>Drift Mode</span>
                  <span>First Edition Floor Mats</span>
                  <span>Companion Package</span>
                  <span className="text-[#E87722]">View all (6)</span>
                </div>
              </div>
            </div>

            <div className="mt-4 border-t border-white/[0.06] pt-4">
              <div className="flex items-center justify-between cursor-pointer mb-3">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-white/50">PRICING SUMMARY</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>

              <div className="flex justify-between py-1">
                <span className="text-xs text-white/40">Base Vehicle Price (incl. VAT)</span>
                <span className="text-xs text-white/60">SAR 399,000</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-xs text-white/40">Options (Included)</span>
                <span className="text-xs text-white/60">SAR 0</span>
              </div>

              <div className="flex justify-between items-baseline mt-2 pt-2 border-t border-white/[0.06]">
                <div>
                  <span className="text-xs text-white/50">Total</span>
                  <span className="text-[10px] text-white/30 ml-1">(Incl. VAT)</span>
                </div>
                <span className="text-xl font-bold text-white font-ceer">SAR 399,000</span>
              </div>

              <button className="flex items-center gap-1.5 text-[11px] text-white/40 hover:text-white/70 cursor-pointer mt-2 self-start">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                </svg>
                SAVE BUILD
              </button>
            </div>

            <div className="mt-4 bg-[#111] rounded-xl p-4">
              <p className="text-sm font-semibold text-white">
                Finance from <span className="text-[#E87722]">SAR 5,499</span> <span className="text-sm text-white">/month*</span>
              </p>
              <p className="text-[11px] text-white/40 mt-0.5">Flexible plans. Built around you.</p>

              <div className="grid grid-cols-4 gap-2 mt-3">
                <div className="bg-[#0C0C0C] rounded-lg p-2.5 flex flex-col items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <span className="text-[9px] text-white/40 text-center leading-tight">Finance Lease</span>
                </div>
                <div className="bg-[#0C0C0C] rounded-lg p-2.5 flex flex-col items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                  <span className="text-[9px] text-white/40 text-center leading-tight">Balloon Plan</span>
                </div>
                <div className="bg-[#0C0C0C] rounded-lg p-2.5 flex flex-col items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
                    <line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                  <span className="text-[9px] text-white/40 text-center leading-tight">50/50 Plan</span>
                </div>
                <div className="bg-[#0C0C0C] rounded-lg p-2.5 flex flex-col items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
                    <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                  </svg>
                  <span className="text-[9px] text-white/40 text-center leading-tight">Trade-in Support</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Link href="/ceer/step-1" className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#E87722] rounded-xl text-sm font-bold text-white tracking-wide hover:bg-[#E87722]/90 transition-colors">
                EXPLORE FINANCING →
              </Link>
              <button className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-transparent border border-white/15 rounded-xl text-sm font-bold text-white tracking-wide hover:border-white/30 transition-colors">
                CONTINUE WITH CASH →
              </button>
            </div>

            <div className="mt-3 text-center">
              <div className="flex items-center justify-center gap-3 text-[10px] text-white/25">
                <span>You can browse and build as a guest.</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#22C55E]">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Account creation optional and secure.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
