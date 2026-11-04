import Link from 'next/link';
import TaasPageLayout from '../../_components/TaasPageLayout';

const almarai: React.CSSProperties = { fontFamily: "'Almarai', sans-serif" };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };
const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };

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
        <div className="absolute bg-[#003e52] flex items-center end-[18.5px] px-[10px] py-[3px] rounded-[999px] top-[-11.5px]">
          <p className="text-white text-[8px] leading-[13px] uppercase whitespace-nowrap" style={{ ...oxanium, fontWeight: 700 }}>
            موصى به
          </p>
        </div>
      )}
      <div
        className="relative shrink-0 size-[20px] rounded-[10px]"
        style={{
          backgroundColor: '#ffffff',
          border: selected ? '6px solid #003e52' : '1.5px solid rgba(48,63,70,0.2)',
        }}
      />
      <div className="flex flex-col gap-[2px] items-start shrink-0 w-[120px]">
        <div className="h-[44px] overflow-clip relative shrink-0 w-[110px]">
          <img alt={bankLogoAlt} className="absolute inset-0 max-w-none object-cover size-full pointer-events-none" src={bankLogo} />
        </div>
        <p className="text-[#1d2d33] text-[12px] leading-[16px] whitespace-nowrap" style={almarai}>{bankName}</p>
      </div>
      <div className="flex flex-1 items-center justify-between min-w-0 whitespace-nowrap">
        <div className="flex flex-col gap-[4px] items-start shrink-0 text-[#1d2d33]">
          <p className="text-[12px] leading-[16px]" style={almarai}>نسبة الفائدة</p>
          <p className="text-[16px] leading-[22px]" style={saira}>{apr}</p>
        </div>
        <div className="flex flex-col gap-[4px] items-start shrink-0">
          <p className="text-[#1d2d33] text-[12px] leading-[16px]" style={almarai}>الدفعة الشهرية</p>
          <p className="text-[#003e52] text-[20px] leading-[21px] uppercase" style={oxanium}>{monthly}</p>
        </div>
        <div className="flex flex-col gap-[4px] items-start shrink-0 text-[#1d2d33]">
          <p className="text-[12px] leading-[16px]" style={almarai}>المدة</p>
          <p className="text-[16px] leading-[22px]" style={almarai}>{tenure}</p>
        </div>
        <div className="flex flex-col gap-[4px] items-start shrink-0 text-[#1d2d33]">
          <p className="text-[12px] leading-[16px]" style={almarai}>إجمالي المدفوع</p>
          <p className="text-[16px] leading-[22px]" style={saira}>{totalPayable}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[6px] items-start shrink-0 w-[190px]">
        {features.map((f) => (
          <div key={f} className="flex gap-[6px] items-center shrink-0">
            <div className="overflow-clip relative shrink-0 size-[14px]">
              <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                <div className="absolute inset-[-15.58%_-10.71%]">
                  <img alt="" className="block max-w-none size-full" src="/taas/icon-check-green.svg" />
                </div>
              </div>
            </div>
            <p className="text-[#1d2d33] text-[12px] leading-[16px] whitespace-nowrap" style={almarai}>{f}</p>
          </div>
        ))}
      </div>
      <Link href="/ceer/ar/11-offer-details" className="flex gap-[4px] items-center shrink-0">
        <p className="text-[#003e52] text-[14px] leading-[23px] whitespace-nowrap" style={almarai}>عرض التفاصيل</p>
        <div className="overflow-clip relative shrink-0 size-[14px]">
          <div className="absolute inset-[20.83%]">
            <div className="absolute inset-[-12.24%]">
              <img alt="" className="block max-w-none size-full" style={{ transform: 'scaleX(-1)' }} src="/taas/icon-arrow-right.svg" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function EligibilityOffersArPage() {
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
          مقارنة المحدد (2)
        </p>
      </button>
      <Link
        href="/ceer/ar/10-compare-offers"
        className="relative flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px]"
        style={{
          backgroundColor: '#003e52',
          border: '2px solid rgba(255,255,255,0.12)',
          boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05)',
        }}
      >
        <p className="text-white text-[12px] leading-[19px] uppercase whitespace-pre" style={oxanium}>{`إنشاء طلب  →`}</p>
      </Link>
    </>
  );

  return (
    <TaasPageLayout currentStep={5} lang="AR" footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] items-start shrink-0 text-[#1d2d33] w-full">
        <p className="text-[32px] leading-[36px] uppercase w-full" style={oxanium}>عروضك المؤهلة</p>
        <p className="text-[16px] leading-[22px] w-full" style={almarai}>
          عروض نهائية بناءً على معلوماتك المحققة ومعايير منتج كل جهة.
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
                  <img alt="" className="block max-w-none size-full" src="/taas/icon-check-small.svg" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#067647] text-[14px] leading-[23px] whitespace-nowrap" style={almarai}>
            تم التحقق من بياناتك مع SIMAH و GOSI و نفاذ و ELM.
          </p>
        </div>
        <div className="flex gap-[6px] items-center shrink-0">
          <div className="overflow-clip relative shrink-0 size-[14px]">
            <div className="absolute inset-[8.33%]">
              <div className="absolute inset-[-8.57%]">
                <img alt="" className="block max-w-none size-full" src="/taas/icon-clock.svg" />
              </div>
            </div>
          </div>
          <p className="text-[#067647] text-[12px] leading-[16px] whitespace-nowrap" style={almarai}>
            العروض صالحة حتى 28 أكتوبر 2026
          </p>
        </div>
      </div>

      {/* Offers list */}
      <div className="flex flex-col gap-[14px] items-start shrink-0 w-full">
        <OfferRow
          bankLogo="/taas/bank-snb.png"
          bankLogoAlt="SNB logo"
          bankName="البنك الأهلي السعودي"
          apr="4.89%"
          monthly="⃁ 3,648"
          tenure="60 شهرًا"
          totalPayable="⃁ 218,880"
          features={['بدون رسوم معالجة', 'تسوية مبكرة متاحة', 'تأمين شامل مجاني']}
          selected
          recommended
        />
        <OfferRow
          bankLogo="/taas/bank-alinma.png"
          bankLogoAlt="Alinma logo"
          bankName="مصرف الإنماء"
          apr="5.19%"
          monthly="⃁ 3,755"
          tenure="60 شهرًا"
          totalPayable="⃁ 225,300"
          features={['خيارات دفع مرنة', 'بدون رسوم معالجة', 'تسوية مبكرة متاحة']}
        />
        <OfferRow
          bankLogo="/taas/bank-riyad.png"
          bankLogoAlt="Riyad Bank logo"
          bankName="بنك الرياض"
          apr="5.49%"
          monthly="⃁ 3,697"
          tenure="60 شهرًا"
          totalPayable="⃁ 221,820"
          features={['موافقة سريعة', 'تأمين شامل مجاني', 'إدارة حساب رقمية']}
        />
        <OfferRow
          bankLogo="/taas/bank-alrajhi.png"
          bankLogoAlt="Al Rajhi Bank logo"
          bankName="مصرف الراجحي"
          apr="5.29%"
          monthly="⃁ 3,820"
          tenure="60 شهرًا"
          totalPayable="⃁ 229,200"
          features={['بدون رسوم معالجة', 'تسوية مبكرة متاحة', 'دعم عملاء مخصص']}
        />
      </div>
    </TaasPageLayout>
  );
}
