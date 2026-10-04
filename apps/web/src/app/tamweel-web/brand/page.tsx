import Link from 'next/link';
import Image from 'next/image';

const colorPalette = [
  { name: 'Primary Blue', hex: '#0063F5', usage: 'CTAs, links, key actions' },
  { name: 'Dark', hex: '#101828', usage: 'Headings, body text' },
  { name: 'Gray 600', hex: '#667085', usage: 'Secondary text, captions' },
  { name: 'Gray 200', hex: '#eef1f6', usage: 'Borders, dividers, backgrounds', border: true },
  { name: 'White', hex: '#FFFFFF', usage: 'Page backgrounds, cards', border: true },
  { name: 'Success', hex: '#10B981', usage: 'Positive states, confirmations' },
  { name: 'Warning', hex: '#FFDD33', usage: 'SME, highlights' },
  { name: 'Dark BG', hex: '#080d14', usage: 'Dark mode background' },
];

const typeScale = [
  { label: 'Display', size: 'text-4xl', weight: 'font-bold', sample: 'Design at a glance.' },
  { label: 'Heading 1', size: 'text-2xl', weight: 'font-bold', sample: 'Tamawal Brand Identity' },
  { label: 'Heading 2', size: 'text-lg', weight: 'font-semibold', sample: 'Typography System' },
  { label: 'Body', size: 'text-sm', weight: 'font-normal', sample: 'A unified design language for every Tamawal touchpoint, from mobile app to web.' },
  { label: 'Caption', size: 'text-xs', weight: 'font-medium', sample: 'BRAND GUIDELINES · 2025' },
];

const principles = [
  {
    title: 'Clarity',
    description: "Every element earns its place. Remove what doesn't serve the user.",
  },
  {
    title: 'Trust',
    description: "Consistency builds confidence. Use the system, don't break it.",
  },
  {
    title: 'Motion',
    description: 'Transitions are purposeful — they orient, not entertain.',
  },
  {
    title: 'Accessibility',
    description: 'Readable at every size, legible in every context.',
  },
];

