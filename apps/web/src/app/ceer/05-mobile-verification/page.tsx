import Link from 'next/link';
import TaasPageLayout from '../_components/TaasPageLayout';

const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

export default function MobileVerificationPage() {
  const footer = (
    <>
      <div className="flex gap-[8px] items-center">
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <img alt="" className="block size-full" src="/taas/icon-lock.svg" />
        </div>
        <p className="text-[12px] text-[rgba(48,63,70,0.7)] whitespace-nowrap" style={saira}>
          Uses secure government channels only.
        </p>
      </div>
      <div className="flex gap-[12px] items-center">
        <button className="relative border border-[rgba(48,63,70,0.2)] flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
          <span className="absolute bg-white inset-0 rounded-[8px]" aria-hidden />
          <span className="absolute inset-0 rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" aria-hidden />
          <span className="relative text-[12px] uppercase text-[#1d2d33]" style={oxanium}>Cancel</span>
        </button>
        <Link
          href="/ceer/06-consents-contracts"
          className="relative border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
        >
          <span className="absolute bg-[#003e52] inset-0 rounded-[8px]" aria-hidden />
          <span className="absolute inset-0 rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" aria-hidden />
          <span className="relative text-[12px] uppercase text-white whitespace-pre" style={oxanium}>{`Continue  →`}</span>
        </Link>
      </div>
    </>
  );

  return (
    <TaasPageLayout currentStep={2} footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] w-full">
        <p className="text-[32px] uppercase text-[#1d2d33] leading-[36px]" style={oxanium}>
          Verifying mobile ownership
        </p>
        <p className="text-[16px] text-[#1d2d33] leading-[22px]" style={saira}>
          Your identity is verified. We&apos;re now confirming that your mobile number belongs to you through a secure government channel.
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
                <p className="text-[12px] text-[#1d2d33] leading-[16px]" style={saira}>Verified National ID / Iqama</p>
                <p className="text-[16px] text-[#1d2d33] leading-[22px]" style={saira}>1 •••• •••• 34</p>
              </div>
            </div>
            <div className="bg-[#f4f5f3] flex items-center px-[10px] py-[3px] rounded-[999px]">
              <p className="text-[12px] text-[#067647] leading-[16px] whitespace-nowrap" style={saira}>Verified</p>
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
                  <p className="text-[12px] text-[#1d2d33] leading-[16px]" style={saira}>Mobile number</p>
                  <p className="text-[16px] text-[#1d2d33] leading-[22px]" style={saira}>+966 5• ••• 1634</p>
                </div>
              </div>
              <div className="bg-[#f4f5f3] flex items-center px-[10px] py-[3px] rounded-[999px]">
                <p className="text-[12px] text-[#003e52] leading-[16px] whitespace-nowrap" style={saira}>In progress</p>
              </div>
            </div>
            {/* Progress bar */}
            <div className="bg-[#f4f5f3] h-[8px] overflow-clip rounded-[4px] w-full">
              <div className="bg-[#003e52] h-[8px] rounded-[4px]" style={{ width: '62%' }} />
            </div>
            <p className="text-[12px] text-[#1d2d33] leading-[16px] whitespace-nowrap" style={saira}>
              Verifying mobile ownership… This may take a few moments.
            </p>
          </div>

          {/* What happens next */}
          <div className="border border-[rgba(48,63,70,0.2)] flex flex-col gap-[14px] p-[20px] rounded-[14px]">
            <p className="text-[16px] text-[#1d2d33] leading-[22px] whitespace-nowrap" style={saira}>What happens next?</p>

            {/* Step 1 — done */}
            <div className="flex items-center justify-between">
              <div className="flex gap-[12px] items-center">
                <div className="bg-[#12b76a] flex items-center justify-center rounded-[12px] size-[24px] shrink-0">
                  <img alt="" className="size-[12px]" src="/taas/icon-check-sm.svg" />
                </div>
                <p className="text-[14px] text-[#1d2d33] leading-[23px] whitespace-nowrap" style={saira}>Identity verified with Nafath</p>
              </div>
              <div className="bg-[#f4f5f3] flex items-center px-[10px] py-[3px] rounded-[999px]">
                <p className="text-[12px] text-[#067647] leading-[16px] whitespace-nowrap" style={saira}>Completed</p>
              </div>
            </div>

            {/* Step 2 — in progress */}
            <div className="flex items-center justify-between">
              <div className="flex gap-[12px] items-center">
                <div className="bg-[#003e52] flex items-center justify-center rounded-[12px] size-[24px] shrink-0">
                  <p className="text-[12px] text-white leading-[16px] text-center" style={saira}>2</p>
                </div>
                <p className="text-[14px] text-[#1d2d33] leading-[23px] whitespace-nowrap" style={saira}>Mobile ownership confirmation</p>
              </div>
              <div className="bg-[#f4f5f3] flex items-center px-[10px] py-[3px] rounded-[999px]">
                <p className="text-[12px] text-[#003e52] leading-[16px] whitespace-nowrap" style={saira}>In progress</p>
              </div>
            </div>

            {/* Step 3 — pending */}
            <div className="flex items-center justify-between">
              <div className="flex gap-[12px] items-center">
                <div className="bg-white border border-[rgba(48,63,70,0.2)] flex items-center justify-center rounded-[12px] size-[24px] shrink-0">
                  <p className="text-[12px] text-[#1d2d33] leading-[16px] text-center" style={saira}>3</p>
                </div>
                <p className="text-[14px] text-[#1d2d33] leading-[23px] whitespace-nowrap" style={saira}>{`Continue to consents & data validation`}</p>
              </div>
              <div className="bg-[#f4f5f3] flex items-center px-[10px] py-[3px] rounded-[999px]">
                <p className="text-[12px] text-[#1d2d33] leading-[16px] whitespace-nowrap" style={saira}>Pending</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar card */}
        <div className="bg-[#f4f5f3] flex flex-col gap-[12px] p-[24px] rounded-[14px] shrink-0 w-[300px]">
          <div className="bg-white flex items-center justify-center rounded-[12px] size-[44px]">
            <img alt="" className="size-[22px]" src="/taas/icon-shield-22.svg" />
          </div>
          <p className="text-[16px] text-[#1d2d33] leading-[22px] whitespace-nowrap" style={saira}>About this step</p>
          <p className="text-[14px] text-[#1d2d33] leading-[23px]" style={saira}>
            Tamawal checks that this mobile number is registered to you with official government services. This protects your account and your financing application.
          </p>
        </div>
      </div>
    </TaasPageLayout>
  );
}
