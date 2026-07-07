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
const imgArrowNext    = "/arrow-next-dark.svg";
const imgEmailIcon    = "/icon-email.svg";
const imgPhoneIcon    = "/icon-phone.svg";
const imgLocationIcon = "/pinlocation.svg";
const imgLinkedIn     = "/icon-linkedin.svg";
const imgTwitterX     = "/icon-twitter.svg";

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
            <button className="border border-[#0063F5] rounded-[56px] px-[24px] py-[16px] flex items-center justify-center gap-[8px] w-full">
              <span className="text-[16px] font-semibold text-[#0063F5]">Continue in mobile app</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16602 10.0001H15.8327M9.99935 15.8334L15.8327 10.0001L9.99935 4.16675" stroke="#0063F5" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
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
                <button className="border border-[#0063F5] rounded-[56px] px-[24px] py-[16px] flex items-center gap-[8px]">
                  <span className="text-[16px] font-semibold text-[#0063F5]">Continue in mobile app</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16602 10.0001H15.8327M9.99935 15.8334L15.8327 10.0001L9.99935 4.16675" stroke="#0063F5" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#021945]">
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
                  <div className="flex flex-col gap-2 text-white/64 text-[16px]">
                    <span>Who we are</span><span>Our products</span><span>Our values</span>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-3">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Legal</p>
                  <div className="flex flex-col gap-2 text-white/64 text-[16px]">
                    <span>Terms and Conditions</span><span>Data Protection and Privacy</span><span>Customer Protection Principles</span>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-3">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Take actions</p>
                  <div className="flex flex-col gap-2 text-white/64 text-[16px]">
                    <span>Be a partner</span><span>Be a customer</span>
                  </div>
                </div>
                <div className="lg:w-[190px] flex flex-col gap-3">
                  <p className="text-white text-[16px] font-bold leading-[1.72]">Customer Care</p>
                  <p className="text-white/64 text-[14px] leading-[1.45]">You can give suggestions or a complaint for better Tamawal!</p>
                  <div className="flex flex-col">
                    <button className="flex items-center gap-1 py-3 text-white/86 text-[16px]">
                      Send a message <img src={imgArrowNext} alt="" className="w-6 h-6" />
                    </button>
                    <button className="flex items-center gap-1 py-3 text-white/86 text-[16px]">
                      FAQs <img src={imgArrowNext} alt="" className="w-6 h-6" />
                    </button>
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
                  <div>
                    <p className="text-white text-[16px] font-semibold">Working hours</p>
                    <p className="text-white/64 text-[14px]">09:00 – 17:00</p>
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-semibold">Working days</p>
                    <p className="text-white/64 text-[14px]">Sunday - Thursday</p>
                  </div>
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
