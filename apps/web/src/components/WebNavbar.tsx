'use client';

import { useState, useRef, useEffect } from 'react';

type Lang = 'ar' | 'en';

const imgLogoWhite    = '/logo-tamawal-web.svg';
const imgLogoBlue     = '/logo-tamawal-web-blue.svg';
const imgMenuDark     = '/icon-menu.svg';

const serviceItems = [
  { label: 'Be a partner',  labelAr: 'كن شريكاً',  href: '/be-partner'  },
  { label: 'Be a customer', labelAr: 'كن عميلاً',  href: '/be-customer' },
];

const navLinksEn = [
  { label: 'Home',       href: '/app',                      dropdown: false },
  { label: 'Services',   href: '#',                         dropdown: true  },
  { label: 'About us',   href: '/landing/en/about-us',      dropdown: false },
  { label: 'Contact us', href: '/landing/en/contact-us',    dropdown: false },
];

const navLinksAr = [
  { label: 'الرئيسية',        href: '/app',                  dropdown: false },
  { label: 'خدمات',           href: '#',                     dropdown: true  },
  { label: 'معلومات عنا',     href: '/landing/about-us',     dropdown: false },
  { label: 'اتصل بنا',        href: '/landing/contact-us',   dropdown: false },
];

function ServicesDropdown({ lang, dark }: { lang: Lang; dark: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const label = lang === 'ar' ? 'خدمات' : 'Services';
  const linkClass = `text-[16px] font-medium transition-colors whitespace-nowrap ${dark ? 'text-[#a4a7ae] hover:text-white' : 'text-[#344054] hover:text-[#0063F5]'}`;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-[6px] ${linkClass}`}
      >
        {label}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
          className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute top-[calc(100%+8px)] left-0 z-[999] bg-white min-w-[180px] rounded-md border border-blue-gray-50 shadow-lg shadow-blue-gray-500/10 px-1 py-1 text-[#7A8AA7] text-sm font-medium overflow-auto focus:outline-none"
        >
          {serviceItems.map((item) => (
            <button
              key={item.href}
              role="menuitem"
              className="w-full pt-[9px] pb-2 px-3 rounded-md text-start leading-tight cursor-pointer select-none transition-all hover:bg-[#E3E7F1] hover:text-blue-gray-900 outline-none flex items-center"
              onClick={() => { setOpen(false); window.location.href = item.href; }}
            >
              {lang === 'ar' ? item.labelAr : item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function WebNavbar({ lang, dark = false }: { lang: Lang; dark?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const isRtl = lang === 'ar';
  const links = lang === 'ar' ? navLinksAr : navLinksEn;
  const langLabel = lang === 'ar' ? 'En' : 'عربي';
  const businessLabel = lang === 'ar' ? 'تمويل أعمال' : 'Tamawal Business';

  const linkClass = `text-[16px] font-medium transition-colors whitespace-nowrap ${dark ? 'text-[#a4a7ae] hover:text-white' : 'text-[#344054] hover:text-[#0063F5]'}`;

  return (
    <>
      <nav
        dir={isRtl ? 'rtl' : 'ltr'}
        className={`sticky top-0 z-50 ${dark ? 'bg-[#000921]' : 'bg-white border-b border-[#EAECF0]'}`}
      >
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between max-w-[1440px] mx-auto px-[75px] h-[64px]">
          {/* Left group: logo + nav links */}
          <div className="flex items-center gap-[56px]">
            <img src={dark ? imgLogoWhite : imgLogoBlue} alt="Tamawal" className="h-[30px] w-auto shrink-0" />
            <div className="flex items-center gap-[40px]">
              {links.map((l) =>
                l.dropdown ? (
                  <ServicesDropdown key={l.label} lang={lang} dark={dark} />
                ) : (
                  <a key={l.label} href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                )
              )}
            </div>
          </div>
          {/* Right group: business link + lang pill */}
          <div className="flex items-center gap-[40px]">
            <a href={isRtl ? '/landing/business' : '/landing/en/business'} className={linkClass}>
              {businessLabel}
            </a>
            <div className={`border rounded-full w-[44px] h-[44px] flex items-center justify-center cursor-pointer shrink-0 ${dark ? 'border-[#344054]' : 'border-[#EAECF0]'}`}>
              <span className={`text-[13px] font-medium ${dark ? 'text-[#98a2b3]' : 'text-[#344054]'}`}>{langLabel}</span>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className={`flex lg:hidden items-center justify-between px-5 h-[56px]`}>
          <button onClick={() => setMobileOpen(true)} className="size-6 cursor-pointer">
            <img src={imgMenuDark} alt="Menu" className="size-6" style={dark ? { filter: 'brightness(0) invert(1)' } : undefined} />
          </button>
          <img src={dark ? imgLogoWhite : imgLogoBlue} alt="Tamawal" className="h-7 w-auto" />
          <div className={`border rounded-full w-9 h-9 flex items-center justify-center ${dark ? 'border-[#344054]' : 'border-[#EAECF0]'}`}>
            <span className={`text-[12px] font-medium ${dark ? 'text-[#98a2b3]' : 'text-[#344054]'}`}>{langLabel}</span>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] flex" dir={isRtl ? 'rtl' : 'ltr'}>
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className={`relative ${isRtl ? 'mr-auto' : 'ml-auto'} w-full max-w-xs bg-[#1e2228] flex flex-col p-6 h-full overflow-y-auto`}>
            <button onClick={() => setMobileOpen(false)} className="self-end mb-6 cursor-pointer">
              <span className="text-white text-2xl leading-none">×</span>
            </button>
            <div className="flex flex-col gap-2">
              {links.map((l) =>
                l.dropdown ? (
                  <div key={l.label}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="w-full flex items-center justify-between text-white/80 hover:text-white text-[20px] font-semibold py-3 px-2 rounded-lg transition-colors"
                    >
                      {l.label}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                        className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {mobileServicesOpen && (
                      <div className="flex flex-col pl-4 gap-1">
                        {serviceItems.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="text-white/60 hover:text-white text-[16px] font-medium py-2 px-2 rounded-lg transition-colors"
                          >
                            {lang === 'ar' ? item.labelAr : item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-white/80 hover:text-white text-[20px] font-semibold py-3 px-2 rounded-lg transition-colors"
                  >
                    {l.label}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
