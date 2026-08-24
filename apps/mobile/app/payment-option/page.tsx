import Link from 'next/link';

const platforms = [
  {
    id: 'ios',
    name: 'iOS',
    description: 'Apple Pay, STC Pay, Credit / Debit card.',
    href: '/pay/ios',
    tag: 'iOS',
    accentColor: '#101828',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.54 3.99zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'android',
    name: 'Android',
    description: 'STC Pay, Samsung Pay, Credit / Debit card.',
    href: '/pay/android',
    tag: 'Android',
    accentColor: '#3DDC84',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0012 1.5c-.69 0-1.35.12-1.96.33L8.56.35c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C7.88 3.15 7 4.62 7 6.25V7h10v-.75c0-1.63-.88-3.1-2.47-4.09zM10 5H9V4h1v1zm5 0h-1V4h1v1z" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function PaymentOptionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080d14] flex flex-col">

      <header className="sticky top-0 z-10 border-b border-[#eef1f6] dark:border-white/[0.06] bg-white/90 dark:bg-[#080d14]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-[#0063F5]">Tamweel</Link>
          <span className="text-xs font-medium text-[#667085] dark:text-white/40 px-2 py-0.5 rounded-full border border-[#eef1f6] dark:border-white/[0.08]">Pay</span>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 w-full">
        <section className="pt-20 pb-16 border-b border-[#eef1f6] dark:border-white/[0.06]">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#10B981] mb-4">Pay</p>
          <h1 className="text-4xl font-bold tracking-tight text-[#101828] dark:text-white leading-[1.15] mb-4 max-w-xl">Choose your platform.</h1>
          <p className="text-base text-[#667085] dark:text-white/50 max-w-md leading-relaxed">Payment experience design — select a platform to view the flow.</p>
        </section>

        <section className="py-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#667085] dark:text-white/30 mb-8">Select platform</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#eef1f6] dark:bg-white/[0.06] border border-[#eef1f6] dark:border-white/[0.06] rounded-xl overflow-hidden">
            {platforms.map((platform) => (
              <Link
                key={platform.id}
                href={platform.href}
                className="group bg-white dark:bg-[#080d14] p-7 flex flex-col gap-6 hover:bg-[#f8fafc] dark:hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0" style={{ backgroundColor: platform.accentColor }}>
                    {platform.icon}
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#9aa4b2] dark:text-white/25">{platform.tag}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-[#101828] dark:text-white mb-1.5 group-hover:text-[#10B981] transition-colors">{platform.name}</h2>
                  <p className="text-xs text-[#667085] dark:text-white/40 leading-relaxed">{platform.description}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#9aa4b2] dark:text-white/25 group-hover:text-[#10B981] transition-colors">
                  Open
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M6.5 2.5 10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#eef1f6] dark:border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">Tamawal Pay</p>
          <p className="text-xs text-[#9aa4b2] dark:text-white/25">{new Date().getFullYear()}</p>
        </div>
      </footer>

    </div>
  );
}
