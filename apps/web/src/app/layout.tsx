import '../globals.css';
import { GlobalSettingsProvider } from '@/contexts/GlobalSettingsContext';

export const metadata = {
  title: 'Tamawal',
  description: 'Tamawal Design Hub',
  icons: { icon: 'https://www.tamawal.sa/favicon.ico' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Arabic:wght@300;400;500;600;700&family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@1&family=Alexandria:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;600;700&family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <GlobalSettingsProvider>{children}</GlobalSettingsProvider>
      </body>
    </html>
  )
}
