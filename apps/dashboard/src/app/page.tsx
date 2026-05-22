import Link from 'next/link';
import TamawalLogo from '@/components/ui/TamawalLogo';

const projects = [
  {
    id: 'oms',
    name: 'Order Management',
    description: 'Track, manage and process customer orders in real time.',
    href: '/oms',
    tag: 'OMS',
    accentColor: '#0063F5',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'ode',
    name: 'Offer & Discount Engine',
    description: 'Create and manage offers, discounts, and promotions across your platform.',
    href: '/ode',
    tag: 'ODE',
    accentColor: '#7C3AED',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080d14] flex flex-col">

      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-[#eef1f6] dark:border-white/[0.06] bg-white/90 dark:bg-[#080d14]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <TamawalLogo />
          <nav className="flex items-center gap-6">
            <span className="text-xs font-medium text-[#667085] dark:text-white/40 px-2 py-0.5 rounded-full border border-[#eef1f6] dark:border-white/[0.08]">
              Internal
            </span>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 w-full">

        {/* Hero */}
        <section className="pt-20 pb-16 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-4">
            Platform
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#101828] dark:text-white leading-[1.15] mb-4 max-w-xl">
            Operations at your fingertips.
          </h1>
          <p className="text-base text-[#667085] dark:text-white/50 max-w-md leading-relaxed">
            A unified workspace for order management, offers, and discounts — built for speed and clarity.
          </p>
        </section>

        {/* Projects */}
        <section className="py-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#667085] dark:text-white/30 mb-8">
            Select a project
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#eef1f6] dark:bg-white/[0.06] border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
            {projects.map((project) => (
              <Link
                key={project.id}
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
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#eef1f6] dark:border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">
            Tamweel Platform
          </p>
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>

    </div>
  );
}
