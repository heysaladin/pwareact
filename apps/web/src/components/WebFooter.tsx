'use client';

type Lang = 'ar' | 'en';

const imgLogo        = '/logo-tamawal-web.svg';
const imgHeroBadge   = '/badge.svg';
const imgBadgeCenter = '/badge-center.svg';
const imgEmailIcon   = '/icon-email.svg';
const imgPhoneIcon   = '/icon-phone.svg';
const imgLocationIcon = '/pinlocation.svg';
const imgLinkedIn    = '/icon-linkedin.svg';
const imgTwitterX    = '/icon-twitter.svg';
const imgArrowNext   = '/arrow-next-dark.svg';
const imgAppStore    = '/appstore.svg';
const imgPlayStore   = '/playstore.svg';

const t = {
  ar: {
    aboutUs: 'معلومات عنا',
    whoWeAre: 'عن تموّل®',
    ourProducts: 'منتجاتنا',
    ourValues: 'قيمنا',
    legal: 'قانوني',
    terms: 'الأحكام والشروط',
    dataProtection: 'حماية البيانات والخصوصية',
    customerProtection: 'مبادئ حماية العميل',
    takeActions: 'اتخذ إجراءً',
    bePartner: 'كن شريكاً',
    beCustomer: 'كن عميلاً',
    customerCare: 'خدمة العملاء',
    suggestion: 'اقتراح',
    complaint: 'شكوى',
    reportViolation: 'الإبلاغ عن مخالفة',
    reportFraud: 'الإبلاغ عن احتيال مالي',
    contactUs: 'تواصل معنا',
    address: 'العنوان',
    addressText: 'مركز الحويشل، العليا (403)، الرياض، المملكة العربية السعودية',
    workingHours: 'ساعات العمل',
    hours: '09:00 – 17:00',
    workingDays: 'أيام العمل',
    days: 'الأحد – الخميس',
    socialMedia: 'وسائل التواصل الاجتماعي',
    faq: 'الأسئلة الشائعة',
    download: 'حمّل تطبيقنا!',
    copyright: '© جميع الحقوق محفوظة لتموّل 2026',
    sama: 'تموّل® تخضع لإشراف ورقابة البنك المركزي السعودي بموجب ترخيص رقم 98/ن م/202504',
  },
  en: {
    aboutUs: 'About us',
    whoWeAre: 'Who we are',
    ourProducts: 'Our products',
    ourValues: 'Our values',
    legal: 'Legal',
    terms: 'Terms and Conditions',
    dataProtection: 'Data Protection and Privacy',
    customerProtection: 'Customer Protection Principles',
    takeActions: 'Take actions',
    bePartner: 'Be a partner',
    beCustomer: 'Be a customer',
    customerCare: 'Customer Care',
    suggestion: 'Suggestion',
    complaint: 'Complaint',
    reportViolation: 'Report a Violation',
    reportFraud: 'Report Financial Fraud',
    contactUs: 'Contact us',
    address: 'Address',
    addressText: 'Al Olaya (403) street, Riyadh, Saudi Arabia',
    workingHours: 'Working hours',
    hours: '09:00 – 17:00',
    workingDays: 'Working days',
    days: 'Sunday – Thursday',
    socialMedia: 'Social media',
    faq: 'FAQs',
    download: 'Download our App!',
    copyright: '© All right reserved to Tamawal 2026',
    sama: 'Tamawal® is supervised and regulated by the Saudi Central Bank under license No. 98/N M/202504',
  },
};

