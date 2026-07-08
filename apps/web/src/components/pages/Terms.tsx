'use client';

import { useState } from 'react';
import WebNavbar from '../WebNavbar';
import WebFooter from '../WebFooter';

type Lang = 'ar' | 'en';

const t = {
  ar: {
    pageTitle: 'شروط تموّل®',
    pageSubtitle: 'الأحكام والشروط',
    pageDesc: 'القواعد التي يوافق عليها المستخدمون عند استخدام خدمات تموّل®',
    companyInfo: 'شركة تموّل للوساطة الرقمية — شركة ذات مسؤولية محدودة، مسجلة برقم 1010716845، الرقم الوطني الموحد: 702339579، خاضعة لإشراف ورقابة البنك المركزي السعودي، رخصة رقم: 98/ن م/202504',
    preamble: 'تحكم هذه الشروط والأحكام استخدام تطبيق تموّل للوساطة التمويلية الرقمية وموقع تموّل الإلكتروني. تُعدّ هذه الاتفاقية سارية المفعول بين المستخدم وشركة تموّل للوساطة الرقمية. تتوفر هذه الاتفاقية باللغتين العربية والإنجليزية، وتسود النسخة العربية عند وجود أي تعارض.',
    sections: [
      {
        title: 'التعاريف',
        content: 'في هذه الشروط والأحكام، يُقصد بالمصطلحات التالية المعاني المبيّنة قرين كل منها، ما لم يقتضِ السياق خلاف ذلك: "تموّل" تعني شركة تموّل للوساطة الرقمية. "المنصة" تعني تطبيق تموّل والموقع الإلكتروني. "المستخدم" يعني أي شخص يستخدم المنصة. "الجهة الممولة" تعني المؤسسات المالية المرخصة المشتركة في المنصة.',
      },
      {
        title: 'المتطلبات والتسجيل في "تموّل"',
        content: 'لاستخدام خدمات تموّل، يجب أن يكون المستخدم مواطناً سعودياً أو مقيماً نظامياً، وألا يقل عمره عن 18 عاماً، وأن يمتلك هاتفاً جوالاً نشطاً مسجلاً بهويته، وأن يوافق على هذه الشروط والأحكام.',
      },
      {
        title: 'شروط تطبيق "تموّل"',
        content: 'يُتيح تطبيق تموّل للمستخدمين تقديم طلبات الحصول على التمويل ومقارنة عروض الجهات الممولة. لا تضمن تموّل حصول المستخدم على موافقة التمويل، إذ يخضع ذلك لتقدير الجهة الممولة وفق معايير الأهلية المعتمدة لديها.',
      },
      {
        title: 'تعليق وإغلاق الحساب والخدمات',
        content: 'يحق لتموّل تعليق أو إغلاق حساب المستخدم في حالة انتهاك هذه الشروط أو تقديم معلومات مضللة أو الاشتباه في وجود نشاط احتيالي أو غير قانوني.',
      },
      {
        title: 'رسوم الخدمة',
        content: 'خدمات تموّل مجانية بالكامل للمستخدمين. تحصل تموّل على عمولتها من الجهات الممولة فقط. لا توجد رسوم خفية أو تكاليف مخفية على المستخدمين.',
      },
      {
        title: 'الأمان والاستخدام غير المصرح به',
        content: 'يتحمل المستخدم المسؤولية الكاملة عن الحفاظ على سرية بيانات دخوله. يجب إخطار تموّل فوراً في حالة الاشتباه بأي وصول غير مصرح به إلى الحساب.',
      },
      {
        title: 'التزامات العميل',
        content: 'يلتزم المستخدم بتقديم معلومات صحيحة ودقيقة وكاملة، وعدم استخدام المنصة لأي أغراض غير مشروعة، والامتثال لجميع الأنظمة والتشريعات المعمول بها في المملكة العربية السعودية.',
      },
      {
        title: 'حماية البيانات والسرية',
        content: 'تلتزم تموّل بحماية البيانات الشخصية للمستخدمين وفقاً لنظام حماية البيانات الشخصية في المملكة العربية السعودية. لن تُشارَك بيانات المستخدمين مع أطراف ثالثة إلا بموافقة صريحة منهم أو وفقاً لمتطلبات النظام.',
      },
      {
        title: 'إخلاء المسؤولية والتعويضات',
        content: 'تعمل تموّل بوصفها وسيطاً فحسب وليست جهة تمويل مباشرة. لا تتحمل تموّل المسؤولية عن قرارات الجهات الممولة أو شروط التمويل المقدمة. يوافق المستخدم على تعويض تموّل عن أي مطالبات ناشئة عن إساءة استخدام المنصة.',
      },
      {
        title: 'التغييرات في الشروط والأحكام',
        content: 'تحتفظ تموّل بالحق في تعديل هذه الشروط في أي وقت. سيُخطر المستخدمون بالتغييرات الجوهرية عبر التطبيق أو البريد الإلكتروني. يُعدّ استمرار استخدام المنصة بعد إخطارهم قبولاً للشروط المعدّلة.',
      },
      {
        title: 'الشروط والأحكام العامة',
        content: 'إذا تبيّن أن أي حكم من هذه الشروط غير قابل للتنفيذ، فلن يؤثر ذلك على سريان باقي الأحكام. يُمثّل هذا الاتفاق الاتفاقية الكاملة بين المستخدم وتموّل فيما يتعلق باستخدام المنصة.',
      },
      {
        title: 'النظام واجب التطبيق وتسوية النزاعات',
        content: 'تخضع هذه الشروط لأنظمة المملكة العربية السعودية وتُفسَّر وفقاً لها. تُحال أي نزاعات في المقام الأول إلى الوساطة، وفي حالة فشل التسوية الودية تُحال إلى المحاكم السعودية المختصة.',
      },
      {
        title: 'موافقة العملاء',
        content: 'باستخدام منصة تموّل، يُقرّ المستخدم بأنه قرأ هذه الشروط والأحكام وفهمها ووافق على الالتزام بها.',
      },
    ],
  },
  en: {
    pageTitle: 'Tamawal® Terms',
    pageSubtitle: 'Terms and Conditions',
    pageDesc: 'The rules that users agree to when using Tamawal® services',
    companyInfo: 'Tamawal for digital brokerage is a limited liability company, registered with no. 1010716845, unified national number: 702339579, regulated by the Saudi Central Bank, License No. 98/N M/202504',
    preamble: 'These Terms and Conditions govern the use of the Tamawal App for digital brokerage services and the Tamawal website. This agreement is between the user and Tamawal for Digital Brokerage. This agreement is available in both Arabic and English; the Arabic version shall prevail in case of any conflict.',
    sections: [
      {
        title: 'Definitions',
        content: 'In these Terms and Conditions, the following terms shall have the meanings set out below, unless the context requires otherwise: "Tamawal" means Tamawal for Digital Brokerage. "Platform" means the Tamawal app and website. "User" means any person using the Platform. "Financing Entity" means licensed financial institutions participating in the Platform.',
      },
      {
        title: 'Tamawal Registration and Requirements',
        content: 'To use Tamawal services, the user must be a Saudi national or legal resident, be at least 18 years old, own an active mobile phone registered under their identity, and agree to these Terms and Conditions.',
      },
      {
        title: 'Tamawal Services Conditions',
        content: "The Tamawal app allows users to submit financing applications and compare offers from financing entities. Tamawal does not guarantee financing approval, as this is subject to the financing entity's discretion based on their approved eligibility criteria.",
      },
      {
        title: 'Suspension and Closure of Account and Services',
        content: "Tamawal reserves the right to suspend or close a user's account in the event of a violation of these Terms, provision of misleading information, or suspected fraudulent or illegal activity.",
      },
      {
        title: 'Service Charges',
        content: 'Tamawal services are completely free for users. Tamawal earns its commission from financing entities only. There are no hidden fees or costs for users.',
      },
      {
        title: 'Security and Unauthorized Usage',
        content: 'The user bears full responsibility for maintaining the confidentiality of their login credentials. Tamawal must be notified immediately if unauthorized access to the account is suspected.',
      },
      {
        title: "Customer's Obligations",
        content: 'The user is obligated to provide accurate, complete, and truthful information, not to use the Platform for any unlawful purposes, and to comply with all applicable laws and regulations in the Kingdom of Saudi Arabia.',
      },
      {
        title: 'Data Protection and Confidentiality',
        content: "Tamawal is committed to protecting users' personal data in accordance with the Personal Data Protection Law of the Kingdom of Saudi Arabia. User data will not be shared with third parties except with explicit consent or as required by law.",
      },
      {
        title: 'Disclaimer and Indemnity',
        content: 'Tamawal acts as a broker only and is not a direct financing entity. Tamawal is not responsible for decisions made by financing entities or the terms of financing offered. The user agrees to indemnify Tamawal against any claims arising from misuse of the Platform.',
      },
      {
        title: 'Changes of Terms and Conditions',
        content: 'Tamawal reserves the right to amend these Terms at any time. Users will be notified of material changes via the app or email. Continued use of the Platform after notification constitutes acceptance of the amended Terms.',
      },
      {
        title: 'General Terms and Conditions',
        content: 'If any provision of these Terms is found to be unenforceable, it shall not affect the validity of the remaining provisions. This agreement constitutes the entire agreement between the user and Tamawal regarding use of the Platform.',
      },
      {
        title: 'Applicable Law and Settlement of Disputes',
        content: 'These Terms are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. Any disputes shall first be referred to mediation, and if not resolved amicably, shall be referred to the competent Saudi courts.',
      },
      {
        title: 'Customer Consent',
        content: 'By using the Tamawal Platform, the user acknowledges that they have read, understood, and agreed to be bound by these Terms and Conditions.',
      },
    ],
  },
};

