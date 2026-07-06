'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SlidingMenu from '../../components/SlidingMenu';

const imgLogo         = "/logo-tamawal-web.svg";
const imgLogoBlue     = "/logo-tamawal-web-blue.svg";
const imgMenuIcon     = "http://localhost:3845/assets/0d52496e764f968ea0912e51471c5f8c5908af05.svg";
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
      <main className="flex-1 bg-[#f5f7fa]">
        <div className="max-w-[1290px] mx-auto my-6 lg:my-10 px-4 lg:px-0">
          <div className="bg-white rounded-[24px] shadow p-6 lg:py-16 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">

            {/* Left / top on mobile */}
            <div className="w-full lg:flex-1 flex flex-col gap-5 lg:gap-6">
              <img src="/payment_success.svg" alt="" className="w-[86px] h-[86px] lg:w-[188px] lg:h-[188px]" />
              <div>
                <h2 className="text-[22px] lg:text-[36px] font-bold text-[#101828] mb-3 lg:mb-4 leading-[1.3]">
                  Scan QR Code for continue
                </h2>
                <p className="text-[14px] lg:text-[16px] text-[#667085] leading-[1.6]">
                  Payment completed successfully. To continue and access the full range of Tamawal services, please scan the QR code below to proceed in the Tamawal mobile application.
                </p>
              </div>
            </div>

            {/* Right / bottom on mobile: QR Code */}
            <div className="flex-shrink-0 self-center">
              <img src="/qr-code.svg" alt="QR Code" className="w-[279px] h-[279px] lg:w-[500px] lg:h-[500px]" />
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
