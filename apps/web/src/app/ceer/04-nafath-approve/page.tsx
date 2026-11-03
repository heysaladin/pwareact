'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import TaasPageLayout from '../_components/TaasPageLayout';

const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

export default function NafathApprovePage() {
  const [secs, setSecs] = useState(162);
  const [resendSecs, setResendSecs] = useState(42);

  useEffect(() => {
    const t = setInterval(() => {
      setSecs((s) => (s > 0 ? s - 1 : 0));
      setResendSecs((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const mins = String(Math.floor(secs / 60)).padStart(2, '0');
  const ss = String(secs % 60).padStart(2, '0');
  const rMins = String(Math.floor(resendSecs / 60)).padStart(2, '0');
  const rSecs = String(resendSecs % 60).padStart(2, '0');

  const footer = (
    <>
      <div className="flex gap-[8px] items-center shrink-0">
        <div className="overflow-hidden shrink-0 size-[14px] relative">
          <div className="absolute inset-[12.5%_12.5%_12.47%_12.5%]">
            <img alt="" className="block max-w-none size-full" src="/taas/icon-refresh.svg" />
          </div>
        </div>
        <p className="text-[14px] leading-[23px] text-[#003e52] whitespace-pre" style={saira}>
          {`Resend request (${rMins}:${rSecs})   ·   Change National ID / Iqama`}
        </p>
      </div>
      <div className="flex gap-[12px] items-center shrink-0">
        <Link
          href="/ceer/03-verify-id"
          className="border border-[rgba(48,63,70,0.2)] flex gap-[6px] items-center justify-center min-w-[120px] px-[18px] py-[12px] rounded-[8px] shrink-0 relative overflow-hidden bg-white"
        >
          <p className="relative text-[12px] leading-[19px] text-[#1d2d33] uppercase whitespace-nowrap" style={oxanium}>
            Cancel
          </p>
        </Link>
        <Link
          href="/ceer/05-mobile-verification"
          className="border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center min-w-[120px] px-[18px] py-[12px] rounded-[8px] shrink-0 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#003e52] rounded-[8px]" />
          <p className="relative text-[12px] leading-[19px] text-white uppercase whitespace-pre" style={oxanium}>
            {'Continue  →'}
          </p>
        </Link>
      </div>
    </>
  );

  return (
    <TaasPageLayout currentStep={2} footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] items-start w-full shrink-0 text-[#1d2d33]">
        <p className="text-[32px] leading-[36px] uppercase w-full" style={oxanium}>
          Approve your identity in Nafath
        </p>
        <p className="text-[16px] leading-[22px] w-full" style={saira}>
          We sent a secure verification request to your Nafath app. Approve it using the number below.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="flex gap-[20px] items-start shrink-0 w-full">
        {/* Left column */}
        <div className="flex flex-1 min-w-0 flex-col gap-[16px] items-start">
          {/* Verification card */}
          <div className="border border-[rgba(48,63,70,0.2)] flex flex-col gap-[18px] items-start p-[20px] rounded-[14px] shrink-0 w-full">
            {/* ID row */}
            <div className="bg-[#f4f5f3] flex items-center justify-between px-[18px] py-[14px] rounded-[12px] shrink-0 w-full">
              <div className="flex gap-[12px] items-center shrink-0">
                <div className="overflow-hidden shrink-0 size-[20px] relative">
                  <div className="absolute inset-[20.83%_8.33%]">
                    <img alt="" className="block max-w-none size-full" src="/taas/icon-id.svg" />
                  </div>
                </div>
                <div className="flex flex-col gap-[2px] items-start shrink-0 text-[#1d2d33] whitespace-nowrap" style={saira}>
                  <p className="text-[12px] leading-[16px]">Verified National ID / Iqama</p>
                  <p className="text-[16px] leading-[22px]">1 •••• •••• 34</p>
                </div>
              </div>
              <div className="bg-[#f4f5f3] flex items-center px-[10px] py-[3px] rounded-[999px] shrink-0">
                <p className="text-[12px] leading-[16px] text-[#067647] whitespace-nowrap" style={saira}>Verified</p>
              </div>
            </div>

            {/* Code + timer */}
            <div className="flex gap-[20px] items-center shrink-0">
              <div className="flex flex-col gap-[8px] items-center shrink-0">
                <p className="text-[12px] leading-[16px] text-[#1d2d33] text-center whitespace-nowrap" style={saira}>
                  Verification number
                </p>
                <div className="bg-[#f4f5f3] border border-[rgba(48,63,70,0.2)] flex h-[96px] items-center justify-center rounded-[16px] shrink-0 w-[120px]">
                  <p className="text-[54px] leading-[58px] text-[#003e52] text-center uppercase whitespace-nowrap" style={{ fontFamily: "'Oxanium', sans-serif", fontWeight: 300 }}>
                    67
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-center shrink-0">
                <p className="text-[12px] leading-[16px] text-[#1d2d33] text-center whitespace-nowrap" style={saira}>
                  Time remaining
                </p>
                <div className="bg-[#f4f5f3] border border-[rgba(48,63,70,0.2)] flex gap-[8px] h-[96px] items-center justify-center rounded-[16px] shrink-0 w-[120px]">
                  <div className="overflow-hidden shrink-0 size-[22px] relative">
                    <div className="absolute inset-[8.33%]">
                      <img alt="" className="block max-w-none size-full" src="/taas/icon-clock.svg" />
                    </div>
                  </div>
                  <p className="text-[32px] leading-[36px] text-[#1d2d33] uppercase whitespace-nowrap" style={oxanium}>
                    {mins}:{ss}
                  </p>
                </div>
              </div>
            </div>

            {/* Waiting status */}
            <div className="flex gap-[8px] items-center shrink-0">
              <div className="bg-[#f79009] rounded-[5px] shrink-0 size-[10px]" />
              <p className="text-[14px] leading-[23px] text-[#b54708] whitespace-nowrap" style={saira}>
                Waiting for your approval…
              </p>
            </div>
          </div>

          {/* How to approve */}
          <div className="border border-[rgba(48,63,70,0.2)] flex flex-col gap-[12px] items-start p-[20px] rounded-[14px] shrink-0 w-full">
            <p className="text-[16px] leading-[22px] text-[#1d2d33] whitespace-nowrap" style={saira}>
              How to approve
            </p>
            {[
              'Open the Nafath app',
              'Review the identity verification request',
              'Select the number 67',
              'Approve the request and return here',
            ].map((step, i) => (
              <div key={i} className="flex gap-[10px] items-center shrink-0">
                <div className="bg-[#f4f5f3] flex items-center justify-center rounded-[12px] shrink-0 size-[24px]">
                  <p className="text-[12px] leading-[16px] text-[#003e52] text-center whitespace-nowrap" style={saira}>
                    {i + 1}
                  </p>
                </div>
                <p className="text-[14px] leading-[23px] text-[#1d2d33] whitespace-nowrap" style={saira}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Nafath phone mockup */}
        <div className="bg-white flex flex-col items-center justify-center p-[8px] rounded-[40px] shrink-0">
          <div className="bg-[#1d2d33] flex flex-col items-center p-[12px] rounded-[32px] shrink-0 w-[260px]">
            <div className="bg-white flex flex-col gap-[14px] h-[511px] items-center justify-center px-[16px] py-[20px] rounded-[22px] shrink-0 w-[236px]">
              {/* Nafath logo */}
              <div className="h-[25.6px] shrink-0 w-[64px] relative">
                <img alt="Nafath" className="absolute inset-0 max-w-none object-contain size-full" src="/taas/nafath-logo.png" />
              </div>
              <p className="text-[16px] leading-[22px] text-[#1d2d33] text-center w-full" style={saira}>
                Verify your identity
              </p>
              <p className="text-[12px] leading-[16px] text-[#1d2d33] text-center w-full" style={saira}>
                A verification request from Tamawal Financing
              </p>
              {/* Number circle */}
              <div className="bg-[#f4f5f3] flex items-center justify-center rounded-[42px] shrink-0 size-[84px]">
                <p className="text-[32px] leading-[36px] text-[#0b7a4b] text-center uppercase whitespace-nowrap" style={oxanium}>
                  67
                </p>
              </div>
              {/* Approve button */}
              <div className="bg-[#0b7a4b] flex h-[40px] items-center justify-center rounded-[10px] shrink-0 w-[204px]">
                <p className="text-[14px] leading-[23px] text-center text-white whitespace-nowrap" style={saira}>Approve</p>
              </div>
              {/* Reject button */}
              <div className="border border-[rgba(48,63,70,0.2)] flex h-[40px] items-center justify-center rounded-[10px] shrink-0 w-[204px]">
                <p className="text-[14px] leading-[23px] text-[#1d2d33] text-center whitespace-nowrap" style={saira}>Reject</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TaasPageLayout>
  );
}
