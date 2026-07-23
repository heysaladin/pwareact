'use client';

import WebNavbar from '../WebNavbar';
import WebFooter from '../WebFooter';

type Lang = 'ar' | 'en';

const imgHeroBanner       = '/about-hero-banner.png';
const imgArrowDown        = '/about-arrow-down.svg';
const imgWeArePhoto       = '/about-we-are-photo.png';
const imgMockupLogo1      = '/about-mockup-logo1.png';
const imgMockupLogo2      = '/about-mockup-logo2.png';
const imgMockupLogo3      = '/about-mockup-logo3.png';
const imgMockupCheck1     = '/about-mockup-icon-check1.svg';
const imgMockupCheck2     = '/about-mockup-icon-check2.svg';
const imgMockupCheck3     = '/about-mockup-icon-check3.svg';
const imgMockupSep        = '/about-mockup-separator.svg';
const imgMockupStars      = '/about-mockup-stars.svg';
const imgMockupHeart      = '/about-mockup-icon-heart.svg';
const imgMockupTick       = '/about-mockup-icon-tick.svg';
const imgMockupBankIcon1  = '/about-mockup-bank-icon1.svg';
const imgMockupBankIcon2  = '/about-mockup-bank-icon2.svg';
const imgTamawalLogo      = '/about-tamawal-logo.svg';
const imgProductCar       = '/product-icon-car.svg';
const imgProductCard      = '/product-icon-creditcard.svg';
const imgProductRE        = '/product-icon-realestate.svg';
const imgProductsDivider  = '/about-products-divider.svg';
const imgPartner1         = '/about-partner-1.png';
const imgPartner2         = '/about-partner-2.png';
const imgPartner3         = '/about-partner-3.png';
const imgPartner4         = '/about-partner-4.png';
const imgPartnerArrow     = '/about-partner-arrow.svg';
const imgValueIntegrated  = '/about-value-integrated.png';
const imgValueReliable    = '/about-value-reliable.png';
const imgValueEasy        = '/about-value-easy.png';
const imgCtaArrow         = '/about-cta-arrow.svg';
const imgPFCard1          = '/product-icon-personal-card1.svg';
const imgPFUnion          = '/product-icon-personal-union.svg';
const imgPFMask           = '/product-icon-personal-mask.svg';
const imgPFCard2          = '/product-icon-personal-card2.svg';
const imgPFVector         = '/product-icon-personal-vector.svg';
const imgPFCoin1          = '/product-icon-personal-coin1.svg';
const imgPFCoin2          = '/product-icon-personal-coin2.svg';
const imgPFCoin3          = '/product-icon-personal-coin3.svg';
const imgPFCoin4          = '/product-icon-personal-coin4.svg';
const imgPFWallet1        = '/product-icon-personal-wallet1.svg';
const imgPFWallet2        = '/product-icon-personal-wallet2.svg';

const marqueeLogos = [
  '/logos/alinma.png', '/logos/alyusr.png', '/logos/anb.png', '/logos/asoul.png',
  '/logos/badaya.png', '/logos/kuwara.png', '/logos/nayifat.png', '/logos/rasheed.png',
  '/logos/subafc.png', '/logos/taajeer.png', '/logos/tamweel-aloula.png', '/logos/wataniya.png',
];

