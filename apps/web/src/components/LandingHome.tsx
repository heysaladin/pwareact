'use client';

import { useState, useEffect } from 'react';
import SlidingMenu from './SlidingMenu';

const imgVuesaxLinearMenu = "/icon-menu.svg";
const imgLogoTamawal = "http://localhost:3845/assets/d6ab76e93e15e1974de93e9daae1ca561132b113.svg";
const imgRectangle1400 = "http://localhost:3845/assets/9c533ed6c905ce00e10eeb227412792e08f0dc10.svg";
const imgFrame6512 = "http://localhost:3845/assets/491f991cdcc35afa6a95b3fb3d9e59fde4fdc86e.svg";
const imgIcon = "http://localhost:3845/assets/b132fd916e53d0ab6d7a8e2c3e6a207ecab2b392.svg";
const imgIcon1 = "http://localhost:3845/assets/497877c4d3459bd9c7cc111573e1ed6314396def.svg";
const imgIcon2 = "http://localhost:3845/assets/d0eb584f28b2e49512e9a57fc36342dc9a03aae4.svg";
const imgIcon3 = "http://localhost:3845/assets/4b9da7577497222f032976351799034eac9f0e43.svg";
const imgArrowUpCircle = "/arrow-up-circle.svg";
const imgArrowDownCircle = "/arrow-down-circle.svg";
const imgAppStore = "/appstore.svg";
const imgPlayStore = "/playstore.svg";
const imgArrowNextDark = "http://localhost:3845/assets/d599a04f31ff42f2b327c0ae48aa92c0f0950b27.svg";
const imgGfpDjkmXwAAxREe5 = "http://localhost:3845/assets/12ea0e34d475c9cfab4b54498538dc99014d3758.png";
const imgGfpDjkmXwAAxREe4 = "http://localhost:3845/assets/844bdeede3c251e261a3c42370873c6c84c670a0.png";
const imgLayer12 = "http://localhost:3845/assets/ab675e54f922e5576f59cbfca2b22c86cf1d061b.svg";
const imgImage26 = "http://localhost:3845/assets/ea01f4c61cd4e9c2e9713d23b89ade3ae6ff6fc8.png";
const imgImage27 = "http://localhost:3845/assets/1176f74bb6c845c77f12cb029265ad5e9c6b4d2f.png";
const imgGroup = "http://localhost:3845/assets/20f58ef616ddc394d28c374194dd248ae1d4792b.svg";
const imgGroup1 = "http://localhost:3845/assets/c8f29d3c988dd69b85be747a732009e556968741.svg";
const imgGroup2 = "http://localhost:3845/assets/e35b6901382675086425e6908a7b0da7a658e776.svg";
const imgGroup5704 = "http://localhost:3845/assets/25e4e279a208a1f6b142c31ddc3e7e6f5cf06939.svg";
const imgGroup5930 = "http://localhost:3845/assets/9fb4b037b7b47017dc64d473b7ceed59358d37e8.svg";
const imgEllipse1308 = "http://localhost:3845/assets/c1cf067a90db779a09f977bfd0fb4bb13f0275c2.svg";
const imgEllipse1309 = "http://localhost:3845/assets/4d004101fde91d8ba8966b562ff737db043b5bcb.svg";
const imgEllipse1310 = "http://localhost:3845/assets/b5675207ecd620db383a67b22fe1998c78c9fa53.svg";
const imgLogoMark = "http://localhost:3845/assets/4c9f13adc8616436b4eb413bf48d1e26adfdcd61.svg";
const imgLine = "http://localhost:3845/assets/c1e098da703ed6507f03ac894211a9f10183f27b.svg";
const imgIcon4 = "http://localhost:3845/assets/cb3a7fab272340302ba86f6a820b28b780a29371.svg";
const imgLayer1 = "http://localhost:3845/assets/ad2931524412784cfe16d2c27d020156912b9fcb.svg";
const imgMobileLogo12 = "http://localhost:3845/assets/ac93bd5987437eaa9ad533d103363db5b1d6eacc.png";
const imgFrame5 = "http://localhost:3845/assets/4ed1ddc826f477bf8089254b418f8ea3f2d6fdb4.svg";

