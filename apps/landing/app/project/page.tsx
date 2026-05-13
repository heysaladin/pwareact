export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-[rgb(0_99_245)]">Tamweel</a>
          <a href="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[rgb(0_99_245)] transition-colors">
            ← Back
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-20">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-medium text-[rgb(0_99_245)]">Built by Hyperfantasy</p>
          <h1 className="text-4xl font-bold">Our Products</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Two platforms powering the Tamweel experience — a mobile app for customers and a dashboard for operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mobile */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[rgb(230_240_255)] dark:bg-[rgb(10_25_60)] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(0,99,245)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01"/>
              </svg>
            </div>
            <h2 className="text-xl font-bold">Mobile App</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              The customer-facing iOS and Android application. Users can browse financing options, submit applications, compare offers, and track their status — all from their phone.
            </p>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              {["Financing comparison", "One-tap application", "Real-time status tracking", "Sharia-compliant products"].map(f => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[rgb(0_99_245)] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[rgb(230_240_255)] dark:bg-[rgb(10_25_60)] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(0,99,245)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
            </div>
            <h2 className="text-xl font-bold">Dashboard</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              The internal operations platform for the Tamweel team. Manage applications, monitor partner activity, review credit decisions, and oversee the full financing pipeline.
            </p>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              {["Application management", "Partner oversight", "Analytics & reporting", "Team collaboration"].map(f => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[rgb(0_99_245)] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer credit */}
        <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-16">
          Designed and built by{" "}
          <span className="font-semibold text-gray-500 dark:text-gray-500">Hyperfantasy</span>
        </p>
      </main>
    </div>
  );
}
