'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebarAr from '../_components/CeerSidebarAr';

export default function SubmitSuccessArPage() {
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
          <CeerSidebarAr backHref="/ceer-tamawal-ar/12-submit-order" backLabel="العودة للتأكيد" />
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
                <Link href="/ceer-tamawal-ar/12-submit-order" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>رجوع →</Link>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center text-center px-12">
                {/* Animated success circle */}
                <div className="success-circle w-[140px] h-[140px] rounded-full flex items-center justify-center mx-auto mb-8" style={{ background: 'var(--green)' }}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M14 34l14 14 22-28" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="100" strokeDashoffset="0" style={{ animation: 'checkDraw 0.6s 0.3s ease-out both' }} />
                  </svg>
                </div>

                <h1 className="text-[32px] font-extrabold mb-3" style={{ color: 'var(--heading)' }}>تم تقديم الطلب</h1>
                <p className="text-[16px] leading-relaxed mb-6 max-w-[560px]" style={{ color: 'var(--muted)' }}>تهانينا! تم تقديم طلب التمويل الخاص بك بنجاح.</p>

                {/* Order details card */}
                <div className="rounded-[16px] p-6 mb-6 w-full max-w-[560px]" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  {[
                    ['رقم الطلب', 'AELG-2026-05-18-1123'],
                    ['البنك', 'البنك الأهلي السعودي'],
                    ['تاريخ التقديم', 'الأحد، 18 مايو 2026 — 14:37'],
                  ].map(([k, v], i, arr) => (
                    <div key={k} className="flex justify-between py-3 text-[13.5px]" style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <span style={{ color: 'var(--muted)' }}>{k}</span>
                      <span className="font-bold">{v}</span>
                    </div>
                  ))}
                </div>

                {/* What happens next */}
                <div className="rounded-[16px] p-6 mb-6 w-full max-w-[560px] text-right" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <h3 className="text-[14px] font-bold mb-4" style={{ color: 'var(--heading)' }}>ماذا يحدث بعد ذلك؟</h3>
                  {[
                    { done: true, text: 'تم تقديم طلبك إلى البنك الأهلي السعودي' },
                    { done: false, text: 'يراجع البنك طلبك خلال 1-2 يوم عمل' },
                    { done: false, text: 'ستتلقى رسالة SMS وبريداً إلكترونياً بالنتيجة' },
                    { done: false, text: 'عند الموافقة، يُرتَّب تسليم المركبة مع الوكيل' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3 mb-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5"
                        style={{ background: step.done ? 'var(--green)' : 'var(--highlight)', color: step.done ? '#fff' : 'var(--blue)', border: step.done ? 'none' : '1.5px solid var(--blue)' }}
                      >
                        {step.done ? '✓' : i + 1}
                      </div>
                      <span className="text-[13px] leading-[1.5]" style={{ color: step.done ? 'var(--text)' : 'var(--muted)' }}>{step.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="w-full max-w-[560px] rounded-[12px] text-[16px] font-bold text-white mb-4"
                  style={{ height: 57, background: 'var(--blue)', cursor: 'pointer' }}
                >
                  تتبع الطلب ←
                </button>

                <Link
                  href="/ceer-tamawal-ar"
                  className="text-[14px] font-semibold mb-6"
                  style={{ color: 'var(--blue)' }}
                >
                  العودة إلى الصفحة الرئيسية
                </Link>

                {/* Security note */}
                <div className="flex items-center gap-2 text-[12.5px]" style={{ color: 'var(--muted)' }}>
                  <span>🛡️</span>
                  <span>بياناتك آمنة ومحمية طوال عملية التمويل.</span>
                </div>
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
        @keyframes popIn{0%{transform:scale(0.5);opacity:0;}80%{transform:scale(1.1);}100%{transform:scale(1);opacity:1;}}
        @keyframes checkDraw{0%{stroke-dashoffset:100;}100%{stroke-dashoffset:0;}}
        .success-circle{animation:popIn 0.6s ease-out forwards;}
      `}</style>
    </div>
  );
}