function PersonalFinanceIcon() {
  return (
    <div className="overflow-clip relative mb-[-6px]" style={{ width: '150.125px', height: '150.125px' }}>
      <div className="absolute" style={{ left: '0.16px', top: '1.83px' }}>
        <div className="absolute flex items-center justify-center" style={{ left: '2.45px', top: '15.87px', width: '141.8px', height: '122.746px' }}>
          <div style={{ transform: 'rotate(59.97deg) skewX(-0.06deg)', flexShrink: 0 }}>
            <div style={{ height: '122.665px', width: '71.004px', position: 'relative' }}>
              <img alt="" src={imgPFCard1} className="absolute block inset-0 max-w-none size-full" />
            </div>
          </div>
        </div>
        <div className="absolute" style={{ left: '4.33px', top: '9.94px', width: '135.17px', height: '100.249px' }}>
          <img alt="" src={imgPFUnion} className="block max-w-none size-full" />
        </div>
        <div className="absolute" style={{ left: '4.33px', top: '18.34px', width: '67.556px', height: '86.033px' }}>
          <img alt="" src={imgPFMask} className="absolute block inset-0 max-w-none size-full" />
        </div>
        <div className="absolute flex items-center justify-center" style={{ left: '1.67px', top: '5px', width: '144.524px', height: '125.104px' }}>
          <div style={{ transform: 'rotate(59.97deg) skewX(-0.06deg)', flexShrink: 0 }}>
            <div style={{ height: '125.021px', width: '72.368px', position: 'relative' }}>
              <img alt="" src={imgPFCard2} className="absolute block inset-0 max-w-none size-full" />
            </div>
          </div>
        </div>
        <div className="absolute" style={{ left: '1.67px', top: '27.34px', width: '98.448px', height: '47.636px' }}>
          <img alt="" src={imgPFVector} className="block max-w-none size-full" />
        </div>
        <div className="absolute flex items-center justify-center" style={{ left: '72.01px', top: '31.34px', width: '22.359px', height: '19.571px' }}>
          <div style={{ transform: 'rotate(-20.75deg)' }}>
            <img alt="" src={imgPFCoin1} style={{ width: '18.659px', height: '13.858px' }} />
          </div>
        </div>
        <div className="absolute flex items-center justify-center" style={{ left: '42.74px', top: '1.05px', width: '23.056px', height: '21.224px' }}>
          <div style={{ transform: 'rotate(29.35deg)' }}>
            <img alt="" src={imgPFCoin2} style={{ width: '18.659px', height: '13.856px' }} />
          </div>
        </div>
        <div className="absolute flex items-center justify-center" style={{ left: '18.67px', top: '37.01px', width: '22.688px', height: '20.26px' }}>
          <div style={{ transform: 'rotate(24.04deg)' }}>
            <img alt="" src={imgPFCoin3} style={{ width: '18.66px', height: '13.859px' }} />
          </div>
        </div>
        <div className="absolute flex items-center justify-center" style={{ left: '0.09px', top: '19.65px', width: '22.853px', height: '20.653px' }}>
          <div style={{ transform: 'rotate(-26.1deg)' }}>
            <img alt="" src={imgPFCoin4} style={{ width: '18.66px', height: '13.858px' }} />
          </div>
        </div>
        <div className="absolute" style={{ left: '7.33px', top: '9.67px', width: '63.785px', height: '44.909px' }}>
          <img alt="" src={imgPFWallet1} className="block max-w-none size-full" />
        </div>
        <div className="absolute" style={{ left: '34.1px', top: '12.29px', width: '80.299px', height: '81.482px' }}>
          <img alt="" src={imgPFWallet2} className="absolute block inset-0 max-w-none size-full" />
        </div>
      </div>
    </div>
  );
}

