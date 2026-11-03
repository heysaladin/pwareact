import Link from 'next/link';
import TaasPageLayout from '../_components/TaasPageLayout';

const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

const bankSnb = '/taas/bank-snb.png';
const bankAlinma = '/taas/bank-alinma.png';
const bankRiyad = '/taas/bank-riyad.png';
const iconCheckTeal = '/taas/icon-check-teal.svg';
const iconCheckCircleGreen = '/taas/icon-check-circle-green.svg';
const iconXCircle = '/taas/icon-x-circle.svg';
const iconStar = '/taas/icon-star.svg';

function BoolCell({ value, bg }: { value: boolean; bg?: boolean }) {
  return (
    <div className={`flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative${bg ? ' bg-[#f4f5f3]' : ''}`}>
      <div className="flex gap-[6px] items-center shrink-0">
        <div className="flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" style={{ backgroundColor: '#f4f5f3' }}>
          <div className="overflow-clip relative shrink-0 size-[12px]">
            {value ? (
              <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                <div className="absolute inset-[-18.18%_-12.5%]">
                  <img alt="" className="block max-w-none size-full" src={iconCheckCircleGreen} />
                </div>
              </div>
            ) : (
              <div className="absolute inset-1/4">
                <div className="absolute inset-[-16.67%]">
                  <img alt="" className="block max-w-none size-full" src={iconXCircle} />
                </div>
              </div>
            )}
          </div>
        </div>
        <p
          className="text-[14px] leading-[23px] whitespace-nowrap"
          style={{ ...saira, color: value ? '#067647' : 'rgba(48,63,70,0.7)' }}
        >
          {value ? 'Yes' : 'No'}
        </p>
      </div>
    </div>
  );
}

