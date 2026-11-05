'use client';
import { useState } from 'react';
import Link from 'next/link';
import TaasPageLayout from '../_components/TaasPageLayout';

const PRICE = 228750;
const RATE = 0.005;

function fmt(n: number) {
  return 'SAR ' + Math.round(n).toLocaleString('en-US');
}

function pmt(principal: number, months: number) {
  return principal * RATE / (1 - Math.pow(1 + RATE, -months));
}

function pvOf(amount: number, months: number) {
  return amount / Math.pow(1 + RATE, months);
}

function sliderFill(val: number, min: number, max: number) {
  const pct = ((val - min) / (max - min)) * 100;
  return `linear-gradient(to right, #003e52 0%, #003e52 ${pct}%, rgba(48,63,70,0.15) ${pct}%)`;
}

function sliderCss(cls: string, fill: string) {
  return `
    .${cls}::-webkit-slider-runnable-track { height: 4px; border-radius: 999px; background: ${fill}; }
    .${cls}::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: #003e52; cursor: pointer; margin-top: -8px; border: 3px solid #d7dad4; box-shadow: 0 0 0 1.5px #003e52; }
    .${cls}::-moz-range-track { height: 4px; border-radius: 999px; background: ${fill}; }
    .${cls}::-moz-range-thumb { width: 20px; height: 20px; border-radius: 50%; background: #003e52; border: 3px solid #d7dad4; box-shadow: 0 0 0 1.5px #003e52; cursor: pointer; }
  `;
}

const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

const PRODUCT_TYPES = [
  { id: 'installment', label: 'Monthly installment', icon: '/taas/icon-product-installment.svg' },
  { id: 'balloon',     label: 'Balloon',              icon: '/taas/icon-product-balloon.svg' },
  { id: '5050',        label: '50/50',                icon: '/taas/icon-product-5050.svg' },
  { id: 'lease',       label: 'Lease',                icon: '/taas/icon-product-lease.svg' },
];

function SliderRow({
  label, val, setVal, min, max, step, cls, ticks,
}: {
  label: string; val: number; setVal: (v: number) => void;
  min: number; max: number; step: number; cls: string; ticks: string[];
}) {
  const amt = PRICE * val / 100;
  const fill = sliderFill(val, min, max);
  return (
    <div className="flex flex-col gap-[12px] items-start w-full shrink-0">
      <div className="flex items-center justify-between w-full shrink-0">
        <p className="text-[14px] leading-[23px] text-[#1d2d33] whitespace-nowrap" style={saira}>{label}</p>
        <div className="flex gap-[8px] items-center shrink-0">
          <div className="border border-[rgba(48,63,70,0.2)] flex items-center px-[12px] py-[6px] rounded-[8px]">
            <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>{val}%</p>
          </div>
          <div className="border border-[rgba(48,63,70,0.2)] flex items-center px-[12px] py-[6px] rounded-[8px]">
            <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>{fmt(amt)}</p>
          </div>
        </div>
      </div>
      <style>{sliderCss(cls, fill)}</style>
      <input
        type="range" min={min} max={max} step={step} value={val}
        onChange={e => setVal(+e.target.value)}
        className={`${cls} w-full h-[20px] appearance-none cursor-pointer outline-none`}
        style={{ background: 'transparent' }}
      />
      <div className="flex items-center justify-between w-full text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)]" style={saira}>
        {ticks.map(v => <span key={v}>{v}</span>)}
      </div>
    </div>
  );
}

