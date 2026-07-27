'use client';

import { useState, useEffect } from 'react';

const imgLogoBlue  = "/logo-tamawal-web-blue.svg";
const imgLogoWhite = "/logo-tamawal-web.svg";
const imgMenuIcon  = "/icon-menu.svg";

const navLinksEn = [
  { label: 'App',               href: '/app', active: true,  dropdown: false },
  { label: 'Tamawal',           href: '#',    active: false, dropdown: false },
  { label: 'Services',          href: '#',    active: false, dropdown: true  },
  { label: 'About us',          href: '#',    active: false, dropdown: false },
  { label: 'Contact us',        href: '#',    active: false, dropdown: false },
  { label: 'Terms & Conditions',href: '/landing/en/terms', active: false, dropdown: false },
];

const navLinksAr = [
  { label: 'الرئيسية',        href: '/app/ar',             active: true,  dropdown: false },
  { label: 'خدمات',           href: '#',                   active: false, dropdown: true  },
  { label: 'معلومات عنا',     href: '/landing/about-us',   active: false, dropdown: false },
  { label: 'اتصل بنا',        href: '/landing/contact-us', active: false, dropdown: false },
  { label: 'الأحكام والشروط', href: '/landing/terms',       active: false, dropdown: false },
];

function ChevronDown({ color }: { color: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke={color} className="h-3 w-3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function Navbar({ onMenuOpen, dark = false, langHref, langLabel = 'عربي', lang = 'en' }: { onMenuOpen: () => void; dark?: boolean; langHref?: string; langLabel?: string; lang?: 'en' | 'ar' }) {
  const navLinks = lang === 'ar' ? navLinksAr : navLinksEn;
  const isRtl = lang === 'ar';
  const businessLabel = lang === 'ar' ? 'تمويل أعمال' : 'Tamawal Business';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!dark) return;
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dark]);

  const expanded = dark && !scrolled;
  const linkColor = dark ? 'text-[#98a2b3]' : 'text-[#344054]';
  const activeLinkColor = dark ? 'text-white' : 'text-black';

  return (
    <div className={`sticky top-0 z-50 ${dark ? 'bg-[#000921] border-b border-[#000921]' : 'bg-white border-b border-[#EAECF0]'}`}>
      {/* Desktop */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-[75px]">
        <div
          dir={isRtl ? 'rtl' : 'ltr'}
          className={`flex items-center justify-between h-[45px] transition-[padding] duration-300 ${expanded ? 'py-[40px]' : 'py-[25px]'}`}
        >
          {/* Logo + nav */}
          <div className="flex items-center gap-[56px]">
            <img src={dark ? imgLogoWhite : imgLogoBlue} alt="Tamawal" className="h-[33px] w-auto" />
            <nav className="flex items-center gap-[40px]">
              {navLinks.map(({ label, href, active, dropdown }) => (
                <a
                  key={label}
                  href={href}
                  className={`flex items-center gap-[6px] text-[16px] font-medium ${active ? activeLinkColor + ' font-bold' : linkColor}`}
                >
                  {label}
                  {dropdown && <ChevronDown color={active ? (dark ? '#ffffff' : '#000000') : (dark ? '#98a2b3' : '#344054')} />}
                </a>
              ))}
            </nav>
          </div>
          {/* Business link + lang pill */}
          <div className="flex items-center gap-[40px]">
            <a
              href={isRtl ? '/landing/business' : '/landing/en/business'}
              className={`text-[16px] font-medium ${linkColor}`}
            >
              {businessLabel}
            </a>
            {langHref ? (
              <a href={langHref} className={`border rounded-full w-[44px] h-[44px] flex items-center justify-center ${dark ? 'border-[#344054]' : 'border-[#EAECF0]'}`}>
                <span className={`text-[13px] font-medium ${dark ? 'text-[#98a2b3]' : 'text-[#344054]'}`}>{langLabel}</span>
              </a>
            ) : (
              <div className={`border rounded-full w-[44px] h-[44px] flex items-center justify-center ${dark ? 'border-[#344054]' : 'border-[#EAECF0]'}`}>
                <span className={`text-[13px] font-medium ${dark ? 'text-[#98a2b3]' : 'text-[#344054]'}`}>{langLabel}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div
        dir={isRtl ? 'rtl' : 'ltr'}
        className={`flex lg:hidden items-center justify-between px-6 transition-[padding] duration-300 ${expanded ? 'py-8' : 'py-5'}`}
      >
        <button onClick={onMenuOpen} className="shrink-0 size-6 cursor-pointer">
          <img src={imgMenuIcon} alt="Menu" className="size-6" style={dark ? { filter: 'brightness(0) invert(1)' } : undefined} />
        </button>
        <img src={dark ? imgLogoWhite : imgLogoBlue} alt="Tamawal" className="h-8 w-auto" />
        {langHref ? (
          <a href={langHref} className={`border rounded-full w-11 h-11 flex items-center justify-center ${dark ? 'border-[#344054]' : 'border-[#EAECF0]'}`}>
            <span className={`text-[13px] font-medium ${dark ? 'text-[#98a2b3]' : 'text-[#344054]'}`}>{langLabel}</span>
          </a>
        ) : (
          <div className={`border rounded-full w-11 h-11 flex items-center justify-center ${dark ? 'border-[#344054]' : 'border-[#EAECF0]'}`}>
            <span className={`text-[13px] font-medium ${dark ? 'text-[#98a2b3]' : 'text-[#344054]'}`}>{langLabel}</span>
          </div>
        )}
      </div>
    </div>
  );
}
