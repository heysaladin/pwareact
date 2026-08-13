'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebarAr from '../_components/CeerSidebarAr';

const offerSummary = [
  ['مبلغ التمويل', 'SAR 183,000'],
  ['مدة التمويل', '60 شهراً'],
  ['الدفعة المقدمة (20%)', 'SAR 45,750'],
  ['نسبة الربح (APR)', '4.69%'],
  ['الدفعة الشهرية', 'SAR 3,648'],
  ['أول دفعة', 'بعد 30 يوماً من الصرف'],
];
const paymentBreakdown = [
  ['سعر المركبة (شامل ض.ق.م)', 'SAR 228,750'],
  ['الدفعة المقدمة (20%)', 'SAR 45,750'],
  ['مبلغ التمويل', 'SAR 183,000'],
  ['إجمالي الربح', 'SAR 35,880'],
  ['إجمالي المستحق', 'SAR 218,880'],
];
const keyFacts = [
  ['تمويل متوافق مع الشريعة', 'نعم'],
  ['معدل ربح ثابت', 'نعم'],
  ['التسوية المبكرة مسموحة', 'نعم'],
  ['التأمين المشمول', 'شامل'],
  ['رسوم المعالجة', 'SAR 0'],
  ['انتقال الملكية', 'نهاية المدة'],
];
const ratings = [
  ['رضا العملاء', 4.9],
  ['التجربة الرقمية', 4.8],
  ['سرعة الموافقة', 4.7],
  ['الشفافية', 4.8],
];