const faqItems = [
  {
    q: 'What types of financial services does Tamawal® offer?',
    a: 'Tamawal® offers various types of financial services, including personal loans, credit cards, car financing, and real estate financing.',
    open: true,
  },
  {
    q: "Can you provide an overview of Tamawal®'s product range?",
    a: 'Tamawal® provides a comprehensive range of financial products tailored to meet diverse customer needs across personal and business financing.',
    open: false,
  },
  {
    q: "Is Tamawal®'s financing model compliant with Sharia law?",
    a: "Tamawal®'s financing model is fully compliant with Sharia principles, ensuring ethical and responsible financial services.",
    open: false,
  },
];

const partnerLogos = [
  { src: imgGfpDjkmXwAAxREe5, mask: imgGfpDjkmXwAAxREe4, w: 104, h: 27 },
  { src: imgLayer12, w: 54, h: 52 },
  { src: imgImage27, mask: imgImage26, w: 141, h: 31 },
  { src: imgGroup, extraSrc: imgGroup1, w: 102, h: 27 },
  { src: imgGroup2, w: 80, h: 27 },
];

function Navbar({ onMenuOpen, white }: { onMenuOpen: () => void; white: boolean }) {
  return (
    <div
      className={`flex items-center justify-between px-6 py-6 w-full max-w-4xl mx-auto transition-colors duration-300 ${white ? 'bg-white' : ''}`}
    >
      <button onClick={onMenuOpen} className="shrink-0 size-6 cursor-pointer">
        <img src={imgVuesaxLinearMenu} alt="Menu" className="size-6" />
      </button>
      <div className="shrink-0">
        <img
          src={white ? '/logo-tamawal-web-blue.svg' : imgLogoTamawal}
          alt="Tamawal"
          className="h-8 w-auto"
        />
      </div>
      <button className={`border rounded-3xl px-3 py-2 flex items-center justify-center cursor-pointer ${white ? 'border-[#d0d5dd]' : 'border-[#344054]'}`}>
        <span className={`text-[13px] font-medium leading-none ${white ? 'text-[#344054]' : 'text-[#98a2b3]'}`}>عربي</span>
      </button>
    </div>
  );
}

