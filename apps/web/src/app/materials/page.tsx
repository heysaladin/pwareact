import Link from 'next/link';
import TamawalLogo from '@/components/ui/TamawalLogo';

const materials = [
  {
    category: 'Logo',
    items: [
      { name: 'Logo — SVG', description: 'Scalable vector, light version', format: 'SVG', filename: 'tamawal-logo.svg' },
      { name: 'Logo — Dark SVG', description: 'Scalable vector, dark/reversed version', format: 'SVG', filename: 'tamawal-logo-dark.svg' },
      { name: 'Logo — PNG 2x', description: 'High-res raster, transparent background', format: 'PNG', filename: 'tamawal-logo@2x.png' },
      { name: 'Logo — Favicon', description: 'Browser favicon, 32×32', format: 'ICO', filename: 'favicon.ico' },
    ],
  },
  {
    category: 'Brand Kit',
    items: [
      { name: 'Brand Guidelines PDF', description: 'Full brand guidelines document', format: 'PDF', filename: 'tamawal-brand-guidelines.pdf' },
      { name: 'Color Palette', description: 'Hex, RGB, and CMYK values', format: 'ASE', filename: 'tamawal-colors.ase' },
      { name: 'Typography Specimen', description: 'Inter font usage reference sheet', format: 'PDF', filename: 'tamawal-typography.pdf' },
    ],
  },
  {
    category: 'App Icons',
    items: [
      { name: 'App Icon — iOS', description: '1024×1024px, no alpha channel', format: 'PNG', filename: 'app-icon-ios.png' },
      { name: 'App Icon — Android', description: '512×512px adaptive icon', format: 'PNG', filename: 'app-icon-android.png' },
      { name: 'App Icon — All Sizes', description: 'Complete icon set for both platforms', format: 'ZIP', filename: 'app-icons.zip' },
    ],
  },
  {
    category: 'Marketing',
    items: [
      { name: 'Social Media Templates', description: 'Instagram, Twitter, LinkedIn formats', format: 'FIG', filename: 'social-templates.fig' },
      { name: 'Presentation Template', description: 'PowerPoint + Keynote versions', format: 'ZIP', filename: 'presentation-template.zip' },
      { name: 'Email Signature', description: 'HTML email signature template', format: 'HTML', filename: 'email-signature.html' },
    ],
  },
];

const formatColors: Record<string, string> = {
  SVG: '#10B981',
  PNG: '#0063F5',
  PDF: '#EF4444',
  ASE: '#F59E0B',
  ICO: '#8B5CF6',
  FIG: '#A855F7',
  ZIP: '#6B7280',
  HTML: '#F97316',
};

export default function MaterialsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080d14]">

      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-[#eef1f6] dark:border-white/[0.06] bg-white/90 dark:bg-[#080d14]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-[#9aa4b2] dark:text-white/25 hover:text-[#101828] dark:hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <TamawalLogo />
          </div>
          <Link
            href="/brand"
            className="text-xs font-medium text-[#667085] dark:text-white/40 hover:text-[#101828] dark:hover:text-white transition-colors"
          >
            Brand Guidelines →
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6">

        {/* Hero */}
        <section className="pt-20 pb-16 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0063F5] mb-4">Materials</p>
          <h1 className="text-4xl font-bold tracking-tight text-[#101828] dark:text-white leading-[1.15] mb-4 max-w-xl">
            Brand Assets & Downloads.
          </h1>
          <p className="text-base text-[#667085] dark:text-white/50 max-w-md leading-relaxed">
            Official logos, icons, templates, and brand materials — ready to download and use.
          </p>
        </section>

        {/* Asset categories */}
        {materials.map((group) => (
          <section key={group.category} className="py-12 border-b border-[#eef1f6] dark:border-white/[0.06]">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#667085] dark:text-white/30 mb-6">
              {group.category}
            </p>
            <div className="flex flex-col divide-y divide-[#eef1f6] dark:divide-white/[0.06] border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
              {group.items.map((item) => (
                <div
                  key={item.filename}
                  className="bg-white dark:bg-[#080d14] px-6 py-4 flex items-center justify-between gap-4 hover:bg-[#f8fafc] dark:hover:bg-white/[0.02] transition-colors group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className="shrink-0 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded"
                      style={{
                        color: formatColors[item.format] ?? '#667085',
                        backgroundColor: `${formatColors[item.format] ?? '#667085'}15`,
                      }}
                    >
                      {item.format}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[#101828] dark:text-white truncate">{item.name}</p>
                      <p className="text-xs text-[#667085] dark:text-white/40 mt-0.5">{item.description}</p>
                    </div>
                  </div>
                  <button className="shrink-0 flex items-center gap-1.5 text-xs font-medium text-[#9aa4b2] dark:text-white/25 group-hover:text-[#0063F5] dark:group-hover:text-[#0063F5] transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 2v7M4 6.5l3 3 3-3M2.5 10.5v.5a1 1 0 001 1h7a1 1 0 001-1v-.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Download
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Brand guidelines CTA */}
        <section className="py-16">
          <div className="border border-[#eef1f6] dark:border-white/[0.06] rounded-xl p-8 flex items-center justify-between gap-6">
            <div>
              <h3 className="text-sm font-semibold text-[#101828] dark:text-white mb-1">Not sure how to use these?</h3>
              <p className="text-xs text-[#667085] dark:text-white/40">Read the brand guidelines for usage rules and context.</p>
            </div>
            <Link
              href="/brand"
              className="shrink-0 flex items-center gap-1.5 text-xs font-medium text-[#0063F5] border border-[#0063F5]/20 px-4 py-2.5 rounded-lg hover:bg-[#0063F5]/5 transition-colors"
            >
              Brand Guidelines
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6.5 2.5 10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </section>

      </main>

      <footer className="border-t border-[#eef1f6] dark:border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">Tamawal Design</p>
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">{new Date().getFullYear()}</p>
        </div>
      </footer>

    </div>
  );
}
