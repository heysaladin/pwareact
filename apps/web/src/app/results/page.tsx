'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SlidingMenu from '../../components/SlidingMenu';

// ── Asset constants ───────────────────────────────────────────────────────────
const imgLogo        = "/logo-tamawal-web.svg";
const imgLogoBlue    = "/logo-tamawal-web-blue.svg";
const imgNavArrow    = "http://localhost:3845/assets/4c4ae62485902829fc9e816c9e3b6272289709e3.svg";
const imgMenuIcon    = "http://localhost:3845/assets/0d52496e764f968ea0912e51471c5f8c5908af05.svg";
const imgBackArrow   = "http://localhost:3845/assets/67f5db18250fc0c82561f27c9243549fffa2aa9f.svg";
const imgSortIcon    = "http://localhost:3845/assets/ae028277d0aeaf0e5f751509272522cee029790a.svg";
const imgCheckIcon   = "http://localhost:3845/assets/42d1556b4be07854c0c4eba577e6f40b2a823338.svg";
const imgPhoneImg    = "/mockup.png";
const imgAppStore    = "http://localhost:3845/assets/d546918b9349f2d2f6f0c33b97fe51ad05199e4c.svg";
const imgGooglePlay  = "http://localhost:3845/assets/74a1f08e8001561fb28ceb1da93da2a164455551.svg";

// ── Footer ───────────────────────────────────────────────────────────────────
const imgFooterBadge  = "/badge-small.svg";
const imgArrowNext    = "/arrow-next-dark.svg";
const imgEmailIcon    = "/icon-email.svg";
const imgPhoneIcon    = "/icon-phone.svg";
const imgLocationIcon = "/pinlocation.svg";
const imgLinkedIn     = "/icon-linkedin.svg";
const imgTwitterX     = "/icon-twitter.svg";

// ── Mock loan data ────────────────────────────────────────────────────────────
const loans = [
  { bank: 'Alinma Bank',   logo: '/logos/alinma.png',  type: 'Personal Loan',          rate: 2.1, amount: 120000, months: 60,  rating: 4.5 },
  { bank: 'Al Rajhi Bank', logo: '/logos/rasheed.png', type: 'Car Financing',           rate: 2.5, amount: 85000,  months: 48,  rating: 4.2 },
  { bank: 'ANB',           logo: '/logos/anb.png',     type: 'Real Estate Financing',   rate: 1.8, amount: 500000, months: 120, rating: 4.7 },
  { bank: 'Nayifat',       logo: '/logos/nayifat.png', type: 'Personal Loan',           rate: 3.2, amount: 50000,  months: 36,  rating: 3.9 },
  { bank: 'Taajeer',       logo: '/logos/taajeer.png', type: 'Car Financing',           rate: 2.8, amount: 95000,  months: 60,  rating: 4.0 },
  { bank: 'Badaya',        logo: '/logos/badaya.png',  type: 'Business Loan',           rate: 3.5, amount: 300000, months: 84,  rating: 4.1 },
  { bank: 'Alyusr',        logo: '/logos/alyusr.png',  type: 'Home Renovation',         rate: 2.2, amount: 150000, months: 72,  rating: 4.3 },
  { bank: 'Kuwara',        logo: '/logos/kuwara.png',  type: 'Personal Loan',           rate: 2.9, amount: 75000,  months: 48,  rating: 4.0 },
];

// ── Star rating helper ────────────────────────────────────────────────────────
function StarRating({ rating, size = 16, numSize = '20.747px' }: { rating: number; size?: number; numSize?: string }) {
  return (
    <div className="flex items-center gap-[7.78px]">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = rating >= star;
          const half   = !filled && rating >= star - 0.5;
          return (
            <svg key={star} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              {half ? (
                <>
                  <defs>
                    <linearGradient id={`half-${star}`} x1="0" x2="1" y1="0" y2="0">
                      <stop offset="50%" stopColor="#FDD849" />
                      <stop offset="50%" stopColor="#E4E7EC" />
                    </linearGradient>
                  </defs>
                  <path d="M8 1.33L9.83 5.05L14 5.68L11 8.6L11.66 12.76L8 10.83L4.34 12.76L5 8.6L2 5.68L6.17 5.05L8 1.33Z"
                    fill={`url(#half-${star})`} />
                </>
              ) : (
                <path d="M8 1.33L9.83 5.05L14 5.68L11 8.6L11.66 12.76L8 10.83L4.34 12.76L5 8.6L2 5.68L6.17 5.05L8 1.33Z"
                  fill={filled ? "#FDD849" : "#E4E7EC"} />
              )}
            </svg>
          );
        })}
      </div>
      <span className="font-bold text-[#344054]" style={{ fontSize: numSize }}>{rating.toFixed(1)}</span>
    </div>
  );
}

