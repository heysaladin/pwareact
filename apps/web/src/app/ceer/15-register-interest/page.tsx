'use client';
import Link from 'next/link';
import TaasPageLayout from '../_components/TaasPageLayout';

const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

function InputField({
  label,
  placeholder,
  hint,
}: {
  label: string;
  placeholder: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-[6px] w-full">
      <div className="flex gap-[2px] items-start text-[14px] leading-[23px]" style={saira}>
        <span style={{ color: '#1d2d33' }}>{label}</span>
        <span style={{ color: '#d92d20' }}>*</span>
      </div>
      <div
        className="bg-white flex gap-[8px] items-center px-[14px] py-[10px] rounded-[8px] w-full"
        style={{ border: '1px solid rgba(48,63,70,0.2)', boxShadow: '0px 1px 1px rgba(10,13,18,0.05)' }}
      >
        <p
          className="flex-1 text-[16px] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap"
          style={{ ...saira, color: 'rgba(48,63,70,0.7)' }}
        >
          {placeholder}
        </p>
        {hint === 'help' && (
          <img alt="" className="shrink-0 size-[16px]" src="/taas/icon-circle-help.svg" />
        )}
      </div>
      {hint && hint !== 'help' && (
        <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>{hint}</p>
      )}
    </div>
  );
}

export default function RegisterInterestPage() {
  const footer = (
    <>
      {/* Left: lock note */}
      <div className="flex gap-[8px] items-center shrink-0">
        <img alt="" className="shrink-0 size-[16px]" src="/taas/icon-lock.svg" />
        <p className="text-[12px] leading-[16px] whitespace-nowrap" style={{ ...saira, color: 'rgba(48,63,70,0.7)' }}>
          We only use your details to notify you when this offer becomes available.
        </p>
      </div>

      {/* Right: buttons */}
      <div className="flex gap-[12px] items-center shrink-0">
        {/* Cancel */}
        <Link
          href="/ceer/01-preliminary-offers"
          className="flex gap-[6px] items-center justify-center min-w-[120px] px-[18px] py-[12px] rounded-[8px] relative overflow-hidden"
          style={{ border: '1px solid rgba(48,63,70,0.2)', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)' }}
        >
          <span aria-hidden className="absolute inset-0 bg-white rounded-[8px] pointer-events-none" />
          <span className="relative text-[12px] leading-[19px] uppercase text-[#1d2d33]" style={oxanium}>
            Cancel
          </span>
          <span
            aria-hidden
            className="absolute inset-0 rounded-[8px] pointer-events-none"
            style={{ boxShadow: 'inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05)' }}
          />
        </Link>

        {/* Register your interest */}
        <Link
          href="/ceer/15b-register-interest-success"
          className="flex gap-[6px] items-center justify-center min-w-[120px] px-[18px] py-[12px] rounded-[8px] relative overflow-hidden"
          style={{ border: '2px solid rgba(255,255,255,0.12)', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)' }}
        >
          <span aria-hidden className="absolute inset-0 bg-[#003e52] rounded-[8px] pointer-events-none" />
          <span className="relative text-[12px] leading-[19px] uppercase text-white" style={oxanium}>
            Register your interest
          </span>
          <span
            aria-hidden
            className="absolute inset-0 rounded-[8px] pointer-events-none"
            style={{ boxShadow: 'inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05)' }}
          />
        </Link>
      </div>
    </>
  );

  return (
    <TaasPageLayout currentStep={5} footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] items-start w-full shrink-0 text-[#1d2d33]">
        <p className="text-[32px] leading-[36px] uppercase w-full" style={oxanium}>
          Register your interest
        </p>
        <p className="text-[16px] leading-[22px] w-full" style={saira}>
          This financial institution will join Tamawal&apos;s partners soon. Register your interest and we&apos;ll let you know as soon as financing is available.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="flex gap-[24px] items-start w-full shrink-0">

        {/* Left: form */}
        <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-0">

          {/* National ID */}
          <div className="flex flex-col gap-[6px] w-full">
            <div className="flex gap-[2px] items-start text-[14px] leading-[23px]" style={saira}>
              <span style={{ color: '#1d2d33' }}>National ID / Iqama number</span>
              <span style={{ color: '#d92d20' }}>*</span>
            </div>
            <div
              className="bg-white flex gap-[8px] items-center px-[14px] py-[10px] rounded-[8px] w-full"
              style={{ border: '1px solid rgba(48,63,70,0.2)', boxShadow: '0px 1px 1px rgba(10,13,18,0.05)' }}
            >
              <p
                className="flex-1 text-[16px] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap"
                style={{ ...saira, color: 'rgba(48,63,70,0.7)' }}
              >
                1XXXXXXXXX
              </p>
              <img alt="" className="shrink-0 size-[16px]" src="/taas/icon-circle-help.svg" />
            </div>
            <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>
              Must match the ID registered with Absher.
            </p>
          </div>

          {/* City + Sector row */}
          <div className="flex gap-[20px] items-start w-full">
            <InputField label="City" placeholder="Select city" />
            <InputField label="Sector" placeholder="Select sector" />
          </div>

          {/* Entity + Job title row */}
          <div className="flex gap-[20px] items-start w-full">
            <InputField label="Entity" placeholder="Select your employer" />
            <InputField label="Job title" placeholder="Select job title" />
          </div>

          {/* Salary bank */}
          <InputField label="Salary bank" placeholder="Select your salary bank" />
        </div>

        {/* Right: secure verification panel */}
        <div
          className="flex flex-col gap-[14px] items-start p-[24px] rounded-[14px] shrink-0 w-[340px]"
          style={{ backgroundColor: '#f4f5f3' }}
        >
          {/* Shield icon */}
          <div className="bg-white flex items-center justify-center rounded-[12px] shrink-0 size-[44px]">
            <img alt="" className="size-[22px] object-contain" src="/taas/icon-shield.svg" />
          </div>

          {/* Product name */}
          <p className="text-[16px] leading-[22px] text-[#1d2d33]" style={saira}>
            Microfinance for Employee &amp; their Family Daily Needs
          </p>
          <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>
            by Bank Albilad
          </p>

          {/* Divider */}
          <div className="h-px w-full" style={{ backgroundColor: 'rgba(48,63,70,0.2)' }} />

          {/* Badge */}
          <div
            className="flex gap-[6px] items-center px-[10px] py-[4px] rounded-[999px]"
            style={{ backgroundColor: '#f4f5f3' }}
          >
            <p className="text-[12px] leading-[16px] text-[#db6903]" style={saira}>
              Joining Tamawal soon
            </p>
          </div>

          {/* Offer rows */}
          <div className="flex flex-col gap-[10px] items-start w-full text-[#1d2d33]">
            <div className="flex items-center justify-between w-full">
              <p className="text-[14px] leading-[23px] w-[58px]" style={saira}>APR from</p>
              <p className="text-[16px] leading-[22px] whitespace-nowrap" style={saira}>5.66%</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="text-[14px] leading-[23px] w-[100px]" style={saira}>Installment from</p>
              <p className="text-[16px] leading-[22px] whitespace-nowrap" style={saira}>⃁ 1,250 / mo</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="text-[14px] leading-[23px] w-[95px]" style={saira}>Financing up to</p>
              <p className="text-[16px] leading-[22px] whitespace-nowrap" style={saira}>⃁ 250,000</p>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-[12px] leading-[16px] w-full" style={{ ...saira, color: 'rgba(48,63,70,0.7)' }}>
            Final offer, rate and eligibility are confirmed by the lender once it joins Tamawal.
          </p>
        </div>
      </div>
    </TaasPageLayout>
  );
}
