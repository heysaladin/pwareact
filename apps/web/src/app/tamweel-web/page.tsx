import Link from 'next/link';
import Image from 'next/image';

const stats = [
  { value: '+50K', label: 'Active Users' },
  { value: '15+', label: 'Partner Banks' },
  { value: '3 Min', label: 'Average Approval' },
  { value: '98%', label: 'Satisfaction Rate' },
];

const products = [
  {
    icon: '/product-icon-car.svg',
    name: 'Car Financing',
    description: 'Get the car you want with competitive rates from top Saudi banks — new or used.',
    tag: 'Most Popular',
    tagColor: '#0063F5',
  },
  {
    icon: '/product-icon-personal-mask.svg',
    name: 'Personal Loans',
    description: 'Fast personal financing tailored to your salary and needs. No hidden fees.',
    tag: null,
    tagColor: null,
  },
  {
    icon: '/product-icon-realestate.svg',
    name: 'Real Estate',
    description: 'Home financing solutions with the best rates from Saudi mortgage lenders.',
    tag: null,
    tagColor: null,
  },
  {
    icon: '/product-icon-creditcard.svg',
    name: 'Credit Cards',
    description: 'Compare and apply for credit cards that match your spending habits.',
    tag: null,
    tagColor: null,
  },
];

const steps = [
  {
    number: '01',
    title: 'Fill your profile',
    description: 'Enter your basic info once. We use it to match you with the right offers.',
  },
  {
    number: '02',
    title: 'Compare offers',
    description: 'See real offers from multiple banks side-by-side — rate, tenure, and monthly payment.',
  },
  {
    number: '03',
    title: 'Apply in one tap',
    description: 'Choose the best offer and submit your application directly through the app.',
  },
  {
    number: '04',
    title: 'Get funded',
    description: 'Receive your approval and funds faster than going to a bank directly.',
  },
];

const partners = [
  { name: 'Alinma', src: '/logos/alinma.png' },
  { name: 'ANB', src: '/logos/anb.png' },
  { name: 'Al Yusr', src: '/logos/alyusr.png' },
  { name: 'Nayifat', src: '/logos/nayifat.png' },
  { name: 'Taajeer', src: '/logos/taajeer.png' },
  { name: 'Rasheed', src: '/logos/rasheed.png' },
  { name: 'Badaya', src: '/logos/badaya.png' },
  { name: 'Tamweel Aloula', src: '/logos/tamweel-aloula.png' },
];

const values = [
  {
    img: '/about-value-easy.png',
    title: 'Easy to Use',
    description: 'A simple, guided flow that gets you from sign-up to offer in under 3 minutes.',
  },
  {
    img: '/about-value-integrated.png',
    title: 'Fully Integrated',
    description: 'Connected to top Saudi banks and lenders — one app, every option.',
  },
  {
    img: '/about-value-reliable.png',
    title: 'Trustworthy',
    description: 'Licensed by SAMA. Your data is encrypted and never shared without consent.',
  },
];

