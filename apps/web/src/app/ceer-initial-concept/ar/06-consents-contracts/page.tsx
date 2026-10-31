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
  const [dark, setDark] = useState(true);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setChecked(p => ({ ...p, [id]: !p[id] }));
  const allChecked = [...consents, ...agreements].every(i => checked[i.id]);

  return (
    <div dir="rtl" data-theme={dark ? 'dark' : 'light'} style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
      <div className="viewport-warning fixed inset-0 z-50 hidden flex-col items-center justify-center p-8 text-center">
        <div className="text-4xl mb-4">🖥️</div>
        <h2 className="text-[22px] font-extrabold" style={{ color: 'var(--text)' }}>الشاشة صغيرة جداً</h2>
        <p className="mt-2.5 text-[15px] max-w-[420px] leading-relaxed" style={{ color: 'var(--muted)' }}>هذه الواجهة مصممة للشاشات الواسعة.</p>
      </div>
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="frame w-[1455px] h-[1015px] overflow-auto flex items-stretch" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
          <CeerSidebarAr backHref="/ceer-tamawal-ar/05-mobile-verification" />
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
                <Link href="/ceer-tamawal-ar/05-mobile-verification" className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>رجوع →</Link>
              </div>

              <h1 className="text-[28px] font-extrabold mb-1" style={{ color: 'var(--heading)' }}>الموافقات والعقود</h1>
              <p className="text-[15px] mb-4" style={{ color: 'var(--muted)' }}>يرجى مراجعة الموافقات والاتفاقيات المطلوبة والقبول بها للمتابعة.</p>

              <div className="flex items-center gap-2.5 rounded-[10px] px-4 py-3 mb-5" style={{ background: 'var(--highlight)', border: '1px solid var(--border)' }}>
                <span>🔒</span>
                <p className="text-[13px]" style={{ color: 'var(--muted)' }}>بياناتك آمنة وستُستخدم فقط لأغراض التمويل وفقاً للوائح ساما.</p>
              </div>

              {/* Required consents */}
              <div className="rounded-[16px] overflow-hidden mb-4" style={{ border: '1px solid var(--border)', background: 'var(--card)' }}>
                <div className="px-5 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h2 className="text-[14px] font-bold" style={{ color: 'var(--heading)' }}>الموافقات المطلوبة</h2>
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
                  <h2 className="text-[14px] font-bold" style={{ color: 'var(--heading)' }}>الاتفاقيات والإفصاحات</h2>
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
                href="/ceer-tamawal-ar/07-personal-details"
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
