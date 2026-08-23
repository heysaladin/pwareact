'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import CeerSidebarAr from '../_components/CeerSidebarAr';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

export default function NafathApproveArPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(true);
  const [secs, setSecs] = useState(162);

  useEffect(() => {
    const t = setInterval(() => setSecs(s => s > 0 ? s - 1 : 0), 1000);
    return () => clearInterval(t);
  }, []);

  const mins = String(Math.floor(secs / 60)).padStart(2, '0');
  const ss = String(secs % 60).padStart(2, '0');

  return (
    <div data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, 'Segoe UI', sans-serif" }}>

      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>الشاشة صغيرة جداً</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>هذه الصفحة مصممة للشاشات الواسعة.</p>
      </div>

      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>

          {/* Main content */}
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col p-6 overflow-y-auto">

              {/* Logo row */}
              <div className="flex items-center justify-between mb-5">
                <Link href="/ceer-tamawal-ar/03-verify-id" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>→ رجوع</Link>
                <div className="flex items-center gap-3">
                  <button onClick={() => setDark(d => !d)} className="relative flex items-center shrink-0" style={{ width: 44, height: 24 }}>
                    <span className="absolute inset-0 rounded-full" style={{ background: dark ? '#2a3a4f' : '#dde3ec' }} />
                    <span className="absolute w-[18px] h-[18px] rounded-full shadow" style={{ left: dark ? 23 : 3, top: 3, background: dark ? '#4f95ff' : '#2563eb' }} />
                  </button>
                  <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt={brandName} className="h-8 w-auto" />
                </div>
              </div>

              <h1 className="text-[28px] font-extrabold mb-1" style={{ color: 'var(--heading)' }}>وافق على هويتك في نفاذ</h1>
              <p className="text-[15px] mb-5" style={{ color: 'var(--muted)' }}>تم إرسال طلب تحقق آمن إلى تطبيق نفاذ الخاص بك.</p>

              {/* Verified ID bar */}
              <div className="flex items-center gap-3 rounded-[12px] px-4 py-3 mb-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0" style={{ background: 'var(--green)', color: '#fff' }}>✓</span>
                <span className="text-[13px]" style={{ color: 'var(--muted)' }}>تم التحقق من الهوية الوطنية / الإقامة</span>
                <span className="mr-auto font-bold text-[13px]">١ •••• •••• ٣٤</span>
              </div>

              <div className="flex gap-6">
                {/* Left: verification code + instructions */}
                <div className="flex-1 min-w-0 flex flex-col gap-4">

                  {/* Code card */}
                  <div className="rounded-[16px] p-6 flex flex-col items-center text-center" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <p className="text-[13px]" style={{ color: 'var(--muted)' }}>رقم التحقق</p>
                    <div className="mt-4 flex items-center gap-8">
                      <div
                        className="w-[110px] h-[88px] rounded-[14px] flex items-center justify-center text-[52px] font-extrabold"
                        style={{ border: '2px solid var(--blue)', color: 'var(--blue)', background: 'var(--highlight)' }}
                      >
                        67
                      </div>
                      <div className="text-right">
                        <div className="text-[22px] font-extrabold">{mins}:{ss}</div>
                        <div className="text-[12px] mt-0.5" style={{ color: 'var(--muted)' }}>الوقت المتبقي</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 w-full text-[14px] font-semibold" style={{ borderTop: '1px solid var(--border)', color: '#f5a623' }}>
                      ⏳ في انتظار موافقتك
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="rounded-[16px] p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <h3 className="text-[15px] font-bold mb-4" style={{ color: 'var(--heading)' }}>كيفية الموافقة</h3>
                    <ol className="flex flex-col gap-3">
                      {[
                        'افتح تطبيق نفاذ',
                        'راجع طلب التحقق من الهوية',
                        ['اختر الرقم المطابق', '67'],
                        'وافق على الطلب',
                        'عُد بعد تأكيد التحقق',
                      ].map((step, i) => (
                        <li key={i} className="flex items-center gap-3 text-[13.5px]">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0" style={{ background: 'var(--highlight)', color: 'var(--blue)' }}>{i + 1}</div>
                          {Array.isArray(step)
                            ? <span>{step[0]} <strong style={{ color: 'var(--blue)' }}>{step[1]}</strong></span>
                            : <span>{step}</span>
                          }
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Action links */}
                  <div className="flex items-center gap-4 text-[13px] font-semibold flex-wrap">
                    <button className="cursor-pointer" style={{ color: 'var(--blue)', background: 'none', border: 'none' }}>↻ إعادة إرسال الطلب</button>
                    <span style={{ color: 'var(--border)' }}>·</span>
                    <button className="cursor-pointer" style={{ color: 'var(--red)', background: 'none', border: 'none' }}>✕ إلغاء التحقق</button>
                    <span style={{ color: 'var(--border)' }}>·</span>
                    <Link href="/ceer-tamawal-ar/03-verify-id" style={{ color: 'var(--blue)' }}>تغيير رقم الهوية</Link>
                  </div>
                </div>

                {/* Right: phone mockup + security notes */}
                <div className="flex items-start gap-5" style={{ width: 440, flexShrink: 0 }}>
                  {/* Phone */}
                  <div className="overflow-hidden" style={{ width: 220, flexShrink: 0, border: '10px solid #0a1520', borderRadius: 34, background: 'var(--card)', boxShadow: '0 18px 40px rgba(0,0,0,0.4)' }}>
                    <div style={{ width: 80, height: 16, background: '#0a1520', borderRadius: '0 0 10px 10px', margin: '0 auto' }} />
                    <div className="px-4 py-5 text-center">
                      <div className="font-extrabold text-[16px]" style={{ color: '#0b8a5c' }}>
                        <span className="block text-[13px]">نفاذ</span>Nafath
                      </div>
                      <div className="text-[11px] mt-3" style={{ color: 'var(--muted)' }}>طلب تحقق من هوية من</div>
                      <div className="text-[12px] font-bold mt-1">{brandName} للتمويل</div>
                      <div className="flex justify-center gap-3 mt-4">
                        {['6', '7'].map(n => (
                          <div key={n} className="w-12 h-12 rounded-xl flex items-center justify-center text-[22px] font-extrabold" style={{ border: '1.5px solid var(--border)' }}>{n}</div>
                        ))}
                      </div>
                      <button className="mt-3 w-full py-2.5 rounded-xl text-[13px] font-bold text-white" style={{ background: '#0b8a5c', border: 'none' }}>موافقة</button>
                      <button className="mt-2 w-full py-2.5 rounded-xl text-[13px] font-bold" style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--muted)', border: 'none' }}>رفض</button>
                    </div>
                  </div>

                  {/* Security notes */}
                  <div className="flex flex-col gap-4 flex-1">
                    {[
                      ['🪪', 'يتم التحقق من هويتك عبر نفاذ الرسمية.'],
                      ['🔒', 'مشفر بالكامل'],
                      ['🛡️', 'معلوماتك تُستخدم لهذه الرحلة فقط.'],
                    ].map(([ic, txt]) => (
                      <div key={txt} className="flex items-start gap-3 text-[12.5px]" style={{ color: 'var(--muted)' }}>
                        <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--highlight)' }}>{ic}</div>
                        <span>{txt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-end" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link href="/ceer-tamawal-ar/05-mobile-verification" className="px-8 py-3 rounded-xl text-[15px] font-bold text-white" style={{ background: 'var(--blue)' }}>
                متابعة ←
              </Link>
            </div>
          </div>

          <CeerSidebarAr backHref="/ceer-tamawal-ar/03-verify-id" backLabel="رجوع" />

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