// ── Loan Card ─────────────────────────────────────────────────────────────────
function LoanCard({ loan }: { loan: typeof loans[number] }) {
  return (
    <div className="border border-[#dadee3] rounded-[16px] bg-white overflow-hidden mb-4">

      {/* ── Mobile layout ── */}
      <div className="lg:hidden p-5 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <p className="text-[18px] font-bold text-[#121a26] leading-[1.25]">{loan.type}</p>
          <StarRating rating={loan.rating} size={14} numSize="14px" />
        </div>
        <div className="h-[40px]">
          <img src={loan.logo} alt={loan.bank} className="max-h-[40px] object-contain" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <p className="text-[11px] text-[#667085]">Loan amount</p>
            <p className="text-[15px] font-bold text-[#101828]">SAR {loan.amount >= 1000 ? `${(loan.amount/1000).toFixed(0)}k` : loan.amount}</p>
          </div>
          <div>
            <p className="text-[11px] text-[#667085]">APR</p>
            <p className="text-[15px] font-bold text-[#101828]">{loan.rate}%</p>
          </div>
          <div>
            <p className="text-[11px] text-[#667085]">Period</p>
            <p className="text-[15px] font-bold text-[#101828]">{loan.months} mo</p>
          </div>
        </div>
        <button onClick={() => window.location.href = '/payment'} className="bg-[#0063f5] rounded-[24px] py-3 flex items-center justify-center w-full">
          <span className="text-white text-[14px] font-bold">Tamawal</span>
        </button>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden lg:flex overflow-hidden">
        {/* Left col */}
        <div className="border-r border-[#dadee3] flex flex-col justify-between px-[24px] py-[28px] w-[284px] flex-shrink-0">
          <p className="text-[24px] font-bold text-[#121a26] leading-[1.25]">{loan.type}</p>
          <div className="h-[60px] w-[203px] flex items-center">
            <img src={loan.logo} alt={loan.bank} className="max-h-[60px] max-w-[203px] object-contain" />
          </div>
          <StarRating rating={loan.rating} size={19} numSize="20.747px" />
        </div>

        {/* Middle col */}
        <div className="border-r border-[#dadee3] flex flex-col justify-between px-[32px] py-[28px] w-[375px] flex-shrink-0">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[13px] font-bold text-[#1d2939]">Great for</p>
            <div className="flex flex-col gap-[8px]">
              <div className="flex gap-[12px] items-start">
                <div className="mt-[2.5px] flex-shrink-0 w-4 h-4">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#D1FADF"/><path d="M4.87 8.48L6.72 10.33L11.66 5.39" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className="text-[13px] text-[#475467] leading-[1.6] flex-1">Low profit fees starting from 2.25% for KSA Nationals</p>
              </div>
              <div className="flex gap-[12px] items-start">
                <div className="mt-[2.5px] flex-shrink-0 w-4 h-4">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#D1FADF"/><path d="M4.87 8.48L6.72 10.33L11.66 5.39" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className="text-[13px] text-[#475467] leading-[1.6] flex-1">Deferred payment of the first installment for up to 120 days</p>
              </div>
            </div>
            <p className="text-[13px] font-bold text-[#1d2939]">Be aware</p>
            <div className="flex gap-[12px] items-start">
              <div className="mt-[2.5px] flex-shrink-0 w-4 h-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#FEE4E2"/><path d="M8 5v3" stroke="#F04438" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="11" r="0.75" fill="#F04438"/></svg>
              </div>
              <p className="text-[13px] text-[#475467] leading-[1.6] flex-1">Applicable only for KSA Nationals</p>
            </div>
          </div>
          <button className="border border-[rgba(0,99,245,0.32)] rounded-[24px] h-[44px] px-[24px] py-[10px] flex items-center justify-center gap-[8px] w-full bg-white mt-[24px]">
            <span className="text-[13px] font-bold text-[#0063f5]">Details</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M13 6L19 12L13 18" stroke="#0063F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        {/* Right col */}
        <div className="flex flex-col justify-between px-[32px] py-[28px] flex-1">
          <div className="flex gap-[5px] items-start w-full">
            <div className="flex flex-col flex-1">
              <div className="flex gap-[4px] items-baseline text-[#667085]">
                <span className="text-[16px] font-semibold">Loan amount</span>
                <span className="text-[12px]">up to</span>
              </div>
              <div className="flex gap-[2px] items-baseline text-[#101828] text-[32px]">
                <span className="font-bold">SAR</span>
                <span className="font-bold">{loan.amount.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex flex-col flex-1 items-end">
              <div className="flex gap-[4px] items-baseline text-[#667085]">
                <span className="text-[16px] font-semibold">Loan period</span>
                <span className="text-[12px]">for</span>
              </div>
              <span className="text-[32px] font-bold text-[#101828]">{loan.months} month</span>
            </div>
          </div>
          <div className="flex gap-[5px] items-center w-full">
            <div className="flex flex-col flex-1">
              <span className="text-[16px] font-semibold text-[#667085]">APR</span>
              <span className="text-[32px] font-bold text-[#101828]">{loan.rate}%</span>
              <span className="text-[12px] text-[#667085]">Up to {(loan.rate + 2.9).toFixed(2)}% *</span>
            </div>
            <div className="flex flex-col items-end flex-1">
              <p className="text-[12px] text-[#667085] text-right w-[156px] leading-[normal]">Finalization &amp; Disbursement within 1 to 2 working days</p>
            </div>
          </div>
          <div className="flex gap-[48px] items-center w-full">
            <button className="flex items-center gap-[4px] text-[#98a2b3]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#98A2B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="text-[16px]">Add to favorite</span>
            </button>
            <button onClick={() => window.location.href = '/payment'} className="bg-[#0063f5] rounded-[24px] px-[12px] py-[10px] flex items-center justify-center flex-1">
              <span className="text-white text-[13px] font-bold text-center w-[357px]">Tamawal</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

// ── Sort dropdown ─────────────────────────────────────────────────────────────

const sortOptions = [
  'Most Relevant',
  'Biggest loan amount',
  'Longest period',
  'Smallest APR %',
  'Fastest payout time',
  'Biggest rating',
];

function SortDropdown({ selected, onSelect }: { selected: string; onSelect: (v: string) => void }) {
  return (
    <div className="absolute right-0 top-[calc(100%+8px)] z-50 bg-white border border-[#e9eaeb] rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.05),0px_4px_6px_-2px_rgba(10,13,18,0.03),0px_2px_2px_-1px_rgba(10,13,18,0.02)] w-[280px] py-1 overflow-hidden">
      {sortOptions.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`w-full flex items-center justify-between px-[14px] py-[10px] text-[16px] text-[#181d27] hover:bg-[#f9fafb] ${selected === option ? 'bg-[#fafafa]' : ''}`}
        >
          <span>{option}</span>
          {selected === option && (
            <img src={imgCheckIcon} alt="" className="size-5 text-[#0063f5]" />
          )}
        </button>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function ResultsPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Most Relevant');

  return (
    <div className="bg-white">
      {menuOpen && <SlidingMenu onClose={() => setMenuOpen(false)} />}

      {/* ── Navbar ───────────────────────────────────────────────────────── */}
      <div className="sticky top-0 z-50 bg-white border-b border-[#EAECF0]">
        {/* Desktop */}
        <div className="hidden lg:block max-w-[1440px] mx-auto px-[75px]">
          <div className="flex items-center justify-between h-[45px] py-[25px]">
            <div className="flex items-center gap-[56px]">
              <img src={imgLogoBlue} alt="Tamawal" className="h-[33px] w-auto" />
              <nav className="flex items-center gap-[40px]">
                <a href="/app" className="text-[#021945] text-[16px] font-bold">App</a>
                <a href="#" className="text-[#344054] text-[16px] font-medium">Tamawal</a>
                <a href="#" className="text-[#344054] text-[16px] font-medium">Services</a>
                <a href="#" className="text-[#344054] text-[16px] font-medium">About us</a>
                <a href="#" className="text-[#344054] text-[16px] font-medium">Contact us</a>
              </nav>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-[104px] h-[45px]" />
              <div className="border border-[#EAECF0] rounded-full w-[44px] h-[44px] flex items-center justify-center">
                <span className="text-[#344054] text-[13px] font-medium">عربي</span>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="flex lg:hidden items-center justify-between px-6 py-5">
          <button onClick={() => setMenuOpen(true)} className="shrink-0 size-6 cursor-pointer">
            <img src={imgMenuIcon} alt="Menu" className="size-6" />
          </button>
          <img src={imgLogoBlue} alt="Tamawal" className="h-8 w-auto" />
          <div className="border border-[#EAECF0] rounded-full w-11 h-11 flex items-center justify-center">
            <span className="text-[#344054] text-[13px] font-medium">عربي</span>
          </div>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[75px]">

          {/* Header section */}
          <div className="pt-10 pb-6 flex flex-col gap-6">
            {/* Back button */}
            <button onClick={() => router.back()} className="flex items-center gap-2 text-[#717680] w-fit">
              <img src={imgBackArrow} alt="" className="size-5" />
              <span className="text-[16px] font-semibold">Back</span>
            </button>

            {/* Search results + Sort */}
            <div className="flex items-center gap-[64px]">
              <div className="flex flex-col gap-[2px] flex-1">
                <p className="text-[32px] font-bold text-[#101828] leading-[1.35] tracking-[0.15px]">Search results</p>
                <p className="text-[16px] text-[#525252] leading-[1.72]">
                  This will result in a less accurate product, but not necessarily eligible for you. You need to be logged in for get much more accurate results!
                </p>
              </div>
              {/* Sort button + dropdown */}
              <div className="relative flex-shrink-0">
                {sortOpen && (
                  <div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />
                )}
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="relative z-50 border border-[#0063f5] rounded-[56px] px-[24px] py-[16px] flex items-center gap-[10px] bg-white"
                >
                  <img src={imgSortIcon} alt="" className="size-5" />
                  <span className="text-[16px] font-bold text-[#0063f5]">Sort</span>
                </button>
                {sortOpen && (
                  <SortDropdown
                    selected={sortBy}
                    onSelect={(v) => { setSortBy(v); setSortOpen(false); }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Loan cards */}
          <div className="pb-6">
            {loans.map((loan, i) => (
              <LoanCard key={i} loan={loan} />
            ))}
          </div>

        </div>

        {/* CTA Section — desktop only */}
        <div className="hidden lg:block max-w-[1440px] mx-auto relative" style={{ paddingTop: '150px', paddingBottom: '128px' }}>
          <img src={imgPhoneImg} alt="Tamawal App" className="absolute z-10 object-contain pointer-events-none" style={{ height: '620px', width: 'auto', top: '53px', left: '129px' }} />
          <div className="mx-[75px] bg-[#000921] rounded-[32px] overflow-hidden" style={{ height: '465px' }}>
            <div className="h-full flex items-center" style={{ paddingLeft: '757px', paddingRight: '67px' }}>
              <div className="flex flex-col justify-between" style={{ width: '466px', height: '265px' }}>
                <div className="flex flex-col gap-[16px]">
                  <h2 className="text-[32px] font-bold text-white leading-[1.35]">Tamawal App Download</h2>
                  <p className="text-[16px] text-[#98A2B3] leading-[1.72]">Saudi's best comparisons for on the go — now even easier to compare, switch and save. So you can load the Tamawal app directly onto your mobile phone.</p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <span className="text-[16px] font-bold text-white">4.75</span>
                  <StarRating rating={4.75} size={21} numSize="0px" />
                </div>
                <div className="flex gap-[8px]">
                  <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer" className="rounded-[6px] w-[128px] h-[40px] overflow-hidden">
                    <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp&hl=id" target="_blank" rel="noopener noreferrer" className="rounded-[6px] w-[128px] h-[40px] overflow-hidden">
                    <img src={imgGooglePlay} alt="Google Play" className="w-full h-full object-contain" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#0063F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[75px] pt-12 lg:pt-[90px] flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-10">

            {/* Logo + SAMA */}
            <div className="flex flex-col gap-6 lg:justify-between lg:self-stretch lg:w-[280px]">
              <img src={imgLogo} alt="Tamawal" className="h-[33px] w-auto" />
              <div className="flex flex-col gap-4">
                <img src={imgFooterBadge} alt="SAMA" className="w-[81px] h-[81px]" />
                <p className="text-white/80 text-[18px] font-semibold leading-[1.72] max-w-[280px]">
                  Tamawal is under the supervision and authority of Saudi Central Bank (SAMA)
                </p>
              </div>
            </div>

            {/* Link columns */}
            <div className="flex flex-col gap-8 flex-1 lg:ml-[60px] w-full">
              <div className="grid grid-cols-2 lg:flex lg:gap-[30px] gap-8">
                <div className="lg:w-[190px] flex flex-col gap-3">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">About us</p>
                  <div className="flex flex-col gap-2 text-white/64 text-[16px]"><span>Who we are</span><span>Our products</span><span>Our values</span></div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-3">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Legal</p>
                  <div className="flex flex-col gap-2 text-white/64 text-[16px]"><span>Terms and Conditions</span><span>Data Protection and Privacy</span><span>Customer Protection Principles</span></div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-3">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Take actions</p>
                  <div className="flex flex-col gap-2 text-white/64 text-[16px]"><span>Be a partner</span><span>Be a customer</span></div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-3">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Customer Care</p>
                  <p className="text-white/64 text-[14px] leading-[1.45]">You can give suggestions or a complaint for better Tamawal!</p>
                  <div className="flex flex-col">
                    <button className="flex items-center gap-1 py-3 text-white/86 text-[16px]">Send a message <img src={imgArrowNext} alt="" className="w-6 h-6" /></button>
                    <button className="flex items-center gap-1 py-3 text-white/86 text-[16px]">FAQs <img src={imgArrowNext} alt="" className="w-6 h-6" /></button>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10" />

              <div className="grid grid-cols-2 lg:flex lg:gap-[30px] gap-8">
                <div className="lg:w-[190px] flex flex-col gap-3">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Contact us</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2"><img src={imgEmailIcon} alt="" className="w-4 h-4 shrink-0" /><span className="text-white/64 text-[16px]">info@tamawal.sa</span></div>
                    <div className="flex items-center gap-2"><img src={imgPhoneIcon} alt="" className="w-4 h-4 shrink-0" /><span className="text-white/64 text-[16px]">011 512 3870</span></div>
                    <div className="flex items-center gap-2"><img src={imgPhoneIcon} alt="" className="w-4 h-4 shrink-0" /><span className="text-white/64 text-[16px]">800 100 0276</span></div>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-3">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Address</p>
                  <div className="flex gap-2 items-start">
                    <img src={imgLocationIcon} alt="" className="w-[13px] mt-1 shrink-0" />
                    <span className="text-white/64 text-[14px] leading-[1.45]">Al Olaya (403) street, Riyadh, Saudi Arabia</span>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-4">
                  <div><p className="text-white text-[16px] font-semibold">Working hours</p><p className="text-white/64 text-[14px]">09:00 – 17:00</p></div>
                  <div><p className="text-white text-[16px] font-semibold">Working days</p><p className="text-white/64 text-[14px]">Sunday - Thursday</p></div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-3">
                  <p className="text-white text-[16px] font-semibold leading-[1.72]">Social media</p>
                  <div className="flex gap-2 items-center">
                    <img src={imgLinkedIn} alt="LinkedIn" className="w-[45px] h-[45px]" />
                    <img src={imgTwitterX} alt="X" className="w-[45px] h-[45px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 pb-6">
            <div className="border-t border-white/10" />
            <p className="text-white/32 text-[16px] text-center leading-[1.7]">
              Tamawal Digital Brokerage Company operates under the supervision and regulation of the Saudi Arabian Monetary Authority (SAMA)
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