export default function OfferDetailsArPage() {
  const [dark, setDark] = useState(true);

  return (
    <div data-theme={dark ? 'dark' : 'light'} dir="rtl" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>الشاشة صغيرة جداً</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>هذه الواجهة مصممة للشاشات العريضة.</p>
      </div>
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebarAr backHref="/ceer-tamawal-ar/09-eligibility-offers" />
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt="تمول" className="h-8 w-auto" />
                  <button onClick={() => setDark(d => !d)} className="relative flex items-center shrink-0" style={{ width: 44, height: 24 }}>
                    <span className="absolute inset-0 rounded-full" style={{ background: dark ? '#2a3a4f' : '#dde3ec' }} />
                    <span className="absolute w-[18px] h-[18px] rounded-full shadow" style={{ left: dark ? 23 : 3, top: 3, background: dark ? '#4f95ff' : '#2563eb' }} />
                  </button>
                </div>
                <Link href="/ceer-tamawal-ar/09-eligibility-offers" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>رجوع →</Link>
              </div>

              <div className="flex gap-5">
                {/* Left main */}
                <div className="flex-1 min-w-0 flex flex-col gap-4">
                  {/* Bank header */}
                  <div className="rounded-[16px] p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-[12px] flex items-center justify-center text-[14px] font-extrabold text-center" style={{ border: '1px solid var(--border)', color: '#1a6b3c', lineHeight: 1.2 }}>SNB<br/>الأهلي</div>
                      <div>
                        <div className="text-[20px] font-extrabold" style={{ color: 'var(--heading)' }}>البنك الأهلي السعودي</div>
                        <div className="text-[12px] mt-0.5" style={{ color: 'var(--muted)' }}>SNB الأهلي</div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-3">
                      {[['نسبة الفائدة السنوية (APR)', '4.69%', true], ['الدفعة الشهرية', 'SAR 3,648', false], ['إجمالي المستحق', 'SAR 218,880', false], ['الدفعة المقدمة', 'SAR 45,750', false]].map(([k, v, blue]) => (
                        <div key={k as string} className="rounded-[10px] p-3" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                          <div className="text-[11px]" style={{ color: 'var(--muted)' }}>{k}</div>
                          <div className="text-[16px] font-extrabold mt-1" style={{ color: blue ? 'var(--blue)' : 'var(--text)' }}>{v}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['✓ بدون رسوم معالجة', '✓ ميزة التسوية المبكرة', '✓ تأمين شامل مجاني', '✓ خدمات رقمية متقدمة'].map(chip => (
                        <span key={chip} className="px-3 py-1.5 rounded-full text-[11.5px] font-semibold" style={{ background: 'var(--highlight)', color: 'var(--blue)' }}>{chip}</span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Offer Summary */}
                    <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                      <div className="px-4 py-3 text-[13px] font-bold" style={{ borderBottom: '1px solid var(--border)', color: 'var(--heading)' }}>ملخص العرض</div>
                      {offerSummary.map(([k, v], i) => (
                        <div key={k} className="flex justify-between px-4 py-2.5 text-[12.5px]" style={{ borderBottom: i < offerSummary.length - 1 ? '1px solid var(--border)' : 'none' }}>
                          <span style={{ color: 'var(--muted)' }}>{k}</span>
                          <span className="font-semibold">{v}</span>
                        </div>
                      ))}
                    </div>

                    {/* Payment Breakdown */}
                    <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                      <div className="px-4 py-3 text-[13px] font-bold" style={{ borderBottom: '1px solid var(--border)', color: 'var(--heading)' }}>تفصيل الدفعات</div>
                      {paymentBreakdown.map(([k, v], i) => (
                        <div key={k} className="flex justify-between px-4 py-2.5 text-[12.5px]" style={{ borderBottom: i < paymentBreakdown.length - 1 ? '1px solid var(--border)' : 'none' }}>
                          <span style={{ color: 'var(--muted)' }}>{k}</span>
                          <span className="font-semibold">{v}</span>
                        </div>
                      ))}
                      <div className="px-4 py-3 flex items-center justify-between rounded-b-[16px]" style={{ background: 'var(--highlight)' }}>
                        <span className="text-[12px]">الدفعة الشهرية التقديرية</span>
                        <span className="font-extrabold" style={{ color: 'var(--blue)' }}>من SAR 3,648<span className="text-[11px] font-normal" style={{ color: 'var(--muted)' }}> / شهرياً</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Key Facts */}
                  <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <div className="px-4 py-3 text-[13px] font-bold" style={{ borderBottom: '1px solid var(--border)', color: 'var(--heading)' }}>الحقائق الرئيسية</div>
                    <div className="grid grid-cols-2">
                      {keyFacts.map(([k, v], i) => (
                        <div key={k} className="flex justify-between px-4 py-2.5 text-[12.5px]" style={{ borderBottom: '1px solid var(--border)', borderLeft: i % 2 === 0 ? '1px solid var(--border)' : 'none' }}>
                          <span style={{ color: 'var(--muted)' }}>✓ {k}</span>
                          <span className="font-semibold">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Offer Rating */}
                  <div className="rounded-[16px] p-4" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[28px] font-extrabold" style={{ color: 'var(--heading)' }}>4.8</span>
                      <div>
                        <div style={{ color: '#f5a623' }}>★★★★★</div>
                        <div className="text-[11px]" style={{ color: 'var(--muted)' }}>+728 تقييم</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {ratings.map(([label, score]) => (
                        <div key={label as string} className="flex items-center gap-3 text-[12px]">
                          <span className="w-40 shrink-0" style={{ color: 'var(--muted)' }}>{label}</span>
                          <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                            <div className="h-full rounded-full" style={{ width: `${(score as number / 5) * 100}%`, background: 'var(--blue)' }} />
                          </div>
                          <span className="w-6 text-right font-semibold">{score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right rail */}
                <div className="flex flex-col gap-4" style={{ width: 280, flexShrink: 0 }}>
                  {/* Why recommended */}
                  <div className="rounded-[16px] p-4" style={{ border: '1px solid var(--blue)', background: 'var(--highlight)' }}>
                    <h3 className="text-[13px] font-bold mb-3" style={{ color: 'var(--heading)' }}>لماذا هذا العرض موصى به</h3>
                    {['أقل إجمالي مستحق', 'معدل ربح تنافسي', 'بدون رسوم معالجة', 'تأمين شامل مجاني', 'خدمات رقمية متقدمة'].map(reason => (
                      <div key={reason} className="flex items-center gap-2 mb-2 text-[12.5px]">
                        <span style={{ color: 'var(--green)' }}>✓</span>
                        <span>{reason}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Documents */}
                  <div className="rounded-[16px] p-4" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <h3 className="text-[13px] font-bold mb-3" style={{ color: 'var(--heading)' }}>الوثائق الرئيسية</h3>
                    {['ورقة حقائق الطلب', 'الشروط والأحكام', 'الإفصاح عن المنتج', 'جدول الرسوم'].map((doc, i, arr) => (
                      <a key={doc} href="#" className="flex items-center gap-2.5 py-2 text-[12.5px] font-semibold" style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none', color: 'var(--text)' }}>
                        <span className="w-7 h-7 rounded-[6px] flex items-center justify-center text-[13px]" style={{ background: 'var(--bg)' }}>📄</span>
                        {doc}
                      </a>
                    ))}
                  </div>

                  {/* Next Steps */}
                  <div className="rounded-[16px] p-4" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <h3 className="text-[13px] font-bold mb-3" style={{ color: 'var(--heading)' }}>الخطوات التالية</h3>
                    {['راجع الحقائق والشروط', 'اقبل العرض للمتابعة', 'أكمل التحقق النهائي', 'سيتواصل البنك للموافقة النهائية'].map((step, i) => (
                      <div key={i} className="flex gap-2.5 mb-2.5 text-[12px]">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5" style={{ background: 'var(--highlight)', color: 'var(--blue)' }}>{i + 1}</div>
                        <span style={{ color: 'var(--muted)' }}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link href="/ceer-tamawal-ar/09-eligibility-offers" className="px-5 py-3 rounded-xl text-[14px] font-bold" style={{ border: '1.5px solid var(--blue)', color: 'var(--blue)' }}>→ العودة للعروض</Link>
              <div className="flex items-center gap-3">
                <button className="px-5 py-3 rounded-xl text-[14px] font-bold" style={{ border: '1.5px solid var(--border)', color: 'var(--text)', background: 'transparent' }}>حفظ هذا العرض</button>
                <Link href="/ceer-tamawal-ar/12-submit-order" className="px-8 py-3 rounded-xl text-[15px] font-bold text-white" style={{ background: 'var(--blue)' }}>إنشاء طلب ←</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        [data-theme="dark"]{--bg:#0b1420;--card:#121e2e;--border:#2a3a4f;--text:#e6edf5;--muted:#93a4b8;--blue:#4f95ff;--heading:#dbe7f5;--highlight:#16283f;--green:#1db954;--red:#e5484d;}
        [data-theme="light"]{--bg:#f4f6f9;--card:#ffffff;--border:#dde3ec;--text:#1a2636;--muted:#64748b;--blue:#2563eb;--heading:#0f172a;--highlight:#eff6ff;--green:#16a34a;--red:#dc2626;}
        .viewport-warning{background:var(--bg);}
        @media(max-width:1454px),(max-height:1014px){.frame{display:none;}.viewport-warning{display:flex!important;}}
        a{text-decoration:none;}
      `}</style>
    </div>
  );
}
