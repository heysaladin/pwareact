'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const PhoneFlip = dynamic(() => import('./PhoneFlip'), { ssr: false });

type Lang = 'en' | 'ar';

const t = {
  en: {
    navHowItWorks: 'How it Works',
    navFeatures: 'Features',
    navDownload: 'Download',
    navFaq: 'FAQ',
    navSignIn: 'Sign in',
    navGetStarted: 'Get Started',

    badge: "Saudi Arabia's #1 Financing Platform",
    heroTitle1: 'Compare. Apply.',
    heroTitle2: 'Get Funded.',
    heroSub: 'Tamawal connects you to 15+ Saudi banks in one place. Get real financing offers in minutes — no paperwork, no branch visits.',
    heroCta1: 'Check My Eligibility',
    heroCta2: 'Download the App',
    trust: ['Free to use', 'No credit impact', 'SAMA licensed', 'Results in 3 minutes'],

    howItWorksLabel: 'How it Works',
    howItWorksTitle: 'Simple. Transparent. Fast.',

    productTabs: ['Car Financing', 'Personal Loans', 'Real Estate', 'Credit Cards', 'Business Loans', 'Home Equity', 'Lease Finance', 'Micro Finance', 'Auto Refinance', 'Student Loans'],

    productsLabel: 'Products',
    productsTitle: 'Finance anything\nyou need',
    productsSub: 'From cars to homes, personal needs to business goals — compare real offers across all major product types.',
    loanTypes: [
      {
        key: 'car',
        title: 'Car Financing',
        desc: 'Compare offers from 15+ banks and drive away with the best rate. New, used, or electric — we cover it all.',
        stat1: '15+ banks', stat2: 'From 2.5% APR',
        cta: 'Explore Car Loans',
        bg: '#EEF5FF', accent: '#0063F5', icon: '/products/car.svg',
      },
      {
        key: 'personal',
        title: 'Personal Loans',
        desc: 'Quick personal financing with flexible repayment terms. Get approved in as little as 24 hours.',
        stat1: 'Up to SAR 500K', stat2: 'Up to 5 years',
        cta: 'Explore Personal Loans',
        bg: '#F3EEFF', accent: '#7C3AED', icon: '/products/personal.svg',
      },
      {
        key: 'mortgage',
        title: 'Real Estate',
        desc: 'Finance your dream home or investment property with competitive mortgage rates from top Saudi banks.',
        stat1: 'Up to SAR 5M', stat2: 'Up to 30 years',
        cta: 'Explore Mortgages',
        bg: '#EEFAF4', accent: '#059669', icon: '/products/mortgage.svg',
      },
      {
        key: 'card',
        title: 'Credit Cards',
        desc: 'Compare credit cards by cashback, rewards, and benefits. Find the card that fits your lifestyle.',
        stat1: '10+ card options', stat2: '0% intro APR',
        cta: 'Explore Credit Cards',
        bg: '#FFF8EE', accent: '#D97706', icon: '/products/card.svg',
      },
    ],

    cards: [
      { number: '01', title: 'Tell us what you need', desc: 'Answer a few quick questions about your financing needs. Takes less than 2 minutes.' },
      { number: '02', title: 'We check your eligibility', desc: 'Tamawal analyzes your profile against 15+ bank criteria — no credit inquiry.' },
      { number: '03', title: 'Compare real offers', desc: 'See actual offers with real rates, terms, and monthly payments side by side.' },
      { number: '04', title: 'Apply and get funded', desc: 'Choose your best offer and apply directly. Get funded in as little as 24 hours.' },
    ],

    f1Step: 'Step 1', f1Title: 'Apply securely\nwith Tamawal', f1Sub: 'Your data is protected with bank-grade encryption. Apply once, reach every bank partner — safely and privately.',
    f1Bullets: ['Najm-verified identity', 'No data shared without consent', 'SAMA-regulated platform'],

    f2Step: 'Step 2', f2Title: 'Compare\noffers', f2Sub: 'See real offers from multiple banks side by side — rates, monthly payments, and total cost, all in one place.',
    f2Bullets: ['15+ bank partners', 'Real rates, not estimates', 'Sort by monthly payment or total cost'],

    f3Step: 'Step 3', f3Title: 'Get your\nmoney', f3Sub: 'Accept your chosen offer, sign digitally, and receive funds directly to your account — in as little as 24 hours.',
    f3Bullets: ['100% digital signing', 'Fast bank transfer', 'Real-time status tracking'],

    f4Step: 'Bonus', f4Title: 'Improve\ncredit score', f4Sub: 'Track your credit score, get personalized tips, and build a stronger financial profile — all inside Tamawal.',
    f4Bullets: ['Free credit score tracking', 'AI-powered improvement tips', 'Unlock better rates over time'],

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
    footerPlatform: 'Platform', footerCompany: 'Company',
    footerLinks: ['Hub', 'How it Works', 'Download'],
    footerCompanyLinks: ['About Us', 'Brand', 'Materials'],
    copyright: '© 2026 Tamawal. All rights reserved.',
    regulated: 'Regulated by SAMA',
  },
  ar: {
    navHowItWorks: 'كيف يعمل',
    navFeatures: 'المميزات',
    navDownload: 'تحميل',
    navFaq: 'الأسئلة الشائعة',
    navSignIn: 'تسجيل الدخول',
    navGetStarted: 'ابدأ الآن',

    badge: 'منصة التمويل الأولى في المملكة',
    heroTitle1: 'قارن. قدّم.',
    heroTitle2: 'احصل على تمويلك.',
    heroSub: 'تامول يربطك بأكثر من 15 بنكاً سعودياً في مكان واحد. احصل على عروض تمويل حقيقية في دقائق — بدون أوراق ولا زيارة فروع.',
    heroCta1: 'تحقق من أهليتي',
    heroCta2: 'حمّل التطبيق',
    trust: ['مجاني تمامًا', 'لا تأثير على التصنيف', 'مرخص من ساما', 'نتائج في 3 دقائق'],

    howItWorksLabel: 'كيف يعمل',
    howItWorksTitle: 'بسيط. شفاف. سريع.',

    productTabs: ['تمويل سيارة', 'قروض شخصية', 'عقار', 'بطاقات ائتمان', 'قروض تجارية', 'ضمان عقاري', 'تمويل إيجاري', 'تمويل صغير', 'إعادة تمويل سيارة', 'قروض طلابية'],

    productsLabel: 'المنتجات',
    productsTitle: 'موّل كل ما تحتاجه',
    productsSub: 'من السيارات إلى المنازل، الاحتياجات الشخصية إلى الأهداف التجارية — قارن عروضاً حقيقية عبر جميع أنواع المنتجات الرئيسية.',
    loanTypes: [
      {
        key: 'car',
        title: 'تمويل سيارة',
        desc: 'قارن عروض أكثر من 15 بنكاً وانطلق بأفضل معدل. جديدة، مستعملة، أو كهربائية — نغطي كل شيء.',
        stat1: '+15 بنكاً', stat2: 'من 2.5% سنوياً',
        cta: 'استعرض تمويل السيارات',
        bg: '#EEF5FF', accent: '#0063F5', icon: '/products/car.svg',
      },
      {
        key: 'personal',
        title: 'قروض شخصية',
        desc: 'تمويل شخصي سريع بشروط سداد مرنة. احصل على الموافقة في غضون 24 ساعة.',
        stat1: 'حتى 500,000 ريال', stat2: 'حتى 5 سنوات',
        cta: 'استعرض القروض الشخصية',
        bg: '#F3EEFF', accent: '#7C3AED', icon: '/products/personal.svg',
      },
      {
        key: 'mortgage',
        title: 'التمويل العقاري',
        desc: 'موّل منزل أحلامك أو عقارك الاستثماري بمعدلات رهن عقاري تنافسية من أفضل البنوك السعودية.',
        stat1: 'حتى 5 مليون ريال', stat2: 'حتى 30 سنة',
        cta: 'استعرض التمويل العقاري',
        bg: '#EEFAF4', accent: '#059669', icon: '/products/mortgage.svg',
      },
      {
        key: 'card',
        title: 'بطاقات الائتمان',
        desc: 'قارن بطاقات الائتمان حسب الكاش باك والمكافآت والمزايا. اعثر على البطاقة التي تناسب أسلوب حياتك.',
        stat1: '+10 خيارات للبطاقات', stat2: 'فائدة 0% في البداية',
        cta: 'استعرض بطاقات الائتمان',
        bg: '#FFF8EE', accent: '#D97706', icon: '/products/card.svg',
      },
    ],

    cards: [
      { number: '٠١', title: 'أخبرنا بما تحتاج', desc: 'أجب على بعض الأسئلة السريعة حول احتياجاتك التمويلية. يستغرق أقل من دقيقتين.' },
      { number: '٠٢', title: 'نتحقق من أهليتك', desc: 'يحلل تامول ملفك الشخصي مقابل معايير أكثر من 15 بنكاً — دون أي استعلام ائتماني.' },
      { number: '٠٣', title: 'قارن العروض الحقيقية', desc: 'اطلع على عروض حقيقية بمعدلات وشروط ومدفوعات شهرية حقيقية جنباً إلى جنب.' },
      { number: '٠٤', title: 'قدّم واحصل على التمويل', desc: 'اختر أفضل عرض وتقدم مباشرةً. احصل على التمويل في غضون 24 ساعة.' },
    ],

    f1Step: 'الخطوة الأولى', f1Title: 'قدّم بأمان\nمع تامول', f1Sub: 'بياناتك محمية بتشفير على مستوى البنوك. تقدّم مرة واحدة وصل إلى جميع شركاء البنوك — بأمان وخصوصية.',
    f1Bullets: ['هوية موثّقة عبر نجم', 'لا تشارك بياناتك دون موافقتك', 'منصة مرخصة من ساما'],

    f2Step: 'الخطوة الثانية', f2Title: 'قارن\nالعروض', f2Sub: 'شاهد عروضاً حقيقية من بنوك متعددة جنباً إلى جنب — المعدلات والدفعات الشهرية والتكلفة الإجمالية في مكان واحد.',
    f2Bullets: ['أكثر من 15 بنكاً شريكاً', 'معدلات حقيقية لا تقديرية', 'رتّب حسب الدفعة الشهرية أو التكلفة الكلية'],

    f3Step: 'الخطوة الثالثة', f3Title: 'احصل على\nأموالك', f3Sub: 'اقبل العرض الذي اخترته، وقّع رقمياً، وتلقّ الأموال مباشرة في حسابك — في غضون 24 ساعة.',
    f3Bullets: ['توقيع رقمي 100%', 'تحويل بنكي سريع', 'تتبع الحالة بشكل فوري'],

    f4Step: 'مميزات إضافية', f4Title: 'حسّن\nدرجة ائتمانك', f4Sub: 'تابع درجة ائتمانك، احصل على نصائح مخصصة، وابنِ ملفاً مالياً أقوى — كل ذلك داخل تامول.',
    f4Bullets: ['تتبع مجاني لدرجة الائتمان', 'نصائح مدعومة بالذكاء الاصطناعي', 'افتح الباب لمعدلات أفضل مع الوقت'],

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
    footerPlatform: 'المنصة', footerCompany: 'الشركة',
    footerLinks: ['المحور', 'كيف يعمل', 'تحميل'],
    footerCompanyLinks: ['من نحن', 'الهوية البصرية', 'المواد'],
    copyright: '© 2026 تامول. جميع الحقوق محفوظة.',
    regulated: 'مرخص من ساما',
  },
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-7">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-6 text-left">
        <span className={`text-lg font-medium transition-colors ${open ? 'text-[#101828] dark:text-white' : 'text-[#101828] dark:text-white/80'}`}>{question}</span>
        <span className="shrink-0 w-8 h-8 rounded-full bg-[#eef1f6] dark:bg-white/[0.08] flex items-center justify-center text-[#344054] dark:text-white/60">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
            <path d="M11.9998 15L7.75684 10.757L9.17184 9.34302L11.9998 12.172L14.8278 9.34302L16.2428 10.757L11.9998 15Z" fill="currentColor"/>
          </svg>
        </span>
      </button>
      {open && <p className="mt-3 text-base text-[#667085] dark:text-white/50 leading-relaxed max-w-3xl">{answer}</p>}
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
    <div className="min-h-screen bg-white dark:bg-[#080d14] font-sans" dir={isRtl ? 'rtl' : 'ltr'}>

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[#eef1f6] dark:border-white/[0.06] bg-white/95 dark:bg-[#080d14]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-[#9aa4b2] hover:text-[#667085] transition-colors me-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={isRtl ? 'rotate-180' : ''}>
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Image src="/logo-tamawal-web-blue.svg" alt="Tamawal" width={100} height={28} />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors">{c.navHowItWorks}</a>
            <a href="#features" className="text-sm text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors">{c.navFeatures}</a>
            <a href="#download" className="text-sm text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors">{c.navDownload}</a>
            <a href="#faq" className="text-sm text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors">{c.navFaq}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="text-sm font-medium text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-[#f8fafc] dark:hover:bg-white/[0.04]"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <a href="#" className="hidden md:block text-sm font-medium text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors">
              {c.navSignIn}
            </a>
            <Link href="/tamweel-web/hub" className="text-sm font-semibold text-white bg-[#0063F5] px-4 py-2 rounded-lg hover:bg-[#0052cc] transition-colors">
              {c.navGetStarted}
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(0,99,245,0.1),transparent)]" />
        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">
          <div data-w-id="f556c81f-252b-8bdf-acf0-909ad76120e7" className="la-hero-title-wrapper">
            <h1 data-w-id="06cd51ac-190f-583e-0908-40d06cd6d497" className="la-text-heading-h1-large">
              {c.heroTitle1}<br />
              <span style={{ color: '#0063F5' }}>{c.heroTitle2}</span>
            </h1>
            <div className="la-space-heading-subheading"></div>
            <div data-w-id="df3dbc30-ab8e-521b-1a41-fdb7644c2c87" className="la-text-heading-h1-subheading is-semibold">
              {c.heroSub}
            </div>
            <div data-w-id="d672c00f-3598-1dcf-0a26-25b847e433b2" className="la-app-download-wrapper la-hide-qr-float">
              <div className="la-space-text-btn"></div>
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
        </div>
      </section>

      {/* ── Partners marquee ────────────────────────────────────────────── */}
      <div className="w-full overflow-hidden automatic-horizontal-scroll py-8">
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

      {/* ── Loan Types ───────────────────────────────────────────────────── */}
      <section id="products" className="py-24 border-t border-[#eef1f6] dark:border-white/[0.06] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-4">{c.productsLabel}</p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#101828] dark:text-white leading-tight whitespace-pre-line">{c.productsTitle}</h2>
            <p className="mt-4 text-base text-[#667085] dark:text-white/50 max-w-xl mx-auto leading-relaxed">{c.productsSub}</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* right col — Car + Credit Card */}
            <div className="flex flex-col gap-6">
              {[c.loanTypes[0], c.loanTypes[3]].map((loan) => (
                <div
                  key={loan.key}
                  className="rounded-[48px] p-10 flex flex-col justify-between relative overflow-hidden"
                  style={{ backgroundColor: loan.bg, minHeight: 460 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: loan.accent }}>{c.productsLabel}</p>
                      <h3 className="text-2xl font-bold text-[#101828] leading-tight">{loan.title}</h3>
                    </div>
                    <Image src={loan.icon} alt={loan.title} width={80} height={80} className="shrink-0" />
                  </div>
                  <p className="text-sm text-[#667085] leading-relaxed max-w-xs mt-4">{loan.desc}</p>
                  <div className="flex gap-6 mt-6">
                    <div>
                      <p className="text-lg font-bold text-[#101828]">{loan.stat1}</p>
                      <p className="text-xs text-[#9aa4b2] mt-0.5">{isRtl ? 'خيارات متاحة' : 'available'}</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#101828]">{loan.stat2}</p>
                      <p className="text-xs text-[#9aa4b2] mt-0.5">{isRtl ? 'أفضل معدل' : 'best rate'}</p>
                    </div>
                  </div>
                  <Link
                    href="/tamweel-web/hub"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-opacity hover:opacity-80"
                    style={{ backgroundColor: loan.accent }}
                  >
                    {loan.cta}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={isRtl ? 'rotate-180' : ''}>
                      <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            {/* left col — Personal + Mortgage, offset down */}
            <div className="flex flex-col gap-6 mt-36">
              {[c.loanTypes[1], c.loanTypes[2]].map((loan) => (
                <div
                  key={loan.key}
                  className="rounded-[48px] p-10 flex flex-col justify-between relative overflow-hidden"
                  style={{ backgroundColor: loan.bg, minHeight: 460 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: loan.accent }}>{c.productsLabel}</p>
                      <h3 className="text-2xl font-bold text-[#101828] leading-tight">{loan.title}</h3>
                    </div>
                    <Image src={loan.icon} alt={loan.title} width={80} height={80} className="shrink-0" />
                  </div>
                  <p className="text-sm text-[#667085] leading-relaxed max-w-xs mt-4">{loan.desc}</p>
                  <div className="flex gap-6 mt-6">
                    <div>
                      <p className="text-lg font-bold text-[#101828]">{loan.stat1}</p>
                      <p className="text-xs text-[#9aa4b2] mt-0.5">{isRtl ? 'خيارات متاحة' : 'available'}</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#101828]">{loan.stat2}</p>
                      <p className="text-xs text-[#9aa4b2] mt-0.5">{isRtl ? 'أفضل معدل' : 'best rate'}</p>
                    </div>
                  </div>
                  <Link
                    href="/tamweel-web/hub"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-opacity hover:opacity-80"
                    style={{ backgroundColor: loan.accent }}
                  >
                    {loan.cta}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={isRtl ? 'rotate-180' : ''}>
                      <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Phone Flip (How It Works) ────────────────────────────────────── */}
      <div id="how-it-works">
        <PhoneFlip lang={lang} />
      </div>

      {/* ── Download + Calculator ────────────────────────────────────────── */}
      <section id="download" className="py-20 border-t border-[#eef1f6] dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[#0063F5] rounded-[48px] p-10 flex flex-col justify-between overflow-hidden relative" style={{ minHeight: 520 }}>
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
              <div className={`relative flex mt-8 ${isRtl ? 'justify-start' : 'justify-end'}`}>
                <Image src="/mockup.png" alt="Download app" width={160} height={176} className="object-contain" />
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.08)]" style={{ minHeight: 520 }}>
              {/* Header */}
              <div className="bg-[#F1F7FF] border-b border-[#EAECF0] px-6 py-5 rounded-t-[32px]">
                <p className="text-[#021945] text-[20px] font-bold text-center">{c.findTitle}</p>
              </div>

              {/* Body */}
              <div className="px-10 py-10 flex flex-col items-center gap-12 bg-white">

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
                  <div className="border rounded-[8px] px-4 py-3 flex items-center gap-2 cursor-text border-[#EEF1F6] w-full">
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
                    <select
                      value={loanPurpose}
                      onChange={(e) => setLoanPurpose(Number(e.target.value))}
                      className="w-full border border-[#EEF1F6] rounded-[8px] px-4 py-3 bg-white text-[#101828] text-[18px] font-bold outline-none focus:border-[#0063F5] appearance-none cursor-pointer"
                    >
                      {c.findPurposes.map((p, i) => <option key={i} value={i}>{p}</option>)}
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="bg-white px-6 pb-10 pt-4 rounded-b-[32px] flex justify-center items-start">
                <Link
                  href={hasActiveLoans !== null ? '/tamweel-web/hub' : '#'}
                  onClick={(e) => hasActiveLoans === null && e.preventDefault()}
                  className={`rounded-[56px] px-6 py-4 flex items-center justify-center gap-2 w-[240px] transition-colors ${hasActiveLoans !== null ? 'bg-[#0063F5] cursor-pointer' : 'bg-[#E2E9F3] cursor-not-allowed'}`}
                >
                  <span className={`text-[16px] font-semibold ${hasActiveLoans !== null ? 'text-white' : 'text-[#9AA4B2]'}`}>{c.findContinue}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={isRtl ? 'rotate-180' : ''}>
                    <path d="M4.166 10h11.667M10 15.833L15.833 10 10 4.167" stroke={hasActiveLoans !== null ? 'white' : '#9AA4B2'} strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-24 border-t border-[#eef1f6] dark:border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-[#101828] dark:text-white text-center mb-16 leading-tight">{c.faqTitle}</h2>
          <div>
            {c.faqs.map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#eef1f6] dark:border-white/[0.06] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <Image src="/logo-tamawal-web-blue.svg" alt="Tamawal" width={100} height={28} className="mb-4" />
            <p className="text-xs text-[#667085] dark:text-white/40 leading-relaxed max-w-xs">{c.footerDesc}</p>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="text-xs font-semibold text-[#101828] dark:text-white mb-4">{c.footerPlatform}</p>
              <ul className="space-y-2.5">
                {c.footerLinks.map((item, i) => (
                  <li key={item}>
                    <a href={['#', '#how-it-works', '#download'][i]} className="text-xs text-[#667085] dark:text-white/40 hover:text-[#101828] dark:hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#101828] dark:text-white mb-4">{c.footerCompany}</p>
              <ul className="space-y-2.5">
                {c.footerCompanyLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-[#667085] dark:text-white/40 hover:text-[#101828] dark:hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="select-none pointer-events-none overflow-hidden">
          <p className="text-[#f5f5f5] dark:text-white/[0.04] font-bold text-[clamp(80px,18vw,260px)] leading-none text-center tracking-tight">
            tamawal
          </p>
        </div>

        <div className="border-t border-[#eef1f6] dark:border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
            <p className="text-xs text-[#9aa4b2] dark:text-white/25">{c.copyright}</p>
            <p className="text-xs text-[#9aa4b2] dark:text-white/25">{c.regulated}</p>
          </div>
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
