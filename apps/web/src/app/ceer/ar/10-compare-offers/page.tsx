import Link from 'next/link';
import TaasPageLayout from '../../_components/TaasPageLayout';

const almarai: React.CSSProperties = { fontFamily: "'Almarai', sans-serif" };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };
const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };

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
        <p className="text-[14px] leading-[23px] whitespace-nowrap" style={{ ...almarai, color: value ? '#067647' : 'rgba(48,63,70,0.7)' }}>
          {value ? 'نعم' : 'لا'}
        </p>
      </div>
    </div>
  );
}

export default function CompareOffersArPage() {
  const footer = (
    <>
      <Link href="/ceer/ar/09-eligibility-offers" className="text-[#003e52] text-[14px] leading-[23px] whitespace-nowrap" style={almarai}>
        العودة للعروض
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
          <p className="text-[#1d2d33] text-[12px] leading-[19px] uppercase whitespace-nowrap" style={oxanium}>حفظ المقارنة</p>
        </button>
        <Link
          href="/ceer/ar/11-offer-details"
          className="relative flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px]"
          style={{
            backgroundColor: '#003e52',
            border: '2px solid rgba(255,255,255,0.12)',
            boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05)',
          }}
        >
          <p className="text-white text-[12px] leading-[19px] uppercase whitespace-pre" style={oxanium}>{`إنشاء طلب  →`}</p>
        </Link>
      </div>
    </>
  );

  return (
    <TaasPageLayout currentStep={5} lang="AR" footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] items-start shrink-0 text-[#1d2d33] w-full">
        <p className="text-[32px] leading-[36px] uppercase w-full" style={oxanium}>قارن واختر أفضل عرض</p>
        <p className="text-[16px] leading-[22px] w-full" style={almarai}>
          قارن عروض البنوك الشريكة جنبًا إلى جنب واختر الأنسب لك.
        </p>
      </div>

      {/* Comparison table */}
      <div
        className="flex flex-col items-start overflow-clip relative rounded-[14px] shrink-0 w-full"
        style={{ border: '1px solid rgba(48,63,70,0.2)' }}
      >
        {/* Header row */}
        <div className="flex items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-[4px] items-start p-[16px] relative shrink-0 w-[240px] whitespace-nowrap">
            <p className="text-[#1d2d33] text-[14px] leading-[23px]" style={almarai}>التفاصيل الرئيسية</p>
            <p className="text-[#003e52] text-[12px] leading-[16px]" style={almarai}>إلغاء التحديد</p>
          </div>
          {/* SNB — selected / recommended */}
          <div className="bg-[#f4f5f3] flex flex-1 flex-col gap-[8px] items-start min-w-0 p-[16px] relative">
            <div className="bg-[#f4f5f3] flex items-center px-[10px] py-[3px] relative rounded-[999px] shrink-0">
              <p className="text-[#003e52] text-[12px] leading-[16px] whitespace-nowrap" style={almarai}>موصى به</p>
            </div>
            <div className="h-[36px] overflow-clip relative shrink-0 w-[90px]">
              <div className="absolute inset-[7%_0.18%_27.08%_-0.18%]">
                <img alt="SNB logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={bankSnb} />
              </div>
            </div>
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={almarai}>البنك الأهلي السعودي</p>
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
              <p className="text-white text-[12px] leading-[16px] whitespace-nowrap" style={almarai}>مختار</p>
            </div>
          </div>
          {/* Alinma */}
          <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0 p-[16px] relative">
            <div className="h-[20px] relative shrink-0 w-[100px]" />
            <div className="h-[36px] overflow-clip relative shrink-0 w-[90px]">
              <img alt="Alinma logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={bankAlinma} style={{ transform: 'translate(-50%,-50%)', left: '50%', top: '50%', width: '86.76px', height: '32.4px' }} />
            </div>
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={almarai}>مصرف الإنماء</p>
            <div
              className="flex items-center px-[14px] py-[6px] relative rounded-[8px] shrink-0"
              style={{ backgroundColor: '#ffffff', border: '1px solid rgba(48,63,70,0.2)' }}
            >
              <p className="text-[#1d2d33] text-[12px] leading-[16px] whitespace-nowrap" style={almarai}>اختر</p>
            </div>
          </div>
          {/* Riyad */}
          <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0 p-[16px] relative">
            <div className="h-[20px] relative shrink-0 w-[100px]" />
            <div className="h-[36px] overflow-clip relative shrink-0 w-[90px]">
              <img alt="Riyad Bank logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={bankRiyad} />
            </div>
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={almarai}>بنك الرياض</p>
            <div
              className="flex items-center px-[14px] py-[6px] relative rounded-[8px] shrink-0"
              style={{ backgroundColor: '#ffffff', border: '1px solid rgba(48,63,70,0.2)' }}
            >
              <p className="text-[#1d2d33] text-[12px] leading-[16px] whitespace-nowrap" style={almarai}>اختر</p>
            </div>
          </div>
        </div>

        {[
          { label: 'نسبة الفائدة (ثابتة)', values: ['4.89%', '5.19%', '5.49%'], isNum: true },
          { label: 'الدفعة الشهرية', values: ['⃁ 3,648', '⃁ 3,755', '⃁ 3,697'], isNum: true, accent: true },
          { label: 'إجمالي المدفوع', values: ['⃁ 218,880', '⃁ 225,300', '⃁ 221,820'], isNum: true },
          { label: 'مبلغ التمويل', values: ['⃁ 183,000', '⃁ 183,000', '⃁ 183,000'], isNum: true },
          { label: 'مدة التمويل', values: ['60 شهرًا', '60 شهرًا', '60 شهرًا'], isNum: false },
          { label: 'رسوم المعالجة', values: ['⃁ 0', '⃁ 500', '⃁ 0'], isNum: true },
        ].map(({ label, values, isNum, accent }) => (
          <div key={label} className="flex items-center relative shrink-0 w-full" style={{ borderTop: '1px solid rgba(48,63,70,0.2)' }}>
            <div className="flex items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
              <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={almarai}>{label}</p>
            </div>
            {values.map((v, i) => (
              <div key={i} className={`${i === 0 ? 'bg-[#f4f5f3] ' : ''}flex flex-1 items-center min-w-0 px-[16px] py-[10px] relative`}>
                <p className="text-[14px] leading-[23px] whitespace-nowrap" style={{ ...(isNum ? saira : almarai), color: accent ? '#003e52' : '#1d2d33' }}>{v}</p>
              </div>
            ))}
          </div>
        ))}

        {/* Early settlement */}
        <div className="flex items-center relative shrink-0 w-full" style={{ borderTop: '1px solid rgba(48,63,70,0.2)' }}>
          <div className="flex items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={almarai}>التسوية المبكرة</p>
          </div>
          <BoolCell value={true} bg />
          <BoolCell value={true} />
          <BoolCell value={false} />
        </div>

        {/* Free insurance */}
        <div className="flex items-center relative shrink-0 w-full" style={{ borderTop: '1px solid rgba(48,63,70,0.2)' }}>
          <div className="flex items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={almarai}>تأمين شامل مجاني</p>
          </div>
          <BoolCell value={true} bg />
          <BoolCell value={false} />
          <BoolCell value={true} />
        </div>

        {/* Rating */}
        <div className="flex items-center relative shrink-0 w-full" style={{ borderTop: '1px solid rgba(48,63,70,0.2)' }}>
          <div className="flex items-center px-[16px] py-[10px] relative shrink-0 w-[240px]">
            <p className="text-[#1d2d33] text-[14px] leading-[23px] whitespace-nowrap" style={almarai}>تقييم العملاء</p>
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
