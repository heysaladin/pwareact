'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebarAr from '../_components/CeerSidebarAr';

const fields = [
  { label: 'الحالة الاجتماعية *', type: 'select', opts: ['متزوج', 'أعزب', 'مطلق', 'أرمل'] },
  { label: 'عدد أفراد الأسرة *', type: 'select', opts: ['0', '1', '2', '3', '4', '5+'] },
  { label: 'أفراد يتحملون رسوم تعليم', type: 'select', opts: ['0', '1', '2', '3', '4+'] },
  { label: 'الرسوم التعليمية الشهرية (ر.س)', type: 'text', placeholder: 'أدخل المبلغ' },
  { label: 'بنك الراتب *', type: 'select', opts: ['بنك الراجحي', 'البنك الأهلي السعودي', 'مصرف الإنماء', 'بنك الرياض', 'سامبا', 'أخرى'] },
  { label: 'المدينة *', type: 'select', opts: ['الرياض', 'جدة', 'الدمام', 'مكة المكرمة', 'المدينة المنورة', 'أخرى'] },
  { label: 'ملكية المسكن *', type: 'select', opts: ['ملك', 'إيجار', 'سكن عائلي', 'أخرى'] },
  { label: 'نوع السكن *', type: 'select', opts: ['شقة', 'فيلا', 'مجمع', 'أخرى'] },
  { label: 'المستوى التعليمي *', type: 'select', opts: ['ثانوي', 'بكالوريوس', 'ماجستير', 'دكتوراه', 'أخرى'] },
];

const accordions = [
  { label: 'تفاصيل التوظيف', items: ['جهة العمل', 'نوع التوظيف', 'سنوات الخدمة', 'المنصب'] },
  { label: 'تفاصيل الدخل الإضافي', items: ['مصدر الدخل', 'المبلغ الشهري'] },
  { label: 'الالتزامات المالية', items: ['القروض القائمة', 'بطاقات الائتمان', 'الالتزامات الشهرية'] },
];

export default function PersonalDetailsArPage() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const [vals, setVals] = useState<Record<number, string>>({});

  return (
    <div dir="rtl" data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>الشاشة صغيرة جداً</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>هذه الواجهة مصممة للشاشات الواسعة.</p>
      </div>
      <div className="fixed inset-0 overflow-auto flex items-start justify-center pt-4" style={{ background: dark ? '#000' : '#d1d5db' }}>
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebarAr backHref="/lucid/ar/06-consents-contracts" />
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col p-6 overflow-y-auto">

              {/* Logo row */}
              <div className="flex items-center justify-between mb-5">
                                <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt="تمول" className="h-8 w-auto" />
                <div className="flex items-center gap-4">
  <Link href="/lucid/ar/06-consents-contracts" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>رجوع →</Link>
                  <button onClick={() => setDark(d => !d)} className="relative flex items-center shrink-0" aria-label="Toggle theme" style={{ width: 44, height: 24 }}>
                    <span className="absolute inset-0 rounded-full transition-colors" style={{ background: dark ? '#2a3a4f' : '#dde3ec' }} />
                    <span className="absolute flex items-center justify-center w-[18px] h-[18px] rounded-full shadow transition-all" style={{ left: dark ? 23 : 3, top: 3, background: dark ? '#4f95ff' : '#2563eb' }}>
                      {dark ? (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                      ) : (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                      )}
                    </span>
                  </button>
                </div>
              </div>

              <h1 className="text-[28px] font-extrabold mb-1" style={{ color: 'var(--heading)', fontFamily: 'Georgia, "Times New Roman", serif' }}>الإفصاحات والبيانات الشخصية</h1>
              <p className="text-[15px] mb-4" style={{ color: 'var(--muted)' }}>يرجى تقديم معلوماتك الشخصية بدقة لإجراء تقييم ائتماني شامل.</p>

              <div className="flex items-center gap-2.5 rounded-[10px] px-4 py-3 mb-5" style={{ background: 'var(--highlight)', border: '1px solid var(--border)' }}>
                <span>🔒</span>
                <p className="text-[13px]" style={{ color: 'var(--muted)' }}>بياناتك محمية وفق لوائح ساما.</p>
              </div>

              {/* Personal Details */}
              <div className="rounded-[16px] overflow-hidden mb-4" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                <div className="px-5 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h2 className="text-[14px] font-bold" style={{ color: 'var(--heading)', fontFamily: 'Georgia, "Times New Roman", serif' }}>البيانات الشخصية</h2>
                </div>
                <div className="p-5 grid grid-cols-3 gap-4">
                  {fields.map((f, i) => (
                    <div key={f.label}>
                      <label className="block text-[13px] font-semibold mb-2" style={{ color: 'var(--text)' }}>{f.label}</label>
                      {f.type === 'select' ? (
                        <select
                          value={vals[i] || ''}
                          onChange={e => setVals(p => ({ ...p, [i]: e.target.value }))}
                          className="w-full rounded-[10px] px-3 py-2.5 text-[13.5px] outline-none appearance-none cursor-pointer"
                          style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: vals[i] ? 'var(--text)' : 'var(--muted)' }}
                        >
                          <option value="" disabled>اختر…</option>
                          {f.opts!.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      ) : (
                        <input
                          type="text"
                          placeholder={f.placeholder}
                          className="w-full rounded-[10px] px-3 py-2.5 text-[13.5px] outline-none"
                          style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Disclosures */}
              <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                <div className="px-5 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h2 className="text-[14px] font-bold" style={{ color: 'var(--heading)', fontFamily: 'Georgia, "Times New Roman", serif' }}>إفصاحات إضافية</h2>
                  <p className="text-[12.5px] mt-0.5" style={{ color: 'var(--muted)' }}>يرجى الإجابة على الأسئلة التالية بأمانة.</p>
                </div>
                {accordions.map((acc, i) => (
                  <div key={acc.label} style={{ borderBottom: i < accordions.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <button
                      className="w-full flex items-center justify-between px-5 py-4 text-right text-[14px] font-semibold"
                      style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}
                      onClick={() => setOpen(open === i ? null : i)}
                    >
                      {acc.label}
                      <span style={{ color: 'var(--muted)', display: 'inline-block', transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
                    </button>
                    {open === i && (
                      <div className="px-5 pb-4 grid grid-cols-2 gap-3">
                        {acc.items.map(item => (
                          <div key={item}>
                            <label className="block text-[12px] font-semibold mb-1.5" style={{ color: 'var(--muted)' }}>{item}</label>
                            <input
                              type="text"
                              className="w-full rounded-[8px] px-3 py-2 text-[13px] outline-none"
                              style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <div className="flex items-center gap-2 text-[12.5px]" style={{ color: 'var(--muted)' }}>
                <span>🔒</span> تبقى معلوماتك آمنة ومشفرة طوال هذه العملية.
              </div>
              <Link href="/lucid/ar/08-collecting-reports" className="px-8 py-3 rounded-xl text-[15px] font-bold text-white" style={{ background: 'var(--blue)' }}>
                تأكيد والتالي ←
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
        select option{background:var(--card);color:var(--text);}
        input::placeholder{color:var(--muted);}
      `}</style>
    </div>
  );
}
