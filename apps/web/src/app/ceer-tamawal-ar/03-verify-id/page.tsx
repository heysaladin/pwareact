'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebarAr from '../_components/CeerSidebarAr';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

export default function VerifyIdArPage() {
  const { brandName } = useGlobalSettings();
  const [dark, setDark] = useState(true);
  const [nid, setNid] = useState('');

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
            <div className="flex-1 flex flex-col p-6">

              {/* Logo row */}
              <div className="flex items-center justify-between mb-5">
                <Link href="/ceer-tamawal-ar/02-what-happens-next" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>→ رجوع</Link>
                <div className="flex items-center gap-3">
                  <button onClick={() => setDark(d => !d)} className="relative flex items-center shrink-0" style={{ width: 44, height: 24 }}>
                    <span className="absolute inset-0 rounded-full" style={{ background: dark ? '#2a3a4f' : '#dde3ec' }} />
                    <span className="absolute w-[18px] h-[18px] rounded-full shadow" style={{ left: dark ? 23 : 3, top: 3, background: dark ? '#4f95ff' : '#2563eb' }} />
                  </button>
                  <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt={brandName} className="h-8 w-auto" />
                </div>
              </div>

              {/* Step bar */}
              <div className="flex items-center gap-0 mb-6 rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                {[
                  { label: 'التحقق من الهوية', active: true },
                  { label: 'موافقة نفاذ', active: false },
                  { label: 'التحقق من الجوال', active: false },
                  { label: 'الموافقات', active: false },
                  { label: 'البيانات الشخصية', active: false },
                ].map((step, i) => (
                  <div
                    key={step.label}
                    className="flex-1 flex items-center gap-2 px-4 py-3 text-[12px] font-semibold"
                    style={{
                      background: step.active ? 'var(--highlight)' : 'transparent',
                      color: step.active ? 'var(--blue)' : 'var(--muted)',
                      borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                      style={{ background: step.active ? 'var(--blue)' : 'var(--border)', color: step.active ? '#fff' : 'var(--muted)' }}
                    >
                      {i + 1}
                    </div>
                    {step.label}
                  </div>
                ))}
              </div>

              {/* Content card */}
              <div className="rounded-[18px] px-[52px] py-[44px] flex flex-col flex-1" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <h1 className="text-[30px] font-extrabold" style={{ color: 'var(--heading)' }}>أدخل رقم هويتك المُتحقق منها</h1>
                <p className="mt-2 text-[15px]" style={{ color: 'var(--muted)' }}>يرجى إدخال رقم الهوية الوطنية أو الإقامة للتحقق من هويتك.</p>

                <div className="mt-10" style={{ maxWidth: 560 }}>
                  <label className="block text-[14px] font-semibold mb-2.5" style={{ color: 'var(--text)' }}>رقم الهوية الوطنية / الإقامة</label>
                  <div
                    className="flex items-center gap-3 rounded-[10px] px-[17px] py-[15px]"
                    style={{ border: `2px solid ${nid ? 'var(--blue)' : 'var(--border)'}`, background: 'var(--bg)', boxShadow: nid ? '0 0 0 4px rgba(79,149,255,0.12)' : 'none' }}
                  >
                    <span className="text-xl shrink-0" style={{ color: 'var(--blue)' }}>🪪</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="١ ٢٣٤ ٥٦٧ ٨٩٠"
                      value={nid}
                      onChange={e => setNid(e.target.value)}
                      autoFocus
                      className="flex-1 min-w-0 bg-transparent border-none outline-none text-[16px] font-semibold"
                      style={{ color: 'var(--text)', direction: 'rtl' }}
                    />
                  </div>
                  <p className="mt-2.5 text-[12.5px]" style={{ color: 'var(--muted)' }}>أدخل رقم الهوية الوطنية أو الإقامة المكوّن من 10 أرقام.</p>
                </div>

                <div className="mt-10 rounded-[12px] px-5 py-4 flex items-center gap-3" style={{ background: 'var(--bg)', border: '1px solid var(--border)', maxWidth: 560 }}>
                  <span className="text-lg shrink-0">🔒</span>
                  <p className="text-[13px]" style={{ color: 'var(--muted)' }}>يتم التحقق من هويتك عبر خدمة الهوية الرقمية الرسمية لنفاذ. معلوماتك مشفرة وآمنة.</p>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link href="/ceer-tamawal-ar/02-what-happens-next" className="px-6 py-3 rounded-xl text-[14px] font-bold" style={{ color: 'var(--blue)', border: '1.5px solid var(--blue)', background: 'transparent' }}>
                إلغاء
              </Link>
              <Link
                href="/ceer-tamawal-ar/04-nafath-approve"
                className="px-8 py-3 rounded-xl text-[15px] font-bold text-white"
                style={{ background: nid.length >= 10 ? 'var(--blue)' : 'var(--border)', pointerEvents: nid.length >= 10 ? 'auto' : 'none' }}
              >
                متابعة ←
              </Link>
            </div>
          </div>

          <CeerSidebarAr backHref="/ceer-tamawal-ar/02-what-happens-next" backLabel="رجوع" />

        </div>
      </div>

      <style>{`
        [data-theme="dark"]{--bg:#0b1420;--card:#121e2e;--border:#2a3a4f;--text:#e6edf5;--muted:#93a4b8;--blue:#4f95ff;--heading:#dbe7f5;--highlight:#16283f;--green:#1db954;--red:#e5484d;}
        [data-theme="light"]{--bg:#f4f6f9;--card:#ffffff;--border:#dde3ec;--text:#1a2636;--muted:#64748b;--blue:#2563eb;--heading:#0f172a;--highlight:#eff6ff;--green:#16a34a;--red:#dc2626;}
        .viewport-warning{background:var(--bg);}
        @media(max-width:1454px),(max-height:1014px){.frame{display:none;}.viewport-warning{display:flex!important;}}
        input::placeholder{color:var(--muted);}
      `}</style>
    </div>
  );
}
