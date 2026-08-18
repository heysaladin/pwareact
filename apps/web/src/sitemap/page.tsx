import Link from 'next/link';
import TamawalLogo from '@/components/ui/TamawalLogo';

type Route = {
  path: string;
  label: string;
  description: string;
};

type Platform = {
  id: string;
  name: string;
  type: string;
  accentColor: string;
  routes: Route[];
};

const platforms: Platform[] = [
  {
    id: 'web',
    name: 'Web',
    type: 'WEB',
    accentColor: '#0063F5',
    routes: [
      { path: '/',            label: 'Hub',        description: 'Projects overview'        },
      { path: '/project',     label: 'Products',   description: 'Mobile app & dashboard'   },
      { path: '/landing',     label: 'Landing AR', description: 'Arabic marketing site'    },
      { path: '/landing/en',  label: 'Landing EN', description: 'English marketing site'   },
      { path: '/payment',     label: 'Payment',    description: 'Payment confirmation flow' },
      { path: '/sitemap',     label: 'Sitemap',    description: 'This page'                },
    ],
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    type: 'BACKOFFICE',
    accentColor: '#079455',
    routes: [
      { path: '/oms', label: 'OMS', description: 'Order Management System'  },
      { path: '/ode', label: 'ODE', description: 'Offers & Deals Engine'     },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile',
    type: 'APP',
    accentColor: '#7C3AED',
    routes: [
      { path: 'home',    label: 'Home',    description: 'Dashboard & transactions' },
      { path: 'search',  label: 'Search',  description: 'Find products & services' },
      { path: 'create',  label: 'Create',  description: 'New transaction'          },
      { path: 'inbox',   label: 'Inbox',   description: 'Notifications'            },
      { path: 'profile', label: 'Profile', description: 'Account & settings'       },
    ],
  },
];

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <div key={platform.id}>

                {/* Platform header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-7 h-7 rounded-md shrink-0"
                    style={{ backgroundColor: platform.accentColor }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#101828] dark:text-white leading-none mb-1">
                      {platform.name}
                    </p>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-[#9aa4b2] dark:text-white/25">
                      {platform.type}
                    </p>
                  </div>
                </div>

                {/* Routes */}
                <div className="border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
                  {platform.routes.map((route, i) => (
                    <div
                      key={route.path}
                      className={`px-4 py-3 flex items-start gap-3 bg-white dark:bg-[#080d14]${
                        i < platform.routes.length - 1
                          ? ' border-b border-[#eef1f6] dark:border-white/[0.06]'
                          : ''
                      }`}
                    >
                      <code className="text-[11px] font-mono text-[#9aa4b2] dark:text-white/25 bg-[#f9fafb] dark:bg-white/[0.04] rounded px-1.5 py-0.5 shrink-0 mt-0.5 whitespace-nowrap">
                        {route.path}
                      </code>
                      <div>
                        <p className="text-xs font-semibold text-[#344054] dark:text-white/70 leading-none mb-0.5">
                          {route.label}
                        </p>
                        <p className="text-[11px] text-[#9aa4b2] dark:text-white/25 leading-relaxed">
                          {route.description}
                        </p>
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
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">
            Tamawal Design
          </p>
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>

    </div>
  );
}
