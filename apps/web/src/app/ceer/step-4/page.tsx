'use client';

import { useState } from 'react';
import CeerNavbar from '../components/CeerNavbar';
import CeerBreadcrumb from '../components/CeerBreadcrumb';
import VehicleSidebar from '../components/VehicleSidebar';
import CeerInnerStepper from '../components/CeerInnerStepper';

const loans = [
  { bank: 'Alinma Bank',   logo: '/logos/alinma.png',  type: 'Personal Loan',        rate: 2.1, amount: 120000, months: 60,  rating: 4.5 },
  { bank: 'Al Rajhi Bank', logo: '/logos/rasheed.png', type: 'Car Financing',         rate: 2.5, amount: 85000,  months: 48,  rating: 4.2 },
  { bank: 'ANB',           logo: '/logos/anb.png',     type: 'Real Estate Financing', rate: 1.8, amount: 500000, months: 120, rating: 4.7 },
  { bank: 'Nayifat',       logo: '/logos/nayifat.png', type: 'Personal Loan',         rate: 3.2, amount: 50000,  months: 36,  rating: 3.9 },
  { bank: 'Taajeer',       logo: '/logos/taajeer.png', type: 'Car Financing',         rate: 2.8, amount: 95000,  months: 60,  rating: 4.0 },
  { bank: 'Badaya',        logo: '/logos/badaya.png',  type: 'Business Loan',         rate: 3.5, amount: 300000, months: 84,  rating: 4.1 },
  { bank: 'Alyusr',        logo: '/logos/alyusr.png',  type: 'Home Renovation',       rate: 2.2, amount: 150000, months: 72,  rating: 4.3 },
  { bank: 'Kuwara',        logo: '/logos/kuwara.png',  type: 'Personal Loan',         rate: 2.9, amount: 75000,  months: 48,  rating: 4.0 },
];

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-[6px]">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = rating >= star;
          const half = !filled && rating >= star - 0.5;
          return (
            <svg key={star} width={size} height={size} viewBox="0 0 16 16" fill="none">
              {half ? (
                <>
                  <defs>
                    <linearGradient id={`h-${star}`} x1="0" x2="1" y1="0" y2="0">
                      <stop offset="50%" stopColor="#FDD849" />
                      <stop offset="50%" stopColor="#ffffff20" />
                    </linearGradient>
                  </defs>
                  <path d="M8 1.33L9.83 5.05L14 5.68L11 8.6L11.66 12.76L8 10.83L4.34 12.76L5 8.6L2 5.68L6.17 5.05L8 1.33Z" fill={`url(#h-${star})`} />
                </>
              ) : (
                <path d="M8 1.33L9.83 5.05L14 5.68L11 8.6L11.66 12.76L8 10.83L4.34 12.76L5 8.6L2 5.68L6.17 5.05L8 1.33Z" fill={filled ? '#FDD849' : '#ffffff15'} />
              )}
            </svg>
          );
        })}
      </div>
      <span className="text-sm font-bold text-white/60">{rating.toFixed(1)}</span>
    </div>
  );
}

