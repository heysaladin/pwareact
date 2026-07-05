'use client';

import { useState } from 'react';

// ── Assets (same as app/page.tsx) ────────────────────────────────────────────
const imgLogo        = "/logo-tamawal-web.svg";
const imgNavArrow    = "http://localhost:3845/assets/4c4ae62485902829fc9e816c9e3b6272289709e3.svg";
const imgFooterBadge = "/badge-small.svg";
const imgArrowNext   = "http://localhost:3845/assets/81d50a7431408fc46e51730d5aa34428f1b83b28.svg";
const imgEmailIcon   = "http://localhost:3845/assets/7f2ee257638afd72a51f249195d3f921e359d8f3.svg";
const imgPhoneIcon   = "http://localhost:3845/assets/bb37c2c33523f4a34c420e251c2f11c79a1149a5.svg";
const imgLocationIcon = "/pinlocation.svg";
const imgLinkedIn    = "http://localhost:3845/assets/cb3a7fab272340302ba86f6a820b28b780a29371.svg";
const imgTwitterX    = "http://localhost:3845/assets/ad2931524412784cfe16d2c27d020156912b9fcb.svg";

export default function CodePage() {
  return (
    <div className="min-w-[1440px] bg-[#f5f7fa] min-h-screen flex flex-col">

      {/* ── Navbar ───────────────────────────────────────────────────────── */}
      <div className="bg-[#021945]">
        <div className="relative w-[1440px] mx-auto">
          <div className="px-[75px] py-[25px]">
            <div className="flex items-center justify-between h-[45px]">
              {/* Logo + nav */}
              <div className="flex items-center gap-[56px]">
                <div className="flex items-center">
                  <img src={imgLogo} alt="Tamawal" className="h-[33px] w-auto" />
                </div>
                <nav className="flex items-center gap-[40px]">
                  <a href="#" className="text-white text-[16px] font-medium">App</a>
                  <a href="#" className="text-[#98A2B3] text-[16px] font-medium">Tamawal</a>
                  <div className="flex items-center gap-1">
                    <a href="#" className="text-[#98A2B3] text-[16px] font-medium">Services</a>
                    <div className="w-[12px] h-[12px] ml-1 rotate-180">
                      <img src={imgNavArrow} alt="" className="w-full h-full" />
                    </div>
                  </div>
                  <a href="#" className="text-[#98A2B3] text-[16px] font-medium">About us</a>
                  <a href="#" className="text-[#98A2B3] text-[16px] font-medium">Contact us</a>
                </nav>
              </div>
              {/* Right */}
              <div className="flex items-center gap-8">
                <div className="w-[104px] h-[45px]" />
                <div className="border border-[#344054] rounded-full w-[44px] h-[44px] flex items-center justify-center">
                  <span className="text-[#98A2B3] text-[13px] font-medium">عربي</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <main className="flex-1 bg-[#f5f7fa]">
        <div className="max-w-[1290px] mx-auto my-10">
          <div className="bg-white rounded-[24px] shadow py-16 px-12 flex items-center gap-16">

            {/* Left column */}
            <div className="flex-1">
              <h2 className="text-[36px] font-bold text-[#101828] mb-6">
                Scan QR Code for continue
              </h2>
              <p className="text-[16px] text-[#667085] leading-[1.6]">
                This will result in a less accurate product, but not necessarily eligible for you. You need to be logged in for get much more accurate results!
              </p>
            </div>

            {/* Right column: QR Code */}
            <div className="flex-shrink-0">
              <img src="/qr-code.svg" alt="QR Code" width={500} height={500} />
            </div>

          </div>
        </div>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#021945]">
        <div className="max-w-[1440px] mx-auto px-[75px] pt-[90px] flex flex-col gap-[48px]">
        <div className="flex items-start justify-between w-full">

          {/* Left: logo + SAMA */}
          <div className="flex flex-col justify-between self-stretch w-[280px]">
            <div className="flex items-center">
              <img src={imgLogo} alt="Tamawal" className="h-[33px] w-auto" />
            </div>
            <div className="flex flex-col gap-4">
              <img src={imgFooterBadge} alt="SAMA" className="w-[81px] h-[81px]" />
              <p className="text-white/80 text-[18px] font-semibold leading-[1.72]">
                Tamawal is under the supervision and authority of Saudi Central Bank (SAMA)
              </p>
            </div>
          </div>

          {/* Right: link columns */}
          <div className="flex flex-col gap-8 flex-1 ml-[60px]">
            {/* Top row */}
            <div className="flex gap-[30px]">
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">About us</p>
                <div className="flex flex-col gap-2 text-white/64 text-[16px]">
                  <span>Who we are</span>
                  <span>Our products</span>
                  <span>Our values</span>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">Legal</p>
                <div className="flex flex-col gap-2 text-white/64 text-[16px]">
                  <span>Terms and Conditions</span>
                  <span>Data Protection and Privacy</span>
                  <span>Customer Protection Principles</span>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">Take actions</p>
                <div className="flex flex-col gap-2 text-white/64 text-[16px]">
                  <span>Be a partner</span>
                  <span>Be a customer</span>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-3">
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

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Bottom row */}
            <div className="flex gap-[30px]">
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">Contact us</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img src={imgEmailIcon} alt="" className="w-4 h-4 flex-shrink-0" />
                    <span className="text-white/64 text-[16px]">info@tamawal.sa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={imgPhoneIcon} alt="" className="w-4 h-4 flex-shrink-0" />
                    <span className="text-white/64 text-[16px]">011 512 3870</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={imgPhoneIcon} alt="" className="w-4 h-4 flex-shrink-0" />
                    <span className="text-white/64 text-[16px]">800 100 0276</span>
                  </div>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-bold leading-[1.72]">Address</p>
                <div className="flex gap-2 items-start">
                  <img src={imgLocationIcon} alt="" className="w-[13px] mt-1 flex-shrink-0" />
                  <span className="text-white/64 text-[14px] leading-[1.45]">Al Olaya (403) street, Riyadh, Saudi Arabia</span>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-4">
                <div>
                  <p className="text-white text-[16px] font-semibold">Working hours</p>
                  <p className="text-white/64 text-[14px]">09:00 – 17:00</p>
                </div>
                <div>
                  <p className="text-white text-[16px] font-semibold">Working days</p>
                  <p className="text-white/64 text-[14px]">Sunday - Thursday</p>
                </div>
              </div>
              <div className="w-[190px] flex flex-col gap-3">
                <p className="text-white text-[16px] font-semibold leading-[1.72]">Social media</p>
                <div className="flex gap-2 items-center">
                  <img src={imgLinkedIn} alt="LinkedIn" className="w-[45px] h-[45px]" />
                  <div className="border border-white/24 rounded-full w-[45px] h-[45px] flex items-center justify-center overflow-hidden">
                    <img src={imgTwitterX} alt="X" className="w-5 h-[15px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 pb-6">
          <div className="border-t border-white/10" />
          <p className="text-white/32 text-[16px] text-center leading-[1.7]">
            Tamawal Digital Brokerage Company operates under the supervision and regulation of the Saudi Arabian Monetary Authority (SAMA)
          </p>
        </div>
        </div>{/* /max-w-[1440px] */}
      </footer>

    </div>
  );
}
