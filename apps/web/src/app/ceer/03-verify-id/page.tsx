'use client';
import { useState } from 'react';
import Link from 'next/link';
import TaasPageLayout from '../_components/TaasPageLayout';

const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

export default function VerifyIdPage() {
  const [nid, setNid] = useState('');

  const footer = (
    <>
      <div className="flex gap-[8px] items-center shrink-0">
        <div className="overflow-hidden shrink-0 size-[16px] relative">
          <div className="absolute inset-[8.33%_12.5%]">
            <img alt="" className="block max-w-none size-full" src="/taas/icon-lock-small.svg" />
          </div>
        </div>
        <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] whitespace-nowrap" style={saira}>
          You can stop at any time — nothing is submitted until you confirm your order.
        </p>
      </div>
      <div className="flex gap-[12px] items-center shrink-0">
        <Link
          href="/ceer/02-what-happens-next"
          className="border border-[rgba(48,63,70,0.2)] flex gap-[6px] items-center justify-center min-w-[120px] px-[18px] py-[12px] rounded-[8px] shrink-0 relative overflow-hidden bg-white"
        >
          <p className="relative text-[12px] leading-[19px] text-[#1d2d33] uppercase whitespace-nowrap" style={oxanium}>
            Cancel
          </p>
        </Link>
        <Link
          href="/ceer/04-nafath-approve"
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
          Enter your verified ID
        </p>
        <p className="text-[16px] leading-[22px] w-full" style={saira}>
          To continue, enter your National ID or Iqama number to verify your identity with Tamawal.
        </p>
      </div>

      {/* Two columns */}
      <div className="flex gap-[24px] items-start shrink-0 w-full">
        {/* Left: input + how it works */}
        <div className="flex flex-1 min-w-0 flex-col gap-[24px] items-start">
          {/* ID input field */}
          <div className="flex flex-col gap-[6px] items-start shrink-0 w-full">
            <div className="flex gap-[2px] items-start text-[14px] leading-[23px]" style={saira}>
              <p className="text-[#1d2d33]">National ID / Iqama number</p>
              <p className="text-[#d92d20]">*</p>
            </div>
            <div className="bg-white border border-[rgba(48,63,70,0.2)] flex gap-[8px] items-center px-[14px] py-[10px] rounded-[8px] shrink-0 w-full shadow-[0px_1px_1px_rgba(10,13,18,0.05)]">
              <div className="flex flex-1 min-w-0 gap-[8px] items-center">
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="1XXXXXXXXX"
                  value={nid}
                  onChange={(e) => setNid(e.target.value)}
                  className="flex-1 min-w-0 bg-transparent border-none outline-none text-[16px] leading-[22px] text-[rgba(48,63,70,0.7)]"
                  style={saira}
                />
              </div>
              <img alt="" className="size-[16px] shrink-0" src="/taas/icon-circle-help2.svg" />
            </div>
            <p className="text-[14px] leading-[23px] text-[#1d2d33] w-full" style={saira}>
              Must match the ID registered with Absher.
            </p>
          </div>

          {/* How verification works */}
          <div className="border border-[rgba(48,63,70,0.2)] flex flex-col gap-[18px] items-start p-[24px] rounded-[14px] shrink-0 w-full">
            <p className="text-[20px] leading-[21px] text-[#1d2d33] uppercase whitespace-nowrap" style={oxanium}>
              How verification works
            </p>
            {[
              {
                num: '1',
                title: 'Enter your ID',
                desc: 'Your National ID or Iqama number registered with Absher.',
              },
              {
                num: '2',
                title: 'Approve in Nafath',
                desc: 'Open the Nafath app and confirm the verification number we show you.',
              },
              {
                num: '3',
                title: 'Confirm mobile ownership',
                desc: 'We verify your mobile number through a secure government channel.',
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-[14px] items-start shrink-0 w-full">
                <div className="bg-[#f4f5f3] flex items-center justify-center rounded-[16px] shrink-0 size-[32px]">
                  <p className="text-[14px] leading-[23px] text-[#003e52] text-center whitespace-nowrap" style={saira}>{step.num}</p>
                </div>
                <div className="flex flex-1 min-w-0 flex-col gap-[2px] items-start text-[#1d2d33] text-[14px] leading-[23px]" style={saira}>
                  <p className="w-full">{step.title}</p>
                  <p className="w-full">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: secure verification panel */}
        <div className="bg-[#f4f5f3] flex flex-col gap-[14px] items-start p-[24px] rounded-[14px] shrink-0 w-[340px]">
          <div className="bg-white flex items-center justify-center rounded-[12px] shrink-0 size-[44px]">
            <div className="overflow-hidden shrink-0 size-[22px] relative">
              <div className="absolute inset-[8.33%_16.67%]">
                <img alt="" className="block max-w-none size-full" src="/taas/icon-shield-verify.svg" />
              </div>
            </div>
          </div>
          <p className="text-[16px] leading-[22px] text-[#1d2d33] whitespace-nowrap" style={saira}>
            Secure verification
          </p>
          <p className="text-[14px] leading-[23px] text-[#1d2d33] w-full" style={saira}>
            Your information is encrypted and shared only with authorized government services to verify your identity.
          </p>
          <div className="bg-[rgba(48,63,70,0.2)] h-px shrink-0 w-full" />
          <div className="bg-[#f4f5f3] flex gap-[6px] items-center px-[10px] py-[4px] rounded-[999px] shrink-0 text-[#0b7a4b] text-[12px] whitespace-nowrap">
            <p style={{ fontFamily: "'Almarai', sans-serif", lineHeight: '21px' }}>نفاذ</p>
            <p style={saira}>Nafath</p>
          </div>
          <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] w-full" style={saira}>
            Verification powered by Nafath — the national unified access platform.
          </p>
        </div>
      </div>
    </TaasPageLayout>
  );
}
