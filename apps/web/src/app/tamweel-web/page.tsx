'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';

const PhoneFlip = dynamic(() => import('./PhoneFlip'), { ssr: false });
const DownloadMockup = dynamic(() => import('./DownloadMockup'), { ssr: false });
const CanvasSlider = dynamic(() => import('./CanvasSlider'), { ssr: false });
const ChatWidget = dynamic(() => import('./ChatWidget'), { ssr: false });
const TrustOrbit = dynamic(() => import('./TrustOrbit'), { ssr: false });

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

function FAQItem({ question, answer, dark }: { question: string; answer: string; dark: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-7" style={{ borderBottom: `1px solid ${dark ? '#163252' : '#eef1f6'}` }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-6 text-left">
        <span className="text-[18px] font-medium leading-[28px]" style={{ color: dark ? '#c8d8ee' : '#101828' }}>{question}</span>
        <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: dark ? '#163252' : '#eef1f6', color: dark ? '#c8d8ee' : '#344054' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
            <path d="M11.9998 15L7.75684 10.757L9.17184 9.34302L11.9998 12.172L14.8278 9.34302L16.2428 10.757L11.9998 15Z" fill="currentColor"/>
          </svg>
        </span>
      </button>
      {open && <p className="mt-3 text-base leading-relaxed max-w-3xl" style={{ color: dark ? '#6e90b8' : '#667085' }}>{answer}</p>}
    </div>
  );
}

