import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Best Rates Guaranteed',
    description: 'We compare offers from 15+ banks so you always get the most competitive rate available.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Apply in 3 Minutes',
    description: 'Fill your profile once. Get real offers from multiple banks instantly — no branch visits.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 9h14" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'No Hidden Fees',
    description: 'Full transparency on every offer. Know exactly what you pay before you commit.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Licensed by SAMA',
    description: 'Fully regulated by the Saudi Central Bank. Your data is encrypted and always protected.',
  },
];

const products = [
  { name: 'Car Financing', icon: '/product-icon-car.svg', href: '/tamweel-web/hub#products' },
  { name: 'Personal Loans', icon: '/product-icon-personal-mask.svg', href: '/tamweel-web/hub#products' },
  { name: 'Real Estate', icon: '/product-icon-realestate.svg', href: '/tamweel-web/hub#products' },
  { name: 'Credit Cards', icon: '/product-icon-creditcard.svg', href: '/tamweel-web/hub#products' },
];

export default function TamweelWebHome() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080d14] font-sans">

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[#eef1f6] dark:border-white/[0.06] bg-white/95 dark:bg-[#080d14]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-[#9aa4b2] hover:text-[#667085] transition-colors mr-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Image src="/logo-tamawal-web-blue.svg" alt="Tamawal" width={100} height={28} />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/tamweel-web/hub#products" className="text-sm text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors">Products</Link>
            <Link href="/tamweel-web/hub#how-it-works" className="text-sm text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors">How it Works</Link>
            <Link href="/tamweel-web/hub#partners" className="text-sm text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors">Partners</Link>
            <Link href="/tamweel-web/hub#about" className="text-sm text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden md:block text-sm font-medium text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors">
              Sign in
            </a>
            <Link
              href="/tamweel-web/hub"
              className="text-sm font-semibold text-white bg-[#0063F5] px-4 py-2 rounded-lg hover:bg-[#0052cc] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(0,99,245,0.1),transparent)] dark:bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(0,99,245,0.15),transparent)]" />
        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0063F5]/10 text-[#0063F5] text-xs font-semibold mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0063F5] animate-pulse" />
            Saudi Arabia&apos;s #1 Financing Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#101828] dark:text-white leading-[1.05] mb-8 max-w-4xl mx-auto">
            Compare. Apply.<br />
            <span className="text-[#0063F5]">Get Funded.</span>
          </h1>
          <p className="text-xl text-[#667085] dark:text-white/50 leading-relaxed mb-12 max-w-2xl mx-auto">
            Tamawal connects you to 15+ Saudi banks in one place. Get real financing offers in minutes — no paperwork, no branch visits.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-14">
            <Link
              href="/tamweel-web/hub"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#0063F5] text-white text-base font-semibold rounded-xl hover:bg-[#0052cc] transition-colors shadow-lg shadow-[#0063F5]/25"
            >
              Check My Eligibility
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.33 8h9.33M8.67 4 13 8l-4.33 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a
              href="#"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-[#eef1f6] dark:border-white/[0.1] text-[#101828] dark:text-white text-base font-semibold rounded-xl hover:bg-[#f8fafc] dark:hover:bg-white/[0.04] transition-colors"
            >
              Download the App
            </a>
          </div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-[#667085] dark:text-white/40">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4" stroke="#0063F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Free to use
            </div>
            <div className="flex items-center gap-2 text-sm text-[#667085] dark:text-white/40">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4" stroke="#0063F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              No credit impact
            </div>
            <div className="flex items-center gap-2 text-sm text-[#667085] dark:text-white/40">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4" stroke="#0063F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              SAMA licensed
            </div>
            <div className="flex items-center gap-2 text-sm text-[#667085] dark:text-white/40">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4" stroke="#0063F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Results in 3 minutes
            </div>
          </div>
        </div>
      </section>

      {/* ── App Preview ─────────────────────────────────────────────────── */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-10 bg-[#0063F5]/5 rounded-full blur-3xl" />
            <Image
              src="/hero-phones.png"
              alt="Tamawal App"
              width={560}
              height={400}
              className="relative drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ── Products ────────────────────────────────────────────────────── */}
      <section className="py-20 border-t border-[#eef1f6] dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-2">Products</p>
              <h2 className="text-2xl font-bold text-[#101828] dark:text-white">Everything you need to get financed</h2>
            </div>
            <Link href="/tamweel-web/hub#products" className="hidden md:flex items-center gap-1.5 text-sm font-medium text-[#0063F5] hover:text-[#0052cc] transition-colors">
              View all
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group flex flex-col items-center gap-4 p-6 bg-[#f8fafc] dark:bg-white/[0.03] border border-[#eef1f6] dark:border-white/[0.06] rounded-2xl hover:border-[#0063F5]/30 hover:bg-white dark:hover:bg-white/[0.05] hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#0063F5]/10 flex items-center justify-center shadow-sm">
                  <Image src={p.icon} alt={p.name} width={24} height={24} />
                </div>
                <span className="text-sm font-semibold text-[#101828] dark:text-white group-hover:text-[#0063F5] transition-colors text-center">{p.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc] dark:bg-white/[0.02] border-y border-[#eef1f6] dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-3">Why Tamawal</p>
            <h2 className="text-3xl font-bold text-[#101828] dark:text-white mb-4">Built differently. Built for you.</h2>
            <p className="text-base text-[#667085] dark:text-white/50 max-w-md mx-auto">
              We built Tamawal to remove every barrier between you and the financing you deserve.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white dark:bg-[#0d1520] border border-[#eef1f6] dark:border-white/[0.06] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-[#f0f5ff] dark:bg-[#0063F5]/10 text-[#0063F5] flex items-center justify-center mb-5">
                  {f.icon}
                </div>
                <h3 className="text-sm font-semibold text-[#101828] dark:text-white mb-2">{f.title}</h3>
                <p className="text-xs text-[#667085] dark:text-white/40 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── App Download ────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#0063F5] rounded-3xl px-10 py-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(255,255,255,0.07),transparent)]" />
            <div className="relative text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white mb-3">
                Get the app. Get funded.
              </h2>
              <p className="text-base text-white/70 max-w-md mb-8">
                Available on iOS and Android. Join 50,000+ Saudis who found their best financing deal through Tamawal.
              </p>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <Image src="/appstore.svg" alt="App Store" width={130} height={40} />
                <Image src="/playstore.svg" alt="Google Play" width={130} height={40} />
              </div>
            </div>
            <div className="relative flex-shrink-0">
              <Image
                src="/hero-phones.png"
                alt="Tamawal App"
                width={280}
                height={200}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#eef1f6] dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <Image src="/logo-tamawal-web-blue.svg" alt="Tamawal" width={100} height={28} className="mb-4" />
            <p className="text-xs text-[#667085] dark:text-white/40 leading-relaxed max-w-xs">
              Licensed financial aggregator regulated by the Saudi Central Bank (SAMA).
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="text-xs font-semibold text-[#101828] dark:text-white mb-4">Platform</p>
              <ul className="space-y-2.5">
                <li><Link href="/tamweel-web/hub" className="text-xs text-[#667085] dark:text-white/40 hover:text-[#101828] dark:hover:text-white transition-colors">Hub</Link></li>
                <li><Link href="/tamweel-web/hub#products" className="text-xs text-[#667085] dark:text-white/40 hover:text-[#101828] dark:hover:text-white transition-colors">Products</Link></li>
                <li><Link href="/tamweel-web/hub#partners" className="text-xs text-[#667085] dark:text-white/40 hover:text-[#101828] dark:hover:text-white transition-colors">Partners</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#101828] dark:text-white mb-4">Company</p>
              <ul className="space-y-2.5">
                {['About Us', 'Brand', 'Materials'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-[#667085] dark:text-white/40 hover:text-[#101828] dark:hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#eef1f6] dark:border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
            <p className="text-xs text-[#9aa4b2] dark:text-white/25">© {new Date().getFullYear()} Tamawal. All rights reserved.</p>
            <p className="text-xs text-[#9aa4b2] dark:text-white/25">Regulated by SAMA</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
