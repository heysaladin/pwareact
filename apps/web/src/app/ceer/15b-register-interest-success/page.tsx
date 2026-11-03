'use client';
import Link from 'next/link';
import TaasPageLayout from '../_components/TaasPageLayout';

const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

export default function RegisterInterestSuccessPage() {
  const footer = (
    <div className="flex gap-[12px] items-center justify-center w-full">
      {/* Back to product list */}
      <Link
        href="/ceer"
        className="flex gap-[6px] items-center justify-center min-w-[120px] px-[18px] py-[12px] rounded-[8px] relative overflow-hidden"
        style={{ border: '2px solid rgba(255,255,255,0.12)', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)' }}
      >
        <span aria-hidden className="absolute inset-0 bg-[#003e52] rounded-[8px] pointer-events-none" />
        <span className="relative text-[12px] leading-[19px] uppercase text-white" style={oxanium}>
          Back to the product list
        </span>
        <span
          aria-hidden
          className="absolute inset-0 rounded-[8px] pointer-events-none"
          style={{ boxShadow: 'inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05)' }}
        />
      </Link>
    </div>
  );

  return (
    <TaasPageLayout currentStep={5} footer={footer}>
      {/* Success centered content */}
      <div className="flex flex-[1_0_0] flex-col gap-[20px] items-center justify-center min-h-[400px] w-full overflow-hidden">
        {/* Illustration */}
        <div className="relative shrink-0 size-[180px]">
          <img
            alt=""
            className="absolute block max-w-none"
            style={{ width: 188, height: 188, left: 4.5, top: 5 }}
            src="/taas/completion-request.svg"
          />
        </div>

        {/* Headline */}
        <p
          className="text-[32px] leading-[36px] uppercase text-center text-[#1d2d33] w-[620px]"
          style={oxanium}
        >
          Your interest has been successfully registered!
        </p>

        {/* Body */}
        <p
          className="text-[16px] leading-[22px] text-center text-[#1d2d33] w-[520px]"
          style={saira}
        >
          Your interest has been registered in the Tamawal system. Thank you for registering your interest! We will keep you updated.
        </p>
      </div>
    </TaasPageLayout>
  );
}
