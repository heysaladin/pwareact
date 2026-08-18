import Link from 'next/link';
import TamawalLogo from '@/components/ui/TamawalLogo';

type Route = {
  path: string;
  label: string;
  description: string;
  href: string;
  external?: boolean;
};

type Platform = {
  id: string;
  name: string;
  type: string;
  accentColor: string;
  featured: Route[];
  general: Route[];
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
      { path: '/app',     label: 'App',     description: 'Mobile app prototype',  href: BASE.web + '/app',     external: true },
      { path: '/landing', label: 'Landing', description: 'Arabic marketing site', href: BASE.web + '/landing', external: true },
    ],
    general: [
      { path: '/',              label: 'Hub',            description: 'Projects overview',      href: BASE.web + '/',              external: true },
      { path: '/landing/en',    label: 'Landing EN',     description: 'English marketing site', href: BASE.web + '/landing/en',    external: true },
      { path: '/ceer',          label: 'Ceer EV',        description: 'EV financing flow',      href: BASE.web + '/ceer',          external: true },
      { path: '/ceer-tamawal',  label: 'Ceer × Tamawal', description: 'Co-branded EV flow',    href: BASE.web + '/ceer-tamawal',  external: true },
      { path: '/sme',           label: 'SME',            description: 'Business financing',     href: BASE.web + '/sme',           external: true },
      { path: '/sitemap',       label: 'Sitemap',        description: 'This page',              href: '/sitemap'                               },
    ],
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    type: 'BACKOFFICE',
    accentColor: '#079455',
    featured: [
      { path: '/oms', label: 'OMS', description: 'Order Management System',      href: BASE.dashboard + '/oms', external: true },
      { path: '/cps', label: 'CPS', description: 'Customer profiles w/ SIMAH',  href: BASE.dashboard + '/cps', external: true },
    ],
    general: [
      { path: '/',               label: 'Hub',             description: 'Operations overview', href: BASE.dashboard + '/',               external: true },
      { path: '/pof',            label: 'Portal Auth Flow',description: 'Login & OTP flow',    href: BASE.dashboard + '/pof',            external: true },
      { path: '/ode',            label: 'ODE',             description: 'Offer & Discount Engine', href: BASE.dashboard + '/ode',        external: true },
      { path: '/sla',            label: 'SLA',             description: 'SLA monitoring',      href: BASE.dashboard + '/sla',            external: true },
      { path: '/cps-alternative',label: 'CPS Alternative', description: 'Customer profiles',  href: BASE.dashboard + '/cps-alternative', external: true },
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
    general: [
      { path: '/', label: 'Hub', description: 'App entry point', href: BASE.mobile + '/', external: true },
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

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080d14] flex flex-col">

      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-[#eef1f6] dark:border-white/[0.06] bg-white/90 dark:bg-[#080d14]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <TamawalLogo />
          <Link
            href="/"
            className="text-xs font-medium text-[#667085] dark:text-white/40 hover:text-[#0063F5] dark:hover:text-[#0063F5] transition-colors"
          >
            ← Back
          </Link>
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

        {/* Platforms */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {platforms.map((platform) => (
              <div key={platform.id}>

                {/* Platform header */}
                <div className="flex items-center gap-3 mb-5">
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
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#9aa4b2] dark:text-white/25 mb-2">
                  Featured
                </p>
                <div className="border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden mb-4">
                  {platform.featured.map((route, i) => (
                    <RouteRow key={route.path + route.href} route={route} isLast={i === platform.featured.length - 1} />
                  ))}
                </div>

                {/* General */}
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#9aa4b2] dark:text-white/25 mb-2">
                  General
                </p>
                <div className="border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
                  {platform.general.map((route, i) => (
                    <RouteRow key={route.path + route.href} route={route} isLast={i === platform.general.length - 1} />
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