export default function WebFooter({ lang }: { lang: Lang }) {
  const isRtl = lang === 'ar';
  const c = t[lang];

  return (
    <footer className="bg-[#171717]" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[75px] pt-[60px] lg:pt-[90px] flex flex-col gap-[48px]">
        <div className="flex flex-col lg:flex-row lg:items-start w-full gap-[40px] lg:gap-[64px]">

          {/* Logo + SAMA */}
          <div className="flex flex-col items-start gap-[40px] lg:gap-0 lg:justify-between lg:self-stretch lg:flex-1">
            <img src={imgLogo} alt="Tamawal" className="h-[32px] w-auto" />
            <div className="flex flex-col gap-[16px]">
              <div className="relative size-[100px]">
                <img src={imgHeroBadge} alt="" className="absolute inset-0 size-full" style={{ animation: 'badge-spin 18s linear infinite' }} />
                <img src={imgBadgeCenter} alt="SAMA License" className="absolute inset-0 size-full" />
              </div>
              <p className="text-[rgba(255,255,255,0.72)] text-[13px] leading-[1.6] max-w-[240px]">
                {c.sama}
              </p>
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-col gap-[32px] shrink-0">
            <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-[30px]">
              <div className="lg:w-[170px] flex flex-col gap-[12px]">
                <p className="text-white text-[15px] font-bold">{c.aboutUs}</p>
                <div className="flex flex-col gap-[8px] text-[rgba(255,255,255,0.60)] text-[14px]">
                  <a href="#" className="hover:text-white transition-colors">{c.whoWeAre}</a>
                  <a href="#" className="hover:text-white transition-colors">{c.ourProducts}</a>
                  <a href="#" className="hover:text-white transition-colors">{c.ourValues}</a>
                </div>
              </div>
              <div className="lg:w-[170px] flex flex-col gap-[12px]">
                <p className="text-white text-[15px] font-bold">{c.legal}</p>
                <div className="flex flex-col gap-[8px] text-[rgba(255,255,255,0.60)] text-[14px]">
                  <a href="#" className="hover:text-white transition-colors">{c.terms}</a>
                  <a href="#" className="hover:text-white transition-colors">{c.dataProtection}</a>
                  <a href="#" className="hover:text-white transition-colors">{c.customerProtection}</a>
                </div>
              </div>
              <div className="lg:w-[170px] flex flex-col gap-[12px]">
                <p className="text-white text-[15px] font-bold">{c.takeActions}</p>
                <div className="flex flex-col gap-[8px] text-[rgba(255,255,255,0.60)] text-[14px]">
                  <a href="#" className="hover:text-white transition-colors">{c.bePartner}</a>
                  <a href="#" className="hover:text-white transition-colors">{c.beCustomer}</a>
                </div>
              </div>
              <div className="lg:w-[170px] flex flex-col gap-[12px]">
                <p className="text-white text-[15px] font-bold">{c.customerCare}</p>
                <div className="flex flex-col gap-[8px] text-[rgba(255,255,255,0.60)] text-[14px]">
                  <a href="#" className="hover:text-white transition-colors">{c.suggestion}</a>
                  <a href="#" className="hover:text-white transition-colors">{c.complaint}</a>
                  <a href="#" className="hover:text-white transition-colors">{c.reportViolation}</a>
                  <a href="#" className="hover:text-white transition-colors">{c.reportFraud}</a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10" />

            <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-[30px]">
              <div className="lg:w-[170px] flex flex-col gap-[12px]">
                <p className="text-white text-[15px] font-bold">{c.contactUs}</p>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <img src={imgEmailIcon} alt="" className="w-4 h-4 shrink-0" />
                    <span className="text-[rgba(255,255,255,0.60)] text-[13px]">info@tamawal.sa</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <img src={imgPhoneIcon} alt="" className="w-4 h-4 shrink-0" />
                    <span className="text-[rgba(255,255,255,0.60)] text-[13px]">011 512 3870</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <img src={imgPhoneIcon} alt="" className="w-4 h-4 shrink-0" />
                    <span className="text-[rgba(255,255,255,0.60)] text-[13px]">800 100 0276</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-[170px] flex flex-col gap-[12px]">
                <p className="text-white text-[15px] font-bold">{c.address}</p>
                <div className="flex gap-[8px] items-start">
                  <img src={imgLocationIcon} alt="" className="w-[13px] mt-[2px] shrink-0" />
                  <span className="text-[rgba(255,255,255,0.60)] text-[13px] leading-[1.5]">{c.addressText}</span>
                </div>
              </div>
              <div className="lg:w-[170px] flex flex-col gap-[12px]">
                <div className="flex flex-col gap-[4px]">
                  <p className="text-white text-[14px] font-semibold">{c.workingHours}</p>
                  <p className="text-[rgba(255,255,255,0.60)] text-[13px]">{c.hours}</p>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-white text-[14px] font-semibold">{c.workingDays}</p>
                  <p className="text-[rgba(255,255,255,0.60)] text-[13px]">{c.days}</p>
                </div>
              </div>
              <div className="lg:w-[170px] flex flex-col gap-[8px]">
                <p className="text-white text-[14px] font-semibold">{c.socialMedia}</p>
                <div className="flex gap-[8px] items-center">
                  <img src={imgLinkedIn} alt="LinkedIn" className="w-[40px] h-[40px]" />
                  <img src={imgTwitterX} alt="X" className="w-[40px] h-[40px]" />
                </div>
                <a href="#" className="flex items-center gap-[4px] py-[8px]">
                  <span className="text-[rgba(255,255,255,0.86)] text-[14px] font-semibold">{c.faq}</span>
                  <img src={imgArrowNext} alt="" className="w-[20px] h-[20px]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-[24px] pb-[24px]">
          <div className="border-t border-white/10" />
          {/* Mobile */}
          <div className="flex flex-col gap-[12px] items-center lg:hidden">
            <p className="text-[rgba(255,255,255,0.60)] text-[14px] text-center">{c.download}</p>
            <div className="flex gap-[12px]">
              <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] w-[128px] overflow-hidden">
                <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] w-[128px] overflow-hidden">
                <img src={imgPlayStore} alt="Google Play" className="w-full h-full object-contain" />
              </a>
            </div>
            <p className="text-[rgba(255,255,255,0.60)] text-[13px] text-center">{c.copyright}</p>
          </div>
          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-between w-full">
            <p className="text-[rgba(255,255,255,0.60)] text-[14px]">{c.copyright}</p>
            <div className="flex items-center gap-[16px]">
              <p className="text-[rgba(255,255,255,0.60)] text-[14px]">{c.download}</p>
              <div className="flex gap-[12px]">
                <a href="http://apps.apple.com/sa/app/tamawal-%D8%AA%D9%85%D9%88%D9%84/id6450682646" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] w-[128px] overflow-hidden">
                  <img src={imgAppStore} alt="App Store" className="w-full h-full object-contain" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=sa.tamawal.capp" target="_blank" rel="noopener noreferrer" className="border border-[#16448f] rounded-[6px] h-[40px] w-[128px] overflow-hidden">
                  <img src={imgPlayStore} alt="Google Play" className="w-full h-full object-contain" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
