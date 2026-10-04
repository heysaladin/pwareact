import Link from 'next/link';

const platforms = [
  {
    name: 'Tamweel Web',
    description: 'Public-facing web experience — landing, brand, and product pages.',
    href: '/tamweel-web',
    tag: 'WEB',
    accentColor: '#0063F5',
    external: false,
  },
  {
    name: 'Mobile',
    description: 'Customer-facing mobile hub — financing, news, and account management.',
    href: 'https://tamweelmobile.vercel.app/tamweel-mobile',
    tag: 'MOBILE',
    accentColor: '#7C3AED',
    external: true,
  },
  {
    name: 'Dashboard',
    description: 'Internal operations and CPS management dashboard.',
    href: 'https://tamweelsaas.vercel.app/tamweel-dashboard',
    tag: 'DASHBOARD',
    accentColor: '#10B981',
    external: true,
  },
];

export default function TamweelWebHub() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      <header className="sticky top-0 z-10 border-b border-[#eef1f6] bg-white/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-xs text-[#667085] hover:text-[#0063F5] transition-colors">← Back</Link>
          <span className="text-sm font-semibold text-[#0063F5]">Tamweel</span>
          <span className="text-xs font-medium text-[#667085] px-2 py-0.5 rounded-full border border-[#eef1f6]">
            Platform Hub
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 w-full">

        <section className="pt-20 pb-16 border-b border-[#eef1f6]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-4">Platform</p>
          <h1 className="text-4xl font-bold tracking-tight text-[#101828] leading-[1.15] mb-4 max-w-xl">
            All platforms, one place.
          </h1>
          <p className="text-base text-[#667085] max-w-md leading-relaxed">
            Jump to any Tamweel platform — web, mobile, or internal dashboard.
          </p>
        </section>

        <section className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#eef1f6] border border-[#eef1f6] rounded-xl overflow-hidden">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target={p.external ? '_blank' : undefined}
                rel={p.external ? 'noreferrer' : undefined}
                className="group bg-white p-7 flex flex-col gap-6 hover:bg-[#f8fafc] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: p.accentColor }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#9aa4b2]">{p.tag}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-[#101828] mb-1.5 group-hover:text-[#0063F5] transition-colors">{p.name}</h2>
                  <p className="text-xs text-[#667085] leading-relaxed">{p.description}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#9aa4b2] group-hover:text-[#0063F5] transition-colors">
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

      <footer className="border-t border-[#eef1f6]">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <p className="text-xs text-[#9aa4b2]">Tamawal Platform Hub</p>
          <p className="text-xs text-[#9aa4b2]">{new Date().getFullYear()}</p>
        </div>
      </footer>

    </div>
  );
}
