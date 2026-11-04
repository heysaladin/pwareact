'use client';
import { useState } from 'react';
import Link from 'next/link';
import TaasPageLayout from '../../_components/TaasPageLayout';

const almarai: React.CSSProperties = { fontFamily: "'Almarai', sans-serif" };
const oxanium: React.CSSProperties = { fontFamily: "'Oxanium', sans-serif", fontWeight: 400 };

export default function WhatHappensNextArPage() {
  const [ceerSigned, setCeerSigned] = useState<'yes' | 'no'>('yes');
  const [tamawalCustomer, setTamawalCustomer] = useState<'yes' | 'no'>('yes');

  const footer = (
    <>
      <div className="flex gap-[8px] items-center shrink-0">
        <img alt="" className="size-[16px]" src="/taas/icon-shield.svg" />
        <p className="text-[12px] leading-[16px] text-[rgba(48,63,70,0.7)] whitespace-nowrap" style={almarai}>
          تموّل مرخصة ومنظمة من قِبل البنك المركزي السعودي (ساما).
        </p>
      </div>
      <div className="flex gap-[12px] items-center shrink-0">
        <Link
          href="/ceer/ar/01-preliminary-offers"
          className="border border-[rgba(48,63,70,0.2)] flex gap-[6px] items-center justify-center min-w-[120px] px-[18px] py-[12px] rounded-[8px] shrink-0 relative overflow-hidden bg-white"
        >
          <p className="relative text-[12px] leading-[19px] text-[#1d2d33] uppercase whitespace-nowrap" style={oxanium}>
            العودة للعروض
          </p>
        </Link>
        <Link
          href="/ceer/ar/03-verify-id"
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
      {/* Page title */}
      <div className="flex flex-col gap-[8px] items-start w-full shrink-0 text-[#1d2d33]">
        <p className="text-[32px] leading-[36px] uppercase w-full" style={oxanium}>
          ماذا يحدث بعد ذلك؟
        </p>
        <p className="text-[16px] leading-[22px] w-full" style={almarai}>
          إليك كيف نبدأ بعد اختيارك عرضًا مبدئيًا.
        </p>
      </div>

      {/* Selected offer banner */}
      <div className="bg-[#f4f5f3] border border-[rgba(48,63,70,0.2)] flex items-center justify-between px-[20px] py-[14px] rounded-[14px] shrink-0 w-full">
        <div className="flex gap-[16px] items-center shrink-0">
          <div className="h-[40px] overflow-hidden shrink-0 w-[100px] relative">
            <img alt="البنك الأهلي السعودي" className="absolute inset-0 max-w-none object-contain size-full" src="/taas/bank-snb-logo.png" />
          </div>
          <div className="flex flex-col gap-[2px] items-start shrink-0" style={almarai}>
            <p className="text-[12px] leading-[16px] text-[#1d2d33]">عرضك المختار</p>
            <p className="text-[16px] leading-[22px] text-[#1d2d33]">البنك الأهلي السعودي</p>
            <p className="text-[12px] leading-[16px] text-[#003e52]">3,648 ⃁ / شهر · 60 شهرًا · نسبة الفائدة 4.89%</p>
          </div>
        </div>
        <div className="bg-[#f4f5f3] flex items-center px-[10px] py-[3px] rounded-[999px] shrink-0">
          <p className="text-[12px] leading-[16px] text-[#003e52] whitespace-nowrap" style={almarai}>مختار</p>
        </div>
      </div>

      {/* Two question panels */}
      <div className="flex gap-[20px] items-start shrink-0 w-full">
        {/* CEER login panel */}
        <div className="border border-[rgba(48,63,70,0.2)] flex flex-1 min-w-0 flex-col gap-[14px] items-start p-[20px] rounded-[14px]">
          <div className="flex gap-[12px] items-center shrink-0">
            <div className="bg-[#f4f5f3] flex items-center justify-center rounded-[12px] shrink-0 size-[36px]">
              <img alt="" className="size-[18px]" src="/taas/icon-user.svg" />
            </div>
            <p className="text-[16px] leading-[22px] text-[#1d2d33] whitespace-nowrap" style={almarai}>
              هل أنت مسجّل الدخول في CEER؟
            </p>
          </div>
          <button
            onClick={() => setCeerSigned('yes')}
            className="flex gap-[12px] items-start p-[16px] rounded-[12px] shrink-0 w-full text-right"
            style={ceerSigned === 'yes'
              ? { backgroundColor: '#f4f5f3', border: '1.5px solid #003e52' }
              : { backgroundColor: 'white', border: '1px solid rgba(48,63,70,0.2)' }
            }
          >
            <div
              className="relative rounded-[10px] shrink-0 size-[20px] mt-[1px]"
              style={ceerSigned === 'yes'
                ? { backgroundColor: 'white', border: '6px solid #003e52' }
                : { backgroundColor: 'white', border: '1.5px solid rgba(48,63,70,0.2)' }
              }
            />
            <div className="flex flex-1 min-w-0 flex-col gap-[2px] items-start" style={almarai}>
              <p className="text-[14px] leading-[23px] text-[#1d2d33] w-full">نعم، مسجّل الدخول</p>
              <p className="text-[12px] leading-[16px] text-[#1d2d33] w-full">تابع مباشرةً إلى التحقق من الهوية.</p>
            </div>
          </button>
          <button
            onClick={() => setCeerSigned('no')}
            className="flex gap-[12px] items-start p-[16px] rounded-[12px] shrink-0 w-full text-right"
            style={ceerSigned === 'no'
              ? { backgroundColor: '#f4f5f3', border: '1.5px solid #003e52' }
              : { backgroundColor: 'white', border: '1px solid rgba(48,63,70,0.2)' }
            }
          >
            <div
              className="relative rounded-[10px] shrink-0 size-[20px] mt-[1px]"
              style={ceerSigned === 'no'
                ? { backgroundColor: 'white', border: '6px solid #003e52' }
                : { backgroundColor: 'white', border: '1.5px solid rgba(48,63,70,0.2)' }
              }
            />
            <div className="flex flex-1 min-w-0 flex-col gap-[2px] items-start" style={almarai}>
              <p className="text-[14px] leading-[23px] text-[#1d2d33] w-full">لا، ليس بعد</p>
              <p className="text-[12px] leading-[16px] text-[#1d2d33] w-full">سجّل الدخول أو أنشئ حساب CEER أولاً.</p>
            </div>
          </button>
        </div>

        {/* Tamawal customer panel */}
        <div className="border border-[rgba(48,63,70,0.2)] flex flex-1 min-w-0 flex-col gap-[14px] items-start p-[20px] rounded-[14px]">
          <div className="flex gap-[12px] items-center shrink-0">
            <div className="bg-[#f4f5f3] flex items-center justify-center rounded-[12px] shrink-0 size-[36px]">
              <img alt="" className="size-[18px]" src="/taas/icon-key.svg" />
            </div>
            <p className="text-[16px] leading-[22px] text-[#1d2d33] whitespace-nowrap" style={almarai}>
              هل أنت عميل في تموّل بالفعل؟
            </p>
          </div>
          <button
            onClick={() => setTamawalCustomer('yes')}
            className="flex gap-[12px] items-start p-[16px] rounded-[12px] shrink-0 w-full text-right"
            style={tamawalCustomer === 'yes'
              ? { backgroundColor: '#f4f5f3', border: '1.5px solid #003e52' }
              : { backgroundColor: 'white', border: '1px solid rgba(48,63,70,0.2)' }
            }
          >
            <div
              className="relative rounded-[10px] shrink-0 size-[20px] mt-[1px]"
              style={tamawalCustomer === 'yes'
                ? { backgroundColor: 'white', border: '6px solid #003e52' }
                : { backgroundColor: 'white', border: '1.5px solid rgba(48,63,70,0.2)' }
              }
            />
            <div className="flex flex-1 min-w-0 flex-col gap-[2px] items-start" style={almarai}>
              <p className="text-[14px] leading-[23px] text-[#1d2d33] w-full">نعم، لديّ حساب</p>
              <p className="text-[12px] leading-[16px] text-[#1d2d33] w-full">أدخل رقم PIN المكوّن من 4 أرقام.</p>
            </div>
          </button>
          <button
            onClick={() => setTamawalCustomer('no')}
            className="flex gap-[12px] items-start p-[16px] rounded-[12px] shrink-0 w-full text-right"
            style={tamawalCustomer === 'no'
              ? { backgroundColor: '#f4f5f3', border: '1.5px solid #003e52' }
              : { backgroundColor: 'white', border: '1px solid rgba(48,63,70,0.2)' }
            }
          >
            <div
              className="relative rounded-[10px] shrink-0 size-[20px] mt-[1px]"
              style={tamawalCustomer === 'no'
                ? { backgroundColor: 'white', border: '6px solid #003e52' }
                : { backgroundColor: 'white', border: '1.5px solid rgba(48,63,70,0.2)' }
              }
            />
            <div className="flex flex-1 min-w-0 flex-col gap-[2px] items-start" style={almarai}>
              <p className="text-[14px] leading-[23px] text-[#1d2d33] w-full">لا، أنا جديد</p>
              <p className="text-[12px] leading-[16px] text-[#1d2d33] w-full">أنشئ حساب تموّل في أقل من دقيقتين.</p>
            </div>
          </button>
        </div>
      </div>

      {/* Flow steps */}
      <div className="flex gap-[20px] items-start shrink-0 w-full">
        {[
          { done: true, num: '✓', title: 'اخترت عرضًا', desc: 'اختر العرض الأنسب لك.' },
          { done: false, num: '2', title: 'نتحقق من تسجيل دخولك في CEER', desc: 'مسجّل → تابع. غير مسجّل → سجّل الدخول أو أنشئ حسابًا.' },
          { done: false, num: '3', title: 'نتحقق من حالتك في تموّل', desc: 'عميل حالي → PIN. عميل جديد → تسجيل سريع.' },
        ].map((step) => (
          <div key={step.num} className="flex flex-1 min-w-0 gap-[12px] items-start">
            <div
              className="flex items-center justify-center rounded-[14px] shrink-0 size-[28px]"
              style={step.done ? { backgroundColor: '#12b76a' } : { backgroundColor: '#f4f5f3' }}
            >
              {step.done ? (
                <div className="overflow-hidden shrink-0 size-[14px] relative">
                  <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                    <img alt="" className="block max-w-none size-full" src="/taas/icon-check-green.svg" />
                  </div>
                </div>
              ) : (
                <p className="text-[12px] leading-[16px] text-[#003e52] text-center whitespace-nowrap" style={{ fontFamily: "'Saira', sans-serif" }}>{step.num}</p>
              )}
            </div>
            <div className="flex flex-1 min-w-0 flex-col gap-[2px] items-start text-[#1d2d33]" style={almarai}>
              <p className="text-[14px] leading-[23px] w-full">{step.title}</p>
              <p className="text-[12px] leading-[16px] w-full">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </TaasPageLayout>
  );
}
