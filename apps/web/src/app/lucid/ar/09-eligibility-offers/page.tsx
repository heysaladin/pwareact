'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebarAr from '../_components/CeerSidebarAr';

const offers = [
  {
    id: 'snb',
    bankAr: 'SNB الأهلي',
    bankEn: 'البنك الأهلي السعودي',
    apr: '4.69%',
    monthly: '3,648 ر.س',
    tenure: '60 شهراً',
    financed: '183,000 ر.س',
    total: '218,880 ر.س',
    feats: ['بدون رسوم معالجة', 'مرونة التسوية المبكرة', 'تأمين شامل مجاني', 'خدمات رقمية متقدمة'],
    recommended: true,
  },
  {
    id: 'alinma',
    bankAr: 'مصرف الإنماء',
    bankEn: 'alinma bank',
    apr: '5.19%',
    monthly: '3,755 ر.س',
    tenure: '60 شهراً',
    financed: '183,000 ر.س',
    total: '225,300 ر.س',
    feats: ['خيارات دفع مرنة', 'بدون رسوم معالجة', 'تسوية مبكرة متاحة'],
    recommended: false,
  },
  {
    id: 'riyad',
    bankAr: 'بنك الرياض',
    bankEn: 'Riyad Bank',
    apr: '5.49%',
    monthly: '3,697 ر.س',
    tenure: '60 شهراً',
    financed: '183,000 ر.س',
    total: '221,820 ر.س',
    feats: ['موافقة سريعة', 'تأمين شامل مجاني'],
    recommended: false,
  },
  {
    id: 'tamweel',
    bankAr: 'تمويل الأولى',
    bankEn: 'Tamweel Aloula',
    apr: '5.29%',
    monthly: '3,820 ر.س',
    tenure: '60 شهراً',
    financed: '183,000 ر.س',
    total: '229,200 ر.س',
    feats: ['بدون رسوم معالجة', 'تسوية مبكرة متاحة'],
    recommended: false,
  },
];

export default function EligibilityOffersArPage() {
  const [dark, setDark] = useState(false);
  const [compare, setCompare] = useState<Set<string>>(new Set(['snb']));

  const toggleCompare = (id: string) => setCompare(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.size < 4 && next.add(id);
    return next;
  });

  return (
    <div dir="rtl" data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>الشاشة صغيرة جداً</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>هذه الواجهة مصممة للشاشات الواسعة.</p>
      </div>
      <div className="fixed inset-0 overflow-auto flex items-start justify-center pt-4" style={{ background: dark ? '#000' : '#d1d5db' }}>
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebarAr backHref="/lucid/ar/08-collecting-reports" />
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col p-6 overflow-y-auto">

              {/* Logo row — compare button replaces back link on the right */}
              <div className="flex items-center justify-between mb-4">
                <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt="تمول" className="h-8 w-auto" />
                <div className="flex items-center gap-4">
                  <Link
                    href="/lucid/ar/10-compare-offers"
                    className="px-4 py-2 rounded-lg text-[13px] font-bold"
                    style={{ border: '1.5px solid var(--blue)', color: 'var(--blue)' }}
                  >
                    ⇄ مقارنة المحدد ({compare.size})
                  </Link>
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

              <h1 className="text-[26px] font-extrabold mb-1" style={{ color: 'var(--heading)', fontFamily: 'Georgia, "Times New Roman", serif' }}>عروض الأهلية الخاصة بك</h1>
              <p className="text-[14px] mb-4" style={{ color: 'var(--muted)' }}>إليك عروض التمويل المُولَّدة لك بناءً على تقييمك الائتماني.</p>

              <div className="flex items-center gap-2.5 rounded-[10px] px-4 py-3 mb-4" style={{ background: 'var(--highlight)', border: '1px solid var(--border)' }}>
                <span className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0" style={{ border: '1px solid var(--blue)', color: 'var(--blue)' }}>i</span>
                <p className="text-[12.5px] italic" style={{ color: 'var(--muted)' }}>هذه العروض أولية وتخضع للموافقة النهائية للبنك ومراجعة الوثائق.</p>
              </div>

              <div className="flex flex-col gap-3">
                {offers.map(offer => (
                  <div key={offer.id} className="rounded-[14px] px-5 py-4" style={{ background: 'var(--card)', border: `1.5px solid ${offer.recommended ? 'var(--blue)' : 'var(--border)'}` }}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        {offer.recommended && (
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold shrink-0" style={{ background: 'var(--highlight)', color: 'var(--blue)', border: '1px solid var(--blue)' }}>موصى به</span>
                        )}
                        <div>
                          <div className="text-[16px] font-bold">{offer.bankAr}</div>
                          <div className="text-[12px] mt-0.5" style={{ color: 'var(--muted)' }}>{offer.bankEn}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="grid grid-cols-5 gap-x-6 text-right">
                          {[
                            ['نسبة الفائدة', offer.apr],
                            ['الدفعة الشهرية', offer.monthly],
                            ['مدة التمويل', offer.tenure],
                            ['المبلغ الممول', offer.financed],
                            ['الإجمالي', offer.total],
                          ].map(([k, v]) => (
                            <div key={k}>
                              <div className="text-[10px]" style={{ color: 'var(--muted)' }}>{k}</div>
                              <div className="text-[13px] font-bold mt-0.5" style={{ color: k === 'نسبة الفائدة' ? 'var(--blue)' : 'var(--text)' }}>{v}</div>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 mr-2">
                          <label className="flex items-center gap-1.5 text-[12px] font-semibold cursor-pointer" style={{ color: 'var(--muted)' }}>
                            <div
                              className="w-4 h-4 rounded flex items-center justify-center cursor-pointer"
                              style={{ background: compare.has(offer.id) ? 'var(--blue)' : 'transparent', border: `2px solid ${compare.has(offer.id) ? 'var(--blue)' : 'var(--border)'}` }}
                              onClick={() => toggleCompare(offer.id)}
                            >
                              {compare.has(offer.id) && <span className="text-white text-[9px] font-bold">✓</span>}
                            </div>
                            مقارنة
                          </label>
                          <Link href="/lucid/ar/11-offer-details" className="text-[12px] font-semibold" style={{ color: 'var(--blue)' }}>عرض التفاصيل</Link>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 flex gap-4 flex-wrap" style={{ borderTop: '1px solid var(--border)' }}>
                      {offer.feats.map(f => (
                        <div key={f} className="text-[12px] flex items-center gap-1.5" style={{ color: 'var(--muted)' }}>
                          <span style={{ color: 'var(--green)' }}>✓</span> {f}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <Link
                href="/lucid/ar/10-compare-offers"
                className="px-5 py-3 rounded-xl text-[14px] font-bold"
                style={{ border: '1.5px solid var(--blue)', color: 'var(--blue)' }}
              >
                ⇄ مقارنة المحدد ({compare.size})
              </Link>
              <Link href="/lucid/ar/12-submit-order" className="px-8 py-3 rounded-xl text-[15px] font-bold text-white" style={{ background: 'var(--blue)' }}>
                إنشاء طلب ←
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
      `}</style>
    </div>
  );
}
