'use client';

import WebNavbar from '@/components/WebNavbar';
import WebFooter from '@/components/WebFooter';

const imgQr       = "/qr-code.svg";
const imgMockup   = "/mockup.png";
const imgAppStore = "/appstore.svg";
const imgPlayStore = "/playstore.svg";

export default function DownloadAppEnPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <WebNavbar lang="en" dark={true} />

      <main className="flex-1 bg-[#f9f8fd]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[75px] py-[40px]">

          {/* Mobile */}
          <div className="lg:hidden flex flex-col gap-[32px] items-center">
            <div className="flex flex-col gap-[16px]">
              <h1 className="text-[36px] font-bold text-[#171717] leading-[1.2] tracking-[-0.4px]">
                Download app now
              </h1>
              <p className="text-[15px] text-[#5c5c5c]">
                Scan the QR Code below to download the app
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-[12px] size-[200px] shrink-0">
              <img src={imgQr} alt="QR Code" className="w-full h-full rounded-[12px]" />
            </div>
            <div className="flex gap-[12px]">
              <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer"
                className="h-[40px] w-[120px] overflow-hidden">
                <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp&hl=id" target="_blank" rel="noopener noreferrer"
                className="h-[40px] w-[136px] overflow-hidden">
                <img src={imgPlayStore} alt="Google Play" className="w-full h-full object-contain" />
              </a>
            </div>
            <div className="bg-[rgba(0,99,245,0.16)] rounded-[40px] w-full max-w-[320px] h-[400px] relative overflow-hidden">
              <img src={imgMockup} alt="" className="absolute inset-0 w-full h-full object-contain object-bottom" />
              <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-b from-transparent to-[#d1e0fc]" />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-[96px]">

            {/* Text column */}
            <div className="flex flex-col gap-[24px] items-start flex-1 min-w-0">
              <div className="w-full">
                <h1 className="text-[56px] font-bold text-[#171717] leading-[64px] tracking-[-0.56px]">
                  Download app now
                </h1>
              </div>
              <div className="w-full">
                <p className="text-[15.3px] text-[#5c5c5c] leading-[24px] tracking-[-0.176px]">
                  Scan the QR Code below to download the app
                </p>
              </div>
              <div className="bg-white rounded-[20px] p-[12px] size-[252px] shrink-0">
                <img src={imgQr} alt="QR Code" className="w-full h-full rounded-[12px]" />
              </div>
              <div className="flex gap-[12px]">
                <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer"
                  className="h-[40px] w-[120px] overflow-hidden">
                  <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp&hl=id" target="_blank" rel="noopener noreferrer"
                  className="h-[40px] w-[136px] overflow-hidden">
                  <img src={imgPlayStore} alt="Google Play" className="w-full h-full object-contain" />
                </a>
              </div>
            </div>

            {/* Phone container */}
            <div className="bg-[rgba(0,99,245,0.16)] h-[600px] w-[480px] rounded-[40px] relative overflow-hidden shrink-0 flex items-end justify-center">
              <img src={imgMockup} alt="" className="relative z-[1] w-[364px] object-contain object-bottom h-full" />
              <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-[#d1e0fc] z-[2]" />
            </div>

          </div>
        </div>
      </main>

      <WebFooter lang="en" />
    </div>
  );
}
