import Link from 'next/link';
import TaasPageLayout from '../_components/TaasPageLayout';

const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

const offerSummary = [
  ['Financed amount', 'SAR 183,000'],
  ['Tenure', '60 months'],
  ['Down payment (20%)', 'SAR 45,750'],
  ['Profit rate (APR)', '4.89%'],
  ['Monthly payment', 'SAR 3,648'],
  ['First payment', '30 days after disbursement'],
];

const paymentBreakdown = [
  ['Vehicle price (incl. VAT)', 'SAR 228,750'],
  ['Down payment (20%)', '− SAR 45,750'],
  ['Amount to finance', 'SAR 183,000'],
  ['Total profit', 'SAR 35,880'],
  ['Total payable', 'SAR 218,880'],
];

const keyFacts = [
  ['Sharia-compliant financing', 'Yes'],
  ['Fixed profit rate', 'Yes'],
  ['Early settlement allowed', 'Yes'],
  ['Insurance included', 'Comprehensive'],
  ['Processing fees', 'SAR 0'],
  ['Transfer of ownership', 'At end of term'],
];

const footer = (
  <>
    <div className="flex gap-[8px] items-center shrink-0">
      <img alt="" className="size-[16px]" src="/taas/icon-lock.svg" />
      <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)]" style={saira}>
        Your information is encrypted and never shared without your consent.
      </p>
    </div>
    <div className="flex gap-[12px] items-center shrink-0">
      <Link href="/ceer/09-eligibility-offers" className="border border-[rgba(48,63,70,0.2)] flex items-center px-[18px] py-[10px] rounded-[8px] text-[14px] text-[#1d2d33]" style={saira}>
        ← Back
      </Link>
      <Link
        href="/ceer/12-submit-order"
        className="border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center px-[18px] py-[12px] rounded-[8px] shrink-0 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#003e52] rounded-[8px]" />
        <p className="relative text-[12px] leading-[19px] text-white uppercase" style={oxanium}>
          Confirm offer  →
        </p>
      </Link>
    </div>
  </>
);

export default function OfferDetailsPage() {
  return (
    <TaasPageLayout currentStep={5} footer={footer}>
      {/* Title row */}
      <div className="flex items-start justify-between w-full shrink-0">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[32px] leading-[36px] uppercase text-[#1d2d33]" style={oxanium}>
            Offer details
          </p>
          <p className="text-[16px] leading-[22px] text-[rgba(48,63,70,0.7)]" style={saira}>
            Saudi National Bank · SNB الأهلي
          </p>
        </div>
        <div className="bg-[#003e52] flex items-center px-[12px] py-[6px] rounded-[6px] shrink-0">
          <p className="text-[12px] leading-[16px] text-white uppercase" style={oxanium}>Recommended</p>
        </div>
      </div>

      {/* Key metrics */}
      <div className="border border-[rgba(48,63,70,0.2)] flex items-center overflow-hidden rounded-[14px] w-full shrink-0">
        {[
          { label: 'APR', value: '4.89%', accent: true },
          { label: 'Monthly payment', value: 'SAR 3,648', accent: false },
          { label: 'Tenure', value: '60 months', accent: false },
          { label: 'Total payable', value: 'SAR 218,880', accent: false },
        ].map(({ label, value, accent }, i) => (
          <div
            key={label}
            className={`flex flex-[1_0_0] flex-col gap-[4px] items-start p-[20px] ${i < 3 ? 'border-r border-[rgba(48,63,70,0.2)]' : ''}`}
          >
            <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)]" style={saira}>{label}</p>
            <p
              className="text-[20px] leading-[24px] uppercase"
              style={{ ...oxanium, color: accent ? '#003e52' : '#1d2d33' }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="flex gap-[8px] items-center w-full shrink-0 flex-wrap">
        {['No processing fee', 'Early settlement available', 'Free comprehensive insurance'].map(f => (
          <div key={f} className="flex gap-[6px] items-center bg-[#f4f5f3] border border-[rgba(48,63,70,0.2)] px-[12px] py-[6px] rounded-[999px]">
            <img alt="" className="size-[12px]" src="/taas/check.svg" />
            <p className="text-[12px] leading-[16px] text-[#1d2d33]" style={saira}>{f}</p>
          </div>
        ))}
      </div>

      {/* Two column tables */}
      <div className="flex gap-[20px] items-start w-full shrink-0">
        {/* Offer summary */}
        <div className="border border-[rgba(48,63,70,0.2)] flex flex-[1_0_0] flex-col overflow-hidden rounded-[14px] min-w-0">
          <div className="border-b border-[rgba(48,63,70,0.2)] px-[20px] py-[14px]">
            <p className="text-[16px] leading-[20px] uppercase text-[#1d2d33]" style={oxanium}>Offer summary</p>
          </div>
          {offerSummary.map(([k, v], i) => (
            <div
              key={k}
              className={`flex items-center justify-between px-[20px] py-[12px] ${i < offerSummary.length - 1 ? 'border-b border-[rgba(48,63,70,0.2)]' : ''}`}
            >
              <p className="text-[14px] leading-[23px] text-[rgba(48,63,70,0.7)]" style={saira}>{k}</p>
              <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>{v}</p>
            </div>
          ))}
        </div>

        {/* Payment breakdown */}
        <div className="border border-[rgba(48,63,70,0.2)] flex flex-[1_0_0] flex-col overflow-hidden rounded-[14px] min-w-0">
          <div className="border-b border-[rgba(48,63,70,0.2)] px-[20px] py-[14px]">
            <p className="text-[16px] leading-[20px] uppercase text-[#1d2d33]" style={oxanium}>Payment breakdown</p>
          </div>
          {paymentBreakdown.map(([k, v], i) => (
            <div
              key={k}
              className={`flex items-center justify-between px-[20px] py-[12px] ${i < paymentBreakdown.length - 1 ? 'border-b border-[rgba(48,63,70,0.2)]' : ''}`}
            >
              <p className="text-[14px] leading-[23px] text-[rgba(48,63,70,0.7)]" style={saira}>{k}</p>
              <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>{v}</p>
            </div>
          ))}
          <div className="bg-[#f4f5f3] flex items-center justify-between px-[20px] py-[14px]">
            <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>Monthly payment from</p>
            <p className="text-[20px] leading-[24px] uppercase text-[#003e52]" style={oxanium}>SAR 3,648</p>
          </div>
        </div>
      </div>

      {/* Key facts */}
      <div className="border border-[rgba(48,63,70,0.2)] overflow-hidden rounded-[14px] w-full shrink-0">
        <div className="border-b border-[rgba(48,63,70,0.2)] px-[20px] py-[14px]">
          <p className="text-[16px] leading-[20px] uppercase text-[#1d2d33]" style={oxanium}>Key facts</p>
        </div>
        <div className="grid grid-cols-2">
          {keyFacts.map(([k, v], i) => (
            <div
              key={k}
              className={`flex items-center justify-between px-[20px] py-[12px] ${i % 2 === 0 ? 'border-r border-[rgba(48,63,70,0.2)]' : ''} ${i < keyFacts.length - 2 ? 'border-b border-[rgba(48,63,70,0.2)]' : ''}`}
            >
              <p className="text-[14px] leading-[23px] text-[rgba(48,63,70,0.7)]" style={saira}>{k}</p>
              <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </TaasPageLayout>
  );
}