const t = {
  en: {
    heroLabel: 'ABOUT TAMAWAL®',
    heroTitle: 'Your financial life is better with Tamawal®',
    heroDesc: 'Tamawal® is a Digital Financing Broker (DFB) that works as a marketplace for personalised loans to provide customers with instantly approved tailor-made financing products from regulated financial institutions in Saudi Arabia.',
    weAreTitle: 'We are Tamawal®',
    weAreP1: 'Tamawal® is a Digital Financing Broker (DFB) that works as a marketplace for personalised loans to provide customers with instantly approved tailor-made financing products from regulated financial institutions in Saudi Arabia. Tamawal® extends its services to provide a variety of financing products to serve retail and corporate clients that match their needs, financials, and credit profiles to save the time and effort of all customers.',
    weAreP2: 'Instead of going to each and every financial institution to find better deals, you can visit one platform (Tamawal®) to explore all products that are available for you that match your needs and credit scores to save the time and effort.',
    weAreP3: 'Tamawal® aims to promote the convenient financial culture and reducing clients efforts by bringing the financing brokerage services digitally at their hands which saves a lot of their time and efforts.',
    productsTitle: 'Our Products',
    productsSubtitle: 'Tamawal® provides a variety of fully customized financing solutions that match your needs.',
    productsCategoriesLabel: 'PRODUCT CATEGORIES',
    productsBrandDesc: 'Tamawal® is a marketplace for loans that serves as an aggregator for financing products (Digital Financing Brokerage) catering to retail and SME customers.',
    products: [
      { title: 'Car Finance', icon: imgProductCar },
      { title: 'Credit Card Finance', icon: imgProductCard },
      { title: 'Real Estate Finance', icon: imgProductRE },
    ],
    partnersTitle: 'Our Dear Partners',
    partnersCta: 'Become a part of the biggest Digital Financing Broker platform in the Kingdom.',
    partnersBtn: 'Become a partner',
    valuesLabel: 'TAMAWAL® VALUES',
    valuesTitle: 'Why should you join & use Tamawal®?',
    values: [
      {
        label: 'INTEGRATED',
        title: 'Integrated with so many financial institutions and data providers',
        desc1: 'One of the key features that sets us apart is our seamless integration with a diverse financial institutions and data providers. This allows us to offer a wide range of financial services and products to our customers using the latest fintech innovations.',
        desc2: 'By working with a wide range of partners, we are able to provide our clients access to the best possible options for their financial needs.',
        img: imgValueIntegrated,
        imgRight: true,
      },
      {
        label: 'RELIABLE WITH HIGH PERFORMANCE & SECURITY',
        title: 'Using latest financial technologies to provide high performance & secure services',
        desc1: 'We constantly invest in the latest technologies to ensure that our systems and processes are always up-to-date and running at optimal levels.',
        desc2: 'This includes using advanced algorithms and data analytics to assess creditworthiness, implementing top-of-the-line encryption and security protocols to protect personal and financial information, and utilizing cutting-edge tools and platforms to streamline and automate key processes.',
        img: imgValueReliable,
        imgRight: false,
      },
      {
        label: 'EASY TO USE',
        title: 'Human-Centered Design to seamlessly maximize the best financing services journey',
        desc1: 'Every aspect of financing process, from the initial consultation to the final disbursement, has been crafted with the needs and preferences of our clients in mind.',
        desc2: 'We understand that every individual has unique financial goals and concerns, and we strive to tailor our services to meet those specific needs. Our team of experts work closely with each client to ensure that the financing process is seamless and efficient, and that all their needs are met.',
        img: imgValueEasy,
        imgRight: true,
      },
    ],
    ctaTitle1: 'We prepare something big,',
    ctaTitle2: 'Sign up now and we will notify you',
    ctaTitle3: "when we're ready!",
    ctaBtn: 'Join now',
  },
  ar: {
    heroLabel: 'عن تموّل®',
    heroTitle: 'حياتك المالية أفضل مع تموّل®',
    heroDesc: 'تموّل® هو وسيط تمويل رقمي (DFB) يعمل كسوق للقروض الشخصية لتزويد العملاء بمنتجات تمويل مخصصة معتمدة فوريًا من مؤسسات مالية منظّمة في المملكة العربية السعودية.',
    weAreTitle: 'نحن تموّل®',
    weAreP1: 'تموّل® هو وسيط تمويل رقمي (DFB) يعمل كسوق للقروض الشخصية لتزويد العملاء بمنتجات تمويل مخصصة معتمدة فوريًا من مؤسسات مالية منظّمة في المملكة العربية السعودية.',
    weAreP2: 'بدلًا من الذهاب إلى كل مؤسسة مالية بحثًا عن أفضل العروض، يمكنك زيارة منصة واحدة (تموّل®) لاستكشاف جميع المنتجات المتاحة التي تتناسب مع احتياجاتك.',
    weAreP3: 'تهدف تموّل® إلى تعزيز الثقافة المالية الملائمة وتقليل جهود العملاء من خلال تقديم خدمات الوساطة التمويلية رقميًا.',
    productsTitle: 'منتجاتنا',
    productsSubtitle: 'تقدّم تموّل® مجموعة متنوعة من الحلول التمويلية المخصصة التي تلبي احتياجاتك.',
    productsCategoriesLabel: 'فئات المنتجات',
    productsBrandDesc: 'تموّل® سوق للقروض يعمل كمجمّع لمنتجات التمويل (وساطة التمويل الرقمية) لخدمة عملاء التجزئة والمؤسسات الصغيرة والمتوسطة.',
    products: [
      { title: 'تمويل السيارات', icon: imgProductCar },
      { title: 'تمويل بطاقة الائتمان', icon: imgProductCard },
      { title: 'التمويل العقاري', icon: imgProductRE },
    ],
    partnersTitle: 'شركاؤنا الأعزاء',
    partnersCta: 'كن جزءًا من أكبر منصة وساطة تمويل رقمية في المملكة.',
    partnersBtn: 'كن شريكًا',
    valuesLabel: 'قيم تموّل®',
    valuesTitle: 'لماذا يجب أن تنضم وتستخدم تموّل®؟',
    values: [
      {
        label: 'متكاملة',
        title: 'متكاملة مع العديد من المؤسسات المالية ومزودي البيانات',
        desc1: 'واحدة من أبرز مميزاتنا هي تكاملنا السلس مع مؤسسات مالية ومزودي بيانات متنوعين، مما يتيح لنا تقديم طيف واسع من الخدمات والمنتجات المالية.',
        desc2: 'من خلال العمل مع مجموعة واسعة من الشركاء، نتمكن من توفير أفضل الخيارات الممكنة للاحتياجات المالية لعملائنا.',
        img: imgValueIntegrated,
        imgRight: true,
      },
      {
        label: 'موثوقة بأداء عالٍ وأمان',
        title: 'استخدام أحدث التقنيات المالية لتوفير خدمات بأداء عالٍ وآمنة',
        desc1: 'نستثمر باستمرار في أحدث التقنيات لضمان أن أنظمتنا وعملياتنا تعمل دائمًا بمستويات مثلى.',
        desc2: 'يشمل ذلك استخدام خوارزميات متقدمة وتحليلات البيانات لتقييم الجدارة الائتمانية، وتطبيق بروتوكولات تشفير وأمان متطورة.',
        img: imgValueReliable,
        imgRight: false,
      },
      {
        label: 'سهل الاستخدام',
        title: 'تصميم محوره الإنسان لتحقيق أفضل رحلة لخدمات التمويل',
        desc1: 'تم تصميم كل جانب من جوانب عملية التمويل، من الاستشارة الأولية حتى الصرف النهائي، مع مراعاة احتياجات وتفضيلات عملائنا.',
        desc2: 'ندرك أن لكل فرد أهدافًا ومخاوف مالية فريدة، ونسعى إلى تخصيص خدماتنا لتلبية تلك الاحتياجات الخاصة.',
        img: imgValueEasy,
        imgRight: true,
      },
    ],
    ctaTitle1: 'نحن نستعد لشيء كبير،',
    ctaTitle2: 'سجّل الآن وسنُعلمك',
    ctaTitle3: 'عندما نكون مستعدين!',
    ctaBtn: 'انضم الآن',
  },
};

