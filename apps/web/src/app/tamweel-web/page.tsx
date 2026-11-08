'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';

const PhoneFlip = dynamic(() => import('./PhoneFlip'), { ssr: false });
const DownloadMockup = dynamic(() => import('./DownloadMockup'), { ssr: false });
const CanvasSlider = dynamic(() => import('./CanvasSlider'), { ssr: false });

type Lang = 'en' | 'ar';

const t = {
  en: {
    navPersonal: 'Personal',
    navBusiness: 'Business',
    navHowItWorks: 'How it works',
    navAction: 'Action',
    navFaq: 'FAQ',
    navSignIn: 'Sign in',
    navGetStarted: 'Join',

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

    steps: [
      { label: 'Step 01', title: 'Apply securely', sub: 'Verify with Nafath and share data only with your consent.', img: '/steps/step-nafath.png', bg: '#eef5ff' },
      { label: 'Step 02', title: 'Compare offers', sub: 'Installment, APR and total cost — side by side.', img: '/steps/step-compare.png', bg: '#fff6d6' },
      { label: 'Step 03', title: 'Get your money', sub: 'Sign digitally and receive funds in your account.', img: '/steps/step-money.png', bg: '#e9f7f1' },
      { label: 'Step 04', title: 'Improve your score', sub: 'Track your SIMAH score and unlock better rates.', img: '/steps/step-score.png', bg: '#f1ecff' },
    ],

    faqLabel: 'FAQ', faqTitle: 'Questions you might ask',
    faqs: [
      { q: 'What types of financial services does Tamawal offer?', a: 'Tamawal offers personal loans, car financing, real estate financing, and credit card products — all sourced from 15+ SAMA-licensed banks and financial institutions in Saudi Arabia.' },
      { q: 'Can you provide an overview of Tamawal\'s product range?', a: 'Our platform covers the full spectrum of retail financing: personal loans for any purpose, auto financing for new and used cars, mortgage and real estate financing, and credit card comparisons — with more products on the way.' },
      { q: 'How does Tamawal assist customers in obtaining financing?', a: 'You fill your profile once, verify your identity with Nafath, and Tamawal instantly surfaces every eligible offer ranked by total cost. Pick the best deal, sign digitally, and funds reach your account — no branch visits required.' },
      { q: 'Is Tamawal\'s financing model compliant with Sharia law?', a: 'Yes. All financing products on Tamawal are provided by SAMA-regulated banks and financial institutions that offer Sharia-compliant products. You can filter offers to see only Islamic financing structures.' },
      { q: 'Will checking my eligibility affect my credit score?', a: 'No. Our eligibility check is a soft inquiry and does not impact your credit score in any way. You can check your options completely risk-free.' },
      { q: 'How do I sign up for Tamawal?', a: 'Download the Tamawal app or visit tamawal.sa, verify your identity with Nafath, fill in your profile, and start comparing financing offers right away.' },
      { q: 'What happens if my application is not approved?', a: 'If one bank declines your application, you can still apply to other available offers on Tamawal. We work with 15+ partners to maximize your chances of approval.' },
      { q: 'Is my personal information secure with Tamawal?', a: 'Yes. All data is protected using bank-grade encryption and we are fully regulated by SAMA. You control every consent — your data is never shared without your explicit permission.' },
    ],

    footerAboutTitle: 'About us',
    footerAboutLinks: ['Who we are', 'Our products', 'Our values'],
    footerLegalTitle: 'Legal',
    footerLegalLinks: ['Terms and Conditions', 'Data Protection and Privacy', 'Customer Protection Principles'],
    footerActionsTitle: 'Take actions',
    footerActionsLinks: ['Be a partner', 'Be a customer'],
    footerCareTitle: 'Customer Care',
    footerCareLinks: ['Suggestion', 'Complaint', 'Report a Violation', 'Report Financial Fraud'],
    footerContactTitle: 'Contact us',
    footerEmail: 'info@tamawal.sa',
    footerPhone1: '011 512 3870',
    footerPhone2: '800 100 0276',
    footerAddressTitle: 'Address',
    footerAddress: 'Al Olaya (403) street, Riyadh, Saudi Arabia',
    footerHoursTitle: 'Working hours',
    footerHours: '09:00 – 17:00',
    footerDaysTitle: 'Working days',
    footerDays: 'Sunday – Thursday',
    footerSocialTitle: 'Social media',
    footerFaqs: 'FAQs',
    footerLicense: 'Tamawal® is supervised and regulated by the Saudi Central Bank under license No. 98/N M/202504',
    gridCards: [
      { eyebrow: 'CAR FINANCING', title: 'Drive away\nwith the best rate' },
      { eyebrow: 'CREDIT CARDS', title: 'Cards that\nfit your lifestyle' },
      { eyebrow: 'REAL ESTATE', title: 'Your dream home,\nfinanced' },
      { eyebrow: 'PERSONAL LOANS', title: 'Approved in\nas little as 24h' },
    ],

    copyright: '© 2026 Tamawal. All rights reserved.',
    regulated: 'Regulated by SAMA',
  },
  ar: {
    navPersonal: 'أفراد',
    navBusiness: 'أعمال',
    navHowItWorks: 'كيف يعمل',
    navAction: 'إجراءات',
    navFaq: 'الأسئلة الشائعة',
    navSignIn: 'تسجيل الدخول',
    navGetStarted: 'انضم',

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

    steps: [
      { label: 'الخطوة 01', title: 'قدّم طلبك بأمان', sub: 'تحقّق من هويتك عبر نفاذ، وشارك بياناتك بموافقتك فقط.', img: '/steps/step-nafath.png', bg: '#eef5ff' },
      { label: 'الخطوة 02', title: 'قارن العروض', sub: 'القسط والنسبة السنوية والتكلفة الإجمالية — جنبًا إلى جنب.', img: '/steps/step-compare.png', bg: '#fff6d6' },
      { label: 'الخطوة 03', title: 'استلم تمويلك', sub: 'وقّع إلكترونيًا واستلم المبلغ في حسابك.', img: '/steps/step-money.png', bg: '#e9f7f1' },
      { label: 'الخطوة 04', title: 'حسّن سجلك الائتماني', sub: 'تابع درجتك في سمة واحصل على نسب أفضل.', img: '/steps/step-score.png', bg: '#f1ecff' },
    ],

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

    footerAboutTitle: 'من نحن',
    footerAboutLinks: ['تعرّف علينا', 'منتجاتنا', 'قيمنا'],
    footerLegalTitle: 'قانوني',
    footerLegalLinks: ['الشروط والأحكام', 'حماية البيانات والخصوصية', 'مبادئ حماية العملاء'],
    footerActionsTitle: 'اتخذ خطوة',
    footerActionsLinks: ['كن شريكاً', 'كن عميلاً'],
    footerCareTitle: 'خدمة العملاء',
    footerCareLinks: ['اقتراح', 'شكوى', 'الإبلاغ عن مخالفة', 'الإبلاغ عن احتيال مالي'],
    footerContactTitle: 'تواصل معنا',
    footerEmail: 'info@tamawal.sa',
    footerPhone1: '011 512 3870',
    footerPhone2: '800 100 0276',
    footerAddressTitle: 'العنوان',
    footerAddress: 'شارع العليا (٤٠٣)، الرياض، المملكة العربية السعودية',
    footerHoursTitle: 'ساعات العمل',
    footerHours: '٠٩:٠٠ – ١٧:٠٠',
    footerDaysTitle: 'أيام العمل',
    footerDays: 'الأحد – الخميس',
    footerSocialTitle: 'وسائل التواصل الاجتماعي',
    footerFaqs: 'الأسئلة الشائعة',
    footerLicense: 'تامول® يخضع للإشراف والتنظيم من قِبل البنك المركزي السعودي بموجب الترخيص رقم 98/N M/202504',
    gridCards: [
      { eyebrow: 'تمويل السيارات', title: 'انطلق بأفضل\nسعر تمويل' },
      { eyebrow: 'بطاقات الائتمان', title: 'بطاقات تناسب\nأسلوب حياتك' },
      { eyebrow: 'العقارات', title: 'منزل أحلامك\nبتمويل ميسّر' },
      { eyebrow: 'القروض الشخصية', title: 'موافقة في أقل\nمن ٢٤ ساعة' },
    ],

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
  const [formTab, setFormTab] = useState<'form' | 'chat'>('form');
  const [hasActiveLoans, setHasActiveLoans] = useState<boolean | null>(null);
  const [loanPurpose, setLoanPurpose] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [headerFloating, setHeaderFloating] = useState(false);
  const [downloadVisible, setDownloadVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isRtl = lang === 'ar';
  const c = t[lang];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.6);
      setHeaderFloating(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = document.getElementById('download');
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setDownloadVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeroVisible(true); obs.disconnect(); } },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setGridVisible(true); obs.disconnect(); } },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans" dir={isRtl ? 'rtl' : 'ltr'}>

      {/* ── Header (sticky → floating pill on scroll) ───────────────────── */}

      {/* Static bar — visible before scroll, scrolls with page */}
      <header
        className="relative z-10 bg-white border-b border-[#eef1f6]"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", visibility: headerFloating ? 'hidden' : 'visible' }}
      >
        <div className="flex items-center justify-between px-4 py-4 md:px-[64px] md:py-[20px]">
          <div className="flex items-center gap-[48px]">
            <Image src="/logo-tamawal-web-blue.svg" alt="Tamawal" width={123} height={32} />
            <nav className="hidden md:flex items-center gap-[32px]">
              <a href="#" className="text-[14px] font-semibold text-[#021945] hover:opacity-70 transition-opacity">{c.navPersonal}</a>
              <a href="#" className="text-[14px] font-semibold text-[#021945] hover:opacity-70 transition-opacity">{c.navBusiness}</a>
              <a href="#how-it-works" className="text-[14px] font-semibold text-[#021945] hover:opacity-70 transition-opacity">{c.navHowItWorks}</a>
              <a href="#" className="text-[14px] font-semibold text-[#021945] hover:opacity-70 transition-opacity">{c.navAction}</a>
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

      {/* Floating pill — visible after scroll */}
      <div
        className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 transition-[opacity,transform] duration-300"
        style={{ opacity: headerFloating ? 1 : 0, transform: headerFloating ? 'translateY(0)' : 'translateY(-8px)' }}
      >
        <div
          className="relative flex items-center justify-between gap-[48px] rounded-[1000px] pointer-events-auto"
          style={{
            padding: '8px 8px 8px 20px',
            pointerEvents: headerFloating ? 'auto' : 'none',
            background: 'rgba(255,255,255,0.72)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: '0 0 0 0.5px rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}
        >
          {/* no extra glass layers needed */}
          {/* Left: Logo + Nav */}
          <div className="relative flex items-center gap-[48px] shrink-0">
            <Image src="/logo-tamawal-icon.svg" alt="Tamawal" width={32} height={32} />
            <nav className="hidden md:flex items-center gap-[32px]">
              <a href="#" className="text-[14px] font-[590] text-[#021945] hover:opacity-70 transition-opacity whitespace-nowrap">{c.navPersonal}</a>
              <a href="#" className="text-[14px] font-[590] text-[#021945] hover:opacity-70 transition-opacity whitespace-nowrap">{c.navBusiness}</a>
              <a href="#how-it-works" className="text-[14px] font-[590] text-[#021945] hover:opacity-70 transition-opacity whitespace-nowrap">{c.navHowItWorks}</a>
              <a href="#" className="text-[14px] font-[590] text-[#021945] hover:opacity-70 transition-opacity whitespace-nowrap">{c.navAction}</a>
              <a href="#faq" className="text-[14px] font-[590] text-[#021945] hover:opacity-70 transition-opacity whitespace-nowrap">{c.navFaq}</a>
            </nav>
          </div>
          {/* Right: Lang + Sign in + Join */}
          <div className="relative flex items-center gap-[24px] shrink-0">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="text-[14px] font-[590] text-[#021945] hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <a href="#" className="hidden md:block text-[14px] font-[590] text-[#021945] hover:opacity-70 transition-opacity whitespace-nowrap">
              {c.navSignIn}
            </a>
            <Link href="/tamweel-web/hub" className="text-[14px] font-bold text-white bg-[#0063f5] px-[24px] py-[12px] rounded-[128px] hover:bg-[#0052cc] transition-colors whitespace-nowrap">
              {c.navGetStarted}
            </Link>
          </div>
        </div>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,99,245,0.06),transparent)]" />

        {/* Headline + subtitle + CTA row */}
        <div className="relative text-center pt-[62px] pb-16 px-6">
          {/* Headline with sparkles */}
          <div className="relative inline-block">
            <img src="/sparkle-lg.svg" alt="" width={56} height={56} className="absolute -right-16 -top-2 pointer-events-none" />
            <img src="/sparkle-md.svg" alt="" width={30} height={30} className="absolute -left-10 bottom-8 pointer-events-none" />
            <img src="/sparkle-sm.svg" alt="" width={18} height={18} className="absolute right-2 -bottom-4 pointer-events-none" />
            <h1
              className="text-[48px] md:text-[96px] font-bold leading-[1] md:leading-[88px] tracking-[-1px] md:tracking-[-2px] text-[#021945]"
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

          {/* CTA row — two pill buttons */}
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            {/* Download the App */}
            <div className="flex items-center gap-[8px] p-[5px] rounded-[8px] border border-[#f5f5f5]">
              <div className="bg-[#f3f5f7] flex items-center justify-center p-[20px] rounded-[12px] shrink-0">
                <Image src="/qr-code.svg" alt="QR Code" width={24} height={24} />
              </div>
              <p className="text-[8.06px] font-[590] text-[#344054] tracking-[-0.13px] leading-[12px] w-[50px] text-left whitespace-pre-line">{c.heroCta2}</p>
            </div>
            {/* Check live */}
            <div className="flex items-center gap-[8px] p-[5px] rounded-[8px] border border-[#f5f5f5]">
              <p className="text-[8.06px] font-[590] text-[#344054] tracking-[-0.13px] leading-[12px] w-[50px] text-right whitespace-pre-line">{isRtl ? 'تحقق من جودتك مباشرة' : 'Check your quality live'}</p>
              <div className="bg-[#f3f5f7] flex items-center justify-center p-[20px] rounded-[12px] shrink-0">
                <Image src="/icon-settings.svg" alt="" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Hero photo — desktop */}
        <style>{`
          @keyframes hero-card-up {
            from { opacity: 0; transform: translateY(60px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .hero-card-anim { opacity: 0; }
          .hero-card-anim.visible { animation: hero-card-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
        `}</style>
        <div ref={heroRef} className="hidden md:block relative w-full overflow-x-clip" style={{ height: 670 }}>
          <div className="relative mx-auto" style={{ width: 1349, height: 646 }}>
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
            {/* Floating panel — left */}
            <div
              className={`hero-card-anim${heroVisible ? ' visible' : ''} absolute`}
              style={{ left: 96, top: 161, width: 259, height: 419, zIndex: 3, animationDelay: '0.1s' }}
            >
              <Image src="/hero-left.png" alt="" width={259} height={419} className="w-full h-auto" />
            </div>
            {/* Floating panel — right */}
            <div
              className={`hero-card-anim${heroVisible ? ' visible' : ''} absolute`}
              style={{ left: 1002, top: 145, width: 297, height: 487, zIndex: 3, animationDelay: '0.25s' }}
            >
              <Image src="/hero-right.png" alt="" width={297} height={487} className="w-full h-auto" />
            </div>
            {/* SAMA badge */}
            <div className="absolute pointer-events-none" style={{ left: 794, top: 511, width: 157, height: 157, zIndex: 4 }}>
              <img src="/badge.svg" alt="" className="w-full h-full" style={{ animation: 'badge-spin 18s linear infinite' }} />
              <img src="/badge-center.svg" alt="Licensed by SAMA" className="absolute inset-0 w-full h-full" />
            </div>
          </div>
        </div>
        {/* Hero photo — mobile */}
        <div className="md:hidden relative mt-6 mx-4 rounded-[24px] overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <Image
            src="/hero-photo.png"
            alt="Tamawal user with car and Riyadh skyline"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ── Trusted by ──────────────────────────────────────────────────── */}
      <div className="bg-white pt-[64px] pb-[24px]">
        <p className="text-center text-[12px] font-bold tracking-[1.5px] text-[#5b6b86] mb-[20px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {c.trustedLabel}
        </p>
        <div className="w-full overflow-hidden automatic-horizontal-scroll py-6">
          <div className="flex items-center w-max animate-[scroll-partners_30s_linear_infinite] rtl:animate-[scroll-partners-rtl_30s_linear_infinite]">
            {[0, 1].map((set) => (
              <div key={set} className="flex items-center">
                <img alt="quara"    className="h-auto mx-6 max-w-[120px] w-[120px] object-contain grayscale opacity-50" src="/partners/p1.svg" />
                <img alt="alraedah" className="h-auto mx-6 max-w-[90px] w-[90px] object-contain grayscale opacity-50" src="/partners/p2.svg" />
                <img alt="nayifat"  className="h-auto mx-6 max-w-[120px] w-[120px] object-contain grayscale opacity-50" src="/partners/p3.svg" />
                <img alt="osoul"    className="h-auto mx-6 max-w-[120px] w-[120px] object-contain grayscale opacity-50" src="/partners/p4.svg" />
                <img alt="osoul"    className="h-auto mx-6 max-w-[120px] w-[120px] object-contain grayscale opacity-50" src="/partners/p6.svg" />
                <img alt="alraedah" className="h-auto mx-6 max-w-[120px] w-[120px] object-contain grayscale opacity-50" src="/partners/partner-alraedah.png" />
                <img alt="osoul"    className="h-auto mx-6 max-w-[120px] w-[120px] object-contain grayscale opacity-50" src="/partners/partner-osoul.png" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Statement ───────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-[180px] pt-[64px] md:pt-[96px] pb-[80px] md:pb-[120px] text-center">
        <p
          className="text-[32px] md:text-[52px] font-bold leading-[1.2] md:leading-[58px] tracking-[-0.5px] md:tracking-[-1px]"
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
      {/* Mobile 2×2 grid */}
      <section className="md:hidden bg-white px-4 py-10">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[24px] overflow-hidden bg-[#f5f5f5] aspect-square flex items-end justify-center">
            <img src="/loan-type/card.png" alt="Credit cards" className="w-[90%] object-contain" />
          </div>
          <div className="rounded-[24px] overflow-hidden bg-[#f5f5f5] aspect-square flex items-end justify-center">
            <img src="/loan-type/real-estate.png" alt="Property keys" className="w-full object-cover" />
          </div>
          <div className="rounded-[24px] overflow-hidden bg-[#f5f5f5] aspect-square flex items-end justify-center">
            <img src="/loan-type/personal.png" alt="Tamawal user" className="h-[90%] object-contain" />
          </div>
          <div className="rounded-[24px] overflow-hidden bg-[#f5f5f5] aspect-square flex items-center justify-center">
            <img src="/loan-type/car.png" alt="Car financing" className="w-[90%] object-contain" />
          </div>
        </div>
      </section>
      {/* Desktop absolute-position grid */}
      <section ref={gridRef} className="hidden md:block relative bg-white overflow-x-clip" style={{ height: 1340 }}>
        <div className="relative mx-auto" style={{ width: 1440, height: 1340 }}>

          {/* Top-left: Car Financing (dark) */}
          <div
            className="absolute overflow-hidden rounded-[48px] transition-[opacity,transform] duration-700"
            style={{ left: 248, top: 205, width: 439, height: 461, background: '#0a0a0a', opacity: gridVisible ? 1 : 0, transform: gridVisible ? 'none' : 'translateY(40px) translateX(-20px)', transitionDelay: '0ms' }}
          >
            <div className="absolute" style={{ left: 0, top: 189, width: 439, height: 272 }}>
              <div className="absolute flex items-center justify-center" style={{ left: 0, top: 0, width: 439, height: 294 }}>
                <div style={{ transform: 'scaleY(-1) rotate(180deg)', width: 439, height: 294, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                  <img src="/loan-type/car-lucid.png" alt="" className="absolute max-w-none pointer-events-none" style={{ top: 0, left: 0, height: '100%', width: '123.52%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Car Financing text — sibling so it isn't clipped by card overflow */}
          <div className="absolute flex flex-col items-start pointer-events-none transition-[opacity,transform] duration-700" style={{ left: 283, top: 238, width: 369, gap: 20, opacity: gridVisible ? 1 : 0, transform: gridVisible ? 'none' : 'translateY(40px) translateX(-20px)', transitionDelay: '0ms' }}>
            <div className="flex items-start overflow-hidden px-3 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }}>
              <span className="font-bold text-white text-[11px] tracking-[1.2px] whitespace-nowrap" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{c.gridCards[0].eyebrow}</span>
            </div>
            <div className="font-bold text-white text-[40px]" style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: '40px' }}>
              <p className="m-0">{c.gridCards[0].title}</p>
            </div>
          </div>

          {/* Top-right: Credit Cards (light) */}
          <div className="absolute overflow-hidden rounded-[48px] transition-[opacity,transform] duration-700" style={{ left: 752, top: 29, width: 439, height: 483, background: '#f3f5f7', opacity: gridVisible ? 1 : 0, transform: gridVisible ? 'none' : 'translateY(40px) translateX(20px)', transitionDelay: '100ms' }}>
            <div className="absolute" style={{ left: 0, top: 0, width: 439, height: 328 }}>
              <div className="absolute pointer-events-none" style={{ left: 67, top: -12, width: 375, height: 404 }}>
                <img src="/loan-type/card.png" alt="" className="absolute inset-0 max-w-none object-cover size-full" />
              </div>
            </div>
            <div className="absolute flex flex-col items-start" style={{ left: 45, top: 302, width: 340, gap: 20 }}>
              <div className="flex items-start overflow-hidden px-3 py-1.5 rounded-full" style={{ background: 'rgba(2,25,69,0.08)' }}>
                <span className="font-bold text-[#021945] text-[11px] tracking-[1.2px] whitespace-nowrap" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{c.gridCards[1].eyebrow}</span>
              </div>
              <div className="font-bold text-[#021945] text-[40px]" style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: '40px' }}>
                <p className="m-0">{c.gridCards[1].title}</p>
              </div>
            </div>
          </div>

          {/* Bottom-left: Real Estate (light) */}
          <div className="absolute overflow-hidden rounded-[48px] transition-[opacity,transform] duration-700" style={{ left: 248, top: 739, width: 439, height: 566, background: '#f3f5f7', opacity: gridVisible ? 1 : 0, transform: gridVisible ? 'none' : 'translateY(40px) translateX(-20px)', transitionDelay: '200ms' }}>
            <div className="absolute" style={{ left: 0, top: 0, width: 439, height: 383 }}>
              <div className="absolute pointer-events-none" style={{ left: 45, top: 26, width: 357, height: 357 }}>
                <img src="/loan-type/real-estate.png" alt="" className="absolute inset-0 max-w-none object-cover size-full" />
              </div>
            </div>
            <div className="absolute flex flex-col items-start" style={{ left: 40, top: 383, width: 362, gap: 20 }}>
              <div className="flex items-start overflow-hidden px-3 py-1.5 rounded-full" style={{ background: 'rgba(0,99,245,0.1)' }}>
                <span className="font-bold text-[#021945] text-[11px] tracking-[1.2px] whitespace-nowrap" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{c.gridCards[2].eyebrow}</span>
              </div>
              <div className="font-bold text-[#021945] text-[40px]" style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: '40px' }}>
                <p className="m-0">{c.gridCards[2].title}</p>
              </div>
            </div>
          </div>

          {/* Bottom-right: Personal Loans (dark teal) */}
          <div className="absolute overflow-hidden rounded-[48px] transition-[opacity,transform] duration-700" style={{ left: 752, top: 573, width: 440, height: 572, background: '#2c404f', opacity: gridVisible ? 1 : 0, transform: gridVisible ? 'none' : 'translateY(40px) translateX(20px)', transitionDelay: '300ms' }}>
            <div className="absolute" style={{ left: 0, top: 178, width: 440, height: 394 }}>
              <div className="absolute" style={{ left: 88, top: 0, width: 339, height: 394 }}>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img src="/loan-type/personal-hijab.png" alt="" className="absolute max-w-none pointer-events-none" style={{ top: 0, height: '100%', left: '-98.33%', width: '208.67%' }} />
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col items-start" style={{ left: 34, top: 34, width: 351, gap: 20 }}>
              <div className="flex items-start overflow-hidden px-3 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.16)', width: 174 }}>
                <span className="font-bold text-white text-[11px] tracking-[1.2px] whitespace-nowrap" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{c.gridCards[3].eyebrow}</span>
              </div>
              <div className="font-bold text-white text-[40px]" style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: '40px' }}>
                <p className="m-0">{c.gridCards[3].title}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Phone Flip (How It Works) ────────────────────────────────────── */}
      <div id="how-it-works" className="bg-white">
        {/* Section heading */}
        <div className="pt-[120px] pb-0 text-center">
          <div className="relative inline-block">
            <h2
              className="text-[40px] md:text-[68px] font-bold leading-[1.1] md:leading-[66px] text-[#021945] text-center"
              style={{ fontFamily: "'Clash Display', sans-serif", letterSpacing: '-0.02em' }}
            >
              <span className="block">{c.stepsLabel}</span>
              <span>
                {c.stepsTitle}{' '}
                <span className="text-[#0063f5] text-[48px] md:text-[76px]">{c.stepsTitleItalic}</span>
              </span>
            </h2>
            <img src="/sparkle-md.svg" alt="" width={34} height={34} className="absolute -right-10 top-16 pointer-events-none" />
          </div>
          <p className="mt-4 text-[18px] text-[#5b6b86] leading-[28px]" style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}>
            {c.stepsSub}
          </p>
        </div>
        {/* Mobile step cards — vertical stack */}
        <div className="md:hidden mt-8 pb-10 flex flex-col gap-3 px-5">
          {c.steps.map((step) => (
            <div
              key={step.label}
              className="relative flex flex-col gap-2 overflow-hidden rounded-[32px] w-full pt-[22px] px-[22px]"
              style={{ background: step.bg, height: 420 }}
            >
              <div className="bg-white inline-flex items-start px-[10px] py-[5px] rounded-[128px] self-start">
                <span className="text-[11px] font-bold text-[#021945] whitespace-nowrap" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {step.label}
                </span>
              </div>
              <p className="text-[24px] font-bold leading-[26px] tracking-[-0.4px] text-[#021945]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                {step.title}
              </p>
              <p className="text-[13px] leading-[20px] text-[#5b6b86] max-w-[216px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {step.sub}
              </p>
              <div className="absolute" style={{ left: 25.84, top: 190, width: 208.32, height: 363.94 }}>
                <img src={step.img} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop PhoneFlip */}
        <div className="hidden md:block">
          <PhoneFlip lang={lang} />
        </div>
      </div>

      {/* ── Download + Calculator ────────────────────────────────────────── */}
      <section id="download" className="bg-white px-8 md:px-[130px] py-[100px]">
        <div
          className="flex flex-col md:flex-row gap-[64px] items-center pl-8 pr-8 md:pl-[80px] md:pr-[72px] py-[72px] rounded-[40px] overflow-hidden"
          style={{ background: 'linear-gradient(-30.56deg, rgb(234,242,255) 20.641%, rgb(248,251,255) 93.727%)' }}
        >

          {/* Left: Download */}
          <div className="flex-1 flex flex-col gap-[40px] items-start min-w-0">

            {/* Text + buttons group */}
            <div className="flex flex-col gap-[20px] items-start">
              <div className="border border-[#c0d8fa] px-3 py-1.5 rounded-full overflow-hidden">
                <span className="text-[#0063f5] text-[11px] font-bold tracking-[1.2px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{c.dlLabel.toUpperCase()}</span>
              </div>

              <h2 className="text-[56px] md:text-[64px] font-bold text-[#021945] m-0" style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: '58px' }}>
                {c.dlTitle.replace('\n', ' ')}
              </h2>

              <p className="text-[#5b6b86] text-[16px] leading-[24px] max-w-[420px] m-0" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
                {c.dlSub}
              </p>

              <div className="flex gap-3 items-center flex-wrap">
                <button className="bg-[#021945] text-white px-[26px] py-[14px] rounded-full text-[15px] font-bold transition-opacity hover:opacity-80" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
                  {isRtl ? 'انضم' : 'Join'}
                </button>
                <button className="border-[1.5px] border-[#021945] text-[#021945] px-[26px] py-[14px] rounded-full text-[15px] font-bold transition-opacity hover:opacity-70" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
                  {isRtl ? 'حمّل التطبيق' : 'Download the app'}
                </button>
              </div>
            </div>

            <div className="flex gap-[20px] items-start">
              {/* QR + scan label */}
              <div className="flex flex-col gap-[12px] items-center shrink-0">
                <div className="overflow-hidden rounded-[8px] shrink-0" style={{ width: 162, height: 162 }}>
                  <img src="/qr-code.svg" alt="" className="w-full h-full" />
                </div>
                <p className="text-[13px] m-0" style={{ color: '#5b6b86', fontFamily: "'SF Pro Display', sans-serif" }}>
                  {isRtl ? 'امسح للتحميل' : 'Scan for get the App'}
                </p>
              </div>
              {/* Store badges */}
              <div className="flex flex-col gap-[12px] shrink-0 pt-[30px]">
                <Image src="/appstore.svg" alt="Download on the App Store" width={140} height={45} />
                <Image src="/playstore.svg" alt="Get it on Google Play" width={140} height={45} />
              </div>
            </div>
          </div>

          {/* Right: Loan Finder Form */}
          <div className="w-full md:w-[520px] lg:w-[601px] shrink-0 rounded-[32px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] bg-white overflow-hidden">
            {/* Form header */}
            <div className="px-6 pt-6 pb-0 flex flex-col items-center gap-3 relative" style={{ background: 'linear-gradient(180deg, #EAF2FF 0%, #F8FBFF 100%)' }}>
              {/* LIVE CHECK badge */}
              <div className="border border-[#c0d8fa] px-3 py-1 rounded-full">
                <span className="text-[#0063f5] text-[11px] font-bold tracking-[1.2px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>LIVE CHECK</span>
              </div>
              {/* Title + sparkle */}
              <div className="flex items-center gap-2">
                <p className="text-[#021945] text-[20px] font-bold text-center m-0" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{c.findTitle}</p>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2L12.5 9.5L20 11L12.5 12.5L11 20L9.5 12.5L2 11L9.5 9.5L11 2Z" fill="#F5C518"/></svg>
              </div>
              {/* Form / Chat tabs — hanging out of header */}
              <div className="flex items-center bg-white rounded-full p-1 gap-1 relative z-10 mb-[-20px] shadow-[0_2px_12px_rgba(0,99,245,0.10)] border border-[#e5edf8]">
                <button
                  onClick={() => setFormTab('form')}
                  className={`px-6 py-2 rounded-full text-[14px] font-semibold transition-all ${formTab === 'form' ? 'bg-[#0063f5] text-white shadow-sm' : 'text-[#667085]'}`}
                  style={{ fontFamily: "'SF Pro Display', sans-serif" }}
                >
                  {isRtl ? 'نموذج' : 'Form'}
                </button>
                <button
                  onClick={() => setFormTab('chat')}
                  className={`px-6 py-2 rounded-full text-[14px] font-semibold transition-all ${formTab === 'chat' ? 'bg-[#0063f5] text-white shadow-sm' : 'text-[#667085]'}`}
                  style={{ fontFamily: "'SF Pro Display', sans-serif" }}
                >
                  {isRtl ? 'محادثة' : 'Chat'}
                </button>
              </div>
            </div>

            <div className="px-10 pt-[48px] pb-[48px] flex flex-col items-center gap-[36px] bg-white">

              {/* Loan Type */}
              <div className="flex flex-col items-center gap-2 w-full">
                <p className="text-[#475467] text-[13px] m-0">{c.findLoanTypeLabel}</p>
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
                <div className="flex gap-[4px] items-start">
                  <p className="text-[#475467] text-[13px] m-0">{c.findMonthlySalaryLabel}</p>
                  <p className="text-[#d91c1c] text-[13px] m-0">*</p>
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
                  <CanvasSlider value={salary} min={1000} max={100000} step={500} onChange={setSalary} />
                  <span className="flex items-center gap-1 text-[#101828] text-[16px] font-bold whitespace-nowrap">
                    <img src="/SAR.svg" alt="SAR" className="w-4 h-4 object-contain" /> 100 K
                  </span>
                </div>
              </div>

              {/* Active Loans */}
              <div className="flex flex-col items-center gap-2 w-full">
                <p className="text-[#475467] text-[13px] m-0">{c.findActiveLoansLabel}</p>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setHasActiveLoans(true)} className={`rounded-[8px] px-12 py-3 text-[18px] font-semibold transition-colors border ${hasActiveLoans === true ? 'bg-[#0063F5] border-[#0063F5] text-white' : 'bg-[#F5F9FF] border-[#D7E7FE] text-[#202A39]'}`}>{c.findYes}</button>
                  <button type="button" onClick={() => setHasActiveLoans(false)} className={`rounded-[8px] px-12 py-3 text-[18px] font-semibold transition-colors border ${hasActiveLoans === false ? 'bg-[#0063F5] border-[#0063F5] text-white' : 'bg-[#F5F9FF] border-[#D7E7FE] text-[#202A39]'}`}>{c.findNo}</button>
                </div>
              </div>

              {/* Loan Purpose */}
              <div className="flex flex-col items-center gap-2 w-full px-4 lg:px-12">
                <p className="text-[#475467] text-[13px] m-0">{c.findPurposeLabel}</p>
                <div className="relative w-full">
                  <button type="button" onClick={() => setLoanPurpose((loanPurpose + 1) % c.findPurposes.length)} className="w-full border border-[#EEF1F6] rounded-[8px] px-4 py-3 flex items-center justify-between bg-white cursor-pointer focus:outline-none focus:border-[#0063F5] text-left">
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
      </section>


      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-[96px] bg-white">
        <div className="max-w-[896px] mx-auto px-6">
          <h2
            className="text-[36px] md:text-[60px] font-bold text-[#101828] text-center mb-10 md:mb-[64px] leading-[1.2] md:leading-[75px]"
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
      <footer className="bg-black overflow-hidden" style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}>

        {/* Main content */}
        <div className="flex flex-col items-center pb-4 pt-16">
          <div className="flex gap-16 items-start w-full max-w-[1280px] px-6">

            {/* Left: logo + SAMA */}
            <div className="flex flex-col items-start justify-between self-stretch shrink-0 flex-1 min-w-0">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img src="/footer/logo-mark.svg" alt="" width={40} height={40} />
                <span
                  className="text-white text-[29px] tracking-[-0.02em] leading-none"
                  style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700 }}
                >
                  Tamawal<span style={{ fontFamily: "'SF Pro Display', sans-serif", fontWeight: 100 }}>®</span>
                </span>
              </div>
              {/* SAMA */}
              <div className="flex flex-col gap-2 py-4">
                <img src="/footer/sama-logo.svg" alt="Saudi Central Bank" width={238} height={89} />
                <p className="text-[#e0e0e0] text-[14px] leading-6 max-w-[280px]">{c.footerLicense}</p>
              </div>
            </div>

            {/* Right: nav columns */}
            <div className="flex flex-col gap-8 items-start shrink-0">

              {/* Row 1: About, Legal, Take actions, Customer Care */}
              <div className="flex gap-[30px] items-start">
                {/* About us */}
                <div className="flex flex-col gap-3 w-[190px]">
                  <p className="font-bold text-white text-[16px] leading-[1.72]">{c.footerAboutTitle}</p>
                  <div className="flex flex-col gap-2">
                    {c.footerAboutLinks.map((l) => (
                      <a key={l} href="#" className="text-[16px] text-white/64 hover:text-white transition-colors leading-[1.72]">{l}</a>
                    ))}
                  </div>
                </div>
                {/* Legal */}
                <div className="flex flex-col gap-3 w-[190px]">
                  <p className="font-bold text-white text-[16px] leading-[1.72]">{c.footerLegalTitle}</p>
                  <div className="flex flex-col gap-2">
                    {c.footerLegalLinks.map((l) => (
                      <a key={l} href="#" className="text-[16px] text-white/64 hover:text-white transition-colors leading-[1.35]">{l}</a>
                    ))}
                  </div>
                </div>
                {/* Take actions */}
                <div className="flex flex-col gap-3 w-[190px]">
                  <p className="font-bold text-white text-[16px] leading-[1.72]">{c.footerActionsTitle}</p>
                  <div className="flex flex-col gap-2">
                    {c.footerActionsLinks.map((l) => (
                      <a key={l} href="#" className="text-[16px] text-white/64 hover:text-white transition-colors leading-[1.72]">{l}</a>
                    ))}
                  </div>
                </div>
                {/* Customer Care */}
                <div className="flex flex-col gap-3 w-[190px]">
                  <p className="font-bold text-white text-[16px] leading-[1.72]">{c.footerCareTitle}</p>
                  <div className="flex flex-col gap-2">
                    {c.footerCareLinks.map((l) => (
                      <a key={l} href="#" className="text-[16px] text-white/64 hover:text-white transition-colors leading-[1.72]">{l}</a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full border-t border-[#535862]" />

              {/* Row 2: Contact, Address, Hours/Days, Social */}
              <div className="flex gap-[30px] items-start">
                {/* Contact */}
                <div className="flex flex-col gap-3 w-[190px]">
                  <p className="font-bold text-white text-[16px] leading-[1.72]">{c.footerContactTitle}</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <img src="/footer/icon-email.svg" alt="" width={16} height={16} />
                      <a href={`mailto:${c.footerEmail}`} className="text-[16px] text-white/64 hover:text-white transition-colors">{c.footerEmail}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/footer/icon-phone.svg" alt="" width={16} height={16} />
                      <a href={`tel:${c.footerPhone1}`} className="text-[16px] text-white/64 hover:text-white transition-colors">{c.footerPhone1}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/footer/icon-phone.svg" alt="" width={16} height={16} />
                      <a href={`tel:${c.footerPhone2}`} className="text-[16px] text-white/64 hover:text-white transition-colors">{c.footerPhone2}</a>
                    </div>
                  </div>
                </div>
                {/* Address */}
                <div className="flex flex-col gap-3 w-[190px]">
                  <p className="font-bold text-white text-[16px] leading-[1.72]">{c.footerAddressTitle}</p>
                  <div className="flex gap-2 items-start">
                    <img src="/footer/icon-location.svg" alt="" width={13} height={13} className="mt-[3px] shrink-0" />
                    <p className="text-[14px] text-white/64 leading-[1.45]">{c.footerAddress}</p>
                  </div>
                </div>
                {/* Hours & Days */}
                <div className="flex flex-col gap-3 w-[190px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-white text-[16px]">{c.footerHoursTitle}</p>
                    <p className="text-[14px] text-white/64">{c.footerHours}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-white text-[16px]">{c.footerDaysTitle}</p>
                    <p className="text-[14px] text-white/64">{c.footerDays}</p>
                  </div>
                </div>
                {/* Social */}
                <div className="flex flex-col gap-2 w-[190px]">
                  <p className="font-bold text-white text-[16px] leading-[1.72]">{c.footerSocialTitle}</p>
                  <div className="flex gap-2 items-center">
                    <img src="/footer/icon-linkedin.svg" alt="LinkedIn" width={45} height={45} />
                    <div className="relative size-[45px] border border-white/24 rounded-full flex items-center justify-center">
                      <img src="/footer/icon-x.svg" alt="X" width={20} height={15} />
                    </div>
                  </div>
                  <a href="#" className="flex items-center gap-1 text-[16px] text-white/86 hover:text-white transition-colors pt-2">
                    {c.footerFaqs}
                    <img src="/footer/icon-arrow.svg" alt="" width={24} height={24} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Giant watermark */}
        <div className="flex items-start justify-center">
          <div className="w-[1280px] relative h-[375px]">
            <p
              className="absolute select-none pointer-events-none whitespace-nowrap leading-none left-1/2 -translate-x-1/2 top-0"
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 700,
                fontSize: 373,
                color: '#1e242b',
                letterSpacing: '-0.025em',
              }}
            >
              Tamawal<span style={{ fontFamily: "'SF Pro Display', sans-serif", fontWeight: 100 }}>®</span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#535862]">
          <div className="flex items-center justify-between h-12 max-w-[1280px] mx-auto px-6">
            <p className="text-[12px] text-[#9aa4b2] leading-4">{c.copyright}</p>
            <p className="text-[12px] text-[#9aa4b2] leading-4">{c.regulated}</p>
          </div>
        </div>

      </footer>

      {/* ── FAB (Figma 5422:105591) ──────────────────────────────────────── */}
      <div
        dir="ltr"
        className={`hidden md:flex fixed bottom-[35px] right-7 z-[100] flex-col items-center gap-[8px] rounded-[8px] transition-[opacity,transform] duration-300 ${scrolled && !downloadVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        style={{
          width: 101,
          padding: '7px 2px 5px 2px',
          background: 'rgba(255,255,255,0.72)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          boxShadow: '0 0 0 0.5px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)',
        }}
      >
        {/* QR card */}
        <div className="bg-white border border-[#f5f5f5] rounded-[8px] p-[4px] w-[87px] h-[87px] flex items-center justify-center shrink-0">
          <Image loading="lazy" src="/qr-code.svg" alt="QR Code" width={79} height={79} />
        </div>
        {/* Check live button */}
        <button
          onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center justify-between w-[93px] h-[26px] bg-[#0063f5] rounded-[6px] px-[10px] cursor-pointer"
        >
          <span className="text-[11px] font-semibold text-white leading-none">{isRtl ? 'تحقق' : 'Check live'}</span>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 2.08v5.84M2.08 5L5 7.92 7.92 5" stroke="white" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

    </div>
  );
}
