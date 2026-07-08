'use client';

import { useState } from 'react';
import WebNavbar from '../WebNavbar';
import WebFooter from '../WebFooter';

type Lang = 'ar' | 'en';

const imgArrowUpCircle   = '/arrow-up-circle.svg';
const imgArrowDownCircle = '/arrow-down-circle.svg';
const imgAppStore        = '/appstore.svg';
const imgPlayStore       = '/playstore.svg';

const t = {
  ar: {
    heroTitle: 'كن عميل تموّل®',
    heroDesc: 'في تموّل، ندرك أهمية العثور على القرض المناسب لعملائنا. كن مطمئناً، فنحن ملتزمون بتوفير أفضل خيارات القروض الممكنة والمصممة خصيصاً لتلبية احتياجاتك.',
    heroCta: 'جرّب الآن',
    stepsTitle: 'كيف يعمل تموّل؟',
    steps: [
      {
        number: '١',
        title: 'قدّم طلبك بأمان مع تموّل',
        desc: 'أدخل معلوماتك الأساسية مرة واحدة خلال خمس دقائق فقط. يتلقى شريكنا المعلومات الضرورية فحسب، ولا تُشارَك بياناتك مع الجهة الممولة إلا بعد اختيارك للعرض المناسب.',
      },
      {
        number: '٢',
        title: 'قارن عروض التمويل',
        desc: 'اطّلع على جميع العروض المناسبة بأسعار حقيقية وبدون هوامش مخفية أو رسوم إضافية. كل شيء شفاف بنسبة 100% ومجاني بالكامل.',
      },
      {
        number: '٣',
        title: 'وخذ فلوسك',
        desc: 'بعد التقييم الائتماني وتوقيع العقد، تُودَع الأموال في حسابك فوراً.',
      },
    ],
    eligibilityTitle: 'معايير الأهلية',
    eligibilityDesc: 'سيتم دراسة معلوماتك ووضعك الائتماني لتحديد أهليتك وفقاً للمعايير المحددة من قِبل الجهات الممولة.',
    approvalTitle: 'عملية الموافقة',
    approvalDesc: 'يتم تقييم طلبات المؤهلين وتحويلها إلى الجهة الممولة المناسبة بعد إتمام عملية التحقق.',
    fundingTitle: 'استلام الأموال',
    fundingDesc: 'بعد الموافقة على طلبك وتوقيع العقد، تُحوَّل الأموال إلى حسابك البنكي مباشرةً.',
    waitlistTitle: 'قاعدين نجهز شيء كبير',
    waitlistDesc: 'سجّل الآن في قائمة الانتظار وشارك رابطك الخاص مع أصدقائك عشان تكون في المقدمة.',
    waitlistCta: 'حمّل التطبيق الآن',
    faqTitle: 'الأسئلة الشائعة',
    faq: [
      {
        q: 'ماذا تقدم تموّل للعملاء؟',
        a: 'تموّل® وسيط تمويل رقمي يوجّه العملاء إلى أفضل عروض التمويل مع إمكانية الحصول على موافقة فورية. تقدم حالياً التمويل الشخصي وتتوسع لتشمل بطاقات الائتمان وتمويل السيارات والتمويل العقاري.',
      },
      {
        q: 'هل يمكنك تقديم نظرة عامة على منتجات تموّل؟',
        a: 'تشمل منتجات تموّل: التمويل الشخصي وبطاقات الائتمان وتمويل السيارات والتمويل العقاري، مع ضمان توافق جميع المنتجات مع أحكام الشريعة الإسلامية.',
      },
      {
        q: 'كيف تساعد تموّل العملاء في الحصول على التمويل؟',
        a: 'تعمل تموّل بوصفها وسيطاً مالياً رقمياً يربط العملاء بالمؤسسات المالية المرخصة لتيسير الحصول على التمويل بطريقة ميسّرة وأقل تكلفة.',
      },
      {
        q: 'هل نموذج التمويل الخاص بتموّل متوافق مع الشريعة الإسلامية؟',
        a: 'نعم، يلتزم نموذج تمويل تموّل بأحكام الشريعة الإسلامية لضمان توافق جميع خدماتها مع المبادئ الإسلامية.',
      },
    ],
  },
  en: {
    heroTitle: 'Be a Tamawal® Customer',
    heroDesc: 'At Tamawal, we understand the importance of finding the right loan for our customers. Rest assured, we are committed to providing the best possible loan options designed specifically to meet your needs.',
    heroCta: 'Try Now',
    stepsTitle: 'How Tamawal Works',
    steps: [
      {
        number: '1',
        title: 'Submit Your Application Securely',
        desc: 'Enter your basic information once in just five minutes. Our partner receives only the necessary information, and your data is not shared with the financier until you select an offer.',
      },
      {
        number: '2',
        title: 'Compare Financing Offers',
        desc: 'View all suitable offers with real prices — no hidden margins or extra fees. Everything is 100% transparent and completely free.',
      },
      {
        number: '3',
        title: 'Get Your Funds',
        desc: 'After the credit assessment and contract signing, funds are deposited into your account immediately.',
      },
    ],
    eligibilityTitle: 'Eligibility Criteria',
    eligibilityDesc: 'Your information and credit standing will be evaluated to determine your eligibility according to the criteria established by financing entities.',
    approvalTitle: 'Approval Process',
    approvalDesc: 'Eligible applications are reviewed and submitted to the appropriate financing entity after completing the verification process.',
    fundingTitle: 'Receiving Your Funds',
    fundingDesc: 'Once your application is approved and the contract is signed, funds are transferred directly to your bank account.',
    waitlistTitle: "We're Preparing Something Big",
    waitlistDesc: 'Register now on the waitlist and share your unique link with friends to move up the queue.',
    waitlistCta: 'Download the App Now',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'What does Tamawal offer customers?',
        a: 'Tamawal® is a digital finance broker that directs customers to the best financing offers with the possibility of instant approval. It currently offers personal financing and is expanding to include credit cards, auto financing, and real estate financing.',
      },
      {
        q: "Can you provide an overview of Tamawal's products?",
        a: "Tamawal's product range includes personal loans, credit cards, car financing, and real estate financing, ensuring that all products are compliant with Islamic principles.",
      },
      {
        q: 'How does Tamawal help customers obtain financing?',
        a: 'Tamawal acts as a digital financial intermediary, connecting customers with licensed financial institutions to facilitate the process of obtaining financing in a convenient and cost-effective manner.',
      },
      {
        q: "Is Tamawal's financing model Sharia-compliant?",
        a: "Tamawal follows a financing model that is in accordance with Sharia law, ensuring that all its services are compliant with Islamic principles.",
      },
    ],
  },
};

