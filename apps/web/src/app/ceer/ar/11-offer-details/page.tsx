import Link from 'next/link';
import TaasPageLayout from '../../_components/TaasPageLayout';

const almarai: React.CSSProperties = { fontFamily: "'Almarai', sans-serif" };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };
const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };

const offerSummary = [
  ['مبلغ التمويل', '183,000 ⃁'],
  ['مدة التمويل', '60 شهرًا'],
  ['الدفعة المقدمة (20%)', '45,750 ⃁'],
  ['نسبة الربح (APR)', '4.89%'],
  ['الدفعة الشهرية', '3,648 ⃁'],
  ['أول دفعة', 'بعد 30 يومًا من الصرف'],
];

const paymentBreakdown = [
  ['سعر السيارة (شامل الضريبة)', '228,750 ⃁'],
  ['الدفعة المقدمة (20%)', '− 45,750 ⃁'],
  ['مبلغ التمويل', '183,000 ⃁'],
  ['إجمالي الربح', '35,880 ⃁'],
  ['إجمالي المدفوع', '218,880 ⃁'],
];

const keyFacts = [
  ['تمويل متوافق مع الشريعة', 'نعم'],
  ['نسبة ربح ثابتة', 'نعم'],
  ['تسوية مبكرة مسموحة', 'نعم'],
  ['التأمين مشمول', 'شامل'],
  ['رسوم المعالجة', '0 ⃁'],
  ['نقل الملكية', 'عند انتهاء المدة'],
];

const footer = (
  <>
    <div className="flex gap-[8px] items-center shrink-0">
      <img alt="" className="size-[16px]" src="/taas/icon-lock.svg" />
      <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)]" style={almarai}>
        معلوماتك مشفرة ولن تُشارك دون موافقتك.
      </p>
    </div>
    <div className="flex gap-[12px] items-center shrink-0">
      <Link href="/ceer/ar/09-eligibility-offers" className="border border-[rgba(48,63,70,0.2)] flex items-center px-[18px] py-[10px] rounded-[8px] text-[14px] text-[#1d2d33]" style={almarai}>
        → رجوع
      </Link>
      <Link
        href="/ceer/ar/12-submit-order"
        className="border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center px-[18px] py-[12px] rounded-[8px] shrink-0 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#003e52] rounded-[8px]" />
        <p className="relative text-[12px] leading-[19px] text-white uppercase" style={oxanium}>
          تأكيد العرض →
        </p>
      </Link>
    </div>
  </>
);

