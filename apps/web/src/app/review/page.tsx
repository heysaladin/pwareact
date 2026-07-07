'use client';

import { useState } from 'react';
import Link from 'next/link';
import SlidingMenu from '@/components/SlidingMenu';
import Navbar from '@/components/Navbar';

const imgLogo         = "/logo-tamawal-web.svg";
const imgLogoBlue     = "/logo-tamawal-web-blue.svg";
const imgMenuIcon     = "/icon-menu.svg";
const imgBackArrow    = "/arrow-narrow-left.svg";
const imgFavorite     = "/icon-favorite.svg";
const imgPayoutTime   = "/icon-payout-time.svg";
const imgBadge        = "/badge.svg";
const imgHeroBadge    = "/badge.svg";
const imgBadgeCenter  = "/badge-center.svg";
const imgAppStore     = "/appstore.svg";
const imgGooglePlay   = "/playstore.svg";
const imgLogoBank     = "/logos/alinma.png";
const imgEmailIcon    = "/icon-email.svg";
const imgPhoneIcon    = "/icon-phone.svg";
const imgLocationIcon = "/pinlocation.svg";
const imgLinkedIn     = "/icon-linkedin.svg";
const imgTwitterX     = "/icon-twitter.svg";
const imgArrowNext    = "/arrow-next-dark.svg";

function SARIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <img src="/SAR.svg" alt="SAR" className={`${className} object-contain flex-shrink-0`} />;
}

function StarRating({ value = 4.5 }: { value?: number }) {
  return (
    <div className="flex items-center gap-[8px]">
      <div className="flex items-center gap-[2px]">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 1.5L9.85 5.27L14 5.85L11 8.77L11.71 12.9L8 10.96L4.29 12.9L5 8.77L2 5.85L6.15 5.27L8 1.5Z"
              fill={i <= 4 ? "#F9A825" : "#E0E0E0"}
              stroke={i <= 4 ? "#F9A825" : "#E0E0E0"}
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>
      <span className="text-[#344054] text-[16px] font-bold leading-[1.35]">{value}</span>
    </div>
  );
}

function IconSimah() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 10.5A6.5 6.5 0 1 1 16.5 10.5" stroke="#0063F5" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 10.5L13.5 7" stroke="#0063F5" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="10.5" r="1.2" fill="#0063F5"/>
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2L16.5 4.5V10C16.5 13.5 13.5 16.5 10 18C6.5 16.5 3.5 13.5 3.5 10V4.5L10 2Z" stroke="#0063F5" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7.5 10.5L9 12L12.5 8" stroke="#0063F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconTarget() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="#0063F5" strokeWidth="1.5"/>
      <circle cx="10" cy="10" r="4" stroke="#0063F5" strokeWidth="1.5"/>
      <circle cx="10" cy="10" r="1.2" fill="#0063F5"/>
    </svg>
  );
}

function IconAlert() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 2.5L12.5 12H1.5L7 2.5Z" stroke="#B54708" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 6.5V8.5" stroke="#B54708" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="7" cy="10.5" r="0.5" fill="#B54708"/>
    </svg>
  );
}

function IconLock() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="6.5" width="9" height="6" rx="1" stroke="#717680" strokeWidth="1.2"/>
      <path d="M4.5 6.5V4.5a2.5 2.5 0 0 1 5 0v2" stroke="#717680" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="7" cy="9.5" r="0.8" fill="#717680"/>
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 3.5L9.5 7L5.5 10.5" stroke="#121a26" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CtaBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex flex-col items-center justify-end h-[64px] rounded-[8px] w-full ${className}`}>
      <div className="absolute top-0 right-0 bg-[#d91c1c] text-white text-[12px] rounded-full px-[8px] py-[2px] flex items-center gap-[4px] z-10">
        <span>Enjoy up to </span>
        <img src="/SAR-white.svg" alt="SAR" className="w-3 h-3 object-contain flex-shrink-0" />
        <span>100 discount</span>
        <div className="absolute -bottom-[5px] right-[14px] w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#d91c1c]" />
      </div>
      <div className="bg-[#fef2f2] border border-[#fee2e2] rounded-[8px] flex items-center p-[12px] w-full">
        <div className="flex-1 flex items-center gap-[8px]">
          <div className="w-[20px] h-[20px] flex-shrink-0 flex items-center justify-center">
            <SARIcon className="w-5 h-5" />
          </div>
          <span className="text-[#121a26] text-[13px] font-semibold tracking-[0.5px] whitespace-nowrap">Redeem your discount points</span>
        </div>
        <IconChevronRight />
      </div>
    </div>
  );
}

