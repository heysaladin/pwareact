'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CeerSidebarAr from '../_components/CeerSidebarAr';

export default function SubmitOrderArPage() {
  const router = useRouter();
  const [dark, setDark] = useState(true);
  const [otp, setOtp] = useState('');
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit() {
    setSubmitting(true);
    setTimeout(() => {
      router.push('/ceer-tamawal-ar/13-submit-success');
    }, 1200);
  }

  return (
    <div data-theme={dark ? 'dark' : 'light'} dir="rtl" style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>الشاشة صغيرة جداً</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>هذه الواجهة مصممة للشاشات العريضة.</p>
      </div>
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebarAr backHref="/ceer-tamawal-ar/11-offer-details" backLabel="العودة لتفاصيل العرض" />
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
                <Link href="/ceer-tamawal-ar/11-offer-details" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>رجوع →</Link>
              </div>

              <h1 className="text-[26px] font-extrabold mb-1" style={{ color: 'var(--heading)' }}>تأكيد طلبك</h1>
              <p className="text-[13px] mb-6" style={{ color: 'var(--muted)' }}>أدخل رمز التحقق المرسل إلى جوالك لإتمام الطلب.</p>

              <div className="flex gap-6 items-start">
                {/* Left: OTP form */}
                <div className="flex flex-col gap-5" style={{ width: 560 }}>
                  <div className="rounded-[16px] p-6" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                    <label className="block text-[13px] font-semibold mb-2" style={{ color: 'var(--text)' }}>
                      رمز التحقق (OTP)
                    </label>
                    <div className="flex items-center rounded-[10px] overflow-hidden" style={{ border: '1.5px solid var(--border)', background: 'var(--bg)' }}>
                      <span className="px-4 text-[18px] shrink-0" style={{ color: 'var(--muted)' }}>🔒</span>
                      <input
                        type="text"
                        value={otp}
                        onChange={e => setOtp(e.target.value)}
                        placeholder="١ ٢٣٤ ٥٦٧"
                        className="flex-1 py-4 bg-transparent text-[20px] font-bold tracking-widest outline-none"
                        style={{ color: 'var(--text)' }}
                        dir="ltr"
                      />
                    </div>
                    <p className="mt-2 text-[12px]" style={{ color: 'var(--muted)' }}>نستخدم تشفيراً بمستوى بنكي لحماية معلوماتك.</p>

                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="mt-6 w-full rounded-[12px] text-[16px] font-bold text-white flex items-center justify-center"
                      style={{
                        height: 57,
                        background: submitting ? 'var(--border)' : 'var(--blue)',
                        cursor: submitting ? 'not-allowed' : 'pointer',
                        color: submitting ? 'var(--muted)' : '#fff',
                      }}
                    >
                      {submitting ? 'جارٍ التأكيد…' : 'تأكيد وإنشاء الطلب ←'}
                    </button>
                  </div>

                  {/* Security note */}
                  <div className="rounded-[14px] p-4 flex items-center gap-3" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-[15px]" style={{ background: 'var(--bg)' }}>🛡️</div>
                    <p className="text-[13px]" style={{ color: 'var(--muted)' }}>طلبك محمي بتشفير بمستوى بنكي.</p>
                  </div>
                </div>

                {/* Right: Order summary card */}
                <div className="flex-1 min-w-0">
                  <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                    <div className="px-5 py-4 text-[14px] font-bold" style={{ borderBottom: '1px solid var(--border)', color: 'var(--heading)' }}>ملخص الطلب</div>
                    {[
                      ['البنك', 'البنك الأهلي السعودي'],
                      ['الدفعة الشهرية', 'SAR 3,648'],
                      ['مدة التمويل', '60 شهراً'],
                      ['مبلغ التمويل', 'SAR 183,000'],
                      ['الدفعة المقدمة', 'SAR 45,750'],
                      ['الإجمالي', 'SAR 218,880'],
                      ['المركبة', 'CEER EXOBOT SUV'],
                      ['رقم الطلب', 'AELG-2026-05-18-1123'],
                    ].map(([k, v], i, arr) => (
                      <div key={k} className="flex justify-between px-5 py-3 text-[13px]" style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                        <span style={{ color: 'var(--muted)' }}>{k}</span>
                        <span className="font-semibold">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link href="/ceer-tamawal-ar/11-offer-details" className="px-5 py-3 rounded-xl text-[14px] font-bold" style={{ border: '1.5px solid var(--blue)', color: 'var(--blue)' }}>→ العودة للعروض</Link>
              <div className="flex items-center gap-3">
                <button className="px-5 py-3 rounded-xl text-[14px] font-bold" style={{ border: '1.5px solid var(--border)', color: 'var(--text)', background: 'transparent' }}>حفظ المسودة</button>
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="px-8 py-3 rounded-xl text-[15px] font-bold text-white"
                  style={{ background: submitting ? 'var(--border)' : 'var(--blue)', cursor: submitting ? 'not-allowed' : 'pointer' }}
                >
                  {submitting ? 'جارٍ التأكيد…' : 'تأكيد وإنشاء الطلب ←'}
                </button>
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
