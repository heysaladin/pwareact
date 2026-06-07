'use client';
import Image from 'next/image';
import { Bell, ChevronDown, ChevronUp, Briefcase, Settings2 } from 'lucide-react';
import ThemeToggle from '@/components/ui/theme-toggle';
import { useState, useRef, useEffect } from 'react';
import { useLang } from '@/lib/language-context';

const t = {
  en: {
    langBtn: 'عربي',
    orders: 'Orders (Home)',
    offers: 'Offers & Discount Engine',
    viewProfile: 'View Profile',
    profileSettings: 'Profile Settings',
    logout: 'Logout',
  },
  ar: {
    langBtn: 'En',
    orders: 'إدارة الطلبات',
    offers: 'محرك العروض والخصومات',
    viewProfile: 'عرض الملف الشخصي',
    profileSettings: 'إعدادات الملف الشخصي',
    logout: 'تسجيل الخروج',
  },
} as const;

export default function Topbar() {
  const { lang, toggle: toggleLang } = useLang();
  const i18n = t[lang];
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-[#e2e7e9] flex items-center justify-between px-6 py-4 h-[66px] shrink-0 dark:bg-slate-950 dark:border-slate-800">
      <Image src="/logo.svg" alt="Tamawal" width={119} height={35} priority />

      <div className="flex items-center gap-4">
        <button
          onClick={toggleLang}
          className="flex items-center px-2 py-1 rounded-full text-[#121212] text-[11px] font-medium hover:bg-gray-50 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {i18n.langBtn}
        </button>

        <ThemeToggle />

        <button className="relative flex items-center p-1.5 rounded-full hover:bg-gray-50 dark:hover:bg-slate-800">
          <Bell className="w-[18px] h-[18px] text-[#667085] dark:text-slate-400" />
          <span className="absolute top-1.5 right-0 w-[5px] h-[5px] bg-red-500 rounded-full border-[1.5px] border-white dark:border-slate-950" />
        </button>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(v => !v)}
            className="flex items-center gap-1 rounded-lg px-1 py-0.5 hover:bg-gray-50 dark:hover:bg-slate-800"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#e2e7e9] border border-white z-10 flex items-center justify-center text-xs font-semibold text-[#4b5565] dark:bg-slate-800 dark:border-slate-950 dark:text-slate-200">MM</div>
                <div className="w-8 h-8 rounded-full bg-[#bbd5fb] border border-white flex items-center justify-center text-xs font-semibold text-[#0063f5] dark:border-slate-950">AB</div>
              </div>
              <div className="flex flex-col">
                <span className="text-[#363b44] text-[14px] font-semibold leading-tight dark:text-slate-100">Mohammed Mahdi</span>
                <span className="text-[#667085] text-[10px] leading-tight dark:text-slate-400">Alinma Bank</span>
              </div>
            </div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full p-1">
              {open
                ? <ChevronUp className="w-3 h-3 text-[#667085] dark:text-slate-400" />
                : <ChevronDown className="w-3 h-3 text-[#667085] dark:text-slate-400" />
              }
            </div>
          </button>

          {open && (
            <div className="absolute end-0 top-full mt-2 w-[220px] bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-[#e2e7e9] dark:border-slate-800 py-2 z-50">
              <div className="px-3 py-1">
                <button className="flex items-center gap-3 w-full px-2 py-2 rounded-lg text-[13px] text-[#363b44] dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800">
                  <Briefcase className="w-4 h-4 text-[#667085] dark:text-slate-400 shrink-0" />
                  {i18n.orders}
                </button>
                <button className="flex items-center gap-3 w-full px-2 py-2 rounded-lg text-[13px] text-[#363b44] dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800">
                  <Settings2 className="w-4 h-4 text-[#667085] dark:text-slate-400 shrink-0" />
                  {i18n.offers}
                </button>
              </div>

              <div className="border-t border-[#e2e7e9] dark:border-slate-800 my-1" />

              <div className="px-3 py-1">
                <button className="flex w-full px-2 py-2 rounded-lg text-[13px] text-[#363b44] dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800">
                  {i18n.viewProfile}
                </button>
                <button className="flex w-full px-2 py-2 rounded-lg text-[13px] text-[#363b44] dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800">
                  {i18n.profileSettings}
                </button>
              </div>

              <div className="border-t border-[#e2e7e9] dark:border-slate-800 my-1" />

              <div className="px-3 py-1">
                <button className="flex w-full px-2 py-2 rounded-lg text-[13px] text-[#e7104b] hover:bg-gray-50 dark:hover:bg-slate-800">
                  {i18n.logout}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
