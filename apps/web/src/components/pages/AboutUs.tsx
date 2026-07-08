'use client';

import WebNavbar from '../WebNavbar';
import WebFooter from '../WebFooter';

type Lang = 'ar' | 'en';

const partnerLogos = [
  '/logos/alinma.png',
  '/logos/alyusr.png',
  '/logos/anb.png',
  '/logos/asoul.png',
  '/logos/badaya.png',
  '/logos/kuwara.png',
  '/logos/nayifat.png',
  '/logos/rasheed.png',
  '/logos/subafc.png',
  '/logos/taajeer.png',
  '/logos/tamweel-aloula.png',
  '/logos/wataniya.png',
];

const t = {
  ar: {
    heroTitle: 'حياتك المالية أفضل مع',
    heroBrand: 'تموّل®',
    heroDesc: 'تموّل® هو وسيط تمويل رقمي (DFB) يعمل كسوق للقروض الشخصية وغيرها من أنواع التمويل، ويوفر الوصول إلى مجموعة متنوعة من المؤسسات المالية المرخصة في المملكة العربية السعودية.',
    heroCta: 'سجّل الآن',
    aboutTitle: 'عن تموّل®',
    aboutP1: 'تموّل® منصة وساطة تمويل رقمية تتيح للعملاء الوصول إلى مجموعة متنوعة من منتجات التمويل المصممة لتلبية احتياجاتهم وتتناسب مع أوضاعهم الائتمانية، دون الحاجة إلى زيارة جهات تمويلية متعددة.',
    aboutP2: 'تسعى تموّل® إلى تعزيز الوعي المالي وتوفير الوقت والجهد على العملاء من خلال تقديم سوق موحّد للتمويل الشخصي وتمويل الشركات الصغيرة والمتوسطة.',
    partnersTitle: 'شركاؤنا',
    productsTitle: 'منتجاتنا',
    productsSubtitle: 'نقدم حلول تمويلية مخصصة تغطي مختلف الاحتياجات',
    products: [
      { title: 'تمويل السيارات', icon: '🚗' },
      { title: 'تمويل بطاقة الائتمان', icon: '💳' },
      { title: 'التمويل العقاري', icon: '🏠' },
      { title: 'تمويل شخصي', icon: '👤' },
    ],
    valuesTitle: 'لماذا يجب عليك الانضمام واستخدام تموّل®؟',
    values: [
      {
        title: 'الربط',
        titleEn: 'Connectivity',
        desc: 'تتعاون تموّل® مع العديد من المؤسسات المالية والبنوك لتوفير أوسع مجموعة من خيارات التمويل المتاحة للعملاء.',
        img: '/assets/images/Assets/vp-Connectivity.svg',
      },
      {
        title: 'مستوى أمان عالٍ',
        titleEn: 'Secure',
        desc: 'تستخدم تموّل® أحدث تقنيات التشفير وخوارزميات تقييم الائتمان والبنية التحتية للتكنولوجيا المالية لضمان أعلى مستويات الأمان.',
        img: '/assets/images/Assets/vp-Secure.svg',
      },
      {
        title: 'سهل الاستخدام',
        titleEn: 'Easy',
        desc: 'تتسم منصة تموّل® بواجهة سهلة الاستخدام تُبسّط رحلة التمويل بأكملها من الاستشارة حتى الصرف.',
        img: '/assets/images/Assets/vp-Accurate.svg',
      },
    ],
    ctaTitle: 'نحن نستعد لشيء كبير',
    ctaDesc: 'سجّل الآن في قائمة الانتظار وسنقوم بإعلامك عندما نكون مستعدين!',
    ctaBtn: 'سجّل الآن',
  },
  en: {
    heroTitle: 'Your financial life is better with',
    heroBrand: 'Tamawal®',
    heroDesc: 'Tamawal® is a Digital Finance Broker (DFB) operating as a marketplace for personal loans and other types of financing, providing access to a diverse range of licensed financial institutions in Saudi Arabia.',
    heroCta: 'Register Now',
    aboutTitle: 'About Tamawal®',
    aboutP1: 'Tamawal® is a digital finance brokerage platform that provides customers access to diverse financing products tailored to their needs and creditworthiness — without the need to visit multiple financial institutions.',
    aboutP2: 'Tamawal® aims to promote financial literacy and save customers time and effort through a unified marketplace for personal and SME financing.',
    partnersTitle: 'Our Partners',
    productsTitle: 'Our Products',
    productsSubtitle: 'We offer customized financing solutions across multiple categories',
    products: [
      { title: 'Auto Finance', icon: '🚗' },
      { title: 'Credit Card Finance', icon: '💳' },
      { title: 'Real Estate Finance', icon: '🏠' },
      { title: 'Personal Finance', icon: '👤' },
    ],
    valuesTitle: 'Why should you join and use Tamawal®?',
    values: [
      {
        title: 'Connectivity',
        titleEn: 'Connectivity',
        desc: 'Tamawal® partners with numerous financial institutions and banks to provide the widest range of financing options available to customers.',
        img: '/assets/images/Assets/vp-Connectivity.svg',
      },
      {
        title: 'High Security',
        titleEn: 'Secure',
        desc: 'Tamawal® employs the latest encryption technologies, credit assessment algorithms, and fintech infrastructure to ensure the highest levels of security.',
        img: '/assets/images/Assets/vp-Secure.svg',
      },
      {
        title: 'Easy to Use',
        titleEn: 'Easy',
        desc: "Tamawal®'s platform features a user-friendly interface that simplifies the entire financing journey from consultation to disbursement.",
        img: '/assets/images/Assets/vp-Accurate.svg',
      },
    ],
    ctaTitle: "We're preparing something big",
    ctaDesc: 'Register now on the waitlist and we will notify you when we are ready!',
    ctaBtn: 'Register Now',
  },
};

