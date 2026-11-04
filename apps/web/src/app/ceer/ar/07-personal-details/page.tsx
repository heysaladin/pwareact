import Link from 'next/link';
import TaasPageLayout from '../../_components/TaasPageLayout';

const almarai: React.CSSProperties = { fontFamily: "'Almarai', sans-serif" };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

function PillOption({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className="flex items-center px-[16px] py-[8px] rounded-[999px] shrink-0"
      style={{
        background: active ? '#f4f5f3' : 'white',
        border: active ? '1.5px solid #003e52' : '1px solid rgba(48,63,70,0.2)',
        color: active ? '#003e52' : '#1d2d33',
      }}
    >
      <p className="text-[14px] leading-[23px] whitespace-nowrap" style={almarai}>{label}</p>
    </div>
  );
}

function InputField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-[1_0_0] flex-col gap-[6px] min-w-px">
      <div className="flex gap-[2px] items-start leading-[23px] text-[14px]" style={almarai}>
        <p className="text-[#1d2d33] shrink-0">{label}</p>
        <p className="text-[#d92d20] shrink-0">*</p>
      </div>
      <div className="bg-white border border-[rgba(48,63,70,0.2)] drop-shadow-[0px_1px_1px_rgba(10,13,18,0.05)] flex gap-[8px] items-center px-[14px] py-[10px] rounded-[8px] w-full">
        <p className="flex-[1_0_0] text-[16px] text-[#1d2d33] leading-[22px] min-w-px" style={almarai}>{value}</p>
      </div>
    </div>
  );
}

function AccordionRow({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div className="border-t border-[rgba(48,63,70,0.2)] flex items-center justify-between px-[16px] py-[12px] w-full first:border-t-0">
      <div className="flex gap-[12px] items-center">
        <div className="bg-[#f4f5f3] flex items-center justify-center rounded-[12px] size-[32px] shrink-0">
          <img alt="" className="size-[16px]" src={icon} />
        </div>
        <div className="flex flex-col text-[#1d2d33] whitespace-nowrap">
          <p className="text-[14px] leading-[23px]" style={almarai}>{title}</p>
          <p className="text-[12px] leading-[16px]" style={almarai}>{subtitle}</p>
        </div>
      </div>
      <img alt="" className="size-[18px]" src="/taas/icon-chev-down.svg" />
    </div>
  );
}

export default function PersonalDetailsArPage() {
  const footer = (
    <>
      <div className="flex gap-[8px] items-center">
        <img alt="" className="size-[16px]" src="/taas/icon-lock.svg" />
        <p className="text-[12px] text-[rgba(48,63,70,0.7)] leading-[16px] whitespace-nowrap" style={almarai}>
          جميع المعلومات سرية تامًا.
        </p>
      </div>
      <div className="flex gap-[12px] items-center">
        <button className="relative border border-[rgba(48,63,70,0.2)] flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
          <span className="absolute bg-white inset-0 rounded-[8px]" aria-hidden />
          <span className="absolute inset-0 rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" aria-hidden />
          <span className="relative text-[12px] uppercase text-[#1d2d33]" style={oxanium}>حفظ كمسودة</span>
        </button>
        <Link
          href="/ceer/ar/08-collecting-reports"
          className="relative border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
        >
          <span className="absolute bg-[#003e52] inset-0 rounded-[8px]" aria-hidden />
          <span className="absolute inset-0 rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" aria-hidden />
          <span className="relative text-[12px] uppercase text-white whitespace-pre" style={oxanium}>{`تأكيد والتالي  →`}</span>
        </Link>
      </div>
    </>
  );

  return (
    <TaasPageLayout currentStep={4} lang="AR" footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] w-full">
        <p className="text-[32px] uppercase text-[#1d2d33] leading-[36px]" style={oxanium}>البيانات الشخصية والإفصاحات</p>
        <p className="text-[16px] text-[#1d2d33] leading-[22px]" style={almarai}>
          يرجى تقديم معلومات دقيقة — تُستخدم فقط لتقييم أهليتك للتمويل.
        </p>
      </div>

      {/* Social status & dependents */}
      <div className="flex gap-[20px] items-start w-full">
        <div className="flex flex-[1_0_0] flex-col gap-[8px] min-w-px">
          <p className="text-[14px] text-[#1d2d33] leading-[23px] whitespace-nowrap" style={almarai}>الحالة الاجتماعية *</p>
          <div className="flex gap-[8px] items-center">
            <PillOption label="أعزب/عزباء" />
            <PillOption label="متزوج/ة" active />
            <PillOption label="مطلق/ة" />
            <PillOption label="أرمل/ة" />
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col gap-[8px] min-w-px">
          <p className="text-[14px] text-[#1d2d33] leading-[23px] whitespace-nowrap" style={almarai}>عدد المعالين *</p>
          <div className="flex gap-[8px] items-center">
            <PillOption label="0" />
            <PillOption label="1" />
            <PillOption label="2" active />
            <PillOption label="3" />
            <PillOption label="4" />
            <PillOption label="5+" />
          </div>
        </div>
      </div>

      {/* Form fields */}
      <div className="flex flex-col gap-[16px] w-full">
        <div className="flex gap-[20px] items-start">
          <InputField label="بنك الراتب" value="مصرف الراجحي" />
          <InputField label="المدينة" value="الرياض" />
        </div>
        <div className="flex gap-[20px] items-start">
          <InputField label="ملكية السكن" value="مستأجر" />
          <InputField label="نوع السكن" value="شقة" />
        </div>
        <div className="flex gap-[20px] items-start">
          <InputField label="المستوى التعليمي" value="بكالوريوس" />
          <InputField label="الرسوم التعليمية الشهرية" value="1,200 ⃁" />
        </div>
      </div>

      {/* Additional disclosures */}
      <div className="flex flex-col gap-[8px] w-full">
        <p className="text-[12px] text-[rgba(48,63,70,0.7)] leading-[16px] whitespace-nowrap" style={almarai}>إفصاحات إضافية</p>
        <div className="border border-[rgba(48,63,70,0.2)] flex flex-col overflow-clip rounded-[14px] w-full">
          <AccordionRow icon="/taas/icon-brief.svg" title="تفاصيل التوظيف" subtitle="جهة العمل، القطاع، تاريخ البدء" />
          <AccordionRow icon="/taas/icon-coins.svg" title="دخل إضافي" subtitle="دخل الإيجار أو الأعمال أو غيره" />
          <AccordionRow icon="/taas/icon-card.svg" title="الالتزامات المالية" subtitle="القروض والبطاقات والالتزامات الأخرى" />
        </div>
      </div>
    </TaasPageLayout>
  );
}