export default function OfferDetailsArPage() {
  return (
    <TaasPageLayout currentStep={5} lang="AR" footer={footer}>
      {/* Title row */}
      <div className="flex items-start justify-between w-full shrink-0">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[32px] leading-[36px] uppercase text-[#1d2d33]" style={oxanium}>
            تفاصيل العرض
          </p>
          <p className="text-[16px] leading-[22px] text-[rgba(48,63,70,0.7)]" style={almarai}>
            البنك الأهلي السعودي · Saudi National Bank
          </p>
        </div>
        <div className="bg-[#003e52] flex items-center px-[12px] py-[6px] rounded-[6px] shrink-0">
          <p className="text-[12px] leading-[16px] text-white uppercase" style={oxanium}>موصى به</p>
        </div>
      </div>

      {/* Key metrics */}
      <div className="border border-[rgba(48,63,70,0.2)] flex items-center overflow-hidden rounded-[14px] w-full shrink-0">
        {[
          { label: 'نسبة الفائدة', value: '4.89%', accent: true },
          { label: 'الدفعة الشهرية', value: '3,648 ⃁', accent: false },
          { label: 'مدة التمويل', value: '60 شهرًا', accent: false },
          { label: 'إجمالي المدفوع', value: '218,880 ⃁', accent: false },
        ].map(({ label, value, accent }, i) => (
          <div
            key={label}
            className={`flex flex-[1_0_0] flex-col gap-[4px] items-start p-[20px] ${i < 3 ? 'border-r border-[rgba(48,63,70,0.2)]' : ''}`}
          >
            <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)]" style={almarai}>{label}</p>
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
        {['بدون رسوم معالجة', 'تسوية مبكرة متاحة', 'تأمين شامل مجاني'].map(f => (
          <div key={f} className="flex gap-[6px] items-center bg-[#f4f5f3] border border-[rgba(48,63,70,0.2)] px-[12px] py-[6px] rounded-[999px]">
            <img alt="" className="size-[12px]" src="/taas/check.svg" />
            <p className="text-[12px] leading-[16px] text-[#1d2d33]" style={almarai}>{f}</p>
          </div>
        ))}
      </div>

      {/* Two column tables */}
      <div className="flex gap-[20px] items-start w-full shrink-0">
        {/* Offer summary */}
        <div className="border border-[rgba(48,63,70,0.2)] flex flex-[1_0_0] flex-col overflow-hidden rounded-[14px] min-w-0">
          <div className="border-b border-[rgba(48,63,70,0.2)] px-[20px] py-[14px]">
            <p className="text-[16px] leading-[20px] uppercase text-[#1d2d33]" style={oxanium}>ملخص العرض</p>
          </div>
          {offerSummary.map(([k, v], i) => (
            <div
              key={k}
              className={`flex items-center justify-between px-[20px] py-[12px] ${i < offerSummary.length - 1 ? 'border-b border-[rgba(48,63,70,0.2)]' : ''}`}
            >
              <p className="text-[14px] leading-[23px] text-[rgba(48,63,70,0.7)]" style={almarai}>{k}</p>
              <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>{v}</p>
            </div>
          ))}
        </div>

        {/* Payment breakdown */}
        <div className="border border-[rgba(48,63,70,0.2)] flex flex-[1_0_0] flex-col overflow-hidden rounded-[14px] min-w-0">
          <div className="border-b border-[rgba(48,63,70,0.2)] px-[20px] py-[14px]">
            <p className="text-[16px] leading-[20px] uppercase text-[#1d2d33]" style={oxanium}>تفصيل المدفوعات</p>
          </div>
          {paymentBreakdown.map(([k, v], i) => (
            <div
              key={k}
              className={`flex items-center justify-between px-[20px] py-[12px] ${i < paymentBreakdown.length - 1 ? 'border-b border-[rgba(48,63,70,0.2)]' : ''}`}
            >
              <p className="text-[14px] leading-[23px] text-[rgba(48,63,70,0.7)]" style={almarai}>{k}</p>
              <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>{v}</p>
            </div>
          ))}
          <div className="bg-[#f4f5f3] flex items-center justify-between px-[20px] py-[14px]">
            <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={almarai}>الدفعة الشهرية من</p>
            <p className="text-[20px] leading-[24px] uppercase text-[#003e52]" style={oxanium}>3,648 ⃁</p>
          </div>
        </div>
      </div>

      {/* Key facts */}
      <div className="border border-[rgba(48,63,70,0.2)] overflow-hidden rounded-[14px] w-full shrink-0">
        <div className="border-b border-[rgba(48,63,70,0.2)] px-[20px] py-[14px]">
          <p className="text-[16px] leading-[20px] uppercase text-[#1d2d33]" style={oxanium}>الحقائق الرئيسية</p>
        </div>
        <div className="grid grid-cols-2">
          {keyFacts.map(([k, v], i) => (
            <div
              key={k}
              className={`flex items-center justify-between px-[20px] py-[12px] ${i % 2 === 0 ? 'border-r border-[rgba(48,63,70,0.2)]' : ''} ${i < keyFacts.length - 2 ? 'border-b border-[rgba(48,63,70,0.2)]' : ''}`}
            >
              <p className="text-[14px] leading-[23px] text-[rgba(48,63,70,0.7)]" style={almarai}>{k}</p>
              <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={almarai}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </TaasPageLayout>
  );
}
