'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SlidingMenu from '../../components/SlidingMenu';
import Navbar from '../../components/Navbar';

// ── Asset constants ───────────────────────────────────────────────────────────
const imgLogo        = "/logo-tamawal-web.svg";
const imgLogoBlue    = "/logo-tamawal-web-blue.svg";
const imgNavArrow    = "http://localhost:3845/assets/4c4ae62485902829fc9e816c9e3b6272289709e3.svg";
const imgMenuIcon    = "/icon-menu.svg";
const imgBackArrow   = "/arrow-narrow-left.svg";
const imgSortIcon    = "/icon-sort.png";
const imgCheckIcon   = "/icon-check-blue.svg";
const imgPhoneImg    = "/mockup.png";
const imgAppStore    = "/appstore.svg";
const imgGooglePlay  = "/playstore.svg";

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

// ── Accordion section ─────────────────────────────────────────────────────────
function AccordionSection({ title, isOpen, onToggle, children }: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-[#eef1f6] rounded-[8px] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-[16px] py-[14px]"
      >
        <span className="text-[15.5px] font-semibold text-[#202a39]">{title}</span>
        <svg
          width="20" height="20" viewBox="0 0 20 20" fill="none"
          className={`transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {isOpen && (
        <div className="px-[16px] pb-[16px]">
          {children}
        </div>
      )}
    </div>
  );
}

// ── Product Details Modal ─────────────────────────────────────────────────────
function ProductDetailsModal({ loan, onClose }: { loan: typeof loans[number]; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'max' | 'calculate'>('max');
  const [selectedPeriod, setSelectedPeriod] = useState(18);
  const [preferredAmount, setPreferredAmount] = useState(75000);
  const PREF_MIN = 2000;
  const PREF_MAX = 150000;
  const [openSections, setOpenSections] = useState({ greatFor: true, beware: true, docs: true, conditions: true });

  const periods = [12, 18, 24, 30, 36, 42, 54, 60];
  const disabledPeriods = [42, 54, 60];
  const toggle = (key: keyof typeof openSections) => setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));

  const InfoIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6.5" stroke="#9aa4b2"/>
      <path d="M7 6.5v3.5M7 4.5v.5" stroke="#9aa4b2" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );

  const statsRows = [
    { label: 'Monthly installment', value: 'Up to SAR 50' },
    { label: 'APR', value: 'Start from 2%', info: true },
    { label: 'You saved', value: 'SAR 50', badge: '-86%' },
    { label: 'Management fees', value: 'Start from SAR 50', info: true },
    { label: 'Brokerage fees', value: 'Start from SAR 50', info: true },
  ];

  const statsTableJSX = (
    <div className="rounded-[8px] overflow-hidden border border-[#eef1f6]">
      {statsRows.map(({ label, value, badge, info }, i) => (
        <div
          key={label}
          className={`flex items-center justify-between px-[12px] h-[36px] ${i % 2 === 1 ? 'bg-[#f8fafc]' : 'bg-white'}`}
        >
          <div className="flex items-center gap-[4px]">
            <span className="text-[13.5px] text-[#667085]">{label}</span>
            {info && <InfoIcon />}
          </div>
          <div className="flex items-center gap-[6px]">
            <span className="text-[13.5px] font-bold text-[#0041a3]">{value}</span>
            {badge && (
              <span className="bg-[#079455] text-white text-[11px] font-semibold rounded-[4px] px-[5px] py-[1px]">
                {badge}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const payoutCardJSX = (
    <div className="bg-white border border-[#eef1f6] rounded-[8px] p-[16px] flex items-center gap-[20px]">
      <img src="/icon-payout-time.svg" alt="" className="w-[56px] h-[56px] shrink-0" />
      <p className="text-[15.5px] font-semibold text-[#202a39]">Finalization &amp; Disbursement immediately</p>
    </div>
  );

  const descriptionJSX = (
    <p className="text-[15.5px] text-[#4b5565] leading-[1.6]">
      Profit rates starting from 2.25%, Payment holiday for first installment (up to 120 days), High financing amounts of up to SAR 4 Million for KSA Nationals, Quick and easy approval process
    </p>
  );

  const carouselJSX = (
    <div className="rounded-[8px] overflow-hidden" style={{ aspectRatio: '16/9' }}>
      <iframe
        src="https://www.youtube.com/embed/84pYi-vjXhw"
        title="Tamawal"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );

  const accordionsJSX = (
    <div className="flex flex-col gap-[8px] mt-[24px]">
      <AccordionSection title="Great for" isOpen={openSections.greatFor} onToggle={() => toggle('greatFor')}>
        <div className="flex flex-col gap-[10px]">
          {[
            'Low profit fees starting from 2.25% for KSA nationals',
            'Deferred payment of the first installment for up to 120 days',
            'Flexible repayment periods up to 25 years',
            'Fast and simple application process',
            'Competitive financing solutions tailored to your needs',
            'Sharia-compliant financing options',
          ].map((item) => (
            <div key={item} className="flex gap-[12px] items-start">
              <div className="mt-[2px] shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#D1FADF"/>
                  <path d="M4.87 8.48L6.72 10.33L11.66 5.39" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[13.5px] text-[#475467] leading-[1.6]">{item}</p>
            </div>
          ))}
        </div>
      </AccordionSection>
      <AccordionSection title="Beware" isOpen={openSections.beware} onToggle={() => toggle('beware')}>
        <div className="flex gap-[12px] items-start">
          <div className="mt-[2px] shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="8" fill="#FEE4E2"/>
              <path d="M8 5v3" stroke="#F04438" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="8" cy="11" r="0.75" fill="#F04438"/>
            </svg>
          </div>
          <p className="text-[13.5px] text-[#475467] leading-[1.6]">Applicable only for KSA Nationals</p>
        </div>
      </AccordionSection>
      <AccordionSection title="Required documents" isOpen={openSections.docs} onToggle={() => toggle('docs')}>
        <div className="flex flex-col gap-[10px]">
          {['Passport (pdf or jpg)', 'Salary Evidence Document (pdf or jpg)'].map((doc) => (
            <div key={doc} className="flex gap-[12px] items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M9.33 1.33H4a1.33 1.33 0 0 0-1.33 1.34v10.66A1.33 1.33 0 0 0 4 14.67h8a1.33 1.33 0 0 0 1.33-1.34V5.33L9.33 1.33Z" stroke="#667085" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.33 1.33v4h4" stroke="#667085" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-[13.5px] text-[#475467]">{doc}</p>
            </div>
          ))}
        </div>
      </AccordionSection>
      <AccordionSection title="Conditions" isOpen={openSections.conditions} onToggle={() => toggle('conditions')}>
        <div className="flex flex-col gap-[10px]">
          {['The borrower is of legal age', 'The borrower has his permanent residence in Saudi Arabia'].map((cond) => (
            <div key={cond} className="flex gap-[12px] items-start">
              <div className="mt-[2px] shrink-0 w-4 h-4 rounded-[3px] border border-[#fdb022] bg-[#fffaeb] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2 2 4-4" stroke="#fdb022" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[13.5px] text-[#475467] leading-[1.6]">{cond}</p>
            </div>
          ))}
        </div>
      </AccordionSection>
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-[6px] overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-full flex items-start justify-center py-6 px-4">
        <div
          className="bg-white rounded-[8px] w-full max-w-[960px] flex flex-col gap-[32px] p-[24px]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-[10px]">
            <div className="flex flex-col gap-[4px]">
              <p className="text-[22px] lg:text-[26px] font-semibold text-[#15212f]">Product Details</p>
              <p className="text-[14px] lg:text-[16px] text-[#6d7989]">{loan.bank} • {loan.type}</p>
            </div>
            <button onClick={onClose} className="border border-[#d5d7da] rounded-[8px] p-[8px] shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="#667085" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Product title */}
          <h2 className="text-[28px] lg:text-[40px] font-bold text-[#0063f5] leading-[1.2]">
            Real Estate Financing for Home Buyers
          </h2>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-[48px]">

            {/* ── Left column ── */}
            <div className="flex-1 flex flex-col gap-[24px]">
              {/* Tab switcher */}
              <div className="bg-[#f8fafc] rounded-[11px] p-[3px] flex">
                {(['max', 'calculate'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 text-[13.5px] font-semibold py-[10px] rounded-[8px] transition-colors
                      ${activeTab === tab ? 'bg-white border border-[#eef1f6] text-[#0063f5]' : 'text-[#697586]'}`}
                  >
                    {tab === 'max' ? 'Max loan' : 'Calculate'}
                  </button>
                ))}
              </div>

              {/* Loan period */}
              <div className="flex flex-col gap-[12px]">
                <p className="text-[15.5px] font-semibold text-[#202a39]">Select Loan Period (Months)</p>
                <div className="flex flex-wrap gap-[8px]">
                  {periods.map((p) => {
                    const disabled = disabledPeriods.includes(p);
                    const active = selectedPeriod === p && !disabled;
                    return (
                      <button
                        key={p}
                        disabled={disabled}
                        onClick={() => setSelectedPeriod(p)}
                        className={`w-[48px] h-[48px] rounded-[12px] text-[13.5px] font-semibold tracking-[0.5px] transition-colors
                          ${disabled
                            ? 'bg-[#f8fafc] text-[#9aa4b2] cursor-not-allowed'
                            : active
                              ? 'bg-[#0063f5] text-white'
                              : 'bg-[#eef1f6] text-[#4b5565] hover:bg-[#e0e8f9]'
                          }`}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Loan amount — Max loan tab */}
              {activeTab === 'max' && (
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[15.5px] font-semibold text-[#202a39]">Loan amount (Received)</p>
                  <span className="text-[12.5px] text-[#697586]">up to</span>
                  <p className="text-[33.5px] font-bold text-[#0041a3] leading-[1.1]">SAR 99,999,999.99</p>
                  <span className="text-[12.5px] text-[#697586]">for {selectedPeriod} months</span>
                </div>
              )}

              {/* Preferred amount slider — Calculate tab */}
              {activeTab === 'calculate' && (
                <div className="flex flex-col gap-[16px]">
                  <p className="text-[15.5px] font-semibold text-[#202a39]">Your Preferred Amount</p>
                  <div className="flex items-baseline justify-between">
                    <span className="text-[12.5px] text-[#697586]">SAR {PREF_MIN.toLocaleString()}</span>
                    <span className="text-[22px] font-bold text-[#0041a3]">SAR {preferredAmount.toLocaleString()}</span>
                    <span className="text-[12.5px] text-[#697586]">SAR {PREF_MAX.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={PREF_MIN}
                    max={PREF_MAX}
                    step={1000}
                    value={preferredAmount}
                    onChange={(e) => setPreferredAmount(Number(e.target.value))}
                    className="w-full h-[8px] rounded-full cursor-pointer"
                    style={{ accentColor: '#0063f5' }}
                  />
                </div>
              )}

              {/* Stats + payout — mobile only (between loan amount and accordions) */}
              <div className="lg:hidden flex flex-col gap-[16px]">
                {statsTableJSX}
                {payoutCardJSX}
              </div>

              {/* Accordions */}
              {accordionsJSX}

              {/* Description + carousel — mobile only */}
              <div className="lg:hidden flex flex-col gap-[16px]">
                {descriptionJSX}
                {carouselJSX}
              </div>
            </div>

            {/* ── Right column — desktop only ── */}
            <div className="hidden lg:flex flex-1 flex-col gap-[16px]">
              {statsTableJSX}
              {payoutCardJSX}
              {descriptionJSX}
              {carouselJSX}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Loan Card ─────────────────────────────────────────────────────────────────
function LoanCard({ loan, onDetails }: { loan: typeof loans[number]; onDetails: () => void }) {
  return (
    <div className="border border-[#dadee3] rounded-[16px] bg-white overflow-hidden mb-4">

      {/* ── Mobile layout ── */}
      <div className="lg:hidden p-5 flex flex-col gap-4">
        {/* Title + arrow */}
        <div className="flex items-start gap-[16px] w-full">
          <p className="text-[20px] font-bold text-[#121a26] leading-[1.25] flex-1">{loan.type}</p>
          <button onClick={onDetails} className="shrink-0 mt-[1px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.16602 10.0001H15.8327M9.99935 15.8334L15.8327 10.0001L9.99935 4.16675" stroke="#414651" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        {/* Logo + Rating */}
        <div className="flex items-center justify-between w-full">
          <div className="h-[40px] w-[135px]">
            <img src={loan.logo} alt={loan.bank} className="h-full object-contain object-left" />
          </div>
          <StarRating rating={loan.rating} size={19} numSize="20.747px" />
        </div>
        {/* Loan amount */}
        <div className="flex flex-col items-start w-full">
          <div className="flex gap-[4px] items-baseline text-[#667085]">
            <span className="text-[12px] font-semibold">Loan amount</span>
            <span className="text-[10px]">up to</span>
          </div>
          <div className="flex gap-[2px] items-baseline text-[#101828]">
            <span className="text-[32px] font-bold">SAR</span>
            <span className="text-[24px] font-bold">{loan.amount.toLocaleString()}</span>
          </div>
        </div>
        {/* APR + Loan period */}
        <div className="flex gap-[5px] items-start w-full">
          <div className="flex-1 flex flex-col">
            <span className="text-[12px] font-semibold text-[#667085]">APR</span>
            <span className="text-[24px] font-bold text-[#101828]">{loan.rate}%</span>
            <span className="text-[12px] text-[#667085]">Up to {(loan.rate + 2.9).toFixed(2)}% *</span>
          </div>
          <div className="flex flex-col items-end w-[129px]">
            <div className="flex gap-[4px] items-baseline text-[#667085]">
              <span className="text-[12px] font-semibold">Loan period</span>
              <span className="text-[10px]">for</span>
            </div>
            <span className="text-[24px] font-bold text-[#101828] text-right">{loan.months} month</span>
          </div>
        </div>
        {/* Bottom row: time icon + favorite + button */}
        <div className="flex gap-[48px] items-center w-full">
          <div className="shrink-0">
            <img src="/icon-payout-time.svg" alt="" className="w-[40px] h-[40px]" />
          </div>
          <div className="flex flex-1 gap-[16px] items-center min-w-0">
            <button className="shrink-0">
              <img src="/icon-favorite.svg" alt="Favorite" className="w-6 h-6" />
            </button>
            <button onClick={() => window.location.href = '/review'} className="flex-1 bg-[#0063f5] rounded-[24px] py-[10px] flex items-center justify-center">
              <span className="text-white text-[13px] font-bold">Tamawal</span>
            </button>
          </div>
        </div>
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
          <button onClick={onDetails} className="border border-[rgba(0,99,245,0.32)] rounded-[24px] h-[44px] px-[24px] py-[10px] flex items-center justify-center gap-[8px] w-full bg-white mt-[24px]">
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
            <button onClick={() => window.location.href = '/review'} className="bg-[#0063f5] rounded-[24px] px-[12px] py-[10px] flex items-center justify-center flex-1">
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
  const [selectedLoanIdx, setSelectedLoanIdx] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {selectedLoanIdx !== null && (
        <ProductDetailsModal loan={loans[selectedLoanIdx]} onClose={() => setSelectedLoanIdx(null)} />
      )}
      {menuOpen && <SlidingMenu onClose={() => setMenuOpen(false)} />}

      <Navbar onMenuOpen={() => setMenuOpen(true)} />

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[75px]">

          {/* Header section — mobile */}
          <div className="lg:hidden flex flex-col gap-[24px] py-[24px]">
            <button onClick={() => router.back()} className="flex items-center gap-[8px] text-[#717680] w-fit">
              <img src={imgBackArrow} alt="" className="size-5" />
              <span className="text-[16px] font-semibold">Back</span>
            </button>
            <div className="flex flex-col gap-[8px]">
              <p className="text-[32px] font-semibold text-[#101828] leading-[1.35] tracking-[0.15px]">Search results</p>
              <p className="text-[16px] text-[#525252] leading-[1.5]">
                This will result in a less accurate product, but not necessarily eligible for you. You need to be logged in for get much more accurate results!
              </p>
            </div>
          </div>

          {/* Header section — desktop */}
          <div className="hidden lg:flex flex-col gap-6 pt-10 pb-6">
            <button onClick={() => router.back()} className="flex items-center gap-2 text-[#717680] w-fit">
              <img src={imgBackArrow} alt="" className="size-5" />
              <span className="text-[16px] font-semibold">Back</span>
            </button>
            <div className="flex items-center gap-[64px]">
              <div className="flex flex-col gap-[2px] flex-1">
                <p className="text-[32px] font-bold text-[#101828] leading-[1.35] tracking-[0.15px]">Search results</p>
                <p className="text-[16px] text-[#525252] leading-[1.72]">
                  This will result in a less accurate product, but not necessarily eligible for you. You need to be logged in for get much more accurate results!
                </p>
              </div>
              <div className="relative flex-shrink-0">
                {sortOpen && <div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />}
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="relative z-50 border border-[#0063f5] rounded-[56px] px-[24px] py-[16px] flex items-center gap-[10px] bg-white"
                >
                  <img src={imgSortIcon} alt="" className="size-5" />
                  <span className="text-[16px] font-bold text-[#0063f5]">Sort</span>
                </button>
                {sortOpen && <SortDropdown selected={sortBy} onSelect={(v) => { setSortBy(v); setSortOpen(false); }} />}
              </div>
            </div>
          </div>

          {/* Offers count + Sort row — mobile only */}
          <div className="lg:hidden flex items-center gap-[8px] pb-4">
            <p className="flex-1 text-[18px] text-[#525252]">{loans.length} offers for you</p>
            <div className="relative shrink-0">
              {sortOpen && <div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />}
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="relative z-50 bg-white border border-[#0063f5] rounded-[56px] px-[20px] py-[12px] flex items-center gap-[10px]"
              >
                <img src={imgSortIcon} alt="" className="size-5" />
                <span className="text-[16px] text-[#0063f5]">Sort</span>
              </button>
              {sortOpen && <SortDropdown selected={sortBy} onSelect={(v) => { setSortBy(v); setSortOpen(false); }} />}
            </div>
          </div>

          {/* Loan cards */}
          <div className="pb-6">
            {loans.map((loan, i) => (
              <LoanCard key={i} loan={loan} onDetails={() => setSelectedLoanIdx(i)} />
            ))}
          </div>

        </div>

        {/* Install app — mobile only */}
        <div className="lg:hidden bg-[#f9f8fd] flex flex-col gap-[16px] items-center px-[24px] py-[40px]">
          <p className="text-[16px] text-[#121a26] text-center">Install our app now!</p>
          <div className="flex gap-[12px]">
            <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] overflow-hidden">
              <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp&hl=id" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] overflow-hidden">
              <img src={imgGooglePlay} alt="Google Play" className="w-full h-full object-contain" />
            </a>
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
                  <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer" className="rounded-[6px] h-[40px] overflow-hidden">
                    <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp&hl=id" target="_blank" rel="noopener noreferrer" className="rounded-[6px] h-[40px] overflow-hidden">
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
            <p className="text-white/64 text-[16px] text-center leading-[1.7]">
              Tamawal Digital Brokerage Company operates under the supervision and regulation of the Saudi Arabian Monetary Authority (SAMA)
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