export default function BeCustomer({ lang }: { lang: Lang }) {
  const isRtl = lang === 'ar';
  const c = t[lang];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <WebNavbar lang={lang} />

      {/* Hero */}
      <section className="bg-[#F9FAFB] py-20 px-6 border-b border-[#EAECF0]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-[#101828] text-[32px] md:text-[52px] font-bold leading-[1.15] mb-6">{c.heroTitle}</h1>
              <p className="text-[#475467] text-[16px] md:text-[18px] leading-[1.75] mb-8">{c.heroDesc}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#0063F5] text-white text-[15px] font-semibold px-6 py-3.5 rounded-full hover:bg-[#0052d0] transition-colors"
              >
                {c.heroCta}
              </a>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <img src="/assets/images/Assets/illustration-main-sa.svg" alt="" className="w-full max-w-[420px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[#101828] text-[28px] md:text-[36px] font-bold text-center mb-14">{c.stepsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.steps.map((step, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#0063F5] rounded-xl flex items-center justify-center">
                  <span className="text-white text-[20px] font-bold">{step.number}</span>
                </div>
                <h3 className="text-[#101828] text-[18px] font-bold">{step.title}</h3>
                <p className="text-[#475467] text-[14px] leading-[1.75]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + Approval + Funding */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: c.eligibilityTitle, desc: c.eligibilityDesc, color: 'border-[#0063F5]' },
            { title: c.approvalTitle, desc: c.approvalDesc, color: 'border-[#FFDD33]' },
            { title: c.fundingTitle, desc: c.fundingDesc, color: 'border-[#22c55e]' },
          ].map((item, i) => (
            <div key={i} className={`bg-white rounded-2xl p-7 border-t-4 ${item.color} shadow-sm`}>
              <h3 className="text-[#101828] text-[17px] font-bold mb-3">{item.title}</h3>
              <p className="text-[#475467] text-[14px] leading-[1.75]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist / Download */}
      <section className="py-20 px-6 bg-[#0063F5]">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-white text-[28px] md:text-[36px] font-bold mb-4">{c.waitlistTitle}</h2>
          <p className="text-[rgba(255,255,255,0.8)] text-[16px] mb-8">{c.waitlistDesc}</p>
          <p className="text-white text-[15px] font-semibold mb-5">{c.waitlistCta}</p>
          <div className="flex gap-3 justify-center">
            <a
              href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 bg-white/10 rounded-[8px] h-[48px] w-[148px] overflow-hidden hover:bg-white/20 transition-colors"
            >
              <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=sa.tamawal.capp"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 bg-white/10 rounded-[8px] h-[48px] w-[148px] overflow-hidden hover:bg-white/20 transition-colors"
            >
              <img src={imgPlayStore} alt="Google Play" className="w-full h-full object-contain" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[#101828] text-[28px] font-bold text-center mb-8">{c.faqTitle}</h2>
          <div className="divide-y divide-[#EAECF0]">
            {c.faq.map((item, idx) => (
              <div key={idx}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex gap-6 items-start py-7 w-full text-start cursor-pointer"
                >
                  <p className="flex-1 text-[#101828] text-[16px] font-semibold leading-snug">{item.q}</p>
                  <img
                    src={openFaq === idx ? imgArrowUpCircle : imgArrowDownCircle}
                    alt=""
                    className="size-6 shrink-0 mt-0.5"
                  />
                </button>
                {openFaq === idx && (
                  <div className="pb-7">
                    <p className="text-[#475467] text-[15px] leading-[1.75]">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WebFooter lang={lang} />
    </div>
  );
}
