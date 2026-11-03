import Link from 'next/link';
import TaasPageLayout from '../_components/TaasPageLayout';

const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };
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
      <p className="text-[14px] leading-[23px] whitespace-nowrap" style={saira}>{label}</p>
    </div>
  );
}

function InputField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-[1_0_0] flex-col gap-[6px] min-w-px">
      <div className="flex gap-[2px] items-start leading-[23px] text-[14px]" style={saira}>
        <p className="text-[#1d2d33] shrink-0">{label}</p>
        <p className="text-[#d92d20] shrink-0">*</p>
      </div>
      <div className="bg-white border border-[rgba(48,63,70,0.2)] drop-shadow-[0px_1px_1px_rgba(10,13,18,0.05)] flex gap-[8px] items-center px-[14px] py-[10px] rounded-[8px] w-full">
        <p className="flex-[1_0_0] text-[16px] text-[#1d2d33] leading-[22px] min-w-px" style={saira}>{value}</p>
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
          <p className="text-[14px] leading-[23px]" style={saira}>{title}</p>
          <p className="text-[12px] leading-[16px]" style={saira}>{subtitle}</p>
        </div>
      </div>
      <img alt="" className="size-[18px]" src="/taas/icon-chev-down.svg" />
    </div>
  );
}

export default function PersonalDetailsPage() {
  const footer = (
    <>
      <div className="flex gap-[8px] items-center">
        <img alt="" className="size-[16px]" src="/taas/icon-lock.svg" />
        <p className="text-[12px] text-[rgba(48,63,70,0.7)] leading-[16px] whitespace-nowrap" style={saira}>
          All information stays confidential.
        </p>
      </div>
      <div className="flex gap-[12px] items-center">
        <button className="relative border border-[rgba(48,63,70,0.2)] flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
          <span className="absolute bg-white inset-0 rounded-[8px]" aria-hidden />
          <span className="absolute inset-0 rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" aria-hidden />
          <span className="relative text-[12px] uppercase text-[#1d2d33]" style={oxanium}>Save as draft</span>
        </button>
        <Link
          href="/ceer/08-collecting-reports"
          className="relative border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
        >
          <span className="absolute bg-[#003e52] inset-0 rounded-[8px]" aria-hidden />
          <span className="absolute inset-0 rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" aria-hidden />
          <span className="relative text-[12px] uppercase text-white whitespace-pre" style={oxanium}>{`Confirm & next  →`}</span>
        </Link>
      </div>
    </>
  );

  return (
    <TaasPageLayout currentStep={4} footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] w-full">
        <p className="text-[32px] uppercase text-[#1d2d33] leading-[36px]" style={oxanium}>{`Personal details & disclosures`}</p>
        <p className="text-[16px] text-[#1d2d33] leading-[22px]" style={saira}>
          {`Please provide accurate information — it's used only to assess your financing eligibility.`}
        </p>
      </div>

      {/* Social status & dependents */}
      <div className="flex gap-[20px] items-start w-full">
        <div className="flex flex-[1_0_0] flex-col gap-[8px] min-w-px">
          <p className="text-[14px] text-[#1d2d33] leading-[23px] whitespace-nowrap" style={saira}>Social status *</p>
          <div className="flex gap-[8px] items-center">
            <PillOption label="Single" />
            <PillOption label="Married" active />
            <PillOption label="Divorced" />
            <PillOption label="Widowed" />
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col gap-[8px] min-w-px">
          <p className="text-[14px] text-[#1d2d33] leading-[23px] whitespace-nowrap" style={saira}>Number of dependents *</p>
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
          <InputField label="Salary bank" value="Al Rajhi Bank" />
          <InputField label="City" value="Riyadh" />
        </div>
        <div className="flex gap-[20px] items-start">
          <InputField label="Home ownership" value="Rented" />
          <InputField label="Residence type" value="Apartment" />
        </div>
        <div className="flex gap-[20px] items-start">
          <InputField label="Education level" value="Bachelor's degree" />
          <InputField label="Monthly education fees" value="⃁ 1,200" />
        </div>
      </div>

      {/* Additional disclosures */}
      <div className="flex flex-col gap-[8px] w-full">
        <p className="text-[12px] text-[rgba(48,63,70,0.7)] leading-[16px] whitespace-nowrap" style={saira}>Additional disclosures</p>
        <div className="border border-[rgba(48,63,70,0.2)] flex flex-col overflow-clip rounded-[14px] w-full">
          <AccordionRow icon="/taas/icon-brief.svg" title="Employment details" subtitle="Employer, sector, start date" />
          <AccordionRow icon="/taas/icon-coins.svg" title="Additional income" subtitle="Rental, business or other income" />
          <AccordionRow icon="/taas/icon-card.svg" title="Financial commitments" subtitle="Loans, cards and other obligations" />
        </div>
      </div>
    </TaasPageLayout>
  );
}