function TamawalPopup({ loan, onClose }: { loan: typeof loans[number]; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const deepLink = 'twl.app/web?ref=6114378a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t';

  function handleCopy() {
    navigator.clipboard.writeText(`https://${deepLink}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-[8px] flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#111] border border-white/[0.08] rounded-2xl w-full max-w-[900px] flex items-stretch overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left */}
        <div className="flex-1 flex flex-col gap-6 px-[56px] py-[72px]">
          <img alt="" className="w-[140px] h-[140px]" src="/payment_success.svg" />
          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[32px] font-bold text-white leading-[1.25]">Scan QR Code to continue</h2>
            <p className="text-[15px] text-white/50 leading-[1.6] max-w-[400px]">
              To continue and access the full range of Tamawal services, please scan the QR code to proceed in the Tamawal mobile application.
            </p>
            <p className="text-xs text-white/30">{loan.bank} · {loan.type}</p>
          </div>
          <button
            onClick={onClose}
            className="mt-auto w-fit border border-white/10 text-white/40 text-sm font-medium px-5 py-2.5 rounded-full hover:border-white/20 transition-colors"
          >
            Close
          </button>
        </div>

        {/* Right */}
        <div className="flex-shrink-0 flex flex-col gap-[10px] w-[400px] py-6 px-6 border-l border-white/[0.06]">
          <img alt="QR Code" className="w-full" src="/qr-code.svg" />

          <div className="border border-white/[0.08] rounded-[8px] px-[16px] py-[13px] flex items-center gap-[8px]">
            <button onClick={handleCopy} className="shrink-0 cursor-pointer" title="Copy link">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6.66667 13.3333C5.74619 13.3333 5 12.5871 5 11.6667V5C5 4.07952 5.74619 3.33333 6.66667 3.33333H13.3333C14.2538 3.33333 15 4.07952 15 5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="6.66667" y="6.66667" width="10" height="10" rx="1.66667" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
              </svg>
            </button>
            <div className="relative flex-1 min-w-0 overflow-hidden">
              <span className="text-[13px] text-white/30 whitespace-nowrap">{deepLink}</span>
              <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#111] to-transparent pointer-events-none" />
            </div>
            <button onClick={handleCopy} className="shrink-0 text-xs font-semibold text-[#E87722] hover:opacity-80 transition-opacity">
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="flex justify-center pt-[1px]">
            <a
              href="https://tamawal.sa"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#E87722] rounded-[56px] px-[24px] py-[14px] flex items-center gap-[8px]"
            >
              <span className="text-[15px] font-semibold text-[#E87722]">Continue in mobile app</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16602 10.0001H15.8327M9.99935 15.8334L15.8327 10.0001L9.99935 4.16675" stroke="#E87722" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoanCard({ loan, onTamawal }: { loan: typeof loans[number]; onTamawal: () => void }) {
  return (
    <div className="border border-white/[0.08] rounded-[16px] bg-[#0f0f0f] overflow-hidden mb-3">
      <div className="flex overflow-hidden">
        {/* Left col */}
        <div className="border-r border-white/[0.06] flex flex-col justify-between px-5 py-5 w-[220px] flex-shrink-0">
          <p className="text-[18px] font-bold text-white leading-[1.25]">{loan.type}</p>
          <div className="h-[44px] w-[160px] flex items-center bg-white/5 rounded-lg px-2">
            <img src={loan.logo} alt={loan.bank} className="max-h-[32px] max-w-[140px] object-contain" />
          </div>
          <StarRating rating={loan.rating} size={14} />
        </div>

        {/* Middle col */}
        <div className="border-r border-white/[0.06] flex flex-col justify-between px-6 py-5 w-[280px] flex-shrink-0">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Great for</p>
            <div className="flex gap-[8px] items-start">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5"><circle cx="8" cy="8" r="8" fill="#22C55E20"/><path d="M4.87 8.48L6.72 10.33L11.66 5.39" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p className="text-[12px] text-white/40 leading-[1.5]">Low profit fees from 2.25% for KSA Nationals</p>
            </div>
            <div className="flex gap-[8px] items-start">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5"><circle cx="8" cy="8" r="8" fill="#22C55E20"/><path d="M4.87 8.48L6.72 10.33L11.66 5.39" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p className="text-[12px] text-white/40 leading-[1.5]">Deferred first installment up to 120 days</p>
            </div>
            <p className="text-[11px] font-bold text-white/50 uppercase tracking-wider mt-1">Be aware</p>
            <div className="flex gap-[8px] items-start">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5"><circle cx="8" cy="8" r="8" fill="#F0443820"/><path d="M8 5v3" stroke="#F04438" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="11" r="0.75" fill="#F04438"/></svg>
              <p className="text-[12px] text-white/40 leading-[1.5]">KSA Nationals only</p>
            </div>
          </div>
          <button className="border border-[#E87722]/30 rounded-[20px] h-[38px] px-4 flex items-center justify-center gap-2 w-full mt-3">
            <span className="text-[12px] font-bold text-[#E87722]">Details</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="#E87722" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        {/* Right col */}
        <div className="flex flex-col justify-between px-6 py-5 flex-1">
          <div className="flex gap-[5px] items-start w-full">
            <div className="flex flex-col flex-1">
              <div className="flex gap-[4px] items-baseline text-white/40">
                <span className="text-[13px] font-semibold">Loan amount</span>
                <span className="text-[10px]">up to</span>
              </div>
              <div className="flex gap-[2px] items-baseline text-white">
                <span className="text-[22px] font-bold">SAR</span>
                <span className="text-[22px] font-bold">{loan.amount.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex flex-col flex-1 items-end">
              <div className="flex gap-[4px] items-baseline text-white/40">
                <span className="text-[13px] font-semibold">Loan period</span>
                <span className="text-[10px]">for</span>
              </div>
              <span className="text-[22px] font-bold text-white">{loan.months} month</span>
            </div>
          </div>

          <div className="flex gap-[5px] items-center w-full">
            <div className="flex flex-col flex-1">
              <div className="flex gap-[4px] items-baseline text-white/40">
                <span className="text-[13px] font-semibold">APR</span>
                <span className="text-[10px]">from</span>
              </div>
              <span className="text-[22px] font-bold text-white">{loan.rate}%</span>
            </div>
            <div className="flex flex-col gap-1 items-end flex-1">
              <p className="text-[11px] text-white/30 text-right leading-normal">Finalization &amp; Disbursement<br />within 1 to 2 working days</p>
            </div>
          </div>

          <div className="flex items-center justify-between w-full gap-3">
            <button className="flex items-center gap-1 text-white/20 shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="text-[13px]">Favorite</span>
            </button>
            <button
              onClick={onTamawal}
              className="bg-[#E87722] rounded-[20px] px-5 py-2.5 flex items-center justify-center flex-1"
            >
              <span className="text-white text-[13px] font-bold">Tamawal</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Step4Page() {
  const [tamawalLoan, setTamawalLoan] = useState<typeof loans[number] | null>(null);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col">
      <CeerNavbar variant={2} />
      <CeerBreadcrumb activeStep={5} />

      {tamawalLoan && (
        <TamawalPopup loan={tamawalLoan} onClose={() => setTamawalLoan(null)} />
      )}

      <div className="flex flex-1">
        <VehicleSidebar showVerifiedBadge />

        <div className="flex-1 px-10 py-8 overflow-y-auto">
          <CeerInnerStepper activeStep={4} />

          {/* Header */}
          <div className="flex items-start justify-between gap-6 mb-6">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-white/30 uppercase tracking-widest">Step 4 — Compare Offers</p>
              <h1 className="text-2xl font-bold text-white font-ceer">Search results</h1>
              <p className="text-sm text-white/40 max-w-[560px] leading-relaxed">
                This will result in a less accurate product, but not necessarily eligible for you. You need to be logged in for get much more accurate results!
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 border border-[#E87722]/30 rounded-[40px] px-5 py-2.5 cursor-pointer hover:border-[#E87722]/50 transition-colors">
              <img src="/icon-sort.png" alt="" className="size-4 invert opacity-60" />
              <span className="text-sm font-bold text-[#E87722]">Sort</span>
            </div>
          </div>

          <p className="text-xs text-white/30 mb-4">{loans.length} offers for you</p>

          {/* Loan cards */}
          <div>
            {loans.map((loan, i) => (
              <LoanCard key={i} loan={loan} onTamawal={() => setTamawalLoan(loan)} />
            ))}
          </div>

          {/* More products */}
          <div className="flex justify-center py-8">
            <button className="bg-[#E87722] text-white text-sm font-semibold px-7 py-3.5 rounded-[40px] flex items-center gap-2">
              More products
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4.167 10h11.666M10 15.833 15.833 10 10 4.167" stroke="white" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
