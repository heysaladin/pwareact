import Link from 'next/link';
import TamawalLogo from '@/components/ui/TamawalLogo';

const platforms = [
  {
    name: 'Tamweel Web',
    description: 'Customer-facing web application.',
    href: 'https://tamweelapp.vercel.app/tamweel-web',
    tag: 'WEB',
    color: '#0063F5',
    external: true,
  },
  {
    name: 'Tamweel Mobile',
    description: 'iOS & Android mobile application.',
    href: 'https://tamweelmobile.vercel.app/tamweel-mobile',
    tag: 'MOB',
    color: '#059669',
    external: true,
  },
  {
    name: 'Tamweel Dashboard',
    description: 'Internal operations and management portal.',
    href: 'https://tamweelsaas.vercel.app/tamweel-dashboard',
    tag: 'DSH',
    color: '#7C3AED',
    external: false,
  },
];

export default function TamweelDashboardPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080d14] flex flex-col" dir="ltr">

      <header className="sticky top-0 z-10 border-b border-[#eef1f6] dark:border-white/[0.06] bg-white/90 dark:bg-[#080d14]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <TamawalLogo />
          <Link href="/" className="text-xs font-medium text-[#667085] dark:text-white/40 hover:text-[#0063F5] transition-colors">
            ← Hub
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 w-full">

        <section className="pt-20 pb-16 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-4">Platform</p>
          <h1 className="text-4xl font-bold tracking-tight text-[#101828] dark:text-white leading-[1.15] mb-4 max-w-xl">
            Tamweel Dashboard
          </h1>
          <p className="text-base text-[#667085] dark:text-white/50 max-w-md leading-relaxed">
            Access all Tamweel platforms from one place.
          </p>
        </section>

        <section className="pt-12 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#eef1f6] dark:bg-white/[0.06] border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
            {platforms.map((platform) => (
              <a
                key={platform.tag}
                href={platform.href}
                target={platform.external ? '_blank' : undefined}
                rel={platform.external ? 'noopener noreferrer' : undefined}
                className="group bg-white dark:bg-[#080d14] p-7 flex flex-col gap-6 hover:bg-[#f8fafc] dark:hover:bg-white/[0.02] transition-colors"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: platform.color }}
                >
                  <span className="text-[10px] font-bold text-white">{platform.tag}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-[#101828] dark:text-white mb-1.5 group-hover:text-[#0063F5] dark:group-hover:text-[#0063F5] transition-colors">
                    {platform.name}
                  </h2>
                  <p className="text-xs text-[#667085] dark:text-white/40 leading-relaxed">
                    {platform.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#9aa4b2] dark:text-white/25 group-hover:text-[#0063F5] dark:group-hover:text-[#0063F5] transition-colors">
                  Open
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M6.5 2.5 10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-[#eef1f6] dark:border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">Tamweel Platform</p>
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">{new Date().getFullYear()}</p>
        </div>
      </footer>

    </div>
  );
}
