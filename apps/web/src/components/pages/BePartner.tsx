'use client';

import { useState } from 'react';
import WebNavbar from '../WebNavbar';
import WebFooter from '../WebFooter';

type Lang = 'ar' | 'en';

const imgArrowUpCircle   = '/arrow-up-circle.svg';
const imgArrowDownCircle = '/arrow-down-circle.svg';

const t = {
  ar: {
    heroTitle: 'كن شريكًا في تموّل®',
    heroDesc: 'توفر تموّل للمقرضين ومقدمي الخدمات ميزة قوية. تعمل منصتنا على توصيلك بمجموعة أكبر من المقترضين المؤهلين، مما يؤدي إلى توسيع نطاق وصولك إلى السوق وزيادة حجم القروض وتحسين كفاءة العمليات في سوق الإقراض التنافسي.',
    heroCta: 'تواصل معنا',
    benefitsTitle: 'لماذا تشارك معنا؟',
    benefits: [
      {
        title: 'الوصول إلى المقترضين المؤهلين',
        desc: 'توفر منصتنا ربطاً بين المقرضين ومزودي الخدمة بمجموعة متنوعة من الأفراد الذين يبحثون عن القروض، مما يوسع نطاق وصولك وفرصك في نجاح الإقراض.',
      },
      {
        title: 'زيادة الرؤية وحجم القروض',
        desc: 'توفر منصتنا بوابة لتوسيع نطاقك، وتربط المقرضين ومزودي الخدمة مع جمهور أوسع من المقترضين.',
      },
      {
        title: 'الكفاءة والتطوير التلقائي',
        desc: 'تم تصميم منصتنا لتبسيط عملية التمويل من تقديم الطلب إلى التوزيع، مع سير عمل آلية توفر الوقت والموارد.',
      },
      {
        title: 'الأمان وحماية البيانات',
        desc: 'نعتمد تدابير قوية لحماية معلوماتك الحساسة وضمان سريتها وأمانها، والتزامنا بأعلى معايير حماية البيانات.',
      },
    ],
    howTitle: 'كيف يعمل النظام؟',
    steps: [
      { title: 'عملية الاندماج', desc: 'نقوم بدمج منصتك مع نظامنا بسهولة وفي وقت قصير لضمان انسيابية العمليات.' },
      { title: 'استلام الطلبات', desc: 'تستقبل طلبات التمويل من عملاء مؤهلين تم تدقيق بياناتهم مسبقاً.' },
      { title: 'اتخاذ القرارات', desc: 'تراجع الطلبات وتتخذ قراراتك بناءً على معاييرك الخاصة وسياسات الإقراض لديك.' },
    ],
    formTitle: 'تواصل معنا',
    formDesc: 'الأحد – الخميس، 9:00 ص – 5:00 م',
    labelName: 'الاسم',
    labelEmail: 'البريد الإلكتروني',
    labelPhone: 'رقم الجوال',
    labelMessage: 'الرسالة',
    placeholderName: 'أدخل اسمك',
    placeholderEmail: 'أدخل بريدك الإلكتروني',
    placeholderMessage: 'أدخل رسالتك (حتى 1000 حرف)',
    sendBtn: 'إرسال الطلب',
    faqTitle: 'الأسئلة الشائعة',
    faq: [
      {
        q: 'ماذا تقدم تموّل؟',
        a: 'تموّل® وسيط تمويل رقمي يوجّه العملاء إلى أفضل العروض مع الحصول على موافقة فورية. تقدم حالياً التمويل الشخصي وتتوسع لتشمل بطاقات الائتمان وتمويل السيارات والتمويل العقاري قريباً.',
      },
      {
        q: 'هل يمكنك تقديم نظرة عامة على مجموعة منتجات تموّل؟',
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
    heroTitle: "Be a Tamawal®'s Partner",
    heroDesc: "Unlock new opportunities in lending with Tamawal! Our platform connects you to a broader network of qualified borrowers, giving you a competitive edge. Boost your loan volumes and streamline your lending process with our efficient platform. Elevate your operations, explore new avenues, and excel in the competitive lending market with Tamawal!",
    heroCta: 'Contact Us',
    benefitsTitle: 'Why Partner With Us?',
    benefits: [
      {
        title: 'Access to Qualified Borrowers',
        desc: 'Our platform connects lenders and providers to a diverse range of individuals seeking loans, expanding your potential reach and opportunities for lending success.',
      },
      {
        title: 'Increased Visibility and Volume of Loans',
        desc: 'Our platform offers a gateway to expanding your reach, connecting lenders and providers with a larger audience of borrowers.',
      },
      {
        title: 'Efficiency & Automation',
        desc: 'Our platform is designed to streamline the lending process, from application to disbursement. Automated workflows save time and resources, allowing you to focus on growing your lending business.',
      },
      {
        title: 'Security & Data Protection',
        desc: 'We employ robust measures to safeguard your sensitive information, ensuring it remains secure and confidential. Trust in our platform to adhere to the highest standards of data protection.',
      },
    ],
    howTitle: 'How It Works',
    steps: [
      { title: 'Integration Process', desc: 'We integrate your platform with our system seamlessly and quickly to ensure smooth operations.' },
      { title: 'Receiving Applications', desc: 'Receive financing applications from pre-screened qualified customers ready for review.' },
      { title: 'Decision Making', desc: 'Review applications and make decisions based on your own criteria and lending policies.' },
    ],
    formTitle: 'Contact Us',
    formDesc: 'Sunday–Thursday, 9:00 AM – 5:00 PM',
    labelName: 'Name',
    labelEmail: 'Email',
    labelPhone: 'Mobile Number',
    labelMessage: 'Message',
    placeholderName: 'Enter your name',
    placeholderEmail: 'Enter your email',
    placeholderMessage: 'Enter your message (up to 1,000 characters)',
    sendBtn: 'Send Request',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'What types of financial services does Tamawal offer?',
        a: "Tamawal® is a one-stop shop for getting financial help. They currently offer personal loans and are expanding to include credit cards, car financing, and real estate financing soon.",
      },
      {
        q: "Can you provide an overview of Tamawal's product range?",
        a: "Tamawal's product range includes personal loans, credit cards, car financing, and real estate financing, ensuring that products are compliant with Islamic principles.",
      },
      {
        q: 'How does Tamawal assist customers in obtaining financing?',
        a: 'Tamawal acts as a digital financial intermediary, connecting customers with licensed financial institutions to facilitate the process of obtaining financing in a convenient and cost-effective manner.',
      },
      {
        q: "Is Tamawal's financing model compliant with Sharia law?",
        a: "Tamawal follows a financing model that is in accordance with Sharia law, ensuring that its services are compliant with Islamic principles.",
      },
    ],
  },
};

