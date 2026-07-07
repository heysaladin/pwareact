'use client';

import { useState, useEffect } from 'react';

const imgLogoBlue  = "/logo-tamawal-web-blue.svg";
const imgLogoWhite = "/logo-tamawal-web.svg";
const imgMenuIcon  = "/icon-menu.svg";

const navLinks = [
  { label: 'App',        href: '/app',  active: true  },
  { label: 'Tamawal',    href: '#',     active: false },
  { label: 'Services',   href: '#',     active: false },
  { label: 'About us',   href: '#',     active: false },
  { label: 'Contact us', href: '#',     active: false },
];

export default function Navbar({ onMenuOpen, dark = false }: { onMenuOpen: () => void; dark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!dark) return;
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dark]);

  const expanded = dark && !scrolled;

  return (
    <div className={`sticky top-0 z-50 ${dark ? 'bg-[#000921] border-b border-[#000921]' : 'bg-white border-b border-[#EAECF0]'}`}>
      {/* Desktop */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-[75px]">
        <div className={`flex items-center justify-between h-[45px] transition-[padding] duration-300 ${expanded ? 'py-[40px]' : 'py-[25px]'}`}>
          <div className="flex items-center gap-[56px]">
            <img src={dark ? imgLogoWhite : imgLogoBlue} alt="Tamawal" className="h-[33px] w-auto" />
            <nav className="flex items-center gap-[40px]">
              {navLinks.map(({ label, href, active }) => (
                <a
                  key={label}
                  href={href}
                  className={`text-[16px] ${active
                    ? (dark ? 'text-white font-bold' : 'text-black font-bold')
                    : (dark ? 'text-[#98a2b3] font-medium' : 'text-[#344054] font-medium')
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-8">
            <div className="w-[104px] h-[45px]" />
            <div className={`border rounded-full w-[44px] h-[44px] flex items-center justify-center ${dark ? 'border-[#344054]' : 'border-[#EAECF0]'}`}>
              <span className={`text-[13px] font-medium ${dark ? 'text-[#98a2b3]' : 'text-[#344054]'}`}>عربي</span>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className={`flex lg:hidden items-center justify-between px-6 transition-[padding] duration-300 ${expanded ? 'py-8' : 'py-5'}`}>
        <button onClick={onMenuOpen} className="shrink-0 size-6 cursor-pointer">
          <img src={imgMenuIcon} alt="Menu" className="size-6" style={dark ? { filter: 'brightness(0) invert(1)' } : undefined} />
        </button>
        <img src={dark ? imgLogoWhite : imgLogoBlue} alt="Tamawal" className="h-8 w-auto" />
        <div className={`border rounded-full w-11 h-11 flex items-center justify-center ${dark ? 'border-[#344054]' : 'border-[#EAECF0]'}`}>
          <span className={`text-[13px] font-medium ${dark ? 'text-[#98a2b3]' : 'text-[#344054]'}`}>عربي</span>
        </div>
      </div>
    </div>
  );
}
