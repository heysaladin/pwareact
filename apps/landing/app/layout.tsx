import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tamweel — Digital Finance Brokerage",
  description: "Sharia-compliant financing options tailored to your needs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var s = localStorage.getItem('theme');
            var dark = s === 'dark' || (!s && window.matchMedia('(prefers-color-scheme: dark)').matches);
            if (dark) document.documentElement.classList.add('dark');
          } catch(e) {}
        `}} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <script dangerouslySetInnerHTML={{ __html: `
          document.getElementById('theme-toggle').addEventListener('click', function() {
            var dark = document.documentElement.classList.toggle('dark');
            try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch(e) {}
          });
        `}} />
      </body>
    </html>
  );
}
