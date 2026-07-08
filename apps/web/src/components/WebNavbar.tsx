'use client';

import { useState } from 'react';

type Lang = 'ar' | 'en';

const imgLogoWhite = '/logo-tamawal-web.svg';
const imgLogoBlue  = '/logo-tamawal-web-blue.svg';
const imgMenuDark  = '/icon-menu.svg';

const navLinksEn = [
  { label: 'Home',              href: '/landing/en' },
  { label: 'About us',         href: '/landing/en/about-us' },
  { label: 'Be a Partner',     href: '/landing/en/be-partner' },
  { label: 'Be a Customer',    href: '/landing/en/be-customer' },
  { label: 'Contact us',       href: '/landing/en/contact-us' },
  { label: 'Terms',            href: '/landing/en/terms' },
];

const navLinksAr = [
  { label: 'الرئيسية',         href: '/landing' },
  { label: 'عن تموّل',         href: '/landing/about-us' },
  { label: 'كن شريكاً',       href: '/landing/be-partner' },
  { label: 'كن عميلاً',       href: '/landing/be-customer' },
  { label: 'اتصل بنا',        href: '/landing/contact-us' },
  { label: 'الشروط',           href: '/landing/terms' },
];

export default function WebNavbar({ lang, dark = false }: { lang: Lang; dark?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isRtl = lang === 'ar';
  const links = lang === 'ar' ? navLinksAr : navLinksEn;
  const langLabel = lang === 'ar' ? 'En' : 'عربي';
  const langHref  = lang === 'ar' ? undefined : undefined; // pages handle their own cross-lang links

  return (
    <>
      <nav
        dir={isRtl ? 'rtl' : 'ltr'}
        className={`sticky top-0 z-50 ${dark ? 'bg-[#0d0d0d]' : 'bg-white border-b border-[#EAECF0]'}`}
      >
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between max-w-[1440px] mx-auto px-[75px] h-[64px]">
          <img src={dark ? imgLogoWhite : imgLogoBlue} alt="Tamawal" className="h-[30px] w-auto" />
          <div className="flex items-center gap-[32px]">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-[14px] font-medium transition-colors ${dark ? 'text-[#98a2b3] hover:text-white' : 'text-[#344054] hover:text-[#0063F5]'}`}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className={`border rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer ${dark ? 'border-[#344054]' : 'border-[#EAECF0]'}`}>
            <span className={`text-[12px] font-medium ${dark ? 'text-[#98a2b3]' : 'text-[#344054]'}`}>{langLabel}</span>
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
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-white/80 hover:text-white text-[20px] font-semibold py-3 px-2 rounded-lg transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
