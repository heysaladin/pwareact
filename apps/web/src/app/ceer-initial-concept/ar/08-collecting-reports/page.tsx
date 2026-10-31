'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebarAr from '../_components/CeerSidebarAr';

const providers = [
  { id: 'simah', name: 'سمة', abbr: 'سمة', desc: 'تقرير الائتمان والالتزامات المالية', status: 'done' },
  { id: 'gosi', name: 'GOSI (جوسي)', abbr: 'GOS', desc: 'معلومات التوظيف والراتب', status: 'progress' },
  { id: 'masdr', name: 'مصدر', abbr: 'مصد', desc: 'التحقق من الدخل', status: 'progress' },
  { id: 'tawakkalna', name: 'توكلنا', abbr: 'توك', desc: 'التحقق من الهوية والملف الشخصي', status: 'pending' },
  { id: 'elm', name: 'علم', abbr: 'علم', desc: 'تاريخ المركبة', status: 'pending' },
];

export default function CollectingReportsArPage() {
  const [dark, setDark] = useState(true);

  return (
    <div dir="rtl" data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>الشاشة صغيرة جداً</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>هذه الواجهة مصممة للشاشات الواسعة.</p>
      </div>
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebarAr backHref="/ceer-tamawal-ar/07-personal-details" />
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col p-6 overflow-y-auto">

              {/* Logo row */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt="تمول" className="h-8 w-auto" />
                  <button onClick={() => setDark(d => !d)} className="relative flex items-center shrink-0" style={{ width: 44, height: 24 }}>
                    <span className="absolute inset-0 rounded-full" style={{ background: dark ? '#2a3a4f' : '#dde3ec' }} />
                    <span className="absolute w-[18px] h-[18px] rounded-full shadow" style={{ left: dark ? 23 : 3, top: 3, background: dark ? '#4f95ff' : '#2563eb' }} />
                  </button>
                </div>
                <Link href="/ceer-tamawal-ar/07-personal-details" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>رجوع →</Link>
              </div>

              <div className="flex gap-6">
                {/* Left panel */}
                <div className="flex-[1.4] min-w-0">
                  <h1 className="text-[28px] font-extrabold mb-1" style={{ color: 'var(--heading)' }}>جمع تقاريرك</h1>
                  <p className="text-[15px] mb-5" style={{ color: 'var(--muted)' }}>نتواصل بشكل آمن مع مزودي البيانات الحكومية والمالية الموثوقة لاسترداد معلوماتك.</p>

                  <div className="flex items-center gap-3 rounded-[12px] px-4 py-3 mb-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="spinning-dot shrink-0" />
                    <span className="text-[13px]" style={{ color: 'var(--muted)' }}>جارٍ الاتصال بمزودي الخدمات... قد يستغرق هذا بعض الوقت.</span>
                  </div>

                  <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    {providers.map((p, i) => (
                      <div key={p.id} className="flex items-center gap-4 px-5 py-4" style={{ borderBottom: i < providers.length - 1 ? '1px solid var(--border)' : 'none' }}>
                        <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 text-[11px] font-black" style={{ background: 'var(--highlight)', color: 'var(--blue)', border: '1px solid var(--border)' }}>
                          {p.abbr}
                        </div>
                        <div className="flex-1">
                          <div className="text-[14px] font-semibold">{p.name}</div>
                          <div className="text-[12px] mt-0.5" style={{ color: 'var(--muted)' }}>{p.desc}</div>
                        </div>
                        {p.status === 'done' && (
                          <span className="flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1 rounded-full" style={{ background: 'rgba(29,185,84,0.12)', color: 'var(--green)' }}>
                            <span className="w-3 h-3 rounded-full flex items-center justify-center text-[8px] font-bold" style={{ background: 'var(--green)', color: '#fff' }}>✓</span>
                            مكتمل
                          </span>
                        )}
                        {p.status === 'progress' && (
                          <span className="flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1 rounded-full" style={{ background: 'var(--highlight)', color: 'var(--blue)' }}>
                            <span className="mini-spin" />
                            قيد التنفيذ
                          </span>
                        )}
                        {p.status === 'pending' && (
                          <span className="text-[12px] font-semibold px-3 py-1 rounded-full" style={{ background: 'var(--bg)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
                            قيد الانتظار
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right panel */}
                <div className="flex-1 min-w-0 flex flex-col gap-4">
                  <div className="rounded-[16px] p-5" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <h3 className="text-[15px] font-bold mb-4" style={{ color: 'var(--heading)' }}>ماذا يحدث بعد ذلك؟</h3>
                    {[
                      { n: '1', label: 'نجمع معلوماتك', desc: 'نسترد بياناتك بأمان من مزودين معتمدين.' },
                      { n: '2', label: 'نتحقق من أهليتك', desc: 'تُحلَّل معلوماتك لتحديد عروض التمويل المناسبة لك.' },
                      { n: '3', label: 'ستظهر لك عروضك', desc: 'بعد الاكتمال، قارن عروض التمويل المصممة لك.' },
                    ].map(step => (
                      <div key={step.n} className="flex gap-3 mt-3.5 text-[13px]">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5" style={{ background: 'var(--highlight)', color: 'var(--blue)' }}>{step.n}</div>
                        <div>
                          <div className="font-semibold">{step.label}</div>
                          <div className="mt-0.5" style={{ color: 'var(--muted)' }}>{step.desc}</div>
                        </div>
                      </div>
                    ))}
                    <div className="mt-4 pt-4 flex items-center gap-2 text-[12px]" style={{ borderTop: '1px solid var(--border)', color: 'var(--muted)' }}>
                      <span>🔒</span> جميع البيانات تُسترد عبر قنوات مشفرة ولا تُشارك بدون موافقتك.
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <div className="flex items-center gap-2 text-[12.5px]" style={{ color: 'var(--muted)' }}>
                <span>🔔</span> يمكنك مغادرة هذه الصفحة بأمان، وسنخطرك عند اكتمال جمع البيانات.
              </div>
              <Link href="/ceer-tamawal-ar/09-eligibility-offers" className="px-8 py-3 rounded-xl text-[15px] font-bold text-white" style={{ background: 'var(--blue)' }}>
                متابعة ←
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        [data-theme="dark"]{--bg:#0b1420;--card:#121e2e;--border:#2a3a4f;--text:#e6edf5;--muted:#93a4b8;--blue:#4f95ff;--heading:#dbe7f5;--highlight:#16283f;--green:#1db954;--red:#e5484d;}
        [data-theme="light"]{--bg:#f4f6f9;--card:#ffffff;--border:#dde3ec;--text:#1a2636;--muted:#64748b;--blue:#2563eb;--heading:#0f172a;--highlight:#eff6ff;--green:#16a34a;--red:#dc2626;}
        .viewport-warning{background:var(--bg);}
        @media(max-width:1454px),(max-height:1014px){.frame{display:none;}.viewport-warning{display:flex!important;}}
        @keyframes spin{to{transform:rotate(360deg);}}
        .spinning-dot{width:18px;height:18px;border:2.5px solid var(--blue);border-top-color:transparent;border-radius:50%;animation:spin 1s linear infinite;display:inline-block;flex-shrink:0;}
        .mini-spin{width:10px;height:10px;border:1.5px solid currentColor;border-top-color:transparent;border-radius:50%;animation:spin 1s linear infinite;display:inline-block;}
      `}</style>
    </div>
  );
}