export default function TamweelWebBrandPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080d14]">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-10 border-b border-[#eef1f6] dark:border-white/[0.06] bg-white/90 dark:bg-[#080d14]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/tamweel-web" className="text-[#9aa4b2] dark:text-white/25 hover:text-[#101828] dark:hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Image src="/logo-tamawal-web-blue.svg" alt="Tamawal" width={90} height={24} />
          </div>
          <Link
            href="/materials"
            className="text-xs font-medium text-[#667085] dark:text-white/40 hover:text-[#101828] dark:hover:text-white transition-colors"
          >
            Download Assets →
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6">

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="pt-20 pb-16 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-4">Brand</p>
          <h1 className="text-4xl font-bold tracking-tight text-[#101828] dark:text-white leading-[1.15] mb-4 max-w-xl">
            Tamawal Brand Identity.
          </h1>
          <p className="text-base text-[#667085] dark:text-white/50 max-w-md leading-relaxed">
            Guidelines for color, typography, and visual language — the building blocks of every Tamawal experience.
          </p>
        </section>

        {/* ── Principles ──────────────────────────────────────────────────── */}
        <section className="py-16 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#667085] dark:text-white/30 mb-8">
            Principles
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#eef1f6] dark:bg-white/[0.06] border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
            {principles.map((p) => (
              <div key={p.title} className="bg-white dark:bg-[#080d14] p-7">
                <h3 className="text-sm font-semibold text-[#101828] dark:text-white mb-2">{p.title}</h3>
                <p className="text-xs text-[#667085] dark:text-white/40 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Logo Usage ──────────────────────────────────────────────────── */}
        <section className="py-16 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#667085] dark:text-white/30 mb-8">
            Logo Usage
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-[#eef1f6] dark:border-white/[0.06] rounded-xl p-8 flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16">
                <Image src="/logo-tamawal-web-blue.svg" alt="Tamawal logo — light" width={112} height={33} />
              </div>
              <p className="text-xs text-[#667085] dark:text-white/40 text-center">Default — light background</p>
            </div>
            <div className="bg-[#080d14] border border-white/[0.06] rounded-xl p-8 flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16">
                <Image src="/logo-tamawal-web.svg" alt="Tamawal logo — dark" width={112} height={33} />
              </div>
              <p className="text-xs text-white/40 text-center">Reversed — dark background</p>
            </div>
            <div className="bg-[#0063F5] rounded-xl p-8 flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16">
                <Image src="/logo-tamawal-web.svg" alt="Tamawal logo — brand" width={112} height={33} />
              </div>
              <p className="text-xs text-white/60 text-center">On brand color</p>
            </div>
          </div>
          <div className="mt-4 p-5 border border-[#eef1f6] dark:border-white/[0.06] rounded-xl">
            <p className="text-xs font-semibold text-[#101828] dark:text-white mb-3">Clear space rule</p>
            <p className="text-xs text-[#667085] dark:text-white/40 leading-relaxed">
              Always maintain a minimum clear space equal to the cap-height of the wordmark on all sides. Never place the logo on a busy background or use unapproved color combinations.
            </p>
          </div>
        </section>

        {/* ── Colors ──────────────────────────────────────────────────────── */}
        <section className="py-16 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#667085] dark:text-white/30 mb-8">
            Color Palette
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {colorPalette.map((color) => (
              <div key={color.name} className="flex flex-col gap-3">
                <div
                  className="h-20 rounded-lg"
                  style={{
                    backgroundColor: color.hex,
                    border: color.border ? '1px solid #eef1f6' : undefined,
                  }}
                />
                <div>
                  <p className="text-xs font-semibold text-[#101828] dark:text-white">{color.name}</p>
                  <p className="text-xs text-[#9aa4b2] dark:text-white/25 font-mono mt-0.5">{color.hex}</p>
                  <p className="text-xs text-[#667085] dark:text-white/40 mt-1 leading-snug">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Typography ──────────────────────────────────────────────────── */}
        <section className="py-16 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#667085] dark:text-white/30 mb-8">
            Typography
          </p>
          <div className="mb-8 p-6 border border-[#eef1f6] dark:border-white/[0.06] rounded-xl">
            <p className="text-xs text-[#9aa4b2] dark:text-white/25 mb-2">Typeface</p>
            <p className="text-2xl font-bold text-[#101828] dark:text-white">Inter</p>
            <p className="text-xs text-[#667085] dark:text-white/40 mt-1">Used across all digital touchpoints — web, app, and marketing.</p>
          </div>
          <div className="flex flex-col divide-y divide-[#eef1f6] dark:divide-white/[0.06] border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
            {typeScale.map((t) => (
              <div key={t.label} className="bg-white dark:bg-[#080d14] px-6 py-5 flex items-baseline gap-6">
                <span className="text-xs font-medium text-[#9aa4b2] dark:text-white/25 w-20 shrink-0">{t.label}</span>
                <span className={`${t.size} ${t.weight} text-[#101828] dark:text-white leading-snug`}>{t.sample}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section className="py-16">
          <div className="border border-[#eef1f6] dark:border-white/[0.06] rounded-xl p-8 flex items-center justify-between gap-6">
            <div>
              <h3 className="text-sm font-semibold text-[#101828] dark:text-white mb-1">Need the assets?</h3>
              <p className="text-xs text-[#667085] dark:text-white/40">Download logos, icons, and brand materials.</p>
            </div>
            <Link
              href="/materials"
              className="shrink-0 flex items-center gap-1.5 text-xs font-medium text-white bg-[#0063F5] px-4 py-2.5 rounded-lg hover:bg-[#0052cc] transition-colors"
            >
              View Materials
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6.5 2.5 10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </section>

      </main>

      <footer className="border-t border-[#eef1f6] dark:border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">Tamawal Brand</p>
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">{new Date().getFullYear()}</p>
        </div>
      </footer>

    </div>
  );
}
