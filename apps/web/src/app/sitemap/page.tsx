import Link from 'next/link';
import TamawalLogo from '@/components/ui/TamawalLogo';

// ─── Projects ────────────────────────────────────────────────────────────────

type Project = {
  id: string;
  name: string;
  description: string;
  href: string;
  tag: string;
  accentColor: string;
  icon: React.ReactNode;
};

const featuredProjects: Project[] = [
  {
    id: 'app',
    name: 'App',
    description: 'Mobile application design for the customer-facing Tamawal experience.',
    href: '/app',
    tag: 'APP',
    accentColor: '#7C3AED',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="18" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'web',
    name: 'Landing',
    description: 'The public-facing website for Tamawal — bilingual Arabic and English.',
    href: '/landing',
    tag: 'WEB',
    accentColor: '#0063F5',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 12h18M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const generalProjects: Project[] = [
  {
    id: 'ceer',
    name: 'Ceer',
    description: "Tamawal as official financing partner for Ceer Motors — Saudi Arabia's electric vehicle brand.",
    href: '/ceer',
    tag: 'EV',
    accentColor: '#0D0D0D',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12.5h1.5M19.5 12.5H21M5 9.5l1.5 3h11l1.5-3H5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 12.5v1.5a1 1 0 001 1h9a1 1 0 001-1v-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8.5" cy="15.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15.5" cy="15.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 9.5l1-3h6l1 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'sme',
    name: 'SME',
    description: 'Business financing platform for SMEs — smart matching for company funding needs.',
    href: '/sme',
    tag: 'SME',
    accentColor: '#FFDD33',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'ceer-tamawal',
    name: 'CEER x Tamawal',
    description: 'Co-branded experience between CEER and Tamawal.',
    href: '/ceer-tamawal',
    tag: 'CO-BRAND',
    accentColor: '#0063F5',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="12" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15" cy="12" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="group bg-white dark:bg-[#080d14] p-7 flex flex-col gap-6 hover:bg-[#f8fafc] dark:hover:bg-white/[0.02] transition-colors"
    >
      <div className="flex items-center justify-between">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0"
          style={{ backgroundColor: project.accentColor }}
        >
          {project.icon}
        </div>
        <span className="text-[10px] font-semibold tracking-widest uppercase text-[#9aa4b2] dark:text-white/25">
          {project.tag}
        </span>
      </div>
      <div className="flex-1">
        <h2 className="text-sm font-semibold text-[#101828] dark:text-white mb-1.5 group-hover:text-[#0063F5] dark:group-hover:text-[#0063F5] transition-colors">
          {project.name}
        </h2>
        <p className="text-xs text-[#667085] dark:text-white/40 leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="flex items-center gap-1.5 text-xs font-medium text-[#9aa4b2] dark:text-white/25 group-hover:text-[#0063F5] dark:group-hover:text-[#0063F5] transition-colors">
        Open
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 6h7M6.5 2.5 10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  );
}

// ─── Routes ──────────────────────────────────────────────────────────────────

type Route = {
  path: string;
  label: string;
  description: string;
  href: string;
  external?: boolean;
};

type Group = {
  label: string;
  routes: Route[];
};

type Platform = {
  id: string;
  name: string;
  type: string;
  accentColor: string;
  featured: Route[];
  groups: Group[];
};

const BASE = {
  web: 'https://tamweelapp.vercel.app',
  dashboard: 'https://tamweelsaas.vercel.app',
  mobile: 'https://tamweelmobile.vercel.app',
};

const platforms: Platform[] = [
  {
    id: 'web',
    name: 'Web',
    type: 'WEB',
    accentColor: '#0063F5',
    featured: [
      { path: '/app',         label: 'App',     description: 'Mobile app prototype (AR default)',  href: BASE.web + '/app',         external: true },
      { path: '/app/landing', label: 'Landing', description: 'Arabic marketing site',          href: BASE.web + '/app/landing', external: true },
    ],
    groups: [
      {
        label: 'App Flow — AR',
        routes: [
          { path: '/app',         label: 'Home',          description: 'Homepage & loan form', href: BASE.web + '/app',         external: true },
          { path: '/results',     label: 'Results',       description: 'Loan offers',          href: BASE.web + '/results',     external: true },
          { path: '/review',      label: 'Review',        description: 'Application review',   href: BASE.web + '/review',      external: true },
          { path: '/payment',     label: 'Payment',       description: 'Payment details',      href: BASE.web + '/payment',     external: true },
          { path: '/code',        label: 'Referral Code', description: 'Share & invite',       href: BASE.web + '/code',        external: true },
        ],
      },
      {
        label: 'App Flow — EN',
        routes: [
          { path: '/app/en',      label: 'Home',          description: 'Homepage & loan form', href: BASE.web + '/app/en',      external: true },
          { path: '/results/en',  label: 'Results',       description: 'Loan offers',          href: BASE.web + '/results/en',  external: true },
          { path: '/review/en',   label: 'Review',        description: 'Application review',   href: BASE.web + '/review/en',   external: true },
          { path: '/payment/en',  label: 'Payment',       description: 'Payment details',      href: BASE.web + '/payment/en',  external: true },
          { path: '/code/en',     label: 'Referral Code', description: 'Share & invite',       href: BASE.web + '/code/en',     external: true },
        ],
      },
      {
        label: 'Landing — AR',
        routes: [
          { path: '/app/landing',             label: 'Home',          description: 'Arabic marketing homepage', href: BASE.web + '/app/landing',             external: true },
          { path: '/app/landing/about-us',    label: 'About Us',      description: 'Company overview',          href: BASE.web + '/app/landing/about-us',    external: true },
          { path: '/app/landing/be-partner',  label: 'Be a Partner',  description: 'Partner onboarding',        href: BASE.web + '/app/landing/be-partner',  external: true },
          { path: '/app/landing/be-customer', label: 'Be a Customer', description: 'Customer signup',           href: BASE.web + '/app/landing/be-customer', external: true },
          { path: '/app/landing/contact-us',  label: 'Contact Us',    description: 'Get in touch',              href: BASE.web + '/app/landing/contact-us',  external: true },
          { path: '/app/landing/terms',       label: 'Terms',         description: 'Terms & conditions',        href: BASE.web + '/app/landing/terms',       external: true },
        ],
      },
      {
        label: 'Landing — EN',
        routes: [
          { path: '/app/landing/en',             label: 'Home',          description: 'English marketing homepage', href: BASE.web + '/app/landing/en',             external: true },
          { path: '/app/landing/en/about-us',    label: 'About Us',      description: 'Company overview',           href: BASE.web + '/app/landing/en/about-us',    external: true },
          { path: '/app/landing/en/be-partner',  label: 'Be a Partner',  description: 'Partner onboarding',         href: BASE.web + '/app/landing/en/be-partner',  external: true },
          { path: '/app/landing/en/be-customer', label: 'Be a Customer', description: 'Customer signup',            href: BASE.web + '/app/landing/en/be-customer', external: true },
          { path: '/app/landing/en/contact-us',  label: 'Contact Us',    description: 'Get in touch',               href: BASE.web + '/app/landing/en/contact-us',  external: true },
          { path: '/app/landing/en/terms',       label: 'Terms',         description: 'Terms & conditions',         href: BASE.web + '/app/landing/en/terms',       external: true },
        ],
      },
      {
        label: 'Ceer EV',
        routes: [
          { path: '/ceer',                  label: 'Home',             description: 'EV financing entry',     href: BASE.web + '/ceer',                  external: true },
          { path: '/ceer/step-1',           label: 'Step 1',           description: 'Vehicle selection',      href: BASE.web + '/ceer/step-1',           external: true },
          { path: '/ceer/step-2',           label: 'Step 2',           description: 'Finance options',        href: BASE.web + '/ceer/step-2',           external: true },
          { path: '/ceer/step-3',           label: 'Step 3',           description: 'Personal details',       href: BASE.web + '/ceer/step-3',           external: true },
          { path: '/ceer/step-4',           label: 'Step 4',           description: 'Documents',              href: BASE.web + '/ceer/step-4',           external: true },
          { path: '/ceer/finance-start',    label: 'Finance Start',    description: 'Start financing',        href: BASE.web + '/ceer/finance-start',    external: true },
          { path: '/ceer/verify-identity',  label: 'Verify Identity',  description: 'ID verification',        href: BASE.web + '/ceer/verify-identity',  external: true },
          { path: '/ceer/simah-consent',    label: 'SIMAH Consent',    description: 'Credit bureau consent',  href: BASE.web + '/ceer/simah-consent',    external: true },
          { path: '/ceer/nafath-approval',  label: 'Nafath Approval',  description: 'Nafath authentication',  href: BASE.web + '/ceer/nafath-approval',  external: true },
          { path: '/ceer/verifying-mobile', label: 'Verifying Mobile', description: 'Phone verification',     href: BASE.web + '/ceer/verifying-mobile', external: true },
          { path: '/ceer/verify-overview',  label: 'Verify Overview',  description: 'Verification summary',   href: BASE.web + '/ceer/verify-overview',  external: true },
          { path: '/ceer/compare-offers',   label: 'Compare Offers',   description: 'Loan offers comparison', href: BASE.web + '/ceer/compare-offers',   external: true },
          { path: '/ceer/vehicle-details',  label: 'Vehicle Details',  description: 'Vehicle summary',        href: BASE.web + '/ceer/vehicle-details',  external: true },
          { path: '/ceer/review-finance',   label: 'Review Finance',   description: 'Final review',           href: BASE.web + '/ceer/review-finance',   external: true },
        ],
      },
      {
        label: 'Ceer × Tamawal — EN',
        routes: [
          { path: '/ceer-tamawal',                        label: 'Home',              description: 'Co-branded EV financing',   href: BASE.web + '/ceer-tamawal',                        external: true },
          { path: '/ceer-tamawal/00-explore-financing',   label: '00 · Explore',      description: 'Explore financing',         href: BASE.web + '/ceer-tamawal/00-explore-financing',   external: true },
          { path: '/ceer-tamawal/01-preliminary-offers',  label: '01 · Preliminary',  description: 'Initial offers',            href: BASE.web + '/ceer-tamawal/01-preliminary-offers',  external: true },
          { path: '/ceer-tamawal/02-what-happens-next',   label: '02 · What Next',    description: 'Process overview',          href: BASE.web + '/ceer-tamawal/02-what-happens-next',   external: true },
          { path: '/ceer-tamawal/03-verify-id',           label: '03 · Verify ID',    description: 'Identity verification',     href: BASE.web + '/ceer-tamawal/03-verify-id',           external: true },
          { path: '/ceer-tamawal/04-nafath-approve',      label: '04 · Nafath',       description: 'Nafath approval',           href: BASE.web + '/ceer-tamawal/04-nafath-approve',      external: true },
          { path: '/ceer-tamawal/05-mobile-verification', label: '05 · Mobile',       description: 'Phone verification',        href: BASE.web + '/ceer-tamawal/05-mobile-verification', external: true },
          { path: '/ceer-tamawal/06-consents-contracts',  label: '06 · Consents',     description: 'Consents & contracts',      href: BASE.web + '/ceer-tamawal/06-consents-contracts',  external: true },
          { path: '/ceer-tamawal/07-personal-details',    label: '07 · Personal',     description: 'Personal details',          href: BASE.web + '/ceer-tamawal/07-personal-details',    external: true },
          { path: '/ceer-tamawal/08-collecting-reports',  label: '08 · Reports',      description: 'Collecting credit reports', href: BASE.web + '/ceer-tamawal/08-collecting-reports',  external: true },
          { path: '/ceer-tamawal/09-eligibility-offers',  label: '09 · Eligibility',  description: 'Eligibility & offers',      href: BASE.web + '/ceer-tamawal/09-eligibility-offers',  external: true },
          { path: '/ceer-tamawal/10-compare-offers',      label: '10 · Compare',      description: 'Compare offers',            href: BASE.web + '/ceer-tamawal/10-compare-offers',      external: true },
          { path: '/ceer-tamawal/11-offer-details',       label: '11 · Offer Details',description: 'Selected offer detail',     href: BASE.web + '/ceer-tamawal/11-offer-details',       external: true },
          { path: '/ceer-tamawal/12-submit-order',        label: '12 · Submit',       description: 'Submit application',        href: BASE.web + '/ceer-tamawal/12-submit-order',        external: true },
          { path: '/ceer-tamawal/13-submit-success',      label: '13 · Success',      description: 'Application submitted',     href: BASE.web + '/ceer-tamawal/13-submit-success',      external: true },
        ],
      },
      {
        label: 'Ceer × Tamawal — AR',
        routes: [
          { path: '/ceer-tamawal-ar',                        label: 'Home',              description: 'Co-branded EV financing AR',   href: BASE.web + '/ceer-tamawal-ar',                        external: true },
          { path: '/ceer-tamawal-ar/00-explore-financing',   label: '00 · Explore',      description: 'Explore financing',            href: BASE.web + '/ceer-tamawal-ar/00-explore-financing',   external: true },
          { path: '/ceer-tamawal-ar/01-preliminary-offers',  label: '01 · Preliminary',  description: 'Initial offers',               href: BASE.web + '/ceer-tamawal-ar/01-preliminary-offers',  external: true },
          { path: '/ceer-tamawal-ar/02-what-happens-next',   label: '02 · What Next',    description: 'Process overview',             href: BASE.web + '/ceer-tamawal-ar/02-what-happens-next',   external: true },
          { path: '/ceer-tamawal-ar/03-verify-id',           label: '03 · Verify ID',    description: 'Identity verification',        href: BASE.web + '/ceer-tamawal-ar/03-verify-id',           external: true },
          { path: '/ceer-tamawal-ar/04-nafath-approve',      label: '04 · Nafath',       description: 'Nafath approval',              href: BASE.web + '/ceer-tamawal-ar/04-nafath-approve',      external: true },
          { path: '/ceer-tamawal-ar/05-mobile-verification', label: '05 · Mobile',       description: 'Phone verification',           href: BASE.web + '/ceer-tamawal-ar/05-mobile-verification', external: true },
          { path: '/ceer-tamawal-ar/06-consents-contracts',  label: '06 · Consents',     description: 'Consents & contracts',         href: BASE.web + '/ceer-tamawal-ar/06-consents-contracts',  external: true },
          { path: '/ceer-tamawal-ar/07-personal-details',    label: '07 · Personal',     description: 'Personal details',             href: BASE.web + '/ceer-tamawal-ar/07-personal-details',    external: true },
          { path: '/ceer-tamawal-ar/08-collecting-reports',  label: '08 · Reports',      description: 'Collecting credit reports',    href: BASE.web + '/ceer-tamawal-ar/08-collecting-reports',  external: true },
          { path: '/ceer-tamawal-ar/09-eligibility-offers',  label: '09 · Eligibility',  description: 'Eligibility & offers',         href: BASE.web + '/ceer-tamawal-ar/09-eligibility-offers',  external: true },
          { path: '/ceer-tamawal-ar/10-compare-offers',      label: '10 · Compare',      description: 'Compare offers',               href: BASE.web + '/ceer-tamawal-ar/10-compare-offers',      external: true },
          { path: '/ceer-tamawal-ar/11-offer-details',       label: '11 · Offer Details',description: 'Selected offer detail',        href: BASE.web + '/ceer-tamawal-ar/11-offer-details',       external: true },
          { path: '/ceer-tamawal-ar/12-submit-order',        label: '12 · Submit',       description: 'Submit application',           href: BASE.web + '/ceer-tamawal-ar/12-submit-order',        external: true },
          { path: '/ceer-tamawal-ar/13-submit-success',      label: '13 · Success',      description: 'Application submitted',        href: BASE.web + '/ceer-tamawal-ar/13-submit-success',      external: true },
        ],
      },
      {
        label: 'Other',
        routes: [
          { path: '/',                label: 'Hub',             description: 'Projects overview',   href: BASE.web + '/',                external: true },
          { path: '/sme',             label: 'SME',             description: 'Business financing',  href: BASE.web + '/sme',             external: true },
          { path: '/global-settings', label: 'Global Settings', description: 'Dev configuration',  href: BASE.web + '/global-settings', external: true },
          { path: '/sitemap',         label: 'Sitemap',         description: 'This page',           href: '/sitemap' },
          { path: '/app/web-sitemap', label: 'App Sitemap',     description: 'EN & AR app screens', href: '/app/web-sitemap' },
        ],
      },
    ],
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    type: 'BACKOFFICE',
    accentColor: '#079455',
    featured: [
      { path: '/oms', label: 'OMS', description: 'Order Management System',     href: BASE.dashboard + '/oms', external: true },
      { path: '/cps', label: 'CPS', description: 'Customer profiles w/ SIMAH', href: BASE.dashboard + '/cps', external: true },
    ],
    groups: [
      {
        label: 'General',
        routes: [
          { path: '/',                label: 'Hub',             description: 'Operations overview',     href: BASE.dashboard + '/',                external: true },
          { path: '/pof',             label: 'Portal Auth Flow',description: 'Login & OTP flow',        href: BASE.dashboard + '/pof',             external: true },
          { path: '/ode',             label: 'ODE',             description: 'Offer & Discount Engine', href: BASE.dashboard + '/ode',             external: true },
          { path: '/sla',             label: 'SLA',             description: 'SLA monitoring',          href: BASE.dashboard + '/sla',             external: true },
          { path: '/cps-alternative', label: 'CPS Alternative', description: 'Customer profiles',       href: BASE.dashboard + '/cps-alternative', external: true },
        ],
      },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile',
    type: 'APP',
    accentColor: '#7C3AED',
    featured: [
      { path: '/news', label: 'Feeds', description: 'News & updates', href: BASE.mobile + '/news', external: true },
    ],
    groups: [
      {
        label: 'General',
        routes: [
          { path: '/', label: 'Hub', description: 'App entry point', href: BASE.mobile + '/', external: true },
        ],
      },
    ],
  },
];

function RouteRow({ route, isLast }: { route: Route; isLast: boolean }) {
  const className = `group px-4 py-3 flex items-start gap-3 bg-white dark:bg-[#080d14] hover:bg-[#f8fafc] dark:hover:bg-white/[0.02] transition-colors${
    !isLast ? ' border-b border-[#eef1f6] dark:border-white/[0.06]' : ''
  }`;
  const inner = (
    <>
      <code className="text-[11px] font-mono text-[#9aa4b2] dark:text-white/25 bg-[#f9fafb] dark:bg-white/[0.04] rounded px-1.5 py-0.5 shrink-0 mt-0.5 whitespace-nowrap">
        {route.path}
      </code>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-[#344054] dark:text-white/70 group-hover:text-[#0063F5] dark:group-hover:text-[#0063F5] transition-colors leading-none mb-0.5">
          {route.label}
        </p>
        <p className="text-[11px] text-[#9aa4b2] dark:text-white/25 leading-relaxed">
          {route.description}
        </p>
      </div>
    </>
  );
  return route.external ? (
    <a href={route.href} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <Link href={route.href} className={className}>
      {inner}
    </Link>
  );
}

function GroupBlock({ group }: { group: Group }) {
  return (
    <div>
      <p className="text-[10px] font-semibold tracking-widest uppercase text-[#9aa4b2] dark:text-white/25 mb-2">
        {group.label}
      </p>
      <div className="border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
        {group.routes.map((route, i) => (
          <RouteRow key={route.path + route.href} route={route} isLast={i === group.routes.length - 1} />
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080d14] flex flex-col">

      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-[#eef1f6] dark:border-white/[0.06] bg-white/90 dark:bg-[#080d14]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <TamawalLogo />
          <nav className="flex items-center gap-4">
            <span className="text-xs font-medium text-[#667085] dark:text-white/40 px-2 py-0.5 rounded-full border border-[#eef1f6] dark:border-white/[0.08]">
              Design
            </span>
            <Link
              href="/global-settings"
              className="flex items-center gap-1.5 text-xs font-medium text-[#667085] dark:text-white/40 hover:text-[#101828] dark:hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Settings
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 w-full">

        {/* Hero */}
        <section className="pt-20 pb-16 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-4">
            Site Map
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#101828] dark:text-white leading-[1.15] mb-4 max-w-xl">
            All screens & routes.
          </h1>
          <p className="text-base text-[#667085] dark:text-white/50 max-w-md leading-relaxed">
            A complete index of every page and screen across the Tamawal ecosystem.
          </p>
        </section>

        {/* Projects */}
        <section className="pt-12 pb-8 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#667085] dark:text-white/30 mb-8">
            Featured
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#eef1f6] dark:bg-white/[0.06] border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="py-12 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#667085] dark:text-white/30 mb-8">
            General
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#eef1f6] dark:bg-white/[0.06] border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
            {generalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="py-12 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#667085] dark:text-white/30 mb-8">
            Landing pages
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#eef1f6] dark:bg-white/[0.06] border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
            {[
              { label: 'About Us',     ar: '/landing/about-us',     en: '/landing/en/about-us' },
              { label: 'Contact Us',   ar: '/landing/contact-us',   en: '/landing/en/contact-us' },
              { label: 'Terms',        ar: '/landing/terms',        en: '/landing/en/terms' },
              { label: 'Be a Partner', ar: '/landing/be-partner',   en: '/landing/en/be-partner' },
              { label: 'Be a Customer',ar: '/landing/be-customer',  en: '/landing/en/be-customer' },
            ].map((page) => (
              <div key={page.label} className="bg-white dark:bg-[#080d14] p-6 flex flex-col gap-4">
                <p className="text-sm font-semibold text-[#101828] dark:text-white">{page.label}</p>
                <div className="flex gap-3">
                  <Link
                    href={page.ar}
                    className="flex items-center gap-1 text-xs font-medium text-[#667085] dark:text-white/40 hover:text-[#0063F5] dark:hover:text-[#0063F5] transition-colors border border-[#eef1f6] dark:border-white/[0.08] rounded-md px-2.5 py-1.5"
                  >
                    AR
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 6h7M6.5 2.5 10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                  <Link
                    href={page.en}
                    className="flex items-center gap-1 text-xs font-medium text-[#667085] dark:text-white/40 hover:text-[#0063F5] dark:hover:text-[#0063F5] transition-colors border border-[#eef1f6] dark:border-white/[0.08] rounded-md px-2.5 py-1.5"
                  >
                    EN
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 6h7M6.5 2.5 10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Platforms */}
        <section className="py-12 flex flex-col gap-16">
          {platforms.map((platform) => (
            <div key={platform.id}>

              {/* Platform header */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#eef1f6] dark:border-white/[0.06]">
                <div className="w-7 h-7 rounded-md shrink-0" style={{ backgroundColor: platform.accentColor }} />
                <div>
                  <p className="text-sm font-semibold text-[#101828] dark:text-white leading-none mb-1">
                    {platform.name}
                  </p>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-[#9aa4b2] dark:text-white/25">
                    {platform.type}
                  </p>
                </div>
              </div>

              {/* Featured */}
              {platform.featured.length > 0 && (
                <div className="mb-8">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-[#9aa4b2] dark:text-white/25 mb-2">
                    Featured
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {platform.featured.map((route) => (
                      <div key={route.path + route.href} className="border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
                        <RouteRow route={route} isLast={true} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Groups */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {platform.groups.map((group) => (
                  <GroupBlock key={group.label} group={group} />
                ))}
              </div>

            </div>
          ))}
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