export default function ReviewPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#f9f8fd] min-h-screen flex flex-col">
      {menuOpen && <SlidingMenu onClose={() => setMenuOpen(false)} />}

      <Navbar onMenuOpen={() => setMenuOpen(true)} />

      {/* ── Page Content ───────────────────────────────────────────────── */}
      <div className="flex-1 bg-[#f9f8fd] py-[24px] flex flex-col gap-[32px]">

        {/* Header */}
        <div className="flex flex-col gap-[24px] px-[24px] lg:px-[75px]">
          <Link href="/results" className="flex items-center gap-[8px] w-fit">
            <img src={imgBackArrow} alt="" className="w-[20px] h-[20px]" />
            <span className="text-[#717680] text-[16px] font-semibold leading-[24px]">Back</span>
          </Link>
          <div className="flex flex-col gap-[2px] w-full">
            <h1 className="text-[#101828] text-[24px] lg:text-[32px] font-bold tracking-[0.15px]">Review Eligibility Order</h1>
            <p className="text-[#525252] text-[16px] leading-[1.72]">
              Confirm your offer and pay the one-time eligibility fee so we can retrieve your official data and match you with accurate financing offers.
            </p>
          </div>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-[24px] px-[24px] lg:px-[75px] items-start">

          {/* ── LEFT: Product + Why pay ──────────────────────────────── */}
          <div className="flex-1 min-w-0 flex flex-col gap-[24px]">

            {/* Product card */}
            <div className="bg-white border border-[#eef1f6] rounded-[16px] overflow-hidden">

              {/* Mobile layout */}
              <div className="lg:hidden p-[20px] flex flex-col gap-[16px]">
                <h2 className="text-[#121a26] text-[16px] font-bold leading-[1.25]">Real Estate Financing for Home Buyers</h2>
                <div className="flex items-center justify-between">
                  <img src={imgLogoBank} alt="Bank" className="h-[40px] w-auto object-contain" />
                  <StarRating value={4.5} />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <div className="flex items-baseline gap-[4px] text-[#667085]">
                    <span className="text-[16px] font-semibold">Loan amount</span>
                    <span className="text-[12px]">up to</span>
                  </div>
                  <div className="flex items-baseline gap-[4px]">
                    <SARIcon className="w-5 h-5" />
                    <span className="text-[#101828] text-[32px] font-bold leading-[1.5]">90,000,000.99</span>
                  </div>
                </div>
                <div className="flex gap-[24px]">
                  <div className="flex flex-col">
                    <span className="text-[#667085] text-[16px] font-semibold">APR</span>
                    <span className="text-[#101828] text-[24px] font-bold">2.21%</span>
                    <span className="text-[#667085] text-[12px]">Up to 5.13% *</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-[4px] text-[#667085]">
                      <span className="text-[16px] font-semibold">Loan period</span>
                      <span className="text-[12px]">for</span>
                    </div>
                    <span className="text-[#101828] text-[24px] font-bold">48 month</span>
                  </div>
                </div>
                <div className="flex items-center gap-[12px]">
                  <img src={imgPayoutTime} alt="" className="w-[40px] h-[40px] flex-shrink-0" />
                  <img src={imgFavorite} alt="Favorite" className="w-[24px] h-[24px] flex-shrink-0" />
                  <button className="flex-1 bg-[#0063f5] text-white rounded-[24px] py-[10px] text-[14px] font-semibold">Tamawal</button>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden lg:flex h-[318px]">
                <div className="border-r border-[#eef1f6] flex flex-col justify-between px-[24px] py-[28px] w-[284px] flex-shrink-0">
                  <h2 className="text-[#121a26] text-[24px] font-bold leading-[1.25]">Real Estate Financing for Home Buyers</h2>
                  <img src={imgLogoBank} alt="Bank" className="h-[60px] w-[203px] object-contain" />
                  <StarRating value={4.5} />
                </div>
                <div className="flex-1 flex flex-col justify-between px-[32px] py-[28px]">
                  <div className="flex gap-[5px] w-full">
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-baseline gap-[4px] text-[#667085]">
                        <span className="text-[16px] font-semibold">Loan amount</span>
                        <span className="text-[12px]">up to</span>
                      </div>
                      <div className="flex items-baseline gap-[4px]">
                        <SARIcon className="w-5 h-5" />
                        <span className="text-[#101828] text-[32px] font-bold leading-[1.5]">90,000,000.99</span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-end">
                      <div className="flex items-baseline gap-[4px] text-[#667085]">
                        <span className="text-[16px] font-semibold">Loan period</span>
                        <span className="text-[12px]">for</span>
                      </div>
                      <span className="text-[#101828] text-[32px] font-bold leading-[1.5]">48 month</span>
                    </div>
                  </div>
                  <div className="flex gap-[5px] items-center w-full">
                    <div className="flex-1 flex flex-col">
                      <span className="text-[#667085] text-[16px] font-semibold">APR</span>
                      <span className="text-[#101828] text-[32px] font-bold">2.21%</span>
                      <span className="text-[#667085] text-[12px]">Up to 5.13% *</span>
                    </div>
                    <div className="flex-1 flex flex-col items-end gap-[8px]">
                      <img src={imgPayoutTime} alt="" className="w-[40px] h-[40px]" />
                      <span className="text-[#667085] text-[12px] text-right w-[156px] leading-[1.4]">Finalization & Disbursement within 1 to 2 working days</span>
                    </div>
                  </div>
                  <div className="flex items-center w-full">
                    <button className="flex items-center gap-[4px]">
                      <img src={imgFavorite} alt="" className="w-[24px] h-[24px]" />
                      <span className="text-[#98a2b3] text-[16px]">Add to favorite</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Why do I need to pay card */}
            <div className="bg-white border border-[#eef1f6] rounded-[24px] p-[24px] flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[12px]">
                <h2 className="text-[#101828] text-[24px] font-bold tracking-[0.15px]">Why do I need to pay?</h2>
                <p className="text-[#525252] text-[16px] leading-[1.72]">
                  We charge a non-refundable eligibility fee to access and process your credit and financial data from trusted data provider sources
                </p>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-center gap-[8px]">
                  <div className="bg-[#f5f9ff] rounded-[8px] p-[8px] flex-shrink-0">
                    <IconSimah />
                  </div>
                  <p className="text-[#4b5565] text-[16px] flex-1 tracking-[0.5px]">Retrieving your credit report from SIMAH</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="bg-[#f5f9ff] rounded-[8px] p-[8px] flex-shrink-0">
                    <IconShield />
                  </div>
                  <p className="text-[#4b5565] text-[16px] flex-1 tracking-[0.5px]">Verifying your KYC, employment and income information</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="bg-[#f5f9ff] rounded-[8px] p-[8px] flex-shrink-0">
                    <IconTarget />
                  </div>
                  <p className="text-[#4b5565] text-[16px] flex-1 tracking-[0.5px]">Analyzing your profile to match the most accurate financing offers for you</p>
                </div>
              </div>
              <div className="bg-[#fffcf5] border border-[#fedf89] rounded-[8px] p-[8px] flex gap-[6px] items-start">
                <div className="flex-shrink-0 mt-[2px]">
                  <IconAlert />
                </div>
                <p className="text-[#b54708] text-[12px] leading-[1.5] flex-1">
                  Please note! Paying the eligibility fee does not guarantee loan approval. It ensures secure and official data retrieval for your eligibility assessment.
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: CTA + Payment card ────────────────────────────── */}
          <div className="w-full lg:w-[400px] flex-shrink-0 flex flex-col gap-[24px]">
            <CtaBanner />
            <div className="bg-white border border-[#eef1f6] rounded-[16px] p-[8px] flex flex-col gap-[24px]">

              {/* Payment details */}
              <div className="border border-[#eef1f6] rounded-[8px] overflow-hidden">
                <div className="bg-white p-[12px]">
                  <span className="text-[#121a26] text-[17px] font-bold leading-[26px]">Payment Details</span>
                </div>
                <div className="bg-[#f8fafc] flex items-center gap-[24px] px-[12px] py-[6px]">
                  <span className="flex-1 text-[#121a26] text-[13px] font-semibold tracking-[0.5px]">Eligibility Fees</span>
                  <div className="flex items-center gap-[2px]">
                    <SARIcon className="w-3 h-3" />
                    <span className="text-[#121a26] text-[15px]">950</span>
                  </div>
                </div>
                <div className="bg-white flex items-start gap-[24px] px-[12px] py-[6px]">
                  <div className="flex-1 flex flex-col gap-[2px]">
                    <span className="text-[#121a26] text-[13px] font-semibold tracking-[0.5px]">VAT (15%)</span>
                    <span className="text-[#697586] text-[13px] tracking-[0.5px]">
                      VAT Number:{' '}
                      <span className="text-[#0063f5] underline decoration-solid">310131935400</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-[2px]">
                    <SARIcon className="w-3 h-3" />
                    <span className="text-[#121a26] text-[15px]">50</span>
                  </div>
                </div>
                <div className="border-t border-[#eef1f6]" />
                <div className="bg-[#f8fafc] flex items-center gap-[24px] px-[12px] pt-[12px] pb-[8px]">
                  <div className="flex-1 flex items-baseline gap-[4px]">
                    <span className="text-[#121a26] text-[13px] font-semibold tracking-[0.5px]">Total </span>
                    <span className="text-[#697586] text-[10px] tracking-[0.5px]">(VAT Inclusive)</span>
                  </div>
                  <div className="flex items-center gap-[2px]">
                    <SARIcon className="w-3 h-3" />
                    <span className="text-[#121a26] text-[17px] font-bold">900</span>
                  </div>
                </div>
              </div>

              {/* Action area */}
              <div className="flex flex-col gap-[24px] p-[24px]">
                <p className="text-[#364152] text-[13px] text-center leading-[18px] tracking-[0.4px]">
                  By paying, you acknowledge the payment is non-refundable.{' '}
                  <span className="text-[#0063f5]">Read More</span>
                </p>
                <button onClick={() => window.location.href = '/payment'} className="bg-[#ffdd33] border-2 border-[rgba(255,255,255,0.12)] rounded-[24px] py-[12px] px-[16px] flex items-center justify-center min-h-[46px] w-full cursor-pointer">
                  <span className="text-[#121a26] text-[13px] font-semibold tracking-[0.5px]">Pay now</span>
                </button>
                <div className="flex items-center justify-center gap-[6px]">
                  <IconLock />
                  <span className="text-[#717680] text-[12px] tracking-[0.012px]">Secure checkout · Powered by Moyasar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="bg-[#202a39]">
        <div className="max-w-[1440px] mx-auto px-[24px] lg:px-[75px] pt-[60px] lg:pt-[90px] flex flex-col gap-[48px]">
          <div className="flex flex-col lg:flex-row lg:items-start w-full gap-[40px] lg:gap-[64px]">

            {/* Left: logo + SAMA badge + desc */}
            <div className="flex flex-col items-start gap-[40px] lg:gap-0 lg:justify-between lg:self-stretch lg:flex-1">
              <div className="flex items-center">
                <img src={imgLogo} alt="Tamawal" className="h-[32px] w-auto" />
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="relative size-[100px]">
                  <img src={imgHeroBadge} alt="" className="absolute inset-0 size-full" style={{ animation: 'badge-spin 18s linear infinite' }} />
                  <img src={imgBadgeCenter} alt="Licensed by SAMA" className="absolute inset-0 size-full" />
                </div>
                <p className="text-[rgba(255,255,255,0.86)] text-[18px] font-semibold leading-[1.5] max-w-[254px]">
                  Tamawal® is supervised and regulated by the Saudi Central Bank under license No. 98/N M/202504
                </p>
              </div>
            </div>

            {/* Right: link columns */}
            <div className="flex flex-col gap-[32px] shrink-0">
              {/* Top row */}
              <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-[30px]">
                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">About us</p>
                  <div className="flex flex-col gap-[8px] text-[rgba(255,255,255,0.64)] text-[16px]">
                    <span>Who we are</span>
                    <span>Our products</span>
                    <span>Our values</span>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Legal</p>
                  <div className="flex flex-col gap-[8px] text-[rgba(255,255,255,0.64)] text-[16px]">
                    <span>Terms and Conditions</span>
                    <span>Data Protection<br />and Privacy</span>
                    <span>Customer Protection<br />Principles</span>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Take actions</p>
                  <div className="flex flex-col gap-[8px] text-[rgba(255,255,255,0.64)] text-[16px]">
                    <span>Be a partner</span>
                    <span>Be a customer</span>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Customer Care</p>
                  <div className="flex flex-col gap-[8px] text-[rgba(255,255,255,0.64)] text-[16px]">
                    <span>Suggestion</span>
                    <span>Complaint</span>
                    <span>Report a Violation</span>
                    <span>Report Financial Fraud</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Bottom row */}
              <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-[30px]">
                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Contact us</p>
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex items-center gap-[8px]">
                      <img src={imgEmailIcon} alt="" className="w-[16px] h-[16px] flex-shrink-0" />
                      <span className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[16px]">info@tamawal.sa</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <img src={imgPhoneIcon} alt="" className="w-[16px] h-[16px] flex-shrink-0" />
                      <span className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[16px]">011 512 3870</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <img src={imgPhoneIcon} alt="" className="w-[16px] h-[16px] flex-shrink-0" />
                      <span className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[16px]">800 100 0276</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Address</p>
                  <div className="flex gap-[8px] items-start">
                    <img src={imgLocationIcon} alt="" className="w-[13px] mt-[2px] flex-shrink-0" />
                    <span className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[14px] leading-[1.45]">Al Olaya (403) street, Riyadh, Saudi Arabia</span>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-[12px]">
                  <div className="flex flex-col gap-[4px]">
                    <p className="text-white text-[16px] font-semibold">Working hours</p>
                    <p className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[14px]">09:00 – 17:00</p>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <p className="text-white text-[16px] font-semibold">Working days</p>
                    <p className="text-[rgba(255,255,255,0.86)] lg:text-[rgba(255,255,255,0.64)] text-[14px]">Sunday - Thursday</p>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-[8px]">
                  <p className="text-white text-[16px] font-semibold leading-[1.72]">Social media</p>
                  <div className="flex gap-[8px] items-center">
                    <img src={imgLinkedIn} alt="LinkedIn" className="w-[45px] h-[45px]" />
                    <img src={imgTwitterX} alt="X" className="w-[45px] h-[45px]" />
                  </div>
                  <button className="flex items-center gap-[2px] py-[12px]">
                    <span className="text-[rgba(255,255,255,0.86)] text-[16px] font-semibold leading-[1.72]">FAQs</span>
                    <img src={imgArrowNext} alt="" className="w-[24px] h-[24px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-[24px] pb-[24px]">
            <div className="border-t border-white/10" />
            {/* Mobile: stacked centered */}
            <div className="flex flex-col gap-[12px] items-center lg:hidden">
              <p className="text-[rgba(255,255,255,0.64)] text-[16px] text-center leading-[1.7]">Download our App!</p>
              <div className="flex gap-[12px]">
                <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] w-[128px] overflow-hidden">
                  <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp&hl=id" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] w-[128px] overflow-hidden">
                  <img src={imgGooglePlay} alt="Google Play" className="w-full h-full object-contain" />
                </a>
              </div>
              <p className="text-[rgba(255,255,255,0.64)] text-[16px] text-center leading-[1.7]">© All right reserved to Tamawal 2026</p>
            </div>
            {/* Desktop: copyright left, download right */}
            <div className="hidden lg:flex items-center justify-between w-full">
              <p className="text-[rgba(255,255,255,0.64)] text-[16px] leading-[1.7]">© All right reserved to Tamawal 2026</p>
              <div className="flex items-center gap-[16px]">
                <p className="text-[rgba(255,255,255,0.64)] text-[16px] leading-[1.7]">Download our App!</p>
                <div className="flex gap-[12px]">
                  <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] w-[128px] overflow-hidden">
                    <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp&hl=id" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] w-[128px] overflow-hidden">
                    <img src={imgGooglePlay} alt="Google Play" className="w-full h-full object-contain" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
