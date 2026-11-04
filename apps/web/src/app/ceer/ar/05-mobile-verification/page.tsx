import Link from 'next/link';
import TaasPageLayout from '../../_components/TaasPageLayout';

const almarai: React.CSSProperties = { fontFamily: "'Almarai', sans-serif" };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };
const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };

export default function MobileVerificationArPage() {
  const footer = (
    <>
      <div className="flex gap-[8px] items-center">
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <img alt="" className="block size-full" src="/taas/icon-lock.svg" />
        </div>
        <p className="text-[12px] text-[rgba(48,63,70,0.7)] whitespace-nowrap" style={almarai}>
          يستخدم قنوات حكومية آمنة فقط.
        </p>
      </div>
      <div className="flex gap-[12px] items-center">
        <button className="relative border border-[rgba(48,63,70,0.2)] flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
          <span className="absolute bg-white inset-0 rounded-[8px]" aria-hidden />
          <span className="absolute inset-0 rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" aria-hidden />
          <span className="relative text-[12px] uppercase text-[#1d2d33]" style={oxanium}>إلغاء</span>
        </button>
        <Link
          href="/ceer/ar/06-consents-contracts"
          className="relative border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
        >
          <span className="absolute bg-[#003e52] inset-0 rounded-[8px]" aria-hidden />
          <span className="absolute inset-0 rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" aria-hidden />
          <span className="relative text-[12px] uppercase text-white whitespace-pre" style={oxanium}>{`متابعة  →`}</span>
        </Link>
      </div>
    </>
  );

  return (
    <TaasPageLayout currentStep={2} lang="AR" footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] w-full">
        <p className="text-[32px] uppercase text-[#1d2d33] leading-[36px]" style={oxanium}>
          التحقق من ملكية الجوال
        </p>
        <p className="text-[16px] text-[#1d2d33] leading-[22px]" style={almarai}>
          تم التحقق من هويتك. نقوم الآن بتأكيد أن رقم جوالك مسجّل باسمك عبر قناة حكومية آمنة.
        </p>
      </div>

      {/* Main content */}
      <div className="flex gap-[20px] items-start w-full">
        {/* Left column */}
        <div className="flex flex-[1_0_0] flex-col gap-[16px] min-w-px">
          {/* Verified ID card */}
          <div className="border border-[rgba(48,63,70,0.2)] flex items-center justify-between px-[20px] py-[16px] rounded-[12px]">
            <div className="flex gap-[14px] items-center">
              <div className="bg-[#f4f5f3] flex items-center justify-center rounded-[12px] size-[40px] shrink-0">
                <img alt="" className="size-[20px]" src="/taas/icon-id.svg" />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-[12px] text-[#1d2d33] leading-[16px]" style={almarai}>الهوية الوطنية / الإقامة المحققة</p>
                <p className="text-[16px] text-[#1d2d33] leading-[22px]" style={saira}>1 •••• •••• 34</p>
              </div>
            </div>
            <div className="bg-[#f4f5f3] flex items-center px-[10px] py-[3px] rounded-[999px]">
              <p className="text-[12px] text-[#067647] leading-[16px] whitespace-nowrap" style={almarai}>محقق</p>
            </div>
          </div>

          {/* Mobile number — in progress */}
          <div className="bg-[#f4f5f3] border-[#003e52] border-[1.5px] flex flex-col gap-[14px] px-[20px] py-[16px] rounded-[12px]">
            <div className="flex items-center justify-between">
              <div className="flex gap-[14px] items-center">
                <div className="bg-white flex items-center justify-center rounded-[12px] size-[40px] shrink-0">
                  <img alt="" className="size-[20px]" src="/taas/icon-phone.svg" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="text-[12px] text-[#1d2d33] leading-[16px]" style={almarai}>رقم الجوال</p>
                  <p className="text-[16px] text-[#1d2d33] leading-[22px]" style={saira}>+966 5• ••• 1634</p>
                </div>
              </div>
              <div className="bg-[#f4f5f3] flex items-center px-[10px] py-[3px] rounded-[999px]">
                <p className="text-[12px] text-[#003e52] leading-[16px] whitespace-nowrap" style={almarai}>قيد التنفيذ</p>
              </div>
            </div>
            <div className="bg-[#f4f5f3] h-[8px] overflow-clip rounded-[4px] w-full">
              <div className="bg-[#003e52] h-[8px] rounded-[4px]" style={{ width: '62%' }} />
            </div>
            <p className="text-[12px] text-[#1d2d33] leading-[16px] whitespace-nowrap" style={almarai}>
              جارٍ التحقق من ملكية الجوال… قد يستغرق بضع لحظات.
            </p>
          </div>

          {/* What happens next */}
          <div className="border border-[rgba(48,63,70,0.2)] flex flex-col gap-[14px] p-[20px] rounded-[14px]">
            <p className="text-[16px] text-[#1d2d33] leading-[22px] whitespace-nowrap" style={almarai}>ماذا يحدث بعد ذلك؟</p>

            <div className="flex items-center justify-between">
              <div className="flex gap-[12px] items-center">
                <div className="bg-[#12b76a] flex items-center justify-center rounded-[12px] size-[24px] shrink-0">
                  <img alt="" className="size-[12px]" src="/taas/icon-check-sm.svg" />
                </div>
                <p className="text-[14px] text-[#1d2d33] leading-[23px] whitespace-nowrap" style={almarai}>التحقق من الهوية عبر نفاذ</p>
              </div>
              <div className="bg-[#f4f5f3] flex items-center px-[10px] py-[3px] rounded-[999px]">
                <p className="text-[12px] text-[#067647] leading-[16px] whitespace-nowrap" style={almarai}>مكتمل</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-[12px] items-center">
                <div className="bg-[#003e52] flex items-center justify-center rounded-[12px] size-[24px] shrink-0">
                  <p className="text-[12px] text-white leading-[16px] text-center" style={saira}>2</p>
                </div>
                <p className="text-[14px] text-[#1d2d33] leading-[23px] whitespace-nowrap" style={almarai}>تأكيد ملكية الجوال</p>
              </div>
              <div className="bg-[#f4f5f3] flex items-center px-[10px] py-[3px] rounded-[999px]">
                <p className="text-[12px] text-[#003e52] leading-[16px] whitespace-nowrap" style={almarai}>قيد التنفيذ</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-[12px] items-center">
                <div className="bg-white border border-[rgba(48,63,70,0.2)] flex items-center justify-center rounded-[12px] size-[24px] shrink-0">
                  <p className="text-[12px] text-[#1d2d33] leading-[16px] text-center" style={saira}>3</p>
                </div>
                <p className="text-[14px] text-[#1d2d33] leading-[23px] whitespace-nowrap" style={almarai}>المتابعة إلى الموافقات والتحقق من البيانات</p>
              </div>
              <div className="bg-[#f4f5f3] flex items-center px-[10px] py-[3px] rounded-[999px]">
                <p className="text-[12px] text-[#1d2d33] leading-[16px] whitespace-nowrap" style={almarai}>قيد الانتظار</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar card */}
        <div className="bg-[#f4f5f3] flex flex-col gap-[12px] p-[24px] rounded-[14px] shrink-0 w-[300px]">
          <div className="bg-white flex items-center justify-center rounded-[12px] size-[44px]">
            <img alt="" className="size-[22px]" src="/taas/icon-shield-22.svg" />
          </div>
          <p className="text-[16px] text-[#1d2d33] leading-[22px] whitespace-nowrap" style={almarai}>عن هذه الخطوة</p>
          <p className="text-[14px] text-[#1d2d33] leading-[23px]" style={almarai}>
            تتحقق تموّل من أن رقم الجوال هذا مسجّل باسمك لدى الجهات الحكومية الرسمية. هذا يحمي حسابك وطلب تمويلك.
          </p>
        </div>
      </div>
    </TaasPageLayout>
  );
}
