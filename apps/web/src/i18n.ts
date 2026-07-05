export type Lang = "ar" | "en";

const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدمات",
      partner: "كن شريكاً",
      about: "معلومات عنا",
      contact: "اتصل بنا",
      download: "حمّل التطبيق الآن",
    },
    hero: {
      badge: "منصة وساطة تمويل رقمية معتمدة",
      title: "وضعك المادي أفضل مع",
      brand: "تمويل",
      subtitle:
        "معنا ما تحتاج تبحث وتدور على التمويل المناسب — نوفر لك مجموعة متنوعة من خيارات التمويل المتوافقة مع الشريعة الإسلامية.",
      cta1: "انضم إلينا",
      cta2: "اعرف أكثر",
    },
    partners: {
      title: "شركاؤنا",
      subtitle: "كن جزءًا من أكبر منصة وسيط تمويل رقمي في المملكة",
    },
    how: {
      title: "كيف يعمل تمويل؟",
      steps: [
        {
          number: "١",
          title: "قدم طلبك بأمان مع تمويل",
          body: "أدخل معلوماتك مرة واحدة في خمس دقائق فقط — نحن نتولى الباقي بكل أمان وسرية تامة.",
        },
        {
          number: "٢",
          title: "قارن عروض التمويل",
          body: "أسعار حقيقية، لا هوامش ربح ولا رسوم خفية. كل شيء شفاف ومجاني بنسبة 100%.",
        },
        {
          number: "٣",
          title: "وخذ فلوسك",
          body: "اختر العرض المناسب لك واستلم تمويلك بأسرع وقت ممكن.",
        },
      ],
    },
    products: {
      title: "منتجاتنا",
      subtitle: "اختر التمويل المناسب لاحتياجاتك",
      soon: "قريباً",
      cta: "تقدّم الآن",
      items: [
        { title: "تمويل شخصي", limit: "حتى 150,000 ريال", soon: false },
        { title: "بطاقة ائتمان", limit: "حتى 150,000 ريال", soon: true },
        { title: "تمويل سيارة", limit: "حتى 150,000 ريال", soon: true },
        { title: "تمويل عقاري", limit: "حتى 150,000 ريال", soon: true },
      ],
    },
    download: {
      title: "قاعدين نجهز شيء كبير",
      subtitle: "التطبيق قادم قريباً — سجل الآن لتكون من أوائل من يجربونه.",
      placeholder: "البريد الإلكتروني",
      cta: "أبلغني",
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        {
          q: "ما هي الخدمات التي تقدمها تمويل؟",
          a: "نقدم وساطة رقمية لمقارنة عروض التمويل الشخصي وتمويل السيارات والعقارات وبطاقات الائتمان من أبرز الجهات الممولة في المملكة.",
        },
        {
          q: "هل منتجاتكم متوافقة مع أحكام الشريعة الإسلامية؟",
          a: "نعم، جميع منتجاتنا وعروض التمويل المتاحة عبر المنصة متوافقة مع أحكام الشريعة الإسلامية.",
        },
        {
          q: "هل هناك رسوم مخفية على الخدمة؟",
          a: "لا، خدمة المقارنة والوساطة مجانية بالكامل للعميل. نحن نتقاضى عمولتنا من الجهة الممولة.",
        },
        {
          q: "كيف أتواصل مع دعم العملاء؟",
          a: "يمكنك التواصل معنا عبر البريد الإلكتروني أو الهاتف خلال أوقات الدوام من الأحد إلى الخميس.",
        },
      ],
    },
    footer: {
      description:
        "منصة وساطة تمويل رقمية تسهّل مقارنة عروض التمويل المتوافقة مع أحكام الشريعة الإسلامية.",
      quickLinks: "روابط سريعة",
      links: ["معلومات عنا", "منتجاتنا", "الأحكام والشروط", "حماية البيانات", "حماية العميل"],
      contact: "تواصل معنا",
      email: "info@tamweel.sa",
      phone: "800 100 0276",
      hours: "الأحد – الخميس: 9 ص – 5 م",
      regulatory:
        "شركة تمويل للوساطة الرقمية خاضعة لإشراف ورقابة البنك المركزي السعودي",
      copyright: "تمويل. جميع الحقوق محفوظة.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      partner: "Become a Partner",
      about: "About Us",
      contact: "Contact",
      download: "Download App",
    },
    hero: {
      badge: "Certified Digital Finance Brokerage Platform",
      title: "Better finances with",
      brand: "Tamweel",
      subtitle:
        "No need to search for the right financing — we offer a diverse range of Sharia-compliant financing options tailored to your needs.",
      cta1: "Join Us",
      cta2: "Learn More",
    },
    partners: {
      title: "Our Partners",
      subtitle: "Be part of the largest digital finance brokerage platform in the Kingdom",
    },
    how: {
      title: "How does Tamweel work?",
      steps: [
        {
          number: "1",
          title: "Submit your application securely",
          body: "Enter your information once in just five minutes — we handle the rest with full security and confidentiality.",
        },
        {
          number: "2",
          title: "Compare financing offers",
          body: "Real prices, no hidden margins or fees. Everything is 100% transparent and free.",
        },
        {
          number: "3",
          title: "Get your funds",
          body: "Choose the offer that suits you and receive your financing as quickly as possible.",
        },
      ],
    },
    products: {
      title: "Our Products",
      subtitle: "Choose the financing that fits your needs",
      soon: "Coming Soon",
      cta: "Apply Now",
      items: [
        { title: "Personal Finance", limit: "Up to SAR 150,000", soon: false },
        { title: "Credit Card", limit: "Up to SAR 150,000", soon: true },
        { title: "Auto Finance", limit: "Up to SAR 150,000", soon: true },
        { title: "Real Estate Finance", limit: "Up to SAR 150,000", soon: true },
      ],
    },
    download: {
      title: "We're preparing something big",
      subtitle: "The app is coming soon — register now to be among the first to try it.",
      placeholder: "Email address",
      cta: "Notify Me",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What services does Tamweel offer?",
          a: "We provide digital brokerage for comparing personal finance, auto finance, real estate, and credit card offers from leading lenders in the Kingdom.",
        },
        {
          q: "Are your products Sharia-compliant?",
          a: "Yes, all our products and financing offers available through the platform are compliant with Islamic Sharia principles.",
        },
        {
          q: "Are there any hidden fees?",
          a: "No, the comparison and brokerage service is completely free for customers. We earn our commission from the financing institution.",
        },
        {
          q: "How do I contact customer support?",
          a: "You can reach us by email or phone during business hours, Sunday to Thursday.",
        },
      ],
    },
    footer: {
      description:
        "A digital finance brokerage platform that simplifies comparing Sharia-compliant financing offers.",
      quickLinks: "Quick Links",
      links: ["About Us", "Our Products", "Terms & Conditions", "Data Protection", "Customer Protection"],
      contact: "Contact Us",
      email: "info@tamweel.sa",
      phone: "800 100 0276",
      hours: "Sun – Thu: 9 AM – 5 PM",
      regulatory:
        "Tamweel Digital Brokerage is supervised and regulated by the Saudi Central Bank",
      copyright: "Tamweel. All rights reserved.",
    },
  },
} as const;

export default translations;
