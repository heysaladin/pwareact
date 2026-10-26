import Link from 'next/link'

export default function TaasPage() {
  return (
    <div className="taas min-h-screen bg-[#f2f4f7] flex flex-col items-center justify-center gap-12 px-6 py-16">
      {/* Logo */}
      <div className="flex flex-col items-center gap-3">
        <div className="bg-[#0063f5] w-16 h-16 rounded-2xl flex items-center justify-center">
          <span className="text-white text-3xl font-bold">T</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0063f5]">TAAS</p>
          <h1 className="taas-serif text-5xl font-medium text-[#101828]">Tamawal as a Service</h1>
          <p className="text-[#475467] text-[15px]">White-label financing journeys for partners.</p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-4 justify-center max-w-3xl w-full">
        {[
          { href: '/taas/00-explore-financing', label: 'Base Template', desc: 'The default end-to-end financing journey.' },
          { href: '/ceer', label: 'Ceer', desc: 'Ceer × Tamawal financing experience.' },
          { href: '/lucid', label: 'Lucid', desc: 'Lucid × Tamawal financing experience.' },
          { href: '/mouzare', label: 'Mouzare', desc: 'Mouzare × Tamawal financing experience.' },
        ].map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="bg-white border border-[#eaecf0] rounded-2xl p-6 w-56 flex flex-col gap-3 hover:border-[#0063f5] hover:shadow-md transition-all group"
          >
            <div className="bg-[#f0f6ff] w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-[#0063f5] transition-colors">
              <span className="text-[#0063f5] text-sm font-bold group-hover:text-white transition-colors">{label[0]}</span>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[#101828] text-[15px]">{label}</p>
              <p className="text-[#475467] text-sm leading-relaxed">{desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
