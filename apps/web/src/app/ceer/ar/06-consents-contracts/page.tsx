import Link from 'next/link';
import TaasPageLayout from '../../_components/TaasPageLayout';

const almarai: React.CSSProperties = { fontFamily: "'Almarai', sans-serif" };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };
const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };

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
        <div className="flex flex-[1_0_0] flex-col gap-[2px] leading-[23px] min-w-px text-[#1d2d33] text-[14px]" style={almarai}>
          <p className="w-full">{title}</p>
          <p className="w-full">{description}</p>
        </div>
      </div>
      <div className="flex gap-[6px] items-center shrink-0">
        <img alt="" className="size-[14px]" src="/taas/icon-file.svg" />
        <p className="text-[14px] text-[#003e52] leading-[23px] whitespace-nowrap" style={almarai}>{linkLabel}</p>
      </div>
    </div>
  );
}

export default function ConsentsContractsArPage() {
  const footer = (
    <>
      <div className="flex gap-[8px] items-center">
        <img alt="" className="size-[16px]" src="/taas/icon-circle-info.svg" />
        <p className="text-[12px] text-[rgba(48,63,70,0.7)] leading-[16px] whitespace-nowrap" style={almarai}>
          يمكنك سحب موافقتك في أي وقت من حساب تموّل.
        </p>
      </div>
      <div className="flex gap-[12px] items-center">
        <button className="relative border border-[rgba(48,63,70,0.2)] flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
          <span className="absolute bg-white inset-0 rounded-[8px]" aria-hidden />
          <span className="absolute inset-0 rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" aria-hidden />
          <span className="relative text-[12px] uppercase text-[#1d2d33]" style={oxanium}>رجوع</span>
        </button>
        <Link
          href="/ceer/ar/07-personal-details"
          className="relative border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center min-w-[120px] overflow-clip px-[18px] py-[12px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
        >
          <span className="absolute bg-[#003e52] inset-0 rounded-[8px]" aria-hidden />
          <span className="absolute inset-0 rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" aria-hidden />
          <span className="relative text-[12px] uppercase text-white whitespace-pre" style={oxanium}>{`قبول ومتابعة  →`}</span>
        </Link>
      </div>
    </>
  );

  return (
    <TaasPageLayout currentStep={3} lang="AR" footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] w-full">
        <p className="text-[32px] uppercase text-[#1d2d33] leading-[36px]" style={oxanium}>الموافقات والإفصاحات</p>
        <p className="text-[16px] text-[#1d2d33] leading-[22px]" style={almarai}>
          يرجى مراجعة الموافقات والاتفاقيات المطلوبة وقبولها للمتابعة في طلبك.
        </p>
      </div>

      {/* Main content */}
      <div className="flex gap-[24px] items-start w-full">
        {/* Left column */}
        <div className="flex flex-[1_0_0] flex-col gap-[20px] min-w-px">
          {/* Required Consents */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center justify-between">
              <p className="text-[12px] text-[rgba(48,63,70,0.7)] leading-[16px] whitespace-nowrap" style={almarai}>الموافقات المطلوبة</p>
              <p className="text-[12px] text-[#12b76a] leading-[16px] whitespace-nowrap" style={almarai}>6 من 6 مقبولة</p>
            </div>
            <div className="border border-[rgba(48,63,70,0.2)] flex flex-col px-[20px] py-[4px] rounded-[14px]">
              <ConsentRow
                title="موافقة تموّل"
                description="أسمح لتموّل بجمع ومعالجة وتخزين بياناتي الشخصية لتقييم أهليتي."
                linkLabel="عرض التفاصيل"
              />
              <div className="bg-[#f4f5f3] h-px w-full" />
              <ConsentRow
                title="موافقة SIMAH"
                description="أسمح لتموّل بطلب تقرير الائتمان الخاص بي من SIMAH."
                linkLabel="عرض التفاصيل"
              />
              <div className="bg-[#f4f5f3] h-px w-full" />
              <ConsentRow
                title="موافقة نفاذ"
                description="أسمح بالتحقق من الهوية واسترداد بياناتي من الخدمات الحكومية."
                linkLabel="عرض التفاصيل"
              />
              <div className="bg-[#f4f5f3] h-px w-full" />
              <ConsentRow
                title="موافقة GOSI"
                description="أسمح باسترداد تفاصيل توظيفي ودخلي من GOSI."
                linkLabel="عرض التفاصيل"
              />
            </div>
          </div>

          {/* Agreements & Disclosures */}
          <div className="flex flex-col gap-[8px]">
            <p className="text-[12px] text-[rgba(48,63,70,0.7)] leading-[16px] whitespace-nowrap" style={almarai}>الاتفاقيات والإفصاحات</p>
            <div className="border border-[rgba(48,63,70,0.2)] flex flex-col px-[20px] py-[4px] rounded-[14px]">
              <ConsentRow
                title="شروط وأحكام تموّل"
                description="اطلعت على شروط وأحكام تموّل وأوافق عليها."
                linkLabel="عرض الوثيقة"
              />
              <div className="bg-[#f4f5f3] h-px w-full" />
              <ConsentRow
                title="إفصاحات التمويل من ساما"
                description="اطلعت على إفصاحات التمويل من البنك المركزي السعودي وأوافق عليها."
                linkLabel="عرض الوثيقة"
              />
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="bg-[#f4f5f3] flex flex-col gap-[14px] p-[24px] rounded-[14px] shrink-0 w-[300px]">
          <div className="bg-white flex items-center justify-center rounded-[12px] size-[44px]">
            <img alt="" className="size-[22px]" src="/taas/icon-shield-22.svg" />
          </div>
          <p className="text-[16px] text-[#1d2d33] leading-[22px]" style={almarai}>لماذا نحتاج موافقتك</p>
          <p className="text-[14px] text-[#1d2d33] leading-[23px]" style={almarai}>
            تتيح هذه الموافقات لتموّل استرداد والتحقق من معلوماتك من الجهات الحكومية والمالية بشكل آمن، حتى ترى فقط العروض التي تستحقها.
          </p>
          <div className="bg-[#f4f5f3] h-px w-full" />
          <p className="text-[12px] text-[rgba(48,63,70,0.7)] leading-[16px] whitespace-nowrap" style={almarai}>مصادر البيانات</p>
          <div className="flex gap-[8px] items-center flex-wrap">
            {['SIMAH', 'GOSI', 'نفاذ', 'ELM'].map((src) => (
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
