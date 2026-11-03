'use client';
import { useState } from 'react';
import Link from 'next/link';
import TaasPageLayout from '../_components/TaasPageLayout';

const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

const offers = [
  {
    id: 'snb',
    bankName: 'Saudi National Bank',
    logo: '/taas/bank-snb-logo.png',
    apr: '4.89%',
    monthly: '3,648',
    tenure: '60 months',
    totalPayable: '218,880',
    features: ['No processing fee', 'Early settlement available', 'Free comprehensive insurance'],
    recommended: true,
  },
  {
    id: 'alinma',
    bankName: 'Alinma Bank',
    logo: '/taas/bank-alinma-logo.png',
    apr: '5.19%',
    monthly: '3,755',
    tenure: '60 months',
    totalPayable: '225,300',
    features: ['Flexible payment options', 'No processing fee', 'Early settlement available'],
    recommended: false,
  },
  {
    id: 'riyad',
    bankName: 'Riyad Bank',
    logo: '/taas/bank-riyad-logo.png',
    apr: '5.49%',
    monthly: '3,697',
    tenure: '60 months',
    totalPayable: '221,820',
    features: ['Fast approval', 'Free comprehensive insurance', 'Digital account management'],
    recommended: false,
  },
];

export default function PreliminaryOffersPage() {
  const [selected, setSelected] = useState('snb');

  const footer = (
    <>
      <div className="flex gap-[8px] items-center shrink-0">
        <img alt="" className="size-[16px]" src="/taas/icon-info.svg" />
        <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] whitespace-nowrap" style={saira}>
          Preliminary offers are based on the details you entered. Final offers are confirmed after identity verification.
        </p>
      </div>
      <div className="flex gap-[12px] items-center shrink-0">
        <Link
          href="/ceer/00-explore-financing"
          className="border border-[rgba(48,63,70,0.2)] flex gap-[6px] items-center justify-center min-w-[120px] px-[18px] py-[12px] rounded-[8px] shrink-0 relative overflow-hidden bg-white"
        >
          <p className="relative text-[12px] leading-[19px] text-[#1d2d33] uppercase whitespace-nowrap" style={oxanium}>
            Back
          </p>
        </Link>
        <Link
          href="/ceer/02-what-happens-next"
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
    <TaasPageLayout currentStep={1} footer={footer}>
      {/* Header row: title + register interest button */}
      <div className="flex gap-[24px] items-start w-full shrink-0">
        <div className="flex flex-col gap-[8px] items-start flex-1 min-w-0 text-[#1d2d33]">
          <p className="text-[32px] leading-[36px] uppercase w-full" style={oxanium}>
            View preliminary offers
          </p>
          <p className="text-[16px] leading-[22px] w-full" style={saira}>
            Based on the details you provided, here are financing options for your EXOBOT SUV. Compare and pick the one that suits you best.
          </p>
        </div>
        <Link
          href="/ceer/15-register-interest"
          className="bg-white border-[1.5px] border-[#003e52] flex gap-[6px] items-center justify-center px-[16px] py-[12px] rounded-[8px] shrink-0 min-w-[90px] overflow-hidden"
        >
          <p className="text-[12px] leading-[19px] text-[#003e52] uppercase flex-1 min-w-0" style={oxanium}>
            Register interest offers
          </p>
          <img alt="" src="/taas/icon-chevron-right.svg" className="size-[20px] shrink-0" />
        </Link>
      </div>

      {/* Your details bar */}
      <div className="bg-[#f4f5f3] border border-[rgba(48,63,70,0.2)] flex items-center justify-between px-[20px] py-[14px] rounded-[12px] shrink-0 w-full">
        <div className="flex gap-[32px] items-center shrink-0 text-[#1d2d33] whitespace-nowrap" style={saira}>
          {[
            { label: 'Monthly salary', value: '⃁ 25,000' },
            { label: 'Commitments', value: '⃁ 3,500' },
            { label: 'Down payment', value: '20% · ⃁ 45,750' },
            { label: 'Term', value: '60 months' },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-[2px] items-start shrink-0">
              <p className="text-[12px] leading-[16px]" style={saira}>{label}</p>
              <p className="text-[14px] leading-[23px]" style={saira}>{value}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-[6px] items-center shrink-0">
          <img alt="" className="size-[14px]" src="/taas/icon-edit.svg" />
          <p className="text-[14px] leading-[23px] text-[#003e52] whitespace-nowrap" style={saira}>Edit details</p>
        </div>
      </div>

      {/* Count + sort */}
      <div className="flex items-center justify-between shrink-0 w-full">
        <p className="text-[16px] leading-[22px] text-[#1d2d33] whitespace-nowrap" style={saira}>
          3 preliminary offers
        </p>
        <div className="flex gap-[6px] items-center shrink-0">
          <img alt="" className="size-[14px]" src="/taas/icon-sliders.svg" />
          <p className="text-[12px] leading-[16px] text-[#1d2d33] whitespace-nowrap" style={saira}>
            Sorted by lowest monthly payment
          </p>
        </div>
      </div>

      {/* Offer rows */}
      <div className="flex flex-col gap-[14px] items-start shrink-0 w-full">
        {offers.map((offer) => {
          const isSelected = selected === offer.id;
          return (
            <button
              key={offer.id}
              onClick={() => setSelected(offer.id)}
              className="flex gap-[20px] items-center px-[20px] py-[22px] rounded-[14px] shrink-0 w-full text-left relative"
              style={isSelected
                ? { backgroundColor: '#f4f5f3', border: '1.5px solid #003e52' }
                : { backgroundColor: 'white', border: '1px solid rgba(48,63,70,0.2)' }
              }
            >
              {/* Recommended badge */}
              {offer.recommended && (
                <div className="absolute bg-[#003e52] flex items-center left-[18.5px] px-[10px] py-[3px] rounded-[999px] top-[-11.5px]">
                  <p className="text-[8px] leading-[13px] text-white uppercase whitespace-nowrap font-bold" style={{ fontFamily: "'Oxanium', sans-serif" }}>
                    RECOMMENDED
                  </p>
                </div>
              )}

              {/* Radio */}
              <div
                className="relative rounded-[10px] shrink-0 size-[20px]"
                style={isSelected
                  ? { backgroundColor: 'white', border: '6px solid #003e52' }
                  : { backgroundColor: 'white', border: '1.5px solid rgba(48,63,70,0.2)' }
                }
              />

              {/* Bank logo + name */}
              <div className="flex flex-col gap-[2px] items-start shrink-0 w-[120px]">
                <div className="h-[44px] overflow-hidden shrink-0 w-[110px] relative">
                  <img alt={offer.bankName} className="absolute inset-0 max-w-none object-contain size-full" src={offer.logo} />
                </div>
                <p className="text-[12px] leading-[16px] text-[#1d2d33] whitespace-nowrap" style={saira}>{offer.bankName}</p>
              </div>

              {/* Metrics */}
              <div className="flex flex-1 min-w-0 items-center justify-between whitespace-nowrap">
                <div className="flex flex-col gap-[4px] items-start shrink-0 text-[#1d2d33]" style={saira}>
                  <p className="text-[12px] leading-[16px]">APR</p>
                  <p className="text-[16px] leading-[22px]">{offer.apr}</p>
                </div>
                <div className="flex flex-col gap-[4px] items-start shrink-0">
                  <p className="text-[12px] leading-[16px] text-[#1d2d33]" style={saira}>Monthly payment</p>
                  <p className="text-[20px] leading-[21px] text-[#003e52] uppercase" style={oxanium}>⃁ {offer.monthly}</p>
                </div>
                <div className="flex flex-col gap-[4px] items-start shrink-0 text-[#1d2d33]" style={saira}>
                  <p className="text-[12px] leading-[16px]">Tenure</p>
                  <p className="text-[16px] leading-[22px]">{offer.tenure}</p>
                </div>
                <div className="flex flex-col gap-[4px] items-start shrink-0 text-[#1d2d33]" style={saira}>
                  <p className="text-[12px] leading-[16px]">Total payable</p>
                  <p className="text-[16px] leading-[22px]">⃁ {offer.totalPayable}</p>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-[6px] items-start shrink-0 w-[190px]">
                {offer.features.map((feat) => (
                  <div key={feat} className="flex gap-[6px] items-center shrink-0">
                    <div className="overflow-hidden shrink-0 size-[14px] relative">
                      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                        <img alt="" className="block max-w-none size-full" src="/taas/icon-check-teal.svg" />
                      </div>
                    </div>
                    <p className="text-[12px] leading-[16px] text-[#1d2d33] whitespace-nowrap" style={saira}>{feat}</p>
                  </div>
                ))}
              </div>

              {/* View details */}
              <div className="flex gap-[4px] items-center shrink-0">
                <p className="text-[14px] leading-[23px] text-[#003e52] whitespace-nowrap" style={saira}>View details</p>
                <div className="overflow-hidden shrink-0 size-[14px] relative">
                  <div className="absolute inset-[20.83%]">
                    <img alt="" className="block max-w-none size-full" src="/taas/icon-arrow-right.svg" />
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </TaasPageLayout>
  );
}