function LoanCalculator() {
  const [hasLoan, setHasLoan] = useState<'yes' | 'no' | null>(null);

  return (
    <div className="bg-white rounded-[32px] shadow-[0px_4px_32px_rgba(0,0,0,0.08)] overflow-hidden w-full max-w-[354px] mx-auto">
      {/* Card header */}
      <div className="bg-[#f1f7ff] border-b border-[#eaecf0] flex items-center px-6 py-5 rounded-tl-[24px] rounded-tr-[24px]">
        <p className="flex-1 text-[#021945] text-[20px] font-bold leading-[1.25] text-center">
          How much funding do you need?
        </p>
      </div>

      {/* Loan amount + slider */}
      <div className="bg-white flex flex-col gap-8 items-center px-6 pt-8 pb-6">
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="flex flex-col gap-1 items-center">
            <p className="text-[#475467] text-[13px] font-medium">Loan Amount</p>
            <div className="bg-white border border-[#eef1f6] rounded-lg flex gap-1 items-center px-4 py-3">
              <span className="text-[#101828] text-[24px] font-bold">﷼</span>
              <span className="text-[#101828] text-[24px] font-bold tracking-tight">7,500.00</span>
            </div>
          </div>
          <div className="flex gap-3 items-center w-full">
            <span className="text-[#101828] text-[16px] font-semibold w-10 text-right shrink-0">1k</span>
            <div className="flex-1 h-8 relative">
              <img src={imgFrame6512} alt="" className="absolute inset-0 w-full h-full object-fill" />
            </div>
            <span className="text-[#101828] text-[16px] font-semibold w-10 shrink-0">500k</span>
          </div>
        </div>

        {/* Active loans */}
        <div className="flex flex-col gap-2 items-center w-full">
          <p className="text-[#475467] text-[13px] font-medium">Do you have active loans?</p>
          <div className="flex gap-3 py-1">
            <button
              onClick={() => setHasLoan('yes')}
              className={`px-12 py-3 rounded-lg text-[18px] font-semibold transition-colors ${
                hasLoan === 'yes'
                  ? 'bg-[#0063f5] border border-[#0063f5] text-white'
                  : 'bg-[#f5f9ff] border border-[#d7e7fe] text-[#202a39]'
              }`}
            >
              YES
            </button>
            <button
              onClick={() => setHasLoan('no')}
              className={`px-12 py-3 rounded-lg text-[18px] font-semibold transition-colors ${
                hasLoan === 'no'
                  ? 'bg-[#0063f5] border border-[#0063f5] text-white'
                  : 'bg-[#f5f9ff] border border-[#d7e7fe] text-[#202a39]'
              }`}
            >
              NO
            </button>
          </div>
        </div>

        {/* Loan purpose */}
        <div className="flex flex-col gap-2 items-center w-full">
          <p className="text-[#475467] text-[13px] font-medium">Select Loan Purpose</p>
          <div className="bg-white border border-[#eef1f6] rounded-lg flex gap-1 items-center pl-4 pr-3 py-3 w-full cursor-pointer">
            <p className="flex-1 text-[#101828] text-[18px] font-bold">Select your loan purpose</p>
            <div className="size-5 relative shrink-0">
              <img src={imgIcon} alt="" className="absolute inset-0 w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Phone + OTP section */}
      <div className="bg-[#0063f5] flex flex-col gap-6 items-center px-6 py-6 rounded-bl-[24px] rounded-br-[24px]">
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-white text-[13px] font-medium">Mobile Number</p>
            <div className="flex gap-2 items-center">
              <div className="size-5 shrink-0">
                <img src={imgIcon1} alt="" className="size-5" />
              </div>
              <span className="text-white text-[20px] font-bold">+992 8564 898 4911</span>
              <div className="bg-white rounded-full p-[2px] shrink-0">
                <div className="size-3">
                  <img src={imgIcon2} alt="" className="size-3" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#92baf6] text-[12px] text-center leading-[1.5]">
            Please enter verification code from inbox in your mobile number!
          </p>
          {/* OTP inputs */}
          <div className="flex gap-2 items-center justify-center">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className="bg-[#0041a3] border border-[#00317a] rounded-lg flex items-center justify-center p-3 w-[53px] h-[78px] cursor-pointer"
              >
                <span className="text-white text-[46px] font-normal text-center leading-none">{n}</span>
              </button>
            ))}
          </div>
          <p className="text-[12px] text-center">
            <span className="text-[#92baf6]">Resend Code? </span>
            <span className="text-[#ffdd33]">00:24</span>
          </p>
        </div>

        {/* CTA button */}
        <button className="bg-[#ffdd33] rounded-[56px] flex gap-2 items-center justify-center px-16 py-4 cursor-pointer hover:bg-[#ffe55a] transition-colors">
          <span className="text-[#171717] text-[16px] font-semibold">Tamawal</span>
          <div className="size-5 shrink-0">
            <img src={imgIcon3} alt="" className="size-5" />
          </div>
        </button>
      </div>
    </div>
  );
}