export default function AboutUs({ lang }: { lang: Lang }) {
  const isRtl = lang === 'ar';
  const c = t[lang];

  return (
    <div className="min-h-screen bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <WebNavbar lang={lang} dark />

      {/* Hero */}
      <section className="bg-[#171717] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[600px]">
            <h1 className="text-white text-[36px] md:text-[52px] font-bold leading-[1.2] mb-6">
              {c.heroTitle} <span className="text-[#FFDD33]">{c.heroBrand}</span>
            </h1>
            <p className="text-[#98a2b3] text-[16px] md:text-[18px] leading-[1.7] mb-8">
              {c.heroDesc}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#0063F5] text-white text-[15px] font-semibold px-6 py-3 rounded-full hover:bg-[#0052d0] transition-colors"
            >
              {c.heroCta}
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[#101828] text-[32px] md:text-[40px] font-bold mb-6">{c.aboutTitle}</h2>
              <p className="text-[#475467] text-[16px] leading-[1.75] mb-4">{c.aboutP1}</p>
              <p className="text-[#475467] text-[16px] leading-[1.75]">{c.aboutP2}</p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/assets/images/Assets/illustration-main-sa.svg"
                alt=""
                className="w-full max-w-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-[#f9f8fd] py-14 overflow-hidden">
        <p className="text-[#101828] text-[22px] font-semibold text-center mb-10">{c.partnersTitle}</p>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex items-center gap-12 px-8"
            style={{ animation: 'marquee 25s linear infinite' }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 shrink-0">
                {partnerLogos.map((src, j) => (
                  <div key={j} className="h-8 shrink-0 flex items-center">
                    <img src={src} alt="Partner" className="h-full w-auto max-w-[120px] object-contain grayscale opacity-60" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#0d0d0d] py-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-white text-[32px] md:text-[40px] font-bold mb-3">{c.productsTitle}</h2>
          <p className="text-[#98a2b3] text-[16px] mb-12">{c.productsSubtitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.products.map((p) => (
              <div key={p.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col items-center gap-4">
                <span className="text-[40px]">{p.icon}</span>
                <p className="text-white text-[15px] font-semibold text-center">{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[#101828] text-[28px] md:text-[36px] font-bold text-center mb-16">{c.valuesTitle}</h2>
          <div className="flex flex-col gap-20">
            {c.values.map((v, i) => (
              <div
                key={v.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''}`}
              >
                <div>
                  <p className="text-[#0063F5] text-[13px] font-semibold tracking-widest uppercase mb-2">{v.titleEn}</p>
                  <h3 className="text-[#101828] text-[26px] md:text-[32px] font-bold mb-4">{v.title}</h3>
                  <p className="text-[#475467] text-[16px] leading-[1.75]">{v.desc}</p>
                </div>
                <div className="flex items-center justify-center">
                  <img src={v.img} alt={v.title} className="w-full max-w-[320px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0063F5] py-16 px-6 text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-white text-[28px] md:text-[36px] font-bold mb-4">{c.ctaTitle}</h2>
          <p className="text-[rgba(255,255,255,0.8)] text-[16px] mb-8">{c.ctaDesc}</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#FFDD33] text-[#171717] text-[15px] font-semibold px-8 py-3.5 rounded-full hover:bg-[#ffe84d] transition-colors"
          >
            {c.ctaBtn}
          </a>
        </div>
      </section>

      <WebFooter lang={lang} />
    </div>
  );
}