export default function Terms({ lang }: { lang: Lang }) {
  const isRtl = lang === 'ar';
  const c = t[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <WebNavbar lang={lang} />

      {/* Hero */}
      <section className="bg-[#F9FAFB] border-b border-[#EAECF0] py-16 px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-[#0063F5] text-[13px] font-semibold tracking-widest uppercase mb-3">{c.pageTitle}</p>
          <h1 className="text-[#101828] text-[36px] md:text-[48px] font-bold mb-4">{c.pageSubtitle}</h1>
          <p className="text-[#475467] text-[16px]">{c.pageDesc}</p>
        </div>
      </section>

      {/* Company info */}
      <section className="py-10 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-[#F0F6FF] border border-[#D1E4FF] rounded-xl p-5">
            <p className="text-[#1e40af] text-[14px] leading-[1.7]">{c.companyInfo}</p>
          </div>
        </div>
      </section>

      {/* Preamble */}
      <section className="pb-8 px-6">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#475467] text-[15px] leading-[1.8]">{c.preamble}</p>
        </div>
      </section>

      {/* Sections accordion */}
      <section className="pb-20 px-6">
        <div className="max-w-[900px] mx-auto divide-y divide-[#EAECF0]">
          {c.sections.map((section, idx) => (
            <div key={idx} className="py-1">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between py-5 text-start cursor-pointer"
              >
                <span className="text-[#101828] text-[16px] font-semibold">{`${idx + 1}. ${section.title}`}</span>
                <svg
                  className={`w-5 h-5 shrink-0 text-[#98a2b3] transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="pb-6">
                  <p className="text-[#475467] text-[15px] leading-[1.8]">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <WebFooter lang={lang} />
    </div>
  );
}
