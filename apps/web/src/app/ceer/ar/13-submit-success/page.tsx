import Link from 'next/link';
import TaasPageLayout from '../../_components/TaasPageLayout';

const almarai: React.CSSProperties = { fontFamily: "'Almarai', sans-serif" };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };
const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };

const footer = (
  <div className="flex items-center justify-center w-full">
    <Link
      href="/ceer/ar"
      className="border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center px-[18px] py-[12px] rounded-[8px] shrink-0 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#003e52] rounded-[8px]" />
      <p className="relative text-[12px] leading-[19px] text-white uppercase" style={oxanium}>
        العودة إلى قائمة المنتجات
      </p>
    </Link>
  </div>
);

export default function SubmitSuccessArPage() {
  return (
    <TaasPageLayout currentStep={6} lang="AR" footer={footer}>
      {/* Success hero — centred */}
      <div className="flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center w-full py-[40px]">
        {/* Illustration */}
        <div className="bg-[#f4f5f3] border border-[rgba(48,63,70,0.2)] flex items-center justify-center rounded-full size-[96px] shrink-0">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 25l10 10 18-20" stroke="#12b76a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-[12px] items-center text-center max-w-[520px]">
          <p className="text-[32px] leading-[36px] uppercase text-[#1d2d33]" style={oxanium}>
            تم تقديم الطلب
          </p>
          <p className="text-[16px] leading-[24px] text-[rgba(48,63,70,0.7)]" style={almarai}>
            تم إرسال طلب تمويلك إلى البنك الأهلي السعودي للمراجعة. ستتلقى إشعارًا خلال 1-2 يوم عمل بنتيجة طلبك.
          </p>
        </div>

        {/* Reference box */}
        <div className="border border-[rgba(48,63,70,0.2)] flex gap-[32px] items-center px-[32px] py-[20px] rounded-[14px] shrink-0">
          <div className="flex flex-col gap-[4px]">
            <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] uppercase tracking-widest" style={almarai}>رقم مرجع الطلب</p>
            <p className="text-[20px] leading-[24px] uppercase text-[#1d2d33]" style={oxanium}>AELG-2026-05-18-1123</p>
          </div>
          <div className="bg-[rgba(48,63,70,0.2)] h-[40px] w-px shrink-0" />
          <div className="flex flex-col gap-[4px]">
            <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] uppercase tracking-widest" style={almarai}>البنك</p>
            <p className="text-[16px] leading-[23px] text-[#1d2d33]" style={almarai}>البنك الأهلي السعودي</p>
          </div>
          <div className="bg-[rgba(48,63,70,0.2)] h-[40px] w-px shrink-0" />
          <div className="flex flex-col gap-[4px]">
            <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] uppercase tracking-widest" style={almarai}>الحالة</p>
            <div className="flex gap-[6px] items-center">
              <div className="bg-[#12b76a] rounded-full size-[8px]" />
              <p className="text-[16px] leading-[23px] text-[#12b76a]" style={almarai}>قيد المراجعة</p>
            </div>
          </div>
        </div>

        {/* Confirmation note */}
        <p className="text-[14px] leading-[23px] text-[rgba(48,63,70,0.7)] text-center" style={almarai}>
          تم إرسال تأكيد إلى رقم جوالك وعنوان بريدك الإلكتروني المسجّلَين.
        </p>
      </div>
    </TaasPageLayout>
  );
}
