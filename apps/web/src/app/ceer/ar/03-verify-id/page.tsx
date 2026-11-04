'use client';
import { useState } from 'react';
import Link from 'next/link';
import TaasPageLayout from '../../_components/TaasPageLayout';

const almarai: React.CSSProperties = { fontFamily: "'Almarai', sans-serif" };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };
const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };

export default function VerifyIdArPage() {
  const [nid, setNid] = useState('');

  const footer = (
    <>
      <div className="flex gap-[8px] items-center shrink-0">
        <div className="overflow-hidden shrink-0 size-[16px] relative">
          <div className="absolute inset-[8.33%_12.5%]">
            <img alt="" className="block max-w-none size-full" src="/taas/icon-lock-small.svg" />
          </div>
        </div>
        <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] whitespace-nowrap" style={almarai}>
          يمكنك التوقف في أي وقت — لن يُقدَّم أي طلب حتى تؤكد طلبك.
        </p>
      </div>
      <div className="flex gap-[12px] items-center shrink-0">
        <Link
          href="/ceer/ar/02-what-happens-next"
          className="border border-[rgba(48,63,70,0.2)] flex gap-[6px] items-center justify-center min-w-[120px] px-[18px] py-[12px] rounded-[8px] shrink-0 relative overflow-hidden bg-white"
        >
          <p className="relative text-[12px] leading-[19px] text-[#1d2d33] uppercase whitespace-nowrap" style={oxanium}>
            إلغاء
          </p>
        </Link>
        <Link
          href="/ceer/ar/04-nafath-approve"
          className="border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center min-w-[120px] px-[18px] py-[12px] rounded-[8px] shrink-0 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#003e52] rounded-[8px]" />
          <p className="relative text-[12px] leading-[19px] text-white uppercase whitespace-pre" style={oxanium}>
            {'متابعة  →'}
          </p>
        </Link>
      </div>
    </>
  );

  return (
    <TaasPageLayout currentStep={2} lang="AR" footer={footer}>
      {/* Page title */}
      <div className="flex flex-col gap-[8px] items-start w-full shrink-0 text-[#1d2d33]">
        <p className="text-[32px] leading-[36px] uppercase w-full" style={oxanium}>
          أدخل هويتك المحققة
        </p>
        <p className="text-[16px] leading-[22px] w-full" style={almarai}>
          للمتابعة، أدخل رقم هويتك الوطنية أو رقم الإقامة للتحقق من هويتك مع تموّل.
        </p>
      </div>

      {/* Two columns */}
      <div className="flex gap-[24px] items-start shrink-0 w-full">
        {/* input + how it works */}
        <div className="flex flex-1 min-w-0 flex-col gap-[24px] items-start">
          {/* ID input field */}
          <div className="flex flex-col gap-[6px] items-start shrink-0 w-full">
            <div className="flex gap-[2px] items-start text-[14px] leading-[23px]" style={almarai}>
              <p className="text-[#1d2d33]">رقم الهوية الوطنية / الإقامة</p>
              <p className="text-[#d92d20]">*</p>
            </div>
            <div className="bg-white border border-[rgba(48,63,70,0.2)] flex gap-[8px] items-center px-[14px] py-[10px] rounded-[8px] shrink-0 w-full shadow-[0px_1px_1px_rgba(10,13,18,0.05)]">
              <div className="flex flex-1 min-w-0 gap-[8px] items-center">
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="1XXXXXXXXX"
                  value={nid}
                  onChange={(e) => setNid(e.target.value)}
                  className="flex-1 min-w-0 bg-transparent border-none outline-none text-[16px] leading-[22px] text-[rgba(48,63,70,0.7)]"
                  style={saira}
                />
              </div>
              <img alt="" className="size-[16px] shrink-0" src="/taas/icon-circle-help2.svg" />
            </div>
            <p className="text-[14px] leading-[23px] text-[#1d2d33] w-full" style={almarai}>
              يجب أن يتطابق مع الهوية المسجّلة في أبشر.
            </p>
          </div>

          {/* How verification works */}
          <div className="border border-[rgba(48,63,70,0.2)] flex flex-col gap-[18px] items-start p-[24px] rounded-[14px] shrink-0 w-full">
            <p className="text-[20px] leading-[21px] text-[#1d2d33] uppercase whitespace-nowrap" style={oxanium}>
              كيف يعمل التحقق
            </p>
            {[
              { num: '1', title: 'أدخل هويتك', desc: 'رقم هويتك الوطنية أو الإقامة المسجّل في أبشر.' },
              { num: '2', title: 'اعتمد في نفاذ', desc: 'افتح تطبيق نفاذ وأكّد رقم التحقق الذي سنعرضه لك.' },
              { num: '3', title: 'تأكيد ملكية الجوال', desc: 'نتحقق من رقم جوالك عبر قناة حكومية آمنة.' },
            ].map((step) => (
              <div key={step.num} className="flex gap-[14px] items-start shrink-0 w-full">
                <div className="bg-[#f4f5f3] flex items-center justify-center rounded-[16px] shrink-0 size-[32px]">
                  <p className="text-[14px] leading-[23px] text-[#003e52] text-center whitespace-nowrap" style={saira}>{step.num}</p>
                </div>
                <div className="flex flex-1 min-w-0 flex-col gap-[2px] items-start text-[#1d2d33] text-[14px] leading-[23px]" style={almarai}>
                  <p className="w-full">{step.title}</p>
                  <p className="w-full">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secure verification panel */}
        <div className="bg-[#f4f5f3] flex flex-col gap-[14px] items-start p-[24px] rounded-[14px] shrink-0 w-[340px]">
          <div className="bg-white flex items-center justify-center rounded-[12px] shrink-0 size-[44px]">
            <div className="overflow-hidden shrink-0 size-[22px] relative">
              <div className="absolute inset-[8.33%_16.67%]">
                <img alt="" className="block max-w-none size-full" src="/taas/icon-shield-verify.svg" />
              </div>
            </div>
          </div>
          <p className="text-[16px] leading-[22px] text-[#1d2d33]" style={almarai}>تحقق آمن</p>
          <p className="text-[14px] leading-[23px] text-[#1d2d33] w-full" style={almarai}>
            معلوماتك مشفرة ولا تُشارك إلا مع الجهات الحكومية المعتمدة للتحقق من هويتك.
          </p>
          <div className="bg-[rgba(48,63,70,0.2)] h-px shrink-0 w-full" />
          <div className="bg-[#f4f5f3] flex gap-[6px] items-center px-[10px] py-[4px] rounded-[999px] shrink-0 text-[#0b7a4b] text-[12px] whitespace-nowrap">
            <p style={{ fontFamily: "'Almarai', sans-serif", lineHeight: '21px' }}>نفاذ</p>
            <p style={saira}>Nafath</p>
          </div>
          <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] w-full" style={almarai}>
            التحقق مدعوم بنفاذ — منصة الوصول الموحدة الوطنية.
          </p>
        </div>
      </div>
    </TaasPageLayout>
  );
}