export default function AboutUs({ lang }: { lang: Lang }) {
  const isRtl = lang === 'ar';
  const c = t[lang];

  return (
    <div className="min-h-screen bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <WebNavbar lang={lang} dark />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-white flex flex-col items-center text-center gap-[18px] pb-[32px] pt-[16px] px-[72px]">
        <p className="text-[#525252] text-[16px] leading-[1.72] tracking-[3.84px]">{c.heroLabel}</p>
        <div className="flex flex-col gap-[12px] items-center">
          <p className="text-[#141414] text-[32px] lg:text-[48px] font-semibold leading-[1.25]">{c.heroTitle}</p>
          <p className="text-[#525252] text-[16px] leading-[1.72] max-w-[715px]">{c.heroDesc}</p>
        </div>
      </section>

      {/* ── Banner Image ──────────────────────────────────────── */}
      <section className="relative flex flex-col items-center pb-[12px] pt-[32px] px-[75px]">
        <div className="relative w-full max-w-[1290px] rounded-[12px] overflow-hidden" style={{ height: '617px' }}>
          <img src={imgHeroBanner} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#ffdd33] border-2 border-white shadow-[0px_8px_8px_rgba(0,99,245,0.08)] flex items-center justify-center p-[24px] rounded-[48px]">
          <div className="flex items-center justify-center size-[24px]">
            <div style={{ transform: 'rotate(90deg)' }}>
              <img alt="" src={imgArrowDown} className="size-[24px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner Logos Marquee ─────────────────────────────── */}
      <section className="relative overflow-hidden h-[133px] flex items-center">
        <div className="flex items-center gap-[64px]" style={{ animation: 'marquee 30s linear infinite', whiteSpace: 'nowrap' }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-[64px] shrink-0">
              {marqueeLogos.map((src, j) => (
                <div key={j} className="h-[37px] flex items-center shrink-0">
                  <img src={src} alt="" className="h-full w-auto max-w-[128px] object-contain" />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-[120px] bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[120px] bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </section>

      {/* ── We Are Tamawal ────────────────────────────────────── */}
      <section className="flex gap-[30px] items-center justify-center pb-[112px] pt-[86px] px-[75px]">
        {/* Left: photo + mockup UI */}
        <div className="flex flex-col gap-[24px] items-start py-[14px] shrink-0 w-[630px]">
          {/* Photo */}
          <div className="overflow-hidden rounded-[13px] shrink-0" style={{ width: '577px', height: '311px' }}>
            <img alt="" src={imgWeArePhoto} className="w-full h-full object-cover" />
          </div>
          {/* Mockup cards */}
          <div className="relative shrink-0" style={{ width: '576px', height: '460px' }}>
            {/* Compare offers card */}
            <div
              className="absolute rounded-[11.445px] flex flex-col gap-[3.815px] pb-[18.26px] pl-[12.44px] pr-[22.89px] pt-[13.44px]"
              style={{
                left: 0, top: '175px',
                width: '383.395px', height: '247.967px',
                backgroundImage: 'linear-gradient(142.386deg, rgb(255,255,255) 27.183%, rgba(255,255,255,0) 100%)',
              }}
            >
              <div className="flex items-start px-[11.445px] py-[9.537px] w-full">
                <p className="flex-1 text-[#344054] text-[17.167px] font-semibold tracking-[0.1431px]">Compare offers</p>
              </div>
              <div className="flex flex-col gap-[11.445px] items-start w-full">
                {[
                  { logo: imgMockupLogo1, amount: 'SR 5,300', saving: 'Saving SR 42.05', check: imgMockupCheck1, result: 'SR 194.92' },
                  { logo: imgMockupLogo2, amount: 'SR 5,200', saving: 'Saving SR 43.06', check: imgMockupCheck2, result: 'SR 186.35' },
                  { logo: imgMockupLogo3, amount: 'SR 5,250', saving: 'Saving SR 45.25', check: imgMockupCheck3, result: 'SR 178.27' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center w-full">
                    <div className="flex flex-1 gap-[7.63px] items-start min-w-0">
                      <div className="bg-white flex flex-col items-start p-[11.445px] rounded-[7.63px] shrink-0">
                        <div style={{ height: '28.612px', width: '95.372px', position: 'relative' }}>
                          <img alt="" src={row.logo} className="h-full w-full object-contain" />
                        </div>
                      </div>
                      <div className="flex flex-col h-[51.501px] justify-center leading-[1.5] text-[#667085] tracking-[0.1431px] whitespace-nowrap">
                        <p className="text-[15.26px] font-bold">{row.amount}</p>
                        <p className="text-[12.398px]">{row.saving}</p>
                      </div>
                    </div>
                    <div className="flex gap-[7.63px] items-center shrink-0">
                      <div className="size-[22.889px]">
                        <img alt="" src={row.check} className="block size-full" />
                      </div>
                      <p className="text-[#101828] text-[15.26px] font-semibold whitespace-nowrap">{row.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product card */}
            <div
              className="absolute bg-white rounded-[12px] flex flex-col shadow-[0px_1.907px_5.722px_rgba(223,224,231,0.5)]"
              style={{ left: '218px', top: 0, width: '311.866px', height: '227.939px' }}
            >
              <div className="flex gap-[11.445px] items-center pl-[7.63px] pr-[11.445px] py-[3.815px] w-full">
                <div className="bg-white flex flex-col items-start px-[9.537px] py-[13.352px] rounded-[12px] shrink-0">
                  <img alt="" src={imgMockupLogo3} style={{ height: '28.612px', width: '95.372px', objectFit: 'contain' }} />
                </div>
                <div className="flex flex-1 flex-col gap-[1.907px] items-end justify-center pr-[3.815px] whitespace-nowrap">
                  <p className="text-[#101828] text-[16.37px] font-semibold leading-[1.5]">1.75%</p>
                  <p className="text-[#667085] text-[11.82px] leading-normal">Up to 5.66% *</p>
                </div>
              </div>
              <div className="relative h-0 w-full shrink-0">
                <div className="absolute inset-[-0.95px_0_0_0]">
                  <img alt="" src={imgMockupSep} className="block max-w-none size-full" />
                </div>
              </div>
              <div className="flex gap-[11.445px] items-center pb-[11.445px] pl-[15.26px] pr-[11.445px] pt-[9.537px] w-full">
                <div className="flex flex-1 flex-col gap-[1.907px] items-start justify-center">
                  <p className="text-[#98a2b3] text-[11.82px] leading-normal">Monthly installment</p>
                  <div className="flex gap-[7.63px] items-baseline leading-[1.5] whitespace-nowrap">
                    <p className="text-[#667085] text-[14.55px]">from</p>
                    <p className="text-[#101828] text-[16.37px] font-semibold">SR 178,27</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[3.815px] items-end justify-center">
                  <p className="text-[#98a2b3] text-[11.82px] leading-normal whitespace-nowrap">You saved</p>
                  <div className="flex gap-[3.815px] h-[25.75px] items-center">
                    <p className="text-[#667085] text-[14.55px] leading-[1.5] whitespace-nowrap">SR</p>
                    <p className="text-[#101828] text-[14.55px] font-semibold leading-[1.5] whitespace-nowrap">45.25</p>
                    <div className="bg-[#039855] flex items-start px-[2.861px] rounded-[4px]">
                      <p className="text-white text-[11.82px] leading-[1.5] whitespace-nowrap">-13%</p>
                    </div>
                    <img alt="" src={imgMockupHeart} className="block size-[19.074px]" />
                  </div>
                </div>
              </div>
              <div className="flex gap-[11.445px] items-center pb-[9.537px] pl-[7.63px] pr-[11.445px] pt-[3.815px] w-full">
                <div className="flex flex-1 items-center">
                  <div className="flex flex-1 h-full items-center px-[7.63px]">
                    <img alt="" src={imgMockupStars} style={{ height: '13.977px', width: '87.742px' }} />
                    <p className="text-[#344054] text-[14.55px] font-semibold leading-[16.372px] ml-[5.722px] whitespace-nowrap">5.0</p>
                  </div>
                </div>
                <div className="bg-[#0063f5] flex flex-1 flex-col items-center justify-center px-[11.445px] py-[9.537px] rounded-[10px]">
                  <p className="text-white text-[11.82px] font-semibold leading-[21.83px] text-center whitespace-nowrap">Tamawal</p>
                </div>
              </div>
              <div className="relative h-0 w-full shrink-0">
                <div className="absolute inset-[-0.95px_0_0_0]">
                  <img alt="" src={imgMockupSep} className="block max-w-none size-full" />
                </div>
              </div>
              <div className="flex gap-[11.445px] items-center pb-[11.445px] pl-[15.26px] pr-[11.445px] pt-[9.537px] w-full">
                <div className="flex flex-1 items-center px-[3.815px]">
                  <div className="flex gap-[7.63px] items-center">
                    <div className="bg-white border border-[#d0d5dd] rounded-[4px] size-[15.26px]" />
                    <p className="text-[#475467] text-[11.82px] leading-[18.192px] whitespace-nowrap">Add to compare</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-[3.815px] items-center justify-end">
                  <p className="text-[#98a2b3] text-[11.82px] leading-normal whitespace-nowrap">Add to favorite</p>
                  <img alt="" src={imgMockupHeart} className="size-[22.889px]" />
                </div>
              </div>
            </div>

            {/* Dark notification bar */}
            <div
              className="absolute bg-[#1d2939] rounded-[7.63px] flex flex-col shadow-[0px_1.907px_5.722px_rgba(223,224,231,0.75)]"
              style={{ left: '238.43px', top: '408.75px', width: '338.57px', height: '44.825px' }}
            >
              <div className="flex gap-[11.445px] items-center pl-[11.445px] pr-[15.26px] py-[9.537px]">
                <img alt="" src={imgMockupTick} className="size-[22.889px]" />
                <p className="text-white text-[17.167px] tracking-[0.1431px] whitespace-nowrap">Great! This is the best offer for you.</p>
              </div>
            </div>

            {/* Floating bank icon card 1 */}
            <div
              className="absolute flex items-center justify-center"
              style={{ left: '54px', top: '32px', width: '111.559px', height: '111.559px' }}
            >
              <div style={{ transform: 'rotate(-10.26deg)' }}>
                <div className="bg-white border border-[#d0d5dd] flex items-center justify-center p-[24px] rounded-[24px]">
                  <div className="overflow-hidden size-[48px]">
                    <img alt="" src={imgMockupBankIcon1} className="block size-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating bank icon card 2 */}
            <div
              className="absolute flex items-center justify-center"
              style={{ left: '426.17px', top: '271.31px', width: '58.788px', height: '58.788px' }}
            >
              <div style={{ transform: 'rotate(165deg)' }}>
                <div className="bg-white border border-[#d0d5dd] flex items-center justify-center p-[18px] rounded-[16px] size-[48px]">
                  <div className="overflow-hidden size-[24px]">
                    <img alt="" src={imgMockupBankIcon2} className="block size-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="flex flex-col gap-[28px] items-start shrink-0 w-[630px]">
          <p className="text-[#101828] text-[48px] font-semibold leading-[1.35] tracking-[0.15px]">{c.weAreTitle}</p>
          <p className="text-[#525252] text-[18px] leading-[1.5] tracking-[0.15px]">{c.weAreP1}</p>
          <p className="text-[#525252] text-[18px] leading-[1.5] tracking-[0.15px]">{c.weAreP2}</p>
          <p className="text-[#525252] text-[18px] leading-[1.5] tracking-[0.15px]">{c.weAreP3}</p>
        </div>
      </section>

      {/* ── Our Products ──────────────────────────────────────── */}
      <section className="bg-[#171717] flex flex-col gap-[56px] items-start px-[75px] py-[94px]">
        {/* Title row */}
        <div className="flex gap-[30px] items-end tracking-[0.15px] w-full">
          <p className="text-white text-[48px] leading-[1.35] w-[410px] shrink-0">{c.productsTitle}</p>
          <p className="text-[#aaa] text-[18px] leading-[1.5] flex-1">{c.productsSubtitle}</p>
        </div>
        {/* Divider */}
        <div className="relative h-0 w-full shrink-0">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" src={imgProductsDivider} className="block max-w-none size-full" />
          </div>
        </div>
        {/* Content */}
        <div className="flex gap-[30px] items-start w-full">
          {/* Left: Tamawal brand */}
          <div className="flex flex-col gap-[48px] items-start justify-center shrink-0 w-[630px]">
            <div style={{ height: '196px', width: '520px', position: 'relative' }}>
              <div className="absolute" style={{ left: 0, top: '-0.65px', width: '409.745px', height: '196.216px' }}>
                <div className="absolute" style={{ left: 0, top: '34.62px', width: '436.676px', height: '127.786px' }}>
                  <img alt="" src={imgTamawalLogo} className="absolute block inset-0 max-w-none size-full" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] items-start w-full">
              <p className="text-white text-[40px] leading-[1.35] tracking-[0.15px]">Tamawal®</p>
              <p className="text-[#aaa] text-[18px] leading-[1.5]">{c.productsBrandDesc}</p>
            </div>
          </div>
          {/* Right: product categories */}
          <div className="flex flex-1 flex-col gap-[30px] items-start min-w-0">
            <p className="text-[#aaa] text-[16px] leading-[1.5] tracking-[3.84px]">{c.productsCategoriesLabel}</p>
            <div className="flex gap-[80px] items-start w-full">
              {c.products.slice(0, 2).map((p) => (
                <div key={p.title} className="flex flex-col items-center shrink-0 w-[190px]">
                  <div className="overflow-hidden mb-[-6px]" style={{ width: '150.125px', height: '150.125px' }}>
                    <img alt="" src={p.icon} className="absolute block inset-0 max-w-none size-full" style={{ position: 'relative', width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <p className="text-white text-[24px] leading-[1.35] text-center tracking-[0.15px] whitespace-nowrap">{p.title}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-[80px] items-start w-full">
              {c.products[2] && (
                <div className="flex flex-col items-center shrink-0 w-[190px]">
                  <div className="overflow-hidden mb-[-6px]" style={{ width: '150.125px', height: '150.125px' }}>
                    <img alt="" src={c.products[2].icon} className="w-full h-full object-contain" />
                  </div>
                  <p className="text-white text-[24px] leading-[1.35] text-center tracking-[0.15px] whitespace-nowrap">{c.products[2].title}</p>
                </div>
              )}
              <div className="flex flex-col items-center shrink-0 w-[190px]">
                <PersonalFinanceIcon />
                <p className="text-white text-[24px] leading-[1.35] text-center tracking-[0.15px] whitespace-nowrap">
                  {lang === 'ar' ? 'تمويل شخصي' : 'Personal Finance'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Dear Partners ─────────────────────────────────── */}
      <section className="bg-[#f9f8fd] flex flex-col gap-[48px] items-center py-[94px]">
        <p className="text-[#101828] text-[48px] leading-[1.35] text-center tracking-[0.15px]">{c.partnersTitle}</p>
        {/* 4 partner cards */}
        <div className="flex gap-[20px] items-center justify-center px-[75px] w-full">
          {/* Partner 1 */}
          <div className="relative rounded-[13.395px] border border-[#eaf0fa] shrink-0 overflow-hidden" style={{ width: '332.355px', height: '130.598px' }}>
            <div className="absolute mix-blend-multiply" style={{ left: '25.12px', top: '19.25px', width: '282.125px', height: '92.926px' }}>
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" src={imgPartner1} className="absolute max-w-none object-cover" style={{ height: '305.08%', left: 0, top: '-101.69%', width: '100%' }} />
              </div>
            </div>
          </div>
          {/* Partner 2 */}
          <div className="relative rounded-[13.395px] border border-[#eaf0fa] shrink-0 overflow-hidden" style={{ width: '334.03px', height: '130.598px' }}>
            <div className="absolute mix-blend-multiply" style={{ left: '66.14px', top: '15.07px', width: '201.757px', height: '101.297px' }}>
              <img alt="" src={imgPartner2} className="absolute inset-0 max-w-none object-cover size-full" />
            </div>
          </div>
          {/* Partner 3 */}
          <div className="relative rounded-[13.395px] border border-[#eaf0fa] shrink-0 overflow-hidden" style={{ width: '332.355px', height: '130.598px' }}>
            <div className="absolute mix-blend-multiply" style={{ left: '15.91px', top: '5.02px', width: '301.38px', height: '121.389px' }}>
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" src={imgPartner3} className="absolute max-w-none object-cover" style={{ height: '248.45%', left: 0, top: '-73.91%', width: '100%' }} />
              </div>
            </div>
          </div>
          {/* Partner 4 – Osoul */}
          <div className="relative rounded-[13.395px] border border-[#eaf0fa] shrink-0 overflow-hidden" style={{ width: '334.03px', height: '130.598px' }}>
            <div className="absolute mix-blend-multiply" style={{ left: '54.42px', top: '19.25px', width: '88.74px', height: '92.088px' }}>
              <img alt="" src={imgPartner4} className="absolute inset-0 max-w-none object-cover size-full" />
            </div>
            <p className="absolute text-[#2e5f32] text-[33.487px] font-bold leading-[1.5] tracking-[0.1256px] whitespace-nowrap" style={{ left: '161.57px', top: '30.98px' }}>Osoul</p>
            <p className="absolute text-[#5a815e] text-[15.069px] leading-[1.5] tracking-[0.1256px] whitespace-nowrap" style={{ left: '161.57px', top: '77.02px' }}>Modern Finance</p>
          </div>
        </div>
        {/* CTA */}
        <div className="flex flex-col gap-[24px] items-center">
          <p className="text-[#667085] text-[18px] leading-[1.5] tracking-[0.15px] whitespace-nowrap">{c.partnersCta}</p>
          <button className="border border-[rgba(0,0,0,0.16)] flex gap-[12px] items-center justify-center px-[28px] py-[16px] rounded-[50px]">
            <span className="text-[#667085] text-[16px] leading-[24px]">{c.partnersBtn}</span>
            <img alt="" src={imgPartnerArrow} className="size-[24px]" />
          </button>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────── */}
      <section className="flex flex-col gap-[120px] items-center px-[186px] py-[128px]">
        {/* Heading */}
        <div className="flex flex-col gap-[18px] items-center text-center w-full">
          <p className="text-[#525252] text-[16px] leading-[1.72] tracking-[3.84px]">{c.valuesLabel}</p>
          <p className="text-[#141414] text-[40px] leading-[1.25]">{c.valuesTitle}</p>
        </div>
        {/* Value rows */}
        {c.values.map((v, i) => (
          <div key={i} className={`flex gap-[64px] items-center w-full ${!v.imgRight ? 'flex-row-reverse' : ''}`}>
            <div className="flex flex-1 flex-row items-center self-stretch">
              <div className="flex flex-1 flex-col gap-[24px] h-full items-start justify-center">
                <p className="text-[#525252] text-[12px] leading-[1.72] w-full">{v.label}</p>
                <div className="flex flex-col gap-[12px] items-start w-full">
                  <p className="text-[#141414] text-[32px] leading-[1.25] w-full">{v.title}</p>
                  <div className="text-[#525252] text-[16px] w-full">
                    <p className="leading-[1.72] mb-0">{v.desc1}</p>
                    <p className="leading-[1.72]">{v.desc2}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[500px]">
              <img alt="" src={v.img} className="absolute inset-0 max-w-none object-cover size-full" />
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="flex flex-col items-center justify-center px-[75px] py-[48px]">
        <div className="bg-[#0063f5] flex flex-col items-center justify-center px-[128px] py-[110px] rounded-[24px] w-full">
          <div className="flex flex-col gap-[40px] items-center">
            <div className="flex flex-col items-center">
              <p className="text-white text-[32px] lg:text-[48px] font-bold leading-[1.25] text-center whitespace-pre-line">
                {`${c.ctaTitle1}\n${c.ctaTitle2}\n${c.ctaTitle3}`}
              </p>
            </div>
            <button className="bg-[#fcd424] shadow-[0px_8px_8px_rgba(252,212,36,0.08)] flex gap-[12px] items-center justify-center pl-[40px] pr-[32px] py-[18px] rounded-[48px]">
              <span className="text-[#141414] text-[16px] leading-normal whitespace-nowrap">{c.ctaBtn}</span>
              <img alt="" src={imgCtaArrow} className="size-[24px]" />
            </button>
          </div>
        </div>
      </section>

      <WebFooter lang={lang} />
    </div>
  );
}
