'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebarAr from '../_components/CeerSidebarAr';

const banks = [
  { id: 'snb', ar: 'SNB الأهلي', en: 'البنك الأهلي السعودي', apr: '4.69%', monthly: 'SAR 3,648', total: 'SAR 218,880', dp: 'SAR 45,750', tenure: '60 شهراً', fee: 'SAR 0', settlement: true, insurance: true, digital: 'متقدمة', rating: '4.8' },
  { id: 'alinma', ar: 'مصرف الإنماء', en: 'alinma bank', apr: '4.29%', monthly: 'SAR 3,564', total: 'SAR 213,840', dp: 'SAR 45,750', tenure: '60 شهراً', fee: 'SAR 500', settlement: true, insurance: false, digital: 'قياسية', rating: '4.5' },
  { id: 'riyad', ar: 'بنك الرياض', en: 'Riyad Bank', apr: '4.99%', monthly: 'SAR 3,721', total: 'SAR 223,260', dp: 'SAR 45,750', tenure: '60 شهراً', fee: 'SAR 0', settlement: false, insurance: true, digital: 'قياسية', rating: '4.3' },
  { id: 'tamweel', ar: 'تمويل الأولى', en: 'Tamweel Aloula', apr: '5.19%', monthly: 'SAR 3,775', total: 'SAR 226,500', dp: 'SAR 45,750', tenure: '60 شهراً', fee: 'SAR 750', settlement: true, insurance: false, digital: 'قياسية', rating: '4.1' },
];

export default function CompareOffersArPage() {
  const [dark, setDark] = useState(true);
  const [selected, setSelected] = useState('snb');

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

              <div className="flex items-center justify-between mb-2">
                <div>
                  <h1 className="text-[26px] font-extrabold" style={{ color: 'var(--heading)' }}>قارن واختر أفضل عرض لك</h1>
                  <p className="text-[13px] mt-0.5" style={{ color: 'var(--muted)' }}>قارن عروض التمويل من شركائنا الموثوقين واختر الأنسب لك.</p>
                </div>
                <button className="text-[12px] font-semibold" style={{ color: 'var(--blue)', background: 'none', border: 'none', cursor: 'pointer' }}>مسح الاختيار</button>
              </div>
              <p className="text-[12px] mb-4" style={{ color: 'var(--muted)' }}>مقارنة حتى 4 عروض</p>

              {/* Comparison table */}
              <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                {/* Bank header row */}
                <div className="grid" style={{ gridTemplateColumns: '180px repeat(4, 1fr)', borderBottom: '1px solid var(--border)' }}>
                  <div className="px-4 py-3" />
                  {banks.map(b => (
                    <div key={b.id} className="px-3 py-3 flex flex-col items-center gap-2 text-center" style={{ borderRight: '1px solid var(--border)' }}>
                      <div className="text-[14px] font-bold">{b.ar}</div>
                      <div className="text-[11px]" style={{ color: 'var(--muted)' }}>{b.en}</div>
                      <button
                        onClick={() => setSelected(b.id)}
                        className="px-4 py-1.5 rounded-full text-[12px] font-bold"
                        style={{ background: selected === b.id ? 'var(--blue)' : 'transparent', color: selected === b.id ? '#fff' : 'var(--blue)', border: `1.5px solid var(--blue)` }}
                      >
                        {selected === b.id ? '✓ محدد' : 'اختر'}
                      </button>
                    </div>
                  ))}
                </div>

                {/* Section header */}
                <div className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider" style={{ background: 'var(--bg)', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
                  التفاصيل الرئيسية
                </div>

                {/* Rows */}
                {[
                  { label: 'نسبة الفائدة السنوية', key: 'apr', blue: true },
                  { label: 'الدفعة الشهرية', key: 'monthly' },
                  { label: 'إجمالي المستحق', key: 'total' },
                  { label: 'الدفعة المقدمة', key: 'dp' },
                  { label: 'مدة التمويل', key: 'tenure' },
                  { label: 'رسوم المعالجة', key: 'fee' },
                  { label: 'ميزة التسوية المبكرة', key: 'settlement', bool: true },
                  { label: 'تأمين شامل مجاني', key: 'insurance', bool: true },
                  { label: 'الخدمات الرقمية', key: 'digital' },
                  { label: 'تقييم العملاء', key: 'rating', star: true },
                ].map((row) => (
                  <div key={row.label} className="grid" style={{ gridTemplateColumns: '180px repeat(4, 1fr)', borderBottom: '1px solid var(--border)' }}>
                    <div className="px-4 py-3 text-[12.5px] font-semibold flex items-center" style={{ color: 'var(--muted)' }}>{row.label}</div>
                    {banks.map(b => {
                      const val = b[row.key as keyof typeof b];
                      return (
                        <div key={b.id} className="px-3 py-3 flex items-center justify-center text-[13px] font-semibold" style={{ borderRight: '1px solid var(--border)', color: row.blue ? 'var(--blue)' : 'var(--text)' }}>
                          {row.bool
                            ? <span style={{ color: val ? 'var(--green)' : 'var(--muted)' }}>{val ? '✓ نعم' : '✕ لا'}</span>
                            : row.star
                            ? <span>★ {val}</span>
                            : <span>{String(val)}</span>
                          }
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link href="/ceer-tamawal-ar/09-eligibility-offers" className="px-5 py-3 rounded-xl text-[14px] font-bold" style={{ border: '1.5px solid var(--blue)', color: 'var(--blue)' }}>→ العودة للعروض</Link>
              <div className="flex items-center gap-3">
                <button className="px-5 py-3 rounded-xl text-[14px] font-bold" style={{ border: '1.5px solid var(--border)', color: 'var(--text)', background: 'transparent' }}>حفظ المقارنة</button>
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
