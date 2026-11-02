'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const PhoneFlip = dynamic(() => import('./PhoneFlip'), { ssr: false });
const DownloadMockup = dynamic(() => import('./DownloadMockup'), { ssr: false });

type Lang = 'en' | 'ar';

const t = {
  en: {
    navPersonal: 'Personal',
    navBusiness: 'Business',
    navHowItWorks: 'How it works',
    navFaq: 'FAQ',
    navSignIn: 'Sign in',
    navGetStarted: 'Get Started',

    heroTitle1: 'Compare. Apply.',
    heroTitle2: 'Get Funded.',
    heroSub: 'Tamawal connects you to 15+ Saudi banks in one place. Get real financing offers in minutes — no paperwork, no branch visits.',
    heroGetApp: 'Get the app',
    heroScanText: 'Scan to download on iOS & Android',

    heroCta2: 'Download the App',

    trustedLabel: 'TRUSTED BY 15+ BANKS & FINANCE COMPANIES',

    stepsLabel: 'Financing, compared.',
    stepsTitle: 'Decided in',
    stepsTitleItalic: 'minutes.',
    stepsSub: 'Four simple steps from comparing to cash in your account.',

    dlLabel: 'Download', dlTitle: 'Download\nthe App', dlSub: 'Get the full Tamawal experience on your phone. Available on iOS and Android.',
    findTitle: 'Find the best loan for you',
    findAmountLabel: 'Loan Amount', findSalaryLabel: 'Monthly Salary',
    findEmployLabel: 'Employment Type', findEmployOptions: ['Employed', 'Self Employed', 'Government'],
    findCta: 'Find My Loan',
    findLoanTypeLabel: 'Select Loan Type',
    findLoanTypes: ['Personal Loan', 'Real Estate', 'Car Loan', 'Card Finance'],
    findMonthlySalaryLabel: 'Your Monthly Salary',
    findActiveLoansLabel: 'Do you have active loans?',
    findYes: 'YES', findNo: 'NO',
    findPurposeLabel: 'Select Loan Purpose',
    findPurposes: ['Renovation & Home Improvements', 'Travel & Vacation', 'Education', 'Medical Expenses', 'Debt Consolidation', 'Wedding', 'Electronics & Appliances'],
    findContinue: 'Continue',

    faqLabel: 'FAQ', faqTitle: 'Questions you might ask',
    faqs: [
      { q: 'What is Tamawal and how does it work?', a: 'Tamawal is a financing aggregator that makes finding the best loan simpler, smarter, and hassle-free. Fill your profile once, compare real offers from 15+ Saudi banks, and apply — all in one place.' },
      { q: 'Where can I use Tamawal?', a: 'Tamawal is available online at tamawal.sa and through the Tamawal mobile app on iOS and Android, serving customers across Saudi Arabia.' },
      { q: 'Can I apply for financing both online and via the app?', a: 'Yes, Tamawal is fully available on web and mobile, giving you access to real financing offers wherever you are.' },
      { q: 'How do I sign up for Tamawal?', a: 'Signing up is simple! Download the Tamawal app or visit tamawal.sa, verify your identity, fill in your profile, and start comparing financing offers right away.' },
      { q: 'What financing products are available on Tamawal?', a: 'Tamawal offers a wide range of products including car financing, personal loans, real estate financing, and credit cards — all from SAMA-licensed banks and financial institutions.' },
      { q: 'Will checking my eligibility affect my credit score?', a: 'No. Our eligibility check is a soft inquiry and does not impact your credit score in any way. You can check your options completely risk-free.' },
      { q: 'How do I complete my financing application?', a: 'After comparing offers on Tamawal, select your preferred offer and complete your application digitally. You\'ll receive real-time status updates every step of the way.' },
      { q: 'What happens if my application is not approved?', a: 'If one bank declines your application, you can still apply to other available offers on Tamawal. We work with 15+ partners to maximize your chances of approval.' },
      { q: 'Is my personal information secure with Tamawal?', a: 'Yes, Tamawal prioritizes the security and privacy of all your personal data. All transactions and data are protected using bank-grade encryption, and we are fully regulated by SAMA.' },
    ],

    footerDesc: 'Licensed financial aggregator regulated by the Saudi Central Bank (SAMA).',
    footerPlatform: 'PLATFORM',
    footerCompany: 'COMPANY',
    footerPlatformLinks: ['Hub', 'How it Works', 'Download'],
    footerCompanyLinks: ['About Us', 'Brand', 'Materials'],
    copyright: '© 2026 Tamawal. All rights reserved.',
    regulated: 'Regulated by SAMA',
  },
  ar: {
    navPersonal: 'أفراد',
    navBusiness: 'أعمال',
    navHowItWorks: 'كيف يعمل',
    navFaq: 'الأسئلة الشائعة',
    navSignIn: 'تسجيل الدخول',
    navGetStarted: 'ابدأ الآن',

    heroTitle1: 'قارن. قدّم.',
    heroTitle2: 'احصل على تمويلك.',
    heroSub: 'تامول يربطك بأكثر من 15 بنكاً سعودياً في مكان واحد. احصل على عروض تمويل حقيقية في دقائق — بدون أوراق ولا زيارة فروع.',
    heroGetApp: 'حمّل التطبيق',
    heroScanText: 'امسح للتحميل على iOS وAndroid',

    heroCta2: 'حمّل التطبيق',

    trustedLabel: 'موثوق من أكثر من ١٥ بنكاً وشركة تمويل',

    stepsLabel: 'مقارنة التمويل.',
    stepsTitle: 'القرار في',
    stepsTitleItalic: 'دقائق.',
    stepsSub: 'أربع خطوات بسيطة من المقارنة إلى الأموال في حسابك.',

    dlLabel: 'تحميل', dlTitle: 'حمّل\nالتطبيق', dlSub: 'احصل على تجربة تامول الكاملة على هاتفك. متاح على iOS وAndroid.',
    findTitle: 'ابحث عن أفضل قرض لك',
    findAmountLabel: 'مبلغ القرض', findSalaryLabel: 'الراتب الشهري',
    findEmployLabel: 'جهة العمل', findEmployOptions: ['موظف حكومي', 'موظف خاص', 'عمل حر'],
    findCta: 'ابحث عن قرضي',
    findLoanTypeLabel: 'اختر نوع القرض',
    findLoanTypes: ['قرض شخصي', 'عقار', 'قرض سيارة', 'بطاقة ائتمان'],
    findMonthlySalaryLabel: 'راتبك الشهري',
    findActiveLoansLabel: 'هل لديك قروض نشطة؟',
    findYes: 'نعم', findNo: 'لا',
    findPurposeLabel: 'اختر الغرض من القرض',
    findPurposes: ['تجديد المنزل وتحسينه', 'السفر والإجازة', 'التعليم', 'النفقات الطبية', 'توحيد الديون', 'حفلات الزفاف', 'الإلكترونيات والأجهزة'],
    findContinue: 'متابعة',

    faqLabel: 'الأسئلة الشائعة', faqTitle: 'أسئلة قد تخطر على بالك',
    faqs: [
      { q: 'ما هو تامول وكيف يعمل؟', a: 'تامول منصة لتجميع عروض التمويل تجعل الحصول على القرض أبسط وأذكى. أكمل ملفك مرة واحدة، وقارن عروضاً حقيقية من أكثر من 15 بنكاً سعودياً، وتقدم — كل ذلك في مكان واحد.' },
      { q: 'أين يمكنني استخدام تامول؟', a: 'تامول متاح عبر الموقع tamawal.sa وتطبيق الجوال على iOS وAndroid، لخدمة العملاء في جميع أنحاء المملكة العربية السعودية.' },
      { q: 'هل يمكنني التقديم عبر الإنترنت وعبر التطبيق أيضاً؟', a: 'نعم، تامول متاح بالكامل على الويب والجوال، مما يمنحك إمكانية الوصول إلى عروض التمويل الحقيقية أينما كنت.' },
      { q: 'كيف أسجل في تامول؟', a: 'التسجيل بسيط! حمّل تطبيق تامول أو زر tamawal.sa، تحقق من هويتك، أكمل ملفك الشخصي، وابدأ في مقارنة عروض التمويل فوراً.' },
      { q: 'ما منتجات التمويل المتاحة على تامول؟', a: 'يوفر تامول مجموعة واسعة من المنتجات تشمل تمويل السيارات والقروض الشخصية والتمويل العقاري وبطاقات الائتمان — جميعها من بنوك ومؤسسات مالية مرخصة من ساما.' },
      { q: 'هل يؤثر التحقق من الأهلية على درجتي الائتمانية؟', a: 'لا. التحقق من الأهلية استعلام خفيف لا يؤثر على درجتك الائتمانية بأي شكل من الأشكال. يمكنك التحقق من خياراتك دون أي مخاطرة.' },
      { q: 'كيف أكمل طلب التمويل؟', a: 'بعد مقارنة العروض على تامول، اختر العرض المناسب وأكمل طلبك رقمياً. ستتلقى تحديثات فورية في كل خطوة.' },
      { q: 'ماذا يحدث إذا لم يُوافق على طلبي؟', a: 'إذا رفض أحد البنوك طلبك، لا يزال بإمكانك التقديم لعروض أخرى متاحة على تامول. نتعاون مع أكثر من 15 شريكاً لزيادة فرص موافقتك.' },
      { q: 'هل معلوماتي الشخصية آمنة مع تامول؟', a: 'نعم، تامول يُولي أولوية قصوى لأمن وخصوصية جميع بياناتك الشخصية. جميع المعاملات والبيانات محمية بتشفير على مستوى البنوك، ونخضع لرقابة كاملة من ساما.' },
    ],

    footerDesc: 'مجمّع تمويل مرخص يخضع لرقابة البنك المركزي السعودي (ساما).',
    footerPlatform: 'المنصة',
    footerCompany: 'الشركة',
    footerPlatformLinks: ['المحور', 'كيف يعمل', 'تحميل'],
    footerCompanyLinks: ['من نحن', 'الهوية البصرية', 'المواد'],
    copyright: '© 2026 تامول. جميع الحقوق محفوظة.',
    regulated: 'مرخص من ساما',
  },
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-7 border-b border-[#eef1f6]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-6 text-left">
        <span className="text-[18px] font-medium text-[#101828] leading-[28px]">{question}</span>
        <span className="shrink-0 w-8 h-8 rounded-full bg-[#eef1f6] flex items-center justify-center text-[#344054]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
            <path d="M11.9998 15L7.75684 10.757L9.17184 9.34302L11.9998 12.172L14.8278 9.34302L16.2428 10.757L11.9998 15Z" fill="currentColor"/>
          </svg>
        </span>
      </button>
      {open && <p className="mt-3 text-base text-[#667085] leading-relaxed max-w-3xl">{answer}</p>}
    </div>
  );
}