export default function BePartner({ lang }: { lang: Lang }) {
  const isRtl = lang === 'ar';
  const c = t[lang];
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  return (
    <div className="min-h-screen bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <WebNavbar lang={lang} dark />

      {/* Hero */}
      <section className="bg-[#0d0d0d] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-white text-[32px] md:text-[48px] font-bold leading-[1.2] mb-6">{c.heroTitle}</h1>
              <p className="text-[#98a2b3] text-[16px] leading-[1.75] mb-8">{c.heroDesc}</p>
              <a
                href="#partner-contact"
                className="inline-flex items-center gap-2 bg-[#0063F5] text-white text-[15px] font-semibold px-6 py-3.5 rounded-full hover:bg-[#0052d0] transition-colors"
              >
                {c.heroCta}
              </a>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <img src="/assets/images/Assets/illustration-main-sa.svg" alt="" className="w-full max-w-[400px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[#101828] text-[28px] md:text-[36px] font-bold text-center mb-12">{c.benefitsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.benefits.map((b, i) => (
              <div key={i} className="border border-[#EAECF0] rounded-2xl p-7 hover:border-[#0063F5] transition-colors">
                <div className="w-10 h-10 bg-[#EBF3FF] rounded-xl flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0063F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
                <h3 className="text-[#101828] text-[17px] font-bold mb-3">{b.title}</h3>
                <p className="text-[#475467] text-[14px] leading-[1.75]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[#101828] text-[28px] md:text-[36px] font-bold text-center mb-12">{c.howTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.steps.map((step, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 ${i === 2 ? 'bg-[#0063F5]' : 'bg-[#171717]'}`}
              >
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mb-5">
                  <span className="text-white text-[14px] font-bold">{i + 1}</span>
                </div>
                <h3 className="text-white text-[18px] font-bold mb-3">{step.title}</h3>
                <p className={`text-[14px] leading-[1.75] ${i === 2 ? 'text-[rgba(255,255,255,0.8)]' : 'text-[#98a2b3]'}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="partner-contact" className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-[#101828] text-[28px] font-bold mb-2">{c.formTitle}</h2>
              <p className="text-[#0063F5] text-[14px] font-medium mb-8">{c.formDesc}</p>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#344054] text-[14px] font-medium">{c.labelName} <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder={c.placeholderName}
                    className="border border-[#D0D5DD] rounded-lg px-4 py-3 text-[14px] text-[#101828] placeholder:text-[#98a2b3] focus:outline-none focus:border-[#0063F5]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#344054] text-[14px] font-medium">{c.labelEmail} <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder={c.placeholderEmail}
                    className="border border-[#D0D5DD] rounded-lg px-4 py-3 text-[14px] text-[#101828] placeholder:text-[#98a2b3] focus:outline-none focus:border-[#0063F5]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#344054] text-[14px] font-medium">{c.labelPhone} <span className="text-red-500">*</span></label>
                  <div className="flex border border-[#D0D5DD] rounded-lg overflow-hidden focus-within:border-[#0063F5]">
                    <div className="flex items-center px-4 bg-[#F9FAFB] border-e border-[#D0D5DD]">
                      <span className="text-[14px] text-[#344054] font-medium">+966</span>
                    </div>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      placeholder="5X XXX XXXX"
                      className="flex-1 px-4 py-3 text-[14px] placeholder:text-[#98a2b3] focus:outline-none bg-white"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#344054] text-[14px] font-medium">{c.labelMessage} <span className="text-red-500">*</span></label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder={c.placeholderMessage}
                    maxLength={1000}
                    rows={5}
                    className="border border-[#D0D5DD] rounded-lg px-4 py-3 text-[14px] placeholder:text-[#98a2b3] focus:outline-none focus:border-[#0063F5] resize-none"
                  />
                  <p className="text-[12px] text-[#98a2b3] text-end">{form.message.length}/1000</p>
                </div>
                <button className="bg-[#0063F5] text-white text-[15px] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#0052d0] transition-colors cursor-pointer self-start">
                  {c.sendBtn}
                </button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <img src="/assets/images/Assets/illustration-arab-man.svg" alt="" className="w-full max-w-[360px]" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
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
