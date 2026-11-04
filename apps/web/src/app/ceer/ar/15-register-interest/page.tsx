'use client';
import Link from 'next/link';
import TaasPageLayout from '../../_components/TaasPageLayout';

const almarai: React.CSSProperties = { fontFamily: "'Almarai', sans-serif" };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };
const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };

function InputField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-[6px] w-full">
      <div className="flex gap-[2px] items-start text-[14px] leading-[23px]" style={almarai}>
        <span style={{ color: '#1d2d33' }}>{label}</span>
        <span style={{ color: '#d92d20' }}>*</span>
      </div>
      <div
        className="bg-white flex gap-[8px] items-center px-[14px] py-[10px] rounded-[8px] w-full"
        style={{ border: '1px solid rgba(48,63,70,0.2)', boxShadow: '0px 1px 1px rgba(10,13,18,0.05)' }}
      >
        <p
          className="flex-1 text-[16px] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap"
          style={{ ...almarai, color: 'rgba(48,63,70,0.7)' }}
        >
          {placeholder}
        </p>
      </div>
    </div>
  );
}

export default function RegisterInterestArPage() {
  const footer = (
    <>
      <div className="flex gap-[8px] items-center shrink-0">
        <img alt="" className="shrink-0 size-[16px]" src="/taas/icon-lock.svg" />
        <p className="text-[12px] leading-[16px] whitespace-nowrap" style={{ ...almarai, color: 'rgba(48,63,70,0.7)' }}>
          نستخدم بياناتك فقط لإشعارك عند توفر هذا العرض.
        </p>
      </div>
      <div className="flex gap-[12px] items-center shrink-0">
        <Link
          href="/ceer/ar/01-preliminary-offers"
          className="flex gap-[6px] items-center justify-center min-w-[120px] px-[18px] py-[12px] rounded-[8px] relative overflow-hidden"
          style={{ border: '1px solid rgba(48,63,70,0.2)', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)' }}
        >
          <span aria-hidden className="absolute inset-0 bg-white rounded-[8px] pointer-events-none" />
          <span className="relative text-[12px] leading-[19px] uppercase text-[#1d2d33]" style={oxanium}>
            إلغاء
          </span>
          <span
            aria-hidden
            className="absolute inset-0 rounded-[8px] pointer-events-none"
            style={{ boxShadow: 'inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05)' }}
          />
        </Link>
        <Link
          href="/ceer/ar/15b-register-interest-success"
          className="flex gap-[6px] items-center justify-center min-w-[120px] px-[18px] py-[12px] rounded-[8px] relative overflow-hidden"
          style={{ border: '2px solid rgba(255,255,255,0.12)', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)' }}
        >
          <span aria-hidden className="absolute inset-0 bg-[#003e52] rounded-[8px] pointer-events-none" />
          <span className="relative text-[12px] leading-[19px] uppercase text-white" style={oxanium}>
            سجّل اهتمامك
          </span>
          <span
            aria-hidden
            className="absolute inset-0 rounded-[8px] pointer-events-none"
            style={{ boxShadow: 'inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05)' }}
          />
        </Link>
      </div>
    </>
  );

  return (
    <TaasPageLayout currentStep={5} lang="AR" footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] items-start w-full shrink-0 text-[#1d2d33]">
        <p className="text-[32px] leading-[36px] uppercase w-full" style={oxanium}>
          سجّل اهتمامك
        </p>
        <p className="text-[16px] leading-[22px] w-full" style={almarai}>
          هذه الجهة التمويلية ستنضم إلى شركاء تموّل قريباً. سجّل اهتمامك وسنبلغك فور توفر التمويل.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="flex gap-[24px] items-start w-full shrink-0">

        {/* Right panel (first in JSX = right in RTL): secure product card */}
        <div
          className="flex flex-col gap-[14px] items-start p-[24px] rounded-[14px] shrink-0 w-[340px]"
          style={{ backgroundColor: '#f4f5f3' }}
        >
          {/* Shield icon */}
          <div className="bg-white flex items-center justify-center rounded-[12px] shrink-0 size-[44px]">
            <img alt="" className="size-[22px] object-contain" src="/taas/icon-shield.svg" />
          </div>

          {/* Product name */}
          <p className="text-[16px] leading-[22px] text-[#1d2d33]" style={almarai}>
            التمويل الصغير للموظف واحتياجات أسرته اليومية
          </p>
          <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={almarai}>
            من بنك البلاد
          </p>

          {/* Divider */}
          <div className="h-px w-full" style={{ backgroundColor: 'rgba(48,63,70,0.2)' }} />

          {/* Badge */}
          <div
            className="flex gap-[6px] items-center px-[10px] py-[4px] rounded-[999px]"
            style={{ backgroundColor: '#f4f5f3' }}
          >
            <p className="text-[12px] leading-[16px] text-[#db6903]" style={almarai}>
              قريباً على تموّل
            </p>
          </div>

          {/* Offer rows */}
          <div className="flex flex-col gap-[10px] items-start w-full text-[#1d2d33]">
            <div className="flex items-center justify-between w-full">
              <p className="text-[14px] leading-[23px]" style={almarai}>معدل سنوي (APR) من</p>
              <p className="text-[16px] leading-[22px] whitespace-nowrap" style={saira}>5.66%</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="text-[14px] leading-[23px]" style={almarai}>قسط شهري من</p>
              <p className="text-[16px] leading-[22px] whitespace-nowrap" style={saira}>⃁ 1,250 / شهر</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="text-[14px] leading-[23px]" style={almarai}>مبلغ التمويل حتى</p>
              <p className="text-[16px] leading-[22px] whitespace-nowrap" style={saira}>⃁ 250,000</p>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-[12px] leading-[16px] w-full" style={{ ...almarai, color: 'rgba(48,63,70,0.7)' }}>
            تُؤكَّد الشروط النهائية والأهلية من قِبل الممول عند انضمامه إلى تموّل.
          </p>
        </div>

        {/* Left panel (second in JSX = left in RTL): form */}
        <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-0">

          {/* National ID */}
          <div className="flex flex-col gap-[6px] w-full">
            <div className="flex gap-[2px] items-start text-[14px] leading-[23px]" style={almarai}>
              <span style={{ color: '#1d2d33' }}>الهوية الوطنية / الإقامة</span>
              <span style={{ color: '#d92d20' }}>*</span>
            </div>
            <div
              className="bg-white flex gap-[8px] items-center px-[14px] py-[10px] rounded-[8px] w-full"
              style={{ border: '1px solid rgba(48,63,70,0.2)', boxShadow: '0px 1px 1px rgba(10,13,18,0.05)' }}
            >
              <p
                className="flex-1 text-[16px] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap"
                style={{ ...almarai, color: 'rgba(48,63,70,0.7)' }}
              >
                1XXXXXXXXX
              </p>
              <img alt="" className="shrink-0 size-[16px]" src="/taas/icon-circle-help.svg" />
            </div>
            <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={almarai}>
              يجب أن يتطابق مع الهوية المسجلة في أبشر.
            </p>
          </div>

          {/* City + Sector row */}
          <div className="flex gap-[20px] items-start w-full">
            <InputField label="المدينة" placeholder="اختر مدينتك" />
            <InputField label="القطاع" placeholder="اختر قطاعك" />
          </div>

          {/* Entity + Job title row */}
          <div className="flex gap-[20px] items-start w-full">
            <InputField label="الجهة" placeholder="اختر جهة عملك" />
            <InputField label="المسمى الوظيفي" placeholder="اختر مسماك الوظيفي" />
          </div>

          {/* Salary bank */}
          <InputField label="بنك الراتب" placeholder="اختر بنك راتبك" />
        </div>
      </div>
    </TaasPageLayout>
  );
}
