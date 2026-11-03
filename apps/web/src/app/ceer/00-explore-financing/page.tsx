'use client';
import { useState } from 'react';
import Link from 'next/link';
import TaasPageLayout from '../_components/TaasPageLayout';

const PRICE = 228750;
const TERMS = [24, 36, 48, 60];

function fmt(n: number) {
  return 'SAR ' + Math.round(n).toLocaleString('en-US');
}

function calcMonthly(fin: number, months: number) {
  const r = 0.0529 / 12;
  return fin * r / (1 - Math.pow(1 + r, -months));
}

const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

export default function ExploreFinancingPage() {
  const [dp, setDp] = useState(20);
  const [term, setTerm] = useState(60);

  const dpAmt = PRICE * dp / 100;
  const fin = PRICE - dpAmt;
  const monthly = calcMonthly(fin, term);
  const trackFill = `linear-gradient(to right, #003e52 0%, #003e52 ${dp * 2}%, rgba(48,63,70,0.15) ${dp * 2}%)`;

  const footer = (
    <>
      <div className="flex gap-[8px] items-center shrink-0">
        <img alt="" className="size-[16px]" src="/taas/icon-lock.svg" />
        <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] whitespace-nowrap" style={saira}>
          Your information is encrypted and never shared without your consent.
        </p>
      </div>
      <Link
        href="/ceer/01-preliminary-offers"
        className="border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center min-w-[120px] px-[18px] py-[12px] rounded-[8px] shrink-0 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#003e52] rounded-[8px]" />
        <p className="relative text-[12px] leading-[19px] text-white uppercase whitespace-pre" style={oxanium}>
          View indicative offers  →
        </p>
      </Link>
    </>
  );

  return (
    <TaasPageLayout currentStep={1} footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] items-start w-full shrink-0 text-[#1d2d33]">
        <p className="text-[32px] leading-[36px] uppercase w-full" style={oxanium}>
          Explore your financing options
        </p>
        <p className="text-[16px] leading-[22px] w-full" style={saira}>
          Provide a few details to get an indicative estimate tailored to you.
        </p>
      </div>

      {/* Inputs */}
      <div className="flex gap-[20px] items-start w-full shrink-0">
        {/* Monthly salary */}
        <div className="flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-0">
          <div className="flex gap-[2px] items-start text-[14px] leading-[23px]" style={saira}>
            <p className="text-[#1d2d33]">Monthly salary</p>
            <p className="text-[#d92d20]">*</p>
          </div>
          <div className="bg-white border border-[rgba(48,63,70,0.2)] flex items-start rounded-[8px] w-full shadow-[0px_1px_1px_rgba(10,13,18,0.05)]">
            <div className="flex items-center pl-[14px] pr-[12px] py-[10px] rounded-bl-[8px] rounded-tl-[8px] shrink-0">
              <p className="text-[16px] leading-[22px] text-[#1d2d33] whitespace-nowrap" style={saira}>SAR</p>
            </div>
            <div className="bg-white border border-[rgba(48,63,70,0.2)] flex flex-[1_0_0] gap-[8px] items-center overflow-hidden px-[14px] py-[10px] rounded-br-[8px] rounded-tr-[8px] self-stretch">
              <input type="text" placeholder="Enter amount" className="flex-1 min-w-0 bg-transparent border-none outline-none text-[16px] leading-[22px] text-[rgba(48,63,70,0.7)]" style={saira} />
            </div>
          </div>
        </div>
        {/* Commitments */}
        <div className="flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-0">
          <div className="flex gap-[2px] items-start text-[14px] leading-[23px]" style={saira}>
            <p className="text-[#1d2d33]">Existing monthly commitments</p>
            <p className="text-[#d92d20]">*</p>
          </div>
          <div className="bg-white border border-[rgba(48,63,70,0.2)] flex items-start rounded-[8px] w-full shadow-[0px_1px_1px_rgba(10,13,18,0.05)]">
            <div className="flex items-center pl-[14px] pr-[12px] py-[10px] rounded-bl-[8px] rounded-tl-[8px] shrink-0">
              <p className="text-[16px] leading-[22px] text-[#1d2d33] whitespace-nowrap" style={saira}>SAR</p>
            </div>
            <div className="bg-white border border-[rgba(48,63,70,0.2)] flex flex-[1_0_0] gap-[8px] items-center overflow-hidden px-[14px] py-[10px] rounded-br-[8px] rounded-tr-[8px] self-stretch">
              <input type="text" placeholder="Enter amount" className="flex-1 min-w-0 bg-transparent border-none outline-none text-[16px] leading-[22px] text-[rgba(48,63,70,0.7)]" style={saira} />
              <img alt="" className="size-[16px] shrink-0" src="/taas/icon-circle-help.svg" />
            </div>
          </div>
        </div>
      </div>

      {/* Down payment */}
      <div className="flex flex-col gap-[12px] items-start w-full shrink-0">
        <div className="flex items-center justify-between w-full shrink-0">
          <p className="text-[14px] leading-[23px] text-[#1d2d33] whitespace-nowrap" style={saira}>Down payment</p>
          <div className="flex gap-[8px] items-center shrink-0">
            <div className="border border-[rgba(48,63,70,0.2)] flex items-center px-[12px] py-[6px] rounded-[8px]">
              <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>{dp}%</p>
            </div>
            <div className="border border-[rgba(48,63,70,0.2)] flex items-center px-[12px] py-[6px] rounded-[8px]">
              <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>{fmt(dpAmt)}</p>
            </div>
          </div>
        </div>
        <input
          type="range" min={0} max={50} step={5} value={dp}
          onChange={e => setDp(+e.target.value)}
          className="w-full h-[20px] appearance-none cursor-pointer outline-none"
          style={{ background: 'transparent' }}
        />
        <style>{`
          input[type=range]::-webkit-slider-runnable-track { height: 4px; border-radius: 999px; background: ${trackFill}; }
          input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: #003e52; cursor: pointer; margin-top: -8px; border: 3px solid #d7dad4; box-shadow: 0 0 0 1.5px #003e52; }
          input[type=range]::-moz-range-track { height: 4px; border-radius: 999px; background: ${trackFill}; }
          input[type=range]::-moz-range-thumb { width: 20px; height: 20px; border-radius: 50%; background: #003e52; border: 3px solid #d7dad4; box-shadow: 0 0 0 1.5px #003e52; cursor: pointer; }
        `}</style>
        <div className="flex items-center justify-between w-full text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)]" style={saira}>
          {['0%','10%','20%','30%','40%','50%'].map(v => <span key={v}>{v}</span>)}
        </div>
      </div>

      {/* Financing term */}
      <div className="flex flex-col gap-[12px] items-start w-full shrink-0">
        <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>Financing term</p>
        <div className="flex gap-[12px] items-center w-full shrink-0">
          {TERMS.map(m => (
            <button
              key={m}
              onClick={() => setTerm(m)}
              className="flex flex-[1_0_0] h-[48px] items-center justify-center min-w-0 rounded-[10px]"
              style={term === m
                ? { backgroundColor: '#f4f5f3', border: '1.5px solid #003e52' }
                : { backgroundColor: 'white', border: '1px solid rgba(48,63,70,0.2)' }
              }
            >
              <p
                className="text-[14px] leading-[23px] text-center whitespace-nowrap"
                style={{ ...saira, color: term === m ? '#003e52' : '#1d2d33' }}
              >
                {m} months
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Estimate box */}
      <div className="border border-[rgba(48,63,70,0.2)] flex items-center overflow-hidden rounded-[14px] w-full shrink-0">
        <div className="flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-0 p-[24px] text-[#1d2d33] whitespace-nowrap">
          <p className="text-[20px] leading-[21px] uppercase" style={oxanium}>Indicative estimate</p>
          {[
            ['Price (incl. VAT)', fmt(PRICE)],
            ['Down payment (' + dp + '%)', '− ' + fmt(dpAmt)],
            ['Amount to finance', fmt(fin)],
          ].map(([l, v]) => (
            <div key={l} className="flex items-center justify-between text-[14px] leading-[23px] w-full" style={saira}>
              <p>{l}</p><p>{v}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#f4f5f3] flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-w-0 p-[24px]">
          <p className="text-[14px] leading-[23px] text-[#1d2d33] whitespace-nowrap" style={saira}>Estimated monthly payment from</p>
          <div className="flex gap-[8px] items-end whitespace-nowrap">
            <p className="text-[32px] leading-[36px] text-[#003e52] uppercase" style={oxanium}>{fmt(monthly)}</p>
            <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>/ month</p>
          </div>
          <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] w-full" style={saira}>
            Indicative only — final offers depend on your eligibility.
          </p>
        </div>
      </div>
    </TaasPageLayout>
  );
}
