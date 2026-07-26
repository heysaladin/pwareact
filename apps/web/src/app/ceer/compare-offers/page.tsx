'use client';

import { useState } from 'react';
import Link from 'next/link';
import CeerNavbar from '../components/CeerNavbar';
import CeerBreadcrumb from '../components/CeerBreadcrumb';
import VehicleSidebar from '../components/VehicleSidebar';
import CeerInnerStepper from '../components/CeerInnerStepper';

const offers = [
  {
    id: 'standard',
    bank: 'Al Rajhi Bank',
    tag: null,
    monthly: 'SAR 5,499',
    apr: '4.5%',
    tenure: '60 months',
    downPayment: 'SAR 39,900',
    downPct: '10%',
    totalCost: 'SAR 369,840',
    balloon: null,
  },
  {
    id: 'featured',
    bank: 'Riyad Bank',
    tag: 'Best Value',
    monthly: 'SAR 5,871',
    apr: '3.9%',
    tenure: '72 months',
    downPayment: 'SAR 79,800',
    downPct: '20%',
    totalCost: 'SAR 342,912',
    balloon: null,
  },
  {
    id: 'flex',
    bank: 'SNB',
    tag: 'Low Monthly',
    monthly: 'SAR 4,210',
    apr: '5.1%',
    tenure: '60 months',
    downPayment: 'SAR 99,750',
    downPct: '25%',
    totalCost: 'SAR 352,350',
    balloon: 'SAR 60,000',
  },
];

export default function CompareOffersPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col">
      <CeerNavbar variant={2} />
      <CeerBreadcrumb activeStep={5} />

      <div className="flex flex-1">
        <VehicleSidebar showVerifiedBadge />

        <div className="flex-1 px-10 py-8 overflow-y-auto">

          <CeerInnerStepper activeStep={4} />

          <div className="mt-6">
            <div className="border border-white/15 rounded-full px-3 py-1 text-[11px] text-white/40 inline-block">
              Step 4 of 4 – Compare financing offers
            </div>
            <h1 className="text-3xl font-bold text-white mt-4 font-ceer">Choose your financing offer</h1>
            <p className="text-sm text-white/50 mt-2">
              Based on your SIMAH credit profile, you are eligible for the following offers from our financing partners.
            </p>
          </div>

          {/* Eligibility badge */}
          <div className="mt-5 flex items-center gap-2 bg-[#0d1f0d] border border-[#22C55E]/20 rounded-xl px-4 py-3 w-fit">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9 12 11 14 15 10" stroke="#22C55E" strokeWidth="2"/>
            </svg>
            <span className="text-xs text-white/70">Credit profile verified — <span className="text-[#22C55E]">3 offers available</span> for Ahmed</span>
          </div>

          {/* Offers grid */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {offers.map((offer) => {
              const isSelected = selected === offer.id;
              const isFeatured = offer.id === 'featured';
              return (
                <div
                  key={offer.id}
                  onClick={() => setSelected(offer.id)}
                  className={`relative bg-[#111] rounded-2xl p-6 cursor-pointer transition-all select-none ${
                    isSelected
                      ? 'border-2 border-[#E87722]'
                      : isFeatured
                      ? 'border border-[#22C55E]/30'
                      : 'border border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  {offer.tag && (
                    <div className={`absolute -top-3 left-5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                      isFeatured ? 'bg-[#22C55E] text-black' : 'bg-[#E87722] text-white'
                    }`}>
                      {offer.tag}
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">Financing Partner</p>
                      <p className="text-sm font-bold text-white mt-0.5">{offer.bank}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected ? 'border-[#E87722] bg-[#E87722]' : 'border-white/20 bg-transparent'
                    }`}>
                      {isSelected && (
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-[10px] text-white/40">Monthly Payment</p>
                    <p className="text-2xl font-bold text-white mt-0.5">{offer.monthly}</p>
                    <p className="text-[10px] text-white/30 mt-0.5">/ month for {offer.tenure}</p>
                  </div>

                  <div className="border-t border-white/[0.06] pt-4 flex flex-col gap-2.5">
                    {[
                      { label: 'APR', value: offer.apr },
                      { label: 'Down Payment', value: `${offer.downPayment} (${offer.downPct})` },
                      { label: 'Total Cost', value: offer.totalCost },
                      ...(offer.balloon ? [{ label: 'Balloon Payment', value: offer.balloon }] : []),
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between">
                        <span className="text-[10px] text-white/40">{row.label}</span>
                        <span className="text-[10px] text-white/70">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-5 flex items-start gap-2 bg-[#111] border border-white/[0.06] rounded-xl p-4">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30 shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
            </svg>
            <p className="text-[10px] text-white/35 leading-relaxed">
              All offers are indicative and subject to final approval by the financing partner. Rates shown are annual percentage rates (APR) inclusive of all fees. Final terms may vary based on your credit profile at the time of contract signing.
            </p>
          </div>

          {/* Bottom bar */}
          <div className="mt-6 flex items-center justify-between">
            <Link href="/ceer/simah-consent" className="text-xs text-white/40 flex items-center gap-1 cursor-pointer hover:text-white/60 transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back
            </Link>
            <div className="flex flex-col items-end gap-1">
              {selected ? (
                <button className="bg-[#E87722] text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-opacity hover:opacity-90">
                  Proceed with {offers.find(o => o.id === selected)?.bank} →
                </button>
              ) : (
                <button
                  disabled
                  className="bg-[#1a1a1a] border border-white/10 text-white/30 font-bold px-8 py-3.5 rounded-xl text-sm cursor-not-allowed"
                >
                  Select an offer to continue →
                </button>
              )}
              {!selected && (
                <div className="flex items-center gap-1 text-[10px] text-white/30">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                  </svg>
                  Select one of the offers above to proceed
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/15">SCREEN — COMPARE OFFERS</span>
          </div>

        </div>
      </div>
    </div>
  );
}
