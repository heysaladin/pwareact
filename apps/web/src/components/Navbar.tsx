'use client';

const imgLogoBlue = "/logo-tamawal-web-blue.svg";
const imgMenuIcon = "/icon-menu.svg";

const navLinks = [
  { label: 'App',        href: '/app',  active: true  },
  { label: 'Tamawal',    href: '#',     active: false },
  { label: 'Services',   href: '#',     active: false },
  { label: 'About us',   href: '#',     active: false },
  { label: 'Contact us', href: '#',     active: false },
];

export default function Navbar({ onMenuOpen }: { onMenuOpen: () => void }) {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-[#EAECF0]">
      {/* Desktop */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-[75px]">
        <div className="flex items-center justify-between h-[45px] py-[25px]">
          <div className="flex items-center gap-[56px]">
            <img src={imgLogoBlue} alt="Tamawal" className="h-[33px] w-auto" />
            <nav className="flex items-center gap-[40px]">
              {navLinks.map(({ label, href, active }) => (
                <a
                  key={label}
                  href={href}
                  className={`text-[16px] ${active ? 'text-[#021945] font-bold' : 'text-[#344054] font-medium'}`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-8">
            <div className="w-[104px] h-[45px]" />
            <div className="border border-[#EAECF0] rounded-full w-[44px] h-[44px] flex items-center justify-center">
              <span className="text-[#344054] text-[13px] font-medium">عربي</span>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex lg:hidden items-center justify-between px-6 py-5">
        <button onClick={onMenuOpen} className="shrink-0 size-6 cursor-pointer">
          <img src={imgMenuIcon} alt="Menu" className="size-6" />
        </button>
        <img src={imgLogoBlue} alt="Tamawal" className="h-8 w-auto" />
        <div className="border border-[#EAECF0] rounded-full w-11 h-11 flex items-center justify-center">
          <span className="text-[#344054] text-[13px] font-medium">عربي</span>
        </div>
      </div>
    </div>
  );
}
