'use client';
import { useState } from 'react';
import Link from 'next/link';
import CeerSidebarAr from '../_components/CeerSidebarAr';

const consents = [
  {
    id: 'tamawal',
    logoText: 'T',
    logoColor: '#4f95ff',
    title: 'موافقة تمول',
    desc: 'الموافقة على قيام تمول بجمع واستخدام ومعالجة ومشاركة بياناتك الشخصية والمالية لأغراض تقييم التمويل.',
    linkLabel: 'عرض التفاصيل',
  },
  {
    id: 'simah',
    logoText: 'سمة\nSIMAH',
    logoColor: '#1db954',
    title: 'موافقة سمة',
    desc: 'الموافقة على قيام تمول بطلب معلوماتي الائتمانية ودرجة الائتمان من سمة (المكتب السعودي للائتمان).',
    linkLabel: 'عرض التفاصيل',
  },
];

const agreements = [
  {
    id: 'terms',
    icon: '📄',
    title: 'الشروط والأحكام لتمول',
    desc: 'لقد اطلعت وفهمت ووافقت على الشروط والأحكام الخاصة بتمول.',
    linkLabel: 'عرض الوثيقة',
  },
  {
    id: 'sama',
    icon: '🏛️',
    title: 'إفصاحات التمويل لساما',
    desc: 'لقد اطلعت ووافقت على إفصاحات التمويل المطلوبة من البنك المركزي السعودي (ساما).',
    linkLabel: 'عرض الوثيقة',
  },
];

export default function ConsentsContractsArPage() {
  const [dark, setDark] = useState(false);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setChecked(p => ({ ...p, [id]: !p[id] }));
  const allChecked = [...consents, ...agreements].every(i => checked[i.id]);

  return (
    <div dir="rtl" data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>الشاشة صغيرة جداً</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>هذه الواجهة مصممة للشاشات الواسعة.</p>
      </div>
      <div className="fixed inset-0 overflow-auto flex items-start justify-center pt-4" style={{ background: dark ? '#000' : '#d1d5db' }}>
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebarAr backHref="/lucid/ar/05-mobile-verification" />
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 flex flex-col p-6 overflow-y-auto">

              {/* Logo row */}
              <div className="flex items-center justify-between mb-5">
                                <img src={dark ? '/logo-tamawal-web.svg' : '/logo-tamawal-web-blue.svg'} alt="تمول" className="h-8 w-auto" />
                <div className="flex items-center gap-4">
  <Link href="/lucid/ar/05-mobile-verification" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>رجوع →</Link>
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

              <h1 className="text-[28px] font-extrabold mb-1" style={{ color: 'var(--heading)', fontFamily: 'Georgia, "Times New Roman", serif' }}>الموافقات والعقود</h1>
              <p className="text-[15px] mb-4" style={{ color: 'var(--muted)' }}>يرجى مراجعة الموافقات والاتفاقيات المطلوبة والقبول بها للمتابعة.</p>

              <div className="flex items-center gap-2.5 rounded-[10px] px-4 py-3 mb-5" style={{ background: 'var(--highlight)', border: '1px solid var(--border)' }}>
                <span>🔒</span>
                <p className="text-[13px]" style={{ color: 'var(--muted)' }}>بياناتك آمنة وستُستخدم فقط لأغراض التمويل وفقاً للوائح ساما.</p>
              </div>

              {/* Required consents */}
              <div className="rounded-[16px] overflow-hidden mb-4" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                <div className="px-5 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h2 className="text-[14px] font-bold" style={{ color: 'var(--heading)', fontFamily: 'Georgia, "Times New Roman", serif' }}>الموافقات المطلوبة</h2>
                </div>
                {consents.map((item, i) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 px-5 py-4 cursor-pointer"
                    style={{ borderBottom: i < consents.length - 1 ? '1px solid var(--border)' : 'none' }}
                    onClick={() => toggle(item.id)}
                  >
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 text-[10px] font-black text-center whitespace-pre leading-[13px]"
                      style={{ background: `${item.logoColor}20`, color: item.logoColor, border: `1px solid ${item.logoColor}40` }}
                    >
                      {item.logoText}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[14px] font-semibold">{item.title}</div>
                      <div className="text-[12.5px] mt-0.5" style={{ color: 'var(--muted)' }}>{item.desc}</div>
                    </div>
                    <a href="#" className="text-[12px] font-semibold shrink-0" style={{ color: 'var(--blue)' }} onClick={e => e.stopPropagation()}>{item.linkLabel}</a>
                    <div
                      className="w-5 h-5 rounded-[5px] flex items-center justify-center shrink-0"
                      style={{ background: checked[item.id] ? 'var(--blue)' : 'transparent', border: `2px solid ${checked[item.id] ? 'var(--blue)' : 'var(--border)'}` }}
                    >
                      {checked[item.id] && <span className="text-white text-[11px] font-bold">✓</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Agreements & Disclosures */}
              <div className="rounded-[16px] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                <div className="px-5 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h2 className="text-[14px] font-bold" style={{ color: 'var(--heading)', fontFamily: 'Georgia, "Times New Roman", serif' }}>الاتفاقيات والإفصاحات</h2>
                </div>
                {agreements.map((item, i) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 px-5 py-4 cursor-pointer"
                    style={{ borderBottom: i < agreements.length - 1 ? '1px solid var(--border)' : 'none' }}
                    onClick={() => toggle(item.id)}
                  >
                    <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 text-xl" style={{ background: 'var(--highlight)' }}>{item.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[14px] font-semibold">{item.title}</div>
                      <div className="text-[12.5px] mt-0.5" style={{ color: 'var(--muted)' }}>{item.desc}</div>
                    </div>
                    <a href="#" className="text-[12px] font-semibold shrink-0" style={{ color: 'var(--blue)' }} onClick={e => e.stopPropagation()}>{item.linkLabel}</a>
                    <div
                      className="w-5 h-5 rounded-[5px] flex items-center justify-center shrink-0"
                      style={{ background: checked[item.id] ? 'var(--blue)' : 'transparent', border: `2px solid ${checked[item.id] ? 'var(--blue)' : 'var(--border)'}` }}
                    >
                      {checked[item.id] && <span className="text-white text-[11px] font-bold">✓</span>}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Footer */}
            <div className="shrink-0 px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
              <div className="flex items-center gap-2 text-[12.5px]" style={{ color: 'var(--muted)' }}>
                <span>🔒</span> تبقى معلوماتك آمنة ومشفرة طوال هذه العملية.
              </div>
              <Link
                href="/lucid/ar/07-personal-details"
                className="px-8 py-3 rounded-xl text-[15px] font-bold text-white"
                style={{ background: allChecked ? 'var(--blue)' : 'var(--border)', pointerEvents: allChecked ? 'auto' : 'none' }}
              >
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
      `}</style>
    </div>
  );
}
