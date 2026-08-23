import Link from 'next/link';
import TamawalLogo from '@/components/ui/TamawalLogo';

type Screen = {
  path: string;
  label: string;
  description: string;
};

type Group = {
  label: string;
  screens: Screen[];
};

type Section = {
  id: string;
  lang: string;
  dir: 'ltr' | 'rtl';
  accentColor: string;
  groups: Group[];
};

const sections: Section[] = [
  {
    id: 'ar',
    lang: 'عربي',
    dir: 'rtl',
    accentColor: '#7C3AED',
    groups: [
      {
        label: 'App Flow',
        screens: [
          { path: '/app',         label: 'الرئيسية',    description: 'حاسبة القرض ونموذج التقديم' },
          { path: '/results',     label: 'النتائج',     description: 'مقارنة عروض التمويل' },
          { path: '/review',      label: 'المراجعة',    description: 'مراجعة الطلب والملخص' },
          { path: '/payment',     label: 'الدفع',       description: 'تفاصيل الدفع وإدخال البطاقة' },
          { path: '/code',        label: 'رمز الإحالة', description: 'مشاركة رمز الإحالة والدعوة' },
        ],
      },
      {
        label: 'Landing',
        screens: [
          { path: '/app/landing',              label: 'الرئيسية',      description: 'الصفحة التسويقية' },
          { path: '/app/landing/about-us',     label: 'من نحن',        description: 'نبذة عن الشركة' },
          { path: '/app/landing/be-partner',   label: 'كن شريكاً',     description: 'تسجيل الشركاء' },
          { path: '/app/landing/be-customer',  label: 'كن عميلاً',     description: 'تسجيل العملاء' },
          { path: '/app/landing/contact-us',   label: 'تواصل معنا',    description: 'صفحة التواصل' },
          { path: '/app/landing/terms',        label: 'الشروط',        description: 'الشروط والأحكام' },
        ],
      },
    ],
  },
  {
    id: 'en',
    lang: 'English',
    dir: 'ltr',
    accentColor: '#0063F5',
    groups: [
      {
        label: 'App Flow',
        screens: [
          { path: '/app/en',         label: 'Home',          description: 'Loan calculator & application form' },
          { path: '/results/en',     label: 'Results',       description: 'Loan offers comparison' },
          { path: '/review/en',      label: 'Review',        description: 'Application review & summary' },
          { path: '/payment/en',     label: 'Payment',       description: 'Payment details & card input' },
          { path: '/code/en',        label: 'Referral Code', description: 'Share referral & invite' },
        ],
      },
      {
        label: 'Landing',
        screens: [
          { path: '/app/landing/en',             label: 'Home',          description: 'English marketing homepage' },
          { path: '/app/landing/en/about-us',    label: 'About Us',      description: 'Company overview' },
          { path: '/app/landing/en/be-partner',  label: 'Be a Partner',  description: 'Partner onboarding' },
          { path: '/app/landing/en/be-customer', label: 'Be a Customer', description: 'Customer signup' },
          { path: '/app/landing/en/contact-us',  label: 'Contact Us',    description: 'Get in touch' },
          { path: '/app/landing/en/terms',       label: 'Terms',         description: 'Terms & conditions' },
        ],
      },
    ],
  },
];

function ScreenRow({ screen, isLast }: { screen: Screen; isLast: boolean }) {
  const className = `group px-4 py-3 flex items-start gap-3 bg-white dark:bg-[#080d14] hover:bg-[#f8fafc] dark:hover:bg-white/[0.02] transition-colors${
    !isLast ? ' border-b border-[#eef1f6] dark:border-white/[0.06]' : ''
  }`;
  return (
    <a href={screen.path} className={className}>
      <code className="text-[11px] font-mono text-[#9aa4b2] dark:text-white/25 bg-[#f9fafb] dark:bg-white/[0.04] rounded px-1.5 py-0.5 shrink-0 mt-0.5 whitespace-nowrap">
        {screen.path}
      </code>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-[#344054] dark:text-white/70 group-hover:text-[#0063F5] dark:group-hover:text-[#0063F5] transition-colors leading-none mb-0.5">
          {screen.label}
        </p>
        <p className="text-[11px] text-[#9aa4b2] dark:text-white/25 leading-relaxed">
          {screen.description}
        </p>
      </div>
    </a>
  );
}

export default function AppWebSitemapPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080d14] flex flex-col">

      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-[#eef1f6] dark:border-white/[0.06] bg-white/90 dark:bg-[#080d14]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <TamawalLogo />
          <Link
            href="/sitemap"
            className="text-xs font-medium text-[#667085] dark:text-white/40 hover:text-[#0063F5] dark:hover:text-[#0063F5] transition-colors"
          >
            ← Sitemap
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 w-full">

        {/* Hero */}
        <section className="pt-20 pb-16 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-4">
            /app · Site Map
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#101828] dark:text-white leading-[1.15] mb-4 max-w-xl">
            App screens, EN & AR.
          </h1>
          <p className="text-base text-[#667085] dark:text-white/50 max-w-md leading-relaxed">
            All screens under /app — both Arabic and English flows.
          </p>
        </section>

        {/* Sections */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {sections.map((section) => (
              <div key={section.id}>

                {/* Section header */}
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#eef1f6] dark:border-white/[0.06]">
                  <div className="w-7 h-7 rounded-md shrink-0" style={{ backgroundColor: section.accentColor }} />
                  <div>
                    <p className="text-sm font-semibold text-[#101828] dark:text-white leading-none mb-1">
                      {section.lang}
                    </p>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-[#9aa4b2] dark:text-white/25">
                      {section.dir === 'rtl' ? 'RTL · APP' : 'LTR · APP'}
                    </p>
                  </div>
                </div>

                {/* Groups */}
                <div className="flex flex-col gap-6">
                  {section.groups.map((group) => (
                    <div key={group.label}>
                      <p className="text-[10px] font-semibold tracking-widest uppercase text-[#9aa4b2] dark:text-white/25 mb-2">
                        {group.label}
                      </p>
                      <div className="border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
                        {group.screens.map((screen, i) => (
                          <ScreenRow
                            key={screen.path}
                            screen={screen}
                            isLast={i === group.screens.length - 1}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#eef1f6] dark:border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">Tamawal Design</p>
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">{new Date().getFullYear()}</p>
        </div>
      </footer>

    </div>
  );
}