function PartnersSection() {
  return (
    <section className="bg-[#f9f8fd] py-10 w-full overflow-hidden">
      <p className="text-[#101828] text-[24px] font-semibold text-center tracking-[0.15px] mb-10">
        Our Dear Partners
      </p>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex items-center gap-12 px-8"
          style={{ animation: 'marquee 20s linear infinite' }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 shrink-0">
              <div className="h-7 shrink-0" style={{ maskImage: `url("${imgGfpDjkmXwAAxREe4}")`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', width: '104px' }}>
                <img src={imgGfpDjkmXwAAxREe5} alt="Partner" className="h-full w-full object-contain" />
              </div>
              <div className="h-[52px] w-[54px] shrink-0 overflow-hidden">
                <img src={imgLayer12} alt="Partner" className="h-full w-full object-contain" />
              </div>
              <div className="h-8 shrink-0" style={{ maskImage: `url("${imgImage26}")`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', width: '141px' }}>
                <img src={imgImage27} alt="Partner" className="h-full w-full object-contain" />
              </div>
              <div className="h-7 w-[102px] shrink-0 overflow-hidden">
                <img src={imgGroup} alt="Partner" className="h-full w-full object-contain" />
              </div>
              <div className="h-7 w-20 shrink-0 overflow-hidden">
                <img src={imgGroup2} alt="Partner" className="h-full w-full object-contain" />
              </div>
              <div className="h-[52px] w-[52px] shrink-0 overflow-hidden">
                <img src={imgMobileLogo12} alt="Partner" className="h-full w-full object-contain" />
              </div>
              <div className="h-7 w-[52px] shrink-0 overflow-hidden">
                <img src={imgFrame5} alt="Partner" className="h-full w-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white w-full py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-[#101828] text-[24px] font-bold text-center mb-6">F.A.Q</p>
        <div className="flex flex-col">
          {faqItems.map((item, idx) => (
            <div key={idx} className="border-b border-[#e0e0e0]">
              <button
                className="flex gap-8 items-center py-8 w-full text-left cursor-pointer"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <p className="flex-1 text-[#130f26] text-[20px] md:text-[24px] font-bold leading-snug">
                  {item.q}
                </p>
                <div className="size-6 shrink-0">
                  <img
                    src={openIndex === idx ? imgArrowUpCircle : imgArrowDownCircle}
                    alt=""
                    className="size-6"
                  />
                </div>
              </button>
              {openIndex === idx && (
                <div className="pb-8">
                  <p className="text-[#525252] text-[16px] leading-[1.72]">{item.a}</p>
                  {idx === 2 && (
                    <button className="mt-4 flex items-center gap-2 text-[#0063f5] text-[16px] font-semibold">
                      Find More
                      <img src={imgArrowNextDark} alt="" className="size-5" />
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterSAMABadge() {
  return (
    <div className="relative size-[102px] shrink-0">
      <div className="absolute inset-[2.7%]">
        <img src={imgEllipse1308} alt="" className="size-full" />
      </div>
      <div className="absolute inset-[5.5%]">
        <img src={imgEllipse1309} alt="" className="size-full" />
      </div>
      <div className="absolute inset-[20.5%]">
        <img src={imgEllipse1310} alt="" className="size-full" />
      </div>
      <div className="absolute inset-[20.5%] flex items-center justify-center">
        <img src={imgLogoMark} alt="SAMA" className="size-full object-contain" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-white w-full px-6 pt-12 pb-6">
      <div className="max-w-2xl mx-auto flex flex-col gap-16">
        {/* Top section */}
        <div className="flex flex-col gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <img src={imgGroup5704} alt="" className="size-8" />
            <img src={imgGroup5930} alt="Tamawal" className="h-8 w-auto" />
          </div>

          {/* SAMA badge + description */}
          <div className="flex flex-col gap-4">
            <FooterSAMABadge />
            <p className="text-white/86 text-[18px] font-semibold leading-[1.72] max-w-[254px]">
              Tamawal is under the supervision and authority of Saudi Central Bank (SAMA)
            </p>
          </div>

          {/* Navigation columns */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-white text-[16px] font-bold leading-[1.72]">About us</p>
              <div className="flex flex-col gap-2 text-white/86 text-[16px] font-semibold">
                <span>Who we are</span>
                <span>Our products</span>
                <span>Our values</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white text-[16px] font-bold leading-[1.72]">Legal</p>
              <div className="flex flex-col gap-2 text-white/86 text-[16px] font-semibold">
                <span>Terms and Conditions</span>
                <span>Data Protection and Privacy</span>
                <span>Customer Protection Principles</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white text-[16px] font-bold leading-[1.72]">Take actions</p>
              <div className="flex flex-col gap-2 text-white/86 text-[16px] font-semibold">
                <span>Be a partner</span>
                <span>Be a customer</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white text-[16px] font-bold leading-[1.72]">Customer Care</p>
              <div className="flex flex-col gap-2 text-white/86 text-[16px] font-semibold">
                <span>Send a message</span>
                <span>FAQs</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white text-[16px] font-bold leading-[1.72]">Contact us</p>
              <div className="flex flex-col gap-2 text-white/86 text-[16px] font-semibold">
                <span>info@tamawal.sa</span>
                <span>011 512 3870</span>
                <span>800 100 0276</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white text-[16px] font-semibold">Address</p>
              <p className="text-white/86 text-[14px]">Al Olaya (403) street, Riyadh, Saudi Arabia</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-white text-[16px] font-semibold">Working hours</p>
              <p className="text-white/86 text-[14px]">09:00 – 17:00</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-white text-[16px] font-semibold">Working days</p>
              <p className="text-white/86 text-[14px]">Sunday - Thursday</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-white text-[16px] font-semibold leading-[1.72]">Social media</p>
              <div className="flex gap-2 items-center">
                <div className="size-[45px] shrink-0">
                  <img src={imgIcon4} alt="Facebook" className="size-full" />
                </div>
                <div className="size-[45px] border border-white/[0.24] rounded-full flex items-center justify-center shrink-0">
                  <div className="w-5 h-[15px] overflow-hidden">
                    <img src={imgLayer1} alt="Twitter/X" className="size-full object-contain" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer" className="border border-[#16448F] rounded-[6px] h-[40px] overflow-hidden">
                <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp&hl=id" target="_blank" rel="noopener noreferrer" className="border border-[#16448F] rounded-[6px] h-[40px] overflow-hidden">
                <img src={imgPlayStore} alt="Google Play" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20" />

        {/* SAMA disclaimer */}
        <p className="text-white text-[16px] text-center leading-[1.7] pb-4">
          Tamawal Digital Brokerage Company operates under the supervision and regulation of the Saudi Arabian Monetary Authority (SAMA)
        </p>
      </div>
    </footer>
  );
}

export default function LandingHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {menuOpen && <SlidingMenu onClose={() => setMenuOpen(false)} />}

      {/* Sticky navbar */}
      <div className={`fixed top-0 left-0 right-0 z-30 transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
        <Navbar onMenuOpen={() => setMenuOpen(true)} white={scrolled} />
      </div>

      {/* Hero section with dark bg */}
      <div className="relative overflow-hidden">
        {/* Background shape */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={imgRectangle1400}
            alt=""
            className="w-full"
            style={{ transform: 'rotate(180deg) scaleY(-1)', minHeight: '600px', objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#1a2232]" />

        <div className="relative z-10 pt-20">
          {/* Navbar placeholder (height reservation) */}

          {/* Hero text */}
          <div className="px-6 pt-4 pb-8 max-w-4xl mx-auto">
            <div className="flex flex-col gap-3 items-end md:items-start max-w-sm md:max-w-lg">
              <p className="text-white text-[32px] md:text-[40px] font-semibold leading-[1.25] w-full">
                Get the Best Loan, Instantly.
              </p>
              <p className="text-[#98a2b3] text-[16px] leading-[1.7] w-full">
                A fully automated way to compare, apply, and track loans across trusted banks — all in one platform, all in real time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator card — overlaps hero/white boundary */}
      <div className="relative z-20 -mt-4 px-4 pb-16 flex justify-center">
        <LoanCalculator />
      </div>

      {/* Partners */}
      <PartnersSection />

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
