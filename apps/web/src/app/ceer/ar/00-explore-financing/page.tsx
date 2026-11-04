'use client';
import { useState } from 'react';
import Link from 'next/link';
import TaasPageLayout from '../../_components/TaasPageLayout';

const PRICE = 228750;
const TERMS = [24, 36, 48, 60];

function fmt(n: number) {
  return Math.round(n).toLocaleString('en-US') + ' ⃁';
}

function calcMonthly(fin: number, months: number) {
  const r = 0.0529 / 12;
  return fin * r / (1 - Math.pow(1 + r, -months));
}

const almarai: React.CSSProperties = { fontFamily: "'Almarai', sans-serif" };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };
const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };

export default function ExploreFinancingArPage() {
  const [dp, setDp] = useState(20);
  const [term, setTerm] = useState(60);

  const dpAmt = PRICE * dp / 100;
  const fin = PRICE - dpAmt;
  const monthly = calcMonthly(fin, term);
  const trackFill = `linear-gradient(to left, #003e52 0%, #003e52 ${dp * 2}%, rgba(48,63,70,0.15) ${dp * 2}%)`;

  const footer = (
    <>
      <div className="flex gap-[8px] items-center shrink-0">
        <img alt="" className="size-[16px]" src="/taas/icon-lock.svg" />
        <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] whitespace-nowrap" style={almarai}>
          معلوماتك مشفرة ولن تُشارك دون موافقتك.
        </p>
      </div>
      <Link
        href="/ceer/ar/01-preliminary-offers"
        className="border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center min-w-[120px] px-[18px] py-[12px] rounded-[8px] shrink-0 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#003e52] rounded-[8px]" />
        <p className="relative text-[12px] leading-[19px] text-white uppercase whitespace-pre" style={oxanium}>
          {'عرض العروض المبدئية  →'}
        </p>
      </Link>
    </>
  );

  return (
    <TaasPageLayout currentStep={1} lang="AR" footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] items-start w-full shrink-0 text-[#1d2d33]">
        <p className="text-[32px] leading-[36px] uppercase w-full" style={oxanium}>
          استكشف خيارات التمويل
        </p>
        <p className="text-[16px] leading-[22px] w-full" style={almarai}>
          أدخل بعض التفاصيل للحصول على تقدير أولي مخصص لك.
        </p>
      </div>

      {/* Inputs */}
      <div className="flex gap-[20px] items-start w-full shrink-0">
        {/* Monthly salary */}
        <div className="flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-0">
          <div className="flex gap-[2px] items-start text-[14px] leading-[23px]" style={almarai}>
            <p className="text-[#1d2d33]">الراتب الشهري</p>
            <p className="text-[#d92d20]">*</p>
          </div>
          <div className="bg-white border border-[rgba(48,63,70,0.2)] flex items-start rounded-[8px] w-full shadow-[0px_1px_1px_rgba(10,13,18,0.05)]">
            <div className="flex items-center pr-[14px] pl-[12px] py-[10px] rounded-br-[8px] rounded-tr-[8px] shrink-0">
              <p className="text-[16px] leading-[22px] text-[#1d2d33] whitespace-nowrap" style={almarai}>ر.س</p>
            </div>
            <div className="bg-white border border-[rgba(48,63,70,0.2)] flex flex-[1_0_0] gap-[8px] items-center overflow-hidden px-[14px] py-[10px] rounded-bl-[8px] rounded-tl-[8px] self-stretch">
              <input type="text" placeholder="أدخل المبلغ" className="flex-1 min-w-0 bg-transparent border-none outline-none text-[16px] leading-[22px] text-[rgba(48,63,70,0.7)]" style={almarai} />
            </div>
          </div>
        </div>
        {/* Commitments */}
        <div className="flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-0">
          <div className="flex gap-[2px] items-start text-[14px] leading-[23px]" style={almarai}>
            <p className="text-[#1d2d33]">الالتزامات الشهرية الحالية</p>
            <p className="text-[#d92d20]">*</p>
          </div>
          <div className="bg-white border border-[rgba(48,63,70,0.2)] flex items-start rounded-[8px] w-full shadow-[0px_1px_1px_rgba(10,13,18,0.05)]">
            <div className="flex items-center pr-[14px] pl-[12px] py-[10px] rounded-br-[8px] rounded-tr-[8px] shrink-0">
              <p className="text-[16px] leading-[22px] text-[#1d2d33] whitespace-nowrap" style={almarai}>ر.س</p>
            </div>
            <div className="bg-white border border-[rgba(48,63,70,0.2)] flex flex-[1_0_0] gap-[8px] items-center overflow-hidden px-[14px] py-[10px] rounded-bl-[8px] rounded-tl-[8px] self-stretch">
              <input type="text" placeholder="أدخل المبلغ" className="flex-1 min-w-0 bg-transparent border-none outline-none text-[16px] leading-[22px] text-[rgba(48,63,70,0.7)]" style={almarai} />
              <img alt="" className="size-[16px] shrink-0" src="/taas/icon-circle-help.svg" />
            </div>
          </div>
        </div>
      </div>

      {/* Down payment */}
      <div className="flex flex-col gap-[12px] items-start w-full shrink-0">
        <div className="flex items-center justify-between w-full shrink-0">
          <p className="text-[14px] leading-[23px] text-[#1d2d33] whitespace-nowrap" style={almarai}>الدفعة المقدمة</p>
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
        <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={almarai}>مدة التمويل</p>
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
                style={{ ...almarai, color: term === m ? '#003e52' : '#1d2d33' }}
              >
                {m} شهرًا
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Estimate box */}
      <div className="border border-[rgba(48,63,70,0.2)] flex items-center overflow-hidden rounded-[14px] w-full shrink-0">
        <div className="flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-0 p-[24px] text-[#1d2d33] whitespace-nowrap">
          <p className="text-[20px] leading-[21px] uppercase" style={oxanium}>التقدير الأولي</p>
          {[
            ['السعر (شامل الضريبة)', fmt(PRICE)],
            ['الدفعة المقدمة (' + dp + '%)', '− ' + fmt(dpAmt)],
            ['مبلغ التمويل', fmt(fin)],
          ].map(([l, v]) => (
            <div key={l} className="flex items-center justify-between text-[14px] leading-[23px] w-full" style={almarai}>
              <p>{l}</p><p>{v}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#f4f5f3] flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-w-0 p-[24px]">
          <p className="text-[14px] leading-[23px] text-[#1d2d33] whitespace-nowrap" style={almarai}>الدفعة الشهرية التقديرية من</p>
          <div className="flex gap-[8px] items-end whitespace-nowrap">
            <p className="text-[32px] leading-[36px] text-[#003e52] uppercase" style={oxanium}>{fmt(monthly)}</p>
            <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={almarai}>/ شهر</p>
          </div>
          <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] w-full" style={almarai}>
            تقديري فقط — العروض النهائية تعتمد على أهليتك.
          </p>
        </div>
      </div>
    </TaasPageLayout>
  );
}
