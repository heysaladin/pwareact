'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebarAr from '../_components/CeerSidebarAr';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

const TERMS = [24, 36, 48, 60];

const offers = [
  {
    id: 'aljazira',
    bankAr: 'بنك الجزيرة',
    bankEn: 'BANK ALJAZIRA',
    monthly: 'SAR 8,513',
    apr: '5.29%',
    tenure: '36 شهراً',
    financed: 'SAR 319,200',
    dp: 'SAR 79,800',
    badge: 'أقل دفعة شهرية',
    feats: ['بدون رسوم معالجة', 'تسوية مبكرة متاحة', 'رحلة رقمية سريعة'],
  },
  {
    id: 'alinma',
    bankAr: 'مصرف الإنماء',
    bankEn: 'alinma bank',
    monthly: 'SAR 8,742',
    apr: '5.59%',
    tenure: '36 شهراً',
    financed: 'SAR 319,200',
    dp: 'SAR 79,800',
    badge: '',
    feats: ['بدون رسوم معالجة', 'خيارات دفع مرنة', 'تسوية مبكرة متاحة'],
  },
  {
    id: 'snb',
    bankAr: 'SNB الأهلي',
    bankEn: 'Saudi National Bank',
    monthly: 'SAR 8,915',
    apr: '5.89%',
    tenure: '36 شهراً',
    financed: 'SAR 319,200',
    dp: 'SAR 79,800',
    badge: '',
    feats: ['بدون رسوم معالجة', 'تسوية مبكرة متاحة', 'مزايا العلاقة'],
  },
];

