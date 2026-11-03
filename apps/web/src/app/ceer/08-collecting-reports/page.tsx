import Link from 'next/link';
import TaasPageLayout from '../_components/TaasPageLayout';

const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

type ProviderStatus = 'completed' | 'in-progress' | 'pending';

function ProviderRow({
  name,
  subtitle,
  status,
}: {
  name: string;
  subtitle: string;
  status: ProviderStatus;
}) {
  const statusLabel = status === 'completed' ? 'Completed' : status === 'in-progress' ? 'In progress' : 'Pending';
  const statusColor = status === 'completed' ? '#067647' : status === 'in-progress' ? '#003e52' : '#1d2d33';

  return (
    <div className="border-t border-[rgba(48,63,70,0.2)] flex items-center justify-between px-[20px] py-[14px] w-full">
      <div className="flex gap-[14px] items-center">
        {/* Status indicator */}
        <div
          className="flex items-center justify-center rounded-[14px] size-[28px] shrink-0"
          style={{ background: status === 'completed' ? '#12b76a' : '#f4f5f3' }}
        >
          {status === 'completed' ? (
            <img alt="" className="size-[14px]" src="/taas/icon-check-14.svg" />
          ) : status === 'in-progress' ? (
            <img alt="" className="size-[14px]" src="/taas/icon-loader-sm.svg" />
          ) : (
            <img alt="" className="size-[14px]" src="/taas/icon-clock.svg" />
          )}
        </div>
        {/* Provider icon */}
        <div className="bg-[#f4f5f3] flex items-center justify-center rounded-[12px] size-[36px] shrink-0">
          <img alt="" className="size-[18px]" src="/taas/icon-db.svg" />
        </div>
        <div className="flex flex-col text-[#1d2d33] whitespace-nowrap">
          <p className="text-[14px] leading-[23px]" style={saira}>{name}</p>
          <p className="text-[12px] leading-[16px]" style={saira}>{subtitle}</p>
        </div>
      </div>
      <div className="bg-[#f4f5f3] flex items-center px-[10px] py-[3px] rounded-[999px]">
        <p className="text-[12px] leading-[16px] whitespace-nowrap" style={{ ...saira, color: statusColor }}>{statusLabel}</p>
      </div>
    </div>
  );
}

function NextStep({ num, title, subtitle }: { num: string; title: string; subtitle: string }) {
  return (
    <div className="flex gap-[12px] items-start w-full">
      <div className="bg-[#f4f5f3] flex items-center justify-center rounded-[14px] size-[28px] shrink-0">
        <p className="text-[12px] text-[#003e52] leading-[16px] text-center" style={saira}>{num}</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col gap-[2px] min-w-px text-[#1d2d33]">
        <p className="text-[14px] leading-[23px] w-full" style={saira}>{title}</p>
        <p className="text-[12px] leading-[16px] w-full" style={saira}>{subtitle}</p>
      </div>
    </div>
  );
}

export default function CollectingReportsPage() {
  const footer = (
    <>
      <div className="flex gap-[8px] items-center">
        <img alt="" className="size-[16px]" src="/taas/icon-lock.svg" />
        <p className="text-[12px] text-[rgba(48,63,70,0.7)] leading-[16px] whitespace-nowrap" style={saira}>
          Your information stays encrypted throughout the process.
        </p>
      </div>
      <Link
        href="/ceer/09-eligibility-offers"
        className="relative border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
      >
        <span className="absolute bg-[#003e52] inset-0 rounded-[8px]" aria-hidden />
        <span className="absolute inset-0 rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" aria-hidden />
        <span className="relative text-[12px] uppercase text-white whitespace-pre" style={oxanium}>{`Continue  →`}</span>
      </Link>
    </>
  );

  return (
    <TaasPageLayout currentStep={4} footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] w-full">
        <p className="text-[32px] uppercase text-[#1d2d33] leading-[36px]" style={oxanium}>Collecting your reports</p>
        <p className="text-[16px] text-[#1d2d33] leading-[22px]" style={saira}>
          {`We're securely connecting with trusted government and financial providers to collect your credit and employment information.`}
        </p>
      </div>

      {/* Main content */}
      <div className="flex gap-[20px] items-start w-full">
        {/* Left: providers list */}
        <div className="border border-[rgba(48,63,70,0.2)] flex flex-[1_0_0] flex-col min-w-px overflow-clip rounded-[14px]">
          {/* Progress header */}
          <div className="bg-[#f4f5f3] flex flex-col gap-[12px] p-[20px] w-full">
            <div className="flex items-center justify-between">
              <div className="flex gap-[12px] items-center">
                <div className="bg-white flex items-center justify-center rounded-[12px] size-[40px] shrink-0">
                  <img alt="" className="size-[20px]" src="/taas/icon-loader.svg" />
                </div>
                <div className="flex flex-col gap-[2px] text-[#1d2d33] whitespace-nowrap">
                  <p className="text-[16px] leading-[22px]" style={saira}>Connecting to providers…</p>
                  <p className="text-[12px] leading-[16px]" style={saira}>This may take up to 60 seconds. Please keep this page open.</p>
                </div>
              </div>
              <p className="text-[14px] text-[#003e52] leading-[23px] whitespace-nowrap" style={saira}>3 of 5 completed</p>
            </div>
            {/* Progress bar */}
            <div className="bg-[#f4f5f3] h-[8px] overflow-clip rounded-[4px] w-full">
              <div className="bg-[#003e52] h-[8px] rounded-[4px]" style={{ width: '60%' }} />
            </div>
          </div>

          {/* Provider rows */}
          <ProviderRow name="SIMAH" subtitle="Credit report & financial obligations" status="completed" />
          <ProviderRow name="GOSI" subtitle="Employment & salary information" status="completed" />
          <ProviderRow name="Masdr" subtitle="Income verification" status="completed" />
          <ProviderRow name="Tawakkalna" subtitle="Identity & profile verification" status="in-progress" />
          <ProviderRow name="ELM" subtitle="Asset & ownership history" status="pending" />
        </div>

        {/* Right: what happens next */}
        <div className="border border-[rgba(48,63,70,0.2)] flex flex-col gap-[16px] p-[24px] rounded-[14px] shrink-0 w-[300px]">
          <p className="text-[16px] text-[#1d2d33] leading-[22px] whitespace-nowrap" style={saira}>What happens next?</p>
          <NextStep
            num="1"
            title="We collect your information"
            subtitle="Securely retrieved from authorized providers."
          />
          <NextStep
            num="2"
            title="We validate your eligibility"
            subtitle="Each provider's criteria are applied to your data."
          />
          <NextStep
            num="3"
            title="You see your final offers"
            subtitle="Compare and choose the offer that fits you."
          />
        </div>
      </div>
    </TaasPageLayout>
  );
}
