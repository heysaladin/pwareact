'use client';
import { useState } from 'react';
import Link from 'next/link';
import TaasPageLayout from '../../_components/TaasPageLayout';

const almarai: React.CSSProperties = { fontFamily: "'Almarai', sans-serif" };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };
const saira: React.CSSProperties = { fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' };

const offers = [
  {
    id: 'snb',
    bankName: 'البنك الأهلي السعودي',
    logo: '/taas/bank-snb-logo.png',
    apr: '4.89%',
    monthly: '3,648',
    tenure: '60 شهرًا',
    totalPayable: '218,880',
    features: ['بدون رسوم معالجة', 'تسوية مبكرة متاحة', 'تأمين شامل مجاني'],
    recommended: true,
  },
  {
    id: 'alinma',
    bankName: 'مصرف الإنماء',
    logo: '/taas/bank-alinma-logo.png',
    apr: '5.19%',
    monthly: '3,755',
    tenure: '60 شهرًا',
    totalPayable: '225,300',
    features: ['خيارات دفع مرنة', 'بدون رسوم معالجة', 'تسوية مبكرة متاحة'],
    recommended: false,
  },
  {
    id: 'riyad',
    bankName: 'بنك الرياض',
    logo: '/taas/bank-riyad-logo.png',
    apr: '5.49%',
    monthly: '3,697',
    tenure: '60 شهرًا',
    totalPayable: '221,820',
    features: ['موافقة سريعة', 'تأمين شامل مجاني', 'إدارة حساب رقمية'],
    recommended: false,
  },
];

export default function PreliminaryOffersArPage() {
  const [selected, setSelected] = useState('snb');

  const footer = (
    <>
      <div className="flex gap-[8px] items-center shrink-0">
        <img alt="" className="size-[16px]" src="/taas/icon-info.svg" />
        <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] whitespace-nowrap" style={almarai}>
          العروض المبدئية مبنية على التفاصيل التي أدخلتها. العروض النهائية تُؤكد بعد التحقق من الهوية.
        </p>
      </div>
      <div className="flex gap-[12px] items-center shrink-0">
        <Link
          href="/ceer/ar/00-explore-financing"
          className="border border-[rgba(48,63,70,0.2)] flex gap-[6px] items-center justify-center min-w-[120px] px-[18px] py-[12px] rounded-[8px] shrink-0 relative overflow-hidden bg-white"
        >
          <p className="relative text-[12px] leading-[19px] text-[#1d2d33] uppercase whitespace-nowrap" style={oxanium}>
            رجوع
          </p>
        </Link>
        <Link
          href="/ceer/ar/02-what-happens-next"
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
    <TaasPageLayout currentStep={1} lang="AR" footer={footer}>
      {/* Header row */}
      <div className="flex gap-[24px] items-start w-full shrink-0">
        <div className="flex flex-col gap-[8px] items-start flex-1 min-w-0 text-[#1d2d33]">
          <p className="text-[32px] leading-[36px] uppercase w-full" style={oxanium}>
            عرض العروض المبدئية
          </p>
          <p className="text-[16px] leading-[22px] w-full" style={almarai}>
            بناءً على التفاصيل التي قدمتها، إليك خيارات تمويل لسيارتك EXOBOT SUV. قارن واختر ما يناسبك.
          </p>
        </div>
        <Link
          href="/ceer/ar/15-register-interest"
          className="bg-white border-[1.5px] border-[#003e52] flex gap-[6px] items-center justify-center px-[16px] py-[12px] rounded-[8px] shrink-0 min-w-[90px] overflow-hidden"
        >
          <p className="text-[12px] leading-[19px] text-[#003e52] uppercase flex-1 min-w-0" style={oxanium}>
            تسجيل الاهتمام
          </p>
          <img alt="" src="/taas/icon-chevron-right.svg" className="size-[20px] shrink-0" />
        </Link>
      </div>

      {/* Your details bar */}
      <div className="bg-[#f4f5f3] border border-[rgba(48,63,70,0.2)] flex items-center justify-between px-[20px] py-[14px] rounded-[12px] shrink-0 w-full">
        <div className="flex gap-[32px] items-center shrink-0 text-[#1d2d33] whitespace-nowrap" style={almarai}>
          {[
            { label: 'الراتب الشهري', value: '25,000 ⃁' },
            { label: 'الالتزامات', value: '3,500 ⃁' },
            { label: 'الدفعة المقدمة', value: '20% · 45,750 ⃁' },
            { label: 'المدة', value: '60 شهرًا' },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-[2px] items-start shrink-0">
              <p className="text-[12px] leading-[16px]" style={almarai}>{label}</p>
              <p className="text-[14px] leading-[23px]" style={almarai}>{value}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-[6px] items-center shrink-0">
          <img alt="" className="size-[14px]" src="/taas/icon-edit.svg" />
          <p className="text-[14px] leading-[23px] text-[#003e52] whitespace-nowrap" style={almarai}>تعديل التفاصيل</p>
        </div>
      </div>

      {/* Count + sort */}
      <div className="flex items-center justify-between shrink-0 w-full">
        <p className="text-[16px] leading-[22px] text-[#1d2d33] whitespace-nowrap" style={almarai}>
          3 عروض مبدئية
        </p>
        <div className="flex gap-[6px] items-center shrink-0">
          <img alt="" className="size-[14px]" src="/taas/icon-sliders.svg" />
          <p className="text-[12px] leading-[16px] text-[#1d2d33] whitespace-nowrap" style={almarai}>
            مرتبة حسب أقل دفعة شهرية
          </p>
        </div>
      </div>

      {/* Offer rows */}
      <div className="flex flex-col gap-[14px] items-start shrink-0 w-full">
        {offers.map((offer) => {
          const isSelected = selected === offer.id;
          return (
            <button
              key={offer.id}
              onClick={() => setSelected(offer.id)}
              className="flex gap-[20px] items-center px-[20px] py-[22px] rounded-[14px] shrink-0 w-full text-right relative"
              style={isSelected
                ? { backgroundColor: '#f4f5f3', border: '1.5px solid #003e52' }
                : { backgroundColor: 'white', border: '1px solid rgba(48,63,70,0.2)' }
              }
            >
              {/* Recommended badge */}
              {offer.recommended && (
                <div className="absolute bg-[#003e52] flex items-center end-[18.5px] px-[10px] py-[3px] rounded-[999px] top-[-11.5px]">
                  <p className="text-[8px] leading-[13px] text-white uppercase whitespace-nowrap font-bold" style={{ fontFamily: "'Oxanium', sans-serif" }}>
                    موصى به
                  </p>
                </div>
              )}

              {/* Radio */}
              <div
                className="relative rounded-[10px] shrink-0 size-[20px]"
                style={isSelected
                  ? { backgroundColor: 'white', border: '6px solid #003e52' }
                  : { backgroundColor: 'white', border: '1.5px solid rgba(48,63,70,0.2)' }
                }
              />

              {/* Bank logo + name */}
              <div className="flex flex-col gap-[2px] items-start shrink-0 w-[120px]">
                <div className="h-[44px] overflow-hidden shrink-0 w-[110px] relative">
                  <img alt={offer.bankName} className="absolute inset-0 max-w-none object-contain size-full" src={offer.logo} />
                </div>
                <p className="text-[12px] leading-[16px] text-[#1d2d33] whitespace-nowrap" style={almarai}>{offer.bankName}</p>
              </div>

              {/* Metrics */}
              <div className="flex flex-1 min-w-0 items-center justify-between whitespace-nowrap">
                <div className="flex flex-col gap-[4px] items-start shrink-0 text-[#1d2d33]" style={almarai}>
                  <p className="text-[12px] leading-[16px]">نسبة الفائدة</p>
                  <p className="text-[16px] leading-[22px]" style={saira}>{offer.apr}</p>
                </div>
                <div className="flex flex-col gap-[4px] items-start shrink-0">
                  <p className="text-[12px] leading-[16px] text-[#1d2d33]" style={almarai}>الدفعة الشهرية</p>
                  <p className="text-[20px] leading-[21px] text-[#003e52] uppercase" style={oxanium}>⃁ {offer.monthly}</p>
                </div>
                <div className="flex flex-col gap-[4px] items-start shrink-0 text-[#1d2d33]" style={almarai}>
                  <p className="text-[12px] leading-[16px]">المدة</p>
                  <p className="text-[16px] leading-[22px]">{offer.tenure}</p>
                </div>
                <div className="flex flex-col gap-[4px] items-start shrink-0 text-[#1d2d33]" style={almarai}>
                  <p className="text-[12px] leading-[16px]">إجمالي المدفوع</p>
                  <p className="text-[16px] leading-[22px]">⃁ {offer.totalPayable}</p>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-[6px] items-start shrink-0 w-[190px]">
                {offer.features.map((feat) => (
                  <div key={feat} className="flex gap-[6px] items-center shrink-0">
                    <div className="overflow-hidden shrink-0 size-[14px] relative">
                      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                        <img alt="" className="block max-w-none size-full" src="/taas/icon-check-teal.svg" />
                      </div>
                    </div>
                    <p className="text-[12px] leading-[16px] text-[#1d2d33] whitespace-nowrap" style={almarai}>{feat}</p>
                  </div>
                ))}
              </div>

              {/* View details */}
              <div className="flex gap-[4px] items-center shrink-0">
                <p className="text-[14px] leading-[23px] text-[#003e52] whitespace-nowrap" style={almarai}>عرض التفاصيل</p>
                <div className="overflow-hidden shrink-0 size-[14px] relative">
                  <div className="absolute inset-[20.83%]">
                    <img alt="" className="block max-w-none size-full" style={{ transform: 'scaleX(-1)' }} src="/taas/icon-arrow-right.svg" />
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </TaasPageLayout>
  );
}