export default function PreliminaryOffersArPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(true);
  const [term, setTerm] = useState(36);
  const [selected, setSelected] = useState('aljazira');

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, 'Segoe UI', sans-serif" }}>

      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>الشاشة صغيرة جداً</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>هذه الصفحة مصممة للشاشات الواسعة. يرجى فتحها على حاسوب محمول أو مكتبي.</p>
      </div>

      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>

          {/* Main content */}
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col gap-4 p-6 overflow-y-auto">

              {/* Logo row */}
              <div className="flex items-center justify-between">
                <Link href="/ceer-tamawal-ar/00-explore-financing" className="text-[13px] font-semibold flex items-center gap-1" style={{ color: 'var(--muted)' }}>
                  → رجوع
                </Link>
                <div className="flex items-center gap-3">
                  <button onClick={() => setDark(d => !d)} className="relative flex items-center shrink-0" style={{ width: 44, height: 24 }}>
                    <span className="absolute inset-0 rounded-full" style={{ background: dark ? '#2a3a4f' : '#dde3ec' }} />
                    <span className="absolute w-[18px] h-[18px] rounded-full shadow" style={{ left: dark ? 23 : 3, top: 3, background: dark ? '#4f95ff' : '#2563eb' }} />
                  </button>
                  <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt={brandName} className="h-8 w-auto" />
                </div>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-[26px] font-extrabold" style={{ color: 'var(--heading)' }}>عرض العروض الأولية</h1>
                <p className="mt-1 text-[14px]" style={{ color: 'var(--muted)' }}>راجع العروض الأولية بناءً على التفاصيل التي أدخلتها.</p>
              </div>

              {/* Filter bar */}
              <div className="rounded-[14px] px-5 py-4 flex items-center gap-4 flex-wrap" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-2 text-[13px]" style={{ color: 'var(--text)' }}>
                  <span style={{ color: 'var(--blue)' }}>💼</span>
                  <span className="font-semibold">ر.س 25,000</span>
                </div>
                <div className="w-px h-5" style={{ background: 'var(--border)' }} />
                <div className="flex items-center gap-2 text-[13px]" style={{ color: 'var(--text)' }}>
                  <span style={{ color: 'var(--blue)' }}>💼</span>
                  <span className="font-semibold">ر.س 3,500</span>
                  <span className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold" style={{ border: '1px solid var(--blue)', color: 'var(--blue)' }}>i</span>
                </div>
                <div className="w-px h-5" style={{ background: 'var(--border)' }} />
                <div className="flex items-center gap-2 text-[13px]">
                  <span>20%</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <div className="w-px h-5" style={{ background: 'var(--border)' }} />
                <div className="flex gap-1">
                  {TERMS.map(m => (
                    <button
                      key={m}
                      onClick={() => setTerm(m)}
                      className="px-3 py-1.5 rounded-lg text-[12px] font-semibold"
                      style={term === m
                        ? { background: 'var(--highlight)', border: '1.5px solid var(--blue)', color: 'var(--blue)' }
                        : { background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--muted)' }
                      }
                    >
                      {m}ش
                    </button>
                  ))}
                </div>
                <div className="mr-auto">
                  <button className="px-5 py-2 rounded-lg text-[13px] font-bold" style={{ background: 'var(--blue)', color: '#fff' }}>تطبيق</button>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="rounded-xl px-4 py-3 flex items-start gap-2.5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <span className="w-4 h-4 shrink-0 rounded-full flex items-center justify-center text-[9px] font-bold mt-0.5" style={{ border: '1px solid var(--blue)', color: 'var(--blue)' }}>i</span>
                <p className="text-[12.5px] italic" style={{ color: 'var(--muted)' }}>العروض الأولية استرشادية وتستند إلى المعلومات المُقدَّمة. العروض النهائية تخضع لتقييم الائتمان والتحقق من الهوية.</p>
              </div>

              {/* Summary bar */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: '🏷️', label: 'الدفعة المقدمة', value: 'SAR 79,800 (20%)' },
                  { icon: '📅', label: 'مدة التمويل', value: `${term} شهراً` },
                  { icon: '📄', label: 'مبلغ التمويل', value: 'SAR 319,200' },
                ].map(item => (
                  <div key={item.label} className="rounded-[12px] px-4 py-3.5 flex items-center gap-3" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <div className="text-[11px]" style={{ color: 'var(--muted)' }}>{item.label}</div>
                      <div className="text-[14px] font-bold mt-0.5">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Offer list */}
              <div className="flex flex-col gap-3">
                {offers.map(offer => (
                  <div
                    key={offer.id}
                    onClick={() => setSelected(offer.id)}
                    className="rounded-[14px] px-5 py-4 cursor-pointer"
                    style={{ background: 'var(--card)', border: `1.5px solid ${selected === offer.id ? 'var(--blue)' : 'var(--border)'}` }}
                  >
                    {offer.badge && (
                      <div className="inline-flex mb-3 px-3 py-1 rounded-full text-[11px] font-bold" style={{ background: 'var(--highlight)', color: 'var(--blue)' }}>
                        {offer.badge}
                      </div>
                    )}
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-[16px] font-bold">{offer.bankAr}</div>
                        {offer.bankEn && <div className="text-[11px] mt-0.5" style={{ color: 'var(--muted)' }}>{offer.bankEn}</div>}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-[11px]" style={{ color: 'var(--muted)' }}>الدفعة الشهرية من</div>
                          <div className="text-[18px] font-extrabold mt-0.5" style={{ color: 'var(--blue)' }}>{offer.monthly}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px]" style={{ color: 'var(--muted)' }}>نسبة الفائدة</div>
                          <div className="text-[18px] font-extrabold mt-0.5" style={{ color: 'var(--blue)' }}>{offer.apr}</div>
                        </div>
                        <button className="px-4 py-2 rounded-lg text-[12px] font-bold" style={{ border: '1.5px solid var(--blue)', color: 'var(--blue)', background: 'transparent' }}>
                          عرض أولي
                        </button>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 flex items-center gap-8" style={{ borderTop: '1px solid var(--border)' }}>
                      <div className="flex flex-col gap-1.5">
                        {offer.feats.map(f => (
                          <div key={f} className="text-[12px] flex items-center gap-1.5" style={{ color: 'var(--muted)' }}>
                            <span style={{ color: 'var(--green)' }}>✓</span> {f}
                          </div>
                        ))}
                      </div>
                      <div className="mr-auto grid grid-cols-3 gap-x-6 text-[12px]">
                        {[['المدة', offer.tenure], ['مبلغ التمويل', offer.financed], ['الدفعة المقدمة', offer.dp]].map(([k, v]) => (
                          <div key={k}>
                            <div style={{ color: 'var(--muted)' }}>{k}</div>
                            <div className="font-semibold mt-0.5">{v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <div className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--muted)' }}>
                <span>🛡️</span>
                العروض الأولية ليست ضماناً للموافقة على التمويل.
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/ceer-tamawal-ar/02-what-happens-next"
                  className="px-5 py-3 rounded-xl text-[14px] font-bold"
                  style={{ border: '1.5px solid var(--border)', color: 'var(--muted)', background: 'transparent' }}
                >
                  شاهد مسار العملية
                </Link>
                <Link
                  href="/ceer-tamawal-ar/03-verify-id"
                  className="px-8 py-3 rounded-xl text-[15px] font-bold text-white"
                  style={{ background: 'var(--blue)' }}
                >
                  تمول ←
                </Link>
              </div>
            </div>
          </div>

          <CeerSidebarAr backHref="/ceer-tamawal-ar" />

        </div>
      </div>

      <style>{`
        [data-theme="dark"]{--bg:#0b1420;--card:#121e2e;--border:#2a3a4f;--text:#e6edf5;--muted:#93a4b8;--blue:#4f95ff;--heading:#dbe7f5;--highlight:#16283f;--green:#1db954;--red:#e5484d;}
        [data-theme="light"]{--bg:#f4f6f9;--card:#ffffff;--border:#dde3ec;--text:#1a2636;--muted:#64748b;--blue:#2563eb;--heading:#0f172a;--highlight:#eff6ff;--green:#16a34a;--red:#dc2626;}
        .viewport-warning{background:var(--bg);}
        @media(max-width:1454px),(max-height:1014px){.frame{display:none;}.viewport-warning{display:flex!important;}}
      `}</style>
    </div>
  );
}