function TermRow({ terms, term, setTerm }: { terms: number[]; term: number; setTerm: (v: number) => void }) {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full shrink-0">
      <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>Financing term</p>
      <div className="flex gap-[12px] items-center w-full shrink-0">
        {terms.map(m => (
          <button
            key={m}
            onClick={() => setTerm(m)}
            className="flex flex-[1_0_0] h-[48px] items-center justify-center min-w-0 rounded-[10px]"
            style={term === m
              ? { backgroundColor: '#f4f5f3', border: '1.5px solid #003e52' }
              : { backgroundColor: 'white', border: '1px solid rgba(48,63,70,0.2)' }
            }
          >
            <p className="text-[14px] leading-[23px] text-center whitespace-nowrap"
              style={{ ...saira, color: term === m ? '#003e52' : '#1d2d33' }}>
              {m} months
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ExploreFinancingPage() {
  const [productType, setProductType] = useState('installment');

  // Installment
  const [dp, setDp] = useState(20);
  const [term, setTerm] = useState(60);

  // Balloon
  const [balloon, setBalloon] = useState(30);
  const [balloonTerm, setBalloonTerm] = useState(60);

  // 50/50
  const [fiftyTerm, setFiftyTerm] = useState(36);

  // Lease
  const [advance, setAdvance] = useState(10);
  const [residual, setResidual] = useState(20);
  const [leaseTerm, setLeaseTerm] = useState(60);

  // Installment calculations
  const dpAmt = PRICE * dp / 100;
  const fin = PRICE - dpAmt;
  const monthly = pmt(fin, term);

  // Balloon calculations
  const balloonAmt = PRICE * balloon / 100;
  const balloonDpAmt = PRICE * dp / 100;
  const balloonFin = PRICE - balloonDpAmt;
  const balloonMonthly = pmt(balloonFin - pvOf(balloonAmt, balloonTerm), balloonTerm);

  // 50/50 calculations
  const halfPrice = PRICE / 2;
  const fiftyProfit = halfPrice * 0.06 * fiftyTerm / 12;
  const fiftyFinal = halfPrice + fiftyProfit;

  // Lease calculations
  const advanceAmt = PRICE * advance / 100;
  const residualAmt = PRICE * residual / 100;
  const leaseBase = PRICE - advanceAmt - pvOf(residualAmt, leaseTerm);
  const leaseMonthly = pmt(leaseBase, leaseTerm);

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

      {/* Product type */}
      <div className="flex flex-col gap-[12px] items-start w-full shrink-0">
        <div className="flex gap-[8px] items-center shrink-0">
          <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>Product type</p>
          <img alt="" className="size-[18px]" src="/taas/icon-product-info.svg" />
        </div>
        <div className="flex gap-[12px] items-center w-full shrink-0">
          {PRODUCT_TYPES.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setProductType(id)}
              className="flex flex-[1_0_0] h-[48px] gap-[10px] items-center justify-center min-w-0 px-[12px] rounded-[10px]"
              style={productType === id
                ? { backgroundColor: 'white', border: '1.5px solid #003e52' }
                : { backgroundColor: 'white', border: '1px solid rgba(48,63,70,0.2)' }
              }
            >
              <img alt="" className="size-[20px] shrink-0" src={icon} />
              <p
                className="text-[14px] leading-[23px] whitespace-nowrap"
                style={{ ...saira, color: productType === id ? '#003e52' : '#1d2d33' }}
              >
                {label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* === INSTALLMENT form === */}
      {productType === 'installment' && <>
        <SliderRow label="Down payment" val={dp} setVal={setDp} min={0} max={50} step={5} cls="slider-dp"
          ticks={['0%','10%','20%','30%','40%','50%']} />
        <TermRow terms={[24,36,48,60]} term={term} setTerm={setTerm} />
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
      </>}

      {/* === BALLOON form === */}
      {productType === 'balloon' && <>
        <SliderRow label="Down payment" val={dp} setVal={setDp} min={0} max={50} step={5} cls="slider-dp"
          ticks={['0%','10%','20%','30%','40%','50%']} />
        <SliderRow label="Final balloon payment" val={balloon} setVal={setBalloon} min={10} max={40} step={5} cls="slider-balloon"
          ticks={['10%','20%','30%','40%']} />
        <TermRow terms={[24,36,48,60]} term={balloonTerm} setTerm={setBalloonTerm} />
        <div className="border border-[rgba(48,63,70,0.2)] flex items-center overflow-hidden rounded-[14px] w-full shrink-0">
          <div className="flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-0 p-[24px] text-[#1d2d33] whitespace-nowrap">
            <p className="text-[20px] leading-[21px] uppercase" style={oxanium}>Indicative estimate</p>
            {[
              ['Price (incl. VAT)', fmt(PRICE)],
              ['Down payment (' + dp + '%)', '− ' + fmt(balloonDpAmt)],
              ['Amount to finance', fmt(balloonFin)],
            ].map(([l, v]) => (
              <div key={l} className="flex items-center justify-between text-[14px] leading-[23px] w-full" style={saira}>
                <p>{l}</p><p>{v}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#f4f5f3] flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-w-0 p-[24px]">
            <p className="text-[14px] leading-[23px] text-[#1d2d33] whitespace-nowrap" style={saira}>Monthly payment from</p>
            <div className="flex gap-[8px] items-end whitespace-nowrap">
              <p className="text-[32px] leading-[36px] text-[#003e52] uppercase" style={oxanium}>{fmt(balloonMonthly)}</p>
              <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>/ month</p>
            </div>
            <div className="w-full h-px bg-[rgba(48,63,70,0.15)] my-[10px]" />
            <p className="text-[14px] leading-[23px] text-[#1d2d33] whitespace-nowrap" style={saira}>Final balloon payment</p>
            <p className="text-[20px] leading-[21px] text-[#003e52] uppercase" style={oxanium}>{fmt(balloonAmt)}</p>
            <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] w-full" style={saira}>
              Indicative only — final offers depend on your eligibility.
            </p>
          </div>
        </div>
      </>}

      {/* === 50/50 form === */}
      {productType === '5050' && <>
        <div className="flex flex-col gap-[12px] items-start w-full shrink-0">
          <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>Payment split</p>
          <div className="flex gap-[12px] items-stretch w-full shrink-0">
            <div className="flex flex-[1_0_0] flex-col gap-[6px] items-start p-[16px] rounded-[12px] border border-[rgba(48,63,70,0.2)] bg-white">
              <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)]" style={saira}>Pay today</p>
              <p className="text-[20px] leading-[21px] text-[#003e52] uppercase" style={oxanium}>{fmt(halfPrice)}</p>
              <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)]" style={saira}>50% of vehicle price</p>
            </div>
            <div className="flex flex-[1_0_0] flex-col gap-[6px] items-start p-[16px] rounded-[12px] border border-[rgba(48,63,70,0.2)] bg-white">
              <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)]" style={saira}>Pay at end of term</p>
              <p className="text-[20px] leading-[21px] text-[#003e52] uppercase" style={oxanium}>{fmt(halfPrice)}</p>
              <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)]" style={saira}>50% deferred</p>
            </div>
          </div>
        </div>
        <TermRow terms={[12,24,36]} term={fiftyTerm} setTerm={setFiftyTerm} />
        <div className="border border-[rgba(48,63,70,0.2)] flex items-center overflow-hidden rounded-[14px] w-full shrink-0">
          <div className="flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-0 p-[24px] text-[#1d2d33] whitespace-nowrap">
            <p className="text-[20px] leading-[21px] uppercase" style={oxanium}>Indicative estimate</p>
            {[
              ['Price (incl. VAT)', fmt(PRICE)],
              ['Pay today (50%)', fmt(halfPrice)],
              ['Pay at end of term (50%)', fmt(halfPrice)],
            ].map(([l, v]) => (
              <div key={l} className="flex items-center justify-between text-[14px] leading-[23px] w-full" style={saira}>
                <p>{l}</p><p>{v}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#f4f5f3] flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-w-0 p-[24px]">
            <p className="text-[14px] leading-[23px] text-[#1d2d33] whitespace-nowrap" style={saira}>Final payment at end of term</p>
            <div className="flex gap-[8px] items-end whitespace-nowrap">
              <p className="text-[32px] leading-[36px] text-[#003e52] uppercase" style={oxanium}>{fmt(fiftyFinal)}</p>
            </div>
            <div className="w-full h-px bg-[rgba(48,63,70,0.15)] my-[10px]" />
            <p className="text-[14px] leading-[23px] text-[#1d2d33] whitespace-nowrap" style={saira}>Monthly payments</p>
            <p className="text-[20px] leading-[21px] text-[#003e52] uppercase" style={oxanium}>NONE</p>
            <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] w-full" style={saira}>
              Indicative only — final offers depend on your eligibility.
            </p>
          </div>
        </div>
      </>}

      {/* === LEASE form === */}
      {productType === 'lease' && <>
        <SliderRow label="Advance payment" val={advance} setVal={setAdvance} min={0} max={30} step={5} cls="slider-advance"
          ticks={['0%','10%','20%','30%']} />
        <SliderRow label="Residual value" val={residual} setVal={setResidual} min={10} max={30} step={5} cls="slider-residual"
          ticks={['10%','20%','30%']} />
        <TermRow terms={[24,36,48,60]} term={leaseTerm} setTerm={setLeaseTerm} />
        <div className="border border-[rgba(48,63,70,0.2)] flex items-center overflow-hidden rounded-[14px] w-full shrink-0">
          <div className="flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-0 p-[24px] text-[#1d2d33] whitespace-nowrap">
            <p className="text-[20px] leading-[21px] uppercase" style={oxanium}>Indicative estimate</p>
            {[
              ['Price (incl. VAT)', fmt(PRICE)],
              ['Advance payment (' + advance + '%)', '− ' + fmt(advanceAmt)],
              ['Amount to finance', fmt(PRICE - advanceAmt)],
            ].map(([l, v]) => (
              <div key={l} className="flex items-center justify-between text-[14px] leading-[23px] w-full" style={saira}>
                <p>{l}</p><p>{v}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#f4f5f3] flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-w-0 p-[24px]">
            <p className="text-[14px] leading-[23px] text-[#1d2d33] whitespace-nowrap" style={saira}>Monthly rent from</p>
            <div className="flex gap-[8px] items-end whitespace-nowrap">
              <p className="text-[32px] leading-[36px] text-[#003e52] uppercase" style={oxanium}>{fmt(leaseMonthly)}</p>
              <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>/ month</p>
            </div>
            <div className="w-full h-px bg-[rgba(48,63,70,0.15)] my-[10px]" />
            <p className="text-[14px] leading-[23px] text-[#1d2d33] whitespace-nowrap" style={saira}>Transfer of ownership</p>
            <p className="text-[20px] leading-[21px] text-[#003e52] uppercase" style={oxanium}>{fmt(residualAmt)}</p>
            <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] w-full" style={saira}>
              Indicative only — final offers depend on your eligibility.
            </p>
          </div>
        </div>
      </>}
    </TaasPageLayout>
  );
}
