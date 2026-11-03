import Link from 'next/link';
import TaasPageLayout from '../_components/TaasPageLayout';

const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

const bankSnb = '/taas/bank-snb.png';
const bankAlinma = '/taas/bank-alinma.png';
const bankRiyad = '/taas/bank-riyad.png';
const bankAlrajhi = '/taas/bank-alrajhi.png';
const iconCheckGreen = '/taas/icon-check-green.svg';
const iconArrowRight = '/taas/icon-arrow-right.svg';
const iconCheckSmall = '/taas/icon-check-small.svg';
const iconClock = '/taas/icon-clock.svg';

type OfferRowProps = {
  bankLogo: string;
  bankLogoAlt: string;
  bankName: string;
  apr: string;
  monthly: string;
  tenure: string;
  totalPayable: string;
  features: string[];
  selected?: boolean;
  recommended?: boolean;
};

function OfferRow({ bankLogo, bankLogoAlt, bankName, apr, monthly, tenure, totalPayable, features, selected, recommended }: OfferRowProps) {
  return (
    <div
      className="relative flex gap-[20px] items-center px-[20px] py-[22px] rounded-[14px] w-full shrink-0"
      style={{
        backgroundColor: selected ? '#f4f5f3' : '#ffffff',
        border: selected ? '1.5px solid #003e52' : '1px solid rgba(48,63,70,0.2)',
      }}
    >
      {recommended && (
        <div className="absolute bg-[#003e52] flex items-center left-[18.5px] px-[10px] py-[3px] rounded-[999px] top-[-11.5px]">
          <p className="text-white text-[8px] leading-[13px] uppercase whitespace-nowrap" style={{ ...oxanium, fontWeight: 700 }}>
            RECOMMENDED
          </p>
        </div>
      )}
      {/* Radio */}
      <div
        className="relative shrink-0 size-[20px] rounded-[10px]"
        style={{
          backgroundColor: '#ffffff',
          border: selected ? '6px solid #003e52' : '1.5px solid rgba(48,63,70,0.2)',
        }}
      />
      {/* Bank logo + name */}
      <div className="flex flex-col gap-[2px] items-start shrink-0 w-[120px]">
        <div className="h-[44px] overflow-clip relative shrink-0 w-[110px]">
          <img alt={bankLogoAlt} className="absolute inset-0 max-w-none object-cover size-full pointer-events-none" src={bankLogo} />
        </div>
        <p className="text-[#1d2d33] text-[12px] leading-[16px] whitespace-nowrap" style={saira}>{bankName}</p>
      </div>
      {/* Metrics */}
      <div className="flex flex-1 items-center justify-between min-w-0 whitespace-nowrap">
        <div className="flex flex-col gap-[4px] items-start shrink-0 text-[#1d2d33]">
          <p className="text-[12px] leading-[16px]" style={saira}>APR</p>
          <p className="text-[16px] leading-[22px]" style={saira}>{apr}</p>
        </div>
        <div className="flex flex-col gap-[4px] items-start shrink-0">
          <p className="text-[#1d2d33] text-[12px] leading-[16px]" style={saira}>Monthly payment</p>
          <p className="text-[#003e52] text-[20px] leading-[21px] uppercase" style={oxanium}>{monthly}</p>
        </div>
        <div className="flex flex-col gap-[4px] items-start shrink-0 text-[#1d2d33]">
          <p className="text-[12px] leading-[16px]" style={saira}>Tenure</p>
          <p className="text-[16px] leading-[22px]" style={saira}>{tenure}</p>
        </div>
        <div className="flex flex-col gap-[4px] items-start shrink-0 text-[#1d2d33]">
          <p className="text-[12px] leading-[16px]" style={saira}>Total payable</p>
          <p className="text-[16px] leading-[22px]" style={saira}>{totalPayable}</p>
        </div>
      </div>
      {/* Features */}
      <div className="flex flex-col gap-[6px] items-start shrink-0 w-[190px]">
        {features.map((f) => (
          <div key={f} className="flex gap-[6px] items-center shrink-0">
            <div className="overflow-clip relative shrink-0 size-[14px]">
              <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                <div className="absolute inset-[-15.58%_-10.71%]">
                  <img alt="" className="block max-w-none size-full" src={iconCheckGreen} />
                </div>
              </div>
            </div>
            <p className="text-[#1d2d33] text-[12px] leading-[16px] whitespace-nowrap" style={saira}>{f}</p>
          </div>
        ))}
      </div>
      {/* View details */}
      <Link href="/ceer/11-offer-details" className="flex gap-[4px] items-center shrink-0">
        <p className="text-[#003e52] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>View details</p>
        <div className="overflow-clip relative shrink-0 size-[14px]">
          <div className="absolute inset-[20.83%]">
            <div className="absolute inset-[-12.24%]">
              <img alt="" className="block max-w-none size-full" src={iconArrowRight} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function EligibilityOffersPage() {
  const footer = (
    <>
      <button
        className="relative flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px]"
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid rgba(48,63,70,0.2)',
          boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05)',
        }}
      >
        <p className="text-[#1d2d33] text-[12px] leading-[19px] uppercase whitespace-nowrap" style={oxanium}>
          Compare selected (2)
        </p>
      </button>
      <Link
        href="/ceer/10-compare-offers"
        className="relative flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px]"
        style={{
          backgroundColor: '#003e52',
          border: '2px solid rgba(255,255,255,0.12)',
          boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05)',
        }}
      >
        <p className="text-white text-[12px] leading-[19px] uppercase whitespace-pre" style={oxanium}>{`Create order  →`}</p>
      </Link>
    </>
  );

  return (
    <TaasPageLayout currentStep={5} footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] items-start shrink-0 text-[#1d2d33] w-full">
        <p className="text-[32px] leading-[36px] uppercase w-full" style={oxanium}>Your eligibility offers</p>
        <p className="text-[16px] leading-[22px] w-full" style={saira}>
          Final offers generated from your validated information and each provider&apos;s product criteria.
        </p>
      </div>

      {/* Validation status */}
      <div
        className="flex items-center justify-between px-[16px] py-[12px] rounded-[12px] shrink-0 w-full"
        style={{ backgroundColor: '#f4f5f3' }}
      >
        <div className="flex gap-[10px] items-center shrink-0">
          <div className="bg-[#12b76a] flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]">
            <div className="overflow-clip relative shrink-0 size-[14px]">
              <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                <div className="absolute inset-[-15.58%_-10.71%]">
                  <img alt="" className="block max-w-none size-full" src={iconCheckSmall} />
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#067647] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>
            Your data was validated with SIMAH, GOSI, Nafath and ELM.
          </p>
        </div>
        <div className="flex gap-[6px] items-center shrink-0">
          <div className="overflow-clip relative shrink-0 size-[14px]">
            <div className="absolute inset-[8.33%]">
              <div className="absolute inset-[-8.57%]">
                <img alt="" className="block max-w-none size-full" src={iconClock} />
              </div>
            </div>
          </div>
          <p className="text-[#067647] text-[12px] leading-[16px] whitespace-nowrap" style={saira}>
            Offers valid until 28 Oct 2026
          </p>
        </div>
      </div>

      {/* Offers list */}
      <div className="flex flex-col gap-[14px] items-start shrink-0 w-full">
        <OfferRow
          bankLogo={bankSnb}
          bankLogoAlt="SNB logo"
          bankName="Saudi National Bank"
          apr="4.89%"
          monthly="⃁ 3,648"
          tenure="60 months"
          totalPayable="⃁ 218,880"
          features={['No processing fee', 'Early settlement available', 'Free comprehensive insurance']}
          selected
          recommended
        />
        <OfferRow
          bankLogo={bankAlinma}
          bankLogoAlt="Alinma logo"
          bankName="Alinma Bank"
          apr="5.19%"
          monthly="⃁ 3,755"
          tenure="60 months"
          totalPayable="⃁ 225,300"
          features={['Flexible payment options', 'No processing fee', 'Early settlement available']}
        />
        <OfferRow
          bankLogo={bankRiyad}
          bankLogoAlt="Riyad Bank logo"
          bankName="Riyad Bank"
          apr="5.49%"
          monthly="⃁ 3,697"
          tenure="60 months"
          totalPayable="⃁ 221,820"
          features={['Fast approval', 'Free comprehensive insurance', 'Digital account management']}
        />
        <OfferRow
          bankLogo={bankAlrajhi}
          bankLogoAlt="Al Rajhi Bank logo"
          bankName="Al Rajhi Bank"
          apr="5.29%"
          monthly="⃁ 3,820"
          tenure="60 months"
          totalPayable="⃁ 229,200"
          features={['No processing fee', 'Early settlement available', 'Dedicated customer support']}
        />
      </div>
    </TaasPageLayout>
  );
}
