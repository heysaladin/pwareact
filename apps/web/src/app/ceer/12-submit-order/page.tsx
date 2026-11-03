'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import TaasPageLayout from '../_components/TaasPageLayout';

const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

const orderDetails = [
  ['Customer name', 'محمد عبدالله الغامدي'],
  ['National ID', '1082XXXXXXX'],
  ['Mobile', '+966 5X XXX XXXX'],
  ['Vehicle', 'CEER EXOBOT SUV – Premium AWD 2026'],
  ['Colour', 'Quantum Grey'],
  ['Bank', 'Saudi National Bank (SNB)'],
  ['APR', '4.89%'],
  ['Monthly payment', 'SAR 3,648'],
  ['Down payment', 'SAR 45,750'],
  ['Financed amount', 'SAR 183,000'],
  ['Tenure', '60 months'],
  ['Total payable', 'SAR 218,880'],
  ['Order reference', 'AELG-2026-05-18-1123'],
];

export default function ConfirmOrderPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit() {
    if (!agreed || submitting) return;
    setSubmitting(true);
    setTimeout(() => router.push('/ceer/13-submit-success'), 1200);
  }

  const footer = (
    <>
      <div className="flex gap-[8px] items-center shrink-0">
        <img alt="" className="size-[16px]" src="/taas/icon-lock.svg" />
        <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)]" style={saira}>
          Your information is encrypted and never shared without your consent.
        </p>
      </div>
      <div className="flex gap-[12px] items-center shrink-0">
        <Link href="/ceer/11-offer-details" className="border border-[rgba(48,63,70,0.2)] flex items-center px-[18px] py-[10px] rounded-[8px] text-[14px] text-[#1d2d33]" style={saira}>
          ← Back
        </Link>
        <button
          onClick={handleSubmit}
          disabled={!agreed || submitting}
          className="border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center px-[18px] py-[12px] rounded-[8px] shrink-0 relative overflow-hidden disabled:opacity-40"
        >
          <div className="absolute inset-0 bg-[#003e52] rounded-[8px]" />
          <p className="relative text-[12px] leading-[19px] text-white uppercase" style={oxanium}>
            {submitting ? 'Submitting…' : 'Submit order  →'}
          </p>
        </button>
      </div>
    </>
  );

  return (
    <TaasPageLayout currentStep={6} footer={footer}>
      {/* Title */}
      <div className="flex flex-col gap-[8px] items-start w-full shrink-0">
        <p className="text-[32px] leading-[36px] uppercase text-[#1d2d33]" style={oxanium}>
          Review &amp; confirm order
        </p>
        <p className="text-[16px] leading-[22px] text-[rgba(48,63,70,0.7)]" style={saira}>
          Please review all details carefully before submitting. The bank will begin processing upon submission.
        </p>
      </div>

      {/* Order details table */}
      <div className="border border-[rgba(48,63,70,0.2)] overflow-hidden rounded-[14px] w-full shrink-0">
        <div className="border-b border-[rgba(48,63,70,0.2)] px-[24px] py-[16px]">
          <p className="text-[20px] leading-[21px] uppercase text-[#1d2d33]" style={oxanium}>Order details</p>
        </div>
        <div className="grid grid-cols-2">
          {orderDetails.map(([k, v], i) => (
            <div
              key={k}
              className={`flex items-center justify-between px-[24px] py-[12px] ${i % 2 === 0 ? 'border-r border-[rgba(48,63,70,0.2)]' : ''} ${i < orderDetails.length - 2 ? 'border-b border-[rgba(48,63,70,0.2)]' : ''}`}
            >
              <p className="text-[14px] leading-[23px] text-[rgba(48,63,70,0.7)]" style={saira}>{k}</p>
              <p className="text-[14px] leading-[23px] text-[#1d2d33] text-right" style={saira}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Declaration */}
      <div className="border border-[rgba(48,63,70,0.2)] flex flex-col gap-[16px] items-start p-[24px] rounded-[14px] w-full shrink-0">
        <p className="text-[20px] leading-[21px] uppercase text-[#1d2d33]" style={oxanium}>Declaration &amp; consent</p>
        <p className="text-[14px] leading-[22px] text-[rgba(48,63,70,0.7)]" style={saira}>
          By submitting this order, I confirm all information provided is accurate and complete. I consent to Saudi National Bank processing my application in accordance with their terms, conditions, and applicable Saudi Arabian regulations. I acknowledge this is a binding financing request subject to final credit approval.
        </p>
        <label className="flex gap-[12px] items-start cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={e => setAgreed(e.target.checked)}
            className="mt-[3px] size-[16px] shrink-0 cursor-pointer accent-[#003e52]"
          />
          <p className="text-[14px] leading-[22px] text-[#1d2d33]" style={saira}>
            I have read, understood and agree to the{' '}
            <a href="#" className="text-[#003e52] underline">Terms &amp; Conditions</a>,{' '}
            <a href="#" className="text-[#003e52] underline">Product Disclosure</a> and{' '}
            <a href="#" className="text-[#003e52] underline">Schedule of Charges</a>.
          </p>
        </label>
      </div>
    </TaasPageLayout>
  );
}