export default function CompareOffersPage() {
  const footer = (
    <>
      <Link href="/ceer/09-eligibility-offers" className="text-[#003e52] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>
        Back to offers
      </Link>
      <div className="flex gap-[12px] items-center shrink-0">
        <button
          className="relative flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px]"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid rgba(48,63,70,0.2)',
            boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05)',
          }}
        >
          <p className="text-[#1d2d33] text-[12px] leading-[19px] uppercase whitespace-nowrap" style={oxanium}>Save comparison</p>
        </button>
        <Link
          href="/ceer/11-offer-details"
          className="relative flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px]"
          style={{
            backgroundColor: '#003e52',
            border: '2px solid rgba(255,255,255,0.12)',
            boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05)',
          }}
        >
          <p className="text-white text-[12px] leading-[19px] uppercase whitespace-pre" style={oxanium}>{`Create order  →`}</p>
        </Link>
      </div>
    </>
  );

  return (
    <TaasPageLayout currentStep={5} footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] items-start shrink-0 text-[#1d2d33] w-full">
        <p className="text-[32px] leading-[36px] uppercase w-full" style={oxanium}>{`Compare & choose your best offer`}</p>
        <p className="text-[16px] leading-[22px] w-full" style={saira}>
          Compare offers from our partner banks side by side and pick the one that fits you best.
        </p>
      </div>

      {/* Comparison table */}
      <div
        className="flex flex-col items-start overflow-clip relative rounded-[14px] shrink-0 w-full"
        style={{ border: '1px solid rgba(48,63,70,0.2)' }}
      >
        {/* Header row */}
        <div className="flex items-start relative shrink-0 w-full">
          {/* Key details col */}
          <div className="flex flex-col gap-[4px] items-start p-[16px] relative shrink-0 w-[240px] whitespace-nowrap">
            <p className="text-[#1d2d33] text-[14px] leading-[23px]" style={saira}>Key details</p>
            <p className="text-[#003e52] text-[12px] leading-[16px]" style={saira}>Clear selection</p>
          </div>
          {/* SNB — selected / recommended */}
          <div className="bg-[#f4f5f3] flex flex-1 flex-col gap-[8px] items-start min-w-0 p-[16px] relative">
            <div className="bg-[#f4f5f3] flex items-center px-[10px] py-[3px] relative rounded-[999px] shrink-0">
              <p className="text-[#003e52] text-[12px] leading-[16px] whitespace-nowrap" style={saira}>Recommended</p>
            </div>
            <div className="h-[36px] overflow-clip relative shrink-0 w-[90px]">
              <div className="absolute inset-[7%_0.18%_27.08%_-0.18%]">
                <img alt="SNB logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={bankSnb} />
              </div>
            </div>
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>Saudi National Bank</p>
            <div
              className="flex gap-[6px] items-center px-[14px] py-[6px] relative rounded-[8px] shrink-0"
              style={{ backgroundColor: '#003e52', border: '1px solid #003e52' }}
            >
              <div className="overflow-clip relative shrink-0 size-[12px]">
                <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                  <div className="absolute inset-[-18.18%_-12.5%]">
                    <img alt="" className="block max-w-none size-full" src={iconCheckTeal} />
                  </div>
                </div>
              </div>
              <p className="text-white text-[12px] leading-[16px] whitespace-nowrap" style={saira}>Selected</p>
            </div>
          </div>
          {/* Alinma */}
          <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0 p-[16px] relative">
            <div className="h-[20px] relative shrink-0 w-[100px]" />
            <div className="h-[36px] overflow-clip relative shrink-0 w-[90px]">
              <img alt="Alinma logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={bankAlinma} style={{ transform: 'translate(-50%,-50%)', left: '50%', top: '50%', width: '86.76px', height: '32.4px' }} />
            </div>
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>Alinma Bank</p>
            <div
              className="flex items-center px-[14px] py-[6px] relative rounded-[8px] shrink-0"
              style={{ backgroundColor: '#ffffff', border: '1px solid rgba(48,63,70,0.2)' }}
            >
              <p className="text-[#1d2d33] text-[12px] leading-[16px] whitespace-nowrap" style={saira}>Select</p>
            </div>
          </div>
          {/* Riyad */}
          <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0 p-[16px] relative">
            <div className="h-[20px] relative shrink-0 w-[100px]" />
            <div className="h-[36px] overflow-clip relative shrink-0 w-[90px]">
              <img alt="Riyad Bank logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={bankRiyad} />
            </div>
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>Riyad Bank</p>
            <div
              className="flex items-center px-[14px] py-[6px] relative rounded-[8px] shrink-0"
              style={{ backgroundColor: '#ffffff', border: '1px solid rgba(48,63,70,0.2)' }}
            >
              <p className="text-[#1d2d33] text-[12px] leading-[16px] whitespace-nowrap" style={saira}>Select</p>
            </div>
          </div>
        </div>

        {/* APR row */}
        <div className="flex items-center relative shrink-0 w-full" style={{ borderTop: '1px solid rgba(48,63,70,0.2)' }}>
          <div className="flex items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>APR (fixed)</p>
          </div>
          <div className="bg-[#f4f5f3] flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>4.89%</p>
          </div>
          <div className="flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>5.19%</p>
          </div>
          <div className="flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>5.49%</p>
          </div>
        </div>

        {/* Monthly payment row */}
        <div className="flex items-center relative shrink-0 w-full" style={{ borderTop: '1px solid rgba(48,63,70,0.2)' }}>
          <div className="flex items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>Monthly payment</p>
          </div>
          <div className="bg-[#f4f5f3] flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#003e52] text-[16px] leading-[22px] whitespace-nowrap" style={saira}>⃁ 3,648</p>
          </div>
          <div className="flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#003e52] text-[16px] leading-[22px] whitespace-nowrap" style={saira}>⃁ 3,755</p>
          </div>
          <div className="flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#003e52] text-[16px] leading-[22px] whitespace-nowrap" style={saira}>⃁ 3,697</p>
          </div>
        </div>

        {/* Total payable row */}
        <div className="flex items-center relative shrink-0 w-full" style={{ borderTop: '1px solid rgba(48,63,70,0.2)' }}>
          <div className="flex items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>Total payable</p>
          </div>
          <div className="bg-[#f4f5f3] flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>⃁ 218,880</p>
          </div>
          <div className="flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>⃁ 225,300</p>
          </div>
          <div className="flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>⃁ 221,820</p>
          </div>
        </div>

        {/* Amount to finance */}
        <div className="flex items-center relative shrink-0 w-full" style={{ borderTop: '1px solid rgba(48,63,70,0.2)' }}>
          <div className="flex items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>Amount to finance</p>
          </div>
          <div className="bg-[#f4f5f3] flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>⃁ 183,000</p>
          </div>
          <div className="flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>⃁ 183,000</p>
          </div>
          <div className="flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>⃁ 183,000</p>
          </div>
        </div>

        {/* Tenure */}
        <div className="flex items-center relative shrink-0 w-full" style={{ borderTop: '1px solid rgba(48,63,70,0.2)' }}>
          <div className="flex items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>Tenure</p>
          </div>
          <div className="bg-[#f4f5f3] flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>60 months</p>
          </div>
          <div className="flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>60 months</p>
          </div>
          <div className="flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>60 months</p>
          </div>
        </div>

        {/* Processing fee */}
        <div className="flex items-center relative shrink-0 w-full" style={{ borderTop: '1px solid rgba(48,63,70,0.2)' }}>
          <div className="flex items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>Processing fee</p>
          </div>
          <div className="bg-[#f4f5f3] flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>⃁ 0</p>
          </div>
          <div className="flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>⃁ 500</p>
          </div>
          <div className="flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>⃁ 0</p>
          </div>
        </div>

        {/* Early settlement */}
        <div className="flex items-center relative shrink-0 w-full" style={{ borderTop: '1px solid rgba(48,63,70,0.2)' }}>
          <div className="flex items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>Early settlement</p>
          </div>
          <BoolCell value={true} bg />
          <BoolCell value={true} />
          <BoolCell value={false} />
        </div>

        {/* Free comprehensive insurance */}
        <div className="flex items-center relative shrink-0 w-full" style={{ borderTop: '1px solid rgba(48,63,70,0.2)' }}>
          <div className="flex items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>Free comprehensive insurance</p>
          </div>
          <BoolCell value={true} bg />
          <BoolCell value={false} />
          <BoolCell value={true} />
        </div>

        {/* Customer rating */}
        <div className="flex items-center relative shrink-0 w-full" style={{ borderTop: '1px solid rgba(48,63,70,0.2)' }}>
          <div className="flex items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>Customer rating</p>
          </div>
          {[{ rating: '4.8', bg: true }, { rating: '4.5', bg: false }, { rating: '4.3', bg: false }].map(({ rating, bg }) => (
            <div key={rating} className={`flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative${bg ? ' bg-[#f4f5f3]' : ''}`}>
              <div className="flex gap-[4px] items-center shrink-0">
                <div className="overflow-clip relative shrink-0 size-[14px]">
                  <div className="absolute inset-[8.33%_8.33%_12.5%_8.33%]">
                    <div className="absolute inset-[-9.02%_-8.57%]">
                      <img alt="" className="block max-w-none size-full" src={iconStar} />
                    </div>
                  </div>
                </div>
                <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={saira}>{rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TaasPageLayout>
  );
}
