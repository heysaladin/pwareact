import Link from 'next/link';
import TamawalLogo from '@/components/ui/TamawalLogo';

const projects = [
  {
    id: 'oms',
    name: 'Order Management',
    description: 'Track, manage and process customer orders in real time.',
    href: '/oms',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accentColor: '#0063F5',
    tag: 'OMS',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 flex flex-col">
      <header className="px-8 py-5 border-b border-[#eef1f6] dark:border-slate-800 bg-white dark:bg-slate-900">
        <TamawalLogo />
      </header>

      <main className="flex-1 px-8 py-10 max-w-6xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#101828] dark:text-white">Projects</h1>
          <p className="text-sm text-[#667085] dark:text-slate-400 mt-1">Select a project to continue</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group rounded-xl border border-[#eef1f6] dark:border-slate-800 bg-white dark:bg-slate-900 p-5 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-[#bbd5fb] dark:hover:border-blue-700 transition-all duration-150"
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: project.accentColor }}
                >
                  {project.icon}
                </div>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#eef1f6] dark:bg-slate-800 text-[#667085] dark:text-slate-400">
                  {project.tag}
                </span>
              </div>

              <div className="flex-1">
                <h2 className="text-sm font-semibold text-[#101828] dark:text-white group-hover:text-[#0063F5] dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h2>
                <p className="text-xs text-[#667085] dark:text-slate-400 mt-1 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-1 text-xs font-medium text-[#0063F5] dark:text-blue-400">
                Open
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
