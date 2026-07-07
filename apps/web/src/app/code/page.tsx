'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const REFERRAL_CODE = 'twl.app/web?ref=6114378a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t';

import SlidingMenu from '../../components/SlidingMenu';
import Navbar from '../../components/Navbar';

const imgLogo         = "/logo-tamawal-web.svg";
const imgLogoBlue     = "/logo-tamawal-web-blue.svg";
const imgMenuIcon     = "/icon-menu.svg";
const imgFooterBadge  = "/badge-small.svg";
const imgHeroBadge    = "/badge.svg";
const imgBadgeCenter  = "/badge-center.svg";
const imgArrowNext    = "/arrow-next-dark.svg";
const imgEmailIcon    = "/icon-email.svg";
const imgPhoneIcon    = "/icon-phone.svg";
const imgLocationIcon = "/pinlocation.svg";
const imgLinkedIn     = "/icon-linkedin.svg";
const imgTwitterX     = "/icon-twitter.svg";
const imgAppStore     = "/appstore.svg";
const imgGooglePlay   = "/playstore.svg";

export default function CodePage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {menuOpen && <SlidingMenu onClose={() => setMenuOpen(false)} />}

      <Navbar onMenuOpen={() => setMenuOpen(true)} />

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <main className="flex-1 bg-[#f5f7fa]">
        <div className="max-w-[1290px] mx-auto my-6 lg:my-10 px-4 lg:px-0">

          {/* Mobile card — matches Figma 2389:47031 */}
          <div className="lg:hidden bg-white rounded-[16px] shadow-sm flex flex-col gap-[24px] px-[24px] py-[24px]">
            <img src="/payment_success.svg" alt="" className="w-[86px] h-[86px]" />
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-[22px] font-bold text-[#101828] leading-[1.3]">
                Scan QR Code to continue
              </h2>
              <p className="text-[14px] text-[#667085] leading-[1.6]">
                Payment completed successfully. To continue and access the full range of Tamawal services, please scan the QR code below to proceed in the Tamawal mobile application.
              </p>
            </div>
            <img src="/qr-code.svg" alt="QR Code" className="w-[279px] h-[279px] self-center" />
            {/* Referral link row */}
            <div className="border border-[#EAECF0] rounded-[8px] px-[12px] py-[13px] flex items-center gap-[8px]">
              <button
                onClick={() => navigator.clipboard.writeText(REFERRAL_CODE)}
                className="shrink-0 cursor-pointer"
                title="Copy link"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66667 13.3333C5.74619 13.3333 5 12.5871 5 11.6667V5C5 4.07952 5.74619 3.33333 6.66667 3.33333H13.3333C14.2538 3.33333 15 4.07952 15 5" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="6.66667" y="6.66667" width="10" height="10" rx="1.66667" stroke="#667085" strokeWidth="1.5"/>
                </svg>
              </button>
              <div className="relative flex-1 min-w-0 overflow-hidden">
                <span className="text-[14px] text-[#667085] whitespace-nowrap">{REFERRAL_CODE}</span>
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
              </div>
            </div>
            {/* Continue button */}
            <a href="https://tamawal.sa" target="_blank" rel="noopener noreferrer" className="border border-[#0063F5] rounded-[56px] px-[24px] py-[16px] flex items-center justify-center gap-[8px] w-full">
              <span className="text-[16px] font-semibold text-[#0063F5]">Continue in mobile app</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16602 10.0001H15.8327M9.99935 15.8334L15.8327 10.0001L9.99935 4.16675" stroke="#0063F5" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Desktop card */}
          <div className="hidden lg:flex bg-white rounded-[24px] shadow-sm items-center w-full min-h-[671px] px-6 py-6">
            {/* Left — icon + text */}
            <div className="flex-1 flex flex-col gap-6 px-[56px] py-[142px]">
              <img src="/payment_success.svg" alt="" className="w-[188px] h-[188px]" />
              <div className="flex flex-col gap-[16px]">
                <h2 className="text-[36px] font-bold text-[#101828] leading-[1.25]">
                  Scan QR Code to continue
                </h2>
                <p className="text-[16px] text-[#667085] leading-[1.6] max-w-[558px]">
                  Payment completed successfully. To continue and access the full range of Tamawal services, please scan the QR code below to proceed in the Tamawal mobile application.
                </p>
              </div>
            </div>

            {/* Right — QR + link + button */}
            <div className="flex-shrink-0 flex flex-col gap-[10px] w-[500px] py-6">
              <img src="/qr-code.svg" alt="QR Code" className="w-[500px] h-[500px]" />
              {/* Referral link */}
              <div className="border border-[#EAECF0] rounded-[8px] px-[16px] py-[13px] flex items-center gap-[8px]">
                <button
                  onClick={() => navigator.clipboard.writeText(REFERRAL_CODE)}
                  className="shrink-0 cursor-pointer"
                  title="Copy link"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66667 13.3333C5.74619 13.3333 5 12.5871 5 11.6667V5C5 4.07952 5.74619 3.33333 6.66667 3.33333H13.3333C14.2538 3.33333 15 4.07952 15 5" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="6.66667" y="6.66667" width="10" height="10" rx="1.66667" stroke="#667085" strokeWidth="1.5"/>
                  </svg>
                </button>
                <div className="relative flex-1 min-w-0 overflow-hidden">
                  <span className="text-[14px] text-[#667085] whitespace-nowrap">{REFERRAL_CODE}</span>
                  <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
                </div>
              </div>
              {/* Continue button */}
              <div className="flex justify-center pt-[1px]">
                <a href="https://tamawal.sa" target="_blank" rel="noopener noreferrer" className="border border-[#0063F5] rounded-[56px] px-[24px] py-[16px] flex items-center gap-[8px]">
                  <span className="text-[16px] font-semibold text-[#0063F5]">Continue in mobile app</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16602 10.0001H15.8327M9.99935 15.8334L15.8327 10.0001L9.99935 4.16675" stroke="#0063F5" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
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
