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

            <div className="overflow-hidden rounded-3xl bg-white dark:bg-[#0d1520] shadow-[0_4px_12px_rgba(0,0,0,0.06)] dark:shadow-none dark:border dark:border-white/[0.08]" style={{ minHeight: 520 }}>
              <div className="border-b border-[#EAECF0] dark:border-white/[0.08] bg-[#F1F7FF] dark:bg-[#0a1628] px-6 pb-5 pt-6">
                <h2 className="text-center text-xl font-bold leading-tight text-[#021945] dark:text-white">{c.findTitle}</h2>
              </div>
              <div className="flex flex-col gap-5 px-6 py-8">
                <div className="flex flex-wrap gap-2 justify-center">
                  {c.productTabs.slice(0, 5).map((tab, i) => (
                    <button
                      key={tab}
                      onClick={() => setFindProduct(i)}
                      className={`px-4 h-10 rounded-full text-sm font-medium transition-all ${findProduct === i ? 'bg-[#0063F5] text-white' : 'bg-[#F1F7FF] dark:bg-white/[0.06] text-[#344054] dark:text-white/60 hover:bg-[#deeaff] dark:hover:bg-white/[0.1]'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#101828] dark:text-white mb-2">{c.findAmountLabel}</label>
                  <div className="flex items-center gap-2 bg-[#F9FAFB] dark:bg-[#0a1628] border border-[#EAECF0] dark:border-white/[0.08] rounded-lg px-4 h-11">
                    <span className="text-xs text-[#9aa4b2]">SAR</span>
                    <input type="number" defaultValue={50000} className="flex-1 bg-transparent text-sm text-[#101828] dark:text-white outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#101828] dark:text-white mb-2">{c.findSalaryLabel}</label>
                  <div className="flex items-center gap-2 bg-[#F9FAFB] dark:bg-[#0a1628] border border-[#EAECF0] dark:border-white/[0.08] rounded-lg px-4 h-11">
                    <span className="text-xs text-[#9aa4b2]">SAR</span>
                    <input type="number" defaultValue={10000} className="flex-1 bg-transparent text-sm text-[#101828] dark:text-white outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#101828] dark:text-white mb-2">{c.findEmployLabel}</label>
                  <select className="w-full bg-[#F9FAFB] dark:bg-[#0a1628] border border-[#EAECF0] dark:border-white/[0.08] rounded-lg px-4 h-11 text-sm text-[#101828] dark:text-white outline-none appearance-none">
                    {c.findEmployOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <Link href="/tamweel-web/hub" className="mt-1 w-full text-center text-sm font-semibold text-white bg-[#0063F5] py-3.5 rounded-lg hover:bg-[#0052cc] transition-colors">
                  {c.findCta}
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
