import Link from 'next/link';
import Image from 'next/image';

const platforms = [
  {
    name: 'Tamweel Web',
    description: 'Main web application — landing, products, and customer flows.',
    href: 'https://tamweelapp.vercel.app/tamweel-web',
    base: 'tamweelapp.vercel.app',
    path: '/tamweel-web',
    external: true,
  },
  {
    name: 'Mobile',
    description: 'Mobile app interface running on localhost.',
    href: 'https://tamweelmobile.vercel.app/tamweel-mobile',
    base: 'tamweelmobile.vercel.app',
    path: '/tamweel-mobile',
    external: true,
  },
  {
    name: 'Dashboard',
    description: 'Internal CPS dashboard for operations and customer management.',
    href: 'https://tamweelsaas.vercel.app/tamweel-dashboard',
    base: 'tamweelsaas.vercel.app',
    path: '/tamweel-dashboard',
    external: true,
  },
];

export default function PlatformHubPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080d14] font-sans">
      <header className="sticky top-0 z-50 border-b border-[#eef1f6] dark:border-white/[0.06] bg-white/95 dark:bg-[#080d14]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center gap-3">
          <Link href="/tamweel-web" className="text-[#9aa4b2] hover:text-[#667085] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Image src="/logo-tamawal-web-blue.svg" alt="Tamawal" width={100} height={28} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-3">Internal</p>
          <h1 className="text-4xl font-bold text-[#101828] dark:text-white mb-3">Platform Hub</h1>
          <p className="text-base text-[#667085] dark:text-white/50">Quick access to all Tamawal platforms.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target={p.external ? '_blank' : undefined}
              rel={p.external ? 'noopener noreferrer' : undefined}
              className="group block bg-white dark:bg-[#0d1520] border border-[#eef1f6] dark:border-white/[0.06] rounded-2xl p-6 hover:border-[#0063F5]/30 hover:shadow-lg hover:shadow-[#0063F5]/5 transition-all"
            >
              <h2 className="text-sm font-semibold text-[#101828] dark:text-white mb-2 group-hover:text-[#0063F5] transition-colors">
                {p.name}
              </h2>
              <p className="text-xs text-[#667085] dark:text-white/40 leading-relaxed mb-4">{p.description}</p>
              <div className="flex items-center gap-1 font-mono">
                <span className="text-[11px] text-[#0063F5]/70">{p.base}</span>
                <span className="text-[11px] text-[#667085] dark:text-white/25">{p.path}</span>
              </div>
              <span className="inline-block mt-3 text-xs text-[#0063F5] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Open →
              </span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
