import Link from 'next/link';
import TaasPageLayout from '../_components/TaasPageLayout';

const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

function CheckedBox() {
  return (
    <div className="flex items-center justify-center py-[10px] shrink-0">
      <div className="bg-[#003e52] border border-[#003e52] overflow-clip rounded-[6px] size-[20px] flex items-center justify-center">
        <img alt="" className="size-[12px]" src="/taas/icon-checkbox-check.svg" />
      </div>
    </div>
  );
}

function ConsentRow({ title, description, linkLabel }: { title: string; description: string; linkLabel: string }) {
  return (
    <div className="flex gap-[16px] items-start py-[10px] w-full">
      <div className="flex flex-[1_0_0] gap-[12px] items-start min-w-px">
        <CheckedBox />
        <div className="flex flex-[1_0_0] flex-col gap-[2px] leading-[23px] min-w-px text-[#1d2d33] text-[14px]" style={saira}>
          <p className="w-full">{title}</p>
          <p className="w-full">{description}</p>
        </div>
      </div>
      <div className="flex gap-[6px] items-center shrink-0">
        <img alt="" className="size-[14px]" src="/taas/icon-file.svg" />
        <p className="text-[14px] text-[#003e52] leading-[23px] whitespace-nowrap" style={saira}>{linkLabel}</p>
      </div>
    </div>
  );
}

export default function ConsentsContractsPage() {
  const footer = (
    <>
      <div className="flex gap-[8px] items-center">
        <img alt="" className="size-[16px]" src="/taas/icon-circle-info.svg" />
        <p className="text-[12px] text-[rgba(48,63,70,0.7)] leading-[16px] whitespace-nowrap" style={saira}>
          You can withdraw your consent at any time from your Tamawal account.
        </p>
      </div>
      <div className="flex gap-[12px] items-center">
        <button className="relative border border-[rgba(48,63,70,0.2)] flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
          <span className="absolute bg-white inset-0 rounded-[8px]" aria-hidden />
          <span className="absolute inset-0 rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" aria-hidden />
          <span className="relative text-[12px] uppercase text-[#1d2d33]" style={oxanium}>Back</span>
        </button>
        <Link
          href="/ceer/07-personal-details"
          className="relative border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
        >
          <span className="absolute bg-[#003e52] inset-0 rounded-[8px]" aria-hidden />
          <span className="absolute inset-0 rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" aria-hidden />
          <span className="relative text-[12px] uppercase text-white whitespace-pre" style={oxanium}>{`Accept & continue  →`}</span>
        </Link>
      </div>
    </>
  );

  return (
    <TaasPageLayout currentStep={3} footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] w-full">
        <p className="text-[32px] uppercase text-[#1d2d33] leading-[36px]" style={oxanium}>{`Consents & disclosures`}</p>
        <p className="text-[16px] text-[#1d2d33] leading-[22px]" style={saira}>
          Please review and accept the required consents and agreements to continue your application.
        </p>
      </div>

      {/* Main content */}
      <div className="flex gap-[24px] items-start w-full">
        {/* Left column */}
        <div className="flex flex-[1_0_0] flex-col gap-[20px] min-w-px">
          {/* Required Consents */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center justify-between">
              <p className="text-[12px] text-[rgba(48,63,70,0.7)] leading-[16px] whitespace-nowrap" style={saira}>REQUIRED CONSENTS</p>
              <p className="text-[12px] text-[#12b76a] leading-[16px] whitespace-nowrap" style={saira}>6 of 6 accepted</p>
            </div>
            <div className="border border-[rgba(48,63,70,0.2)] flex flex-col px-[20px] py-[4px] rounded-[14px]">
              <ConsentRow
                title="Tamawal consent"
                description="I allow Tamawal to collect, process and store my personal data to assess my eligibility."
                linkLabel="View details"
              />
              <div className="bg-[#f4f5f3] h-px w-full" />
              <ConsentRow
                title="SIMAH consent"
                description="I allow Tamawal to request my credit report from SIMAH."
                linkLabel="View details"
              />
              <div className="bg-[#f4f5f3] h-px w-full" />
              <ConsentRow
                title="Nafath consent"
                description="I allow identity verification and retrieval of my data from government services."
                linkLabel="View details"
              />
              <div className="bg-[#f4f5f3] h-px w-full" />
              <ConsentRow
                title="GOSI consent"
                description="I allow retrieval of my employment and income details from GOSI."
                linkLabel="View details"
              />
            </div>
          </div>

          {/* Agreements & Disclosures */}
          <div className="flex flex-col gap-[8px]">
            <p className="text-[12px] text-[rgba(48,63,70,0.7)] leading-[16px] whitespace-nowrap" style={saira}>{`AGREEMENTS & DISCLOSURES`}</p>
            <div className="border border-[rgba(48,63,70,0.2)] flex flex-col px-[20px] py-[4px] rounded-[14px]">
              <ConsentRow
                title="Tamawal Terms & Conditions"
                description="I have read and agree to the Tamawal Terms & Conditions."
                linkLabel="View document"
              />
              <div className="bg-[#f4f5f3] h-px w-full" />
              <ConsentRow
                title="SAMA financing disclosures"
                description="I have read and agree to the Saudi Central Bank financing disclosures."
                linkLabel="View document"
              />
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="bg-[#f4f5f3] flex flex-col gap-[14px] p-[24px] rounded-[14px] shrink-0 w-[300px]">
          <div className="bg-white flex items-center justify-center rounded-[12px] size-[44px]">
            <img alt="" className="size-[22px]" src="/taas/icon-shield-22.svg" />
          </div>
          <p className="text-[16px] text-[#1d2d33] leading-[22px] whitespace-nowrap" style={saira}>Why we need your consent</p>
          <p className="text-[14px] text-[#1d2d33] leading-[23px]" style={saira}>
            These consents let Tamawal securely retrieve and verify your information from government and financial entities, so you only see offers you are eligible for.
          </p>
          <div className="bg-[#f4f5f3] h-px w-full" />
          <p className="text-[12px] text-[rgba(48,63,70,0.7)] leading-[16px] whitespace-nowrap" style={saira}>Data sources</p>
          <div className="flex gap-[8px] items-center flex-wrap">
            {['SIMAH', 'GOSI', 'Nafath', 'ELM'].map((src) => (
              <div key={src} className="bg-white border border-[rgba(48,63,70,0.2)] flex items-center px-[10px] py-[4px] rounded-[999px]">
                <p className="text-[12px] text-[#003e52] leading-[16px] whitespace-nowrap" style={saira}>{src}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TaasPageLayout>
  );
}
