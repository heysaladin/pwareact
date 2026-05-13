import translations, { type Lang } from "../i18n";

export default function Landing({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const isRtl = lang === "ar";
  const otherLangUrl = lang === "ar" ? "/en" : "/";

  const navLinks = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.partner, href: "#partner" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      lang={lang}
      className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
    >
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-[rgb(0_99_245)]">
            {lang === "ar" ? "تمويل" : "Tamweel"}
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-[rgb(0_99_245)] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              id="theme-toggle"
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-gray-600 dark:text-gray-300"
            >
              {/* Sun — shown in dark mode */}
              <svg id="icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
              {/* Moon — shown in light mode */}
              <svg id="icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </button>
            <a
              href={otherLangUrl}
              className="text-sm font-semibold border border-gray-200 dark:border-gray-700 dark:text-gray-200 rounded-lg px-3 py-1.5 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </a>
            <a
              href="#download"
              className="bg-[rgb(0_99_245)] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[rgb(0_80_200)] transition-colors"
            >
              {t.nav.download}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-4 text-center bg-gradient-to-br from-[rgb(230_240_255)] to-white dark:from-[rgb(10_25_60)] dark:to-gray-950">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-[rgb(255_221_51)] text-black">
            {t.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {t.hero.title}{" "}
            <span className="text-[rgb(0_99_245)]">{t.hero.brand}</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">{t.hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#how" className="bg-[rgb(0_99_245)] text-white text-base font-medium px-6 py-3 rounded-lg hover:bg-[rgb(0_80_200)] transition-colors">
              {t.hero.cta1}
            </a>
            <a href="#services" className="bg-[rgb(255_221_51)] text-black text-base font-medium px-6 py-3 rounded-lg hover:bg-[rgb(220_188_30)] transition-colors">
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partner" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold">{t.partners.title}</h2>
          <p className="text-gray-500 dark:text-gray-400">{t.partners.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {["Quara", "Alraedah", "Nayifat", "Osoul"].map((name) => (
              <span key={name} className="text-gray-500 dark:text-gray-400 font-semibold text-sm border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">{t.how.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.how.steps.map((step) => (
              <div key={step.number} className="text-center bg-[rgb(230_240_255)] dark:bg-[rgb(10_25_60)] rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-[rgb(0_99_245)] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="services" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">{t.products.title}</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12">{t.products.subtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.products.items.map((p) => (
              <div key={p.title} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="font-semibold text-sm text-[rgb(0_99_245)] mb-4">{p.limit}</p>
                {p.soon ? (
                  <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    {t.products.soon}
                  </span>
                ) : (
                  <a href="#" className="block w-full bg-[rgb(0_99_245)] text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-[rgb(0_80_200)] transition-colors">
                    {t.products.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download */}
      <section id="download" className="py-20 px-4 text-center bg-[rgb(0_99_245)]">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">{t.download.title}</h2>
          <p className="text-lg text-[rgb(180_210_255)]">{t.download.subtitle}</p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto" action="#">
            <input
              type="email"
              placeholder={t.download.placeholder}
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[rgb(255_221_51)] text-black font-semibold px-6 py-2 rounded-lg text-sm hover:bg-[rgb(220_188_30)] transition-colors"
            >
              {t.download.cta}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.items.map((faq) => (
              <details key={faq.q} className="group border border-gray-200 dark:border-gray-700 rounded-xl px-5 py-4 cursor-pointer">
                <summary className="flex justify-between items-center font-medium text-gray-800 dark:text-gray-200 list-none select-none">
                  {faq.q}
                  <svg className="w-4 h-4 text-gray-400 shrink-0 mx-3 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 dark:bg-black text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-[rgb(255_221_51)]">
              {lang === "ar" ? "تمويل" : "Tamweel"}
            </h3>
            <p className="text-sm leading-relaxed">{t.footer.description}</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-semibold">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              {t.footer.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 text-sm">
            <h4 className="text-white font-semibold">{t.footer.contact}</h4>
            <p>{t.footer.email}</p>
            <p>{t.footer.phone}</p>
            <p>{t.footer.hours}</p>
            <p className="text-xs text-gray-600 pt-3 border-t border-gray-800 leading-relaxed">
              {t.footer.regulatory}
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
          <span>
            Powered by{" "}
            <a href="/project" className="text-gray-400 hover:text-white transition-colors font-medium">
              Hyperfantasy
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