export default function TamweelWebHome() {
  const [lang, setLang] = useState<Lang>('en');
  const [dark, setDark] = useState(false);
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
  const [trustVisible, setTrustVisible] = useState(false);
  const [stmtVisible, setStmtVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const stmtRef = useRef<HTMLElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const orbitSectionRef = useRef<HTMLElement>(null);
  const fixedLogoRef = useRef<HTMLDivElement>(null);
  const isRtl = lang === 'ar';
  const c = t[lang];
  const ff = {
    display: isRtl ? "'IBM Plex Sans Arabic', sans-serif" : "'Clash Display', sans-serif",
    sans:    isRtl ? "'IBM Plex Sans Arabic', sans-serif" : "'Plus Jakarta Sans', sans-serif",
    ui:      isRtl ? "'IBM Plex Sans Arabic', sans-serif" : "'SF Pro Display', -apple-system, sans-serif",
    grotesque: isRtl ? "'IBM Plex Sans Arabic', sans-serif" : "'Bricolage Grotesque', sans-serif",
  };

  /* ── Dark mode colour tokens ───────────────────────────────────────── */
  const cl = {
    pageBg:         dark ? '#09111f' : '#ffffff',
    cardBg:         dark ? '#0d1a2e' : '#ffffff',
    cardAlt:        dark ? '#0d1a2e' : '#f3f5f7',
    cardMobileBg:   dark ? '#0d1a2e' : '#f5f5f5',
    textPrimary:    dark ? '#d2e3f7' : '#021945',
    textSecondary:  dark ? '#6e90b8' : '#5b6b86',
    textMuted:      dark ? '#4a6680' : '#667085',
    textFaq:        dark ? '#c8d8ee' : '#101828',
    textInput:      dark ? '#d2e3f7' : '#101828',
    textLabel:      dark ? '#8aabb8' : '#475467',
    border:         dark ? '#163252' : '#eef1f6',
    inputBorder:    dark ? '#163252' : '#EEF1F6',
    pillBg:         dark ? 'rgba(9,17,31,0.88)' : 'rgba(255,255,255,0.72)',
    pillShadow:     dark
      ? '0 0 0 0.5px rgba(255,255,255,0.08), 0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
      : '0 0 0 0.5px rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
    stmtBright:     dark ? '#d2e3f7' : '#021945',
    stmtMuted:      dark ? '#1a3a58' : '#c3d3ee',
    dlGradient:     dark
      ? 'linear-gradient(-30.56deg, rgb(10,22,42) 20.641%, rgb(7,15,30) 93.727%)'
      : 'linear-gradient(-30.56deg, rgb(234,242,255) 20.641%, rgb(248,251,255) 93.727%)',
    formHdrGrad:    dark
      ? 'linear-gradient(180deg, #0a1830 0%, #0d1a2e 100%)'
      : 'linear-gradient(180deg, #EAF2FF 0%, #F8FBFF 100%)',
    gridLightBg:    dark ? '#0d1a2e' : '#f3f5f7',
    gridLightText:  dark ? '#d2e3f7' : '#021945',
    gridLightEyBg:  dark ? 'rgba(255,255,255,0.1)' : 'rgba(2,25,69,0.08)',
    gridRealEyBg:   dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,99,245,0.1)',
    gridTealBg:     dark ? '#112232' : '#2c404f',
    btnUnselBg:     dark ? '#0a1526' : '#F5F9FF',
    btnUnselBorder: dark ? '#163252' : '#D7E7FE',
    btnUnselText:   dark ? '#d2e3f7' : '#202A39',
    stepLabelBg:    dark ? 'rgba(255,255,255,0.1)' : '#ffffff',
    tabBg:          dark ? '#0d1a2e' : '#ffffff',
    tabBorder:      dark ? '#163252' : '#e5edf8',
    badgeBorder:    dark ? '#163252' : '#c0d8fa',
    badgeText:      dark ? '#6aabff' : '#0063f5',
    fabBg:          dark ? 'rgba(9,17,31,0.88)' : 'rgba(255,255,255,0.72)',
    fabShadow:      dark
      ? '0 0 0 0.5px rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
      : '0 0 0 0.5px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)',
    fabCardBg:      dark ? '#0d1a2e' : '#ffffff',
    fabCardBorder:  dark ? 'rgba(255,255,255,0.08)' : '#f5f5f5',
    heroCTABorder:  dark ? '#163252' : '#f5f5f5',
    heroCTAInnerBg: dark ? '#0a1526' : '#f3f5f7',
    heroCTAText:    dark ? '#d2e3f7' : '#344054',
    heroGradient:   dark
      ? 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,99,245,0.12), transparent)'
      : 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,99,245,0.06), transparent)',
    dlBtnPrimBg:    dark ? '#d2e3f7' : '#021945',
    dlBtnPrimText:  dark ? '#021945' : '#ffffff',
    dlBtnSecBorder: dark ? '#d2e3f7' : '#021945',
    dlBtnSecText:   dark ? '#d2e3f7' : '#021945',
    qrBg:           dark ? '#0a1526' : undefined,
  };

  const getStepBg = (lightBg: string) => {
    if (!dark) return lightBg;
    const map: Record<string, string> = {
      '#eef5ff': '#071525',
      '#fff6d6': '#161000',
      '#e9f7f1': '#051510',
      '#f1ecff': '#0f0920',
    };
    return map[lightBg] ?? lightBg;
  };

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    try { localStorage.setItem('tweb-dark', next ? '1' : '0'); } catch {}
  };

  useEffect(() => {
    try {
      if (localStorage.getItem('tweb-dark') === '1') setDark(true);
    } catch {}
  }, []);

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

  useEffect(() => {
    const el = trustRef.current;
    if (!el) return;
    const check = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88) {
        setTrustVisible(true);
        window.removeEventListener('scroll', check);
      }
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  useEffect(() => {
    const el = stmtRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStmtVisible(true); obs.disconnect(); } },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* ── Fixed logo bridge: orbit grow → financing section ─────────────── */
  useEffect(() => {
    const ORBIT_EXTRA = 480;
    const LOGO_TOP = 150;
    const LOGO_H = 560;

    const onScroll = () => {
      const orbitSec  = orbitSectionRef.current;
      const fixedLogo = fixedLogoRef.current;
      const trustSec  = trustRef.current;
      if (!orbitSec || !fixedLogo) return;

      const totalH   = orbitSec.offsetHeight;
      const vh       = window.innerHeight;
      const scrolled = -orbitSec.getBoundingClientRect().top;
      const extraStart = totalH - ORBIT_EXTRA - vh;
      const p = Math.max(0, Math.min(1, (scrolled - extraStart) / ORBIT_EXTRA));

      let alpha = p > 0.75 ? Math.min(1, (p - 0.75) / 0.25) : 0;

      if (trustSec) {
        const textY = trustSec.getBoundingClientRect().top + LOGO_TOP + LOGO_H - 40;
        if (textY < LOGO_TOP + LOGO_H + 50) {
          alpha = Math.min(alpha, Math.max(0, (textY - LOGO_TOP) / LOGO_H));
        }
      }

      fixedLogo.style.opacity = String(alpha);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Dark mode toggle icon ──────────────────────────────────────────── */
  const DarkToggle = ({ size = 20 }: { size?: number }) => (
    <button
      onClick={toggleDark}
      aria-label="Toggle dark mode"
      className="flex items-center justify-center rounded-full transition-colors hover:opacity-70"
      style={{ width: size + 8, height: size + 8, color: cl.textPrimary }}
    >
      {dark ? (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ) : (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );

  return (
    <div
      className="min-h-screen font-sans transition-colors duration-300"
      dir={isRtl ? 'rtl' : 'ltr'}
      style={{ background: cl.pageBg, fontFamily: isRtl ? "'IBM Plex Sans Arabic', sans-serif" : undefined }}
    >

      {/* ── Fixed logo bridge (orbit grow → financing section) ──────────── */}
      <div
        ref={fixedLogoRef}
        className="hidden md:block pointer-events-none"
        aria-hidden="true"
        style={{ position: 'fixed', top: 150, left: '50%', transform: 'translateX(-50%)', width: 560, height: 560, opacity: 0, zIndex: 10 }}
      >
        <svg width="560" height="560" viewBox="0 0 200 200" fill="none">
          <defs>
            <linearGradient id="fixed-orbit-lm" x1="99.999" y1="0" x2="99.999" y2="199.998" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0063F5" stopOpacity="0.35"/>
              <stop offset="1" stopColor="#0063F5" stopOpacity="0.08"/>
            </linearGradient>
          </defs>
          <path d="M141.013 60.3545C138.172 69.5197 136.354 78.9336 135.558 88.417C127.484 90.2198 119.3 91.4078 111.082 91.9834V148.641C136.735 151.107 161.718 162.164 181.363 181.811L163.175 200C148.489 185.313 129.962 176.809 110.827 174.487L85.5469 150.786V174.899H86.2031C68.1316 177.71 50.7565 186.077 36.834 200L18.6455 181.811C37.3793 163.076 60.9663 152.154 85.3594 149.041V91.7832C78.0133 91.1538 70.7012 90.0348 63.4766 88.4229C62.6792 78.9396 60.8607 69.5261 58.0195 60.3613C84.9992 68.771 114.034 68.7688 141.013 60.3545ZM18.1875 18.6475C63.1205 63.5825 63.1206 136.437 18.1875 181.372L-0.000976562 163.183C34.8867 128.293 34.8867 71.7263 -0.000976562 36.8369L18.1875 18.6475ZM199.997 36.8281C165.109 71.7175 165.109 128.284 199.997 163.174L181.809 181.363C136.876 136.428 136.876 63.5737 181.809 18.6387L199.997 36.8281ZM181.343 18.1895C136.41 63.1245 63.5581 63.1245 18.625 18.1895L36.8135 0C71.7013 34.8894 128.266 34.8894 163.154 0L181.343 18.1895Z" fill="url(#fixed-orbit-lm)"/>
        </svg>
      </div>

      {/* ── Header (sticky → floating pill on scroll) ───────────────────── */}

      {/* Static bar — visible before scroll, scrolls with page */}
      <header
        className="relative z-10 transition-colors duration-300"
        style={{
          fontFamily: ff.sans,
          visibility: headerFloating ? 'hidden' : 'visible',
          background: cl.pageBg,
          borderBottom: `1px solid ${cl.border}`,
        }}
      >
        <div className="flex items-center justify-between px-4 py-4 md:px-[64px] md:py-[20px]">
          <div className="flex items-center gap-[48px]">
            <Image src="/logo-tamawal-web-blue.svg" alt="Tamawal" width={123} height={32} />
            <nav className="hidden md:flex items-center gap-[32px]">
              <a href="#" className="text-[14px] font-semibold hover:opacity-70 transition-opacity" style={{ color: cl.textPrimary }}>{c.navPersonal}</a>
              <a href="#" className="text-[14px] font-semibold hover:opacity-70 transition-opacity" style={{ color: cl.textPrimary }}>{c.navBusiness}</a>
              <a href="#how-it-works" className="text-[14px] font-semibold hover:opacity-70 transition-opacity" style={{ color: cl.textPrimary }}>{c.navHowItWorks}</a>
              <a href="#" className="text-[14px] font-semibold hover:opacity-70 transition-opacity" style={{ color: cl.textPrimary }}>{c.navAction}</a>
              <a href="#faq" className="text-[14px] font-semibold hover:opacity-70 transition-opacity" style={{ color: cl.textPrimary }}>{c.navFaq}</a>
            </nav>
          </div>
          <div className="flex items-center gap-[16px]">
            <DarkToggle size={18} />
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="text-[14px] font-semibold hover:opacity-70 transition-opacity"
              style={{ color: cl.textPrimary }}
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <a href="#" className="hidden md:block text-[14px] font-semibold hover:opacity-70 transition-opacity" style={{ color: cl.textPrimary }}>
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
          className="relative flex items-center justify-between gap-[48px] rounded-[1000px] pointer-events-auto transition-colors duration-300"
          style={{
            padding: '8px 8px 8px 20px',
            pointerEvents: headerFloating ? 'auto' : 'none',
            background: cl.pillBg,
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: cl.pillShadow,
          }}
        >
          {/* Left: Logo + Nav */}
          <div className="relative flex items-center gap-[48px] shrink-0">
            <Image src="/logo-tamawal-icon.svg" alt="Tamawal" width={32} height={32} />
            <nav className="hidden md:flex items-center gap-[32px]">
              <a href="#" className="text-[14px] font-[590] hover:opacity-70 transition-opacity whitespace-nowrap" style={{ color: cl.textPrimary }}>{c.navPersonal}</a>
              <a href="#" className="text-[14px] font-[590] hover:opacity-70 transition-opacity whitespace-nowrap" style={{ color: cl.textPrimary }}>{c.navBusiness}</a>
              <a href="#how-it-works" className="text-[14px] font-[590] hover:opacity-70 transition-opacity whitespace-nowrap" style={{ color: cl.textPrimary }}>{c.navHowItWorks}</a>
              <a href="#" className="text-[14px] font-[590] hover:opacity-70 transition-opacity whitespace-nowrap" style={{ color: cl.textPrimary }}>{c.navAction}</a>
              <a href="#faq" className="text-[14px] font-[590] hover:opacity-70 transition-opacity whitespace-nowrap" style={{ color: cl.textPrimary }}>{c.navFaq}</a>
            </nav>
          </div>
          {/* Right: Dark + Lang + Sign in + Join */}
          <div className="relative flex items-center gap-[16px] shrink-0">
            <DarkToggle size={16} />
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="text-[14px] font-[590] hover:opacity-70 transition-opacity whitespace-nowrap"
              style={{ color: cl.textPrimary }}
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <a href="#" className="hidden md:block text-[14px] font-[590] hover:opacity-70 transition-opacity whitespace-nowrap" style={{ color: cl.textPrimary }}>
              {c.navSignIn}
            </a>
            <Link href="/tamweel-web/hub" className="text-[14px] font-bold text-white bg-[#0063f5] px-[24px] py-[12px] rounded-[128px] hover:bg-[#0052cc] transition-colors whitespace-nowrap">
              {c.navGetStarted}
            </Link>
          </div>
        </div>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden transition-colors duration-300" style={{ background: cl.pageBg }}>
        <div className="absolute inset-0" style={{ background: cl.heroGradient }} />

        {/* Headline + subtitle + CTA row */}
        <div className="relative text-center pt-[62px] pb-16 px-6">
          {/* Headline with sparkles */}
          <div className="relative inline-block">
            <img src="/sparkle-lg.svg" alt="" width={56} height={56} className="absolute -right-16 -top-2 pointer-events-none" />
            <img src="/sparkle-md.svg" alt="" width={30} height={30} className="absolute -left-10 bottom-8 pointer-events-none" />
            <img src="/sparkle-sm.svg" alt="" width={18} height={18} className="absolute right-2 -bottom-4 pointer-events-none" />
            <h1
              className="text-[48px] md:text-[96px] font-bold leading-[1] md:leading-[88px] tracking-[-1px] md:tracking-[-2px]"
              style={{ fontFamily: ff.display, letterSpacing: isRtl ? 'normal' : undefined, color: cl.textPrimary }}
            >
              {c.heroTitle1}<br />
              <span style={{ color: '#0063F5' }}>{c.heroTitle2}</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mt-10 text-[18px] leading-[28px] max-w-[577px] mx-auto" style={{ color: cl.textSecondary }}>
            {c.heroSub}
          </p>

          {/* CTA row — two pill buttons */}
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            {/* Download the App */}
            <div className="flex items-center gap-[8px] p-[5px] rounded-[8px] border" style={{ borderColor: cl.heroCTABorder }}>
              <div className="flex items-center justify-center p-[5px] rounded-[8px] shrink-0" style={{ background: cl.heroCTAInnerBg }}>
                <Image src="/qr-code.svg" alt="QR Code" width={64} height={64} />
              </div>
              <p className="text-[11px] font-[590] tracking-[-0.1px] leading-[15px] w-[50px] text-left whitespace-pre-line" style={{ color: cl.heroCTAText }}>{c.heroCta2}</p>
            </div>
            {/* Check live */}
            <div className="flex items-center gap-[8px] p-[5px] rounded-[8px] border" style={{ borderColor: cl.heroCTABorder }}>
              <p className="text-[8.06px] font-[590] tracking-[-0.13px] leading-[12px] w-[50px] text-right whitespace-pre-line" style={{ color: cl.heroCTAText }}>{isRtl ? 'تحقق من جودتك مباشرة' : 'Check your quality live'}</p>
              <div className="flex items-center justify-center p-[20px] rounded-[12px] shrink-0" style={{ background: cl.heroCTAInnerBg }}>
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
      <div className="pt-[64px] pb-[24px] transition-colors duration-300" style={{ background: cl.pageBg }}>
        <p className="text-center text-[12px] font-bold tracking-[1.5px] mb-[20px]" style={{ fontFamily: ff.sans, color: cl.textSecondary }}>
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
      <section
        ref={stmtRef as React.RefObject<HTMLElement>}
        className="px-6 md:px-[180px] pt-[64px] md:pt-[96px] pb-[80px] md:pb-[120px] text-center transition-colors duration-300"
        style={{ background: cl.pageBg }}
      >
        <p
          className="text-[32px] md:text-[52px] font-bold leading-[1.2] md:leading-[58px] tracking-[-0.5px] md:tracking-[-1px]"
          style={{ fontFamily: ff.display, letterSpacing: isRtl ? 'normal' : undefined }}
        >
          {(() => {
            const chunks = isRtl ? [
              { text: 'تامول يجعل التمويل ', bright: false },
              { text: 'سهلاً', bright: true },
              { text: '. مبني على الثقة، ', bright: false },
              { text: 'مرخّص من ساما', bright: true },
              { text: '، ومصمّم لتتمكن من مقارنة ', bright: false },
              { text: 'عروض حقيقية في دقائق', bright: true },
              { text: ' — أينما كنت.', bright: false },
            ] : [
              { text: 'Tamawal makes financing ', bright: false },
              { text: 'effortless', bright: true },
              { text: '. Built on trust, ', bright: false },
              { text: 'regulated by SAMA', bright: true },
              { text: ', and designed so you can compare ', bright: false },
              { text: 'real offers in minutes', bright: true },
              { text: ' — wherever life takes you.', bright: false },
            ];
            let wordIdx = 0;
            return chunks.map((chunk, ci) => {
              const parts = chunk.text.split(/(\s+)/);
              return parts.map((part, pi) => {
                if (/^\s+$/.test(part)) return <span key={`${ci}-${pi}`}>{part}</span>;
                const delay = wordIdx++ * 65;
                return (
                  <span
                    key={`${ci}-${pi}`}
                    style={{
                      color: chunk.bright ? cl.stmtBright : cl.stmtMuted,
                      display: 'inline-block',
                      opacity: stmtVisible ? 1 : 0,
                      transform: stmtVisible ? 'none' : 'translateY(16px)',
                      transition: 'opacity 0.55s ease, transform 0.55s ease',
                      transitionDelay: `${delay}ms`,
                    }}
                  >
                    {part}
                  </span>
                );
              });
            });
          })()}
        </p>
      </section>

      {/* ── Product Image Grid ──────────────────────────────────────────── */}
      {/* Mobile 2×2 grid */}
      <section className="md:hidden px-4 py-10 transition-colors duration-300" style={{ background: cl.pageBg }}>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[24px] overflow-hidden aspect-square flex items-end justify-center" style={{ background: cl.cardMobileBg }}>
            <img src="/loan-type/card.png" alt="Credit cards" className="w-[90%] object-contain" />
          </div>
          <div className="rounded-[24px] overflow-hidden aspect-square flex items-end justify-center" style={{ background: cl.cardMobileBg }}>
            <img src="/loan-type/real-estate.png" alt="Property keys" className="w-full object-cover" />
          </div>
          <div className="rounded-[24px] overflow-hidden aspect-square flex items-end justify-center" style={{ background: cl.cardMobileBg }}>
            <img src="/loan-type/personal.png" alt="Tamawal user" className="h-[90%] object-contain" />
          </div>
          <div className="rounded-[24px] overflow-hidden aspect-square flex items-center justify-center" style={{ background: cl.cardMobileBg }}>
            <img src="/loan-type/car.png" alt="Car financing" className="w-[90%] object-contain" />
          </div>
        </div>
      </section>
      {/* Desktop absolute-position grid */}
      <section ref={gridRef} className="hidden md:block relative overflow-x-clip transition-colors duration-300" style={{ height: 1340, background: cl.pageBg }}>
        <div className="relative mx-auto" style={{ width: 1440, height: 1340 }}>

          {/* Top-left: Car Financing (dark — stays dark in both modes) */}
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

          {/* Car Financing text */}
          <div className="absolute flex flex-col items-start pointer-events-none transition-[opacity,transform] duration-700" style={{ left: 283, top: 238, width: 369, gap: 20, opacity: gridVisible ? 1 : 0, transform: gridVisible ? 'none' : 'translateY(40px) translateX(-20px)', transitionDelay: '0ms' }}>
            <div className="flex items-start overflow-hidden px-3 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }}>
              <span className="font-bold text-white text-[11px] tracking-[1.2px] whitespace-nowrap" style={{ fontFamily: ff.sans }}>{c.gridCards[0].eyebrow}</span>
            </div>
            <div className="font-bold text-white text-[40px]" style={{ fontFamily: ff.display, lineHeight: '40px' }}>
              <p className="m-0">{c.gridCards[0].title}</p>
            </div>
          </div>

          {/* Top-right: Credit Cards */}
          <div className="absolute overflow-hidden rounded-[48px] transition-[opacity,transform] duration-700" style={{ left: 752, top: 29, width: 439, height: 483, background: cl.gridLightBg, opacity: gridVisible ? 1 : 0, transform: gridVisible ? 'none' : 'translateY(40px) translateX(20px)', transitionDelay: '100ms' }}>
            <div className="absolute" style={{ left: 0, top: 0, width: 439, height: 328 }}>
              <div className="absolute pointer-events-none" style={{ left: 67, top: -12, width: 375, height: 404 }}>
                <img src="/loan-type/card.png" alt="" className="absolute inset-0 max-w-none object-cover size-full" />
              </div>
            </div>
            <div className="absolute flex flex-col items-start" style={{ left: 45, top: 302, width: 340, gap: 20 }}>
              <div className="flex items-start overflow-hidden px-3 py-1.5 rounded-full" style={{ background: cl.gridLightEyBg }}>
                <span className="font-bold text-[11px] tracking-[1.2px] whitespace-nowrap" style={{ fontFamily: ff.sans, color: cl.gridLightText }}>{c.gridCards[1].eyebrow}</span>
              </div>
              <div className="font-bold text-[40px]" style={{ fontFamily: ff.display, lineHeight: '40px', color: cl.gridLightText }}>
                <p className="m-0">{c.gridCards[1].title}</p>
              </div>
            </div>
          </div>

          {/* Bottom-left: Real Estate */}
          <div className="absolute overflow-hidden rounded-[48px] transition-[opacity,transform] duration-700" style={{ left: 248, top: 739, width: 439, height: 566, background: cl.gridLightBg, opacity: gridVisible ? 1 : 0, transform: gridVisible ? 'none' : 'translateY(40px) translateX(-20px)', transitionDelay: '200ms' }}>
            <div className="absolute" style={{ left: 0, top: 0, width: 439, height: 383 }}>
              <div className="absolute pointer-events-none" style={{ left: 45, top: 26, width: 357, height: 357 }}>
                <img src="/loan-type/real-estate.png" alt="" className="absolute inset-0 max-w-none object-cover size-full" />
              </div>
            </div>
            <div className="absolute flex flex-col items-start" style={{ left: 40, top: 383, width: 362, gap: 20 }}>
              <div className="flex items-start overflow-hidden px-3 py-1.5 rounded-full" style={{ background: cl.gridRealEyBg }}>
                <span className="font-bold text-[11px] tracking-[1.2px] whitespace-nowrap" style={{ fontFamily: ff.sans, color: cl.gridLightText }}>{c.gridCards[2].eyebrow}</span>
              </div>
              <div className="font-bold text-[40px]" style={{ fontFamily: ff.display, lineHeight: '40px', color: cl.gridLightText }}>
                <p className="m-0">{c.gridCards[2].title}</p>
              </div>
            </div>
          </div>

          {/* Bottom-right: Personal Loans */}
          <div className="absolute overflow-hidden rounded-[48px] transition-[opacity,transform] duration-700" style={{ left: 752, top: 573, width: 440, height: 572, background: cl.gridTealBg, opacity: gridVisible ? 1 : 0, transform: gridVisible ? 'none' : 'translateY(40px) translateX(20px)', transitionDelay: '300ms' }}>
            <div className="absolute" style={{ left: 0, top: 178, width: 440, height: 394 }}>
              <div className="absolute" style={{ left: 88, top: 0, width: 339, height: 394 }}>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img src="/loan-type/personal-hijab.png" alt="" className="absolute max-w-none pointer-events-none" style={{ top: 0, height: '100%', left: '-98.33%', width: '208.67%' }} />
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col items-start" style={{ left: 34, top: 34, width: 351, gap: 20 }}>
              <div className="flex items-start overflow-hidden px-3 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.16)', width: 174 }}>
                <span className="font-bold text-white text-[11px] tracking-[1.2px] whitespace-nowrap" style={{ fontFamily: ff.sans }}>{c.gridCards[3].eyebrow}</span>
              </div>
              <div className="font-bold text-white text-[40px]" style={{ fontFamily: ff.display, lineHeight: '40px' }}>
                <p className="m-0">{c.gridCards[3].title}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Phone Flip (How It Works) ────────────────────────────────────── */}
      <div id="how-it-works" className="transition-colors duration-300" style={{ background: cl.pageBg }}>
        {/* Section heading */}
        <div className="pt-[120px] pb-0 text-center">
          <div className="relative inline-block">
            <h2
              className="text-[40px] md:text-[68px] font-bold leading-[1.1] md:leading-[66px] text-center"
              style={{ fontFamily: ff.display, letterSpacing: isRtl ? 'normal' : '-0.02em', color: cl.textPrimary }}
            >
              <span className="block">{c.stepsLabel}</span>
              <span>
                {c.stepsTitle}{' '}
                <span className="text-[#0063f5] text-[48px] md:text-[76px]">{c.stepsTitleItalic}</span>
              </span>
            </h2>
            <img src="/sparkle-md.svg" alt="" width={34} height={34} className="absolute -right-10 top-16 pointer-events-none" />
          </div>
          <p className="mt-4 text-[18px] leading-[28px]" style={{ fontFamily: ff.ui, color: cl.textSecondary }}>
            {c.stepsSub}
          </p>
        </div>
        {/* Mobile step cards — vertical stack */}
        <div className="md:hidden mt-8 pb-10 flex flex-col gap-3 px-5">
          {c.steps.map((step) => (
            <div
              key={step.label}
              className="relative flex flex-col gap-2 overflow-hidden rounded-[32px] w-full pt-[22px] px-[22px]"
              style={{ background: getStepBg(step.bg), height: 420 }}
            >
              <div className="inline-flex items-start px-[10px] py-[5px] rounded-[128px] self-start" style={{ background: cl.stepLabelBg }}>
                <span className="text-[11px] font-bold whitespace-nowrap" style={{ fontFamily: ff.sans, color: cl.textPrimary }}>
                  {step.label}
                </span>
              </div>
              <p className="text-[24px] font-bold leading-[26px] tracking-[-0.4px]" style={{ fontFamily: ff.grotesque, fontVariationSettings: isRtl ? undefined : '"opsz" 14, "wdth" 100', letterSpacing: isRtl ? 'normal' : undefined, color: cl.textPrimary }}>
                {step.title}
              </p>
              <p className="text-[13px] leading-[20px] max-w-[216px]" style={{ fontFamily: ff.sans, color: cl.textSecondary }}>
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

      {/* ── Trust arc ───────────────────────────────────────────────────── */}
      <section ref={orbitSectionRef as React.RefObject<HTMLElement>} className="hidden md:block relative transition-colors duration-300" style={{ background: cl.pageBg }}>
        <TrustOrbit lang={lang} />
      </section>

      {/* ── Financing you can trust ─────────────────────────────────────── */}
      <section ref={trustRef} className="hidden md:block overflow-hidden transition-colors duration-300" style={{ background: cl.pageBg }}>
        <div className="flex flex-col items-center px-[130px] pb-[25px] relative" style={{ paddingTop: 670 }}>
          <div className="flex flex-col gap-[24px] items-center relative z-10">
            <div
              className="relative flex items-start transition-[opacity,transform] duration-700 ease-out"
              style={{ opacity: trustVisible ? 1 : 0, transform: trustVisible ? 'none' : 'translateY(32px)' }}
            >
              <p className="font-bold text-[68px] text-center m-0 leading-[1]" style={{ fontFamily: ff.display, color: cl.textPrimary }}>
                {isRtl ? 'تمويل يمكنك الوثوق به' : 'Financing you can trust'}
              </p>
              <img alt="" src="/trust/sparkle.svg" className="w-[34px] h-[34px] shrink-0 mt-1 ml-1" />
            </div>
            <p
              className="text-[18px] text-center m-0 leading-[28px] transition-[opacity,transform] duration-700"
              style={{ fontFamily: ff.ui, color: cl.textSecondary, opacity: trustVisible ? 1 : 0, transform: trustVisible ? 'none' : 'translateY(20px)', transitionDelay: '150ms' }}
            >
              {isRtl ? 'جاهز عندما تكون أنت جاهزاً. حمّل التطبيق، أو اكتشف ما تستحق أدناه!' : 'Ready when you are. Get the app, or see what you qualify for below!'}
            </p>
          </div>
        </div>
      </section>

      {/* ── Download + Calculator ────────────────────────────────────────── */}
      <section id="download" className="px-8 md:px-[130px] py-[100px] transition-colors duration-300" style={{ background: cl.pageBg }}>
        <div
          className="flex flex-col md:flex-row gap-[64px] items-center pl-8 pr-8 md:pl-[80px] md:pr-[72px] py-[72px] rounded-[40px] overflow-hidden"
          style={{ background: cl.dlGradient }}
        >

          {/* Left: Download */}
          <div className="flex-1 flex flex-col gap-[40px] items-start min-w-0">

            {/* Text + buttons group */}
            <div className="flex flex-col gap-[20px] items-start">
              <div className="px-3 py-1.5 rounded-full overflow-hidden border" style={{ borderColor: cl.badgeBorder }}>
                <span className="text-[11px] font-bold tracking-[1.2px]" style={{ fontFamily: ff.sans, color: cl.badgeText }}>{c.dlLabel.toUpperCase()}</span>
              </div>

              <h2 className="text-[56px] md:text-[64px] font-bold m-0" style={{ fontFamily: ff.display, lineHeight: '58px', color: cl.textPrimary }}>
                {c.dlTitle.replace('\n', ' ')}
              </h2>

              <p className="text-[16px] leading-[24px] max-w-[420px] m-0" style={{ fontFamily: ff.ui, color: cl.textSecondary }}>
                {c.dlSub}
              </p>

              <div className="flex gap-3 items-center flex-wrap">
                <button className="px-[26px] py-[14px] rounded-full text-[15px] font-bold transition-opacity hover:opacity-80" style={{ fontFamily: ff.ui, background: cl.dlBtnPrimBg, color: cl.dlBtnPrimText }}>
                  {isRtl ? 'انضم' : 'Join'}
                </button>
                <button className="border-[1.5px] px-[26px] py-[14px] rounded-full text-[15px] font-bold transition-opacity hover:opacity-70" style={{ fontFamily: ff.ui, borderColor: cl.dlBtnSecBorder, color: cl.dlBtnSecText }}>
                  {isRtl ? 'حمّل التطبيق' : 'Download the app'}
                </button>
              </div>
            </div>

            <div className="flex gap-[20px] items-start">
              {/* QR + scan label */}
              <div className="flex flex-col gap-[12px] items-center shrink-0">
                <div className="overflow-hidden rounded-[8px] shrink-0" style={{ width: 162, height: 162, background: cl.qrBg }}>
                  <img src="/qr-code.svg" alt="" className="w-full h-full" />
                </div>
                <p className="text-[13px] m-0" style={{ color: cl.textSecondary, fontFamily: ff.ui }}>
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
          <div className="w-full md:w-[520px] lg:w-[601px] shrink-0 rounded-[32px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] overflow-hidden" style={{ background: cl.cardBg }}>
            {/* Form header */}
            <div className="px-6 pt-6 pb-0 flex flex-col items-center gap-3 relative" style={{ background: cl.formHdrGrad }}>
              {/* LIVE CHECK badge */}
              <div className="px-3 py-1 rounded-full border" style={{ borderColor: cl.badgeBorder }}>
                <span className="text-[11px] font-bold tracking-[1.2px]" style={{ fontFamily: ff.sans, color: cl.badgeText }}>LIVE CHECK</span>
              </div>
              {/* Title + sparkle */}
              <div className="flex items-center gap-2">
                <p className="text-[20px] font-bold text-center m-0" style={{ fontFamily: ff.sans, color: cl.textPrimary }}>{c.findTitle}</p>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2L12.5 9.5L20 11L12.5 12.5L11 20L9.5 12.5L2 11L9.5 9.5L11 2Z" fill="#F5C518"/></svg>
              </div>
              {/* Form / Chat tabs */}
              <div className="flex items-center rounded-full p-1 gap-1 relative z-10 mb-[-20px] shadow-[0_2px_12px_rgba(0,99,245,0.10)] border" style={{ background: cl.tabBg, borderColor: cl.tabBorder }}>
                <button
                  onClick={() => setFormTab('form')}
                  className={`px-6 py-2 rounded-full text-[14px] font-semibold transition-all ${formTab === 'form' ? 'bg-[#0063f5] text-white shadow-sm' : ''}`}
                  style={{ fontFamily: ff.ui, color: formTab === 'form' ? undefined : cl.textMuted }}
                >
                  {isRtl ? 'نموذج' : 'Form'}
                </button>
                <button
                  onClick={() => setFormTab('chat')}
                  className={`px-6 py-2 rounded-full text-[14px] font-semibold transition-all ${formTab === 'chat' ? 'bg-[#0063f5] text-white shadow-sm' : ''}`}
                  style={{ fontFamily: ff.ui, color: formTab === 'chat' ? undefined : cl.textMuted }}
                >
                  {isRtl ? 'محادثة' : 'Chat'}
                </button>
              </div>
            </div>

            {formTab === 'form' ? (
              <>
                <div className="px-10 pt-[48px] pb-[48px] flex flex-col items-center gap-[36px]" style={{ background: cl.cardBg }}>

                  {/* Loan Type */}
                  <div className="flex flex-col items-center gap-2 w-full">
                    <p className="text-[13px] m-0" style={{ color: cl.textLabel }}>{c.findLoanTypeLabel}</p>
                    <div className="flex gap-2 items-center justify-center w-full flex-wrap">
                      {c.findLoanTypes.map((type, i) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFindProduct(i)}
                          className="px-5 py-3 rounded-[32px] text-[12px] font-semibold border transition-colors"
                          style={findProduct === i
                            ? { background: '#0063F5', borderColor: '#0063F5', color: '#ffffff' }
                            : { background: cl.btnUnselBg, borderColor: cl.btnUnselBorder, color: cl.btnUnselText }
                          }
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Monthly Salary */}
                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="flex gap-[4px] items-start">
                      <p className="text-[13px] m-0" style={{ color: cl.textLabel }}>{c.findMonthlySalaryLabel}</p>
                      <p className="text-[#d91c1c] text-[13px] m-0">*</p>
                    </div>
                    <div className="rounded-[8px] px-4 py-3 flex items-center gap-2 cursor-text border" style={{ borderColor: cl.inputBorder, background: cl.cardBg }}>
                      <img src="/SAR.svg" alt="SAR" className="w-6 h-6 object-contain flex-shrink-0" />
                      <span className="text-[24px] font-bold" style={{ color: cl.textInput }}>
                        {salary.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 w-full" style={{ userSelect: 'none', marginTop: '0.65rem' }}>
                      <span className="flex items-center gap-1 text-[16px] font-bold whitespace-nowrap" style={{ color: cl.textInput }}>
                        <img src="/SAR.svg" alt="SAR" className="w-4 h-4 object-contain" /> 1 K
                      </span>
                      <CanvasSlider value={salary} min={1000} max={100000} step={500} onChange={setSalary} />
                      <span className="flex items-center gap-1 text-[16px] font-bold whitespace-nowrap" style={{ color: cl.textInput }}>
                        <img src="/SAR.svg" alt="SAR" className="w-4 h-4 object-contain" /> 100 K
                      </span>
                    </div>
                  </div>

                  {/* Active Loans */}
                  <div className="flex flex-col items-center gap-2 w-full">
                    <p className="text-[13px] m-0" style={{ color: cl.textLabel }}>{c.findActiveLoansLabel}</p>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setHasActiveLoans(true)}
                        className="rounded-[8px] px-12 py-3 text-[18px] font-semibold transition-colors border"
                        style={hasActiveLoans === true
                          ? { background: '#0063F5', borderColor: '#0063F5', color: '#ffffff' }
                          : { background: cl.btnUnselBg, borderColor: cl.btnUnselBorder, color: cl.btnUnselText }
                        }
                      >{c.findYes}</button>
                      <button
                        type="button"
                        onClick={() => setHasActiveLoans(false)}
                        className="rounded-[8px] px-12 py-3 text-[18px] font-semibold transition-colors border"
                        style={hasActiveLoans === false
                          ? { background: '#0063F5', borderColor: '#0063F5', color: '#ffffff' }
                          : { background: cl.btnUnselBg, borderColor: cl.btnUnselBorder, color: cl.btnUnselText }
                        }
                      >{c.findNo}</button>
                    </div>
                  </div>

                  {/* Loan Purpose */}
                  <div className="flex flex-col items-center gap-2 w-full px-4 lg:px-12">
                    <p className="text-[13px] m-0" style={{ color: cl.textLabel }}>{c.findPurposeLabel}</p>
                    <div className="relative w-full">
                      <button
                        type="button"
                        onClick={() => setLoanPurpose((loanPurpose + 1) % c.findPurposes.length)}
                        className="w-full rounded-[8px] px-4 py-3 flex items-center justify-between cursor-pointer focus:outline-none text-left border"
                        style={{ background: cl.cardBg, borderColor: cl.inputBorder }}
                      >
                        <span className="text-[18px] font-bold" style={{ color: cl.textInput }}>{c.findPurposes[loanPurpose]}</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                          <path d="M5 7.5L10 12.5L15 7.5" stroke={cl.textInput} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-[40px] pt-4 rounded-b-[32px] flex justify-center items-start" style={{ background: cl.cardBg }}>
                  <button
                    disabled={hasActiveLoans === null}
                    onClick={() => hasActiveLoans !== null && (window.location.href = '/tamweel-web/hub')}
                    className="rounded-[56px] px-6 py-4 flex items-center justify-center gap-2 w-[240px] transition-colors"
                    style={hasActiveLoans !== null
                      ? { background: '#0063F5', cursor: 'pointer' }
                      : { background: dark ? '#1a2a40' : '#E2E9F3', cursor: 'not-allowed' }
                    }
                  >
                    <span className="text-[16px] font-semibold" style={{ color: hasActiveLoans !== null ? '#ffffff' : (dark ? '#4a6680' : '#9AA4B2') }}>{c.findContinue}</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={isRtl ? 'rotate-180' : ''}>
                      <path d="M4.166 10h11.667M10 15.833L15.833 10 10 4.167" stroke={hasActiveLoans !== null ? 'white' : (dark ? '#4a6680' : '#9AA4B2')} strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <div className="rounded-b-[32px] overflow-hidden pt-5" style={{ background: cl.cardBg }}>
                <ChatWidget
                  lang={lang}
                  onComplete={() => { window.location.href = '/tamweel-web/hub'; }}
                />
              </div>
            )}
          </div>

        </div>
      </section>


      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-[96px] transition-colors duration-300" style={{ background: cl.pageBg }}>
        <div className="max-w-[896px] mx-auto px-6">
          <h2
            className="text-[36px] md:text-[60px] font-bold text-center mb-10 md:mb-[64px] leading-[1.2] md:leading-[75px]"
            style={{ fontFamily: ff.sans, color: cl.textFaq }}
          >
            {c.faqTitle}
          </h2>
          <div>
            {c.faqs.map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} dark={dark} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="bg-black overflow-hidden" style={{ fontFamily: ff.ui }}>

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
                  style={{ fontFamily: ff.display, fontWeight: 700 }}
                >
                  Tamawal<span style={{ fontFamily: ff.ui, fontWeight: 100 }}>®</span>
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
                <div className="flex flex-col gap-3 w-[190px]">
                  <p className="font-bold text-white text-[16px] leading-[1.72]">{c.footerAboutTitle}</p>
                  <div className="flex flex-col gap-2">
                    {c.footerAboutLinks.map((l) => (
                      <a key={l} href="#" className="text-[16px] text-white/64 hover:text-white transition-colors leading-[1.72]">{l}</a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 w-[190px]">
                  <p className="font-bold text-white text-[16px] leading-[1.72]">{c.footerLegalTitle}</p>
                  <div className="flex flex-col gap-2">
                    {c.footerLegalLinks.map((l) => (
                      <a key={l} href="#" className="text-[16px] text-white/64 hover:text-white transition-colors leading-[1.35]">{l}</a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 w-[190px]">
                  <p className="font-bold text-white text-[16px] leading-[1.72]">{c.footerActionsTitle}</p>
                  <div className="flex flex-col gap-2">
                    {c.footerActionsLinks.map((l) => (
                      <a key={l} href="#" className="text-[16px] text-white/64 hover:text-white transition-colors leading-[1.72]">{l}</a>
                    ))}
                  </div>
                </div>
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
                <div className="flex flex-col gap-3 w-[190px]">
                  <p className="font-bold text-white text-[16px] leading-[1.72]">{c.footerAddressTitle}</p>
                  <div className="flex gap-2 items-start">
                    <img src="/footer/icon-location.svg" alt="" width={13} height={13} className="mt-[3px] shrink-0" />
                    <p className="text-[14px] text-white/64 leading-[1.45]">{c.footerAddress}</p>
                  </div>
                </div>
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
                fontFamily: ff.display,
                fontWeight: 700,
                fontSize: 373,
                color: '#1e242b',
                letterSpacing: isRtl ? 'normal' : '-0.025em',
              }}
            >
              Tamawal<span style={{ fontFamily: ff.ui, fontWeight: 100 }}>®</span>
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

      {/* ── FAB ─────────────────────────────────────────────────────────── */}
      <div
        dir="ltr"
        className={`hidden md:flex fixed bottom-[35px] right-7 z-[100] flex-col items-center gap-[8px] rounded-[8px] transition-[opacity,transform] duration-300 ${scrolled && !downloadVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        style={{
          width: 101,
          padding: '7px 2px 5px 2px',
          background: cl.fabBg,
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          boxShadow: cl.fabShadow,
        }}
      >
        {/* QR card */}
        <div className="rounded-[8px] p-[4px] w-[87px] h-[87px] flex items-center justify-center shrink-0 border" style={{ background: cl.fabCardBg, borderColor: cl.fabCardBorder }}>
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