export default function TamweelWebHome() {
  const [lang, setLang] = useState<Lang>('en');
  const [findProduct, setFindProduct] = useState(0);
  const [salary, setSalary] = useState(7000);
  const [hasActiveLoans, setHasActiveLoans] = useState<boolean | null>(null);
  const [loanPurpose, setLoanPurpose] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const isRtl = lang === 'ar';
  const c = t[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans" dir={isRtl ? 'rtl' : 'ltr'}>

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#eef1f6]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <div className="flex items-center justify-between px-[64px] py-[20px]">
          <div className="flex items-center gap-[48px]">
            <Image src="/logo-tamawal-web-blue.svg" alt="Tamawal" width={100} height={30} />
            <nav className="hidden md:flex items-center gap-[32px]">
              <a href="#" className="text-[14px] font-semibold text-[#021945] hover:opacity-70 transition-opacity">{c.navPersonal}</a>
              <a href="#" className="text-[14px] font-semibold text-[#021945] hover:opacity-70 transition-opacity">{c.navBusiness}</a>
              <a href="#how-it-works" className="text-[14px] font-semibold text-[#021945] hover:opacity-70 transition-opacity">{c.navHowItWorks}</a>
              <a href="#faq" className="text-[14px] font-semibold text-[#021945] hover:opacity-70 transition-opacity">{c.navFaq}</a>
            </nav>
          </div>
          <div className="flex items-center gap-[24px]">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="text-[14px] font-semibold text-[#021945] hover:opacity-70 transition-opacity"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <a href="#" className="hidden md:block text-[14px] font-semibold text-[#021945] hover:opacity-70 transition-opacity">
              {c.navSignIn}
            </a>
            <Link href="/tamweel-web/hub" className="text-[14px] font-bold text-white bg-[#0063f5] px-[24px] py-[12px] rounded-[128px] hover:bg-[#0052cc] transition-colors">
              {c.navGetStarted}
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,99,245,0.06),transparent)]" />

        {/* Headline + subtitle + QR widget */}
        <div className="relative text-center pt-[62px] pb-16 px-6">
          {/* Headline with sparkles */}
          <div className="relative inline-block">
            <img src="/sparkle-lg.svg" alt="" width={56} height={56} className="absolute -right-16 -top-2 pointer-events-none" />
            <img src="/sparkle-md.svg" alt="" width={30} height={30} className="absolute -left-10 bottom-8 pointer-events-none" />
            <img src="/sparkle-sm.svg" alt="" width={18} height={18} className="absolute right-2 -bottom-4 pointer-events-none" />
            <h1
              className="text-[96px] font-bold leading-[88px] tracking-[-2px] text-[#021945]"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontVariationSettings: '"opsz" 14, "wdth" 100' }}
            >
              {c.heroTitle1}<br />
              <span style={{ color: '#0063F5' }}>{c.heroTitle2}</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mt-10 text-[18px] text-[#5b6b86] leading-[28px] max-w-[577px] mx-auto">
            {c.heroSub}
          </p>

          {/* Get the app — QR + text */}
          <div className="mt-10 flex items-center justify-center">
            <div className="flex items-center gap-6">
              <Image src="/qr-code.svg" alt="QR Code" width={71} height={86} />
              <div className="text-left">
                <p className="text-[20px] font-bold text-[#021945] leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {c.heroGetApp}
                </p>
                <p className="text-[14px] text-[#5b6b86] mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {c.heroScanText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero photo */}
        <div className="relative w-full overflow-x-clip" style={{ height: 646 }}>
          {/* Left decorative gray box */}
          <div
            className="absolute rounded-[48px] bg-[#f5f5f5]"
            style={{ left: 96, top: 184, width: 194, height: 204, zIndex: 0 }}
          />
          {/* Main photo */}
          <div
            className="absolute rounded-[40px] overflow-hidden"
            style={{ left: 202, top: 0, width: 1000, height: 646, zIndex: 1 }}
          >
            <Image
              src="/hero-photo.png"
              alt="Tamawal user with car and Riyadh skyline"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Right decorative gray box */}
          <div
            className="absolute rounded-[48px] bg-[#f5f5f5]"
            style={{ left: 1020, top: 245, width: 329, height: 346, zIndex: 0 }}
          />
        </div>
      </section>

      {/* ── Trusted by ──────────────────────────────────────────────────── */}
      <div className="bg-white pt-[64px] pb-[24px]">
        <p className="text-center text-[12px] font-bold tracking-[1.5px] text-[#5b6b86] mb-[20px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {c.trustedLabel}
        </p>
        <div className="w-full overflow-hidden automatic-horizontal-scroll py-[32px]">
          <div className="flex items-center w-max animate-[scroll-partners_40s_linear_infinite] rtl:animate-[scroll-partners-rtl_40s_linear_infinite]">
            {[0, 1].map((set) => (
              <div key={set} className="flex items-center">
                <img alt="quara"    className="partner-logo mx-10" src="/partners/p1.svg" />
                <img alt="alraedah" className="partner-logo mx-10" src="/partners/p2.svg" />
                <img alt="nayifat"  className="partner-logo mx-10" src="/partners/p3.svg" />
                <img alt="osoul"    className="partner-logo mx-10" src="/partners/p4.svg" />
                <img alt="osoul"    className="partner-logo mx-10" src="/partners/p6.svg" />
                <img alt="alraedah" className="partner-logo mx-10" src="/partners/partner-alraedah.png" />
                <img alt="osoul"    className="partner-logo mx-10" src="/partners/partner-osoul.png" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Statement ───────────────────────────────────────────────────── */}
      <section className="bg-white px-[180px] pt-[96px] pb-[120px] text-center">
        <p
          className="text-[52px] font-bold leading-[58px] tracking-[-1px]"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontVariationSettings: '"opsz" 14, "wdth" 100' }}
        >
          {isRtl ? (
            <>
              <span style={{ color: '#c3d3ee' }}>تامول يجعل التمويل </span>
              <span style={{ color: '#021945' }}>سهلاً</span>
              <span style={{ color: '#c3d3ee' }}>. مبني على الثقة، </span>
              <span style={{ color: '#021945' }}>مرخّص من ساما</span>
              <span style={{ color: '#c3d3ee' }}>، ومصمّم لتتمكن من مقارنة </span>
              <span style={{ color: '#021945' }}>عروض حقيقية في دقائق</span>
              <span style={{ color: '#c3d3ee' }}> — أينما كنت.</span>
            </>
          ) : (
            <>
              <span style={{ color: '#c3d3ee' }}>Tamawal makes financing </span>
              <span style={{ color: '#021945' }}>effortless</span>
              <span style={{ color: '#c3d3ee' }}>. Built on trust, </span>
              <span style={{ color: '#021945' }}>regulated by SAMA</span>
              <span style={{ color: '#c3d3ee' }}>, and designed so you can compare </span>
              <span style={{ color: '#021945' }}>real offers in minutes</span>
              <span style={{ color: '#c3d3ee' }}> — wherever life takes you.</span>
            </>
          )}
        </p>
      </section>

      {/* ── Product Image Grid ──────────────────────────────────────────── */}
      <section className="relative bg-white overflow-x-clip" style={{ height: 1284 }}>
        <div className="relative mx-auto" style={{ width: 1440, height: 1284 }}>

          {/* Top-right: Credit cards (image 4) */}
          <div
            className="absolute overflow-hidden rounded-[48px] bg-[#f5f5f5]"
            style={{ left: 752, top: 22, width: 439, height: 461 }}
          >
            <img
              src="/products/grid-cards.png"
              alt="Credit cards"
              className="absolute object-contain"
              style={{ left: 19, top: 57, width: 375, height: 404 }}
            />
          </div>

          {/* Top-left: Keys (image 3) */}
          <div
            className="absolute overflow-hidden rounded-[48px] bg-[#f5f5f5]"
            style={{ left: 248, top: 176, width: 439, height: 461 }}
          >
            <img
              src="/products/grid-keys.png"
              alt="Property keys"
              className="absolute object-contain"
              style={{ bottom: 0, left: 0, width: 439, height: 294 }}
            />
          </div>

          {/* Middle-right: Person with phone (image 2) */}
          <div
            className="absolute overflow-hidden rounded-[48px] bg-[#f5f5f5]"
            style={{ left: 752, top: 534, width: 440, height: 461 }}
          >
            <img
              src="/products/grid-person.png"
              alt="Tamawal user"
              className="absolute object-cover"
              style={{ left: 88, top: 67, width: 339, height: 394 }}
            />
          </div>

          {/* Bottom-left: Car (image 5) */}
          <div
            className="absolute overflow-hidden rounded-[48px] bg-[#f5f5f5]"
            style={{ left: 248, top: 710, width: 439, height: 461 }}
          >
            <img
              src="/products/grid-car.png"
              alt="Car financing"
              className="absolute object-contain"
              style={{ left: 45, top: 49, width: 357, height: 357 }}
            />
          </div>

        </div>
      </section>

      {/* ── Phone Flip (How It Works) ────────────────────────────────────── */}
      <div id="how-it-works" className="bg-white">
        {/* Section heading */}
        <div className="pt-[48px] pb-0 text-center">
          <div className="relative inline-block">
            <h2
              className="text-[68px] font-bold leading-[66px] tracking-[-1.5px] text-[#021945] text-center"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontVariationSettings: '"opsz" 14, "wdth" 100' }}
            >
              {c.stepsLabel}<br />
              <span>{c.stepsTitle} </span>
              <span
                className="italic text-[#0063f5] text-[76px]"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                {c.stepsTitleItalic}
              </span>
            </h2>
            <img src="/sparkle-md.svg" alt="" width={34} height={34} className="absolute -right-10 top-16 pointer-events-none" />
          </div>
          <p className="mt-4 text-[18px] text-[#5b6b86] leading-[28px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {c.stepsSub}
          </p>
        </div>
        <PhoneFlip lang={lang} />
      </div>

      {/* ── Download + Calculator ────────────────────────────────────────── */}
      <section id="download" className="py-20 border-t border-[#eef1f6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <style>{`@keyframes badge-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
            <div className="hidden lg:block absolute top-[395px] left-[515px] w-[157px] h-[157px] z-10 pointer-events-none">
              <img src="/badge.svg" alt="" className="w-full h-full" style={{ animation: 'badge-spin 18s linear infinite' }} />
              <img src="/badge-center.svg" alt="Licensed by SAMA" className="absolute inset-0 w-full h-full" />
            </div>

            <div className="bg-[#0063F5] rounded-[48px] p-10 flex flex-col justify-between overflow-hidden relative" style={{ minHeight: 520, paddingBottom: 0 }}>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_80%_120%,rgba(255,255,255,0.08),transparent)]" />
              <div className="relative">
                <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">{c.dlLabel}</p>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight whitespace-pre-line">{c.dlTitle}</h3>
                <p className="text-base text-white/70 mb-8 max-w-xs leading-relaxed">{c.dlSub}</p>
                <div className="flex flex-col gap-3">
                  <Image src="/appstore.svg" alt="App Store" width={140} height={44} />
                  <Image src="/playstore.svg" alt="Google Play" width={140} height={44} />
                </div>
              </div>
              <div className="relative mt-6 flex-1 min-h-[240px]">
                <DownloadMockup />
              </div>
            </div>

            <div className="w-full lg:w-[601px] z-[200] rounded-[32px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] bg-white" style={{ minHeight: 520 }}>
              <div className="bg-[#F1F7FF] border-b border-[#EAECF0] px-6 py-5 rounded-t-[32px]">
                <p className="text-[#021945] text-[20px] font-bold text-center">{c.findTitle}</p>
              </div>

              <div className="px-10 py-10 flex flex-col items-center gap-[48px] bg-white">

                {/* Loan Type */}
                <div className="flex flex-col items-center gap-2 w-full">
                  <p className="text-[#475467] text-[13px]">{c.findLoanTypeLabel}</p>
                  <div className="flex gap-2 items-center justify-center w-full flex-wrap">
                    {c.findLoanTypes.map((type, i) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFindProduct(i)}
                        className={`px-5 py-3 rounded-[32px] text-[12px] font-semibold border transition-colors ${findProduct === i ? 'bg-[#0063F5] border-[#D7E7FE] text-white' : 'bg-[#F5F9FF] border-[#D7E7FE] text-[#202A39]'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Monthly Salary */}
                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="flex gap-1 items-start">
                    <p className="text-[#475467] text-[13px]">{c.findMonthlySalaryLabel}</p>
                    <p className="text-[#d91c1c] text-[13px]">*</p>
                  </div>
                  <div className="border rounded-[8px] px-4 py-3 flex items-center gap-2 cursor-text border-[#EEF1F6]">
                    <img src="/SAR.svg" alt="SAR" className="w-6 h-6 object-contain flex-shrink-0" />
                    <span className="text-[#101828] text-[24px] font-bold">
                      {salary.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 w-full" style={{ userSelect: 'none', marginTop: '0.65rem' }}>
                    <span className="flex items-center gap-1 text-[#101828] text-[16px] font-bold whitespace-nowrap">
                      <img src="/SAR.svg" alt="SAR" className="w-4 h-4 object-contain" /> 1 K
                    </span>
                    <input
                      type="range"
                      min={1000}
                      max={100000}
                      step={500}
                      value={salary}
                      onChange={(e) => setSalary(Number(e.target.value))}
                      className="flex-1 h-1 accent-[#2563EB] cursor-grab"
                    />
                    <span className="flex items-center gap-1 text-[#101828] text-[16px] font-bold whitespace-nowrap">
                      <img src="/SAR.svg" alt="SAR" className="w-4 h-4 object-contain" /> 100 K
                    </span>
                  </div>
                </div>

                {/* Active Loans */}
                <div className="flex flex-col items-center gap-2 w-full">
                  <p className="text-[#475467] text-[13px]">{c.findActiveLoansLabel}</p>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setHasActiveLoans(true)}
                      className={`rounded-[8px] px-12 py-3 text-[18px] font-semibold transition-colors border ${hasActiveLoans === true ? 'bg-[#0063F5] border-[#0063F5] text-white' : 'bg-[#F5F9FF] border-[#D7E7FE] text-[#202A39]'}`}
                    >
                      {c.findYes}
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasActiveLoans(false)}
                      className={`rounded-[8px] px-12 py-3 text-[18px] font-semibold transition-colors border ${hasActiveLoans === false ? 'bg-[#0063F5] border-[#0063F5] text-white' : 'bg-[#F5F9FF] border-[#D7E7FE] text-[#202A39]'}`}
                    >
                      {c.findNo}
                    </button>
                  </div>
                </div>

                {/* Loan Purpose */}
                <div className="flex flex-col items-center gap-2 w-full px-4 lg:px-12">
                  <p className="text-[#475467] text-[13px]">{c.findPurposeLabel}</p>
                  <div className="relative w-full">
                    <button
                      type="button"
                      onClick={() => setLoanPurpose((loanPurpose + 1) % c.findPurposes.length)}
                      className="w-full border border-[#EEF1F6] rounded-[8px] px-4 py-3 flex items-center justify-between bg-white cursor-pointer focus:outline-none focus:border-[#0063F5] text-left"
                    >
                      <span className="text-[#101828] text-[18px] font-bold">{c.findPurposes[loanPurpose]}</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>

              </div>

              <div className="bg-white px-6 pb-[40px] pt-4 rounded-b-[32px] flex justify-center items-start">
                <button
                  disabled={hasActiveLoans === null}
                  onClick={() => hasActiveLoans !== null && (window.location.href = '/tamweel-web/hub')}
                  className={`rounded-[56px] px-6 py-4 flex items-center justify-center gap-2 w-[240px] transition-colors ${hasActiveLoans !== null ? 'bg-[#0063F5] cursor-pointer' : 'bg-[#E2E9F3] cursor-not-allowed'}`}
                >
                  <span className={`text-[16px] font-semibold ${hasActiveLoans !== null ? 'text-white' : 'text-[#9AA4B2]'}`}>{c.findContinue}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={isRtl ? 'rotate-180' : ''}>
                    <path d="M4.166 10h11.667M10 15.833L15.833 10 10 4.167" stroke={hasActiveLoans !== null ? 'white' : '#9AA4B2'} strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-[96px] bg-white">
        <div className="max-w-[896px] mx-auto px-6">
          <h2
            className="text-[60px] font-bold text-[#101828] text-center mb-[64px] leading-[75px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {c.faqTitle}
          </h2>
          <div>
            {c.faqs.map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="bg-black overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {/* Top links area */}
        <div className="flex items-start justify-between pt-[48px] pb-[48px] px-6 max-w-[1152px] mx-auto gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4 items-start shrink-0 max-w-[320px]">
            <Image src="/logo-tamawal-web-blue.svg" alt="Tamawal" width={100} height={30} />
            <p className="text-white text-[12px] leading-[16px]">
              {c.footerDesc}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-[64px] items-start shrink-0">
            <div className="flex flex-col gap-[10px] items-start">
              <p className="text-[12px] font-semibold text-[#101828] tracking-[0px] mb-2">{c.footerPlatform}</p>
              {c.footerPlatformLinks.map((item) => (
                <a key={item} href="#" className="text-[12px] text-white hover:text-white/70 transition-colors">{item}</a>
              ))}
            </div>
            <div className="flex flex-col gap-[10px] items-start">
              <p className="text-[12px] font-semibold text-[#101828] tracking-[0px] mb-2">{c.footerCompany}</p>
              {c.footerCompanyLinks.map((item) => (
                <a key={item} href="#" className="text-[12px] text-white hover:text-white/70 transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="overflow-hidden">
          <p
            className="select-none pointer-events-none text-center leading-none whitespace-nowrap"
            style={{
              fontSize: 'clamp(80px, 18vw, 259px)',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              color: '#676767',
              letterSpacing: '-0.025em',
            }}
          >
            Tamawal®
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#535862] py-3 px-6 max-w-[1152px] mx-auto flex items-center justify-between">
          <p className="text-[12px] text-[#9aa4b2]">{c.copyright}</p>
          <p className="text-[12px] text-[#9aa4b2]">{c.regulated}</p>
        </div>
      </footer>

      {/* ── Floating QR / App download ───────────────────────────────────── */}
      <div className={`la-qr-float${scrolled ? ' la-qr-float--visible' : ''}`} dir="ltr">
        <div className="la-app-download_component wait-load la-hide-qr-float show">
          <div className="la-app-download-qrcode-wrapper">
            <Image loading="lazy" src="/qr-code.svg" alt="" className="qrcode-image" width={108} height={108} />
            <div className="text-block-39">{c.heroCta2}</div>
          </div>
          <div className="la-app-download-ios-wrapper">
            <Image src="/appstore.svg" alt="App Store" width={140} height={44} />
            <Image src="/playstore.svg" alt="Google Play" width={140} height={44} />
          </div>
        </div>
      </div>

    </div>
  );
}
