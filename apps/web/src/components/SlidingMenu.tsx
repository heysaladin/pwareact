'use client';

import { useEffect } from 'react';

const imgClose = "/icon-x.svg";

const navLinksEn = [
  { label: 'App',        href: '/app',    active: true  },
  { label: 'Tamawal',   href: '#',       active: false },
  { label: 'Services',  href: '#',       active: false },
  { label: 'About us',  href: '#',       active: false },
  { label: 'Contact us',href: '#',       active: false },
];

const navLinksAr = [
  { label: 'التطبيق',     href: '/app/ar', active: true  },
  { label: 'تمويل',       href: '#',       active: false },
  { label: 'خدمات',       href: '#',       active: false },
  { label: 'معلومات عنا', href: '#',       active: false },
  { label: 'تواصل معنا',  href: '#',       active: false },
];

export default function SlidingMenu({ onClose, lang = 'en' }: { onClose: () => void; lang?: 'en' | 'ar' }) {
  const navLinks = lang === 'ar' ? navLinksAr : navLinksEn;
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative mr-auto w-full max-w-sm bg-[#1e2228] flex flex-col items-center p-6 h-full">
        <div className="flex items-center justify-end w-full shrink-0">
          <button
            onClick={onClose}
            className="flex items-center cursor-pointer"
          >
            <img alt="Close" className="size-[30px]" src={imgClose} />
          </button>
        </div>
        <div className="flex flex-col gap-4 items-start w-full px-2 mt-4">
          {navLinks.map(({ label, href, active }) => (
            <div key={label} className="flex flex-col gap-0.5 items-start w-full">
              <a href={href} className="flex items-center px-3 py-2 rounded-lg w-full">
                <span
                  className="font-bold text-[32px] leading-normal"
                  style={{ color: active ? '#fff' : 'rgba(255,255,255,0.64)' }}
                >
                  {label}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
