import Link from 'next/link';

const featured = [
  {
    id: 'news',
    name: 'Feeds',
    description: 'Latest news and updates from Tamawal and the Saudi financing ecosystem.',
    href: '/news',
    tag: 'NEWS',
    accentColor: '#0063F5',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const general = [
  {
    id: 'app',
    name: 'App',
    description: 'Customer-facing mobile app simulation — browse, apply, and track financing.',
    href: '/app',
    tag: 'PWA',
    accentColor: '#7C3AED',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="18" r="1" fill="currentColor"/>
      </svg>
    ),
  },
];

function ProjectCard({ project }: { project: typeof featured[number] }) {
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

export default function MobileHubPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080d14] flex flex-col">

      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-[#eef1f6] dark:border-white/[0.06] bg-white/90 dark:bg-[#080d14]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-semibold text-[#0063F5]">Tamweel</span>
          <span className="text-xs font-medium text-[#667085] dark:text-white/40 px-2 py-0.5 rounded-full border border-[#eef1f6] dark:border-white/[0.08]">
            Mobile
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 w-full">

        {/* Hero */}
        <section className="pt-20 pb-16 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-4">
            Mobile
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#101828] dark:text-white leading-[1.15] mb-4 max-w-xl">
            Tamawal in your pocket.
          </h1>
          <p className="text-base text-[#667085] dark:text-white/50 max-w-md leading-relaxed">
            Customer-facing mobile experience — financing, news, and account management.
          </p>
        </section>

        {/* Featured */}
        <section className="pt-12 pb-8 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#667085] dark:text-white/30 mb-8">
            Featured
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#eef1f6] dark:bg-white/[0.06] border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* General */}
        <section className="py-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#667085] dark:text-white/30 mb-8">
            General
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#eef1f6] dark:bg-white/[0.06] border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
            {general.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#eef1f6] dark:border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">
            Tamawal Mobile
          </p>
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>

    </div>
  );
}
