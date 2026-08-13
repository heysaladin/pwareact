'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebarAr from '../_components/CeerSidebarAr';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

const PRICE = 399000;
const APR = 0.0529;
const TERMS = [24, 36, 48, 60];

function fmt(n: number) {
  return 'SAR ' + Math.round(n).toLocaleString('en-US');
}

function calcMonthly(fin: number, months: number) {
  const r = APR / 12;
  return fin * r / (1 - Math.pow(1 + r, -months));
}

export default function ExploreFinancingArPage() {
  const { brandName } = useGlobalSettings();
  const [dp, setDp] = useState(20);
  const [term, setTerm] = useState(36);
  const [dark, setDark] = useState(true);

  const dpAmt = PRICE * dp / 100;
  const fin = PRICE - dpAmt;
  const monthly = calcMonthly(fin, term);
  const trackPct = dp * 2;

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, 'Segoe UI', sans-serif" }}>

      {/* Viewport warning */}
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>الشاشة صغيرة جداً</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>هذه الصفحة مصممة للشاشات الواسعة. يرجى فتحها على حاسوب محمول أو مكتبي للحصول على أفضل تجربة.</p>
      </div>

      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>

          {/* Main content (comes first in DOM, appears on left in RTL via flex) */}
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col gap-4 p-6">

              {/* Logo row */}
              <div className="flex items-center justify-between mb-1">
                <Link href="/ceer-tamawal-ar/01-preliminary-offers" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>← رجوع</Link>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setDark(d => !d)}
                    className="relative flex items-center shrink-0"
                    aria-label="تبديل المظهر"
                    style={{ width: 44, height: 24 }}
                  >
                    <span className="absolute inset-0 rounded-full" style={{ background: dark ? '#2a3a4f' : '#dde3ec' }} />
                    <span className="absolute w-[18px] h-[18px] rounded-full shadow" style={{ left: dark ? 23 : 3, top: 3, background: dark ? '#4f95ff' : '#2563eb' }} />
                  </button>
                  <img
                    src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'}
                    alt={brandName}
                    className="h-8 w-auto"
                  />
                </div>
              </div>

              {/* Form card */}
              <div className="flex-1 rounded-[18px] px-[39px] py-[35px] flex flex-col" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <h1 className="text-[30px] font-extrabold leading-normal" style={{ color: 'var(--heading)' }}>استكشف خيارات التمويل</h1>
                <p className="mt-2 text-[15px]" style={{ color: 'var(--muted)' }}>أدخل بعض التفاصيل للحصول على تقدير أولي مخصص لك.</p>

                {/* Input grid */}
                <div className="mt-[26px] grid grid-cols-2 gap-7">
                  <div>
                    <div className="text-[14px] font-semibold mb-2.5" style={{ color: 'var(--text)' }}>الراتب الشهري</div>
                    <div className="rounded-[10px] px-[17px] py-[15px] flex items-center gap-3" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                      <span className="text-base" style={{ color: 'var(--blue)' }}>💳</span>
                      <input
                        type="text"
                        placeholder="أدخل المبلغ"
                        className="flex-1 min-w-0 bg-transparent border-none outline-none text-[15px]"
                        style={{ color: 'var(--text)', direction: 'rtl' }}
                      />
                      <span className="text-[14px] font-semibold" style={{ color: 'var(--muted)' }}>ر.س</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-[14px] font-semibold mb-2.5" style={{ color: 'var(--text)' }}>
                      الالتزامات الائتمانية الشهرية الحالية
                      <span className="w-[15px] h-[15px] rounded-full text-[10px] font-semibold flex items-center justify-center shrink-0" style={{ border: '1px solid var(--blue)', color: 'var(--blue)' }}>i</span>
                    </div>
                    <div className="rounded-[10px] px-[17px] py-[15px] flex items-center gap-3" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                      <span className="text-base" style={{ color: 'var(--blue)' }}>💳</span>
                      <input
                        type="text"
                        placeholder="أدخل المبلغ"
                        className="flex-1 min-w-0 bg-transparent border-none outline-none text-[15px]"
                        style={{ color: 'var(--text)', direction: 'rtl' }}
                      />
                      <span className="text-[14px] font-semibold" style={{ color: 'var(--muted)' }}>ر.س</span>
                    </div>
                  </div>
                </div>

                {/* Down payment */}
                <div className="mt-7 flex items-center justify-between">
                  <span className="text-[14px] font-semibold" style={{ color: 'var(--text)' }}>الدفعة المقدمة</span>
                  <div className="flex gap-2.5">
                    <div className="rounded-lg px-[15px] py-[9px] text-[13px] font-bold" style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}>{dp}%</div>
                    <div className="rounded-lg px-[15px] py-[9px] text-[13px] font-bold" style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}>{fmt(dpAmt)}</div>
                  </div>
                </div>
                <div className="mt-4">
                  <input
                    type="range"
                    min={0} max={50} step={5}
                    value={dp}
                    onChange={e => setDp(+e.target.value)}
                    className="tw-slider w-full outline-none appearance-none cursor-pointer"
                    style={{ '--track-fill': `linear-gradient(to right, var(--blue) 0%, var(--blue) ${trackPct}%, var(--border) ${trackPct}%)` } as React.CSSProperties}
                  />
                  <div className="flex justify-between mt-2.5 text-[13px]" style={{ color: 'var(--muted)' }}>
                    {[0, 10, 20, 30, 40, 50].map(v => <span key={v}>{v}%</span>)}
                  </div>
                </div>

                {/* Financing term */}
                <div className="mt-7 text-[14px] font-semibold" style={{ color: 'var(--text)' }}>مدة التمويل</div>
                <div className="mt-3 grid grid-cols-4 gap-4">
                  {TERMS.map(m => (
                    <button
                      key={m}
                      onClick={() => setTerm(m)}
                      className="h-[52px] rounded-[10px] text-[15px] cursor-pointer"
                      style={term === m
                        ? { background: 'var(--highlight)', border: '2px solid var(--blue)', color: 'var(--blue)', fontWeight: 700 }
                        : { background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }
                      }
                    >
                      {m} شهراً
                    </button>
                  ))}
                </div>

                {/* Estimate panel */}
                <div className="mt-7 rounded-[14px] overflow-hidden flex h-[195px]" style={{ border: '1px solid var(--border)' }}>
                  <div className="flex-[1.2] p-7 flex flex-col">
                    <h3 className="text-[17px] font-extrabold" style={{ color: 'var(--heading)' }}>التقدير الأولي</h3>
                    <div className="flex justify-between py-3 border-b border-dashed text-[14px]" style={{ borderColor: 'var(--border)', color: 'var(--text)' }}>
                      <span>سعر المركبة (شامل ض.ق.م)</span><span className="font-bold">SAR 399,000</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-dashed text-[14px]" style={{ borderColor: 'var(--border)', color: 'var(--text)' }}>
                      <span>الدفعة المقدمة ({dp}%)</span><span className="font-bold">- {fmt(dpAmt)}</span>
                    </div>
                    <div className="flex justify-between py-3 text-[14px]" style={{ color: 'var(--text)' }}>
                      <span>مبلغ التمويل</span><span className="font-bold">{fmt(fin)}</span>
                    </div>
                  </div>
                  <div className="flex-1 px-7 flex flex-col justify-center" style={{ borderRight: '1px solid var(--border)' }}>
                    <p className="text-[15px]" style={{ color: 'var(--text)' }}>الدفعة الشهرية التقديرية من</p>
                    <p className="mt-2 text-[42px] font-extrabold leading-none" style={{ color: 'var(--blue)' }}>
                      {fmt(monthly)} <span className="text-[16px] font-medium" style={{ color: 'var(--text)' }}>/ شهر</span>
                    </p>
                    <p className="mt-2 text-[13px]" style={{ color: 'var(--muted)' }}>هذا تقدير أولي فقط.</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex-1 flex items-end justify-center pt-[26px]">
                  <Link
                    href="/ceer-tamawal-ar/01-preliminary-offers"
                    className="w-[640px] text-white text-[18px] font-bold py-[18px] rounded-xl text-center relative flex items-center justify-center"
                    style={{ background: 'var(--blue)' }}
                  >
                    عرض العروض الأولية ←
                  </Link>
                </div>
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
        .tw-slider{height:16px;background:transparent;}
        .tw-slider::-webkit-slider-runnable-track{height:6px;border-radius:999px;background:var(--track-fill);}
        .tw-slider::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:var(--blue);cursor:pointer;margin-top:-5px;}
        .tw-slider::-moz-range-track{height:6px;border-radius:999px;background:var(--track-fill);}
        .tw-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:var(--blue);border:none;cursor:pointer;}
        input::placeholder{color:var(--muted);}
        @media(max-width:1454px),(max-height:1014px){.frame{display:none;}.viewport-warning{display:flex!important;}}
      `}</style>
    </div>
  );
}
