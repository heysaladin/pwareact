'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import TaasPageLayout from '../../_components/TaasPageLayout';

const almarai: React.CSSProperties = { fontFamily: "'Almarai', sans-serif" };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };
const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };

const orderDetails = [
  ['اسم العميل', 'محمد عبدالله الغامدي'],
  ['رقم الهوية الوطنية', '1082XXXXXXX'],
  ['رقم الجوال', '+966 5X XXX XXXX'],
  ['المركبة', 'CEER EXOBOT SUV – Premium AWD 2026'],
  ['اللون', 'كوانتم جراي'],
  ['البنك', 'البنك الأهلي السعودي'],
  ['نسبة الفائدة', '4.89%'],
  ['الدفعة الشهرية', '3,648 ⃁'],
  ['الدفعة المقدمة', '45,750 ⃁'],
  ['مبلغ التمويل', '183,000 ⃁'],
  ['مدة التمويل', '60 شهرًا'],
  ['إجمالي المدفوع', '218,880 ⃁'],
  ['رقم مرجع الطلب', 'AELG-2026-05-18-1123'],
];

export default function ConfirmOrderArPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit() {
    if (!agreed || submitting) return;
    setSubmitting(true);
    setTimeout(() => router.push('/ceer/ar/13-submit-success'), 1200);
  }

  const footer = (
    <>
      <div className="flex gap-[8px] items-center shrink-0">
        <img alt="" className="size-[16px]" src="/taas/icon-lock.svg" />
        <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)]" style={almarai}>
          معلوماتك مشفرة ولن تُشارك دون موافقتك.
        </p>
      </div>
      <div className="flex gap-[12px] items-center shrink-0">
        <Link href="/ceer/ar/11-offer-details" className="border border-[rgba(48,63,70,0.2)] flex items-center px-[18px] py-[10px] rounded-[8px] text-[14px] text-[#1d2d33]" style={almarai}>
          → رجوع
        </Link>
        <button
          onClick={handleSubmit}
          disabled={!agreed || submitting}
          className="border-2 border-[rgba(255,255,255,0.12)] flex gap-[6px] items-center justify-center px-[18px] py-[12px] rounded-[8px] shrink-0 relative overflow-hidden disabled:opacity-40"
        >
          <div className="absolute inset-0 bg-[#003e52] rounded-[8px]" />
          <p className="relative text-[12px] leading-[19px] text-white uppercase" style={oxanium}>
            {submitting ? 'جارٍ الإرسال…' : 'تقديم الطلب →'}
          </p>
        </button>
      </div>
    </>
  );

  return (
    <TaasPageLayout currentStep={6} lang="AR" footer={footer}>
      {/* Title */}
      <div className="flex flex-col gap-[8px] items-start w-full shrink-0">
        <p className="text-[32px] leading-[36px] uppercase text-[#1d2d33]" style={oxanium}>
          مراجعة وتأكيد الطلب
        </p>
        <p className="text-[16px] leading-[22px] text-[rgba(48,63,70,0.7)]" style={almarai}>
          يرجى مراجعة جميع التفاصيل بعناية قبل الإرسال. سيبدأ البنك المعالجة عند التقديم.
        </p>
      </div>

      {/* Order details table */}
      <div className="border border-[rgba(48,63,70,0.2)] overflow-hidden rounded-[14px] w-full shrink-0">
        <div className="border-b border-[rgba(48,63,70,0.2)] px-[24px] py-[16px]">
          <p className="text-[20px] leading-[21px] uppercase text-[#1d2d33]" style={oxanium}>تفاصيل الطلب</p>
        </div>
        <div className="grid grid-cols-2">
          {orderDetails.map(([k, v], i) => (
            <div
              key={k}
              className={`flex items-center justify-between px-[24px] py-[12px] ${i % 2 === 0 ? 'border-r border-[rgba(48,63,70,0.2)]' : ''} ${i < orderDetails.length - 2 ? 'border-b border-[rgba(48,63,70,0.2)]' : ''}`}
            >
              <p className="text-[14px] leading-[23px] text-[rgba(48,63,70,0.7)]" style={almarai}>{k}</p>
              <p className="text-[14px] leading-[23px] text-[#1d2d33]" style={saira}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Declaration */}
      <div className="border border-[rgba(48,63,70,0.2)] flex flex-col gap-[16px] items-start p-[24px] rounded-[14px] w-full shrink-0">
        <p className="text-[20px] leading-[21px] uppercase text-[#1d2d33]" style={oxanium}>الإقرار والموافقة</p>
        <p className="text-[14px] leading-[22px] text-[rgba(48,63,70,0.7)]" style={almarai}>
          بتقديم هذا الطلب، أؤكد أن جميع المعلومات المقدمة دقيقة وكاملة. أوافق على معالجة البنك الأهلي السعودي لطلبي وفقًا لشروطهم وأحكامهم والأنظمة السعودية المعمول بها. أقر بأن هذا طلب تمويل ملزم يخضع للموافقة الائتمانية النهائية.
        </p>
        <label className="flex gap-[12px] items-start cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={e => setAgreed(e.target.checked)}
            className="mt-[3px] size-[16px] shrink-0 cursor-pointer accent-[#003e52]"
          />
          <p className="text-[14px] leading-[22px] text-[#1d2d33]" style={almarai}>
            اطلعت على{' '}
            <a href="#" className="text-[#003e52] underline">الشروط والأحكام</a>،{' '}
            <a href="#" className="text-[#003e52] underline">الإفصاح عن المنتج</a> و{' '}
            <a href="#" className="text-[#003e52] underline">جدول الرسوم</a> وأوافق عليها.
          </p>
        </label>
      </div>
    </TaasPageLayout>
  );
}
