import Link from 'next/link';

export default function CeerPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col">

      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-white/[0.06] bg-[#080808]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-white/40 hover:text-white/70 transition-colors">
            <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
              <path d="M9.5 6h-7M5.5 2.5 2 6l3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs font-medium">Back</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-white/25 px-2 py-0.5 rounded-full border border-white/[0.08]">
              EV
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-white/60">
              CEER × TAMAWAL
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 w-full">

        {/* Hero */}
        <section className="pt-24 pb-20 border-b border-white/[0.06]">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-6">
            Official Financing Partner
          </p>
          <h1 className="text-6xl font-bold tracking-tight leading-none mb-6 max-w-3xl">
            BOLD.<br />
            <span className="text-white/20">ELECTRIC.</span><br />
            SAUDI.
          </h1>
          <p className="text-sm text-white/40 max-w-md leading-relaxed">
            Tamawal powers the drive — official financing partner for Ceer Motors, Saudi Arabia's first electric vehicle brand.
          </p>
        </section>

        {/* Partnership info */}
        <section className="py-16 border-b border-white/[0.06]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden">
            {[
              { num: '01', label: 'Brand', value: 'Ceer Motors', sub: "KSA's first EV brand backed by PIF & Foxconn" },
              { num: '02', label: 'Partnership', value: 'Official', sub: 'Tamawal as exclusive financing partner' },
              { num: '03', label: 'Market', value: 'Saudi Arabia', sub: 'Aligned with Vision 2030' },
            ].map((item) => (
              <div key={item.num} className="bg-[#080808] p-8 flex flex-col gap-6">
                <span className="text-[10px] font-semibold tracking-widest text-white/20">{item.num}</span>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-white/30 mb-2">{item.label}</p>
                  <p className="text-xl font-bold tracking-tight text-white mb-1">{item.value}</p>
                  <p className="text-xs text-white/30 leading-relaxed">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-white/25 mb-8">
            Design pages
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden">
            {[
              { num: '01', label: 'Vehicle Details & Configuration', href: '/ceer/review-finance' },
              { num: '02', label: 'Finance Start & Eligibility', href: '/ceer/step-1' },
              { num: '03', label: 'Verify Identity — Enter Details', href: '/ceer/verify-identity' },
              { num: '04', label: 'Verify Identity — Approve in Nafath', href: '/ceer/nafath-approval' },
              { num: '05', label: 'Verify Identity — Overview (All Steps)', href: '/ceer/step-2' },
              { num: '06', label: 'Verifying Mobile Ownership', href: '/ceer/step-3' },
              { num: '07', label: 'SIMAH Consent', href: '/ceer/simah-consent' },
              { num: '08', label: 'Compare Financing Offers', href: '/ceer/compare-offers' },
            ].map((page) => (
              <Link key={page.href} href={page.href} className="group bg-[#080808] p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-semibold text-white/20">{page.num}</span>
                  <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{page.label}</span>
                </div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6.5 2.5 10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 group-hover:text-white/60"/>
                </svg>
              </Link>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <p className="text-[10px] text-white/20 tracking-widest uppercase">Tamawal × Ceer</p>
          <p className="text-[10px] text-white/20">{new Date().getFullYear()}</p>
        </div>
      </footer>

    </div>
  );
}