export default function TamweelWebPage() {
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
            <a href="#products" className="text-sm text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors">Products</a>
            <a href="#how-it-works" className="text-sm text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors">How it Works</a>
            <a href="#partners" className="text-sm text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors">Partners</a>
            <a href="#about" className="text-sm text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden md:block text-sm font-medium text-[#667085] dark:text-white/50 hover:text-[#101828] dark:hover:text-white transition-colors">
              Sign in
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-white bg-[#0063F5] px-4 py-2 rounded-lg hover:bg-[#0052cc] transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#080d14]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,99,245,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,99,245,0.12),transparent)]" />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0063F5]/10 text-[#0063F5] text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0063F5] animate-pulse" />
              Licensed by SAMA · Saudi Arabia
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] dark:text-white leading-[1.1] mb-6">
              The smarter way<br />
              to get <span className="text-[#0063F5]">financed.</span>
            </h1>
            <p className="text-lg text-[#667085] dark:text-white/50 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              Compare loans and financing offers from top Saudi banks in one place. Apply once, get multiple offers, choose the best.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <a
                href="#"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0063F5] text-white text-sm font-semibold rounded-xl hover:bg-[#0052cc] transition-colors"
              >
                Check Your Eligibility
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33 8h9.33M8.67 4 13 8l-4.33 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 border border-[#eef1f6] dark:border-white/[0.1] text-[#101828] dark:text-white text-sm font-semibold rounded-xl hover:bg-[#f8fafc] dark:hover:bg-white/[0.04] transition-colors"
              >
                See How It Works
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
              <Image src="/appstore.svg" alt="App Store" width={120} height={36} />
              <Image src="/playstore.svg" alt="Google Play" width={120} height={36} />
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-8 bg-[#0063F5]/5 rounded-full blur-3xl" />
              <Image
                src="/hero-phones.png"
                alt="Tamawal App"
                width={420}
                height={520}
                className="relative drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────────────── */}
      <section className="border-y border-[#eef1f6] dark:border-white/[0.06] bg-[#f8fafc] dark:bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-[#101828] dark:text-white mb-1">{s.value}</p>
              <p className="text-sm text-[#667085] dark:text-white/40">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Products ────────────────────────────────────────────────────── */}
      <section id="products" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-3">Products</p>
          <h2 className="text-3xl font-bold text-[#101828] dark:text-white mb-4">
            Every type of financing, one app.
          </h2>
          <p className="text-base text-[#667085] dark:text-white/50 max-w-md mx-auto">
            From cars to homes to personal needs — compare real offers from Saudi banks in minutes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <div
              key={p.name}
              className="group relative bg-white dark:bg-[#0d1520] border border-[#eef1f6] dark:border-white/[0.06] rounded-2xl p-6 hover:border-[#0063F5]/30 hover:shadow-lg hover:shadow-[#0063F5]/5 transition-all"
            >
              {p.tag && (
                <span
                  className="absolute top-4 right-4 text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: p.tagColor ?? '#0063F5' }}
                >
                  {p.tag}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-[#f0f5ff] dark:bg-[#0063F5]/10 flex items-center justify-center mb-5">
                <Image src={p.icon} alt={p.name} width={24} height={24} />
              </div>
              <h3 className="text-sm font-semibold text-[#101828] dark:text-white mb-2 group-hover:text-[#0063F5] transition-colors">
                {p.name}
              </h3>
              <p className="text-xs text-[#667085] dark:text-white/40 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it Works ────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 bg-[#f8fafc] dark:bg-white/[0.02] border-y border-[#eef1f6] dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-3">How It Works</p>
            <h2 className="text-3xl font-bold text-[#101828] dark:text-white mb-4">
              From sign-up to funded in minutes.
            </h2>
            <p className="text-base text-[#667085] dark:text-white/50 max-w-md mx-auto">
              No paperwork. No branch visits. Just a simple digital flow.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-[#eef1f6] dark:bg-white/[0.06] -translate-x-1/2 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#0063F5] text-white text-xs font-bold flex items-center justify-center mb-5">
                    {step.number}
                  </div>
                  <h3 className="text-sm font-semibold text-[#101828] dark:text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-[#667085] dark:text-white/40 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Tamawal ─────────────────────────────────────────────────── */}
      <section id="about" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-3">Why Tamawal</p>
          <h2 className="text-3xl font-bold text-[#101828] dark:text-white mb-4">
            Built for Saudi borrowers.
          </h2>
          <p className="text-base text-[#667085] dark:text-white/50 max-w-md mx-auto">
            We built Tamawal to make financing transparent, fast, and fair for everyone in the Kingdom.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden bg-[#f0f5ff] dark:bg-[#0063F5]/10 flex items-center justify-center">
                <Image src={v.img} alt={v.title} width={56} height={56} className="object-contain" />
              </div>
              <h3 className="text-sm font-semibold text-[#101828] dark:text-white mb-2">{v.title}</h3>
              <p className="text-xs text-[#667085] dark:text-white/40 leading-relaxed max-w-xs mx-auto">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Partners ────────────────────────────────────────────────────── */}
      <section id="partners" className="py-24 border-t border-[#eef1f6] dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-3">Partners</p>
            <h2 className="text-3xl font-bold text-[#101828] dark:text-white mb-4">
              Trusted by top Saudi lenders.
            </h2>
            <p className="text-base text-[#667085] dark:text-white/50 max-w-md mx-auto">
              We work with leading banks and financial institutions to bring you the best financing options.
            </p>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                <Image src={p.src} alt={p.name} width={80} height={32} className="object-contain max-h-8" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-24 mx-6 mb-12">
        <div className="max-w-6xl mx-auto bg-[#0063F5] rounded-3xl px-10 py-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(255,255,255,0.06),transparent)]" />
          <div className="relative text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white mb-3">Ready to find your best offer?</h2>
            <p className="text-base text-white/70 max-w-md">
              Join thousands of Saudis who found better financing through Tamawal. Free to use, no commitment.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#0063F5] text-sm font-semibold rounded-xl hover:bg-white/90 transition-colors"
            >
              Check Eligibility Free
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 text-white text-sm font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Download the App
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#eef1f6] dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Image src="/logo-tamawal-web-blue.svg" alt="Tamawal" width={100} height={28} className="mb-4" />
            <p className="text-xs text-[#667085] dark:text-white/40 leading-relaxed max-w-xs">
              Tamawal is a licensed financial aggregator regulated by the Saudi Central Bank (SAMA). We connect borrowers with the best financing options in the Kingdom.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#101828] dark:text-white mb-4">Products</p>
            <ul className="space-y-2.5">
              {['Car Financing', 'Personal Loans', 'Real Estate', 'Credit Cards'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs text-[#667085] dark:text-white/40 hover:text-[#101828] dark:hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#101828] dark:text-white mb-4">Company</p>
            <ul className="space-y-2.5">
              {['About Us', 'Partners', 'Brand', 'Materials'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs text-[#667085] dark:text-white/40 hover:text-[#101828] dark:hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
            <a href="/platform-hub" className="inline-block mt-6 text-xs text-[#667085] dark:text-white/40 hover:text-[#101828] dark:hover:text-white transition-colors font-semibold">Platform Hub →</a>
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
